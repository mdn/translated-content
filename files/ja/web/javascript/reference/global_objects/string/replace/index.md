---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
tags:
  - Expressions
  - JavaScript
  - メソッド
  - プロトタイプ
  - リファレンス
  - Regular
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/replace
browser-compat: javascript.builtins.String.replace
---
{{JSRef}}

**`replace()`** メソッドは、`pattern` に一致する文字列の一部またはすべてを `replacement` で置き換えた新しい文字列を返します。 `pattern` には文字列または正規表現 ({{jsxref("RegExp")}}) を指定することができ、 `replacement` には文字列または一致するごとに呼び出される関数を指定することができます。 `pattern` が文字列の場合、最初に一致した箇所のみを置き換えます。

元の文字列は変更されません。

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## 構文

```js
replace(regexp, newSubstr)
replace(regexp, replacerFunction)

replace(substr, newSubstr)
replace(substr, replacerFunction)
```

### 引数

- `regexp` (pattern)
  - : {{jsxref("RegExp")}} オブジェクト、またはリテラルです。一致すると、第 2 引数の `newSubstr` または `replacerFunction` の返値と置き換えられます。
- `substr`
  - : `newSubstr` に置き換えられる文字列です。これは逐次的な文字列として扱われ、正規表現としては解釈されません。最初に出てきたものだけが置き換えられます。
- `newSubstr` (replacement)

  - : `regexp` や `substr` 引数で指定される部分文字列を置換する文字列です。数々の特別な置換パターンに対応しています。下記の「[引数としての文字列の指定](#引数としての文字列の指定)」の節を見てください。

    `newSubstr` が空文字列であった場合、 `substr` や `regexp` に一致した部分は（置換されるのではなく）削除されます。

- `replacerFunction` (replacement)
  - : 新しい部分文字列を生成するために実行される関数で、`regexp` や `substr` で一致したものを置き換えるのに使われます。この関数に渡される引数は下記の「[引数としての関数の指定](#引数としての関数の指定)」で述べられています。

### 返値

パターンに一致した部分文字列の一部またはすべてを置換文字列で置き換えた新しい文字列です。

## 解説

このメソッドは、それを呼び出した {{jsxref("String")}} オブジェクトを変化させません。返値として新しい文字列を返します。

グローバルな検索と置換を動作させるためには、正規表現に `g` フラグを含める必要があります。

### 引数としての文字列の指定

置換文字列には以下の特殊な置換パターンを入れることができます。

| パターン   | 導入                                                                                                                                                                                                                                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$$`      | `"$"` を挿入します。                                                                                                                                                                                                                                                                                                              |
| `$&`      | 一致した部分文字列を挿入します。                                                                                                                                                                                                                                                                                                |
| `` $` ``  | 一致した部分文字列の直前の文字列の部分を挿入します。                                                                                                                                                                                                                                                        |
| `$'`      | 一致した部分文字列の直後の文字列の部分を挿入します。                                                                                                                                                                                                                                                         |
| `$n`      | `n` は 100 未満の正の整数です。第一引数が {{jsxref("RegExp")}} オブジェクトだった場合に `n` 番目の括弧でキャプチャされた文字列を挿入します。なお、 `1` から始まることに注意してください。 `n` 番目のグループが存在しない場合 (例えば、グループ 3 の場合)、リテラル (例えば `$3`) として置換されます。                     |
| `$<Name>` | ここで、 `Name` はキャプチャするグループ名です。グループが一致に含まれていなかったり、正規表現に含まれていなかったり、正規表現ではなく文字列が `replace` の第一引数として渡された場合は、リテラル (例えば  `$<Name>`) に解決されます。名前付きキャプチャグループに対応しているブラウザーのバージョンでのみ利用可能です。 |

### 引数としての関数の指定

第二引数として関数を指定することができます。このとき、関数は一致が完了された後に実行されます。関数呼び出しの結果 (返値) は、置換文字列として使われます (**注:** 上記の特殊な置換パターンはこの場合には適用*されません*)。

第一引数の正規表現がグローバルだと、置換されるべき一致ごとに関数が複数回実行されうることに注意してください。

関数に与えられる引数は次の通りです。

| 名前 | 与えられる値                                                                                                                                                                                                                                                                                                         |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `match`       | 一致した部分文字列 (上記の `$&` に対応) です。                                                                                                                                                                                                                                                                    |
| `p1, p2, ...` | `replace()` の第一引数が {{jsxref("RegExp")}} オブジェクトだった場合、n 番目の括弧でキャプチャされたグループの文字列 (上記の `$1`, `$2`, などに対応) です。例えば `/(\a+)(\b+)/` が与えられた場合、`p1` は `\a+` に対する一致、`p2` は `\b+` に対する一致となります。 |
| `offset`      | 一致した部分文字列の、分析中の文字列全体の中でのオフセットです（例えば、文字列全体が `'abcd'` で、一致した部分文字列が `'bc'` ならば、この引数は 1 となります）。                                                                                                                     |
| `string`      | 分析中の文字列全体です。                                                                                                                                                                                                                                                                                       |
| `groups`      | 名前付きキャプチャグループに対応しているブラウザーのバージョンでは、使用されるグループ名をキーとし、一致した部分を値とするオブジェクトになります (一致しない場合は `undefined`)。                                                                                                                                  |

（引数の正確な個数は、第一引数が {{jsxref("RegExp")}} オブジェクトかどうか、そうならばさらに括弧でキャプチャされるサブ一致がいくつ指定されているかによります。）

以下の例は `newString` に `'abc - 12345 - #$*%'` をセットします。

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%
```

## 例

### replace() で正規表現を利用する

以下の例では、 `replace()` メソッドで正規表現を利用しています。

```js
let str = 'Twas the night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
```

これは `'Twas the night before Christmas...'` と出力します。

> **Note:** 正規表現についてのその他の例は[このガイド](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)を参照してください。

### 大文字小文字を区別しないフラグとグローバルフラグの使用

グローバルな置換は、正規表現でのみ行うことができます。次の例では、正規表現に[グローバルフラグと大文字小文字の区別をしないフラグ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2)が含まれているため、 `replace()` は文字列中の `'apples'` の各出現箇所を `'oranges'` に置き換えることができます。

```js
let re = /apples/gi;
let str = 'Apples are round, and apples are juicy.';
let newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.
```

この出力は 'oranges are round, and oranges are juicy' となります。

### 文字列内の単語の交換

次のスクリプトでは、文字列内の単語を交換します。テキストを置き換えるために、このスクリプトは[キャプチャリンググループ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)と置換パターン `$1` および `$2` を使用しています。

```js
let re = /(\w+)\s(\w+)/;
let str = 'John Smith';
let newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John
```

この出力は 'Smith, John' となります。

### 一致した文字を修正するインライン関数の使用

次の例では、文字列内に出現する大文字のすべては小文字に変換され、ハイフンが一致した位置の直前に挿入されます。ここで重要なことは、追加の操作は、一致したアイテムが置換されて戻される前に必要とされるということです。

置換する関数は一致した断片をその関数の引数として適用します。そして、その引数を大文字小文字変形し、返値の直前にハイフンを連結します。

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

`styleHyphenFormat('borderTop')`を入力すると `'border-top'` を返します。

最終的な置換が行われる前に、一致の*結果*をさらに変換したいので、関数を使用する必要があります。これにより、 {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} メソッドの前に一致の評価が行われます。関数を使わず一致を使ってこれを行おうとした場合、 {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} は何の効果もないでしょう。

```js example-bad
let newString = propertyName.replace(/[A-Z]/g, '-' + '$&'.toLowerCase());  // 動作しない
```

これは、 `'$&'.toLowerCase()` は、まずその文字がパターンとして使用される前に（`'$&'` という結果である）文字列リテラルとして評価されるだろうからです。

### 華氏温度を同等の摂氏温度と置き換える

以下の例は、ある華氏温度をそれと同等の摂氏温度と置き換えます。その華氏温度は `"F"` で終わる数でなければなりません。この関数は `"C"` で終わる摂氏を返します。例えば、入力される数が `"212F"` である場合、その関数は `"100C"` を返します。入力される数が `"0F"` であった場合、その関数は `"-17.77777777777778C"` を返します。

その正規表現 `test` は、任意の数が `F` で終わっているかチェックします。華氏温度の数は、関数の 第二引数 `p1` を通して、その関数にアクセスできます。その関数は文字列内で渡された華氏温度をベースとした摂氏の数を `f2c()` にセットします。それから、`f2c()` は、摂氏の数を返します。この関数は Perl の `s///e` フラグと似ています。

```js
function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5/9) + 'C';
  }
  let s = String(x);
  let test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.replaceAll", "String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match", "String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}
