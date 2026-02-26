---
title: Event：isTrusted 屬性
short-title: isTrusted
slug: Web/API/Event/isTrusted
l10n:
  sourceCommit: e13c7d3a0f6bd3e32a3dbd07fe42eacb079c63ae
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

{{domxref("Event")}} 介面的 **`isTrusted`** 唯讀屬性是一個布林值，當事件是由使用者代理（包含透過使用者行為與程式方法，例如 {{domxref("HTMLElement.focus()")}}）產生時為 `true`，而當事件是透過 {{domxref("EventTarget.dispatchEvent()")}} 發送時則為 `false`。唯一的例外是 `click` 事件，其在使用者代理中會將 `isTrusted` 屬性初始化為 `false`。

## 值

一個布林值。

## 範例

```js
if (e.isTrusted) {
  /* 事件是受信任的 */
} else {
  /* 事件不受信任 */
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
