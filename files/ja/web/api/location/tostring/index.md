---
title: location.toString()
slug: Web/API/Location/toString
tags:
  - API
  - Location
  - メソッド
  - リファレンス
  - Stringifier
browser-compat: api.Location.toString
translation_of: Web/API/Location/toString
---
{{ApiRef("Location")}}

**`toString()`** は {{domxref("Location")}} インターフェイスの{{Glossary("stringifier", "文字列化")}}メソッドで、 {{domxref("USVString")}} で URL 全体を返します。これは {{domxref("Location.href")}} の読み取り専用版です。

## 構文

```js
string = object.toString();
```

## 例

```js
// 文書内に <a id="myAnchor" href="/ja/docs/Location/toString"> 要素があると想像してください
var anchor = document.getElementById("myAnchor");
var result = anchor.toString(); // 返値: 'https://developer.mozilla.org/ja/docs/Location/toString'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
