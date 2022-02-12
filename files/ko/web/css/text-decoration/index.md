---
title: text-decoration
slug: Web/CSS/text-decoration
tags:
  - CSS
  - CSS Property
  - CSS Text Decoration
  - Reference
translation_of: Web/CSS/text-decoration
---
{{CSSRef}}

**`text-decoration`** [CSS](/ko/docs/Web/CSS) [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)은 글씨의 장식(선) 색을 지정합니다. {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}}, {{cssxref("text-decoration-thickness")}}속성 값을 설정합니다.

{{EmbedInteractiveExample("pages/css/text-decoration.html")}}

글씨 장식은 모든 하위 텍스트 요소에 적용됩니다. 따라서 자식 요소는 부모가 적용한 장식을 제거할 수 없습니다. 예를 들어 `<p>이 문단에 <em>강조 표시</em>가 있어요.</p>` 마크업에 `p { text-decoration: underline; }` 스타일을 적용하면 전체 문단에 밑줄이 쳐집니다. `em { text-decoration: none; }`을 추가하더라도 아무 변화도 일어나지 않습니다. 다만 `em { text-decoration: overline; }` 스타일은 "강조 표시"가 윗줄과 밑줄 모두 갖게 합니다.

## 구성 속성

이 속성은 다음 CSS 속성의 약어입니다.

- [`text-decoration-color`](/en-US/docs/Web/CSS/text-decoration-color)
- [`text-decoration-line`](/en-US/docs/Web/CSS/text-decoration-line)
- [`text-decoration-style`](/en-US/docs/Web/CSS/text-decoration-style)
- [`text-decoration-thickness`](/en-US/docs/Web/CSS/text-decoration-thickness)

## 구문

```css
text-decoration: underline;
text-decoration: overline red;
text-decoration: none;

/* Global values */
text-decoration: inherit;
text-decoration: initial;
text-decoration: revert;
text-decoration: unset;
```

`text-decoration` 속성은 한 개 이상의 공백으로 구분한 값으로 지정할 수 있습니다. 각각의 값은 본디 속성에서 사용하는 값입니다.

### 값

- {{cssxref("text-decoration-line")}}
  - : `underline`또는 `line-through` 등과 같은 사용된 장식의 종류를 설정합니다.
- {{cssxref("text-decoration-color")}}
  - : 장식의 색을 정합니다.
- {{cssxref("text-decoration-style")}}
  - : `solid`, `wavy` 또는 `dashed`와 같은 장식에 사용된 선의 스타일을 설정합니다.
- {{cssxref("text-decoration-thickness")}}
  - : 장식에 사용된 선의 두께를 설정합니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{csssyntax}}

## 예제

### text-decoration 값 시연

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}

.blink {
  text-decoration: blink;
}
```

```html
<p class="under">밑줄을 가진 글씨입니다.</p>
<p class="over">윗줄을 가진 글씨입니다.</p>
<p class="line">취소선을 가진 글씨입니다.</p>
<p><a class="plain" href="#">여기 링크는 기본값과 다르게</a> 밑줄이 없습니다.
  사용자는 보통 하이퍼링크를 구분할 때 밑줄 여부로 판단하므로
  지우기 전에 조심해야 합니다.</p>
<p class="underover">밑줄<em>과</em> 윗줄 모두 가진 글씨입니다.</p>
<p class="thick">지원하는 브라우저에서 아주 두꺼운 보라색 밑줄을 가진 글씨입니다.</p>
<p class="blink">이 글씨는 브라우저에 따라서 깜빡일 수 있습니다.</p>
```

{{EmbedLiveSample('Examples','auto','320')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 각각의 text-decoration 속성들은 {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}}, 그리고 {{cssxref("text-decoration-thickness")}}.
- {{cssxref("text-decoration-skip-ink")}}, {{cssxref("text-underline-offset")}}, 그리고 {{cssxref("text-underline-position")}} 속성은 text-decoration에도 영향을 주지만, 속기에는 영향을 주지 않습니다.
- {{cssxref("list-style")}} 속성은 HTML {{HTMLElement("ol")}}과 {{HTMLElement("ul")}} 리스트에서 아이템의 모습을 조절합니다.  