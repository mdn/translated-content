---
title: Proxy() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`Proxy()`** コンストラクターは {{jsxref("Proxy")}} オブジェクトを生成します。

## 構文

```js-nolint
new Proxy(target, handler)
```

> **メモ:** `Proxy()` は、[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使ってのみ構築することができます。`new` なしで呼び出そうとすると、{{jsxref("TypeError")}} が発生します。

### 引数

- `target`
  - : `Proxy` でラップするターゲットのオブジェクトです。あらゆる種類のオブジェクト、例えばネイティブ配列や関数、別のプロキシーなどがなることができます。
- `handler`
  - : 関数をプロパティとして持つオブジェクトで、その関数で、 Proxy `p` に対して操作が行われた場合の挙動を定義します。

## 解説

`Proxy()` コンストラクターを使用すると、新しい `Proxy` オブジェクトを生成できます。
このコンストラクターは 2 つの必須の引数を取ります。

- `target` はプロキシーを作成するオブジェクトです。
- `handler` はプロキシーのカスタム動作を定義するオブジェクトです。

handler を空にすると、ほとんどすべての点でターゲットとまったく同じように振る舞うプロキシーを作成します。 `handler` オブジェクト上で関数群のいずれかを定義することで、プロキシーの動作の特定の側面をカスタマイズすることができます。例えば、 `get()` を定義することで、 ターゲットの[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)のカスタマイズされたバージョンを提供することができます。

### ハンドラー関数

この節では、定義することができるすべてのハンドラー関数を列挙します。ハンドラー関数は、対象オブジェクトの呼び出しをトラップするので、*トラップ*と呼ばれることがあります。

- {{jsxref("Proxy/Proxy/apply", "handler.apply()")}}
  - : 関数呼び出しのトラップです。
- {{jsxref("Proxy/Proxy/construct", "handler.construct()")}}
  - : {{jsxref("Operators/new", "new")}} 演算子のトラップです。
- {{jsxref("Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  - : {{jsxref("Object.defineProperty")}} のトラップです。
- {{jsxref("Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  - : {{jsxref("Operators/delete", "delete")}} 演算子のトラップです。
- {{jsxref("Proxy/Proxy/get", "handler.get()")}}
  - : プロパティ値の取得のトラップです。
- {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : {{jsxref("Object.getOwnPropertyDescriptor")}} のトラップです。
- {{jsxref("Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : {{jsxref("Object.getPrototypeOf")}} のトラップです。
- {{jsxref("Proxy/Proxy/has", "handler.has()")}}
  - : {{jsxref("Operators/in", "in")}} 演算子のトラップです。
- {{jsxref("Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
  - : {{jsxref("Object.isExtensible")}} のトラップです。
- {{jsxref("Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
  - : {{jsxref("Object.getOwnPropertyNames")}} や {{jsxref("Object.getOwnPropertySymbols")}} のトラップです。
- {{jsxref("Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
  - : {{jsxref("Object.preventExtensions")}} のトラップです。
- {{jsxref("Proxy/Proxy/set", "handler.set()")}}
  - : プロパティ値の設定のトラップです。
- {{jsxref("Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : {{jsxref("Object.setPrototypeOf")}} のトラップです。

## 例

### 選択的にプロパティアクセサーのプロキシーを行う

この例では、ターゲットは `notProxied` と `proxied` の 2 つのプロパティを持っています。 `proxied` に別の値を返し、それ以外のアクセスをターゲットに許可するハンドラーを定義します。

```js
const target = {
  notProxied: "original value",
  proxied: "original value",
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "proxied") {
      return "replaced value";
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "original value"
console.log(proxy.proxied); // "replaced value"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メタプログラミング](/ja/docs/Web/JavaScript/Guide/Meta_programming) guide
- {{jsxref("Reflect")}}
