---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

**`indexOf()`** は {{jsxref("String")}} 値のメソッドで、この文字列を検索し、指定した部分文字列が最初に出現するインデックスを返します。 オプションで開始位置を取り、指定した数値以上のインデックスで指定した部分文字列が最初に出現するインデックスを返します。

{{EmbedInteractiveExample("pages/js/string-indexof.html")}}

## 構文

```js-nolint
indexOf(searchString)
indexOf(searchString, position)
```

### 引数

- `searchString`

  - : 検索する値を表す文字列です。すべての値は[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)ので、省略したり `undefined` を渡したりすると、`indexOf()` は `"undefined"` という文字列を検索します。これはおそらく望むところではないでしょう。

- `position` {{optional_inline}}

  - : このメソッドは、`position`（既定値は `0`）以上の位置で、指定した部分文字列が最初に現れるインデックスを返します。`position` が呼び出された文字列の長さよりも大きい場合、このメソッドは呼び出される文字列をまったく検索しません。`position` が 0 以上の場合、このメソッドは `0` と同じように動作します。

    - `'hello world hello'.indexOf('o', -5)` は `4` を返します。これは第 2 引数が `0` であるかのように動作し、`o` が `0` 以上の位置で最初に現れるのが `4` だからです。

  - `'hello world hello'.indexOf('world', 12)` は `-1` を返します。実際に部分文字列 `world` が現れるのは `6` のインデックスですが、その位置は `12` 以上ではないからです。

  - `'hello world hello'.indexOf('o', 99)` は `-1` を返します。`99` が `hello world hello` の長さよりも大きいため、メソッドが全く文字列を検索しなくなるからです。

### 返値

`searchString` が最初に見つかったインデックス、または見つからなかった場合は `-1` です。

#### 空の検索文字列を使用した場合の返値

空の検索文字列で検索すると、奇妙な結果になります。第 2 引数がなかった場合や、第 2 引数の値が呼び出した文字列の長さよりも小さかった場合、返値は第 2 引数と同じになります。

```js
"hello world".indexOf(""); // 0 を返す
"hello world".indexOf("", 0); // 0 を返す
"hello world".indexOf("", 3); // 3 を返す
"hello world".indexOf("", 8); // 8 を返す
```

しかし、第 2 引数の値が文字列の長さ以上であった場合、返値は文字列の長さになります。

```js
"hello world".indexOf("", 11); // 11 を返す
"hello world".indexOf("", 13); // 11 を返す
"hello world".indexOf("", 22); // 11 を返す
```

前者の例では、メソッドは第 2 引数で指定した位置の直後に空文字列を見つけたかのように動作します。 後者の例では、メソッドは呼び出した文字列の終わりに空文字列を見つけたかのように動作します。

## 解説

文字列は 0 基点です。文字列の最初の文字のインデックスは `0` で、文字列の最後の文字のインデックスは文字列の長さから 1 を引いたものになります。

```js
"Blue Whale".indexOf("Blue"); // 0 を返す
"Blue Whale".indexOf("Blute"); // -1 を返す
"Blue Whale".indexOf("Whale", 0); // 5 を返す
"Blue Whale".indexOf("Whale", 5); // 5 を返す
"Blue Whale".indexOf("Whale", 7); // -1 を返す
"Blue Whale".indexOf(""); // 0 を返す
"Blue Whale".indexOf("", 9); // 9 を返す
"Blue Whale".indexOf("", 10); // 10 を返す
"Blue Whale".indexOf("", 11); // 10 を返す
```

`indexOf()` メソッドは大文字と小文字を区別します。例えば、以下の式は `-1` を返します。

```js
"Blue Whale".indexOf("blue"); // -1 を返す
```

### 出現のチェック

文字列の中に特定の部分文字列があるかどうかを調べる場合、返値が `-1` であるかどうかを調べるのが正しい方法です。

```js
"Blue Whale".indexOf("Blue") !== -1; // true。'Blue' が 'Blue Whale' の中で見つかった
"Blue Whale".indexOf("Bloe") !== -1; // false。 'Bloe' が 'Blue Whale' の中で見つからなかった
```

## 例

### indexOf() の使用

以下の例は `indexOf()` を使用して、`"Brave new world"` という文字列において指定された値の位置を求めています。

```js
const str = "Brave new world";

console.log(str.indexOf("w")); // 8
console.log(str.indexOf("new")); // 6
```

### indexOf() と 大文字と小文字の区別

以下の例は 2 つの文字列の変数を定義しています。

それらの変数は、2 番目の文字列が大文字を含んでいることを除けば、同じ文字列を含んでいます。1 番目の {{domxref("console.log()")}} メソッドは `19` を表示します。しかし、`indexOf()` メソッドは大文字と小文字を区別するので、`"cheddar"` という文字列は `myCapString` では見つけられません。ですから、 `console.log()` メソッドは `-1` を表示します。

```js
const myString = "brie, pepper jack, cheddar";
const myCapString = "Brie, Pepper Jack, Cheddar";

console.log(myString.indexOf("cheddar")); // 19
console.log(myCapString.indexOf("cheddar")); // -1
```

### indexOf() を使って文字列中である文字が現れる回数を数える

以下の例は、 `count` に、 `str` という文字列中で `e` という文字が出現する回数を設定します。

```js
const str = "To be, or not to be, that is the question.";
let count = 0;
let position = str.indexOf("e");

while (position !== -1) {
  count++;
  position = str.indexOf("e", position + 1);
}

console.log(count); // 4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
