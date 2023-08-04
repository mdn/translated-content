---
title: PaymentRequest
slug: Web/API/PaymentRequest
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

The [Payment Request API's](/ru/docs/Web/API/Payment_Request_API) **`PaymentRequest`** interface the primary access point into the API, and lets web content and apps accept payments from the end user on behalf of the operator of the site or the publisher of the app.

## Конструктор

- {{domxref('PaymentRequest.PaymentRequest()','PaymentRequest()')}} {{securecontext_inline}}
  - : Создаёт новый `PaymentRequest` объект.

## Свойства

- {{domxref('PaymentRequest.id')}} {{readonlyinline}}{{securecontext_inline}}
  - : Уникальный идентификатор для конкретного запроса `PaymentRequest`, который можно задать через `details.id`. Если ничего не задано, по умолчанию используется UUID.
- {{domxref('PaymentRequest.shippingAddress')}} {{readonlyinline}} {{securecontext_inline}}
  - : If requested via payment options, returns the shipping address chosen by the user for the purposes of calculating shipping. This property is only populated if the constructor is called with the `requestShipping` flag set to true. Additionally, in some browsers, the parts of the address will be redacted for privacy until the user indicates they are ready to complete the transaction (i.e., they hit "Pay").
- {{domxref('PaymentRequest.shippingOption')}} {{readonlyinline}} {{securecontext_inline}}
  - : Возвращает идентификатор выбранного варианта доставки. Это свойство заполняется только в том случае, если конструктор вызывается с флагом `requestShipping`, установленным в значение true.
- {{domxref('PaymentRequest.shippingType')}} {{readonlyinline}} {{securecontext_inline}}
  - : Returns the type of shipping used to fulfill the transaction. This will be one of `shipping`, `delivery`, `pickup`, or `null` if a value was not provided in the constructor.

<!---->

## Методы

- {{domxref('PaymentRequest.canMakePayment()')}} {{securecontext_inline}}
  - : Indicates whether the `PaymentRequest` object can make a payment before calling `show()`.

<!---->

- {{domxref('PaymentRequest.show()')}} {{securecontext_inline}}
  - : Causes the user agent to begin the user interaction for the payment request.
- {{domxref('PaymentRequest.abort()')}} {{securecontext_inline}}
  - : Causes the user agent to end the payment request and to remove any user interface that might be shown.

## События

- {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} {{securecontext_inline}}
  - : With some payment handlers (e.g., Apple Pay), this event handler is called to handle the {{event("merchantvalidation")}} event, which is dispatched when the user agent requires that the merchant validate that the merchant or vendor requesting payment is legitimate.
    Also available using the {{domxref("PaymentRequest.onmerchantvalidation", "onmerchantvalidation")}} event handler property.
- {{domxref("PaymentRequest.paymentmethodchange_event", "paymentmethodchange")}} {{securecontext_inline}}
  - : With some payment handlers (e.g., Apple Pay), dispatched whenever the user changes payment instrument, like switching from a credit card to a debit card.
    Also available using the {{domxref("PaymentRequest.onpaymentmethodchange", "onpaymentmethodchange")}} event handler property.
- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}} {{securecontext_inline}}
  - : Срабатывает каждый раз, когда пользователь меняет вариант доставки.
    Также доступно с использованием HTML атрибута {{domxref("PaymentRequest.onshippingaddresschange", "onshippingaddresschange")}}.
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}} {{securecontext_inline}}
  - : Срабатывает каждый раз, когда пользователь меняет вариант доставки.
    Также доступно с использованием HTML атрибута {{domxref("PaymentRequest.onshippingoptionchange", "onshippingoptionchange")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
