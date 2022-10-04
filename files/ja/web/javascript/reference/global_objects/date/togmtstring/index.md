---
title: Date.prototype.toGMTString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
---

{{JSRef}} {{deprecated_header}}

**`toGMTString()`** メソッドは、インターネットグリニッジ標準時 (GMT) 協定に基づき、日付を文字列へ変換します。`toGMTString()` が返す値の正確な書式は、プラットフォームやブラウザによって変化しますが、一般に、人間が読める日付の文字列を表します。

> **メモ:** `toGMTString()` は非推奨であり、もはや使われていません。後方互換性のためだけに残されています。代わりに、{{jsxref("Date.prototype.toUTCString()", "toUTCString()")}} を使用してください。

## 構文

```
dateObj.toGMTString()
```

### 返値

インターネットグリニッジ標準時 (GMT) 協定に基づき、与えられた日付を表す文字列。

## 例

### 簡単な例

この例では、`toGMTString()` メソッドは OS のタイムゾーンオフセットを使って、日付を GMT (UTC) に変換し、次の書式に似た文字列値を返します。正確な書式はプラットフォームに依存します。

```js
var today = new Date();
var str = today.toGMTString();  // deprecated! use toUTCString()

console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.togmtstring', 'Date.prototype.toGMTString')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.toGMTString")}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
