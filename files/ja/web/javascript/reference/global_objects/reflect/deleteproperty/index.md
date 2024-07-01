---
title: Reflect.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
---

{{JSRef}}

静的な **`Reflect.defineProperty()`** メソッドは、{{jsxref("Object.defineProperty()")}} と似ていますが、 {{jsxref("Boolean")}} を返します。

{{EmbedInteractiveExample("pages/js/reflect-defineproperty.html")}}

## 構文

```
Reflect.defineProperty(target, propertyKey, attributes)
```

### 引数

- `target`
  - : プロパティを定義する対象のオブジェクトです。
- `propertyKey`
  - : 定義または修正をするプロパティ名です。
- `attributes`
  - : 定義または修正されているプロパティのための属性です。

### 返値

プロパティの定義に成功したかどうかを示す {{jsxref("Boolean")}} です。

### 例外

{{jsxref("TypeError")}}: `target` が {{jsxref("Object")}} ではなかった場合。

## 解説

`Reflect.defineProperty` メソッドは、オブジェクトのプロパティの正確な追加や修正を行います。詳細は、類似メソッドの {{jsxref("Object.defineProperty")}} を参照してください。

> **メモ:** `Object.defineProperty` はプロパティの定義が成功しなかった場合、オブジェクトを返すか {{jsxref("TypeError")}} を発生させます。しかし、`Reflect.defineProperty` は単純に、プロパティの定義が成功したかどうかを示す {{jsxref("Boolean")}} を返します。

## 例

### Reflect.defineProperty() の使用

```js
let obj = {};
Reflect.defineProperty(obj, "x", { value: 7 }); // true
obj.x; // 7
```

### プロパティ定義が成功したかチェックする

成功してオブジェクトを返すか、失敗して {{jsxref("TypeError")}} をスローする {{jsxref("Object.defineProperty")}} を使う場合、プロパティの定義中に発生する何らかの例外をキャッチするには、[`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) ブロックを使用します。

`Reflect.defineProperty` は真偽値の成功ステータスを返すので、[`if...else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) ブロックを使用することができます。

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Reflect")}}
- {{jsxref("Object.defineProperty()")}}
