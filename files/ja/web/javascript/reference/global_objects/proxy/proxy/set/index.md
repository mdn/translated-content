---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`handler.set()`** は、オブジェクトの `[[Set]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。プロパティの値を設定することに対するトラップです。

{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}

## 構文

```js-nolint
new Proxy(target, {
  set(target, property, value, receiver) {
  }
});
```

### 引数

次の引数は `set()` メソッドに渡されます。`this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。
- `property`
  - : プロパティを設定する名前または {{jsxref("Symbol")}} です。
- `value`
  - : 設定するプロパティの新しい値です。
- `receiver`

  - : 割り当てがもともと行われていたオブジェクトです。これは通常、プロキシーそのものです。しかし、 `set()` ハンドラーは内部的にプロトタイプチェーンや様々な他の方法経由で呼び出されます。

    例えば、スクリプト上に `obj.name = "jen"` があり、`obj` はプロキシーではなく、独自の `.name` プロパティを持っていません。しかし、プロトタイプチェーンでプロキシーを持っています。その場合、そのプロキシーの `set()` ハンドラーが呼ばれて、 `obj` はレシーバーとして渡されます。

### 返値

`set()` メソッドは論理値を返します。

- `true` を返すと割り当てが成功したことを示します。
- `set()` メソッドの返値が `false` で、厳格モードで割り当てが起こった場合、 {{jsxref("TypeError")}} が発生します。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- プロパティへの代入: `proxy[foo] = bar` や `proxy.foo = bar`
- {{jsxref("Reflect.set()")}}

他にも、`[[Set]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーで {{jsxref("TypeError")}} が発生します。

- 対応するターゲットオブジェクトのプロパティが書き込み不可かつ設定不可のデータプロパティの場合、プロパティの値と異なる値に変更することはできません。
- 対応するターゲットオブジェクトのプロパティが `[[Set]]` 属性として `undefined` を持つ設定不可のアクセスプロパティの場合、プロパティの値を設定することはできません。
- 厳格モードでは、`set()` ハンドラーから `false` を返す場合、 {{jsxref("TypeError")}} 例外が発生します。

## 例

### プロパティ値の設定のトラップ

次のコードではプロパティの値の設定をトラップします。

```js
const p = new Proxy(
  {},
  {
    set(target, prop, value, receiver) {
      target[prop] = value;
      console.log(`property set: ${prop} = ${value}`);
      return true;
    },
  },
);

console.log("a" in p); // false

p.a = 10; // "property set: a = 10"
console.log("a" in p); // true
console.log(p.a); // 10
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.set()")}}
