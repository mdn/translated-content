---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
---

{{JSRef}}

**`forEach()`** メソッドは、指定された関数を `Map` オブジェクト内にあるキーと値のペアそれぞれに対して 1 回ずつ、挿入順に実行します。

{{EmbedInteractiveExample("pages/js/map-prototype-foreach.html")}}

## 構文

```
myMap.forEach(callback([value][, key][, map])[, thisArg])
```

### 引数

- `callback`

  - : `myMap` のそれぞれの項目に対して実行される関数。以下の引数を取ります。

    - `value` {{Optional_Inline}}
      - : それぞれの反復処理における値です。
    - `key` {{Optional_Inline}}
      - : それぞれの反復処理におけるキーです。
    - `map` {{Optional_Inline}}
      - : 反復処理されるマップです (上記の構文ボックスでは `myMap` です)。

- `thisArg` {{Optional_Inline}}
  - : `callback` の実行時に `this` として使用される値です。

### 返値

{{jsxref("undefined")}} です。

## 解説

`forEach` メソッドは、指定された関数 `callback` を、マップの実在するそれぞれのキーに対して一度ずつ呼び出します。これは削除されたキーに対しては呼び出しません。ただし、存在していて `undefined` である値に対しては呼び出します。

`callback` は次の **3 つの引数**で呼び出されます。

- 項目の値 (`value`)
- 項目のキー (`key`)
- 走査中の **`Map` オブジェクト**

`thisArg` 引数が `forEach` に指定されると、 `callback` の呼び出し時にそのオブジェクトが `this` の値として使用されます。与えられなかった場合は、 `undefined` が `this` の値として渡されます。 `callback` によって究極に管理される `this` の値は、[関数から見える `this` を特定する一般規則](/ja/docs/Web/JavaScript/Reference/Operators/this)に従います。

それぞれの値に対して一度ずつ実行されますが、 `forEach` が終了するまでに削除され再追加された場合は除きます。 `callback` はその前に削除された値に対しては実行されません。 `forEach` が終了する前に追加された新しい値に対しては実行されます。

## 例

### Map オブジェクトの内容を表示

以下のコードは `Map` オブジェクト内の各要素を 1 行ずつ出力します。

```js
function logMapElements(value, key, map) {
    console.log(`map.get('${key}') = ${value}`)
}
new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements)
// logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"
```

## 仕様書

| 仕様書                                                                                                   |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-map.prototype.foreach', 'Map.prototype.forEach')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.forEach")}}

## 関連情報

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
