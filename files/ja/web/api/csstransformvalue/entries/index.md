---
title: CSSTransformValue.entries()
slug: Web/API/CSSTransformValue/entries
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`CSSTransformValue.entries()`** メソッドは、指定されたオブジェクト自身で列挙可能なプロパティ `[key, value]`のペアを {{jsxref("for...in")}} ループによって提供されるのと同じ順序の配列で返します（違いは for-in ループがプロトタイプチェーンでも同様に列挙するところです）。

## 構文

```js-nolint
entries(obj)
```

### 引数

- `obj`
  - : 自身のプロパティ `[key, value]` の組を列挙して返す {{domxref('CSSTransformValue')}} を指定します。

### 返値

指定された `CSSTransformValue` オブジェクト自身の列挙可能なプロパティ `[key, value]` のペアの配列です。

## 例

To Do

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
