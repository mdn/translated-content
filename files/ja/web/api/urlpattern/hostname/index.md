---
title: "URLPattern: hostname プロパティ"
short-title: hostname
slug: Web/API/URLPattern/hostname
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`hostname`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のホスト名部分と照合するパターンを含む文字列です。
この値は、正規化が行われるため、コンストラクターへの入力と異なる場合があります。

## 値

文字列です。

## 例

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、 `*.example.org` を `hostname` 部分として指定しています。このパターンは、`example.org` の直接のサブドメインであるホスト名すべてに一致します。

```js
const pattern = new URLPattern("https://*.example.org");
console.log(pattern.hostname); // '*.example.org'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
