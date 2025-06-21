---
title: "HTMLButtonElement: formMethod プロパティ"
short-title: formMethod
slug: Web/API/HTMLButtonElement/formMethod
l10n:
  sourceCommit: 8bbefa76803785b6e0e1d278679c38b092e6b234
---

{{APIRef("HTML DOM")}}

**`formMethod`** は {{domxref("HTMLButtonElement")}} インターフェイスのプロパティで、この {{HTMLElement("button")}} 要素がこのフォーム ({{HtmlElement("form")}}) を送信するコントロールである場合に、フォームを送信するコントロールである場合、送信に使用される {{Glossary("HTTP")}} メソッドです。これは、この `<button>` の [`formmethod`](/ja/docs/Web/HTML/Reference/Elements/input#formmethod) 属性の値を反映します。

この値は、フォームが入力経由で送信された場合、 {{domxref("HTMLFormElement")}} インターフェイスの {{domxref("HTMLFormElement.method", "method")}} プロパティを上書きします。このプロパティは取得することも設定することもできます。空の値または不正な値を設定すると、不正な既定値として `"get"` が使用されます。設定されていない場合、値は空文字列 (`""`) となります。

## 値

文字列で、`"post"`, `"get"`, `"dialog"`, `""` のいずれかです。

## 例

```js
btnEl.formMethod = "post";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLButtonElement.formAction")}}
- {{domxref("HTMLButtonElement.formEnctype")}}
- {{domxref("HTMLButtonElement.formNoValidate")}}
- {{domxref("HTMLButtonElement.formTarget")}}
- {{domxref("HTMLFormElement.method")}}
- [フォームデータの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
