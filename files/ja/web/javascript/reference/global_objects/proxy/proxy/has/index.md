---
title: handler.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`handler.has()`** は、オブジェクトの `[[HasProperty]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Operators/in", "in")}} 演算子などの操作で使用されます。

{{InteractiveExample("JavaScript デモ: handler.has()", "taller")}}

```js interactive-example
const handler = {
  has(target, key) {
    if (key[0] === "_") {
      return false;
    }
    return key in target;
  },
};

const monster = {
  _secret: "easily scared",
  eyeCount: 4,
};

const proxy = new Proxy(monster, handler);
console.log("eyeCount" in proxy);
// 予想される結果: true

console.log("_secret" in proxy);
// 予想される結果: false

console.log("_secret" in monster);
// 予想される結果: true
```

## 構文

```js-nolint
new Proxy(target, {
  has(target, property) {
  }
})
```

### 引数

次の引数は `has()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。
- `property`
  - : 文字列または {{jsxref("Symbol")}} で、プロパティ名を表します。

### 返値

`has()` メソッドは、プロパティが存在するかどうかの論理値 ({{jsxref("Boolean")}}) を返す必要があります。それ以外の値は[論理値に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#論理型への変換)。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) 演算子: `foo in proxy`
- [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) チェック: `with(proxy) { (foo); }`
- {{jsxref("Reflect.has()")}}

他にも、`[[HasProperty]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

プロキシーの `[[HasProperty]]` 内部メソッドは、ハンドラー定義が次の不変条件のいずれかに違反する場合、 {{jsxref("TypeError")}} が発生します。

- プロパティが対象とするオブジェクトの構成不可な自己プロパティとして存在する場合、そのプロパティを存在しないとして報告することはできません。つまり、{{jsxref("Reflect.getOwnPropertyDescriptor()")}} が `target` のプロパティに対して `configurable: false` を返す場合、トラップは `true` を返す必要があります。
- プロパティは、対象とするオブジェクトの自分自身でプロパティとして存在し、かつ対象とするオブジェクトが拡張可能でない場合、存在しないとして報告できません。つまり、{{jsxref("Reflect.isExtensible()")}} が `target` で `false` を返す場合、かつ {{jsxref("Reflect.getOwnPropertyDescriptor()")}} が `target` のプロパティのプロパティ記述子を返す場合、トラップは `true` を返さなければなりません。

## 例

### in 演算子のトラップ

次のコードでは {{jsxref("Operators/in", "in")}} 演算子をトラップします。

```js
const p = new Proxy(
  {},
  {
    has(target, prop) {
      console.log(`called: ${prop}`);
      return true;
    },
  },
);

console.log("a" in p);
// "called: a"
// true
```

次のコードでは不変条件に違反します。

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);

const p = new Proxy(obj, {
  has(target, prop) {
    return false;
  },
});

"a" in p; // TypeError is thrown
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Reflect.has()")}}
