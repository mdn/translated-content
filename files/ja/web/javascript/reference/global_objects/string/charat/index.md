---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
tags:
  - JavaScript
  - メソッド
  - プロトタイプ
  - リファレンス
  - String
browser-compat: javascript.builtins.String.charAt
translation_of: Web/JavaScript/Reference/Global_Objects/String/charAt
---
{{JSRef}}

{{jsxref("String")}} オブジェクトの **`charAt()`** メソッドは、文字列の中の指定された位置にある単一の UTF-16 コードユニットからなる新しい文字列を返します。

{{EmbedInteractiveExample("pages/js/string-charat.html", "shorter")}}

## 構文

```js
charAt(index)
```

### 引数

- `index`
  - : `0` から `str.length - 1` までの間の整数です。 `index` が整数に変換できない場合や `index` が指定されなかった場合、既定値は `0` となり、 `str` の最初の文字が返されます。

### 返値

指定された `index` の位置にある文字 (厳密に 1 つの UTF-16 コードポイント) を表す文字列です。`index` の位置が文字列の範囲を外れていた場合は、`charAt()` は空文字列を返します。

## 解説

文字列の中の文字は、左から右に向けてインデックス付けされています。最初の文字の添字は `0` であり、最後の文字の添字は — `stringName` という名前の文字列であれば — `stringName.length - 1` です。提供した `index` がこの範囲を外れていた場合、 JavaScript は空文字列を返します。

`index` が `charAt()` に提供されなかった場合の既定値は `0` です。

## 例

### 文字列の中の様々な位置の文字の表示

次の例は、"`Brave new world`" という文字列の中の様々な位置の文字を表示します。

```js
var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'");
// index が提供されなかった場合は、既定値として 0 が使われる

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
```

これらの行は以下のように表示されます。

```js
The character at index 0   is 'B'

The character at index 0   is 'B'
The character at index 1   is 'r'
The character at index 2   is 'a'
The character at index 3   is 'v'
The character at index 4   is 'e'
The character at index 999 is ''
```

### 文字全体の取得

以下の例では、文字列に基本多言語面 (BMP) にない文字が含まれていた場合でも、ループで常に文字全体を取得することを保証する方法を紹介します。

```js
var str = 'A \uD87E\uDC04 Z'; // We could also use a non-BMP character directly
for (var i = 0, chr; i < str.length; i++) {
  if ((chr = getWholeChar(str, i)) === false) {
    continue;
  }
  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning a variable to represent the
  // individual character

  console.log(chr);
}

function getWholeChar(str, i) {
  var code = str.charCodeAt(i);

  if (Number.isNaN(code)) {
    return ''; // Position not found
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return str.charAt(i);
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 <= code && code <= 0xDBFF) {
    if (str.length <= (i + 1)) {
      throw 'High surrogate without following low surrogate';
    }
    var next = str.charCodeAt(i + 1);
    if (0xDC00 > next || next > 0xDFFF) {
      throw 'High surrogate without following low surrogate';
    }
    return str.charAt(i) + str.charAt(i + 1);
  }
  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw 'Low surrogate without preceding high surrogate';
  }
  var prev = str.charCodeAt(i - 1);

  // (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 > prev || prev > 0xDBFF) {
    throw 'Low surrogate without preceding high surrogate';
  }
  // We can pass over low surrogates now as the second component
  // in a pair which we have already processed
  return false;
}
```

ECMAScript 2016 環境では分割代入が利用できるため、変数を自動的に増加させることができるもっと簡潔で柔軟な代替処理を利用することができます (その文字がサロゲートペアであることを保証している場合)。

```js
let str = 'A\uD87E\uDC04Z'  // We could also use a non-BMP character directly
for (let i = 0, chr; i < str.length; i++) {
  [chr, i] = getWholeCharAndI(str, i)

  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning an array with the individual character
  // and 'i' value (only changed if a surrogate pair)

  console.log(chr)
}

function getWholeCharAndI(str, i) {
  let code = str.charCodeAt(i)

  if (Number.isNaN(code)) {
    return ''  // Position not found
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return [str.charAt(i), i]  // Normal character, keeping 'i' the same
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 <= code && code <= 0xDBFF) {
    if (str.length <= (i + 1)) {
      throw 'High surrogate without following low surrogate'
    }
    let next = str.charCodeAt(i + 1)
    if (0xDC00 > next || next > 0xDFFF) {
      throw 'High surrogate without following low surrogate'
    }
    return [str.charAt(i) + str.charAt(i + 1), i + 1]
  }

  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw 'Low surrogate without preceding high surrogate'
  }

  let prev = str.charCodeAt(i - 1)

  // (could change last hex to 0xDB7F to treat high private surrogates
  // as single characters)
  if (0xD800 > prev || prev > 0xDBFF) {
    throw 'Low surrogate without preceding high surrogate'
  }

  // Return the next character instead (and increment)
  return [str.charAt(i + 1), i + 1]
}
```

### charAt() を修正して、基本多言語面 (BMP) 以外の文字に対応させる

前述の例は、 BMP 以外の文字に対応しなければならないプログラムの方が有用かもしれませんが (呼び出し元が BMP 以外の文字の出現場所を知る必要がないので)、インデックスで文字を選択する際に、文字列内のサロゲートペアをそれらが表す単一の文字として扱いたい場合には、以下のようにして使用できます。

```js
function fixedCharAt(str, idx) {
  let ret = ''
  str += ''
  let end = str.length

  let surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
  while ((surrogatePairs.exec(str)) != null) {
    let lastIdx = surrogatePairs.lastIndex
    if (lastIdx - 2 < idx) {
      idx++
    } else {
      break
    }
  }

  if (idx >= end || idx < 0) {
    return ''
  }

  ret += str.charAt(idx)

  if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))) {
    // Go one further, since one of the "characters" is part of a surrogate pair
    ret += str.charAt(idx + 1)
  }
  return ret
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("String.fromCodePoint()")}}
- [JavaScript has a Unicode
  problem – Mathias Bynens](https://mathiasbynens.be/notes/javascript-unicode)
