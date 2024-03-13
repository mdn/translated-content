---
title: opacity
slug: Web/CSS/opacity
---

{{CSSRef}}

**`opacity`** [CSS](/ko/docs/Web/CSS) 속성은 요소의 불투명도를 설정합니다. 불투명도는 요소 뒤쪽 콘텐츠가 숨겨지는 정도로, 투명도의 반대입니다.

{{EmbedInteractiveExample("pages/css/opacity.html")}}

`opacity`는 요소의 내용을 포함해 모든 곳에 영향을 주지만 자식 요소가 상속하지는 않습니다. 따라서 요소와 자식의 투명도가 서로 다르더라도 배경에 대해서는 상대적으로 같은 투명도를 갖습니다.

`opacity` 값이 `1`이 아니면 요소를 새로운 [쌓임 맥락](/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)에 배치합니다.

자식 요소는 불투명하게 유지하고 싶다면 {{cssxref("background")}} 속성을 대신 사용하세요.

```css
background: rgba(0, 0, 0, 0.4);
```

## 구문

### 값

- `<alpha-value>`

  - : 채널의 불투명도(알파 채널의 값)를 나타내는 `0.0` 이상 `1.0` 이하의 {{cssxref("number")}}, 또는 0% 이상 100% 이하의 {{cssxref("percentage")}}. 범위 밖의 숫자는 구문 상 유효하지만, 실제 적용 시에는 범위에 맞춰 나머지 값은 버려집니다.

    | 값                               | 뜻                                      |
    | -------------------------------- | --------------------------------------- |
    | `0`                              | 요소가 완전히 투명해 보이지 않음.       |
    | `0`과 `1` 사이의 아무 `<number>` | 요소가 반투명해 뒤의 내용을 볼 수 있음. |
    | `1` (기본값)                     | 요소가 불투명함.                        |

### 형식 구문

{{csssyntax}}

## 예제

### 기본 예제

```css
div {
  background-color: yellow;
}
.light {
  opacity: 0.2; /* 배경 위로 겨우 볼 수 있음 */
}
.medium {
  opacity: 0.5; /* 배경 위로 조금 더 잘 보임 */
}
.heavy {
  opacity: 0.9; /* 배경 위로 뚜렷하게 보임 */
}
```

```html
<div class="light">겨우 보이는 글</div>
<div class="medium">좀 더 잘 보이는 글</div>
<div class="heavy">쉽게 보이는 글</div>
```

{{EmbedLiveSample('기본_예제', '640', '64')}}

### `:hover` 시 다른 불투명도 적용

```css
img.opacity {
  opacity: 1;
}

img.opacity:hover {
  opacity: 0.5;
  filter: alpha(opacity=50);
  zoom: 1;
}
```

```html
<img
  src="https://developer.mozilla.org/mdn-social-share.png"
  alt="MDN logo"
  width="128"
  height="146"
  class="opacity" />
```

{{EmbedLiveSample('hover_시_다른_불투명도_적용', '150', '175')}}

## 접근성 고려사항

글씨의 투명도를 조절했다면, 낮은 시력을 가진 사용자도 페이지의 콘텐츠를 읽을 수 있도록 글자 색과 배경색의 대비를 높게 유지하는 것이 중요합니다.

색 대비율은 배경색과 투명도를 적용한 글자 색의 밝기를 비교해서 얻어낼 수 있습니다. 현재 [웹 콘텐츠 접근성 가이드라인](https://www.w3.org/WAI/standards-guidelines/wcag/)(WCAG)을 만족하려면, 텍스트 콘텐츠는 4.5:1, 제목 등 큰 텍스트는 3:1의 대비율이 필요합니다. 큰 텍스트란 18.66px 이상의 [굵은](/ko/docs/Web/CSS/font-weight) 글씨 혹은 24px 이상의 텍스트로 정의하고 있습니다.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}
