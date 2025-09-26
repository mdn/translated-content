---
title: Element.setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: 049632675ccb83fe2e257c43071d366d3f80ee2b
---

{{APIRef("DOM")}}

지정된 요소의 속성 값을 설정합니다. 속성이 이미 있으면 값은 업데이트됩니다. 속성이 없다면 지정된 이름과 값으로 새 속성이 추가됩니다.

속성의 현재 값을 얻으려면 {{domxref("Element.getAttribute", "getAttribute()")}}를 사용하고, 속성을 제거하려면 {{domxref("Element.removeAttribute","removeAttribute()")}}를 호출하세요.

## 구문

```js-nolint
setAttribute(name, value)
```

### 매개변수

- `name`
  - : 값을 설정할 속성의 이름을 지정하는 문자열입니다. 속성 이름은 HTML 문서의 HTML 요소에서 `setAttribute()`가 호출될 때 모두 자동으로 소문자로 변환됩니다.
- `value`
  - : 속성에 할당할 값이 포함된 문자열입니다. 지정된 문자열이 아닌 값은 자동으로 문자열로 변환됩니다.

불리언 속성은 값이 요소에 존재하는 경우 `true`로 간주됩니다. 선행 또는 후행 공백 없이 값을 빈 문자열(`""`)로 설정하거나 속성의 이름으로 설정해야 합니다. 실제 [예제](#예제)는 아래를 참조하세요.

지정된 `value`가 문자열로 변환되기 때문에 `null`을 지정한다고 해서 반드시 예상대로 작동하지 않습니다. 속성을 제거하거나 해당 값을 [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null)로 설정하는 대신 속성 값을 문자열 `"null"`로 설정합니다. 속성을 제거하려면 {{domxref("Element.removeAttribute", "removeAttribute()")}}를 호출하세요.

### 반환 값

없음 ({{jsxref("undefined")}}).

### 예외

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 지정된 속성 `name`에 속성 이름에 유효하지 않은 문자가 하나 이상 포함되어 있습니다.

## 예제

다음 예제에서 `setAttribute()`는 {{HTMLElement("button")}}에 속성을 설정합니다.

### HTML

```html
<button>Hello World</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  margin: 1em;
}
```

### JavaScript

```js
const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");
```

{{ EmbedLiveSample('예제', '300', '50') }}

이 예제는 다음 두 가지를 보여줍니다.

- 위의 `setAttribute()`에 대한 첫 번째 호출은 `name` 속성의 값을 "helloButton"으로 변경하는 것을 보여줍니다. 브라우저의 페이지 검사기([Chrome](https://developer.chrome.com/docs/devtools/dom/properties/), [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/css/inspect), [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [Safari](https://support.apple.com/en-us/guide/safari-developer/welcome/mac))를 사용하여 이를 확인할 수 있습니다.
- `disabled`와 같은 불리언 속성의 값을 설정하려면 아무 값으로든 설정할 수 있습니다.
  빈 문자열 또는 속성의 이름이 권장되는 값입니다. 중요한 것은 속성이 존재하는 경우 **실제 값에 관계없이** 해당 값이 참으로 간주된다는 것입니다. 속성이 없다는 것은 해당 값이 `false`임을 의미합니다. `disabled` 속성의 값을 빈 문자열(`""`)로 설정하면 `disabled`를 `true`로 설정하여 버튼이 비활성화됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

### Gecko 참고

`setAttribute()`를 사용하여 특정 속성, 특히 XUL의 `value`를 수정하는 것은 속성이 기본값을 지정하기 때문에 일관되지 않게 작동합니다. 현재 값에 액세스하거나 수정하려면 속성을 사용해야 합니다. 예를 들어 `Element.setAttribute()` 대신 `Element.value`를 사용합니다.
