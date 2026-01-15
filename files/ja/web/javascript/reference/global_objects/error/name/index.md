---
title: Error.prototype.name
short-title: name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`name`** は `Error.prototype` のデータプロパティで、すべての {{jsxref("Error")}} インスタンスで共有されます。これはエラーの種類の名前を表します。 `Error.prototype.name` では、初期値は `"Error"` です。 {{jsxref("TypeError")}} や {{jsxref("SyntaxError")}} 等のサブクラスでは、固有の `name` プロパティを提供します。

## 値

文字列です。 `Error.prototype.name` では、初期値は `"Error"` です。

{{js_property_attributes(1, 0, 1)}}

## 解説

既定で {{jsxref("Error")}} インスタンスには "Error" という名前が与えられます。 `name` プロパティは {{jsxref("Error/message", "message")}} プロパティに加えて、 Error の文字列表現を生成するため、{{jsxref("Error.prototype.toString()")}} メソッドにより使用されます。

## 例

### 独自のエラーを発生させる

```js
const e = new Error("Malformed input"); // e.name is 'Error'

e.name = "ParseError";
throw e;
// e.toString() would return 'ParseError: Malformed input'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
