---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
---

{{JSRef}}

**`handler.set()`** はプロパティの値を設定することに対するトラップです。

{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}

## 構文

```
const p = new Proxy(target, {
  set: function(target, property, value, receiver) {
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

  - : 割り当てがもともと行われていたオブジェクトです。これは通常、プロキシそのものです。しかし、 `set()` ハンドラーは内部的にプロトタイプチェーンや様々な他の方法経由で呼び出されます。

    > **メモ:** **例:** スクリプト上に `obj.name = "jen"` があり、`obj` はプロキシではなく、独自の `.name` プロパティを持っていません。しかし、プロトタイプチェーンでプロキシを持っています。その場合、そのプロキシの `set()` ハンドラが呼ばれて、 `obj` は receiver として渡されます。

### 返値

`set()` メソッドは真偽値を返します。

- `true` を返すと割り当てが成功したことを示します。
- `set()` メソッドの返値が `false` で、厳格モードで割り当てが起こった場合、 {{jsxref("TypeError")}} が発生します。

## 解説

**`handler.set`** メソッドはプロパティの値を設定することに対するトラップです。

### 介入

このトラップは下記の操作に介入できます。

- プロパティの割り当て: `proxy[foo] = bar` や `proxy.foo = bar`
- 継承したプロパティの割り当て: `Object.create(proxy)[foo] = bar`
- {{jsxref("Reflect.set()")}}

### 不変条件

以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。

- 対応するターゲットオブジェクトのプロパティが書き込み不可かつ設定不可のデータプロパティの場合、プロパティの値と異なる値に変更することはできません。
- 対応するターゲットオブジェクトのプロパティが `[[Set]]` 属性として `undefined` を持つ設定不可のアクセスプロパティの場合、プロパティの値を設定することはできません。
- 厳格モードでは、 `set` ハンドラーから `false` を返す場合、 {{jsxref("TypeError")}} 例外をスローします。

## 例

### プロパティ値の設定のトラップ

次のコードではプロパティの値の設定をトラップします。

```js
const p = new Proxy({}, {
  set: function(target, prop, value, receiver) {
    target[prop] = value;
    console.log('property set: ' + prop + ' = ' + value);
    return true;
  }
})

console.log('a' in p);  // false

p.a = 10;               // "property set: a = 10"
console.log('a' in p);  // true
console.log(p.a);       // 10
```

## 仕様書

| 仕様書                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver', '[[Set]]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy.handler.set")}}

## 関連情報

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Reflect.set()")}}
