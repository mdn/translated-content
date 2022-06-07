---
title: Event.stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
page-type: web-api-instance-method
tags:
  - メソッド
  - リファレンス
browser-compat: api.Event.stopImmediatePropagation
translation_of: Web/API/Event/stopImmediatePropagation
---
{{APIRef("DOM")}}

**`stopImmediatePropagation()`** は {{domxref("Event")}} インターフェイスのメソッドで、呼び出されている同じイベントの他のリスナーを抑止します。

同じイベントタイプで複数のリスナーが同じ要素に装着されている場合、追加された順番に呼び出されます。もし、そのような呼び出しの最中に `stopImmediatePropagation()` が呼び出された場合、残りのリスナーは呼び出されなくなります。

## 構文

```js
event.stopImmediatePropagation();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
