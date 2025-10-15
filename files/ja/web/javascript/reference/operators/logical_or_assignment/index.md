---
title: 論理和代入演算子 (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**論理和代入演算子 (`||=`)** は、左オペランドが{{Glossary("falsy", "偽値")}}の場合にのみ右オペランドを評価し、左オペランドに代入します。

{{InteractiveExample("JavaScript デモ: 論理和代入演算子 (||=)")}}

```js interactive-example
const a = { duration: 50, title: "" };

a.duration ||= 10;
console.log(a.duration);
// 予想される結果: 50

a.title ||= "title is empty.";
console.log(a.title);
// 予想される結果: "title is empty."
```

## 構文

```js-nolint
x ||= y
```

## 解説

論理和代入演算子は[短絡評価](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting)を行うため、`x ||= y` は `x || (x = y)` と同等です。ただし、式 `x` は一度だけ評価されます。

左辺が偽値でない場合、[論理和](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR)演算子の短絡が発生するため代入は実行されません。例えば、 `x` が `const` であっても、以下のコードはエラーが発生しません。

```js
const x = 0;
x ||= 2;
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

x.value ||= 2;
```

そして、常に代入が行われる以下と等価ではありません。

```js
const x = 1;
x ||= console.log("y が評価されました");
// 何もログ出力されない
```

## 例

### 既定の内容を設定する

"lyrics" 要素が空の場合は、既定値を表示します。

```js
document.getElementById("lyrics").textContent ||= "No lyrics.";
```

ここでの短絡評価は、要素が不必要に更新されることがなく、追加のパースやレンダリング作業、フォーカスの損失などの望ましくない副作用を引き起こすことがないので、特に有益です。

注意: チェック対象の API が返す値に注意してください。空の文字列（{{Glossary("falsy", "偽値")}}）が返される場合は、`||=` を使用する必要があります。それ以外の場合 (返値が [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) または {{jsxref("undefined")}} の場合) は [`??=`](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) 演算子を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [論理和演算子 (`||`)](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Null 合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [ビット論理和代入演算子 (`|=`)](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy", "真値")}}
- {{Glossary("Falsy", "偽値")}}
