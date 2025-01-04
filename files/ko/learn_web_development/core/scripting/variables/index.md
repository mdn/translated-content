---
title: 필요한 정보를 저장하기 - 변수
slug: Learn_web_development/Core/Scripting/Variables
original_slug: Learn/JavaScript/First_steps/Variables
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}

앞의 장들을 학습하셨다면 이제 JavaScript가 무엇인지, JavaScript로 무엇을 할 수 있는지, 다른 웹 기술과 함께 JavaScript를 어떻게 사용하는지, 주요 기능이 어떻게 생겼는지에 대해 이해하셨을 것입니다. 이번 장에서는 JavaScript의 가장 기본적인 구성 요소인 구성 중 하나인 변수에 대해 배우도록 하겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식</th>
      <td>기본적인 컴퓨터 지식, 기본적인 HTML, CSS, JavaScript의 이해</td>
    </tr>
    <tr>
      <th scope="row">목표</th>
      <td>JavaScript 변수에 대해 익히기</td>
    </tr>
  </tbody>
</table>

## 필요한 도구

이번 수업에서 콘텐츠에 대한 이해도를 테스트하고자, 코드를 입력하라는 요청을 받게 될 것입니다. 만약 데스크탑 브라우저를 사용한다면, 코드를 실행하기 가장 좋은 프로그램은 브라우저의 JavaScript 콘솔창입니다. 콘솔창의 사용법에 대해 알고자 한다면 [브라우저 개발자 도구](/ko/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)를 참고하시면 됩니다.

## 변수란?

변수란, 합계나 계산에 사용되는 숫자 또는 문장의 일부로 사용되는 문자열과 같은 값을 담는 컨테이너입니다.

### 변수 예제

간단한 예시를 살펴보겠습니다.

```html
<button id="button_A">Press me</button>
<h3 id="heading_A"></h3>
```

```js
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
};
```

{{ EmbedLiveSample('Variable_example', '100%', 120) }}

이 예제에서 버튼을 누르면 일부 코드가 실행됩니다. 첫 번째 줄은 사용자가 이름을 입력하도록 요청한 화면에 창을 띄운 다음, name 변수에 입력 값을 저장하는 코드입니다. 두 번째 줄은 변수 값에서 가져온, 사용자가 입력한 이름이 포함된 환영 메시지를 창에 띄어주는 코드입니다. 세 번째 줄은 해당 이름이 페이지에 표시되는 것을 보여줍니다.

### 변수가 없다면?

변수가 왜 유용한 지 이해하려면, 변수를 사용하지 않고 이 예제 코드를 작성하는 방법에 대해 생각해 봅시다. 그러면 다음과 같이 작성할 것입니다.

```html example-bad
<button id="button_B">Press me</button>
<h3 id="heading_B"></h3>
```

```js example-bad
const buttonB = document.querySelector("#button_B");
const headingB = document.querySelector("#heading_B");

buttonB.onclick = () => {
  alert(`Hello ${prompt("What is your name?")}, nice to see you!`);
  headingB.textContent = `Welcome ${prompt("What is your name?")}`;
};
```

{{ EmbedLiveSample('Without_a_variable', '100%', 120) }}

우리가 사용하는 구문을 완전히 이해하지는 못했지만, 대략적인 개념은 이해할 수 있습니다. 변수를 사용할 수 없다면, 변수를 사용해야할 때마다 사용자에게 이름을 물어봐야 합니다.

JavaScript에 대해 더 많이 배운다면, 변수에 대해 많이 익숙해 질 수 있습니다.

변수의 특별한 점은 문자열과 숫자뿐 아니라 무엇이든 포함할 수 있다는 것입니다. 변수에는 복잡한 데이터와 심지어 전체 함수를 포함하여 놀라운 작업을 수행할 수도 있습니다. 이와 관련한 내용은 차차 배우게 될 것입니다.

> [!NOTE]
> 변수는 값을 포함합니다. 이것은 중요한 차이점입니다. 변수는 값 자체가 아니라 값을 담는 컨테이너입니다. 물건을 담을 수 있는 작은 상자와 같다고 생각하면 됩니다.

![](boxes.png)

## 변수의 선언

변수를 사용하기 위해서, 먼저 변수를 만들어야 합니다. 더 정확하게는 이를 변수 선언이라 합니다. 이를 위해 `let`이라는 키워드를 입력한 다음 원하는 변수 이름을 입력합니다.

```js
let myName;
let myAge;
```

여기서 우리는 `myName`과 `myAge`라는 두 개의 변수를 생성합니다. 웹 브라우저의 콘솔에 이 두줄을 입력합니다. 그런 다음, 본인이 원하는 변수를 하나 또는 두 개 만듭니다.

> [!NOTE]
> JavaScript에서는 모든 코드 명령어가 세미콜론 (;)으로 끝나야 합니다. 한 줄의 코드에서는 코드가 올바르게 작동할 수 있지만, 여러 줄의 코드를 함께 작성하는 경우에는 그렇지 않을 수 있습니다. 따라서, 세미콜론을 작성하는 습관을 들이는 것이 좋습니다.

예를 들어 변수 이름만 입력하면 이러한 값이 실행 환경에 존재하는지 테스트할 수 있습니다.

```js
myName;
myAge;
```

이 변수들은 값을 포함하고 있지 않은 빈 컨테이너입니다. 따라서, 변수 이름을 입력하면 `undefined`값이 반환되어야 합니다. 만약 변수가 존재하지 않으면 오류 메시지가 표시되므로 다음과 같이 입력해 봅시다.

```js
scoobyDoo;
```

> [!NOTE]
> 존재하지만 정의된 값이 없는 변수와 전혀 존재하지 않는 변수를 혼동하면 안 됩니다. 이 둘은 매우 다른 개념입니다. 위에서 본 상자 비유에서 존재하지 않는다는 것은 값을 넣을 상자(변수)가 없다는 것을 의미합니다. 정의된 값이 없다는 것은 상자는 있지만 그 안에 값이 없다는 것을 의미합니다.

## 변수의 초기화

변수를 선언한 후에는 값으로 초기화할 수 있습니다. 변수 이름 다음에 등호(`=`)를 입력한 다음 변수에 지정하려는 값을 입력하면 됩니다. 다음은 예시입니다.

```js
myName = "Chris";
myAge = 37;
```

콘솔로 돌아가 위의 코드를 입력합니다. 각 변수에 할당된 값이 콘솔에 반환되는 것을 확인해야 합니다. 다시 한 번 콘솔에 변수를 입력하여 변수 값을 반환할 수 있습니다.

```js
myName;
myAge;
```

다음과 같이 변수를 선언하고 동시에 초기화할 수 있습니다.

```js
let myDog = "Rover";
```

두 가지 작업을 두 줄로 분리하여 수행하는 것보다 빠르기 때문에 대부분의 경우 이렇게 작업합니다.

## var에 대한 참고사항

`var` 키워드를 사용하여 변수를 선언하는 다른 방법도 존재합니다.

```js
var myName;
var myAge;
```

JavaScript가 처음 만들어졌을 때는 이것이 변수를 선언하는 유일한 방법이었습니다. `var`는 혼란스럽고 오류가 발생하기 쉽습니다. 그래서 최신 버전의 JavaScript에서는 `var`와 약간 다르게 작동하는 변수를 생성하는 새로운 키워드인 `let`이 만들어졌고, 그 과정에서 문제가 해결되었습니다.

몇 가지 간단한 차이점을 아래에서 설명하겠습니다. 지금 모든 차이점을 설명하지는 않지만 JavaScript에 대해 자세히 알아가면서 차이점을 발견하게 될 것입니다. (지금 바로 자세히 알고 싶으시다면 [let 레퍼런스](/ko/docs/Web/JavaScript/Reference/Statements/let)페이지를 확인하시면 됩니다.)

우선, 변수를 선언하고 초기화하는 여러 줄의 JavaScript 프로그램을 작성하는 경우, 변수를 초기화한 후에도 실제로 var변수로 선언해도 여전히 작동합니다. 다음은 예시입니다.

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> 위의 코드는 JavaScript 콘솔에 개별 줄을 입력할 때는 작동하지 않으며, 웹 문서에서 여러 줄의 JavaScript를 실행할 때만 작동합니다.

이 기능은 **호이스팅** 때문에 작동합니다. 이에 대한 자세한 내용은 [var 호이스팅](/ko/docs/Web/JavaScript/Reference/Statements/var#var_호이스팅hoisting)을 참고하시면 됩니다.

호이스팅은 더 이상 `let`으로 작동하지 않습니다. 위의 예제에서 `var`를 `let`으로 변경하면 오류와 함께 실패합니다. 변수를 초기화한 후에 선언하면 코드가 혼란스럽고 이해하기 어려워지므로 이 점이 좋은 점입니다.

`var`를 사용하면 같은 변수를 원하는 만큼 선언할 수 있지만 let을 사용하면 선언할 수 없습니다. 다음과 같이 선언하면 됩니다.

```js
var myName = "Chris";
var myName = "Bob";
```

그러나 다음은 두 번째 줄에서 오류를 발생시킵니다.

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

대신 이 작업을 수행해야 합니다.

```js
let myName = "Chris";
myName = "Bob";
```

다시 말하지만, 이것이 현명한 코드입니다. 변수를 다시 선언하면 혼란이 커지므로 그럴 필요가 없습니다.

이러한 이유와 그 외 여러 가지 이유로 코드에 `var` 대신 `let`을 사용하는 것이 좋습니다. 구형 브라우저에 대한 지원을 명시적으로 작성하지 않는 한, 2015년부터 모든 최신 브라우저에서 `let`을 지원하므로 더 이상 `var`을 사용할 이유가 없습니다.

> [!NOTE]
> 브라우저의 콘솔에서 이 코드를 시도하는 경우 각 코드 블록을 전체적으로 복사하여 여기에 붙여넣는 것이 좋습니다. 크롬 콘솔에는 `let` 및 `const`를 사용한 변수 재선언이 허용되는 기능이 있습니다.
>
> ```plain
> > let myName = "Chris";
>   let myName = "Bob";
> // 하나의 입력으로 식별자 `myName`이 이미 선언되었다는 구문 오류가 발생
>
> > let myName = "Chris";
> > let myName = "Bob";
> // 두 개의 입력으로 둘 다 성공
> ```

## 변수 변경

변수가 어떤 값으로 초기화되면 다른 값을 지정하여 해당 값을 변경 또는 업데이트할 수 있습니다. 콘솔에 다음 줄을 입력합니다.

```js
myName = "Bob";
myAge = 40;
```

### 변수 이름에 대한 규칙

변수를 원하는 대로 이름을 부여할 수 있지만 제한이 있습니다. 일반적으로 라틴 문자(0-9, a-z, A-Z)와 밑줄 문자를 사용해야 합니다.

- 다른 문자는 오류를 유발하거나 해외 사용자가 이해하기 어려울 수 있으므로 사용해서는 안 됩니다.
- 변수 이름의 맨 앞에 밑줄(\_)을 사용하면 안 됩니다. JavaScript 구조에서 특별한 의미를 나타내는 데 사용되므로 혼동될 수 있습니다.
- 변수 이름의 맨 앞에 숫자를 사용하면 안 됩니다. 이는 허용되지 않으며 오류가 발생합니다.
- 안전한 명명법은 소위 {{Glossary("camel_case", "lower camel case")}}입니다. 여러 단어를 함께 붙일 때 첫 단어 전체에 소문자를 사용하고 그다음 단어는 대문자로 시작합니다. 지금까지 이 문서에서 변수 이름에 이 방식을 사용했습니다.
- 변수 이름은 포함된 데이터를 설명할 수 있도록 직관적으로 만들어야 합니다. 단일 문자 / 숫자 또는 긴 구절을 사용하면 안 됩니다.
- 변수는 대소문자를 구분합니다. 따라서 `myage` 와 `myAge` 는 다른 변수입니다.
- 마지막으로 JavaScript 예약어를 변수 이름으로 사용하면 안 됩니다. 여기서 예약어란 JavaScript의 실제 구문을 구성하는 단어를 의미합니다. 따라서 변수 이름으로 `var`, `function`, `let`, `for`와 같은 단어를 사용할 수 없습니다. 브라우저는 이러한 단어를 다른 코드 항목으로 인식하므로 오류가 발생합니다.

> [!NOTE]
> 피해야 할 예약어 목록은 다음 [어휘 문법 - Reserved words](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)에서 확인할 수 있습니다.

다음은 바람직한 변수 이름의 예시입니다.

```plain example-good
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```

다음은 바람직하지 않은 변수 이름의 예시입니다.

```plain example-bad
1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongstupidvariablenameman
```

위의 지침을 염두에 두고 변수 몇 개를 더 생성해 봅시다.

## 변수의 종류

변수에 저장할 수 있는 데이터 유형에는 몇 가지가 있습니다. 이 섹션에서는 이를 간단히 설명하고 이후 자세히 살펴보겠습니다.

지금까지 두 가지 데이터 유형을 살펴봤지만 다른 유형들도 있습니다.

### 숫자

30과 같은 숫자(정수)나 2.456(부동소수점 또는 부동 소수점 숫자)와 같은 숫자를 변수에 저장할 수 있습니다. 다른 프로그래밍 언어와 달리 JavaScript에서는 변수 유형을 선언할 필요가 없습니다. 변수에 숫자 값을 지정할때는 따옴표를 포함하지 않습니다.

```js
let myAge = 17;
```

### 문자열

문자열은 텍스트 조각입니다. 변수에 문자열 값을 지정할 때는 작은따옴표(')나 큰따옴표(")로 묶어야 합니다. 그렇지 않으면 JavaScript는 다른 변수 이름으로 해석하게 됩니다.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### 불리언

불리언은 `true` 이나 `false`라는 값을 가지는 참 또는 거짓을 표현하는 데이터 유형입니다. 일반적으로 조건을 테스트하는 데 사용되며 그 후 코드가 조건에 따라 실행됩니다. 다음은 간단한 예시 입니다.

```js
let iAmAlive = true;
```

하지만 다음과 같은 방식으로 더 많이 사용됩니다.

```js
let test = 6 < 3;
```

위의 코드는 "작음" 연산자(`<`)를 사용하여 6이 3보다 작은지 테스트합니다. 예상대로 6이 3보다 작지 않으므로 `false`를 반환합니다. 이 과정의 뒷부분에서 이러한 연산자에 대해 더 많이 배우게 될 것입니다.

### 배열

배열은 대괄호로 묶고 쉼표로 구분한 여러 값을 포함하는 단일 객체입니다. 다음 코드를 콘솔에 입력해 봅시다.

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

이러한 배열이 정의되면 배열 내 위치별로 각 값에 접근할 수 있습니다. 다음 코드를 입력해 봅시다.

```js
myNameArray[0]; // 위치 0의 Chris를 반환
myNumberArray[2]; // 위치 2의 40을 반환
```

대괄호에 반환하려는 값의 위치에 해당하는 인덱스 값을 넣습니다. 위의 코드에 따라 JavaScript에서 배열은 첫 번째 요소가 인덱스 0에 있는 제로 인덱스 배열이라는 것을 알 수 있습니다.

배열에 대한 더 많은 것을 [배열](/ko/docs/Learn/JavaScript/First_steps/Arrays)에서 확인할 수 있습니다.

### 객체

프로그래밍에서 객체는 실제 사물을 모델링하는 코드 구조입니다. 예를 들어 상자를 나타내는 간단한 객체는 너비, 길이, 높이 등의 정보가 포함되어 있거나 사람을 나타내는 객체는 이름, 키, 몸무게, 사용 언어, 인사하는 방법 등에 대한 데이터가 포함되어 있을 수 있습니다.

콘솔에 다음 코드를 입력해 봅시다.

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

객체에 저장된 정보를 검색하려면 아래 코드를 사용합니다.

```js
dog.name;
```

지금은 객체에 대해 더 이상 살펴보지 않으므로 [향후 과정](/ko/docs/Learn/JavaScript/Objects)에서 객체에 대해 더 많이 배울 수 있습니다.

## 동적 타입

JavaScript는 동적 타입 언어입니다. 다른 언어와 달리 변수에 포함될 데이터의 유형(숫자, 문자열, 배열 등)을 지정할 필요가 없습니다.

예를 들어, 변수를 선언하고 따옴표로 묶은 값을 지정하면 브라우저는 변수의 값을 문자열로 인식합니다.

```js
let myString = "Hello";
```

따옴표로 묶인 값이 숫자로만 되어 있더라도 숫자가 아닌 문자열이므로 주의해야 합니다.

```js
let myNumber = "500"; // 문자열 변수
typeof myNumber;
myNumber = 500; // 숫자 변수
typeof myNumber;
```

위의 네 줄의 코드를 하나씩 콘솔에 입력하여 결과가 무엇인지 확인합니다. 여기에서 `typeof()`라는 특수 연산자를 사용하고 있음을 알 수 있습니다. 이 연산자는 입력한 변수의 데이터 유형을 반환합니다. 이 연산자를 처음으로 호출할 때는 문자열을 반환해야 하는데, 이때 `myNumber` 변수에는 `'500'`라는 문자열이 포함되어 있기 때문입니다. 두 번째로 호출하면 무엇이 반환되는지 확인해 봅시다.

## JavaScript의 상수

변수뿐만 아니라 상수도 선언할 수 있습니다. 상수는 변수와 비슷합니다.

- 상수는 선언할 때 초기화해야 합니다.
- 상수를 초기화한 후에는 새 값을 할당할 수 없습니다.

예를 들어 `let`을 사용하면 변수를 초기화하지 않고 선언할 수 있습니다.

```js
let count;
```

`const`를 사용하여 위의 코드를 실행하면 오류가 발생합니다.

```js example-bad
let count;
```

마찬가지로 `let`을 사용하면 변수를 초기화한 다음 새 값을 할당할 수 있습니다. 이를 변수 재할당이라고도 합니다.

```js
let count = 1;
count = 2;
```

`const`를 사용하여 위의 코드를 실행하면 오류가 발생합니다.

```js example-bad
const count = 1;
count = 2;
```

JavaScript에서 상수는 항상 같은 값의 이름을 지정해야 하지만, 상수가 지정하는 값의 내용을 변경할 수 있습니다. 숫자나 불리언과 같은 단순한 유형에는 유용한 구분이 아니지만 객체를 생각하면 됩니다.

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

`const`를 사용하여 선언된 객체의 속성을 업데이트, 추가 또는 제거할 수 있는데 이는 객체의 내용이 변경되더라도 상수가 여전히 동일한 객체를 가리키고 있기 때문입니다.

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

## const를 사용하는 경우와 let을 사용하는 경우

`let`만큼 많은 것을 할 수 없다면 왜 `let`대신 `const`를 사용할까요? 사실 `const`는 매우 유용합니다. `const`를 사용하여 값의 이름을 지정하면 코드를 보든 모든 사람에게 이 이름이 다른 값에 할당되지 않음을 알릴 수 있습니다. 이 이름을 볼 때마다 무엇을 가리키는지도 알 수 있습니다.

이 장에서는 `let`을 사용할 때와 `const`를 사용할 때 다음과 같은 원칙을 적용합니다.

가능하면 `const`를 사용하고 꼭 필요한 경우 `let`을 사용합니다.

변수를 선언할 때 초기화할 수 있고, 나중에 재할당할 필요가 없다면 상수로 만들면 됩니다.

## 실력 테스트

이 문서를 끝까지 읽으셨지만, 중요한 것들을 여전히 기억하고 계신가요? 다음 장으로 넘어가기 전에 이 장의 내용을 잘 학습하고 이해하셨는지 확인할 수 있는 [실력 테스트: 변수](/ko/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables)가 있습니다.

## 요약

지금까지 JavaScript의 변수와 생성 방법에 대해 알아보았습니다. 다음 장에서는 JavaScript에서 숫자에 관해 자세히 살펴보고 기본 계산하는 방법을 알아보겠습니다.

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}
