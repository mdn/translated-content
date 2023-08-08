---
title: "Element: ariaChecked プロパティ"
short-title: ariaChecked
slug: Web/API/Element/ariaChecked
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaChecked`** は {{domxref("Element")}} インターフェイスプロパティで、チェックボックスやラジオボタン、その他のチェック状態のあるウィジェットの現在の "checked" 状態を示す [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-checked) 属性の値を反映します。

> **メモ:** 可能な限り、HTML の {{htmlelement("input")}} 要素で `type="checkbox"` を使用してください。この要素には意味づけがあり、ARIA 属性は必要ありません。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : 要素がチェックされています。
- `"mixed"`
  - : 3 状態チェックボックスまたは menuitemcheckbox の混合モードの値を示します。
- `"false"`
  - : 要素はチェックに対応していますが、現在はチェックされていません。
- `"undefined"`
  - : 要素はチェックに対応していません。

## 例

この例では、ID が `checkBoxInput` の要素の `aria-checked` 属性は "false" に設定されており、この入力は現在チェックされていないことを示しています。`ariaChecked` を使用して、値を "true" に更新します。

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label">
</span>
<label id="chk1-label">Remember my preferences</label>
```

```js
let el = document.getElementById("checkBoxInput");
console.log(el.ariaChecked); // "false"
el.ariaChecked = "true";
console.log(el.ariaChecked); // "true"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: checkbox ロール](/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
