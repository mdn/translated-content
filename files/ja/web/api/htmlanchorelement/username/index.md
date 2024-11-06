---
title: "HTMLAnchorElement: username プロパティ"
slug: Web/API/HTMLAnchorElement/username
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.username`** プロパティは、ドメイン名の前で指定されたユーザー名の入った文字列です。

## 値

文字列です。

## 例

### アンカーリンクからユーザー名を取得

```js
// <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/ja/docs/HTMLAnchorElement"> 要素が文書にあったとします
const anchor = document.getElementByID("myAnchor");
anchor.username; // 'anonymous' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
