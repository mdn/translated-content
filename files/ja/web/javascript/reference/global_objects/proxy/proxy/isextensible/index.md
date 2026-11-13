---
title: handler.isExtensible()
short-title: isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`handler.isExtensible()`** は、オブジェクトの `[[IsExtensible]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Object.isExtensible()")}} などの操作で使用されます。

{{InteractiveExample("JavaScript デモ: handler.isExtensible()", "taller")}}

```js interactive-example
const monster = {
  canEvolve: true,
};

const handler = {
  isExtensible(target) {
    return Reflect.isExtensible(target);
  },
  preventExtensions(target) {
    target.canEvolve = false;
    return Reflect.preventExtensions(target);
  },
};

const proxy = new Proxy(monster, handler);

console.log(Object.isExtensible(proxy));
// 予想される結果: true

console.log(monster.canEvolve);
// 予想される結果: true

Object.preventExtensions(proxy);

console.log(Object.isExtensible(proxy));
// 予想される結果: false

console.log(monster.canEvolve);
// 予想される結果: false
```

## 構文

```js-nolint
new Proxy(target, {
  isExtensible(target) {
  }
})
```

### 引数

次の引数は `isExtensible()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。

### 返値

`isExtensible()` メソッドは、対象オブジェクトが拡張可能かどうかを示す論理値 ({{jsxref("Boolean")}}) を返す必要があります。それ以外の値は[論理型に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#論理型への変換)。
`isExtensible` メソッドは論理値を返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

他にも、`[[IsExtensible]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

プロキシーの `[[IsExtensible]]` 内部メソッドは、ハンドラー定義が以下の不変条件のいずれかに違反する場合、{{jsxref("TypeError")}} が発生します。

- 結果は、対象とするオブジェクトに対して {{jsxref("Reflect.isExtensible()")}} を実行した結果である必要があります。

## 例

### getOwnPropertyNames のトラップ

次のコードでは {{jsxref("Object.isExtensible()")}} をトラップします。

```js
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      console.log("called");
      return true;
    },
  },
);

console.log(Object.isExtensible(p));
// "called"
// true
```

次のコードでは不変条件に違反します。

```js example-bad
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      return false;
    },
  },
);

Object.isExtensible(p); // TypeError が発生
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}
- {{jsxref("Reflect.preventExtensions()")}}
