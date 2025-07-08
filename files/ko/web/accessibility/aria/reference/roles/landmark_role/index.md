---
title: "ARIA: landmark 역할"
slug: Web/Accessibility/ARIA/Reference/Roles/landmark_role
original_slug: Web/Accessibility/ARIA/Roles/landmark_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

랜드마크는 페이지의 중요한 하위 구획입니다. `landmark` 역할은 사용자가 직접 탐색하고자 할 만큼 중요한 콘텐츠 구획에 대한 aria 역할 값의 추상 상위 클래스입니다.

> [!NOTE] > `landmark` 역할은 [추상 역할](/ko/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles)입니다. 문서의 완성도를 위해 여기에 포함되었습니다. 웹 작성자가 사용해서는 안 됩니다.

## 설명

`landmark`는 사용자가 쉽게 탐색하고자 하며 페이지의 동적으로 생성된 요약에 포함되기를 원할 만큼 중요한 콘텐츠 구획을 위한 추상 역할입니다. 랜드마크를 사용하면 보조 기술이 콘텐츠를 빠르게 탐색하고 찾을 수 있습니다.

랜드마크 역할을 만들려면 `<section>`, `<nav>`, `<main>`과 같은 의미론적 요소를 사용하거나 [`role="banner"`](/ko/docs/Web/Accessibility/ARIA/Roles/banner_role), [`role="complementary"`](/ko/docs/Web/Accessibility/ARIA/Roles/complementary_role), [`role="region"`](/ko/docs/Web/Accessibility/ARIA/Roles/region_role)과 같은 `landmark` 역할의 하위 클래스인 ARIA 역할을 추가하여 콘텐츠의 목적을 정의하세요. `role="landmark"`는 사용하지 마세요.

가시적인 레이블을 제공하고 [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)로 참조해야 합니다. 필요한 경우 [`aria-label`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)을 사용하여 간단하고 설명적인 레이블을 제공할 수 있습니다.

스크린 리더 사용자의 경우, 랜드마크 역할을 추가하면 효과적으로 '건너뛰기 링크'가 생성되지만 페이지 내 탐색을 대체하지는 않습니다. 랜드마크 역할은 다른 방식으로 표면화되지 않기 때문입니다.

## 모범 사례

`role="landmark"`를 사용하지 마세요. HTML과 하위 클래스 랜드마크 역할을 사용하세요.

랜드마크는 콘텐츠가 탐색 가능한 영역에 있도록 보장합니다. [`role="main"`](/ko/docs/Web/Accessibility/ARIA/Roles/main_role)에는 {{HTMLElement('main')}}, [`role="banner"`](/ko/docs/Web/Accessibility/ARIA/Roles/banner_role)에는 {{HTMLElement('header')}}, [`role="navigation"`](/ko/docs/Web/Accessibility/ARIA/Roles/navigation_role)에는 {{HTMLElement('nav')}}, [`role="contentinfo"`](/ko/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)에는 {{HTMLElement('footer')}}를 사용하세요. 관련된 의미론적 요소와 함께 역할을 중복해서 포함하는 것도 좋은 방법입니다. {{HTMLElement('div')}}와 같은 비의미론적 요소에 랜드마크 역할로 의미를 추가하는 것은 그만큼 좋은 방법은 아닙니다. 하지만 둘 중 하나 또는 둘 다를 포함하세요. 그렇지 않으면 스크린 리더 사용자가 콘텐츠를 탐색하기 어려워집니다.

## 명세서

{{Specifications}}

## 같이 보기

- [ARIA: `section` 역할](/ko/docs/Web/Accessibility/ARIA/Roles/section_role)
- [ARIA: `banner` 역할](/ko/docs/Web/Accessibility/ARIA/Roles/banner_role)
- [ARIA: `complementary` 역할](/ko/docs/Web/Accessibility/ARIA/Roles/complementary_role)
- [ARIA: `contentinfo` 역할](/ko/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [ARIA: `form` 역할](/ko/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA: `main` 역할](/ko/docs/Web/Accessibility/ARIA/Roles/main_role)
- [ARIA: `navigation` 역할](/ko/docs/Web/Accessibility/ARIA/Roles/navigation_role)
- [ARIA: `region` 역할](/ko/docs/Web/Accessibility/ARIA/Roles/region_role)
- [ARIA: `search` 역할](/ko/docs/Web/Accessibility/ARIA/Roles/search_role)
- [접근성 향상을 위한 HTML 랜드마크 역할 사용하기](/en-US/blog/aria-accessibility-html-landmark-roles/) (MDN 블로그, 2023)
