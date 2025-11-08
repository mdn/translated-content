---
title: 당신의 첫 HTML 폼
slug: Learn_web_development/Extensions/Forms/Your_first_form
original_slug: Learn/Forms/Your_first_form
---

{{LearnSidebar}}{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

시리즈의 첫 번째 글에서는 간단한 폼 디자인하기, 적절한 HTML 폼 컨트롤과 다른 HTML 요소를 사용하여 폼 구현하기, CSS로 매우 간단한 스타일 추가하기, 데이터가 서버로 전송되는 방법 설명하기 등 웹 폼 만들기에 대한 첫 번째 경험을 제공합니다. 이 모듈의 뒷부분에서 각 하위 주제에 대해 더 자세히 설명하겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">사전 지식:</th>
      <td>
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML에 대한 기본적인 이해</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        웹 폼의 정의와 용도, 폼 디자인에 대해 생각하는 방법, 간단한 경우에 필요한 기본 HTML 요소에 익숙해집니다.
      </td>
    </tr>
  </tbody>
</table>

## 웹 폼이란 무엇인가요?

**웹 폼**은 사용자와 웹사이트 또는 애플리케이션 간의 주요 상호 작용 지점 중 하나입니다. 폼을 사용하면 사용자가 데이터를 입력할 수 있습니다. 입력한 데이터는 일반적으로 처리 및 저장을 위해 웹 서버로 전송되거나 (모듈 뒷부분의 [폼 데이터 보내기](/ko/docs/Learn/Forms/Sending_and_retrieving_form_data)를 참조하세요), 클라이언트 측에서 어떤 방식으로든 인터페이스를 즉시 업데이트하는 데 사용됩니다 (예를 들면, 목록에 다른 항목을 추가하거나, UI 기능을 표시하거나 숨기는 것이 있습니다).

웹 폼의 HTML은 하나 이상의 **폼 컨트롤**(**위젯**이라고도 합니다)과 전체 폼을 구성하는데 도움이 되는 추가 요소들로 구성됩니다. 이를 흔히 **HTML 폼**이라고 합니다. 컨트롤에는 한 줄 또는 여러 줄의 텍스트 필드, 드롭다운 상자, 버튼, 체크박스, 라디오 버튼이 있습니다. 대부분 {{HTMLElement("input")}}요소를 사용하여 만들어지지만 다른 요소들도 있습니다.

또한 폼 컨트롤은 프로그래밍하여 특정 형식이나 값이 입력되도록 강제할 수 있으며 (**폼 유효성 검사**), 시각 장애가 있는 사용자와 시각 장애가 없는 사용자 모두에게 목적을 설명하는 text label과 짝을 이루도록 할 수 있습니다.

## 폼 디자인하기

코딩을 시작하기 전에 항상 한 발짝 물러서서 폼에 대해 생각하는 시간을 가지는 것이 좋습니다. 간단한 목업을 디자인하는 것은 사용자에게 입력을 요청할 데이터 집합을 올바르게 정의하는 것에 도움이 됩니다. 사용자 경험(UX)의 관점에서 볼 때, 폼이 커지면 커질수록 사용자에게 불편을 주고 사용자를 잃을 위험이 커진다는 점을 기억해야 합니다. 폼을 단순화하고 중점을 맞추세요. 꼭 필요한 데이터만 요청하세요.

사이트나 애플리케이션을 만들 때 폼을 디자인하는 것은 중요한 단계입니다. 폼의 사용자 경험을 다루는 것은 이 글의 범위를 벗어나지만, 해당 주제에 대해 자세히 알고싶다면 다음 문서를 읽어보세요.

- Smashing Magazine은 오래됐지만 여전히 적절한 [웹 폼 사용성에 관한 광범위한 가이드](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/)문서를 포함하여 [폼 UX에 관한 좋은 문서](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/)가 있습니다.
- UXMatters는 [기본적인 모범 사례](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php)부터 [여러 페이지의 폼](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php)과 같은 복잡한 문제에 이르기까지 좋은 조언을 제공하는 매우 사려 깊은 참고 자료입니다.

이 글에서는 간단한 문의 폼을 만들어 보겠습니다. 대략적인 스케치를 해봅시다.

![만들 폼에 대한 대략적인 스케치](form-sketch-low.jpg)

폼에는 3개의 텍스트 필드와 1개의 버튼이 포함됩니다. 사용자에게 이름, 이메일, 보내고 싶은 메시지를 요청합니다. 버튼을 누르면 데이터가 웹 서버로 전송됩니다.

## 능동적 학습: 폼 HTML 구현하기

이제 폼의 HTML을 만들어 보겠습니다. 다음 HTML 요소들을 사용할 것입니다. {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}}, {{HTMLelement("button")}}.

더 진행하기 전에 [간단한 HTML 템플릿](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html)의 로컬 복사본을 만들어서 여기에 폼 HTML을 입력하세요.

### `<form>` 요소

모든 폼은 다음과 같이 {{HTMLelement("form")}} 요소와 함께 시작합니다.

```html
<form action="/my-handling-form-page" method="post">…</form>
```

이 요소는 폼을 공식적으로 정의합니다. {{HTMLelement("form")}} 요소는 {{HTMLelement("section")}} 요소나 {{HTMLelement("footer")}} 요소처럼 컨테이너 요소이지만, 특히 폼을 포함하기 위한 요소입니다. 또한 폼의 동작 방식을 구성하는 몇 가지 특정 속성을 지원합니다. 속성들은 모두 선택 사항이지만, 적어도 [`action`](/ko/docs/Web/HTML/Reference/Elements/form#action) 속성과 [`method`](/ko/docs/Web/HTML/Reference/Elements/form#method) 속성은 항상 설정하는 것이 관행입니다.

- `action` 속성은 폼이 제출될 때 수집된 데이터를 전송할 위치(URL)를 정의합니다.
- `method` 속성은 데이터를 전송할 HTTP 메서드(일반적으로 `get`이나 `post`)를 정의합니다.

> [!NOTE]
> 이러한 속성들의 동작 방식은 나중에 [폼 데이터 보내기](/ko/docs/Learn/Forms/Sending_and_retrieving_form_data) 문서에서 살펴보겠습니다.

지금은 위의 {{HTMLelement("form")}} 요소를 HTML {{HTMLelement("body")}}에 추가합니다.

### `<label>`, `<input>`, `<textarea>` 요소

문의 폼은 복잡하지 않습니다. 데이터 입력 부분에는 각각 해당하는 {{HTMLelement("label")}}이 있는 세 개의 텍스트 필드가 있습니다.

- 이름 입력 필드는 {{HTMLelement("input/text", "한 줄 텍스트 필드")}}입니다.
- 이메일 입력 필드는 {{HTMLelement("input/email", "type이 email인 input")}}입니다. 이메일 주소만 입력할 수 있는 한 줄 텍스트 필드입니다.
- 메시지 입력 필드는 여러 줄 텍스트 필드인 {{HTMLelement("textarea")}} 입니다.

이러한 폼 위젯을 구현하려면 HTML 코드에 다음과 같은 내용이 필요합니다.

```html
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
  </ul>
</form>
```

폼 코드를 위와 같이 업데이트하세요.

{{HTMLelement("li")}} 요소는 코드를 편리하게 구성하고 스타일을 더 쉽게 지정하기 위한 것입니다 (이 글의 뒷 부분을 참조하세요). 사용성과 접근성을 위해서 각 폼 컨트롤에 명시적인 label을 포함했습니다. 모든 {{HTMLelement("label")}} 요소에 [`for`](/ko/docs/Web/HTML/Attributes/for) 속성을 사용하는 것에 주목하세요. 이 속성은 연결된 폼 컨트롤의 [`id`](/ko/docs/Web/HTML/Reference/Global_attributes/id)를 값으로 사용하기 때문에 폼 컨트롤을 label과 연결할 수 있습니다.

이렇게 label을 폼 컨트롤과 연결하면 큰 이점이 있습니다. 마우스, 트랙패드, 터치 장치 사용자가 label을 클릭하면 일치하는 컨트롤을 활성화할 수 있습니다. 그리고 스크린 리더의 사용자가 읽을 수 있는 접근 가능한 이름을 스크린 리더에게 제공할 수 있는 큰 이점도 있습니다. 폼 label에 대한 자세한 내용은 [웹 폼 구조화 방법](/ko/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)에서 확인할 수 있습니다.

{{HTMLelement("input")}} 요소에서 가장 중요한 속성은 `type` 속성입니다. 이 속성은 {{HTMLelement("input")}} 요소가 표시되고 작동하는 방식을 정의하기 때문에 매우 중요합니다. 이에 대한 자세한 내용은 나중에 [기본 폼 컨트롤](/ko/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) 문서에서 확인할 수 있습니다.

- 간단한 예제에서 첫 번째 input에 이 속성의 기본값인 {{HTMLelement("input/text", "text")}} 값을 사용할 것입니다. 이 값은 모든 종류의 텍스트 입력을 허용하는 기본 한 줄 텍스트 필드를 나타냅니다.

- 두 번째 input에는 올바른 형식의 이메일 주소만 허용하는 한 줄 텍스트 필드를 정의하는 {{HTMLelement("input/email", "email")}} 값을 사용합니다. email 값으로 지정하면 기본 텍스트 필드에서 일종의 "지능형" 필드로 바뀌어 사용자가 입력한 데이터에 대해 몇 가지 유효성 검사를 수행합니다. 또한 스마트폰처럼 동적 키보드를 가진 장치에서는 이메일 주소 입력에 더 적합한 키보드 레이아웃(예: 기본적으로 @ 기호 사용)이 표시되도록 합니다. 폼 유효성 검사에 대한 자세한 내용은 나중에 [클라이언트 측 폼 유효성 검사](/ko/docs/Learn/Forms/Form_validation) 문서에서 확인할 수 있습니다.

마지막으로 `<input>`과 `<textarea></textarea>` 구문에 유의하세요. 이것은 HTML의 특이한 점 중 하나입니다. `<input>` 태그는 {{glossary("void element","빈 요소")}}이므로 닫는 태그가 필요하지 않습니다. {{HTMLelement("textarea")}}는 빈 요소가 아니기 때문에 적절한 종료 태그로 닫아야 합니다. 이는 폼의 특정 기능인 기본값을 정의하는 방식에 영향을 줍니다. {{HTMLelement("input")}} 요소의 기본값을 정의하려면 다음과 같이 [`value`](/ko/docs/Web/HTML/Element/input#value) 속성을 사용해야 합니다.

```html
<input type="text" value="by default this element is filled with this text" />
```

반면에 {{HTMLelement("textarea")}}의 기본값을 정의하려면, 다음과 같이 {{HTMLelement("textarea")}} 요소의 여는 태그와 닫는 태그 사이에 기본값을 넣으면 됩니다.

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### `<button>` 요소

폼에 대한 마크업은 거의 완성되었으므로 사용자가 폼을 작성한 후 데이터를 전송하거나 "제출"할 수 있는 버튼만 추가하면 됩니다. 이 작업은 {{HTMLelement("button")}} 요소를 사용하여 수행하며, 닫는 `</ul>` 태그 바로 위에 다음 코드를 추가합니다.

```html
<li class="button">
  <button type="submit">Send your message</button>
</li>
```

{{HTMLelement("button")}} 요소도 `type` 속성을 사용할 수 있으며 `submit`, `reset`, `button`의 세 가지 값 중에서 하나를 허용합니다.

- `submit` 버튼 (기본값)을 클릭하면 폼의 데이터가 {{HTMLelement("form")}} 요소의 `action` 속성에 정의된 웹 페이지로 전송됩니다.
- `reset` 버튼을 클릭하면 모든 폼 위젯이 즉시 기본값으로 재설정됩니다. UX 관점에서 볼 때 이것은 나쁜 관행으로 간주됩니다. 그래서 `reset` 버튼을 포함해야 하는 타당한 이유가 없는 한 굳이 사용하지 않는 것이 좋습니다.
- `button` 버튼을 클릭하면 아무 일도 일어나지 않습니다! 그것은 조금 이상하게 들릴 수 있지만, 원하는 버튼을 만들기에 굉장히 유용합니다. JavaScript로 버튼이 수행할 특정 기능을 정의할 수 있기 때문입니다.

> [!NOTE]
> {{HTMLElement("input")}} 요소도 적절한 `type` 속성을 함께 사용하면 버튼을 생성할 수 있습니다 (예: `<input type="submit">`). {{HTMLElement("input")}} 요소는 label에 일반 텍스트만 허용하는 반면에, {{HTMLElement("button")}} 요소는 전체 HTML 콘텐츠를 허용하므로 더 복잡하고 창의적인 버튼 콘텐츠를 만들 수 있다는 주요 장점이 있습니다.

## 기본 폼 스타일링

이제 폼의 HTML 코드 작성을 마쳤으니 저장하고 브라우저에서 살펴보세요. 지금 당장은 조금 못생기게 보일 것입니다.

> [!NOTE]
> HTML 코드가 올바르게 작성되지 않았다고 생각되면, [완성된 예제](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html)와 비교해 보세요. [실시간으로도 확인 가능합니다](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html).

폼은 멋지게 스타일링하기 까다롭기로 악명높습니다. 폼 스타일링에 대해 자세히 설명하는 것은 이 글의 범위를 벗어나므로, 지금은 보기 좋게 보이도록 CSS를 추가하는 방법만 설명하겠습니다.

먼저, HTML head 내부의 페이지에 {{HTMLelement("style")}} 요소를 추가합니다. 다음과 같이 보일 것입니다.

```html
<style>
  …
</style>
```

`style` 태그 안에 다음 CSS를 추가하세요.

```css
form {
  /* 페이지 중앙에 form을 배치 */
  margin: 0 auto;
  width: 400px;
  /* Form outline */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li + li {
  margin-top: 1em;
}

label {
  /* 크기와 정렬 통일 */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* 모든 텍스트 필드의 글꼴 설정이 동일한지 확인하려면 다음과 같이 하세요.
     기본적으로 텍스트 영역에는 모노스페이스 글꼴이 사용됩니다. */
  font: 1em sans-serif;

  /* 텍스트 필드 크기 통일 */
  width: 300px;
  box-sizing: border-box;

  /* form 필드의 border 일치 */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* 포커스된 요소에 대해 추가적인 하이라이트 */
  border-color: #000;
}

textarea {
  /* 여러 줄 텍스트 필드를 label에 맞게 정렬 */
  vertical-align: top;

  /* 텍스트를 입력할 공간 제공 */
  height: 5em;
}

.button {
  /* 텍스트 필드에 버튼 정렬 */
  padding-left: 90px; /* label 요소와 동일한 크기 */
}

button {
  /* 이 추가적인 마진은 레이블과 그들의 텍스트 필드 사이의 공간과
     대략적으로 동일한 공간을 표현합니다. */
  margin-left: 0.5em;
}
```

저장하고 다시 로드하면 폼이 훨씬 덜 못생겨진 것을 확인할 수 있습니다.

> [!NOTE]
> GitHub의 [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html)에서 버전을 확인할 수 있습니다 ([라이브 버전도 참조하세요](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## 웹 서버에 폼 데이터 보내기

마지막 부분이자 가장 까다로운 부분은 서버 측에서 폼 데이터를 처리하는 것입니다. {{HTMLelement("form")}} 요소는 [`action`](/ko/docs/Web/HTML/Reference/Elements/form#action) 및 [`method`](/ko/docs/Web/HTML/Reference/Elements/form#method) 속성을 통해서 데이터를 전송할 위치와 방법을 정의합니다.

각각의 폼 컨트롤에 `name` 속성을 부여합니다. 이름은 클라이언트 측과 서버 측 모두에서 중요합니다. 브라우저에게는 각 데이터에 어떤 이름을 부여할지 알려주고, 서버에서는 서버가 각 데이터를 이름별로 처리할 수 있도록 해줍니다. 폼 데이터는 name/value 쌍으로 서버에 전송됩니다.

폼의 데이터에 이름을 지정하기 위해서는, 특정 데이터를 수집하는 폼 위젯에 `name` 속성을 사용해야 합니다. 폼 코드 일부를 다시 살펴보겠습니다.

```html
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>

    …
  </ul>
</form>
```

이 예제에서 폼은 "`user_name`", "`user_email`", "`user_message`"라고 이름이 지정되어 있는 데이터 3개를 전송합니다. 이 데이터는 [HTTP `POST`](/ko/docs/Web/HTTP/Reference/Methods/POST) 메서드를 사용하여 "`/my-handling-form-page`" URL로 전송됩니다.

서버 측에서, "`/my-handling-form-page`" URL의 스크립트는 데이터를 HTTP 요청에 포함된 3개의 key/value 항목의 목록 형태로 받습니다. 이 스크립트가 해당 데이터를 처리하는 방식은 당신에게 달려 있습니다. 각각의 서버 측 언어(PHP, Python, Ruby, Java, C# 등)에는 폼 데이터를 처리하는 고유한 메커니즘이 있습니다. 이 가이드의 범위를 넘어서는 주제이지만 더 자세히 알고 싶다면 나중에 [폼 데이터 보내기](/ko/docs/Learn/Forms/Sending_and_retrieving_form_data) 문서에서 몇 가지 예제를 제공할 것입니다.

## 요약

축하합니다, 당신의 첫 번째 웹 폼을 완성했습니다. 이렇게 실시간으로 보입니다.

```html hidden
<form action="/my-handling-form-page" method="post">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </div>

  <div>
    <label for="mail">Email:</label>
    <input type="email" id="mail" name="user_email" />
  </div>

  <div>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Send your message</button>
  </div>
</form>
```

```css hidden
form {
  /* 페이지 중앙에 폼을 위치시키기 위해서 */
  margin: 0 auto;
  width: 400px;

  /* form의 경계를 확인하기 위해서 */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

div + div {
  margin-top: 1em;
}

label {
  /* 모든 label이 같은 크기를 가지고 적절히 정렬되도록 하기 위해서 */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* 모든 텍스트 필드가 같은 폰트 설정을 가지도록 하기 위해서
     기본적으로 textarea는 모노스페이스 폰트로 설정됩니다. */
  font: 1em sans-serif;

  /* 모든 텍스트 필드에 같은 크기를 주기 위해서 */
  width: 300px;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* 텍스트 필드 테두리의 외관과 느낌을 조화롭게 하기 위해서 */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* 활성화된 요소에 약간의 하이라이트를 주기 위해서 */
  border-color: #000;
}

textarea {
  /* 여러 줄의 텍스트 필드가 label과 적절히 정렬되도록 하기 위해서 */
  vertical-align: top;

  /* 충분한 텍스트 타이핑 공간을 주기 위해서 */
  height: 5em;

  /* 사용자가 textarea를 수직으로 크기를 조정할 수 있도록 하기 위해서
     이것은 Chrome, Firefox, Safari에서만 동작합니다. */
  resize: vertical;
}

.button {
  /* 버튼을 텍스트 필드와 같은 위치에 배치하기 위해서 */
  padding-left: 90px; /* label 요소와 같은 크기 */
}

button {
  /* 이 추가 마진은 label과 텍스트 필드 사이의 공간과 동일합니다. */
  margin-left: 0.5em;
}
```

{{ EmbedLiveSample('Summary', '', '300') }}

그러나 이것은 시작에 불과합니다. 이제 더 자세히 살펴볼 차례입니다. 폼에는 여기서 살펴본 것보다 훨씬 더 많은 기능이 있으며 이 모듈의 다른 문서가 나머지 기능을 익히는 데 도움이 될 것입니다.

{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

### 고급 주제

- [커스텀 폼 컨트롤을 작성하는 방법](/ko/docs/Learn/Forms/How_to_build_custom_form_controls)
- [JavaScript를 통해 폼 전송하기](/ko/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [폼 위젯의 속성 호환성 표](/ko/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
