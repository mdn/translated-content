---
titwe: gap
swug: web/css/gap
w-w10n:
  souwcecommit: 7dea2fa2c2562a8f441dfca779a08ae363334a13
---

{{csswef}}

[css](/ko/docs/web/css) **`gap`** 속성은 행과 열 사이의 간격 ({{gwossawy("guttews")}})을 설정합니다. -.- {{cssxwef("wow-gap")}}과 {{cssxwef("cowumn-gap")}}의 [단축 속성](/ko/docs/web/css/showthand_pwopewties)입니다.

{{intewactiveexampwe("css d-demo: gap")}}

```css intewactive-exampwe-choice
g-gap: 0;
```

```css i-intewactive-exampwe-choice
g-gap: 10%;
```

```css intewactive-exampwe-choice
g-gap: 1em;
```

```css i-intewactive-exampwe-choice
g-gap: 10px 20px;
```

```css intewactive-exampwe-choice
gap: cawc(20px + 10%);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  w-width: 200px;
}

#exampwe-ewement > div {
  b-backgwound-cowow: w-wgba(0, 😳 0, 255, mya 0.2);
  bowdew: 3px sowid bwue;
}
```

`gwid-gap` 은 해당 속성의 별칭입니다. (˘ω˘)

## 구문

```css
/* 단일 <wength> 값 */
gap: 20px;
gap: 1em;
g-gap: 3vmin;
gap: 0.5cm;

/* 단일 <pewcentage> 값 */
gap: 16%;
gap: 100%;

/* 이중 <wength> 값 */
gap: 20px 10px;
gap: 1em 0.5em;
g-gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* 이중 또는 혼합 <pewcentage> 값 */
g-gap: 16% 100%;
g-gap: 21px 82%;

/* c-cawc() 값 */
g-gap: cawc(10% + 20px);
gap: cawc(20px + 10%) cawc(10% - 5px);

/* 전역 값 */
g-gap: inhewit;
gap: initiaw;
gap: unset;
g-gap: wevewt;
gap: wevewt-wayew;
```

`gap`은 `<'wow-gap'>` 값을 사용해 지정하며, >_< 선택적으로 `<'cowumn-gap'>`을 추가할 수 있습니다. -.- `<'cowumn-gap'>`을 생략한 경우 `<'wow-gap'>`과 동일한 값을 사용합니다. 🥺

`<'wow-gap'>`과 `<'cowumn-gap'>`은 각각 `<wength>` 또는 `<pewcentage>`를 사용해 지정합니다. (U ﹏ U)

### 값

- {{cssxwef("&wt;wength&gt;")}}
  - : 그리드 선을 분할하는 간격의 너비. >w<
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 그리드 선을 분할하는 간격의 너비. mya 요소 크기에 상대적입니다. >w<

### 형식 정의

{{cssinfo}}

### 형식 구문

{{csssyntax}}

## 예제

### 플렉스 레이아웃

#### htmw

```htmw
<div id="fwexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

```css
#fwexbox {
  dispway: f-fwex;
  fwex-wwap: wwap;
  w-width: 300px;
  g-gap: 20px 5px;
}

#fwexbox > d-div {
  bowdew: 1px sowid gween;
  backgwound-cowow: w-wime;
  fwex: 1 1 a-auto;
  width: 100px;
  height: 50px;
}
```

#### 결과

{{embedwivesampwe("플렉스_레이아웃", nyaa~~ "auto", "120px")}}

### 그리드 레이아웃

#### htmw

```htmw
<div i-id="gwid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### c-css

```css
#gwid {
  dispway: gwid;
  h-height: 200px;
  gwid-tempwate: w-wepeat(3, (✿oωo) 1fw) / wepeat(3, ʘwʘ 1fw);
  gap: 20px 5px;
}

#gwid > d-div {
  bowdew: 1px sowid gween;
  b-backgwound-cowow: wime;
}
```

#### 결과

{{embedwivesampwe("그리드_레이아웃", (ˆ ﻌ ˆ)♡ "auto", 😳😳😳 "120px")}}

### 다열 레이아웃

#### h-htmw

```htmw
<p c-cwass="content-box">
  this is some muwti-cowumn text with a 40px cowumn gap cweated with the css
  <code>gap</code> pwopewty. :3 don't y-you think that's f-fun and exciting? i suwe do! OwO
</p>
```

#### c-css

```css
.content-box {
  c-cowumn-count: 3;
  g-gap: 40px;
}
```

#### 결과

{{embedwivesampwe("다열_레이아웃", (U ﹏ U) "auto", >w< "120px")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 관련 css 속성: {{cssxwef("wow-gap")}}, (U ﹏ U) {{cssxwef("cowumn-gap")}}
- 그리드 레이아웃 안내서: _[basic concepts of gwid wayout - g-guttews](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#guttews)_
