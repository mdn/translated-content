---
title: "URLPattern: search プロパティ"
short-title: search
slug: Web/API/URLPattern/search
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`search`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL の検索部分と照合するパターンを含む文字列です。
この値は、正規化が行われるため、コンストラクターへの入力と異なる場合があります。

## 値

文字列です。

## 例

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、
`*` を `search` 部分として指定しています。このパターンはワイルドカードですので、任意の検索部分に一致します。

```js
const pattern = new URLPattern("https://example.com?*");
console.log(pattern.search); // '*'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
