---
title: String.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/@@iterator
---

{{JSRef}}

**`[@@iterator]()`** メソッドは、文字列値のコードポイントを走査し、それぞれのコードポイントを文字列値として返すイテレーターオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/string-iterator.html")}}

## 構文

```
str[Symbol.iterator]
```

### 返値

新しいイテレーターオブジェクトです。

## 例

### \[@@iterator]\() の使用

```js
var str = 'A\uD835\uDC68';

var strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

### \[@@iterator]\() と for..of の使用

```js
var str = 'A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A';

for (var v of str) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype-@@iterator', 'String.prototype[@@iterator]()')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.@@iterator")}}

## 関連情報

- [反復プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
