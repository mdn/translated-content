---
title: aria-label
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-label
original_slug: Web/Accessibility/ARIA/Attributes/aria-label
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

`aria-label` 속성은 요소의 역할이 [이름 지정을 금지](#associated_roles)하지 않는 한, 요소의 이름으로 사용할 수 있는 문자열 값을 정의합니다.

## 설명

때때로 요소의 기본 [접근 가능한 이름](/ko/docs/Glossary/Accessible_name)이 없거나, 접근 가능한 이름이 요소의 내용을 정확하게 설명하지 못하고, 객체에 의미를 부여할 수 있는 보이는 DOM 콘텐츠도 없는 경우가 있습니다. 이러한 요소의 흔한 예는 텍스트 없이 SVG 아이콘만 포함된 버튼입니다.

요소가 [금지된 목록](#associated_roles)에 속하지 않고 접근 가능한 이름이 없거나 접근 가능한 이름이 부정확하며, [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 속성을 통해 참조할 수 있는 DOM의 보이는 콘텐츠도 없는 경우, `aria-label` 속성을 사용하여 해당 상호작용 요소에 레이블이 될 문자열을 정의할 수 있습니다. 이렇게 하면 요소에 접근 가능한 이름이 제공됩니다.

아래 코드는 `<button>` 요소에 접근 가능한 이름을 제공하기 위해 `aria-label` 속성을 사용하는 방법의 예시를 보여줍니다. 이 예시의 버튼은 SVG 그래픽만 포함하고 텍스트 콘텐츠가 없으므로, 스크린 리더 사용자가 그 기능(이 경우 "Close")을 이해하기 위해 `aria-label`이 필수적입니다.

```html
<button aria-label="Close">
  <svg
    aria-hidden="true"
    focusable="false"
    width="17"
    height="17"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
      fill="black" />
  </svg>
</button>
```

```js
document.querySelector("button").addEventListener("click", () => {
  myDialog.close();
});
```

> [!NOTE]
> `aria-label`은 암묵적 또는 명시적 역할이 이름 지정을 금지하지 않는 요소의 이름을 지정하기 위해 사용됩니다. 요소가 참조하여 이름을 얻을 수 있는 보이는 레이블이 있는 경우, `aria-label`보다 `aria-labelledby`를 우선적으로 사용하는 것이 강력히 권장됩니다.

대부분의 콘텐츠는 바로 감싸는 요소의 텍스트 콘텐츠로부터 접근 가능한 이름이 생성됩니다. 접근 가능한 이름은 특정 속성이나 연관된 요소로부터도 만들어질 수 있습니다.

기본적으로 버튼의 접근 가능한 이름은 {{HTMLElement('button')}}의 여는 태그와 닫는 태그 사이의 콘텐츠이고, 이미지의 접근 가능한 이름은 [`alt`](/ko/docs/Web/HTML/Reference/Elements/img#alt) 속성의 콘텐츠이며, 폼 입력 요소의 접근 가능한 이름은 연결된 {{HTMLElement('label')}} 요소의 콘텐츠입니다.

이러한 옵션들을 사용할 수 없거나 기본 접근 가능한 이름이 적절하지 않은 경우, 요소의 접근 가능한 이름을 정의하기 위해 `aria-label` 속성을 사용하십시오.

> [!NOTE]
> `aria-label`은 접근 가능한 이름을 가질 수 있는 모든 요소에 사용할 수 있지만, 실제로는 대화형 요소, [위젯](/ko/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), [랜드마크](/ko/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), 이미지, 그리고 iframe에서만 지원됩니다.

`aria-label`을 사용할 때는 [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)도 함께 고려해야 합니다.

- `aria-label`은 요소를 레이블할 수 있는 텍스트가 보이지 않는 경우에 사용할 수 있습니다. 요소를 레이블하는 보이는 텍스트가 있는 경우에는 `aria-labelledby`를 사용하십시오.
- `aria-label`의 목적은 `aria-labelledby`와 동일합니다. 두 속성 모두 요소에 접근 가능한 이름을 제공합니다. 요소에 참조할 수 있는 보이는 이름이 없는 경우, `aria-label`을 사용하여 사용자에게 인식 가능한 접근 가능한 이름을 제공하십시오. DOM에 레이블 텍스트가 있고 이를 참조하여 수용 가능한 사용자 경험을 제공할 수 있다면 `aria-labelledby`를 사용하는 것이 좋습니다. 두 속성을 같은 요소에 함께 사용하지 마십시오. 둘 다 적용된 경우 `aria-labelledby`가 `aria-label`보다 우선합니다.

`aria-label`을 사용할 때는 다음 추가 지침을 유의하십시오.

- `aria-label` 속성은 일반적인 시맨틱 HTML 요소와 함께 사용할 수 있으며, [ARIA `role`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles)이 할당된 요소로만 제한되지 않습니다.
- `aria-label`을 "남용"하지 마십시오. 이는 주로 보조 기술을 위한 것임을 기억해야 합니다. 추가적인 지침을 제공하거나 사용자 인터페이스를 명확히 하기 위해서는 `aria-label`이 아니라 [`aria-describedby`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)나 [`aria-description`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)과 함께 보이는 텍스트를 사용해야 합니다. 지침은 스크린 리더 사용자만이 아니라 모든 사용자가 접근할 수 있어야 하며, 가능하다면 사용자 인터페이스 자체를 더 직관적으로 만드는 것이 바람직합니다.

  > [!NOTE]
  > `aria-label`의 내용은 보조 기술 외에는 표시되지 않으므로, 중요한 정보라면 모든 사용자가 볼 수 있도록 표시하는 것이 좋습니다.

- 모든 요소에 접근 가능한 이름을 지정할 수 있는 것은 아닙니다. `aria-label`과 `aria-labelledby`는 `code`, `term`, `emphasis`와 같은 인라인 구조적 역할이나, `none`을 포함해 접근성 API에 매핑되지 않는 역할에는 사용해서는 안 됩니다. `aria-label` 속성은 링크, 비디오, 폼 컨트롤, [랜드마크 역할](/ko/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles)이나 [위젯 역할](/ko/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles)을 가진 요소와 같이 DOM에 보이는 레이블이 없을 때 접근 가능한 이름을 제공하기 위한 것입니다.
- {{HTMLElement('iframe')}}에 `title`을 지정했거나, {{HTMLElement('img')}}에 `alt` 속성을 정의했거나, {{HTMLElement('input')}}에 {{HTMLElement('label')}}을 추가한 경우에는 `aria-label`이 필요하지 않습니다. 그러나 `aria-label` 속성이 있으면 iframe의 `title`, 이미지의 `alt`, 입력 요소의 `<label>` 텍스트보다 우선하여 해당 요소의 접근 가능한 이름으로 사용됩니다.

## 값

- `<string>`
  - : 객체에 접근 가능한 이름이 될 문자열 값입니다.

## 관련 인터페이스

- {{domxref("Element.ariaLabel")}}
  - : {{domxref("Element")}} 인터페이스의 일부인 [`ariaLabel`](/ko/docs/Web/API/Element/ariaLabel) 속성은 `aria-label` 속성의 값을 반영합니다.
- {{domxref("ElementInternals.ariaLabel")}}
  - : {{domxref("ElementInternals")}} 인터페이스의 일부인 [`ariaLabel`](/ko/docs/Web/API/ElementInternals/ariaLabel) 속성은 `aria-label` 속성의 값을 반영합니다.

## 관련 역할

작성자가 접근 가능한 이름을 제공할 수 없는 역할을 **제외한** 거의 모든 역할에서 사용됩니다.

`aria-label` 속성은 다음 역할에서는 **지원되지 않습니다.**

- [`code`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`caption`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`definition`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`deletion`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`emphasis`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`generic`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [`insertion`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`mark`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role)
- [`paragraph`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`presentation`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) / [`none`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`strong`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`subscript`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`superscript`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`suggestion`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role)
- [`term`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`time`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)

## 명세서

{{Specifications}}

## 같이 보기

- {{HTMLElement('label')}} 요소
- [`aria-description`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [접근성을 높이기 위한 HTML 랜드마크 역할 사용하기](/ko/blog/aria-accessibility-html-landmark-roles/) — MDN 블로그 (2023)
