---
title: "ReferenceError: can't access lexical declaration 'X' before initialization"
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "can't access lexical declaration 'X' before initialization" は、語彙変数が初期化前にアクセスされたときに発生します。これはブロック文内で、 [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) または [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) 宣言が定義される前にアクセスされたときに発生します。

## エラーメッセージ

```plain
ReferenceError: Cannot access 'X' before initialization (V8-based)
ReferenceError: can't access lexical declaration 'X' before initialization (Firefox)
ReferenceError: Cannot access uninitialized variable. (Safari)
```

## エラー型

{{jsxref("ReferenceError")}}

## エラーの原因

語彙変数が、初期化される前にアクセスされました。
これは、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) または [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) で宣言された変数が、その宣言場所が実行される前にアクセスされた場合、どのスコープ（グローバル、モジュール、関数、ブロック）においても現れます。

重要なのは、コード内の文の記述順ではなく、アクセスと変数宣言の実行順序であることに注意してください。
詳しくは、[一時的なデッドゾーン (Temporal Dead Zone)](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン_tdz) の説明を参照してください。

`var` を使用して宣言された変数では、この問題は発生しません。これは、変数が[巻き上げ](/ja/docs/Glossary/Hoisting)される際に、デフォルト値として `undefined` で初期化されるためです。

このエラーは、モジュールが、そのモジュール自体の評価に依存する変数を使用している場合、[循環インポート](/ja/docs/Web/JavaScript/Guide/Modules#cyclic_imports)においても発生する可能性があります。

## 例

### 無効な場合

この場合、変数 `foo` は宣言される前にアクセスされています。
この時点では foo は値が割り当てられていないため、この変数にアクセスすると参照エラーが発生します。

```js example-bad
function test() {
  // Accessing the 'const' variable foo before it's declared
  console.log(foo); // ReferenceError: foo is not initialized
  const foo = 33; // 'foo' is declared and initialized here using the 'const' keyword
}

test();
```

この例では、インポートされた変数 `a` が参照されていますが、現在のモジュール `b.js` の評価によって `a.js` の評価がブロックされているため、`a` は初期化されていません。

```js example-bad
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

### 有効な場合

次の例では、変数にアクセスする前に `const` キーワードを使用して、変数を正しく宣言しています。

```js example-good
function test() {
  // Declaring variable foo
  const foo = 33;
  console.log(foo); // 33
}
test();
```

この例では、インポートされた変数 `a` が非同期にアクセスされるため、`a` へのアクセスが行われる前に、両方のモジュールが評価されます。

```js example-good
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);
export const b = 1;
```

## 関連情報

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/class", "class")}}
