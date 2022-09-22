---
title: PaymentAddress
slug: Web/API/PaymentAddress
---

{{SeeCompatTable}}{{APIRef("Payment Request API")}}

The **`PaymentAddress`** interface of the [Payment Request API](/zh-CN/docs/Web/API/Payment_Request_API) stores address information.

## Properties

- {{domxref('PaymentAddress.country')}} {{readonlyinline}}
  - : The Common Locale Data Repository region code. For example, US, GB, CN, etc.
- {{domxref('PaymentAddress.addressLine')}} {{readonlyinline}}
  - : An array of strings describing the address. The exact size and content varies by country or location and can include, for example, a street name, house number, apartment number, rural delivery route, descriptive instructions, or post office box number.
- {{domxref('PaymentAddress.region')}} {{readonlyinline}}
  - : The top level administrative subdivision of the country, for example, a state, province, oblast, or prefecture.
- {{domxref('PaymentAddress.city')}} {{readonlyinline}}
  - : The city or town portion of the address.
- {{domxref('PaymentAddress.dependentLocality')}} {{readonlyinline}}
  - : The dependent locality or sublocality within a city, for example, a neighborhood, borough, district, or UK dependent locality.
- {{domxref('PaymentAddress.postalCode')}} {{readonlyinline}}
  - : A code used by a jurisdiction for mail routing, for example, the ZIP code in the United States or the PIN code in India.
- {{domxref('PaymentAddress.sortingCode')}} {{readonlyinline}}
  - : A postal sorting code such as is used in France.
- {{domxref('PaymentAddress.languageCode')}} {{readonlyinline}}
  - : The BCP-47 language code for the address, used to determine the field separators and the order of fields when formatting the address for display.
- {{domxref('PaymentAddress.organization')}} {{readonlyinline}}
  - : The name of the organization, firm, company, or institution at the payment address.
- {{domxref('PaymentAddress.recipient')}} {{readonlyinline}}
  - : The name of the recipient, purchaser, or contact person at the payment address.
- {{domxref('PaymentAddress.careOf')}} {{readonlyinline}} {{Deprecated_Inline}}
  - : The name of an intermediary party or entity responsible for transferring packages between the postal service and the recipient.
- {{domxref('PaymentAddress.phone')}} {{readonlyinline}}
  - : The telephone number of the recipient or contact person.

## Methods

None.

## Browser Compatibility

{{Compat}}
