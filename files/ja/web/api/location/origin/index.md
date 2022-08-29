---
title: location.origin
slug: Web/API/Location/origin
tags:
  - API
  - Location
  - プロパティ
  - リファレンス
browser-compat: api.Location.origin
translation_of: Web/API/Location/origin
---
{{APIRef("Location")}}

**`origin`** は {{domxref("Location")}} インターフェイスの読み取り専用プロパティで、 {{domxref("USVString")}} で指定された URL のオリジンの Unicode シリアライズが入ります。

すなわち、下記のようになります。

- `http` または `https` を使用する URL の場合、スキームの後に `'://'` を、その後にドメインを、その後に `':'` を、その後にポート（明示的に指定されなかった場合は、それぞれ既定の `80` および `443` のポート）を指定することができます。
- `file:` スキームを使用した URL では、値はブラウザー依存になります。
- `blob:` スキームを使用した URL では、その URL のオリジンが `blob:` に続きます。例えば、 `"blob:https://mozilla.org"` は `"https://mozilla.org"` がついています。

{{AvailableInWorkers}}

## 構文

```js
string = object.origin;
```

## 例

```js
// このページ上の、オリジンを返します。
var result = window.location.origin; // Returns:'https://developer.mozilla.org'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
