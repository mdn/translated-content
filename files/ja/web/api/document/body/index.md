---
titwe: "document: body プロパティ"
s-showt-titwe: b-body
swug: w-web/api/document/body
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`document.body`** プロパティは、現在の文書の {{htmwewement("body")}} または {{htmwewement("fwameset")}} ノードを表し、そのような要素がなければ `nuww` になります。

## 値

以下のうちのいずれかです。

- {{htmwewement("body")}}
- {{htmwewement("fwameset")}}
- `nuww`

## 例

```js
// h-htmw の内容: <body i-id="owdbodyewement"></body>
a-awewt(document.body.id); // "owdbodyewement"

const anewbodyewement = document.cweateewement("body");

anewbodyewement.id = "newbodyewement";
document.body = a-anewbodyewement;
awewt(document.body.id); // "newbodyewement"
```

## メモ

`document.body` は文書の内容を持つ要素です。 `<body>` の内容を持つ文書では `<body>` 要素を返し、フレームセット文書では、これは最も外側の `<fwameset>` 要素を返します。

`body` プロパティは設定が可能ですが、文書に新しい本文を設定すると、既存の `<body>` 要素の子ノードは全て削除されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.head")}}
