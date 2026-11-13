---
title: 空文
slug: Web/JavaScript/Reference/Statements/Empty
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**空文** は、JavaScript 構文で文が想定されているときに、文を用意しないために使います。

{{InteractiveExample("JavaScript デモ: 空文")}}

```js interactive-example
const array = [1, 2, 3];

// 配列のすべての値に 0 を代入
for (let i = 0; i < array.length; array[i++] = 0 /* 空文 */);

console.log(array);
// 予想される結果: Array [0, 0, 0]
```

## 構文

```js-nolint
;
```

## 解説

空文はセミコロン (`;`) で、JavaScript の構文上で文を必要とするときでも文を実行しないことを示します。

逆のふるまいとして、 JavaScript が単一文のみ許可しているのに複数の文にしたい場合には、[ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)を使ってください。ブロック文は、いくつかの文を単一文に結合します。

## 例

### 空のループ本体

空文は、ループ文で使われることがあります。ループ本体が空である以下の例をご覧ください。

```js-nolint
const arr = [1, 2, 3];

// 配列の値をすべて 0 にする
for (let i = 0; i < arr.length; arr[i++] = 0) /* 空文 */ ;

console.log(arr);
// [0, 0, 0]
```

### 意図的でない使用

空文を*意図的*に使っていることをコメントするとよいでしょう。通常のセミコロンと区別するのが難しいからです。

次の例は、おそらく意図的でない使用例です。

```js-nolint example-bad
if (condition);      // 注意: この "if" は何の意味もない!
  killTheUniverse(); // この関数が常に実行される!!!
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)
