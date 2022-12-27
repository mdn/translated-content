---
title: TypedArray.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
---

{{JSRef}}

**`findIndex()`** メソッドは、型付き配列内の要素が与えられたテスト関数を満たす場合、型付き配列内の**位置**を返します。さもなければ、 -1 が返されます。

{{jsxref("TypedArray.find", "find()")}} メソッドも参照してください。これは型付き配列内の見つかった要素の添字の代わりに**値**を返します。

{{EmbedInteractiveExample("pages/js/typedarray-findindex.html")}}

## 構文

```
typedarray.findIndex(callback[, thisArg])
```

### 引数

- `callback`

  - : 型付き配列の各要素で実行する関数。3 つの引数を取ります。

    - `element`
      - : 型付き配列内で現在処理されている要素。
    - `index`
      - : 型付き配列内で現在処理されている要素の位置。
    - `array`
      - : `findIndex()` を呼び出した元の配列。

- `thisArg` {{optional_inline}}
  - : `callback` を実行するときに `this` として使用するオブジェクト。

### 返値

テストを満たした配列の要素の位置を返します。それ以外の場合は、 `-1` を返します。

## 解説

`findIndex()` メソッドは、 `callback` 関数が true 値を返す要素を見つけるまで、型付き配列内に存在している各要素に対して一度ずつ `callback` 関数を実行します。そのような要素が見つかったら、 `findIndex()` はすぐに要素の添字を返します。さもなければ、 `findIndex()` メソッドは -1 を返します。 `callback` は型付き配列の値を割り当てた位置に対してのみ呼び出されます。つまり、削除されたり、値が割り当てられて位置に対しては呼び出されません。

`callback` は、要素の値、要素の位置、走査中の型付き配列の 3 つの引数とともに呼び出されます。

`thisArg` 引数が `findIndex()` に与えられた場合、 `callback` の各呼び出しで `this` として使用されます。`thisArg` 引数が与えられなかった場合は、 {{jsxref("undefined")}} が使用されます。

`findIndex()` メソッドは呼び出される型付き配列を変更しません。

`findIndex()` によって処理される要素の範囲は、最初に `callback` が呼び出される前に設定されます。 `findIndex()` の呼び出しが始まったあとで型付き配列に追加された要素は、 `callback` メソッドによって処理されません。存在していて、処理されていない型付き配列の要素が `callback` によって変更された場合、処理している `callback` 関数に渡される値は、 `findIndex()` が要素の位置を処理する直前の値です。削除された要素は処理されません。

## 例

### 型付き配列内の素数の位置を検索する

次の例では、型付き配列の中で素数の入った最初の要素の位置を返し、素数が見つからなかった場合は `-1` を返します。

```js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

var uint8 = new Uint8Array([4, 6, 8, 12]);
var uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(isPrime)); // -1, not found
console.log(uint16.findIndex(isPrime)); // 2
```

## ポリフィル

```js
TypedArray.prototype.findIndex = Array.prototype.findIndex = Array.prototype.findIndex || function(evaluator, thisArg) {
        'use strict';
        if (!this) {
          throw new TypeError('Array.prototype.some called on null or undefined');
        }

        if (typeof(evaluator) !== 'function') {
            if (typeof(evaluator) === 'string') {
                // Attempt to convert it to a function
                if ( ! (evaluator = eval(evaluator)) ){
                    throw new TypeError();
                }
            } else {
                throw new TypeError();
            }
        }

        var i;
        if (thisArg === undefined) {  // Optimize for thisArg
            for (i in this) {
                if (evaluator(this[i], i, this)) {
                    return i;
                }
            }
            return -1;
        }
        for (i in this) {
            if (evaluator.call(thisArg, this[i], i, this)) {
                return i;
            }
        }
        return -1;
};
```

## 仕様書

| 仕様書                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.findindex', '%TypedArray%.prototype.findIndex')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.findIndex")}}

## 関連情報

- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
