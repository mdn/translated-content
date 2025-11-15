---
title: ::placeholder
slug: Web/CSS/Reference/Selectors/::placeholder
original_slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

**`::placeholder`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 {{HTMLElement("input")}} 혹은 {{HTMLElement("textarea")}} 요소 안에 있는 [플레이스홀더 텍스트](/ko/docs/Web/HTML/Element/input#placeholder)를 나타냅니다.

{{InteractiveExample("CSS Demo: ::placeholder", "tabbed-shorter")}}

```css interactive-example
input {
  margin-top: 0.5rem;
}

input::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: red;
}
```

```html interactive-example
<label for="first-name">Your phone number:</label><br />

<input
  id="first-name"
  type="tel"
  name="phone"
  minlength="9"
  maxlength="9"
  placeholder="It must be 9 digits" />
```

{{cssxref("::first-line")}} 의사 요소에 적용할 수 있는 하위 집합의 CSS만이 `::placeholder` 와 그 선택자 규칙에 사용될 수 있습니다.

> [!NOTE]
> 많은 브라우저에서 플레이스홀더 텍스트의 외형은 반투명하거나 옅은 회색을 기본값으로 가집니다.

## 구문

```css
::placeholder {
  /* ... */
}
```

## 접근성

### 색상 대비

#### 대비 비율

플레이스홀더 텍스트는 일반적으로 인풋에 어떤 내용이 유효할지룰 더 밝은 색상으로 나타내며, 이는 실제 인풋에 대한 입력이 아닙니다.

플레이스홀더 텍스트와 인풋의 배경 사이의 대비 비율을 조정하는 것은 시력이 낮은 사람들도 충분히 읽을 수 있도록 하기 위해 중요하게 생각되며, 플레이스홀더 텍스트와 인풋 텍스트의 색상 사이에 충분한 차이를 두어 플레이스홀더가 입력된 데이터로 착각되지 않도록 하는 것 또한 중요합니다.

색상 대비 비율은 플레이스홀더 텍스트와 인풋 배경 색상의 명도를 비교하여 찾습니다.[웹 콘텐츠 접근성 가이드라인 (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)을 충족시키기 위해서는, 텍스트 콘텐츠에는 4.5:1의 비율이 요구되고 머릿말 같은 큰 텍스트는 3:1 의 비율이 요구됩니다. 큰 텍스트는 18.66px의 [굵은 글씨체](/ko/docs/Web/CSS/Reference/Properties/font-weight) 혹은 24px 이상으로 정의됩니다.

- [WebAIM: 색상 대비 확인](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### 사용성

충분한 색상 대비를 가진 플레이스홀더 텍스트는 입력된 인풋으로 해석될 수 있습니다. 플레이스홀더 텍스트는 사용자가 {{htmlelement("input")}} 요소에 콘텐츠를 입력했을 때 사라져야 합니다. 이러한 상황은 성공적인 폼 완성을 방해할 수도 있는데, 특시 인지 능력이 낮은 사용자들에게 특히 자주 발생합니다.

플레이스홀더 정보를 제공하는 대안 접근은 이를 인풋 외부의 가까운 거리에 위치시키고, [`aria-describedby`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)를 사용하여 프로그래밍적으로 {{HTMLElement("input")}}과 힌트를 연관짓는 것입니다.

이러한 구현을 통해 힌트 콘텐츠는 인풋에 정보가 입력되어도 유효하며, 페이지가 로드될 때 인풋에 미리 입력된 내용이 없이 나타나게 됩니다. 대부분의 화면을 읽는 기술은 `aria-describedby` 를 사용하여 인풋의 라벨 텍스트를 읽은 후 힌트를 읽어주고, 스크린 리더 사용자는 이 정보가 불필요하다고 생각되면 음소거를 할 수도 있습니다.

```html
<label for="user-email">이메일 주소</label>
<span id="user-email-hint" class="input-hint">예시: jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [폼 안의 플레이스홀더는 해롭다 — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

### 윈도우 고대비 모드

플레이스홀더 텍스트는 [윈도우 고대비 모드](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/)가 렌더될 때, 사용자가 입력한 텍스트 콘텐츠와 동일한 스타일로 나타납니다. 이는 일부 사용자들에게 어떠한 콘텐츠가 입력되었는지, 그리고 어떤 콘텐츠가 플레이스홀더인지 쉽게 구별할 수 없게 만듭니다.

### 라벨

플레이스홀더는 {{htmlelement("label")}} 요소의 대체 요소가 아닙니다. [`for`](/ko/docs/Web/HTML/Reference/Elements/label#for) 와 [`id`](/ko/docs/Web/HTML/Reference/Global_attributes#id) 속성을 조합하여 프로그래밍 방식으로 입력 필드와 연결된 라벨이 없으면, 스크린 리더와 같은 보조 기술이 {{htmlelement("input")}} 요소를 해석할 수 없습니다.

- [폼 안의 플레이스홀더는 해롭다 — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## 예제

### 플레이스홀더 외형 변경하기

아래 예제는 플레이스홀더 텍스트의 일부 스타일을 변경하는 방법을 설명합니다.

#### HTML

```html
<input placeholder="이곳에 입력하세요." />
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

일부 브라우저 (Firefox 등)에서는 플레이스홀더의 {{cssxref("opacity")}} 를 100%보다 낮게 설정합니다. 만일 완전히 불투명하게 설정하고 싶다면 `opacity` 를 `1` 로 설정합니다.

#### HTML

```html
<input placeholder="기본 불투명도" />
<input placeholder="완전한 불투명도" class="force-opaque" />
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

- {{cssxref(":placeholder-shown")}} 의사 클래스는 활성화된 플레이스홀더를 가진 요소를 스타일링합니다.
- 연관된 HTML 요소들: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML 폼](/ko/docs/Learn_web_development/Extensions/Forms)
