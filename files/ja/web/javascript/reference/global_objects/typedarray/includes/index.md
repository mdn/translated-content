---
title: TypedArray.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
---

{{JSRef}}

**`includes()`** メソッドは、型付き配列が特定の要素を含んでいるかどうかを判断し、その結果に応じて `true` か `false` を返します。このメソッドは {{jsxref("Array.prototype.includes()")}} と同じアルゴリズムです。 _TypedArray_ は、ここでは [型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)のうちの一つです。

{{EmbedInteractiveExample("pages/js/typedarray-includes.html")}}

## 構文

```
typedarray.includes(searchElement[, fromIndex]);
```

### 引数

- `searchElement`
  - : 探す対象の要素
- `fromIndex`
  - : オプション。`searchElement`を探し始める配列内の位置。既定では 0 です。

### 返値

{{jsxref("Boolean")}} です。

## 例

### includes の使用

```js
var uint8 = new Uint8Array([1,2,3]);
uint8.includes(2);     // true
uint8.includes(4);     // false
uint8.includes(3, 3);  // false

// NaN の扱い (Float32 および Float64 に限り true)
new Uint8Array([NaN]).includes(NaN); // false (コンストラクターに渡した NaN は 0 に変換されるため)
new Float32Array([NaN]).includes(NaN); // true;
new Float64Array([NaN]).includes(NaN); // true;
```

## 仕様書

| 仕様書                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.includes', 'TypedArray.prototype.includes')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.includes")}}

## 関連情報

- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
