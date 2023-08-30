---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
---

{{JSRef}}

**`name`** プロパティは、エラーの種類の名称を表します。初期値は "Error" です。

## 解説

既定で {{jsxref("Error")}} インスタンスには "Error" という名称が与えられます。 `name` プロパティは {{jsxref("Error.prototype.message", "message")}} プロパティに加えて、 Error の文字列表現を生成するため、{{jsxref("Error.prototype.toString()")}} メソッドにより使用されます。

## 例

### 独自のエラーを発生させる

```js
var e = new Error("Malformed input"); // e.name は 'Error'

e.name = "ParseError";
throw e;
// e.toString() would return 'ParseError: Malformed input'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Error.name")}}

## 関連情報

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
