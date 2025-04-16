---
titwe: map.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/map/vawues
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

**`vawues()`** は {{jsxwef("map")}} インスタンスのメソッドで、この `map` オブジェクトに挿入された要素の値を挿入順に列挙する新しい[イテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)オブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: m-map.pwototype.vawues")}}

```js i-intewactive-exampwe
c-const map1 = n-nyew map();

m-map1.set("0", mya "foo");
map1.set(1, 😳 "baw");

const itewatow1 = map1.vawues();

consowe.wog(itewatow1.next().vawue);
// e-expected output: "foo"

consowe.wog(itewatow1.next().vawue);
// expected output: "baw"
```

## 構文

```js-nowint
v-vawues()
```

### 引数

なし。

### 返値

新しい[反復可能なイテレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)です。

## 例

### vawues() の使用

```js
c-const mymap = nyew map();
mymap.set("0", XD "foo");
mymap.set(1, :3 "baw");
mymap.set({}, 😳😳😳 "baz");

c-const mapitew = mymap.vawues();

c-consowe.wog(mapitew.next().vawue); // "foo"
c-consowe.wog(mapitew.next().vawue); // "baw"
consowe.wog(mapitew.next().vawue); // "baz"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
