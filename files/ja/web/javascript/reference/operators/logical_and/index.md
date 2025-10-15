---
title: 論理積演算子 (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**論理積演算子 (`&&`)** （論理結合）を一連の論理型のオペランドに対して使用すると、すべてのオペランドが `true` である場合にのみ `true` になります。それ以外の場合は `false` になります。

一般的には、この演算子は左から右に向けて評価した際に最初の{{Glossary("falsy", "偽値")}}のオペランドに遭遇したときにはその値を、またはすべてが{{Glossary("truthy", "真値")}}であった場合は最後のオペランドの値を返します。

{{InteractiveExample("JavaScript デモ: 論理積演算子 (&&)", "shorter")}}

```js interactive-example
const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// 予想される結果: false
```

## 構文

```js-nolint
x && y
```

## 解説

論理積 (`&&`) はオペランドを左から右に向けて評価し、遭遇した最初の{{Glossary("falsy", "偽値")}}のオペランドを直ちに返します。すべての値が{{Glossary("truthy", "真値")}}であった場合、最後のオペランドの値が返されます。

ある値が `true` に変換できる場合、その値は真値 ({{Glossary("truthy")}}) と呼ばれます。ある値が `false` に変換できる場合、その値は偽値 ({{Glossary("falsy")}}) と呼ばれます。

false に変換することができる式の例を示します。

- `false`
- `null`
- `NaN`
- `0`
- 空文字列 (`""` または `''` または ` `` `)
- `undefined`

論理積演算子は次のように、論理型でない値はそのまま温存して返します。

```js
result = "" && "foo"; // result には "" (空文字列) が代入される
result = 2 && 0; // result には 0 が代入される
result = "foo" && 4; // result には 4 が代入される
```

`&&` 演算子では論理値以外のオペランドを使用することができますが、返値が常に[論理型プリミティブ](/ja/docs/Web/JavaScript/Guide/Data_structures#論理型)に変換することが可能であるため、論理演算子と見なすことができます。
返値（または一般的な式）を対応する論理値に明示的に変換するには、二重の[否定演算子](/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT)または {{jsxref("Boolean/Boolean", "Boolean")}} コンストラクターを使用してください。

### 短絡評価

論理積の式は短絡演算子です。
各オペランドが論理値に変換されるとき、ある変換結果が `false` であった場合、論理積演算子は停止してその偽値のオペランドの元の値を返します。残りのオペランドは評価**されません**。

以下の擬似コードを考えてみてください。

```plain
(偽値の式) && expr
```

`expr` の部分は**評価されません**。最初のオペランドである `(偽値の式)` が{{Glossary("falsy", "偽値")}}と評価されるからです。
`expr` が関数であった場合、その関数は呼び出されません。
以下の例を参照してください。

```js
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(A() && B());
// 関数 A の呼び出しによって "called A" をログ出力し、
// && が false と評価し（関数 A が false を返し）、それから false をコンソールにログ出力します。
// 論理積演算子はここで短絡となり、関数 B を無視します。
```

### 演算子の優先順位

論理積演算子は論理和演算子よりも高い優先順位を持つので、 `&&` 演算子は `||` 演算子よりも先に実行されます（[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)を参照）。

```js-nolint
true || false && false; // true
true && (false || false); // false
(2 === 3) || (4 < 0) && (1 === 1); // false
```

## 例

### 論理積の使用

以下のコードは `&&` (論理積) 演算子の例を示しています。

```js
a1 = true && true; // t && t で true を返す
a2 = true && false; // t && f で false を返す
a3 = false && true; // f && t で false を返す
a4 = false && 3 === 4; // f && f で false を返す
a5 = "Cat" && "Dog"; // t && t で "Dog" を返す
a6 = false && "Cat"; // f && t で false を返す
a7 = "Cat" && false; // t && f で false を返す
a8 = "" && false; // f && f で "" を返す
a9 = false && ""; // f && f で false を返す
```

### 論理型の変換規則

#### 論理積から論理和への変換

**論理型**に関する以下の操作は、

```js-nolint
bCondition1 && bCondition2
```

常に以下のものと等しくなります。

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### 論理和から論理積への変換

**論理型**に関する以下の操作は、

```js-nolint
bCondition1 || bCondition2
```

常に以下のものと等しくなります。

```js-nolint
!(!bCondition1 && !bCondition2)
```

### 入れ子になった括弧の除去

論理式は左から右に評価されるので、いくつかのルールに従って複雑な式から括弧を削除することは常に可能です。

以下の**論理型**に関する複合操作は、

```js-nolint
bCondition1 || (bCondition2 && bCondition3)
```

常に以下のものと等しくなります。

```js-nolint
bCondition1 || bCondition2 && bCondition3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Boolean")}}
- {{Glossary("Truthy", "真値")}}
- {{Glossary("Falsy", "偽値")}}
