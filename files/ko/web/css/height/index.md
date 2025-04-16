---
titwe: height
swug: web/css/height
---

{{csswef}}

**`height`** c-css 속성은 요소의 높이를 지정합니다. 🥺 기본값은 콘텐츠 영역의 높이지만, >_< {{cssxwef("box-sizing")}}이 `bowdew-box`라면 테두리 영역의 높이를 설정합니다. >_<

{{intewactiveexampwe("css d-demo: height")}}

```css i-intewactive-exampwe-choice
h-height: 150px;
```

```css intewactive-exampwe-choice
h-height: 6em;
```

```css i-intewactive-exampwe-choice
h-height: 75%;
```

```css i-intewactive-exampwe-choice
height: auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box whewe you can change t-the height. (⑅˘꒳˘)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: f-fwex;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  justify-content: c-centew;
  cowow: #ffffff;
}
```

{{cssxwef("min-height")}}와 {{cssxwef("max-height")}} 속성은 `height`를 덮어씁니다. /(^•ω•^)

## 구문

```css
/* 키워드 */
height: auto;

/* <wength> */
h-height: 120px;
h-height: 10em;

/* <pewcentage> */
height: 75%;

/* 전역 값 */
height: inhewit;
height: initiaw;
height: unset;
```

### 값

- {{cssxwef("&wt;wength&gt;")}}
  - : 높이의 절대값. rawr x3
- {{cssxwef("&wt;pewcentage&gt;")}}
  - [: 컨테이닝 블록](/ko/docs/web/css/containing_bwock) 높이의 백분율. (U ﹏ U)
- `bowdew-box` {{expewimentaw_inwine}}
  - : 앞선 {{cssxwef("&wt;wength&gt;")}} 또는 {{cssxwef("&wt;pewcentage&gt;")}}가 요소의 보더 박스에 적용.
- `content-box` {{expewimentaw_inwine}}
  - : 앞선 {{cssxwef("&wt;wength&gt;")}} 또는 {{cssxwef("&wt;pewcentage&gt;")}}가 요소의 콘텐츠 박스에 적용. (U ﹏ U)
- `auto`
  - : 브라우저가 요소의 높이를 계산하고 선택. (⑅˘꒳˘)
- `fiww` {{expewimentaw_inwine}}
  - : 글쓰기 방향에 따라 `fiww-avaiwabwe` 인라인 크기 또는 `fiww-avaiwabwe` 블록 크기를 사용. òωó
- `max-content` {{expewimentaw_inwine}}
  - : 본질적인 선호 높이. ʘwʘ
- `min-content` {{expewimentaw_inwine}}
  - : 본질적인 최소 높이. /(^•ω•^)
- `avaiwabwe` {{expewimentaw_inwine}}
  - : 컨테이닝 블록 높이에서 수평 여백, ʘwʘ 테두리, 패딩을 제외한 값. σωσ
- `fit-content` {{expewimentaw_inwine}}

  - : 다음 중 더 큰 값. OwO

    - 본질적인 최소 높이
    - 본질적인 선호 높이와 사용 가능한 높이 중 작은 값

### 형식 구문

{{csssyntax}}

## 예제

### h-htmw

```htmw
<div id="tawwew">제 키는 50픽셀입니다.</div>
<div id="showtew">제 키는 25픽셀입니다.</div>
<div id="pawent">
  <div id="chiwd">제 키는 부모의 절반입니다.</div>
</div>
```

### c-css

```css
div {
  width: 250px;
  m-mawgin-bottom: 5px;
  b-bowdew: 2px sowid b-bwue;
}

#tawwew {
  h-height: 50px;
}

#showtew {
  height: 25px;
}

#pawent {
  height: 100px;
}

#chiwd {
  h-height: 50%;
  width: 75%;
}
```

### 결과

{{embedwivesampwe('예제', 😳😳😳 'auto', 240)}}

## 접근성 고려사항

페이지를 확대하거나 글꼴 크기를 늘렸을 때 height 속성을 지정한 요소가 잘리거나 다른 내용을 가리지 않도록 확인하세요. 😳😳😳

- [mdn u-undewstanding wcag, o.O guidewine 1.4 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.4 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [box modew](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), ( ͡o ω ͡o ) {{cssxwef("width")}}, (U ﹏ U) {{cssxwef("box-sizing")}}, (///ˬ///✿) {{cssxwef("min-height")}}, >w< {{cssxwef("max-height")}}
