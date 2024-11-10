---
title: Object.isFrozen()
slug: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

**`Object.isFrozen()`** はオブジェクトが{{jsxref("Object/freeze", "凍結されている", "", 1)}}かどうかを判定します。

{{EmbedInteractiveExample("pages/js/object-isfrozen.html")}}

## 構文

```js-nolint
Object.isFrozen(obj)
```

### 引数

- `obj`
  - : 確認したいオブジェクトです。

### 返値

論理値で、与えられたオブジェクトが凍結されているかどうかを示します。

## 解説

オブジェクトが凍結状態 (frozen) とは、オブジェクトが[拡張可能](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)ではなく、すべてのプロパティは構成不可であり、そしてすべてのデータプロパティ（これはゲッターやセッターコンポーネントを持つアクセサープロパティ以外のものを指します）が書き込み不可である場合です。

## 例

### Object.isFrozen の使用

```js
// 新しいオブジェクトは拡張可能であるので、凍結されていません
Object.isFrozen({}); // false

// 拡張可能ではない空のオブジェクトは、他に何もしなくても
// 凍結されています
const vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen); // true

// プロパティをひとつ持つ新しいオブジェクトも拡張可能であり、
// それゆえ凍結されていません
const oneProp = { p: 42 };
Object.isFrozen(oneProp); // false

// オブジェクトを拡張不可にしても、それは凍結されません
// なぜなら、まだプロパティが設定変更可能
// (かつ書き込み可能) であるからです
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp); // false

// ...しかしプロパティを削除すると、そのオブジェクトは
// 他に何もしなくても凍結されます
delete oneProp.p;
Object.isFrozen(oneProp); // true

// 書き込み不可であるが設定変更可能なプロパティを持つ、
// 拡張不可のオブジェクトは、凍結されていません
const nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", {
  writable: false,
}); // 書き込み不可にします
Object.isFrozen(nonWritable); // false

// プロパティを構成不可にすると、
// オブジェクトは凍結されます
Object.defineProperty(nonWritable, "e", {
  configurable: false,
}); // 構成不可にします
Object.isFrozen(nonWritable); // true

// 構成不可であるが書き込み可能なプロパティを持つ、
// 拡張不可のオブジェクトは、やはり凍結されていません
const nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", {
  configurable: false,
});
Object.isFrozen(nonConfigurable); // false

// プロパティを書き込み不可にすると、オブジェクトは
// 凍結されます
Object.defineProperty(nonConfigurable, "release", {
  writable: false,
});
Object.isFrozen(nonConfigurable); // true

// 設定変更可能なアクセサープロパティを持つ拡張不可の
// オブジェクトは、凍結されていません
const accessor = {
  get food() {
    return "yum";
  },
};
Object.preventExtensions(accessor);
Object.isFrozen(accessor); // false

// プロパティを構成不可にすると、オブジェクトは凍結されます
Object.defineProperty(accessor, "food", {
  configurable: false,
});
Object.isFrozen(accessor); // true

// なお、オブジェクトを凍結するもっとも簡単な方法は、
// Object.freeze を呼び出すことです
const frozen = { 1: 81 };
Object.isFrozen(frozen); // false
Object.freeze(frozen);
Object.isFrozen(frozen); // true

// 定義によると、凍結されたオブジェクトは拡張不可です
Object.isExtensible(frozen); // false

// また、凍結されたオブジェクトは封印されています
Object.isSealed(frozen); // true
```

### オブジェクト以外の型強制

ES5 では、このメソッドの引数がオブジェクトではない場合（プリミティブの場合）、 {{jsxref("TypeError")}} が発生します。 ES2015 以降では、オブジェクトでない引数は、それが凍結された通常のオブジェクトであるかのように扱われ、単に `true` を返します。

```js
Object.isFrozen(1);
// TypeError: 1 is not an object (ES5 code)

Object.isFrozen(1);
// true                          (ES2015 code)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
