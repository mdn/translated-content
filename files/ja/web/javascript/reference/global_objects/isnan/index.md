---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`isNaN()`** 関数は、必要に応じてまず値を数値に変換してから、引数が {{jsxref("NaN")}} (非数) かどうかを判定します。 `isNaN()` 関数内の型変換は[予想外](#解説)の結果になることがあるため、 {{jsxref("Number.isNaN()")}} を使用することをお勧めします。

{{InteractiveExample("JavaScript デモ: isNaN()")}}

```js interactive-example
function milliseconds(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return x * 1000;
}

console.log(milliseconds("100F"));
// 予想される結果: "Not a Number!"

console.log(milliseconds("0.0314E+2"));
// 予想される結果: 3140
```

## 構文

```js-nolint
isNaN(value)
```

### 引数

- `value`
  - : テストされる値。

### 返値

指定された値を[数値に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)した後で {{jsxref("NaN")}} であれば、 `true` を返します。それ以外の場合は、 `false` を返します。

## 解説

`isNaN()` は、グローバルオブジェクトの関数プロパティです。

数値の場合、 `isNaN()` は、その数値が [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) であるかどうかを検査します。 `isNaN()` 関数の引数が[数値](/ja/docs/Web/JavaScript/Guide/Data_structures#数値型)型でない場合、その値はまず数値に変換され、その結果が {{jsxref("NaN")}} と比較されます。

数値以外の引数に対する `isNaN()` のこの動作は、紛らわしいかもしれません。例えば、空文字列は 0 に強制変換されますが、論理値は 0 または 1 に強制変換されます。どちらの値も直感的には「数値ではない」ですが、 `NaN` と評価されないため、 `isNaN()` は `false` を返します。したがって、 `isNaN()` は、「入力は浮動小数点 {{jsxref("NaN")}} 値であるか」という質問にも、「入力は数値ではないか」という質問にも答えません。

{{jsxref("Number.isNaN()")}} は、値が数値 `NaN` であるかどうかを検査する、より信頼性の高い方法です。あるいは、式 `x !== x` を使用することもできます。どちらの解決策も、グローバルな `isNaN()` の信頼できない誤検出の影響を受けません。値が数値であるかどうかを検査するには、 [`typeof x === "number"`](/ja/docs/Web/JavaScript/Reference/Operators/typeof) を使用してください。

`isNaN()` 関数は、「入力は、数値コンテキストで使用した場合、 {{jsxref("NaN")}} と機能的に同等であるか」という質問に答えます。 `isNaN(x)` が `false` を返す場合、 `x` は `NaN` ではない有効な数値であるかのように、算術式で使用することができます。 `isNaN(x)` が `true` を返す場合、 `x` は `NaN` に強制変換され、ほとんどの算術式は `NaN` を返します（`NaN` は伝播するため）。これを使用すると、例えば、関数の引数が算術処理可能（数値と同様に使用可能）であるかどうかをテストし、数値ではない値の場合にエラーを発生させたり、既定値を提供して処理させたりすることができます。このようにして、コンテキストに応じて値を暗黙的に変換することで、 JavaScript が提供する汎用性を最大限に活用する関数を持つことができます。

> [!NOTE]
> [`+` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition)は、数値の加算と文字列の連結の両方を実行します。したがって、 `isNaN()` が両方のオペランドに対して `false` を返した場合でも、 `+` 演算子は算術演算子として使用されないため、文字列を返す場合があります。例えば、 `isNaN("1")` は `false` を返しますが、 `"1" + 1` は `"11"` を返します。確実に数値で処理を行うには、[値を数値に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)し、 {{jsxref("Number.isNaN()")}} を使用して結果を検査してください。

## 例

`isNaN()` は、値 `NaN` でなく、数値でもない値に対して `true` を返すことに注意してください。

```js
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// 文字列
isNaN("37"); // false: "37" は非数でない数値 37 に変換される
isNaN("37.37"); // false: "37.37" は非数でない数値 37.37 に変換される
isNaN("37,5"); // true
isNaN("123ABC"); // true: Number("123ABC") の結果は非数
isNaN(""); // false: 空文字列は非数でない 0 に変換される
isNaN(" "); // false: 半角スペースからなる文字列は非数でない 0 に変換される

// 日付
isNaN(new Date()); // false: Date オブジェクトは数値（タイムスタンプ）に変換される
isNaN(new Date().toString()); // true: Date オブジェクトの文字列表現は数値として解釈できない

// 配列
isNaN([]); // false: プリミティブ表現は "" となり、数値 0 へ変換される
isNaN([1]); // false: プリミティブ表現は "1" となる
isNaN([1, 2]); // true: プリミティブ表現は "1,2" となり、数値として解釈できない
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
