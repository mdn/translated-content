---
title: "HTMLTextAreaElement: dirName プロパティ"
short-title: dirName
slug: Web/API/HTMLTextAreaElement/dirName
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`dirName`** は {{domxref("HTMLTextAreaElement")}} インターフェイスのプロパティで、この要素の書字方向を示します。これは {{htmlelement("textarea")}} 要素の [`dirName`](/ja/docs/Web/HTML/Reference/Attributes/dirname) 属性の値を反映します。このプロパティは、取得または設定することができます。

`dirname` 属性は、要素の文字方向を送信する方法を制御します。この属性を記載すると、フォームコントロールは 2 つの名前/値のペアで送信されます。最初のペアはこの `<textarea>` の [`name`](/ja/docs/Web/API/HTMLTextAreaElement/name) と [`value`](/ja/docs/Web/API/HTMLTextAreaElement/value)、 2 番目のペアは [`dirname`](/ja/docs/Web/HTML/Reference/Elements/textarea#dirname) 属性の値を名前として、 `ltr` または `rtl` をブラウザーで設定された通りの値で送信します。

## 値

文字列です。要素の方向です。

## 例

```js
textareaElement.dirName = "rtl";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.dirName")}}
- [`dir` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/dir)
- [データの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
