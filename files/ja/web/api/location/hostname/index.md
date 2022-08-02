---
title: location.hostname
slug: Web/API/Location/hostname
tags:
  - API
  - Location
  - プロパティ
  - リファレンス
browser-compat: api.Location.hostname
translation_of: Web/API/Location/hostname
---
{{ApiRef("URL API")}}

**`hostname`** は {{domxref("Location")}} インターフェイスのプロパティで、 {{domxref("USVString")}} で URL のドメインを保持します。

## 構文

```js
string = object.hostname;
object.hostname = string;
```

## 例

```js
var anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org:4097/ja/docs/Location.hostname";

console.log(anchor.hostname);  // developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
