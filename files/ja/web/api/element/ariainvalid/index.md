---
title: "Element: ariaInvalid プロパティ"
short-title: ariaInvalid
slug: Web/API/Element/ariaInvalid
l10n:
  sourceCommit: 4578af853ec3e520f4f2038c028c265591cbaa70
---

{{APIRef("DOM")}}

**`ariaInvalid`** は {{domxref("Element")}} インターフェイスのプロパティで、 [`aria-invalid`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) の値を反映します。[`application`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)、[`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)、[`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)、[`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)、[`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)、[`radiogroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)、[`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)、[`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)、[`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)、[`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) ロールの場合、入力値がアプリケーションが期待する書式に適合していないことをアクセシビリティ API に示します。

この属性が存在しない場合、または空の文字列に設定されている場合、支援技術は値が `false` に設定されているかのように扱います。属性が存在するが、`false`、`grammar`、`spelling`、または空文字列 (`""`) 以外の値に設定されている場合、支援技術は値を `true` として扱います。このプロパティは、支援技術によって処理された値ではなく、設定された属性の値を反映します。

## 値

以下の値のいずれかを持つ文字列です。

- `"true"`
  - : この要素は不正な状態です。
- `"false"` （既定値）
  - : この要素は不正な状態にありません。
- `"grammar"`
  - : この要素は、文法的なエラーが検出されたため不正な状態です。
- `"spelling"`
  - : この要素は、綴りエラーがは検出されたため不正な状態です。

## 例

この例では、要素の [`aria-invalid`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) 属性が、ID が `quote` の要素においては省略され、`null` を返し、`false` として扱われます。`ariaInvalid` を使用し、値を `grammar` に更新します（エラーが 2 つあるため）。

```html
<div id="quote" role="textbox" contenteditable>you are your best thing..</div>
```

```html hidden
<hr />
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const el = document.getElementById("quote");
log(`Initial value: ${el.ariaInvalid}`);
el.ariaInvalid = "grammar";
log(`Updated value: ${el.ariaInvalid}`);
```

{{EmbedLiveSample("Examples", "", "100")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.ariaRequired")}}
- [`aria-required`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- {{domxref("Element.ariaErrorMessageElements")}}
