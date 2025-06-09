---
title: "URLPattern: username プロパティ"
short-title: username
slug: Web/API/URLPattern/username
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`username`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のユーザー名部分と照合するパターンを含む文字列です。
この値は、正規化が行われるため、コンストラクターへの入力と異なる場合があります。

## 値

文字列です。

## 例

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、
`admin` を `username` 部分として指定しています。このパターンは、 URL のユーザー名部分が `admin` である場合のみ一致します。

```js
const pattern = new URLPattern({ username: "admin" });
console.log(pattern.username); // 'admin'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
