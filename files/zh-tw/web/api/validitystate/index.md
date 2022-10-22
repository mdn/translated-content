---
title: ValidityState
slug: Web/API/ValidityState
---

{{APIRef("HTML DOM")}}

**`ValidityState`** 介面表示了一個元素目前在其檢核條件下驗證的*正確性狀態（validity states）*。同時，它們也可以協助解釋元素值檢核失敗的原因，如果元素值為不合法的。

## 屬性

For each of these Boolean properties, a value of `true` indicates that the specified reason validation may have failed is true, with the exception of the valid property, which is `true` if the element's value obeys all constraints.

- {{domxref("ValidityState.badInput")}} {{ReadOnlyInline}}
  - : Is a {{jsxref("Boolean")}} indicating the user has provided input that the browser is unable to convert.
- {{domxref("ValidityState.customError")}} {{ReadOnlyInline}}
  - : Is a {{jsxref("Boolean")}} indicating the element's custom validity message has been set to a non-empty string by calling the element's `setCustomValidity()` method.
- {{domxref("ValidityState.patternMismatch")}} {{ReadOnlyInline}}
  - : Is a {{jsxref("Boolean")}} indicating the value does not match the specified {{htmlattrxref("pattern", "input")}}.
- {{domxref("ValidityState.rangeOverflow")}} {{ReadOnlyInline}}
  - : Is a {{jsxref("Boolean")}} indicating the value is greater than the maximum specified by the {{htmlattrxref("max", "input")}} attribute.
- {{domxref("ValidityState.rangeUnderflow")}} {{ReadOnlyInline}}
  - : Is a {{jsxref("Boolean")}} indicating the value is less than the minimum specified by the {{htmlattrxref("min", "input")}} attribute.
- {{domxref("ValidityState.stepMismatch")}} {{ReadOnlyInline}}
  - : Is a {{jsxref("Boolean")}} indicating the value does not fit the rules determined by the {{htmlattrxref("step", "input")}} attribute (that is, it's not evenly divisible by the step value).
- {{domxref("ValidityState.tooLong")}} {{ReadOnlyInline}}
  - : Is a {{jsxref("Boolean")}} indicating the value exceeds the specified `maxlength` for {{domxref("HTMLInputElement")}} or {{domxref("HTMLTextAreaElement")}} objects. **Note:** This will never be `true` in Gecko, because elements' values are prevented from being longer than `maxlength`.
- {{domxref("ValidityState.tooShort")}} {{ReadOnlyInline}}
  - : Is a {{jsxref("Boolean")}} indicating the value fails to meet the specified `minlength` for {{domxref("HTMLInputElement")}} or {{domxref("HTMLTextAreaElement")}} objects.
- {{domxref("ValidityState.typeMismatch")}} {{ReadOnlyInline}}
  - : Is a {{jsxref("Boolean")}} indicating the value is not in the required syntax (when {{htmlattrxref("type", "input")}} is `email` or `url`).
- {{domxref("ValidityState.valid")}} {{ReadOnlyInline}}
  - : Is a {{jsxref("Boolean")}} indicating the element meets all constraint validations, and is therefore considered to be valid.
- {{domxref("ValidityState.valueMissing")}} {{ReadOnlyInline}}
  - : Is a {{jsxref("Boolean")}} indicating the element has a {{htmlattrxref("required", "input")}} attribute, but no value.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Constraint validation](/zh-TW/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Forms: Data form validation](/zh-TW/docs/Web/Guide/HTML/Forms/Data_form_validation)
