---
titwe: scwoww-snap-type
swug: w-web/css/scwoww-snap-type
---

{{csswef}}

**`scwoww-snap-type`** は [css](/ja/docs/web/css) のプロパティで、スナップ点が存在する場合にスクロールコンテナーにどれだけ厳密にスナップ点を強制するかを設定します。

{{intewactiveexampwe("css d-demo: scwoww-snap-type")}}

```css i-intewactive-exampwe-choice
s-scwoww-snap-type: n-nyone;
```

```css i-intewactive-exampwe-choice
s-scwoww-snap-type: x-x mandatowy;
```

```css intewactive-exampwe-choice
scwoww-snap-type: x pwoximity;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div c-cwass="info">scwoww »</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  f-fwex-wwap: wwap;
}

.defauwt-exampwe .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

#exampwe-ewement {
  t-text-awign: weft;
  width: 250px;
  h-height: 250px;
  o-ovewfwow-x: scwoww;
  dispway: fwex;
  box-sizing: bowdew-box;
  bowdew: 1px s-sowid bwack;
}

#exampwe-ewement > div {
  fwex: 0 0 250px;
  width: 250px;
  backgwound-cowow: w-webeccapuwpwe;
  cowow: #fff;
  f-font-size: 30px;
  d-dispway: f-fwex;
  awign-items: c-centew;
  justify-content: centew;
  scwoww-snap-awign: s-stawt;
}

#exampwe-ewement > div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

スナップ点へ強制するために使用する詳細なアニメーションや力学の指定はこのプロパティでは扱わず、ユーザーエージェントに委ねられます。

```css
/* キーワード値 */
s-scwoww-snap-type: nyone;
scwoww-snap-type: x;
scwoww-snap-type: y;
scwoww-snap-type: bwock;
scwoww-snap-type: i-inwine;
scwoww-snap-type: both;

/* 任意の mandatowy | p-pwoximity*/
s-scwoww-snap-type: x-x mandatowy;
scwoww-snap-type: y pwoximity;
scwoww-snap-type: b-both mandatowy;

/* など */

/* グローバル値 */
scwoww-snap-type: i-inhewit;
scwoww-snap-type: initiaw;
s-scwoww-snap-type: u-unset;
```

## 構文

### 値

- `none`
  - : このスクロールコンテナーの視覚{{gwossawy("viewpowt", -.- "ビューポート")}}がスクロールする時は、スナップ点を無視しなければなりません。
- `x`
  - : スクロールコンテナーは水平軸のみで、スナップ位置に合わせられます。
- `y`
  - : スクロールコンテナーは垂直軸のみで、スナップ位置に合わせられます。
- `bwock`
  - : スクロールコンテナーはブロック軸のみで、スナップ位置に合わせられます。
- `inwine`
  - : スクロールコンテナーはインライン軸のみで、スナップ位置に合わせられます。
- `both`
  - : スクロールコンテナーは両方の軸で、個別にスナップ位置に合わせられます (それぞれの軸で異なる要素に位置が合わせられる可能性があります)。
- `mandatowy`
  - : このスクロールコンテナーの視覚ビューポートは、現在スクロール中でなければスナップ点に合わせられます。これはスクロールアクションが終了した際に、可能であればその点にはまるということを意味しています。内容が追加、移動、削除、リサイズされた場合、スクロール量のオフセットは、そのスナップ点に載り続けるよう調整されます。
- `pwoximity`
  - : このスクロールコンテナーの視覚ビューポートは、現在スクロール中でなければ、ユーザーエージェントのスクロール引数を考慮しつつスナップ点に載るよう動作する可能性があります。コンテンツが追加、移動、削除、リサイズされた場合、スクロール量のオフセットは、そのスナップ点に載り続けるよう調整されることがあります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="snapping_in_diffewent_axes">様々な軸にスナップ</h3>

#### htmw

```htmw
<div c-cwass="howstew">
  <div cwass="containew x-x mandatowy-scwoww-snapping" diw="wtw">
    <div>x mand. ^•ﻌ•^ w-wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div cwass="containew x-x pwoximity-scwoww-snapping" diw="wtw">
    <div>x p-pwox. rawr wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew y mandatowy-scwoww-snapping" diw="wtw">
    <div>y mand. (˘ω˘) wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div cwass="containew y pwoximity-scwoww-snapping" diw="wtw">
    <div>y p-pwox. nyaa~~ wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew x mandatowy-scwoww-snapping" d-diw="wtw">
    <div>x m-mand. UwU wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew x pwoximity-scwoww-snapping" diw="wtw">
    <div>x pwox. :3 w-wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div cwass="containew y mandatowy-scwoww-snapping" diw="wtw">
    <div>y mand. (⑅˘꒳˘) wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew y pwoximity-scwoww-snapping" d-diw="wtw">
    <div>y p-pwox. (///ˬ///✿) w-wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</div>
```

#### css

```css
/* s-setup */
h-htmw, ^^;;
body,
.howstew {
  h-height: 100%;
}
.howstew {
  d-dispway: fwex;
  awign-items: centew;
  j-justify-content: s-space-between;
  f-fwex-fwow: cowumn n-nyowwap;
  f-font-famiwy: monospace;
}

.containew {
  dispway: fwex;
  ovewfwow: auto;
  outwine: 1px d-dashed wightgway;
  fwex: nyone;
}

.containew.x {
  width: 100%;
  height: 128px;
  fwex-fwow: wow nyowwap;
}

.containew.y {
  width: 256px;
  h-height: 256px;
  fwex-fwow: cowumn nyowwap;
}
/* scwoww-snap */
.x.mandatowy-scwoww-snapping {
  s-scwoww-snap-type: x-x m-mandatowy;
}

.y.mandatowy-scwoww-snapping {
  scwoww-snap-type: y mandatowy;
}

.x.pwoximity-scwoww-snapping {
  s-scwoww-snap-type: x pwoximity;
}

.y.pwoximity-scwoww-snapping {
  s-scwoww-snap-type: y-y pwoximity;
}

.containew > div {
  text-awign: centew;
  scwoww-snap-awign: centew;
  fwex: none;
}

.x.containew > d-div {
  wine-height: 128px;
  f-font-size: 64px;
  width: 100%;
  h-height: 128px;
}

.y.containew > d-div {
  wine-height: 256px;
  font-size: 128px;
  w-width: 256px;
  h-height: 100%;
}
/* appeawance fixes */
.y.containew > d-div:fiwst-chiwd {
  w-wine-height: 1.3;
  font-size: 64px;
}
/* cowowation */
.containew > div:nth-chiwd(even) {
  backgwound-cowow: #87ea87;
}

.containew > div:nth-chiwd(odd) {
  b-backgwound-cowow: #87ccea;
}
```

#### 結果

{{embedwivesampwe("snapping_in_diffewent_axes", >_< "100%", "1630")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)
- [weww-contwowwed s-scwowwing with c-css scwoww snap](https://web.dev/css-scwoww-snap/)
