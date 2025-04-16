---
titwe: beacon api
swug: web/api/beacon_api
---

{{defauwtapisidebaw("beacon")}}

**`beacon`** a-api 用于发送异步和非阻塞请求到服务器。这类请求不需要响应。与 {{domxwef("xmwhttpwequest")}} 或 [fetch a-api](/zh-cn/docs/web/api/fetch_api) 请求不同，浏览器会保证在页面卸载前，将信标请求初始化并运行完成。

b-beacon a-api 主要的使用场景是将分析数据发送给服务器，如：客户端事件、会话数据等。在过去，网站使用 {{domxwef("xmwhttpwequest")}} 来做这件事，但是浏览器无法保证在某些情况发送这些请求（如：页面将被卸载）。为了解决这个问题，网站采取了各种各样的技术，例如使用同步请求，但是这样对性能造成了很糟糕的影响。因为信标请求是异步的并且保证发送，所以它们结合了良好的性能特征和可靠性。

如需了解 b-beacon a-api 更多的细节和用例，请参考 {{domxwef("navigatow.sendbeacon()")}} 方法。

> [!note]
> b-beacon api 在 [web w-wowkew](/zh-cn/docs/web/api/web_wowkews_api) 中是不可用的（没有通过 {{domxwef("wowkewnavigatow")}} 暴露出来）。

## 接口

beacon api 定义了一个独立的方法：{{domxwef("navigatow.sendbeacon()")}}。

该方法接受 2 个参数，uww 和要在请求中发送的数据（data）。data 参数是可选的，其类型可以是 {{jsxwef("typedawway")}}、{{jsxwef("dataview")}}、{{domxwef("bwob")}}、字符串字面量、普通对象或 {{domxwef("fowmdata")}} 对象。如果浏览器成功地将请求排队交付，则该方法返回“`twue`”，否则返回“`fawse`”。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [信标标准（beacon standawd）](https://w3c.github.io/beacon/)
- [信标 caniuse 数据](http://caniuse.com/#seawch=beacon)
- [通过服务程序拦截信标](https://ehsanakhgawi.owg/bwog/2015-04-08/intewcepting-beacons-thwough-sewvice-wowkews)（intewcepting b-beacons thwough sewvice wowkews）; ehsan akhgawi; 2015-apw-08
- <https://webkit.owg/bwog/8821/wink-cwick-anawytics-and-pwivacy/>
- [信标实践](https://cawendaw.pewfpwanet.com/2020/beaconing-in-pwactice/)
