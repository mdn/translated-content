---
title: 'TypeError: invalid assignment to const "x"'
slug: Web/JavaScript/Reference/Errors/Invalid_const_assignment
---

{{jsSidebar("Errors")}}

JavaScript の例外 "invalid assignment to const" は、定数を変更しようとしたときに発生します。 JavaScript の [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) で宣言すると、再代入や再宣言を行うことができません。

## エラーメッセージ

```js
TypeError: invalid assignment to const "x" (Firefox)
TypeError: Assignment to constant variable. (Chrome)
TypeError: Assignment to const (Edge)
TypeError: Redeclaration of const 'x' (IE)
```

## エラータイプ

{{jsxref("TypeError")}}

## エラーの原因

定数は、通常の実行中にプログラムによって変更できない値です。再代入も再宣言もできません。JavaScript では、定数を [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) キーワードで宣言します。

## 例

### 無効な再宣言

同じブロックスコープで同じ定数名に値を代入すると、エラーが発生します。

```js example-bad
const COLUMNS = 80;

// ...

COLUMNS = 120; // TypeError: invalid assignment to const `COLUMNS'
```

### エラーの修正

エラーを修正するには、複数の選択肢があります。問題となっている定数で、達成しようとしていたことを確認してください。

#### 名前の変更

ほかの定数を宣言しようとしていたのであれば、ほかの名前を選んで名前を変更してください。この定数名は、すでにこのスコープで使用されています。

```js example-good
const COLUMNS = 80;
const WIDE_COLUMNS = 120;
```

#### `const`、`let`、`var`

定数を宣言するつもりがなかったのであれば、 const を使用しないでください。ブロックスコープの変数であれば [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) で、グローバルスコープの変数であれば [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) で宣言してください。

```js example-good
let columns = 80;

// ...

let columns = 120;
```

#### スコープ

正しいスコープにあるか確認してください。たとえば、この定数はこのスコープにあるべきなのでしょうか。それとも関数にあるべきなのでしょうか。

```js example-good
const COLUMNS = 80;

function setupBigScreenEnvironment() {
  const COLUMNS = 120;
}
```

### `const` と不変性

`const` 宣言は、値への読み取り専用の参照を作成します。それが保持している値が不変であることを意味するものでは**なく**、変数識別子に再代入できないだけです。たとえば、コンテンツがオブジェクトである場合、オブジェクト自体はまだ変更可能であることを意味します。 つまり、変数に格納されている値を変更することはできないということです。

```js example-bad
const obj = { foo: "bar" };
obj = { foo: "baz" }; // TypeError: invalid assignment to const `obj'
```

しかし、変数内のプロパティは変更することができます。

```js example-good
obj.foo = "baz";
obj; // Object { foo: "baz" }
```

## 関連項目

- [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var)
