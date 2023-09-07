---
title: aria-label
slug: Web/Accessibility/ARIA/Attributes/aria-label
---

`aria-label` 속성은 상호작용되는 요소에 레이블된 문자열 값을 정의합니다.

## 설명

때때로 요소의 기본 [접근자 이름](https://w3c.github.io/accname/#dfn-accessible-name)이 없는 경우, 또는 그 콘텐츠를 명확하게 설명하지 못한 경우, 그리고 해당 요소에게 의미를 주기 위한 객체와 연관된 DOM 안에 보이는 콘텐츠가 없는 경우가 있습니다. 흔한 예로 SVG 또는 [icon font (사용해서는 안되는 방법입니다)](https://www.youtube.com/watch?v=9xXBYcWgCHA).

상호작용을 하는 요소에 접근자 이름이 없거나, 접근자 이름이 부정확한 경우, 또는 [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 속성을 통해 참조되는 DOM 안에 보이는 콘텐츠가 없는 경우에 `aria-label` 속성은 이 속성이 부여된 상호작용 요소에 지정할 문자열을 정의하는데 사용될 수 있습니다. 이는 해당 요소에게 접근자 이름을 제공하게 됩니다.

```html
<button aria-label="Close" onclick="myDialog.close()">
  <svg
    aria-hidden="true"
    focusable="false"
    width="17"
    height="17"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
      fill="#000" />
  </svg>
</button>
```

> **참고:** `aria-label`은 레이블로 참조되어질 수 있는 DOM 안에 표시가능한 적당한 텍스트가 없을 때, 상호작용을 하는 요소들 또는 다른 ARIA 선언들을 통해 상호작용하도록 만들어진 요소에 사용하기 위한 것입니다.

대부분의 콘텐츠에는 이를 직접 감싸는 요소의 텍스트 콘텐츠로부터 생성된 접근자 이름이 있습니다. 또한, 접근자이름들은 특정 속성들 또는 연관된 요소들로부터 생성될 수 있습니다.

기본적으로, 버튼의 접근자 이름은 {{HTMLElement('button')}}의 여는 태그와, 닫는 태그 사이의 콘텐츠이고, image 요소의 접근자 이름은 [`alt`](/ko/docs/Web/HTML/Element/img#attr-alt) 속성의 콘텐츠, 그리고 form input요소의 접근자 이름은 연결된 {{HTMLElement('label')}} 요소의 콘텐츠입니다.

만약 이러한 옵션들 중 가능한 것이 없거나, 초기 접근자 이름이 적합하지 않은 경우, `aria-label` 속성을 사용하여 요소의 접근자 이름을 정의합니다.

`aria-label`은 요소에 레이블할 수 있는 텍스트가 표기가능하지 _않은_ 경우 사용할 수 있습니다. 만일 요소에 레이블할 수 있는 보이는 텍스트가 있다면, [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)를 대신 사용하시기 바랍니다.

`aria-label`의 목적은 `aria-labelledby`와 같습니다. 둘 다 요소에 접근자 이름을 제공합니다. 만일 당신이 참조할 수 있는 요소에 대해 표시가능한 이름이 없다면, 사용자에게 인지가능하고 접근가능한 이름을 제공하기 위하여 `aria-label`을 사용하시기 바랍니다. 만약 레이블 텍스트가 DOM 안에 사용가능하고, DOM 콘텐츠 및 허용 가능한 사용자 경험을 참조하는 경우라면, `aria-labelledby`를 사용하는 것을 권장합니다. 둘 다 포함하여 사용하지 마시기 바랍니다. 둘 다 동일한 요소에 있다면, `aria-labelledby`가 `aria-label`보다 우선됩니다.

`aria-label` 속성은 일반적인 시멘틱 HTML요소들과 함께 사용될 수 있습니다. 이는 [ARIA `roles`](/ko/docs/Web/Accessibility/ARIA/Roles)이 할당된 요소에만 국한되지 않습니다.

`aria-label`을 "남용"하지 마십시오. 예를 들어, 추가적인 지침 또는 명확한 사용자 경험을 제공하기 위해 `aria-label`이 아닌 `aria-describedby` 또는 `aria-description`과 함께 표시가능한 텍스트를 사용하십시오. 오직 스크린 리더에만 지침을 지정하실 필요는 없음을 잊지 마십시오. 만일 지침이 필요하다면, 모두에게 제공하시기 바랍니다 (또는 가급적 사용자 인터페이스를 보다 직관적으로 만들어 주시기 바랍니다).

모든 요소에 접근자 이름을 지정할 수 있는 것은 아닙니다. `aria-label`과 `aria-labelledby` 둘 다 `code`, `term`, 또는 `emphasis`와 같은 비상호작용 요소 또는 인라인 구조적 역할과 함께 사용해서는 안되며, 의미체계가 `presentation`, `none`, `hidden`을 포함한 접근성 API에 사상되지 않는 역할들과 함께 사용해서는 안됩니다. `aria-label` 속성은 오직 상호작용 요소에만 사용됩니다. 접근자 이름을 확실하게 하기 위해 `aria-label`을 사용하십시오. links, videos, form 조절, [랜드마크 roles](/ko/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), [위젯 roles](/ko/docs/Web/Accessibility/ARIA/Roles#2._widget_roles)과 같은 역할과 모든 상호작용 요소에 대하여 DOM에 아무것도 표시되지 않는 경우 접근자 이름이 제공되도록 `aria-label`을 사용하십시오.

만일 {{HTMLElement('iframe')}}에 `title`, image에 `alt` 속성, 그리고 input과 연관된 {{HTMLElement('label')}}을 지정하면, `aria-label`은 필요하지 않습니다. 그러나, `aria-label`이 있는 경우 `iframe`과 image, `input`의 접근자 이름인 `title`과 `alt`, 그리고 `<label>` 보다 우선순위를 가지게 됩니다.

> **참고:** `aria-label`은 오로지 "보이도록" 하는 보조적 기술입니다. 만일 사용자에게 추가하기에 충분히 중요한 정보인 경우 모든 사용자에게 표시되도록 하는 것이 좋습니다.

## Values

- `<string>`
  - : 객체에 접근가능한 이름이 될 문자열 값

## ARIAMixin API

- {{domxref("Element.ariaLabel")}}
  - : {{domxref("Element")}} 인터페이스의 일부인 [`ariaLabel`](/ko/docs/Web/API/Element/ariaLabel) 속성은 `aria-label` 속성의 값을 반영합니다.
- {{domxref("ElementInternals.ariaLabel")}}
  - : {{domxref("ElementInternals")}} 인터페이스의 일부인 [`ariaLabel`](/ko/docs/Web/API/ElementInternals/ariaLabel) 속성은 `aria-label` 속성의 값을 반영합니다.

## Associated roles

작성자에 의해 접근자 이름을 제공할 수 없는 역할을 **제외한** 거의 모든 역할에 사용됩니다.

`aria-label` 속성이 지원되지 **않는** 역할들:

- [`code`](/ko/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`caption`](/ko/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`deletion`](/ko/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`emphasis`](/ko/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`generic`](/ko/docs/Web/Accessibility/ARIA/Roles/generic_role)
- [`insertion`](/ko/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`mark`](/ko/docs/Web/Accessibility/ARIA/Roles/mark_role)
- [`paragraph`](/ko/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`presentation`](/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [`none`](/ko/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`strong`](/ko/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`subscript`](/ko/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`superscript`](/ko/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`suggestion`](/ko/docs/Web/Accessibility/ARIA/Roles/suggestion_role)
- [`term`](/ko/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`time`](/ko/docs/Web/Accessibility/ARIA/Roles/structural_roles)

> **참고:** `aria-label` 속성은 오로지 상호작용 요소에서만 사용됩니다. 위에 나열된 것들과 같은 비 상호작용 요소에 사용할 경우 aria-label 속성 값은 읽히지 않거나, 비 상호작용 요소를 상호작용하는 요소처럼 작동하는 것으로 사용자를 혼동시킬 수 있습니다.

## 명세

{{Specifications}}

## 같이 보기

- {{HTMLElement('label')}} 요소
- [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

<section id="Quick_links">
<strong><a href="/ko/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/ko/docs/Web/Accessibility/aria/Attributes")}}
</section>
