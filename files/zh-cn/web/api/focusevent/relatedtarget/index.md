---
title: FocusEvent：relatedTarget 属性
slug: Web/API/FocusEvent/relatedTarget
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("UI Events")}}

{{domxref("FocusEvent")}} 接口的 **`relatedTarget`** 只读属性表示次要目标，具体取决于事件类型：

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">事件名称</th>
      <th scope="col"><code>target</code></th>
      <th scope="col"><code>relatedTarget</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("Element/blur_event", "blur")}}</td>
      <td>失去焦点的 {{domxref("EventTarget")}}</td>
      <td>获得焦点的 {{domxref("EventTarget")}}（如果有）。</td>
    </tr>
    <tr>
      <td>{{domxref("Element/focus_event", "focus")}}</td>
      <td>获得焦点的 {{domxref("EventTarget")}}</td>
      <td>失去焦点的 {{domxref("EventTarget")}}（如果有）</td>
    </tr>
    <tr>
      <td>{{domxref("Element/focusin_event", "focusin")}}</td>
      <td>获得焦点的 {{domxref("EventTarget")}}</td>
      <td>失去焦点的 {{domxref("EventTarget")}}（如果有）</td>
    </tr>
    <tr>
      <td>{{domxref("Element/focusout_event", "focusout")}}</td>
      <td>失去焦点的 {{domxref("EventTarget")}}</td>
      <td>获得焦点的 {{domxref("EventTarget")}}（如果有）</td>
    </tr>
  </tbody>
</table>

请注意，[很多元素无法获得焦点](https://stackoverflow.com/questions/42764494/blur-event-relatedtarget-returns-null/42764495)，这是 `relatedTarget` 为 `null` 的常见原因。出于安全原因（例如通过 Tab 键切入或切出页面）`relatedTarget` 也可能被设置为 `null`。

{{domxref("MouseEvent.relatedTarget")}} 是鼠标事件中的类似属性。

## 值

一个 {{domxref("EventTarget")}} 实例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("FocusEvent") }}
