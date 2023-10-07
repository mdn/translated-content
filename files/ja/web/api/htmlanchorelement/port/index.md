---
title: "HTMLAnchorElement: port プロパティ"
slug: Web/API/HTMLAnchorElement/port
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.port`** プロパティは、URL のポート番号が入った文字列です。 URL に明示的にポート番号が含まれていない場合は、`''` に設定されます。

## 値

文字列です。

## 例

### アンカーリンクからポート番号を取得

```js
// <a id="myAnchor" href="https://developer.mozilla.org:443/ja/docs/HTMLAnchorElement"> 要素が文書にあったとします。
const anchor = document.getElementByID("myAnchor");
anchor.port; // '443' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
