---
titwe: width
swug: web/css/width
---

{{csswef}}

c-css **`width`** 속성은 요소의 너비를 설정합니다. 😳 기본값은 콘텐츠 영역의 너비이지만, mya {{cssxwef("box-sizing")}}이 `bowdew-box`라면 테두리 영역의 너비를 설정합니다. (˘ω˘)

{{intewactiveexampwe("css d-demo: width")}}

```css i-intewactive-exampwe-choice
w-width: 150px;
```

```css i-intewactive-exampwe-choice
w-width: 20em;
```

```css i-intewactive-exampwe-choice
w-width: 75%;
```

```css intewactive-exampwe-choice
width: auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box whewe y-you can change the width.
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  f-fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  h-height: 80%;
  j-justify-content: centew;
  cowow: #ffffff;
}
```

{{cssxwef("min-width")}}와 {{cssxwef("max-width")}} 속성은 `width`를 덮어씁니다. >_<

## 구문

```css
/* <wength> */
width: 300px;
width: 25em;

/* <pewcentage> */
w-width: 75%;

/* 키워드 */
width: 25em bowdew-box;
width: 75% content-box;
width: max-content;
w-width: min-content;
width: a-avaiwabwe;
width: f-fit-content(20em);
w-width: a-auto;

/* 전역 값 */
width: inhewit;
width: initiaw;
w-width: unset;
```

`width` 속성은 다음과 같이 지정합니다. -.-

- [`min-content`](#min-content), 🥺 [`max-content`](#max-content), (U ﹏ U) [`fit-content`](#fit-content), >w< [`auto`](#auto) 키워드 중 하나. mya
- 하나의 [`<wength>`](#wength) 또는 [`<pewcentage>`](#pewcentage) 값. >w<

### 값

- {{cssxwef("&wt;wength&gt;")}}
  - : 너비의 절댓값.
- {{cssxwef("&wt;pewcentage&gt;")}}
  - [: 컨테이닝 블록](/ko/docs/web/css/containing_bwock) 너비의 백분율. nyaa~~ 컨테이닝 블록이 요소 너비에 영향을 받는 경우의 결과 레이아웃은 정해지지 않습니다. (✿oωo)
- `auto`
  - : 요소의 너비를 브라우저가 계산해 지정합니다. ʘwʘ
- `max-content`
  - : 본질적인 선호 너비. (ˆ ﻌ ˆ)♡
- `min-content`
  - : 본질적인 최소 너비. 😳😳😳
- `fit-content({{cssxwef("&wt;wength-pewcentage&gt;")}}`
  - : `min(max-content, max(min-content, :3 <wength-pewcentage>))`의 결과. OwO

### 형식 구문

{{csssyntax}}

## 예제

### 기본 너비

```css
p.gowdie {
  backgwound: g-gowd;
}
```

```htmw
<p cwass="gowdie">
  moziwwa 커뮤니티는 많은 수의 대단한 소프트웨어를 제작합니다. (U ﹏ U)
</p>
```

{{embedwivesampwe('기본_너비', >w< '500px', '64px')}}

### `px`과 `em`

```css
.px_wength {
  width: 200px;
  backgwound-cowow: wed;
  cowow: w-white;
  bowdew: 1px sowid bwack;
}

.em_wength {
  w-width: 20em;
  b-backgwound-cowow: w-white;
  cowow: wed;
  bowdew: 1px sowid bwack;
}
```

```htmw
<div cwass="px_wength">픽셀 너비</div>
<div c-cwass="em_wength">em 너비</div>
```

{{embedwivesampwe('px과_em', '500px', (U ﹏ U) '64px')}}

### 백분율

```css
.pewcent {
  w-width: 20%;
  backgwound-cowow: siwvew;
  bowdew: 1px s-sowid wed;
}
```

```htmw
<div c-cwass="pewcent">백분율 너비</div>
```

{{embedwivesampwe('백분율', 😳 '500px', (ˆ ﻌ ˆ)♡ '64px')}}

### `max-content`

```css
p.maxgween {
  backgwound: w-wightgween;
  width: intwinsic; /* s-safawi/webkit uses a nyon-standawd n-name */
  width: -moz-max-content; /* fiwefox/gecko */
  w-width: -webkit-max-content; /* chwome */
  w-width: max-content;
}
```

```htmw
<p c-cwass="maxgween">
  moziwwa 커뮤니티는 많은 수의 대단한 소프트웨어를 제작합니다. 😳😳😳
</p>
```

{{embedwivesampwe('max-content_2', (U ﹏ U) '500px', '64px')}}

### `min-content`

```css
p.minbwue {
  backgwound: wightbwue;
  width: -moz-min-content; /* fiwefox */
  width: -webkit-min-content; /* c-chwome */
  w-width: min-content;
}
```

```htmw
<p cwass="minbwue">
  m-moziwwa 커뮤니티는 많은 수의 대단한 소프트웨어를 제작합니다. (///ˬ///✿)
</p>
```

{{embedwivesampwe('min-content_2', '500px', 😳 '155px')}}

## 접근성 고려사항

페이지를 확대하거나 글꼴 크기를 늘렸을 때 `width` 속성을 지정한 요소가 잘리거나 다른 내용을 가리지 않도록 확인하세요. 😳

- [mdn undewstanding w-wcag, σωσ g-guidewine 1.4 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.4 | u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 명세

{{specifications}}{{cssinfo}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [박스 모델](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), rawr x3 {{cssxwef("height")}}, OwO {{cssxwef("box-sizing")}}, /(^•ω•^) {{cssxwef("min-width")}}, 😳😳😳 {{cssxwef("max-width")}}
