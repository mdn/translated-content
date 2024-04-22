---
title: 論理積代入 (&&=)
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
---

{{jsSidebar("Operators")}}

論理積代入 (`x &&= y`) 演算子は、`x` が{{Glossary("truthy", "真値")}}である場合にのみ代入を行います。

{{EmbedInteractiveExample("pages/js/expressions-logical-and-assignment.html")}}

## 構文

```js
expr1 &&= expr2;
```

## 解説

### 短絡評価 (ショートサーキット)

[論理積演算子](/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND)は左から右に評価され、次のルールを使って短絡評価の可能性があるかどうかテストされます。

`(偽値の式) && expr` は、偽値の式が短絡評価されます。

短絡評価とは、上記の `expr` 部分が**評価されない**ことを意味します。したがって、評価された場合の副作用は発生しません (例えば、`expr` が関数呼び出しである場合、呼び出しは行われません)。

論理積代入も短絡評価されます。これは、`x &&= y` が以下と等価であることを意味します。

```js
x && (x = y);
```

そして、常に代入が行われる以下とは等価ではありません。

```js example-bad
x = x && y;
```

## 例

### 論理積代入演算子の使用

```js
let x = 0;
let y = 1;

x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
y &&= 0; // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [論理積演算子 (&&)](/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [Null 合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [ビット論理積代入 (`&=`)](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- {{Glossary("Truthy", "真値")}}
- {{Glossary("Falsy", "偽値")}}
