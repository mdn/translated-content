---
title: Symbol.species
short-title: species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Symbol.species`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)の `Symbol.species` を表します。オブジェクトのコピーを作成するメソッドは、このシンボルで、コピーを作成するときに使用するコンストラクター関数を探すことがあります。

> [!WARNING]
> `[Symbol.species]` が存在することで、任意のコードの実行を可能にし、セキュリティの脆弱性を生み出す可能性があります。また、一部の最適化がとても難しくなります。エンジンの実装者は[この機能を削除するかどうかを調査しています](https://github.com/tc39/proposal-rm-builtin-subclassing)。可能であれば、この機能への依存は避けてください。

{{InteractiveExample("JavaScript デモ: Symbol.species")}}

```js interactive-example
class Array1 extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

const a = new Array1(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof Array1);
// 予想される結果: false

console.log(mapped instanceof Array);
// 予想される結果: true
```

## 値

ウェルノウンシンボル `Symbol.species` です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`[Symbol.species]` アクセサープロパティを使用すると、サブクラスがオブジェクトの既定のコンストラクターをオーバーライドできるようになります。これは、インスタンスをコピーするときの手順を指定します。例えば、{{jsxref("Array/map", "map()")}} のような配列のコピーメソッドを使用する場合、`map()` メソッドは `instance.constructor[Symbol.species]` を使用して新しい配列を構築するコンストラクターを取得します。詳細については、[組み込みオブジェクトのサブクラス化](/ja/docs/Web/JavaScript/Reference/Classes/extends#組み込みクラスのサブクラス化)を参照してください。

すべての組み込みオブジェクトにおいて、`[Symbol.species]` は現在のインスタンスのコンストラクターである `this` の値を返すよう実装されています。これにより、メソッドをコピーして基底クラスではなく派生クラスのインスタンスを作成することができます。例えば、`map()` は元の配列と同じ型の配列を返します。

## 例

### species の使用

{{jsxref("Array")}} オブジェクトを派生した配列クラス `MyArray` で返したいことがあるでしょう。例えば、既定のコンストラクターを返す {{jsxref("Array/map", "map()")}} のようなメソッドを使用している場合、これらのメソッドは親の `Array` オブジェクトを、`MyArray` オブジェクトの代わりに返したいとします。`species` シンボルでこれを実現することができます。

```js
class MyArray extends Array {
  // species を親である Array コンストラクターで上書き
  static get [Symbol.species]() {
    return Array;
  }
}
const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
- [`ArrayBuffer[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
- [`Map[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species)
- [`Promise[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
- [`RegExp[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
- [`Set[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species)
- [`TypedArray[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
