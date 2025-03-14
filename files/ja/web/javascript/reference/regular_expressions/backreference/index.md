---
title: "後方参照: \\1, \\2"
slug: Web/JavaScript/Reference/Regular_expressions/Backreference
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JsSidebar}}

**後方参照**は、前回の[キャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)の部分一致を参照し、そのグループと同じテキストに一致します。[名前付きキャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)の場合は、[名前付き後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)構文を使用する方ができればよいでしょう。

## 構文

```regex
\N
```

> **メモ:** `N` はリテラル文字ではありません。

### 引数

- `N`
  - : キャプチャグループの番号を参照する正の値。

## 解説

後方参照は、前回キャプチャグループによって一致したのと同じテキストに一致する方法です。キャプチャリンググループは 1 から数えるので、最初のキャプチャリンググループの結果は `\1` で参照し、2 つ目は `\2` で参照し、といった具合になります。`\0` は NUL 文字の[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)です。

[大文字と小文字を区別しない](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)照合では、後方参照は元のテキストと異なる大文字と小文字を持つテキストと一致することがあります。

```js
/(b)\1/i.test("bB"); // true
```

後方参照は存在するキャプチャグループを参照しなければなりません。指定する数がキャプチャグループの総数より大きい場合、構文エラーが発生します。

```js
/(a)\2/u; // SyntaxError: Invalid regular expression: Invalid escape
```

[Unicode 対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)でない場合は、無効な後方参照は[古い 8 進エスケープ](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#エスケープシーケンス)シーケンスになります。これは[ウェブの互換性のために非推奨の構文](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)ですので、頼ってはいけません。

```js
/(a)\2/.test("a\x02"); // true
```

参照するキャプチャグループが一致しない場合（例えば、それが[論理和の一致しない選択肢](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)に属するため）、または、グループがまだ一致 していない場合（例えば、それが後方参照の正しい位置にあるため）、後方参照は常に成功します（空文字列に一致するかのように）。

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

- [グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [キャプチャグループ: `(...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [名前付きキャプチャグループ: `(?<name>...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [名前付き後方参照: `\k<name>`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
