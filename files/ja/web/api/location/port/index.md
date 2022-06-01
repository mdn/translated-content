---
title: location.port
slug: Web/API/Location/port
tags:
  - API
  - Location
  - プロパティ
  - リファレンス
browser-compat: api.Location.port
translation_of: Web/API/Location/port
---
{{ApiRef("Location")}}

**`port`** は {{domxref("Location")}} インターフェイスのプロパティで、 {{domxref("USVString")}} で URL のポート番号を表します。 URL に明示的にポート番号が指定されていない場合は、 `''` に設定されます。

## 構文

```js
string = object.port;
object.port = string;
```

## 例

```js
// Let's an <a id="myAnchor" href="https://developer.mozilla.org:443/ja/docs/Location.port"> element be in the document
var anchor = document.getElementByID("myAnchor");
var result = anchor.port; // Returns:'443'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
