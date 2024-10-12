---
title: Null 合体演算子 (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{jsSidebar("Operators")}}

**Null 合体演算子 (`??`)** は論理演算子の一種です。この演算子は左辺が [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) または {{jsxref("undefined")}} の場合に右の値を返し、それ以外の場合に左の値を返します。

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## 構文

```js-nolint
leftExpr ?? rightExpr
```

## 解説

Null 合体演算子は、[論理 OR (`||`) 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR)の特殊形と見なすことができます。後者は左辺の値が `null` や `undefined` だけでなく、何らかの{{Glossary("falsy", "偽値")}}であった場合に右辺値を返すものです。言い換えると、`||` を使って別の変数 `foo` に何らかの既定値を与える場合、一部の偽値（`''` や `0` など）を使用可能とみなすと、予想外の動作に遭遇することがあります。詳しい例は以下を参照してください。

Null 合体演算子は[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)が下から 5 番目で、 `||` のすぐ下、[条件（三項）演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator)のすぐ上とします。

AND (`&&`) および OR 演算子 (`||`) のどちらも、直接 `??` と結合することはできません。このような場合、[構文エラー](/ja/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized)が発生します。

```js-nolint example-bad
null || undefined ?? "foo"; // SyntaxError が発生
true && undefined ?? "foo"; // SyntaxError が発生
```

代わりに、括弧を使用して優先順位を明示的に指定してください。

```js example-good
(null || undefined) ?? "foo"; // "foo" を返す
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

// foo には何も値が代入されていないので、undefined のままです
const someDummyText = foo || "Hello!";
```

しかし、`||` が論理演算子であるため、左辺の値は評価によって強制的に論理値になり、偽値（`0`, `''`, `NaN`, `false` など）が返されることはありません。この動作は、 `0` や `''`, `NaN` を有効な値と考えている場合、予期せぬ結果を引き起こす可能性があります。

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 であり 0 ではない
console.log(message); // "hi!" であり "" ではない
```

Null 合体演算子は、左辺の値が `null` もしくは `undefined` のどちらか（その他の falsy な値は含みません）に評価された場合にのみ右辺の値を返すことで、この潜在的な危険を回避します。

```js
const myText = ""; // 空文字列（すなわち偽値でもある）

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (myText は undefined でも null でもない)
```

### 短絡評価

'OR' 演算子や 'AND' 演算子と同様に、左辺が `null` でも `undefined` でもないことが判明した場合、右辺の式は評価されません。

```js
function a() {
  console.log("a が呼び出されました");
  return undefined;
}
function b() {
  console.log("b が呼び出されました");
  return false;
}
function c() {
  console.log("c が呼び出されました");
  return "foo";
}

console.log(a() ?? c());
// "A が呼び出されました"、 "C が呼び出されました" のあと "foo" と出力
// A() は undefined を返すため、両方の式が評価されるため

console.log(b() ?? c());
// "B が呼び出されました" のあと "false" と出力
// B() は false を返すため（そして null も undefined も返さない）、
// 右辺の式は評価されない
```

### オプショナルチェーン演算子 (`?.`) との関係

Null 合体演算子は、 `undefined` と `null` を特定の値として扱いますが、[オプショナルチェーン演算子 (`?.`)](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining) も同様の扱いをします。この演算子は、`null` または `undefined` である可能性のあるオブジェクトのプロパティにアクセスするのに便利です。

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

- [Null 合体代入 (`??=`) 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [オプショナルチェーン (`?.`) 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [論理 OR (`||`) 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)
