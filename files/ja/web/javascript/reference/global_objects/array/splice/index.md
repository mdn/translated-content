---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
tags:
  - Array
  - JavaScript
  - メソッド
  - プロトタイプ
  - リファレンス
  - remove
  - replace
  - splice
browser-compat: javascript.builtins.Array.splice
translation_of: Web/JavaScript/Reference/Global_Objects/Array/splice
---
{{JSRef}}

**`splice()`** メソッドは、[その場](https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)で既存の要素を取り除いたり、置き換えたり、新しい要素を追加したりすることで、配列の内容を変更します。

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

## 構文

```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```

### 引数

- `start`

  - : 配列を変更する先頭の位置です。

    配列の長さより大きい場合、`start` は配列の長さに設定されます。この場合、削除される要素はありませんが、このメソッドは追加関数として動作し、提供された item\[n\*] の数だけ要素を追加します。

    値が負の数の場合は、配列の末尾から要素数だけ戻ったところから始まります (`-1` が原点で、`-n` は最後の要素から `n` 番目であることを意味し、したがって位置が `array.length - n` であるのと同等です)。 `start` が負の無限大であった場合は、 `0` の位置から始まります。

- `deleteCount` {{optional_inline}}

  - : 配列の `start` の位置から取り除く古い要素の個数を示す整数です。

    `deleteCount` 引数が省略された場合、または `array.length - start` 以上 (つまり、`start` から始めて配列に残っている要素の数以上) の場合、`start` 以降のすべての要素が取り除かれます。

    `deleteCount` が `0` または負の数の場合、どの要素も取り除かれません。この場合、少なくとも 1 つの新しい要素を指定する必要があります (以下参照)。

- `item1, item2, ...` {{optional_inline}}
  - : 配列に追加する要素で、`start` から始まります。要素を指定しなかった場合、`splice()` は単に配列から要素を取り除きます。

### 返値

取り除かれた要素を含む配列です。

要素が 1 つだけ取り除かれた場合は、要素数 1 の配列が返されます。

要素が取り除かれなかった場合、空の配列が返されます。

## 解説

取り除こうとする要素数と異なる数の要素を挿入するように指定した場合、配列の `length` は変更されます。

## 例

### 2 の位置の手前から 0 個の要素を削除して "drum" を挿入

```js
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')

// myFish は ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed は [] であり、どの要素も取り除かれていない
```

### 2 の位置の手前から 0 個の要素を削除して、"drum" と "guitar" を挿入

```js
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')

// myFish は ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed は [] であり、どの要素も取り除かれていない
```

### 3 の位置から 1 つ取り除く

```js
let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)

// removed は ["mandarin"]
// myFish は ["angel", "clown", "drum", "sturgeon"]
```

### 2 の位置から 1 つ取り除いて "trumpet" を挿入

```js
let myFish = ['angel', 'clown', 'drum', 'sturgeon']
let removed = myFish.splice(2, 1, 'trumpet')

// myFish は ["angel", "clown", "trumpet", "sturgeon"]
// removed は ["drum"]
```

### 0 の位置から 2 つ取り除き、そこへ "parrot" と "anemore" と "blue" を挿入

```js
let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')

// myFish は ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed は ["angel", "clown"]
```

### 2 の位置から 2 つ取り除く

```js
let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed = myFish.splice(2, 2)

// myFish は ["parrot", "anemone", "sturgeon"]
// removed は ["blue", "trumpet"]
```

### -2 の位置から 1 つ取り除く

```js
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1)

// myFish は ["angel", "clown", "sturgeon"]
// removed は ["mandarin"]</pre>
```

### 2 の位置からすべての要素を取り除く

```js
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)

// myFish は ["angel", "clown"]
// removed は ["mandarin", "sturgeon"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.push()", "push()")}} / {{jsxref("Array.prototype.pop()",
    "pop()")}}— 配列の末尾の要素の追加/削除
- {{jsxref("Array.prototype.unshift()", "unshift()")}} /
  {{jsxref("Array.prototype.shift()", "shift()")}}— 配列の先頭の要素の追加/削除
- {{jsxref("Array.prototype.concat()", "concat()")}}— 配列に他の配列や値をつないでできた新しい配列を返す
