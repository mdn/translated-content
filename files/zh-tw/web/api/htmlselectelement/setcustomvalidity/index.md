---
title: HTMLSelectElement：setCustomValidity() 方法
short-title: setCustomValidity()
slug: Web/API/HTMLSelectElement/setCustomValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.setCustomValidity()`** 方法將選擇元素的自訂有效性訊息設定為指定的訊息。使用空字串來表示該元素*沒有*自訂有效性錯誤。

## 語法

```js-nolint
setCustomValidity(string)
```

### 參數

- `string`
  - : 包含錯誤訊息的字串。空字串會移除任何自訂有效性錯誤。

### 回傳值

無（{{jsxref("undefined")}}）。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [表單驗證](/zh-TW/docs/Web/HTML/Guides/Constraint_validation)。
