---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
---

{{JSRef}}

**`Symbol.hasInstance`** は、コンストラクターオブジェクトが、そのインスタンスのオブジェクトとして認識されるかどうかを決定するために使用されます。このシンボルで、{{jsxref("Operators/instanceof", "instanceof")}} 演算子の動作をカスタマイズすることができます。

{{EmbedInteractiveExample("pages/js/symbol-hasinstance.html")}}{{js_property_attributes(0,0,0)}}

## 例

### 独自のインスタンスでの動作

たとえば、次のようにして `instanceof` の独自の動作を実装することができます。

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
```

```js
function MyArray() {}
Object.defineProperty(MyArray, Symbol.hasInstance, {
  value: function (instance) {
    return Array.isArray(instance);
  },
});
console.log([] instanceof MyArray); // true
```

### オブジェクトのインスタンスを確認する

`instanceof` キーワードを使ってオブジェクトがクラスのインスタンスであるかどうかを確認するのと同じ方法で、`Symbol.hasInstance` を使って確認することもできます。

```js
class Animal {
  constructor() {}
}

const cat = new Animal();

console.log(Animal[Symbol.hasInstance](cat)); // true
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.hasInstance")}}

## 関連情報

- {{jsxref("Operators/instanceof", "instanceof")}}
