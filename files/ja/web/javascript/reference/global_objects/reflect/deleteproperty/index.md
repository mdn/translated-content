---
title: Reflect.deleteProperty()
short-title: deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Reflect.deleteProperty()`** は静的メソッドで、{{jsxref("Operators/delete", "delete")}} 演算子と同様に実装されていますが、関数として動作します。オブジェクトからプロパティを削除します。

{{InteractiveExample("JavaScript デモ: Reflect.deleteProperty()", "taller")}}

```js interactive-example
const object = {
  foo: 42,
};

Reflect.deleteProperty(object, "foo");

console.log(object.foo);
// 予想される結果: undefined

const array = [1, 2, 3, 4, 5];
Reflect.deleteProperty(array, "3");

console.log(array);
// 予想される結果: Array [1, 2, 3, <1 empty slot>, 5]
```

## 構文

```js-nolint
Reflect.deleteProperty(target, propertyKey)
```

### 引数

- `target`
  - : プロパティを定義する対象のオブジェクトです。
- `propertyKey`
  - : 定義または修正をするプロパティ名です。

### 返値

プロパティの定義に成功したかどうかを示す論理値です。

### 例外

- {{jsxref("TypeError")}}
  - : `target` がオブジェクトではなかった場合。

## 解説

`Reflect.deleteProperty()` は、`delete` 演算子の反射的意味づけを提供します。つまり、`Reflect.deleteProperty(target, propertyKey)` は意味的に以下と同等です。

```js
delete target.propertyKey;
```

ごく基本的なレベルでは、プロパティの削除は論理値を返します（[プロキシーハンドラー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)の場合と同様です）。`Reflect.deleteProperty()` は結果を直接返しますが、`delete` は結果が `false` の場合、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) では {{jsxref("TypeError")}} が発生します。厳格モードでない場合は、`delete` と `Reflect.deleteProperty()` の動作は同じです。

`Reflect.deleteProperty()` は、`target` の `[[Delete]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) を呼び出します。

## 例

### Reflect.deleteProperty() の使用

```js
const obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x"); // true
console.log(obj); // { y: 2 }

const arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "3"); // true
console.log(arr); // [1, 2, 3, <1 empty slot>, 5]

// そのようなプロパティが存在しない場合に true を返す
Reflect.deleteProperty({}, "foo"); // true

// プロパティが設定不可の場合、false を返す
Reflect.deleteProperty(Object.freeze({ foo: 1 }), "foo"); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Reflect.deleteProperty` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete)
- [`handler.deleteProperty()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)
