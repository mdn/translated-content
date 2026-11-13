---
title: "HTMLButtonElement: formAction プロパティ"
short-title: formAction
slug: Web/API/HTMLButtonElement/formAction
l10n:
  sourceCommit: 1c31c8e99de843940027ec4d17e128850ded7a71
---

{{APIRef("HTML DOM")}}

**`formAction`** は {{domxref("HTMLButtonElement")}} インターフェイスのプロパティで、このコントロールを含むフォームが送信された際にサーバー上で実行されるプログラムの URL です。これは、この `<button>` の [`formaction`](/ja/docs/Web/HTML/Reference/Elements/input#formaction) 属性の値を反映します。

この値はフォームがこのボタンから送信された場合、 {{domxref("HTMLFormElement")}} インターフェイスの {{domxref("HTMLFormElement.action", "action")}} プロパティの値を上書きします。このプロパティは受け取ったり設定したりすることができます。

## 値

文字列です。フォームを送信する URL です。

## 例

```js
btnEl.formAction = "/cgi-bin/publish";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLButtonElement.formEnctype")}}
- {{domxref("HTMLButtonElement.formMethod")}}
- {{domxref("HTMLButtonElement.formNoValidate")}}
- {{domxref("HTMLButtonElement.formTarget")}}
- [フォームデータの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
