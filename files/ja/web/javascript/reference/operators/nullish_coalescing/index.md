---
title: Null 合体演算子 (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
---

{{JSSidebar("Operators")}}

**Null 合体演算子 (`??`)** は論理演算子の一種です。この演算子は左辺が {{jsxref("null")}} または {{jsxref("undefined")}} の場合に右の値を返し、それ以外の場合に左の値を返します。

これは[論理 OR 演算子 (`||`)](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR) の特殊形と見なすことができます。そちらは左辺の値が `null` や `undefined` だけでなく、何らかの{{Glossary("falsy", "偽値")}}であった場合に右辺値を返すものです。つまり、 `||` を使って別の変数 `foo` に何らかの既定値を与える場合、一部の偽値（例えば `''` や `0`）を使用可能とみなすと、予想外の動作に遭遇することがあります。詳しい例は以下を参照してください。

Null 合体演算子は[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)が下から 5 番目で、 `||` のすぐ下、[条件（三項）演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)のすぐ上とします。

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## 構文

```js
leftExpr ?? rightExpr;
```

## 例

### Null 合体演算子の使用

次の例では、既定値を設定していますが、`null` や `undefined` 以外の値は保持されます。

```js
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (空文字列は null でも undefined でもないため)
console.log(valC); // 42
```

### 変数に既定値を代入する

以前は、変数に既定値を代入したい場合の一般的なパターンは、論理 OR 演算子（[`||`](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR)）を使用することでした。

```js
let foo;

//  foo には何も値が代入されていないので、 undefined のままです
let someDummyText = foo || "Hello!";
```

しかし、`||` が論理演算子であるため、左辺の値は評価によって強制的に論理値になり、偽値（`0`, `''`, `NaN`, `null`, `undefined`）が返されることはありません。この動作は、 `0` や `''`, `NaN` を有効な値と考えている場合、予期せぬ結果を引き起こす可能性があります。

```js
let count = 0;
let text = "";

let qty = count || 42;
let message = text || "hi!";
console.log(qty); // 42 であり 0 ではない
console.log(message); // "hi!" であり "" ではない
```

Null 合体演算子は、左辺の値が `null` もしくは `undefined` のどちらか（その他の falsy な値は含みません）に評価された場合にのみ右辺の値を返すことで、この潜在的な危険を回避します。

```js
let myText = ""; // 空文字列（偽値）

let notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

let preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (myText は undefined でも null でもない)
```

### 短絡評価

OR 演算子や AND 演算子と同様に、左辺が `null` でも `undefined` でもないことが判明した場合、右辺の式は評価されません。

```js
function A() {
  console.log("A was called");
  return undefined;
}
function B() {
  console.log("B was called");
  return false;
}
function C() {
  console.log("C was called");
  return "foo";
}

console.log(A() ?? C());
// "A was called"、 "C was called" のあと "foo" と出力
// A() は undefined を返すため、両方の式が評価されるため

console.log(B() ?? C());
// "B was called" のあと "false" と出力
// B() は false を返すため（そして null も undefined も返さない）、
// 右辺の式は評価されない
```

### AND 演算子、OR 演算子とつなげて使わない

AND 演算子 (`&&`) と OR 演算子 (`||`) を直接 `??` と組み合わせて使うことはできません。このような場合 [`SyntaxError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) が発生します。

```js example-bad
null || undefined ?? "foo"; // SyntaxError が発生
true || undefined ?? "foo"; // SyntaxError が発生
```

ただし、カッコを付けて明示的に優先順位を示すのは正しいやり方です。

```js example-good
(null || undefined) ?? "foo"; // "foo" を返す
```

### オプション連鎖演算子 (`?.`) との関係

Null 合体演算子は、 `undefined` と `null` を特定の値として扱いますが、[オプション連鎖演算子 (`?.`)](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining) も同様の扱いをします。この演算子は、`null` または `undefined` である可能性のあるオブジェクトのプロパティにアクセスするのに便利です。

```js
let foo = { someFooProp: "hi" };

console.log(foo.someFooProp?.toUpperCase() ?? "not available"); // "HI"
console.log(foo.someBarProp?.toUpperCase() ?? "not available"); // "not available"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [オプション連鎖演算子](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [論理 OR (`||`) 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)
