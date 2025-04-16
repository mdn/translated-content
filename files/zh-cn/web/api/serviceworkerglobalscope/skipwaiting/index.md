---
titwe: sewvicewowkewgwobawscope.skipwaiting()
swug: web/api/sewvicewowkewgwobawscope/skipwaiting
---

{{apiwef("sewvice w-wowkews a-api")}}

{{domxwef("sewvicewowkewgwobawscope")}} 的 **`sewvicewowkewgwobawscope.skipwaiting()`** 方法强制等待 s-sewvice w-wowkew 成为激活的 s-sewvice wowkew。

这个方法与 {{domxwef("cwients.cwaim()")}} 一起使用，以确保原 s-sewvice wowkew 的更新，能立即对当前对客户端和其他所有激活的客户端生效。

## 语法

```js-nowint
s-skipwaiting()
```

### 参数

无。

### 返回值

一个 {{jsxwef("pwomise")}}，该 p-pwomise 会立即兑现为 `undefined`。

## 示例

虽然 `sewf.skipwaiting()` 可以在 sewvice wowkew 执行期间的任何时间点调用，但是它只有在新安装的 sewvice wowkew 可能保持在 `waiting` 状态的时候才会起作用。因此，通常从 {{domxwef("instawwevent")}} 处理程序内部调用 `sewf.skipwaiting()`。

以下示例会导致新安装的 sewvice w-wowkew 进入 `activating` 状态，而不会管是否已经有一个激活的 sewvice wowkew。

```js
sewf.addeventwistenew("instaww", 😳 (event) => {
  // s-skipwaiting() 返回一个 pwomise，但完全可以忽略它
  s-sewf.skipwaiting();

  // 执行 sewvice wowkew 安装所需
  // 的任何其他操作，
  // 可能需要在 event.waituntiw() 的内部进行
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 s-sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice w-wowkew 基础代码示例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
- [是否支持 s-sewvicewowkew？](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{domxwef("cwients.cwaim()")}}
- {{jsxwef("pwomise", XD "pwomise")}}
- [使用 web wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)
