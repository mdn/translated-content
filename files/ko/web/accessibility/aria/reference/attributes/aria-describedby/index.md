---
title: aria-describedby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-describedby
original_slug: Web/Accessibility/ARIA/Attributes/aria-describedby
l10n:
  sourceCommit: f6310f5cf34dfe4b5c0a45494a83b0a5ef9a6571
---

전역 `aria-describedby` 속성은 속성이 설정된 요소를 설명하는 요소(혹은 요소들)를 식별합니다.

## 설명

`aria-describedby` 속성은 객체를 설명하는 요소의 [`id`](/ko/docs/Web/HTML/Reference/Global_attributes#id)를 나열합니다. 위젯 또는 그룹과 이를 설명하는 텍스트 간의 관계를 설정하는데 사용됩니다.

`aria-describedby` 속성은 폼 컨트롤에만 제한되지 않습니다. 정적 텍스트를 위젯, 요소 그룹, 제목이 있는 영역, 정의 등과 연결하는 데에도 사용할 수 있습니다. `aria-describedby` 속성은 시맨틱 HTML 요소와 ARIA [`role`](/ko/docs/Web/Accessibility/ARIA/Roles)이 있는 요소와 함께 사용될 수 있습니다.

`aria-describedby` 속성은 [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 속성과 매우 유사합니다. `aria-labelledby`는 객체의 본질을 설명하는 레이블 혹은 요소의 `id`를 나열하는 반면, `aria-describedby`는 사용자가 필요할 수 있는 추가 정보를 제공하는 설명 혹은 요소의 `id`를 나열합니다. `aria-labelledby`와 `aria-describedby`는 모두 텍스트 대안을 계산하기 위해 다른 요소를 참조하지만, 레이블은 간결해야 하는 반면, 설명은 더 자세한 정보를 제공하기 위한 것입니다. 레이블은 객체의 본질을 설명하는 반면, 설명은 사용자가 필요할 수 있는 추가 정보를 제공합니다.

`aria-describedby`으로 연결된 요소는 표시할 필요가 없습니다. 해당 요소가 숨겨져 있어도 요소를 참조할 수 있습니다. 예를 들어 폼 컨트롤에 기본적으로 숨겨져 있는 설명이 "추가 정보" 아이콘과 같은 공개 위젯을 사용하여 요청할 때 표시되도록 할 수 있습니다. 일반 사용자는 아이콘을 클릭합니다. 보조 기술 사용자의 경우 설명은 해당 폼 필드에서 `aria-describedby`으로 직접 참조됩니다.

`aria-describedby` 속성은 관련 콘텐츠에 일반 텍스트로 표시되는 설명이 포함되는 경우에 적절합니다. 콘텐츠에 많은 양의 콘텐츠, 유용한 시멘틱이 포함되어 있거나 사용자 탐색을 요구하는 복잡한 구조인 경우 [`aria-details`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-details)를 사용합니다. `aria-details`는 보조 기술 사용자에게 관련 구조화된 콘텐츠를 방문하고 추가 탐색 명령을 제공해서 구조를 더 쉽게 이해하거나 정보를 더 작은 조각으로 경험할 수 있게 해줍니다.

> [!NOTE]
> `aria-describedby` 콘텐츠는 텍스트 문자열이어야 합니다. 콘텐츠에 중요한 기본 시멘틱이 있는 경우 [`aria-details`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-details)를 사용하는 것이 좋습니다.

## 예제

```html
<button aria-describedby="trash-desc">휴지통으로 이동</button>
…
<p id="trash-desc">휴지통에 있는 항목은 30일 후에 영구적으로 삭제됩니다.</p>
```

> [!NOTE]
> `aria-describedby` 속성은 외부 리소스로부터의 설명을 참조하도록 설계되지 않았습니다. 이 값은 하나 이상의 `id`(다수인 경우 공백으로 구분)이므로 동일한 DOM 문서에 있는 요소를 참조해야 합니다.

## 값

- ID 참조 목록
  - : 현재 요소를 설명하는 `id` 혹은 공백으로 구분된 요소 `id` 목록입니다.

## 관련 역할

**모든** 역할에 사용됩니다. 모든 HTML 요소에서도 사용할 수 있습니다.

## 명세서

{{Specifications}}

## 같이 보기

- {{HTMLElement('label')}}
- [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-description`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [Browser and AT support for `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)

<section id="Quick_links">
<strong><a href="/ko/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
