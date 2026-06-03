---
title: "HTMLInputElement: selectionEnd プロパティ"
short-title: selectionEnd
slug: Web/API/HTMLInputElement/selectionEnd
l10n:
  sourceCommit: 0436adf460c5cd5daeb9a80440b515c9f65f2acc
---

{{ApiRef("HTML DOM")}}

**`selectionEnd`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、選択テキストの末尾のインデックスを表す数値です。選択がない場合、これは現在のテキスト入力カーソル位置の直後の文字のオフセットを返します。

> [!NOTE]
> [WHATWG のフォーム仕様書](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply)によると、 `selectionEnd` プロパティは text、search、URL、tel、password の各入力型にのみ適用されます。現行のブラウザーでは、それ以外の入力型に `selectionEnd` プロパティを設定すると例外が発生します。さらに、テキスト以外の入力要素で `selectionEnd` プロパティにアクセスすると、このプロパティは `null` を返します。

`selectionEnd` が `selectionStart` よりも小さくなった場合、両者は `selectionEnd` と扱われます。

## 値

非負の数値です。

## 例

### HTML

```html
<!-- selectionEnd を非テキスト入力要素で使用 -->
<label for="color">selectionStart プロパティを type=color に設定</label>
<input id="color" type="color" />

<!-- selectionEnd をテキスト入力要素で使用 -->
<fieldset>
  <legend>selectionEnd プロパティを type=text に設定</legend>
  <label for="pin">Input PIN</label>
  <input type="text" id="pin" value="impossible PIN: 102-12-145" />
  <button id="pin-btn" type="button">PIN correction</button>
</fieldset>
```

### JavaScript

```js
const colorEnd = document.getElementById("color");
const text = document.querySelector("#pin");
const pinBtn = document.querySelector("#pin-btn");
const validPinChecker = /[^\d{3}-\d{2}-\d{3}]/g;
const selectionEnd = text.value.length;
const selectedText = text.value.substring(text.selectionStart, selectionEnd);

pinBtn.addEventListener("click", () => {
  const correctedText = selectedText.replace(validPinChecker, "");
  text.value = correctedText;
});

// ブラウザーコンソールを開いて出力を確認してください
console.log(colorEnd.selectionEnd); // Output : null
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.selectionEnd")}} プロパティ
- {{domxref("HTMLInputElement.selectionStart")}} プロパティ
- {{domxref("HTMLInputElement.setSelectionRange")}} メソッド
