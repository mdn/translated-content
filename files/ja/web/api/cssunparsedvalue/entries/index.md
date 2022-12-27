---
title: CSSUnparsedValue.entries()
slug: Web/API/CSSUnparsedValue/entries
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

**`CSSUnparsedValue.entries()`** メソッドは、指定されたオブジェクトの列挙可能なプロパティ `[key, value]` の組の配列を、 {{jsxref("Statements/for...in", "for...in")}} ループで提供されるのと同じ順序で返します (違いは for-in ループがプロトタイプチェーン上のプロパティも列挙することです)。

## 構文

```
CSSUnparsedValue.entries(obj)
```

### 引数

- `obj`
  - : {{domxref('CSSUnparsedValue')}} で、列挙可能な固有のプロパティの `[key, value]` の組を返します。

### 返値

指定された `CSSUnparsedValue` の配列で、列挙可能な固有のプロパティの `[key, value]` の組。

## 仕様書

| 仕様書                                                                   | 状態                     | 備考     |
| ------------------------------------------------------------------------ | ------------------------ | -------- |
| {{SpecName('CSSOM','#cssunparsedvalue','entries()')}} | {{Spec2('CSSOM')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.CSSUnparsedValue.entries")}}
