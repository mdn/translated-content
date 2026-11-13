---
title: Promise[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Promise[Symbol.species]`** アクセサープロパティは、プロミスのメソッドからの返値を構築するのに使用されるコンストラクターを返します。

> [!WARNING]
> `Symbol.species` が存在すると、任意のコードの実行が可能になり、セキュリティ上の脆弱性を生み出す可能性があります。また、特定の最適化も非常に難しくなります。エンジンの実装者は[この機能を削除するかどうか調査](https://github.com/tc39/proposal-rm-builtin-subclassing)しています。可能であれば、この機能に頼ることは避けてください。

## 構文

```js-nolint
Promise[Symbol.species]
```

### 返値

`get [Symbol.species]` が呼び出されたコンストラクター (`this`) の値です。この返値は、新しいプロミスを作成するプロミス連鎖メソッドから返値を作成するために使用されます。

## 解説

`[Symbol.species]` アクセサープロパティは `Promise` オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターはこれを上書きしてコンストラクターの割り当てを変更することができます。既定の実装では、基本的に次のようになります。

```js
// 解説のため架空の基礎実装
class Promise {
  static get [Symbol.species]() {
    return this;
  }
}
```

この多相的な実装のため、派生したサブクラスの `[Symbol.species]` も既定ではコンストラクター自身を返すことになります。

```js
class SubPromise extends Promise {}
SubPromise[Symbol.species] === SubPromise; // true
```

プロミス連鎖メソッドである [`then()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)、[`catch()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)、[`finally()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) は、新しいプロミスオブジェクトを返します。これらは `this.constructor[Symbol.species]` を介して新しいプロミスを構築するためのコンストラクターを取得します。 `this.constructor` が `undefined` の場合、または `this.constructor[Symbol.species]` が `undefined` または `null` の場合、既定の {{jsxref("Promise/Promise", "Promise()")}} コンストラクターが使用されます。それ以外の場合は、 `this.constructor[Symbol.species]` から返されるコンストラクターが使用され、新しいプロミスオブジェクトが構築されます。

## 例

### 通常のオブジェクトの species

`Symbol.species` プロパティは、既定では `Promise` のコンストラクター関数を返します。

```js
Promise[Symbol.species]; // [Function: Promise]
```

### 派生オブジェクトの species

`MyPromise` のような独自の `Promise` サブクラスのインスタンスでは、 `MyPromise` コンストラクターが `MyPromise` の species となります。しかし、派生クラスのメソッドで親の `Promise` オブジェクトを返すために、これをオーバーライドしたい場合があるかもしれません。

```js
class MyPromise extends Promise {
  // MyPromise の species を親の Promise コンストラクターで上書きする
  static get [Symbol.species]() {
    return Promise;
  }
}
```

既定では、プロミスメソッドはサブクラスの型を持つプロミスを返します。

```js
class MyPromise extends Promise {
  someValue = 1;
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // 1
```

`[Symbol.species]` を上書きすることで、プロミスのメソッドは基底の `Promise` 型を返すことになります。

```js
class MyPromise extends Promise {
  someValue = 1;
  static get [Symbol.species]() {
    return Promise;
  }
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- {{jsxref("Symbol.species")}}
