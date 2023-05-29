---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`handler.apply()`** メソッドは、オブジェクトの `[[Call]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。関数呼び出しなどの操作で使用されます。

{{EmbedInteractiveExample("pages/js/proxyhandler-apply.html", "taller")}}

## 構文

```js-nolint
new Proxy(target, {
  apply(target, thisArg, argumentsList) {
  }
});
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
