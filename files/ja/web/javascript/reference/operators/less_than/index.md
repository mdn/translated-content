---
title: 小なり演算子 (<)
slug: Web/JavaScript/Reference/Operators/Less_than
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**小なり演算子 (`<`)** は、左オペランドが右オペランドより小さい場合は `true` を返し、それ以外の場合は `false` を返します。

{{InteractiveExample("JavaScript デモ: 小なり演算子 (<)")}}

```js interactive-example
console.log(5 < 3);
// 予想される結果: false

console.log(3 < 3);
// 予想される結果: false

// 長整数と数値との比較
console.log(3n < 5);
// 予想される結果: true

console.log("aa" < "ab");
// 予想される結果: true
```

## 構文

```js-nolint
x < y
```

## 解説

オペランドは複数の型変換を経て比較されます。概要は以下の通りです。

- 最初に、オブジェクトは[プリミティブに変換](/ja/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion)されます。これはオブジェクトに対して [`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) （`"number"` をヒントとして）、[`valueOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)、[`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) の各メソッドをこの順に呼び出すことで行われます。左オペランドは常に右辺よりも先に変換されます。 なお、 `[Symbol.toPrimitive]()` は `"number"` のヒント付きで呼び出されます（つまりオブジェクトの数値への変換の優先度が少し高いということです）。しかし、文字列はまだ特別に扱われるため、返値は[数値に変換されません](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)。
- 両方の値が文字列である場合、文字列として比較されます。比較は、それぞれに含まれている UTF-16 コード単位の値に基づいて行われます（Unicode コードポイントではない）。
- それ以外の場合、 JavaScript は非数値型を数値に変換しようとします。
  - 論理値 `true` および `false` は、それぞれ 1 および 0 に変換されます。
  - `null` は 0 に変換されます。
  - `undefined` は `NaN` に変換されます。
  - 文字列は、含まれている値に基づいて変換され、数値が含まれていない場合は `NaN` として変換されます。
- いずれかの値が [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) である場合、演算子は `false` を返します。
- それ以外の場合は、値は数値として比較されます。長整数と数値は互いに比較することができます。

それ以外の演算子である [`>`](/ja/docs/Web/JavaScript/Reference/Operators/Greater_than)、[`>=`](/ja/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)、[`<=`](/ja/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal) は、 `<` と同じアルゴリズムを使用します。 4 つの演算子すべてが `false` を返す場合が 2 つあります。

- オペランドの一方が長整数に変換され、もう一方が長整数値に変換できない文字列に変換された場合（[`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) に渡すと[構文エラー](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax)が発生する場合）。
- オペランドの一方が `NaN` に変換された場合。（例えば、数値に変換できない文字列や `undefined` など。）

それ以外のすべての場合において、 4 つの演算子の関係は次のようになります。

```js
x < y === !(x >= y);
x <= y === !(x > y);
x > y === y < x;
x >= y === y <= x;
```

> [!NOTE]
> `<` と `>` の間の観察可能な違いの一つは、型変換の順序です。特に、プリミティブ型への型変換に副作用が伴う場合に顕著です。比較演算子はすべて、左オペランドを右オペランドよりも先に型変換します。

## 例

### 文字列と文字列の比較

```js
"a" < "b"; // true
"a" < "a"; // false
"a" < "3"; // false

"\uD855\uDE51" < "\uFF3A"; // true
```

### 文字列と数値の比較

```js
"5" < 3; // false
"3" < 3; // false
"3" < 5; // true

"hello" < 5; // false
5 < "hello"; // false

"5" < 3n; // false
"3" < 5n; // true
```

### 数値と数値の比較

```js
5 < 3; // false
3 < 3; // false
3 < 5; // true
```

### 数値と長整数の比較

```js
5n < 3; // false
3 < 5n; // true
```

### 論理値、null、undefined、NaN の比較

```js
true < false; // false
false < true; // true

0 < true; // true
true < 1; // false

null < 0; // false
null < 1; // true

undefined < 3; // false
3 < undefined; // false

3 < NaN; // false
NaN < 3; // false
```

### 副作用のある比較

比較演算は常にオペランドをプリミティブ型に強制変換します。 すなわち、同一オブジェクトが同一の比較式内で異なる値を持つ可能性があります。 例えば、 2 つの値が互いに「より大きい」と同時に「より小さい」という状態になることがあります。

```js
class Mystery {
  static #coercionCount = -1;
  valueOf() {
    Mystery.#coercionCount++;
    // 左オペランドが最初の型変換されるため、これは 0 を返す
    // その後、右オペランドに対して 1 を返す
    return Mystery.#coercionCount % 2;
  }
}

const l = new Mystery();
const r = new Mystery();
console.log(l < r && r < l);
// true
```

> [!WARNING]
> これは混乱の源となる可能性があります。オブジェクトが独自のプリミティブ変換ロジックを提供する場合、それがべき等性を持つようにしてください。型変換を複数回行っても、同じ値を返す必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [大なり演算子 (`>`)](/ja/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [大なりイコール演算子 (`>=`)](/ja/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [小なりイコール演算子 (`<=`)](/ja/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
