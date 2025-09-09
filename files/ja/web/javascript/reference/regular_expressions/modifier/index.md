---
title: "修飾子: (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
l10n:
  sourceCommit: b7b0b7c096525c24c22d80f79448823c747491e7
---

{{jsSidebar}}

**修飾子**は、正規表現の特定の部分の[フラグ](/ja/docs/Web/JavaScript/Reference/Regular_expressions#正規表現フラグ)設定を上書きします。これは、特定の正規表現構文要素の意味を変更するフラグを有効または無効にするために使用できます。これらのフラグは [`i`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), [`m`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline), [`s`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) です。

## 構文

```regex
(?flags1:pattern)
(?flags1-flags2:pattern)
```

> [!NOTE]
> JavaScript には、パターンが修飾子グループの中に置かれる「境界付き」の修飾子形式しかありません。修飾子に対応している他のほとんどの言語には、「境界なし」の形式があり、この形式では、修飾子は最も近い包含グループが終わるまで適用されます。

### 引数

- `flags1` {{optional_inline}}
  - : 有効にするフラグの文字列です。 `i`、`m`、`s` を任意に組み合わせて含まれています。
- `flags2` {{optional_inline}}
  - : 無効にするフラグの文字列です。`i`、`m`、`s` を任意に組み合わせることができますが、 `flags1` に含まれるフラグは含めることはできません。
- `pattern`
  - : [論理和](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)を含む、正規表現リテラルで使用できる何らかの文字で構成されるパターンです。

## 解説

一部のフラグは、正規表現の構文要素の意味を変更します。

- [`i`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) フラグは、すべての[リテラル文字](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)および[文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)を暗黙的に小文字にして、正規表現が大文字と小文字を区別しないようにします。
- [`m`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) フラグは、[入力境界アサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) `^` および `$` の動作を変更し、入力文字列の開始と終了に加えて、各行の開始と終了にも一致するようにします。
- [`s`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) フラグは、[ワイルドカード文字](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard) `.` の動作を変更し、改行文字を含むすべての文字に一致するようにします。

これらの変更を正規表現パターンの特定の部分でのみ効果にしたい場合があります。その場合は、その部分を修飾子で囲みます。例えば、次のようにします。

```js
/(?i:Hello) world/;
```

この正規表現では、 `i` フラグはパターンの `Hello` 部分に対してのみ有効です。 `world` 部分は大文字と小文字が区別されます。したがって、 `Hello world`、`hello world`、`HELLO world` には一致しますが、 `HELLO WORLD` には一致しません。 `i` フラグをグローバルに有効にして、 `world` 部分に対して無効にすることで、次の式と同等になります。

```js
/Hello (?-i:world)/i;
```

`flags1` および `flags2` 引数には、`i`、`m`、`s` を任意に組み合わせて含めることができます。ただし、 `flags1` と `flags2` では、フラグはすべて固有のものである必要があります。つまり、フラグを 2 回有効または無効にしたり、フラグを有効にしてすぐに無効にしたりすることはできません。

引数 `flags1` および `flags2` はオプションですが、少なくとも 1 つは空ではない必要があります。 `(?flags1-:pattern)` は、フラグのみを有効にする修飾子です（`(?flags1:pattern)` と同じです）。 `(?-flags2:pattern)` は、フラグのみを無効にする修飾子です。 `(?:pattern)` は単なる[非キャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)となり、 `(?-:pattern)` は構文エラーとなります。

それ以外のフラグはこの修飾子では意味を成さないため、記載すると構文エラーになります。

- [`g`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) および [`y`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) フラグは、 [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) の複数回の呼び出しの挙動と、正規表現全体の照合動作への影響を決定します。
- [`d`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) フラグは、 [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) の結果に追加情報を有効にし、正規表現全体の照合動作に影響を与えます。
- [`u`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) および [`v`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) フラグは、正規表現エンジンの動作を、ローカルでは変更できないほど複雑な方法で変更します。また、 [`lastIndex`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) の進め方など、正規表現全体にグローバルな効果をもたらします。

## 例

### 文字列の先頭でのみ複数行の書式を照合

以下の正規表現は、複数行の文字列の書式を定義します。最初の `^` は、`(?-m:)` 修飾子の中に含まれているため、入力文字列全体の先頭を表しますが、それ以外の `^` 文字はすべて行の先頭を表します。

```js
const pattern = /(?-m:^)---\n^title:.*^slug:.*^---/ms;

const input = `---
title: "Modifier: (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
---`;

pattern.test(input); // true

// 文字列の先頭の余分な改行
const input2 = `\n${input}`;

pattern.test(input2); // false
```

### 特定の単語を大文字と小文字を区別せずに照合

`foo` または `bar` という変数宣言をすべて探しているとします（これらは不適切な名前だからです）。この単語は、大文字でも小文字でも現れますが、キーワードは常に小文字であることがわかっているため、次のようにすることができます。

```js
const pattern = /(?:var|let|const) (?i:foo|bar)\b/;

pattern.test("let foo;"); // true
pattern.test("const BAR = 1;"); // true
pattern.test("Let foo be a number"); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)ガイド
- [正規表現](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [非キャプチャグループ: `(?:...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
