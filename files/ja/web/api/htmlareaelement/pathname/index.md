---
title: "HTMLAreaElement: pathname プロパティ"
slug: Web/API/HTMLAreaElement/pathname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAreaElement.pathname`** プロパティは、最初の `'/'` とその後に続く URL のパスが入った文字列（または、パスがない場合は空の文字列）です。

## 値

文字列です。

## 例

```js
// <area id="myArea" href="/ja/docs/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementById("myArea");
area.pathname; // '/ja/docs/HTMLAreaElement' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
