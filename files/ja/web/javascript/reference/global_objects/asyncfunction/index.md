---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
---

{{JSRef}}

**`AsyncFunction` コンストラクター**は、新しい{{jsxref("Statements/async_function", "非同期関数", "", 1)}}オブジェクトを生成します。 JavaScript では、すべての非同期関数が実際に `AsyncFunction` オブジェクトです。

`AsyncFunction` はグローバルオブジェクトでは*ない*ことに注意してください。これは以下のようなコードで取得することができます。

```js
Object.getPrototypeOf(async function(){}).constructor
```

## 構文

```
new AsyncFunction([arg1[, arg2[, ...argN]],] functionBody)
```

### 引数

- `arg1, arg2, ... argN`
  - : 形式的な引数名として関数に使用される名前です。それぞれが有効な JavaScript の識別子であるか、カンマで区切った文字列のリストで、例えば "`x`", "`theValue`", "`a,b`" などです。
- `functionBody`
  - : 関数定義を構成する JavaScript 文を含む文字列。

## 解説

`AsyncFunction` コンストラクターで生成された{{jsxref("Statements/async_function", "非同期関数", "", 1)}}オブジェクトは、関数が生成されたときにパースされます。これは、非同期関数を{{jsxref("Statements/async_function", "非同期関数式", "", 1)}}で定義してからコード内で呼び出す方法ほど効率的ではありません。というのも、そのような関数はコードの残りの部分と共にパースされるからです。

関数に渡されたすべての引数は、渡された順に、作成される関数内の引数の識別子の名前として扱われます。

> **メモ:** {{jsxref("Statements/async_function", "非同期関数", "", 1)}}が `AsyncFunction` コンストラクターによって生成された場合、生成コンテキストのクロージャは生成されません。常にグローバルスコープに生成されます。
>
> 実行すると、ローカル変数とグローバル変数にのみアクセスでき、 `AsyncFunction` コンストラクターが呼び出されたスコープの変数にはアクセスできません。
>
> これは、非同期関数式のコードで {{jsxref("Global_Objects/eval", "eval")}} を使用した場合とは異なります。

`AsyncFunction` コンストラクターを (`new` 演算子を使用せずに) 関数として呼び出した場合、コンストラクターとして呼び出したときと同じ効果があります。

## 例

### AsyncFunction() コンストラクターから非同期関数を生成する

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

let AsyncFunction = Object.getPrototypeOf(async function(){}).constructor

let a = new AsyncFunction('a',
                          'b',
                          'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');

a(10, 20).then(v => {
  console.log(v); // prints 30 after 4 seconds
});
```

## 仕様書

| 仕様書                                                                                                   |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-async-function-objects', 'AsyncFunction object')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.AsyncFunction")}}

## 関連情報

- {{jsxref("Statements/async_function", "async function 関数", "", 1)}}
- {{jsxref("Operators/async_function", "async function 式", "", 1)}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "関数文", "", 1)}}
- {{jsxref("Operators/function", "関数式", "", 1)}}
- {{jsxref("Functions_and_function_scope", "関数と関数スコープ", "", 1)}}
