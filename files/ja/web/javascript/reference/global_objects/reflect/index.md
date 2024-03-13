---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
---

{{JSRef}}

**`Reflect`** は、JavaScript 操作を受け付けるためのメソッドを提供する組み込みオブジェクトです。メソッドは[プロキシーハンドラー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)のメソッドと同じです。`Reflect` は関数オブジェクトではありませんので、構築することはできません。

## 解説

他の多くのグローバルオブジェクトとは異なり、`Reflect` はコンストラクターではありません。[`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)で使用したり、 `Reflect` オブジェクトを関数として呼び出したりすることはできません。 `Reflect` のすべてのプロパティとメソッドは ({{jsxref("Math")}} オブジェクトと同様に) 静的です。

`Reflect` オブジェクトは[プロキシーハンドラーのメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)と同じ名前をもつ、下記の関数を提供します。

これらのメソッドの一部は {{jsxref("Object")}} の対応するメソッドとも同じですが、これらの間には[いくらか微妙な違い](/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods)があります。

## 静的メソッド

- {{jsxref("Reflect.apply()", "Reflect.apply(<var>target</var>, <var>thisArgument</var>, <var>argumentsList</var>)")}}
  - : `target` 関数を、引数 `argumentsList` で指定された引数で呼び出します。 {{jsxref("Function.prototype.apply()")}} も参照してください。
- {{jsxref("Reflect.construct()", "Reflect.construct(<var>target</var>, <var>argumentsList</var>[, <var>newTarget</var>])")}}
  - : 関数としての [`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)です。 `new target(...argumentsList)` を呼び出すのと等価です。別なプロトタイプを指定するためにオプションを指定することもできます。
- {{jsxref("Reflect.defineProperty()", "Reflect.defineProperty(<var>target</var>, <var>propertyKey</var>, <var>attributes</var>)")}}
  - : {{jsxref("Object.defineProperty()")}} と同様です。返値は論理値で、プロパティが定義できた場合は `true` を返します。
- {{jsxref("Reflect.deleteProperty()", "Reflect.deleteProperty(<var>target</var>, <var>propertyKey</var>)")}}
  - : 関数としての [`delete` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/delete)です。 `delete target[propertyKey]` を呼び出すのと等価です。
- {{jsxref("Reflect.get()", "Reflect.get(<var>target</var>, <var>propertyKey</var>[, <var>receiver</var>])")}}
  - : このプロパティの値を返します。オブジェクトからのプロパティの取得 (`target[propertyKey]`) を関数にしたようなものです。
- {{jsxref("Reflect.getOwnPropertyDescriptor()", "Reflect.getOwnPropertyDescriptor(<var>target</var>, <var>propertyKey</var>)")}}
  - : {{jsxref("Object.getOwnPropertyDescriptor()")}} に似ています。指定したプロパティが存在する場合にプロパティ記述子を返し、存在しない場合は {{jsxref("undefined")}} を返します。
- {{jsxref("Reflect.getPrototypeOf()", "Reflect.getPrototypeOf(<var>target</var>)")}}
  - : {{jsxref("Object.getPrototypeOf()")}} と同じです。
- {{jsxref("Reflect.has()", "Reflect.has(<var>target, propertyKey</var>)")}}
  - : 論理値で、対象がそのプロパティを持っているかどうかを返します。固有の場合も継承の場合も含みます。 [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)を関数にしたものです。
- {{jsxref("Reflect.isExtensible()", "Reflect.isExtensible(<var>target</var>)")}}
  - : {{jsxref("Object.isExtensible()")}} と同じです。論理値を返し、 `true` ならば対象が拡張可能です。
- {{jsxref("Reflect.ownKeys()", "Reflect.ownKeys(<var>target</var>)")}}
  - : 独自の (継承されているものではない) プロパティのキーをもつ文字列の配列を返します。
- {{jsxref("Reflect.preventExtensions()", "Reflect.preventExtensions(<var>target</var>)")}}
  - : {{jsxref("Object.preventExtensions()")}} に似ています。論理値を返し、 `true` は更新に成功した場合です。
- {{jsxref("Reflect.set()", "Reflect.set(<var>target</var>, <var>propertyKey</var>, <var>value</var>[, <var>receiver</var>])")}}
  - : 値をプロパティに割り当てる関数です。更新に成功したら `true` となる論理値を返します。
- {{jsxref("Reflect.setPrototypeOf()", "Reflect.setPrototypeOf(<var>target</var>, <var>prototype</var>)")}}
  - : オブジェクトのプロトタイプを設定する関数です。論理値を返し、 `true` ならば成功です。

## 例

### オブジェクトが特定のプロパティを持っているかどうかを検出

```js
const duck = {
  name: "Maurice",
  color: "white",
  greeting: function () {
    console.log(`Quaaaack! My name is ${this.name}`);
  },
};

Reflect.has(duck, "color");
// true
Reflect.has(duck, "haircut");
// false
```

### オブジェクトが所有するキーの返却

```js
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]
```

### オブジェクトへの新しいプロパティの追加

```js
Reflect.set(duck, "eyes", "black");
// 成功した場合は "true" を返します。
// "duck" には "eyes: 'black'" プロパティが設定されました。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}} グローバルオブジェクト
- {{jsxref("Proxy/Proxy", "handler")}} オブジェクト
