---
title: handler.preventExtensions()
short-title: preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`handler.preventExtensions()`** はメソッドは、オブジェクトの `[[PreventExtensions]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。 {{jsxref("Object.preventExtensions()")}} のような操作で使用されます。

{{InteractiveExample("JavaScript デモ: handler.preventExtensions()", "taller")}}

```js interactive-example
const monster = {
  canEvolve: true,
};

const handler = {
  preventExtensions(target) {
    target.canEvolve = false;
    Object.preventExtensions(target);
    return true;
  },
};

const proxy = new Proxy(monster, handler);

console.log(monster.canEvolve);
// 予想される結果: true

Object.preventExtensions(proxy);

console.log(monster.canEvolve);
// 予想される結果: false
```

## 構文

```js-nolint
new Proxy(target, {
  preventExtensions(target) {
  }
})
```

### 引数

次の引数は `preventExtensions()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。

### 返値

`preventExtensions()` メソッドは、操作が成功したかどうかを示す {{jsxref("Boolean")}} を返す必要があります。それ以外の値は[論理値に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#論理型への変換)。

多くの操作（{{jsxref("Object.preventExtensions()")}} を記載する）は、内部メソッド `[[PreventExtensions]]` が `false` を返した場合、{{jsxref("TypeError")}} が発生します。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.freeze()")}}

他にも、`[[PreventExtensions]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

プロキシーの `[[PreventExtensions]]` 内部メソッドでは、ハンドラーの定義が以下のいずれかの不変条件に違反する場合、{{jsxref("TypeError")}} が発生します。

- 結果は、ターゲットオブジェクトに対して `handler.preventExtensions()` を呼び出した後、 {{jsxref("Reflect.isExtensible()")}} が `false` を返す場合のみ `true` になります。

## 例

### preventExtensions のトラップ

次のコードでは {{jsxref("Object.preventExtensions()")}} をトラップします。

```js
const p = new Proxy(
  {},
  {
    preventExtensions(target) {
      console.log("called");
      Object.preventExtensions(target);
      return true;
    },
  },
);

console.log(Object.preventExtensions(p));
// "called"
// false
```

以下のコードは不変条件に違反しています。

```js example-bad
const p = new Proxy(
  {},
  {
    preventExtensions(target) {
      return true;
    },
  },
);

Object.preventExtensions(p); // TypeError is thrown
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
