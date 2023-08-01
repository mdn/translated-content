---
title: HTML 폼 구성 방법
slug: Learn/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

HTML폼을 만들떄 구조화 하는것은 중요한 것이다. 이것은 두가지 이유로 중요하다. 폼이 사용 할수 있다는 것을 보장하고 접근성도 늘릴수 있기 떄문이다.(즉 장애인들도 쉽게 사용할 수 있다.) HTML 폼의 [접근성](/ko/docs/Web/Accessibility)은 중요한 점이고 어떻게 폼 접근성을 높일 수 있는지 볼것이다.

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

기본 사항을 다룬 후에는 이제 폼의 다른 부분에 구조와 의미를 부여하는 데 사용되는 요소들을 좀 더 자세히 살펴보겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제 조건:</th>
      <td>
        기본적인 컴퓨터 사용능력과 <a href="/ko/docs/Learn/HTML/Introduction_to_HTML">HTML에 대한 기본적인 이해</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        HTML 폼을 구조화하고 의미를 부여하여 사용가능하고 접근성있는 폼을 만드는 방법을 이해합니다.
      </td>
    </tr>
  </tbody>
</table>

폼의 유연성은 폼을 [HTML](/ko/docs/Learn/HTML)의 가장 복잡한 구조 중 하나로 만듭니다. 전용 요소들과 특성들로 모든 종류의 기본적인 폼을 만들 수 있습니다. HTML 폼을 만들때 올바른 구조를 사용하게되면 사용성과 [접근성](/ko/docs/Learn/Accessibility)을 확보 할 수 있습니다.

## \<form> 요소

{{HTMLElement("form")}} 요소는 폼을 형식적으로 정의하는 폼의 동작 방식을 결정하는 속성들을 포함합니다. HTML폼을 생성할떄마다 반드시 이 요소로 시작하고 모든 내용을 내부에 중첩해야 합니다. 많은 보조 기술이나 브라우저 플러그인이 {{HTMLElement("form")}} 요소를 발견하고 사용하기 쉽게 만들기 위해 특별한 기능을 제공 할 수 있습니다.

우리는 저번 문서에서 이미 이 내용을 다루었습니다.

> **경고:** 폼을 다른 폼으로 중첩하는 것은 엄격하게 제한되어 있습니다. 그렇게 하면 사용자가 사용하는 브라우저에 따라 예측할 수 없는 방식으로 작동하므로 좋은 방법이 아닙니다.

언제든지 {{HTMLElement("form")}} 요소 바깥에서 폼 컨트롤을 사용할 수 있습니다. 이럴 경우 기본적으로 컨트롤은 [`form`](/ko/docs/Web/HTML/Element/input#form) 특성을 사용하여 연결해주지 않는한 어떤 폼과도 관련이 없습니다. 이것은 컨트롤이 폼 요소 내부에 중첩되어있지 않더라도 명시적으로 컨트롤을 명시적으로 바인딩할 수 있도록 하기위해 도입됐습니다.

다음으로 폼 내부의 중첩되어있는 구조요소에 대해 다루겠습니다.

## \<fieldset> 와 \<legend> 요소

{{HTMLElement("fieldset")}} 요소는 같은 목적을 가진 위젯들을 편리하게 그룹화 하는 방법입니다. {{HTMLElement("fieldset")}}에 레이블을 붙이려면 {{HTMLElement("fieldset")}} 태그 바로 아래에 {{HTMLElement("legend")}} 요소를 포함하면 됩니다. {{HTMLElement("legend")}}의 텍스트 컨텐츠는 {{HTMLElement("fieldset")}} 요소의 목적을 형식적으로 설명합니다.

많은 보조 기술들이 {{HTMLElement("legend")}} 요소를 해당 {{HTMLElement("fieldset")}} 요소내의 각 컨트롤의 레이블의 일부인것 처럼 사용합니다. 예를 들어 [Jaws](https://www.freedomscientific.com/products/software/jaws/) 와 [NVDA](https://www.nvaccess.org/) 같은 스크린 리더는 각 컨트롤의 라벨을 읽기전에 legend를 읽을 것입니다.

아래 작은 예제가 있습니다.

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

> **참고:** 예제는 여기서 찾을수 있습니다. [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html) ([see it live also](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

위 예제를 스크린 리더가 읽을때 Fruit juice size small을 먼저 읽고 Fruit juice size medium을 읽은 다음 마지막으로 Fruit juice size large을 읽을 것입니다.

이 예제에서의 사용 사례는 가장 중요한것 중 하나입니다. 라디오 버튼의 셋트는 항상 {{HTMLElement("fieldset")}} 요소 내부에 중첩해야 합니다. 다르게 사용하는 사례도 있으며, 흔히 {{HTMLElement("fieldset")}} 요소는 폼의 구획을 나누는데도 사용 할 수 있습니다. 이상적으로는 긴 폼을 여러 페이지에 걸쳐 나누는 것이 좋지만, 폼이 길어지고 단일 페이지에 위치해야 하는 경우, 서로 다른 관련 섹션을 각각 fieldset 내에 넣는것은 사용성을 향상 시킵니다.

보조기술에 대한 영향력으로 인해, {{HTMLElement("fieldset")}} 요소는 접근성 있는 폼을 구축하기위한 주요 요소 중 하나입니다. 그러나 이를 남용하지 않는것은 여러분의 책임입니다. 가능하다면 폼을 작성할 때마다 [스크린리더가 어떻게 해석하는지 들어보는것](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers)이 좋습니다. 스크린리더가 읽는것이 이상하게 들린다면 폼 구조를 개선해보세요.

## \<label> 요소

이전 글에서 볼 수 있듯이 {{HTMLElement("label")}} 요소는 HTML 폼 위젯에 대한 레이블을 정의하는 공식적인 방법입니다. 올바르게 구현되면 스크린 리더는 폼 요소의 레이블과 관련된 지시사항을 읽어주며 시각 장애인 사용자 뿐만 아니라 시각적으로 볼 수 있는 사용자에게도 유용합니다. 이전 글에서 본 것처럼, 다음과 같은 예시를 살펴보겠습니다.

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

`<label>` 요소가 `<input>`요소와 `for` 속성을 통해 (`<input>` 요소의 `id` 속성을 사용) 올바르게 연결되어 있을 때 스크린 리더는 "이름, 텍스트 수정"과 같은 내용을 읽어줍니다.

다른 방법으로도 폼 컨트롤과 레이블을 연결할 수 있습니다. 폼 컨트롤을 `<label>` 내부에 중첩하여 암묵적으로 연결할 수 있습니다.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

심지어 이러한 경우에도, 레이블과 위젯간의 관계를 보조기술이 이해할 수 있도록 `for` 속성을 설정하는 것이 가장 좋은 방법으로 권장됩니다.

레이블이 없거나 폼 컨트롤이 암묵적으로나 명시적으로 레이블과 연결되지 않은 경우, 스크린 리더는 "텍스트 수정 공백"과 같은 내용을 읽어주는데, 이는 전혀 도움이 되지 않습니다.

### 레이블도 클릭할 수 있습니다!

레이블을 올바르게 설정했을때의 또다른 장점은 해당 위젯을 활성화 하기위해 레이블을 클릭하거나 탭할 수 있다는 것입니다. 이는 텍스트입력과 같은 컨트롤에 유용합니다. 텍스트 입력의 경우 레이블 뿐만 아니라 입력란을 클릭하여 포커스를 활성화할 수 있지만, 라디오버튼과 체크박스 같은 경우애는 특히 유용합니다. 이러한 컨트롤의 클릭 영역은 매우 작을 수 있으므로 활성화하기 쉽도록 만드는 것이 유용합니다.

예를 들어 아래 예시의 "I like cherry"레이블 텍스트를 클릭하면 _taste_cherry_ 체크박스의 선택 상태가 토글됩니다.

```html
<form>
  <p>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="cherry" />
    <label for="taste_1">I like cherry</label>
  </p>
  <p>
    <input type="checkbox" id="taste_2" name="taste_banana" value="banana" />
    <label for="taste_2">I like banana</label>
  </p>
</form>
```

> **Note:** 예제는 여기서 찾을수 있습니다. [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html) ([see it live also](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### 여러개의 레이블

엄밀히 말하자면, 하나의 위젯에 여러개의 레이블을 넣을 수도 있지만, 이는 일부 보조기술에서 처리하는데 문제가 발생할 수 있으므로 좋은 아이디어는 아닙니다. 여러 레이블을 사용하는 경우 위젯과 해당 레이블을 하나의 {{htmlelement("label")}} 요소안에 중첩시켜야 합니다.

다음 예시를 살펴보겠습니다.

```html
<p>Required fields are followed by <span aria-label="required">*</span>.</p>

<!-- 따라서 이렇게 작성합니다. -->
<!--div>
  <label for="username">Name:</label>
  <input id="username" type="text" name="username" required>
  <label for="username"><span aria-label="required">*</label>
</div-->

<!-- 이렇게 작성하는것이 더 좋습니다. -->
<!--div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username" required>
    <span aria-label="required">*</span>
  </label>
</div-->

<!-- 하지만 이렇게 작성하는 것이 가장 좋을것입니다. -->
<div>
  <label for="username">Name: <span aria-label="required">*</span></label>
  <input id="username" type="text" name="username" required />
</div>
```

{{EmbedLiveSample("Multiple_labels", 120, 120)}}

위의 문단은 필수 요소에대한 규칙을 설명합니다. 이 규칙은 필수요소를 만나기 전에 시각적으로 확인하는 사용자와 스크린 리더와 같은 보조 기술을 사용하는 사용자가 해당 규칙을 알 수 있도록 '이전'에 포함되어야 합니다. 이 방법은 사용자에게 애스터리스크의 의미를 알려주는데 도움이 됩니다. 그러나 이것으로는 부족합니다. 스크린리더는 애스터리스크를 '별표'라고 읽어줍니다. 시각적인 마우스 사용자가 마우스 호버하면 '필수'가 표시되어야 하는데, 이는 `title` 속성을 사용하여 달성할 수 있습니다. `title` 속성이 스크린 리더에서 읽히는 것은 스크린 리더의 설정에 다라 달라지므로 항상 스크린 리더에서 읽히는 [`aria-label`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-label) 속성 또한 추가하는 것이 더 신뢰할 수 있습니다.

위의 예시들은 효과적으로 사용하기 위해 순서대로 개선되었습니다.

- 첫 번째 예시에서는 입력필드와 함께 레이블이 읽히지 않고 "텍스트 수정 공백"만 읽힙니다. 또한 실제 레이블들이 따로 읽히기 때문에 여러개의 `<label>` 요소가 스크린 리더를 더 혼란스럽게 만듭니다.
- 두 번째 예시에서는 조금 더 명확해집니다. 입력필드와 함께 읽히는 레이블은 "이름 별표 이름 텍스트수정 리콰이어드"로 읽히고, 레이블들은 여전히 따로 읽힙니다. 여전히 약간 혼동스럽지만, 이번에는 `<input>` 에 레이블이 연결되어있어서 조금 더 나아진 것입니다.
- 세 번째 예시가 가장 좋습니다. 실제 레이블이 모두 함께 읽히고, 입력필드와 함께 읽히는 레이블은 "이름 리콰이어드 텍스트 수정"으로 읽힙니다.

> **참고:** 실제로 사용하는 스크린 리더에 따라 결과가 약간 다를 수 있습니다. 이 예시는 VoiceOver에서 테스트 되었으며, NVDA도 비슷하게 작동합니다. 여러분에 경험에 대해서도 듣고 싶습니다.

> **참고:** 이 예시는 GitHub에서 [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) ([see it live also](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html))로 찾을 수 있습니다. 다만, 주의해야 할 점은 두개이상의 버전을 주석 해제하여 테스트하지 않아야 한다는 점입니다. 동일한 ID를 가진 여러개의 레이블과 입력 필드가 있는 경우 스크린 리더가 혼란스러워질 수 있습니다!

## 폼과 함께 사용되는 일반 HTML 구조

웹 폼과 관련된 구조 이외에도, 폼 마크업은 단지 HTML일 뿐이라는 것을 기억하는것이 좋습니다. 이는 HTML의 모든 기능을 활용하여 웹 폼을 구조화할 수 있다는 것을 의미합니다.

예시에서 확인할 수 있듯이, 레이블과 해당 위젯을 {{HTMLElement("ul")}} 또는 {{HTMLElement("ol")}} 리스트 내에서 {{HTMLElement("li")}} 요소로 감싸는 것이 흔한 방법입니다. {{HTMLElement("p")}}와 {{HTMLElement("div")}} 요소도 흔히 사용됩니다. 여러 개의 체크박스 또는 라디오 버튼을 구조화하기 위해 리스트를 사용하는 것이 권장됩니다.

{{HTMLElement("fieldset")}} 요소 외에도, 복잡한 폼을 구조화 하기 위해 HTML 제목 (예: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) 과 섹션화 (e.g. {{htmlelement("section")}}) 을 사용하는 것이 흔한 방법입니다.

무엇보다도, 접근 가능하고 사용하기 쉬운 폼을 만들기 위해 편안한 코딩 스타일을 찾는것은 여러분에게 달려있습니다. 각각의 기능 섹션은 별도의 {{htmlelement("section")}} 요소에 포함되어야 하며, 라디오 버튼을 포함하는 {{htmlelement("fieldset")}} 요소를 사용해야 합니다.

## 학습 활동: 폼 구조 만들기

자 그럼 아이디어를 실제로 적용해보고 약간 더 복잡한 폼의 결제 폼을 만들어보겠습니다. 이 폼에는 아직 이해하지 못할 수도 있는 여러가지 컨트롤 유형이 포함됩니다. 현재는 걱정하지 마세요. 다음 글에서 이들이 어떻게 작동하는지 알게될 것입니다 ([기본 네이티브 폼 컨트롤](/ko/docs/Learn/Forms/Basic_native_form_controls)). 지금은 아래 지침을 주의 깊게 읽으며, 폼을 구조화 하는데 사용하는 래퍼 요소와 그 이유를 천천히 파악해보세요.

1. 컴퓨터의 새로운 경로에 [빈 템플릿 파일](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) 과 [결제 폼을 위한 CSS](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/payment-form.css) 의 로컬 복사본을 만드는것으로 시작해 봅시다.
2. HTML에 CSS를 적용하기 위해 HTML {{htmlelement("head")}} 내부에 아래의 코드를 추가하세요

   ```html
   <link href="payment-form.css" rel="stylesheet" />
   ```

3. 다음으로, {{htmlelement("form")}} 요소를 추가해 폼을 생성하세요.

   ```html-nolint
   <form>
   ...
   </form>
   ```

4. 유저에게 필수 입력 필드가 어떻게 표시될지 알려주기 위해 `<form>` 요소 안에 제목과 문단을 추가하세요

   ```html-nolint
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><span aria-label="required">*</span></strong>.
   </p>
   ```

5. 다음으로, 이전 항목 아래에 더 큰 코드 섹션을 폼에 추가하겠습니다. 여기에서는 연락처 정보를 필드를 별도의 {{htmlelement("section")}} 요소로 감싸고 있는것을 볼 수 있습니다. 또한, 세 개의 라디오 버튼을 각각 자체적인 목록({{htmlelement("li")}}) 요소 내에 넣고 있습니다. 또한, 두 개의 일반 텍스트가 {{htmlelement("input")}} 과 그에 해당하는 {{htmlelement("label")}} 요소가 각각 {{htmlelement("p")}} 안에 포함되어 있으며, 비밀번호를 입력을 위한 비밀번호 입력란도 있습니다. 아래 코드를 폼에 추가하세요.

   ```html
   <section>
     <h2>Contact information</h2>
     <fieldset>
       <legend>Title</legend>
       <ul>
         <li>
           <label for="title_1">
             <input type="radio" id="title_1" name="title" value="K" />
             King
           </label>
         </li>
         <li>
           <label for="title_2">
             <input type="radio" id="title_2" name="title" value="Q" />
             Queen
           </label>
         </li>
         <li>
           <label for="title_3">
             <input type="radio" id="title_3" name="title" value="J" />
             Joker
           </label>
         </li>
       </ul>
     </fieldset>
     <p>
       <label for="name">
         <span>Name: </span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="text" id="name" name="username" required />
     </p>
     <p>
       <label for="mail">
         <span>Email: </span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="email" id="mail" name="usermail" required />
     </p>
     <p>
       <label for="pwd">
         <span>Password: </span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="password" id="pwd" name="password" required />
     </p>
   </section>
   ```

6. 우리 폼의 두번째 `<section>` 은 결제정보 입니다.
   여기에서는 각각의 라벨과 함께 세 가지 독립적인 컨트롤이 포함된 `<p>` 가 있습니다.
   첫 번째는 신용카드 종류를 선택하기 위한 드롭다운 메뉴 ({{htmlelement("select")}}) 입니다.
   두번째는 신용카드 번호를 입력하기 위한 `tel` 타입의 `<input>` 요소입니다. 우리는 `number` 타입을 사용할 수 도 있지만, 우리는 번호입력기 UI(number's spinner UI)를 사용하고 싶지 않습니다.
   마지막으로 카드의 만료 날짜를 입력하기 위한 `text` 타입의 `<input>` 요소입니다. 이는 올바른 형식을 나타내는 _placeholder_ 속성과 입력된 날짜가 올바른 형식인지 검사하는 _pattern_ 속성이 포함되어 있습니다.
   이런 최신 입력 타입은 [The HTML5 input types](/ko/docs/Learn/Forms/HTML5_input_types) 에서 다시 소개됩니다.

   이전 섹션 아래에 다음 코드를 입력해주세요.

   ```html
   <section>
     <h2>Payment information</h2>
     <p>
       <label for="card">
         <span>Card type:</span>
       </label>
       <select id="card" name="usercard">
         <option value="visa">Visa</option>
         <option value="mc">Mastercard</option>
         <option value="amex">American Express</option>
       </select>
     </p>
     <p>
       <label for="number">
         <span>Card number:</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="tel" id="number" name="cardnumber" required />
     </p>
     <p>
       <label for="expiration">
         <span>Expiration date:</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input
         type="text"
         id="expiration"
         required="true"
         placeholder="MM/YY"
         pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
     </p>
   </section>
   ```

7. 마지막 섹션에서 추가할 섹션은 훨씬 간단합니다, 이 섹션에서는 데이터를 제출하기 위한 `submit` 타입의 {{htmlelement("button")}} 이 포함되어 있습니다. 이를 폼 가장 아래에 추가해주세요.

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

8. 마지막으로, 폼을 완성하기 위해 닫는 {{htmlelement("form")}} 태그를 추가해주세요.

   ```html
   </form>
   ```

아래에서 완성된 폼을 확인할 수 있습니다. (GitHub에서도 확인할 수 있습니다. — payment-form.html [source](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/payment-form.html) 와 [running live](https://mdn.github.io/learning-area/html/forms/html-form-structure/payment-form.html)를 확인 하세요):

{{EmbedLiveSample("A_payment_form","100%",620)}}

## 실력을 시험해 보세요!

이 글을 끝까지 읽었지만 가장 중요한 내용을 기억할 수 있나요? 이동하기 전에 [Test your skills: Form structure](/en-US/docs/Learn/Forms/Test_your_skills:_Form_structure) 를 방문해 확인 해보세요!

## 요약

이제 웹 폼을 올바르게 구조화하는 데 필요한 모든 지식을 갖게 되었습니다. 다음 기사에서는 사용자로부터 정보를 수집하기 위해 사용할 다양한 종류의 폼 위젯에 대해 자세히 알아볼 것입니다. 앞으로 몇 가지 기사에서 소개된 기능들을 자세히 다룰것 입니다.

## 함께 보기

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

### 고급 주제

- [How to build custom form controls](/ko/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Sending forms through JavaScript](/ko/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Property compatibility table for form widgets](/ko/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
