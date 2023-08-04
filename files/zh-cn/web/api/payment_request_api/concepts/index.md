---
title: 交易过程的基本概念
slug: Web/API/Payment_Request_API/Concepts
---

{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}

[交易请求 API](/zh-CN/docs/Web/API/Payment_Request_API)使在网站或应用上进行的交易变得更便捷。在这篇文档中，我们将了解此接口如何运作，以及各个组件的功能。

## 术语

在深入了解此 API 的工作方式前，你应该了解以下术语。

- 收款方（或商家）
  - : 商家可以是个人，也可以是一个组织。商家扮演的角色是在自己的网站或应用上通过支付请求 API 收款。
- 付款方
  - : 付款方可以是个人，也可以是一个组织。付款方扮演的角色是，在网站或应用上购买物品。支付流程要求付款方先自证身份，然后授权付款。
- 支付方式
  - : 付款的方式，例如信用卡或线上支付服务。
- 支付方式提供方
  - : 对某种特定支付方式提供技术支持的组织。例如，使用信用卡付钱时，信用卡交易处理就是一种支付方式提供方。
- 交易处理机
  - : 一段代码，作用是与付款方式提供方交互，进行交易处理。

某些交易处理机会用到**商家认证**。商家认证是指以某种方式认证商家的身份，可能的方式包括密码学机制（例如公钥）。认证成功后的商家得以和交易处理机进行交互。

## 支付方式识别码

交易处理机是通过**支付方式识别码**识别的。交易方式识别码是一个指向唯一交易处理机的字符串，它可以是一套已成标准的识别码，也可以是一个 URL。后者被交易处理服务同时用于两种用途：自证身份和处理交易。

### 标准化的交易方式识别码

目前注册在案的只有一套[标准化交易方式识别码](https://www.w3.org/TR/payment-method-id/#registry)。（未来可能会添加更多。）

- `基本卡（basic-card，输入一次银行卡信息后即可多次消费的支付方式）`
  - : ?根据基本卡规范进行交易处理。详细说明请参见{{domxref("BasicCardRequest")}}。**_此处应该有对基本卡规范和使用方法进行说明的文档。_**

### 基于 URL 的交易方式识别码

这种识别方式的具体使用将会极大程度地依赖不同服务各自的规范。比如，某种服务可能使用多个 URL 链接，不同 URL 的使用依赖于 API 的版本和通信方式等。

- `https://apple.com/apple-pay`
  - : 交易使用[Apple Pay](https://www.apple.com/apple-pay/)服务。目前，只有 Safari 浏览器支持这种交易方式。
- `https://google.com/pay`
  - : 交易使用[Google Pay](https://pay.google.com/). 目前，只有 Chrome 及 Chrome 内核的浏览器支持这种交易方式。

## 交易处理机的功能

{{Glossary("user agent", "用户代理")}}内部机制支持不同类型的交易。另外，你还可以调用[交易处理 API](https://w3c.github.io/payment-handler/)来支持更多相应的支付方式提供方（前提是你使用的浏览器支持这些 API 的使用）。不论使用哪种方式，交易处理机的功能都是如下几条：

1. **确保交易正确进行**。交易正确进行的条件取决于不同的支付类型和用户的支付请求；例如，如果用户选择了信用卡支付，而收款方并不支持这种方式，交易就无法正确进行。
2. **响应用户代理发起的对商家进行认证的请求（在处理机支持商家认证的前提下）**。详细说明请参考[商家认证](#商家认证)。
3. **验证用户提交的信息有资格发起一次有效交易**。这一步骤会创建并返回一个基于具体支付方式的对象，此对象包含处理交易所需要的信息。

## 商家认证

一些交易处理机包含**商家认证**步骤。商家认证是指，通过某种方式识别商家的身份，使用的方式通常是“密码学挑战”。没有成功通过认证的商家不被允许使用交易处理机。

具体的认证方式由交易处理机决定，也完全可以省去这种认证。最终，网站或应用唯一要做的就是就是获取商家的认证密钥并传输给 {{domxref("MerchantValidationEvent.complete", "complete()")}} 事件的方法。

```js
paymentRequest.onmerchantvalidation = function (event) {
  event.complete(fetchValidationData(event.validationURL));
};
```

在这个例子中，由`fetchValidationData()`方法加载由`validationURL`提供的认证信息。要注意到的是，这个方法必须由商家服务器转发，因为通常情况下，客户端不会主动访问用于认证的 URL。

然后，该数据（或用来解析该数据的{{jsxref("Promise")}}）被传送给交易处理机的`complete()`方法。交易处理机可以用该数据获取更多信息或是进行更多重的算法解析，以认证商家对处理机的使用权。

因此，注意到如下事实很重要：{{Glossary("user agent", "用户代理")}}永远不会发送 {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} 事件，除非用户代理自身装载了交易处理机。例如，Safari 浏览器本身即支持 Apple Pay，而 Apple Pay 的交易处理机可据此向客户端发送`merchantvalidation`、指示客户端获取服务器上的认证信息，并将其传送给交易处理机的 `complete()`，来为商品进行支付。

## 规范

{{Specifications}}

## 参见

- [支付请求 API](/zh-CN/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/zh-CN/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/zh-CN/docs/Web/API/Payment_Request_API/Concepts)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
