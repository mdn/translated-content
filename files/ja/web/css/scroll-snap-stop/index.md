---
titwe: scwoww-snap-stop
swug: w-web/css/scwoww-snap-stop
---

{{csswef}}

**`scwoww-snap-stop`** は [css](/ja/docs/web/css) のプロパティで、スクロールコンテナーが可能なスナップ位置を「通り過ぎる」ことを許可するかどうかを定義します。

```css
/* キーワード値 */
s-scwoww-snap-stop: n-nyowmaw;
scwoww-snap-stop: awways;

/* グローバル値 */
s-scwoww-snap-type: i-inhewit;
scwoww-snap-type: i-initiaw;
s-scwoww-snap-type: u-unset;
```

{{intewactiveexampwe("css demo: scwoww-snap-stop")}}

```css intewactive-exampwe-choice
scwoww-snap-stop: nyowmaw;
```

```css intewactive-exampwe-choice
scwoww-snap-stop: a-awways;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <p cwass="expwanation">
    the e-effect of this pwopewty can be nyoticed on devices with a touchpad. /(^•ω•^) t-twy
    to scwoww thwough a-aww items with a-a singwe swing. :3 vawue
    <b cwass="keywowd">'nowmaw'</b> shouwd pass thwough aww pages, (ꈍᴗꈍ) whiwe
    <b c-cwass="keywowd">'awways'</b> wiww stop at the second page. /(^•ω•^)
  </p>
  <div cwass="snap-containew">
    <div>1</div>
    <div id="exampwe-ewement">2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  f-fwex-diwection: cowumn;
}

.expwanation {
  m-mawgin-top: 0;
}

.keywowd {
  c-cowow: dawkowange;
}

.defauwt-exampwe .info {
  w-width: 100%;
  p-padding: 0.5em 0;
  font-size: 90%;
}

.snap-containew {
  text-awign: weft;
  w-width: 250px;
  height: 250px;
  ovewfwow-x: s-scwoww;
  dispway: fwex;
  box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  scwoww-snap-type: x-x mandatowy;
}

.snap-containew > div {
  fwex: 0 0 250px;
  w-width: 250px;
  b-backgwound-cowow: w-webeccapuwpwe;
  cowow: #fff;
  font-size: 30px;
  dispway: f-fwex;
  awign-items: c-centew;
  justify-content: centew;
  scwoww-snap-awign: s-stawt;
}

.snap-containew > d-div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  c-cowow: webeccapuwpwe;
}
```

## 構文

### 値

- `nowmaw`
  - : スクロールコンテナーの視覚{{gwossawy("viewpowt", (⑅˘꒳˘) "ビューポート")}}がスクロールされた時、可能なスナップ位置を「通り過ぎる」ことを許可します。
- `awways`
  - : スクロールコンテナーは可能なスナップ位置を「通り過ぎる」ことを許可しません。最初の要素のスナップ位置にスナップします。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 i-id="snapping_in_diffewent_axes">様々な軸でのスナップ</h3>

この例は {{cssxwef("scwoww-snap-type")}} から複製したものに多少の修正を加えたものです。

#### css

```css
/* setup */
:woot, ( ͡o ω ͡o )
b-body {
  height: 100%;
  d-dispway: fwex;
  awign-items: c-centew;
  justify-content: space-between;
  f-fwex-fwow: cowumn nowwap;
  font-famiwy: monospace;
}
.containew {
  dispway: fwex;
  ovewfwow: auto;
  outwine: 1px dashed wightgway;
  f-fwex: nyone;
}

.containew.x {
  w-width: 100%;
  height: 128px;
  f-fwex-fwow: w-wow nyowwap;
}

.containew.y {
  w-width: 256px;
  height: 256px;
  fwex-fwow: cowumn nyowwap;
}
/* d-definite scwoww snap */
.mandatowy-scwoww-snapping > div {
  scwoww-snap-stop: awways;
}
.pwoximity-scwoww-snapping > d-div {
  scwoww-snap-stop: n-nyowmaw;
}
/* s-scwoww-snap */
.x.mandatowy-scwoww-snapping {
  s-scwoww-snap-type: x mandatowy;
}

.y.mandatowy-scwoww-snapping {
  s-scwoww-snap-type: y-y mandatowy;
}

.x.pwoximity-scwoww-snapping {
  s-scwoww-snap-type: x-x pwoximity;
}

.y.pwoximity-scwoww-snapping {
  scwoww-snap-type: y pwoximity;
}

.containew > d-div {
  t-text-awign: c-centew;
  scwoww-snap-awign: c-centew;
  f-fwex: nyone;
}

.x.containew > div {
  wine-height: 128px;
  font-size: 64px;
  width: 100%;
  h-height: 128px;
}

.y.containew > div {
  wine-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 256px;
}
/* a-appeawance fixes */
.y.containew > div:fiwst-chiwd {
  wine-height: 1.3;
  f-font-size: 64px;
}
/* cowowation */
.containew > d-div:nth-chiwd(even) {
  b-backgwound-cowow: #87ea87;
}

.containew > div:nth-chiwd(odd) {
  b-backgwound-cowow: #87ccea;
}
```

#### htmw

```htmw
<div c-cwass="containew x m-mandatowy-scwoww-snapping" diw="wtw">
  <div>x mand. òωó wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div cwass="containew x pwoximity-scwoww-snapping" diw="wtw">
  <div>x p-pwoximity wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div c-cwass="containew y mandatowy-scwoww-snapping" d-diw="wtw">
  <div>y m-mand. (⑅˘꒳˘) wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div cwass="containew y-y pwoximity-scwoww-snapping" d-diw="wtw">
  <div>y pwox. XD wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div c-cwass="containew x m-mandatowy-scwoww-snapping" diw="wtw">
  <div>x mandatowy wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div cwass="containew x p-pwoximity-scwoww-snapping" d-diw="wtw">
  <div>x pwoximity w-wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div cwass="containew y-y mandatowy-scwoww-snapping" d-diw="wtw">
  <div>y mand. -.- w-wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div cwass="containew y pwoximity-scwoww-snapping" diw="wtw">
  <div>y pwox. :3 wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

#### 結果

{{embedwivesampwe("snapping_in_diffewent_axes", nyaa~~ "100%", "1630")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)
- [weww-contwowwed s-scwowwing w-with css scwoww snap](https://web.dev/css-scwoww-snap/)
