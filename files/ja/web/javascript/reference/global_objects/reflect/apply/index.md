---
title: Reflect.apply()
short-title: apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Reflect.apply()`** は静的メソッドで、指定された引数とともに対象となる関数を呼び出します。

{{InteractiveExample("JavaScript デモ: Reflect.apply()", "taller")}}

```js interactive-example
console.log(Reflect.apply(Math.floor, undefined, [1.75]));
// 予想される結果: 1

console.log(
  Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]),
);
// 予想される結果: "hello"

console.log(
  Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index,
);
// 予想される結果: 4

console.log(Reflect.apply("".charAt, "ponies", [3]));
// 予想される結果: "i"
```

## 構文

```js-nolint
Reflect.apply(target, thisArgument, argumentsList)
```

### 引数

- `target`
  - : 呼び出し対象の関数。
- `thisArgument`
  - : `target` の呼び出す際の `this` 値を提供する。
- `argumentsList`
  - : `target` を呼び出す際の引数を指定する[配列風オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)。

### 返値

指定された `target` 値と引数の条件で対象の関数を呼び出したときの結果です。

### 例外

- {{jsxref("TypeError")}}
  - : `target` が関数でない場合、または `argumentsList` がオブジェクトでない場合に発生します。

## 解説

`Reflect.apply()` は関数呼び出しの反射的意味づけを提供します。つまり、`Reflect.apply(target, thisArgument, argumentsList)` は意味的に次と等価です。

```js
Math.floor.apply(null, [1.75]);
Reflect.apply(Math.floor, null, [1.75]);
```

違いは以下の点だけです。

- `Reflect.apply()` は、`this` コンテキストの代わりに、呼び出す関数を `target` 引数として取ります。
- `Reflect.apply()` は、`argumentsList` が省略された場合にデフォルトで引数なしの呼び出しを行わず、例外が発生します。

`Reflect.apply()` は `target` の `[[Call]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出します。

## 例

### Reflect.apply() の使用

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Reflect.apply` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-reflect)
- [es-shims による `Reflect.apply` のポリフィル](https://www.npmjs.com/package/reflect-apply)
- {{jsxref("Reflect")}}
- {{jsxref("Function.prototype.apply()")}}
- [`handler.apply()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply)
