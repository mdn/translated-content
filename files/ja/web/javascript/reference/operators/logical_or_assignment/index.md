---
title: 論理和代入 (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
---

{{jsSidebar("Operators")}}

論理和代入演算子 (`x ||= y`) は、`x` が{{Glossary("falsy", "偽値")}}である場合にのみ代入を行います。

{{EmbedInteractiveExample("pages/js/expressions-logical-or-assignment.html")}}

## 構文

```js
expr1 ||= expr2;
```

## 解説

### 短絡評価 (ショートサーキット)

[論理和](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR)演算子は次のように動作します。

```js
x || y;
// x が真値の場合 x を返します
// x が真値ではない場合 y を返します
```

論理和演算子は、1 つ目のオペランドがまだ結果を決定していない場合にのみ、2 つ目のオペランドの評価を行う短絡評価をします。

論理和代入も同様に短絡評価され、右辺の評価が行われる論理演算の場合にのみ代入が行われます。言い替えれば、`x ||= y` は以下と等価です。

```js
x || (x = y);
```

そして、常に代入が行われる以下と等価ではありません。

```js example-bad
x = x || y;
```

なお、この動作は、数学的な代入演算子やビット代入演算子とは異なることに注意してください。

## 例

### 既定の内容を設定する

"lyrics" 要素が空の場合は、既定値を表示します。

```js
document.getElementById("lyrics").textContent ||= "No lyrics.";
```

ここでの短絡評価は、要素が不必要に更新されることがなく、追加のパースやレンダリング作業、フォーカスの損失などの望ましくない副作用を引き起こすことがないので、特に有益です。

注意: チェック対象の API が返す値に注意してください。空の文字列 ({{Glossary("falsy", "偽値")}}) が返される場合は、`||=` を使用する必要があります。それ以外の場合 (返値が {{jsxref("null")}} または {{jsxref("undefined")}} の場合) は `??=` 演算子を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [論理和演算子 (||)](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Null 合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [ビット論理和代入演算子 (`|=`)](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy", "真値")}}
- {{Glossary("Falsy", "偽値")}}
