---
title: Payment Request API
slug: Web/API/Payment_Request_API
translation_of: Web/API/Payment_Request_API
---
{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

Payment Request API предоставляет постоянный UX для продавцов и покупателей. Это не новый способ оплаты, а возможность пользователя выбрать предпочтительный способ оплаты и предоставить продавцу эту информацию.

## Основы и использование Payment Request

Many problems related to online shopping-cart abandonment can be traced to checkout forms, which can be difficult and time consuming to fill out and often require multiple steps to complete. The **Payment Request API** is meant to reduce the number of steps needed to complete a payment online, potentially doing away with checkout forms. It aims to make the checkout process easier, by remembering a user's details, which are then passed along to a merchant hopefully without requiring a HTML form.

Advantages of using the Payment Request API with "basic-card" (card-based payments):

- **Fast purchase experience**: Users enter their details once into the browser and are then ready to pay for goods and services on the web. They no longer have to fill out the same details repeatedly across different sites.
- **Consistent experience on every site (that supports the API):** As the payment sheet is controlled by the browser, it can tailor the experience to the user. This can include localizing the UI into the user's preferred language.
- **Accessibility**: As the browser controls the input elements of the payment sheet, it can assure consistent keyboard and screen reader accessibility on every website without developers needing to do anything. A browser could also adjust the font size or color contrast of the payment sheet, making it more comfortable for the user to make a payment.
- **Credentials management**: Users can manage their credit cards and shipping addresses directly in the browser. A browser can also sync these "credentials" across devices, making it easy for users to jump from desktop to mobile and back again when buying things.
- **Consistent error handling:** The browser can check the validity of card numbers, and can tell the user if a card has expired (or is about to expire). The browser can automatically suggest which card to use based on past usage patterns or restrictions from the merchant (e.g, "we only accept Visa or Mastercard"), or allow the user to say which is their default/favorite card.

To request a payment, a web page creates a {{domxref("PaymentRequest")}} object in response to a user action that initiates a payment, such as clicking a "Purchase" button. The `PaymentRequest` allows the web page to exchange information with the user agent while the user provides input to complete the transaction.

You can find a complete guide in [Using the Payment Request API](/ru/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API).

> **Примечание:** The API is available inside cross-origin {{htmlelement("iframe")}} elements only if they have had the [`allowpaymentrequest`](/ru/docs/Web/HTML/Element/iframe#allowpaymentrequest) attribute set on them.

## Interfaces

- {{domxref('PaymentAddress')}}
  - : An object that contains address information; used for billing and shipping addresses, for example.
- {{domxref('PaymentRequest')}}
  - : An object that provides the API for creating and managing the {{Glossary("user agent", "user agent's")}} payment interface.
- {{domxref('PaymentRequestEvent')}}
  - : An event delivered to a payment handler when a {{domxref("PaymentRequest")}} is made.
- {{domxref('PaymentRequestUpdateEvent')}}
  - : Enables the web page to update the details of the payment request in response to a user action.
- {{domxref('PaymentMethodChangeEvent')}}
  - : Represents the user changing payment instrument (e.g., switching from a credit card to debit card).
- {{domxref('PaymentResponse')}}
  - : An object returned after the user selects a payment method and approves a payment request.
- {{domxref('MerchantValidationEvent')}}
  - : Represents the browser requiring the merchant (website) to validate themselves as allowed to use a particular payment handler (e.g., registered as allowed to use Apple Pay).

<!---->

## Dictionaries

- {{domxref("AddressErrors")}}
  - : A dictionary containing strings providing descriptive explanations of any errors in any {{domxref("PaymentAddress")}} entries which have errors.
- {{domxref("PayerErrors")}}
  - : A dictionary containing strings providing descriptive explanations of any errors in related to {{domxref("PaymentResponse")}}'s email, phone, and name attributes.
- {{domxref("PaymentDetailsUpdate")}}
  - : An object describing changes that need to be made to the payment details in the event that the server needs to update information following the instantiation of the payment interface but before the user begins to interact with it.

### Related dictionaries for the Basic Card specification

- {{domxref("BasicCardChangeDetails")}}
  - : An object providing _redacted_ address information that is provided as the {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} on the {{event("paymentmethodchange")}} event sent to the {{domxref("PaymentRequest")}} when the user changes payment information.
- {{domxref("BasicCardErrors")}}
  - : An object providing any error messages associated with the fields in the {{domxref("BasicCardResponse")}} object that are not valid. This is used as the value of the {{domxref("PaymentValidationErrors.paymentMethod", "paymentMethod")}} property on the {{domxref("PaymentValidationErrors")}} object sent to the {{domxref("PaymentRequest")}} when an error occurs.
- {{domxref('BasicCardRequest')}}
  - : Defines an object structure for containing payment request details such as card type.
- {{domxref('BasicCardResponse')}}
  - : Defines an object structure for payment response details such as the number/expiry date of the card used to make the payment, and the billing address.

## Specifications

| Specification                                            | Status                                               | Comment                                                                                                                                                       |
| -------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Payment')}}                         | {{Spec2('Payment')}}                         | Initial definition.                                                                                                                                           |
| {{SpecName('Basic Card Payment')}}             | {{Spec2('Basic Card Payment')}}             | Defines {{domxref("BasicCardRequest")}} and {{domxref("BasicCardResponse")}}, among other things needed for handling credit card payment |
| {{SpecName('Payment Method Identifiers')}} | {{Spec2('Payment Method Identifiers')}} | Defines payment method identifiers and how they are validated, and, where applicable, minted and formally registered with the W3C.                            |

## Browser compatibility

### PaymentRequest interface

{{Compat("api.PaymentRequest", 0)}}

## See also

- [Using the Payment Request API](/ru/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/ru/docs/Web/API/Payment_Request_API/Concepts)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
- [W3C Payment Request API FAQ](https://github.com/w3c/payment-request-info/wiki/FAQ)
- Feature Policy directive {{httpheader("Feature-Policy/payment", "payment")}}
