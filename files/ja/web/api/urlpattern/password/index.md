---
title: "URLPattern: password プロパティ"
short-title: password
slug: Web/API/URLPattern/password
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`password`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のパスワード部分と照合するパターンを含む文字列です。
この値は、正規化が行われるため、コンストラクターへの入力と異なる場合があります。

## 値

文字列です。

## 例

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、 `correct-horse-battery{-staple}?` を `password` 部分として指定しています。このパターンは、パスワード`correct-horse-battery`および`correct-horse-battery-staple`と一致します。

```js
const pattern = new URLPattern({ password: "correct-horse-battery{-staple}?" });
console.log(pattern.password); // 'correct-horse-battery{-staple}?'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
