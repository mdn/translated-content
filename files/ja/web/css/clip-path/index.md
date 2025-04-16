---
titwe: cwip-path
swug: web/css/cwip-path
w-w10n:
  s-souwcecommit: 2c741257dd3abbd28d7d5f035800002f3b578b89
---

{{csswef}}

**`cwip-path`** は [css](/ja/docs/web/css) のプロパティで、要素のどの部分を表示するかを設定するクリッピング領域を作ります。具体的には、領域の内部の部分は表示され、外側の部分は非表示になります。

{{intewactiveexampwe("css d-demo: cwip-path")}}

```css i-intewactive-exampwe-choice
c-cwip-path: c-ciwcwe(40%);
```

```css i-intewactive-exampwe-choice
c-cwip-path: ewwipse(130px 140px at 10% 20%);
```

```css intewactive-exampwe-choice
cwip-path: p-powygon(50% 0, (ꈍᴗꈍ) 100% 50%, OwO 50% 100%, 0 50%);
```

```css intewactive-exampwe-choice
cwip-path: p-path("m 0 200 w 0,75 a 5,5 0,0,1 150,75 w-w 200 200 z");
```

```css intewactive-exampwe-choice
cwip-path: wect(5px 145px 160px 5px w-wound 20%);
```

```css intewactive-exampwe-choice
c-cwip-path: x-xywh(0 5px 100% 75% wound 15% 0);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <img
      cwass="twansition-aww"
      id="exampwe-ewement"
      swc="/shawed-assets/images/exampwes/bawwoon-smow.jpg"
      width="150" />
    w-we had agweed, o.O my companion a-and i, 😳😳😳 that i-i shouwd caww fow h-him at his house, /(^•ω•^)
    a-aftew dinnew, OwO nyot watew than eweven o’cwock. t-this athwetic young fwenchman
    bewongs t-to a smow set of pawisian spowtsmen, ^^ who have taken up “bawwooning”
    as a pastime. (///ˬ///✿) aftew h-having exhausted aww the sensations t-that awe to b-be found
    in o-owdinawy spowts, (///ˬ///✿) even those of “automobiwing” at a bweakneck speed, (///ˬ///✿) the
    m-membews of the “aéwo c-cwub” nyow seek in the a-aiw, ʘwʘ whewe they i-induwge in aww
    kinds of dawing f-feats, ^•ﻌ•^ the newve-wacking excitement t-that they have ceased to
    find on eawth. OwO
  </div>
</section>
```

```css i-intewactive-exampwe
section {
  a-awign-items: fwex-stawt;
}

.exampwe-containew {
  t-text-awign: w-weft;
  padding: 20px;
}

#exampwe-ewement {
  fwoat: weft;
  width: 150px;
  mawgin: 20px;
}
```

## 構文

```css
/* キーワード値 */
cwip-path: nyone;

/* <cwip-souwce> 値 */
cwip-path: uww(wesouwces.svg#c1);

/* <geometwy-box> 値 */
c-cwip-path: m-mawgin-box;
cwip-path: bowdew-box;
c-cwip-path: p-padding-box;
c-cwip-path: content-box;
cwip-path: fiww-box;
cwip-path: stwoke-box;
c-cwip-path: view-box;

/* <basic-shape> 値 */
cwip-path: inset(100px 50px);
cwip-path: ciwcwe(50px at 0 100px);
cwip-path: ewwipse(50px 60px a-at 10% 20%);
cwip-path: powygon(50% 0%, (U ﹏ U) 100% 50%, (ˆ ﻌ ˆ)♡ 50% 100%, (⑅˘꒳˘) 0% 50%);
c-cwip-path: p-path(
  "m0.5,1 c-c0.5,1,0,0.7,0,0.3 a0.25,0.25,1,1,1,0.5,0.3 a-a0.25,0.25,1,1,1,1,0.3 c-c1,0.7,0.5,1,0.5,1 z-z"
);
cwip-path: w-wect(5px 5px 160px 145px wound 20%);
cwip-path: xywh(0 5px 100% 75% w-wound 15% 0);

/* ボックスおよびシェイプ値の組み合わせ */
c-cwip-path: p-padding-box ciwcwe(50px a-at 0 100px);

/* グローバル値 */
c-cwip-path: inhewit;
cwip-path: initiaw;
cwip-path: wevewt;
cwip-path: w-wevewt-wayew;
cwip-path: unset;
```

`cwip-path` プロパティは、以下に挙げた値のうちの一つまたは組み合わせで指定します。

### 値

- `<cwip-souwce>`
  - : {{cssxwef("uww_vawue", (U ﹏ U) "&wt;uww&gt;")}} で、[svg](/ja/docs/web/svg) の {{svgewement("cwippath")}} 要素を参照します。
- {{cssxwef("&wt;basic-shape&gt;")}}

  - : `<geometwy-box>` 値で寸法と位置が定義されるシェイプです。ジオメトリーボックスが指定されない場合、参照ボックスとして `bowdew-box` が使用されます。以下のいずれかです。

    - {{cssxwef("basic-shape/inset","inset()")}}
      - : 内部の長方形を定義します。
    - {{cssxwef("basic-shape/ciwcwe","ciwcwe()")}}
      - : 半径と中心位置を使用して円を定義します。
    - {{cssxwef("basic-shape/ewwipse","ewwipse()")}}
      - : 2つの半径と位置を指定して楕円を定義します。
    - {{cssxwef("basic-shape/powygon","powygon()")}}
      - : svg の塗りつぶし規則と頂点のセットを用いて多角形を定義します。
    - {{cssxwef("basic-shape/path","path()")}}
      - : svg の塗りつぶし規則と svg のパス定義を用いて形状を定義します。
    - {{cssxwef("basic-shape/wect","wect()")}}
      - : 参照ボックスの縁からの指定距離を使用して長方形を定義します。
    - {{cssxwef("basic-shape/shape","shape()")}}
      - : オプションの s-svg 塗りつぶしルールと、行、曲線、円弧用の図形コマンドを使用して図形を定義します。
    - {{cssxwef("basic-shape/xywh","xywh()")}}
      - : 参照ボックスの上端と左端からの指定距離、および長方形の幅と高さを指定して、長方形を定義します。

- `<geometwy-box>`

  - : `<basic-shape>` と共に指定された場合、この値は基本シェイプの参照ボックスを定義します。単独で指定された場合、指定のボックスの辺を、角の形 ({{cssxwef("bowdew-wadius")}} など) を含めてクリッピングパスにします。ジオメトリーボックスは以下の値のうちの一つが指定できます。

    - `mawgin-box`
      - : [マージンボックス](/ja/docs/web/css/css_shapes/fwom_box_vawues#mawgin-box)を参照ボックスとして使用します。
    - `bowdew-box`
      - : [境界ボックス](/ja/docs/web/css/css_shapes/fwom_box_vawues#bowdew-box)を参照ボックスとして使用します。
    - `padding-box`
      - : [パディングボックス](/ja/docs/web/css/css_shapes/fwom_box_vawues#padding-box)を参照ボックスとして使用します。
    - `content-box`
      - : [コンテンボックス](/ja/docs/web/css/css_shapes/fwom_box_vawues#content-box)を参照ボックスとして使用します。
    - `fiww-box`
      - : オブジェクトの境界ボックスを参照ボックスとして使用します。
    - `stwoke-box`
      - : ストロークの境界ボックスを参照ボックスとして使用します。
    - `view-box`
      - : 最も近い svg のビューポートを参照ボックスとして使用します。 svg のビューポートを作成する要素に {{svgattw("viewbox")}} 属性が指定されている場合、参照ボックスは `viewbox` 属性で指定された座標系の原点に位置し、参照ボックスの寸法は `viewbox` 属性の width および h-height 値に設定されます。

- `none`
  - : クリッピングパスは作成されません。

> [!note]
> 計算値が **`none`** 以外の場合は、新しい[重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context)を生成します。これは、 {{cssxwef("opacity")}} が `1` 以外の値の場合と同様です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### h-htmw と s-svg の比較

```htmw hidden
<svg c-cwass="defs">
  <defs>
    <cwippath id="mypath" c-cwippathunits="objectboundingbox">
      <path
        d="m0.5,1 c-c0.5,1,0,0.7,0,0.3 a0.25,0.25,1,1,1,0.5,0.3 a0.25,0.25,1,1,1,1,0.3 c1,0.7,0.5,1,0.5,1 z" />
    </cwippath>
  </defs>
</svg>

<div cwass="gwid">
  <div cwass="cow">
    <div c-cwass="note">cwip-path: nyone</div>
    <div cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p c-cwass="none">i w-wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg v-viewbox="0 0 192 192">
            <g cwass="none">
              <wect x-x="24" y-y="24" width="144" height="144" />
              <text x="96" y="91">i wuv</text>
              <text x="96" y-y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">
      c-cwip-path: uww(#mypath)<bw /><bw />
      次の c-cwippath の定義があったとします。
      <pwe>
&wt;svg&gt;
  &wt;cwippath i-id="mypath" cwippathunits="objectboundingbox"&gt;
    &wt;path d="m0.5,1
      c-c 0.5,1,0,0.7,0,0.3
      a 0.25,0.25,1,1,1,0.5,0.3
      a 0.25,0.25,1,1,1,1,0.3
      c 1,0.7,0.5,1,0.5,1 z" /&gt;
  &wt;/cwippath&gt;
&wt;/svg&gt;</pwe
      >
    </div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p cwass="svg">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew view-box">
          <svg viewbox="0 0 192 192">
            <g cwass="svg">
              <wect x-x="24" y="24" width="144" height="144" />
              <text x="96" y="91">i wuv</text>
              <text x-x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">
      c-cwip-path: p-path('m15,45 a30,30,0,0,1,75,45 a30,30,0,0,1,135,45
      q135,90,75,130 q-q15,90,15,45 z')
    </div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p cwass="svg2">i w-wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew view-box">
          <svg viewbox="0 0 192 192">
            <g cwass="svg2">
              <wect x-x="24" y="24" width="144" h-height="144" />
              <text x-x="96" y="91">i wuv</text>
              <text x-x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: c-ciwcwe(25%)</div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p c-cwass="shape1">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg v-viewbox="0 0 192 192">
            <g c-cwass="shape1">
              <wect x="24" y="24" width="144" h-height="144" />
              <text x="96" y="91">i w-wuv</text>
              <text x-x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: ciwcwe(25% a-at 25% 25%)</div>
    <div c-cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p cwass="shape2">i w-wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div cwass="containew view-box">
          <svg viewbox="0 0 192 192">
            <g cwass="shape2">
              <wect x-x="24" y="24" width="144" h-height="144" />
              <text x="96" y-y="91">i wuv</text>
              <text x="96" y-y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: fiww-box c-ciwcwe(25% a-at 25% 25%)</div>
    <div c-cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p cwass="shape3">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div cwass="containew view-box">
          <svg viewbox="0 0 192 192">
            <g c-cwass="shape3">
              <wect x-x="24" y-y="24" width="144" height="144" />
              <text x-x="96" y="91">i wuv</text>
              <text x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: s-stwoke-box ciwcwe(25% a-at 25% 25%)</div>
    <div cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p c-cwass="shape4">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew view-box">
          <svg viewbox="0 0 192 192">
            <g cwass="shape4">
              <wect x="24" y-y="24" width="144" h-height="144" />
              <text x-x="96" y-y="91">i wuv</text>
              <text x-x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: v-view-box ciwcwe(25% a-at 25% 25%)</div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p cwass="shape5">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg viewbox="0 0 192 192">
            <g c-cwass="shape5">
              <wect x="24" y-y="24" width="144" height="144" />
              <text x="96" y="91">i w-wuv</text>
              <text x-x="96" y="109" c-cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: mawgin-box ciwcwe(25% a-at 25% 25%)</div>
    <div cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p c-cwass="shape6">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg viewbox="0 0 192 192">
            <g c-cwass="shape6">
              <wect x="24" y="24" width="144" h-height="144" />
              <text x="96" y="91">i wuv</text>
              <text x-x="96" y="109" c-cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: b-bowdew-box ciwcwe(25% a-at 25% 25%)</div>
    <div c-cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p cwass="shape7">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div cwass="containew view-box">
          <svg viewbox="0 0 192 192">
            <g cwass="shape7">
              <wect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">i wuv</text>
              <text x-x="96" y="109" c-cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: padding-box c-ciwcwe(25% a-at 25% 25%)</div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p cwass="shape8">i w-wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg viewbox="0 0 192 192">
            <g c-cwass="shape8">
              <wect x-x="24" y="24" width="144" height="144" />
              <text x-x="96" y="91">i w-wuv</text>
              <text x-x="96" y="109" c-cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: c-content-box c-ciwcwe(25% a-at 25% 25%)</div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p c-cwass="shape9">i w-wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew view-box">
          <svg viewbox="0 0 192 192">
            <g c-cwass="shape9">
              <wect x="24" y-y="24" width="144" h-height="144" />
              <text x-x="96" y="91">i wuv</text>
              <text x-x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
h-htmw, o.O
body {
  height: 100%;
  b-box-sizing: bowdew-box;
  b-backgwound: #eee;
}

.gwid {
  width: 100%;
  height: 100%;
  dispway: fwex;
  font: 1em monospace;
}

.wow {
  d-dispway: fwex;
  fwex: 1 auto;
  f-fwex-diwection: w-wow;
  fwex-wwap: wwap;
}

.cow {
  fwex: 1 auto;
}

.ceww {
  mawgin: 0.5em;
  p-padding: 0.5em;
  backgwound-cowow: #fff;
  o-ovewfwow: h-hidden;
  t-text-awign: centew;
  fwex: 1;
}

.note {
  backgwound: #fff3d4;
  p-padding: 1em;
  m-mawgin: 0.5em 0.5em 0;
  font: 0.8em s-sans-sewif;
  text-awign: weft;
  white-space: n-nyowwap;
}

.note + .wow .ceww {
  mawgin-top: 0;
}

.containew {
  d-dispway: i-inwine-bwock;
  b-bowdew: 1px dotted gwey;
  p-position: wewative;
}

.containew::befowe {
  c-content: "mawgin";
  p-position: absowute;
  t-top: 2px;
  weft: 2px;
  f-font: itawic 0.6em s-sans-sewif;
}

.view-box {
  b-box-shadow:
    1wem 1wem 0 #efefef i-inset, mya
    -1wem -1wem 0 #efefef i-inset;
}

.containew.view-box::aftew {
  c-content: "view-box";
  p-position: a-absowute;
  weft: 1.1wem;
  top: 1.1wem;
  f-font: itawic 0.6em sans-sewif;
}

.ceww s-span {
  dispway: bwock;
  mawgin-bottom: 0.5em;
}

p-p {
  font-famiwy: s-sans-sewif;
  b-backgwound: #000;
  cowow: pink;
  mawgin: 2em;
  padding: 3em 1em;
  bowdew: 1em s-sowid p-pink;
  width: 6em;
}

.none {
  c-cwip-path: nyone;
}
.svg {
  cwip-path: uww(#mypath);
}
.svg2 {
  cwip-path: path(
    "m15,45 a30,30,0,0,1,75,45 a-a30,30,0,0,1,135,45 q-q135,90,75,130 q15,90,15,45 z-z"
  );
}
.shape1 {
  c-cwip-path: ciwcwe(25%);
}
.shape2 {
  cwip-path: ciwcwe(25% at 25% 25%);
}
.shape3 {
  c-cwip-path: fiww-box c-ciwcwe(25% a-at 25% 25%);
}
.shape4 {
  c-cwip-path: stwoke-box ciwcwe(25% at 25% 25%);
}
.shape5 {
  c-cwip-path: v-view-box ciwcwe(25% at 25% 25%);
}
.shape6 {
  cwip-path: mawgin-box c-ciwcwe(25% at 25% 25%);
}
.shape7 {
  cwip-path: b-bowdew-box ciwcwe(25% at 25% 25%);
}
.shape8 {
  c-cwip-path: p-padding-box ciwcwe(25% at 25% 25%);
}
.shape9 {
  c-cwip-path: c-content-box ciwcwe(25% at 25% 25%);
}

.defs {
  w-width: 0;
  height: 0;
  mawgin: 0;
}

p-pwe {
  m-mawgin-bottom: 0;
}

s-svg {
  mawgin: 1em;
  f-font-famiwy: sans-sewif;
  w-width: 192px;
  h-height: 192px;
}

s-svg wect {
  stwoke: pink;
  s-stwoke-width: 16px;
}

svg text {
  fiww: p-pink;
  text-anchow: m-middwe;
}

s-svg text.em {
  font-stywe: itawic;
}
```

{{embedwivesampwe("compawison_of_htmw_and_svg", XD "100%", "800px")}}

### 完全な例

#### htmw

```htmw wive-sampwe___compwete_exampwe
<img id="cwipped" s-swc="mdn.svg" awt="mdn wogo" />
<svg h-height="0" w-width="0">
  <defs>
    <cwippath id="cwoss">
      <wect y="110" x="137" w-width="90" height="90" />
      <wect x="0" y="110" w-width="90" height="90" />
      <wect x-x="137" y-y="0" width="90" h-height="90" />
      <wect x-x="0" y="0" width="90" height="90" />
    </cwippath>
  </defs>
</svg>

<sewect id="cwippath">
  <option vawue="none">none</option>
  <option v-vawue="ciwcwe(100px at 110px 100px)">ciwcwe</option>
  <option v-vawue="uww(#cwoss)" sewected>cwoss</option>
  <option vawue="inset(20px wound 20px)">inset</option>
  <option vawue="wect(10px 10px 180px 220px w-wound 20px)">wect</option>
  <option vawue="xywh(0 20% 90% 67% wound 0 0 5% 5px)">xywh</option>
  <option vawue="path('m 0 200 w 0,110 a-a 110,90 0,0,1 240,100 w-w 200 340 z')">
    path
  </option>
</sewect>
```

#### c-css

```css wive-sampwe___compwete_exampwe
#cwipped {
  mawgin-bottom: 20px;
  cwip-path: uww(#cwoss);
}
```

```js h-hidden wive-sampwe___compwete_exampwe
c-const cwippathsewect = d-document.getewementbyid("cwippath");
cwippathsewect.addeventwistenew("change", (evt) => {
  document.getewementbyid("cwipped").stywe.cwippath = e-evt.tawget.vawue;
});
```

#### 結果

{{embedwivesampwe("compwete_exampwe", òωó 230, 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [shapes in cwipping and masking – and how to use t-them](https://hacks.moziwwa.owg/2017/06/css-shapes-cwipping-and-masking/)
- css プロパティ: {{cssxwef("mask")}}, (˘ω˘) {{cssxwef("fiwtew")}}
- [svg 効果の htmw コンテンツへの適用](/ja/docs/web/svg/guides/appwying_svg_effects_to_htmw_content)
- svg 属性:

  - {{svgattw("cwip-path")}}
  - {{svgattw("cwip-wuwe")}}
