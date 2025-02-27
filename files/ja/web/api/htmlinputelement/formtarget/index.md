---
title: "HTMLInputElement: formTarget プロパティ"
short-title: formTarget
slug: Web/API/HTMLInputElement/formTarget
l10n:
  sourceCommit: cd99a5b2726aa6e788edf23f6d7f8c1d4023618f
---

{{APIRef("HTML DOM")}}

**`formTarget`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、送信される {{HtmlElement("form")}} のレスポンスが表示されるタブ、ウィンドウ、iframe です。これは、この {{HTMLElement("input")}} 要素の [`formtarget`](/ja/docs/Web/HTML/Element/input#formtarget) 属性の値を反映します。

このプロパティは [`submit`](/ja/docs/Web/HTML/Element/input/submit) および [`image`](/ja/docs/Web/HTML/Element/input/image) 型の `<input>` 要素でのみ有効です。

この値は、フォームをこのボタンから送信する場合に、 {{domxref("HTMLFormElement")}} インターフェイスの {{domxref("HTMLFormElement.target", "target")}} プロパティを上書きします。このプロパティは取得することも設定することもできます。設定されていない場合、値は空文字列 (`""`) となります。

## 値

文字列です。

## 例

```js
inputElement.formTarget = "_blank";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.formAction")}}
- {{domxref("HTMLInputElement.formEnctype")}}
- {{domxref("HTMLInputElement.formNoValidate")}}
- {{domxref("HTMLInputElement.formMethod")}}
- {{domxref("HTMLFormElement.target")}}
- [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit)
- [`<input type="image">`](/ja/docs/Web/HTML/Element/input/image)
- [フォームデータの送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)
