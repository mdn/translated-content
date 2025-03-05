---
title: Object.prototype.__defineGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
l10n:
  sourceCommit: fd326b574aadcd78924a5a223f15e289e45a7f1d
---

{{JSRef}}{{Deprecated_Header}}

> [!NOTE]
> この機能は非推奨となり、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)は[オブジェクト初期化子の構文](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)または {{jsxref("Object.defineProperty()")}} API を使用して定義する方法に置き換えられました。このメソッドの動作はウェブの互換性だけのために仕様化されたものであり、どのプラットフォームでも実装することを要求されているわけではありません。どこでも動作するとは限りません。

**`__defineGetter__()`** は {{jsxref("Object")}} インスタンスのメソッドで、オブジェクトのプロパティと関数を結び付け、そのプロパティが参照されるときに呼び出されるようにします。

## 構文

```js-nolint
__defineGetter__(prop, func)
```

### 引数

- `prop`
  - : ゲッター `func` をバインドするプロパティの名前を表す文字列です。
- `func`
  - : プロパティの値を参照するときに呼び出される関数です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : `func` が関数でない場合に発生します。

## 解説

`Object.prototype` 継承するすべてのオブジェクト（つまり、 [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)を除くすべてのオブジェクト）は `__defineGetter__()` メソッドを継承しています。このメソッドにより、既存のオブジェクトに[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)を定義することができます。これは、 [`Object.defineProperty(obj, prop, { get: func, configurable: true, enumerable: true })`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) と等価であり、プロパティが列挙され、構成可能であり、既存のセッターが存在する場合は保存されることを意味しています。

`__defineGetter__()` は仕様書で `normative optional` と定義されており、これは実装することを要求されていないということです。しかし、主要なブラウザーはすべて実装していますし、使い続けられているため、除去される可能性は低いでしょう。ブラウザーが `__defineGetter__()` を実装する場合、[`__lookupGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)、[`__lookupSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)、[`__defineSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) の各メソッドも実装する必要があります。

## 例

### \_\_defineGetter\_\_() の使用

```js
const o = {};
o.__defineGetter__("gimmeFive", function () {
  return 5;
});
console.log(o.gimmeFive); // 5
```

### 標準の方法でゲッタープロパティを定義

`get` 構文を使用すると、オブジェクトが最初に初期化されたときにゲッターを定義することができます。

```js
const o = {
  get gimmeFive() {
    return 5;
  },
};
console.log(o.gimmeFive); // 5
```

また、 {{jsxref("Object.defineProperty()")}} を使用して、オブジェクト作成後にそのオブジェクトにゲッターを定義することもできます。 `__defineGetter__()` と比較すると、このメソッドでは[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)のプロパティを定義するだけでなく、ゲッターの列挙可能性や構成可能性を制御することができます。 `Object.defineProperty()` メソッドは、 `Object.prototype` を継承していないため `__defineGetter__()` メソッドがない [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)でも動作します。

```js
const o = {};
Object.defineProperty(o, "gimmeFive", {
  get() {
    return 5;
  },
  configurable: true,
  enumerable: true,
});
console.log(o.gimmeFive); // 5
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.prototype.__defineGetter__` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object) で利用できます
- [`Object.prototype.__defineSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JavaScript ガイド: ゲッターとセッターの定義](/ja/docs/Web/JavaScript/Guide/Working_with_objects#ゲッターとセッターの定義)
- [Firefox バグ 647423](https://bugzil.la/647423)
