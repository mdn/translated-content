---
title: location.pathname
slug: Web/API/Location/pathname
tags:
  - API
  - Location
  - プロパティ
  - リファレンス
browser-compat: api.Location.pathname
translation_of: Web/API/Location/pathname
---
{{ApiRef("Location")}}

**`pathname`** は {{domxref("Location")}} インターフェイスのプロパティで、 {{domxref("USVString")}} でその位置を表す URL のパスを持ちます。パスがない場合は空文字列になります。

## 構文

```js
string = object.pathname;
object.pathname = string;
```

## 例

```js
// Let's an <a id="myAnchor" href="/ja/docs/Location.pathname"> element be in the document
var anchor = document.getElementById("myAnchor");
var result = anchor.pathname; // Returns:'/ja/docs/Location.pathname'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
