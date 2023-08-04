---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
---

{{JSRef}}

**`Object.seal()`** メソッドは、オブジェクトを封印して、新しいオブジェクトを追加することを抑制し、すべての既存のプロパティを設定変更不可にします。現存するプロパティの値は、書き込み可能である限り変更できます。

{{EmbedInteractiveExample("pages/js/object-seal.html")}}

## 構文

```
Object.seal(obj)
```

### 引数

- `obj`
  - : 封印するオブジェクトです。

### 返値

封印されたオブジェクトです。

## 解説

既定では、オブジェクトは{{jsxref("Object.isExtensible()", "拡張可能", "", 1)}} (新しいプロパティを追加できる状態) です。オブジェクトを封印することで、新しいオブジェクトの追加を抑制し、すべての既存のプロパティを設定変更を不可にします。これは、オブジェクトにあるプロパティ一式を固定かつ不変にする効果があります。プロパティを設定変更不可にすることで、データプロパティからアクセサプロパティへの変換やその逆を抑制しますが、データプロパティの値の変更は抑制しません。封印されたオブジェクトでプロパティの削除や追加、あるいはデータプロパティからアクセサプロパティへの変換およびその逆を試みると、暗黙的あるいは {{jsxref("TypeError")}} エラーを発生させて (もっとも一般的には {{jsxref("Strict_mode", "strict mode", "", 1)}} において、ただしこれに限定はされません) 失敗します。

プロトタイプチェインには手をつけず、そのままにします。ただし、[`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) プロパティは同様に封印されます。

### Object.freeze() との比較

{{jsxref("Object.freeze()")}} で凍結されたオブジェクトに存在するプロパティは不変になります。 `Object.seal()` で封印されたオブジェクトに存在するプロパティを変更することができます。

## 例

### Object.seal の使用

```js
var obj = {
  prop: function () {},
  foo: "bar",
};

// 新しいプロパティは追加でき、既存のプロパティは変更や削除ができます。
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// 封印されたオブジェクトで、プロパティの値の変更は依然としてできます。
obj.foo = "quux";

// しかし、データプロパティからアクセサプロパティの変換やその逆はできません。
Object.defineProperty(obj, "foo", {
  get: function () {
    return "g";
  },
}); // TypeError が発生

// プロパティの値の変更を除き、あらゆる変更が失敗します。
obj.quaxxor = "the friendly duck";
// 暗黙的にプロパティは追加されません。
delete obj.foo;
// 暗黙的にプロパティは削除されません。

// また、 strict モードではこれらの試みに対して TypeErrors が発生します。
function fail() {
  "use strict";
  delete obj.foo; // TypeError が発生
  obj.sparky = "arf"; // TypeError が発生
}
fail();

// Object.defineProperty を用いて追加しようとしてもエラーが発生します
Object.defineProperty(obj, "ohai", {
  value: 17,
}); // TypeError が発生
Object.defineProperty(obj, "foo", {
  value: "eit",
}); // 既存のプロパティの値を変更
```

### 非オブジェクトの強制

ES5 では、このメソッドへの引数がオブジェクトではない場合 (プリミティブである場合)、 {{jsxref("TypeError")}} になります。 ES2015 では、オブジェクトではない引数は封印された通常のオブジェクトと同様に扱われ、単純にそれを返します。

```js
Object.seal(1);
// TypeError: 1 is not an object (ES5 code)

Object.seal(1);
// 1                             (ES2015 code)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.seal")}}

## 関連情報

- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
