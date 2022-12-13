---
title: Date.prototype.toGMTString()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
original_slug: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
---

{{JSRef}} {{deprecated_header}}

**`toGMTString()`** メソッドは、インターネットグリニッジ標準時 (GMT) 協定に基づき、日付を文字列へ変換します。実際には、これは {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}} の別名です。

> **メモ:** `toGMTString()` は非推奨であり、もはや使われていません。後方互換性のためだけに残されています。代わりに、{{jsxref("Date.prototype.toUTCString()", "toUTCString()")}} を使用してください。

## 構文

```js-nolint
toGMTString()
```

### 返値

インターネットグリニッジ標準時 (GMT) 協定に基づき、与えられた日付を表す文字列。

## 例

### 簡単な例

この例では、`toGMTString()` メソッドは OS のタイムゾーンオフセットを使って、日付を GMT (UTC) に変換し、次の書式に似た文字列値を返します。正確な書式はプラットフォームに依存します。

```js
const today = new Date();
const str = today.toGMTString(); // deprecated! use toUTCString()

console.log(str); // Mon, 18 Dec 1995 17:28:35 GMT
```

`toGMTString` は単なる `toUTCString` の別名であり、互換性のために維持されているものです。

```js
console.log(Date.prototype.toGMTString === Date.prototype.toUTCString); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Date.prototype.toGMTString` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-date)
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
