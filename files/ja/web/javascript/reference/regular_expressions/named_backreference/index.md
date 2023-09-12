---
title: "名前付き後方参照: \\k<name>"
slug: Web/JavaScript/Reference/Regular_expressions/Named_backreference
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JsSidebar}}

**名前付き後方参照**は、以前の[名前付きキャプチャグループ]の一致部分を参照し、そのグループと同じテキストに一致します。[名前なしキャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)の場合は、通常の[後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)構文を使用する必要があります。

## 構文

```regex
\k<name>
```

### 引数

- `name`
  - : グループの名前です。有効な[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)であり、存在する名前付きキャプチャグループを参照する必要があります。

## 解説

名前付き後方参照は、通常の後方参照とよく似ています。キャプチャグループによって照合されたテキストを参照し、同じテキストに一致します。異なる点は、キャプチャグループを番号ではなく名前で参照することです。これにより、正規表現がより読み取りやすくなり、 リファクタリングや保守が簡単になります。

[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では、正規表現が少なくとも 1 つの名前付きキャプチャグループを格納している場合にのみ、シーケンス `\k` は名前付き後方参照を開始します。それ以外の場合、これは [ID エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)であり、リテラル文字 `k`` と同じです。これは[ウェブの互換性のための非推奨構文](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)としてのみ認められており、頼ってはいけません。

```js
/\k/.test("k"); // true
```

## 例

### 引用符のペアリング

以下の関数は、文字列中の `title='xxx'` と `title="xxx"` のパターンと一致します。 引用符が確実に一致するように、後方参照を使用して最初の引用符を参照します。 2 つ目のキャプチャグループ (`[2]`) にアクセスすると、一致した引用符の間の文字列を返します。

```js
function parseTitle(metastring) {
  return metastring.match(/title=(?<quote>["'])(.*?)\k<quote>/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
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
- [後方参照: `\1`, `\2`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
