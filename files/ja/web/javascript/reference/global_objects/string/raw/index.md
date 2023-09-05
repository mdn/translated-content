---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`String.raw()`** 静的メソッドは、[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)のためのタグ関数です。この関数は Python の文字列リテラルの `r` 接頭辞や C# の文字列リテラルの `@` 接頭辞に似ています。この関数は、テンプレートリテラルの生の文字列形式を取得するために使用されます。つまり、置換（`${foo}` など）は行われますが、エスケープ（`\n` など）は実行されません。

{{EmbedInteractiveExample("pages/js/string-raw.html")}}

## 構文

```js-nolint
String.raw(strings, ...substitutions)

String.raw`templateString`
```

### 引数

- `strings`
  - : 整形式のテンプレートリテラル配列オブジェクト、たとえば `{ raw: ['foo', 'bar', 'baz'] }` などです。文字列の配列風オブジェクトを値として持つ `raw` プロパティを持っているオブジェクトであるべきです。
- `...substitutions`
  - : 置換される値が入ります。
- `templateString`
  - : [テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)です。オプションでで置換文字列 (`${...}`) を含みます。

### 返値

指定されたテンプレートリテラルの生の文字列形式です。

### 例外

- {{jsxref("TypeError")}}
  - : 第 1 引数に `raw` プロパティが含まれていなかったり、`raw` プロパティが `undefined` または `null` 出会ったりした場合に発生します。

## 解説

ほとんどの場合、`String.raw()` はテンプレートリテラルとともに使用されます。前述の最初の構文は、滅多に使用されません。JavaScript エンジンが（他の[タグ関数](/ja/docs/Web/JavaScript/Reference/Template_literals#タグ付きテンプレート)のように）適切な引数で呼び出すからです。

`String.raw()` はテンプレートリテラルの唯一の組み込みタグ関数です。既定のテンプレート関数のように動作し、連結を行います。通常の JavaScript コードで再実装することができます。

> **警告:** `String.raw` を直接「識別」タグとして使用しないでください。この実装方法については[識別タグの構築](#識別タグの構築)を参照してください。

`String.raw()` が `raw` プロパティに `length` プロパティがないか、正でない `length` を持つオブジェクトで呼び出された場合、空の文字列 `""` を返します。もし `substitutions.length < strings.raw.length - 1` （つまり、プレースホルダーを埋めるだけの置換がない - 整形式タグ付きテンプレートリテラルでは起こりえない）場合、残りのプレースホルダーは空の文字列で埋められます。

## 例

### String.raw() の使用

```js
String.raw`Hi\n${2 + 3}!`;
// 'Hi\\n5!' です。'Hi' の次の文字は
// 改行文字ではなく、
// '\' および 'n' は 2 つの文字です。

String.raw`Hi\u000A!`;
// 'Hi\\u000A!' です。同様で、今回は
// \, u, 0, 0, 0, A, の 6 文字です。
// すべての種類のエスケープ文字は無効で、バックスラッシュが
// 出力文字列中に存在します。
// 文字列の .length プロパティを調べると確認できます。

const name = "Bob";
String.raw`Hi\n${name}!`;
// 'Hi\\nBob!' です。置き換えが処理されます。

String.raw`Hi \${name}!`;
// 'Hi \\${name}!' です。ドル記号がエスケープされます。補間は行われません。
```

### 識別タグの構築

多くのツールは、特定の名前でタグ付けされたリテラルを特別扱いします。

```js-nolint
// フォーマッターによっては、このリテラルのコンテンツを HTML として書式化する
const doc = html`<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
`;
```

`html` タグを素朴に実装するためには、次のようにします。

```js
const html = String.raw;
```

これは、実際は、上記のように動作します。しかし、`String.raw` は "cooked" 文字列ではなく、生の文字列リテラルを連結するので、エスケープシーケンスは処理されません。

```js-nolint
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

タグが純粋にマークアップのためのもので、リテラルの値を変更しないような「純粋な識別タグ」では、これは望むものではないかもしれません。 この場合、カスタムタグを作成し、"cooked"（つまり、エスケープシーケンスが処理されたｓ）リテラル配列を `String.raw` に渡して、生の文字列であるかのように見せかけることができます。

```js-nolint
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// フォーマッターによっては、このリテラルのコンテンツを HTML として書式化する
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; "\n" が改行文字になる
```

最初の引数は `raw` プロパティを持つオブジェクトで、その値はテンプレートリテラルの区切られた文字列を表す配列風オブジェクト（`length` プロパティと整数のインデックスを持つ）であることに注意してください。残りの引数は置き換え用です。`raw` の値は配列風オブジェクトであれば何でも良いので、文字列であっても構いません。例えば、 `'test'` は `['t', 'e', 's', 't']` として扱われます。以下は `` `t${0}e${1}s${2}t` `` と等価です。

```js
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.raw` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
