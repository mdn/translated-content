---
title: Reflect.defineProperty()
short-title: defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Reflect.defineProperty()`** は静的メソッドで、{{jsxref("Object.defineProperty()")}} と似ていますが、論理値 ({{jsxref("Boolean")}}) を返します。

{{InteractiveExample("JavaScript デモ: Reflect.defineProperty()")}}

```js interactive-example
const object = {};

if (Reflect.defineProperty(object, "foo", { value: 42 })) {
  console.log("foo created!");
  // 予想される結果: "foo created!"
} else {
  console.log("problem creating foo");
}

console.log(object.foo);
// 予想される結果: 42
```

## 構文

```js-nolint
Reflect.defineProperty(target, propertyKey, attributes)
```

### 引数

- `target`
  - : プロパティを定義する対象のオブジェクトです。
- `propertyKey`
  - : 定義または修正をするプロパティ名です。
- `attributes`
  - : 定義または修正されているプロパティのための属性です。

### 返値

プロパティの定義に成功したかどうかを示す論理値です。

### 例外

- {{jsxref("TypeError")}}
  - : `target` がオブジェクトではなかった場合。

## 解説

`Reflect.defineProperty()` は、オブジェクトに独自のプロパティを定義する反射的な意味付けを指定します。ごく基本的なレベルでは、プロパティの定義は論理値を返します（[プロキシーハンドラー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)の場合と同様です）。{{jsxref("Object.defineProperty()")}} はほぼ同じ意味づけを提供しますが、結果が `false`（操作が失敗した）の場合、{{jsxref("TypeError")}} が発生します。一方、`Reflect.defineProperty()` は結果を直接返します。

多くの組み込み操作もオブジェクト上に独自のプロパティを定義することができます。プロパティを定義することと[設定](/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set)することの最も重要な違いは、[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)が呼び出されない点です。例えば、[クラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)は、セッターを呼び出さずにインスタンスに直接プロパティを定義します。

```js
class B extends class A {
  set a(v) {
    console.log("Setter called");
  }
} {
  a = 1; // 何もログ出力されない
}
```

`Reflect.defineProperty()` は、`target` の `[[DefineOwnProperty]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) を呼び出します。

## 例

### Reflect.defineProperty() の使用

```js
const obj = {};
Reflect.defineProperty(obj, "x", { value: 7 }); // true
console.log(obj.x); // 7
```

### プロパティ定義が成功したかチェックする

成功してオブジェクトを返すか、失敗して {{jsxref("TypeError")}} をスローする {{jsxref("Object.defineProperty()")}} を使う場合、プロパティの定義中に発生する何らかの例外を捕捉するには、[`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) ブロックを使用します。

`Reflect.defineProperty` は真偽値の成功結果を返すので、[`if...else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) ブロックを使用することができます。

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Reflect.defineProperty` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.defineProperty()")}}
- [`handler.defineProperty()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)
