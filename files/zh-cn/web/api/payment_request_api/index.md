---
title: 支付请求接口
slug: Web/API/Payment_Request_API
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

支付请求 API 为商家和支付者提供了统一的用户体验。它并非提供一种新的支付方式，而是让用户可以在原有的支付方式中进行选择，并使商家可以获悉用户的支付情况。

## 支付请求的概念和使用

在网上购物时，使许多用户中止购物车结算的原因都可以被归结为填写支付信息表单时的步骤繁多导致的费时费力。**支付请求 API**正是被用以减少支付步骤，逐步彻底消除表单的填写。它的目的是简化结算流程，而实现此目的的方式是通过保存用户相关信息并传送给商家。在理想的情况下，用户将不需要填写 HTML 表单。

使用支付请求 API 中“保存卡信息并自动扣款”（使用银行卡支付时）的优点：

- **快捷的购买体验**：用户在浏览器上只需输入一次银行卡信息，之后便可一键对网络上提供的商品和服务进行支付。即使在不同的站点购物，他们也不需要反复填写相同的支付信息。
- **跨站点的统一用户体验（仅指支持此 API 的站点）**：浏览器统一控制支付页面，使定制化内容得以实现。可以定制的内容包括语言的本地化。
- **无障碍体验**：支付页面中的表单元素由浏览器控制，使得键盘输入和屏幕朗读在跨站点时也能以统一的方式工作，且不需要开发者的额外开发。浏览器也可以对支付页面中的字体大小、颜色对比度进行同一调节，使用户在支付过程中获得更加舒适的体验。
- **认证管理**：用户可以直接通过浏览器管理自己的信用卡和收件地址，且浏览器可以在不同设备间同步这些“认证信息”。这样，用户就能在购物时灵活地在电脑和移动设备间来回切换。
- **统一的异常信息处理**：浏览器可以检查信用卡卡号的有效性，并在卡片已经（或即将）过期时告知用户。浏览器可以通过用户过去的使用习惯和商家的支付规则（例如，“我们只支持 Visa 或 Mastercard”）自动对此次交易使用卡片的选择提出建议。用户还可以自行设置默认/最偏好的卡片。

当用户在页面上进行操作发起一次支付，比如点击“购买”按钮时，网页会相应地创建一个{{domxref("PaymentRequest")}}对象。`PaymentRequest`对象允许网页与用户代理交互，传送用户输入的用以交易的信息。

你可以在[Using the Payment Request API](/zh-CN/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)中查看完整指南。

> [!NOTE]
> 此 API 只有在设置了[`allowpaymentrequest`](/zh-CN/docs/Web/HTML/Element/iframe#allowpaymentrequest)属性时才支持{{htmlelement("iframe")}}元素的跨域使用。

## 接口

- {{domxref('PaymentAddress')}}
  - : 一个包含地址信息的对象；例如，可以包含账单地址和收货地址。
- {{domxref('PaymentRequest')}}
  - : 一个提供了创建和管理 {{Glossary("user agent", "user agent's")}}支付接口的对象。
- {{domxref('PaymentRequestEvent')}}
  - : 当{{domxref("PaymentRequest")}}发生时，被传送给支付回调函数的事件。
- {{domxref('PaymentRequestUpdateEvent')}}
  - : 当用户进行操作时，使网页可以更新相应的支付信息的事件。
- {{domxref('PaymentMethodChangeEvent')}}
  - : 代表支付凭证改变（例如，用户将支付方式从信用卡改为了借记卡）的事件。
- {{domxref('PaymentResponse')}}
  - : 一个对象，当用户选择了一种支付方式并同意发起交易请求后被返回。
- {{domxref('MerchantValidationEvent')}}
  - : 代表浏览器要求商家（网站）证实自身被允许使用某种特定的支付回调函数（例如，注册了对 Apply Pay 支付方式的使用）的事件。

## 词典

- {{domxref("AddressErrors")}}
  - : 一个由字符串组成的词典，包含用以描述任何{{domxref("PaymentAddress")}}条目中可能出现的报错的相应描述。
- {{domxref("PayerErrors")}}
  - : 一个由字符串组成的词典，包含了{{domxref("PaymentResponse")}}中出现的有关邮件地址、电话号码及姓名的报错的相应描述。
- {{domxref("PaymentDetailsUpdate")}}
  - : 一个对象，用于描述当服务器在发起支付请求后且在用户与之交互前，需要更新支付信息的事件。

### “保存卡信息并自动扣款”规范的相关词典

- {{domxref("BasicCardChangeDetails")}}
  - : 一个对象，提供了当用户更改支付信息时，{{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} 中传送通过 {{domxref('PaymentMethodChangeEvent', 'paymentmethodchange')}} 事件传送给 {{domxref("PaymentRequest")}} 的*删节的*地址信息。
- {{domxref("BasicCardErrors")}}
  - : 一个对象，提供了{{domxref("BasicCardResponse")}}中无效信息的相关错误提示。错误发生时，该对象被传送给{{domxref("PaymentRequest")}}，作为{{domxref("PaymentValidationErrors")}}对象中{{domxref("PaymentValidationErrors.paymentMethod", "paymentMethod")}}属性的值。
- {{domxref('BasicCardRequest')}}
  - : 定义了支付请求信息（例如“卡类型”）对象的结构。
- {{domxref('BasicCardResponse')}}
  - : 定义了支付请求响应（例如被使用的银行卡的“卡号”、“有效期”和“账单地址”）对象的结构。

## 规范

{{Specifications}}

## 浏览器兼容性

### 支付请求接口

{{Compat}}

## 相关文档

- [Using the Payment Request API](/zh-CN/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/zh-CN/docs/Web/API/Payment_Request_API/Concepts)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest 教程](https://developers.google.cn/pay/api/web/guides/paymentrequest/tutorial)
- [W3C Payment Request API FAQ](https://github.com/w3c/payment-request-info/wiki/FAQ)
