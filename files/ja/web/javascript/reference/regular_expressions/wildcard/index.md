---
title: "ワイルドカード: ."
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JsSidebar}}

**ワイルドカード**は改行文字を除くすべての文字に一致します。`s` フラグが設定された場合は、改行文字にも一致します。

## 構文

```regex
.
```

## 解説

`.` は[改行文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)を除くあらゆる文字に一致します。[`s`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) フラグが設定された場合、`.` は改行文字にも一致します。

`.` に一致する正確な文字の集合は、正規用言が [Unicode 対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)であるかによります。Unicode 対応モードでは、`.` はあらゆる Unicode コードポイントに一致します。それ以外の場合は、あらゆる UTF-16 コード単位に一致します。例えば次のようになります。

```js
/../.test("😄"); // true。サロゲートペアとして 2 つの UTF-16 コード単位に一致します。
/../u.test("😄"); // false。1 つの Unicode 文字しかありません。
```

## 例

### 数量詞の使用

ワイルドカードはしばしば[数量詞](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)と共に使用され、次に関心がある文字が得られるまで、任意の文字列に一致します。 例えば、次の例では Markdown ページのタイトルを `# Title` という形で抽出します。

```js
function parseTitle(entry) {
  // タイトルがファイルの始めにはない可能性があるので、複数行モードを使用する。
  // m フラグは . を行末に一致させないので、タイトルは単一の行になければ
  // ならないことに注意する
  // 最初のキャプチャグループに一致したテキストを返す。
  return /^#[ \t]+(.+)$/m.exec(entry)?.[1];
}

parseTitle("# Hello world"); // "Hello world"
parseTitle("## Subsection"); // undefined
parseTitle(`
---
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
---

# Wildcard: .

A **wildcard** matches all characters except line terminators.
`); // "Wildcard: ."
```

### コードブロックのコンテンツの照合

次の例は Markdown の 3 つのバックスティックで囲まれたコードブロックの内容に一致します。コードブロックの内容が複数行にまたがる可能性があるため、`.` を改行と一致させるために `s` フラグを使用しています。

````js
function parseCodeBlock(entry) {
  return /^```.*?^(.+?)\n```/ms.exec(entry)?.[1];
}

parseCodeBlock(`
\`\`\`js
console.log("Hello world");
\`\`\`
`); // "console.log("Hello world");"

parseCodeBlock(`
A \`try...catch\` statement must have the blocks enclosed in curly braces.

\`\`\`js-nolint example-bad
try
  doSomething();
catch (e)
  console.log(e);
\`\`\`
`); // "try\n  doSomething();\ncatch (e)\n  console.log(e);"
````

> **警告:** この例はあくまでデモンストレーションのためのものです。 Markdown を解析したい場合は、考慮すべきエッジケースがたくさんあるため、専用の Markdown パーサーを使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [文字クラス: `[...]`, `[^...]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [文字クラスエスケープ: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
