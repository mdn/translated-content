---
title: Object() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
---

{{JSRef}}

**`Object` コンストラクター**は、与えられた値のオブジェクトラッパーを生成します。

- その値が {{jsxref("null")}} または {{jsxref("undefined")}} である場合、空のオブジェクトを生成して返します。
- そうでない場合は、与えらえた値に対応する型のオブジェクトを返します。
- 値がすでにオブジェクトであった場合は、その値を返します。

コンストラクターではない場面で `Object` が呼び出された場合は、 `new Object()` と同様に動作します。

## 構文

```js
new Object();
new Object(value);
```

### 引数

- `value`
  - : 任意の値。

## 例

### 新しい Object の生成

```js
let o = new Object();
o.foo = 42;

console.log(o);
// Object { foo: 42 }
```

### `undefined` や `null` 型を指定して `Object` を使用

以下の例は、空の `Object` オブジェクトを `o` に格納します。

```js
let o = new Object();
```

```js
let o = new Object(undefined);
```

```js
let o = new Object(null);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)
