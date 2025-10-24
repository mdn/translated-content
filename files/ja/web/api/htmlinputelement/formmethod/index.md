---
title: "HTMLInputElement: formMethod プロパティ"
short-title: formMethod
slug: Web/API/HTMLInputElement/formMethod
l10n:
  sourceCommit: 0f7f70e7fd76f8e32cd02261bc10630d753fbf0b
---

{{APIRef("HTML DOM")}}

**`formMethod`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、フォームを送信する {{HTMLElement("input")}} 要素が {{HtmlElement("form")}} を送信するコントロールである場合、送信に使用される {{Glossary("HTTP")}} メソッドです。これは、`<input>` の [`formmethod`](/ja/docs/Web/HTML/Reference/Elements/input#formmethod) 属性の値を反映します。

このプロパティは、 [`submit`](/ja/docs/Web/HTML/Reference/Elements/input/submit) または [`image`](/ja/docs/Web/HTML/Reference/Elements/input/image) 型の `<input>` 要素でのみ有効です。

この値は、フォームが入力経由で送信された場合、 {{domxref("HTMLFormElement")}} インターフェイスの {{domxref("HTMLFormElement.method", "method")}} プロパティを上書きします。このプロパティは取得することも設定することもできます。空の値または不正な値を設定すると、不正な既定値として `"get"` が使用されます。設定されていない場合、値は空文字列 (`""`) となります。

## 値

文字列で、`"post"`, `"get"`, `"dialog"`, `""` のいずれかです。

## 例

```js
inputElement.formMethod = "post";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.formAction")}}
- {{domxref("HTMLInputElement.formEnctype")}}
- {{domxref("HTMLInputElement.formNoValidate")}}
- {{domxref("HTMLInputElement.formTarget")}}
- {{domxref("HTMLFormElement.method")}}
- [`<input type="submit">`](/ja/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image)
- [フォームデータの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
