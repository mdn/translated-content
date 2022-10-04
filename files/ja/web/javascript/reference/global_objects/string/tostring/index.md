---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
---

{{JSRef}}

**`toString()`** メソッドは指定されたオブジェクトを表す文字列を返します。

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## 構文

```
str.toString()
```

### 返値

呼び出したオブジェクトを表す文字列です。

## 詳細

その {{jsxref("String")}} オブジェクトは、{{jsxref("Object")}} の `toString` メソッドを上書きします。つまり、{{jsxref("Object.prototype.toString()")}} を継承しません。{{jsxref("String")}} オブジェクトの `toString()` メソッドは、そのオブジェクトを表す文字列を返します（ {{jsxref("String.prototype.valueOf()")}} と同等です）。

## 例

### `toString` メソッドを使う

以下の例は、{{jsxref("String")}} オブジェクトを表す文字列の値を表示します。

```js
var x = new String('Hello world');

alert(x.toString()) // 'Hello world' を表示します
```

## 仕様

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.tostring', 'String.prototype.toString')}} |

## ブラウザー実装状況

{{Compat("javascript.builtins.String.toString")}}

## 関連情報

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("String.prototype.valueOf()")}}
