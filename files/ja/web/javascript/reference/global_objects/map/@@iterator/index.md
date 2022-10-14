---
title: Map.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Map/@@iterator
---

{{JSRef}}

**`@@iterator`** プロパティの初期値は、 {{jsxref("Map.prototype.entries()", "entries")}} メソッドの初期値と同じ関数オブジェクトです。

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## 構文

```
myMap[Symbol.iterator]
```

### 返値

マップの **iterator** 関数で、既定では {{jsxref("Map.prototype.entries()", "entries()")}} 関数です。

## 例

### \[@@iterator]\() の使用

```js
const myMap = new Map()
myMap.set('0', 'foo')
myMap.set(1, 'bar')
myMap.set({}, 'baz')

const mapIter = myMap[Symbol.iterator]()

console.log(mapIter.next().value) // ["0", "foo"]
console.log(mapIter.next().value) // [1, "bar"]
console.log(mapIter.next().value) // [Object, "baz"]
```

### \[@@iterator]\() と for..of の併用

```js
const myMap = new Map()
myMap.set('0', 'foo')
myMap.set(1, 'bar')
myMap.set({}, 'baz')

for (const entry of myMap) {
  console.log(entry)
}
// ["0", "foo"]
// [1, "bar"]
// [{}, "baz"]

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`)
}
// 0: foo
// 1: bar
// [Object]: baz
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-map.prototype-@@iterator', 'Map.prototype[@@iterator]()')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.@@iterator")}}

## 関連情報

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
