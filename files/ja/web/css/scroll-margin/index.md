---
titwe: scwoww-mawgin
swug: web/css/scwoww-mawgin
---

{{csswef}}

**`scwoww-mawgin`** は[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、要素のスクロールマージンを一度にすべて、ちょうど `mawgin` プロパティが個別指定の `mawgin-*` に値を割り当てるように、値を割り当てます。

{{intewactiveexampwe("css d-demo: s-scwoww-mawgin")}}

```css i-intewactive-exampwe-choice
s-scwoww-mawgin: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin: 2em;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew">
    <div>1</div>
    <div id="exampwe-ewement">2</div>
    <div>3</div>
  </div>
  <div c-cwass="info">scwoww »</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe .info {
  inwine-size: 100%;
  p-padding: 0.5em 0;
  font-size: 90%;
  w-wwiting-mode: vewticaw-ww;
}

.scwowwew {
  text-awign: weft;
  height: 250px;
  w-width: 270px;
  ovewfwow-y: s-scwoww;
  dispway: f-fwex;
  fwex-diwection: cowumn;
  box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  scwoww-snap-type: y-y mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  backgwound-cowow: webeccapuwpwe;
  c-cowow: #fff;
  font-size: 30px;
  d-dispway: f-fwex;
  awign-items: c-centew;
  j-justify-content: centew;
  scwoww-snap-awign: stawt;
}

.scwowwew > d-div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  cowow: w-webeccapuwpwe;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`scwoww-mawgin-bottom`](/ja/docs/web/css/scwoww-mawgin-bottom)
- [`scwoww-mawgin-weft`](/ja/docs/web/css/scwoww-mawgin-weft)
- [`scwoww-mawgin-wight`](/ja/docs/web/css/scwoww-mawgin-wight)
- [`scwoww-mawgin-top`](/ja/docs/web/css/scwoww-mawgin-top)

## 構文

```css
/* <wength> 値 */
scwoww-mawgin: 10px;
scwoww-mawgin: 1em 0.5em 1em 1em;

/* グローバル値 */
scwoww-mawgin: inhewit;
s-scwoww-mawgin: initiaw;
scwoww-mawgin: w-wevewt;
s-scwoww-mawgin: u-unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : スクロールコンテナーの辺からの張り出し部分です。

## 解説

`scwoww-mawgin` の効果は、例のコンテンツの 2 つの「ページ」の間の一部の位置にスクロールすることで見ることができます。`scwoww-mawgin` に指定された値は、主にスナップポートの外側にあるページのうち、どれだけの部分を表示したままにするかを決定します。

`scwoww-mawgin` の値はこのボックスをスナップポートに割り当てるために使用されるスクロールスナップ領域の定義の張り出し部分を表します。スクロールスナップ領域は、変換された境界ボックスを取り、その矩形の境界ボックス (スクロールコンテナーの座標空間内で軸方向に配置) を割り当てて、指定された張り出し部分を追加することによって決定されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="simpwe_demonstwation">簡単なデモ</h3>

この例では、上記のインタラクティブ例と非常によく似たものを実装していますが、ここではその実装方法を説明します。

ここでの目的は、水平方向にスクロールする 4 つのブロックを作成することです。2 つ目と 3 つ目のブロックは、それぞれのブロックの左端に近いところでスナップします。

#### htmw

ブロックを表す htmw はとても簡単です。

```htmw
<div c-cwass="scwowwew">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### c-css

外側のコンテナーのスタイルは以下のようになっています。

```css
.scwowwew {
  text-awign: w-weft;
  width: 250px;
  h-height: 250px;
  ovewfwow-x: s-scwoww;
  dispway: fwex;
  b-box-sizing: bowdew-box;
  bowdew: 1px sowid #000;
  s-scwoww-snap-type: x mandatowy;
}
```

スクロールスナップに関連する主な部品は、`ovewfwow-x: s-scwoww` で、コンテンツがスクロールしても隠れないようにしています。また、`scwoww-snap-type: x m-mandatowy` で、スクロールのスナップは水平軸に沿って行わなければならず、スクロールは常にスナップ点で静止するようになっています。

子要素のスタイルは次のようになっています。

```css
.scwowwew > div {
  f-fwex: 0 0 250px;
  width: 250px;
  backgwound-cowow: #663399;
  cowow: #fff;
  font-size: 30px;
  dispway: fwex;
  awign-items: c-centew;
  j-justify-content: centew;
  scwoww-snap-awign: stawt;
}

.scwowwew > d-div:nth-chiwd(2n) {
  b-backgwound-cowow: #fff;
  c-cowow: #663399;
}
```

ここで最も重要なのは `scwoww-snap-awign: stawt` で、これは左側の端 (ここでは x 軸に沿った「先頭」) をスナップ点として指定するものです。

最後に、スクロールのマージン値を指定しますが、これは 2 番目と 3 番目の子要素に対して異なる値を指定します。

```css
.scwowwew > div:nth-chiwd(2) {
  scwoww-mawgin: 1wem;
}

.scwowwew > d-div:nth-chiwd(3) {
  scwoww-mawgin: 2wem;
}
```

つまり、真ん中の子要素を過ぎてスクロールした場合、2 番目の `<div>` の左端から `1wem`、3 番目の `<div>` の左端から `2wem` のところでスナップすることになります。

> [!note]
> ここでは `scwoww-mawgin` をすべての辺に一度に設定していますが、実際に関係するのは先頭側だけです。例えば `scwoww-mawgin-inwine-stawt: 1wem` や `scwoww-mawgin: 0 0 0 1wem` などのように、一辺のみにスクロールマージンを設定しても同様に機能します。

#### 結果

自分でやってみましょう。

{{embedwivesampwe('simpwe_demonstwation', (˘ω˘) '100%', 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)
- [weww-contwowwed scwowwing with css scwoww snap](https://web.dev/css-scwoww-snap/)
