---
title: Null 合体代入 (??=)
slug: Web/JavaScript/Reference/Operators/Logical_nullish_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 論理演算子
  - 演算子
  - Reference
browser-compat: javascript.operators.logical_nullish_assignment
translation_of: Web/JavaScript/Reference/Operators/Logical_nullish_assignment
---
{{jsSidebar("Operators")}}

Null 合体代入 (`x ??= y`) 演算子は、`x` が {{Glossary("nullish")}} (`null` または `undefined`) である場合にのみ代入を行います。

{{EmbedInteractiveExample("pages/js/expressions-logical-nullish-assignment.html")}}

## 構文

```js
expr1 ??= expr2
```

## 解説

### 短絡評価 (ショートサーキット)

[Null 合体演算子](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)は左から右に評価され、次のルールを使って短絡評価の可能性があるかどうかテストされます。

`(null や undefined ではない式) ?? expr` は、左辺が `null` でも `undefined` でもないことが証明されたら、左辺の式が短絡評価されます。

短絡評価とは、上記の `expr` 部分が**評価されない**ことを意味します。したがって、評価された場合の副作用は発生しません (例えば、`expr` が関数呼び出しである場合、呼び出しは行われません)。

Null 合体代入も短絡評価されます。これは、`x ??= y` が以下と等価であることを意味します。

```js
x ?? (x = y);
```

そして、常に代入が行われる以下と等価ではありません。

```js example-bad
x = x ?? y;
```

## 例

### Null 合体代入演算子の使用

```js
function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Null 合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- {{Glossary("Nullish")}}
- {{Glossary("Truthy", "真値")}}
- {{Glossary("Falsy", "偽値")}}
