---
title: JavaScript 재입문하기 (JS ​튜토리얼)
slug: Web/JavaScript/A_re-introduction_to_JavaScript
tags:
  - CodingScripting
  - Guide
  - Intermediate
  - Intro
  - JavaScript
  - Learn
translation_of: Web/JavaScript/A_re-introduction_to_JavaScript
original_slug: A_re-introduction_to_JavaScript
---
{{jsSidebar}}

어째서 재입문일까요? 왜냐하면, [JavaScript](/ko/docs/Glossary/JavaScript)는 [세계에서 가장 오해받고 있는 프로그래밍 언어](http://javascript.crockford.com/javascript.html)로 악명이 높기 때문입니다. 종종 장난감같다고 조롱당하기도했지만, 이 거짓말같은 단순함 아래에는 몇 가지의 강력한 언어 기능이 숨어 있습니다. Javascript는 현재 엄청나게 많은, 요즘 가장 뜨고있는 애플리케이션들에 사용되고 있어서, 웹 또는 모바일 개발자 누구에게라도 이 기술에 대한 깊은 지식이 중요한 기량이 된다는 것을 보여주고 있습니다.

이 이야기를 이해하는데는 이 언어의 역사를 먼저 보는 것이 도움이 됩니다. JavaScript는 1995년 Netscape의 엔지니어 Brendan Eich에 의해 만들어졌고, 1996년 초에 Netscape 2와 함께 처음 릴리즈 되었습니다. 이것은 원래 LiveScript로 불리기로 되어 있었습니다만 Sun Microsystem의 Java 언어의 성공에 편승해보려고 -두 언어 사이의 공통점이 매우 적음에도 불구하고- 불행이 예견된 마케팅 결정에 따라 이름이 바뀌게 됩니다. 이 결정은 역사상 유래가 없는 혼란의 근원이 되어버립니다.

몇 달 후, Microsoft는 IE3와 함께 JScript를 발표했습니다. 이 JScript는 Javascript를 정말 닮았고 호환성이 좋았습니다. 몇 달 뒤에, Netscape는 1997년에 [ECMAScript](/ko/docs/Glossary/ECMAScript) 표준의 첫번째 판이 되는 JavaScript를 유럽 표준화 단체인 [Ecma International](https://www.ecma-international.org/)에 보냅니다. 이 표준은 1999년에 [ECMAScript edition 3](https://www.ecma-international.org/publications/standards/Ecma-262.htm)에 따라 큰 규모의 개정을 거친 후, 유례없이 아주 안정된 상태로 계속 유지되고 있습니다.4번째 판은 중도 포기되었는데, 언어의 복잡성 증가에 관련한 정치적 문제 때문이었습니다. 이 4번째 판의 많은 파트들은 ECMAScript edition 5 (2009년 12월에 출간)와 6번째 개정판 규격(2015년에 출간)의 근간을 형성하고 있습니다.

> **참고:** 이제부터는 ECMAScript를 우리에게 좀 더 친근한 말인 "JavaScript"라고 부르겠습니다.

대부분의 프로그래밍 언어와는 달리, JavaScript 언어는 입출력 개념이 없습니다. 이 언어는 호스트 환경 아래에서 스크립트 언어로서 동작하도록 디자인 되어있고, 따라서 외부 세계와 통신하기위해 호스트 환경이 제공하는 메커니즘에 의존합니다. 대부분의 경우 일반적인 호스트 환경은 브라우저이지만 JavaScript 인터프리터는 Adobe Acrobat, Photoshop, SVG images, Yahoo! 위젯 엔진 등의 제품에서도 발견할 수 있고, [node.js](https://nodejs.org/) 와 같은 서버 측 환경에서도 찾을 수 있습니다. 하지만 JavaScript가 사용되는 분야는 계속 더 넓혀지고 있습니다. NoSQL 데이터베이스, [Apache CouchDB](https://couchdb.apache.org/), 임베디드 컴퓨터, GNU/Linux OS의 가장 유명한 GUI 인 [GNOME](https://www.gnome.org/) 과 같은 데스크톱 환경에서도 JavaScript가 사용됩니다.

## 개요

JavaScript는 유형 및 연산자, 표준 내장 객체 및 메서드가 있는 다중 패러다임, 동적 언어입니다. 구문은 Java 및 C 언어를 기반으로합니다. 이러한 언어의 많은 구조가 JavaScript에도 적용됩니다. JavaScript는 클래스 대신 객체 프로토 타입을 사용하여 객체 지향 프로그래밍을 지원합니다 ([프로토 타입 상속](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) 및 ES2015 [classes](/ko/docs/Web/JavaScript/Reference/Classes). JavaScript는 함수형 프로그래밍도 지원합니다. 함수는 객체이며, 함수는 실행 가능한 코드를 유지하고 다른 객체와 마찬가지로 전달 될 수 있습니다.

어떤 언어에서라도 기초가 되는 부분인 타입을 살펴보는 것부터 시작해봅시다. JavaScript 프로그램은 값을 다루고 해당 값은 모두 타입을 가지고 있습니다. JavaScript의 타입은 다음과 같습니다.

- [수 (Number)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [BigInt](/ko/docs/Web/JavaScript/Data_structures#bigint_type)
- [문자열 (String)](/ko/docs/Web/JavaScript/Reference/Global_Objects/String)
- [부울 (Boolean)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [함수 (Function)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [객체 (Object)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [기호 (Symbol)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (ES2015에 새롭게 추가)

그리고 약간 특별한 타입인 [undefined](/ko/docs/Web/JavaScript/Data_structures#undefined_type)와 [null](/ko/docs/Web/JavaScript/Data_structures#null_type)이 있습니다. 또한 객체의 특별한 종류인 [배열(Array) 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array). 그리고 자유롭게 사용할 수 있는 [날짜(Date) 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date) 와 [정규식(RegExp) 객체](ko/Web/JavaScript/Reference/Global_Objects/RegExp)가 있습니다. 그리고 기술적으로 정확히 말해 함수(Function)는 단지 객체의 특별한 타입으로 취급됩니다. 따라서 타입 구조도를 정리해보면 다음과 같습니다.

- [수 (Number)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [BigInt](/ko/docs/Web/JavaScript/Data_structures#bigint_type)
- [문자열 (String)](/ko/docs/Web/JavaScript/Reference/Global_Objects/String)
- [부울 (Boolean)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [기호 (Symbol)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [객체 (Object)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - [함수 (Function)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - [배열 (Array)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - [날짜 (Date)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
  - [정규식 (RegExp)](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [널 (Null)](/ko/docs/Web/JavaScript/Reference/Global_Objects/null)
- [정의되지 않음 (Undefined)](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)

그리고 또 몇 가지 [오류](/ko/docs/Web/JavaScript/Reference/Global_Objects/Error) 타입이 내장되어 있습니다. 그렇지만 처음 구조도를 기억하고만 있으면 다른 것들도 아주 쉽게 이해할 수 있을 것입니다.

## 수 (Numbers)

설계 명세서에 의하면 JavaScript에서 수는 ["이중정밀도 64비트 형식 IEEE 754 값"](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) (numbers between -(2^53 − 1) and 2^53 − 1)으로 정의됩니다. 이것은 몇가지 흥미로운 결과를 가져옵니다. JavaScript에는 **정수와 같은 것이 존재하지 않으므로** ({{jsxref("BigInt")}} 제외), 조금 조심해야 합니다. 이 예시를 보세요.

```js
console.log(3 / 2);             // 1.5, not 1
console.log(Math.floor(3 / 2)); // 1
```

"명백한 정수"는 사실 "암묵적으로 실수"입니다.

또한, 다음과 같은 것들을 주의하세요.

```js
0.1 + 0.2 == 0.30000000000000004;
```

실제로 정수 값은 32 비트 정수로 처리되며 일부 구현은 32 비트 정수가 아닌 숫자에 유효한 명령어를 수행 할 때까지 이러한 방식으로 저장합니다. 이는 비트 단위 작업에 중요 할 수 있습니다.

덧셈, 뺄셈, 계수 (또는 나머지) 연산을 포함하는 표준 [산술 연산자](/ko/docs/Web/JavaScript/Reference/Operators#산술_연산자)가 지원됩니다. 또한 앞에서 언급하는 것을 깜박 잊은 고급 수학 함수와 상수를 다루기 위한 [수학(Math)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)으로 불리는 내장 객체가 있습니다.

```js
Math.sin(3.5);
var circumference = 2 * Math.PI * r;
```

내장 [`parseInt()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt) 함수를 사용하여 문자열을 정수로 변환할 수 있습니다. 이는 다음과 같이 옵션으로 주어지는 두번째 매개변수를 밑으로 하여 수행할 수 있습니다.

```js
parseInt('123', 10); // 123
parseInt('010', 10); // 10
```

구형 브라우저에서 "0"으로 시작하는 문자열은 8 진수 (기수 8)로 가정되지만, 2013 년 이후에는 그렇지 않습니다. 문자열 형식이 확실하지 않으면 이전 브라우저에서 놀라운 결과를 얻을 수 있습니다.

```js
parseInt('010');  //  8
parseInt('0x10'); // 16
```

이 같은 결과는 {{jsxref("Global_Objects/parseInt", "parseInt()")}} 함수가 0으로 시작되는 문자열을 8진수로, "0x"로 시작하는 문자열은 16진수로 취급하기 때문에 발생합니다. 16진수 표기법이 그대로 유지됩니다. 8진수는 제거되었습니다.

만약 이진수를 정수로 변환하고 싶다면, 밑을 바꾸기만하면 됩니다.

```js
parseInt('11', 2); // 3
```

이와 비슷하게, 내장 함수 {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}를 사용하여 부동 소수점 숫자를 파싱 할 수 있습니다. {{jsxref("Global_Objects/parseInt", "parseInt()")}}과 달리 `parseFloat()`는 항상 10진수를 사용합니다.

단항 연산자 `+` 를 사용하여 값을 숫자로 변환 할 수도 있습니다.

```js
+ '42';   // 42
+ '010';  // 10
+ '0x10'; // 16
```

문자열이 수가 아닌 경우 [`NaN`](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN) ("Not a Number" (수가 아님)을 줄인 약자)로 불리는 특별한 값을 돌려줍니다.

```js
parseInt('hello', 10); // NaN
```

`NaN` 는 독성을 가지고 있습니다. 어떤 수학 연산의 입력값으로써 주어지면 그 결과는 역시 `NaN`가 되기 때문입니다.

```js
NaN + 5; // NaN
```

내장 [`Number.isNaN()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) 함수를 사용하여 `NaN` 여부를 안정적으로 검사할 수 있습니다. [해당 함수는 `NaN` 여부 검사를 보다 직관적인 방식으로 검사합니다.](/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN#설명)

```js
Number.isNaN(NaN); // true
Number.isNaN('hello'); // false
Number.isNaN('1'); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN([1]) // false
Number.isNaN([1,2]) // false
```

하지만 [직관적이지 않은 동작을 하는](/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN#혼란스러운_특별_케이스_행동) 전역 {{jsxref("Global_Objects/isNaN", "isNaN()")}} 함수를 사용하여 `NaN` 인지 검사하지 마세요.

```js
isNaN('hello'); // true
isNaN('1'); // false
isNaN(undefined); // true
isNaN({}); // true
isNaN([1]) // false
isNaN([1,2]) // true
```

JavaScript는 또 특별한 값 [`Infinity`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Infinity)와 `-Infinity`를 가지고 있습니다.

```js
 1 / 0; //  Infinity
-1 / 0; // -Infinity
```

내장 함수 {{jsxref("Global_Objects/isFinite", "isFinite()")}}를 사용하여 Infinity, -Infinity 및 NaN 값을 테스트 할 수 있습니다.

```js
isFinite(1 / 0);     // false
isFinite(-Infinity); // false
isFinite(NaN);       // false
```

> **참고:** {{jsxref("Global_Objects/parseInt", "parseInt()")}} 와 {{jsxref("Global_Objects/parseFloat", "parseFloat()")}} 함수는 숫자로 아닌 문자가 나올때까지 문자열을 파싱하고, 그 지점까지 파싱된 숫자를 반환합니다. 그런데 "+"연산자는 중간에 유효하지 않은 문자가 있으면 그대로 문자열을 `NaN` 으로 그냥 변환해버립니다. console에서 "10.2abc"를 파싱해보면 어떤 점이 다른지 더 쉽게 이해할 수 있습니다.

## 문자열 (Strings)

JavaScript에서 문자열은 [유니코드 문자들](/ko/docs/Web/JavaScript/Guide/Grammar_and_types)이 연결되어 만들어진 것입니다. 이는 국제화(i18n, internationalization) 하려하는 누구에게라도 환영받을만한 소식입니다. 좀 더 정확히 말하자면, 각각이 16비트 숫자로 표현된 UTF-16 코드 유닛이 길게 이어져있는 것입니다. 각 유니코드 문자는 1개나 2개의 코드 유닛으로 표현됩니다.

한 개의 문자를 나타내려면 길이가 1인 문자열을 사용하면 됩니다.

문자열의 길이를 알고싶다면, 해당 문자열의 [`length`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/length) 속성(해당 객체가 소유하고 있는 성질을 나타내는 값)에 접근하면 됩니다.

```js
'hello'.length; // 5
```

우리의 첫 JavaScript 객체입니다! 문자열도 역시 객체로 취급된다고 언급했던적이 있죠? 다음과 같이 [메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_instances)까지 있는 확실한 녀석입니다.

```js
'hello'.charAt(0); // "h"
'hello, world'.replace('hello', 'goodbye'); // "goodbye, world"
'hello'.toUpperCase(); // "HELLO"
```

## 이외의 타입들

JavaScript는 의도적으로 값이 없음을 나타내는 값인 `null`과 초기화되지 않은 값(아직 어떤 값도 할당되지 않은 변수)을 나타내는 `undefined` 타입의 값인 `undefined`를 구분합니다. 이후에 변수에 대해 다시 언급하겠지만 JavaScript에서는 변수에 값을 주지않고 선언하는 것이 가능합니다. 이럴 경우, 변수의 타입은 `undefined`이 됩니다. `undefined` 값은 실제 상수입니다.

JavaScript는 `true` 와 `false` 값(둘은 모두 키워드로 예약되어있는 값)을 가질 수 있는 부울 타입을 가지고 있습니다. 다음과 같은 규칙에 따라 어떤 임의의 값을 부울 값으로 변환할 수 있습니다.

1.  `false`, `0`, 빈 문자열 (`""`), 수가 아님을 뜻하는 `NaN`, `null`, 와 `undefined`은 모두 `false`가 됩니다.
2.  다른 모든 값은 `true`가 됩니다.

이 변환은 `Boolean()` 함수를 써서 명시적으로 이 작업을 수행하실 수 있습니다.

```js
Boolean('');  // false
Boolean(234); // true
```

하지만 이렇게 할 필요는 거의 없습니다. JavaScript는 이러한 변환 작업을 `if` 문과 같이 부울 값이 필요한 경우를 만나게 되면 자동으로 변환하기 때문입니다. 이러한 이유로 인해 우리는 가끔 부울 타입으로 변환되었을 때, `true`와 `false`이 됨을 의미하는 값들을 각각 "참 값"과 "거짓 값"으로 부를 것입니다. 또는 각각 "[참 같은 값(truthy)](/ko/docs/Glossary/Truthy)"와 "[거짓 같은 값(falsy)](/ko/docs/Glossary/Falsy)"라는 식으로 부를 수도 있습니다.

부울 연산자는 논리 연산자 `&&` (논리합), `||` (논리곱), 그리고 `!` (부정)이 지원됩니다. 아래에서 다시 언급하겠습니다.

## 변수 (Variables)

JavaScript에서 새로운 변수는 [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let), [`const`](/ko/docs/Web/JavaScript/Reference/Statements/const), [`var`](/ko/docs/Web/HTML/Element/var) 키워드로 선언됩니다.

`let`을 사용하면 블록 레벨 변수를 선언할 수 있습니다. 선언된 변수는 "변수가 선언된 블록"에서 사용할 수 있습니다.

```js
let a;
let name = 'Simon';
```

아래는 `let`으로 선언한 변수의 스코프(scope)의 예시입니다.

```js
// myLetVariable는 여기에서 보이지 *않습니다*

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable는 여기에서만 사용할 수 있습니다
}

// myLetVariable는 여기에서 보이지 *않습니다*
```

`const`는 값이 변경되지 않을 변수를 선언할 수 있게 합니다. 변수는 "변수가 선언된 블록"에서 사용할 수 있습니다.

```js
const Pi = 3.14; // 변수 Pi 설정
Pi = 1; // 상수 변수는 변경 할 수 없기 때문에 애러 발생.
```

`var` 키워드는 `let`, `const` 키워드가 가지는 제한을 가지지 않습니다. 이는 JavaScript에서 변수를 선언하는 전통적으로 유일한 방법이었기 때문입니다. `var` 키워드로 선언 된 변수는 "변수가 선언된 함수"에서 사용 할 수 있습니다.

```js
var a;
var name = 'Simon';
```

`var`로 선언한 변수의 스코프 예시입니다.

```js
// myVarVariable는 여기에서 사용 할 수 *있습니다*

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
  // myVarVariable는 함수 전체에서 사용 할 수 있습니다
}

// myVarVariable는 여기에서 사용 할 수 *있습니다*
```

변수에 값을 지정하지 않고 변수를 선언하면, 타입은 `undefined`로 지정됩니다.

JavaScript와 Java 같은 다른 언어 사이의 중요한 차이점은 블록에 스코프가 없었다는 것입니다. 함수에만 스코프가 있었습니다. 변수를 복합문에서 (예를 들어 `if` 제어 구조 내에서) `var`를 사용하여 정의한 경우 함수 전체에서 볼 수 있었습니다. 그러나 ECMAScript 2015부터 [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let) 및 [`const`](/ko/docs/Web/JavaScript/Reference/Statements/const) 선언을 사용하면 블록 스코프 변수를 만들 수 있습니다.

## 연산자 (Operators)

JavaScript의 산술 연산자로는 `+`, `-`, `*`, `/`, `%`(나머지 연산자)가 있습니다. 값은 `=` 연산자로 할당할 수 있고, `+=` 와 `-=`와 같은 복합 할당 연산자를 통해서도 할당할 수 있습니다. 이렇게 쓰인 연산자는 `x = x 연산자 y`와 같은 결과를 나타냅니다.

```js
x += 5;
x = x + 5;
```

`++` 와 `--` 를 각각 점진적인 증가와 감소에 사용할 수 있습니다. 이들은 또한 전처리 또는 후처리 연산자로 사용될 수 있습니다.

[`+` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Addition)는 문자열을 잇기도 합니다.

```js
'hello' + ' world'; // "hello world"
```

문자열에 어떤 수 (또는 다른 값)를 더하면 일단 모두 문자열로 바뀌게 됩니다. 다음 예를 보시면 무슨 얘기인지 아실 수 있을겁니다.

```js
'3' + 4 + 5;  // "345"
 3 + 4 + '5'; // "75"
```

빈 문자열에 어떤 값을 더하는 것은 해당 값을 문자열로 바꾸는 요령입니다.

JavaScript에서 [비교](/ko/docs/Web/JavaScript/Reference/Operators)는 `<`, `>`, `<=` 와 `>=` 를 통해 가능합니다. 이 연산자들은 문자열과 수 양쪽 모두에서 동작합니다. 상동은 약간 직관성이 떨어지는데 이중 등호 (`==`) 연산자는 서로 다른 타입을 비교할 경우 타입 강제 변환을 수행하기 때문에 다음과 같이 기대하지 않은 결과를 만들어내기도 합니다.

```js
123 == '123'; // true
1 == true;    // true
```

타입 강제 변환을 하지 않게 하려면, 삼중 등호 연산자 (`===`)를 사용해야 합니다.

```js
123 === '123'; // false
1 === true;    // false
```

이와 비슷하게 `!=` 와 `!==` 연산자가 있습니다.

JavaScript는 값을 [이진 비트 연산자](/ko/docs/Web/JavaScript/Reference/Operators#이진_비트_연산자)도 가지고 있습니다. 사용하고 싶을 때 언제라도 사용할 수 있도록 말이죠.

## 제어 구조

JavaScript는 C 계열의 다른 언어들과 비슷한 제어 구조를 가지고 있습니다. 조건문은 `if` 와 `else`를 지원하는데, 원하는대로 얼마든지 연결시켜서 사용할 수 있습니다.

```js
var name = 'kittens';
if (name === 'puppies') {
  name += ' woof';
} else if (name === 'kittens') {
  name += ' meow';
} else {
  name += '!';
}
name === 'kittens meow';
```

JavaScript는 `while` 반복문과 `do-while` 반복문도 사용할 수 있습니다. 첫 번째 것은 기본 반복에 유용하게 사용할 수 있고, 두 번째 것은 반복문을 적어도 한번 이상은 실행하고 싶을 때 사용할 수 있습니다.

```js
while (true) {
  // 무한루프!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScript의 [`for` 반복문](/ko/docs/Web/JavaScript/Reference/Statements/for)은 C와 Java의 반복문과 같습니다. 말하자면, 반복문에 필요한 제어 정보를 한 줄에 표현할 수 있다는 이야기지요.

```js
for (var i = 0; i < 5; i++) {
  // 내부 동작을 5번 반복합니다
}
```

JavaScript에는 두개의 중요한 for 반복문 또한 포함됩니다. 첫번째로 [`for`...`of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 입니다.

```js
for (let value of array) {
  // value로 작업을 실행합니다
}
```

그리고 [`for`...`in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 입니다.

```js
for (let property in object) {
  // object의 항목(property)으로 작업을 실행합니다
}
```

`&&` 와 `||` 연산자는 첫번째 식을 평가한 결과에 따라서 두번째 식을 평가를 실행하는 단축평가(short-circuit) 논리를 사용합니다. 이는 다음과 같이 객체에 접근하기 전에 null 여부를 검사하는데 유용하게 사용할 수 있습니다.

```js
var name = o && o.getName();
```

또는 (거짓 같은 값이 유효하지 않은 값일 때) 캐싱 값에 대해서도 사용합니다.

```js
var name = cachedName || (cachedName = getName());
```

JavaScript는 한줄로 조건문을 쓸 수 있게 해주는 삼항 연산자도 가지고 있습니다.

```js
var allowed = (age > 18) ? "yes" : "no";
```

`switch` 문은 숫자나 문자열을 기반으로 다중 분기되는 문장을 작성하는데 사용될 수 있습니다.

```js
switch (action) {
  case 'draw':
    drawIt();
    break;
  case 'eat':
    eatIt();
    break;
  default:
    doNothing();
}
```

`break` 문을 추가하지 않았다면, 다음 단계로 "넘어가서" 실행합니다. 보통은 이런 동작을 원하지 않기에, 실제로 디버깅에 용이하도록 의도한 경우라면 분기에 주석을 붙이는 게 좋습니다.

```js
switch(a) {
    case 1: // fallthrough
    case 2:
        eatIt();
        break;
    default:
        doNothing();
}
```

default 절은 선택사항입니다. switch와 case 부분에서 둘 다 표현식을 사용할 수도 있습니다. switch 부분과 case 부분의 표현식은  `===` 연산자로 비교합니다.
```js
switch(1 + 3){
    case 2 + 2:
        yay();
        break;
    default:
        neverhappens();
}
```

## 객체 (Objects)

JavaScript 객체는 간단히 이름-값 쌍(name-value pairs)의 모임입니다. 그렇기 때문에, JavaScript의 객체의 모임은 다음과 비슷하다고 할 수 있습니다.

- Python의 Dictionaries
- Perl과 Ruby의 Hashes
- C와 C++ 의 Hash tables
- Java의 HashMaps
- PHP의 Associative arrays

이 데이터 구조가 매우 광범위하게 사용된다는 사실은 활용 방도가 다양함을 입증합니다. JavaScript 내 모든 것 (코어 타입들은 제외)은 객체로 취급되기 때문에 어떤 JavaScript 프로그램도 기본적으로 해쉬 테이블을 검색하는데 필요한 출중한 성능을 가지고 있습니다. 매우 빠르기 때문에 장점이 됩니다!

값은 객체를 포함하여 모든 JavaScript 값이 될 수 있는 반면, "이름" 부분은 JavaScript 문자열입니다. 이는 사용자가 원하는 어떠한 데이터 구조로 만들 수 있도록 해줍니다.

빈 객체를 생성하는데 두 가지 방법이 있습니다.

```js
var obj = new Object();
```

그리고, 

```js
var obj = {};
```

이들은 의미적으로 동치입니다. 두 번째 방법은 객체 리터럴 구문이라고 부르며 더 편리합니다. 객체 리터럴 구문은 JSON 구문의 핵심이며 이 방법을 사용한 코드를 더 많이 볼 수 있습니다.

객체 리터럴 구문으로 객체의 전체적인 구조를 초기화 할 수 있습니다.

```js
const obj = {
  name: 'Carrot',
  _for: 'Max', // 'for'는 예약어이므로, '_for'를 대신 사용합니다.
  details: {
    color: 'orange',
    size: 12
  }
};
```

속성에 연속적으로 접근할 수 있습니다.

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

아래 예제는 객체 프로토타입(`Person`)과 프로토타입의 인스턴스(`you`)를 생성합니다.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 객체를 정의합니다.
var you = new Person('You', 24);
// "You"라는 이름의 24세인 새로운 사람을 생성 중입니다.
```

**일단 생성되면**, 객체의 속성에 다음의 두 가지 방법들 중 한 가지로 접근할 수 있습니다.

```js
// 점 표기법(dot notation)
obj.name = "Simon"
var name = obj.name;
```

그리고...

```js
// 대괄호 표기법(bracket notation)
obj["name"] = "Simon";
var name = obj["name"];
// key를 정의하기 위해 변수도 쓸수 있습니다.
var user = prompt('what is your key?')
obj[user] = prompt('what is its value?')
```

이들은 의미적으로 역시 같습니다. 두 번째 방법은 속성의 이름을 실행 시간(run-time)에 계산할 수 있는 문자열로 전달합니다. 하지만 이 방법을 사용하면 일부 JavaScript 엔진과 압축기 최적화(minifier optimizations)를 적용할수 없습니다. 하지만 [예약 키워드](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#키워드)로 정의된 이름으로 속성을 설정하거나 얻어낼 수 있습니다.

```js
obj.for = "Simon"; // 구문 오류, for 가 예약어이기 때문입니다
obj["for"] = "Simon"; // 정상 동작
```

> **참고:** ECMAScript 5부터, 예약어는 객체 항목의 이름으로 "덧붙임없이" 사용할 수 있습니다. 이 말은 객체 리터럴을 정의할 때 따옴표로 "둘러쌀" 필요가 없다는 의미입니다. ES5 [Spec](http://es5.github.io/#x7.6.1)을 참고해 보세요.

객체나 프로토타입에 대한 좀 더 상세한 내용은 [Object.prototype](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)을 참조하세요. 객체 프로토타입과 객체 프로토타입 체인에 대한 설명은 [상속과 프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)을 참조하세요.

> **참고:** ECMAScript 2015부터, 객체의 키를 대괄호 표기법(bracket notation)으로 변수를 통해 정의할 수 있습니다. 그냥 `var userPhone = {}; userPhone[phoneType] = 12345`처럼 작성하는 대신 `{[phoneType]: 12345}` 같이 작성하는 것도 가능합니다.

## 배열 (Arrays)

JavaScript에서 배열은 실제로는 특별한 타입의 객체입니다. (숫자로 나타낸 속성은 자연스럽게 `[]` 구문만을 사용해서 접근하게 되므로) 일반 객체와 많이 비슷하게 동작하지만, 이 객체는 '`length`'라는 한가지 마법적인 속성을 가집니다. 이는 항상 배열에서 가장 큰 인덱스보다 하나 더 큰 값을 가집니다.

배열을 생성하는 예전 방법은 다음과 같습니다.

```js
var a = new Array();
a[0] = "dog";
a[1] = "cat";
a[2] = "hen";
a.length // 3
```

더 편리한 배열 표기법은 배열 리터럴을 사용하는 것입니다.

```js
var a = ['dog', 'cat', 'hen'];
a.length; // 3
```

`array.length` 는 배열에 들어있는 항목의 개수가 아니라는 점을 주의해주세요. 다음과 같은 경우를 고려해보세요.

```js
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
```

배열의 length 속성은 최대 인덱스에 하나를 더한 값일 뿐이라는 걸 기억해주세요.

존재하지 않는 배열 인덱스를 참조하려고 하면 다음과 같이 `undefined` 을 얻게 됩니다.

```js
typeof a[90]; // undefined
```

`[]` 와 `length`에 관한 위의 사항들을 감안하면 `for` 반복문으로 다음과 같이 배열을 순환할 수 있습니다.

```js
for (let i = 0; i < a.length; i++) {
  // a[i] 로 무언가를 수행
}
```

ES2015는 배열과 같은 이터러블 객체를 위해 좀더 간결한 [`for`...`of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 반복문을 소개했습니다.

```js
for (const currentValue of a) {
    // currentValue로 무언가를 수행
}
```

또한 [`for`...`in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 반복문을 이용하여 배열을 반복할 수 있지만, 이 방법은 배열 요소를 반복하는게 아니라 배열 인덱스를 반복합니다. 뿐만 아니라, 누군가 `Array.prototype`에 새로운 속성을 추가하면, 그 속성들 또한 반복됩니다. 따라서 이런 반복 형태는 배열에는 추천하지 않습니다.

배열에 대한 또 다른 반복 방법은 ECMAScript 5에 추가된 [forEach()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)입니다.

```js
['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
    // currentValue나 array[index]로 무언가를 수행
}
```

배열에 항목 하나를 추가하고 싶으면 이렇게 하면 됩니다.

```js
a.push(item);
```

배열은 몇가지 메서드가 제공됩니다. [배열 메서드에 대한 전체 문서](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)를 참조하세요.

| 메서드 이름                                          | 설명                                                                                 |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `a.toString()`                                       | 각 항목에 대한 `toString()`의 출력이 콤마로 구분된 한개의 문자열을 반환합니다.       |
| `a.toLocaleString()`                                 | 각 항목에 대한 `toLocaleString()`의 출력이 콤마로 구분된 한개의 문자열을 반환합니다. |
| `a.concat(item1[, item2[, ...[, itemN]]])`           | item들이 덧붙여진 한개의 배열을 반환합니다.                                          |
| `a.join(sep)`                                        | 배열의 값들을 `sep` 인자로 구분하여 합친 한개의 문자열로 변환합니다.                 |
| `a.pop()`                                            | 배열의 마지막 항목을 반환하면서 제거합니다.                                          |
| `a.push(item1, ..., itemN)`                          | 배열의 끝에 item들을 덧붙입니다.                                                     |
| `a.shift()`                                          | 배열의 첫번째 항목을 반환하면서 제거합니다.                                          |
| `a.unshift(item1[, item2[, ...[, itemN]]])`          | 배열의 앞쪽에 item들을 덧붙입니다.                                                   |
| `a.slice(start[, end])`                              | 배열의 일부분을 새배열로 반환합니다.                                                 |
| `a.sort([cmpfn])`                                    | 옵션으로 비교용도의 함수를 입력받습니다.                                             |
| `a.splice(start, delcount[, item1[, ...[, itemN]]])` | 배열의 일부분을 제거하고 다른 항목으로 대체하여 배열을 변경합니다..                  |
| `a.reverse()`                                        | 배열의 순서를 거꾸로 배열합니다.                                                     |

## 함수 (Functions)

객체와 마찬가지로, 함수는 JavaScript를 이해하는데 핵심이 되는 컴포넌트입니다. 가장 기본적인 함수의 예시는 다음과 같습니다.

```js
function add(x, y) {
    const total = x + y;
    return total;
}
```

이 예시는 기본 함수를 보여주고 있습니다. JavaScript 함수는 0개 이상의 이름이 있는 매개변수를 가질 수 있습니다. 함수의 본체에는 갯수 제한없이 구문을 작성할 수 있고 해당 함수에 지역적인 변수를 선언할 수 있습니다. `return` 문은 어느 시점이든 값을 반환하고 함수를 종료할 수 있습니다. 리턴문이 없으면 (혹은 값이 없는 리턴이 사용되면), JavaScript는 `undefined`을 반환합니다.

이름을 가진 매개변수들은 다른 어떤 것보다도 해당 함수가 어떤 함수인지 잘 설명해줄 수 있습니다. 해당 함수가 원하는 매개변수를 전달하지 않고 함수를 호출할 수 있지만 그럴 경우 해당 변수들은 `undefined`로 설정됩니다.

```js
add(); // NaN
// undefined 값으로 대해 덧셈을 수행할 수 없습니다
```

함수가 기대하는 매개변수보다 많은 매개변수를 넘겨줄 수도 있습니다.

```js
add(2, 3, 4); // 5
// 처음의 두 수가 더해집니다. 4는 무시됨
```

이 예는 조금 어리석어 보이지만, 함수는 추가적로 전달한 매개변수를 함수 내부에서 접근할 수 있습니다. 이 [`arguments`](/ko/docs/Web/JavaScript/Reference/Functions/arguments)라는 객체는 매개변수로 전달한 모든 값을 가지고 있는 배열과 비슷한 객체입니다. 우리가 원하는만큼 값을 처리하는 add 함수로 다시 작성해보겠습니다.

```js
function add() {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum;
}

add(2, 3, 4, 5); // 14
```

확실히 `2 + 3 + 4 + 5`를 직접쓰는 것보다 유용한 함수는 아닙니다. 평균을 계산하는 함수를 만들어 보겠습니다.

```js
function avg() {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum / arguments.length;
}

avg(2, 3, 4, 5); // 3.5
```

이건 꽤 유용합니다만, 좀 번잡해보입니다. 코드 크기를 조금 더 줄이기 위해, arguments 객체의 사용을 [나머지 매개변수 문법](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)으로 변경할 수 있습니다. 이 방법으로, 코드 크기는 최소한으로 유지 하면서, 개수 제한없이 함수로 인자를 전달할수 있습니다. **나머지 매개변수 연산자**는 `...variable` 처럼 함수 매개변수 목록에 작성할 수 있으며, 함수 내부에서는 `variable` 변수를 통해 별도의 매개변수로 정의되지 않은 모든 나머지 인자를 가지는 배열에 접근할 수 있습니다.

```js
function avg(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5
```

위의 코드에서 매개변수 **args**는 함수로 전달된 모든 값을 가집니다.

나머지 매개변수 연산자는 함수 매개변수 목록의 마지막에만 위치할 수 있으며, 선언 위치 이전을 제외한 이후의 인자만을 저장합니다. 즉, *function avg(**firstValue,** ...args)* 에서 함수에 전달한 첫 번째 값은 **firstValue** 변수에 저장되며, 남은 인자들이 **args**에 저장됩니다. 이건 또 다른 유용한 언어 특성이지만 새로운 문제도 발생합니다. `avg()` 함수는 콤마로 구분된 인자 목록을 받습니다. 하지만, 배열의 평균을 알고싶은 경우라면요? 함수를 다음과 같이 재작성할 수 있습니다.

```js
function avgArray(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  return sum / arr.length;
}

avgArray([2, 3, 4, 5]); // 3.5
```

하지만 우리가 이미 만든 함수를 재사용할 수 있으면 좋을 것입니다. 다행히 JavaScript는 함수 객체라면 모두 가지는 [`apply()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 메서드를 사용해서 임의의 인수 배열을 함수에 전달할 수 있습니다.

```js
avg.apply(null, [2, 3, 4, 5]); // 3.5
```

`apply()`의 두 번째 매개변수는 인수의 배열입니다. 첫 번째 매개변수는 나중에 설명하도록 하겠습니다. 이는 함수가 역시 객체임을 명확하게 보여줍니다.

함수 호출 시 [전개 연산자(spread operator)](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)를 이용하여 `avg(...numbers)`와 같이 사용해도 똑같은 결과를 얻을 수 있습니다.

### 익명 함수

JavaScript에서는 익명 함수를 만들 수 있습니다. 실제로, 이런 이름없는 함수들은 다른 함수의 인자로 전달하거나 변수에 할당하여 호출할 수 있습니다.

```js
// 괄호 앞에 함수명이 없음을 주목해주세요.
let avg = function() {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum / arguments.length;
};
```

위에 정의된 익명 함수는 인수와 함께 `avg()`와 같은 형태로 실행할 수 있습니다. 즉, 의미적으로 `function avg()`와 같이 이름을 붙인 함수 선언과 같습니다.

JavaScript에서 익명 함수는 인자로 전달하거나 변수에 할당하는 것 외에도 단일 표현식으로 함수 선언과 동시에 호출하는 방법을 제공합니다. 이 방법을 [즉시 실행 함수 표현식(IIFE, Immediately Invoked Function Expressions)](/ko/docs/Glossary/IIFE)이라고 하며, 익명 함수를 포함한 다음과 같은 구문으로 사용할 수 있습니다.

```js
(function() {
  // …
})();
```

IIFE에 대한 더 자세한 설명은 이 입문 내용의 범위를 벗어난 것입니다. 하지만 IIFE가 어떤 상황에 특히 유용한지에 대한 좋은 예제가 [클로저](/ko/docs/Web/JavaScript/Closures) 문서의 [클로저를 이용해서 프라이빗 메서드 흉내내기](/ko/docs/Web/JavaScript/Closures#클로저를_이용해서_프라이빗_메소드_private_method_흉내내기) 구획에 나와 있습니다.

### 재귀 함수

JavaScript는 재귀적으로 함수를 호출할 수 있습니다. 이는 브라우저 DOM 등에서 볼 수 있는 트리 구조를 다루는데 유용합니다.

```js
function countChars(elm) {
  if (elm.nodeType == 3) { // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; child = elm.childNodes[i]; i++) {
    count += countChars(child);
  }
  return count;
}
```

다음의 예는 익명 함수를 사용함에 있어 잠재적인 문제점을 보여줍니다. 이름이 없으면 어떻게 재귀적으로 부를 수 있을까요? JavaScript는 이름을 붙인 [즉시 실행 함수 표현식(IIFE, Immediately Invoked Function Expressions)](/ko/docs/Glossary/IIFE)을 다음과 같이 지원합니다.

```js
var charsInBody = (function counter(elm) {
  if (elm.nodeType == 3) { // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; child = elm.childNodes[i]; i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

위와 같이 함수 표현식에 제공된 이름은 함수 자체 스코프에서만 사용할 수 있습니다. 이 특징은 엔진에 의한 최적화뿐만 아니라 코드 가독성을 높이는데 도움을 줍니다. 이 이름은 디버거와 스택 추적에서도 나타나므로 디버깅 시간을 줄일 수 있게 합니다.

JavaScript 함수는, JavaScript 내의 다른 모든 것들과 마찬가지로, 그 자체가 객체이며, 객체 섹션에서 이미 확인한 것처럼 속성을 추가하거나 변경할 수 있다는 점을 기억해주세요.

## 사용자 정의 객체

> **참고:** 본 구획의 내용은 [클래스(Classes)](/ko/docs/Web/JavaScript/Reference/Classes) 지원을 포함한 최신 JavaScript 특징은 다루지 않습니다. 더 자세한 JavaScript의 객체 지향 프로그래밍에 대한 논의는 [JavaScript 객체 소개](/ko/docs/Learn/JavaScript/Objects)와 [객체 모델의 세부 사항](/ko/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)를 참고하세요.

고전 객체지향 프로그래밍에서 객체는 데이터와 해당 데이터들을 다루는 메서드의 집합이었습니다. JavaScript는 프로토타입 기반 언어로, C++ 이나 Java에서 발견할 수 있는 클래스 구문이 없습니다(이런 이유로 클래스 구문에 익숙한 프로그래머들이 때때로 혼란을 경험합니다). 그 대신, JavaScript는 함수를 클래스로 사용합니다. 이름과 성을 필드로 가지고 있는 'person' 객체를 고려해보도록 합시다. 이름을 표시하는 두 가지 방법이 있을 수 있습니다. 예를 들어, "이름 성" 또는 "성, 이름" 이런 식으로 말이죠. 이전에 다룬 함수와 객체를 사용해서 이를 표현하면 다음과 같습니다.

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last
  }
}
function personFullName(person) {
  return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
  return person.last + ', ' + person.first
}

var s = makePerson("Simon", "Willison");
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"
```

이렇게 하면 작동하긴 하지만, 보기 안좋습니다. 이런 방법이라면 전역 이름공간(global namespace)에 관련 함수가 너무 많아집니다. 정말 우리에게 필요한 것은 객체에 함수를 붙여놓는 것입니다. 함수는 객체이기 때문에 이건 별로 어렵지 않습니다.

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName: function() {
      return this.first + ' ' + this.last;
    },
    fullNameReversed: function() {
      return this.last + ', ' + this.first;
    }
  };
}

var s = makePerson('Simon', 'Willison');
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"
```

[`this`](/ko/docs/Web/JavaScript/Reference/Operators/this) 키워드에 주목해주세요. 함수 내부에서 사용할 때 `this`는 현재 객체를 가리킵니다. 하지만, 실제로 가리키는 대상은 해당 함수를 호출하는 방식에 따라 결정됩니다. 객체에서 [점 표기법이나 대괄호 표기법](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer#프로퍼티에_접근하기)을 사용해서 호출한 경우, `this`는 해당 객체가 됩니다. 하지만, dot 표기법을 사용하지 않고 호출한 경우 `this`는 전역 객체를 참조하게 됩니다.

아래 예시와 같이 `this`가 실수의 잦은 원인이 된다는 것을 명심해주세요.

```js
var s = makePerson('Simon', 'Willison');
var fullName = s.fullName;
fullName(); // undefined undefined
```

`s.fullName()`을 이용하지 않고 `fullName()`을 단독으로 호출하면, `this`는 전역 객체로 묶이게(bind) 됩니다. `first` 또는 `last` 로 명명된 전역 변수가 없기 때문에, 각각에 대해 `undefined` 결과를 얻게 됩니다.

`this` 키워드의 이점을 사용하여 `makePerson` 함수를 개선할 수 있습니다.

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function() {
    return this.first + ' ' + this.last;
  };
  this.fullNameReversed = function() {
    return this.last + ', ' + this.first;
  };
}
var s = new Person('Simon', 'Willison');
```

위의 예시는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new) 키워드를 소개합니다. `new`는 `this`와 깊게 연관된 키워드로, 새로운 빈 객체를 만든 다음 해당 객체가 `this`로 설정된 함수를 호출합니다. `this`가 설정된 이 함수는 값을 반환하지 않고 단지 `this` 객체를 수정한다는 점을 주의해주세요. `new`와 함께 함수를 호출한 곳으로 반환하는 것은 `this` 객체입니다. 이렇게 `new` 키워드와 함께 호출하도록 작성된 함수를 생성자 함수(constructor function)라고 하며, 보통 이런 함수는 첫 문자를 대문자로 작성하여 `new`와 함께 호출해야 한다는 것을 나타냅니다.

개선된 함수는 여전히 `fullName()` 을 단독으로 호출할 때의 함정이 존재합니다.

우리의 person 객체가 점점 개선되고 있지만, 아직 좀 보기 안좋은 면이 있습니다. 매번 person 객체를 만들 때마다 내부에서 2개의 새로운 함수 객체를 만들고 있습니다. 이 코드가 객체 간에 공유된다면 더 낫지 않을까요?

```js
function personFullName() {
  return this.first + ' ' + this.last;
}
function personFullNameReversed() {
  return this.last + ', ' + this.first;
}
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}
```

더 좋아 보이네요. 메서드 함수를 한번만 만들고, 컨스트럭터 내에 해당 메서드들을 참조하도록 할당합니다. 이보다 더 개선 할 수 있을까요? 네, 그렇게 할 수 있습니다.

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function() {
  return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
};
```

`Person.prototype`은 모든 `Person` 인스턴스들 간에 공유되는 객체입니다. 이는 검색(lookup) 체인 (또는 프로토타입 체인)의 한 부분을 이룹니다. 다시 말해, `Person` 객체의 설정되지 않은 속성에 접근을 시도할 때마다, JavaScript는 `Person.prototype`에 그 속성이 존재하는지 살펴봅니다. 결과적으로 `Person.prototype`에 할당된 모든 것은 생성자를 통해 만들어진 인스턴스들이 `this` 객체를 통해 사용할 수 있게 됩니다.
 
이것은 정말 강력한 도구로, JavaScript에서는 프로토타입을 프로그램에서 언제든 변경할 수 있습니다. 기존 객체에 부가적인 메서드를 실시간으로 추가할 수 있다는 것입니다.

```js
var s = new Person("Simon", "Willison");
s.firstNameCaps(); //TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function() {
  return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"
```

흥미롭게도, JavaScript의 내장 객체의 프로토타입에도 뭔가를 더 추가할 수 있습니다. `String` 객체에 문자열 순서를 역순으로 돌려주는 메서드를 추가해 보겠습니다.

```js
var s = 'Simon';
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function() {
  var r = '';
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s.reversed(); // nomiS
```

우리가 추가한 새로운 메서드는 심지어 문자열 상수에서도 동작합니다!

```js
"This can now be reversed".reversed(); // desrever eb won nac sihT
```

기존에 언급한 바와 같이, 프로토타입은 체인의 한 부분을 이룹니다. 해당 체인의 최상위에는  `Object.prototype`이 있으며 `toString()` 메서드를 가지고 있습니다. 이 메서드는 객체를 문자열로 나타내려할 때 호출되며, 우리의 `Person` 객체의 디버깅에 유용합니다.

```js
var s = new Person("Simon", "Willison");
s.toString(); // [object Object]

Person.prototype.toString = function() {
  return '<Person: ' + this.fullName() + '>';
}

s.toString(); // "<Person: Simon Willison>"
```

`avg.apply()`의 첫번째 매개변수가 null 이었던 것을 기억해봅시다. `apply()`의 첫 번째 인자는 `this`로 취급됩니다. 예를 들어, 여기 `new`의 간단한 구현이 있습니다.

```js
function trivialNew(constructor, ...args) {
  var o = {}; // 객체를 생성
  constructor.apply(o, args);
  return o;
}
```

이 구현은, 설명하긴 어렵지만, 프로토타입 체인을 설정하지 않았으므로 `new`의 완벽한 대체물은 아닙니다. 자주 사용하진 않겠지만, 알아놓으면 좋은 내용입니다. 이 스니펫(snippet)에서 생략 부호를 포함한 매개변수 `...args`는 "[나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)"입니다. 이름과 같이 잔여 전달인자를 포함합니다.

그러므로 이렇게 호출하는 것은

```js
var bill = trivialNew(Person, 'William', 'Orange');
```

아래와 거의 동일합니다.

```js
var bill = new Person('William', 'Orange');
```

`apply()` 와 비슷하게 `this`를 다시 설정할 수 있게 하는, [`call`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)이라는 자매 함수가 있는데, 인자로 단일 배열이 아니라 확장된 인자 목록을 입력받습니다.

```js
function lastNameCaps() {
  return this.last.toUpperCase();
}
var s = new Person('Simon', 'Willison');
lastNameCaps.call(s);
// 위의 구문은 다음과 같습니다.
s.lastNameCaps = lastNameCaps;
s.lastNameCaps();
```

### 내장 함수 (Inner functions)

JavaScript의 함수 선언은 다른 함수 내부에서도 가능합니다. 우리는 `makePerson()` 함수 초기 버전에서 이것을 한번 본 적이 있습니다. JavaScript의 중첩 함수(nested functions)에서는 부모 함수 스코프에 있는 변수에 접근이 가능하다는게 중요합니다.

```js
function parentFunc() {
  var a = 1;

  function nestedFunc() {
    var b = 4; // parentFunc은 사용할 수 없는 변수
    return a + b;
  }
  return nestedFunc(); // 5
}
```

이런 특성은 유지보수가 용이한 코드를 만드는데 유용합니다. 함수가 다른 한두 개의 함수에서만 호출되며 그 외의 다른 코드에서는 사용이 안되는 경우라면 함수를 중첩시키는 것이 좋습니다. 이런 방법을 통해 전역 스코프에 함수의 개수를 늘리지 않는 것은 좋은 습관입니다.

또한 전역 변수에 대한 유혹을 뿌리칠 수 있는 좋은 대안이 됩니다. 복잡한 코드를 작성하게 될 때면 여러 함수들 간에 값을 공유하기 위한 용도로 전역 변수를 사용하고 싶어집니다. 하지만 전역 변수는 유지보수를 힘들게 합니다. 이런 상황에 중첩 함수는 부모의 변수를 공유함으로써 전역 이름공간을 더럽히지 않고 함수들을 연동할 수 있습니다. "지역 전역"이라고 불러도 괜찮겠네요. 이 기술을 사용할 때는 주의를 요하겠지만, 반드시 알아둬야 할 유용한 기술입니다.

## 클로저 (Closures)

클로저는 JavaScript가 제공하는 가장 강력한 추상화이며, 동시에 잠재적으로 가장 혼란스러울 수 있는 개념입니다. 다음 함수는 무엇을 하는 걸까요?

```js
function makeAdder(a) {
  return function(b) {
    return a + b;
  };
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
add5(6); // ?
add20(7); // ?
```

`makeAdder()` 함수는 새로운 'adder' 함수를 생성하여 반환합니다. 'adder' 함수는 한 개의 매개변수를 받아 자신이 생성될 때 받은 인자를 더하여 반환합니다.

여기서 일어나는 일은 함수 내부에서 정의된 어떤 함수가 외부 함수의 변수에 접근한다는 점에서 앞서 언급한 내장 함수에서 일어나는 일과 매우 비슷합니다. 유일하게 다른 점은 내장 함수가 반환되었기 때문에 외부 함수의 변수는 사라지는 것처럼 보인다는 것입니다. 하지만, 외부 함수의 변수들은 여전히 "존재합니다". 그렇지 않다면 'adder' 함수는 동작하지 않을 것입니다. 이에 더해서 `makeAdder()` 지역 변수의 다른 두 "복사본"이 존재합니다. 하나는 `a`는 5이고, 다른 하나의 `a`는 20이죠. 따라서 해당 함수를 호출한 결과는 다음과 같습니다.

```js
add5(6); // returns 11
add20(7); // returns 27
```

이것은 실제로 일어나는 일입니다. JavaScript 함수가 실행될 때는 언제나 '스코프' 객체가 생성되며, 해당 함수 내에서 생성된 지역 변수를 저장하고 있습니다. 스코프 객체는 함수의 매개변수로 전달한 인자와 함께 초기화됩니다. 이것은 모든 전역 변수와 함수가 들어있는 전역 객체와 비슷하지만, 두 가지 중요한 차이점이 있습니다. 첫 번째로 함수 실행이 시작될 때마다 새로운 스코프 객체가 생성됩니다. 두 번째로 (`this`나 브라우저에서 `window`로 접근 가능한) 전역 객체와 달리 이 스코프 객체들은 JavaScript 코드에서 직접 접근이 불가능합니다. 예를 들어 현재 스코프 객체의 속성을 순환할 수 있는 수단이 없습니다.

따라서 `makeAdder()`가 호출되면, 스코프 객체는 `makeAdder()` 함수에 전달한 인수인 `a` 속성을 가진 상태로 생성됩니다. `makeAdder()`는 내부에서 생성한 함수를 반환합니다. 보통 JavaScript의 쓰레기 수집기(garbage collector)는 반환 시점에 `makeAdder()`를 위해 생성된 스코프 객체를 정리합니다. 하지만 반환된 함수가 스코프 객체의 참조를 유지하고 있으므로, 결과적으로 스코프 객체는 `makeAdder()`가 반환한 함수 객체에 의해 더 이상 참조되지 않을 때까지 정리되지 않게 됩니다.

스코프 객체는 JavaScript의 객체 시스템에서 사용하는 프로토타입 체인과 유사한 스코프 체인을 형성합니다.

**클로저**는 함수와 함수에 의해 생성되는 스코프 객체를 함께 지칭하는 용어입니다. 클로저는 상태를 저장할 수 있기 때문에 보통 객체를 대신하곤 합니다. 다음 글을 통해 [클로저에 대한 여러 훌륭한 설명](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)을 확인할 수 있습니다.
