---
title: "::placeholder"
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 59ef5b046557b45a515b654458667e6da6d0f4aa
---

{{CSSRef}}

**`::placeholder`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 {{HTMLElement("input")}} 혹은 {{HTMLElement("textarea")}} 요소 내의 [placeholder text](/ko/docs/Web/HTML/Element/input#placeholder)를 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-placeholder.html", "tabbed-shorter")}}

{{cssxref("::first-line")}} 의사 요소에 적용된 CSS 속성의 하위 집합만이 `::placeholder` 와 해당 선택자를 사용하는 규칙에 사용될 수 있습니다.

> [!NOTE]
> 많은 브라우저에서, 플레이스홀더 텍스트의 외형은 기본적으로 반투명하거나 옅은 회색의 색상을 가집니다.

## 구문

```css
::placeholder {
  /* ... */
}
```

## 접근성 고려사항

### 색상 대비

#### 대비 비율

플레이스홀더 텍스트는 일반적으로 더 밝은 색상으로 처리되어 어떤 종류의 입력이 유효한지에 대해 제안하며, 이는 실제 입력된 값이 아님을 보여줍니다.

인풋의 배경 색상과 플레이스홀더 텍스트 사이의 색상 대비 비율을 충분히 높이는 것은 중요합니다. 낮은 시력을 가진 사람이 이를 읽을 수 있도록 해야 하며, 동시에 사용자가 플레이스홀더 텍스트를 입력된 데이터로 착각하지 않도록 플레이스홀더 텍스트와 인풋 텍스트 사이에 색상 차이가 충분히 존재해야 합니다.

색상 대비 비율은 플레이스홀더 텍스트와 인풋의 배경 색상 값의 밝기를 비교하여 결정되어야 합니다. [웹 콘텐츠 접근성 가이드라인 (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)을 충족시키기 위해서는, 텍스트 콘텐츠에는 4.5:1의 비율이 요구되고 머릿말 같은 큰 텍스트는 3:1 의 비율이 요구됩니다. 큰 텍스트는 18.66px의 굵은 글씨체 혹은 24px 이상으로 정의됩니다.

- [WebAIM: 색상 대비 확인](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### 사용성

충분한 색상 대비를 가진 플레이스홀더 텍스트는 입력된 값으로 해석될 수도 있습니다. 플레이스홀더 텍스트는 사용자가 {{htmlelement("input")}} 요소에 콘텐츠를 입력할 때 사라집니다. 이 두 가지 상황은 낮은 인지력을 가진 사람에게는 성공적인 폼 작성에 방해가 될 수도 있습니다.

플레이스홀더의 정보를 제공하는 대신에 사용할 수 있는 대안 접근은 인풋 외부에 시각적으로 가까운 위치에 포함시키고, [`aria-describedby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 를 사용하여 프로그래밍 방식으로 {{HTMLElement("input")}} 요소와 해당 힌트를 연결하는 것입니다.

이 구현을 통해 인풋에 정보가 입력되어도 힌트 내용이 계속 제공되며, 페이지가 로드될 때 인풋에는 사전 입력된 내용이 없이 나타나게 됩니다. 대부분의 스크린 리더 기술은 `aria-describedby` 를 사용하여 입력란의 라벨 텍스트가 발표된 후 힌트를 읽어주며, 스크린 리더 사용자가 추가 정보를 불필요하다고 생각하면 이를 음소거할 수 있습니다.

```html
<label for="user-email">Your email address</label>
<span id="user-email-hint" class="input-hint">Example: jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [폼 필드 안의 플레이스홀더는 해롭다 — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

### 윈도우 고대비 모드

플레이스홀더 텍스트는 [윈도우 고대비 모드](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/)에서 렌더링될 때 유저가 입력한 것과 동일한 스타일을 가집니다. 이는 일부 사람들로 하여금 어떤 콘텐츠가 입력된 것인지, 어떤 콘텐츠가 플레이스홀더인지 구분하기 어렵게 만들 수 있습니다.

### 라벨

플레이스홀더는 {{htmlelement("label")}} 요소의 대체제가 아닙니다. [`for`](/ko/docs/Web/HTML/Element/label#for) 와 [`id`](/ko/docs/Web/HTML/Global_attributes#id) 특성의 조합을 사용하여 인풋과 프로그래밍 방식으로 연결된 라벨이 없다면 스크린 리더와 같은 보조 기술이 {{htmlelement("input")}} 요소를 파싱할 수 없습니다.

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## 예제

### 플레이스홀더의 외형 변경하기

이 예제는 플레이스홀더 텍스트의 스타일을 조정할 수 있는 방법에 대해 소개합니다.

#### HTML

```html
<input placeholder="Type here" />
```

#### CSS

```css
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
}
```

#### 결과

{{EmbedLiveSample("Change_placeholder_appearance", 200, 60)}}

### 불투명한 텍스트

몇몇의 (파이어폭스와 같은) 브라우저 에서는 플레이스홀더의 {{cssxref("opacity")}} 기본값을 100% 보다 낮게 설정합니다. 만일 플레이스홀더의 텍스트를 불투명하게 만들고 싶다면 `opacity` 를 `1` 로 설정하세요.

#### HTML

```html
<input placeholder="Default opacity" />
<input placeholder="Full opacity" class="force-opaque" />
```

#### CSS

```css
::placeholder {
  color: green;
}

.force-opaque::placeholder {
  opacity: 1;
}
```

#### 결과

{{EmbedLiveSample("Opaque_text", 200, 60)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref(":placeholder-shown")}} 의사 클래스는 활성화된 플레이스홀더가 있는 요소를 스타일링합니다.
- 연관된 HTML 요소들: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML 폼](/ko/docs/Learn/Forms)
