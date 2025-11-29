---
title: BigInt.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toString()`** は {{jsxref("BigInt")}} 値のメソッドで、指定した長整数 ({{jsxref("BigInt")}}) 値を表す文字列を返します。末尾の "n" は文字列の一部にはなりません。

{{InteractiveExample("JavaScript デモ: BigInt.toString()")}}

```js interactive-example
console.log(1024n.toString());
// 予想される結果: "1024"

console.log(1024n.toString(2));
// 予想される結果: "10000000000"

console.log(1024n.toString(16));
// 予想される結果: "400"
```

## 構文

```js-nolint
toString()
toString(radix)
```

### 引数

- `radix` {{optional_inline}}
  - : 2 から 36 までの整数で、長整数の表現に使用する基数を指定します。デフォルトは 10 です。

### 返値

指定した {{jsxref("BigInt")}} オブジェクトを表す文字列。

### 例外

- {{jsxref("RangeError")}}
  - : `toString()` に 2 未満または 36 より大きな基数を与えられた場合。

## 解説

{{jsxref("BigInt")}} オブジェクトは {{jsxref("Object")}} の `toString()` メソッドをオーバーライドします。つまり、 {{jsxref("Object.prototype.toString()")}} を継承しません。 {{jsxref( "BigInt")}} オブジェクトでは、`toString()` メソッドは指定された基数によるオブジェクトの文字列表現を返します。

10 より大きな基数が指定された場合は、 9 より大きな数字をアルファベットで示します。例えば、16 進数（底が 16）では `a` から `f` が使用されます。

指定された長整数値が負の場合、符号は保持されます。基数が 2 の場合でも同様です。返される文字列は、長整数値の 2 進数表現に `-` 符号を付加したものであり、長整数値の 2 の補数**ではありません**。

`toString()` メソッドは、その `this` 値が `BigInt` プリミティブまたはラッパーオブジェクトである必要があります。他の `this` 値に対しては、長整数値への強制変換を試みることなく {{jsxref("TypeError")}} が発生します。

`BigInt` には [`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) メソッドがないため、JavaScript は `BigInt` オブジェクトが文字列のコンテキストで使用される際に自動的に `toString()` メソッドを呼び出します。メソッドを持たないため、JavaScript は `BigInt` _オブジェクト_ が文字列を期待するコンテキスト（[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)など）で使用される際に、自動的に `toString()` メソッドを呼び出します。ただし、BigInt のプリミティブ値は、文字列への[型変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)を行う際に `toString()` メソッドを参照しません。代わりに、最初の `toString()` 実装と同じアルゴリズムを用いて直接変換されます。

```js
BigInt.prototype.toString = () => "Overridden";
console.log(`${1n}`); // "1"
console.log(`${Object(1n)}`); // "Overridden"
```

## 例

### toString() の使用

```js
17n.toString(); // "17"
66n.toString(2); // "1000010"
254n.toString(16); // "fe"
(-10n).toString(2); // "-1010"
(-0xffn).toString(2); // "-11111111"
```

### BigInt における負の 0

整数に負の 0 が存在しないのと同様に、`BigInt` には負の 0 がありません。 `-0.0` は JavaScript の数値型（[`Number`](/ja/docs/Web/JavaScript/Guide/Data_structures#数値型)）にのみ現れる、IEEE 浮動小数点数の概念です。

```js
(-0n).toString(); // "0"
BigInt(-0).toString(); // "0"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("BigInt.prototype.toLocaleString()")}}
- {{jsxref("BigInt.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
