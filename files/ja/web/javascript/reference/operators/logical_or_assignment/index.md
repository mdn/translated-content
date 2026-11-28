---
title: 論理和代入演算子 (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
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

### 引数

- `x`
  - : [識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)や[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)など、有効な代入先です。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2 （代入）以上の式です。元の `x` の値が{{Glossary("falsy", "偽値")}}である場合にのみ評価され、`x` に代入されます。

### 返値

元の `x` の値が偽値の場合は `y` の値、そうでなければ元の `x` の値です。

## 解説

論理和代入演算子は[短絡評価](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#短絡評価)を行うため、`x ||= y` は `x || (x = y)` と同等です。ただし、式 `x` は一度だけ評価されます。

左辺が偽値でない場合、[論理和](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR)演算子の短絡が発生するため代入は実行されません。例えば、 `x` が `const` であっても、以下のコードはエラーが発生しません。

```js
const x = 1;
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

実際、`x` が偽値でない場合、`y` はまったく評価されません。

```js
const x = 1;
x ||= console.log("y が評価されました");
// 何もログ出力されない
```

## 例

### デフォルトの内容を設定する

"lyrics" 要素が空の場合は、デフォルト値を表示します。

```js
document.getElementById("lyrics").textContent ||= "No lyrics.";
```

ここでの短絡評価は、要素が不必要に更新されず、追加の構文解析やレンダリング作業、フォーカスの損失などの望ましくない副作用を引き起こさないため、特に有益です。

注: 確認対象の API が返す値に注意してください。空の文字列（{{Glossary("falsy", "偽値")}}）が返される場合は、空白だけを表示するのではなく "No lyrics." を表示するために `||=` を使用する必要があります。ただし、コンテンツが空の場合に API が [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) または {{jsxref("undefined")}} を返す場合は、代わりに [`??=`](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [論理和演算子 (`||`)](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [ヌル値合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [ビット論理和代入演算子 (`|=`)](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy", "真値")}}
- {{Glossary("Falsy", "偽値")}}
