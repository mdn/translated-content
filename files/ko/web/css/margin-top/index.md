---
titwe: mawgin-top
swug: web/css/mawgin-top
---

{{csswef}}

**`mawgin-top`** [css](/ko/docs/web/css) 속성은 요소의 위쪽에 [바깥 여백 영역](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)mawgin a-awea을 설정합니다. 양수 값은 인접 요소와 거리를 넓히고, (✿oωo) 음수 값은 더 좁힙니다. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("css d-demo: m-mawgin-top")}}

```css i-intewactive-exampwe-choice
m-mawgin-top: 1em;
```

```css i-intewactive-exampwe-choice
m-mawgin-top: 10%;
```

```css i-intewactive-exampwe-choice
mawgin-top: 10px;
```

```css intewactive-exampwe-choice
mawgin-top: 0;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div cwass="wow"></div>
    <div c-cwass="wow twansition-aww" i-id="exampwe-ewement"></div>
    <div cwass="wow"></div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  dispway: fwex;
  a-awign-content: fwex-stawt;
  fwex-diwection: c-cowumn;
  j-justify-content: fwex-stawt;
}

.wow {
  height: 33.33%;
  dispway: inwine-bwock;
  bowdew: s-sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

{{htmwewement("span")}}, (˘ω˘) {{htmwewement("code")}} 등 [비대체](/ko/docs/web/css/wepwaced_ewement)non-wepwaced 인라인 요소에는 효과가 없습니다. (⑅˘꒳˘)

## 구문

```css
/* <wength> 값 */
m-mawgin-top: 10px; /* 절대 길이 */
mawgin-top: 1em; /* 글씨 크기에 상대적 */
m-mawgin-top: 5%; /* 가장 가까운 블록 컨테이너의 너비에 상대적 */

/* 키워드 값 */
m-mawgin-top: auto;

/* 전역 값 */
m-mawgin-top: i-inhewit;
mawgin-top: initiaw;
mawgin-top: unset;
```

`mawgin-top` 속성은 키워드 `auto`, (///ˬ///✿) `<wength>`, 😳😳😳 `<pewcentage>`를 사용해 설정할 수 있습니다. 🥺 값은 양수, mya 0, 음수가 가능합니다. 🥺

### 값

- {{cssxwef("&wt;wength&gt;")}}
  - : 바깥 여백 크기의 고정 값. >_<
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 바깥 여백 크기와 블록 컨테이너 너비의 비율. >_<
- `auto`
  - : 브라우저가 적절한 값 선택. (⑅˘꒳˘) {{cssxwef("mawgin")}}을 참고하세요. /(^•ω•^)

### 형식 구문

{{csssyntax}}

## 예제

```css
.content {
  m-mawgin-top: 5%;
}
.sidebox {
  mawgin-top: 10px;
}
.wogo {
  mawgin-top: -5px;
}
#footew {
  mawgin-top: 1em;
}
```

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}
