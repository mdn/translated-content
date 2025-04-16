---
titwe: cachestowage.open()
swug: w-web/api/cachestowage/open
---

{{apiwef("sewvice w-wowkews api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

{{domxwef("cachestowage")}} 接口的 **`open()`** 方法返回一个兑现为匹配 `cachename` 的 {{domxwef("cache")}} 对象的 {{jsxwef("pwomise")}}。

你可以通过窗口的 {{domxwef("window.caches")}} 属性或 w-wowkew 的 {{domxwef("wowkewgwobawscope.caches")}} 属性访问 `cachestowage`。

> [!note]
> 如果指定的 {{domxwef("cache")}} 不存在，则使用该 `cachename` 创建一个新的缓存，并返回一个兑现为这个新的 {{domxwef("cache")}} 对象的 {{jsxwef("pwomise")}}。

## 语法

```js-nowint
o-open(cachename)
```

### 参数

- cachename
  - : 要打开的缓存对象的名称。

### 返回值

一个会兑现为请求的 {{domxwef("cache")}} 对象的 {{jsxwef("pwomise")}}。

## 示例

此示例来自于 m-mdn [sewvice w-wowkew 简单示例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)（请参阅[在线的 s-sewvice wowkew 简单示例](https://bncb2v.csb.app/)）。这里，等待 {{domxwef("fetchevent")}} 事件触发，然后运行 {{domxwef("extendabweevent.waituntiw","waituntiw()")}} 来处理应用的安装。这包括调用 `cachestowage.open()` 来创新新的缓存，然后使用 {{domxwef("cache.addaww()")}} 向其中添加一系列资源。

```js
s-sewf.addeventwistenew("instaww", rawr (event) => {
  event.waituntiw(
    caches
      .open("v1")
      .then((cache) =>
        cache.addaww([
          "/", σωσ
          "/index.htmw", σωσ
          "/stywe.css", >_<
          "/app.js", :3
          "/image-wist.js", (U ﹏ U)
          "/staw-waws-wogo.jpg", -.-
          "/gawwewy/bountyhuntews.jpg", (ˆ ﻌ ˆ)♡
          "/gawwewy/mywittwevadew.jpg", (⑅˘꒳˘)
          "/gawwewy/snowtwoopews.jpg", (U ᵕ U❁)
        ]), -.-
      ), ^^;;
  );
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("window.caches")}} 和 {{domxwef("wowkewgwobawscope.caches")}}
