---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
---

{{JSRef}}

**`repeat()`** メソッドは、呼び出し元の文字列を指定した数だけコピーして結合した新しい文字列を構築して返します。

{{EmbedInteractiveExample("pages/js/string-repeat.html","shorter")}}

## 構文

```
str.repeat(count)
```

### 引数

- `count`
  - : `0` から{{jsxref("Global_Objects/Number/POSITIVE_INFINITY", "正の無限大")}}までの間の整数で、文字列を繰り返す数を示します。

### 返値

与えられた文字列の指定した回数分のコピーを含む新しい文字列です。

### 例外

- {{jsxref("Errors/Negative_repetition_count", "RangeError")}}: 繰り返し数は非負数でなければなりません。
- {{jsxref("Errors/Resulting_string_too_large", "RangeError")}}: 繰り返し数は無限大よりも小さく、文字列の最大長を超えないようにしなければなりません。

## 例

### repeat() の使用

```js
'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (小数は丸められ、整数の結果が返されます)
'abc'.repeat(1/0)   // RangeError

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2)
// 'abcabc' (repeat() は汎用メソッドです)
```

## ポリフィル

このメソッドは ECMAScript 2015 仕様で追加されたため、まだすべての JavaScript の実装で使用できるわけではありません。しかし、次のスニペットで `String.prototype.repeat()` を代替することができます。

```
if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null)
      throw new TypeError('can\'t convert ' + this + ' to object');

    var str = '' + this;
    // To convert string to integer.
    count = +count;
    // Check NaN
    if (count != count)
      count = 0;

    if (count < 0)
      throw new RangeError('repeat count must be non-negative');

    if (count == Infinity)
      throw new RangeError('repeat count must be less than infinity');

    count = Math.floor(count);
    if (str.length == 0 || count == 0)
      return '';

    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28)
      throw new RangeError('repeat count must not overflow maximum string size');

    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
       str += str;
       count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  }
}
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.repeat', 'String.prototype.repeat')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.repeat")}}

## 関連情報

- {{jsxref("String.prototype.concat()")}}
