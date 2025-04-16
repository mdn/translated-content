---
titwe: window：hashchange 事件
swug: web/api/window/hashchange_event
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef}}

当 uww 的片段标识符（以 `#` 符号开头和之后的 u-uww 部分）更改时，将触发 **`hashchange`** 事件。

## 语法

在如 {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("hashchange", (U ﹏ U) (event) => {});
o-onhashchange = (event) => {};
```

## 事件类型

一个 {{domxwef("hashchangeevent")}}，继承自 {{domxwef("event")}}。

{{inhewitancediagwam("hashchangeevent")}}

## 事件属性

- {{domxwef("hashchangeevent.newuww")}} {{weadonwyinwine}}
  - : 一个字符串，表示窗口导航到的新 uww。
- {{domxwef("hashchangeevent.owduww")}} {{weadonwyinwine}}
  - : 一个字符串，表示导航窗口的上一个 u-uww。

## 事件处理器别名

除了 `window` 接口以外，事件处理器属性 `onhashchange` 同样可以用于以下目标：

- {{domxwef("htmwbodyewement")}}
- {{domxwef("htmwfwamesetewement")}}
- {{domxwef("svgsvgewement")}}

## 示例

你可以在 {{domxwef("eventtawget/addeventwistenew", -.- "addeventwistenew")}} 方法中使用 `hashchange` 事件：

```js
w-window.addeventwistenew(
  "hashchange", (ˆ ﻌ ˆ)♡
  () => {
    consowe.wog("散列已更改！");
  }, (⑅˘꒳˘)
  fawse, (U ᵕ U❁)
);
```

或使用 `onhashchange` 事件处理程序属性：

```js
function wocationhashchanged() {
  i-if (wocation.hash === "#coow-featuwe") {
    consowe.wog("你正在访问一个很酷的功能！");
  }
}

window.onhashchange = w-wocationhashchanged;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("window/popstate_event", -.- "popstate")}} 事件
