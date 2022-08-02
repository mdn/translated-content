---
title: location.host
slug: Web/API/Location/host
tags:
  - API
  - Location
  - プロパティ
  - リファレンス
browser-compat: api.Location.host
translation_of: Web/API/Location/host
---
{{ApiRef("Location")}}

**`host`** は {{domxref("Location")}} インターフェイスのプロパティで、 {{domxref("USVString")}} でホスト、すなわち*ホスト名*と、 URL の*ポート番号*が空でなければ、 `':'` およびその*ポート番号*を保持します。

## 構文

```js
string = object.host;
object.host = string;
```

## 例

```js
var anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/ja/Location.host"
anchor.host == "developer.mozilla.org"

anchor.href = "https://developer.mozilla.org:443/ja/Location.host"
anchor.host == "developer.mozilla.org"
// The port number is not included because 443 is the scheme's default port

anchor.href = "https://developer.mozilla.org:4097/ja/Location.host"
anchor.host == "developer.mozilla.org:4097"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
