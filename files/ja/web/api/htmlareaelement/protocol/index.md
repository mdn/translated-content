---
title: "HTMLAreaElement: protocol プロパティ"
slug: Web/API/HTMLAreaElement/protocol
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAreaElement.protocol`** プロパティは、 URL のプロトコルスキームを表す文字列で、最後の `':'` を含みます。

## 値

文字列です。

## 例

### エリアのリンクのプロトコルを取得

```js
// <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> 要素が文書にあったとします。
const area = document.getElementById("myArea");
area.protocol; // 'https:' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
