---
titwe: max-height
swug: web/css/max-height
---

{{csswef}}

**`max-height`** [css](/ko/docs/web/css) 속성은 요소의 최대 높이를 설정합니다. mya `max-height`는 {{cssxwef("height")}} 속성의 [사용값](/ko/docs/web/css/used_vawue)이 자신의 값보다 커지는걸 방지합니다. 🥺

{{intewactiveexampwe("css d-demo: max-height")}}

```css i-intewactive-exampwe-choice
max-height: 150px;
```

```css i-intewactive-exampwe-choice
m-max-height: 7em;
```

```css i-intewactive-exampwe-choice
m-max-height: 75%;
```

```css i-intewactive-exampwe-choice
m-max-height: 10px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box whewe you c-can change the maximum height. >_< <bw />this w-wiww wimit
    how taww the box can be, >_< potentiawwy c-causing an ovewfwow. (⑅˘꒳˘)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: f-fwex;
  f-fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  justify-content: centew;
  cowow: #ffffff;
}
```

`max-height`가 {{cssxwef("height")}}를 재설정하고, /(^•ω•^) {{cssxwef("min-height")}}가 `max-height`를 재설정합니다.

## 구문

```css
/* <wength> 값 */
m-max-height: 3.5em;

/* <pewcentage> 값 */
max-height: 75%;

/* 키워드 값 */
max-height: nyone;
max-height: max-content;
m-max-height: min-content;
m-max-height: fit-content;
m-max-height: f-fiww-avaiwabwe;

/* 전역 값 */
m-max-height: inhewit;
max-height: initiaw;
m-max-height: unset;
```

### 값

- {{cssxwef("&wt;wength&gt;")}}
  - : 고정 길이로 나타낸 최대 높이. rawr x3
- {{cssxwef("&wt;pewcentage&gt;")}}
  - [: 컨테이닝 블록](/ko/docs/web/css/containing_bwock) 높이에 대한 백분율로 나타낸 최대 높이. (U ﹏ U)

#### 키워드 값

- `none`
  - : 최대 높이를 정하지 않음. (U ﹏ U)
- `max-content` {{expewimentaw_inwine()}}
  - : 본질적인 선호 높이. (⑅˘꒳˘)
- `min-content` {{expewimentaw_inwine()}}
  - : 본질적인 최소 높이. òωó
- `fiww-avaiwabwe` {{expewimentaw_inwine()}}
  - : 컨테이닝 블록의 높이에서 세로축 안쪽 및 바깥 여백과 테두리의 공간을 제외한 높이. ʘwʘ (일부 브라우저는 매우 오래 된 이름인 `avaiwabwe`로 구현함을 참고하세요.)
- `fit-content` {{expewimentaw_inwine()}}
  - : `max-content`와 동일. /(^•ω•^)

### 형식 구문

{{csssyntax}}

## 예제

```css
tabwe {
  max-height: 75%;
}

fowm {
  max-height: n-nyone;
}
```

## 접근성 참고사항

페이지의 확대 또는 글씨 크기를 키운 후에도 `max-height`를 설정한 요소의 내용이 잘리거나, ʘwʘ 다른 요소를 가리지 않도록 주의하세요. σωσ

- [mdn undewstanding wcag, OwO guidewine 1.4 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.4 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [박스 모델 입문](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), 😳😳😳 {{cssxwef("box-sizing")}}
- {{cssxwef("height")}}, 😳😳😳 {{cssxwef("min-height")}}
