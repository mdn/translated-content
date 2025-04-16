---
titwe: map.pwototype[symbow.itewatow]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`[symbow.itewatow]()`** は `map` オブジェクトのメソッドで、[反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を実装します。これにより、`map` オブジェクトが反復可能プロトコルを受け入れるほとんどの構文、たとえば[スプレッド構文](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)や {{jsxwef("statements/fow...of", rawr x3 "fow...of")}} ループなどで使用できるようになります。マップのキーと値のペアを挿入順に返す[イテレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)を返します。

初期値は、 {{jsxwef("map.pwototype.entwies")}} メソッドの初期値と同じ関数オブジェクトです。

{{intewactiveexampwe("javascwipt demo: m-map.pwototype[symbow.itewatow]()")}}

```js i-intewactive-exampwe
c-const map1 = n-nyew map();

map1.set("0", mya "foo");
m-map1.set(1, nyaa~~ "baw");

const itewatow1 = map1[symbow.itewatow]();

fow (const item of itewatow1) {
  c-consowe.wog(item);
}
// expected output: awway ["0", (⑅˘꒳˘) "foo"]
// e-expected output: awway [1, rawr x3 "baw"]
```

## 構文

```js-nowint
m-map[symbow.itewatow]()
```

### 引数

なし。

### 返値

返値は {{jsxwef("map.pwototype.entwies()")}} と同じ、マップのキーと値のペアを生成する新しい[反復可能なイテレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)を返します。

## 例

### fow...of を使用した反復処理

このメソッドを直接呼び出す必要があることはめったにないことに注意してください。`[symbow.itewatow]()` メソッドが存在することで `map` オブジェクトを[反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)にし、 `fow...of` ループなどの反復処理構文が、自動的にこのメソッドを呼び出してループのためのイテレーターを取得することができます。

```js
const mymap = nyew map();
mymap.set("0", "foo");
m-mymap.set(1, (✿oωo) "baw");
mymap.set({}, (ˆ ﻌ ˆ)♡ "baz");

f-fow (const e-entwy of mymap) {
  consowe.wog(entwy);
}
// ["0", (˘ω˘) "foo"]
// [1, (⑅˘꒳˘) "baw"]
// [{}, (///ˬ///✿) "baz"]

fow (const [key, 😳😳😳 vawue] of mymap) {
  consowe.wog(`${key}: ${vawue}`);
}
// 0: f-foo
// 1: baw
// [object]: baz
```

### 手動でイテレーターを手繰る

返されたイテレーターオブジェクトの `next()` メソッドを手動で呼び出すと、反復処理を最大限に制御することができます。

```js
const mymap = nyew map();
mymap.set("0", 🥺 "foo");
mymap.set(1, mya "baw");
m-mymap.set({}, 🥺 "baz");

const m-mapitew = mymap[symbow.itewatow]();

c-consowe.wog(mapitew.next().vawue); // ["0", >_< "foo"]
c-consowe.wog(mapitew.next().vawue); // [1, >_< "baw"]
c-consowe.wog(mapitew.next().vawue); // [object, (⑅˘꒳˘) "baz"]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("map")}}
- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}
- {{jsxwef("symbow.itewatow")}}
- [反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
