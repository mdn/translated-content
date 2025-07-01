---
title: ARIA 상태와 속성
slug: Web/Accessibility/ARIA/Reference/Attributes
original_slug: Web/Accessibility/ARIA/Attributes
l10n:
  sourceCommit: f6d04a43eadf5ab26a3488942dfb318b58234eb5
---

이 문서는 MDN에서 논의된 모든 <abbr>WAI-ARIA</abbr> 속성들을 다루는 참조 페이지를 나열합니다.

<abbr>ARIA</abbr> 속성을 사용하면 접근성 트리에 정의된 대로 요소의 상태와 속성을 수정할 수 있습니다.

> [!NOTE]
> ARIA는 접근성 트리만을 수정하여 보조 기술이 사용자에게 컨텐츠를 제공하는 방법을 수정합니다. ARIA는 요소의 기능이나 동작에 대해 아무것도 변경하지 않습니다. 의도된 목적과 기본 기능을 위해 시맨틱 HTML 요소를 사용하지 않을 때는 행동, 포커스 및 ARIA 상태를 관리하기 위해 JavaScript를 사용해야 합니다.

## ARIA 속성 유형

ARIA 상태와 속성에는 4가지 유형이 있습니다:

### 위젯 속성

- [`aria-autocomplete`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
- [`aria-checked`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
- [`aria-disabled`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-errormessage`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-expanded`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
- [`aria-haspopup`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
- [`aria-hidden`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-invalid`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-label`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-level`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-level)
- [`aria-modal`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`aria-multiline`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)
- [`aria-multiselectable`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
- [`aria-orientation`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
- [`aria-placeholder`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)
- [`aria-pressed`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-readonly`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
- [`aria-required`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-required)
- [`aria-selected`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
- [`aria-sort`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
- [`aria-valuemax`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
- [`aria-valuemin`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
- [`aria-valuenow`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
- [`aria-valuetext`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

### 실시간 영역 속성

- [`aria-busy`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
- [`aria-live`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-relevant`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-atomic`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)

### 드래그 & 드랍 속성

- [`aria-dropeffect`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
- [`aria-grabbed`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed)

### 관계 속성

- [`aria-activedescendant`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
- [`aria-colcount`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
- [`aria-colindex`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
- [`aria-colspan`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
- [`aria-controls`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-describedby`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [`aria-errormessage`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-flowto`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-flowto)
- [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-owns`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
- [`aria-posinset`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
- [`aria-rowcount`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)
- [`aria-rowindex`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-rowspan`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
- [`aria-setsize`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)

## 전역 ARIA 속성

일부 상태 및 속성은 ARIA 역할 적용 여부와 관계없이 모든 HTML 요소에 적용됩니다. 이들은 "전역" 속성으로 정의됩니다. 전역 상태 및 속성은 모든 역할 및 기본 마크업 요소에 의해 지원됩니다.

아래 속성 중 대부분은 전역 속성으로 특별히 금지되지 않는 한 어떤 요소에든 포함될 수 있습니다:

- [`aria-atomic`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-busy`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
- [`aria-controls`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-current`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-current)
- [`aria-describedby`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [`aria-disabled`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-dropeffect`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
- [`aria-errormessage`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-flowto`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-flowto)
- [`aria-grabbed`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed)
- [`aria-haspopup`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
- [`aria-hidden`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-invalid`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-keyshortcuts`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts)
- [`aria-label`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-live`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-owns`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
- [`aria-relevant`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-roledescription`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)

"특별한 상황에서만 금지된다"는 의미에서 위의 모든 속성들은 전역 속성입니다. 단, `aria-label` 및 `aria-labelledby` 속성은 [`presentation`](/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role) 역할 또는 동일한 의미의 [`none`](/ko/docs/Web/Accessibility/ARIA/Roles/none_role) 역할을 갖는 요소들에는 허용되지 않습니다.

## MDN에 정의된 상태와 속성들

다음은 <abbr>MDN</abbr>에서 논의된 WAI-ARIA</abbr> 상태 및 속성을 다루는 참조 페이지입니다.

{{SubpagesWithSummaries}}

## 같이 보기

- [Using ARIA: roles, states, and properties](/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques)
