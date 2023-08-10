---
title: "数量詞: *, +, ?, {n}, {n,}, {n,m}"
slug: Web/JavaScript/Reference/Regular_expressions/Quantifier
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JsSidebar}}

**数量詞**は、[アトム](/ja/docs/Web/JavaScript/Reference/Regular_expressions#アトム)を指定した回数繰り返します。数量詞は適用するアトムの後に配置します。

## 構文

```regex
// 貪欲
atom?
atom*
atom+
atom{count}
atom{min,}
atom{min,max}

// 非貪欲
atom??
atom*?
atom+?
atom{count}?
atom{min,}?
atom{min,max}?
```

### 引数

- `atom`
  - : 単一の[アトム](/ja/docs/Web/JavaScript/Reference/Regular_expressions#アトム)です。
- `count`
  - : 非負の整数です。アトムが繰り返される回数です。
- `min`
  - : 非負の整数です。アトムが繰り返すことができる最小回数です。
- `max` {{optional_inline}}
  - : 非負の整数です。アトムが繰り返すことができる最大回数です。小りゃうした場合、アトムは必要なだけ繰り返されます。

## 解説

数量詞は[アトム](/ja/docs/Web/JavaScript/Reference/Regular_expressions#アトム)の後に置かれ、そのアトムを一定回数繰り返します。単独で現れることはありません。それぞれの数量詞は、パターンが繰り返されなければならない最小数と最大数を指定することができます。

| 数量詞  | 最小値 | 最大値  |
| ----------- | ------- | -------- |
| `?`         | 0       | 1        |
| `*`         | 0       | 無限大 |
| `+`         | 1       | 無限大 |
| `{count}`   | `count` | `count`  |
| `{min,}`    | `min`   | 無限大 |
| `{min,max}` | `min`   | `max`    |

`{count}`、`{min,}`、`{min,max}` の構文では、数値の周りに空白を入れることはできません。そうしないと[リテラル](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)のパターンになります。

```js example-bad
const re = /a{1, 3}/;
re.test("aa"); // false
re.test("a{1, 3}"); // true
```

この動作は [Unicode 対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)で修正され、中括弧を[エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)なしでリテラルに入れることができなくなりました。`{` と `}` がエスケープなしでリテラルとして使用できるというのは[ウェブの互換性のための非推奨構文](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)としてのみ認められており、頼ってはいけません。

```js
/a{1, 3}/u; // SyntaxError: Invalid regular expression: Incomplete quantifier
```

最小値が最大値より大きいと構文エラーになります。

```js
/a{3,2}/; // SyntaxError: Invalid regular expression: numbers out of order in {} quantifier
```

数量詞によって、[キャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)を複数回照合させることができます。この場合の動作については、キャプチャグループのページを参照してください。

一致するごとに文字列が同じである必要はありません。

```js
/[ab]*/.exec("aba"); // ['aba']
```

数量詞は既定では貪欲です。つまり、最大値に達するまで、あるいはそれ以上一致させることができなくなるまで、可能な限り何度でも照合しようとします。数量詞の後に `?` を付けることで、貪欲でない数量詞にすることができます。この場合、数量詞はできる限り一致回数を少なくさせようとし、残りのパターンをこの回数で一致させることができなくなった場合のみ、それ以上の回数を照合しようとします。

```js
/a*/.exec("aaa"); // ['aaa']; 入力全体が消費される
/a*?/.exec("aaa"); // ['']; 文字を消費しなくても、一致することは可能
/^a*?$/.exec("aaa"); // ['aaa']; 消費する文字数を減らすことは不可能だが、照合には成功する
```

ただし、あるインデックスで正規表現が文字列と一致すると、それ以降のインデックスを試さなくなります。

```js
/a*?$/.exec("aaa"); // ['aaa']; 照合は最初の文字ですでに成功しているので、正規表現は 2 文字目で照合を開始しようとしません。
```

貪欲な数量詞は、それ以外のパターンに一致することが不可能な場合、反復回数を少なくしようとするかもしれません。

```js
/[ab]+[abc]c/.exec("abbc"); // ['abbc']
```

この例では、最初の `[ab]+` は貪欲に "abb" に一致しますが、`[abc]c` は残りのパターン ("c") に一致することができないので、数量詞は "ab" だけに一致するように縮小されます。

貪欲な数量詞は、無限個の空文字列と一致することを避けます。 照合する文字数が最小値に達し、その位置のアトムで消費される文字がなくなると、 数量詞は照合を停止します。 これが `/(a*)*/.exec("b")` が無限ループにならない理由です。

貪欲な数量詞は可能な限り多くの回数の照合をしようとします。例えば、`/(aa|aabaac|ba)*/.exec("aabaac")` は `"aabaac"` の代わりに `"aa"` と `:ba"` に一致します。

数量詞は単一のアトムに適用されます。長いパターンや論理和を量化したい場合は、[グループ化](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)する必要があります。 数量詞は[アサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions#アサーション)には適用できません。

```js
/^*/; // SyntaxError: Invalid regular expression: nothing to repeat
```

[Unicode 対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では、[先読みアサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)は量化できます。これは[ウェブの互換性のための非推奨構文](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)であり、頼ってはいけません。

```js
/(?=a)?b/.test("b"); // true; 先読みが 0 回一致
```

## 例

### HTML タグの除去

次の例は、山括弧で囲まれた HTML タグを除去します。消費する文字が多くなりすぎないように `?` を使用していることに注意してください。

```js
function stripTags(str) {
  return str.replace(/<.+?>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

貪欲な照合でも同じ効果が得られますが、繰り返されるパターンが `>` に一致しません。

```js
function stripTags(str) {
  return str.replace(/<[^>]+>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

> **警告:** これはデモのためのもので、属性値の中に `>` がある場合は正しく扱えません。代わりに適切な HTML サニタイザー、たとえば [HTML サニタイザー API](/ja/docs/Web/API/HTML_Sanitizer_API) などを使用してください。

### Markdown の段落の位置を指定

Markdown では、段落は 1 つ以上の空白行で区切られます。次の例では、2 つ以上の改行と照合することで、文字列内のすべての段落を数えます。

```js
function countParagraphs(str) {
  return str.match(/(?:\r?\n){2,}/g).length + 1;
}

countParagraphs(`
Paragraph 1

Paragraph 2
Containing some line breaks, but still the same paragraph

Another paragraph
`); // 3
```

> **警告:** これはデモのためのもので、コードブロック内の改行や、見出しのような他の Markdown ブロック要素を処理しません。代わりに適切な Markdown パーサーを使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [数量詞](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [論理和: `|`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [文字クラス: `[...]`, `[^...]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
