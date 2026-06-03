---
title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
original_slug: Web/Accessibility/ARIA/Attributes/aria-labelledby
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

`aria-labelledby` 속성은 적용된 요소에 레이블을 제공하는 요소(또는 여러 요소)를 지정합니다.

## 설명

`aria-labelledby` 속성은 작성자가 페이지의 다른 요소를 참조하여 접근 가능한 이름을 정의할 수 있도록 합니다.
이는 접근 가능한 이름을 제공하기 위해 요소를 연결하는 기본 지원이 없는 요소를 사용할 때 유용합니다.

일부 요소는 내부 콘텐츠에서 [접근 가능한 이름](https://w3c.github.io/accname/#dfn-accessible-name)이 결정됩니다. 예를 들어 {{HTMLElement('button')}}, {{HTMLElement('a')}}, {{HTMLElement('td')}}의 접근 가능한 이름은 여는 태그와 닫는 태그 사이의 텍스트에서 옵니다. 다른 요소, {{HTMLElement('textarea')}}, {{HTMLElement('fieldset')}}, {{HTMLElement('table')}} 등은 연관된 요소의 콘텐츠에서 접근 가능한 이름을 얻습니다. 이 경우 접근 가능한 이름은 각각 `for` 속성을 가진 {{HTMLElement('label')}}, {{HTMLElement('legend')}}, {{HTMLElement('caption')}}에서 결정됩니다.

모든 대화형 요소는 접근 가능한 이름을 가져야 합니다. 요소의 접근 가능한 이름을 DOM의 다른 위치에 있는 콘텐츠로 정의해야 할 때는, `aria-labelledby`를 사용해 다른 요소를 참조할 수 있습니다.

참조하여 접근 가능한 이름을 만들 수 있는 콘텐츠가 없는 경우에는 [`aria-label`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 속성을 대신 사용해야 합니다.

`aria-labelledby`의 목적은 `aria-label`과 동일합니다. 이 속성은 사용자에게 대화형 요소의 인식 가능하고 접근 가능한 이름을 제공합니다. 요소에 두 속성이 모두 설정된 경우 `aria-labelledby`가 사용됩니다. `aria-labelledby`는 `aria-label`, {{HTMLElement('label')}}, 요소의 내부 텍스트를 포함한 다른 모든 접근 가능한 이름 제공 방식보다 우선합니다.

`aria-labelledby`와 [`aria-describedby`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 속성은 모두 다른 요소를 참조하여 텍스트 대체를 결정합니다. `aria-labelledby`는 요소에 접근 가능한 이름을 제공하는 간단한 텍스트를 참조해야 합니다. `aria-describedby`는 설명을 제공하는 더 긴 콘텐츠를 참조하는 데 사용됩니다. 대화형 요소의 접근 가능한 이름에 적절한 간단한 레이블을 제공하는 요소가 DOM에 없는 경우, `aria-label`을 사용하여 대화형 요소의 접근 가능한 이름을 정의합니다.

> [!NOTE]
> 미국 영어에서는 "labeled"가 l 하나로 쓰이지만, "labelledby" 표기는 이미 정착되었으며 접근성 API에서 사용되는 표기입니다.

다음 예시는 형제 요소의 텍스트 콘텐츠를 사용하여 체크박스 입력 요소에 접근 가능한 이름을 제공하기 위해 `aria-labelledby`를 사용합니다.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">I agree to the Terms and Conditions.</span>
```

`aria-labelledby`를 사용하는 것은 이 상황에서 `for` 속성이 있는 HTML {{HTMLElement('label')}} 요소를 사용하는 것과 비슷하지만, 매우 중요한 차이점이 있습니다. `aria-labelledby` 속성은 접근 가능한 이름만 정의합니다. `<label>`의 다른 기능, 예를 들어 레이블 요소를 클릭하면 연결된 입력 요소가 활성화되는 기능은 제공하지 않습니다. 이러한 기능은 JavaScript로 다시 추가해야 합니다.

다행히도, `type="checkbox"`가 지정된 HTML {{HTMLElement('input')}}은 기본 `<label>`과 함께 동작합니다. 가능하다면 다음과 같이 사용하세요.

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions.
</label>
<p><a href="tac.html">Read our Terms and Conditions</a>.</p>
```

### 장점 (및 단점)

1. 브라우저가 접근 가능한 이름을 결정할 때 `aria-labelledby` 속성이 가장 높은 우선순위를 가집니다. 이 속성은 `aria-label`, 다른 이름 지정 속성, 심지어 요소의 콘텐츠까지 포함한 다른 방식들을 덮어쓴다는 점에 유의하세요.

   ```html
   <button aria-label="Blue" aria-labelledby="color">Red</button>
   <span id="color">Yellow</span>
   ```

   이 예시에서 접근 가능한 이름은 "Yellow"입니다.

2. `aria-labelledby` 속성은 값으로 공백으로 구분된 id 참조 목록을 받습니다. 이는 하나 이상의 요소를 결합해 하나의 접근 가능한 이름으로 만들 수 있음을 의미합니다. 요소 자체의 콘텐츠를 참조하기 위해 해당 요소의 [`id`](/ko/docs/Web/HTML/Reference/Global_attributes/id)를 포함할 수도 있습니다.

   ```html
   <h2 id="attr" class="article-title">13 ARIA attributes you need to know</h2>
   <p>
     There are over 50 ARIA states and properties, but 13 of them stand out…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">read more</a>
   </p>
   ```

   이 예시에서 접근 가능한 이름은 "read more 13 ARIA attributes you need to know"입니다.

3. `aria-labelledby` 속성 값의 순서는 중요합니다. `aria-labelledby`가 둘 이상의 요소를 참조할 때, 각 참조된 요소의 콘텐츠는 `aria-labelledby` 값에서 지정된 순서대로 결합됩니다. 만약 `aria-labelledby="attr rm13"`으로 작성했다면, 접근 가능한 이름은 "13 ARIA attributes you need to know read more"가 됩니다.

4. `aria-labelledby` 속성은 값에 반복된 `id`를 무시합니다. 요소가 두 번 이상 참조되면, 첫 번째 참조만 처리됩니다. `aria-labelledby="attr attr rm13 rm13"`은 `aria-labelledby="attr rm13"`으로 처리됩니다.

5. `aria-labelledby` 속성 값에는 심지어 보이지 않는 요소의 콘텐츠도 포함될 수 있습니다. 보조 기술 사용자에게 다른 사용자와 동일한 콘텐츠를 제공해야 하지만, HTML [`hidden`](/ko/docs/Web/HTML/Reference/Global_attributes/hidden) 속성, CSS [`display: none`](/ko/docs/Web/CSS/display), CSS [`visibility: hidden`](/ko/docs/Web/CSS/Reference/Properties/visibility)이 적용된 요소의 콘텐츠도 결정된 이름 문자열에 포함할 수 있습니다.

6. `aria-labelledby` 속성은 입력 요소의 값을 포함합니다. 값이 `<input>`을 참조하는 경우, 폼 컨트롤의 현재 값이 결정된 이름 문자열에 포함되며, 값이 업데이트되면 그에 따라 변경됩니다.

7. `aria-labelledby` 속성은 체이닝할 수 없습니다. `aria-labelledby`가 있는 요소가 또 다른 `aria-labelledby`를 가진 요소를 참조하는 경우, 참조된 요소의 `aria-labelledby` 속성은 무시됩니다.

> [!WARNING]
> `aria-labelledby`로 요소의 이름을 결정하는 과정은 복잡할 수 있고 숨겨진 콘텐츠를 참조할 수도 있으므로, 사용자에게 기대한 이름이 표시되는지 보조 기술로 테스트하는 것이 매우 중요합니다.

## 값

- ID 참조 목록
  - 현재 요소에 레이블을 제공하는 요소를 참조하는 하나 이상의 ID 값을 공백으로 구분한 목록입니다.

## 관련 인터페이스

- {{domxref("Element.ariaLabelledByElements")}}
  - : `ariaLabelledByElements` 속성은 각 요소의 인터페이스에 속합니다.
    이 값은 {{domxref("Element")}}의 하위 클래스 배열이며, `aria-labelledby` 속성의 `id` 참조를 반영합니다([몇 가지 주의 사항](/ko/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) 참고).
- {{domxref("ElementInternals.ariaLabelledByElements")}}
  - : `ariaLabelledByElements` 속성은 각 사용자 정의 요소의 인터페이스에 속합니다.
    이 값은 {{domxref("Element")}}의 하위 클래스 배열이며, `aria-labelledby` 속성의 `id` 참조를 반영합니다([몇 가지 주의 사항](/ko/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) 참고).

## 관련 역할

작성자가 접근 가능한 이름을 제공할 수 없는 역할을 **제외한** 거의 모든 역할에서 사용됩니다.

`aria-labelledby` 속성은 다음에서는 **지원되지 않습니다.**

- [`code`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`caption`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
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

- HTML {{HTMLElement('label')}} 요소
- HTML {{HTMLElement('legend')}} 요소
- HTML {{HTMLElement('caption')}} 요소
- [`aria-label`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-describedby`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
