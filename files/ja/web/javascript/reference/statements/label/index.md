---
title: label
slug: Web/JavaScript/Reference/Statements/label
---

{{jsSidebar("Statements")}}

**ラベル付き文**は、 {{jsxref("Statements/break", "break")}} 文や {{jsxref("Statements/continue", "continue")}} 文と組み合わせて使用することができます。これは文に参照先となる識別子の接頭辞をつけます。

{{EmbedInteractiveExample("pages/js/statement-label.html")}}

> **メモ:** ループやブロックに名前を付けることはめったにありません。ふつうは、ジャンプによるループの代わりに関数呼び出しを使用することができます。

## 構文

```
ラベル :
  文
```

- `ラベル`
  - : 予約語ではない任意の JavaScript の識別子。
- `文`
  - : 文。 `break` は任意のラベル付き文で使うことができ、 `continue` はループのラベル付き文で使うことができます。

## 解説

ループを識別するためにラベルを使い、そして、プログラムがループを中断すべきか、またはその実行を継続すべきかを指し示すために、`break` または `continue` 文を使うことができます。

JavaScript には **`goto` 文がなく**、ラベルと `break` または `continue` のみ使用できます。

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)のコードでは、 "`let`" をラベル名として使用することができません。この場合、 {{jsxref("SyntaxError")}} が発生します (let は予約語です)。

## 例

### ラベル付き continue を for ループで使用する

```js
var i, j;

loop1:
for (i = 0; i < 3; i++) {      // 1 番目の for 文に "loop1" というラベルをつける
   loop2:
   for (j = 0; j < 3; j++) {   // 2 番目の for 文に "loop2" というラベルをつける
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}

// 結果:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// "i = 1, j = 1" と "i = 1, j = 2" をスキップしていることに注目
```

### ラベル付き continue 文を使用する

配列 items と tests について、このサンプルはすべてを tests に渡した items の数を数えます。

```js
var itemsPassed = 0;
var i, j;

top:
for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      continue top;
    }
  }

  itemsPassed++;
}
```

### for ループでラベル付き break を使用する

```js
var i, j;

loop1:
for (i = 0; i < 3; i++) {      // 1 番目の for 文に "loop1" というラベルをつける
   loop2:
   for (j = 0; j < 3; j++) {   // 2 番目の for 文に "loop2" というラベルをつける
      if (i === 1 && j === 1) {
         break loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}

// 結果:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
// continue の例との違いに注目
```

### ラベル付き break 文を使用する

配列 items と tests について、このサンプルは items のすべてを tests に渡したかを判断します。

```js
var allPass = true;
var i, j;

top:
for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      allPass = false;
      break top;
    }
  }
}
```

### break を使用したラベル付きブロックの使用

ラベルを単純なブロックの中でも使用することができますが、ループ以外のラベルでは break 文のみが意味を持ちます。

```js
foo: {
  console.log('face');
  break foo;
  console.log('this will not be executed');
}
console.log('swap');

// this will log:

// "face"
// "swap"
```

### ラベル付き関数宣言

ECMAScript 2015 から、ラベル付き関数宣言が [web compatibility annex of the specification](http://www.ecma-international.org/ecma-262/6.0/#sec-labelled-function-declarations) において、厳格モード以外のコードで標準化されました。

```js
L: function F() {}
```

ただし、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)のコードでは {{jsxref("SyntaxError")}} が発生します。

```js
'use strict';
L: function F() {}
// SyntaxError: functions cannot be labelled
```

[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)は、厳格モードであってもなくてもラベル付けすることはできません。

```js
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

## 仕様書

| 仕様書                                                                                           |
| ------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-labelled-statements', 'Labelled statement')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.label")}}

## 関連情報

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
