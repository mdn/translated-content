---
title: mask
slug: Web/CSS/mask
---

{{CSSRef}}

**`mask`** [CSS](/ko/docs/Web/CSS) 속성은 아이템이 부분적으로만 보여지게 하거나 혹은 완전히 가려서 보여지지 않게 할 수 있는 기능을 가지고 있습니다. 이 속성은 마스킹 혹은 특정한 점을 기준으로 이미지를 잘라내는 기능을 함께 제공합니다.

> **참고:** `mask` 는 {{cssxref("mask-border")}}를 초기값으로 재정의합니다. 그러므로 캐스캐이드 이전 단계에 어떠한 마스크 설정을 덮어씌우는 개별 속성아니 여타 다른 속성보다는 `mask` 를 사용하는 것을 추천합니다. This will ensure that `mask-border` has also been reset to allow the new styles to take effect.

{{cssinfo}}

## 구문

```css
/* 키워드 값 */
mask: none;

/* 이미지 값 */
mask: url(mask.png); /* 마스크로 사용되는 이미지 */
mask: url(masks.svg#star); /* 마스크로 사용되는 SVG 그래픽 내 요소 */

/* 조합형 값 */
mask: url(masks.svg#star) luminance; /* 밝기 조절용 마스크로 사용되는 SVG 그래픽 내 요소 */
mask: url(masks.svg#star) 40px 20px; /* 위로부터 40px, 아래부터 20px에 위치하는 마스크로 사용되는 SVG 그래픽 내 요소 */
mask: url(masks.svg#star) 0 0/50px 50px; /* 가로, 세로 각각 50px 사이즈의 마스크로 사용되는 SVG 그래픽 내 요소 */
mask: url(masks.svg#star) repeat-x; /* 수평으로 반복되는 마스크로 사용되는 SVG 그래픽 내 요소 */
mask: url(masks.svg#star) stroke-box; /* Element within SVG graphic used as mask extending to the box enclosed by the stroke */
mask: url(masks.svg#star) exclude; /* Element within SVG graphic used as mask and combined with background using non-overlapping parts */

/* 글로벌 값 */
mask: inherit;
mask: initial;
mask: unset;
```

### 값

- `<mask-reference>`
  - : 마스크 이미지 파일 설정하기. {{cssxref("mask-image")}}를 확인하세요.
- `<masking-mode>`
  - : 마스크 이미지의 마스킹 모드 설정하기. {{cssxref("mask-mode")}}를 확인하세요.
- `<position>`
  - : 마스크 이미지의 위치 설정하기. {{cssxref("mask-position")}}를 확인하세요.
- `<bg-size>`
  - : 마스크 이미지의 크기 설정하기. {{cssxref("mask-size")}}를 확인하세요.
- `<repeat-style>`
  - : 마스크 이미지의 반복 설정하기. See {{cssxref("mask-repeat")}}를 확인하세요.
- `<geometry-box>`
  - : 단 하나의 \<geometry-box> 값만 주어진다면 {{cssxref("mask-origin")}}와(과)( {{cssxref("mask-clip")}} 모두 같은 값으로 설정하는 것을 의미합니다. 두개의\<geometry-box> 값이 주어진다면 첫번째 값은 {{cssxref("mask-origin")}}을(를), 두번쨰 값은 {{cssxref("mask-clip")}}를 설정하는 것을 의미합니다.
- `<geometry-box> | no-clip`
  - : 마스크 이미지에 영향을 받는 구역을 설정하기. {{cssxref("mask-clip")}}를 확인하세요.
- `<compositing-operator>`
  - : 현재 마스크 레이어 위의 합성 설정하기. {{cssxref("mask-composite")}}를 확인하세요.

### 형식 구문

{{csssyntax}}

## 예제

```css
.target {
  mask: url(#c1) luminance;
}

.anothertarget {
  mask: url(resources.svg#c1) 50px 30px/10px 10px repeat-x exclude;
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref("clip-path")}}, {{Cssxref("filter")}}
- [HTML에 SVG 효과 적용하기](/ko/docs/Applying_SVG_effects_to_HTML_content)
- [SVG](/ko/docs/SVG)
