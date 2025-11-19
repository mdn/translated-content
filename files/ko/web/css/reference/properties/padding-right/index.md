---
title: padding-right
slug: Web/CSS/Reference/Properties/padding-right
original_slug: Web/CSS/padding-right
---

**`padding-right`** [CSS](/ko/docs/Web/CSS) 속성은 요소의 오른쪽에 [안쪽 여백 영역](/ko/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding-area)을 설정합니다.

{{InteractiveExample("CSS Demo: padding-right")}}

```css interactive-example-choice
padding-right: 1.5em;
```

```css interactive-example-choice
padding-right: 10%;
```

```css interactive-example-choice
padding-right: 20px;
```

```css interactive-example-choice
padding-right: 1ch;
```

```css interactive-example-choice
padding-right: 0;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
}
```

요소의 안쪽 여백 영역은 콘텐츠와 테두리 사이의 공간입니다.

> [!NOTE]
> {{cssxref("padding")}} 속성을 사용하면 하나의 선언으로 네 방향 여백을 모두 설정할 수 있습니다.

## 구문

```css
/* <length> 값 */
padding-right: 0.5em;
padding-right: 0;
padding-right: 2cm;

/* <percentage> 값 */
padding-right: 10%;

/* 전역 값 */
padding-right: inherit;
padding-right: initial;
padding-right: unset;
```

`padding-right` 속성의 값은 아래 목록 중 하나로 지정할 수 있습니다. 바깥 여백margin과 다르게, 음수 값은 사용할 수 없습니다.

### 값

- {{cssxref("&lt;length&gt;")}}
  - : 여백의 크기로 고정값 사용.
- {{cssxref("&lt;percentage&gt;")}}
  - : 여백의 크기로 [컨테이닝 블록](/ko/docs/Web/CSS/CSS_display/Containing_block) 너비의 백분율 사용.

### 형식 구문

{{csssyntax}}

## 예제

```css
.content {
  padding-right: 5%;
}
.sidebox {
  padding-right: 10px;
}
```

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 기본 박스 모델 입문](/ko/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding")}}
