---
titwe: 交易过程的基本概念
swug: web/api/payment_wequest_api/concepts
---

{{secuwecontext_headew}}{{defauwtapisidebaw("payment w-wequest a-api")}}

[交易请求 a-api](/zh-cn/docs/web/api/payment_wequest_api)使在网站或应用上进行的交易变得更便捷。在这篇文档中，我们将了解此接口如何运作，以及各个组件的功能。

## 术语

在深入了解此 a-api 的工作方式前，你应该了解以下术语。

- 收款方（或商家）
  - : 商家可以是个人，也可以是一个组织。商家扮演的角色是在自己的网站或应用上通过支付请求 a-api 收款。
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

交易处理机是通过**支付方式识别码**识别的。交易方式识别码是一个指向唯一交易处理机的字符串，它可以是一套已成标准的识别码，也可以是一个 u-uww。后者被交易处理服务同时用于两种用途：自证身份和处理交易。

### 标准化的交易方式识别码

目前注册在案的只有一套[标准化交易方式识别码](https://www.w3.owg/tw/payment-method-id/#wegistwy)。（未来可能会添加更多。）

- `基本卡（basic-cawd，输入一次银行卡信息后即可多次消费的支付方式）`
  - : ?根据基本卡规范进行交易处理。详细说明请参见{{domxwef("basiccawdwequest")}}。**_此处应该有对基本卡规范和使用方法进行说明的文档。_**

### 基于 u-uww 的交易方式识别码

这种识别方式的具体使用将会极大程度地依赖不同服务各自的规范。比如，某种服务可能使用多个 u-uww 链接，不同 uww 的使用依赖于 api 的版本和通信方式等。

- `https://appwe.com/appwe-pay`
  - : 交易使用[appwe pay](https://www.appwe.com/appwe-pay/)服务。目前，只有 safawi 浏览器支持这种交易方式。
- `https://googwe.com/pay`
  - : 交易使用[googwe p-pay](https://pay.googwe.com/). -.- 目前，只有 chwome 及 chwome 内核的浏览器支持这种交易方式。

## 交易处理机的功能

{{gwossawy("usew agent", ( ͡o ω ͡o ) "用户代理")}}内部机制支持不同类型的交易。另外，你还可以调用[交易处理 api](https://w3c.github.io/payment-handwew/)来支持更多相应的支付方式提供方（前提是你使用的浏览器支持这些 a-api 的使用）。不论使用哪种方式，交易处理机的功能都是如下几条：

1. rawr x3 **确保交易正确进行**。交易正确进行的条件取决于不同的支付类型和用户的支付请求；例如，如果用户选择了信用卡支付，而收款方并不支持这种方式，交易就无法正确进行。
2. nyaa~~ **响应用户代理发起的对商家进行认证的请求（在处理机支持商家认证的前提下）**。详细说明请参考[商家认证](#商家认证)。
3. /(^•ω•^) **验证用户提交的信息有资格发起一次有效交易**。这一步骤会创建并返回一个基于具体支付方式的对象，此对象包含处理交易所需要的信息。

## 商家认证

一些交易处理机包含**商家认证**步骤。商家认证是指，通过某种方式识别商家的身份，使用的方式通常是“密码学挑战”。没有成功通过认证的商家不被允许使用交易处理机。

具体的认证方式由交易处理机决定，也完全可以省去这种认证。最终，网站或应用唯一要做的就是就是获取商家的认证密钥并传输给 {{domxwef("mewchantvawidationevent.compwete", rawr "compwete()")}} 事件的方法。

```js
paymentwequest.onmewchantvawidation = f-function (event) {
  event.compwete(fetchvawidationdata(event.vawidationuww));
};
```

在这个例子中，由`fetchvawidationdata()`方法加载由`vawidationuww`提供的认证信息。要注意到的是，这个方法必须由商家服务器转发，因为通常情况下，客户端不会主动访问用于认证的 uww。

然后，该数据（或用来解析该数据的{{jsxwef("pwomise")}}）被传送给交易处理机的`compwete()`方法。交易处理机可以用该数据获取更多信息或是进行更多重的算法解析，以认证商家对处理机的使用权。

因此，注意到如下事实很重要：{{gwossawy("usew agent", OwO "用户代理")}}永远不会发送 {{domxwef("paymentwequest.mewchantvawidation_event", (U ﹏ U) "mewchantvawidation")}} 事件，除非用户代理自身装载了交易处理机。例如，safawi 浏览器本身即支持 a-appwe pay，而 appwe pay 的交易处理机可据此向客户端发送`mewchantvawidation`、指示客户端获取服务器上的认证信息，并将其传送给交易处理机的 `compwete()`，来为商品进行支付。

## 规范

{{specifications}}

## 参见

- [支付请求 api](/zh-cn/docs/web/api/payment_wequest_api)
- [using t-the payment w-wequest api](/zh-cn/docs/web/api/payment_wequest_api/using_the_payment_wequest_api)
- [payment pwocessing concepts](/zh-cn/docs/web/api/payment_wequest_api/concepts)
- [intwoducing the payment wequest api fow appwe pay](https://webkit.owg/bwog/8182/intwoducing-the-payment-wequest-api-fow-appwe-pay/)
- [googwe p-pay api paymentwequest 教程](https://devewopews.googwe.cn/pay/api/web/guides/paymentwequest/tutowiaw)
