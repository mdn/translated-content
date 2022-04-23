---
title: location.ancestorOrigins
slug: Web/API/Location/ancestorOrigins
tags:
  - API
  - Location
  - プロパティ
  - リファレンス
browser-compat: api.Location.ancestorOrigins
translation_of: Web/API/Location/ancestorOrigins
---
{{APIRef("Location")}}

**`ancestorOrigins`** は {{domxref("Location")}} インターフェイスの読み取り専用プロパティで、静的な {{domxref("DOMStringList")}} であり、指定された {{domxref("Location")}} オブジェクトに関連付けられたこの文書の閲覧コンテキストのすべての祖先のオリジンを、逆順で保持します。

文書のスクリプトで `location.ancestorOrigins` を使用すると、例えば、文書がフレーム化されることを予期していないサイトによってフレーム化されている場合、いつでもそれを判断することができます。また、どのサイトやサイトのリストでフレーム化されているかによって、文書の動作を変えるために使用することもできます。

## 構文

```js
const ancestors = location.ancestorOrigins;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
