---
title: Reflect.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Reflect.get()`** は静的メソッドで、[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)構文と同様に実装されていますが、関数として存在します。

{{InteractiveExample("JavaScript デモ: Reflect.get()")}}

```js interactive-example
const object = {
  x: 1,
  y: 2,
};

console.log(Reflect.get(object, "x"));
// 予想される結果: 1

const array = ["zero", "one"];

console.log(Reflect.get(array, 1));
// 予想される結果: "one"
```

## 構文

```js-nolint
Reflect.get(target, propertyKey)
Reflect.get(target, propertyKey, receiver)
```

### 引数

- `target`
  - : プロパティを取得する対象のオブジェクト。
- `propertyKey`
  - : 設定するプロパティ名。
- `receiver` {{optional_inline}}
  - : ゲッターがあった場合、 `target` への呼び出しで使用する `this` の値を提供します。

### 返値

プロパティの値です。

### 例外

- {{jsxref("TypeError")}}
  - : `target` がオブジェクトではなかった場合。

## 解説

`Reflect.get()` は[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)の反射的意味づけを提供します。つまり、`Reflect.get(target, propertyKey, receiver)` は意味的に次のものと同等です：

```js
target[propertyKey];
```

通常のプロパティアクセスでは、`target` と `receiver` は明らかに同一のオブジェクトであることに注意してください。

`Reflect.get()` は、`target` の `[[Get]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) を呼び出します。

## 例

### Reflect.get() の使用

```js
// オブジェクト
const obj1 = { x: 1, y: 2 };
Reflect.get(obj1, "x"); // 1

// 配列
Reflect.get(["zero", "one"], 1); // "one"

// 取得ハンドラー付きプロキシー
const obj2 = new Proxy(
  { p: 1 },
  {
    get(t, k, r) {
      return `${k}bar`;
    },
  },
);
Reflect.get(obj2, "foo"); // "foobar"

// 取得ハンドラー及びレシーバー付きプロキシー
const obj3 = new Proxy(
  { p: 1, foo: 2 },
  {
    get(t, prop, receiver) {
      return `${receiver[prop]}bar`;
    },
  },
);
Reflect.get(obj3, "foo", { foo: 3 }); // "3bar"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Reflect.get` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`handler.get()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get)
