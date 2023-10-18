---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
---

{{JSRef}}

ウェルノウンシンボルの **`Symbol.species`** は、コンストラクター関数が派生オブジェクトを生成する際に使用する関数値プロパティを指定します。

{{EmbedInteractiveExample("pages/js/symbol-species.html")}}

## 解説

`species` アクセサープロパティを使用すると、オブジェクトの生成に使われるデフォルトコンストラクターを上書きすることができます。

{{js_property_attributes(0,0,0)}}

## 例

### species の使用

{{jsxref("Array")}} オブジェクトを派生した配列クラス `MyArray` で返したいことがあるでしょう。例えば、デフォルトのコンストラクターを返す {{jsxref("Array.map", "map()")}} のようなメソッドを使用している場合、これらのメソッドは `MyArray` オブジェクトではなく親の `Array` オブジェクトを返したいとします。 `species` シンボルでこれを実現することができます。

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}
let a = new MyArray(1, 2, 3);
let mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.species")}}

## 関連情報

- {{jsxref("Map.@@species", "Map[@@species]")}}
- {{jsxref("Set.@@species", "Set[@@species]")}}
