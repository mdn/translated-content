---
title: ヌル値合体代入演算子 (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
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

## 解説

ヌル値合体代入演算子は[短絡評価](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting)を行うため、`x ??= y` は `x ?? (x = y)` と同等です。ただし、式 `x` は一度だけ評価されます。

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

そして、常に代入が行われる以下と等価ではありません。

```js
const x = 1;
x ??= console.log("y が評価されました");
// 何もログ出力されない
```

## 例

### ヌル値合体代入演算子の使用

ヌル値合体代入演算子を使用すると、オブジェクトのプロパティに既定値を割り当てることができます。 構造分解と[既定値](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring#既定値)を組み合わせる方法と異なり、 `??=` はプロパティの値が `null` の場合にも既定値を適用します。

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
