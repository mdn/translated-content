---
title: "HTMLElement: enterKeyHint プロパティ"
short-title: enterKeyHint
slug: Web/API/HTMLElement/enterKeyHint
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`enterKeyHint`** プロパティは、仮想キーボードの Enter キーに表示するアクションラベル（またはアイコン）を定義する列挙型プロパティです。
これは HTML の [`enterkeyhint`](/ja/docs/Web/HTML/Reference/Global_attributes/enterkeyhint) グローバル属性を反映し、以下の値のみを文字列として受け入れます。

- `'enter'`: 通常は改行を挿入することを示します。
- `'done'`: 通常はこれ以上入力するものがなく、{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) が閉じます。
- `'go'`: 通常、ユーザーを入力したテキストの宛先に移動させます。
- `'next'`: 通常、ユーザーを次のテキスト入力フィールドに移動させます。
- `'previous'`: 通常、ユーザーを前のテキスト入力フィールドに移動させます。
- `'search'`: 通常、ユーザーを入力したテキストの検索結果に移動させます。
- `'send'`: 通常、テキストを宛先に送信します。

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

- HTML の [`enterkeyhint`](/ja/docs/Web/HTML/Reference/Global_attributes/enterkeyhint) グローバル属性
