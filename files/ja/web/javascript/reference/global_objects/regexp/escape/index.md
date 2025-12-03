---
title: RegExp.escape()
short-title: escape()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/escape
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`RegExp.escape()`** は静的メソッドで、文字列内の潜在的な正規表現構文文字を[エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions#エスケープシーケンス)し、[リテラルパターン](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)として {{jsxref("RegExp/RegExp", "RegExp()")}} コンストラクターで安全に使用できる新しい文字列を返します。

ユーザーが提供したコンテンツを含む {{jsxref("RegExp")}} を動的に作成する場合は、この関数を使用して入力を無害化することを検討してください（入力が実際に正規表現構文を含むように意図されている場合を除く）。また、例えば、 {{jsxref("String.prototype.replaceAll()")}} を使用して、すべての構文文字の前に `\` を挿入するなどして、その機能を再実装しようとしないでください。 `RegExp.escape()` は、手作業で作成したコードではおそらく達成できないであろう、複数のエッジケース/コンテキストで動作するエスケープシーケンスを使用するように設計されています。

## 構文

```js-nolint
RegExp.escape(string)
```

### 引数

- `string`
  - : エスケープする文字列です。

### 返値

{{jsxref("RegExp/RegExp", "RegExp()")}} コンストラクターのリテラルパターンとして安全に使用できる新しい文字列。すなわち、入力文字列内の次の置き換えが行われます。

- 文字列の最初の文字が、 10 進数の数字（0～9）または ASCII 文字（a～z、A～Z）である場合、 `\x` の[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)構文を使用してエスケープされます。例えば、 `RegExp.escape("foo")` は `"\\x66oo"` を返します（以下、文字列リテラル内の 2 つのバックスラッシュは、単一のバックスラッシュ文字を表します）。この段階では、このエスケープされた文字列が、直前に `\1`、`\x0`、`\u000` などが続く大きなパターンに埋め込まれた場合、先頭の文字がエスケープシーケンスの一部として解釈されないように保証します。
- 正規表現の[構文文字](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character#解説)（`^`, `$`, `\`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, `|`, および区切り文字の `/`）は、前に `\` 文字を挿入することでエスケープされます。例えば、 `RegExp.escape("foo.bar")` は `"\\x66oo\\.bar"` を返し、 `RegExp.escape("(foo)")` は `"\\(foo\\)"` を返します。
- 他の区切り記号（`,`, `-`, `=`, `<`, `>`, `#`, `&`, `!`, `%`, `:`, `;`, `@`, `~`, `'`, `` ` ``, `"` など）は、 `\x` 構文を使用してエスケープされます。例えば、 `RegExp.escape("foo-bar")` は `"\\x66oo\\x2dbar"` を返します。これらの文字は、例えば `/foo\-bar/u` は構文エラーとなるため、 `\` の接頭辞を付けることでエスケープすることはできません。
- 固有の[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)シーケンスがある文字、 `\f` (U+000C FORM FEED), `\n` (U+000A LINE FEED), `\r` (U+000D CARRIAGE RETURN), `\t` (U+0009 CHARACTER TABULATION), `\v` (U+000B LINE TABULATION) は、そのエスケープシーケンスに置きかられます。例えば、 `RegExp.escape("foo\nbar")` は `"\\x66oo\\nbar"` を返します。
- 空白文字は `"\\x20"` としてエスケープされます。
- その他の非 ASCII の[改行およびホワイトスペース文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#ホワイトスペース)は、 UTF-16 コード単位を表す 1～2 件の `\uXXXX` エスケープシーケンスに置き換えられます。例えば、 `RegExp.escape("foo\u2028bar")` は `"\\x66oo\\u2028bar"` を返します。
- [孤立サロゲート](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)は、その `\uXXXX` エスケープシーケンスに置き換えられます。例えば、 `RegExp.escape("foo\uD800bar")` は `"\\x66oo\\ud800bar"` を返します。

### 例外

- {{jsxref("TypeError")}}
  - : `string` が文字列ではない場合に発生します。

## 例

### RegExp.escape() の使用

次の例は、`RegExp.escape()` メソッドのさまざまな入力と出力を示しています。

```js
RegExp.escape("Buy it. use it. break it. fix it.");
// "\\x42uy\\x20it\\.\\x20use\\x20it\\.\\x20break\\x20it\\.\\x20fix\\x20it\\."
RegExp.escape("foo.bar"); // "\\x66oo\\.bar"
RegExp.escape("foo-bar"); // "\\x66oo\\x2dbar"
RegExp.escape("foo\nbar"); // "\\x66oo\\nbar"
RegExp.escape("foo\uD800bar"); // "\\x66oo\\ud800bar"
RegExp.escape("foo\u2028bar"); // "\\x66oo\\u2028bar"
```

### RegExp.escape() と RegExp コンストラクターの使用

`RegExp.escape()` の主な使用例は、文字列をより大きな正規表現パターンに埋め込み、その文字列が正規表現の構文ではなくリテラルパターンとして確実に保持したい場合です。URL を置換する次の単純な例を考えてみましょう。

```js
function removeDomain(text, domain) {
  return text.replace(new RegExp(`https?://${domain}(?=/)`, "g"), "");
}

const input =
  "Consider using [RegExp.escape()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) to escape special characters in a string.";
const domain = "developer.mozilla.org";
console.log(removeDomain(input, domain));
// Consider using [RegExp.escape()](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) to escape special characters in a string.
```

上記の `domain` を挿入すると、正規表現リテラル `https?://developer.mozilla.org(?=/)` となります。ここで、 "." 文字は正規表現の[ワイルドカード](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)文字です。これは、文字列が "." の代わりに何か文字を持つ文字列と一致することを意味しており、例えば、 `developer-mozilla-org` などが該当します。したがって、次のテキストも誤って変更されてしまいます。

```js
const input =
  "This is not an MDN link: https://developer-mozilla.org/, be careful!";
const domain = "developer.mozilla.org";
console.log(removeDomain(input, domain));
// This is not an MDN link: /, be careful!
```

これを修正するには、 `RegExp.escape()` を使用して、ユーザー入力が確実にリテラルパターンとして扱われるようにします。

```js
function removeDomain(text, domain) {
  return text.replace(
    new RegExp(`https?://${RegExp.escape(domain)}(?=/)`, "g"),
    "",
  );
}
```

これでこの関数は意図通りに動作し、 `developer-mozilla.org` の URL を変換しなくなります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`RegExp.escape` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#regexp-escaping)
- [es-shims による `Reflect.escape` のポリフィル](https://www.npmjs.com/package/regexp.escape)
- {{jsxref("RegExp")}}
