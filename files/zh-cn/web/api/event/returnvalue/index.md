---
title: Event：returnValue 属性
slug: Web/API/Event/returnValue
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{AvailableInWorkers}}

{{domxref("Event")}} 接口的 **`returnValue`** 属性表示该事件的默认操作是否已被阻止。

默认情况下，它被设置为 `true`，即允许进行默认操作。将该属性设置为 `false` 即可阻止默认操作。

> [!NOTE]
> 虽然 `returnValue` 已被纳入 DOM 标准，但它主要是为了支持现有代码。你应该使用 {{DOMxRef("Event.preventDefault", "preventDefault()")}} 和 {{domxref("Event.defaultPrevented", "defaultPrevented")}} 来代替这个历史遗留属性。

## 值

布尔值，如果事件没有被取消，则为 `true`；否则，如果事件已被取消或默认操作已被阻止，则为 `false`。

`returnValue` 的值与 {{domxref("Event.defaultPrevented", "defaultPrevented")}} 返回的值相反。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLDialogElement.returnValue")}}：{{HTMLElement("dialog")}} 的返回值。
