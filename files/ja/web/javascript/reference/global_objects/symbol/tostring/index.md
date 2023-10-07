---
title: Symbol.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
---

{{JSRef}}

**`toString()`** メソッドは、指定された {{jsxref("Symbol")}} オブジェクトを表す文字列を返します。

{{EmbedInteractiveExample("pages/js/symbol-prototype-tostring.html")}}

## 構文

```
Symbol().toString()
```

### 返値

指定された {{jsxref("Symbol")}} オブジェクトを表す文字列です。

## 解説

{{jsxref("Symbol")}} オブジェクトは {{jsxref("Object")}} オブジェクトの `toString` メソッドをオーバーライドします。 {{jsxref("Object.prototype.toString()")}} を継承していません。 `Symbol` オブジェクトでは `toString` メソッドはオブジェクトの文字列表現を返します。

### 文字列への型変換はない

シンボルに対しては `toString()` を呼び出すことができるため、文字列への型変換はありません。

```js
Symbol("foo") + "bar"; // TypeError: Can't convert symbol to string
```

## 例

### toString() の使用

```js
Symbol("desc").toString(); // "Symbol(desc)"

// ウェルノウンシンボル
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)

// グローバルシンボル
Symbol.for("foo").toString(); // "Symbol(foo)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.toString")}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
