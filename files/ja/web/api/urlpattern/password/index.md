---
title: "URLPattern: password プロパティ"
short-title: password
slug: Web/API/URLPattern/password
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

**`password`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のパスワード部分と照合する[パターン](/ja/docs/Web/API/URL_Pattern_API#パターンの構文)を含む文字列です。

この値は、[コンストラクター](/ja/docs/Web/API/URLPattern/URLPattern)に渡されたパスワードのパターンの[正規化値](/ja/docs/Web/API/URL_Pattern_API#パターンの正規化)、任意のパスワードに一致するデフォルト値 (`"*"`) のどちらかです。

## 値

文字列です。

## 例

### 基本的な使い方

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、 `correct-horse-battery{-staple}?` を `password` 部分として指定しています。
このパターンは、パスワード `correct-horse-battery` および `correct-horse-battery-staple` と一致します。

```js
const pattern = new URLPattern({ password: "correct-horse-battery{-staple}?" });
console.log(pattern.password); // 'correct-horse-battery{-staple}?'
console.log(pattern.test("https://user:correct-horse-battery@example.com")); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
