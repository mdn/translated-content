---
title: TypedArray.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
---

{{JSRef}}

**`every()`** メソッドは、型付き配列内のすべての要素が提供された関数で実装されたテストに合格するかどうかをテストします。このメソッドのアルゴリズムは {{jsxref("Array.prototype.every()")}} と同じです。ここで _TypedArray_ は、[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)のうちの 1 つです。

{{EmbedInteractiveExample("pages/js/typedarray-every.html")}}

## 構文

```
typedarray.every(callback[, thisArg])
```

### 引数

- `callback`

  - : 各要素に対してテストを実行する関数です。次の 3 つの引数を取ります。

    - `element`
      - : 現在処理されている型付き配列の要素です。
    - `index` {{Optional_inline}}
      - : 現在処理されている型付き配列の要素の添字です。
    - `array` {{Optional_inline}}
      - : `every` が実行されている型付き配列です。

- `thisArg` {{Optional_inline}}
  - : `callback` を実行するときに `this` として使用すされる値です。

### 返値

`callback` 関数が型付き配列のすべての要素について{{Glossary("truthy", "真値")}}を返した場合は `true`。それ以外は `false`。

## 解説

`every` は、与えられた `callback` 関数を、配列に含まれる各要素に対して一度ずつ、 `callback` が{{Glossary("falsy", "偽値")}}を返す要素が見つかるまで呼び出します。そのような要素が見つかると、`every` メソッドはただちに `false` を返します。`callback` がすべての要素に対して{{Glossary("truthy", "真値")}}を返した場合、`every` は `true` を返します。

`callback` は、要素の値、要素の添字、走査されている型付き配列オブジェクトという 3 つの引数をともなって呼び出されます。

`thisArg` 引数が `every` に与えられると、それがコールバックの `this` として使用されます。それ以外の場合は `undefined` が `this` の値として使われます。 `callback` が最終的に監視できる `this` の値は、[関数から見た `this` の決定に関する一般的なルール](/ja/docs/Web/JavaScript/Reference/Operators/this)によって決定されます。

`every` は呼び出された型付き配列を変化させません。

## 例

### すべての型付き配列の要素の大きさをテストする

次の例は、型付き配列内のすべての要素が 10 より大きいかどうかテストします。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).every(isBigEnough);   // false
new Uint8Array([12, 54, 18, 130, 44]).every(isBigEnough); // true
```

### アロー関数を使用して型付き配列の要素をテストする

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)によって、同じテストをより短い構文で実現できます。

```js
new Uint8Array([12, 5, 8, 130, 44]).every(elem => elem >= 10); // false
new Uint8Array([12, 54, 18, 130, 44]).every(elem => elem >= 10); // true
```

## 仕様書

| 仕様書                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.every', 'TypedArray.prototype.every')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.every")}}

## 関連情報

- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.every()")}}
