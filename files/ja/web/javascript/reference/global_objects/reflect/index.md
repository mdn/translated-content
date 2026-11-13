---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Reflect`** 名前空間オブジェクトには、介入可能な JavaScript オブジェクトの内部メソッドを呼び出すための静的メソッドが含まれています。これらのメソッドは、[プロキシハンドラー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)のものと同一です。

## 解説

他の多くのグローバルオブジェクトとは異なり、`Reflect` はコンストラクターではありません。[`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)で使用したり、 `Reflect` オブジェクトを関数として呼び出したりすることはできません。 `Reflect` のすべてのプロパティとメソッドは（{{jsxref("Math")}} オブジェクトと同様に）静的です。

`Reflect` オブジェクトは[プロキシーハンドラーのメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)と同じ名前をもつ静的関数群を提供しています。

`Reflect`の主な用途は、`Proxy`ハンドラーのトラップにおいてデフォルトの転送動作を提供することです。[プロキシー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#用語集)は、オブジェクトに対する操作に介入するために使用されます。これは、[オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対する独自の実装を提供します。`Reflect` API は、対応する内部メソッドを呼び出すために使用されます。例えば、下記コードはプロキシー `p` を生成し、これが持つ [`deleteProperty`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) トラップが、`[[Delete]]` 内部メソッドに介入します。`Reflect.deleteProperty()` はデフォルトの `[[Delete]]` 動作を `targetObject` に対して直接呼び出すために使用されます。これは [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) で置き換えられますが、`Reflect` を使用すれば、それぞれの内部メソッドに対応する構文を覚える必要がなくなります。

```js
const p = new Proxy(
  {},
  {
    deleteProperty(targetObject, property) {
      // 独自機能: 削除のログ
      console.log("プロパティを削除:", property);

      // 介入先のデフォルトの動作を実行
      return Reflect.deleteProperty(targetObject, property);
    },
  },
);
```

`Reflect` メソッドは、内部メソッドを呼び出す方法をより細かく制御することができます。例えば、{{jsxref("Reflect.construct()")}} は、特定の [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) 値を持つターゲット関数を構築する唯一の方法です。関数を呼び出す際に [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子を使用した場合、`new.target` の値は常にその関数自体になります。これは[サブクラス化](/ja/docs/Web/JavaScript/Reference/Operators/new.target#reflect.construct_を使用したときの%E3%80%80new.target)において重要な効果を及ぼします。例えば、{{jsxref("Reflect.get()")}} を使用すると、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)を独自の `this` 値で実行できます。一方、[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)は常に現在のオブジェクトを `this` 値として使用します。

ほぼすべての `Reflect` メソッドの動作は、それ以外にも他の構文やメソッドで実現可能です。これらのメソッドの一部には、{{jsxref("Object")}} 上に同名の対応する静的メソッドが存在しますが、微妙な違いがあります。正確な差異については、それぞれの `Reflect` メソッドの説明を参照してください。

## 静的プロパティ

- `Reflect[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Reflect"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## 静的メソッド

- {{jsxref("Reflect.apply()")}}
  - : `target` 関数を、引数 `argumentsList` で指定された引数で呼び出します。 {{jsxref("Function.prototype.apply()")}} も参照してください。
- {{jsxref("Reflect.construct()")}}
  - : 関数としての [`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)です。 `new target(...argumentsList)` を呼び出すのと等価です。別なプロトタイプを指定するためにオプションを指定することもできます。
- {{jsxref("Reflect.defineProperty()")}}
  - : {{jsxref("Object.defineProperty()")}} と同様です。返値は論理値で、プロパティが定義できた場合は `true` を返します。
- {{jsxref("Reflect.deleteProperty()")}}
  - : 関数としての [`delete` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/delete)です。 `delete target[propertyKey]` を呼び出すのと等価です。
- {{jsxref("Reflect.get()")}}
  - : このプロパティの値を返します。オブジェクトからのプロパティの取得 (`target[propertyKey]`) を関数にしたようなものです。
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
  - : {{jsxref("Object.getOwnPropertyDescriptor()")}} に似ています。指定したプロパティが存在する場合にプロパティ記述子を返し、存在しない場合は {{jsxref("undefined")}} を返します。
- {{jsxref("Reflect.getPrototypeOf()")}}
  - : {{jsxref("Object.getPrototypeOf()")}} と同じです。
- {{jsxref("Reflect.has()")}}
  - : 論理値で、対象がそのプロパティを持っているかどうかを返します。固有の場合も継承の場合も含みます。 [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)を関数にしたものです。
- {{jsxref("Reflect.isExtensible()")}}
  - : {{jsxref("Object.isExtensible()")}} と同じです。論理値を返し、 `true` ならば対象が拡張可能です。
- {{jsxref("Reflect.ownKeys()")}}
  - : 独自の (継承されているものではない) プロパティのキーをもつ文字列の配列を返します。
- {{jsxref("Reflect.preventExtensions()")}}
  - : {{jsxref("Object.preventExtensions()")}} に似ています。論理値を返し、 `true` は更新に成功した場合です。
- {{jsxref("Reflect.set()")}}
  - : 値をプロパティに割り当てる関数です。更新に成功したら `true` となる論理値を返します。
- {{jsxref("Reflect.setPrototypeOf()")}}
  - : オブジェクトのプロトタイプを設定する関数です。論理値を返し、 `true` ならば成功です。

## 例

### オブジェクトが特定のプロパティを持っているかどうかを検出

```js
const duck = {
  name: "Maurice",
  color: "white",
  greeting() {
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

- {{jsxref("Proxy")}}
