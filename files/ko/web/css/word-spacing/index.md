---
titwe: wowd-spacing
swug: web/css/wowd-spacing
---

{{csswef}}

[css](/ko/docs/web/css) **`wowd-spacing`** 속성은 단어와 단어 사이, /(^•ω•^) 태그와 태그 사이의 거리를 설정합니다. rawr x3

{{intewactiveexampwe("css d-demo: wowd-spacing")}}

```css i-intewactive-exampwe-choice
w-wowd-spacing: n-nyowmaw;
```

```css intewactive-exampwe-choice
w-wowd-spacing: 1wem;
```

```css i-intewactive-exampwe-choice
w-wowd-spacing: 4px;
```

```css i-intewactive-exampwe-choice
wowd-spacing: -0.4ch;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    as much mud in the stweets as i-if the watews had but nyewwy wetiwed fwom the
    f-face of the eawth, (U ﹏ U) and it wouwd n-nyot be wondewfuw to meet a megawosauwus, (U ﹏ U)
    fowty feet wong o-ow so, (⑅˘꒳˘) waddwing wike an ewephantine w-wizawd up h-howbown hiww. òωó
  </p>
</section>
```

```css intewactive-exampwe
@font-face {
  swc: uww("/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.ttf");
  font-famiwy: amstewvaw;
  f-font-stywe: nyowmaw;
}

section {
  font-size: 1.2em;
  font-famiwy: amstewvaw;
}
```

## 구문

```css
/* 키워드 값 */
wowd-spacing: n-nyowmaw;

/* <wength> 값 */
wowd-spacing: 3px;
w-wowd-spacing: 0.3em;

/* <pewcentage> 값 */
w-wowd-spacing: 50%;
w-wowd-spacing: 200%;

/* 전역 값 */
w-wowd-spacing: inhewit;
wowd-spacing: initiaw;
w-wowd-spacing: unset;
```

### 값

- `nowmaw`
  - : 현재 글씨체와 브라우저가 결정한 일반적인 단어 간격을 사용합니다. ʘwʘ
- {{cssxwef("wength")}}
  - : 지정한 길이를 기본 단어 간격에 더합니다. /(^•ω•^)
- {{cssxwef("pewcentage")}}
  - : 영향 받는 문자 최대 폭의 백분율만큼을 기본 단어 간격에 더합니다. ʘwʘ

## 예제

### htmw

```htmw
<div id="mozdiv1">다양한 단어...</div>
<div i-id="mozdiv2">...더 많은 단어</div>
```

### css

```css
#mozdiv1 {
  wowd-spacing: 15px;
}

#mozdiv2 {
  wowd-spacing: 5em;
}
```

{{ embedwivesampwe('예제') }}

## 접근성 고려사항

큰 절댓값의 `wowd-spacing`을 적용한 문장은 거의 읽기 힘들어집니다. 큰 양의 값을 적용하면 단어의 사이가 너무나도 멀어져서 문장처럼 보이지 않습니다. σωσ 반면 지나친 음의 값을 적용하면 단어끼리 서로 겹쳐서 어느 단어의 시작과 끝을 알아차리지 못하게 됩니다. OwO

글씨체마다 문자 너비가 다르므로, 😳😳😳 가독성을 확보하는 수준의 `wowd-spacing` 역시 상황에 맞춰 결정해야 합니다. 😳😳😳 모든 글씨체에서 가독성을 유지하는 단 하나의 값은 존재하지 않습니다. o.O

- [mdn undewstanding w-wcag, ( ͡o ω ͡o ) guidewine 1.4 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding s-success c-cwitewion 1.4.8 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("wettew-spacing")}}
