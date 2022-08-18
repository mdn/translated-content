---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/from
---
{{JSRef}}

**`Array.from()`** メソッドは、配列のようなオブジェクトや反復可能オブジェクトから、浅くコピーされた新しい `Array` インスタンスを生成します。

{{EmbedInteractiveExample("pages/js/array-from.html")}}

## 構文

```
Array.from(arrayLike[, mapFn[, thisArg]])
```

### 引数

- `arrayLike`
  - : 配列に変換する配列のようなオブジェクトまたは反復可能オブジェクト
- `mapFn` {{Optional_inline}}
  - : 配列のすべての要素に対して呼び出される Map 関数。
- `thisArg` {{Optional_inline}}
  - : `mapFn` を実行する時に `this` として使用する値。

### 返値

新しい {{jsxref("Array")}} インスタンス。

## 解説

`Array.from()` は、以下のものから `Array` を生成します。

- 配列のようなオブジェクト (`length` プロパティおよびインデックス付けされた要素を持つオブジェクト) もしくは
- [反復可能オブジェクト](/ja/docs/Web/JavaScript/Guide/iterable) ({{jsxref("Map")}} や {{jsxref("Set")}} のような要素を取得するオブジェクト)

`Array.from()` は任意の引数 `mapFn` を持ちます。これは、作成した配列 (もしくは、サブクラスオブジェクト) のすべての要素に対して {{jsxref("Array.prototype.map", "map")}} 関数を実行できます。

より明確に言うと、中間配列を生成しないことを除いて、`Array.from(obj, mapFn, thisArg)` は `Array.from(obj).map(mapFn, thisArg)` と同じ結果です。中間配列は、適切な型に合うように丸められた値を持つ必要があるため、[typed arrays](/ja/docs/Web/JavaScript/Typed_arrays) のような配列サブクラスにとっては特に重要です。

> **Note:** これは、[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)のような特定の配列のサブクラスでは特に重要です。なぜなら、中間配列の値は適切な型に収まるように切り捨てられている必要があるからです。

`from()` メソッドの `length` プロパティは 1 です。

ES2015 では、class 構文により定義済みクラスとユーザー定義クラスの両方をサブクラス化することができます。結果として、`Array.from` のような静的メソッドは `Array` のサブクラスに「継承」され、`Array` ではなくサブクラスのインスタンスを生成します。

## 例

### `String` からの配列の生成

```js
Array.from('foo');
// [ "f", "o", "o" ]
```

### `Set` からの配列の生成

```js
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

### `Map` からの配列の生成

```js
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

### 配列のようなオブジェクト (引数) からの配列の生成

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

### アロー関数と `Array.from` の使用

```js
// 要素を操作するためのマップ関数として
// アロー関数を使用
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]


// 連番の生成
// 配列はそれぞれの場所が `undefined` で初期化されるため、
// 以下の `v` の値は `undefined` になる
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### 連番の生成 (範囲指定)

```js
// 連番の生成関数 (Clojure や PHP などでよく "range" と呼ばれる)
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// 0..4 の範囲の数値を生成
range(0, 4, 1);
// [0, 1, 2, 3, 4]

//  1..10 の範囲の数値を 2 ごとに生成
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Array.from を使用して順番通りになるようアルファベットを生成
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

## 仕様

| 仕様書                                                                       | Initial publication |
| ---------------------------------------------------------------------------- | ------------------- |
| {{SpecName('ESDraft', '#sec-array.from', 'Array.from')}} | ECMAScript 2015     |

## ブラウザー実装状況

{{Compat("javascript.builtins.Array.from")}}

## ポリフィル

`Array.from` は ECMA-262 標準の第 6 版に追加されました。そのため他の標準の実装には存在しない可能性があります。

次のコードをスクリプトの先頭に記述する事により、`Array.from` がネイティブでサポートされていない環境でもこれを使用できるようになります。

> **Note:** **ポリフィルの注意:** これは、ECMA-262 第 6 版で定められたアルゴリズムと全く同じです。`Object` と `TypeError` はそれぞれオリジナルの値を持ち、`callback.call` は {{jsxref("Function.prototype.call")}} のオリジナルの値として評価されます。
>
> また、真の iterables ポリフィルできないので、この実装は ECMA-262 第 6 版で定義されている一般的な iterables をサポートしません。

```
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
    Array.from = (function () {
        var symbolIterator;
        try {
            symbolIterator = Symbol.iterator
                ? Symbol.iterator
                : 'Symbol(Symbol.iterator)';
        } catch (e) {
            symbolIterator = 'Symbol(Symbol.iterator)';
        }

        var toStr = Object.prototype.toString;
        var isCallable = function (fn) {
            return (
                typeof fn === 'function' ||
                toStr.call(fn) === '[object Function]'
            );
        };
        var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) return 0;
            if (number === 0 || !isFinite(number)) return number;
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        var setGetItemHandler = function setGetItemHandler(isIterator, items) {
            var iterator = isIterator && items[symbolIterator]();
            return function getItem(k) {
                return isIterator ? iterator.next() : items[k];
            };
        };

        var getArray = function getArray(
            T,
            A,
            len,
            getItem,
            isIterator,
            mapFn
        ) {
            // 16. Let k be 0.
            var k = 0;

            // 17. Repeat, while k < len… or while iterator is done (also steps a - h)
            while (k < len || isIterator) {
                var item = getItem(k);
                var kValue = isIterator ? item.value : item;

                if (isIterator && item.done) {
                    return A;
                } else {
                    if (mapFn) {
                        A[k] =
                            typeof T === 'undefined'
                                ? mapFn(kValue, k)
                                : mapFn.call(T, kValue, k);
                    } else {
                        A[k] = kValue;
                    }
                }
                k += 1;
            }

            if (isIterator) {
                throw new TypeError(
                    'Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1'
                );
            } else {
                A.length = len;
            }

            return A;
        };

        // The length property of the from method is 1.
        return function from(arrayLikeOrIterator /*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;

            // 2. Let items be ToObject(arrayLikeOrIterator).
            var items = Object(arrayLikeOrIterator);
            var isIterator = isCallable(items[symbolIterator]);

            // 3. ReturnIfAbrupt(items).
            if (arrayLikeOrIterator == null && !isIterator) {
                throw new TypeError(
                    'Array.from requires an array-like object or iterator - not null or undefined'
                );
            }

            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) {
                    throw new TypeError(
                        'Array.from: when provided, the second argument must be a function'
                    );
                }

                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }

            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);

            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method
            // of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            return getArray(
                T,
                A,
                len,
                setGetItemHandler(isIterator, items),
                isIterator,
                mapFn
            );
        };
    })();
}
```

## 関連情報

- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
