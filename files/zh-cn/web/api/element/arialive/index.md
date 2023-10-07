---
title: Element：ariaLive 属性
slug: Web/API/Element/ariaLive
---

{{DefaultAPISidebar("DOM")}}

{{domxref("Element")}} 接口的 **`ariaLive`** 属性反映了 [`aria-live`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-live) 属性的值，该属性表示一个元素将被更新，并描述了用户代理、辅助技术和用户可以从[实时区域](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)中期望的更新类型。

## 值

一个具有以下值之一的字符串：

- `"assertive"`
  - : 表示对该区域的更新具有最高优先级，并应立即呈现给用户。
- `"off"`
  - : 表示除非用户当前聚焦于该区域，否则不应向用户呈现对该区域的更新。
- `"polite"`
  - : 表示应在下一个适当的机会（例如，在说完当前句子或用户暂停输入时）呈现对该区域的更新。

## 示例

在此示例中，ID 为 `planetInfo` 的元素上的 [`aria-live`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-live) 属性设置为 `"polite"`。然后我们将值更新为 `"assertive"`。

```html
<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">未选择星球</h2>
  <p id="planetDescription">选择一个星球以查看其描述</p>
</div>
```

```js
let el = document.getElementById("planetInfo");
console.log(el.ariaLive); // "polite"
el.ariaLive = "assertive";
console.log(el.ariaLive); // "assertive"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
