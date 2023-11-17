---
title: "HTMLAnchorElement: protocol プロパティ"
slug: Web/API/HTMLAnchorElement/protocol
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.protocol`** プロパティは、 URL のプロトコルスキームを表す文字列で、最後の `':'` を含みます。

## 値

文字列です。

## 例

### アンカーリンクのプロトコルを取得

```js
// <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> 要素が文書にあったとします。
const anchor = document.getElementById("myAnchor");
anchor.protocol; // 'https:' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
