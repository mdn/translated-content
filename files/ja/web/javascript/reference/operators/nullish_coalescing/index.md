---
title: ヌル値合体演算子 (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**ヌル値合体演算子 (`??`)** は論理演算子の一種です。この演算子は左辺が [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) または {{jsxref("undefined")}} の場合に右辺のオペランドを返し、それ以外の場合に左辺のオペランドを返します。

{{InteractiveExample("JavaScript デモ: ヌル値合体演算子 (??)")}}

```js interactive-example
const foo = null ?? "default string";
console.log(foo);
// 予想される結果: "default string"

const baz = 0 ?? 42;
console.log(baz);
// 予想される結果: 0
```

## 構文

```js-nolint
x ?? y
```

### 引数

- `x`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 5 （ビット論理和）以上の式、または別のヌル値合体式です。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 5 （ビット論理和）以上の式です。`x` が `null` または `undefined` の場合にのみ評価されます。

### 返値

`x` が `null` または `undefined` の場合は `y` の値、そうでなければ `x` の値です。

## 解説

ヌル値合体演算子は、[論理和演算子 (`||`)](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR) の特殊な場合と見なせます。
論理和演算子は、左辺の値が `null` や `undefined` だけでなく、何らかの{{Glossary("falsy", "偽値")}}であった場合に右辺値を返します。
言い換えると、`||` を使って別の変数 `foo` にデフォルト値を与える場合、一部の偽値（`''` や `0` など）を使用可能な値とみなすと、予想外の動作が起きることがあります。
詳しい例は以下を参照してください。

ヌル値合体演算子は[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)が下から 5 番目で、 `||` のすぐ下、[条件（三項）演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator)のすぐ上です。

論理積演算子 (`&&`) と論理和演算子 (`||`) のどちらかを、 `??` と直接結合することはできません。このような場合、[構文エラー](/ja/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized)が発生します。

```js-nolint example-bad
null || undefined ?? "foo"; // SyntaxError が発生
true && undefined ?? "foo"; // SyntaxError が発生
```

代わりに、括弧を使用して優先順位を明示的に指定してください。

```js example-good
(null || undefined) ?? "foo"; // "foo" を返す
```

## 例

### ヌル値合体演算子の使用

次の例では、デフォルト値を設定していますが、`null` や `undefined` 以外の値は保持されます。

```js
const nullValue = null;
const emptyText = ""; // 偽値
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" （空文字列は null でも undefined でもないため）
console.log(valC); // 42
```

### 変数にデフォルト値を代入する

以前は、変数にデフォルト値を代入したい場合、論理 OR 演算子（[`||`](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR)）を使用するのが一般的でした。

```js
let foo;

// foo には何も値が代入されていないので、undefined のままです
const someDummyText = foo || "Hello!";
```

しかし、`||` は論理演算子であるため、左辺の値は評価時に論理値に強制変換され、偽値（`0`、`''`、`NaN`、`false` など）は返されません。
この動作は、`0`、`''`、`NaN` を有効な値と考えている場合、予期しない結果を引き起こす可能性があります。

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 であり 0 ではない
console.log(message); // "hi!" であり "" ではない
```

ヌル値合体演算子は、左辺の値が `null` または `undefined`（その他の偽値は含みません）に評価された場合にのみ右辺の値を返し、この問題を回避します。

```js
const myText = ""; // 空文字列（すなわち偽値でもある）

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' （myText は undefined でも null でもない）
```

### 短絡評価

「論理和」演算子や「論理積」演算子と同様に、左辺が `null` でも `undefined` でもないことが判明した場合、右辺の式は評価されません。

```js
function a() {
  console.log("a was called");
  return undefined;
}
function b() {
  console.log("b was called");
  return false;
}
function c() {
  console.log("c was called");
  return "foo";
}

console.log(a() ?? c());
// "a was called"、"c was called"、それから "foo" をログ出力します。
// a() が undefined を返すため、両方の式が評価されます。

console.log(b() ?? c());
// "b was called" のあとに "false" をログ出力します。
// b() が false を返すため（null でも undefined でもないため）、
// 右辺の式は評価されません。
```

### オプショナルチェーン演算子 (`?.`) との関係

ヌル値合体演算子は、`undefined` と `null` を特別な値として扱います。
[オプショナルチェーン演算子 (`?.`)](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining) も同様で、`null` または `undefined` である可能性のあるオブジェクトのプロパティにアクセスするのに便利です。
これらを組み合わせると、ヌル値の可能性があるオブジェクトのプロパティに安全にアクセスし、ヌル値の場合はデフォルト値を指定できます。

```js
const foo = { someFooProp: "hi" };

console.log(foo.someFooProp?.toUpperCase() ?? "not available"); // "HI"
console.log(foo.someBarProp?.toUpperCase() ?? "not available"); // "not available"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ヌル値合体代入演算子 (`??=`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [オプショナルチェーン演算子 (`?.`)](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [論理和演算子 (`||`)](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)
