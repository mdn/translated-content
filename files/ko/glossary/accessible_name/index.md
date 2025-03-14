---
title: 접근 가능한 이름 (Accessible name)
slug: Glossary/Accessible_name
l10n:
  sourceCommit: 371bd494d2580e7f4f45f1934cfe8335bd3cc80e
---

{{GlossarySidebar}}

**접근 가능한 이름(Accessible name)**은 사용자 인터페이스 요소의 이름입니다. 이는 보조 기술 사용자에게 요소에 대한 레이블을 제공하는 HTML 요소와 연관된 텍스트입니다.

접근 가능한 이름은 요소의 목적이나 의도를 전달합니다. 이는 사용자가 요소의 용도와 요소와 상호 작용하는 방법을 이해하는 데 도움이 됩니다. 일반적으로, 요소의 접근 가능한 이름은 페이지마다 고유해야 합니다. 이를 통해 사용자는 특정 요소를 다른 요소와 구별하고 상호 작용하려는 요소를 식별하는 데 도움이 됩니다.

요소와 HTML 마크업에 따라, 접근 가능한 이름의 값은 보이는 (예, {{HTMLElement("figcaption")}} 내의 텍스트) 또는 보이지 않는 (예, 요소에 설정된 `aria-label` 속성) 콘텐츠 또는 둘 다의 조합에서 나타날 수 있습니다. 요소의 접근 가능한 이름이 결정되는 방식은 요소마다 다른 [접근 가능한 이름 계산](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation)을 기반으로 합니다.

접근 가능한 이름으로 보이는 텍스트를 사용하는 것이 가장 좋습니다. {{HTMLElement("a")}}, {{HTMLElement("td")}} 및 {{HTMLElement("button")}}을 포함한 많은 요소는 해당 콘텐츠에서 이름을 얻습니다. 예를 들어, `<a href="foo.html">Bar</a>`가 있는 경우 접근 가능한 이름은 "Bar"입니다.

다른 요소는 연관된 요소의 콘텐츠에서 접근 가능한 이름을 얻습니다. {{HTMLElement("fieldset")}}, {{HTMLElement("table")}} 및 {{HTMLElement("figure")}}와 같은 일부 상위 요소의 경우 해당 요소에 하위 {{HTMLElement("fieldset")}}, {{HTMLElement("caption")}} 또는 {{HTMLElement("figcaption")}}는 각각 자동으로 연결됩니다. {{HTMLElement("textarea")}} 및 {{HTMLElement("input")}}와 같은 일부 다른 요소의 경우 접근 가능한 이름은 관련 요소인 {{HTMLElement("label")}} 요소에서도 알 수 있습니다. 하지만 해당 연결은 form control의 `id`와 일치하는 `<label>`의 `for` 속성 값을 사용하여 명시적으로 설정해야 합니다.

{{HTMLElement("img")}}와 같은 일부 요소의 경우 접근 가능한 이름은 해당 속성(이 경우, `alt` 속성 값)에서 가져옵니다. `<img src="grape.jpg" alt="banana"/>`가 주어지면 이미지의 접근 가능한 이름은 "banana"입니다.

표시되는 콘텐츠와 요소 또는 여러 텍스트 노드와 요소 사이의 연결을 생성하려면, [`aria-labeledby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 속성을 사용할 수 있습니다. 접근 가능한 이름이 필요한 UI 요소와 연결할 표시되는 텍스트가 없는 경우, [`aria-label`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-label) 속성을 사용할 수 있습니다. {{HTMLElement("code")}}, {{HTMLElement("del")}} 및 {{HTMLElement("mark")}}와 같이 인라인 텍스트를 표시하는 요소에 이름을 추가하면 안 됩니다.

텍스트 콘텐츠 섹션과 같은 많은 요소에는 접근 가능한 이름이 필요하지 않습니다. 모든 컨트롤에는 접근 가능한 이름이 있어야 합니다. 정보를 전달하고 순전히 표현용이 아닌 모든 이미지도 마찬가지입니다.

보조 기술은 요소의 역할과 함께 접근 가능한 이름인 접근성 이름 속성을 사용자에게 제공합니다. 많은 요소에는 접근 가능한 이름이 필요하지 않지만, 일부 콘텐츠 [역할](/ko/docs/Web/Accessibility/ARIA/Roles)에는 접근 가능한 이름이 있으면 이점을 얻을 수 있습니다. 예를 들어, [`tabpanel`](/ko/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)은 사용자가 [`tab`](/ko/docs/Web/Accessibility/ARIA/Roles/tab_role) 역할을 사용하여 관련 요소를 활성화한 후에 나타나는 콘텐츠 부분입니다. 이 역할은 {{HTMLElement("div")}} 요소와 같이 필요한 이름이 없는 요소에 설정할 수 있습니다. `tab`은 컨트롤이며, 접근 가능한 이름이 있어야 합니다. `tabpanel`은 `tab`의 하위(콘텐츠 부분)입니다. `tabpanel`에 `aria-labelledby`를 추가하는 것이 가장 좋습니다.

## 같이 보기

- [ARIA 역할](/ko/docs/Web/Accessibility/ARIA/Roles)
- [ARIA 속성](/ko/docs/Web/Accessibility/ARIA/Attributes)
- [접근성](/ko/docs/Web/Accessibility)
- [접근성 배우기](/ko/docs/Learn/Accessibility)
