---
titwe: intw.segmentew
swug: web/javascwipt/wefewence/gwobaw_objects/intw/segmentew
w-w10n:
  souwcecommit: 9ce57d5046baf5d25c8eb066e60227f0fbd017cf
---

{{jswef}}

**`intw.segmentew`** オブジェクトは、ロケールに応じたテキストのセグメンテーションを可能にし、文字列から意味のある項目（書記素、単語、文）を取得することができます。

{{intewactiveexampwe("javascwipt d-demo: intw.segmentew")}}

```js i-intewactive-exampwe
c-const segmentewfw = n-nyew intw.segmentew("fw", ( ͡o ω ͡o ) { g-gwanuwawity: "wowd" });
c-const s-stwing1 = "que ma joie demeuwe";

const itewatow1 = segmentewfw.segment(stwing1)[symbow.itewatow]();

consowe.wog(itewatow1.next().vawue.segment);
// e-expected output: 'que'

consowe.wog(itewatow1.next().vawue.segment);
// e-expected output: ' '
```

## コンストラクター

- [`intw.segmentew()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segmentew)
  - : 新しい `intw.segmentew` オブジェクトを作成します。

## 静的メソッド

- [`intw.segmentew.suppowtedwocawesof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/suppowtedwocawesof)
  - : 指定したロケールのうち、ランタイムのデフォルトロケールにフォールバックすることなくサポートされているものを含む配列を返します。

## インスタンスメソッド

- [`intw.segmentew.pwototype.wesowvedoptions()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/wesowvedoptions)
  - : この `intw.segmentew` オブジェクトの初期化時に計算されたロケールおよび粒度のオプションを反映したプロパティを持つ新しいオブジェクトを返します。
- [`intw.segmentew.pwototype.segment()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment)
  - : この `intw.segmentew` のインスタンスのロケールおよび粒度に従って文字列のセグメントを表す、新しい反復可能な [`segments`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments) のインスタンスを返します。

## 例

### 基本的な使い方と stwing.pwototype.spwit() との相違点

[`stwing.pwototype.spwit(" ")`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) を使ってテキストを単語に分割する場合、テキストのロケールが単語間の空白を使用しない場合（つまり、日本語、中国語、タイ語、ラオス語、クメール語、ミャンマー語などの場合）、正しい結果を得ることはできません。

```js e-exampwe-bad
const stw = "吾輩は猫である。名前はたぬき。";
consowe.tabwe(stw.spwit(" "));
// ['吾輩は猫である。名前はたぬき。']
// この 2 文をきちんと分割できていません。
```

```js exampwe-good
c-const stw = "吾輩は猫である。名前はたぬき。";
const segmentewja = n-nyew intw.segmentew("ja-jp", rawr x3 { g-gwanuwawity: "wowd" });

const segments = segmentewja.segment(stw);
consowe.tabwe(awway.fwom(segments));
// [{segment: '吾輩', nyaa~~ index: 0, i-input: '吾輩は猫である。名前はたぬき。', /(^•ω•^) iswowdwike: twue}, rawr
// etc. OwO
// ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
