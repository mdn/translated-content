---
title: ヌル値合体代入演算子 (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**ヌル値合体代入演算子 (`??=`)** は、**論理ヌル代入**とも呼ばれ、左オペランドが{{Glossary("nullish", "ヌル値")}}（`null` または `undefined`）の場合にのみ右オペランドを評価し、左オペランドに代入します。

{{InteractiveExample("JavaScript デモ: ヌル値合体代入演算子 (??=)")}}

```js interactive-example
const a = { duration: 50 };

a.speed ??= 25;
console.log(a.speed);
// 予想される結果: 25

a.duration ??= 10;
console.log(a.duration);
// 予想される結果: 50
```

## 構文

```js-nolint
x ??= y
```

### 引数

- `x`
  - : 有効な代入先です。例として、[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)や[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)があります。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2 （代入）以上の式です。元の `x` の値が `null` または `undefined` の場合にのみ評価され、`x` に代入されます。

### 返値

元の `x` の値が `null` または `undefined` の場合は `y` の値、そうでなければ元の `x` の値です。

## 解説

ヌル値合体代入演算子は[短絡評価](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#短絡評価)を行うため、`x ??= y` は `x ?? (x = y)` と同等です。ただし、式 `x` は一度だけ評価されます。

左辺がヌル値でない場合、[ヌル値合体](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)演算子の短絡が発生するため代入は実行されません。例えば、 `x` が `const` であっても、以下のコードはエラーが発生しません。

```js
const x = 1;
x ??= 2;
```

次のコードもセッターを起動しません。

```js
const x = {
  get value() {
    return 1;
  },
  set value(v) {
    console.log("セッターが呼び出されました");
  },
};

x.value ??= 2;
```

実際、`x` がヌル値でない場合、`y` はまったく評価されません。

```js
const x = 1;
x ??= console.log("y が評価されました");
// 何もログ出力されない
```

## 例

### ヌル値合体代入演算子の使用

ヌル値合体代入演算子を使用すると、オブジェクトのプロパティにデフォルト値を代入できます。構造分解と[デフォルト値](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring#既定値)を組み合わせる方法とは異なり、`??=` はプロパティの値が `null` の場合にもデフォルト値を適用します。

```js
function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ヌル値合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{Glossary("Nullish", "ヌル値")}}
- {{Glossary("Truthy", "真値")}}
- {{Glossary("Falsy", "偽値")}}
