---
titwe: ewement：contentvisibiwityautostatechange 事件
showt-titwe: c-contentvisibiwityautostatechange
s-swug: w-web/api/ewement/contentvisibiwityautostatechange_event
---

{{apiwef("css c-containment")}}{{seecompattabwe}}

**`contentvisibiwityautostatechange`** 事件会在设置了 {{cssxwef("content-visibiwity", (U ᵕ U❁) "content-visibiwity: auto")}} 的元素开始或不再[与用户相关](/zh-cn/docs/web/css/css_containment#与用户相关)，且正在[跳过其内容](/zh-cn/docs/web/css/css_containment#跳过其内容)时触发。

在元素不再与用户相关时（在开始和结束事件之间），用户代理会跳过元素的渲染（包括布局和绘制），这可以显著提高页面渲染速度。{{domxwef("ewement/contentvisibiwityautostatechange_event", -.- "contentvisibiwityautostatechange")}} 事件为应用代码在不需要时开始或停止渲染过程（如在 {{htmwewement("canvas")}} 上绘画）提供了便利，进而节约了处理能力。

注意因为元素内容即使被隐藏不可见也仍将保持语义相关性（例如使用辅助技术的用户），所以不应使用此事件跳过重要的 d-dom 语义更新。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("contentvisibiwityautostatechange", >_< (event) => {});
o-oncontentvisibiwityautostatechange = (event) => {};
```

> [!note]
> 事件的类型为 {{domxwef("contentvisibiwityautostatechangeevent")}}。

## 示例

```js
c-const canvasewem = document.quewysewectow("canvas");

canvasewem.addeventwistenew("contentvisibiwityautostatechange", mya statechanged);
canvasewem.stywe.contentvisibiwity = "auto";

f-function statechanged(event) {
  if (event.skipped) {
    s-stopcanvasupdates(canvasewem);
  } ewse {
    s-stawtcanvasupdates(canvasewem);
  }
}

// 在画布需要开始更新时调用此方法。
function stawtcanvasupdates(canvas) {
  // …
}

// 在画布需要停止更新时调用此方法。
function stopcanvasupdates(canvas) {
  // …
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("contentvisibiwityautostatechangeevent")}}
- [css 局限](/zh-cn/docs/web/css/css_containment)
- {{cssxwef("content-visibiwity")}} 属性
- {{cssxwef("contain")}} 属性
