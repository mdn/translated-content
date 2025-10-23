---
title: "HTMLInputElement: formEnctype プロパティ"
short-title: formEnctype
slug: Web/API/HTMLInputElement/formEnctype
l10n:
  sourceCommit: b44ac907c042c0c1de23092412a80701e1ade87d
---

{{APIRef("HTML DOM")}}

**`formEnctype`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、`<input>` タグのformEnctype属性がフォーム送信の方法として指定されている場合、サーバーに送信されるコンテンツの {{Glossary("MIME_type", "MIME タイプ")}}です。これは、`<input>` の [`formenctype`](/ja/docs/Web/HTML/Reference/Elements/input#formenctype) 属性の値を反映します。

このプロパティは、 [`submit`](/ja/docs/Web/HTML/Reference/Elements/input/submit) または [`image`](/ja/docs/Web/HTML/Reference/Elements/input/image) 型の `<input>` 要素でのみ有効です。

この値は、フォームが入力経由で送信された場合、 {{domxref("HTMLFormElement")}} インターフェイスの {{domxref("HTMLFormElement.enctype", "enctype")}} プロパティを上書きします。このプロパティは取得することも設定することもできます。設定されていない場合、値は空文字列 (`""`) となります。

## 値

文字列です。

## 例

```js
inputElement.formEnctype = "application/x-www-form-urlencoded";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.formAction")}}
- {{domxref("HTMLInputElement.formMethod")}}
- {{domxref("HTMLInputElement.formNoValidate")}}
- {{domxref("HTMLInputElement.formTarget")}}
- {{domxref("HTMLFormElement.enctype")}}
- [`<input type="submit">`](/ja/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image)
- [フォームデータの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
