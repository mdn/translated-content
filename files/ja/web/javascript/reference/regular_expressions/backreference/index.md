---
title: "後方参照: \\1, \\2"
slug: Web/JavaScript/Reference/Regular_expressions/Backreference
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

**後方参照**は、前にある[キャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)の部分一致を参照し、そのグループと同じテキストと照合します。[名前付きキャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)の場合は、[名前付き後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)構文を使用するとよいでしょう。

## 構文

```regex
\N
```

> [!NOTE]
> `N` はリテラル文字ではありません。

### 引数

- `N`
  - : キャプチャグループの番号を参照する正の整数。

## 解説

後方参照は、キャプチャグループが前に一致したものと同じテキストと照合する方法です。キャプチャグループは 1 から数えるため、最初のグループの結果は `\1`、第二のグループの結果は `\2` で参照し、以降も同様です。`\0` は NUL 文字の[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)です。

[大文字と小文字を区別しない](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)照合では、後方参照は元のテキストと異なる大文字と小文字を持つテキストと一致することがあります。

```js
/(b)\1/i.test("bB"); // true
```

後方参照は存在するキャプチャグループを参照しなければなりません。指定する数がキャプチャグループの総数より大きい場合、構文エラーが発生します。

```js-nolint example-bad
/(a)\2/u; // SyntaxError: Invalid regular expression: Invalid escape
```

数字の並び全体がキャプチャグループ番号として解釈されます。例えば、`\12` は 12 番目のキャプチャグループを参照します。最初のキャプチャグループへの後方参照の後にリテラルの `2` が続くものではありません。

[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では、該当するキャプチャグループが存在しない場合、エスケープは最初の数字に応じて異なる解釈になります。

- 先頭の数字が `1` から `7` の場合、[古い 8 進数のエスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#エスケープシーケンス)となり、最大値を `0o377` として最大 3 桁の 8 進数字を消費します。残りの数字はリテラル文字になります。
- 先頭の数字が `8` または `9` の場合、[識別エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)となり、その数字自体に一致します。残りの数字はリテラル文字になります。

パーサーは、より短いキャプチャグループ番号として解釈し直しません。

これらは[ウェブの互換性のために非推奨となった構文](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)なので、頼るべきではありません。

```js
/(a)\2/.test("a\x02"); // true
/(a)\12/.test("a\n"); // true。8 進数の 12。グループ 1 への後方参照 + リテラルの 2 ではない
/\18/.test("\x018"); // true。8 進数の 1 + リテラルの 8
/\1234/.test("S4"); // true。8 進数の 123 + リテラルの 4
/\400/.test(" 0"); // true。8 進数の 40 + リテラルの 0
/\89/.test("89"); // true。識別エスケープの 8 + リテラルの 9
```

参照するキャプチャグループが一致しない場合（例えば、それが[論理和の一致しない選択肢](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)に属するため）、またはグループがまだ一致していない場合（例えば、後方参照より後に位置するため）、後方参照は常に成功します（空文字列に一致するかのように）。

```js
/(?:a|(b))\1c/.test("ac"); // true
/\1(a)/.test("a"); // true
```

## 例

### 引用符のペアリング

以下の関数は、文字列中の `title='xxx'` と `title="xxx"` のパターンに一致します。引用符が確実に一致するように、後方参照を使用して最初の引用符を参照します。2 つ目のキャプチャグループ (`[2]`) にアクセスすると、一致する引用符の間の文字列を返します。

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

### 重複する単語の照合

以下の関数は、文字列中の重複する単語（通常はタイプミス）を探します。なお、`\w` [文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) は英字にのみ一致しますが、アクセント付きの文字や他のアルファベットには一致しません。より一般的な照合を行いたい場合は、文字列を空白で[分割](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split)し、結果の配列を反復処理するとよいでしょう。

```js
function findDuplicates(text) {
  return text.match(/\b(\w+)\s+\1\b/i)?.[1];
}

findDuplicates("foo foo bar"); // 'foo'
findDuplicates("foo bar foo"); // undefined
findDuplicates("Hello hello"); // 'Hello'
findDuplicates("Hello hellos"); // undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)ガイド
- [正規表現](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [キャプチャグループ: `(...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [名前付きキャプチャグループ: `(?<name>...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [名前付き後方参照: `\k<name>`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
