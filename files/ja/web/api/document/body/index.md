---
title: Document.body
slug: Web/API/Document/body
---

{{APIRef("DOM")}}

**`Document.body`** プロパティは、その文書の {{HTMLElement("body")}} または {{HTMLElement("frameset")}} ノードを表し、そのような要素がなければ `null` になります。

## 構文

```
const objRef = document.body
document.body = objRef
```

## 例

```js
// Given this HTML: <body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"

const aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

## 注

`document.body` は文書の内容を持つ要素です。 `<body>` の内容を持つ文書では `<body>` 要素を返し、フレームセット文書では、これは最も外側の `<frameset>` 要素を返します。

`body` プロパティは設定が可能ですが、文書に新しい `body` を設定すると、既存の `<body>` 要素の子ノードは全て削除されます。

## 仕様書

| 仕様書                                                                                           | 状態                             | 備考 |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG','dom.html#dom-document-body','Document.body')}} | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5.1','dom.html#dom-document-body','Document.body')}}     | {{Spec2('HTML5.1')}}     |      |
| {{SpecName('HTML5 W3C','dom.html#dom-document-body','Document.body')}}     | {{Spec2('HTML5 W3C')}}     |      |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.head")}}
