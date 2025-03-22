---
title: TypeScript
slug: Glossary/TypeScript
l10n:
  sourceCommit: 8005d92738cb5678d9b1e434f02ddebaa15c1eaa
---

{{GlossarySidebar}}

TypeScript は、JavaScript に{{glossary("static_typing", "静的型チェック")}}を追加したプログラミング言語です。

TypeScript は JavaScript のスーパーセットです。つまり、JavaScript で使用できるものはすべて TypeScript でも使用でき、すべての JavaScript プログラムは構文的に正しい TypeScript プログラムです。また、TypeScript と JavaScript の実行時の動作は同一です。

ただし、TypeScript ではコンパイル時の型チェックが追加され、さまざまな型の使用方法と組み合わせ方法に関するルールが実装されます。これにより、JavaScript では実行時にのみ発生するさまざまなプログラミングエラーが検出されます。

いくつかの型付けルールは JavaScript から推測されます。例えば、以下のコードでは TypeScript は次のように推測します。 `myVariable` は文字列であり、別の型に再割り当てすることはできません。

```js
let myVariable = "Hello World";
myVariable = 1;
// Error:
// Type 'number' is not assignable to type 'string'.
```

TypeScript を使用すると、プログラマーはコードに注釈を付けて、たとえば関数のパラメーターの型やオブジェクトのプロパティを示すこともできます。

```ts
function add(left: number, right: number): number {
  return left + right;
}

add("hello", "world");
// Error:
// Argument of type 'string' is not assignable to parameter of type 'number'.
```

コンパイル後、型注釈は削除され、コンパイルされた出力は JavaScript のみになり、任意の JavaScript ランタイムで実行できるようになります。

## 関連情報

- [TypeScript website](https://www.typescriptlang.org/)
