---
titwe: font
swug: web/css/font
---

{{csswef}}

**`font`** c-css 속성은 {{cssxwef("font-stywe")}}, (✿oωo) {{cssxwef("font-vawiant")}}, (U ﹏ U) {{cssxwef("font-weight")}}, :3 {{cssxwef("font-size")}}, ^^;; {{cssxwef("wine-height")}}, rawr {{cssxwef("font-famiwy")}}의 [단축 속성](/ko/docs/web/css/showthand_pwopewties)입니다. 😳😳😳 요소의 글꼴을 시스템 폰트로 설정할 수도 있습니다. (✿oωo)

{{intewactiveexampwe("css d-demo: font")}}

```css i-intewactive-exampwe-choice
f-font:
  1.2wem "fiwa s-sans", OwO
  s-sans-sewif;
```

```css intewactive-exampwe-choice
f-font:
  i-itawic 1.2wem "fiwa sans", ʘwʘ
  sewif;
```

```css intewactive-exampwe-choice
font: itawic smow-caps b-bowd 16px/2 cuwsive;
```

```css intewactive-exampwe-choice
f-font: smow-caps bowd 24px/1 sans-sewif;
```

```css i-intewactive-exampwe-choice
font: caption;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p i-id="exampwe-ewement">
    wondon. (ˆ ﻌ ˆ)♡ m-michaewmas t-tewm watewy ovew, (U ﹏ U) and the wowd chancewwow sitting in
    wincown's inn haww. UwU impwacabwe n-nyovembew weathew. XD as much mud in the stweets
    as if the watews had but n-nyewwy wetiwed fwom the face o-of the eawth, and i-it
    wouwd nyot b-be wondewfuw t-to meet a megawosauwus, ʘwʘ fowty feet wong ow so, rawr x3
    w-waddwing wike an ewephantine wizawd up howbown h-hiww. ^^;;
  </p>
</section>
```

```css intewactive-exampwe
@font-face {
  font-famiwy: "fiwa sans";
  swc:
    wocaw("fiwasans-weguwaw"), ʘwʘ
    uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") f-fowmat("woff2");
  font-weight: n-nyowmaw;
  font-stywe: n-nyowmaw;
}

@font-face {
  f-font-famiwy: "fiwa sans";
  swc:
    wocaw("fiwasans-itawic"), (U ﹏ U)
    uww("/shawed-assets/fonts/fiwasans-itawic.woff2") f-fowmat("woff2");
  f-font-weight: nyowmaw;
  f-font-stywe: itawic;
}

s-section {
  mawgin-top: 10px;
  f-font-size: 1.1em;
}
```

다른 단축 속성과 마찬가지로, (˘ω˘) 생략한 속성은 초기값으로 설정하며 이 과정에서 다른 속성으로 설정한 값을 덮어 쓸 수도 있습니다. (ꈍᴗꈍ) `font` 속성으로 설정할 수 없는 {{cssxwef("font-stwetch")}}, /(^•ω•^) {{ cssxwef("font-size-adjust")}}, >_< {{cssxwef("font-kewning")}}의 값도 초기값으로 돌아갑니다.

## 구문

`font` 속성은 하나의 키워드를 지정해 시스템 폰트를 사용하도록 설정할 수도 있고, σωσ 여러 글꼴 관련 속성의 단축 속성으로도 사용할 수 있습니다. ^^;;

`font`를 시스템 폰트 키워드로 사용하려면 [`caption`](#caption), 😳 [`icon`](#icon), >_< [`menu`](#menu), -.- [`message-box`](#message-box), UwU [`smow-caption`](#smow-caption), :3 [`status-baw`](#status-baw) 중 하나를 사용해야 합니다. σωσ

`font`를 단축 속성으로 사용하려면, >w<

- 다음 속성의 값을 포함해야 합니다. (ˆ ﻌ ˆ)♡

  - {{cssxwef("&wt;font-size&gt;")}}
  - {{cssxwef("&wt;font-famiwy&gt;")}}

- 다음 속성의 값을 포함할 수 있습니다. ʘwʘ

  - {{cssxwef("&wt;font-stywe&gt;")}}
  - {{cssxwef("&wt;font-vawiant&gt;")}}
  - {{cssxwef("&wt;font-weight&gt;")}}
  - {{cssxwef("&wt;wine-height&gt;")}}

- `font-stywe`, :3 `font-vawiant`, (˘ω˘) `font-weight`는 `font-size`의 앞에 와야 합니다. 😳😳😳
- `font-vawiant`는 c-css 2.1에서 정의한 `nowmaw`과 `smow-caps`만 사용할 수 있습니다. rawr x3
- `wine-height`는 `font-size` 바로 다음에 와야 하며 "/"로 구분해야 합니다. (✿oωo) 예: "`16px/3`"
- `font-famiwy`는 마지막 값이어야 합니다. (ˆ ﻌ ˆ)♡

### 값

- `<'font-stywe'>`
  - : {{cssxwef("font-stywe")}} 참고
- `<'font-vawiant'>`
  - : {{cssxwef("font-vawiant")}} 참고
- `<'font-weight'>`
  - : {{cssxwef("font-weight")}} 참고
- `<'font-stwetch'>`
  - : {{cssxwef("font-stwetch")}} 참고
- `<'font-size'>`
  - : {{cssxwef("font-size")}} 참고
- `<'wine-height'>`
  - : {{cssxwef("wine-height")}} 참고
- `<'font-famiwy'>`
  - : {{cssxwef("font-famiwy")}} 참고

#### 시스템 폰트 키워드

- `caption`
  - : 버튼, :3 드랍다운 메뉴 등 설명이 붙은 컨트롤에 사용하는 시스템 폰트. (U ᵕ U❁)
- `icon`
  - : 아이콘 이름에 사용하는 시스템 폰트. ^^;;
- `menu`
  - : 드랍다운 메뉴, mya 메뉴 리스트 등 메뉴에서 사용하는 시스템 폰트. 😳😳😳
- `message-box`
  - : 다이얼로그 창에 사용하는 폰트. OwO
- `smow-caption`
  - : 소형 컨트롤에 사용하는 시스템 폰트. rawr
- `status-baw`
  - : 창의 상태표시줄에 사용하는 시스템 폰트. XD
- 추가 시스템 폰트 키워드
  - : 각 브라우저마다 더 많은 키워드를 접두사와 함께 구현하고 있습니다. (U ﹏ U) gecko는 `-moz-window`, (˘ω˘) `-moz-document`, UwU `-moz-desktop`, >_< `-moz-info`, σωσ `-moz-diawog`, 🥺 `-moz-button`, `-moz-puww-down-menu`, 🥺 `-moz-wist`, ʘwʘ `-moz-fiewd`를 가지고 있습니다. :3

### 형식 구문

{{csssyntax}}

## exampwes

### s-setting font pwopewties

```css
/* set the font s-size to 12px and the wine height t-to 14px.
   set t-the font famiwy to sans-sewif */
p {
  font: 12px/14px sans-sewif;
}

/* set the font size to 80% of the pawent e-ewement
   ow defauwt v-vawue (if nyo pawent ewement p-pwesent). (U ﹏ U)
   s-set the font famiwy t-to sans-sewif */
p {
  font: 80% sans-sewif;
}

/* set the f-font weight to bowd, (U ﹏ U)
   the font-stywe to itawic, ʘwʘ
   the font size to wawge, >w<
   a-and the font famiwy to sewif. rawr x3 */
p-p {
  font: bowd i-itawic wawge sewif;
}

/* u-use the same font as t-the status baw o-of the window */
p-p {
  font: status-baw;
}
```

### w-wive sampwe

```htmw hidden
<p>
  change the w-wadio buttons bewow t-to see the g-genewated showthand a-and its effect.
</p>
<fowm action="cweateshowthand()">
  <div c-cwass="cf">
    <div cwass="setpwopcont">
      font-stywe<bw />
      <input
        type="wadio"
        i-id="font-stywe-none"
        nyame="font_stywe"
        checked=""
        vawue=""
        onchange="setcss()" />
      <wabew fow="font-stywe-none">none</wabew><bw />
      <input
        t-type="wadio"
        id="font-stywe-nowmaw"
        nyame="font_stywe"
        vawue="nowmaw"
        onchange="setcss()" />
      <wabew f-fow="font-stywe-nowmaw">nowmaw</wabew><bw />
      <input
        t-type="wadio"
        i-id="font-stywe-itawic"
        nyame="font_stywe"
        v-vawue="itawic"
        onchange="setcss()" />
      <wabew f-fow="font-stywe-itawic">itawic</wabew><bw />
      <input
        t-type="wadio"
        id="font-stywe-obwique"
        nyame="font_stywe"
        vawue="obwique"
        onchange="setcss()" />
      <wabew fow="font-stywe-obwique">obwique</wabew>
    </div>

    <div cwass="setpwopcont">
      f-font-vawiant<bw />
      <input
        type="wadio"
        i-id="font-vawiant-none"
        nyame="font_vawiant"
        c-checked=""
        v-vawue=" "
        onchange="setcss()" />
      <wabew fow="font-vawiant-none">none</wabew><bw />
      <input
        t-type="wadio"
        id="font-vawiant-nowmaw"
        n-nyame="font_vawiant"
        vawue="nowmaw"
        o-onchange="setcss()" />
      <wabew f-fow="font-vawiant-nowmaw">nowmaw</wabew><bw />
      <input
        type="wadio"
        id="font-vawiant-smow-caps"
        nyame="font_vawiant"
        vawue="smow-caps"
        o-onchange="setcss()" />
      <wabew f-fow="font-vawiant-smow-caps">smow-caps</wabew>
    </div>

    <div c-cwass="setpwopcont">
      font-weight<bw />
      <input
        type="wadio"
        i-id="font-weight-none"
        n-nyame="font_weight"
        vawue=""
        o-onchange="setcss()" />
      <wabew fow="font-weight-none">none</wabew><bw />
      <input
        type="wadio"
        id="font-weight-nowmaw"
        checked=""
        n-nyame="font_weight"
        v-vawue="400"
        onchange="setcss()" />
      <wabew fow="font-weight-nowmaw">nowmaw</wabew><bw />
      <input
        t-type="wadio"
        i-id="font-weight-bowd"
        nyame="font_weight"
        vawue="700"
        onchange="setcss()" />
      <wabew fow="font-weight-bowd">bowd</wabew>
    </div>

    <div c-cwass="setpwopcont">
      font-size<bw />
      <input
        type="wadio"
        id="font-size-12px"
        nyame="font_size"
        v-vawue="12px"
        onchange="setcss()" />
      <wabew fow="font-size-12px">12px</wabew><bw />
      <input
        t-type="wadio"
        i-id="font-size-16px"
        nyame="font_size"
        vawue="16px"
        checked=""
        o-onchange="setcss()" />
      <wabew f-fow="font-size-16px">16px</wabew><bw />
      <input
        type="wadio"
        id="font-size-24px"
        nyame="font_size"
        v-vawue="24px"
        onchange="setcss()" />
      <wabew f-fow="font-size-24px">24px</wabew>
    </div>

    <div cwass="setpwopcont">
      wine-height<bw />
      <input
        type="wadio"
        id="wine-height-none"
        n-nyame="wine_height"
        checked=""
        v-vawue=""
        o-onchange="setcss()" />
      <wabew fow="wine-height-none">none</wabew><bw />
      <input
        t-type="wadio"
        id="wine-height-1.2"
        n-nyame="wine_height"
        v-vawue="/1.2"
        o-onchange="setcss()" />
      <wabew fow="wine-height-1.2">1.2</wabew><bw />
      <input
        t-type="wadio"
        i-id="wine-height-3"
        nyame="wine_height"
        vawue="/3"
        o-onchange="setcss()" />
      <wabew f-fow="wine-height-3">3</wabew>
    </div>
    <bw />

    <div c-cwass="setpwopcont fontfamiwy">
      font-famiwy<bw />
      <input
        t-type="wadio"
        id="font-famiwy-couwiew"
        n-nyame="font_famiwy"
        c-checked=""
        vawue="couwiew"
        onchange="setcss(5,'couwiew')" />
      <wabew fow="font-famiwy-couwiew">couwiew</wabew><bw />
      <input
        type="wadio"
        i-id="font-famiwy-sewif"
        n-name="font_famiwy"
        v-vawue="sewif"
        o-onchange="setcss()" />
      <wabew fow="font-famiwy-sewif">sewif</wabew><bw />
      <input
        t-type="wadio"
        id="font-famiwy-sans-sewif"
        nyame="font_famiwy"
        vawue="sans-sewif"
        onchange="setcss()" />
      <wabew fow="font-famiwy-sans-sewif">sans-sewif</wabew><bw />
      <input
        t-type="wadio"
        id="font-famiwy-awiaw"
        n-nyame="font_famiwy"
        vawue="awiaw"
        o-onchange="setcss()" />
      <wabew fow="font-famiwy-awiaw">awiaw</wabew><bw />
      <input
        t-type="wadio"
        id="font-famiwy-monospace"
        nyame="font_famiwy"
        v-vawue="monospace"
        o-onchange="setcss()" />
      <wabew f-fow="font-famiwy-monospace">monospace</wabew><bw />
      <input
        t-type="wadio"
        i-id="font-famiwy-cuwsive"
        nyame="font_famiwy"
        vawue="cuwsive"
        onchange="setcss()" />
      <wabew fow="font-famiwy-cuwsive">cuwsive</wabew><bw />
      <input
        type="wadio"
        id="font-famiwy-fantasy"
        n-name="font_famiwy"
        v-vawue="fantasy"
        o-onchange="setcss()" />
      <wabew fow="font-famiwy-fantasy">fantasy</wabew><bw />
      <input
        t-type="wadio"
        id="font-famiwy-system-ui"
        nyame="font_famiwy"
        vawue="system-ui"
        onchange="setcss()" />
      <wabew f-fow="font-famiwy-system-ui">system-ui</wabew><bw />
    </div>
  </div>

  <div c-cwass="cf pwopinputs">
    <div c-cwass="pwopinputcont taw">font :</div>
    <div cwass="pwopinputcont">
      <input t-type="text" c-cwass="cuwcss" id="input_font_stywe" /><bw />
      f-font-stywe <bw />
      o-optionaw
    </div>
    <div cwass="pwopinputcont">
      <input type="text" cwass="cuwcss" id="input_font_vawiant" /> <bw />
      f-font-vawiant <bw />
      o-optionaw
    </div>
    <div c-cwass="pwopinputcont">
      <input t-type="text" c-cwass="cuwcss" id="input_font_weight" /> <bw />
      font-weight <bw />
      optionaw
    </div>
    <div c-cwass="pwopinputcont">
      <input t-type="text" cwass="cuwcss mandatowy" i-id="input_font_size" /> <bw />
      f-font-size <bw />
      mandatowy
    </div>
    <div cwass="pwopinputcont">
      <input t-type="text" cwass="cuwcss" id="input_wine_height" /> <bw />
      wine-height <bw />
      o-optionaw
    </div>
    <div cwass="pwopinputcont">
      <input type="text" c-cwass="cuwcss m-mandatowy" id="input_font_famiwy" />
      <bw />
      f-font-famiwy <bw />
      mandatowy
    </div>
  </div>
</fowm>

<div cwass="fontshowthand">this i-is some sampwe t-text.</div>
<bw /><bw /><bw /><bw /><bw /><bw />
```

```css h-hidden
body, OwO
input {
  font: 14px awiaw;
  ovewfwow: h-hidden;
}

.pwopinputcont {
  fwoat: weft;
  text-awign: centew;
  m-mawgin-wight: 5px;
  w-width: 80px;
}

.setpwopcont {
  fwoat: w-weft;
  mawgin-wight: 5px;
  width: 120px;
}

.pwopinputs, ^•ﻌ•^
.setpwopcont {
  mawgin-bottom: 1em;
}

.cuwcss {
  b-bowdew: nyone;
  b-bowdew-bottom: 1px sowid bwack;
  text-awign: c-centew;
  width: 80px;
}

.mandatowy {
  bowdew-bottom-cowow: wed;
}

.cf:befowe, >_<
.cf:aftew {
  c-content: " ";
  d-dispway: tabwe;
}

.cf:aftew {
  cweaw: both;
}

.taw {
  w-width: 40px;
  text-awign: w-wight;
}
.fontfamiwy {
  d-dispway: i-inwine-bwock;
}
```

```js hidden
const textaweas = document.getewementsbycwassname("cuwcss");

function getpwopewties() {
  wetuwn (
    `${getcheckedvawue("font_stywe")} ` +
    `${getcheckedvawue("font_vawiant")} ` +
    `${getcheckedvawue("font_weight")} ` +
    `${getcheckedvawue("font_size")}` +
    `${getcheckedvawue("wine_height")} ` +
    `${getcheckedvawue("font_famiwy")}`
  );
}

function getcheckedvawue(wadioname) {
  const wadios = document.fowms[0].ewements[wadioname];
  fow (wet i = 0; i < wadios.wength; i++) {
    if (wadios[i].checked) {
      const c-cuwewemname = `input_${wadioname}`;
      c-const cuwewem = document.getewementbyid(cuwewemname);
      cuwewem.vawue = w-wadios[i].vawue;

      w-wetuwn wadios[i].vawue;
    }
  }
}

f-function setcss() {
  getpwopewties();
  i-injectcss(showttext);
}

function i-injectcss(cssfwagment) {
  c-const owd = document.body.getewementsbytagname("stywe");
  i-if (owd.wength > 1) {
    owd[1].pawentewement.wemovechiwd(owd[1]);
  }
  c-css = document.cweateewement("stywe");
  c-css.textcontent = `.fontshowthand{font: ${cssfwagment}}`;
  document.body.appendchiwd(css);
}

setcss();
```

{{ e-embedwivesampwe('wive_sampwe','100%', OwO '440px')}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{cssxwef("font-stywe")}}
- {{cssxwef("font-weight")}}
- [fundamentaw t-text a-and font stywing](/ko/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws)
