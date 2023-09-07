---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
l10n:
  sourceCommit: 256f83064a7cc588df6d7c635e9db28e7572665a
---

{{HTMLSidebar}}

공문서에서 볼 법한 **`checkbox`** 유형의 {{htmlelement("input")}} 요소는 기본적으로 활성화될 시에 체크되는 박스로 렌더링 됩니다. 박스의 정확한 외형은 브라우저가 실행 중인 운영체제의 시스템 구성에 따라 달라질 수 있습니다. 일반적으로는 사각형의 모습이지만, 둥근 모서리를 가질 수도 있습니다. **`checkbox`** 는 폼 안에서 선택된 단일 값들을 제출할 수 있는 기능을 제공합니다.

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **참고:** [라디오 버튼](/ko/docs/Web/HTML/Element/input/radio) 은 체크박스와 비슷하지만 중요한 차이점이 하나 있습니다. 여러 라디오 버튼은 하나의 집합으로 그룹화되어 그 안에서 단 하나만 선택될 수 있지만, 체크박스의 경우는 각각의 값을 켜고 끌 수 있다는 점입니다. 다수의 컨트롤이 존재할 때 라디오 버튼은 전체에서 하나의 요소에 대한 선택만을 허용하고, 체크박스는 여러 개의 요소가 선택되는 것을 허용합니다.

## Value

체크박스의 값을 나타내는 하나의 문자열입니다. 클라이언트 쪽에서 이 값은 보이지 않지만, 서버 쪽에서 이 값은 체크박스의 `name`과 함께 전달되는 데이터에 부여되는 값입니다. 아래의 예제를 살펴보겠습니다.

```html
<form>
  <div>
    <input
      type="checkbox"
      id="subscribeNews"
      name="subscribe"
      value="newsletter" />
    <label for="subscribeNews">뉴스레터를 구독하시겠습니까?</label>
  </div>
  <div>
    <button type="submit">구독하기</button>
  </div>
</form>
```

이 예제에서는 `name` 특성은 `subscribe`로, `value` 특성은 `newsletter`으로 지정되었습니다. 폼이 제출되면 전달될 `name/value` 쌍의 데이터는 `subscribe=newsletter`와 같이 표현됩니다.

만약 `value` 특성이 생략되면, 해당 체크박스의 기본 값은 `on`입니다. 따라서 이 경우 제출된 데이터는 `subscribe=on`이 됩니다.

> **참고:** 폼이 제출될 때 체크박스가 체크되어 있지 않으면, 체크되지 않은 상태를 표현하는 (이를테면 `value=unchecked`과 같은) 데이터가 서버에 전달되지는 않습니다. 값 자체가 서버에 전달되지 않습니다. 만약 체크박스가 체크되지 않은 경우 기본 값을 제출하고 싶다면, 폼 안에 {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}}를 Javascript 등에 의해 생성된 동일한 `name` 그리고 `value`과 함께 포함시킬 수 있습니다.

## 추가 특성들

모든 {{HTMLElement("input")}} 요소들에 의해 공유되는 공통 특성들 외에도, `checkbox` input은 아래의 특성들을 지원합니다.

- {{htmlattrdef("checked")}}

  - : (페이지가 로드될 때) 체크박스가 기본적으로 체크된 상태로 보여질 것인지를 지칭하는 불리언 특성입니다. 이 특성은 체크박스가 "현재 체크된 상태"인지를 나타내지 않습니다. 만약 체크박스의 상태가 변경되면, 이 특성은 그 변경을 반영하지 않습니다 (단지 {{domxref("HTMLInputElement")}} 의 `checked` IDL 특성이 변경됩니다.)
    > **참고:** 다른 Input 컨트롤들과는 다르게, 체크박스의 값은 현재 체크박스의 상태가 `checked`일 때에만 제출되는 데이터에 포함됩니다. 이 경우, 체크박스의 `value` 특성에 지정된 값이 Input의 `value`으로서 전달됩니다.
    > 다른 브라우저들과는 다르게, Firefox의 경우 기본적으로 페이지 로드에 걸쳐서 `<input>`의 [`checked` 상태를 동적으로 유지합니다.](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) 이 기능을 제어하기 위해서는 [`autocomplete`](/ko/docs/Web/HTML/Element/input#autocomplete) 특성을 사용해야 합니다.

- {{htmlattrdef("value")}}

  - : The `value` 특성은 {{HTMLElement("input")}} 요소가 공유하는 특성입니다. 하지만, `checkbox` 유형의 `input`에서는 특별한 용도로 사용됩니다. 폼이 제출될 때, 현재 활성화되어 있는 체크박스만이 서버 측에 전달됩니다. 그리고 `value` 특성에 지정된 값이 바로 전달되는 값이 됩니다. 만약 `value` 특성의 값이 지정되어 있지 않다면, 서버 측에는 기본 값으로 `on`이 전달됩니다. 이는 위의 [Value](#Value) 구획에서도 설명하고 있습니다.

## 체크박스 Input 사용하기

이미 위에서 대부분의 기본적인 체크박스 사용법을 다루었습니다. 여기부터는 체크박스의 다른 공통 기능들과 필요한 기술들을 다룹니다.

### 여러 개의 체크박스 다루기

위에서 살펴본 예제의 경우 하나의 체크박스만을 가지고 있었습니다. 실제 상황에서는 여러 체크박스들을 자주 마주치게 됩니다. 만약 체크박스들이 서로 완전히 관계가 없다면, 각각의 체크박스들을 위에서처럼 하나씩 다룰 수 있습니다. 하지만 만약 체크박스들이 모두 서로 관련되어 있다면 일이 간단하지는 않습니다.

예를 들면, 아래의 데모는 사용자로 하여금 자신의 관심사에 대해서 선택할 수 있게 하는 여러 개의 체크박스를 포함합니다. (전체 예제를 확인하려면 [예제](#예제) 구획을 참조하세요.)

```html
<fieldset>
  <legend>관심사들을 선택하세요</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" />
    <label for="coding">코딩</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">음악</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Handling_multiple_checkboxes', 600, 100)}}

이 예제에서 여러 체크박스들에 같은 `name` 특성의 값이 지정된 것을 알 수 있습니다. 두 체크박스가 모두 활성화된 뒤에 폼이 제출되면 `interest=coding&interest=music`과 같은 `name/value` 쌍의 문자열 데이터가 얻어집니다. 이 문자열이 서버에 전달되면, 연관 배열이 아닌 다른 방식으로 구문 분석을 수행해서 마지막 하나의 값만이 아닌 모든 `interest` 이름을 가지고 있는 값들을 얻어내야 합니다. 예를 들어, 파이썬으로 이를 수행하는 기술을 확인하려면 [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable)를 참조하세요.

### 기본적으로 체크박스를 활성화 하기

체크박스를 기본적으로 활성화된 상태로 만들기 위해서는 `checked` 특성을 부여해야 합니다. 아래의 예제를 확인하세요.

```html
<fieldset>
  <legend>관심사들을 선택하세요</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked />
    <label for="coding">코딩</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">음악</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Checking_boxes_by_default', 600, 100)}}

### 체크박스에 대해서 더 넓은 선택 영역을 제공하기

위의 예제에서 체크박스 자체 뿐만 아니라, 해당 체크박스와 연관된 {{htmlelement("label")}} 요소를 클릭함으로써 체크박스를 활성화시킬 수 있다는 것을 알아챘을 수도 있습니다. 이는 특히 스마트폰과 같이 작은 화면을 가진 기기에서 사용자가 원하는 사항을 쉽게 선택할 수 있도록 해주는, HTML 폼 레이블의 굉장히 유용한 기능입니다.

접근성을 넘어서, 이는 폼에 `<label>` 요소를 적절히 설정할 또 다른 좋은 이유가 됩니다.

### 중간 상태 체크박스

활성화 및 비활성화 상태에 덧붙여서, 체크박스는 **indeterminate**라는 세번째 상태를 가질 수 있습니다. 이 상태는 해당 사항이 선택되었는지 혹은 선택되지 않았는지 판단할 수 없는 상태를 의미합니다.
이는 Javascript의 {{domxref("HTMLInputElement")}} 객체의 `indeterminate` 특성에 의해 설정될 수 있습니다. HTML 특성을 이용해서는 설정할 수 없습니다.

```js
inputInstance.indeterminate = true;
```

indeterminate 상태에 있는 체크박스는 대부분의 브라우저에서 박스 안에 활성화/비활성화 상태가 드러나는 대신, 붙임표 혹은 빼기 기호와 같은 수평선을 가지게 됩니다.

이 특성을 사용할 일이 많지는 않습니다. 가장 흔하게 사용되는 경우는 체크박스가 여러 하위 체크박스를 가지는 경우입니다. 만약 모든 하위 체크박스가 활성화되면, 상위 체크박스 또한 활성화됩니다. 만약 하위 체크박스가 모두 활성화되지 않았다면 상위 체크박스는 활성화되지 않습니다. 만약 하위 체크박스 중 하나가 다른 체크박스들과는 다른 상태를 가진다면 상위 체크박스는 indeterminate 상태가 됩니다.

이는 아래의 예제로 확인할 수 있습니다. (영감을 준 [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/)에 감사를 표합니다.) 이 예제에서 우리는 조합에 사용할 재료를 선택하는 과정을 추적하게 됩니다. 하나의 재료에 대한 체크박스를 활성화하게 되면, Javascript 함수는 선택된 재료의 수를 확인합니다.

- 아무 것도 활성화되지 않았다면, 조합 이름에 해당하는 체크박스는 비활성화됩니다.
- 하나 혹은 두 개가 활성화되었다면, 조합 이름에 해당하는 체크박스는 `indeterminate` 상태가 됩니다.
- 세 개가 모두 활성화되었다면, 조합 이름에 해당하는 체크박스는 `checked` 상태가 됩니다.

따라서 이 예제에서 `indeterminate` 상태는 재료를 선택하는 과정이 시작되었지만 조합이 완료되지는 않았다는 것을 표현하기 위해 사용됩니다.

```js
const overall = document.querySelector("#enchantment");
const ingredients = document.querySelectorAll("ul input");

overall.addEventListener("click", (e) => {
  e.preventDefault();
});

for (const ingredient of ingredients) {
  ingredient.addEventListener("click", updateDisplay);
}

function updateDisplay() {
  let checkedCount = 0;
  for (const ingredient of ingredients) {
    if (ingredient.checked) {
      checkedCount++;
    }
  }

  if (checkedCount === 0) {
    overall.checked = false;
    overall.indeterminate = false;
  } else if (checkedCount === ingredients.length) {
    overall.checked = true;
    overall.indeterminate = false;
  } else {
    overall.checked = false;
    overall.indeterminate = true;
  }
}
```

{{EmbedGHLiveSample("learning-area/html/forms/indeterminate-example/index.html", '100%', 200)}}

> **참고:** 만약 `indeterminate` 상태의 체크박스와 함께 폼을 제출하게 되면 활성화되지 않은 체크박스를 제출하는 것과 같은 일이 발생합니다. 즉, 체크박스를 표현하는 데이터는 전달되지 않습니다.

## 유효성 검증하기

체크박스는 모든 {{HTMLElement("input")}} 요소들에 제공되는 [유효성 검증](/ko/docs/Web/Guide/HTML/Constraint_validation) 을 지원합니다. 하지만 대부분의 {{domxref("ValidityState")}} 값은 `false`입니다. 만약 체크박스가 [`required`](/ko/docs/Web/HTML/Element/input#required) 특성을 가졌지만 활성화되지 않은 경우에, {{domxref("ValidityState.valueMissing")}} 값은 `true`가 됩니다.

## 예제

아래의 예제는 위에서 본 "여러 개의 체크박스 다루기" 에서의 예제를 확장한 것입니다. 더 많은 체크박스를 가지고 있으며, "Other" 체크박스는 활성화되었을 때 이 체크박스에 대해서 다른 값을 입력할 수 있는 텍스트 영역이 나타납니다. 이는 간단한 JavaScript 블록을 통해 구현할 수 있습니다. 또한 이 예제는 스타일을 개선하기 위해 일부 CSS 또한 포함합니다.

### HTML

```html
<form>
  <fieldset>
    <legend>Choose your interests</legend>
    <div>
      <input type="checkbox" id="coding" name="interest" value="coding" />
      <label for="coding">Coding</label>
    </div>
    <div>
      <input type="checkbox" id="music" name="interest" value="music" />
      <label for="music">Music</label>
    </div>
    <div>
      <input type="checkbox" id="art" name="interest" value="art" />
      <label for="art">Art</label>
    </div>
    <div>
      <input type="checkbox" id="sports" name="interest" value="sports" />
      <label for="sports">Sports</label>
    </div>
    <div>
      <input type="checkbox" id="cooking" name="interest" value="cooking" />
      <label for="cooking">Cooking</label>
    </div>
    <div>
      <input type="checkbox" id="other" name="interest" value="other" />
      <label for="other">Other</label>
      <input type="text" id="otherValue" name="other" />
    </div>
    <div>
      <button type="submit">Submit form</button>
    </div>
  </fieldset>
</form>
```

### CSS

```css
html {
  font-family: sans-serif;
}

form {
  width: 600px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

fieldset {
  background: cyan;
  border: 5px solid blue;
}

legend {
  padding: 10px;
  background: blue;
  color: cyan;
}
```

### JavaScript

```js
const otherCheckbox = document.querySelector("#other");
const otherText = document.querySelector("#otherValue");
otherText.style.visibility = "hidden";

otherCheckbox.addEventListener("change", () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = "visible";
    otherText.value = "";
  } else {
    otherText.style.visibility = "hidden";
  }
});
```

{{EmbedLiveSample('예제', '100%', 300)}}

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Value</a></strong></td>
      <td>
        체크박스의 값을 나타내는 문자열
      </td>
    </tr>
    <tr>
      <td><strong>이벤트</strong></td>
      <td>{{domxref("HTMLElement/change_event", "change")}} 그리고 {{domxref("HTMLElement/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>지원하는 공통 특성</strong></td>
      <td><code>checked</code></td>
    </tr>
    <tr>
      <td><strong>IDL 특성</strong></td>
      <td>
        <code><a href="#attr-checked">checked</a></code>,
        <code><a href="#attr-indeterminate">indeterminate</a></code> 그리고
        <code><a href="#attr-value">value</a></code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM 인터페이스</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>메서드</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>암시적 ARIA 역할</strong></td>
      <td><a href="/ko/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("input")}} 과 그를 구현하는 {{domxref("HTMLInputElement")}} 인터페이스
- {{cssxref(":checked")}} 그리고 현재 상태를 기반으로 체크박스를 꾸밀 수 있는 {{cssxref(":indeterminate")}} CSS 선택자
- [CSS 속성 호환성](/ko/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
