---
title: "HTMLInputElement: selectionStart プロパティ"
short-title: selectionStart
slug: Web/API/HTMLInputElement/selectionStart
l10n:
  sourceCommit: 0436adf460c5cd5daeb9a80440b515c9f65f2acc
---

{{ApiRef("HTML DOM")}}

**`selectionStart`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、選択テキストの先頭インデックスを表す数値です。何も選択されていない場合は、 `<input>` 要素内のテキスト入力カーソル（キャレット）の位置を返します。

> [!NOTE]
> [WHATWG のフォーム仕様書](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply)によると、 `selectionStart` プロパティは text、search、URL、tel、password の各入力型にのみ適用されます。現行のブラウザーでは、それ以外の入力型に `selectionStart` プロパティを設定すると例外が発生します。さらに、テキスト以外の入力要素で `selectionStart` プロパティにアクセスすると、このプロパティは `null` を返します。

`selectionStart` が `selectionEnd` よりも大きくなった場合、両者は `selectionEnd` と扱われます。

## 値

非負の数値です。

## 例

### HTML

```html
<!-- selectionStart を非テキスト入力要素で使用 -->
<label for="color">selectionStart プロパティを type=color に設定</label>
<input id="color" type="color" />

<!-- selectionStart をテキスト入力要素で使用 -->
<fieldset>
  <legend>selectionStart プロパティを type=text に設定</legend>
  <label for="statement">テキスト内の 'mdn' を選択してください : </label>
  <input
    type="text"
    id="statement"
    value="The mdn is a documentation repository." />
  <button id="statement-btn">Select mdn text</button>
</fieldset>
```

### JavaScript

```js
const inputElement = document.getElementById("statement");
const statementBtn = document.getElementById("statement-btn");
const colorStart = document.getElementById("color");

statementBtn.addEventListener("click", () => {
  inputElement.selectionStart = 4;
  inputElement.selectionEnd = 7;
  inputElement.focus();
});

// ブラウザーコンソールを開いて出力を確認してください
console.log(colorStart.selectionStart); // Output : null
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.selectionStart")}} プロパティ
- {{domxref("HTMLInputElement.selectionEnd")}} プロパティ
- {{domxref("HTMLInputElement.setSelectionRange")}} メソッド
