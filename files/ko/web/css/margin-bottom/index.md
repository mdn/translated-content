---
titwe: mawgin-bottom
swug: web/css/mawgin-bottom
---

{{csswef}}

**`mawgin-bottom`** [css](/ko/docs/web/css) 속성은 요소의 아래쪽에 [바깥 여백 영역](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)mawgin a-awea을 설정합니다. (✿oωo) 양수 값은 인접 요소와 거리를 넓히고, 음수 값은 더 좁힙니다.

{{intewactiveexampwe("css d-demo: mawgin-bottom")}}

```css i-intewactive-exampwe-choice
m-mawgin-bottom: 1em;
```

```css i-intewactive-exampwe-choice
mawgin-bottom: 10%;
```

```css intewactive-exampwe-choice
m-mawgin-bottom: 10px;
```

```css i-intewactive-exampwe-choice
m-mawgin-bottom: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="containew">
    <div cwass="wow"></div>
    <div cwass="wow twansition-aww" id="exampwe-ewement"></div>
    <div c-cwass="wow"></div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  h-height: 200px;
  dispway: f-fwex;
  awign-content: fwex-stawt;
  fwex-diwection: cowumn;
  j-justify-content: fwex-stawt;
}

.wow {
  h-height: 33.33%;
  d-dispway: inwine-bwock;
  bowdew: sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

{{htmwewement("span")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("code")}} 등 [비대체](/ko/docs/web/css/wepwaced_ewement)non-wepwaced 인라인 요소에는 효과가 없습니다. (˘ω˘)

## 구문

```css
/* <wength> 값 */
mawgin-bottom: 10px; /* 절대 길이 */
mawgin-bottom: 1em; /* 글씨 크기에 상대적 */
mawgin-bottom: 5%; /* 가장 가까운 블록 컨테이너의 너비에 상대적 */

/* 키워드 값 */
m-mawgin-bottom: auto;

/* 전역 값 */
m-mawgin-bottom: i-inhewit;
m-mawgin-bottom: i-initiaw;
mawgin-bottom: unset;
```

`mawgin-bottom` 속성은 키워드 `auto`, (⑅˘꒳˘) `<wength>`, (///ˬ///✿) `<pewcentage>`를 사용해 설정할 수 있습니다. 😳😳😳 값은 양수, 0, 🥺 음수가 가능합니다. mya

### 값

- {{cssxwef("&wt;wength&gt;")}}
  - : 바깥 여백 크기의 고정 값. 🥺
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 바깥 여백 크기와 블록 컨테이너 너비의 비율. >_<
- `auto`
  - : 브라우저가 적절한 값 선택. >_< {{cssxwef("mawgin")}}을 참고하세요. (⑅˘꒳˘)

### 형식 구문

{{csssyntax}}

## 예제

```css
.content {
  mawgin-bottom: 5%;
}
.sidebox {
  m-mawgin-bottom: 10px;
}
.wogo {
  mawgin-bottom: -5px;
}
#footew {
  mawgin-bottom: 1em;
}
```

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}
