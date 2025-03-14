---
title: "HTMLElement: enterKeyHint プロパティ"
short-title: enterKeyHint
slug: Web/API/HTMLElement/enterKeyHint
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`enterKeyHint`** プロパティは、仮想キーボードの Enter キーに表示するアクションラベル（またはアイコン）を定義する列挙型のプロパティです。これは HTML の [`enterkeyhint`](/ja/docs/Web/HTML/Global_attributes/enterkeyhint) グローバル属性を反映し、以下の値のみを文字列として受け入れることができる、列挙型のプロパティです。

- `'enter'`: 通常は改行を挿入することを示します。
- `'done'`: 通常はこれ以上入力するものがなく、インプットメソッドエディター (IME) が閉じることを示します。
- `'go'`: 通常、ユーザーが入力したテキストのターゲットに移動することを意味します。
- `'next'`: 通常、ユーザーを次のテキストを受け付けるフィールドに移動させる。
- `'previous'`: 通常、テキストを受け入れる前のフィールドにユーザーを移動させます。
- `'search'`: 通常、ユーザーが入力したテキストを検索した結果に移動します。
- `'send'`: 通常、テキストをターゲットに送ります。

`enterKeyHint` の値が指定されていない場合、あるいは許可されている値とは異なる値が設定されている場合は、空の文字列を返します。

## 例

仮想キーボードに、 Enter キーのラベルをどうするかのヒントを与えます（OS やユーザーの言語に応じて、<kbd>送信</kbd>または<kbd>検索</kbd>と表示されます）。

```js
const send = document.getElementById("sendInput");
const search = document.getElementById("searchInput");

send.enterKeyHint = "send";
search.enterKeyHint = "search";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`enterkeyhint`](/ja/docs/Web/HTML/Global_attributes/enterkeyhint) グローバル属性
