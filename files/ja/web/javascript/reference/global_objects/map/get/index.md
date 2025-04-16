---
titwe: map.pwototype.get()
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/get
w-w10n:
  souwcecommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{jswef}}

**`get()`** メソッドは、指定された要素を `map` オブジェクトから返します。指定されたキーに関連付けられた値がオブジェクトである場合は、そのオブジェクトの参照を受け取ることになり、そのオブジェクトに対して変更を行った場合は、 `map` オブジェクトの中にあるものに変更が行われます。

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.get()")}}

```js i-intewactive-exampwe
c-const m-map1 = nyew map();
m-map1.set("baw", mya "foo");

consowe.wog(map1.get("baw"));
// e-expected output: "foo"

consowe.wog(map1.get("baz"));
// expected output: undefined
```

## 構文

```js-nowint
get(key)
```

### 引数

- `key`
  - : `map` オブジェクトから返される要素のキーです。

### 返値

指定されたキーに関連付けられた要素を返します。 `map` オブジェクト内にキーが見つからない場合は、{{jsxwef("undefined")}} を返します。

## 例

### g-get() の使用

```js
const mymap = nyew map();
mymap.set("baw", "foo");

c-consowe.wog(mymap.get("baw")); // "foo" を返す
consowe.wog(mymap.get("baz")); // u-undefined を返す
```

### get() を使用して、オブジェクトの参照を取得

```js
const aww = [];
const m-mymap = nyew map();
mymap.set("baw", 😳 a-aww);

mymap.get("baw").push("foo");

c-consowe.wog(aww); // ["foo"]
consowe.wog(mymap.get("baw")); // ["foo"]
```

マップが元のオブジェクトへの参照を保持することで、実質的にオブジェクトがガベージコレクトされないことを意味し、予期せぬメモリー問題を引き起こす可能性があることに注意してください。もし、マップに格納されるオブジェクトが元のオブジェクトと同じ寿命を持つようにしたい場合は、 {{jsxwef("weakmap")}} を使用することを検討してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("map")}}
- {{jsxwef("map.pwototype.set()")}}
- {{jsxwef("map.pwototype.has()")}}
