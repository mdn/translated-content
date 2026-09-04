---
title: Reflect.setPrototypeOf()
short-title: setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Reflect.setPrototypeOf()`** は静的メソッドで、{{jsxref("Object.setPrototypeOf()")}} と同様ですが、論理値 ({{jsxref("Boolean")}}) を返す点が異なります。指定されたオブジェクトのプロトタイプ（すなわち内部の `[[Prototype]]` プロパティ）を設定します。

{{InteractiveExample("JavaScript デモ: Reflect.setPrototypeOf()")}}

```js interactive-example
const object1 = {};

console.log(Reflect.setPrototypeOf(object1, Object.prototype));
// 予想される結果: true

console.log(Reflect.setPrototypeOf(object1, null));
// 予想される結果: true

const object2 = {};

console.log(Reflect.setPrototypeOf(Object.freeze(object2), null));
// 予想される結果: false
```

## 構文

```js-nolint
Reflect.setPrototypeOf(target, prototype)
```

### 引数

- `target`
  - : プロトタイプを設定する対象のオブジェクトです。
- `prototype`
  - : オブジェクトの新しいプロトタイプ (オブジェクトまたは [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)) です。

### 返値

プロトタイプが正常に設定されたかどうかを示す論理値 ({{jsxref("Boolean")}}) です。

### 例外

- {{jsxref("TypeError")}}
  - : `target` がオブジェクトではない場合、または `prototype` がオブジェクトでも [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) でもない場合。

## 解説

`Reflect.setPrototypeOf()` は、オブジェクトのプロトタイプを設定する反射的な意味づけを提供します。ごく基本的なレベルでは、プロトタイプの設定は論理値を返します（[プロキシハンドラー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf)の場合と同様です）。{{jsxref("Object.setPrototypeOf()")}} はほぼ同じ意味づけを提供しますが、結果が `false`（操作が失敗した）の場合、{{jsxref("TypeError")}} が発生します。一方、`Reflect.setPrototypeOf()` は結果を直接返します。

`Reflect.setPrototypeOf()` は、`target` の `[[SetPrototypeOf]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) を呼び出します。

## 例

### Reflect.setPrototypeOf() の使用

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// オブジェクトの [[Prototype]] は null に変更できる。
Reflect.setPrototypeOf({}, null); // true

// 対象が拡張できない場合、false を返す。
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// プロトタイプチェーンが循環する場合、false を返す。
const target = {};
const proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Reflect.setPrototypeOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`handler.setPrototypeOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf)
