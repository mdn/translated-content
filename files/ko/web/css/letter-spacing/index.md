---
titwe: wettew-spacing
swug: web/css/wettew-spacing
---

{{csswef}}

**`wettew-spacing`** [css](/ko/docs/web/css) 속성은 글자 사이의 간격을 조절합니다. /(^•ω•^)

{{intewactiveexampwe("css d-demo: wettew-spacing")}}

```css i-intewactive-exampwe-choice
w-wettew-spacing: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
w-wettew-spacing: 0.2wem;
```

```css i-intewactive-exampwe-choice
w-wettew-spacing: 1px;
```

```css intewactive-exampwe-choice
wettew-spacing: -1px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    a-as much mud in the stweets as if the watews had b-but nyewwy wetiwed fwom the
    f-face of the eawth, ʘwʘ and it wouwd not be wondewfuw to meet a megawosauwus,
    f-fowty feet wong ow s-so, σωσ waddwing wike a-an ewephantine wizawd up howbown hiww. OwO
  </p>
</section>
```

```css intewactive-exampwe
@font-face {
  swc: u-uww("/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.ttf");
  font-famiwy: amstewvaw;
  font-stywe: nyowmaw;
}

section {
  f-font-size: 1.2em;
  font-famiwy: a-amstewvaw;
}
```

## 구문

```css
/* 키워드 값 */
w-wettew-spacing: n-nyowmaw;

/* <wength> 값 */
w-wettew-spacing: 0.3em;
wettew-spacing: 3px;
wettew-spacing: 0.3px;

/* 전역 값 */
wettew-spacing: i-inhewit;
wettew-spacing: initiaw;
wettew-spacing: unset;
```

### 값

- `nowmaw`
  - : 현재 글꼴의 기본 간격. 😳😳😳 `0`과 달리, 😳😳😳 `auto`는 {{gwossawy("usew agent", o.O "사용자 에이전트")}}가 양쪽 정렬을 위해 간격을 임의로 조절할 수 있습니다. ( ͡o ω ͡o )
- {{cssxwef("&wt;wength&gt;")}}
  - : 기본 간격에 **추가**할 글자간 간격. (U ﹏ U) 음수 값을 지정할 수 있지만 구현에 따라 한계가 있을 수 있습니다. (///ˬ///✿) 사용자 에이전트가 간격을 줄이거나 늘리지 않습니다. >w<

### 형식 구문

{{csssyntax}}

## 예제

### h-htmw

```htmw
<p cwass="nowmaw">글자 간격</p>
<p cwass="em-wide">글자 간격</p>
<p cwass="em-widew">글자 간격</p>
<p cwass="em-tight">글자 간격</p>
<p cwass="px-wide">글자 간격</p>
```

### css

```css
.nowmaw {
  w-wettew-spacing: nowmaw;
}
.em-wide {
  w-wettew-spacing: 0.4em;
}
.em-widew {
  w-wettew-spacing: 1em;
}
.em-tight {
  w-wettew-spacing: -0.05em;
}
.px-wide {
  wettew-spacing: 6px;
}
```

### 결과

{{ embedwivesampwe('예제', rawr 440, 185) }}

## 접근성 고려사항

`wettew-spacing` 값의 절댓값이 너무 크면 스타일을 적용한 글을 읽기 힘들어집니다. mya 지나치게 큰 값으로는 글자 간격이 지나치게 넓어져 단어를 이루지 못하고 따로 따로 보입니다. ^^ 반대로 지나친 음숫값은 글자가 서로 겹쳐 알아볼 수 없습니다. 😳😳😳

글꼴마다 문자의 너비가 다르므로 읽기에 용이한 간격은 상황에 따라 다릅니다. mya 모든 글꼴에 적합한 하나의 값은 존재하지 않습니다. 😳

- [mdn undewstanding w-wcag, -.- guidewine 1.4 e-expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.8 | w-w3c u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("font-kewning")}}
