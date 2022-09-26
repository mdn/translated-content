---
title: Proxy() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
---

{{JSRef}}

**`Proxy()`** コンストラクターは {{jsxref("Proxy")}} オブジェクトを生成するために使用します。

## 構文

```
new Proxy(target, handler)
```

### 引数

- `target`
  - : `Proxy` でラップするターゲットのオブジェクトです。あらゆる種類のオブジェクト、例えばネイティブ配列や関数、別のプロキシなどがなることができます。
- `handler`
  - : 関数をプロパティとして持つオブジェクトで、その関数で、 Proxy `p` に対して操作が行われた場合の挙動を定義します。

## 解説

`Proxy()` コンストラクターを使用すると、新しい `Proxy` オブジェクトを生成することができます。このコンストラクターは 2 つの必須の引数を取ります。

- `target` はプロキシを作成するオブジェクトです。
- `handler` はプロキシのカスタム動作を定義するオブジェクトです。

handler を空にすると、ほとんどすべての点でターゲットとまったく同じように振る舞うプロキシを作成します。 `handler` オブジェクト上で関数群のいずれかを定義することで、プロキシの動作の特定の側面をカスタマイズすることができます。例えば、 `get()` を定義することで、 ターゲットの[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)のカスタマイズされたバージョンを提供することができます。

### ハンドラー関数

この節では、定義することができるすべてのハンドラー関数を列挙します。ハンドラー関数は、対象オブジェクトの呼び出しをトラップするので、*トラップ*と呼ばれることがあります。

- {{JSxRef("Global_Objects/Proxy/Proxy/apply", "handler.apply()")}}
  - : 関数呼び出しのトラップです。
- {{JSxRef("Global_Objects/Proxy/Proxy/construct", "handler.construct()")}}
  - : {{JSxRef("Operators/new", "new")}} 演算子のトラップです。
- {{JSxRef("Global_Objects/Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  - : {{JSxRef("Object.defineProperty")}} のトラップです。
- {{JSxRef("Global_Objects/Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  - : {{JSxRef("Operators/delete", "delete")}} 演算子のトラップです。
- {{JSxRef("Global_Objects/Proxy/Proxy/get", "handler.get()")}}
  - : プロパティ値の取得のトラップです。
- {{JSxRef("Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : {{JSxRef("Object.getOwnPropertyDescriptor")}} のトラップです。
- {{JSxRef("Global_Objects/Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : {{JSxRef("Object.getPrototypeOf")}} のトラップです。
- {{JSxRef("Global_Objects/Proxy/Proxy/has", "handler.has()")}}
  - : {{JSxRef("Operators/in", "in")}} 演算子のトラップです。
- {{JSxRef("Global_Objects/Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
  - : {{JSxRef("Object.isExtensible")}} のトラップです。
- {{JSxRef("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
  - : {{JSxRef("Object.getOwnPropertyNames")}} と {{JSxRef("Object.getOwnPropertySymbols")}} のトラップです。
- {{JSxRef("Global_Objects/Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
  - : {{JSxRef("Object.preventExtensions")}} のトラップです。
- {{JSxRef("Global_Objects/Proxy/Proxy/set", "handler.set()")}}
  - : プロパティ値の設定のトラップです。
- {{JSxRef("Global_Objects/Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : {{JSxRef("Object.setPrototypeOf")}} のトラップです。

## 例

### 選択的にプロパティアクセサーのプロキシを行う

この例では、ターゲットは `notProxied` と `proxied` の 2 つのプロパティを持っています。 `proxied` に別の値を返し、それ以外のアクセスをターゲットに許可するハンドラーを定義します。

```js
const target = {
  notProxied: "original value",
  proxied: "original value"
};

const handler = {
  get: function(target, prop, receiver) {
    if (prop === "proxied") {
      return "replaced value";
    }
    return Reflect.get(...arguments);
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "original value"
console.log(proxy.proxied);    // "replaced value"
```

## 仕様書

| 仕様書                                                                                       |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-proxy-constructor', 'Proxy constructor')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy.Proxy")}}

## 関連情報

- [JavaScript Guide ガイドの `Proxy` と `Reflect`](/ja/docs/Web/JavaScript/Guide/Meta_programming)
- {{jsxref("Global_Objects/Reflect", "Reflect")}}
