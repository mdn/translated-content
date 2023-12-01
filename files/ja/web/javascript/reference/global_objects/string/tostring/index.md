---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`toString()`** メソッドは指定されたオブジェクトを表す文字列を返します。

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## 構文

```js-nolint
toString()
```

### 返値

呼び出したオブジェクトを表す文字列です。

## 詳細

その {{jsxref("String")}} オブジェクトは、{{jsxref("Object")}} の `toString` メソッドを上書きします。つまり、{{jsxref("Object.prototype.toString()")}} を継承しません。`String` オブジェクトの `toString` メソッドは、そのオブジェクトを表す文字列を返します（{{jsxref("String.prototype.valueOf()")}} と同等です）。

`toString()` メソッドは `this` 値が `String` プリミティブまたはラッパーオブジェクトであることを要求します。他の `this` の値に対しては、文字列値に変換しようとせずに {{jsxref("TypeError")}} を発生します。

`String` には [`[@@toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) メソッドがないため、JavaScript は `toString()` メソッドを、文字列が求められるコンテキスト、例えば[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)で `String` オブジェクトが使用されると、自動的に呼び出します。しかし、文字列プリミティブ値は[文字列に変換する](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)ために `toString()` を呼び出しません。既に文字列なので、変換が実施されないからです。

```js
String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"
```

## 例

### toString() メソッドを使う

以下の例は、{{jsxref("String")}} オブジェクトを表す文字列の値を表示します。

```js
const x = new String("Hello world");

console.log(x.toString()); // "Hello world"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.valueOf()")}}
