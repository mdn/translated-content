---
title: margin
slug: Web/CSS/margin
---

{{CSSRef}}

**`margin`** CSS 속성은 요소의 네 방향 [바깥 여백 영역](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)을 설정합니다. {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}의 단축 속성입니다.

{{EmbedInteractiveExample("pages/css/margin.html")}}

위와 아래 여백은 [대체 요소](/ko/docs/Web/CSS/Replaced_element)가 아닌 {{HTMLElement("span")}}, {{HTMLElement("code")}} 등 인라인 요소에선 아무 효과도 없습니다.

> **참고:** margin은 요소의 주위에 빈 공간을 추가합니다. 반면 {{cssxref("padding")}}은 요소의 **내부**에 빈 공간을 만듭니다.

## 구문

```
/* 네 면 모두 적용 */
margin: 1em;
margin: -3px;

/* 세로방향 | 가로방향 */
margin: 5% auto;

/* 위 | 가로방향 | 아래 */
margin: 1em auto 2em;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
margin: 2px 1em 0 auto;

/* 전역 값 */
margin: inherit;
margin: initial;
margin: unset;
```

`margin` 속성은 한 개, 두 개, 세 개, 혹은 네 개의 값으로 지정할 수 있습니다. 각 값은 {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} 또는 키워드 [`auto`](#auto) 중 하나입니다. 음수 값은 요소와 이웃의 거리가 더 가까워지도록 합니다.

- **한 개의 값**은 모든 네 면의 여백을 설정합니다.
- **두 개의 값**을 지정하면 첫 번째는 **위와 아래**, 두 번째는 **왼쪽과 오른쪽** 여백을 설정합니다.
- **세 개의 값**을 지정하면 첫 번째는 **위**, 두 번째는 **왼쪽과 오른쪽,** 세 번째 값은 **아래** 여백을 설정합니다.
- **네 개의 값**을 지정하면 각각 **상, 우, 하, 좌** 순서로 여백을 지정합니다. (시계방향)

### 값

- {{cssxref("length")}}
  - : 여백의 크기로 고정값 사용.
- {{cssxref("&lt;percentage&gt;")}}
  - : 여백의 크기로 [컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block) 너비의 백분율 사용.
- `auto`
  - : 브라우저가 적절한 여백 크기를 선택. 예를 들어 요소를 중앙 정렬하고 싶을 때 사용할 수 있습니다.

### 형식 구문

{{csssyntax}}

## 예제

### 간단한 예제

#### HTML

```html
<div class="center">이 요소는 중앙 정렬입니다.</div>
<div class="outside">이 요소는 컨테이너 밖으로 빠져 나갔습니다.</div>
```

#### CSS

```css
.center {
  margin: auto;
  background: lime;
  width: 66%;
}

.outside {
  margin: 3rem 0 0 -3rem;
  background: cyan;
  width: 66%;
}
```

{{ EmbedLiveSample('간단한_예제') }}

### 더 많은 예제

```css
margin: 5%; /* 모두 5% */

margin: 10px; /* 모두 10px */

margin: 1.6em 20px;
/* 상하: 1.6em */
/* 좌우: 20px  */

margin: 10px 3% -1em;
/* 상: 10px */
/* 좌우: 3% */
/* 하: -1em */

margin: 10px 3px 30px 5px;
/* 상: 10px */
/* 우:  3px */
/* 하: 30px */
/* 좌:  5px */

margin: 2em auto;
/* 상하: 2em */
/* 수평 중앙정렬 */

margin: auto;
/* 상하: 0 */
/* 수평 중앙정렬 */
```

## 참고

### 수평 중앙정렬

현대 브라우저에서 어떤 요소를 중앙에 배치하려면 {{cssxref("display")}}`: flex;` {{cssxref("justify-content")}}`: center;`를 사용하면 됩니다.

하지만 플렉스 박스 레이아웃을 지원하지 않는 Internet Explorer 8-9 등 오래된 브라우저를 지원해야 하면 `margin: 0 auto;`를 대신 사용하세요.

### 여백 상쇄

두 개 요소의 위와 아래 여백은 종종 합쳐져 하나의 여백이 되고, 그 크기는 둘 중 더 큰 여백과 같아집니다. 더 자세한 정보는 [여백 상쇄 정복](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)을 참고하세요.

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 기본 박스 모델 입문](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [여백 상쇄 정복](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}
