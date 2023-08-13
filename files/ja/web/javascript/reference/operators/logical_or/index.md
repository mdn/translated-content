---
title: 論理和 (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
---

{{jsSidebar("Operators")}}

論理和 (`||`) 演算子 (論理的分割) をオペランドの組み合わせに対して使用すると、オペランドのうち 1 つ以上が true である場合に true になります。一般的には論理値（ブール値）で使用されます。その場合は論理値を返します。ただし `||` 演算子は実際には指定されたオペランドのうち一つの値を返すので、この演算子が論理値以外で使用された場合は、論理値以外の値を返すことになります。

{{EmbedInteractiveExample("pages/js/expressions-logical-or.html", "shorter")}}

## 構文

```js
expr1 || expr2;
```

## 解説

`expr1` が `true` に変換できる場合は `expr1` を返し、それ以外の場合は `expr2` を返します。

ある値が `true` に変換できる場合、その値は真値 ({{Glossary("truthy")}}) と呼ばれます。ある値が `false` に変換できる場合、その値は偽値 ({{Glossary("falsy")}}) と呼ばれます。

false に変換されうる式の例を示します。

- `null`
- `NaN`
- `0`
- 空文字列 (`""` または `''` または ` `` `)
- `undefined`

`||` 演算子では論理値以外のオペランドを使用することができますが、返値が常に[論理型プリミティブ](/ja/docs/Web/JavaScript/Data_structures#論理型)に変換することが可能であるため、論理演算子と見なすことができます。返値 (または一般的な式) を対応する論理値に明示的に変換するには、二重の{{JSxRef("Operators/Logical_NOT", "否定演算子", "", 1)}}または {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} コンストラクターを使用してください。

### 短絡評価

論理和の式は左から右へと評価され、下記の規則を使用して「短絡」評価が可能なように評価されます。

`(真値の式) || expr` は短絡評価で真値の式に評価されます。

短絡とは、上記の `expr` の部分が**評価されず**、したがって、これを行うことの副作用が効果を及ぼさないことを意味します（例えば、 `expr` が関数呼び出しであった場合、この場では呼び出されません）。これは、最初のオペランドが評価された時点で、すでに演算子の値が決定しているためです。例を示します。

```js
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(B() || A());
// 関数呼び出しによって "called B" がログ出力され、
// それから true (演算子の結果の値) が出力されます。
```

### 演算子の優先順位

以下の式は同じであるように見えるかもしれませんが、異なります。 `&&` 演算子は `||` 演算子よりも先に実行されるからです（[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)を参照）。

```js
true || false && false; // true を返す。 && が先に実行されるため
(true || false) && false; // false を返す。演算子の優先順位が適用されないため
```

## 例

### OR の使用

以下のコードは `||` (論理和) 演算子の例を示しています。

```js
o1 = true || true; // t || t は true を返す
o2 = false || true; // f || t は true を返す
o3 = true || false; // t || f は true を返す
o4 = false || 3 == 4; // f || f は false を返す
o5 = "Cat" || "Dog"; // t || t は "Cat" を返す
o6 = false || "Cat"; // f || t は "Cat" を返す
o7 = "Cat" || false; // t || f は "Cat" を返す
o8 = "" || false; // f || f は false を返す
o9 = false || ""; // f || f は "" を返す
o10 = false || varObject; // f || オブジェクトは varObject を返す
```

> **メモ:** この演算子を使用していくつかの変数に既定値を提供する場合、*偽値*が使用されないことに注意してください。 {{jsxref("null")}} や {{jsxref("undefined")}} をフィルタリングする必要がある場合は、[Null 合体演算子](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)の使用を検討してください。

### 論理型の変換規則

#### AND から OR への変換

**論理型**に関する以下の操作は、

```js
bCondition1 && bCondition2;
```

常に以下のものと等しくなります。

```js
!(!bCondition1 || !bCondition2);
```

#### OR から AND への変換

**論理型**に関する以下の操作は、

```js
bCondition1 || bCondition2;
```

常に以下のものと等しくなります。

```js
!(!bCondition1 && !bCondition2);
```

### 入れ子になった括弧の除去

論理式は左から右に評価されるので、いくつかのルールに従って複雑な式から括弧を削除することは常に可能です。

**論理型**に関する以下の複合操作は、

```js
bCondition1 && (bCondition2 || bCondition3);
```

常に以下のものと等しくなります。

```js
!(!bCondition1 || (!bCondition2 && !bCondition3));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Null 合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- {{jsxref("Boolean")}}
- {{Glossary("Truthy", "真値")}}
- {{Glossary("Falsy", "偽値")}}
