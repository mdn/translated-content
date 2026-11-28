---
title: 論理積代入演算子 (&&=)
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**論理積代入演算子 (`&&=`)** は、左オペランドが{{Glossary("truthy", "真値")}}の場合にのみ右オペランドを評価し、左オペランドに代入します。

{{InteractiveExample("JavaScript デモ: 論理積代入演算子 (&&=)")}}

```js interactive-example
let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// 予想される結果: 2

b &&= 2;
console.log(b);
// 予想される結果: 0
```

## 構文

```js-nolint
x &&= y
```

### 引数

- `x`
  - : [識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)や[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)など、有効な代入先です。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2 （代入）以上の式です。元の `x` の値が{{Glossary("truthy", "真値")}}である場合にのみ評価され、`x` に代入されます。

### 返値

元の `x` の値が{{Glossary("truthy", "真値")}}の場合は `y` の値、そうでなければ元の `x` の値です。

## 解説

論理積代入演算子は[短絡評価](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#短絡評価)を行うため、`x &&= y` は `x && (x = y)` と同等です。ただし、式 `x` は一度だけ評価されます。

左辺が真値でない場合、[論理積](/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND)演算子の短絡が発生するため代入は実行されません。例えば、 `x` が `const` であっても、以下のコードはエラーが発生しません。

```js
const x = 0;
x &&= 2;
```

次のコードもセッターを起動しません。

```js
const x = {
  get value() {
    return 0;
  },
  set value(v) {
    console.log("セッターが呼び出されました");
  },
};

x.value &&= 2;
```

実際、`x` が真値でない場合、`y` はまったく評価されません。

```js
const x = 0;
x &&= console.log("y が評価されました");
// 何もログ出力されない
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

- [論理積演算子 (`&&`)](/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [ヌル値合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [ビット論理積代入 (`&=`)](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- {{Glossary("Truthy", "真値")}}
- {{Glossary("Falsy", "偽値")}}
