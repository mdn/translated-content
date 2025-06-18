---
title: Event：explicitOriginalTarget 属性
slug: Web/API/Event/explicitOriginalTarget
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{AvailableInWorkers}}

{{domxref("Event")}} 接口的 **`explicitOriginalTarget`** 只读属性返回事件的非匿名原始目标。

如果事件因非匿名边界跨越以外的原因被重新定位，该属性将被设置为重新定位之前的目标。

例如，当鼠标事件发生在文本节点上时，它们会被重新定向到其父节点（参见 [Firefox bug 185889](https://bugzil.la/185889)），在这种情况下，[`currentTarget`](/zh-CN/docs/Web/API/Event/currentTarget) 将显示父节点，而此属性将显示文本节点。

此属性与 [`originalTarget`](/zh-CN/docs/Web/API/Event/originalTarget) 不同之处在于，它永远不会包含匿名内容。

## 值

返回 {{domxref("EventTarget")}} 对象，如果没有则为 null。

## 示例

此属性可以与 `<command>` 元素结合使用，以获取调用命令的原始对象的事件详情。

```js
function myCommand(ev) {
  alert(ev.explicitOriginalTarget.nodeName); // 返回“menuitem”
}
```

```xml
<xul:command id="my-cmd-anAction" oncommand="myCommand(event);"/>

<xul:menulist>
  <xul:menupopup>
    <xul:menuitem label="获取我的元素名称！" command="my-cmd-anAction"/>
  </xul:menupopup>
</menulist>
```

## 规范

_这是 Mozilla 特有的属性，不属于任何当前规范，且没有成为标准的计划。_

## 浏览器兼容性

{{Compat}}
