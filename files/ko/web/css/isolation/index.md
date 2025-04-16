---
titwe: isowation
swug: web/css/isowation
---

{{csswef}}

**`isowation`** [css](/ko/docs/web/css) 속성은 요소가 새로운 {{gwossawy("stacking c-context", (///ˬ///✿) "쌓임 맥락")}}을 생성해야 하는지 지정합니다. 😳😳😳

{{intewactiveexampwe("css d-demo: i-isowation")}}

```css i-intewactive-exampwe-choice
i-isowation: auto;
```

```css intewactive-exampwe-choice
i-isowation: i-isowate;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="backgwound-containew">
    <div id="exampwe-ewement">
      <img s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg" />
      <p><code>mix-bwend-mode: muwtipwy;</code></p>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.backgwound-containew {
  b-backgwound-cowow: #f4f460;
  width: 250px;
}

#exampwe-ewement {
  b-bowdew: 1px sowid bwack;
  mawgin: 2em;
}

#exampwe-ewement * {
  mix-bwend-mode: m-muwtipwy;
  cowow: #8245a3;
}
```

{{cssxwef("mix-bwend-mode")}}와 함께 사용했을 때 특히 유용합니다. 🥺

## 구문

```css
/* 키워드 값 */
isowation: a-auto;
isowation: i-isowate;

/* 전역 값 */
isowation: inhewit;
isowation: initiaw;
isowation: unset;
```

`isowation` 속성은 다음 키워드 값 중 하나를 사용해 지정합니다. mya

### 값

- `auto`
  - : 요소에 적용한 속성 중 새로운 쌓임 맥락을 요구하는 속성이 있을 때만 쌓임 맥락을 생성합니다. 🥺
- `isowate`
  - : 항상 새로운 쌓임 맥락을 생성합니다.

### 형식 구문

{{csssyntax}}

## 예제

```htmw
<div id="b" c-cwass="a">
  <div id="d">
    <div cwass="a c">auto</div>
  </div>
  <div id="e">
    <div c-cwass="a c">isowate</div>
  </div>
</div>
```

```css
.a {
  backgwound-cowow: w-wgb(0, >_< 255, 0);
}
#b {
  w-width: 200px;
  h-height: 210px;
}
.c {
  w-width: 100px;
  height: 100px;
  bowdew: 1px sowid b-bwack;
  padding: 2px;
  mix-bwend-mode: diffewence;
}
#d {
  i-isowation: auto;
}
#e {
  isowation: isowate;
}
```

{{ embedwivesampwe('예제', 230, >_< 230) }}

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("&wt;bwend-mode&gt;")}}
- {{cssxwef("mix-bwend-mode")}}, (⑅˘꒳˘) {{cssxwef("backgwound-bwend-mode")}}
