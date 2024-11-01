---
title: "HTMLButtonElement: formEnctype プロパティ"
short-title: formEnctype
slug: Web/API/HTMLButtonElement/formEnctype
l10n:
  sourceCommit: b44ac907c042c0c1de23092412a80701e1ade87d
---

{{APIRef("HTML DOM")}}

**`formEnctype`** は {{domxref("HTMLButtonElement")}} インターフェイスのプロパティで、このフォームが送信される場合のサーバーに送信されるコンテンツの {{Glossary("MIME_type", "MIME タイプ")}}です。これは、この `<button>` の [`formenctype`](/ja/docs/Web/HTML/Element/input#formenctype) 属性の値を反映します。

この値は、フォームがこの送信ボタン経由で送信された場合、 {{domxref("HTMLFormElement")}} インターフェイスの {{domxref("HTMLFormElement.enctype", "enctype")}} プロパティを上書きします。このプロパティは取得することも設定することもできます。設定されていない場合、値は空文字列 (`""`) となります。

## 値

文字列です。

## 例

```js
btnEl.formEnctype = "application/x-www-form-urlencoded";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLButtonElement.formAction")}}
- {{domxref("HTMLButtonElement.formMethod")}}
- {{domxref("HTMLButtonElement.formNoValidate")}}
- {{domxref("HTMLButtonElement.formTarget")}}
- {{domxref("HTMLFormElement.enctype")}}
- [フォームデータの送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)
