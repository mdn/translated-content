---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
---

{{JSRef}}

**`GeneratorFunction` コンストラクター**は、新しい{{jsxref("Statements/function*", "ジェネレーター関数", "", 1)}}オブジェクトを生成します。 JavaScript では、すべてのジェネレーター関数が実際に `GeneratorFunction` オブジェクトです。

`GeneratorFunction` はグローバルオブジェクトではないことに注意してください。次のコードを評価することによって得られます。

```js
Object.getPrototypeOf(function* () {}).constructor;
```

## 構文

```
new GeneratorFunction ([arg1[, arg2[, ...argN]],] functionBody)
```

### 引数

- `arg1, arg2, ... argN`
  - : 形式的な引数名として関数に使用される名前です。それぞれが有効な JavaScript の識別子であるか、カンマで区切った文字列のリストで、例えば "`x`", "`theValue`", "`a,b`" などです。
- `functionBody`
  - : 関数定義を構成する JavaScript 文を含む文字列。

## 解説

`GeneratorFunction` コンストラクターで生成された{{jsxref("Statements/function*", "ジェネレーター関数", "", 1)}}オブジェクトは、関数が生成されたときにパースされます。これは、ジェネレーター関数を {{jsxref("Statements/function*", "function* 式")}}で定義してからコード内で呼び出す方法ほど効率的ではありません。というのも、そのような関数はコードの残りの部分と共にパースされるからです。

関数に渡されたすべての引数は、渡された順に、作成される関数内の引数の識別子の名前として扱われます。

> **メモ:** {{jsxref("Statements/function*", "ジェネレーター関数")}}が `GeneratorFunction` コンストラクターによって生成された場合、生成コンテキストのクロージャは作成されません。常にグローバルスコープに生成されます。
>
> 実行すると、ローカル変数とグローバルグローバル変数にのみアクセスでき、 `GeneratorFunction` コンストラクターが呼び出されたスコープの変数にはアクセスできません。
>
> これは、ジェネレーター関数式のコードで {{jsxref("Global_Objects/eval", "eval")}} を使用した場合とは異なります。

`GeneratorFunction` コンストラクターを (`new` 演算子を使用せずに) 関数として呼び出した場合、コンストラクターとして呼び出したときと同じ効果があります。

## 例

### GeneratorFunction() コンストラクターからジェネレーター関数を生成する

```js
var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
var g = new GeneratorFunction("a", "yield a * 2");
var iterator = g(10);
console.log(iterator.next().value); // 20
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.GeneratorFunction")}}

## 関連情報

- {{jsxref("Statements/function*", "function* 関数", "", 1)}}
- {{jsxref("Operators/function*", "function* 式", "", 1)}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "関数文", "", 1)}}
- {{jsxref("Operators/function", "関数式", "", 1)}}
- {{jsxref("Functions_and_function_scope", "関数と関数スコープ", "", 1)}}
