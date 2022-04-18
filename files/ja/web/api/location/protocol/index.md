---
title: location.protocol
slug: Web/API/Location/protocol
tags:
  - API
  - Location
  - プロパティ
  - リファレンス
browser-compat: api.Location.protocol
tranalation_of: Web/API/Location/protocol
---
{{ApiRef("Location")}}

**`protocol`** は {{domxref("Location")}} インターフェイスのプロパティで、 URL のプロトコルスキームを、最後の `':'` を含めて表す {{domxref("USVString")}} です。

## 構文

```js
string = object.protocol;
object.protocol = string;
```

## 例

```js
// Let's an <a id="myAnchor" href="https://developer.mozilla.org/ja/Location.protocol"> element be in the document
var anchor = document.getElementById("myAnchor");
var result = anchor.protocol; // Returns:'https:'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
