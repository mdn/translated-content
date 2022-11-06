---
title: ArrayBuffer.isView()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
---

{{JSRef}}

**`ArrayBuffer.isView()`** メソッドは、渡された値が `ArrayBuffer` のビューのうちの一つ、例えば[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)や {{jsxref("DataView")}} であるかどうかを判断します。

{{EmbedInteractiveExample("pages/js/arraybuffer-isview.html","shorter")}}

## 構文

```
ArrayBuffer.isView(value)
```

### 引数

- `value`
  - : チェックする値です。

### 返値

渡された引数が {{jsxref("ArrayBuffer")}} のビューのうちの一つであれば `true` を、そうでなければ `false` を返します。

## 例

### isView の使用

```js
ArrayBuffer.isView();                    // false
ArrayBuffer.isView([]);                  // false
ArrayBuffer.isView({});                  // false
ArrayBuffer.isView(null);                // false
ArrayBuffer.isView(undefined);           // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array());    // true
ArrayBuffer.isView(new Float32Array());  // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

const buffer = new ArrayBuffer(2);
const dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## 仕様書

| 仕様書                                                                                           |
| ------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-arraybuffer.isview', 'ArrayBuffer.isView')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.ArrayBuffer.isView")}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
