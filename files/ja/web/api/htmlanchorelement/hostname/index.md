---
title: "HTMLAnchorElement: hostname プロパティ"
slug: Web/API/HTMLAnchorElement/hostname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.hostname`** プロパティは、URL のドメインを含む文字列です。

## 値

文字列です。

## 例

```js
// <a id="myAnchor" href="/ja/docs/HTMLAnchorElement"> 要素が文書内にあるとします
const anchor = document.getElementById("myAnchor");
anchor.hostname; // 'developer.mozilla.org' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
