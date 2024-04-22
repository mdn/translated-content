---
title: "HTMLAnchorElement: href プロパティ"
slug: Web/API/HTMLAnchorElement/href
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.href`** は{{Glossary("stringifier", "文字列化")}}プロパティで、URL 全体を含む文字列を返し、 href を更新することもできます。

## 値

文字列です。

## 例

```js
// <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> 要素が文書にあったとします
const anchor = document.getElementById("myAnchor");
anchor.href; // returns 'https://developer.mozilla.org/en-US/HTMLAnchorElement'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
