---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{JSRef}}

**`split()`** メソッドは、パターンを受け取り、{{jsxref("String")}} をパターン検索によって部分文字列の順序付きリストに分割し、これらの部分文字列を配列に入れ、その配列を返します。

{{EmbedInteractiveExample("pages/js/string-split.html", "taller")}}

## 構文

```js-nolint
split(separator)
split(separator, limit)
```

### 引数

- `separator`
  - : 各分割がどこで行われるかを表すパターンです。`undefined`、文字列、または [`Symbol.split`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split) メソッドを持つオブジェクトを指定することができます。典型的な例は{{jsxref("Global_Objects/RegExp", "正規表現", "", 1)}}です。`separator` を省略したり `undefined` を渡したりすると、`split()` は呼び出し元の文字列を 1 つの要素とする配列を返します。`undefined` でない値、または `@@split` メソッドを持つオブジェクトはすべて[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)。
- `limit` {{optional_inline}}
  - : 配列に含める部分文字列の数の制限を指定する非負の整数。指定した場合は、指定した `separator` が出現するたびに文字列を分割しますが、`limit` 個の項目が配列に格納された時点で分割を終了します。残った文字列は配列に格納されません。
    - 制限数に達する以前に文字列の末尾に達した場合は、配列の要素が `limit` よりも少なくなることがあります。
    - `limit` が `0` の場合は、`[]` が返されます。

### 返値

文字列の {{jsxref("Array")}} で、指定された文字列で `separator` が現れるたびに分割されたものです。

## 解説

`separator` が空でない文字列の場合、対象の文字列は `separator` に一致するすべての文字列で分割され、その結果には `separator` は含まれません。例えば、タブ区切り値 (TSV) を含む文字列は、`myString.split("\t")` のようにタブ文字を区切り文字として渡すことで解析できます。`separator` が複数の文字を含む場合、分割するためにはその文字列をすべて見つける必要があります。`separator` が文字列の先頭（または末尾）にある場合でも分割の効果は変わりません。その結果、返値の配列の最初 (または最後) の位置には空文字列（つまり長さ 0）が含まれます。`separator` が `str` 内に存在しない場合、返値の配列には文字列全体からなる要素が 1 つ含まれます。

`separator` が空文字列 (`""`) の場合、`str` は UTF-16 の「文字」の配列に変換され、両端が空文字列になることはありません。

> **メモ:** したがって、`"".split("")` は `separator` として文字列を渡されたときに空文字列の配列を生成する唯一の方法です。

> **警告:** 区切り文字として空文字列 (`""`) が用いられた場合、文字列はユーザが認識する文字（[書記素クラスタ](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)）や Unicode 文字（コードポイント）ではなく、UTF-16 コード単位で分割されます。 これは[サロゲートペア](https://unicode.org/faq/utf_bom.html#utf16-2)を破壊します。[StackOverflow の "How do you get a string to a character array in JavaScript?"](https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402) を参照してください。

`separator` が空文字列に一致する正規表現である場合、一致する文字列が UTF-16 コード単位で分割されるか、Unicode コード点で分割されるかは、正規表現が [Unicode-aware](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) かどうかに依存します。

```js
"😄😄".split(/(?:)/); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
"😄😄".split(/(?:)/u); // [ "😄", "😄" ]
```

もし `separator` がキャプチャグループを持つ正規表現であれば、`separator` が一致するたびに、キャプチャされたグループ（`undefined` の結果を含む）が出力配列に分割されます。 この動作は正規表現の [`Symbol.split`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split) メソッドで指定します。

区切り文字 `separator` が [`Symbol.split`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split) メソッドを持つオブジェクトの場合、そのメソッドは対象の文字列と `limit` を引数として呼び出され、`this` にはそのオブジェクトが設定されます。 その返値が `split` の返値になります。

それ以外の値は、セパレーターとして使われる前に文字列に変換されます。

## 例

### split() の使用

文字列が空の場合、 `split()` は空の配列ではなく、1 つの空文字列を含む配列を返します。文字列と区切り文字列が共に空文字列の場合、空の配列が返ります。

```js
const emptyString = "";

// 文字列は空で、セパレーターは空ではない
console.log(emptyString.split("a"));
// [""]

// 文字列とセパレーターがともに空文字列
console.log(emptyString.split(emptyString));
// []
```

次の例では、文字列を `separator` を用いて文字列の配列に分割する関数を定義します。 文字列を分割した後、この関数は元の文字列（分割前）、用いている区切り文字、配列の要素数、個々の配列要素を示すメッセージをログ出力します。

```js
function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);

  console.log("元の文字列: ", stringToSplit);
  console.log("区切り文字列: ", separator);
  console.log(
    "配列の要素数は",
    arrayOfStrings.length,
    "件: ",
    arrayOfStrings.join(" / "),
  );
}

const tempestString = "Oh brave new world that has such people in it.";
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const space = " ";
const comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
```

この例は次のような出力結果を生成します。

```plain
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
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);
```

これは 2 つの行を出力します。1 行目は元の文字列を出力し、2 行目は `split` メソッドの実行結果の配列を出力します。

```plain
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

### 限られた数の分割結果を返す

以下の例では、`split()` は 文字列中の 0 回以上の空白を探し、見つかった最初の 3 つの分割結果を返します。

```js
const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);

console.log(splits); // [ "Hello", "World.", "How" ]
```

### `RegExp` を使った分割でセパレーターの一部を結果に含める

もし `separator` が括弧 `( )` を含む正規表現であれば、一致した結果が配列に含められます。

```js
const myString = "Hello 1 word. Sentence number 2.";
const splits = myString.split(/(\d)/);

console.log(splits);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

> **メモ:** `\d` は数字 0 から 9 までの[文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)に一致します。

### 独自のスプリッターの使用

`Symbol.split` メソッドを持つオブジェクトは、独自の動作を持つスプリッターとして使用することができます。

次の例は、増加する数値からなる内部状態を使用して文字列を分割します。

```js
const splitByNumber = {
  [Symbol.split](str) {
    let num = 1;
    let pos = 0;
    const result = [];
    while (pos < str.length) {
      const matchPos = str.indexOf(num, pos);
      if (matchPos === -1) {
        result.push(str.substring(pos));
        break;
      }
      result.push(str.substring(pos, matchPos));
      pos = matchPos + String(num).length;
      num++;
    }
    return result;
  },
};

const myString = "a1bc2c5d3e4f";
console.log(myString.split(splitByNumber)); // [ "a", "bc", "c5d", "e", "f" ]
```

次の例では、内部状態を使用して特定の動作を強制し、「有効な」結果が確実に保持されるようにしています。

```js
const DELIMITER = ";";

// Split the commands, but remove any invalid or unnecessary values.
const splitCommands = {
  [Symbol.split](str, lim) {
    const results = [];
    const state = {
      on: false,
      brightness: {
        current: 2,
        min: 1,
        max: 3,
      },
    };
    let pos = 0;
    let matchPos = str.indexOf(DELIMITER, pos);

    while (matchPos !== -1) {
      const subString = str.slice(pos, matchPos).trim();

      switch (subString) {
        case "light on":
          // If the `on` state is already true, do nothing.
          if (!state.on) {
            state.on = true;
            results.push(subString);
          }
          break;

        case "light off":
          // If the `on` state is already false, do nothing.
          if (state.on) {
            state.on = false;
            results.push(subString);
          }
          break;

        case "brightness up":
          // Enforce a brightness maximum.
          if (state.brightness.current < state.brightness.max) {
            state.brightness.current += 1;
            results.push(subString);
          }
          break;

        case "brightness down":
          // Enforce a brightness minimum.
          if (state.brightness.current > state.brightness.min) {
            state.brightness.current -= 1;
            results.push(subString);
          }
          break;
      }

      if (results.length === lim) {
        break;
      }

      pos = matchPos + DELIMITER.length;
      matchPos = str.indexOf(DELIMITER, pos);
    }

    // If we broke early due to reaching the split `lim`, don't add the remaining commands.
    if (results.length < lim) {
      results.push(str.slice(pos).trim());
    }

    return results;
  },
};

const commands =
  "light on; brightness up; brightness up; brightness up; light on; brightness down; brightness down; light off";
console.log(commands.split(splitCommands, 3)); // ["light on", "brightness up", "brightness down"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.split` のポリフィル (`core-js`)（`Symbol.split` のような現代の動作の修正と実装に対応）](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
- [JavaScript での正規表現の使用](/ja/docs/Web/JavaScript/Guide/Regular_expressions)
