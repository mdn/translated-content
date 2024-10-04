---
title: accent-color
slug: Web/CSS/accent-color
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{CSSRef}}

**`accent-color`** [CSS](/ko/docs/Web/CSS) 속성은 일부 요소에 의하여 생성된 사용자 인터페이스 컨트롤의 {{Glossary("accent", "강조")}} 색상을 설정합니다.

{{EmbedInteractiveExample("pages/css/accent-color.html")}}

현재 `accent-color` 를 지원하는 브라우저에서는 다음 HTML 요소들에 이를 적용합니다.

- [`<input type="checkbox">`](/ko/docs/Web/HTML/Element/input/checkbox)
- [`<input type="radio">`](/ko/docs/Web/HTML/Element/input/radio)
- [`<input type="range">`](/ko/docs/Web/HTML/Element/input/range)
- [`<progress>`](/ko/docs/Web/HTML/Element/progress)

각각의 사용자 에이전트는 가독성과 대비를 보장하기 위해 변형된 강조 색상을 가지고 있습니다. 강조 색상은 모든 사용자 인터페이스 컨트롤이나 컨트롤의 모든 상태에 사용되는 것은 아닙니다. `accent-color` 는 강조 색상을 사용하는 사용자 인터페이스 컨트롤에만, 그리고 해당 색상이 적용될 수 있는 상태에만 적용됩니다.

## 구문

```css
/* 키워드 값 */
accent-color: auto;

/* <color> 값 */
accent-color: darkred;
accent-color: #5729e9;
accent-color: rgb(0 200 0);
accent-color: hsl(228 4% 24%);

/* 전역 값 */
accent-color: inherit;
accent-color: initial;
accent-color: revert;
accent-color: revert-layer;
accent-color: unset;
```

### 값

- `auto`
  - : 플랫폼의 강조 색상과 일치하는 사용자 에이전트가 선택한 색상을 나타냅니다.
- {{cssxref("&lt;color&gt;")}}
  - : 강조 색상으로 사용되는 색상을 특정합니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 사용자 정의 강조 색상 설정하기

#### HTML

```html
<input type="checkbox" checked />
<input type="checkbox" class="custom" checked />
```

#### CSS

```css
input {
  accent-color: auto;
  display: block;
  width: 30px;
  height: 30px;
}

input.custom {
  accent-color: rebeccapurple;
}
```

#### 결과

{{EmbedLiveSample('Setting_a_custom_accent_color', 500, 200)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("caret-color")}}, {{cssxref("color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: 다른 색상 관련된 속성들
- {{cssxref("&lt;color&gt;")}}: 연관 데이터 타입
- {{HTMLElement("input")}}: 연관 HTML 요소
