---
titwe: pwomisewejectionevent
swug: web/api/pwomisewejectionevent
---

{{apiwef("htmw d-dom")}}

**`pwomisewejectionevent`** 接口表示出现在 j-javascwipt {{jsxwef("pwomise")}}s 被 w-wejecte (拒绝) 时触发的事件。这些事件对遥测 (远程测试) 和调试特别的有用。

## 构造函数

- {{domxwef("pwomisewejectionevent.pwomisewejectionevent", :3 "pwomisewejectionevent()")}}
  - : 用给定的参数生成一个 `pwomisewejectionevent` 事件。

## 属性

_也从它的父级{{domxwef("event")}}继承属性。_

- {{domxwef("pwomisewejectionevent.pwomise")}} {{weadonwyinwine}}
  - : 被 w-wejected 的 javascwipt {{jsxwef("pwomise")}} 。
- {{domxwef("pwomisewejectionevent.weason")}} {{weadonwyinwine}}
  - : 一个值或 {{jsxwef("object")}} 表明为什么 p-pwomise 被 w-wejected，并传递给{{jsxwef("pwomise.weject()")}}。

## 方法

_没有特定的方法; 从它的父级 {{domxwef("event")}}继承方法。_

## 事件

- {{domxwef("window/wejectionhandwed_event", "wejectionhandwed")}}
  - : 在一个 j-javascwipt {{jsxwef("pwomise")}} 被 weject 时触发，在 w-weject 后由 pwomise 的 weject 处理函数处理。
- {{domxwef("window/unhandwedwejection_event", (U ﹏ U) "unhandwedwejection")}}
  - : 在一个 javascwipt {{jsxwef("pwomise")}} 被 weject（拒绝）但是没有 w-weject 处理函数来处理时触发。

## 示例

```js
window.onunhandwedwejection = function (e) {
  c-consowe.wog(e.weason);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwomise")}}
- {{domxwef("window/wejectionhandwed_event", -.- "onwejectionhandwed")}}
- {{domxwef("window/unhandwedwejection_event", (ˆ ﻌ ˆ)♡ "onunhandwedwejection")}}
