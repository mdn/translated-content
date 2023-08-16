---
title: "先読みアサーション: (?=...), (?!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JsSidebar}}

**先読みアサーション**の「先読み」とは、それ以降の入力を指定されたパターンに照合しようとしますが、入力を消費することはありません。照合に成功した場合、入力の現在の位置はそのままです。

## 構文

```regex
(?=pattern)
(?!pattern)
```

### 引数

- `pattern`
  - : [論理和](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)を含む、正規表現リテラルで使用することができるあらゆるもので構成されるパターンです。

## 解説

正規表現は一般に左から右に照合します。これが先読みおよび[後読み](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)アサーションがこのように呼ばれる理由です。先読みアサーションは右にあるもの、後読みアサーションは左にあるものを表します。

`(?=pattern)` アサーションが成功するためには、`pattern` が現在の位置以降のテキストと一致しなければなりませんが、現在の位置は変化しません。`(?!pattern)` 形式はアサーションを否定します。`pattern` が現在の位置で一致しない場合に成功します。

`pattern` には[キャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)を含めることができます。この場合の動作については、キャプチャグループのページをご覧ください。

他の正規表現演算子とは異なり、先読みへのバックトラックはありません。この動作は Perl から継承されています。これは、`pattern` が[キャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)を含み、先読みに続くパターンがそれらのキャプチャへの[後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)を含む場合にのみ問題になります。例えば、次のようになります。

```js
/(?=(a+))a*b\1/.exec("baabac"); // ['aba', 'a']
// Not ['aaba', 'a']
```

上記のパターンの照合は以下のように行われます。

1. `(a+)` は `"baabac"` の最初の `"a"` の前に成功し、量化詞は貪欲なので `"aa"` が捕捉されます。
2. `a*b` は `"baabac"` の `"b"` に一致します。
3. `\1` は続く文字列に一致しません。これは 2 つの `"a"` が必要ですが、1 つしか利用できないからです。照合はバックトラックしますが、先読みには入らないので、キャプチャグループを 1 つの `"a"` に縮小することはできず、この点で照合は失敗します。
4. `exec()` は次の位置、つまり 2 番目の `"a"` の前で照合を再試行します。今度は、先読みが `"a"` に一致し、 `a*b` が `"b"` に一致します。後方参照 `1` はキャプチャされた `"a"` に一致し、照合は成功します。

もし正規表現が先読みをバックトラックして、そこで行われた選択を修正することができれば、照合は手順 3 で `(a+)` が最初の `"a"` に一致し（最初の 2 つの `"a"` の代わりに）、`a*b` が "ab"`に一致
することで、次の入力位置を再試行することなく成功するでしょう。

否定先読みにもキャプチャグループを入れることができますが、後方参照が意味を持つのは `pattern` 内だけです。照合を続けると、必然的に `pattern` は一致しなくなるからです（そうでなければアサーションは失敗します）。この意味は `pattern` の外では、否定先読みのキャプチャグループへの後方参照は常に成功するということです。例えば、次のようになります。

```js
/(.*?)a(?!(a+)b\2c)\2(.*)/.exec("baaabaac"); // ['baaabaac', 'ba', undefined, 'abaac']
```

上記のパターンの照合は以下のように行われます。

1. `(.*?)` パターンは貪欲ではないので、何も照合しないことから始まります。しかし、次の文字は `a` で、入力中の `"b"` には一致しません。
2. `(.*?)` パターンは `"b"` に一致するので、パターン中の `a` は `"baaabaac"` の最初の `"a"` に一致します。
3. もし `(a+)` が `"aa"` に一致するならば、`(a+)b2c` は `"aabaac"` に一致します。このため、アサーションは失敗し、マッチャーは後退します。
4. `(.*?)` パターン は`"ba"` に一致するので、パターン中の `a` は `"baaabaac"` の 2 つ目の `"a"` に一致します。
5. この位置では、先読みは照合に失敗します。 なぜなら、残りの入力は「任意の数の `"a"` と `"b"`, 同じ数の `"a"` と `c`」というパターンに続かないからです。これにより、アサーションは成功します。
6. しかし、アサーション内では何も一致しなかったので、後方参照 `\2` には値がなく、空文字列に一致します。そのため、入力の残りの部分は最後の `(.*)` によって消費されます。

通常、アサーションは[量化](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)できません。しかし、[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)においては、先読みアサーションは量化することができます。これは[ウェブの互換性のための非推奨構文](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)としてのみ認められており、頼ってはいけません。

```js
/(?=a)?b/.test("b"); // true; the lookahead is matched 0 time
```

## 例

### 消費せずに文字列を照合

一致した文字列の後に何かが続いていることを、結果として返さずに検証するのが便利なこともあります。次の例は、カンマやピリオドが続く文字列に一致しますが、句読点は結果に含まれません。

```js
function getFirstSubsentence(str) {
  return /^.*?(?=[,.])/.exec(str)?.[0];
}

getFirstSubsentence("Hello, world!"); // "Hello"
getFirstSubsentence("Thank you."); // "Thank you"
```

興味のある部分一致を[キャプチャ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)することで、同様の効果が得られます。

### パターンの差集合および交差集合

先読みを用いることで、文字列を異なるパターンで複数回照合することができます。これにより、差集合（X であるが Y ではない）や交差集合（X と Y の両方である）といった複雑な関係を発生させることができます。

以下の例は、[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)であり、[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words)でないものに一致します（ここでは簡潔にするために 3 つの予約語のみを示しています。この論理和には、さらに予約語を加えることができます。`[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*` という構文は、言語依存の識別子文字列の集合を正確に記述しています。詳しくは、識別子については[字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)を、`\p` エスケープについては [Unicode 文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)を参照してください。

```js
function isValidIdentifierName(str) {
  const re =
    /^(?!(?:break|case|catch)$)[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*$/u;
  return re.test(str);
}

isValidIdentifierName("break"); // false
isValidIdentifierName("foo"); // true
isValidIdentifierName("cases"); // true
```

次の例は、ASCIIで、かつ識別子部分として使用できる文字列に一致します。

```js
function isASCIIIDPart(char) {
  return /^(?=\p{ASCII}$)\p{ID_Start}$/u.test(char);
}

isASCIIIDPart("a"); // true
isASCIIIDPart("α"); // false
isASCIIIDPart(":"); // false
```

文字数の有限な交差集合や差集合を扱う場合は、`v` フラグを使用して有効にした[文字集合交差](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_モード文字クラス)構文を使用するとよいでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [アサーション](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [入力境界アサーション: `^`, `$`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [単語境界アサーション: `\b`, `\B`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [後読みアサーション: `(?<=...)`, `(?<!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [キャプチャグループ: `(...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
