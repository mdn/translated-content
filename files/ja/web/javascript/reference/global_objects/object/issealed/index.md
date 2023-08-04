---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
---

{{JSRef}}

**`Object.isSealed()`** メソッドは、オブジェクトが封印されているかどうかを判定します。

{{EmbedInteractiveExample("pages/js/object-issealed.html")}}

## 構文

```
Object.isSealed(obj)
```

### 引数

- `obj`
  - : 確認したいオブジェクトです。

### 返値

与えられたオブジェクトが封印されているかどうかを示す {{jsxref("Boolean")}}。

## 解説

オブジェクトが封印されている場合は `true` が、そうでない場合は `false` が返ります。オブジェクトが{{jsxref("Object.isExtensible", "拡張不可", "", 1)}}かつすべてのプロパティが設定変更不可であり、それゆえ削除できない場合 (ただし書き込み不可である必要はありません) 場合に、封印されているとなります。

## 例

### Object.isSealed の使用

```js
// 既定でオブジェクトは封印されていません
var empty = {};
Object.isSealed(empty); // === false

// 空のオブジェクトを拡張不可にすると、
// そのまま封印状態になります
Object.preventExtensions(empty);
Object.isSealed(empty); // === true

// 空でないオブジェクトでは、そのプロパティをすべて設定変更不可にしない限り
// 上記と同じにはなりません
var hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // === false

// そこですべてのプロパティを設定変更不可にすると、
// オブジェクトは封印状態になります
Object.defineProperty(hasProp, "fee", {
  configurable: false,
});
Object.isSealed(hasProp); // === true

// オブジェクトを封印する最も簡単な方法は、
// もちろん Object.seal です
var sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // === true

// 封印されたオブジェクトはその定義により、拡張できません
Object.isExtensible(sealed); // === false

// 封印されたオブジェクトは凍結されているかも
// しれませんが、必ずしもそうではありません
Object.isFrozen(sealed); // === true
// すべてのプロパティが書き込み不能でもあります

var s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // === false
// "p" は依然書き込み可能です

var s3 = Object.seal({
  get p() {
    return 0;
  },
});
Object.isFrozen(s3); // === true
// アクセサプロパティでは設定変更が可能かという事柄だけになります
```

### オブジェクト以外の型強制

ES5 では、このメソッドの引数がオブジェクトではない場合 (プリミティブの場合)、 {{jsxref("TypeError")}} が発生します。 ES2015 以降では、オブジェクトでない引数は、それが封印された通常のオブジェクトであるかのように扱われ、単に `true` それを返します。

```js
Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.isSealed")}}

## 関連情報

- {{jsxref("Object.seal()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
