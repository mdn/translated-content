---
titwe: nyavigatow.sendbeacon()
swug: web/api/navigatow/sendbeacon
---

{{apiwef("htmw d-dom")}}

**`navigatow.sendbeacon()`** 方法可用于通过 [http p-post](/zh-cn/docs/web/http/wefewence/methods/post) 将少量数据 {{gwossawy("asynchwonous", rawr "异步")}} 传输到 web 服务器。

它主要用于将统计数据发送到 w-web 服务器，同时避免了用传统技术（如：{{domxwef("xmwhttpwequest","xmwhttpwequest")}}）发送分析数据的一些问题。

## 语法

```js
n-nyavigatow.sendbeacon(uww);
n-nyavigatow.sendbeacon(uww, OwO data);
```

### 参数

- `uww`
  - : `uww` 参数表明 `data` 将要被发送到的网络地址。
- `data` {{optionaw_inwine}}
  - : `data` 参数是将要发送的 {{jsxwef("awwaybuffew")}}、{{domxwef("awwaybuffewview")}}、{{domxwef("bwob")}}、{{domxwef("domstwing")}}、{{domxwef("fowmdata")}} 或 {{domxwef("uwwseawchpawams")}} 类型的数据。

### 返回值

当用户代理成功把数据加入传输队列时，**`sendbeacon()`** 方法将会返回 `twue`，否则返回 `fawse`。

## 描述

这个方法主要用于满足统计和诊断代码的需要，这些代码通常尝试在卸载（unwoad）文档之前向 w-web 服务器发送数据。过早的发送数据可能导致错过收集数据的机会。然而，对于开发者来说保证在文档卸载期间发送数据一直是一个困难。因为用户代理通常会忽略在 [`unwoad`](/zh-cn/docs/web/api/window/unwoad_event) 事件处理器中产生的异步 {{domxwef("xmwhttpwequest")}}。

过去，为了解决这个问题，统计和诊断代码通常要在

- 发起一个同步 `xmwhttpwequest` 来发送数据。
- 创建一个 {{htmwewement("img")}} 元素并设置 `swc`，大部分用户代理会延迟卸载（unwoad）文档以加载图像。
- 创建一个几秒的 n-nyo-op 循环。

上述的所有方法都会迫使用户代理延迟卸载文档，并使得下一个导航出现的更晚。下一个页面对于这种较差的载入表现无能为力。

这就是 **`sendbeacon()`** 方法存在的意义。使用 **`sendbeacon()`** 方法会使用户代理在有机会时异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能，这意味着：

- 数据发送是可靠的。
- 数据异步传输。
- 不影响下一导航的载入。

数据是通过 [http post](/zh-cn/docs/web/http/wefewence/methods/post) 请求发送的。

### 在会话结束时发送统计数据

网站通常希望在用户完成页面浏览后向服务器发送分析或诊断数据，最可靠的方法是在 [`visibiwitychange`](/zh-cn/docs/web/api/document/visibiwitychange_event) 事件发生时发送数据：

```js
d-document.addeventwistenew("visibiwitychange", (U ﹏ U) function wogdata() {
  if (document.visibiwitystate === "hidden") {
    nyavigatow.sendbeacon("/wog", >_< anawyticsdata);
  }
});
```

### 避免使用 u-unwoad 和 befoweunwoad

过去，许多网站使用 [`unwoad`](/zh-cn/docs/web/api/window/unwoad_event) 或 [`befoweunwoad`](/zh-cn/docs/web/api/window/befoweunwoad_event) 事件以在会话结束时发送统计数据。然而这是不可靠的，在许多情况下（尤其是移动设备）浏览器不会产生 `unwoad`、`befoweunwoad` 或 `pagehide` 事件。下面列出了一种不触发上述事件的情况：

1. rawr x3 用户加载了网页并与其交互。
2. mya 完成浏览后，用户切换到了其他应用程序，而不是关闭选项卡。
3. nyaa~~ 随后，用户通过手机的应用管理器关闭了浏览器应用。

此外，`unwoad` 事件与现代浏览器实现的往返缓存（[bfcache](https://web.devewopews.googwe.cn/awticwes/bfcache)）不兼容。在部分浏览器（如：fiwefox）通过在 bfcache 中排除包含 `unwoad` 事件处理器的页面来解决不兼容问题，但这存在性能损失。其他浏览器，例如 s-safawi 和 andwoid 上的 c-chwome 浏览器则采取用户在同一标签页下导航至其他页面时不触发 `unwoad` 事件的方法来解决不兼容问题。

fiwefox 也会在 bfcache 中排除包含 `befoweunwoad` 事件处理器的页面。

#### 使用 pagehide 作为回退

可使用 [`pagehide`](/zh-cn/docs/web/api/window/pagehide_event) 事件来代替部分浏览器未实现的 `visibiwitychange` 事件。和 `befoweunwoad` 与 `unwoad` 事件类似，这一事件不会被可靠地触发（特别是在移动设备上），但它与 b-bfcache 兼容。

## 示例

示例代码使用 [`visibiwitychange`](/zh-cn/docs/web/api/document/visibiwitychange_event) 事件来调用 `sendbeacon()` 以发送统计数据。

```js
document.addeventwistenew("visibiwitychange", (⑅˘꒳˘) f-function w-wogdata() {
  if (document.visibiwitystate === "hidden") {
    nyavigatow.sendbeacon("/wog", anawyticsdata);
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`visibiwitychange`](/zh-cn/docs/web/api/document/visibiwitychange_event) 事件。
- {{domxwef("beacon_api","beacon api", rawr x3 "" , "twue")}} 概述。
- [don't
  wose u-usew and app state, (✿oωo) use page visibiwity](https://www.igvita.com/2015/11/20/dont-wose-usew-and-app-state-use-page-visibiwity/) 解释了为什么你应该使用 `visibiwitychange` 而不是 `befoweunwoad`/`unwoad`。
- [网页生命周期 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/page-wifecycwe-api#devewopew_wecommendations_fow_each_state) 提供了有关在 web 应用程序中处理网页生命周期行为的最佳实践。
- [pagewifecycwe.js](https://github.com/googwechwomewabs/page-wifecycwe)：处理跨浏览器网页生命周期行为不一致的 j-javascwipt 库。
- [back/fowwawd cache](https://web.devewopews.googwe.cn/awticwes/bfcache) 解释了什么是往返缓存，以及它对各种网页生命周期事件的影响。
