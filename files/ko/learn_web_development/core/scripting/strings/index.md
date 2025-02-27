---
title: 문자열 다루기 — 문자열
slug: Learn_web_development/Core/Scripting/Strings
original_slug: Learn/JavaScript/First_steps/Strings
l10n:
  sourceCommit: f3b6afa6ec60508dceeec4fd299ec4ba3995c0c2
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

다음으로, 프로그래밍에서 어떤 텍스트가 호출되는지 문자열에 대해 알아볼까요? 이 게시물에서는 문자열 작성, 문자열의 따옴표 이스케이프 및 문자열 결합과 같이 JavaScript를 배울 때 문자열에 대해 알아야 할 모든 일반적인 사항을 살펴보겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본 컴퓨터 활용능력, HTML 및 CSS에 대한 기본적인 이해, JavaScript에
        대한 기초적인 이해.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>JavaScript에서 문자열의 기초에 대해 익숙해지기.</td>
    </tr>
  </tbody>
</table>

## 단어의 힘

단어는 인간이 커뮤니케이션 함에 있어 커다란 하나의 부분이라고 할 수 있기에 매우 중요합니다. 웹은 사람들이 정보를 교환하고 공유할 수 있도록 설계된 텍스트 기반의 매체이므로, 웹에 표시되는 단어를 제어하는 것이 유용합니다. {{glossary("HTML")}}은 텍스트에 구조와 의미를 부여하고, {{glossary("CSS")}}는 텍스트의 스타일을 정밀하게 지정할 수 있게 해주며, JavaScript에는 문자열 조작, 사용자 지정 환영 메시지 및 프롬프트 생성, 필요할 때 올바른 텍스트 레이블 표시, 원하는 순서로 용어 정렬 등을 위한 다양한 기능이 포함되어 있습니다.

지금까지 우리가 여러분에게 보여 줬던 거의 모든 프로그램은 문자열 조작과 관련이 있습니다.

## 문자열 선언하기

문자열은 언뜻 보기에는 숫자와 비슷하게 다루어지지만, 자세히 살펴보면 몇 가지 눈에 띄는 차이점을 발견할 수 있습니다. [브라우저 개발자 콘솔](/ko/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)에 몇 가지 기본 행을 입력하여 익숙해지는 것부터 시작해 보겠습니다.

먼저 다음 줄을 입력합니다.

```js
const string = "The revolution will not be televised.";
console.log(string);
```

숫자와 마찬가지로 변수를 선언하고 문자열 값으로 초기화한 다음 값을 반환합니다. 여기서 유일한 차이점은 문자열을 작성할 때 값을 따옴표로 묶어야 한다는 점입니다.

이 작업을 수행하지 않거나 따옴표 중 하나를 누락하면 오류가 발생합니다. 다음 줄을 입력해 보세요.

```js example-bad
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

따옴표로 묶이지 않은 텍스트는 변수 이름, 속성 이름, 예약어 등으로 간주되므로 이러한 줄은 작동하지 않습니다. 브라우저에서 찾을 수 없는 경우 오류가 발생합니다(예: "누락됨; before 문"). 두 번째 따옴표로 표시된 것처럼 브라우저가 문자열이 시작되는 위치는 알 수 있지만 문자열의 끝을 찾을 수 없는 경우 오류("종료되지 않은 문자열 리터럴")가 발생합니다. 프로그램에서 이러한 오류가 발생하면 돌아가서 모든 문자열을 확인하여 따옴표가 누락되지 않았는지 확인하세요.

이전에 변수 문자열을 정의한 경우 다음이 작동하므로 지금 시도해 보세요.

```js
const badString = string;
console.log(badString);
```

`badString` 은 이제 `string` 과 같은 값으로 설정되었습니다.

### 따옴표, 쌍따옴표, 백틱

JavaScript에서는 따옴표(`'`), 쌍따옴표(`"`) 또는 백틱(`` ` ``)을 선택하여 문자열을 감싸을 수 있습니다. 다음 모두 사용할 수 있습니다.

```js-nolint
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);
```

문자열의 시작과 끝에 같은 문자를 사용해야 하며 그렇지 않으면 오류가 발생합니다.

```js-nolint example-bad
const badQuotes = 'This is not allowed!";
```

따옴표를 사용하여 선언한 문자열과 쌍따옴표를 사용하여 선언한 문자열은 동일하며 어떤 스타일을 사용할지는 개인 취향에 따라 다르지만, 한 가지 스타일을 선택하여 코드에서 일관되게 사용하는 것이 좋습니다.

백틱을 사용하여 선언된 문자열은 [템플릿 리터럴](/ko/docs/Web/JavaScript/Reference/Template_literals)이라고 하는 특수한 종류의 문자열입니다. 템플릿 리터럴은 대부분의 경우 일반 문자열과 비슷하지만 몇 가지 특별한 속성이 있습니다.

- [JavaScript 삽입](#embedding_javascript)을 할 수 있습니다.
- [여러 줄](#multiline_strings)로 템플릿 리터럴을 선언할 수 있습니다.

## JavaScript 삽입

템플릿 리터럴 내에서 JavaScript 변수나 표현식을 `${ }`로 감싸면 결과가 문자열에 포함됩니다.

```js
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
```

동일한 기법을 사용하여 두 변수를 결합할 수 있습니다.

```js
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```

이렇게 문자열을 서로 연결하는 것을 연결이라고 합니다.

## 컨텍스트에서 연결

연결이 실제로 어떻게 사용되는지 살펴보겠습니다.

```html
<button>Press me</button>
<div id="greeting"></div>
```

```js
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
```

{{ EmbedLiveSample('Concatenation_in_context', '100%', 50) }}

여기서는 팝업 대화 상자를 통해 사용자에게 질문에 대한 답변을 요청한 다음 입력한 텍스트를 지정된 변수(이 경우 이름)에 저장하는 {{domxref("window.prompt()", "window.prompt()")}} 함수를 사용하고 있습니다. 그런 다음 일반 인사말 메시지에 `name`을 삽입하는 문자열을 표시합니다.

### "+"를 이용한 연결

템플릿 리터럴에만 `${}`를 사용할 수 있으며 일반 문자열에는 사용할 수 없습니다. `+`연산자를 사용하여 일반 문자열을 연결할 수 있습니다.

```js
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

하지만 템플릿 리터럴을 사용하면 일반적으로 더 읽기 쉬운 코드를 얻을 수 있습니다.

### 문자열에 표현식 포함

템플릿 리터럴에 변수뿐만 아니라 JavaScript 표현식도 포함할 수 있으며, 그 결과도 결과에 포함됩니다.

```js
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."
```

## 여러줄 문자열

템플릿 리터럴은 소스 코드의 줄 바꿈을 존중하므로 다음과 같이 여러 줄에 걸쳐 있는 문자열을 작성할 수 있습니다.

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

일반 문자열을 사용하여 동일한 출력을 얻으려면 문자열에 줄 바꿈 문자(`\n`)를 포함해야 합니다.

```js
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

고급 기능에 대한 더 많은 예제와 자세한 내용은 [템플릿 리터럴](/ko/docs/Web/JavaScript/Reference/Template_literals) 참조 페이지를 참조하세요.

## 문자열에 따옴표 포함

문자열의 시작과 끝을 표시하기 위해 따옴표를 사용하는데, 문자열에 실제 따옴표를 포함하려면 어떻게 해야 할까요? 이것이 작동하지 않는다는 것을 알고 있습니다.

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

한 가지 일반적인 옵션은 다른 문자 중 하나를 사용하여 문자열을 선언하는 것입니다.

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

또 다른 옵션은 문제가 있는 따옴표를 이스케이프하는 것입니다. 문자를 이스케이프 처리한다는 것은 문자가 코드의 일부가 아닌 텍스트로 인식되도록 문자에 어떤 조치를 취한다는 뜻입니다. JavaScript에서는 문자 바로 앞에 백슬래시를 넣어 이 작업을 수행합니다. 이렇게 해보세요.

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

동일한 기법을 사용하여 다른 특수 문자를 삽입할 수 있습니다. 자세한 내용은 [이스케이프 시퀀스](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences)를 참조하세요.

## 숫자 vs. 문자열

문자열과 숫자를 연결하려고 하면 어떻게 될까요? 콘솔에서 시도해 봅시다.

```js
const name = "Front ";
const number = 242;
console.log(`${name}${number}`); // "Front 242"
```

이 경우 오류가 반환될 것으로 예상할 수 있지만 정상적으로 작동합니다. 숫자를 문자열로 표시하는 방법은 상당히 잘 정의되어 있으므로 브라우저는 숫자를 문자열로 자동 변환하고 두 문자열을 연결합니다.

문자열로 변환하려는 숫자 변수가 있거나 숫자로 변환하려는 문자열 변수가 있는 경우 다음 두 가지 구문을 사용할 수 있습니다.

- {{jsxref("Number/Number", "Number()")}} 함수는 전달된 모든 것을 숫자로 변환할 수 있는 경우 숫자로 변환합니다. 다음을 시도해 보세요:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- 반대로 {{jsxref("String/String", "String()")}} 함수는 인수를 문자열로 변환합니다. 이렇게 해보세요.

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

이러한 구조는 일부 상황에서 매우 유용할 수 있습니다. 예를 들어 사용자가 양식의 텍스트 필드에 숫자를 입력하면 문자열이 됩니다. 하지만 이 숫자를 무언가에 추가하려면 숫자여야 하므로 Number()를 통해 숫자를 전달하여 처리할 수 있습니다. [숫자 맞추기 게임의 59번째 줄](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L59)에서 정확히 이 작업을 수행했습니다.

## 마치며

지금까지 JavaScript에서 다루는 문자열의 기본에 대해 알아봤습니다. 다음 글에서는 이를 바탕으로 JavaScript에서 문자열에 사용할 수 있는 몇 가지 기본 제공 메서드와 이를 사용하여 문자열을 원하는 형태로 조작하는 방법을 살펴보겠습니다.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}
