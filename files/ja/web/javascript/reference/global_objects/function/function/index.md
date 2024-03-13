---
title: Function() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
---

{{JSRef}}

**`Function` コンストラクター**は、新しい `Function` **オブジェクト**を生成します。コンストラクターを直接呼び出すと動的に関数を生成することができますが、セキュリティや、 {{jsxref("eval")}} と似た性能の (ただし、はるかに重要性の低い) 問題を抱えます。ただし eval とは異なり、 `Function` コンストラクターはグローバルスコープで実行される関数のみを生成します。

{{EmbedInteractiveExample("pages/js/function-constructor.html","shorter")}}

## 構文

```
new Function([arg1 [, arg2 [, ...argN]] ,] functionBody)
```

### 引数

- `arg1, arg2, ... argN`
  - : 仮引数の名前として関数で用いるための名前。各々は、妥当な JavaScript の識別子と一致する文字列か、カンマで区切られた文字列などのリストでなければなりません。例えば、 "`x`", "`theValue`", "`x,theValue`" などです。
- `functionBody`
  - : 関数定義を形成する JavaScript の文を含む文字列。

## 解説

`Function` コンストラクターで生成された `Function` オブジェクトは、関数が作成されたときに解釈されます。これは、関数を{{jsxref("Operators/function", "関数式", "", 1)}}や{{jsxref("Statements/function", "関数文", "", 1)}}を使って定義してコード内で呼び出した場合に比べ、コードの他の部分と一緒に解釈されるため、効率が落ちます。

関数に渡されるすべての引数は、関数のパラメーター識別名として、渡される順番どおりに作成されます。引数を省略すると、その引数の値は `undefined` になります。

(`new` 演算子を用いずに) 関数として、`Function` コンストラクターを実行することは、コンストラクターとして実行することと同じです。

## 例

### Function コンストラクターに引数を指定する

以下のコードは二つの引数を取る `Function` オブジェクトを生成します。

```js
// この例は JavaScript コンソールで直接実行することができます

// 二つの引数を取り、その合計を返す関数を生成します
const adder = new Function("a", "b", "return a + b");

// 関数を呼び出します
adder(2, 6);
// 8
```

引数 "`a`" および "`b`" は関数の本体 "`return a + b`" の中で使用される形式的な引数名です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Functions", "関数と関数スコープ", "", 1)}}
- {{jsxref("Statements/function", "function")}} 文
- {{jsxref("Operators/function", "function")}} 式
- {{jsxref("Statements/function*", "function*")}} 文
- {{jsxref("Operators/function*", "function*")}} 式
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
