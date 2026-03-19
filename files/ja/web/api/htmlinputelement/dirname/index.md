---
title: "HTMLInputElement: dirName プロパティ"
short-title: dirName
slug: Web/API/HTMLInputElement/dirName
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`dirName`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、要素の書字方向を示し、その値が送信できるようにします。これは {{htmlelement("input")}} 要素の [`dirName`](/ja/docs/Web/HTML/Reference/Attributes/dirname) 属性の値を反映します。このプロパティは受け取ったり設定したりすることができます。

`<input>` の中で [`hidden`](/ja/docs/Web/HTML/Reference/Elements/input/hidden), [`text`](/ja/docs/Web/HTML/Reference/Elements/input/text), [`search`](/ja/docs/Web/HTML/Reference/Elements/input/search), [`url`](/ja/docs/Web/HTML/Reference/Elements/input/url), [`tel`](/ja/docs/Web/HTML/Reference/Elements/input/tel), [`email`](/ja/docs/Web/HTML/Reference/Elements/input/email) の型でみ有効であり、`dirname` 属性はこの要素の書字方向がどのように送信されるかを制御します。 この要素を記載すると、フォームコントロールは 2 つの名前/値ペアを送信します。最初のペアは [`name`](/ja/docs/Web/HTML/Reference/Elements/input#name) 属性値、 [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) です。2 つ目は、[`dirname`](/ja/docs/Web/HTML/Reference/Elements/input#dirname) 属性の値を名前とし、ブラウザーで設定された `ltr` または `rtl` を値とします。

## 値

文字列です。要素の書字方向です。

## 例

```js
inputElement.dirName = "rtl";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.dirName")}}
- [`dir` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/dir)
- [フォームデータの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
