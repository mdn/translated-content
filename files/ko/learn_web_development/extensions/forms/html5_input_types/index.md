---
title: HTML5 입력 유형
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
original_slug: Learn/Forms/HTML5_input_types
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}

[이전 글](/ko/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)에서는 초기 HTML 시대부터 사용 가능한 `type` 속성의 원래 값을 사용하여 {{htmlelement("input")}} 요소를 살펴보았습니다. 이제 HTML5에서 추가된 특정 유형의 데이터 수집을 허용하기 위해 추가된 몇 가지 새로운 입력 유형을 포함하여 더 많은 폼 컨트롤의 기능에 대해 자세히 살펴보겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본 컴퓨터 활용 능력과 기본적인
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 이해</a
        >가 필요합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        HTML을 사용하여 구현하는 방법을 포함하여 사용 가능한 새로운 입력 유형 값에 대한 이해를 얻습니다.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 이 글에서 다루는 대부분의 기능은 브라우저 간에 다양하게 지원됩니다. 예외 사항은 알려 드리겠습니다. 브라우저 지원에 대한 자세한 내용을 원하신다면, [HTML 폼 요소 참조](/ko/docs/Web/HTML/Reference/Elements#forms) 및 특히 상세한 [\<input> 유형](/ko/docs/Web/HTML/Element/input) 참조를 참고하십시오.

웹 개발자들은 때때로 사용자 지정 폼 컨트롤을 만들기 위해 HTML 폼 컨트롤 외관을 디자인 사양과 다르게 만들기도 합니다. 우리는 고급 튜토리얼에서 이것을 다룹니다. [사용자 정의 폼 위젯 만들기](/ko/docs/Learn/Forms/How_to_build_custom_form_controls).

## 이메일 주소 필드

이 유형의 필드는 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성의 값으로 `email`을 사용하여 설정됩니다.

```html
<input type="email" id="email" name="email" />
```

이 [`type`](/ko/docs/Web/HTML/Element/input#type)을 사용하면 사용자는 필드에 유효한 이메일 주소를 입력해야 합니다. 그렇지 않은 경우 브라우저는 폼이 제출될 때 오류를 표시합니다. 아래 스크린샷에서 이것을 확인할 수 있습니다.

![유효하지 않은 이메일 입력에 "이메일 주소를 입력하세요."라는 메시지가 표시됩니다.](email_address_invalid.png)

`email` 입력 유형과 함께 [`multiple`](/ko/docs/Web/HTML/Attributes/multiple) 속성을 사용하여 동일한 입력에서 여러 이메일 주소를 입력하도록 허용할 수도 있습니다(쉼표로 구분됨).

```html
<input type="email" id="email" name="email" multiple />
```

일부 장치에서 — 특히 동적 키보드가 있는 터치 장치인 스마트폰과 같은 장치에서 — `@` 키를 포함하여 이메일 주소를 입력하기에 더 적합한 다른 가상 키보드가 제공될 수 있습니다. 아래의 Firefox for Android 키보드 스크린샷은 예시입니다.

![기본적으로 at 기호가 표시되는 Firefox for Android 이메일 키보드.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> 기본 텍스트 입력 유형의 예제는 [기본 입력 예제](https://mdn.github.io/learning-area/html/forms/basic-input-examples/)에서 찾을 수 있습니다(또한 [소스 코드](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)도 확인해보세요).

여러 디바이스에서 사용자 경험을 향상시킨다는 점에서 이러한 새로운 입력 유형을 사용하는 또 다른 좋은 이유입니다.

### 클라이언트 측 유효성 검사

위에서 볼 수 있듯이, `email`은 클라이언트 측 오류 유효성 검사를 제공하는 다른 새로운 `input` 유형 중 하나입니다. 이는 데이터가 서버로 전송되기 전에 브라우저에서 수행됩니다. 이것은 사용자가 정확하게 폼을 작성하도록 안내하는 유용한 도움말입니다. 클라이언트 측 유효성 검사는 너무 쉽게 끄기 때문에 악의적인 사용자가 여전히 나쁜 데이터를 서버로 쉽게 전송할 수 있습니다.

하지만 이것은 광범위한 보안 조치로 간주되어서는 안됩니다. 당신의 앱은 항상 *서버 측*에서도 어떠한 폼 제출된 데이터에 대한 보안 검사를 수행해야 합니다. [웹사이트 보안](/ko/docs/Learn/Server-side/First_steps/Website_security)에서 무엇이 발생할 수 있는지에 대한 아이디어를 읽어보세요. 서버 측 유효성 검사를 구현하는 것은 이 모듈의 범위를 다소 벗어나지만, 이것을 기억해두어야 합니다.

`a@b`는 제공된 기본 제약 조건에 따라 유효한 이메일 주소입니다. 이는 `email` 입력 유형이 기본적으로 인트라넷 이메일 주소를 허용하기 때문입니다. 다른 유효성 검사 동작을 구현하려면 [`pattern`](/ko/docs/Web/HTML/Attributes/pattern) 속성을 사용할 수 있으며, 오류 메시지도 사용자 정의할 수 있습니다. 이러한 기능을 어떻게 사용하는지에 대한 내용은 나중에 [클라이언트 측 폼 유효성 검사](/ko/docs/Learn/Forms/Form_validation) 글에서 다룰 것입니다.

> [!NOTE]
> 입력된 데이터가 이메일 주소가 아닌 경우, {{cssxref(':invalid')}} 의사 클래스가 일치하며, {{domxref('validityState.typeMismatch')}} 속성은 `true`를 반환합니다.

## 검색 필드

검색 필드는 페이지와 앱에서 검색 상자를 생성하기 위해 사용됩니다. 이 유형의 필드는 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성의 값으로 `search`를 사용하여 설정됩니다.

```html
<input type="search" id="search" name="search" />
```

`text` 필드와 `search` 필드의 주요 차이점은 브라우저가 어떻게 그것의 외관을 스타일링하는지입니다. 대개 `search` 필드는 둥근 모서리로 렌더링되며, 때로는 클릭하면 필드의 값을 지우는 "Ⓧ"도 표시됩니다. 또한 동적 키보드가 있는 장치에서 키보드의 엔터 키는 "검색"이라고 읽히거나 돋보기 아이콘을 표시할 수 있습니다.

아래 스크린샷은 macOS에서의 Firefox 71, Safari 13 및 Chrome 79, 그리고 Windows 10에서의 Edge 18 및 Chrome 79에서 비어 있지 않은 검색 필드를 보여줍니다. 필드에 값이 있으면 지우기 아이콘만 표시되며, Safari를 제외하고는 필드에 포커스가 있을 때만 표시됩니다.

![여러 플랫폼에서의 검색 필드 스크린샷.](search_focus.png)

또 다른 주목할 만한 특징은 검색 필드의 값이 자동으로 저장되어 동일한 웹사이트의 여러 페이지 간에 자동 완성을 제공할 수 있다는 것입니다. 이것은 대부분의 현대 브라우저에서 자동으로 발생하는 경향이 있습니다.

## 전화번호 필드

`tel`을 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성의 값으로 사용하여 전화 번호를 입력하기 위한 특별한 필드를 생성할 수 있습니다.

```html
<input type="tel" id="tel" name="tel" />
```

동적 키보드가 있는 터치 장치로 액세스하면 대부분의 장치에서 `type="tel"`이 발견될 때 숫자 키보드가 표시됩니다. 이 의미는 이 유형이 전화 번호에만 사용되지 않고 숫자 키보드가 유용할 때마다 사용될 수 있다는 것입니다.

아래의 Firefox for Android 키보드 스크린샷은 예시입니다.

![기본적으로 앰퍼샌드가 표시되는 Firefox for Android 이메일 키보드.](fx-android-tel-type-keyboard.jpg)

전화 번호 형식의 다양성 때문에 이 유형의 필드는 사용자가 입력한 값에 대해 어떠한 제약도 강제하지 않습니다(즉, 문자 등을 포함할 수 있습니다).

앞서 언급했듯이, [`pattern`](/ko/docs/Web/HTML/Attributes/pattern) 속성을 사용하여 제약을 적용할 수 있으며, [클라이언트 측 폼 유효성 검사](/ko/docs/Learn/Forms/Form_validation)에서 이에 대해 알아볼 수 있습니다.

## URL 필드

URL을 입력하기 위한 특별한 유형의 필드는 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성의 값으로 `url`을 사용하여 생성할 수 있습니다.

```html
<input type="url" id="url" name="url" />
```

이것은 필드에 특별한 유효성 검사 제약을 추가합니다. 프로토콜(예: `http:`)이 입력되지 않거나 URL이 잘못된 경우 브라우저는 오류를 보고합니다. 동적 키보드가 있는 장치에서 기본 키보드는 일반적으로 콜론, 마침표 및 슬래시 중 하나 또는 모든 것을 기본 키로 표시합니다.

아래에 예시를 확인해보세요 (Firefox for Android에서 촬영).

![기본적으로 앰퍼샌드가 표시되는 Firefox for Android 이메일 키보드.](fx-android-url-type-keyboard.jpg)

>

**참고:** URL이 제대로 형성되었다는 것은 반드시 그것이 실제로 존재하는 위치를 가리킨다는 것을 의미하지 않습니다!

## 숫자 필드

숫자를 입력하기 위한 컨트롤은 {{HTMLElement("input")}} [`type`](/ko/docs/Web/HTML/Element/input#type)을 `number`로 사용하여 생성할 수 있습니다. 이 컨트롤은 텍스트 필드와 유사하게 보이지만 부동 소수점 숫자만 허용하며, 일반적으로 컨트롤의 값을 증가시키고 감소시키는 스피너 형태의 버튼을 제공합니다. 동적 키보드가 있는 장치에서는 숫자 키보드가 일반적으로 표시됩니다.

아래의 스크린샷(From Firefox for Android)은 예시입니다.

![기본적으로 앰퍼샌드가 표시되는 Firefox for Android 이메일 키보드.](fx-android-number-type-keyboard.jpg)

숫자 입력 유형과 함께, [`min`](/ko/docs/Web/HTML/Element/input#min) 및 [`max`](/ko/docs/Web/HTML/Element/input#max) 속성을 설정하여 허용되는 최소 및 최대 값을 제한할 수 있습니다.

또한 스피너 버튼을 눌렀을 때 증가 및 감소를 야기하는 증가량을 설정하기 위해 `step` 속성을 사용할 수 있습니다. 기본적으로 숫자 입력 유형은 숫자가 정수인 경우에만 유효성을 검사합니다. 부동 소수점 숫자를 허용하려면 [`step="any"`](/ko/docs/Web/HTML/Attributes/step)를 지정합니다. 생략하면 `step` 값은 기본적으로 `1`로 설정되어, 오직 전체 숫자만 유효합니다.

이것을 알아보기 위해 몇 가지 예를 살펴보겠습니다. 아래의 첫 번째 예는 값이 `1`에서 `10` 사이의 임의의 값으로 제한되며, 증가 및 감소 버튼이 값을 `2`로 변경하는 숫자 컨트롤을 생성합니다.

```html
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

두 번째 예는 값이 `0`에서 `1` 사이의 값으로 제한되며, 증가 및 감소 버튼이 값을 `0.01`로 변경하는 숫자 컨트롤을 생성합니다.

```html
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

`number` 입력 유형은 유효한 값의 범위가 제한되어 있을 때 의미가 있습니다. 예를 들어 사람의 나이나 키 같은 것입니다. 범위가 너무 크면 증가 분량이 의미가 없습니다(예: 미국 ZIP 코드, `00001`에서 `99999`까지의 범위). 이 경우 `tel` 유형이 더 나은 옵션일 수 있습니다. 숫자 키보드를 제공하면서 숫자의 스피너 UI 기능을 포기합니다.

## 슬라이더 컨트롤

또 다른 방법으로 숫자를 선택하는 방법은 **슬라이더**를 사용하는 것입니다. 부동산 사이트와 같은 사이트에서는 이를 종종 볼 수 있습니다. 여기서는 필터링하기 위해 설정할 최대 부동산 가격을 선택하려고 합니다. 이것을 설명하기 위해 실시간 예제를 살펴보겠습니다.

{{EmbedGHLiveSample("learning-area/html/forms/range-example/index.html", '100%', 200)}}

사용법에 따라 슬라이더는 텍스트 필드보다 정확하지 않습니다. 따라서 그들은 정확한 값이 꼭 필요하지 않은 숫자를 선택하기 위해 사용됩니다.

슬라이더는 {{HTMLElement("input")}}을 사용하여 생성되며, 그 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성의 값은 `range`로 설정됩니다. 슬라이더 썸네일은 마우스나 터치 또는 키패드의 화살표로 이동할 수 있습니다.

슬라이더를 올바르게 구성하는 것이 중요합니다. 이를 위해, [`min`](/ko/docs/Web/HTML/Attributes/min), [`max`](/ko/docs/Web/HTML/Attributes/max), 및 [`step`](/ko/docs/Web/HTML/Attributes/step) 속성을 설정하는 것이 강력히 권장됩니다. 이들은 각각 최소, 최대 및 증가 값을 설정합니다.

위의 예제의 코드를 살펴보면 어떻게 하는지 알 수 있습니다. 먼저 기본 HTML부터 살펴보겠습니다.

```html
<label for="price">여름에 언제 가능하세요?</label>
<input
  type="range"
  name="price"
  id="price"
  min="50000"
  max="500000"
  step="100"
  value="250000" />
<output class="price-output" for="price"></output>
```

이 예제는 값이 `50000`에서 `500000` 사이로 범위를 제한하고, 한 번에 100씩 증가/감소하는 슬라이더를 생성합니다. `value` 속성을 사용하여 기본값을 `250000`으로 지정했습니다.

슬라이더의 문제점 중 하나는 사용자가 현재 값을 쉽게 볼 수 없다는 것입니다. 이를 해결하기 위해, 우리는 {{HTMLElement("output")}} 요소를 추가하였습니다. 이 요소는 슬라이더의 현재 값을 표시하기 위한 것입니다.

JavaScript 코드는 슬라이더의 값을 {{HTMLElement("output")}} 요소에 동기화합니다.

```javascript
const priceInput = document.querySelector("#price");
const output = document.querySelector(".price-output");

priceInput.addEventListener("input", function () {
  output.textContent = priceInput.value;
});

output.textContent = priceInput.value; // 초기 출력 값 설정
```

여기서 우리는 `range` 입력과 `output`에 대한 참조를 두 변수에 저장합니다. 그 다음에 즉시 `output`의 [`textContent`](/ko/docs/Web/API/Node/textContent)를 입력의 현재 `value`로 설정합니다. 마지막으로 범위 슬라이더가 움직일 때마다 `output`의 `textContent`가 새 값으로 갱신되도록 이벤트 수신기가 설정됩니다.

> [!NOTE]
> CSS Tricks에 이 주제를 다루는 멋진 튜토리얼이 있습니다. [The Output Element](https://css-tricks.com/the-output-element/).

## 날짜와 시간 선택기

전통적으로 날짜와 시간 값을 수집하는 것은 웹 개발자들에게 악몽이었습니다. 좋은 사용자 경험을 위해서는 사용자가 네이티브 달력 애플리케이션으로 컨텍스트 전환을 하거나 해석하기 어려운 다양한 형식으로 입력하는 것을 필요로하지 않고 날짜를 선택할 수 있는 달력 선택 UI를 제공하는 것이 중요합니다. 예를 들어, 지난 천년의 마지막 분은 다음과 같은 다양한 방법으로 표현될 수 있습니다. 1999/12/31, 23:59 또는 12/31/99T11:59PM.

HTML 날짜 컨트롤은 이러한 특정 종류의 데이터를 처리하기 위해 제공되며, 달력 위젯을 제공하고 데이터를 균일하게 만듭니다.

날짜와 시간 컨트롤은 {{HTMLElement("input")}} 요소와 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성의 적절한 값을 사용하여 생성되며, 날짜, 시간 또는 둘 다를 수집하고자 하는지에 따라 다릅니다. 지원하지 않는 브라우저에서 {{htmlelement("select")}} 요소로 대체되는 실시간 예제가 있습니다.

{{EmbedGHLiveSample("learning-area/html/forms/datetime-local-picker-fallback/index.html", '100%', 200)}}

다양한 유형들을 간략하게 살펴보겠습니다. 이 유형들의 사용은 상당히 복잡하며, 특히 브라우저 지원을 고려할 때입니다(아래 참조); 전체 세부 사항을 알아보려면 아래 링크를 따라 각 유형의 참조 페이지로 이동하세요.

### `datetime-local`

[`<input type="datetime-local">`](/ko/docs/Web/HTML/Element/input/datetime-local)은 특정 시간대 정보 없이 날짜와 시간을 표시하고 선택하는 위젯을 생성합니다.

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

### `month`

[`<input type="month">`](/ko/docs/Web/HTML/Element/input/month)은 연도와 함께 달을 표시하고 선택하는 위젯을 생성합니다.

```html
<input type="month" name="month" id="month" />
```

### `time`

[`<input type="time">`](/ko/docs/Web/HTML/Element/input/time)은 시간 값을 표시하고 선택하는 위젯을 생성합니다. 시간은 12시간 형식으로 *표시*될 수 있지만, 반환되는 *값*은 24시간 형식입니다.

```html
<input type="time" name="time" id="time" />
```

### `week`

[`<input type="week">`](/ko/docs/Web/HTML/Element/input/week)은 주 번호와 그 해를 표시하고 선택하는 위젯을 생성합니다.

주는 월요일부터 시작하여 일요일까지 진행됩니다. 또한, 각 해의 첫 번째 주 1은 해당 해의 첫 번째 목요일을 포함합니다. 이는 연초의 첫 날을 포함하지 않을 수도 있고, 이전 해의 마지막 며칠을 포함할 수도 있습니다.

```html
<input type="week" name="week" id="week" />
```

### 날짜/시간 값 제한

모든 날짜와 시간 컨트롤은 [`min`](/ko/docs/Web/HTML/Attributes/min)과 [`max`](/ko/docs/Web/HTML/Attributes/max) 속성을 사용하여 제한될 수 있으며, [`step`](/ko/docs/Web/HTML/Attributes/step) 속성을 통해 추가 제한이 가능합니다(값은 입력 유형에 따라 다릅니다).

```html
<label for="myDate">여름에 언제 가능하세요?</label>
<input
  type="date"
  name="myDate"
  min="2013-06-01"
  max="2013-08-31"
  step="7"
  id="myDate" />
```

## 색상 선택기 컨트롤

색상은 항상 조금 어려운 편입니다. 여러 가지 방법으로 표현할 수 있습니다. RGB 값(십진수 또는 16진수), HSL 값, 키워드 등등.

`color` 컨트롤은 {{HTMLElement("input")}} 요소와 그 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성의 값이 `color`로 설정되어 생성됩니다.

```html
<input type="color" name="color" id="color" />
```

색상 컨트롤을 클릭하면 일반적으로 운영 체제의 기본 색상 선택 기능이 표시됩니다.

다음은 시도할 수 있는 실시간 예제입니다.

{{EmbedGHLiveSample("learning-area/html/forms/color-example/index.html", '100%', 200)}}

반환되는 값은 항상 소문자 6자리 16진수 색상입니다.

## 실력을 시험해 보세요!

이 글의 끝에 도달했지만 가장 중요한 정보를 기억하고 있나요? 이 정보를 기억했는지 확인하기 위한 몇 가지 추가 테스트를 찾을 수 있습니다. 다음으로 이동하기 전에 [기술 테스트: HTML5 컨트롤](/ko/docs/Learn/Forms/Test_your_skills:_HTML5_controls)을 확인하십시오.

## 요약

이로써 HTML5 양식 입력 유형의 투어를 마치게 되었습니다. 매우 특정한 동작들 때문에 쉽게 그룹화될 수 없는 몇몇 다른 컨트롤 유형들이 있지만, 알아두면 좋습니다. 다음 글에서 그것들을 다룹니다.

### 고급 주제

- [How to build custom form controls](/ko/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Sending forms through JavaScript](/ko/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Property compatibility table for form widgets](/ko/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
