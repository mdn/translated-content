---
title: "ARIA: definition 역할"
slug: Web/Accessibility/ARIA/Reference/Roles/definition_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

`definition` ARIA 역할은 요소가 용어나 개념의 정의임을 나타냅니다.

## 설명

`definition` ARIA 역할은 네이티브 {{HTMLElement('dfn')}} 요소와 유사하게, 용어나 개념의 정의에 해당하는 요소에 포함될 수 있습니다. 정의(definition)와 대상 용어(term)를 연결하고 접근 가능한 이름을 제공하려면, [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 속성을 사용하여 `role="term"`으로 지정된 용어를 참조하십시오.

```html-nolint
<p>
  <span role="term">Mansplaining</span>,
  <span role="definition">
    a portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it
  </span>.
</p>
```

> [!NOTE]
> [`term`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) 및 `definition` 역할을 가진 `<span>` 요소 대신에, {{HTMLElement('dfn')}} 요소를 사용하십시오. **가능하면 항상 네이티브 요소를 사용하십시오.**

```html
<p>
  <dfn>Mansplaining</dfn>, a portmanteau of "man" and "explain", is the
  patronizing act of explaining without being asked to do so, to someone already
  learned on the topic, often after someone has already explained it.
</p>
```

## 명세서

{{Specifications}}

## 같이 보기

- [`term` 역할](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- {{HTMLElement('dfn')}} 요소
- {{HTMLElement('dd')}} 요소
- {{HTMLElement('dl')}} 요소
- {{HTMLElement('dt')}} 요소