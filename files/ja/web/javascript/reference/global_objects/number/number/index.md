---
title: Number() コンストラクター
short-title: Number()
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Number()`** コンストラクターは、 {{jsxref("Number")}} オブジェクトを生成します。関数として呼び出された場合は、数値型のプリミティブ値を返します。

## 構文

```js-nolint
new Number(value)
Number(value)
```

> [!NOTE]
> `Number()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を付けてもつけなくても呼び出せますが、効果は異なります。[返値](#返値)を参照してください。

### 引数

- `value`
  - : 作成するオブジェクトの数値です。

### 返値

`Number()` が関数として（[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new)）呼び出された場合、[引数を数値プリミティブに変換します](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)。特に、[長整数 (BigInt)](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt) の値は例外が発生させずに数値へ変換します。 `value` が存在しない場合は `0` になります。

`Number()` がコンストラクターとして（[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きで）呼び出された場合は、上記の型変換処理を行ったうえで、 {{jsxref("Number")}} オブジェクトにラッピングして返します。これはプリミティブでは**ありません**。

> [!WARNING]
> コンストラクターとして `Number` を使用することはほとんどないはずです。

## 例

### Number オブジェクトの生成

```js
const a = new Number("123"); // a === 123 は false
const b = Number("123"); // b === 123 は true
a instanceof Number; // は true
b instanceof Number; // は false
typeof a; // "object"
typeof b; // "number"
```

### Number() を使用して長整数を数値へ変換

`Number()` は、とても明示的なので、例外を発生させずに長整数 (BigInt) を数値に変換することができる唯一のケースです。

```js example-bad
+1n; // TypeError: Cannot convert a BigInt value to a number
0 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

```js example-good
Number(1n); // 1
```

なお、長整数が[安全に表現する](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)のに長すぎる場合、精度が下がることがあります。

```js
BigInt(Number(2n ** 54n + 1n)) === 2n ** 54n + 1n; // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [現在の `Number` の動作（2 進数と 8 進数のリテラルの対応あり）のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- {{jsxref("Math")}}
- {{jsxref("BigInt")}}
