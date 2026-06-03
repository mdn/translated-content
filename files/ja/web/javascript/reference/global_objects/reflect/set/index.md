---
title: Reflect.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Reflect.set()`** は静的メソッドで、[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)および[代入構文](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)に似ていますが、関数として実装されています。

{{InteractiveExample("JavaScript デモ: Reflect.set()")}}

```js interactive-example
const object = {};
Reflect.set(object, "foo", 42);

console.log(object.foo);
// 予想される結果: 42

const array = ["duck", "duck", "duck"];
Reflect.set(array, 2, "goose");

console.log(array[2]);
// 予想される結果: "goose"
```

## 構文

```js-nolint
Reflect.set(target, propertyKey, value)
Reflect.set(target, propertyKey, value, receiver)
```

### 引数

- `target`
  - : プロパティを設定する対象のオブジェクト。
- `propertyKey`
  - : 設定するプロパティ名。
- `value`
  - : 設定する値。
- `receiver` {{optional_inline}}
  - : `target`の`propertyKey`に対するセッター呼び出しに指定される`this`の値です。指定され、かつ`target`が`propertyKey`のセッターを持たない場合、代わりに`receiver`にプロパティが設定されます。

### 返値

プロパティが成功裏に設定できたかどうかを示す論理値 ({{jsxref("Boolean")}})。

### 例外

- {{jsxref("TypeError")}}
  - : `target` がオブジェクトではない場合に発生します。

## 解説

`Reflect.set()` は、[プロパティアクセス](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors) の反射的意味づけを提供します。つまり、`Reflect.set(target, propertyKey, value, receiver)` は意味づけ的に次のものと同等です。

```js
target[propertyKey] = value;
```

通常のプロパティアクセスでは、`target` と `receiver` は明らかに同一のオブジェクトであることに注意してください。

`Reflect.set()` は、`target` の `[[Set]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) を呼び出します。

## 例

### Reflect.set() の使用

```js
// オブジェクト
const obj = {};
Reflect.set(obj, "prop", "value"); // true
obj.prop; // "value"

// 配列
const arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose"); // true
arr[2]; // "goose"

// 配列を切り詰められる。
Reflect.set(arr, "length", 1); // true
arr; // ["duck"]

// 引数が1つだけだと、プロパティキーと値は "undefined" になる。
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, "undefined");
// { value: undefined, writable: true, enumerable: true, configurable: true }
```

### target と receiver の違い

`target` と `receiver` が異なる場合、`Reflect.set` は `target` のプロパティ記述子を使用します（セッターを探したり、プロパティが書き込み可能かどうかの判定をしたりするため）。ただし、プロパティの設定は `receiver` に対して行います。

```js
const target = {};
const receiver = {};
Reflect.set(target, "a", 2, receiver); // true
// target は {}; receiver は { a: 2 }

const target = { a: 1 };
const receiver = {};
Reflect.set(target, "a", 2, receiver); // true
// target は { a: 1 }; receiver は { a: 2 }

const target = {
  set a(v) {
    this.b = v;
  },
};
const receiver = {};
Reflect.set(target, "a", 2, receiver); // true
// target は { a: [Setter] }; receiver は { b: 2 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Reflect.set` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`handler.set()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)
