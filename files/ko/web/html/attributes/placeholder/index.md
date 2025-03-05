---
title: "HTML attribute: elementtiming"
slug: Web/HTML/Attributes/placeholder
l10n:
  sourceCommit: aee2bd82de11cb7331134e48e8bd548bbedafcc5
---

{{HTMLSidebar}}

**`placeholder`** 특성은 사용자가 폼 컨트롤에 값을 입력하지 않았을 때 표시되는 텍스트를 정의합니다. 이 텍스트는 해당 필드에 입력해야 하는 데이터 유형에 대한 간단한 힌트를 제공해야 합니다.

효과적인 placeholder 텍스트는 데이터 유형에 대한 힌트를 제공하는 단어나 짧은 문구를 포함하며, 설명이나 프롬프트가 되어서는 안 됩니다. placeholder는 {{HTMLElement("label")}} 대신 사용되어서는 안 됩니다. placeholder는 폼 컨트롤의 값이 null이 아닐 때는 보이지 않기 때문에, `placeholder`를 `<label>` 대신 프롬프트로 사용하는 것은 사용성과 접근성에 해롭습니다.

`placeholder` 특성은 `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}`, `{{HTMLElement("input/password", "password")}}` 타입의 입력 필드와 `{{HTMLElement("textarea")}}` 요소에서 지원됩니다. 아래 [예제](#예제)에서는 입력 필드의 예상 형식을 설명하기 위해 `placeholder` 특성을 사용하는 방법을 보여줍니다.

> **참고:** `placeholder` 특성에는 줄 바꿈(LF)이나 캐리지 리턴(CR)을 포함할 수 없습니다. 값에 이러한 문자가 포함되면 placeholder 텍스트가 잘리게 됩니다.

## 접근성 고려사항

Placeholder는 폼에 입력해야 할 데이터 유형의 예를 보여주는 용도로만 사용해야 하며, 절대 `<label>` 요소를 대신해서는 안 됩니다. 그렇게 할 경우 접근성과 사용자 경험이 저하됩니다.

`<label>` 텍스트는 해당 폼 컨트롤과 시각적, 프로그래밍적으로 연결되어 있습니다. 스크린 리더는 기본적으로 placeholder 내용을 읽어주지 않지만, label 내용은 읽어줍니다. label은 보조 기술 사용자에게 해당 컨트롤에 어떤 데이터를 입력해야 하는지 알려줍니다. 또한, label은 포인팅 장치를 사용하는 사용자 경험도 향상시킵니다. 사용자가 `<label>`을 클릭, 터치, 또는 탭하면 label과 연결된 폼 컨트롤로 포커스가 이동합니다.

Placeholder는 보조 기술을 사용하지 않는 사용자에게도 label을 대신할 수 없습니다. Placeholder 텍스트는 기본 폼 컨트롤 텍스트보다 낮은 색 대비로 표시됩니다. 이는 사용자가 placeholder 텍스트와 입력된 텍스트를 혼동하지 않도록 하기 위한 설계입니다. 그러나 이러한 낮은 대비는 시력이 약한 사용자에게 문제를 일으킬 수 있습니다. 또한, 사용자가 텍스트를 입력하기 시작하면 placeholder 텍스트가 폼 필드에서 사라집니다. Placeholder 텍스트에 지침 정보나 예제가 포함되어 있을 경우, 이 텍스트가 사라지면 인지 장애가 있는 사용자에게 혼란을 줄 수 있으며, placeholder에 label이 포함되어 있다면 폼을 접근할 수 없게 만듭니다.

## 예제

### HTML

```html
<form action="/en-US/docs/Web/HTML/Attributes/placeholder">
  <label for="name">Enter your name:</label>
  <input type="text" id="name" name="name" placeholder="e.g. Mike Shinoda" />
  <button type="submit">Submit</button>
</form>
```

### 결과

{{EmbedLiveSample('Example', '150px', '150px')}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- HTML [`title`](/ko/docs/Web/HTML/Global_attributes/title)
- CSS [`:placeholder-shown`](/ko/docs/Web/CSS/:placeholder-shown) 가상 클래스 선택자
- CSS [`::placeholder`](/ko/docs/Web/CSS/::placeholder) 가상 요소 선택자
