---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
---

{{JSRef}}

**`indexOf()`** メソッドは、呼び出す {{jsxref("String")}} オブジェクト中で、 `fromIndex` から検索を始め、指定された値が最初に現れたインデックスを返します。値が見つからない場合は `-1` を返します。

{{EmbedInteractiveExample("pages/js/string-indexof.html")}}

> **メモ:** 配列メソッドについては {{jsxref("Array.prototype.indexOf()")}} を参照してください。

## 構文

```
str.indexOf(searchValue [, fromIndex])
```

### 引数

- `searchValue`

  - : 検索する値を表す文字列です。

    文字列が明示的に提供されなかった場合は、 [_searchValue_ は "`undefined`" となり](https://tc39.github.io/ecma262/#sec-tostring)、この値が `str` の中から検索されます。

    ですから、例えば `'undefined'.indexOf()` は `undefined` が `undefined` という文字列の中の `0` の位置に見つかるため、 `0` を返します。しかし、 `'undefine'.indexOf()` は `undefined` が `undefine` という文字列の中で見つからないため、 `-1` を返します。

- _`fromIndex`_ {{optional_inline}}

  - : 整数値で、検索を始める位置を表します。既定値は `0` です。

    _`fromIndex`_ の値が `0` より小さい場合や `str.length` より大きい場合は、それぞれ `0` の位置、 `str.length` の位置から検索を始めます。

    例えば、 `'hello world'.indexOf('o', -5)` は、 `0` の位置から検索を始め、 `o` が `4` の位置にあるので `4` を返します。一方、 `'hello world'.indexOf('o', 11)` (および `fromIndex` の値が `11` よりも大きな場合) は、 `11` が文字列の末尾よりも*後*の位置であるため、 `-1` を返します。

### 返値

`searchValue` が初めて出現した位置です。見つからなかった場合は、 **-1** になります。

`searchValue` が空文字列であった場合は奇妙な結果になります。 `fromIndex` の値がなかった場合や、 `fromIndex` の値が文字列の `length` よりも小さかった場合は、返値は `fromIndex` と同じになります。

```js
'hello world'.indexOf('') // 0 を返す
'hello world'.indexOf('', 0) // 0 を返す
'hello world'.indexOf('', 3) // 3 を返す
'hello world'.indexOf('', 8) // 8 を返す
```

しかし、 `fromIndex` の値が文字列の `length` 以上であった場合、返値は文字列の `length` になります。

```js
'hello world'.indexOf('', 11) // 11 を返す
'hello world'.indexOf('', 13) // 11 を返す
'hello world'.indexOf('', 22) // 11 を返す
```

前者の例では、 JS は指定された位置の直後に空文字列を見つけているようです。後者の例では、 JS は検索される文字列の末尾で空文字列を見つけているようです。

## 解説

文字列における文字は左から右にインデックス化されます。一番最初の文字の位置は `0` で、 `stringName` として呼び出された文字列における一番最後の文字は `stringName.length - 1` です。

```js
'Blue Whale'.indexOf('Blue')      // 0 を返します
'Blue Whale'.indexOf('Blute')     // -1 を返します
'Blue Whale'.indexOf('Whale', 0)  // 5 を返します
'Blue Whale'.indexOf('Whale', 5)  // 5 を返します
'Blue Whale'.indexOf('Whale', 7)  // -1 を返します
'Blue Whale'.indexOf('')          // 0 を返します
'Blue Whale'.indexOf('', 9)       // 9 を返します
'Blue Whale'.indexOf('', 10)      // 10 を返します
'Blue Whale'.indexOf('', 11)      // 10 を返します
```

`indexOf()` メソッドは大文字と小文字を区別します。例えば、以下の式は `-1` を返します。

```js
'Blue Whale'.indexOf('blue')  // -1 を返します
```

### 出現のチェック

`0` は `true` と評価されず、 `-1` は `false` と評価されないことに注意してください。そのため、特定の文字列がほかの文字列に含まれているかをチェックする正確な方法は次のようになります。

```js
'Blue Whale'.indexOf('Blue') !== -1  // true
'Blue Whale'.indexOf('Bloe') !== -1  // false
~('Blue Whale'.indexOf('Bloe')) // 0, which is falsy
```

## 例

### `indexOf()` を使う

以下の例は、`"Brave new world"` という文字列において、与えられた値の位置を求めるために、`indexOf()` を使用しています。

```js
const str = 'Brave new world'

console.log('Index of first w from start is ' + str.indexOf('w'))   // 8 を表示
console.log('Index of "new" from start is ' + str.indexOf('new'))   // 6 を表示
```

### `indexOf()` と 大文字と小文字の区別

以下の例は 2 つの文字列の変数を定義しています。

それらの変数は、2 番目の文字列が大文字を含んでいることを除けば、同じ文字列を含んでいます。1 番目の {{domxref("console.log()")}} メソッドは `19` を表示します。しかし、 `indexOf()` メソッドは大文字と小文字を区別するので、 "`cheddar`" という文字列は `myCapString` では見つけられません。ですから、 `console.log()` メソッドは `-1` を表示します。

```js
const myString    = 'brie, pepper jack, cheddar'
const myCapString = 'Brie, Pepper Jack, Cheddar'

console.log('myString.indexOf("cheddar") is ' + myString.indexOf('cheddar'))
// 19 を表示します
console.log('myCapString.indexOf("cheddar") is ' + myCapString.indexOf('cheddar'))
// -1 を表示します
```

### `indexOf()` を使って文字列中である文字が現れる回数を数える

以下の例は、 `count` に、 `str` という文字列中で `e` という文字が出現する回数を設定します。

```js
const str = 'To be, or not to be, that is the question.'
let count = 0
let position = str.indexOf('e')

while (position !== -1) {
  count++
  position = str.indexOf('e', position + 1)
}

console.log(count)  // 4 を表示
```

## 仕様書

| 仕様書                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.indexof', 'String.prototype.indexOf')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.indexOf")}}

## 関連情報

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
