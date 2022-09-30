---
title: HTMLFormElement.elements
slug: Web/API/HTMLFormElement/elements
---

{{ApiRef()}}

## 概要

**elements** は、form 要素に含まれるすべてのフォームコントロールを含む [`HTMLCollection`](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75708506) を返します。

index 、または要素の [name](/ja/docs/DOM/element.name) か [id](/ja/docs/DOM/element.id) の何れかを使って個々の要素にアクセスすることができます。

HTML 5 より前のバージョンでは、返されるオブジェクトは {{domxref("HTMLCollection")}} でした。 `HTMLFormControlsCollection` これに基づいています。

> **メモ:** 同様に、指定された文書内のすべてのフォームの一覧を取得するには、その文書の {{domxref("Document.forms", "forms")}} プロパティを使用してください。

## 値

フォームに含まれるすべての非画像コントロールが入った {{domxref("HTMLFormControlsCollection")}} です。
これは生きた集合です。フォームコントロールがフォームに追加されたりフォームから削除されたりすると、この集合はその変更を反映するために更新されます。

返されたコレクション内のフォームコントロールは、ツリーの前順、深さ優先の順序に従うことで、フォームに現れるのと同じ順序になります。
これは、**ツリー順**と呼ばれます。

以下の要素のみが返されます。

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} （ただし、 {{htmlattrxref("type", "input")}} が `"image"` であるものは、過去の経緯から除外されています）。
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

## 例

```js
var inputs = document.getElementById("form1").elements;
var inputByIndex = inputs[2];
var inputByName = inputs["login"];
```

## 仕様書

- [HTML5, Section 4.10.3, The form Element](http://www.w3.org/TR/html5/forms.html#dom-form-elements)
- [DOM Level 2 HTML: elements](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-76728479)
