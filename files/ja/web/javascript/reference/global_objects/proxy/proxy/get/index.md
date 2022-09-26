---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
---

{{JSRef}}

**`handler.get()`** はプロパティの値を取得することに対するトラップです。

{{EmbedInteractiveExample("pages/js/proxyhandler-get.html", "taller")}}

## 構文

```
const p = new Proxy(target, {
  get: function(target, property, receiver) {
  }
});
```

### 引数

次の引数が `get()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクト
- `property`
  - : 取得するプロパティの名称
- `receiver`
  - : proxy、または proxy から継承するオブジェクトのどちらか

### 返値

`get()` メソッドはどんな値でも返すことができます。

## 解説

**`handler.get()`** メソッドはプロパティ値を取得することに対するトラップです。

### 介入

このトラップは下記の操作に介入できます。

- プロパティアクセス: `proxy[foo]` と `proxy.bar`
- 継承したプロパティアクセス: `Object.create(proxy)[foo]`
- {{jsxref("Reflect.get()")}}

### 不変条件

以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。

- ターゲットオブジェクトプロパティが書き込み不可で非設定なデータプロパティなら、プロパティに対して報告される値は対応するターゲットオブジェクトプロパティと同じでなければなりません。
- 対応するターゲットオブジェクトプロパティが\[\[Get]]属性として未定義で非設定なアクセスプロパティなら、プロパティに対して報告される値は未定義でなければなりません。

## 例

### プロパティ値の取得のトラップ

次のコードではプロパティ値の取得をトラップします。

```js
const p = new Proxy({}, {
  get: function(target, property, receiver) {
    console.log('called: ' + property);
    return 10;
  }
});

console.log(p.a); // "called: a"
                  // 10
```

次のコードでは不変条件に違反します。

```js
const obj = {};
Object.defineProperty(obj, 'a', {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false
});

const p = new Proxy(obj, {
  get: function(target, property) {
    return 20;
  }
});

p.a; // TypeError is thrown
```

## 仕様書

| 仕様書                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver', '[[Get]]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy.handler.get")}}

## 関連情報

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Reflect.get()")}}
