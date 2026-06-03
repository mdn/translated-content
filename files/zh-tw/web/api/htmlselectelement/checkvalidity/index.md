---
title: HTMLSelectElement：checkValidity() 方法
short-title: checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLSelectElement")}} 介面的 **`checkValidity()`** 方法會回傳一個表示此元素是否符合任何套用於其上的[約束驗證](/zh-TW/docs/Web/HTML/Guides/Constraint_validation)規則的布林值。如果為 false，此方法也會在該元素上觸發一個 {{domxref("HTMLElement/invalid_event", "invalid")}} 事件。因為 `checkValidity()` 沒有預設的瀏覽器行為，取消此 `invalid` 事件不會有任何效果。

> [!NOTE]
> 具有非 null {{domxref("HTMLSelectElement.validationMessage", "validationMessage")}} 的 HTML {{htmlelement("select")}} 元素會被視為無效，且會匹配 CSS {{cssxref(":invalid")}} 偽類，並導致 `checkValidity()` 回傳 false。使用 {{domxref("HTMLSelectElement.setCustomValidity()")}} 方法將 {{domxref("HTMLSelectElement.validationMessage")}} 設定為空字串，以將 {{domxref("HTMLSelectElement.validity", "validity")}} 狀態設定為有效。

## 語法

```js-nolint
checkValidity()
```

### 參數

無。

### 回傳值

若元素的數值沒有有效性問題，則回傳 `true`；否則回傳 `false`。

## 範例

在下列範例中，呼叫 `checkValidity()` 會回傳 `true` 或 `false`。

```js
const element = document.getElementById("mySelect");
console.log(element.checkValidity());
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("HTMLSelectElement.reportValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [學習：用戶端表單驗證](/zh-TW/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [指南：約束驗證](/zh-TW/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} 與 {{cssxref(":invalid")}} 偽類
