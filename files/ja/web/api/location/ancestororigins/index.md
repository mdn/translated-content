---
title: "location: ancestorOrigins プロパティ"
slug: Web/API/Location/ancestorOrigins
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Location")}}

**`ancestorOrigins`** は {{domxref("Location")}} インターフェイスの読み取り専用プロパティで、静的な {{domxref("DOMStringList")}} であり、指定された {{domxref("Location")}} オブジェクトに関連付けられたこの文書の閲覧コンテキストのすべての祖先のオリジンを、逆順で保持します。

文書のスクリプトで `location.ancestorOrigins` を使用すると、例えば、文書がフレーム化されることを予期していないサイトによってフレーム化されている場合、いつでもそれを判断することができます。また、どのサイトやサイトのリストでフレーム化されているかによって、文書の動作を変えるために使用することもできます。

## 値

{{domxref("DOMStringList")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
