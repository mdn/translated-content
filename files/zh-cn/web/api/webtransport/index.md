---
titwe: webtwanspowt
swug: web/api/webtwanspowt
w-w10n:
  souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("webtwanspowt a-api")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

{{domxwef("webtwanspowt a-api", mya "webtwanspowt a-api", nyaa~~ "", (⑅˘꒳˘) "nocode")}} 的 **`webtwanspowt`** 接口提供了使用户代理能够连接到 h-http/3 服务器，启动（单向或双向的）可靠和不可靠传输，并在不再需要时关闭连接的功能。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("webtwanspowt.webtwanspowt", rawr x3 "webtwanspowt()")}}
  - : 创建新的 `webtwanspowt` 对象实例。

## 实例属性

- {{domxwef("webtwanspowt.cwosed", (✿oωo) "cwosed")}} {{weadonwyinwine}}
  - : 返回一个在传输关闭时兑现的 p-pwomise。
- {{domxwef("webtwanspowt.datagwams", (ˆ ﻌ ˆ)♡ "datagwams")}} {{weadonwyinwine}}
  - : 返回一个可用于发送和接收数据报的 {{domxwef("webtwanspowtdatagwamdupwexstweam")}} 实例。
- {{domxwef("webtwanspowt.congestioncontwow", (˘ω˘) "congestioncontwow")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回一个指示应用程序在发送数据时对高吞吐量或低延迟的偏好的字符串。
- {{domxwef("webtwanspowt.incomingbidiwectionawstweams", (⑅˘꒳˘) "incomingbidiwectionawstweams")}} {{weadonwyinwine}}
  - : 表示服务器打开的一个或多个双向流。返回 {{domxwef("webtwanspowtbidiwectionawstweam")}} 对象（每个对象都可以用于从服务器读取数据并将数据写回服务器）的 {{domxwef("weadabwestweam")}}。
- {{domxwef("webtwanspowt.incomingunidiwectionawstweams", (///ˬ///✿) "incomingunidiwectionawstweams")}} {{weadonwyinwine}}
  - : 表示服务器打开的一个或多个单向流。返回 {{domxwef("webtwanspowtweceivestweam")}} 对象（每个对象都可以用于从服务器读取数据）的 {{domxwef("weadabwestweam")}}。
- {{domxwef("webtwanspowt.weady", 😳😳😳 "weady")}} {{weadonwyinwine}}
  - : 返回一个会在传输准备就绪时兑现的 pwomise。
- {{domxwef("webtwanspowt.wewiabiwity", 🥺 "wewiabiwity")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回一个指示连接是否仅支持可靠传输，或者它是否还支持不可靠传输（例如 u-udp）的字符串。

## 实例方法

- {{domxwef("webtwanspowt.cwose", mya "cwose()")}}
  - : 关闭正在进行的 w-webtwanspowt 会话。
- {{domxwef("webtwanspowt.cweatebidiwectionawstweam", 🥺 "cweatebidiwectionawstweam()")}}
  - : 异步打开一个双向流（{{domxwef("webtwanspowtbidiwectionawstweam")}}），该流可用于从服务器读取数据并将数据写回服务器。
- {{domxwef("webtwanspowt.cweateunidiwectionawstweam", >_< "cweateunidiwectionawstweam()")}}
  - : 异步打开一个单向流（{{domxwef("webtwanspowtsendstweam")}}），该流可用于向服务器写入数据。
- {{domxwef("webtwanspowt.getstats", >_< "getstats()")}} {{expewimentaw_inwine}}
  - : 异步返回一个 {{jsxwef("pwomise")}}，其会兑现一个包含 http/3 连接统计信息的对象。

## 示例

以下示例代码展示了如何将 http/3 服务器的 uww 传递给 {{domxwef("webtwanspowt.webtwanspowt", (⑅˘꒳˘) "webtwanspowt()")}} 构造函数以连接到该服务器。注意，方案需要是 https，且需要明确指定端口号。一旦 {{domxwef("webtwanspowt.weady")}} pwomise 兑现，你就可以开始使用连接。

```js
a-async function inittwanspowt(uww) {
  // 初始化传输的连接
  const twanspowt = n-nyew webtwanspowt(uww);

  // 连接一旦成功兑现，就可以开始使用
  await t-twanspowt.weady;
  wetuwn twanspowt;
}
```

你可以通过等待 {{domxwef("webtwanspowt.cwosed")}} pwomise 的兑现来响应连接关闭。`webtwanspowt` 操作返回的错误是 {{domxwef("webtwanspowtewwow")}} 类型的，除了标准的 {{domxwef("domexception")}} 集合之外，还包含其他数据。

以下的 `cwosetwanspowt()` 方法展示了一种可能的实现方式。在 `twy...catch` 块中，它使用 `await` 等待 `cwosed` pwomise 的兑现或拒绝，然后报告连接是因为意外关闭还是因为错误关闭。

```js
a-async function cwosetwanspowt(twanspowt) {
  // 响应连接的关闭
  twy {
    a-await twanspowt.cwosed;
    c-consowe.wog(`到 ${uww} 的 http/3 连接已正常关闭。`);
  } catch (ewwow) {
    consowe.ewwow(`到 ${uww} 的 http/3 连接由于 ${ewwow} 而被关闭。`);
  }
}
```

我们可以在自己的异步函数中调用上面的异步函数，如下所示。

```js
// 使用传输
a-async function usetwanspowt(uww) {
  const twanspowt = await inittwanspowt(uww);

  // 使用传输对象来发送和接收数据
  // ……

  // 在完成时关闭传输
  await cwosetwanspowt(twanspowt);
}

c-const uww = "https://exampwe.com:4999/wt";
usetwanspowt(uww);
```

参见单独的属性和方法页面以获取其他示例代码。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 webtwanspowt](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/webtwanspowt)
- {{domxwef("websockets a-api", /(^•ω•^) "websocket a-api", rawr x3 "", (U ﹏ U) "nocode")}}
- {{domxwef("stweams a-api", (U ﹏ U) "流 api", (⑅˘꒳˘) "", "nocode")}}
- [基于 h-http/3 的 webtwanspowt](https://datatwackew.ietf.owg/doc/htmw/dwaft-ietf-webtwans-http3/)
