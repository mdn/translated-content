---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
---

{{JSRef}}

**`TypedArray.from()`** メソッドは、配列風オブジェクトや反復可能オブジェクトから新しい[型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)を生成します。このメソッドは {{jsxref("Array.from()")}} とほぼ同じです。

{{EmbedInteractiveExample("pages/js/typedarray-from.html","shorter")}}

## 構文

```
TypedArray.from(source[, mapFn[, thisArg]])
```

ここで `TypedArray` は次のいずれかです。

- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}

### 引数

- `source`
  - : 型付き配列に変換する配列風オブジェクトか反復可能オブジェクト
- `mapFn` {{optional_inline}}
  - : 型付き配列のすべての要素に適用される map 関数。
- `thisArg` {{optional_inline}}
  - : `mapFn` を実行するときに `this` として使う値。

### 返値

新しい {{jsxref("TypedArray")}} インスタンス。

## 解説

`TypedArray.from()` によって下記から型付き配列を生成できます:

- 配列風オブジェクト (`length` プロパティと、番号の振られた要素をもつオブジェクト)
- [反復可能オブジェクト](/ja/docs/Web/JavaScript/Guide/iterable) ({{jsxref("Map")}} や {{jsxref("Set")}} のように要素が取得できるオブジェクト)

`TypedArray.from()` は省略可能な引数 `mapFn` を持ち、これは生成中の型付き配列 (またはサブクラスのオブジェクト) のそれぞれの要素に対して {{jsxref("Array.prototype.map", "map()")}} 関数を実行することができます。すなわち、以下のものと同等です。

- `TypedArray.from(obj, mapFn, thisArg)`
- `TypedArray.from(Array.prototype.map.call(obj, mapFn, thisArg))`.

`from()` メソッドの `length` プロパティは `1` です。

### Array.from() との違い

{{jsxref("Array.from()")}} と `TypedArray.from()` の間には、いくつかの微妙な違いがあります。

- `TypedArray.from()` に渡された `thisArg` の値がコンストラクターではなかった場合、 `TypedArray.from()` で {{jsxref("TypeError")}} が発生します。これは `Array.from()` が既定で新しい {{jsxref("Array")}} を生成するためです。
- `TypedArray.from()` は `[[Put]]` を使用します。 `Array.from()` は `[[DefineProperty]]` を使用します。 従って {{jsxref("Proxy")}} オブジェクトを使っている場合は、新しい要素を追加するときに {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty")}} ではなく {{jsxref("Global_Objects/Proxy/handler/set", "handler.set")}} が呼び出されます。
- `source` 引数がイテレーターであった場合、 `TypedArray.from()` は最初にイテレーターからすべての値を集め、その数の大きさを持つ `thisArg` のインスタンスを生成し、そのインスタンスに値を設定します。 `Array.from()` はイテレーターから取得して各値を設定し、最後に `length` を設定します。
- `Array.from()` がイテレーターではない配列風オブジェクトを受け取ったときは、穴をそのまま残します。 `TypedArray.from()` は必ず密配列 (dense array) を生成します。

## 例

### 反復可能オブジェクトから (Set)

```js
const s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]
```

### 文字列から

```
Int16Array.from('123');
// Int16Array [ 1, 2, 3 ]
```

### アロー関数と map の使用

アロー関数をマップ関数として使用して要素を操作します。

```
Float32Array.from([1, 2, 3], x => x + x);
// Float32Array [ 2, 4, 6 ]
```

### 数列を生成する

```
Uint8Array.from({length: 5}, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

## ポリフィル

JavaScript エンジンの実装がこのメソッドにネイティブに対応していない場合、回避策として、以下のコードをスクリプトの先頭に挿入することで、 `from()` の機能の大部分が使えるようになります。

```js
if (!Int8Array.__proto__.from) {
    (function () {
        Int8Array.__proto__.from = function (obj, func, thisObj) {

            var typedArrayClass = Int8Array.__proto__;
            if(typeof this !== 'function') {
                throw new TypeError('# is not a constructor');
            }
            if (this.__proto__ !== typedArrayClass) {
                throw new TypeError('this is not a typed array.');
            }

            func = func || function (elem) {
                    return elem;
                };

            if (typeof func !== 'function') {
                throw new TypeError('specified argument is not a function');
            }

            obj = Object(obj);
            if (!obj['length']) {
                return new this(0);
            }
            var copy_data = [];
            for(var i = 0; i < obj.length; i++) {
                copy_data.push(obj[i]);
            }

            copy_data = copy_data.map(func, thisObj);

            var typed_array = new this(copy_data.length);
            for(var i = 0; i < typed_array.length; i++) {
                typed_array[i] = copy_data[i];
            }
            return typed_array;
        }
    })();
}
```

## 仕様書

| 仕様書                                                                                       |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.from', '%TypedArray%.from')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.from")}}

## 関連情報

- {{jsxref("TypedArray.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Array.prototype.map()")}}
