---
title: "HTMLAnchorElement: password プロパティ"
slug: Web/API/HTMLAnchorElement/password
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.password`** プロパティは、ドメイン名の前で指定されたパスワードが入った文字列です。

先に [`username`](/ja/docs/Web/API/HTMLAnchorElement/username) プロパティを設定せずに設定しようとすると、暗黙のうちに失敗します。

## 値

文字列です。

## 例

```js
// <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/HTMLAnchorElement"> 要素が文書にあったとします
const anchor = document.getElementByID("myAnchor");
anchor.password; // 'flabada' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
