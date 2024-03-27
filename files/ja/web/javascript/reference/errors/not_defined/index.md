---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
---

{{jsSidebar("Errors")}}

JavaScript の例外 "_variable_ is not defined" は、どこかで参照している変数が存在しない場合に発生します。

## エラーメッセージ

```js
ReferenceError: "x" is not defined
```

## エラーの種類

{{jsxref("ReferenceError")}}.

## エラーの原因

どこかで存在しない変数を参照しています。この変数を宣言しておくか、現在のスクリプトまたは[スコープ](/ja/docs/Glossary/Scope)で利用可能であることを確認する必要があります。

> **メモ:** ライブラリ (jQuery など) を読み込むとき、ライブラリの変数、例えば "$" にアクセスする前に読み込みが行われるかを確認してください。ライブラリを読み込む {{HTMLElement("script")}} 要素は、それを使用するコードよりも前に置いてください。

## 例

### 宣言されていない変数

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

"foo" と言う変数はどこにも宣言されていません。これは文字列である必要があり、それならば {{jsxref("String.prototype.substring()")}} メソッドが動作します。

```js example-good
var foo = "bar";
foo.substring(1); // "ar"
```

### スコープの間違い

変数は現在の実行コンテキストで利用可能である必要があります。[関数](/ja/docs/Web/JavaScript/Reference/Functions)の中で定義された変数は、その関数のスコープ内でしか定義されていないので、関数の外のどこからもアクセスできません。

```js example-bad
function numbers() {
  var num1 = 2,
    num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

しかし、関数はそれが定義されたスコープ内で定義されたすべての変数と関数にアクセスすることができます。言い換えれば、グローバルスコープで定義された関数は、グローバルスコープ内で定義されたすべての変数にアクセスすることができます。/p>

```js example-good
var num1 = 2,
  num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(numbers()); // 5
```

## 関連情報

- [スコープ](/ja/docs/Glossary/Scope)
- [変数の宣言 (JavaScript ガイド)](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#declaring_variables)
- [関数のスコープ (JavaScript ガイド)](/ja/docs/Web/JavaScript/Guide/Functions#関数のスコープ)
