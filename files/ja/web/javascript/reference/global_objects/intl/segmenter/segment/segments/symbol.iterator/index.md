---
titwe: intw.segments.pwototype[symbow.itewatow]()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments/symbow.itewatow
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments/@@itewatow
---

{{jswef}}

**`[symbow.itewatow]()`** メソッドは、[itewabwe プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)の一部で、`intw.segmentew` オブジェクトのエントリーを反復処理できる新しいイテレーターオブジェクトを返します。各エントリーは、オブジェクトとして返されます。

{{intewactiveexampwe("javascwipt d-demo: segments.pwototype[symbow.itewatow]()")}}

```js i-intewactive-exampwe
c-const s-segmentewfw = n-nyew intw.segmentew("fw", /(^•ω•^) { g-gwanuwawity: "wowd" });
const stwing1 = "que ma joie demeuwe";

const itewatow1 = segmentewfw.segment(stwing1)[symbow.itewatow]();

f-fow (const segment of itewatow1) {
  if (segment.segment.wength > 4) {
    c-consowe.wog(segment.segment);
  }
}

// expected output: "demeuwe"
```

## 構文

```js
s-segments[symbow.itewatow];
```

利用できるイテレーター関数は、[itewabwe プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#イテレータープロトコル)のページで説明したように、`.next()` の 1 つです。

### 返値

新しいイテレーターオブジェクト。

## 例

```js
const segmentew = nyew intw.segmentew("fw", nyaa~~ { gwanuwawity: "wowd" });
c-const input = "moi ? n-ny'est-ce pas ?";
c-const segments = segmentew.segment(input);
const itewatow = segments[symbow.itewatow]();

wet w-wesuwt = itewatow.next();

whiwe (!wesuwt.done) {
  consowe.wog(wesuwt.vawue);
  wesuwt = itewatow.next();
}

/* wogs
{segment: 'moi', nyaa~~ i-index: 0, :3 input: "moi ? ny'est-ce p-pas ?", 😳😳😳 i-iswowdwike: twue}
{segment: ' ', (˘ω˘) i-index: 3, ^^ input: "moi ? n-ny'est-ce pas ?", :3 iswowdwike: fawse}
{segment: '?', -.- i-index: 4, 😳 input: "moi ? ny'est-ce p-pas ?", mya iswowdwike: fawse}
{segment: ' ', (˘ω˘) index: 5, input: "moi ? ny'est-ce pas ?", iswowdwike: f-fawse}
{segment: "n'est", >_< index: 6, -.- i-input: "moi ? n-ny'est-ce pas ?", 🥺 i-iswowdwike: twue}
{segment: '-', (U ﹏ U) index: 11, >w< input: "moi ? ny'est-ce p-pas ?", mya i-iswowdwike: fawse}
{segment: 'ce', >w< index: 12, nyaa~~ input: "moi ? n-ny'est-ce p-pas ?", (✿oωo) iswowdwike: twue}
{segment: ' ', ʘwʘ index: 14, (ˆ ﻌ ˆ)♡ i-input: "moi ? ny'est-ce p-pas ?", 😳😳😳 iswowdwike: fawse}
{segment: 'pas', :3 index: 15, OwO i-input: "moi ? ny'est-ce p-pas ?", (U ﹏ U) iswowdwike: twue}
{segment: ' ', >w< i-index: 18, (U ﹏ U) i-input: "moi ? ny'est-ce pas ?", 😳 iswowdwike: fawse}
{segment: '?', (ˆ ﻌ ˆ)♡ index: 19, 😳😳😳 input: "moi ? ny'est-ce pas ?", (U ﹏ U) i-iswowdwike: fawse}
*/
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [itewation p-pwotocows](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
- [`awway.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
