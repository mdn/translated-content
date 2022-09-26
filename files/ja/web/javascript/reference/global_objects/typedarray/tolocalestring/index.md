---
title: TypedArray.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
---

{{JSRef}}

**`toLocaleString()`** メソッドは、型付き配列の要素を表す文字列を返します。要素は文字列に変換され、ロケール固有の文字列 (カンマ "," など) で区切られます。このメソッドは {{jsxref("Array.prototype.toLocaleString()")}} と同じアルゴリズムを持ち、型付き配列の要素は数値なので、各要素に対して {{jsxref("Number.prototype.toLocaleString()")}} と同じアルゴリズムが適用されます。ここで _TypedArray_ は[型指定された](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)配列型の 1 つです。

## 構文

```
typedarray.toLocaleString([locales [, options]]);
```

### 引数

`locales` と `options` の引数は、関数の動作をカスタマイズし、アプリケーションがフォーマット規則を使用する言語を指定できるようにします。 `locales` と `options` の引数を無視する実装では、使用されるロケールと返される文字列の形式は完全に実装に依存します。

これらの引数の詳細および使用方法については、 {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}} コンストラクターを参照してください。

### 返値

型付き配列の要素を表す文字列。

## 例

### toLocaleString の使用

```js
var uint = new Uint32Array([2000, 500, 8123, 12, 4212]);

uint.toLocaleString();
// if run in a de-DE locale
// "2.000,500,8.123,12,4.212"

uint.toLocaleString('en-US');
// "2,000,500,8,123,12,4,212"

uint.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
```

## 仕様書

| 仕様書                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.tolocalestring', 'TypedArray.prototype.toLocaleString')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.toLocaleString")}}

## 関連情報

- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
