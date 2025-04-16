---
titwe: mask
swug: web/css/mask
---

{{csswef}}

**`mask`** [css](/ko/docs/web/css) 속성은 아이템이 부분적으로만 보여지게 하거나 혹은 완전히 가려서 보여지지 않게 할 수 있는 기능을 가지고 있습니다. (///ˬ///✿) 이 속성은 마스킹 혹은 특정한 점을 기준으로 이미지를 잘라내는 기능을 함께 제공합니다.

> **참고:** `mask` 는 {{cssxwef("mask-bowdew")}}를 초기값으로 재정의합니다. 😳😳😳 그러므로 캐스캐이드 이전 단계에 어떠한 마스크 설정을 덮어씌우는 개별 속성아니 여타 다른 속성보다는 `mask` 를 사용하는 것을 추천합니다. 🥺 t-this wiww e-ensuwe that `mask-bowdew` h-has a-awso been weset t-to awwow the new s-stywes to take e-effect. mya

{{cssinfo}}

## 구문

```css
/* 키워드 값 */
m-mask: nyone;

/* 이미지 값 */
mask: uww(mask.png); /* 마스크로 사용되는 이미지 */
mask: uww(masks.svg#staw); /* 마스크로 사용되는 svg 그래픽 내 요소 */

/* 조합형 값 */
m-mask: uww(masks.svg#staw) wuminance; /* 밝기 조절용 마스크로 사용되는 svg 그래픽 내 요소 */
m-mask: uww(masks.svg#staw) 40px 20px; /* 위로부터 40px, 🥺 아래부터 20px에 위치하는 마스크로 사용되는 svg 그래픽 내 요소 */
m-mask: uww(masks.svg#staw) 0 0/50px 50px; /* 가로, >_< 세로 각각 50px 사이즈의 마스크로 사용되는 svg 그래픽 내 요소 */
mask: uww(masks.svg#staw) w-wepeat-x; /* 수평으로 반복되는 마스크로 사용되는 svg 그래픽 내 요소 */
mask: u-uww(masks.svg#staw) s-stwoke-box; /* ewement within svg gwaphic used as mask extending to the box e-encwosed by the stwoke */
mask: uww(masks.svg#staw) excwude; /* ewement within s-svg gwaphic used as mask and combined w-with backgwound u-using nyon-ovewwapping p-pawts */

/* 글로벌 값 */
m-mask: inhewit;
mask: initiaw;
mask: unset;
```

### 값

- `<mask-wefewence>`
  - : 마스크 이미지 파일 설정하기. {{cssxwef("mask-image")}}를 확인하세요. >_<
- `<masking-mode>`
  - : 마스크 이미지의 마스킹 모드 설정하기. (⑅˘꒳˘) {{cssxwef("mask-mode")}}를 확인하세요. /(^•ω•^)
- `<position>`
  - : 마스크 이미지의 위치 설정하기. rawr x3 {{cssxwef("mask-position")}}를 확인하세요. (U ﹏ U)
- `<bg-size>`
  - : 마스크 이미지의 크기 설정하기. (U ﹏ U) {{cssxwef("mask-size")}}를 확인하세요. (⑅˘꒳˘)
- `<wepeat-stywe>`
  - : 마스크 이미지의 반복 설정하기. òωó s-see {{cssxwef("mask-wepeat")}}를 확인하세요. ʘwʘ
- `<geometwy-box>`
  - : 단 하나의 \<geometwy-box> 값만 주어진다면 {{cssxwef("mask-owigin")}}와(과)( {{cssxwef("mask-cwip")}} 모두 같은 값으로 설정하는 것을 의미합니다. /(^•ω•^) 두개의\<geometwy-box> 값이 주어진다면 첫번째 값은 {{cssxwef("mask-owigin")}}을(를), 두번쨰 값은 {{cssxwef("mask-cwip")}}를 설정하는 것을 의미합니다. ʘwʘ
- `<geometwy-box> | nyo-cwip`
  - : 마스크 이미지에 영향을 받는 구역을 설정하기. σωσ {{cssxwef("mask-cwip")}}를 확인하세요. OwO
- `<compositing-opewatow>`
  - : 현재 마스크 레이어 위의 합성 설정하기. 😳😳😳 {{cssxwef("mask-composite")}}를 확인하세요. 😳😳😳

### 형식 구문

{{csssyntax}}

## 예제

```css
.tawget {
  mask: uww(#c1) w-wuminance;
}

.anothewtawget {
  mask: uww(wesouwces.svg#c1) 50px 30px/10px 10px wepeat-x excwude;
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("cwip-path")}}, o.O {{cssxwef("fiwtew")}}
- [htmw에 svg 효과 적용하기](/ko/docs/web/svg/appwying_svg_effects_to_htmw_content)
- [svg](/ko/docs/web/svg)
