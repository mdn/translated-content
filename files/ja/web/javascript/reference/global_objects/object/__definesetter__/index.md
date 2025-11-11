---
title: Object.prototype.__defineSetter__()
short-title: __defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> この機能は非推奨となり、[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)は[オブジェクト初期化子の構文](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)または {{jsxref("Object.defineProperty()")}} API を使用して定義する方法に置き換えられました。このメソッドの動作はウェブの互換性だけのために仕様化されたものであり、どのプラットフォームでも実装することを要求されているわけではありません。どこでも動作するとは限りません。

**`__defineSetter__()`** は {{jsxref("Object")}} インスタンスのメソッドで、オブジェクトのプロパティと関数を結び付け、そのプロパティを設定しようとすると呼び出されるようにします。

## 構文

```js-nolint
__defineSetter__(prop, func)
```

### 引数

- `prop`
  - : セッター `func` をバインドするプロパティの名前を表す文字列です。
- `func`
  - : プロパティへ値を設定しようとしたときに呼び出される関数です。この関数は以下の形式をとります。
    - `val`
      - : `prop` に代入しようとしている値。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : `func` が関数でない場合に発生します。

## 解説

`Object.prototype` 継承するすべてのオブジェクト（つまり、 [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)を除くすべてのオブジェクト）は `__defineSetter__()` メソッドを継承しています。このメソッドにより、既存のオブジェクトに[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)を定義することができます。これは、 [`Object.defineProperty(obj, prop, { set: func, configurable: true, enumerable: true })`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) と等価であり、プロパティが列挙され、構成可能であり、既存のセッターが存在する場合は保存されることを意味しています。

`__defineSetter__()` は仕様書で `normative optional` と定義されており、これは実装することを要求されていないということです。しかし、主要なブラウザーはすべて実装していますし、使い続けられているため、除去される可能性は低いでしょう。ブラウザーが `__defineSetter__()` を実装する場合、[`__lookupGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)、[`__lookupSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)、[`__defineGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) の各メソッドも実装する必要があります。

## 例

### \_\_defineSetter\_\_() の使用

```js
const o = {};
o.__defineSetter__("value", function (val) {
  this.anotherValue = val;
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

### 標準の方法でセッタープロパティを定義

`set` 構文を使用すると、オブジェクトが最初に初期化されたときにゲッターを定義することができます。

```js
const o = {
  set value(val) {
    this.anotherValue = val;
  },
};
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

また、 {{jsxref("Object.defineProperty()")}} を使用して、オブジェクト作成後にそのオブジェクトにセッターを定義することもできます。 `__defineSetter__()` と比較すると、このメソッドでは[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)のプロパティを定義するだけでなく、セッターの列挙可能性や構成可能性を制御することができます。 `Object.defineProperty()` メソッドは、 `Object.prototype` を継承していないため `__defineSetter__()` メソッドがない [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)でも動作します。

```js
const o = {};
Object.defineProperty(o, "value", {
  set(val) {
    this.anotherValue = val;
  },
  configurable: true,
  enumerable: true,
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.prototype.__defineSetter__` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__defineGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JavaScript ガイド: ゲッターとセッターの定義](/ja/docs/Web/JavaScript/Guide/Working_with_objects#ゲッターとセッターの定義)
- [Firefox バグ 647423](https://bugzil.la/647423)
