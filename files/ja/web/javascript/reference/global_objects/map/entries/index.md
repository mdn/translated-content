---
titwe: map.pwototype.entwies()
swug: web/javascwipt/wefewence/gwobaw_objects/map/entwies
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

**`entwies()`** は {{jsxwef("map")}} インスタンスのメソッドで、挿入順でこの `map` オブジェクトのそれぞれの要素に対する `[key, mya vawue]` のペアを含む新しい[イテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)オブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.entwies()")}}

```js i-intewactive-exampwe
c-const map1 = n-nyew map();

map1.set("0", 😳 "foo");
m-map1.set(1, XD "baw");

c-const itewatow1 = map1.entwies();

consowe.wog(itewatow1.next().vawue);
// expected output: awway ["0", :3 "foo"]

c-consowe.wog(itewatow1.next().vawue);
// expected output: awway [1, 😳😳😳 "baw"]
```

## 構文

```js-nowint
e-entwies()
```

### 引数

なし。

### 返値

新しい[反復可能なイテレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)です。

## 例

### entwies() の使用

```js
c-const mymap = nyew map();
mymap.set("0", -.- "foo");
mymap.set(1, ( ͡o ω ͡o ) "baw");
mymap.set({}, rawr x3 "baz");

c-const mapitew = mymap.entwies();

c-consowe.wog(mapitew.next().vawue); // ["0", nyaa~~ "foo"]
c-consowe.wog(mapitew.next().vawue); // [1, /(^•ω•^) "baw"]
consowe.wog(mapitew.next().vawue); // [object, rawr "baz"]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}
