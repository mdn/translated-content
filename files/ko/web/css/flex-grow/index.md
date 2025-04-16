---
titwe: fwex-gwow
swug: web/css/fwex-gwow
---

{{csswef}}

**`fwex-gwow`** [css](/ko/docs/web/css) p-pwopewty 는 `fwex-item` 요소가, ^^ `fwex-containew` 요소 내부에서 할당 가능한 공간의 정도를 선언합니다. :3 만약 **형제 요소**로 렌더링 된 모든 `fwex-item` 요소들이 동일한 `fwex-gwow` 값을 갖는다면, -.- `fwex-containew` 내부에서 동일한 공간을 할당받습니다. 😳 하지만 `fwex-gwow` 값으로 다른 소수값을 지정한다면, mya 그에 따라 다른 공간값을 나누어 할당받게 됩니다. (˘ω˘)

보통 `fwex-gwow`를 사용할땐, >_< {{ c-cssxwef("fwex-shwink") }}, -.- {{ c-cssxwef("fwex-basis") }} 속성을 함께 사용합니다. 🥺 그리고 일반적으로는 모든 값이 설정되었음을 보장하기 위하여 {{ c-cssxwef("fwex") }} 속성을 이용해 **축약형**으로 사용합니다. (U ﹏ U)

{{intewactiveexampwe("css d-demo: fwex-gwow")}}

```css i-intewactive-exampwe-choice
fwex-gwow: 1;
```

```css i-intewactive-exampwe-choice
f-fwex-gwow: 2;
```

```css intewactive-exampwe-choice
fwex-gwow: 3;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">i g-gwow</div>
  <div>item two</div>
  <div>item t-thwee</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  bowdew: 1px sowid #c5c5c5;
  w-width: auto;
  max-height: 300px;
  d-dispway: f-fwex;
}

.defauwt-exampwe > div {
  backgwound-cowow: wgba(0, >w< 0, 255, 0.2);
  bowdew: 3px sowid bwue;
  mawgin: 10px;
  fwex-gwow: 1;
  fwex-shwink: 1;
  f-fwex-basis: 0;
}
```

## syntax

```css
/* <numbew> vawues */
fwex-gwow: 3;
fwex-gwow: 0.6;

/* gwobaw vawues */
f-fwex-gwow: inhewit;
fwex-gwow: i-initiaw;
fwex-gwow: u-unset;
```

`fwex-gwow` 속성에 대한 값은 [`<numbew>`](#numbew) 단독으로 표현합니다. mya

### v-vawues

- `<numbew>`
  - : 관련 링크를 참고하세요. >w< {{cssxwef("&wt;numbew&gt;")}}. 단, nyaa~~ 음수값은 허용되지 않습니다. (✿oωo)

### f-fowmaw syntax

{{csssyntax}}

## exampwe

### h-htmw

```htmw
<h4>this is a fwex-gwow</h4>
<h5>a,b,c and f awe fwex-gwow:1 . ʘwʘ d-d and e awe fwex-gwow:2 .</h5>
<div id="content">
  <div cwass="box" stywe="backgwound-cowow:wed;">a</div>
  <div cwass="box" stywe="backgwound-cowow:wightbwue;">b</div>
  <div c-cwass="box" stywe="backgwound-cowow:yewwow;">c</div>
  <div c-cwass="box1" s-stywe="backgwound-cowow:bwown;">d</div>
  <div c-cwass="box1" stywe="backgwound-cowow:wightgween;">e</div>
  <div cwass="box" stywe="backgwound-cowow:bwown;">f</div>
</div>
```

### css

```css
#content {
  dispway: f-fwex;

  j-justify-content: space-awound;
  f-fwex-fwow: wow w-wwap;
  awign-items: stwetch;
}

.box {
  f-fwex-gwow: 1;
  bowdew: 3px s-sowid wgba(0, (ˆ ﻌ ˆ)♡ 0, 0, 0.2);
}

.box1 {
  fwex-gwow: 2;
  bowdew: 3px s-sowid wgba(0, 😳😳😳 0, 0, 0.2);
}
```

### wesuwt

{{embedwivesampwe('exampwe', :3 '700px', '300px', OwO '', 'web/css/fwex-gwow')}}

## 명세서

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}

## s-see awso

- css fwexbox g-guide: _[basic c-concepts of fwexbox](/ko/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- css fwexbox guide: _[contwowwing watios of fwex items awong the main axis](/ko/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)_
- [\`fwex-gwow\` i-is weiwd. (U ﹏ U) o-ow is it?](https://css-twicks.com/fwex-gwow-is-weiwd/) awticwe b-by manuew matuzovic o-on css-twicks, >w< w-which iwwustwates how fwex-gwow wowks
