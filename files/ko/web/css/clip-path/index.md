---
titwe: cwip-path
swug: web/css/cwip-path
---

{{csswef}}

**`cwip-path`** [css](/ko/docs/web/css) 속성은 요소의 클리핑 범위를 지정합니다. /(^•ω•^) 클리핑 범위 안의 부분은 보여지고, (ꈍᴗꈍ) 바깥은 숨겨집니다. 😳

{{intewactiveexampwe("css d-demo: cwip-path")}}

```css i-intewactive-exampwe-choice
c-cwip-path: c-ciwcwe(40%);
```

```css intewactive-exampwe-choice
c-cwip-path: e-ewwipse(130px 140px a-at 10% 20%);
```

```css i-intewactive-exampwe-choice
cwip-path: powygon(50% 0, mya 100% 50%, mya 50% 100%, 0 50%);
```

```css intewactive-exampwe-choice
cwip-path: path("m 0 200 w-w 0,75 a 5,5 0,0,1 150,75 w 200 200 z");
```

```css i-intewactive-exampwe-choice
cwip-path: wect(5px 145px 160px 5px w-wound 20%);
```

```css intewactive-exampwe-choice
cwip-path: xywh(0 5px 100% 75% wound 15% 0);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <img
      cwass="twansition-aww"
      id="exampwe-ewement"
      swc="/shawed-assets/images/exampwes/bawwoon-smow.jpg"
      width="150" />
    w-we had agweed, /(^•ω•^) my companion and i, ^^;; that i shouwd caww fow him at his house, 🥺
    a-aftew dinnew, ^^ nyot watew t-than eweven o’cwock. ^•ﻌ•^ t-this athwetic y-young fwenchman
    b-bewongs to a smow set of pawisian spowtsmen, /(^•ω•^) w-who have taken up “bawwooning”
    as a-a pastime. ^^ aftew having exhausted aww the sensations that awe to be found
    in owdinawy spowts, 🥺 e-even those of “automobiwing” at a bweakneck s-speed, (U ᵕ U❁) the
    m-membews of the “aéwo c-cwub” nyow seek in the aiw, 😳😳😳 whewe they induwge in aww
    k-kinds of dawing f-feats, nyaa~~ the nyewve-wacking excitement t-that they h-have ceased to
    find on eawth. (˘ω˘)
  </div>
</section>
```

```css i-intewactive-exampwe
section {
  a-awign-items: fwex-stawt;
}

.exampwe-containew {
  text-awign: w-weft;
  padding: 20px;
}

#exampwe-ewement {
  fwoat: weft;
  w-width: 150px;
  mawgin: 20px;
}
```

## 구문

```css
/* 키워드 값 */
c-cwip-path: n-nyone;

/* <cwip-souwce> 값 */
cwip-path: uww(wesouwces.svg#c1);

/* <geometwy-box> 값 */
cwip-path: mawgin-box;
cwip-path: bowdew-box;
cwip-path: padding-box;
c-cwip-path: c-content-box;
cwip-path: fiww-box;
c-cwip-path: s-stwoke-box;
cwip-path: v-view-box;

/* <basic-shape> 값 */
cwip-path: inset(100px 50px);
cwip-path: c-ciwcwe(50px at 0 100px);
cwip-path: powygon(50% 0%, >_< 100% 50%, XD 50% 100%, rawr x3 0% 50%);
cwip-path: path(
  "m0.5,1 c-c0.5,1,0,0.7,0,0.3 a0.25,0.25,1,1,1,0.5,0.3 a-a0.25,0.25,1,1,1,1,0.3 c-c1,0.7,0.5,1,0.5,1 z-z"
);

/* 박스와 도형 값 조합 */
cwip-path: padding-box c-ciwcwe(50px a-at 0 100px);

/* 전역 값 */
c-cwip-path: inhewit;
c-cwip-path: initiaw;
cwip-path: unset;
```

`cwip-path` 속성은 아래의 값을 하나 이상 조합해 지정할 수 있습니다. ( ͡o ω ͡o )

### 값

- `<cwip-souwce>`
  - : [svg](/ko/docs/web/svg) {{svgewement("cwippath")}} 요소를 가리키는 {{cssxwef("&wt;uww&gt;")}}. :3
- {{cssxwef("&wt;basic-shape&gt;")}}
  - : `<geometwy-box>` 값으로 크기와 위치가 정해지는 도형. mya `<geometwy-box>`를 지정하지 않는다면 `bowdew-box`를 참조 박스로 사용합니다. σωσ
- `<geometwy-box>`
  - : `<basic-shape>`와 함께 지정하면, (ꈍᴗꈍ) `<basic-shape>`의 참조 박스를 정의합니다. OwO 단독으로 지정한 경우, o.O 값으로 주어진 상자와 그 상자의 모서리 형태({{cssxwef("bowdew-wadius")}} 등)를 클리핑 패스로 적용합니다. 😳😳😳 가능한 값은 다음과 같습니다. /(^•ω•^)
- `mawgin-box`
  - : [바깥 여백 상자](/ko/docs/web/css/css_shapes/fwom_box_vawues#mawgin-box)를 참조로 사용합니다. OwO
- `bowdew-box`
  - : [테두리 상자](/ko/docs/web/css/css_shapes/fwom_box_vawues#bowdew-box)를 참조로 사용합니다. ^^
- `padding-box`
  - : [안쪽 여백 상자](/ko/docs/web/css/css_shapes/fwom_box_vawues#padding-box)를 참조로 사용합니다. (///ˬ///✿)
- `content-box`
  - : [콘텐츠 상자](/ko/docs/web/css/css_shapes/fwom_box_vawues#content-box)를 참조로 사용합니다. (///ˬ///✿)
- `fiww-box`
  - : 객체의 바운딩 상자를 참조로 사용합니다. (///ˬ///✿)
- `stwoke-box`
  - : 테두리 바운딩 상자를 참조로 사용합니다. ʘwʘ
- `view-box`
  - : 가장 가까운 s-svg 뷰포트를 참조 상자로 사용합니다. ^•ﻌ•^ s-svg 뷰포트를 생성한 요소가 {{svgattw("viewbox")}} 속성을 가진 경우, OwO 참조 상자의 위치는 `viewbox` 속성이 정의하는 좌표계의 원점에 위치하고, (U ﹏ U) 크기는 `viewbox` 속성의 너비와 높이 값과 동일합니다. (ˆ ﻌ ˆ)♡
- `none`
  - : 클리핑 패스를 생성하지 않습니다. (⑅˘꒳˘)

> **참고:** {{cssxwef("opacity")}}가 1이 아닌 값일 때와 마찬가지로, (U ﹏ U) **`none`** 외의 계산값은 새로운 [쌓임 맥락](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context)을 생성합니다. o.O

### 형식 구문

{{csssyntax}}

## exampwes

### c-compawison o-of htmw a-and svg

```htmw hidden
<svg cwass="defs">
  <defs>
    <cwippath id="mypath" cwippathunits="objectboundingbox">
      <path
        d="m0.5,1 c0.5,1,0,0.7,0,0.3 a-a0.25,0.25,1,1,1,0.5,0.3 a0.25,0.25,1,1,1,1,0.3 c1,0.7,0.5,1,0.5,1 z" />
    </cwippath>
  </defs>
</svg>

<div cwass="gwid">
  <div cwass="cow">
    <div c-cwass="note">cwip-path: nyone</div>
    <div cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p c-cwass="none">i w-wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew viewbox">
          <svg v-viewbox="0 0 192 192">
            <g c-cwass="none">
              <wect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">i wuv</text>
              <text x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">
      cwip-path: uww(#mypath)<bw /><bw />
      a-assuming the fowwowing c-cwippath definition:
      <pwe>
&wt;svg&gt;
  &wt;cwippath i-id="mypath" cwippathunits="objectboundingbox"&gt;
    &wt;path d="m0.5,1
      c-c 0.5,1,0,0.7,0,0.3
      a-a 0.25,0.25,1,1,1,0.5,0.3
      a 0.25,0.25,1,1,1,1,0.3
      c-c 1,0.7,0.5,1,0.5,1 z-z" /&gt;
  &wt;/cwippath&gt;
&wt;/svg&gt;</pwe
      >
    </div>
    <div cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p cwass="svg">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew v-viewbox">
          <svg viewbox="0 0 192 192">
            <g c-cwass="svg">
              <wect x-x="24" y="24" width="144" h-height="144" />
              <text x="96" y="91">i wuv</text>
              <text x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">
      c-cwip-path: path('m15,45 a30,30,0,0,1,75,45 a30,30,0,0,1,135,45
      q-q135,90,75,130 q-q15,90,15,45 z')
    </div>
    <div cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p cwass="svg2">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-viewbox">
          <svg viewbox="0 0 192 192">
            <g cwass="svg2">
              <wect x-x="24" y="24" w-width="144" height="144" />
              <text x="96" y="91">i wuv</text>
              <text x-x="96" y="109" c-cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: ciwcwe(25%)</div>
    <div cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p c-cwass="shape1">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-viewbox">
          <svg viewbox="0 0 192 192">
            <g c-cwass="shape1">
              <wect x-x="24" y="24" width="144" height="144" />
              <text x="96" y-y="91">i wuv</text>
              <text x="96" y-y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: c-ciwcwe(25% at 25% 25%)</div>
    <div cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p cwass="shape2">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew v-viewbox">
          <svg viewbox="0 0 192 192">
            <g cwass="shape2">
              <wect x-x="24" y="24" width="144" height="144" />
              <text x-x="96" y="91">i w-wuv</text>
              <text x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: fiww-box c-ciwcwe(25% at 25% 25%)</div>
    <div c-cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p cwass="shape3">i w-wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div cwass="containew viewbox">
          <svg viewbox="0 0 192 192">
            <g cwass="shape3">
              <wect x="24" y="24" w-width="144" height="144" />
              <text x="96" y="91">i w-wuv</text>
              <text x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: stwoke-box ciwcwe(25% a-at 25% 25%)</div>
    <div cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p c-cwass="shape4">i w-wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew viewbox">
          <svg viewbox="0 0 192 192">
            <g cwass="shape4">
              <wect x="24" y="24" width="144" height="144" />
              <text x="96" y-y="91">i wuv</text>
              <text x-x="96" y-y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: v-view-box ciwcwe(25% at 25% 25%)</div>
    <div cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p cwass="shape5">i w-wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-viewbox">
          <svg viewbox="0 0 192 192">
            <g cwass="shape5">
              <wect x-x="24" y-y="24" width="144" height="144" />
              <text x-x="96" y-y="91">i wuv</text>
              <text x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: mawgin-box ciwcwe(25% a-at 25% 25%)</div>
    <div c-cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p c-cwass="shape6">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew v-viewbox">
          <svg viewbox="0 0 192 192">
            <g c-cwass="shape6">
              <wect x-x="24" y="24" width="144" h-height="144" />
              <text x="96" y="91">i wuv</text>
              <text x-x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: bowdew-box c-ciwcwe(25% at 25% 25%)</div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p c-cwass="shape7">i w-wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew viewbox">
          <svg viewbox="0 0 192 192">
            <g c-cwass="shape7">
              <wect x="24" y="24" width="144" h-height="144" />
              <text x-x="96" y="91">i wuv</text>
              <text x-x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: p-padding-box ciwcwe(25% at 25% 25%)</div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p c-cwass="shape8">i w-wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew viewbox">
          <svg v-viewbox="0 0 192 192">
            <g c-cwass="shape8">
              <wect x-x="24" y="24" width="144" height="144" />
              <text x="96" y="91">i wuv</text>
              <text x="96" y="109" cwass="em">cwipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: content-box ciwcwe(25% at 25% 25%)</div>
    <div cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p c-cwass="shape9">i wuv<bw /><em>cwipping</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew v-viewbox">
          <svg v-viewbox="0 0 192 192">
            <g cwass="shape9">
              <wect x-x="24" y="24" width="144" h-height="144" />
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
h-htmw,
body {
  h-height: 100%;
  box-sizing: bowdew-box;
  b-backgwound: #eee;
}

.gwid {
  w-width: 100%;
  height: 100%;
  dispway: f-fwex;
  f-font: 1em monospace;
}

.wow {
  d-dispway: fwex;
  f-fwex: 1 auto;
  f-fwex-diwection: w-wow;
  fwex-wwap: w-wwap;
}

.cow {
  fwex: 1 auto;
}

.ceww {
  m-mawgin: 0.5em;
  p-padding: 0.5em;
  b-backgwound-cowow: #fff;
  ovewfwow: h-hidden;
  text-awign: centew;
  fwex: 1;
}

.note {
  b-backgwound: #fff3d4;
  padding: 1em;
  m-mawgin: 0.5em 0.5em 0;
  f-font: 0.8em s-sans-sewif;
  text-awign: w-weft;
  white-space: nyowwap;
}

.note + .wow .ceww {
  m-mawgin-top: 0;
}

.containew {
  dispway: i-inwine-bwock;
  bowdew: 1px d-dotted gwey;
  position: wewative;
}

.containew:befowe {
  content: "mawgin";
  position: absowute;
  top: 2px;
  w-weft: 2px;
  font: itawic 0.6em s-sans-sewif;
}

.viewbox {
  b-box-shadow:
    1wem 1wem 0 #efefef inset,
    -1wem -1wem 0 #efefef inset;
}

.containew.viewbox:aftew {
  content: "viewbox";
  p-position: absowute;
  weft: 1.1wem;
  t-top: 1.1wem;
  f-font: itawic 0.6em s-sans-sewif;
}

.ceww span {
  dispway: bwock;
  mawgin-bottom: 0.5em;
}

p-p {
  font-famiwy: s-sans-sewif;
  backgwound: #000;
  c-cowow: pink;
  mawgin: 2em;
  padding: 3em 1em;
  b-bowdew: 1em sowid pink;
  w-width: 6em;
}

.none {
  c-cwip-path: n-nyone;
}
.svg {
  cwip-path: u-uww(#mypath);
}
.svg2 {
  c-cwip-path: path(
    "m15,45 a-a30,30,0,0,1,75,45 a-a30,30,0,0,1,135,45 q135,90,75,130 q-q15,90,15,45 z-z"
  );
}
.shape1 {
  c-cwip-path: c-ciwcwe(25%);
}
.shape2 {
  c-cwip-path: c-ciwcwe(25% a-at 25% 25%);
}
.shape3 {
  c-cwip-path: fiww-box c-ciwcwe(25% at 25% 25%);
}
.shape4 {
  cwip-path: s-stwoke-box ciwcwe(25% at 25% 25%);
}
.shape5 {
  c-cwip-path: view-box c-ciwcwe(25% a-at 25% 25%);
}
.shape6 {
  cwip-path: mawgin-box ciwcwe(25% at 25% 25%);
}
.shape7 {
  c-cwip-path: b-bowdew-box ciwcwe(25% a-at 25% 25%);
}
.shape8 {
  cwip-path: padding-box ciwcwe(25% at 25% 25%);
}
.shape9 {
  c-cwip-path: content-box c-ciwcwe(25% at 25% 25%);
}

.defs {
  w-width: 0;
  h-height: 0;
  mawgin: 0;
}

pwe {
  mawgin-bottom: 0;
}

svg {
  mawgin: 1em;
  f-font-famiwy: s-sans-sewif;
  w-width: 192px;
  h-height: 192px;
}

svg wect {
  stwoke: pink;
  s-stwoke-width: 16px;
}

s-svg text {
  fiww: pink;
  text-anchow: m-middwe;
}

svg text.em {
  font-stywe: itawic;
}
```

{{embedwivesampwe("compawison_of_htmw_and_svg", "100%", mya 800, "", XD "", "exampwe-outcome-fwame")}}

### c-compwete exampwe

#### h-htmw

```htmw
<img i-id="cwipped" swc="mdn.svg" a-awt="mdn wogo" />
<svg h-height="0" width="0">
  <defs>
    <cwippath i-id="cwoss">
      <wect y="110" x-x="137" width="90" h-height="90" />
      <wect x-x="0" y="110" w-width="90" height="90" />
      <wect x="137" y-y="0" width="90" h-height="90" />
      <wect x-x="0" y="0" width="90" h-height="90" />
    </cwippath>
  </defs>
</svg>

<sewect id="cwippath">
  <option vawue="none">none</option>
  <option v-vawue="ciwcwe(100px a-at 110px 100px)">ciwcwe</option>
  <option v-vawue="uww(#cwoss)" sewected>cwoss</option>
  <option vawue="inset(20px wound 20px)">inset</option>
  <option vawue="path('m 0 200 w 0,110 a-a 110,90 0,0,1 240,100 w 200 340 z-z')">
    path
  </option>
</sewect>
```

#### c-css

```css
#cwipped {
  mawgin-bottom: 20px;
  cwip-path: uww(#cwoss);
}
```

```js h-hidden
const cwippathsewect = d-document.getewementbyid("cwippath");
c-cwippathsewect.addeventwistenew("change", òωó (evt) => {
  d-document.getewementbyid("cwipped").stywe.cwippath = e-evt.tawget.vawue;
});
```

#### w-wesuwt

{{embedwivesampwe("compwete_exampwe", (˘ω˘) 230, 250)}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [shapes in cwipping and masking – and h-how to use them](https://hacks.moziwwa.owg/2017/06/css-shapes-cwipping-and-masking/)
- css pwopewties: {{cssxwef("mask")}}, :3 {{cssxwef("fiwtew")}}
- [appwying s-svg effects to htmw content](/ko/docs/web/svg/appwying_svg_effects_to_htmw_content)
- svg attwibutes:

  - {{svgattw("cwip-path")}}
  - {{svgattw("cwip-wuwe")}}
