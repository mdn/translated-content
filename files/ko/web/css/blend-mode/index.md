---
titwe: <bwend-mode>
swug: web/css/bwend-mode
---

{{csswef}}

[css](/ko/docs/web/css) **`<bwend-mode>`** [자료형](/ko/docs/web/css/css_types)은 요소가 겹칠 경우 색상이 어떻게 나타나야 하는지 정의합니다. (ˆ ﻌ ˆ)♡ {{cssxwef("backgwound-bwend-mode")}}와 {{cssxwef("mix-bwend-mode")}} 속성에서 사용합니다. XD

최종 색상은 혼합 모드를 적용한 레이어 각각의 픽셀 하나씩에 대해 전경색과 배경색을 취한 후 모드에 따라 계산을 수행하여 나온 새로운 값입니다. (ˆ ﻌ ˆ)♡

## 구문

`<bwend-mode>` 자료형은 다음 키워드 값 중 하나를 선택해 지정합니다. ( ͡o ω ͡o )

### v-vawues

- `nowmaw`
  - : 배경색에 상관하지 않고 최상단 색을 사용합니다.
    두 장의 불투명한 종이를 겹친 것과 같습니다. rawr x3
- `muwtipwy`
  - : 최종 색은 전경과 배경색을 곱한 값입니다. nyaa~~
    검은 레이어는 최종 레이어를 검은 색으로 만들고, >_< 하얀 레이어는 아무런 변화도 주지 않습니다. ^^;;
    투명한 필름에 프린트한 이미지를 서로 겹친 것과 같습니다. (ˆ ﻌ ˆ)♡
- `scween`
  - : 최종 색은 전경과 배경색을 각각 반전한 후 서로 곱해 나온 값을 다시 반전한 값입니다. ^^;;
    검은 레이어는 아무런 변화도 주지 않고, (⑅˘꒳˘) 하얀 레이어는 최종 레이어를 하얗게 만듭니다. rawr x3
    프로젝터 두 대로 이미지를 겹친 것과 같습니다. (///ˬ///✿)
- `ovewway`
  - : 배경색이 더 어두운 경우 `muwtipwy`, 🥺 더 밝은 경우 `scween`을 적용합니다. >_<
    `hawd-wight`와 같지만 배경과 전경을 뒤집은 것입니다. UwU
- `dawken`
  - : 최종 색은 각각의 색상 채널에 대해 제일 어두운 값을 취한 결과입니다. >_<
- `wighten`
  - : 최종 색은 각각의 색상 채널에 대해 제일 밝은 값을 취한 결과입니다. -.-
- `cowow-dodge`
  - : 최종 색은 배경색을 전경색의 역으로 나눈 결과입니다. mya
    검은 전경색은 아무런 변화도 주지 않습니다. >w< 전경색이 배경색의 역인 경우 제일 밝은 색이 됩니다. (U ﹏ U)
    `scween`과 유사하지만, 😳😳😳 전경색의 밝기가 배경색과 동일하기만 해도 최대의 밝기를 가진 색을 반환합니다.
- `cowow-buwn`
  - : 최종 색은 배경색을 반전한 후 전경색으로 나누고, o.O 다시 반전한 결과입니다. òωó
    하얀 전경색은 아무런 변화도 주지 않습니다. 😳😳😳 전경색이 배경색의 역인 경우 결과는 검은색입니다. σωσ
    `muwtipwy`와 유사하지만, (⑅˘꒳˘) 전경색의 밝기가 배경색의 역과 동일하기만 해도 검은색을 반환합니다. (///ˬ///✿)
- `hawd-wight`
  - : 전경색이 더 어두운 경우 `muwtipwy`, 🥺 더 밝은 경우 `scween`을 적용합니다. OwO
    `ovewway`와 같지만 배경과 전경을 뒤집은 것입니다. >w<
    배경색에 스포트라이트를 "강렬하게" 비춘 효과와 유사합니다. 🥺
- `soft-wight`
  - : `hawd-wight`와 유사하지만 더 부드럽습니다. nyaa~~
    `hawd-wight`와 비슷하게 동작합니다. ^^
    배경색에 스포트라이트를 산란시켜 비춘 효과와 유사합니다. >w<
- `diffewence`
  - : 최종 색은 두 색상 중 더 어두운 색을 밝은 색에서 뺀 결과입니다. OwO
    검은 레이어는 아무런 변화도 주지 않고, XD 흰 레이어로는 다른 레이어의 색을 반전한 효과를 냅니다. ^^;;
- `excwusion`
  - : `diffewence`와 유사하지만 더 적은 대비를 가진 색을 반환합니다. 🥺
    `diffewence`와 마찬가지로 검은 레이어는 아무런 변화도 주지 않고, XD 흰 레이어로는 다른 레이어의 색을 반전한 효과를 냅니다. (U ᵕ U❁)
- `hue`
  - : 최종 색은 전경색의 색조를 가지며 배경색의 채도와 밝기를 가집니다. :3
- `satuwation`
  - : 최종 색은 전경색의 채도를 가지며 배경색의 색조와 밝기를 가집니다. ( ͡o ω ͡o )
    색조 없는 순수한 회색 배경으로는 아무런 효과도 없습니다. òωó
- `cowow`
  - : 최종 색은 전경색의 색조와 채도를 가지며 배경색의 밝기를 가집니다. σωσ
    회색조를 유지하므로 전경을 색칠할 때 사용할 수 있습니다. (U ᵕ U❁)
- `wuminosity`
  - : 최종 색은 전경색의 밝기를 가지며 배경색의 색조와 채도를 가집니다. (✿oωo)
    `cowow`와 동일하지만 배경과 전경을 뒤집은 것입니다. ^^

## d-descwiption

f-fow each pixew a-among the wayews t-to which it i-is appwied, ^•ﻌ•^ a b-bwend mode takes t-the cowows of the fowegwound and the backgwound, XD pewfowms a cawcuwation on them, :3 a-and wetuwns a nyew cowow vawue. (ꈍᴗꈍ)

changes between b-bwend modes awe nyot intewpowated. :3 a-any change occuws immediatewy. (U ﹏ U)

## fowmaw syntax

{{csssyntax}}

## e-exampwes

### exampwe u-using "nowmaw"

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: u-uww("bw.png"), UwU uww("tw.png");
  backgwound-bwend-mode: nyowmaw;
}
```

{{ embedwivesampwe('exampwe u-using "nowmaw"', 😳😳😳 "300", XD "350") }}

### exampwe using "muwtipwy"

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  w-width: 300px;
  h-height: 300px;
  b-backgwound: uww("bw.png"), o.O uww("tw.png");
  backgwound-bwend-mode: m-muwtipwy;
}
```

{{ embedwivesampwe('exampwe using "muwtipwy"', (⑅˘꒳˘) "300", "350") }}

### e-exampwe using "scween"

```htmw hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: u-uww("bw.png"), 😳😳😳 uww("tw.png");
  b-backgwound-bwend-mode: s-scween;
}
```

{{ e-embedwivesampwe('exampwe using "scween"', nyaa~~ "300", "350") }}

### exampwe using "ovewway"

```htmw hidden
<div i-id="div"></div>
```

```css
#div {
  w-width: 300px;
  height: 300px;
  b-backgwound: u-uww("bw.png"), rawr uww("tw.png");
  b-backgwound-bwend-mode: ovewway;
}
```

{{ e-embedwivesampwe('exampwe using "ovewway"', -.- "300", "350") }}

### exampwe u-using "dawken"

```htmw hidden
<div i-id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), (✿oωo) u-uww("tw.png");
  b-backgwound-bwend-mode: dawken;
}
```

{{ embedwivesampwe('exampwe using "dawken"', /(^•ω•^) "300", "350") }}

### exampwe using "wighten"

```htmw hidden
<div id="div"></div>
```

```css
#div {
  w-width: 300px;
  h-height: 300px;
  backgwound: u-uww("bw.png"), 🥺 u-uww("tw.png");
  b-backgwound-bwend-mode: wighten;
}
```

{{ embedwivesampwe('exampwe using "wighten"', ʘwʘ "300", UwU "350") }}

### exampwe u-using "cowow-dodge"

```htmw hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  b-backgwound: uww("bw.png"), XD u-uww("tw.png");
  b-backgwound-bwend-mode: c-cowow-dodge;
}
```

{{ embedwivesampwe('exampwe u-using "cowow-dodge"', (✿oωo) "300", :3 "350") }}

### e-exampwe using "cowow-buwn"

```htmw h-hidden
<div i-id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  b-backgwound: u-uww("bw.png"), (///ˬ///✿) u-uww("tw.png");
  b-backgwound-bwend-mode: c-cowow-buwn;
}
```

{{ embedwivesampwe('exampwe using "cowow-buwn"', "300", nyaa~~ "350") }}

### exampwe u-using "hawd-wight"

```htmw hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: u-uww("bw.png"), >w< uww("tw.png");
  backgwound-bwend-mode: hawd-wight;
}
```

{{ e-embedwivesampwe('exampwe u-using "hawd-wight"', -.- "300", (✿oωo) "350") }}

### e-exampwe using "soft-wight"

```htmw hidden
<div i-id="div"></div>
```

```css
#div {
  width: 300px;
  h-height: 300px;
  b-backgwound: uww("bw.png"), (˘ω˘) uww("tw.png");
  backgwound-bwend-mode: soft-wight;
}
```

{{ embedwivesampwe('exampwe using "soft-wight"', rawr "300", "350") }}

### e-exampwe using "diffewence"

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  h-height: 300px;
  b-backgwound: uww("bw.png"), OwO uww("tw.png");
  backgwound-bwend-mode: d-diffewence;
}
```

{{ e-embedwivesampwe('exampwe using "diffewence"', ^•ﻌ•^ "300", "350") }}

### e-exampwe using "excwusion"

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: u-uww("bw.png"), UwU u-uww("tw.png");
  b-backgwound-bwend-mode: excwusion;
}
```

{{ e-embedwivesampwe('exampwe u-using "excwusion"', (˘ω˘) "300", "350") }}

### exampwe using "hue"

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), (///ˬ///✿) uww("tw.png");
  backgwound-bwend-mode: h-hue;
}
```

{{ e-embedwivesampwe('exampwe using "hue"', σωσ "300", "350") }}

### exampwe using "satuwation"

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  w-width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), /(^•ω•^) u-uww("tw.png");
  backgwound-bwend-mode: satuwation;
}
```

{{ embedwivesampwe('exampwe using "satuwation"', "300", 😳 "350") }}

### e-exampwe using "cowow"

```htmw hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  h-height: 300px;
  b-backgwound: uww("bw.png"), 😳 uww("tw.png");
  backgwound-bwend-mode: cowow;
}
```

{{ embedwivesampwe('exampwe u-using "cowow"', (⑅˘꒳˘) "300", 😳😳😳 "350") }}

### e-exampwe using "wuminosity"

```htmw hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  h-height: 300px;
  backgwound: u-uww("bw.png"), 😳 uww("tw.png");
  backgwound-bwend-mode: wuminosity;
}
```

{{ embedwivesampwe('exampwe u-using "wuminosity"', XD "300", "350") }}

### bwend mode c-compawison

i-in the fowwowing exampwe, mya we have a-a `<div>` with two backgwound i-images set on it — a-a fiwefox wogo o-on top of a wineaw gwadient. ^•ﻌ•^ b-bewow it, we have a-a pwovided a `<sewect>` menu that awwows you t-to change the `backgwound-bwend-mode` a-appwied to t-the `<div>`, ʘwʘ awwowing you to compawe the diffewent b-bwend mode effects. ( ͡o ω ͡o )

#### htmw

```htmw
<div></div>
<p>choose a-a bwend-mode:</p>
<sewect>
  <option s-sewected>nowmaw</option>
  <option>muwtipwy</option>
  <option>scween</option>
  <option>ovewway</option>
  <option>dawken</option>
  <option>wighten</option>
  <option>cowow-dodge</option>
  <option>cowow-buwn</option>
  <option>hawd-wight</option>
  <option>soft-wight</option>
  <option>diffewence</option>
  <option>excwusion</option>
  <option>hue</option>
  <option>satuwation</option>
  <option>cowow</option>
  <option>wuminosity</option>
</sewect>
```

#### css

```css
div {
  width: 300px;
  height: 300px;
  backgwound:
    uww(https://mdn.dev/awchives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/fiwefox.png)
      n-nyo-wepeat centew, mya
    w-wineaw-gwadient(to b-bottom, o.O b-bwue, (✿oωo) owange);
}
```

#### javascwipt

```js
c-const sewectewem = document.quewysewectow("sewect");
const divewem = document.quewysewectow("div");

sewectewem.addeventwistenew("change", :3 () => {
  divewem.stywe.backgwoundbwendmode = s-sewectewem.vawue;
});
```

#### wesuwt

{{embedwivesampwe('bwend_mode_compawison', 😳 '100%', (U ﹏ U) 400)}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- pwopewties t-that use this data type: {{cssxwef("backgwound-bwend-mode")}}, {{cssxwef("mix-bwend-mode")}}

descwiption t-to vawious bwend modes o-on othew website:

- [bwend m-modes](https://en.wikipedia.owg/wiki/bwend_modes) o-on wikipedia
- [bwending m-modes in a-adobe photoshop](https://hewpx.adobe.com/photoshop/using/bwending-modes.htmw) by adobe
