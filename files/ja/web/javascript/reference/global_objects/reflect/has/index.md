---
title: Reflect.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/has
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Reflect.has()`** は静的メソッドで、[`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) 演算子と似ていますが、関数として存在します。

{{InteractiveExample("JavaScript デモ: Reflect.has()")}}

```js interactive-example
const object = {
  property1: 42,
};

console.log(Reflect.has(object, "property1"));
// 予想される結果: true

console.log(Reflect.has(object, "property2"));
// 予想される結果: false

console.log(Reflect.has(object, "toString"));
// 予想される結果: true
```

## 構文

```js-nolint
Reflect.has(target, propertyKey)
```

### 引数

- `target`
  - : プロパティを探す対象のオブジェクト。
- `propertyKey`
  - : チェックするプロパティ名。

### 返値

対象がプロパティを持つかどうかを示す論理値 ({{jsxref("Boolean")}})。

### 例外

- {{jsxref("TypeError")}}
  - : `target` がオブジェクトではない場合に発生します。

## 解説

`Reflect.has()` は、オブジェクトにプロパティが存在するかどうかを調べる反射的意味づけを提供します。つまり、`Reflect.has(target, propertyKey)` は意味づけ的に次のものと同等です。

```js
propertyKey in target;
```

`Reflect.has()` は、`target` の `[[HasProperty]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) を呼び出します。

## 例

### Reflect.has() の使用

```js
Reflect.has({ x: 0 }, "x"); // true
Reflect.has({ x: 0 }, "y"); // false

// プロトタイプチェーンのプロパティがあるため、true が返る
Reflect.has({ x: 0 }, "toString");

// Proxy with .has() handler method
obj = new Proxy(
  {},
  {
    has(t, k) {
      return k.startsWith("door");
    },
  },
);
Reflect.has(obj, "doorbell"); // true
Reflect.has(obj, "dormitory"); // false
```

`Reflect.has` は継承されたプロパティについて `true` を返し、これは [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)と同様です。

```js
const a = { foo: 123 };
const b = { __proto__: a };
const c = { __proto__: b };
// The prototype chain is: c -> b -> a
Reflect.has(c, "foo"); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Reflect.has` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in)
- [`handler.has()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has)
