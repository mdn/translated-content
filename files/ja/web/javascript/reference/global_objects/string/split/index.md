---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
---

{{JSRef}}

**`split()`** メソッドは、 {{jsxref("String")}} を指定した区切り文字列で分割することにより、文字列の配列に分割します。

{{EmbedInteractiveExample("pages/js/string-split.html", "taller")}}

## 構文

```
str.split([separator[, limit]])
```

### 引数

- `separator` {{optional_inline}}

  - : 分割を行うところにある文字列です。文字列または{{jsxref("Global_Objects/RegExp", "正規表現", "", 1)}}を指定することができます。

    - `separator` が複数の文字を含んだ文字列である場合、分割にはその文字列の並び全体が見つかることが必要です。
    - `separator` が省略されたり `str` の中に現れなかったりした場合は、返却される配列には文字列全体から成る要素が 1 つだけ含まれます。
    - `separator` が文字列の先頭または末尾、またはその両方に現れた場合、配列の先頭、末尾、または先頭と末尾の両方が、それぞれ空文字列になります。
    - `separator` が空文字列 (`""`) の場合、 `str` は個々の UTF-16 「文字」の配列になります。

    > **警告:** 空文字列 (`""`) を区切り文字列として使用すると、文字列が*ユーザーが知覚可能な文字* ([書記素クラスター](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) に分割されるわけでは**なく**、 Unicode 文字 (コードポイント)、ただし UTF-16 コード単位です。これは[サロゲートペア](http://unicode.org/faq/utf_bom.html#utf16-2)を破壊します。 [StackOverflow の “How do you get a string to a character array in JavaScript?”](https://stackoverflow.com/a/34717402) を参照してください。

- `limit` {{optional_inline}}

  - : 非負の整数で、分割する数を制限します。指定された場合、文字列は `separator` が現れるたびに分割されますが、 `limit` の数の項目が配列に配置されると停止します。残りのテキストは配列に入りません。

    - 制限数に達する以前に文字列の末尾に達した場合は、配列の要素が `limit` よりも少なくなることがあります。
    - `limit` が `0` の場合は、分割は行われません。

### 返値

文字列の {{jsxref("Array")}} で、指定された文字列で `separator` が現れるたびに分割されたものです。

## 解説

`separator` は見つかると文字列から削除され、部分文字列が配列に入って返されます。

`separator` が、キャプチャする括弧を含む正規表現だった場合、 `separator` が一致するごとに、キャプチャする括弧の結果が (未定義の結果であった場合を含め) 出力配列に追加されます。

`separator` が配列であった場合、その配列が String に変換された上で区切り文字列として使用されます。

## 例

### `split()` の使用

文字列が空の場合、 `split()` は空の配列ではなく、1 つの空文字列を含む配列を返します。文字列と区切り文字列が共に空文字列の場合、空の配列が返ります。

```js
const myString = ''
const splits = myString.split()

console.log(splits)

// ↪ [""]
```

以下の例は、指定された区切りを使って、文字列を文字列の配列に分割する関数を定義します。文字列を分割した後、その関数は元の文字列（分割する前）、使用した区切り、配列中の要素の数、そして、個々の配列要素を示すメッセージを表示します。

```js
function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator)

  console.log('元の文字列: ', stringToSplit)
  console.log('区切り文字列: ' , separator)
  console.log('配列の要素数は', arrayOfStrings.length, '件: ', arrayOfStrings.join(' / '))
}

const tempestString = 'Oh brave new world that has such people in it.'
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'

const space = ' '
const comma = ','

splitString(tempestString, space)
splitString(tempestString)
splitString(monthString, comma)
```

この例は次のような出力結果を生み出します。

```
元の文字列: "Oh brave new world that has such people in it."
区切り: " "
配列は 10 要素: Oh / brave / new / world / that / has / such / people / in / it.

元の文字列: "Oh brave new world that has such people in it."
区切り: "undefined"
配列は 1 要素: Oh brave new world that has such people in it.

元の文字列: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
区切り: ","
配列は 12 要素: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec
```

### 文字列からの空白の削除

以下の例では、`split()` は、0 回以上の空白とそれに続くセミコロン、それにさらに続く 0 回以上の空白を探し、それらが見つかったとき、文字列から空白を削除します。`nameList` は、`split()` の結果として返された配列です。

```js
const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

console.log(names)

const re = /\s*(?:;|$)\s*/
const nameList = names.split(re)

console.log(nameList)
```

これは 2 つの行を出力します。1 行目は元の文字列を出力し、2 行目は `split` メソッドの実行結果の配列を出力します。

```
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

### 限られた数の分割結果を返す

以下の例では、`split()` は 文字列中の 0 回以上の空白を探し、見つかった最初の 3 つの分割結果を返します。

```js
const myString = 'Hello World. How are you doing?'
const splits = myString.split(' ', 3)

console.log(splits)
```

このスクリプトは以下の例を出力します。

```
["Hello", "World.", "How"]
```

### `RegExp` で分割して結果に区切り文字列の一部を含める

`separator` がキャプチャの括弧 `(` `)` を含む正規表現である場合、一致した結果が配列に含まれます。

```js
const myString = 'Hello 1 word. Sentence number 2.'
const splits = myString.split(/(\d)/)

console.log(splits)
```

このスクリプトは、以下を表示します。

```
[ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

> **メモ:** `\d` は[文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)で、0 から 9 の数字に一致します。

### `split()` を使った文字列を反転

> **警告:** この手法は文字列を正しく反転できるとは限りません。
>
> ```js
> const str = 'asdfghjkl'
> const strReverse = str.split('').reverse().join('')
> // 'lkjhgfdsa'
>
> // split() が配列を返し、 reverse() および join() が適用できます
> ```
>
> Unicode 対応の分割を使用している場合でも、文字列に書記素クラスターが含まれていると機能しません (代わりに [esrever](https://github.com/mathiasbynens/esrever) などを使ってください)。
>
> ```js
> const str = 'résumé'
> const strReverse = str.split(/(?:)/u).reverse().join('')
> // => "́emuśer"
> ```
>
> **ボーナス:** {{jsxref("Operators/Comparison_Operators", "===", "#Identity_strict_equality_(===)")}} 演算子を使用すると、元の文字列が回文であるかどうかが判定できます。

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.split', 'String.prototype.split')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.split")}}

## 関連情報

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
- [JavaScript での正規表現の使用](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)
