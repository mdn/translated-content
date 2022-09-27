---
title: HTML_폼_구성_방법
slug: Learn/Forms/How_to_structure_a_web_form
original_slug: Learn/HTML/Forms/HTML_폼_구성_방법
---
HTML폼을 만들떄 구조화 하는것은 중요한 것이다. 이것은 두가지 이유로 중요하다. 폼이 사용 할수 있다는 것을 보장하고 접근성도 늘릴수 있기 떄문이다.(즉 장애인들도 쉽게 사용할 수 있다.) HTML 폼의 [접근성](/ko/docs/Web/Accessibility)은 중요한 점이고 어떻게 폼 접근성을 높일 수 있는지 볼것이다.

HTML 폼들은 그 유연성으로 인해 HTML 중 복잡한 구조를 가지고 있는 요소중 하나이다. 폼 요소와 속성을 잘 혼합하면 모든 형태의 기본적인 폼을 만들 수 있다. 즉 몇몇 사람들이 HTML폼이 단순하고 매우 거칠다는 것을 발견했다는 것에 주목할 가치가 있다. [XForms](/ko/docs/Archive/Web/XForms)같은 풍부한 기술이 있다는 것은 사실이지만 불행하게도 모든 브라우저에서 폼의 종류를 널리 구현되지 않았다. 왜냐하면 대부분 자바스크립트에 의존하여 HTML폼들을 다루기 떄문이다.이 문서에서는 HTML 폼 요소들을 어떻게 사용해야 하는지 자세하게 설명 할 것이다. 만약 사용자 폼 위젯 만들기에 대하여 자세한 내용을 알고 싶다면 다음 문서를 참조하시오. [How to build custom form widgets](/ko/docs/HTML/Forms/How_to_build_custom_form_widgets)

## 글로벌 구조

### `<form>` 요소

{{HTMLElement("form")}} 요소는 공식적으로 폼을 정의하는 요소로 이 요소의 속성으로 폼의 작동하는 방식을 정의 할 수있다. HTML폼을 생성할떄마다 반드시 이 요소로 시작을 해야한다. 많은 보조 기술이나 브라우저 플러그인이 {{HTMLElement("form")}} 요소를 발견하고 쉽게 사용 할 수 있게 특별한 후크를 구현 할 수 있다.

우리는 저번 문서에서 이미 이 내용을 다루었다.

> **참고:** **주의:**폼을 다른 폼으로 둘러싸는 것은 엄격하게 제한되어 있다. 만약 그렇게 하면 사용자가 사용하는 브라우저에 따라 예측할 수 없는 방식으로 작동하게 된다.

언제든지 폼위젯을 {{HTMLElement("form")}} 요소 바깥에서 사용할 수 있다. 하지만 그렇게 사용한다면, 그 폼위젯은 어떠한 폼과도 관련이 없다. 폼 위젯들은 폼 바깥에서 사용될 수 있지만, 그 위젯들은 스스로 아무것도 하지 않을 것이기 때문에 당신이 그 위젯들 전용 프로세스를 만들어주어야 한다. 당신은 자바스크립트로 그 동작을 정의해주어야 한다.

> **참고:** **주의:**HTML5에서 HTML 폼 요소안의 폼 속성이 지원된다. 폼 속성은 {{HTMLElement("form")}} 바깥에 있는 폼요소라도 폼과 명시적으로 연결한다. 불행하게도 지금 시점에 이 기능은 다양한 브라우저에서 안정적으로 구현되지 않아서 신뢰할 수 없다.

{{HTMLElement("form")}} 요소는 다음과 같은 속성을 가지고 모든 속성이 필수가 아닌 선택적이다.

**{{HTMLElement("form")}} 요소 속성**

<table>
  <thead>
    <tr>
      <th scope="col">속성 이름</th>
      <th scope="col">기본값</th>
      <th scope="col">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="white-space: nowrap">
        {{htmlattrxref("accept-charset","form")}}
      </td>
      <td><code>UNKNOWN</code></td>
      <td>
        서버가 받아들일 문자 인코딩의 형식을 지정한다. 기본값은 특수 문자열
        <span
          style="font-family: &#x27;Courier New&#x27;,&#x27;Andale Mono&#x27;,monospace; line-height: normal;"
          >UNKNOWN</span
        ><span style="line-height: 1.5"
          >이고 이경우에 폼 요소 안에 있는 문서의 인코딩에 맞는
          인코딩이다.</span
        >
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("action","form")}}</td>
      <td></td>
      <td>폼을 통해서 전송한 정보를 처리하는 웹페이지의 URL</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("autocomplete","form")}}</td>
      <td><code>on</code></td>
      <td>
        이 속성은 이 폼안에 있는 위젯들의 기본값이 브라우저에 의해 자동 완성
        하게 하는지 여부를 나타낸다. 이속성은 두가지 값중 하나를 같는다.
        <code>on</code> 또는 <code>off</code>.
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("enctype","form")}}</td>
      <td><code>application/x-www-form-urlencoded</code></td>
      <td>
        \<code>method</code> 속성이 <code>post 값으로 지정되면</code>, 서버로
        폼을 전송하는 콘텐츠
        <a href="http://en.wikipedia.org/wiki/Mime_type">MIME</a>의 타입을
        지정한다.:
        <ul>
          <li><code>application/x-www-form-urlencoded</code></li>
          <li>
            <code>multipart/form-data</code>:
            {{HTMLElement("input")}}요소의
            <span
              style="font-family: &#x27;Courier New&#x27;,&#x27;Andale Mono&#x27;,monospace; line-height: normal;"
              >type</span
            >
            속성을 <em>file</em>로 지정한 경우 이 속성의 값을 사용한다.
          </li>
          <li><code>text/plain</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("method","form")}}</td>
      <td><code>get</code></td>
      <td>
        <span style="line-height: 1.5"
          >브라우저가 폼을 전송하기위해 사용하는
          <a href="http://www.w3.org/Protocols/rfc2616/rfc2616.html">HTTP</a>의
          방식을 지정한다.</span
        ><br /><span style="line-height: 1.5"
          >이 속성은 두개의 값중 한개를 가진다.</span
        >
        <code>get</code> 또는 <code>post</code>.
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("name","form")}}</td>
      <td></td>
      <td>
        폼의 이름이다. 이 속성값은 반드시 문서의 폼 사이에서 고유해야하며 빈
        문자열을 지정할 수없다. 일반적으로
        <span
          style="font-family: &#x27;Courier New&#x27;,&#x27;Andale Mono&#x27;,monospace; line-height: normal;"
          >id</span
        >
        속성으로 대신 지정할 수 있다.
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("novalidate","form")}}</td>
      <td>(<em>false</em>)</td>
      <td>
        이 불리언 속성은 폼이 전송 할떄 유효성 검사를 할수 없음을 나타낸다.
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("target","form")}}</td>
      <td><code>_self</code></td>
      <td>
        폼 요청을 전송한후 응답을 어떻게 받을것인지 지정한다. 예를들어
        {{HTMLElement("iframe")}}, tab, window를 사용 할 수 있다. 이
        속성의 키워드로 다음과 같은 값을 사용 할 수있다.
        <ul>
          <li>
            <code>_self</code>: 응답을 현재 브라우징 컨텍스트
            ({{HTMLElement("iframe")}}, tab, window 등)에서 불러온다.
          </li>
          <li>
            <code>_blank</code>: 응답을 새로운 브라우징 컨텍스트로 불러온다.
          </li>
          <li>
            <code>_parent</code>: 응답을 현재의 브라우징 컨텍스트의 부모
            브라우징 컨텍스트에서 불러온다. 만약 부모가 없다면
            <code>_self 키워드와 똑같이 작동한다</code>.
          </li>
          <li>
            <code>_top</code>: 응답을 최상휘 레벨 브라우징 컨텍스트에서
            불러온다. 만약 최상위 컨텍스트가 없다면
            <code>_self 키워드와 똑같이 작동한다</code>.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

요소 밖에 폼 위젯들을 사용 할 수 있지만, 폼 위젯이 어떠한 폼과도 상관이 없다는 것을 유의 해야 한다.폼의 밖에서 위젯을 사용하는 것은 편리할 수 있지만 위젯들이 작동하기 위해 다른 것들을 해야 한다는 것을 의미한다. 아마 자바스크립트를 이용해서 동작을 정의 해야 할것이다.

기술적으로 HTML5는 HTML 폼 요소에서 폼 속성을 설명 했다. 이것은 요소들을 실제로 {{ HTMLElement("form") }} 안에 있지 않아도 form요소로 확실하게 바인딩 하도록 해야한다. 불행하게도 모든 브라우저가 아직 이것을 충분히 지원하지 않는다.

### `<fieldset>` 와 `<legend>` 요소

{{HTMLElement("fieldset")}}요소는 같은 목적을 가진 위젯들을 편리하게 그룹화 하는 방법이다. A {{HTMLElement("fieldset")}} 요소는 라벨인 {{HTMLElement("legend")}} 요소와 같이 사용된다. {{HTMLElement("legend")}} 요소는 공식적으로 {{HTMLElement("fieldset")}} 요소를 설명하는데 사용된다. 많은 보조 기술들이 {{HTMLElement("legend")}} 요소를 {{HTMLElement("fieldset")}} 요소의 라벨로 이용하는데 사용된다. 예를 들어 [Jaws](http://www.freedomscientific.com/products/fs/jaws-product-page.asp), [NVDA](http://www.nvda-project.org/)같은 스크린 리더들은 각각의 위젯의 라벨을 읽기전에 legend들을 읽을 것이다.

아래 조그만 예제가 있다.

```html
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label for="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label for="size_3">Large</label>
    </p>
  </fieldset>
</form>
```

이 예제를 스크림 리더가 Fruit juice size small을 먼저 읽고 Fruit juice size medium을 읽은 다음 마지막으로 Fruit juice size large을 읽을 것이다,

이것은 가장 중요한것 중 하나이다. 대부분 라디오 버튼을 설정할떄 마다{{HTMLElement("fieldset")}} 요소 안에 있는지 확인해야한다. 다르게 사용하는 사례가 있지만 일반적으로 {{HTMLElement("fieldset")}} 요소는 폼을 강력하게 사용할 수 있게 해준다. 보조기술의 영향으로 {{HTMLElement("fieldset")}} 요소는 폼 접근 할수 있는 키 요소 중 하나이다. 이것을 남용하지 않는 것은 개발자 책임이다. 가능한 폼을 만들떄마다 스크린리더로 들어보면서 하는 것이 좋다. 만약 말이 이상하게 들린다면 개선 해야 한다는 신호이다.

{{HTMLElement("fieldset")}} 요소는 다음과 같은 속성을 지정한다.

| 속성 이름                                            | 기본값    | 설명                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{htmlattrxref("disabled","fieldset")}} | (_false_) | 만약 이 불리언 속성이 설정되면 폼은(첫번째 {{ HTMLElement("legend") }}요소에 있는 요소는 예외이다. ) 이것에 파생된 요소를 사용하거나 편집 할 수없게된다. 그리고 마우스 클릭같은 어떠한 브라우저 이벤트들도 받지 않을것이다. 일반적으로 브라우저는 회색으로 이를 표시할 것이다. |

### The \<label> element

{{HTMLElement("label")}} 요소는 HTML 폼 위젯을 정의하는 공식적인 방법이다. 이것은 접근성 있는 폼을 만드는데 가장 중요한 요소이다.

{{HTMLElement("label")}} 요소는 다음과 같은 속성을 지원한다.

**{{HTMLElement("label")}}** 요소의 속성

| 속성 명                                  | 기본값 | 설명                                                                                                                                               |
| ---------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{htmlattrxref("for","label")}} |        | {{HTMLElement("label")}} 요소와 같은 문서에 있는 위젯의 라벨의 ID . 문서안의 ID와 for속성 값이 같으면 그 라벨 요소는 그 위젯의 라벨이된다. |

요소는 for속성으로 지정한 위젯과 묶여진다. for속성은 해당 위젯의 실제 id 속성을 참조한다. 위젯은 요소로 둘러싸게 할수 있지만 이 경우 몇가지 보조 기술이 라벨과 위젯의 암시적인 관계를 이해하지 못하기 떄문에 for 속성을 고려 해봐야한다.

심지어 보조 기술을 배제 한다고 하여도 모든 브라우저에서 공식적인 라벨 설정하면 사용자가 라벨을 누르면 해당하는 위젯이 활성화 할수 있다는 것을 알아 두어야한다. 이것은 라디오 버튼이나 체크박스를 사용하는데 특히 유용하다.

```html
<form>
  <p>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="1">
    <label for="taste_1">I like cherry</label>
  </p>
  <p>
    <label for="taste_2">
      <input type="checkbox" id="taste_2" name="taste_banana" value="1">
      I like banana
    </label>
  </p>
</form>
```

몇가지 보조 기술은 여러개의 라벨을 한개의 위젯을 다루면 문제를 가질수 있다. 이 떄문에 위젯을 그에 맞는 폼 요소안에 넣어서 사용해야한다.

다음 예제를 보아라

```html
<form>
  <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>

  <p>
    <label for="name">
      <span>Name: </span>
      <input type="text" id="name" name="username" required />
      <strong><abbr title="required">*</abbr></strong>
    </label>
  </p>

  <p>
    <label for="birth">
      <span>Date of birth: </span>
      <input type="text" id="birth" name="userbirth" maxlength="10" /> <em>formated as mm/dd/yyyy</em>
    </label>
  </p>
</form>
```

이 예제에서 첫번째 단락은 필수적인 요소의 규칙들을 정의한다. 이 것은 스크린 리더와 같은 보조 기술이 필수 요소들을 찾기전에 출력하거나 읽기 위해서는 반드시 시작부분 나타내야 한다. 이런식으로 사용자는 항상 자신이 무엇을 하는지 알 수있다.

첫번째 필드는 필수적이기 떄문에 라벨 요소는 name 과 \* 로 필수적인 필드를 나타낸다 이런 식으로 하면 스크린 리더는 "Name star" 또는 "Name required"이라고 읽을 것이다. ( 스크린 리더의 설정에 따라 다르지만 항상 첫번째 단락에서 읽어진 것을 읽는다). 만약 두가지 라벨을 사용한다면, 사용자가 이 요소가 필수 요소 인지 보여지는지 보장 할 수없다.

두번째 폼 요소는 비슷하게 작동한다. 이 기술을 사용하면 사용자에게 어떻게 데이터를 작성하는지 알려주는데 확신 할 수 있다.

### `<output>` 요소

이 요소는 계산의 출력을 저장하는데 사용된다. It formally defines a relationship between the fields used to get the data required to perform the calculation and an element to be used to display the results. It is also understood as a live region by some assistive technologies (which means that when the content of the {{HTMLElement("output")}} element changes, the assistive technology is aware of that change and can react to it).

{{HTMLElement("output")}} 요소는 다음 속성은 지원한다.

| Attribute name                               | Default value | Description                                                                                              |
| -------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------- |
| {{htmlattrxref("for","output")}} |               | 스페이스로 구분된 다른 요소의 ID로 설정하고 이 요소들에 값을 입력을 계산하는데 기여한다.(또는 다른 효과) |

### form이 사용되는 일반적인 form 구조

HTML 폼의 지정된 구조를 넘어서 하나의 HTML이라고 생각 하는게 좋다. T 이 의미는 HTML 폼을 구성하는데 HTML의 모든 능력을 사용할 수 있다는 것이다.

예제에서 볼 수 있드니 라벨과 위젯을 둘러싸는데 최고의 방법은 {{HTMLElement("p")}}요소 나 {{HTMLElement("div")}}요소를 사용하는 것이다.

게다가 {{HTMLElement("fieldset")}} 요소에 HTML 타이틀을 사용하고 복잡한 폼을 만드는데 구조에 섹션을 사용하는것도 일반적인 관행이다.

HTML 목록은 체크박스나 라디오 버튼을 사용하는데 일반적으로 사용된다.

간단한 지불 폼을 만들어 보자

```html
<form>
  <h1>Payment form</h1>
  <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>

  <section>
    <h2>Contact information</h2>

    <fieldset>
      <legend>Title</legend>
      <ul>
        <li>
          <label for="title_1">
            <input type="radio" id="title_1" name="title" value="M." />
            Mister
          </label>
        </li>
        <li>
          <label for="title_2">
            <input type="radio" id="title_2" name="title" value="Ms." />
            Miss
          </label>
        </li>
      </ul>
    </fieldset>

    <p>
      <label for="name">
        <span>Name: </span>
        <input type="text" id="name" name="username" required />
        <strong><abbr title="required">*</abbr></strong>
      </label>
    </p>

     <p>
      <label for="mail">
        <span>E-mail: </span>
        <input type="email" id="mail" name="usermail" required />
        <strong><abbr title="required">*</abbr></strong>
      </label>
    </p>
  </section>

  <section>
    <h2>Payment information</h2>

    <p>
      <label for="card">
        <span>Card type:</span>
        <select id="card" name="usercard">
          <option value="visa">Visa</option>
          <option value="mc">Mastercard</option>
          <option value="amex">American Express</option>
        </select>
      </label>
    </p>
    <p>
      <label for="number">
        <span>Card number:</span>
        <input type="text" id="number" name="cardnumber" required />
        <strong><abbr title="required">*</abbr></strong>
      </label>
    </p>
    <p>
      <label for="date">
        <span>Expiration date:</span>
        <input type="text" id="date" name="expiration" required />
        <strong><abbr title="required">*</abbr></strong>
        <em>formated as mm/yy</em>
      </label>
    </p>
  </section>

  <section>
    <p>
      <button>Validate the payment</button>
    </p>
  </section>
</form>
```

See this form in action (with a touch of CSS):

{{EmbedLiveSample("A_payment_form","100%",620, "", "Learn/HTML/Forms/How_to_structure_an_HTML_form/Example")}}

## HTML 위젯

When you build a form, you need to use some widgets to collect data from the user. In this article we will see how to display those widgets; if you want to know more about the way those widgets work, it is detailed in the article: [The native form widgets](/ko/docs/HTML/Forms/The_native_form_widgets).

### The \<input> element

이 요소는 거의 모든 것을 할 있기 떄문에 특별 한 종류이다. 간단하게 type속성을 설정하여 완전히 바뀔수 있다. 간단하게 하기 위해서 type속성의 값을 4가지로 분류하였다. 단일 라인 텍스트 필드, 텍스트 입력 없는 컨트롤, 시간이나 날짜 컨트롤, 버튼. 이와 같은 다형성 떄문에 {{HTMLElement("input")}} 요소는 많은 속성을 지원하지만 type 속성값에 따라 달라지기 떄문에 어느 속성이 적절한지, 어느 것이 필요한지 선택하는 것은 어려울 수 있다.

This is all summarized in the following table (for a full list of all attributes, visit the page for the {{HTMLElement("input")}} element):

<table>
  <thead>
    <tr>
      <th scope="col">type 속성 의 값</th>
      <th scope="col">설명</th>
      <th scope="col">필수 속성</th>
      <th scope="col">관련된 속성</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" style="text-align: center">단일 선 텍스트 필드</th>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>
        이것은 가장 기본적인 텍스트 필드이다. type속성을 위한 텍스트 값은 이
        속성의 기본 값이다.(자동 유효성 검사를 하지않음)
      </td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("maxlength","input")}},
        {{htmlattrxref("pattern","input")}},
        {{htmlattrxref("placeholder","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}},
        {{htmlattrxref("size","input")}},
        {{htmlattrxref("spellcheck","input")}}
      </td>
    </tr>
    <tr>
      <td><code>email</code></td>
      <td>하나 또는 여러개 이메일 주소를 작성하기 위해 사용되는 필드</td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("maxlength","input")}},
        {{htmlattrxref("multiple","input")}},
        {{htmlattrxref("pattern","input")}},
        {{htmlattrxref("placeholder","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}},
        {{htmlattrxref("size","input")}}
      </td>
    </tr>
    <tr>
      <td><code>password</code></td>
      <td>텍스트 필드의 값을 가리기 위해 사용되는 텍스트 필드</td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("maxlength","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}},
        {{htmlattrxref("size","input")}}
      </td>
    </tr>
    <tr>
      <td><code>search</code></td>
      <td>검색 하기 위한 텍스트 필드</td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("autosave","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("maxlength","input")}},
        {{htmlattrxref("pattern","input")}},
        {{htmlattrxref("placeholder","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}},
        {{htmlattrxref("size","input")}},
        {{htmlattrxref("spellcheck","input")}}
      </td>
    </tr>
    <tr>
      <td><code>tel</code></td>
      <td>전화 번호를 입력할 수 있는 텍스트 필드</td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("maxlength","input")}},
        {{htmlattrxref("pattern","input")}},
        {{htmlattrxref("placeholder","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}},
        {{htmlattrxref("size","input")}}
      </td>
    </tr>
    <tr>
      <td><code>url</code></td>
      <td>절대 URL을 다루기 위한 필드</td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("maxlength","input")}},
        {{htmlattrxref("pattern","input")}},
        {{htmlattrxref("placeholder","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}},
        {{htmlattrxref("size","input")}}
      </td>
    </tr>
    <tr>
      <th colspan="4" style="text-align: center">텍스트 입력 없는 컨트롤</th>
    </tr>
    <tr>
      <td><code>checkbox</code></td>
      <td>체크박스</td>
      <td></td>
      <td>
        {{htmlattrxref("checked","input")}},
        {{htmlattrxref("required","input")}}
      </td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>색상을 입력 받기위한 필드</td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("required","input")}}
      </td>
    </tr>
    <tr>
      <td><code>file</code></td>
      <td>A control that lets the user select a file.</td>
      <td></td>
      <td>
        {{htmlattrxref("accept","input")}},
        {{htmlattrxref("multiple","input")}},
        {{htmlattrxref("required","input")}}
      </td>
    </tr>
    <tr>
      <td><code>hidden</code></td>
      <td>보여주지 않는 컨트롤 이지만 서버로 전송되는 필드</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>number</code></td>
      <td>소숫점을 입력받는 컨트롤</td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("max","input")}},
        {{htmlattrxref("min","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}},
        {{htmlattrxref("step","input")}}
      </td>
    </tr>
    <tr>
      <td><code>radio</code></td>
      <td>라디오 버튼. 그룹 중 한가지만 선택하기 위한 필드</td>
      <td></td>
      <td>
        {{htmlattrxref("checked","input")}},
        {{htmlattrxref("required","input")}}
      </td>
    </tr>
    <tr>
      <td><code>range</code></td>
      <td>정확하지 않는 숫자를 입력받기 위한 필드</td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("max","input")}},
        {{htmlattrxref("min","input")}},
        {{htmlattrxref("required","input")}},
        {{htmlattrxref("step","input")}}
      </td>
    </tr>
    <tr>
      <th colspan="4" style="text-align: center">시간 과 날짜 컨트롤</th>
    </tr>
    <tr>
      <td><code>date</code></td>
      <td>(년, 원, 일)날짜를 입력 받을 수 잇는 컨트롤</td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("max","input")}},
        {{htmlattrxref("min","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}}
      </td>
    </tr>
    <tr>
      <td><code>datetime</code></td>
      <td>
        UTC 타임 존 기반으로 전체 날짜와 시간(시간, 분, 초 )을 입력 받기 위한
        필드
      </td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("max","input")}},
        {{htmlattrxref("min","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}}
      </td>
    </tr>
    <tr>
      <td><code>datetime-local</code></td>
      <td>타임존 기반이 아닌 날짜와 시간을 입력받기 위한 컨트롤</td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("max","input")}},
        {{htmlattrxref("min","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}}
      </td>
    </tr>
    <tr>
      <td><code>month</code></td>
      <td>타임존 기반이 아닌 달과 년도를 입력 받기 위한 컨트롤</td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("max","input")}},
        {{htmlattrxref("min","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}}
      </td>
    </tr>
    <tr>
      <td><code>time</code></td>
      <td>타임존 기반이 아닌 시간을 입력 받기 위한 컨트롤</td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("max","input")}},
        {{htmlattrxref("min","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}}
      </td>
    </tr>
    <tr>
      <td><code>week</code></td>
      <td>
        타임존 기반이 아닌 전체 날짜를 일주일-년도 숫자로 주 번호를 입력하는
        컨트롤
      </td>
      <td></td>
      <td>
        {{htmlattrxref("autocomplete","input")}},
        {{htmlattrxref("list","input")}},
        {{htmlattrxref("max","input")}},
        {{htmlattrxref("min","input")}},
        {{htmlattrxref("readonly","input")}},
        {{htmlattrxref("required","input")}}
      </td>
    </tr>
    <tr>
      <th colspan="4" style="text-align: center">버튼</th>
    </tr>
    <tr>
      <td><code>button</code></td>
      <td>기본 행동이 없는 누르는 버튼</td>
      <td></td>
      <td>
        {{htmlattrxref("formaction","input")}},
        {{htmlattrxref("formenctype","input")}},
        {{htmlattrxref("formmethod","input")}},
        {{htmlattrxref("formnovalidate","input")}},
        {{htmlattrxref("formtarget","input")}}
      </td>
    </tr>
    <tr>
      <td><code>image</code></td>
      <td>그래픽적인 전송버튼</td>
      <td>
        {{htmlattrxref("src","input")}},
        {{htmlattrxref("alt","input")}}
      </td>
      <td>
        {{htmlattrxref("width","input")}},
        {{htmlattrxref("height","input")}},
        {{htmlattrxref("formaction","input")}},
        {{htmlattrxref("formenctype","input")}},
        {{htmlattrxref("formmethod","input")}},
        {{htmlattrxref("formnovalidate","input")}},
        {{htmlattrxref("formtarget","input")}}
      </td>
    </tr>
    <tr>
      <td><code>reset</code></td>
      <td>폼의 내용을 초기화 하는 컨트롤</td>
      <td></td>
      <td>
        {{htmlattrxref("formaction","input")}},
        {{htmlattrxref("formenctype","input")}},
        {{htmlattrxref("formmethod","input")}},
        {{htmlattrxref("formnovalidate","input")}},
        {{htmlattrxref("formtarget","input")}}
      </td>
    </tr>
    <tr>
      <td><code>submit</code></td>
      <td>폼을 전송하는 버튼</td>
      <td></td>
      <td>
        {{htmlattrxref("formaction","input")}},
        {{htmlattrxref("formenctype","input")}},
        {{htmlattrxref("formmethod","input")}},
        {{htmlattrxref("formnovalidate","input")}},
        {{htmlattrxref("formtarget","input")}}
      </td>
    </tr>
  </tbody>
</table>

몇가지 이유 때문에 브라우저에서 특정 type 속성의 값 설정을 지원하지 않으면 {{HTMLElement("input")}} 요소는 text 속성으로 렌더링 한다. 이것은 매력적이지 않아도 어쩔 수없이 폼이 작동하도록 한다.

요소는 강력한 도구지만, 모든 것을 할수 없고 다른 것들을 다루기 위해 다른 요소들이 있다.

### \<textarea> 요소

이 요소는 다중 텍스트 필드로 설정된다. 이 요소는 사용자가 입력한 텍스트에 줄 바꿈을 할수 있다는 것을 제외하고 단일 라인 텍스트 필드와 정확하게 똑같이 작동한다. 또한 여러줄에 걸처 랜더링을 제어 하기위해 몇가지 추가 속성 설정을 허락한다.

| Attribute name                                   | 기본값 | 설명                                                                    |
| ------------------------------------------------ | ------ | ----------------------------------------------------------------------- |
| {{htmlattrxref("cols","textarea")}} | `20`   | 보여지는 문자 너비의 평균을 기준으로 텍스트 컨트롤의 너비               |
| {{htmlattrxref("rows","textarea")}} |        | 보여지는 텍스트 행의 수                                                 |
| {{htmlattrxref("wrap","textarea")}} | `soft` | hard, soft 이 둘중 하나의 값으로 어떻게 텍스트를 둘러쌀것인지 나타낸다. |

{{HTMLElement("textarea")}} 요소는 {{HTMLElement("input")}} 요소와 다르게 작동한다. {{HTMLElement("input")}} 요소는 자동으로 닫히는 요소이다. 이는 자식 요소를 가질 수 없다는 것을 의미한다. 이와 반대로 요소는 text 콘텐츠를 자식으로 가질 수 있는 일반적인 요소이다.

이는 두가지 영향이 있다.

- 만약 {{HTMLElement("input")}}요소에 기본값을 정의하기 원한다면, value 속성을 사용하여 지정해야 되나, {{HTMLElement("textarea")}}요소에서는 기본값을 {{HTMLElement("textarea")}} 태그 사이에 넣기만 하면된다.
- 자연스러움 때문에 {{HTMLElement("textarea")}} 요소는 오직 텍스트 콘텐츠만 받아들인다. 이 의미는 어떠한 HTML콘텐츠도 {{HTMLElement("textarea")}} 요소에 넣으면 텍스트 콘텐츠로 렌더링 된다.

예제를 따라가면 다음 두 요소는 똑같이 랜더링 되어 질것이다.

```html
<form>
  <p>
    <label for="text_1">With regular HTML</label><br>
    <textarea id="text_1" name="regular"><p>I'm a paragraphe</p></textarea>
  </p>
  <p>
    <label for="text_2">With escaped HTML</label><br>
    <textarea id="text_2" name="escaped">&lt;p&gt;I'm a paragraphe&lt;/p&gt;</textarea>
  </p>
  <p>
    <button>Send me</button>
  </p>
</form>
```

### \<select>, \<option>그리고 \<optgroup> 요소

요소는 선택 박스를 만들 수 있게 해준다(떄로는 콤보 박스라고 한다). 선택 박스는 사용자가 하나 이상 미리 정의 된 값을 선택하는 위젯이다. 단일 값 선택 박스와 다중 값 선택 박스는 다르다. 이에 대한 자세한 내용은 다음 문서를 확인해라 [The native form widgets](/ko/docs/HTML/Forms/The_native_form_widgets).

선택 박스 안의 값들은 {{HTMLElement("option")}} 요소에서 정의되고 {{HTMLElement("optgroup")}} 요소 안에서 그룹화 될 수 있다.

Let's take an example:

```html
<form>
  <p>
    <label for="myFruit">Pick a fruit</label>
    <select id="myFruit" name="fruit">
      <!-- There is a trick here you think you'll pick
         a banana but you'll eat an orange >:-) -->
      <option value="orange">Banana</option>
      <option>Cherry</option>
      <optgroup label="berries">
        <option>Blueberry</option>
        <option>Raspberry</option>
        <option>Strawberry</option>
      </optgroup>
    </select>
  </p>
</form>
```

{HTMLElement("option")}} 요소는 폼이 전송되면 전송될 value속성을 설정한다. 만약 value 속성을 바뜨리면 {{HTMLElement("option")}} 요소는 value 값을 선택 박스 값으로 사용된다.

{{HTMLElement("optgroup")}} 요소의 라벨 속성은 값이 나오기전에 보여주고 옵션 같은 요소들은 선택할 수 없게 나온다..

| 속성 이름                                        | 기본값    | 설명                                                                                                                   |
| ------------------------------------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| {{htmlattrxref("label","option")}}     |           | 이 속성은 옵션을 설명하는 라벨의 텍스트이다. 만약 라벨 속성이 정의되지 않으면 이 값은 요소의 텍스트 콘텐츠로 설정된다. |
| {{htmlattrxref("selected","option")}} | (_false_) | 만약 이 속성이 불리언 값으로 설정되는 경우 처음에 선택된 상태로 시작하게된다.                                          |

| Attribute name                                   | Default value | Description                                                        |
| ------------------------------------------------ | ------------- | ------------------------------------------------------------------ |
| {{htmlattrxref("label","optgroup")}} |               | The name of the group of options. **This attribute is mandatory.** |

### \<datalist>요소

이 요소는 기존에 있는 위젯들에 사전 설정 값을 제공 함으로써 위젯들을 확장시킨다. 가장 잘 알려진 사용 방법은 텍스트 필드의 자동 완성 목록이다. 값들은 {{HTMLElement("datalist")}} 요소 안에 있는 {{HTMLElement("option")}}요소의 값으로 사용할 수 있다.

{{HTMLElement("datalist")}}요소와 바인드 하기위해서는 사용하는 요소의 list속성을 이용하여 설정해야한다. 이 속성은 {{HTMLElement("datalist")}} 요소의 id로 설정된다.

요소는 최근에 HTML 폼으로 추가 되었다. 그러므로 아직 이를 지원하지 않는 브라우저들도 있다. 이 문제를 처리하기 위하여 아래에 약간 까다로운 예제가 있다.

```html
<form>
  <p>
    <label for="myFruit">What is your favorite fruit?</label>
    <input type="text" id="myFruit" name="fruit" list="fruitList" />

    <datalist id="fruitList">
      <label for="suggestion">or pick a fruit</label>
      <select id="suggestion" name="altFruit">
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
        <option value="strawberry">Strawberry</option>
      </select>
    </datalist>
  </p>
</form>
```

한편 {{HTMLElement("datalist")}} 요소를 지원하는 브라우저는 {{HTMLElement("option")}} 요소를 무시하고 이를 사용하는 요소를 확장 할 것이다. 이와 반대로 {{HTMLElement("datalist")}} 요소를 지원하지 않는 브라우저는 라벨과 선택 박스를 표시 할 것이다. 물론 {{HTMLElement("datalist")}} 요소를 지원하지 않는 브라우저에 대해 자바스크립트로 하는 다른 방법이 있지만 항상 자바스크립트만 사용하는 것은 좋은 것이 아니다.

| Safari 6   | ![Screenshot of the datalist element fallback with Safari on Mac OS](/files/4583/datalist-safari.png) |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| Firefox 18 | ![Screenshot of the datalist element with Firefox on Mac OS](/files/4581/datalist-firefox-macos.png)  |

### \<meter> 와 \<progress> 요소들

이 두요소는 그래픽적으로 숫자 값을 표현 하는방법이다. 이 두 요소의 차이점은 두 요소의 의미가 다르다는 것이다.

- {{HTMLElement("meter")}} 요소는 정적인 값을 최소와 최대 값사이에 상대적인 위치를 나타낸다
- The {{HTMLElement("progress")}} 요소는 최소와 최대값을 시간에 따라 바뀌는 가변적인 값을 나타낸다. 값이 변하면 자바스크립트를 이용하여 다룰수 있다는것을 주목할 필요가 있다. 요소 자신은 값을 변화시키기 위한 어떠한 매커니즘도 가지고 있지 않다.

속성으로 인해 이 요소들은 다음 속성을 지정 가능하다.

**{{HTMLElement("meter")}} 요소는 다음과 같은 속성을 가진다**

| Attribute name                                   | Default value   | Description                                                    |
| ------------------------------------------------ | --------------- | -------------------------------------------------------------- |
| {{htmlattrxref("min","meter")}}         | 0               | The lower numeric bound of the measured range.                 |
| {{htmlattrxref("max","meter")}}         | 1               | The upper numeric bound of the measured range.                 |
| {{htmlattrxref("low","meter")}}         | the `min` value | The upper numeric bound of the low end of the measured range.  |
| {{htmlattrxref("high","meter")}}     | the `max` value | The lower numeric bound of the high end of the measured range. |
| {{htmlattrxref("optimum","meter")}} |                 | The optimal numeric value.                                     |

| Attribute name                               | Default value | Description                                                                                                                                  |
| -------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| {{htmlattrxref("max","progress")}} |               | This attribute describes how much work the task indicated by the {{HTMLElement("progress")}} element requires before it's complete. |

### The \<button> element

{{HTMLElement("button")}} 요소는 폼 버튼을 만드는 가장 쉬운 방법이다. 버튼은 type속성에 따라 3가지 타입을 가진다.

- 전송 버튼은 폼 데이터들을 {{HTMLElement("form")}}요소에 action 속성에 정의 된 웹 페이지에 보낸다.
- 리셋 버튼은 폼의 모든 위젯들을 기본 값으로 재설정한다. 폼 사용자 경험 관점에서 이 버튼을 사용하는것은 좋지 않은 사례로 간주되고 이를 피해야 한다. 이것은 사용자가 단순히 실수로 한것이 모든 작업을 잃게 할 수 있다.
- 익명 버튼은 어떠한 의미도 없는 대신 자바스크립트를 이용하여 다룰 수 있다..

**{HTMLElement("button")}} 요소의 속성**

| 속성 이름                                                | 기본값   | 설명                                                                                                            |
| -------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| {{htmlattrxref("type","button")}}             | `submit` | 버튼의 타입. `button`, `reset`, `submit 이 있다.`                                                               |
| {{htmlattrxref("formaction","button")}}     |          | 만약 버튼이 submit 버튼이면 이 속성은 {{HTMLElement("form")}}요소의 action 속성에 오버라이드 된다.     |
| {{htmlattrxref("formenctype","button")}}     |          | 만약 버튼이 submit 버튼이면 이 속성은 {{HTMLElement("form")}}요소의 enctype 속성에 오버라이드 된다.    |
| {{htmlattrxref("formmethod","button")}}     |          | 만약 버튼이 submit 버튼이면 이 속성은 {{HTMLElement("form")}}요소의 method 속성에 오버라이드 된다.     |
| {{htmlattrxref("formnovalidate","button")}} |          | 만약 버튼이 submit 버튼이면 이 속성은 {{HTMLElement("form")}}요소의 novalidate 속성에 오버라이드 된다. |
| {{htmlattrxref("formtarget","button")}}     |          | 만약 버튼이 submit 버튼이면 이 속성은 {{HTMLElement("form")}}요소의 target 속성에 오버라이드 된다.     |

기술적으로 말하면 {{HTMLElement("button")}} 요소와 {{HTMLElement("input")}} 요소의 속성에 정의된 버튼 요소는 거의 차이가 없다. 단 한가지 차이점은 버튼 자체의 라벨 이다.요소 안에서는 라벨은 오직 문자 데이터로만 나타 낼 수 있지만 {{HTMLElement("button")}} 요소에서는 어떠한 HTML이 될 수있다. 그래서 이에 따른 스타일을 디자인 할 수있다.

> **참고:** For historical reasons, the {{HTMLElement("button")}} element wasn't used very often and in many forms developers preferred to use buttons made with the {{HTMLElement("input")}} element. This is due to a bug in legacy versions of Internet Explorer (IE). In IE6 and IE7, if you add a `name` and a `value` attribute to a {{HTMLElement("button")}} element, they do not send the content of the `value` attribute but the raw content of the button instead. This has been fixed since IE8, so there is no longer any reason to avoid using the {{HTMLElement("button")}} element.

### 공통 속성

Many of the elements used to define form widgets have some their own attributes. However, there is a set of attributes common to all form elements that give you some control over those widgets. Here is a list of those common attributes:

| Attribute name | Default value | Description                                                                                                                                                                                                                                                                                                                                           |
| -------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autofocus`    | (_false_)     | This Boolean attribute lets you specify that the element should automatically have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.                                                                     |
| `disabled`     | (_false_)     | This Boolean attribute indicates that the user cannot interact with the element. If this attribute is not specified, the element inherits its setting from the containing element, for example {{HTMLElement("fieldset")}}; if there is no containing element with the `disabled` attribute set, then the element is enabled.                |
| `form`         |               | The form element that the widget is associated with. The value of the attribute must be the `id` attribute of a {{HTMLElement("form")}} element in the same document. In theory, it lets you set a form widget outside of a {{HTMLElement("form")}} element. In practice, however, there is no browser which supports that feature. |
| `name`         |               | The name of the element; this is submitted with the form data.                                                                                                                                                                                                                                                                                        |
| `value`        |               | The element's initial value.                                                                                                                                                                                                                                                                                                                          |

## Using [ARIA](/ko/docs/Accessibility/ARIA) to structure HTML forms

[ARIA](/ko/docs/Accessibility/ARIA) is [a W3C Candidate Recommendation](http://www.w3.org/TR/wai-aria/) which adds to HTML improved accessibility for rich Internet applications, including for forms. We will discuss its use in more detail in the "[How to build custom form widgets](/ko/docs/HTML/Forms/How_to_build_custom_form_widgets)" article, but there are some basics that are good to know.

Before going further, it's worth noting that support for ARIA and assistive technologies among browsers is far from perfect, but it's improving. Just to understand the issue, when a browser encounters an ARIA attribute, it has to send information to the operating system's accessibility layer. Not all browsers are good at doing this cross platform. The assistive technologies, on their own, have to connect themselves to the OS accessibility layer to handle the information that comes from the browsers. Surprisingly, not all assistive technologies do it well. So using ARIA does not mean that your web application will be accessible, but it means that you do your best to achieve this. Unfortunately, for the time being, ARIA remains a best effort technology, but it's always better than nothing.

If you want to dig into using ARIA with HTML forms, feel free to [read the related section in the ARIA documentation](/ko/docs/Accessibility/ARIA/forms).

### The [`aria-labelledby`](/ko/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) attribute

This attribute is a convenient way to define a label without using the {{HTMLElement("label")}} element. The attribute is set on the widget element and references the `id` attribute of the element to use as a label.

```html
<form>
  <p id="fruitLabel">What's your favorite fruit</p>
  <p>
    <input type="text" name="fruit" aria-labelledby="fruitLabel">
  </p>
</form>
```

Conceptually, it's the opposite of the `for` attribute on the {{HTMLElement("label")}} element. With the `for` attribute, you reference the `id` of the widget but with the `aria-labbeldby` attribute, you reference the `id` of the label.

### The [`aria-describedby`](/ko/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute) attribute

This attribute works like the `aria-labelledby` attribute. The difference is mainly semantic. A label defines the essence of an object, while a description provides more information that the user might need. This attribute is not advised for form elements, you should rely on the `aria-labelledby` attribute, except if you want to provide extensive information on the current form element. It is to be used as a provider for a longer description.

### The [`aria-label`](/ko/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) attribute

This attribute is used when there is no explicit label in the DOM for a given widget. It lets you provide a widget that will be passed to assitive technologies without actually creating a DOM node for it.

```html
<form>
  <p>
    <input type="search" name="q" aria-label="Search" />
    <input type="submit" value="Go" />
  </p>
</form>
```

### The [`role`](/ko/docs/Accessibility/ARIA/ARIA_Techniques) attribute

This is the most important ARIA attribute. It lets you give specific semantic information, understandable by assitive technologies, for a given HTML element. There are many roles available and some of them are dedicated to form widgets.

ARIA tries to provide semantics for widgets that are not currently available in HTML as well as for elements that already exist. We will see in detail how to use those roles in the article: How to build custom form widgets.

Those roles for form widgets are :

- [Button](/ko/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role)
- [Checkbox](/ko/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_checkbox_role)
- [Progressbar](/ko/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role)
- Radio
- [Slider](/ko/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role)
- Spinbutton
- [textbox](/ko/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_textbox_role)

It's also worth noting that there's something called a composite role:

- [Listbox](/ko/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_listbox_role)
- Radiogroup

If those roles are extremely useful, know that [there are more](/ko/docs/Accessibility/ARIA/ARIA_Techniques); ARIA is a very large specification. Digging into it can help you improve accessibility in areas far afield from HTML forms.

## 결론

You now have all the knowledge to properly structure your HTML forms; the next article will dig into implementation details and functional expectations: [The native form widgets](/ko/docs/HTML/Forms/The_native_form_widgets).

## 볼거리

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](http://www.alistapart.com/articles/sensibleforms/)
