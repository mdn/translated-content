---
title: "Element: ariaErrorMessageElements プロパティ"
short-title: ariaErrorMessageElements
slug: Web/API/Element/ariaErrorMessageElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

**`ariaErrorMessageElements`** は {{domxref("Element")}} インターフェイスのプロパティで、適用先の要素に対してエラーメッセージを提供する要素（または要素群）を含む配列です。

[`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) のトピックには、この属性とプロパティの使用方法に関する追加情報があります。

## 値

{{domxref("HTMLElement")}} のサブクラスの配列です。
これらの要素の内部テキストは、空白で連結することで、エラーメッセージになります。

読み取り時には、返される配列は静的で読み取り専用です。
書き込み時には、代入された配列はコピーされます。その後配列に変更を加えても、プロパティの値には影響しません。

## 解説

このプロパティは、要素のエラーメッセージを設定するための [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) 属性の柔軟な代替手段です。
`aria-errormessage` とは異なり、このプロパティに割り当てる要素は [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を持つ必要がありません。

このプロパティは、定義されている場合に要素の [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) 属性を反映しますが、有効なスコープ内要素と一致する参照先の `id` 値に対してのみ反映されます。
このプロパティを設定すると、対応する属性がクリアされます。
反映される要素への参照とスコープに関するより詳細な情報については、「属性の反映」ガイドの[要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)を参照してください。

## 例

### エラーメッセージ付きのメールアドレス入力

この例では、無効なメールアドレスの入力報告用のエラーメッセージを設定するために `aria-errormessage` を使用する方法を示し、`ariaErrorMessageElements` を使用してメッセージを取得および設定する方法を説明します。

#### HTML

まず、HTML メール入力フィールドを定義し、その `aria-errormessage` 属性を `id` が `err1` の要素を参照するように設定します。
次に、この ID を持つ `<span>` 要素を定義し、その中にエラーメッセージを含めます。

```html-nolint
<p>
  <label for="email">メールアドレス:</label>
  <input type="email" name="email" id="email" aria-errormessage="err1" />
  <span id="err1" class="errormessage">エラー: 有効なメールアドレスを入力してください</span>
</p>
```

#### CSS

既定ではエラーメッセージを非表示にするスタイルを生成しますが、要素に `aria-invalid` 属性が設定された場合に限り、エラーとして表示され、スタイル設定が適用されるようにします。

```css
.errormessage {
  visibility: hidden;
}

[aria-invalid="true"] {
  outline: 2px solid red;
}

[aria-invalid="true"] ~ .errormessage {
  visibility: visible;
}
```

#### JavaScript

次に、入力を調べ、[`typeMismatch`](/ja/docs/Web/API/ValidityState/typeMismatch) 制約違反に基づいて {{domxref("Element/ariaInvalid", "ariaInvalid")}} を `true` または `false` に設定します。
`ariaInvalid` は `aria-invalid` 属性に反映する処理を行い、必要があればエラーを非表示にしたり表示させたりします。

```js
const email = document.querySelector("#email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.ariaInvalid = true;
  } else {
    email.ariaInvalid = false;
  }
});
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

次に、`aria-errormessage` 属性を用いた値、`ariaErrorMessageElements`、`ariaErrorMessageElements` の内部テキストをログ出力します。

```js
log(`aria-errormessage: ${email.getAttribute("aria-errormessage")}`);
// ariaErrorMessageElements の機能検出
if ("ariaErrorMessageElements" in Element.prototype) {
  // ariaErrorMessageElements を取得
  const propElements = email.ariaErrorMessageElements;
  log(`ariaErrorMessageElements: ${propElements}`);

  // 要素の内部テキストからアクセシブルテキストを作成
  const text = propElements.map((e) => e.textContent.trim).join(" ");
  log(`エラーメッセージ詳細: ${text.trim()}`);
} else {
  log("element.ariaErrorMessageElements: ブラウザーが対応していません");
}
```

#### 結果

メールアドレスを入力すると、有効なメールアドレスが入力されるまでエラーテキストが表示されます。
なお、ログ出力する際には、属性から読み込まれたエラーメッセージ参照、`ariaErrorMessageElements` の要素、およびその要素の内部テキスト、つまりエラーメッセージ自体を表示します。

{{EmbedLiveSample("Email input with error message","100%","180px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) 属性
- {{domxref("ElementInternals.ariaErrorMessageElements")}}
- [要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)（「属性の反映」ガイド）
