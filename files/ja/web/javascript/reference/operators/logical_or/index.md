---
title: 論理和演算子 (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**論理和演算子 (`||`)** （論理的選言）をオペランドの組み合わせに対して使用すると、オペランドのうち 1 つ以上が true である場合に true になります。一般的には論理値（ブール値）で使用されます。その場合は論理値を返します。ただし `||` 演算子は実際には指定されたオペランドのうち一方の値を返すので、この演算子が論理値以外で使用された場合は、論理値以外の値を返すことになります。

{{InteractiveExample("JavaScript デモ: 論理和演算子 (||)", "shorter")}}

```js interactive-example
const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
// 予想される結果: true
```

## 構文

```js-nolint
x || y
```

## 解説

`x` が `true` に変換できる場合は `x` を返し、それ以外の場合は `y` を返します。

ある値が `true` に変換できる場合、その値は真値 ({{Glossary("truthy")}}) と呼ばれます。ある値が `false` に変換できる場合、その値は偽値 ({{Glossary("falsy")}}) と呼ばれます。

false に変換されうる式の例を示します。

- `null`
- `NaN`
- `0`
- 空文字列 (`""` または `''` または ` `` `)
- `undefined`

`||` 演算子では論理値以外のオペランドを使用することができますが、返値が常に[論理型プリミティブ](/ja/docs/Web/JavaScript/Guide/Data_structures#論理型)に変換することが可能であるため、論理演算子と見なすことができます。返値 (または一般的な式) を対応する論理値に明示的に変換するには、二重の{{jsxref("Operators/Logical_NOT", "否定演算子", "", 1)}}または {{jsxref("Boolean/Boolean", "Boolean()")}} コンストラクターを使用してください。

### 短絡評価

論理和の式は左から右へと評価され、下記の規則を使用して「短絡」評価が可能なように評価されます。

`(真値の式) || expr` は短絡評価で真値の式として評価されます。

短絡とは、上記の `expr` の部分が**評価されず**、したがって、これを行うことの副作用が効果を及ぼさないことを意味します（例えば、 `expr` が関数呼び出しであった場合、この場では呼び出されません）。これは、最初のオペランドが評価された時点で、すでに演算子の値が決定しているためです。例を示します。

```js
function A() {
  console.log("A が呼び出されました");
  return false;
}
function B() {
  console.log("B が呼び出されました");
  return true;
}

console.log(B() || A());
// 関数呼び出しによって "B が呼び出されました" がログ出力され、
// それから true （演算子の結果の値）が出力されます。
```

### 演算子の優先順位

以下の式は同じであるように見えるかもしれませんが、異なります。 `&&` 演算子は `||` 演算子よりも先に実行されるからです（[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)を参照）。

```js-nolint
true || false && false; // true を返す。 && が先に実行されるため
(true || false) && false; // false を返す。グループ化の優先順位が最も高いため
```

## 例

### 論理和の使用

以下のコードは `||` （論理和）演算子の例を示しています。

```js
true || true; // t || t は true を返す
false || true; // f || t は true を返す
true || false; // t || f は true を返す
false || 3 === 4; // f || f は false を返す
"Cat" || "Dog"; // t || t は "Cat" を返す
false || "Cat"; // f || t は "Cat" を返す
"Cat" || false; // t || f は "Cat" を返す
"" || false; // f || f は false を返す
false || ""; // f || f は "" を返す
false || varObject; // f || オブジェクトは varObject を返す
```

> [!NOTE]
> この演算子を使用していくつかの変数に既定値を提供する場合、偽値が使用されないことに注意してください。 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) や {{jsxref("undefined")}} をフィルタリングする必要がある場合は、[ヌル値合体演算子](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)の使用を検討してください。

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

**論理型**に関する以下の複合操作は、

```js-nolint
bCondition1 && (bCondition2 || bCondition3)
```

常に以下のものと等しくなります。

```js-nolint
!(!bCondition1 || !bCondition2 && !bCondition3)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ヌル値合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{jsxref("Boolean")}}
- {{Glossary("Truthy", "真値")}}
- {{Glossary("Falsy", "偽値")}}
