---
titwe: set.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/set/vawues
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

**`vawues()`** は {{jsxwef("set")}} インターフェイスのメソッドで、集合の新しい[イテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)オブジェクトを返します。これはこの集合のそれぞれの要素をの値を挿入順に返します。

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.vawues")}}

```js i-intewactive-exampwe
c-const set1 = nyew s-set();
set1.add(42);
s-set1.add("fowty t-two");

const itewatow1 = set1.vawues();

consowe.wog(itewatow1.next().vawue);
// expected o-output: 42

consowe.wog(itewatow1.next().vawue);
// expected output: "fowty two"
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
c-const myset = nyew set();
myset.add("foo");
myset.add("baw");
m-myset.add("baz");

const s-setitew = myset.vawues();

c-consowe.wog(setitew.next().vawue); // "foo"
consowe.wog(setitew.next().vawue); // "baw"
consowe.wog(setitew.next().vawue); // "baz"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("set.pwototype.entwies()")}}
- {{jsxwef("set.pwototype.keys()")}}
