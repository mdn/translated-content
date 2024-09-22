---
title: "Document: body プロパティ"
short-title: body
slug: Web/API/Document/body
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`Document.body`** プロパティは、現在の文書の {{HTMLElement("body")}} または {{HTMLElement("frameset")}} ノードを表し、そのような要素がなければ `null` になります。

## 値

以下のうちのいずれかです。

- {{HTMLElement("body")}}
- {{HTMLElement("frameset")}}
- `null`

## 例

```js
// HTML の内容: <body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"

const aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

## メモ

`document.body` は文書の内容を持つ要素です。 `<body>` の内容を持つ文書では `<body>` 要素を返し、フレームセット文書では、これは最も外側の `<frameset>` 要素を返します。

`body` プロパティは設定が可能ですが、文書に新しい本文を設定すると、既存の `<body>` 要素の子ノードは全て削除されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.head")}}
