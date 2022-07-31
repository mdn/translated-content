---
title: text-decoration
slug: Web/CSS/text-decoration
tags:
  - CSS
  - CSS Property
  - CSS Text Decoration
  - Reference
browser-compat: css.properties.text-decoration
translation_of: Web/CSS/text-decoration
---
{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`text-decoration`** [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)은 텍스트에 장식용 선을 추가합니다. 이 속성은 {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}}, {{cssxref("text-decoration-thickness")}}의 단축 속성입니다.

{{EmbedInteractiveExample("pages/css/text-decoration.html")}}

텍스트 장식은 모든 자손 텍스트 요소에 걸쳐서 적용됩니다. 달리 말하면, 자식 요소에서는 부모가 적용한 텍스트 장식을 제거할 수 없습니다. 예를 들어 `<p>이 문단에 <em>강조 표시</em>가 있어요.</p>` 마크업에 `p { text-decoration: underline; }` 스타일을 적용하면 전체 문단에 밑줄이 추가됩니다. 그다음 `em { text-decoration: none; }` 스타일 규칙을 추가해도 밑줄은 계속 보입니다. 다만 `em { text-decoration: overline; }` 스타일은 "강조 표시" 텍스트가 윗줄과 밑줄을 모두 갖게 합니다.

## 구성 속성

이 속성은 다음 CSS 속성의 단축 속성입니다.

- [`text-decoration-color`](/ko/docs/Web/CSS/text-decoration-color)
- [`text-decoration-line`](/ko/docs/Web/CSS/text-decoration-line)
- [`text-decoration-style`](/ko/docs/Web/CSS/text-decoration-style)
- [`text-decoration-thickness`](/ko/docs/Web/CSS/text-decoration-thickness)

## 구문

```css
text-decoration: underline;
text-decoration: overline red;
text-decoration: none;

/* 전역 값 */
text-decoration: inherit;
text-decoration: initial;
text-decoration: revert;
text-decoration: unset;
```

`text-decoration` 속성은 한 개 이상의 공백으로 구분한 값으로 지정할 수 있습니다. 각각의 값은 본디 속성에서 사용하는 값과 동일합니다.

### 값

- {{cssxref("text-decoration-line")}}
  - : `underline`, `line-through` 등 장식의 종류를 설정합니다.
- {{cssxref("text-decoration-color")}}
  - : 장식의 색을 설정합니다.
- {{cssxref("text-decoration-style")}}
  - : `solid`, `wavy`, `dashed` 등 장식에 사용할 선의 스타일을 설정합니다.
- {{cssxref("text-decoration-thickness")}}
  - : 장식에 사용할 선의 두께를 설정합니다.

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
<p class="under">밑줄을 가지는 텍스트입니다.</p>
<p class="over">윗줄을 가지는 텍스트입니다.</p>
<p class="line">취소선을 가지는 텍스트입니다.</p>
<p>기본 스타일과 달리
  <a class="plain" href="#">이 링크에는 밑줄이 없을 것입니다.</a>
  사용자들은 보통 하이퍼링크 여부를 밑줄로 구분하므로, 앵커에서
  밑줄을 제거할 때는 주의해야 합니다.</p>
<p class="underover">밑줄과 윗줄 모두 가지는 텍스트입니다.</p>
<p class="thick">브라우저가 지원하는 경우 아주 두꺼운 보라색
  밑줄을 가지게 될 텍스트입니다.</p>
<p class="blink">이 텍스트는 브라우저에 따라서 깜빡일 수 있습니다.</p>
```

{{EmbedLiveSample('예제','auto','320')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 개별 텍스트 장식 속성은 {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}}, {{cssxref("text-decoration-thickness")}}입니다.
- {{cssxref("text-decoration-skip-ink")}}, {{cssxref("text-underline-offset")}}, {{cssxref("text-underline-position")}} 속성은 텍스트 장식에 영향을 주지만 이 단축 속성은 포함하지 않습니다.
- {{cssxref("list-style")}} 속성은 HTML {{HTMLElement("ol")}}과 {{HTMLElement("ul")}} 목록에서 항목들의 모습을 조절합니다.
