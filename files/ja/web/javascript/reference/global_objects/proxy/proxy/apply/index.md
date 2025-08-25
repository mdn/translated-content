---
title: handler.apply()
short-title: apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`handler.apply()`** メソッドは、オブジェクトの `[[Call]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。関数呼び出しなどの操作で使用されます。

{{InteractiveExample("JavaScript デモ: handler.apply()", "taller")}}

```js interactive-example
function sum(a, b) {
  return a + b;
}

const handler = {
  apply(target, thisArg, argumentsList) {
    console.log(`Calculate sum: ${argumentsList}`);
    // 予想される結果: "Calculate sum: 1,2"

    return target(argumentsList[0], argumentsList[1]) * 10;
  },
};

const proxy = new Proxy(sum, handler);

console.log(sum(1, 2));
// 予想される結果: 3
console.log(proxy(1, 2));
// 予想される結果: 30
```

## 構文

```js-nolint
new Proxy(target, {
  apply(target, thisArg, argumentsList) {
  }
})
```

### 引数

次の引数が `apply()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクト
- `thisArg`
  - : この呼び出しに対する `this` 引数
- `argumentsList`
  - : この呼び出しに対する引数リスト

### 返値

`apply()` メソッドはどんな値でも返すことができます。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- 関数呼び出し: `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} and {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

他にも、`[[Call]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、トラップが呼び出されると {{jsxref("TypeError")}} が発生します。

- `target` は呼び出し可能である必要があります。つまり関数オブジェクトでなければなりません。

## 例

### 関数呼び出しのトラップ

次のコードでは、関数呼び出しをトラップします。

```js
const p = new Proxy(function () {}, {
  apply(target, thisArg, argumentsList) {
    console.log(`called: ${argumentsList}`);
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  },
});

console.log(p(1, 2, 3)); // "called: 1,2,3"
// 6
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}
