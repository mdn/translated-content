---
title: "HTMLButtonElement: formTarget プロパティ"
short-title: formTarget
slug: Web/API/HTMLButtonElement/formTarget
l10n:
  sourceCommit: cd99a5b2726aa6e788edf23f6d7f8c1d4023618f
---

{{APIRef("HTML DOM")}}

**`formTarget`** は {{domxref("HTMLButtonElement")}} インターフェイスのプロパティで、送信される {{HtmlElement("form")}} のレスポンスが表示されるタブ、ウィンドウ、iframe です。これは、この {{HTMLElement("button")}} 要素の [`formtarget`](/ja/docs/Web/HTML/Reference/Elements/button#formtarget) 属性の値を反映します。

この値は、フォームをこのボタンから送信する場合に、 {{domxref("HTMLFormElement")}} インターフェイスの {{domxref("HTMLFormElement.target", "target")}} プロパティを上書きします。このプロパティは取得することも設定することもできます。設定されていない場合、値は空文字列 (`""`) となります。

## 値

文字列です。

## 例

```js
btnEl.formTarget = "_self";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLButtonElement.formAction")}}
- {{domxref("HTMLButtonElement.formEnctype")}}
- {{domxref("HTMLButtonElement.formNoValidate")}}
- {{domxref("HTMLButtonElement.formMethod")}}
- {{domxref("HTMLFormElement.target")}}
- [フォームデータの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
