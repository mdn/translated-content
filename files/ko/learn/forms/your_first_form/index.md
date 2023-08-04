---
title: 나의 첫 HTML 폼
slug: Learn/Forms/Your_first_form
---

이 문서는 HTML 폼 소개 문서입니다. 간단한 폼들을 살펴보면서 HTML 폼을 만들기에 대한 기본적인 필요 사항들을 볼 수 있을 것이다. 이 문서는 HTML폼에 대해서는 아무것도 몰라도 되지만 다음 문서에 나와 있는 기본적인 HTML이나 CSS를 알아야 한다. ([the basics of HTML](/ko/docs/HTML/Introduction), [CSS](/ko/docs/CSS/Getting_Started))

## 시작하기전에

### HTML 폼 이란?

HTML폼은 사용자와 웹사이트 또는 어플리케이션이 서로 상호 작용하는 것 중 중요한 기술 중에 하나이다. 폼은 사용자가 웹사이트에 데이터를 전송하는 것을 허용한다. 일반적으로 데이터는 웹 서버로 전송되지만 웹페이지가 데이터를 사용하기 위하여 사용할 수 도 있다.

HTML 폼은 하나 이상의 위젯으로 만들어 진다. 이러한 위젯들은 텍스트 필드(한줄 또는 여러줄), 셀렉 박스, 버튼, 체크박스, 라디오 버튼이 될 수 있다. 대부분 이러한 위젯들은 위젯을 설명하는 라벨과 함께 사용된다.

### 폼을 사용하려면 무엇이 필요합니까?

HTML을 다루기 위한 텍스트 에디터나 웹 브라우저외는 아무것도 필요 없습니다. 물론 비주얼 스튜디오, 이클립트, 앱타나 등 통합개발환경(IDE)을 사용하면 많은 이점이 있지만 이것은 만드는 사람 마음이다.

HTML 폼과 일반적인 HTML 요소의 주요 차이점은 폼에 의해 수집된 데이터는 대부분 웹서버에 전송된다는 점이다. 이런 경우 데이터를 받거나 처리하는 웹서버를 설정해야한다. 웹서버를 설정하는 방법은 이 문서의 범위를 벗어나지만 알고 싶다면 다음 문서를 참조 하시오 [Sending and retrieving form data](/ko/docs/HTML/Forms/Sending_and_Retrieving_form_data).

## 폼 디자인하기

코드를 보기전에 항상 잠시 뒤로 물러나 폼에 대하여 생각하는 것이 더 중요하다. 간단한 모형을 디자인 하는것은 개발자가 사용자에게 묻고 싶은 데이터를 올바르게 정의하는데 도움을 준다. 사용자 경험 (UX)의 관점에서 폼이 많을수록 사용자들이 더 줄어든다는 사실을 기억하는게 중요하다. 반드시 필요한것이 무엇인지 생각하면서 간단하게 유지하는 것이 중요하다. 폼 디자인은 사이트나 어플리케이션을 만드는 과정 중 중요한 단계이다. 폼들의 디자인은 이 문서의 범위를 벗어나지만 만약 더 자세하게 알고 싶은 경우 다음 문서를 참조 하세요.

- Smashing는 폼 UX에 매우 좋은 잡지다 [good articles about forms UX](http://uxdesign.smashingmagazine.com/tag/forms/)의 [Extensive Guide To Web Form Usability](http://uxdesign.smashingmagazine.com/2011/11/08/extensive-guide-web-form-usability/).
- UXMatters 도 좋은 폼 양식을 볼수 있다. [basic best practices](http://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) 의 [multi-page forms](http://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

이 문서에서는 간단한 문의를 하는 폼을 만들것이다. 거칠게 스케치 해보자.

![The form to build, roughly sketch](/files/4579/form-sketch-low.jpg)

우리가 만들 폼은 3개의 텍스트 필드와 하나의 버튼을 가지고 있다. 기본적으로 우리는 사용자에게 이름, 이메일, 문의사항을 물어 볼 것이고 버튼을 눌러서 웹서버로 데이터를 보내는게 목적이다.

## HTML를 직접 다루어 보자

자 이제 HTML에가서 폼을 코딩 할 준비가 되었다. 우리의 문의하는 폼에서 다음과 같은 HTML 요소들을 사용할 것이다. {{HTMLElement("form")}}, {{HTMLElement("label")}}, {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, and {{HTMLElement("button")}}.

### {{HTMLElement("form")}} 요소

모든 HTML 폼은 {{HTMLElement("form")}} 요소로 다음과 같이 시작된다:

```html
<form action="/my-handling-form-page" method="post"></form>
```

이 요소는 폼의 공식적인 형태이다. 이 요소는 다음 {{HTMLElement("div")}} 나 {{HTMLElement("p")}} 요소와 같이 사용되고,뿐만 아니라 폼이 동작하는 방식을 설정하는 일부 속성들을 지정 해야한다. 이러한 모든 속성은 선택적이지만 `action` 속성과 `method` 속성은 필수적으로 설정해야 한다.

- `action` 속성은 데이터를 보낼 URL을 지정한다.
- `method` 속성은 어떤 HTTP 방식을 사용할 것인지 지정한다.(GET 이나 POST)

만약 이러한 속성에 더 자세한 내용을 알고 싶다면 다음 문서를 참조하시오. [Sending and retrieving form data](/ko/docs/HTML/Forms/Sending_and_retrieving_form_data).

### {{HTMLElement("label")}}, {{HTMLElement("input")}}, 그리고 {{HTMLElement("textarea")}} 요소 추가하기

우리의 문의하는 폼은 정말 간단하고 라벨을 가지고 있는 세 개의 텍스트필드를 가지고 있다. 이름을 입력 받는 입력 필드는 한줄 텍스트 필드를 사용하고, 이메일을 입력 받는 입력 필드는 이메일만 입력받는 한줄 텍스트 필드를 사용하고, 문의 내용을 입력받는 입력 필드는 다중 라인 텍스트 필드가 사용 될것이다.

HTML코드를 다음과 같이 짤 것이다.

```html
<form action="/my-handling-form-page" method="post">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" />
  </div>
  <div>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" />
  </div>
  <div>
    <label for="msg">Message:</label>
    <textarea id="msg"></textarea>
  </div>
</form>
```

{{HTMLElement("div")}} 요소는 코드를 편리하게 구성하고 스타일링 쉽게 만들어 줍니다. 중요한 점은 for속성은 모든{{HTMLElement("label")}} 요소에서 공식적으로 폼 위젯과 라벨을 연결하는데 사용된는 것이다. 이 속성은 위젯에 맞는 ID를 참조한다. 이 것은 몇 가지 장점이 있다. 가장 두드러 지는 것은 사용자가 라벨을 눌럿을때 그거에 맞는 위젯을 활성화 시키는 것이다.만약 이 속성에 대한 장점을 더 알고 싶다면 다음 문서에 자세히 나와있다. [How to structure an HTML form](/ko/docs/HTML/Forms/How_to_structure_an_HTML_form).

{{HTMLElement("input")}} 요소의 가장 중요한 속성은 type 속성이다. 이 속성은 {{HTMLElement("input")}} 요소가 어떻게 입력을 받을 것인지 정의하기 떄문에 매우 중요하다. 이것은 아예 요소를 변경하기 떄문에 주의 해야한다. 만약 이것에 대하여 더 자세한 정보를 알고 싶다면 다음 문서를 참조 하라. [native form widgets](/ko/docs/HTML/Forms/The_native_form_widgets) 우리의 예제에서는 이 속성의 기본 값인 오직 text값만 사용했다. 이 값은 제어나 유효성 검사 없이 모든 종류의 텍스트를 받아 들이는 한줄 텍스트 필드를 나타낸다. 또한 오직 이메일 주소만 받는 한줄 텍스트 필드 email값을 사용했다. 이 마지막 값은 기본 텍스트 필드를 사용자가 입력 한 데이터에 대한 몇 가지 검사를 수행하는 "지능형"필드의 종류로 전환한다. 만약 폼 데이터 유효성 확인에 대하여 자세히 알고싶다면 다음 문서를 참조 해라. [Form data validation](/ko/docs/HTML/Forms/Data_form_validation)

마지막 요소를 보기전에 다음 `<input />` VS `<textarea></textarea>요소를 봐야한다`. 이것은 이상한 HTML 요소중 하나이다. `<input>태그는 자동 닫힘 태그다 무슨 의미냐면` 요소가 끝날떄 반드시 "/"닫는 태그에 추가해야 하는 것을 의미한다. 이와 반대로, {{HTMLElement("textarea")}}은 자동 닫힘 태그가 아니다 그래서 반드시 엔딩태그를 사용하여 요소를 종료해야한다. 이 것은 기본 값을 정의하는 특정 기능에 영향을 미친다. 요소의 기본 값 정의는 반드시 value 속성을 다음과 같이 지정 해야 한다.

```html
<input type="text" value="by default this element is filled with this text" />
```

이와 반대로 {{HTMLElement("textarea")}}요소 에서 기본값을 정의하고 싶다면, {{HTMLElement("textarea")}}요소의 시작 태그와 끝 태그 사이에 문자들을 다음과 같이 입력 하면된다.

```html
<textarea>by default this element is filled with this text</textarea>
```

### {{HTMLElement("button")}} 요소로 끝내기

우리의 폼이 거의 완성되간다. 이제 단지 사용자 데이터를 서버에 보낼수 있도록 버튼을 추가하면된다. 이것은 간단하게 {{HTMLElement("button")}} 요소를 사용한다.

```html
<form action="/my-handling-form-page" method="post">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" />
  </div>
  <div>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" />
  </div>
  <div>
    <label for="msg">Message:</label>
    <textarea id="msg"></textarea>
  </div>

  <div class="button">
    <button type="submit">Send your message</button>
  </div>
</form>
```

버튼은 다음과 같은 3개 종류가 있다. `submit`, `reset`, `button`.

- submit 버튼을 클릭하면 폼 데이터를 {{HTMLElement("form")}} 요소의 action속성에 정의된 웹페이지 에 전송된다.
- `reset` 버튼을 클릭하면 모든 폼 위젯을 기본 값으로 바꾼다. UX 관점에서 이방법은 안좋은 방법이라 본다.
- `button 버튼은... 아무것도 안한다! 이 말이 이상하게 들릴수도 있지만 JavaScript를 사용하면 놀랍게 유용한 사용자 버튼이 될 수 있다.`

알아두어야 할것은 {{HTMLElement("input")}} 요소를 사용하여 버튼 유형을 만들 수 있다. {{HTMLElement("button")}}요소와 가장 큰 차이점은 {{HTMLElement("input")}}요소는 오직 일반 텍스트만 보내는 반면 {{HTMLElement("button")}}요소는 전체 HTML 콘텐츠를 보낸다.

## CSS로 더욱 나이스하게 만들기

이제 우리는 HMLT폼을 가졋지만 가지고 있는 브라우저에서 보면 구리게 보인다.

![](/files/4049/form-no-style.png)

CSS 스타일시트를 이용하여 조금만더 나이스하게 만들어 보자.

폼을 가운데로 정렬하고 테두리를 보이게 하는것 부터 시작하자.

```css
form {
  /* Just to center the form on the page */
  margin: 0 auto;
  width: 400px;
  /* To see the outline of the form */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}
```

그 다음 각각 폼 위젯사이에 여백을 추가하자.

```css
form div + div {
  margin-top: 1em;
}
```

이제 레이블에 초점을 맞추자. 우리의 폼을 더 읽기 쉽게 만들기 위해 모든 라벨들이 같은 사이즈와 같은 쪽을 정렬이 되게하자. 이 경우 오른쪽 정렬을 하지만 경우에 따라서 왼쪽 정렬도 좋을 수 있다.

```css
label {
  /* To make sure that all label have the same size and are properly align */
  display: inline-block;
  width: 90px;
  text-align: right;
}
```

HTML 폼을 다루는 가장 어려운 것중 하나는 HTML자체를 위젯으로 스타일 하는 것이다. 텍스트 필드는 쉽게 스타일 할수 있지만 다른 위젯들은 아니다. 만약 HTML 폼 위젯 스타일에 대하여 자세한 정보를 알고 싶으면 다음 문서를 참조하시오. [Styling HTML forms](/ko/docs/HTML/Forms/Styling_HTML_forms)

폰트, 크기, 테두리를 변경 해보자

```css
input,
textarea {
  /* To make sure that all text fields have the same font settings
       By default, textareas have a monospace font */
  font: 1em sans-serif;

  /* To give the same size to all text field */
  width: 300px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* To harmonize the look & feel of text field border */
  border: 1px solid #999;
}
```

HTML 폼은 요소의 상태를 나타내는 많은 가상클래스 를 지원한다.예르들어 위젯이 활성화 되면 하이라이트 효과를 추가할 수있다. 이것은 사용자가 쉽게 따라가도록 하는 편리한 방법이다.

```css
input:focus,
textarea:focus {
  /* To give a little highlight on active elements */
  border-color: #000;
}
```

다중 텍스트 필드는 몇몇 사용자 지정 스타일이 필요하다. 기본적으로 {{HTMLElement("textarea")}}요소는 바닥이 텍스트 기준선에 정렬되는 인라인 블록 이다. 대부분 이것들은 우리가 원하는 것이 아니다. 이런 경우 나이스하게 라벨과 필드를 정렬하려면 {{HTMLElement("textarea")}}요소의 `vertical-align` 속성을 `top이라 변경 해야 한다`.

또하나 유용한 `resize` 프로퍼티는 사용자가 쉽게 {{HTMLElement("textarea")}}요소의 크기를 조정 할수 있게 해준다.

```css
textarea {
  /* To properly align multiline text fields with their labels */
  vertical-align: top;

  /* To give enough room to type some text */
  height: 5em;

  /* To allow users to resize any textarea vertically
       It does not work on every browsers */
  resize: vertical;
}
```

버튼도 특별한 스타일이 필요하다. 이를 위해 우선 {{HTMLElement("div")}}요소안에 버튼을 넣는다. 그리고 다른 위젯들과 정렬을 해야한다. 그럴러면 {{HTMLElement("label")}}요소를 흉내 내야한다. 그 후에 패딩 과 마진 속성을 지정하면된다

```css
.button {
  /* To position the buttons to the same position of the text fields */
  padding-left: 90px; /* same size as the label elements */
}

button {
  /* This extra margin represent roughly the same space as the space
       between the labels and their text fields */
  margin-left: 0.5em;
}
```

이제 폼이 더 나이스 해졋다.

![](/files/4051/form-style.png)

## 웹서버로 데이터 보내기

까다로울지 모르는 마지막 부분은 데이터를 서버측에서 처리하는 것이다. 앞에서 언급 된 바와 같이 HTML폼은 사용자에게 데이터를 물어보고 웹서버로 데이터를 전달하는 데 편리한 방법이다.

{{HTMLElement("form")}} 요소는 action속성과 method속성을 사용하여 데이터를 어디에 어떻게 보낼것인지 정의한다.

이걸로 충분하지않다. 데이터의 이름을 지정해야한다. 이러한 이름들은 브라우저측이나 서버 측 모두에게 중요하다. 브라우저에게는 데이터 각 부분에는 이름을 지정하고 서버측 에서는 이름을 이용하여 데이터를 다룰수 있게 해준다.

그래서 데이터의 이름을 지정하려면 데이터를 받는 각 폼 위젯에 name속성을 지정해야한다.

```html
<form action="/my-handling-form-page" method="post">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </div>
  <div>
    <label for="mail">E-mail:</label>
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

우리의 예제에서는 다음과 같이 3가지 데이터 이름을 지정했다. "`user_name`", "`user_email`" and "`user_message`". 이 데이터는 "`/my-handling-form-page`"로 HTTP POST 방식으로 전송된다.

서버 측에서는 URL에서 HTTP 요청에 의해 구현된 3개의 키/벨류 항목의 목록 데이터를 받게 된다. 스크립트로 데이터를 다루는 방법은 너에게 달려있다. 각각 의 서버 측 언어들은(PHP, Python, Ruby, Java, C# 등)자신만의 방식으로 이를 다룬다. 더 깊게 들어가는 것은 이문서의 범위를 벗어나지만 더자세히 알고 싶다면 다음 문서를 참조하시오. [Sending and retrieving form data](/ko/docs/HTML/Forms/Sending_and_retrieving_form_data).

## 결론

축하한다! 첫번째 HTML폼을 만들었다.

| Live example                                                                                               |
| ---------------------------------------------------------------------------------------------------------- |
| {{ EmbedLiveSample('A_simple_form', '100%', '240', '', 'Learn/HTML/Forms/Your_first_HTML_form/Example') }} |
| [Check out the source code](/ko/docs/HTML/Forms/My_first_HTML_form/Example)                                |

하지만 이제 시작일 뿐이고, 더 깊게 파고들 시간이다. HTML폼은 이 문서에서 본 것 보다 더 강력한 도구이고, 이 가이드의 다른 문서가 나머지 내용을 배우는데 도움이 될 것이다.

{{NextMenu("Learn/HTML/Forms/How_to_structure_an_HTML_form", "Learn/HTML/Forms")}}
