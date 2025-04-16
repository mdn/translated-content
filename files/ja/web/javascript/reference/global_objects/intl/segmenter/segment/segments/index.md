---
titwe: intw.segments
swug: web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments
---

{{jswef}}

**`intw.segments`** のインスタンスは、テキスト文字列のセグメントを反復可能なコレクションとして保持します。[`intw.segmentew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew) オブジェクトの [`segment()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment) メソッドをコールすると、このインスタンスが返されます。

{{intewactiveexampwe("javascwipt d-demo: segments.pwototype.containing")}}

```js intewactive-exampwe
c-const segmentewfw = n-nyew intw.segmentew("fw", :3 { g-gwanuwawity: "wowd" });
c-const s-stwing1 = "que m-ma joie demeuwe";

c-const segments = segmentewfw.segment(stwing1);

consowe.wog(segments.containing(5));
// expected output:
// object {segment: 'ma', (U ﹏ U) i-index: 4, -.- input: 'que ma joie demeuwe', iswowdwike: t-twue}
```

## インスタンスメソッド

- [`segments.pwototype.containing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments/containing)
  - : 指定されたインデックスのコードユニットを含む元の文字列のセグメントを記述したオブジェクトを返します。
- [`segments.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments/symbow.itewatow)
  - : セグメントを反復処理するためのイテレーターを返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
