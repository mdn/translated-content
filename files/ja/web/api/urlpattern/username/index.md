---
title: "URLPattern: username プロパティ"
short-title: username
slug: Web/API/URLPattern/username
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

**`username`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のユーザー名部分と照合する[パターン](/ja/docs/Web/API/URL_Pattern_API#パターンの構文)を含む文字列です。

この値は、[コンストラクター](/ja/docs/Web/API/URLPattern/URLPattern)に渡されたユーザー名のパターンの[正規化値](/ja/docs/Web/API/URL_Pattern_API#パターンの正規化)、または任意のユーザー名に一致するデフォルト値 (`"*"`) のどちらかです。

## 値

文字列です。

## 例

### 基本的な使い方

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、
`admin` を `username` 部分として指定しています。このパターンは、 URL のユーザー名部分が `admin` である場合のみ一致します。

```js
const pattern = new URLPattern({ username: "admin" });
console.log(pattern.username); // "admin"
console.log(pattern.test("http://admin:password@example.com/")); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
