---
title: WeakMap() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap
---

{{JSRef}}

**`WeakMap()` コンストラクター**は、キーが弱く参照されている、キーと値の組のコレクションである `WeakMap` オブジェクトを生成します。キーはオブジェクトでなければならず、値は任意の値を指定することができます。

`WeakMap` については、[キー付きコレクション](/ja/docs/Web/JavaScript/Guide/Keyed_collections)の [WeakMap オブジェクト](/ja/docs/Web/JavaScript/Guide/Keyed_collections#WeakMap_object)の節を参照してください。

## 構文

```
new WeakMap([iterable])
```

### 引数

- `iterable`
  - : iterable は配列などの反復可能オブジェクトであり、その要素はキーと値の組 (2 要素の配列) となります。それぞれのキーと値の組は、新しい WeakMap に追加されます。 null は undefined として扱われます。

## 例

### WeakMap の使用

```js
const wm1 = new WeakMap(),
  wm2 = new WeakMap(),
  wm3 = new WeakMap();
const o1 = {},
  o2 = function () {},
  o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // 値は何でもよく、オブジェクトでも関数でもよい
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // キーと値はあらゆるオブジェクトになれる。 WeakMap も同様。

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined、 o2 というキーが wm2 にないため
wm2.get(o3); // undefined、 設定された値がそうであるため

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (値自身が 'undefined' であっても)

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.WeakMap.WeakMap")}}

## 関連情報

- [`WeakMap` (JavaScript ガイド)](/ja/docs/Web/JavaScript/Guide/Keyed_collections#WeakMap_object)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](http://fitzgeraldnick.com/weblog/53/)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
