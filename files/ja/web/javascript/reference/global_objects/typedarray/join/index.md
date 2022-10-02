---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
---

{{JSRef}}

**`join()`** メソッドは、配列のすべての要素を 1 本の文字列に結合します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.join()")}} と同じです。ここで _TypedArray_ は、[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)のうちの 1 つです。

{{EmbedInteractiveExample("pages/js/typedarray-join.html")}}

## 構文

```
arr.join([separator])
```

### 引数

- `separator` {{optional_inline}}
  - : 配列の各要素を区切る文字列を指定します。 `separator` は、必要であれば文字列に変換されます。省略した場合、配列の要素はカンマ (",") で区切られます。

### 返値

配列のすべての要素が結合された文字列です。

## 例

### join() の使用

```js
var uint8 = new Uint8Array([1,2,3]);
uint8.join();      // '1,2,3'
uint8.join(' / '); // '1 / 2 / 3'
uint8.join('');    // '123'
```

## ポリフィル

_TypedArray_ という名前のグローバルオブジェクトはないため、ポリフィルの使用は「必要に応じて」の原則で行う必要があります。

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
if (!Uint8Array.prototype.join) {
  Object.defineProperty(Uint8Array.prototype, 'join', {
    value: Array.prototype.join
  });
}
```

{{jsxref("Object.defineProperty")}} に対応していない本当に古い JavaScript エンジンに対応する必要がある場合は、列挙不可能にすることができないため、 `Array.prototype` メソッドのポリフィルを行わないことが適切です。

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.join', 'TypedArray.prototype.join')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.join")}}

## 関連情報

- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.join()")}}
