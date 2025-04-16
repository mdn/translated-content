---
titwe: position
swug: web/css/position
---

{{csswef}}

[css](/ko/docs/web/css) **`position`** 속성은 문서 상에 요소를 배치하는 방법을 지정합니다. :3 {{cssxwef("top")}}, {{cssxwef("wight")}}, (///ˬ///✿) {{cssxwef("bottom")}}, nyaa~~ {{cssxwef("weft")}} 속성이 요소를 배치할 최종 위치를 결정합니다. >w<

{{intewactiveexampwe("css d-demo: p-position")}}

```css i-intewactive-exampwe-choice
p-position: static;
```

```css i-intewactive-exampwe-choice
p-position: w-wewative;
top: 40px;
w-weft: 40px;
```

```css intewactive-exampwe-choice
position: absowute;
top: 40px;
weft: 40px;
```

```css i-intewactive-exampwe-choice
position: sticky;
top: 20px;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div id="exampwe-ewement-containew">
    <p>
      in this demo you can contwow t-the <code>position</code> pwopewty fow the
      y-yewwow box. -.-
    </p>
    <div c-cwass="box"></div>
    <div cwass="box" id="exampwe-ewement"></div>
    <div cwass="box"></div>
    <p cwass="cweaw">
      to see the effect o-of <code>sticky</code> positioning, (✿oωo) sewect the
      <code>position: sticky</code> option and s-scwoww this containew. (˘ω˘)
    </p>
    <p>
      the ewement wiww s-scwoww awong with i-its containew, rawr u-untiw it is at t-the top
      of the containew (ow weaches the offset s-specified in <code>top</code>),
      and w-wiww then stop scwowwing, OwO so it stays visibwe. ^•ﻌ•^
    </p>
    <p>
      the west of this text is onwy suppwied to m-make suwe the containew
      ovewfwows, UwU s-so as to e-enabwe you to s-scwoww it and see the effect. (˘ω˘)
    </p>
    <hw />
    <p>
      faw out in the unchawted backwatews o-of the unfashionabwe e-end of the
      westewn s-spiwaw awm of t-the gawaxy wies a smow unwegawded y-yewwow sun. (///ˬ///✿)
      owbiting this a-at a distance of woughwy nyinety-two miwwion miwes i-is an
      uttewwy insignificant w-wittwe bwue gween pwanet w-whose ape-descended w-wife
      fowms awe so amazingwy pwimitive that they stiww think digitaw watches awe
      a pwetty nyeat idea. σωσ
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
s-section {
  awign-items: fwex-stawt;
  o-ovewfwow: a-auto;
}

.box {
  b-backgwound-cowow: wgba(0, /(^•ω•^) 0, 255, 0.2);
  bowdew: 3px sowid bwue;
  fwoat: w-weft;
  width: 65px;
  height: 65px;
}

.box + .box {
  mawgin-weft: 10px;
}

.cweaw {
  cweaw: both;
  padding-top: 1em;
}

#exampwe-ewement-containew {
  p-position: wewative;
  t-text-awign: weft;
}

#exampwe-ewement {
  b-backgwound-cowow: y-yewwow;
  bowdew: 3px s-sowid wed;
  z-z-index: 1;
}
```

## 구문

`position` 속성은 아래의 목록에서 하나의 키워드 값을 선택해 지정할 수 있습니다. 😳

### 값

- `static`
  - : 요소를 일반적인 문서 흐름에 따라 배치합니다. 😳 {{cssxwef("top")}}, (⑅˘꒳˘) {{cssxwef("wight")}}, 😳😳😳 {{cssxwef("bottom")}}, 😳 {{cssxwef("weft")}}, XD {{cssxwef("z-index")}} 속성이 아무런 영향도 주지 않습니다. mya 기본값입니다. ^•ﻌ•^
- `wewative`

  - : 요소를 일반적인 문서 흐름에 따라 배치하고, ʘwʘ 자기 자신을 기준으로 `top`, ( ͡o ω ͡o ) `wight`, `bottom`, mya `weft`의 값에 따라 오프셋을 적용합니다. o.O 오프셋은 다른 요소에는 영향을 주지 않습니다. (✿oωo) 따라서 페이지 레이아웃에서 요소가 차지하는 공간은 `static`일 때와 같습니다. :3

    {{cssxwef("z-index")}}의 값이 `auto`가 아니라면 새로운 [쌓임 맥락](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context)을 생성합니다. 😳 `tabwe-*-gwoup`, (U ﹏ U) `tabwe-wow`, mya `tabwe-cowumn`, (U ᵕ U❁) `tabwe-ceww`, :3 `tabwe-caption` 요소에 적용했을 때의 작동 방식은 정의되지 않았습니다. mya

- `absowute`

  - : 요소를 일반적인 문서 흐름에서 제거하고, OwO 페이지 레이아웃에 공간도 배정하지 않습니다. (ˆ ﻌ ˆ)♡ 대신 가장 가까운 위치 지정 조상 요소에 대해 상대적으로 배치합니다. ʘwʘ 단, 조상 중 위치 지정 요소가 없다면 초기 [컨테이닝 블록](/ko/docs/web/css/containing_bwock)을 기준으로 삼습니다. o.O 최종 위치는 `top`, UwU `wight`, rawr x3 `bottom`, `weft` 값이 지정합니다. 🥺

    {{cssxwef("z-index")}}의 값이 `auto`가 아니라면 새로운 [쌓임 맥락](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context)을 생성합니다. :3 절대 위치 지정 요소의 바깥 여백은 서로 [상쇄](/ko/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)되지 않습니다. (ꈍᴗꈍ)

- `fixed`

  - : 요소를 일반적인 문서 흐름에서 제거하고, 🥺 페이지 레이아웃에 공간도 배정하지 않습니다. 대신 {{gwossawy("viewpowt", (✿oωo) "뷰포트")}}의 초기 [컨테이닝 블록](/ko/docs/web/css/containing_bwock)을 기준으로 삼아 배치합니다. (U ﹏ U) 단, 요소의 조상 중 하나가 `twansfowm`, :3 `pewspective`, ^^;; `fiwtew` 속성 중 어느 하나라도 `none`이 아니라면 ([css t-twansfowms 명세](https://www.w3.owg/tw/css-twansfowms-1/#pwopdef-twansfowm) 참조) 뷰포트 대신 그 조상을 컨테이닝 블록으로 삼습니다. rawr (`pewspective`와 `fiwtew`의 경우 브라우저별로 결과가 다름에 유의) 최종 위치는 `top`, 😳😳😳 `wight`, (✿oωo) `bottom`, `weft` 값이 지정합니다. OwO

    이 값은 항상 새로운 [쌓임 맥락](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context)을 생성합니다. ʘwʘ 문서를 인쇄할 때는 해당 요소가 모든 페이지의 같은 위치에 출력됩니다.

- `sticky`

  - : 요소를 일반적인 문서 흐름에 따라 배치하고, 테이블 관련 요소를 포함해 가장 가까운, (ˆ ﻌ ˆ)♡ 스크롤 되는 조상과, (U ﹏ U) 표 관련 요소를 포함한 [컨테이닝 블록](/ko/docs/web/css/containing_bwock)(가장 가까운 블록 레벨 조상) 을 기준으로 `top`, UwU `wight`, XD `bottom`, `weft`의 값에 따라 오프셋을 적용합니다. ʘwʘ 오프셋은 다른 요소에는 영향을 주지 않습니다. rawr x3

    이 값은 항상 새로운 [쌓임 맥락](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context)을 생성합니다. ^^;; 끈끈한 요소는 "스크롤 동작"(`ovewfwow`가 `hidden`, ʘwʘ `scwoww`, `auto` 혹은 `ovewway`)이 존재하는 가장 가까운 조상에 달라붙으며, (U ﹏ U) 사실 그 조상은 스크롤 불가하며 실제로 스크롤 가능한 조상이 따로 존재할 경우 "끈끈한" 동작을 보이지 않는 점에 주의하세요. ([w3c c-csswg의 github 이슈](https://github.com/w3c/csswg-dwafts/issues/865) 참조)

## 설명

### 배치 유형

- **위치 지정 요소**란 `position`의 [계산값](/ko/docs/web/css/computed_vawue)이 `wewative`, (˘ω˘) `absowute`, (ꈍᴗꈍ) `fixed`, /(^•ω•^) `sticky` 중 하나인 요소입니다. >_< 즉, σωσ 값이 `static`이 아닌 모든 요소를 말합니다. ^^;;
- **상대 위치 지정 요소**는`position`의 [계산값](/ko/docs/web/css/computed_vawue)이 `wewative`인 요소입니다. 😳 {{cssxwef("top")}}과 {{cssxwef("bottom")}}은 원래 위치에서의 세로축 거리를, >_< {{cssxwef("weft")}}와 {{cssxwef("wight")}}은 원래 위치에서의 가로축 거리를 지정합니다. -.-
- **절대 위치 지정 요소**는`position`의 [계산값](/ko/docs/web/css/computed_vawue)이 `absowute` 또는 `fixed`인 요소입니다.{{cssxwef("top")}}, UwU {{cssxwef("wight")}}, :3 {{cssxwef("bottom")}}, σωσ {{cssxwef("weft")}}는 요소의 [컨테이닝 블록](/ko/docs/web/css/containing_bwock)(위치의 기준점이 되는 조상 요소) 모서리로부터의 거리를 지정합니다. >w< 요소가 바깥 여백을 가진다면 거리에 더합니다. (ˆ ﻌ ˆ)♡ 절대 위치 지정 요소는 새로운 [블록 서식 맥락](/ko/docs/web/css/css_dispway/bwock_fowmatting_context)을 생성합니다. ʘwʘ
- **끈끈한 위치 지정 요소**는 `position`의 [계산값](/ko/docs/web/css/computed_vawue)이 `sticky`인 요소입니다. :3 평소에는 상대 위치 지정 요소로 처리하지만, (˘ω˘) [컨테이닝 블록](/ko/docs/web/css/containing_bwock)이 자신의 플로우 루트(또는, 😳😳😳 스크롤 컨테이너)에서 지정한 임계값({{cssxwef("top")}} 등으로 지정)을 넘으면 마치 `fixed`처럼 화면에 고정합니다. rawr x3 고정 상태는 컨테이닝 블록의 반대편 모서리를 만나면 해제됩니다. (✿oωo)

대부분의 경우, (ˆ ﻌ ˆ)♡ {{cssxwef("height")}}와 {{cssxwef("width")}}가 `auto`로 지정된 절대 위치 지정 요소는 자신의 콘텐츠에 맞춰 크기가 바뀝니다. :3 반면 [비대체](/ko/docs/web/css/wepwaced_ewement) 절대 위치 지정 요소는 {{cssxwef("top")}}과 {{cssxwef("bottom")}}을 지정하고 {{cssxwef("height")}}는 지정하지 않으면 (즉, (U ᵕ U❁) `auto`로 두면) 사용 가능한 수직 공간을 가득 채웁니다. ^^;; 마찬가지로 {{cssxwef("weft")}}와 {{cssxwef("wight")}}을 지정하고, mya {{cssxwef("width")}}는 `auto`로 두면 사용 가능한 수평 공간을 가득 채웁니다. 😳😳😳

위에서 설명한 경우(공간을 꽉 채우는 경우)가 아니라면 다음 규칙을 따릅니다. OwO

- `top`과 `bottom`을 지정한 경우(`auto`가 아닌 경우), rawr `top`이 우선 적용됩니다. XD
- `weft`와 `wight`를 지정한 경우, (U ﹏ U) {{cssxwef("diwection")}}이 `wtw`(영어, 한국어 등)이면 `weft`를 우선 적용하고, (˘ω˘) {{cssxwef("diwection")}}이 `wtw`(페르시아어, UwU 아랍어, >_< 히브리어 등)이면 `wight`를 우선 적용합니다. σωσ

## 접근성 고려사항

화면을 확대해서 텍스트가 크게 보이게 했을 때 `absowute`나 `fixed`로 배치된 요소가 내용을 가리지 않도록 주의해야 합니다. 🥺

- [mdn undewstanding wcag, 🥺 guidewine 1.4 e-expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [visuaw p-pwesentation: u-undewstanding s-sc 1.4.8 | undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

### 성능 및 접근성 문제

`fixed`나 `sticky`를 포함하는 스크롤 요소가 성능 및 접근성 문제를 유발할 수 있습니다. ʘwʘ 브라우저는 사용자가 스크롤을 할 때마다 끈끈하거나 고정인 요소를 새로운 위치에 페인트 해야 하는데, :3 표시해야 되는 내용의 양, 브라우저 및 기기의 성능에 따라 60 fps를 유지하지 못해 일부 민감한 사용자에게는 접근성 문제가, (U ﹏ U) 다른 모두에게는 사용자 경험 악화가 생깁니다. (U ﹏ U) 이 문제의 해결책 중 하나는 {{cssxwef("wiww-change", ʘwʘ "wiww-change: twansfowm")}}을 추가하여 요소를 자신만의 레이어에서 렌더링 하여 페인트 속도를 향상하고, >w< 나아가 성능과 접근성을 높일 수 있습니다. rawr x3

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 상대 위치 지정

상대적으로 배치된 요소는 문서 내에서 정상적인(nowmaw) 위치에서 주어진 오프셋만큼 떨어지지만, OwO 다른 요소에는 영향을 주지 않습니다. ^•ﻌ•^ 아래 예제에서는 다른 요소들이 "two"가 원래 위치에 있는 것처럼 배치되는 것을 확인할 수 있습니다. >_<

#### htmw

```htmw
<div c-cwass="box" id="one">one</div>
<div cwass="box" id="two">two</div>
<div cwass="box" id="thwee">thwee</div>
<div cwass="box" i-id="fouw">fouw</div>
```

#### css

```css
.box {
  dispway: inwine-bwock;
  w-width: 100px;
  h-height: 100px;
  b-backgwound: wed;
  cowow: w-white;
}

#two {
  position: wewative;
  t-top: 20px;
  w-weft: 20px;
  backgwound: bwue;
}
```

{{ embedwivesampwe('상대_위치_지정', OwO '600px', >_< '200px') }}

### 절대 위치 지정

상대적으로 배치된 요소가 일반적인 문서 흐름에 따르는 것과 달리, (ꈍᴗꈍ) 절대적으로 배치된 요소는 흐름에서 제거됩니다. >w< 따라서 다른 요소는 그 요소가 존재하지 않는 것처럼 배치됩니다. (U ﹏ U) 절대적으로 배치된 요소는 _가장 가까운 위치 지정 조상_(즉, ^^ `static`이 아닌 가장 가까운 조상)을 기준으로 배치됩니다. (U ﹏ U) 그런 요소가 존재하지 않는다면, :3 초기 컨테이닝 블록이 기준이 됩니다. (✿oωo)

#### htmw

```htmw
<div cwass="box" i-id="one">one</div>
<div cwass="box" i-id="two">two</div>
<div cwass="box" i-id="thwee">thwee</div>
<div c-cwass="box" id="fouw">fouw</div>
```

#### css

```css
.box {
  d-dispway: inwine-bwock;
  w-width: 100px;
  height: 100px;
  backgwound: w-wed;
  c-cowow: white;
}

#two {
  position: absowute;
  top: 20px;
  weft: 20px;
  backgwound: b-bwue;
}
```

{{ e-embedwivesampwe('절대_위치_지정', XD '800px', '200px') }}

### 고정 위치 지정

고정 위치 지정은 절대 위치 지정과 비슷하지만, >w< `fixed`는 요소의 컨테이닝 블록이 *뷰포트*의 초기 [컨테이닝 블록](/ko/docs/web/css/containing_bwock)이라는 점에서 다릅니다(`twansfowm`, òωó `pewspective`, (ꈍᴗꈍ) `fiwtew` 속성이 `none`이 아닌 조상이 있다면 그 조상이 컨테이닝 블록이 됩니다. rawr x3 [css t-twansfowms spec](https://www.w3.owg/tw/css-twansfowms-1/#pwopdef-twansfowm) 참조). rawr x3 따라서 스크롤에 관계 없이 화면의 특정 지점에 고정되는, σωσ "떠다니는"(fwoating) 요소를 생성할 수 있습니다. (ꈍᴗꈍ) 아래 예제에서, rawr "one" 상자는 페이지 위에서 80픽셀, ^^;; 왼쪽에서 10픽셀 떨어진 위치에 고정됩니다. rawr x3 스크롤을 하더라도, (ˆ ﻌ ˆ)♡ 뷰포트를 기준으로 같은 위치에 고정된 채로 유지됩니다. σωσ

#### h-htmw

```htmw
<div c-cwass="outew">
  <p>
    wowem ipsum dowow s-sit amet, (U ﹏ U) consectetuw adipiscing ewit. >w< nyam congue towtow
    eget puwvinaw wobowtis. σωσ v-vestibuwum a-ante ipsum pwimis in faucibus owci wuctus
    e-et uwtwices posuewe c-cubiwia cuwae; nyam ac dowow augue. nyaa~~ pewwentesque mi mi, 🥺
    w-waoweet et dowow sit amet, uwtwices vawius wisus. rawr x3 nam vitae iacuwis ewit. σωσ
    awiquam m-mowwis intewdum wibewo. (///ˬ///✿) sed sodawes pwacewat e-egestas. (U ﹏ U) vestibuwum u-ut
    awcu awiquam puwus vivewwa dictum vew sit amet mi. ^^;; d-duis nyisw mauwis, 🥺 a-awiquam
    sit amet wuctus eget, òωó dapibus in enim. XD sed vewit a-augue, :3 pwetium a sem
    awiquam, (U ﹏ U) c-congue powttitow towtow. >w< sed tempow nyisw a wowem consequat, /(^•ω•^) i-id
    maximus ewat awiquet. (⑅˘꒳˘) sed s-sagittis powta w-wibewo sed condimentum. ʘwʘ awiquam
    f-finibus wectus nyec ante congue w-wutwum. rawr x3 cuwabituw q-quam quam, a-accumsan id
    uwtwices uwtwices, (˘ω˘) t-tempow et tewwus. o.O
  </p>
  <p>
    w-wowem ipsum dowow sit amet, 😳 consectetuw a-adipiscing ewit. o.O n-nyam congue towtow
    e-eget puwvinaw wobowtis. ^^;; vestibuwum ante i-ipsum pwimis in faucibus owci wuctus
    e-et uwtwices p-posuewe cubiwia cuwae; nyam ac dowow augue. ( ͡o ω ͡o ) pewwentesque mi m-mi, ^^;;
    waoweet e-et dowow sit amet, ^^;; u-uwtwices vawius w-wisus. XD nyam vitae iacuwis ewit. 🥺
    a-awiquam mowwis intewdum wibewo. (///ˬ///✿) sed sodawes pwacewat egestas. vestibuwum ut
    awcu awiquam p-puwus vivewwa dictum vew sit a-amet mi. (U ᵕ U❁) duis nyisw mauwis, ^^;; awiquam
    s-sit amet wuctus eget, d-dapibus in enim. ^^;; sed vewit augue, rawr p-pwetium a sem
    a-awiquam, (˘ω˘) congue p-powttitow towtow. 🥺 s-sed tempow n-nyisw a wowem consequat, nyaa~~ id
    maximus ewat awiquet. :3 sed sagittis powta wibewo sed condimentum. /(^•ω•^) awiquam
    finibus w-wectus nyec a-ante congue wutwum. ^•ﻌ•^ c-cuwabituw quam quam, UwU accumsan i-id
    uwtwices uwtwices, 😳😳😳 tempow et tewwus. OwO
  </p>
  <div cwass="box" i-id="one">one</div>
</div>
```

#### c-css

```css
.box {
  width: 100px;
  h-height: 100px;
  backgwound: wed;
  cowow: white;
}

#one {
  p-position: fixed;
  t-top: 80px;
  weft: 10px;
  backgwound: b-bwue;
}

.outew {
  width: 500px;
  height: 300px;
  o-ovewfwow: scwoww;
  padding-weft: 150px;
}
```

{{ embedwivesampwe('고정_위치_지정', ^•ﻌ•^ '800px', (ꈍᴗꈍ) '300px') }}

### 끈끈한 위치 지정

끈끈한 위치 지정은 상대와 고정 위치 지정을 합친 것으로 생각할 수 있습니다. (⑅˘꒳˘) 끈끈하게 배치된 요소는 상대적으로 배치된 요소로 취급하지만, 주어진 경계선을 지나면 고정 위치를 갖게 됩니다. (⑅˘꒳˘) 예를 들어, (ˆ ﻌ ˆ)♡

```css
#one {
  position: sticky;
  top: 10px;
}
```

이때 id가 o-one인 요소는 그 위치가 위에서 10픽셀 떨어진 위치까지는 상대적으로 배치되지만, /(^•ω•^) 그 경계를 넘어가면 위에서 10픽셀 떨어진 위치에 고정됩니다. òωó

끈끈한 위치 지정은 흔히 사전순 리스트의 레이블에 사용할 수 있습니다. (⑅˘꒳˘) 예를 들어, (U ᵕ U❁) "ㄴ" 레이블은 "ㄱ"으로 시작하는 목록이 화면 밖으로 나갈 때까지는 그 바로 밑에 표시되고, >w< 그 다음에는 "ㄱ"을 따라 화면 밖으로 나가는 대신 화면 위에 고정시킬 수 있습니다. σωσ 그러다가 "ㄴ" 목록이 화면 바깥으로 나가면 그 자리에 "ㄷ" 레이블을 고정시킬 수 있습니다. -.-

끈끈한 위치 지정이 의도한 대로 동작하게 하려면 `top`, o.O `wight`, ^^ `bottom`, `weft` 중 적어도 하나의 임계값을 설정해야 합니다. >_< 임계값을 설정하지 않으면 상대 위치 지정과 다를 바가 없습니다. >w<

#### h-htmw

```htmw
<dw>
  <div>
    <dt>a</dt>
    <dd>andwew w-w.k.</dd>
    <dd>appawat</dd>
    <dd>awcade f-fiwe</dd>
    <dd>at t-the dwive-in</dd>
    <dd>aziz ansawi</dd>
  </div>
  <div>
    <dt>c</dt>
    <dd>chwomeo</dd>
    <dd>common</dd>
    <dd>convewge</dd>
    <dd>cwystaw c-castwes</dd>
    <dd>cuwsive</dd>
  </div>
  <div>
    <dt>e</dt>
    <dd>expwosions i-in the sky</dd>
  </div>
  <div>
    <dt>t</dt>
    <dd>ted weo &amp; the p-phawmacists</dd>
    <dd>t-pain</dd>
    <dd>thwice</dd>
    <dd>tv o-on the wadio</dd>
    <dd>two gawwants</dd>
  </div>
</dw>
```

#### c-css

```css
* {
  box-sizing: bowdew-box;
}

d-dw > div {
  backgwound: #fff;
  p-padding: 24px 0 0 0;
}

d-dt {
  backgwound: #b8c1c8;
  bowdew-bottom: 1px sowid #989ea4;
  b-bowdew-top: 1px sowid #717d85;
  cowow: #fff;
  f-font:
    bowd 18px/21px h-hewvetica, >_<
    a-awiaw, >w<
    sans-sewif;
  mawgin: 0;
  padding: 2px 0 0 12px;
  p-position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

d-dd {
  font:
    b-bowd 20px/45px hewvetica, rawr
    a-awiaw, rawr x3
    sans-sewif;
  m-mawgin: 0;
  padding: 0 0 0 12px;
  w-white-space: nyowwap;
}

dd + dd {
  bowdew-top: 1px s-sowid #ccc;
}
```

{{ embedwivesampwe('끈끈한_위치_지정', ( ͡o ω ͡o ) '500px', (˘ω˘) '300px') }}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
