---
title: JavaScript 언어 개요
slug: Web/JavaScript/Language_overview
l10n:
  sourceCommit: 5635446aa0127d686183ddd4fd5adcc34be567da
---

{{jsSidebar}}

JavaScript는 타입 및 연산자, 표준 내장 객체 및 메소드를 포함하는 다중 패러다임 동적 언어입니다. 문법은 Java 및 C 언어를 기반으로 합니다. 해당 언어들의 많은 구조가 JavaScript에도 적용됩니다. JavaScript는 [객체 프로토타입](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) 및 클래스를 사용하여 객체 지향 프로그래밍을 지원합니다. 또한 함수는 표현식을 통해 쉽게 생성되고 다른 객체처럼 전달될 수 있는 [first-class](/ko/docs/Glossary/First-class_Function)이므로 함수형 프로그래밍을 지원합니다.

이 페이지는 C 또는 Java와 같은 다른 언어에 대한 배경 지식이 있는 독자를 위해 작성된, 다양한 JavaScript 언어 기능에 대한 간략한 개요를 제공합니다.

## 데이터 타입

모든 언어의 구성 요소인 타입을 살펴보는 것으로 시작하겠습니다. JavaScript 프로그램은 값을 조작하며, 이러한 값은 모두 타입에 속합니다. JavaScript는 7가지 기본 유형을 제공합니다.

- [Number](/ko/docs/Web/JavaScript/Data_structures#number_type): 매우 큰 정수를 제외한 모든 숫자값(정수 및 부동 소수점)에 사용됩니다.
- [BigInt](/ko/docs/Web/JavaScript/Data_structures#bigint_type): 임의의 큰 정수에 사용됩니다.
- [String](/ko/docs/Web/JavaScript/Data_structures#string_type): 텍스트를 저장하는 데 사용됩니다.
- [Boolean](/ko/docs/Web/JavaScript/Data_structures#boolean_type): `true` 및 `false`, 일반적으로 조건 논리에 사용됩니다.
- [Symbol](/ko/docs/Web/JavaScript/Data_structures#symbol_type): 충돌하지 않는 고유 식별자를 만드는 데 사용됩니다.
- [Undefined](/ko/docs/Web/JavaScript/Data_structures#undefined_type): 변수에 값이 할당되지 않았음을 나타냅니다.
- [Null](/ko/docs/Web/JavaScript/Data_structures#null_type): 의도적으로 값이 없음을 나타냅니다.

다른 모든 것은 [객체](/ko/docs/Web/JavaScript/Data_structures#objects)라고 합니다. 일반적인 객체 타입은 다음과 같습니다.

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Date")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

함수는 JavaScript의 특별한 데이터 구조가 아닙니다. 호출할 수 있는 특별한 타입의 객체일 뿐입니다.

### 수 (Numbers)

JavaScript에는 Number와 BigInt라는 두 가지 내장 숫자 타입이 있습니다.

숫자 타입은 [이중정밀도 64비트 부동소수점 형식(IEEE 754)의 값](https://en.wikipedia.org/wiki/Double_precision_floating-point_format)이며, 즉, [-(2<sup >53</sup> − 1)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER)와 [2<sup>53</sup> − 1](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)사이에서 정수를 손실 없이 안전하게 표현할 수 있습니다. 정밀도 및 부동 소수점 숫자는 최대 [1.79 × 10<sup>308</sup>](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE)까지 저장할 수 있습니다. 숫자 내에서 JavaScript는 부동 소수점 숫자와 정수를 구분하지 않습니다.

```js
console.log(3 / 2); // 1.5, not 1
```

"명백한 정수"는 사실 "암묵적으로 float(실수)"입니다. IEEE 754 인코딩으로 인해 때때로 부동 소수점 산술연산이 정확하지 않을 수 있습니다.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

비트 연산과 같이, 정수가 필요한 연산의 경우, 숫자가 32비트 정수로 변환됩니다.

[Number 리터럴(literals)](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals)에는 기본(2진수, 8진수, 10진수 또는 16진수) 또는 지수 접미사를 나타내는 접두사를 가질 수도 있습니다.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

[BigInt](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 타입은 임의 길이의 정수입니다. 그 동작은 C의 정수 타입(예: 나누기가 0으로 자르기)과 유사하지만, 무한정 커질수 있다는 점과 다릅니다. BigInt는 숫자 리터럴과 `n` 접미사로 지정됩니다.

```js
console.log(-3n / 2n); // -1n
```

더하기, 빼기, 나머지 산술 등을 포함한 표준 [산술 연산자](/ko/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)가 지원됩니다. BigInt와 숫자는 산술 연산에서 혼합될 수 없습니다.

{{jsxref("Math")}} 객체는 표준 수학 함수와 상수를 제공합니다.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

문자열을 숫자로 변환하는 세 가지 방법이 있습니다.

- {{jsxref("Global_Objects/parseInt", "parseInt()")}}, 문자열에서 정수를 구문 분석합니다.
- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}, 부동소수점 숫자에 대한 문자열을 구문 분석합니다.
- [`Number()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) 함수는 문자열을 숫자 리터럴인 것처럼 구문 분석하고 다양한 숫자 표현을 지원합니다.

[단항 더하기 `+`](/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus)를 `Number()`의 줄임말로 사용할 수도 있습니다.

숫자 값에는 {{jsxref("NaN")}}("Not a Number"의 줄임말) 및 {{jsxref("Infinity")}}도 포함됩니다. 많은 "잘못된 수학" 연산은 `NaN`을 반환합니다. 예를 들어, 숫자가 아닌 문자열을 구문 분석하려고 하거나 [`Math.log()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/log)를 음수 값으로 지정합니다. 0으로 나누면 'Infinity'(양수 또는 음수)가 생성됩니다.

`NaN`은 전염성이 있습니다. 수학 연산의 피연산자로 제공하면 결과도 `NaN`이 됩니다. `NaN`은 자체와 같지 않은 JavaScript의 유일한 값입니다(IEEE 754 명세에 따름).

### 문자열 (Strings)

JavaScript의 문자열은 유니코드 문자의 시퀀스입니다. 이는 국제화를 다루어야 했던 모든 사람에게 반가운 소식이 될 것입니다. 더 정확하게는 [UTF-16 encoded](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)를 사용합니다.

```js
console.log("Hello, world");
console.log("你好，世界！"); // 거의 모든 유니코드 문자를 문자 그대로 문자열 리터럴로 작성할 수 있습니다.
```

문자열은 작은따옴표나 큰따옴표로 작성할 수 있습니다. JavaScript는 문자와 문자열을 구분하지 않습니다. 단일 문자를 나타내려면, 해당 단일 문자로 구성된 문자열을 사용하면 됩니다.

```js
console.log("Hello"[1] === "e"); // true
```

문자열의 길이([코드 단위](/ko/docs/Glossary/Code_unit))를 찾으려면, [`length`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/length) 속성에 접근하세요.

문자열에는 문자열을 조작하고 문자열에 대한 정보에 접근하는 [유틸리티 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)가 있습니다. 모든 원시 타입은 설계 상 변경할 수 없기 때문에, 이러한 메서드는 새 문자열을 반환합니다.

`+` 연산자는 문자열에 대해 오버로드됩니다. 피연산자 중 하나가 문자열이면, 숫자 추가 대신 문자열 연결을 수행합니다. 특별한 [템플릿 문자열](/ko/docs/Web/JavaScript/Reference/Template_literals) 구문을 사용하면 표현식이 포함된 문자열을 더 간결하게 작성할 수 있습니다. Python의 f-문자열이나 C#의 보간된 문자열과 달리, 템플릿 리터럴은 백틱(작은따옴표나 큰따옴표가 아님)을 사용합니다.

```js
const age = 25;
console.log("I am " + age + " years old."); // 문자열 연결
console.log(`I am ${age} years old.`); // 템플릿 리터럴
```

### 이외의 타입들

JavaScript는 의도적으로 값이 없음을 나타내는 (그리고 `null` 키워드를 통해서만 접근할 수 있는) 값인 [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null)과 값이 없음을 나타내는 `undefined`를 구분합니다. `undefined`을 얻을 수 있는 방법에는 여러 가지가 있습니다.

- 값이 없는 [`return`](/ko/docs/Web/JavaScript/Reference/Statements/return)문 (`return;`)은 암시적으로 `undefined`를 반환합니다.
- 존재하지 않는 [object](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object) (`obj.iDontExist`)에 접근하면 `undefined`를 반환합니다.
- 초기화 없는 변수 선언 (`let x;`)은 암시적으로 변수를 `undefined`로 초기화합니다.

JavaScript에는 `true` 및 `false` 값이 가능한 불리언(Boolean) 타입이 있습니다. 둘 다 키워드입니다. 다음 규칙에 따라 모든 값을 불리언 값으로 변환할 수 있습니다.

1. `false`, `0`, 빈 문자열 (`""`),`NaN`, `null`, 와 `undefined`은 모두 `false`가 됩니다.
2. 다른 모든 값은 `true`가 됩니다.

이 변환은 [`Boolean()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) 함수를 써서 명시적으로 이 작업을 수행하실 수 있습니다.

```js
Boolean(""); // false
Boolean(234); // true
```

하지만 이렇게 할 필요는 거의 없습니다. JavaScript는 이러한 변환 작업을 `if` 문([제어 구조](#제어_구조) 참고)과 같이 불리언 값이 필요한 경우를 만나게 되면 자동으로 변환하기 때문입니다. 이러한 이유로 인해 우리는 때때로 불리언 컨텍스트에서 사용될 때 각각 `true`, `false`가 되는 "[참 같은 값(truthy)](/ko/docs/Glossary/Truthy)"와 "[거짓 같은 값(falsy)](/ko/docs/Glossary/Falsy)" 에 대해 이야기할 것입니다.

불리언 연산자는 논리 연산자 `&&` (논리합), `||` (논리곱), 그리고 `!` (부정)이 지원됩니다. [연산자](#연산자)를 참조하세요.

기호(Symbol) 타입은 종종 고유한 식별자를 만드는 데 사용됩니다. [`Symbol()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 함수로 만든 모든 기호(Symbol)는 고유함을 보장합니다. 또한, 공유 상수인 등록된 기호와 특정 작업에 대한 "프로토콜"로 언어에서 사용되는 잘 알려진 기호가 있습니다. [기호 참조](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)에서 자세한 내용을 읽을 수 있습니다.

## 변수 (Variables)

JavaScript의 변수는 [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let), [`const`](/ko/docs/Web/JavaScript/Reference/Statements/const) 및 [`var`](/ko/docs/Web/JavaScript/Reference/Statements/var)의 세 가지 키워드 중 하나를 사용하여 선언됩니다.

`let`을 사용하면 블록 레벨 변수를 선언할 수 있습니다. 선언된 변수는 "변수가 선언된 블록"에서 사용할 수 있습니다.

```js
let a;
let name = "Simon";

// myLetVariable는 여기에서 보이지 *않습니다*

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable는 여기에서만 사용할 수 있습니다
}

// myLetVariable는 여기에서 보이지 *않습니다*
```

`const`는 값이 변경되지 않을 변수를 선언할 수 있게 합니다. 변수는 "변수가 선언된 블록"에서 사용할 수 있습니다.

```js
const Pi = 3.14; // 변수 Pi 설정
console.log(Pi); // 3.14
```

`const`로 선언된 변수는 재할당할 수 없습니다.

```js example-bad
const Pi = 3.14;
Pi = 1; // 상수 변수를 변경할 수 없기 때문에 오류가 발생합니다.
```

`const` 선언은 재할당만 방지합니다. 객체인 경우 변수 값의 변형을 방지하지 않습니다.

```js
const obj = {};
obj.a = 1; // 에러 없음
console.log(obj); // { a: 1 }
```

`var` 선언은 경악할 만한 동작(예: 블록 범위가 아님)을 가질 수 있으며, 최신 JavaScript 코드에서는 권장되지 않습니다.

값을 할당하지 않고 변수를 선언하면, 그 값은 `undefined`입니다. 어차피 나중에 변경할 수 없기 때문에, 초기화해주는 것없이 `const` 변수를 선언할 수 없습니다.

`let` 및 `const` 선언 변수는 여전히 정의된 전체 범위를 차지하며, 실제 선언 줄 이전의 [일시적 사각지대(temporal dead zone)](/ko/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)으로 알려진 영역에 있습니다. 여기에는 다른 언어에서는 발생하지 않는 변수 섀도잉과 흥미로운 상호 작용이 있습니다.

```js
function foo(x, condition) {
  if (condition) {
    console.log(x);
    const x = 2;
    console.log(x);
  }
}

foo(1, true);
```

대부분의 다른 언어에서, `const x = 2` 행 이전에 `x`가 여전히 상위 범위의 매개변수 `x`를 참조해야 하기 때문에 "1"과 "2"를 기록합니다. JavaScript에서는 각 선언이 전체 범위를 차지하기 때문에 첫 번째 `console.log`에 "초기화 전에 'x'에 접근할 수 없습니다." 라는 오류가 발생합니다. 자세한 내용은 [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let) 페이지를 참조하세요.

JavaScript는 동적 타입 언어입니다. 타입 ([이전 섹션](#데이터_타입)에서 설명한 대로)은 변수가 아닌 값과만 연결됩니다. `let` 선언 변수의 경우 항상 재할당을 통해 타입을 변경할 수 있습니다.

```js
let a = 1;
a = "foo";
```

## 연산자

JavaScript의 산술 연산자로는 `+`, `-`, `*`, `/`, `%`(나머지 연산자), `**`(지수 연산자)가 있습니다. 값은 `=` 연산자로 할당할 수 있고, `+=` 와 `-=`와 같은 복합 할당 연산자를 통해서도 할당할 수 있습니다. 이렇게 쓰인 연산자는 `x = x 연산자 y`와 같은 결과를 나타냅니다.

```js
x += 5;
x = x + 5;
```

`++` 와 `--` 를 각각 증가와 감소에 사용할 수 있습니다. 이들은 또한 전처리 또는 후처리 연산자로 사용될 수 있습니다.

[`+` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Addition)는 문자열을 연결합니다.

```js
"hello" + " world"; // "hello world"
```

숫자(또는 다른 값)에 문자열을 추가하면 모든 것이 먼저 문자열로 변환됩니다. 이것은 당신을 넘어뜨릴 수 있습니다.

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

무언가에 빈 문자열을 추가하는 것은 해당 값을 문자열로 바꾸는 요령입니다.

JavaScript의 [비교](/ko/docs/Web/JavaScript/Reference/Operators#relational_operators)는 `<`, `>`, `<=` 및 `>=` 를 사용해 만들 수 있고, 이 연산자들은 문자열과 수 양쪽 모두에서 동작합니다. 동등성을 위해 [이중 등호 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Equality)는 다른 타입을 제공하는 경우 타입 강제 변환을 수행하며, 때로는 흥미로운 결과를 보여줍니다. 반면에, [삼중 등호 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality)는 타입 강제 변환을 시도하지 않으며 일반적으로 선호하는 방법입니다.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

이중 등호와 삼중 등호에는 `!=` 와 `!==` 같은 부등호도 있습니다.

JavaScript에는 [비트 연산자](/ko/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) 및 [논리 연산자](/ko/docs/Web/JavaScript/Reference/Operators#binary_logical_operators)도 있습니다. 특히 논리 연산자는 불리언 값으로만 작동하지 않고 값의 "진실성"에 따라 작동합니다.

```js
const a = 0 && "Hello"; // 0은 "falsy" 이라서, 0입니다.
const b = "Hello" || "world"; // "Hello"와 "world" 모두 "truthy"이라서, "Hello" 입니다.
```

`&&` 및 `||` 연산자는 단락 논리를 사용합니다. 즉, 두 번째 피연산자를 실행할지 여부는 첫 번째 피연산자에 따라 결정됩니다. 이는 속성에 접근하기 전에 null 객체를 확인하는 데 유용합니다.

```js
const name = o && o.getName();
```

또는 캐싱 값의 경우(거짓 값이 유효하지 않은 경우)

```js
const name = cachedName || (cachedName = getName());
```

전체 연산자 목록은 [가이드 페이지](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators) 또는 [참조 섹션](/ko/docs/Web/JavaScript/Reference/Operators)을 참조하세요. 특히 [연산자 우선순위](/ko/docs/Web/JavaScript/Reference/Operators/Operator_precedence)에 관심이 있을 수도 있습니다.

## 문법

JavaScript 문법은 C 계열과 매우 유사합니다. 언급할 가치가 있는 몇 가지 사항이 있습니다.

- [식별자](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)는 유니코드 문자를 포함할 수 있지만, [예약어](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) 중 하나일 수는 없습니다.
- [주석](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#comments)은 일반적으로 `//` 또는 `/* */`을 사용합니다. `#`을 사용하는 Perl, Python, and Bash와 같은 다른 많은 스크립팅 언어와는 다릅니다.
- 세미콜론은 JavaScript에서 선택 사항입니다. 언어는 필요할 때 [자동으로 삽입](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)합니다. 그러나 Python과 달리 세미콜론은 여전히 문법의 일부이므로 주의해야 할 사항이 있습니다.

JavaScript 문법에 대한 자세한 내용은 [어휘 문법 참조 페이지](/ko/docs/Web/JavaScript/Reference/Lexical_grammar)를 참조하세요.

## 제어 구조

JavaScript는 C 계열의 다른 언어들과 비슷한 제어 구조를 가지고 있습니다. 조건문은 [`if` 및 `else`](/ko/docs/Web/JavaScript/Reference/Statements/if...else)로 지원되며, 함께 연결할 수 있습니다.

```js
let name = "kittens";
if (name === "puppies") {
  name += " woof";
} else if (name === "kittens") {
  name += " meow";
} else {
  name += "!";
}
name === "kittens meow";
```

JavaScript에는 `elif`가 없으며, `else if`는 단일 `if` 문으로 구성된 `else` 분기에 불과합니다.

JavaScript는 [`while`](/ko/docs/Web/JavaScript/Reference/Statements/while) 반복문과 [`do...while`](/ko/docs/Web/JavaScript/Reference/Statements/do...while) 반복문도 사용할 수 있습니다. 전자는 기본 반복에 유용하게 사용할 수 있고, 후자는 반복문을 적어도 한번 이상은 실행하고 싶을 때 사용할 수 있습니다.

```js
while (true) {
  // 무한루프!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScript의 [`for` 반복문](/ko/docs/Web/JavaScript/Reference/Statements/for)은 C와 Java의 반복문과 같습니다. 말하자면, 반복문에 필요한 제어 정보를 한 줄에 표현할 수 있다는 이야기지요.

```js
for (let i = 0; i < 5; i++) {
  // 내부 동작을 5번 반복합니다
}
```

JavaScript에는 두개의 중요한 for 반복문 또한 포함됩니다. [iterables](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)(특히 배열)를 반복하는 [`for...of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of), 객체의 모든 [enumerable](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) 속성을 방문하는 [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in)입니다.

```js
for (const value of array) {
  // value로 작업 수행합니다.
}

for (const property in object) {
  // 객체 프로퍼티로 작업 수행합니다.
}
```

`switch` 문은 동등 검사를 기반으로 여러 분기에 사용할 수 있습니다.

```js
switch (action) {
  case "draw":
    drawIt();
    break;
  case "eat":
    eatIt();
    break;
  default:
    doNothing();
}
```

C와 유사하게, case 절은 [labels](/ko/docs/Web/JavaScript/Reference/Statements/label)과 개념적으로 동일하므로, `break` 문을 추가하지 않으면 실행이 다음 단계로 "넘어갑니다". 그러나 이들은 실제로 점프 테이블이 아닙니다. 문자열이나 숫자 리터럴 뿐만 아니라, 모든 표현식이 `case`절의 일부가 될 수 있으며, 하나가 일치하는 값과 같을 때까지 하나씩 평가됩니다. `===` 연산자를 사용하여 둘 사이에서 비교가 이루어집니다.

Rust와 같은 일부 언어와 달리, 제어 흐름 구조는 JavaScript의 문입니다. 즉, `const a = if (x) { 1 } else { 2 }`와 같이 변수에 할당할 수 없습니다.

JavaScript 오류는 [`try...catch`](/ko/docs/Web/JavaScript/Reference/Statements/try...catch)문을 사용하여 처리됩니다.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

에러(Error)는 [`throw`](/ko/docs/Web/JavaScript/Reference/Statements/throw) 문을 사용하여 발생할 수 있습니다. 많은 기본 제공 작업도 에러가 발생할 수 있습니다.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site directory does not exist");
  }
}
```

일반적으로, 방금 잡은 오류의 타입을 알 수 없습니다. `throw` 문에서 무엇이든 발생할 수 있기 때문입니다. 그러나 일반적으로 위의 예와 같이 [`Error`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Error) 인스턴스라고 가정할 수 있습니다. [`TypeError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypeError) 및 [`RangeError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RangeError)와 같은 `Error` 내장 하위 클래스가 있는데, 오류에 대한 추가적인 의미체계를 제공하는 데 사용할 수 있습니다. JavaScript에는 조건부 포착이 없습니다. 한 가지의 타입의 오류만 처리하려면, 모든 것을 포착하고 [`instanceof`](/ko/docs/Web/JavaScript/Reference/Operators/instanceof)를 사용해 오류 타입을 식별해야 하고, 그런 다음 다른 case를 다시 던져야 합니다.

```js
try {
  buildMySite("./website");
} catch (e) {
  if (e instanceof RangeError) {
    console.error("Seems like a parameter is out of range:", e);
    console.log("Retrying...");
    buildMySite("./website");
  } else {
    // 다른 에러 타입을 처리하는 방법을 모릅니다.
    // 호출 스택의 다른 부분에서 에러를 잡아서 처리할 수 있도록 던지세요.
    throw e;
  }
}
```

호출 스택의 `try...catch`에서 에러를 포착하지 못하면, 프로그램이 종료됩니다.

제어 흐름문의 전체 목록은 [참조 섹션](/ko/docs/Web/JavaScript/Reference/Statements)을 참조하세요.

## 객체 (Objects)

JavaScript 객체는 간단히 이름-값 쌍(name-value pairs)의 모임입니다. 따라서 JavaScript의 객체의 모임은 다음과 비슷합니다.

- Python의 Dictionaries.
- Perl과 Ruby의 Hashes.
- C와 C++ 의 Hash tables.
- Java의 HashMaps.
- PHP의 연관 배열(Associative arrays).

JavaScript의 객체는 해시(hashes)입니다. 정적으로 타입이 지정된 언어의 객체와 달리, JavaScript의 객체는 모양이 고정되어 있지 않습니다. 속성은 언제든지 추가, 삭제, 재정렬, 변경 또는 동적으로 쿼리할 수 있습니다. 객체 키는 항상 [strings](/ko/docs/Web/JavaScript/Reference/Global_Objects/String) 또는 [기호(symbols)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)입니다. 정수인 배열 인덱스도 실제로는 문자열입니다.

객체는 일반적으로 리터럴 구문을 사용하여 생성됩니다.

```js
const obj = {
  name: "Carrot",
  for: "Max",
  details: {
    color: "orange",
    size: 12,
  },
};
```

객체 속성은 점(`.`) 또는 대괄호(`[]`)를 사용하여 [접근](/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors)할 수 있습니다. 점 표기법을 사용할 때, 키는 유효한 [식별자](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)여야 합니다. 반면 대괄호를 사용하면 동적 키 값으로 객체를 인덱싱할 수 있습니다.

```js
// 점 표기법
obj.name = "Simon";
const name = obj.name;

// 대괄호 표기법
obj["name"] = "Simon";
const name = obj["name"];

// 변수를 사용하여 키를 정의할 수 있습니다.
const userName = prompt("what is your key?");
obj[userName] = prompt("what is its value?");
```

속성 접근은 함께 연결할 수 있습니다.

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

객체는 항상 참조이므로, 무언가 명시적으로 객체를 복사하지 않는 한, 객체에 대한 변형은 외부에서 볼 수 있습니다.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

이는 또한 별도로 생성된 두 객체가 서로 다른 참조이기 때문에 결코 같지 않음(`!==`)을 의미합니다. 동일한 객체에 대한 두 개의 참조를 보유하는 경우, 하나를 변경하면 다른 하나를 통해 관찰할 수 있습니다.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

객체 및 프로토타입에 대한 자세한 내용은, [`객체` 참조 페이지](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)를 참조하세요. 객체 초기화 구문에 대한 자세한 내용은 [참조 페이지](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)를 참고하세요.

일반적으로 (난해하다고 들었을 수 있는) 기본 메커니즘을 건드리지 않고 [클래스](#클래스)를 사용하여 상속을 달성할 수 있기 때문에, 이 페이지에서는 객체 프로토타입 및 상속에 대한 모든 세부 정보를 생략했습니다. 자세한 내용은 [상속 및 프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)을 참조하세요.

## 배열 (Arrays)

JavaScript에서 배열은 실제로는 특별한 타입의 객체입니다. (숫자로 나타낸 속성은 자연스럽게 `[]` 구문만을 사용해서 접근하게 되므로) 일반 객체와 많이 비슷하게 동작하지만, 이 객체는 `length`라는 한가지 마법적인 속성을 가집니다. 이는 항상 배열에서 가장 큰 인덱스보다 하나 더 큰 값을 가집니다.

배열을 일반적으로 배열 리터럴로 생성됩니다.

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript 배열은 여전히 객체입니다. 임의의 숫자 인덱스를 포함하여 배열에 속성을 할당할 수 있습니다. 유일한 "마법"은 특정 인덱스를 설정할 때 `length`가 자동으로 업데이트 된다는 것입니다.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

위에서 얻은 배열을 [희소 배열(_sparse array_)](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)라고 합니다. 중간에 비어있는 슬롯이 있기 때문이며 엔진이 배열에서 해시 테이블로 배열을 최적화하지 않기 때문입니다. 배열이 밀집되어 있는지 확인하세요!

범위를 벗어난 인덱싱은 발생하지 않습니다. 존재하지 않는 배열 인덱스를 참조하려고 하면 `undefined`값이 반환됩니다.

```js
const a = ["dog", "cat", "hen"];
console.log(typeof a[90]); // undefined
```

배열은 모든 요소를 가질 수 있으며 임의로 확장하거나 축소할 수 있습니다.

```js
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
```

배열은 다른 C 유사 언어에서와 마찬가지로 `for` 루프로 반복될 수 있습니다.

```js
for (let i = 0; i < a.length; i++) {
  // a[i]을 가지고 작업 진행
}
```

배열은 또한 반복 가능하므로, C++/Java의 `for (int x : arr)` 문법와 동일한 [`for...of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 루프를 사용할 수 있습니다.

```js
for (const currentValue of a) {
  // currentValue를 가지고 작업 진행
}
```

배열에는 [배열 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)가 많이 있습니다. 대부분은 배열을 순회합니다. 예를 들어, [`map()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)은 모든 배열 요소에 콜백을 적용하고 새 배열을 반환합니다.

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## 함수 (Functions)

객체와 마찬가지로, 함수는 JavaScript를 이해하는데 핵심이 되는 컴포넌트입니다. 가장 기본적인 함수의 예시는 다음과 같습니다.

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

JavaScript 함수는 0개 이상의 이름이 있는 매개변수를 가질 수 있습니다. 함수의 본체에는 원하는 만큼 구문을 작성할 수 있고 해당 함수에 지역적인 변수를 선언할 수 있습니다. [`return`](/ko/docs/Web/JavaScript/Reference/Statements/return) 문은 언제든지 값을 반환하고 함수를 종료할 수 있습니다. 반환 문이 없으면 (혹은 값이 없는 반환이 사용되면), JavaScript는 `undefined`을 반환합니다.

매개변수로 지정된 것보다 많거나 적은 변수를 사용해서도 함수를 호출할 수 있습니다. 예상되는 매개변수를 전달하지 않고 함수를 호출하면 `undefined`로 설정됩니다. 예상보다 많은 매개변수를 전달하면 추가로 전달되는 매개변수를 무시합니다.

```js
add(); // NaN
// add(undefined, undefined)와 동등합니다.

add(2, 3, 4); // 5
// 처음의 두 수가 더해집니다. 4는 무시됩니다.
```

사용할 수 있는 다른 여러 매개변수 구문이 있습니다. 예를 들어, [rest 매개변수 구문](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)을 사용하면 Python의 `*args`와 유사하게 호출자가 전달한 모든 추가 매개변수를 배열로 수집할 수 있습니다(JS는 언어 수준에서 명명된 매개변수가 없기 때문에, `**kwargs`가 없습니다).

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

위의 코드에서 `args` 변수는 함수에 전달된 모든 값을 보유합니다.

나머지 매개변수(rest parameter)는 선언된 이후의 모든 인수를 저장하지만, 이전에는 저장하지 않습니다. 즉, `function avg(firstValue, ...args)`는 함수에 전달된 첫 번째 값을 `firstValue` 변수에 저장하고 나머지 인수는 `args`에 저장합니다.

함수가 인수 목록을 허용하고 이미 배열을 보유하고 있는 경우, 함수 호출에서 [전개 연산자 문법(spread syntax)](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)을 사용하여 배열을 요소 목록으로 _spread_ 할 수 있습니다. 예를 들어, `avg(...numbers)`

JavaScript에는 명명된 매개 변수가 없다고 언급했습니다. 하지만 객체를 편리하게 하나로 합치고, 분해할 수 있는 [구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)을 사용하여 구현할 수 있습니다.

```js
// 중괄호({ })에 유의하세요. 객체를 분해합니다.
function area({ width, height }) {
  return width * height;
}

// 여기서 중괄호({ })는 새로운 객체를 생성합니다.
console.log(area({ width: 2, height: 3 }));
```

[기본값 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters) 구문도 있는데, 생략된 매개변수(또는 `undefined`로 전달된 매개변수)가 기본값을 갖도록 허용합니다.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // NaN 대신, 1입니다.
```

### 익명 함수

JavaScript에서는 익명 함수(이름이 없는 함수)를 만들 수 있습니다. 실제로, 이런 이름없는 함수들은 다른 함수의 인자로 전달하거나 함수를 호출하는 데 사용할 수 있는 변수에 즉시 할당되거나 다른 함수에서 반환됩니다.

```js
// 괄호 앞에 함수명이 없음을 주목해주세요.
const avg = function (...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};
```

위에 정의된 익명 함수는 인수와 함께 `avg()`와 같은 형태로 실행할 수 있습니다. 즉, `function avg() {}`와 같이 이름을 붙인 함수 선언과 의미적으로 같습니다.

[화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)를 사용하여 익명 함수를 정의하는 또 다른 방법이 있습니다.

```js
// 괄호 앞에 함수명이 없음을 주목해주세요.
const avg = (...args) => {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};

// 단순히 표현식을 반환할 때, `return`을 생략할 수 있습니다.
const sum = (a, b, c) => a + b + c;
```

화살표 함수는 의미적으로 함수 표현식과 동일하지 않습니다. 자세한 내용은 [참조 페이지](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)를 참조하세요.

익명 함수가 유용할 수 있는 또 다른 방법이 있습니다. [즉시 실행 함수 표현(IIFE, Immediately Invoked Function Expressions)](/ko/docs/Glossary/IIFE)이라는 단일 표현식에서 익명 함수를 동시에 선언하고 호출할 수 있습니다.

```js
(function () {
  // …
})();
```

IIFE의 사용 사례에 대해서는 [클로저를 이용해서 프라이빗 메서드 흉내내기](/ko/docs/Web/JavaScript/Closures#클로저를_이용해서_프라이빗_메소드_private_method_흉내내기)을 참조하세요.

### 재귀 함수

JavaScript는 재귀적으로 함수를 호출할 수 있습니다. 이는 브라우저 DOM 등에서 볼 수 있는 트리 구조를 다루는데 유용합니다.

```js
function countChars(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += countChars(child);
  }
  return count;
}
```

함수 표현식에도 이름을 지정할 수 있으므로, 재귀적일 수 있습니다.

```js
const charsInBody = (function counter(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

위와 같이 함수 표현식에 제공된 이름은 함수 자체 범위에서만 사용할 수 있습니다. 이를 통해 엔진에서 더 많은 최적화를 수행할 수 있으며, 결과적으로 더 읽기 쉬운 코드가 생성됩니다. 이 이름은 디버거와 일부 스택 추적에도 표시되므로, 디버깅 시 시간을 절약할 수 있습니다.

함수형 프로그래밍에 익숙하다면 JavaScript에서 재귀가 성능에 미치는 영향에 주의하세요. 언어 명세에는 [꼬리 호출 최적화(tail-call optimization)](https://en.wikipedia.org/wiki/Tail_call)로 지정되어 있지만, 스택 추적 및 디버깅의 어려움으로 인해 JavaScriptCore (Safari에서 사용)에서만 구현했습니다. 깊은 재귀의 경우 스택 오버플로우를 방지하기 위해, 대신 반복을 사용하는 것이 좋습니다.

### 함수는 일급 객체(first-class objects)입니다

JavaScript 함수는 일급 객체(first-class objects)입니다. 즉, 변수에 할당하고 다른 함수에 인수로 전달하고 다른 함수에서 반환할 수 있습니다. 또한, JavaScript는 명시적인 캡처 없이 즉시 사용 가능한 [클로저(closures)](/ko/docs/Web/JavaScript/Closures)를 지원하므로 함수형 프로그래밍 스타일을 편리하게 적용할 수 있습니다.

```js
// 함수를 반환하는 함수
const add = (x) => (y) => x + y;
// 함수를 매개변수로 받는 함수
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

JavaScript 함수는 JavaScript의 다른 모든 것과 마찬가지로 그 자체로 객체이며, 이전 객체 섹션에서 본 것처럼 속성을 추가하거나 변경할 수 있습니다.

### 내장 함수 (Inner functions)

JavaScript의 함수 선언은 다른 함수 내부에서도 가능합니다. JavaScript의 중첩 함수에서는 부모 함수 범위에 있는 변수에 접근이 가능하다는 게 중요합니다.

```js
function parentFunc() {
  const a = 1;

  function nestedFunc() {
    const b = 4; // parentFunc은 사용할 수 없는 변수
    return a + b;
  }
  return nestedFunc(); // 5
}
```

이런 특성은 유지보수가 용이한 코드를 만드는데 도움이 됩니다. 호출된 함수가 다른 한두 개의 함수에서만 호출되며 그 외의 다른 코드에서는 사용이 안되는 경우, 해당 함수를 내부에 중첩시킬 수 있습니다. 이런 방법을 통해 전역 범위에 함수의 개수가 줄어듭니다.

또한 전역 변수에 대한 유혹을 뿌리칠 수 있는 좋은 대안이 됩니다. 복잡한 코드를 작성하게 될 때면 여러 함수들 간에 값을 공유하기 위한 용도로 전역 변수를 사용하고 싶어지지만, 전역 변수는 유지보수를 힘들게 합니다. 이런 상황에 중첩 함수는 부모의 변수를 공유함으로써 전역 이름공간을 더럽히지 않고 함수들을 연동할 수 있습니다.

## 클래스

JavaScript는 Java와 매우 유사한 [class](/ko/docs/Web/JavaScript/Reference/Classes) 문법을 제공합니다.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `Hello, I'm ${this.name}!`;
  }
}

const p = new Person("Maria");
console.log(p.sayHello());
```

JavaScript 클래스는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new) 연산자로 인스턴스화해야 하는 함수일 뿐입니다. 클래스가 인스턴스화될 때마다, 클래스가 지정한 메서드와 속성을 포함하는 객체를 반환합니다. 클래스는 코드 구성을 강제하지 않습니다. 예를 들어, 클래스를 반환하는 함수가 있거나, 파일 당 여러 클래스가 있을 수 있습니다. 다음은 클래스 생성이 어떻게 임시방편일 수 있는지에 대한 예시입니다. 단지 화살표 함수에서 반환된 표현식일 뿐이고, 이 패턴을 [믹스인(mixin)](/ko/docs/Web/JavaScript/Reference/Classes/extends#mix-ins)이라고 합니다.

```js
const withAuthentication = (cls) =>
  class extends cls {
    authenticate() {
      // …
    }
  };

class Admin extends withAuthentication(Person) {
  // …
}
```

정적 속성은 `static`을 추가하여 생성됩니다. Private 속성은 hash(`#`) (`private` 키워드가 아닙니다)를 앞에 추가하여 생성됩니다. 이 해시는 속성 이름의 필수적인 부분입니다. (Python에서 `#`을 `_`로 생각하세요.) 대부분의 다른 언어와 달리, 클래스 본체 외부에서 Private 속성을 읽을 수 있는 방법이 전혀 없습니다. 파생 클래스(derived classes)에서도 마찬가지입니다.

다양한 클래스 기능에 대한 자세한 안내는 [guide page](/ko/docs/Web/JavaScript/Guide/Using_classes)를 참조하세요.

## 비동기 프로그래밍

JavaScript는 본질적으로 단일 스레드입니다. [병렬화](https://en.wikipedia.org/wiki/Parallel_computing)가 없고, [동시성](https://en.wikipedia.org/wiki/Concurrent_computing)만 가능합니다. 비동기 프로그래밍은 [이벤트 루프](/ko/docs/Web/JavaScript/Event_loop)에 의해 구동되며, 이를 통해 일련의 작업을 대기하고 완료를 위해 폴링(polling)할 수 있습니다.

JavaScript에서 비동기 코드를 작성하는 세 가지의 관용적인 방법이 있습니다.

- 콜백 기반 방법(예: [`setTimeout()`](/ko/docs/Web/API/Window/setTimeout))
- [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise) 기반 방법
- Promise의 문법적인 설탕(syntactic sugar)인 [`async`](/ko/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/ko/docs/Web/JavaScript/Reference/Operators/await) 방법

예를 들어, 파일 읽기 작업이 JavaScript에서 다음과 같이 표시될 수 있습니다.

```js
// 콜백 기반(Callback-based)
fs.readFile(filename, (err, content) => {
  // 이 콜백은 파일을 읽을 때 호출되며 잠시 후에 호출될 수 있습니다.
  if (err) {
    throw err;
  }
  console.log(content);
});
// 파일 읽기를 기다리는 동안 여기의 코드가 실행됩니다.

// 프로미스 기반(Promise-based)
fs.readFile(filename)
  .then((content) => {
    // 파일을 읽을 때 수행할 작업
    console.log(content);
  })
  .catch((err) => {
    throw err;
  });
// 파일 읽기를 기다리는 동안 여기의 코드가 실행됩니다.

// Async/await 기반
async function readFile(filename) {
  const content = await fs.readFile(filename);
  console.log(content);
}
```

언어의 중요한 부분은 어떠한 비동기 프로그래밍 기능을 특정하지 않지만, [사용자 권한 요청](/ko/docs/Web/API/Permissions_API)부터, [데이터 가져오기](/ko/docs/Web/API/Fetch_API/Using_Fetch) 및 [파일 읽기](https://nodejs.org/api/fs.html)까지 외부 환경과 상호작용을 할 때 중요합니다. 잠재적으로 오래 실행되는 작업을 비동기식으로 유지하면, 이 프로세스가 대기하는 동안 다른 프로세스가 계속 실행될 수 있습니다. 예를 들어, 사용자가 권한을 부여하기 위해 버튼을 클릭하기를 기다리는 동안, 브라우저가 정지되지 않습니다.

비동기 값이 있는 경우, 해당 값을 동기적으로 가져올 수 없습니다. 예를 들어, 프로미스(Promise)가 있는 경우, [`then()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 메서드를 통해서만 최종 결과에 접근할 수 있습니다. 마찬가지로, [`await`](/ko/docs/Web/JavaScript/Reference/Operators/await)는 일반적으로 비동기 함수 또는 모듈인, 비동기 컨텍스트(맥락)에서만 사용할 수 있습니다. Promise는 절대로 "차단"되지 않습니다. Promise의 결과에 따라 달라지는 논리만 연기됩니다. 그 동안 다른 모든 작업은 계속 실행됩니다. 함수형 프로그래머라면, Promise를 `then()`으로 매핑할 수 있는 [모나드(monads)](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>)로 생각할 수 있습니다(하지만, 적절한 모나드가 아닌 이유는 자동 평면화되기 때문입니다. 즉, `Promise<Promise<T>>`를 가질 수 없습니다).

사실, 단일 스레드 모델은 Non-Blocking IO로 인해 Node.js를 서버 측 프로그래밍에 널리 선택하게 하여, 많은 수의 데이터베이스 또는 파일 시스템 요청을 매우 효율적으로 처리할 수 있게 합니다. 그러나, 순수한 JavaScript인 CPU 바인딩(계산 집약적) 작업은 여전히 메인 스레드를 차단합니다. 실제 병렬화를 달성하려면 [workers](/ko/docs/Web/API/Web_Workers_API/Using_web_workers)를 사용해야 할 수도 있습니다.

비동기 프로그래밍에 대해 자세히 알아보려면, [promises 사용](/ko/docs/Web/JavaScript/Guide/Using_promises)에 대해 읽어보거나 [비동기 JavaScript](/ko/docs/Learn/JavaScript/Asynchronous) 자습서를 읽어보세요.

## 모듈

또한 JavaScript는 대부분의 런타임에서 지원하는 모듈 시스템을 사용합니다. 모듈은 일반적으로 파일 경로 또는 URL로 식별되는 파일입니다. [`import`](/ko/docs/Web/JavaScript/Reference/Statements/import) 및 [`export`](/ko/docs/Web/JavaScript/Reference/Statements/export)를 모듈 간에 데이터를 교환하는 명령문으로 사용할 수 있습니다.

```js
import { foo } from "./foo.js";

// export 하지 않은 변수는 모듈 내에서 지역 변수 범위를 가집니다.
const b = 2;

export const a = 1;
```

Haskell, Python, Java 등과 달리 JavaScript 모듈 해석은 전적으로 호스트 정의입니다. 일반적으로 URL 또는 파일 경로를 기반으로 하므로, 상대 파일 경로는 "작동"하고 일부 프로젝트 루트 경로 대신 현재 모듈의 경로에 상대적입니다.

그러나, JavaScript 언어는 표준 라이브러리 모듈을 제공하지 않습니다. 대신 모든 핵심 기능은 [`Math`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math) 및 [`Intl`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl)과 같은 전역 변수로 구동됩니다. 이것은 모듈 시스템이 없는 JavaScript의 오랜 역사와, 모듈 시스템을 선택한다면 런타임 설정에 대한 일부 변경이 포함된다는 사실 때문입니다.

다른 런타임은 다른 모듈 시스템을 사용할 수 있습니다. 예를 들어, [Node.js](https://nodejs.org/ko/)는 패키지 관리자 [npm](https://www.npmjs.com/)을 사용하고, 대부분 파일 시스템 기반인 반면, [Deno](https://deno.land/) 및 브라우저는 완전한 URL 기반이며 모듈은 HTTP URL에서 확인할 수 있습니다.

자세한 내용은 [모듈 가이드 페이지](/ko/docs/Web/JavaScript/Guide/Modules)를 참조하세요.

## 언어 및 런타임

이 페이지 전체에 걸쳐, 특정 기능은 "언어 수준"이고 다른 기능은 "런타임 수준"이라고 지속적으로 언급이 되었습니다.

JavaScript는 범용 스크립팅 언어입니다. [핵심 언어 명세](/ko/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript)은 순수한 계산 논리에 중점을 두고 있습니다. 입출력을 처리하지 않습니다. 사실, 추가 런타임 수준의 API(특히 [`console.log()`](/ko/docs/Web/API/console/log_static)) 없이, JavaScript 프로그램의 동작은 완전히 관찰할 수 없습니다.

런타임 또는 호스트는 JavaScript 엔진(인터프리터)에 데이터를 공급하고 추가 전역 속성을 제공하며, 엔진이 외부 세계와 상호 작용할 수 있도록 훅을 제공합니다. 모듈 확인, 데이터 읽기, 메시지 인쇄, 네트워크 요청 보내기 등은 모두 런타임 수준 작업입니다. JavaScript는 처음부터 브라우저([DOM](/ko/docs/Web/API/Document_Object_Model)과 같은 API를 제공합니다), Node.js([파일 시스템 접근](https://nodejs.org/api/fs.html)과 같은 API를 제공합니다)와 같은 다양한 환경에서 채택되었습니다. JavaScript는 (가장 주요 목적인) 웹, 모바일 앱, 데스크탑 앱, 서버 측 앱, 서버리스, 임베디드 시스템 등에 성공적으로 통합되었습니다. JavaScript 핵심 기능에 대해 배우는 동안, 지식을 사용하기 위해 호스트에서 제공하는 기능을 이해하는 것도 중요합니다. 예를 들어, 브라우저 및 경우에 따라 비브라우저에 의해 구현되는 모든 [웹 플랫폼 API](/ko/docs/Web/API)에 대해 읽어볼 수 있습니다.

## 추가적인 탐색

이 페이지는 다양한 JavaScript 기능이 다른 언어와 어떻게 비교되는지에 대한 매우 기본적인 통찰력을 제공합니다. 언어 자체와 각 기능의 뉘앙스에 대해 자세히 알아보려면, [JavaScript 자습서](/ko/docs/Web/JavaScript/Guide) 및 [JavaScript 참고서](/ko/docs/Web/JavaScript/Reference)에 대해 읽어보세요.

작성 공간과 복잡성으로 인해 생략된 언어의 일부 필수 부분이 있지만, 직접 찾아볼 수 있습니다.

- [상속과 프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [클로저(Closures)](/ko/docs/Web/JavaScript/Closures)
- [정규표현식](/ko/docs/Web/JavaScript/Guide/Regular_expressions)
- [반복(Iteration)](/ko/docs/Web/JavaScript/Guide/Iterators_and_generators)
