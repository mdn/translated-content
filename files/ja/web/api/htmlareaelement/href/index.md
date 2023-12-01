---
title: "HTMLAreaElement: href プロパティ"
slug: Web/API/HTMLAreaElement/href
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAreaElement.href`** は{{Glossary("stringifier", "文字列化")}}プロパティで、URL 全体を含む文字列を返し、href を更新することができます。

## 値

文字列です。

## 例

```js
// <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementById("myArea");
area.href; // 'https://developer.mozilla.org/en-US/HTMLAreaElement' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
