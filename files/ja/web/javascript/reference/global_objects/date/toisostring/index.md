---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
---

{{JSRef}}

**`toISOString()`** メソッドは、*簡潔な*拡張表記の ISO 形式 ([ISO 8601](https://ja.wikipedia.org/wiki/ISO_8601)) の文字列を返します。これは、常に 24 文字または 27 文字の長さになります (それぞれ、`YYYY-MM-DDTHH:mm:ss.sssZ` または `±YYYYYY-MM-DDTHH:mm:ss.sssZ`)。タイムゾーンは常に 0 UTC オフセットになり、接尾辞 "`Z`" で表記されます。

{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}

## 構文

```
dateObj.toISOString()
```

### 返値

協定世界時に基づき、与えられた日付を [ISO 8601](https://ja.wikipedia.org/wiki/ISO_8601) 形式で表す文字列。

## ポリフィル

このメソッドは、ECMA-262 第 5 版で標準化されました。このメソッドに対応するため、更新されていないエンジンでは、次のコードを用いてこのメソッドの欠落を補うことができます。

```js
if (!Date.prototype.toISOString) {
  (function() {

    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };

  })();
}
```

## 例

### toISOString() の使用

```js
let today = new Date('05 October 2011 14:48 UTC')

console.log(today.toISOString())  // 2011-10-05T14:48:00.000Z を返す
```

上記の例は、Mozilla 以外のブラウザーでは正しく解析されない、非標準の文字列値を解析するのに使います。

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.toisostring', 'Date.prototype.toISOString')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.toISOString")}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
