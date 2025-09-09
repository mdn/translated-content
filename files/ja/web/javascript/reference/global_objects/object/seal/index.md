---
title: Object.seal()
short-title: seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Object.seal()`** は静的メソッドで、オブジェクトを封印します。オブジェクトを封印すると、[拡張を抑止し](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)、既存のすべてのプロパティを構成不可にします。封印されたオブジェクトは、固定されたプロパティ一式を持ちます。新しいプロパティを追加したり、既存のプロパティを除去したり、列挙可能性や構成可能性を変更したり、プロトタイプを再割り当てしたりすることはできません。既存のプロパティの値は、書き込み可能である限り変更することができます。 `seal()` は渡したオブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Object.seal()")}}

```js interactive-example
const object = {
  foo: 42,
};

Object.seal(object);
object.foo = 33;
console.log(object.foo);
// 予想される結果: 33

delete object.foo; // 封印時は削除不可
console.log(object.foo);
// 予想される結果: 33
```

## 構文

```js-nolint
Object.seal(obj)
```

### 引数

- `obj`
  - : 封印するオブジェクトです。

### 返値

封印されたオブジェクトです。

## 解説

オブジェクトを封印すると、[拡張を抑止し](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)、既存のすべての[プロパティの記述子](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description)を `configurable: false` に変更します。これは、オブジェクトにあるプロパティ一式を固定かつ不変にする効果があります。すべてのプロパティを構成不可にすることで、データプロパティからアクセサプロパティへの変換やその逆を抑制しますが、データプロパティの値の変更は抑制しません。封印されたオブジェクトでプロパティの削除や追加、あるいはデータプロパティからアクセサプロパティへの変換およびその逆をしようとすると、暗黙的に失敗するか、（一般的に{{jsxref("Strict_mode", "厳格モード", "", 1)}}においてですが、それに限らず） {{jsxref("TypeError")}} が発生して失敗します。

[プライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)はプロパティではなく、プロパティ記述子の概念がありません。プライベート要素は、オブジェクトが封印されているかどうかに関わらず、オブジェクトに追加したり除去したりすることはできません。

プロトタイプチェーンには手をつけず、そのままにします。ただし、[拡張の抑止](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)の影響により、 `[[Prototype]]` は再代入できません。

{{jsxref("Object.freeze()")}} とは異なり、 `Object.seal()` で封印されたオブジェクトは、書き込み可能である限り、既存のプロパティを変更することができます。

## 例

### Object.seal の使用

```js
const obj = {
  prop() {},
  foo: "bar",
};

// 新しいプロパティが追加でき、既存のプロパティは変更や削除ができる
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

const o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// 封印されたオブジェクトでも、プロパティの値は変更できる
ｚobj.foo = "quux";

// しかし、データプロパティからアクセサプロパティの変換やその逆はできません。
Object.defineProperty(obj, "foo", {
  get() {
    return "g";
  },
}); // TypeError が発生

// プロパティの値の変更を除き、あらゆる変更が失敗します。
obj.quaxxor = "the friendly duck";
// 暗黙的にプロパティは追加されません。
delete obj.foo;
// 暗黙的にプロパティは削除されません。

// また、厳格モードではこれらの試みに対して TypeError が発生します。
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

{{Compat}}

## 関連情報

- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
