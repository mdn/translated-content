---
title: Symbol.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`toString()`** メソッドは、指定された {{jsxref("Symbol")}} オブジェクトを表す文字列を返します。

{{EmbedInteractiveExample("pages/js/symbol-prototype-tostring.html")}}

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

指定されたシンボル値を表す文字列です。

## 解説

{{jsxref("Symbol")}} オブジェクトは {{jsxref("Object")}} オブジェクトの `toString` メソッドをオーバーライドします。{{jsxref("Object.prototype.toString()")}} を継承していません。`Symbol` 値の場合、`toString` メソッドは `"Symbol(description)"` の形成する文字列を返します。ここで `description` はそのシンボルの[説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)です。

`toString()` メソッドは、`this` 値が `Symbol` プリミティブまたはラッパー・オブジェクトであることを要求されます。シンボル値への強制を試みずに、他の `this` 値に対して {{jsxref("TypeError")}} を発生します。

`Symbol` には [`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) メソッドがあるので、`Symbol` オブジェクトが[文字列に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)されるときは、常にこのメソッドが `toString()` よりも優先されます。しかし、`Symbol.prototype[Symbol.toPrimitive]()` はシンボルプリミティブを返し、シンボルプリミティブは文字列に暗黙的に変換されると {{jsxref("TypeError")}} が発生するため、`toString()` メソッドが言語によって暗黙的に呼び出されることはありません。シンボルを文字列化するには、明示的に `toString()` メソッドを呼び出すか、[`String()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/String#string_を用いてシンボルを文字列化) 関数を使用する必要があります。

## 例

### toString() の使用

```js
Symbol("desc").toString(); // "Symbol(desc)"

// ウェルノウンシンボル
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"

// グローバルシンボル
Symbol.for("foo").toString(); // "Symbol(foo)"
```

### 暗黙的な toString() の呼び出し

JavaScript が `toString()` をシンボルラッパーオブジェクトの [`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) の代わりに暗黙的に呼び出すようにする唯一の方法は、先に `[Symbol.toPrimitive]()` メソッドを[削除](/ja/docs/Web/JavaScript/Reference/Operators/delete)しておくことです。

> [!WARNING]
> これは実際にはやってはいけません。自分が何をしているのかよく分かっていない限り、組み込みオブジェクトを決して変更しないでください。

```js
delete Symbol.prototype[Symbol.toPrimitive];
console.log(`${Object(Symbol("foo"))}`); // "Symbol(foo)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
