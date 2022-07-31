---
title: Object.prototype.__defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
tags:
  - Deprecated
  - JavaScript
  - Method
  - Object
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Object.defineSetter
translation_of: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
---
{{JSRef}}

> **Warning:** この機能は非推奨となり、[オブジェクト初期化子の構文](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)または {{jsxref("Object.defineProperty()")}} API を使用してセッターを定義する方法で置き換えられました。
>
> ただし、ウェブ上では広く実装され利用されているため、ブラウザーが実装をやめる可能性は極めて低いと考えられます。

**`__defineSetter__`** メソッドは、オブジェクトのプロパティと関数を結び付け、そのプロパティを設定しようとすると呼び出されるようにします。

## 構文

```js
__defineSetter__(prop, fun)
```

### 引数

- `prop`
  - : 関数と結びつけられたプロパティの名前を表す文字列です。
- `fun`

  - : プロパティへ値を設定しようとしたときに呼び出される関数です。この関数は以下の形式をとります。

    ```js
        function(val) { . . . }
        ```

    - `val`
      - : `prop` へ代入しようとする値を保持する変数の別名です。

### 返値

{{jsxref("undefined")}} です。

## 解説

`__defineSetter__` メソッドにより、既存のオブジェクトに{{jsxref("Functions/set", "セッター",
  "", 1)}}を定義することができます。

## 例

### 標準外かつ非推奨の方法

```js
var o = {};
o.__defineSetter__('value', function(val) { this.anotherValue = val; });
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

### 標準準拠の方法

```js
// set 演算子の使用
var o = { set value(val) { this.anotherValue = val; } };
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5

// Object.defineProperty の使用
var o = {};
Object.defineProperty(o, 'value', {
  set: function(val) {
    this.anotherValue = val;
  }
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

- `Object.prototype.__defineSetter__` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-object) で利用できます。
- {{jsxref("Object.prototype.__defineGetter__()")}}
- {{jsxref("Functions/set", "set")}} 演算子
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.prototype.__lookupGetter__()")}}
- {{jsxref("Object.prototype.__lookupSetter__()")}}
- [JavaScript ガイド: ゲッターとセッターの定義](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters)
- [\[Blog
  Post\] Deprecation of \_\_defineGetter\_\_ and \_\_defineSetter\_\_](http://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/)
- {{bug(647423)}}
