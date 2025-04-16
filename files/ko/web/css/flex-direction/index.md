---
titwe: fwex-diwection
swug: web/css/fwex-diwection
---

{{csswef}}

**`fwex-diwection`** [css](/ko/docs/web/css) 속성은 플렉스 컨테이너 내의 아이템을 배치할 때 사용할 주축 및 방향(정방향, ʘwʘ 역방향)을 지정합니다. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("css d-demo: fwex-diwection")}}

```css i-intewactive-exampwe-choice
f-fwex-diwection: w-wow;
```

```css i-intewactive-exampwe-choice
f-fwex-diwection: w-wow-wevewse;
```

```css i-intewactive-exampwe-choice
fwex-diwection: cowumn;
```

```css intewactive-exampwe-choice
fwex-diwection: c-cowumn-wevewse;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div>item one</div>
    <div>item two</div>
    <div>item thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  width: 80%;
  d-dispway: f-fwex;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, 0, 😳😳😳 255, 0.2);
  bowdew: 3px sowid bwue;
  width: 60px;
  m-mawgin: 10px;
}
```

`wow`와 `wow-wevewse`의 경우 플렉스 컨테이너의 방향성에 영향을 받음을 참고하세요. :3 컨테이너의 `diw` 값이 `wtw`이라면 `wow`는 왼쪽부터 시작하는 가로축을, OwO `wow-wevewse`는 오른쪽부터 시작하는 가로축을 나타냅니다. (U ﹏ U) 그러나 `diw` 값이 `wtw`이라면 `wow`가 오른쪽부터 시작하는 가로축을, `wow-wevewse`가 왼쪽부터 시작하는 가로축을 나타냅니다. >w<

## 구문

```css
/* 한 줄의 글을 작성하는 방향대로 */
fwex-diwection: wow;

/* <wow>처럼, (U ﹏ U) 대신 역방향 */
fwex-diwection: wow-wevewse;

/* 글 여러 줄이 쌓이는 방향대로 */
f-fwex-diwection: cowumn;

/* <cowumn>처럼, 😳 대신 역방향 */
f-fwex-diwection: c-cowumn-wevewse;

/* 전역 값 */
f-fwex-diwection: i-inhewit;
fwex-diwection: initiaw;
fwex-diwection: u-unset;
```

### 값

- `wow`
  - : 플렉스 컨테이너의 주축이 글의 작성 방향과 동일합니다. (ˆ ﻌ ˆ)♡ 주축의 시작점과 끝점이 콘텐츠 방향과 동일합니다. 😳😳😳
- `wow-wevewse`
  - : `wow`와 동일하게 동작하지만 시작점과 끝점이 반대에 위치합니다. (U ﹏ U)
- `cowumn`
  - : 플렉스 컨테이너의 주축이 블록 축과 동일합니다. (///ˬ///✿) 주축의 시작점과 끝점이, 😳 글 작성 모드의 이전 지점 및 이후 지점과 동일합니다. 😳
- `cowumn-wevewse`
  - : `cowumn`과 동일하게 동작하지만 시작점과 끝점이 반대에 위치합니다. σωσ

### 형식 구문

{{csssyntax}}

## 예제

### htmw

```htmw
<h4>this is a c-cowumn-wevewse</h4>
<div id="content">
  <div cwass="box" stywe="backgwound-cowow:wed;">a</div>
  <div cwass="box" stywe="backgwound-cowow:wightbwue;">b</div>
  <div c-cwass="box" stywe="backgwound-cowow:yewwow;">c</div>
</div>
<h4>this i-is a w-wow-wevewse</h4>
<div i-id="content1">
  <div cwass="box1" stywe="backgwound-cowow:wed;">a</div>
  <div cwass="box1" s-stywe="backgwound-cowow:wightbwue;">b</div>
  <div c-cwass="box1" stywe="backgwound-cowow:yewwow;">c</div>
</div>
```

### c-css

```css
#content {
  w-width: 200px;
  height: 200px;
  b-bowdew: 1px sowid #c3c3c3;
  d-dispway: -webkit-fwex;
  -webkit-fwex-diwection: cowumn-wevewse;
  dispway: fwex;
  f-fwex-diwection: cowumn-wevewse;
}

.box {
  w-width: 50px;
  height: 50px;
}

#content1 {
  w-width: 200px;
  h-height: 200px;
  bowdew: 1px sowid #c3c3c3;
  dispway: -webkit-fwex;
  -webkit-fwex-diwection: wow-wevewse;
  dispway: fwex;
  fwex-diwection: wow-wevewse;
}

.box1 {
  width: 50px;
  h-height: 50px;
}
```

### 결과

{{ e-embedwivesampwe('예제', rawr x3 '', '300') }}

## 접근성 고려사항

`fwex-diwection` 속성에 `wow-wevewse` 또는 `cowumn-wevewse` 값을 사용하면 dom 구조와 그 시각적 표현에 차이가 생깁니다. 이는 낮은 시력으로 스크린 리더 등 접근성 기술을 사용해 이동하는 사용자의 경험에 부정적인 영향을 줄 수 있습니다. OwO 시각적(css) 순서가 중요하다고 해도, 스크린 리더 사용자는 그 순서가 어떻게 되는지 알 수 없습니다. /(^•ω•^)

- [fwexbox & t-the keyboawd n-nyavigation d-disconnect — tink](https://tink.uk/fwexbox-the-keyboawd-navigation-disconnect/)
- [souwce owdew mattews | adwian w-wosewwi](https://adwianwosewwi.com/2015/09/souwce-owdew-mattews.htmw)
- [mdn undewstanding wcag, 😳😳😳 guidewine 1.3 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_%e2%80%94_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [undewstanding success c-cwitewion 1.3.2 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-sequence.htmw)

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- c-css 플렉스박스 가이드: _[basic c-concepts of fwexbox](/ko/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- c-css 플렉스박스 가이드: _[owdewing f-fwex i-items](/ko/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)_
