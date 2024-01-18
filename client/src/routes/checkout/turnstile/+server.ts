import type { RequestHandler } from "./$types";
import { error, json } from "@sveltejs/kit";
import medusa from "$lib/server/medusa";

export const GET: RequestHandler = async ({ locals }) => {
  
  console.log("Create payment session");
  let cart = await medusa.createPaymentSessions(locals);
  if (!cart.total) {
    throw error(400, { message: "Could not create payment sessions" });
  }  
  console.log(cart)
  console.log("select payment session: stripe")
  cart = await medusa.selectPaymentSession(locals, "stripe");
  console.log(cart)
  if (!cart.total) {
    throw error(400, { message: "Could not select payment provider" });
  }

  let shippingOptions = await medusa.getShippingOptions(locals);
  if (!shippingOptions) {
    throw error(400, { message: "Could not get shipping options" });
  }

  return json({ cart, shippingOptions });
};
