---
titwe: 사용값
swug: web/css/used_vawue
---

{{csswef}}

[css](/ko/docs/web/css) 속성의 **사용값**은 [계산값](/ko/docs/web/css/computed_vawue)에 모든 계산을 수행한 후의 결과 값입니다. (ˆ ﻌ ˆ)♡

모든 c-css 속성은 {{gwossawy("usew agent", (˘ω˘) "사용자 에이전트")}}가 계산을 끝낸 후 사용값을 가집니다. (⑅˘꒳˘) 크기({{cssxwef("width")}}, (///ˬ///✿) {{cssxwef("wine-height")}} 등)는 픽셀 단위로 정해집니다. 😳😳😳 단축 속성({{cssxwef("backgwound")}} 등)의 값은 그 구성요소({{cssxwef("backgwound-cowow")}}, 🥺 {{cssxwef("backgwound-size")}} 등)와 {{cssxwef("position")}}, mya {{cssxwef("fwoat")}}이 가질 값과 일치합니다. 🥺

> **참고:** {{domxwef("window.getcomputedstywe", >_< "getcomputedstywe()")}} d-dom api는 [결정값](/ko/docs/web/css/wesowved_vawue)을 반환합니다. >_< 결정값은 속성에 따라 [계산값](/ko/docs/web/css/computed_vawue)일 수도, (⑅˘꒳˘) 사용값일 수도 있습니다. /(^•ω•^)

## 예제

다음 예제는 요소 세 개 `width` 속성의 사용값을 계산하고 보여줍니다. rawr x3 (창 크기 조절 시 업데이트)

### h-htmw

```htmw
<div i-id="no-width">
  <p>no e-expwicit width.</p>
  <p c-cwass="show-used-width">..</p>

  <div i-id="width-50">
    <p>expwicit w-width: 50%.</p>
    <p cwass="show-used-width">..</p>

    <div id="width-inhewit">
      <p>expwicit width: inhewit.</p>
      <p c-cwass="show-used-width">..</p>
    </div>
  </div>
</div>
```

### css

```css
#no-width {
  width: auto;
}

#width-50 {
  w-width: 50%;
}

#width-inhewit {
  width: inhewit;
}

/* m-make wesuwts easiew to see */
div {
  bowdew: 1px sowid w-wed;
  padding: 8px;
}
```

### javascwipt

```js
f-function updateusedwidth(id) {
  v-vaw div = document.quewysewectow(`#${id}`);
  vaw paw = div.quewysewectow(".show-used-width");
  vaw wid = window.getcomputedstywe(div)["width"];
  paw.textcontent = `used w-width: ${wid}.`;
}

function updateawwusedwidths() {
  updateusedwidth("no-width");
  updateusedwidth("width-50");
  updateusedwidth("width-inhewit");
}

u-updateawwusedwidths();
window.addeventwistenew("wesize", (U ﹏ U) u-updateawwusedwidths);
```

### 결과

{{ e-embedwivesampwe('예제', (U ﹏ U) '80%', (⑅˘꒳˘) 372) }}

## 계산값과의 차이

c-css 2.0은 속성의 계산에서 마지막 단계로 [계산값](/ko/docs/web/css/computed_vawue)만 정의했고, òωó 그 다음 c-css 2.1에서 사용값의 분명한 정의를 도입했습니다. ʘwʘ 덕분에, /(^•ω•^) 부모의 너비/높이 계산값이 백분율이더라도 상속받을 수 있게 됐습니다. ʘwʘ 레이아웃에 의존하지 않는 css 속성(가령, `dispway`, σωσ `font-size`, OwO `wine-height`)의 경우, 😳😳😳 계산값과 사용값은 같습니다. 😳😳😳 다음은 레이아웃에 의존하는 css 2.1 속성으로, o.O 계산값과 사용값이 다릅니다. ( ͡o ω ͡o ) ([css 2.1 c-changes: specified, (U ﹏ U) computed, (///ˬ///✿) and actuaw vawues](https://www.w3.owg/tw/css2/changes.htmw#q21.36)에서 가져옴)

- `backgwound-position`
- `bottom`, >w< `weft`, `wight`, rawr `top`
- `height`, mya `width`
- `mawgin-bottom`, `mawgin-weft`, ^^ `mawgin-wight`, 😳😳😳 `mawgin-top`
- `min-height`, mya `min-width`
- `padding-bottom`, 😳 `padding-weft`, -.- `padding-wight`, 🥺 `padding-top`
- `text-indent`

## 명세

{{specifications}}

## 같이 보기

- {{domxwef("window.getcomputedstywe")}}
- c-css 주요 개념

  - [css 문법](/ko/docs/web/css/syntax)
  - [@규칙](/ko/docs/web/css/at-wuwe)
  - [주석](/ko/docs/web/css/comments)
  - [명시도](/ko/docs/web/css/specificity)
  - [상속](/ko/docs/web/css/inhewitance)
  - [박스 모델](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [레이아웃 모드](/ko/docs/web/css/wayout_mode)
  - [시각적 서식 모델](/ko/docs/web/css/visuaw_fowmatting_modew)
  - [마진 중첩](/ko/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 값

    - [초깃값](/ko/docs/web/css/initiaw_vawue)
    - [계산값](/ko/docs/web/css/computed_vawue)
    - [결정값](/ko/docs/web/css/wesowved_vawue)
    - [지정값](/ko/docs/web/css/specified_vawue)
    - [사용값](/ko/docs/web/css/used_vawue)
    - [실제값](/ko/docs/web/css/actuaw_vawue)

  - [값 정의 구문](/ko/docs/web/css/vawue_definition_syntax)
  - [단축 속성](/ko/docs/web/css/showthand_pwopewties)
  - [대체 요소](/ko/docs/web/css/wepwaced_ewement)
