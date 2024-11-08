---
title: "HTMLTextAreaElement: setCustomValidity() メソッド"
short-title: setCustomValidity()
slug: Web/API/HTMLTextAreaElement/setCustomValidity
l10n:
  sourceCommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ APIRef("HTML DOM") }}

**`setCustomValidity()`** は {{DOMxRef("HTMLTextAreaElement")}} インターフェイスのメソッドで、 {{htmlelement("textarea")}} 要素の独自の検証メッセージを指定します。空文字列を使用すると、この要素に独自の検証エラーがないことを示します。

## 構文

```js-nolint
setCustomValidity(string)
```

### 引数

- `string`
  - : エラーメッセージが格納されている文字列。空文字列を指定すると、独自の検証エラーがすべて除去されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、もし `<textarea>` が制約検証を合格しなかった場合、検証を通らなかった制約に基づいて独自エラーを指定します。値が有効な場合は、独自エラーを空文字列に設定します。

```js
const comment = document.getElementById("comment");
if (comment.validity.valueMissing) {
  comment.setCustomValidity("空のコメントを送信することはできません。");
} else if (comment.validity.tooShort) {
  comment.setCustomValidity("もっと伝えてください。コメントが短すぎます。");
} else if (comment.validity.tooLong) {
  comment.setCustomValidity(
    "おしゃべり好きですか？ 800 文字以内に収めてください！",
  );
} else {
  comment.setCustomValidity("");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLelement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.validity")}}
- {{domxref("HTMLTextAreaElement.checkValidity()")}}
- {{domxref("HTMLTextAreaElement.reportValidity()")}}
- [フォーム検証](/ja/docs/Web/HTML/Constraint_validation)
- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Constraint_validation)
- CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
