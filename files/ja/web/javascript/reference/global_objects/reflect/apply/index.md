---
title: Reflect.apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
---

{{JSRef}}

静的な **`Reflect.apply()`** メソッドは、指定された引数とともに対象となる関数を呼び出します。

{{EmbedInteractiveExample("pages/js/reflect-apply.html")}}

## 構文

```
Reflect.apply(target, thisArgument, argumentsList)
```

### 引数

- `target`
  - : 呼び出し対象の関数。
- `thisArgument`
  - : `target` の呼び出す際の `this` 値を提供する。
- `argumentsList`
  - : `target` と一緒に呼び出す引数を指定する配列風オブジェクト。

### 返値

指定された `target` 値と引数の条件で対象の関数を呼び出したときの結果です。

### 例外

{{jsxref("TypeError")}}: `target` が呼び出せない場合。

## 解説

ES5 では、ふつう {{jsxref("Function.prototype.apply()")}} メソッドを使用することで、指定された `this` の値と `arguments` で配列 (または [配列風オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)) により引数を指定することで、関数を呼び出すことができます。

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

`Reflect.apply()` を使うと、それほど冗長ではなく理解しやすくなります。

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

{{Compat("javascript.builtins.Reflect.apply")}}

## 関連情報

- {{jsxref("Reflect")}}
- {{jsxref("Function.prototype.apply()")}}
