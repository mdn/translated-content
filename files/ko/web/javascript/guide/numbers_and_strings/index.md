---
title: 숫자와 날짜
slug: Web/JavaScript/Guide/Numbers_and_strings
original_slug: Web/JavaScript/Guide/Numbers_and_dates
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}

이 장에서는 JavaScript에서 숫자와 날짜를 사용하기 위한 개념과 객체, 함수에 대해 소개합니다. 그리고 숫자를 10진법, 2진법, 16진법 등의 다양한 형태로 표현하는 방법과 더불어 {{jsxref("Math")}} 객체를 사용해 다양한 수학 연산을 수행하는 방법을 알 수 있습니다.

## 숫자

JavaScript에서 모든 숫자는 [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) (즉, ±2^−1022 과 ±2^+1023 또는 대략 ±10^−308 to ±10^+308 사이의 숫자이며 53bits의 수치정밀도 )로 구현되어 있습니다. ±2^53 - 1까지의 정수 값을 정확하게 나타낼 수 있습니다.

여기 부동 소수점 숫자를 나타낼 수 있으며, 숫자 형식은 세 개의 상징적인 값: `+`{{jsxref("Infinity")}}, `-`{{jsxref("Infinity")}}, and {{jsxref("NaN")}} (숫자가 아닌 값)을 갖습니다.

JavaScript에 최근 추가 된 것은 {{jsxref ( "BigInt")}}로, 매우 큰 정수를 나타낼 수 있습니다. `BigInt`를사용할땐 다음을 주의해야 합니다. 예를 들면, `BigInt`와 {{jsxref ( "Number")}} 값을 같은 연산으로 혼합하고 일치시킬 수는 없으며 {{jsxref ( "Math")}} 객체를 `BigInt`값과 함께 사용할 수 없습니다.

JavaScript에서 다른 기본형과 문맥에 대한 내용은 [JavaScript data types and structures](/ko/docs/Web/JavaScript/Data_structures)를 참조하세요.

여러분은 숫자 리터럴의 네 가지 유형을 사용할 수 있습니다: 10진수, 2진수, 8진수, 16진수

### 10진수

```js
1234567890;
42;

// 앞에 0이 붙은 숫자를 조심하세요:

0888; // 10진수 888로 해석됩니다.
0777; // non-strict mode에서 10진수 511로 해석됩니다.
```

10진수 리터럴도 영(`0`)으로 시작될 수 있다는 점에 유의하세요. 그러나 만약 영`0` 다음 숫자가 8보다 작으면, 그 숫자는 8진법으로 해석됩니다.

### 2진수

2진수 구문은 앞에 오는 0과 소문자 또는 대문자 라틴 문자 "B"(0B 또는 0b)를 사용합니다. 0b 다음의 숫자가 0 또는 1이 아니면 다음의 [SyntaxError](/ko/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)가 발생합니다. "0b 이후에 누락 된 2 진수"("Missing binary digits after 0b")입니다.

```js
var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607
```

### 8진수

8 진수 구문은 앞에 0을 사용합니다. `0` 이후의 숫자가 0에서 7까지 범위 밖에 있는 경우, 숫자는 10진수로 해석됩니다.

```js
var n = 0755; // 493
var m = 0644; // 420
```

ECMAScript 5의 Strict 모드는 8 진수 구문을 금지합니다. 8 진수 구문은 ECMAScript 5의 일부가 아니지만, `0644 === 420` 및 `"\ 045"=== "%"`의 8 진수에 접두사를 붙이면 모든 브라우저에서 지원됩니다. ECMAScript 2015에서는 접두어가 `0o`인 경우 8 진수가 지원됩니다 (예 :

```javascript
var a = 0o10; // ES2015: 8
```

### 16진수

16진수 구문은 앞에 0 다음에 소문자나 대문자 라틴어 문자 "X"(`0x` 또는 `0X`)를 사용합니다. 0X 이후 숫자가 범위(0123456789ABCDEF) 밖에 있는 경우, 다음 [SyntaxError](/ko/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)가 발생합니다: "식별자는 숫자 리터럴 후 즉시 시작됩니다".

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

### 지수 계산

```
1E3   // 1000
2e6   // 2000000
0.1e2 // 10
```

## `Number` 객체

{{jsxref("Number")}} 내장객체는 최대값, not-a-number, 무한대와 같은 숫자 상수를 위한 속성들이 있습니다. 여러분은 이러한 속성의 값을 변경 할 수 없고 다음과 같이 사용합니다:

```js
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
```

여러분은 직접 생성한 `Number` 객체의 속성이 아닌, 위와같이 항상 미리 정의된 `Number` 객체의 속성을 참조해야합니다.

다음 표에서는 `Number` 객체의 속성이 요약되어 있습니다.

| 특성                                   | 묘사                                                                  |
| -------------------------------------- | --------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | 표현가능한 가장 큰 수 (`±1.7976931348623157e+308`)                    |
| {{jsxref("Number.MIN_VALUE")}}         | 표현가능한 가장 작은 수(`±5e-324`)                                    |
| {{jsxref("Number.NaN")}}               | "숫자가 아닌" 특수값                                                  |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | 음의 무한대값; 오버 플로로 반환됨.                                    |
| {{jsxref("Number.POSITIVE_INFINITY")}} | 양의 무한대 값; 오버 플로로 반환됨.                                   |
| {{jsxref("Number.EPSILON")}}           | 표현가능한 매우 작은 값{{jsxref("Number")}}.(`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | JavaScript에서 안전한 최소의 정수.(−2^53 + 1, or `−9007199254740991`) |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | JavaScript에서 안전한 최대의 정수.(+2^53 − 1, or `+9007199254740991`) |

<table class="standard-table">
  <caption>
    <code>Number</code>
    메소드들
  </caption>
  <thead>
    <tr>
      <th>방법</th>
      <th>묘사</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{jsxref("Number.parseFloat()")}}</td>
      <td>
        <p>
          문자열 인수를 파싱하고 부동 소수점 숫자를 반환합니다. 전역
          {{jsxref("parseFloat", "parseFloat()")}} 함수와
          동일합니다.
        </p>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Number.parseInt()")}}</td>
      <td>
        문자열 라인 인수를 파싱해, 지정된 기수 또는 밑줄의 정수를 돌려줍니다.
        전역 {{jsxref("parseInt", "parseInt()")}}함수와 동일합니다.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Number.isFinite()")}}</td>
      <td>전달된 값이 유한한 수인지 판정합니다.</td>
    </tr>
    <tr>
      <td>{{jsxref("Number.isInteger()")}}</td>
      <td>전달된 값이 정수인지 판정합니다.</td>
    </tr>
    <tr>
      <td>{{jsxref("Number.isNaN()")}}</td>
      <td>
        이 전달된 값
        {{jsxref("Global_Objects/NaN", "Not-a-Number")}}여부를
        확인합니다. 원본 글로벌
        {{jsxref("Global_Objects/isNaN", "(isNaN)")}}의 더욱
        강력한 버전입니다.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Number.isSafeInteger()")}}</td>
      <td>제공된 값이 안전한 정수인지 여부를 확인합니다.</td>
    </tr>
  </tbody>
</table>

`Number` 프로토 타입은 다양한 형식의 `Number` 객체에서 정보를 검색하는 메소드를 제공합니다. 다음 표는 `Number.prototype`의 메소드를 요약 한 것입니다.

| 방법                                                  | Description                                                            |
| ----------------------------------------------------- | ---------------------------------------------------------------------- |
| {{jsxref("Number.toExponential", "toExponential()")}} | 지수표기법 안에서 번호를 나타내는 문자열을 반환합니다.                 |
| {{jsxref("Number.toFixed", "toFixed()")}}             | 문자열 고정 소수 점 표기법의 수를 나타내는 문자열을 반환합니다.        |
| {{jsxref("Number.toPrecision", "toPrecision()")}}     | 지정된 정밀에 고정 소수 점 표기법의 수를 나타내는 문자열을 반환합니다. |

## `Math` 객체

내장 {{jsxref ( "Math")}} 객체는 수학 상수 및 함수에 대한 속성 및 메서드를 포함합니다. 예를 들어, `Math` 객체의 `PI` 속성에는 pi (3.141 ...) 값이 있습니다.이 값은 응용 프로그램에서 다음과 같이 사용합니다.

```js
Math.PI;
```

마찬가지로 표준 수학 함수도 `Math`의 함수입니다. 여기에는 삼각 함수, 로그 함수, 지수 함수 및 기타 함수가 포함됩니다. 예를 들어 삼각 함수 sine을 사용하려면 다음과 같이 작성합니다.

```js
Math.sin(1.56);
```

`Math`의 모든 삼각 함수에는 라디안으로 매게변수를 입력해야 합니다.

다음 표에서는 `Math` 개체의 방법을 요약하였습니다.

<table class="standard-table">
  <caption>
    <code>Math</code
    >의 메소드들
  </caption>
  <thead>
    <tr>
      <th scope="col">방법</th>
      <th scope="col">묘사</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{jsxref("Math.abs", "abs()")}}</td>
      <td>절대 값</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sin", "sin()")}},
        {{jsxref("Math.cos", "cos()")}},
        {{jsxref("Math.tan", "tan()")}}
      </td>
      <td>표준 삼각 함수; 라디안에서의 인수</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asin", "asin()")}},
        {{jsxref("Math.acos", "acos()")}},
        {{jsxref("Math.atan", "atan()")}},
        {{jsxref("Math.atan2", "atan2()")}}
      </td>
      <td>역삼각 함수; 라디안에 반환 값</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sinh", "sinh()")}},
        {{jsxref("Math.cosh", "cosh()")}},
        {{jsxref("Math.tanh", "tanh()")}}
      </td>
      <td>쌍곡삼각함수; 라디안에 반환 값.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asinh", "asinh()")}},
        {{jsxref("Math.acosh", "acosh()")}},
        {{jsxref("Math.atanh", "atanh()")}}
      </td>
      <td>역쌍곡삼각함수; 라디안에 반환 값.</td>
    </tr>
    <tr>
      <td>
        <p>
          {{jsxref("Math.pow", "pow()")}},
          {{jsxref("Math.exp", "exp()")}},
          {{jsxref("Math.expm1", "expm1()")}},
          {{jsxref("Math.log10", "log10()")}},
          {{jsxref("Math.log1p", "log1p()")}},
          {{jsxref("Math.log2", "log2()")}}
        </p>
      </td>
      <td>지수와 로그 기능.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.floor", "floor()")}},
        {{jsxref("Math.ceil", "ceil()")}}
      </td>
      <td>
        가장큰/가장작은 정수 보다 적은/많은 또는 그와 동등한 원칙으로 반환해라.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.min", "min()")}},
        {{jsxref("Math.max", "max()")}}
      </td>
      <td>더적거나 더많은 쉼표의 (각각) 숫자 인수의 나뉜목록으로 반환해라.</td>
    </tr>
    <tr>
      <td>{{jsxref("Math.random", "random()")}}</td>
      <td>0과 1사이의 난수를 반환해라.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.round", "round()")}},
        {{jsxref("Math.fround", "fround()")}},
        {{jsxref("Math.trunc", "trunc()")}},
      </td>
      <td>반올림과 절단 기능들.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sqrt", "sqrt()")}},
        {{jsxref("Math.cbrt", "cbrt()")}},
        {{jsxref("Math.hypot", "hypot()")}}
      </td>
      <td>제곱 근, 세 제곱 근, 평방 인수의 합의 제곱 근.</td>
    </tr>
    <tr>
      <td>{{jsxref("Math.sign", "sign()")}}</td>
      <td>그 수가 양수인지 음수인지 0인지를 가르키는 숫자의 표시.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.clz32", "clz32()")}},<br />{{jsxref("Math.imul", "imul()")}}
      </td>
      <td>
        32비트 이진 표시의 주요 제로 비트 수.<br />그 두 인수의 C-like 32비트
        곱셈의 결과.
      </td>
    </tr>
  </tbody>
</table>

다른 많은 객체와 달리 자신의 `Math` 개체를 만들필요가 없습니다. 언제든 내장 된 `Math` 객체 바로 사용할 수 있습니다.

## `Date` 객체

JavaScript에는 날짜 데이터 타입이 없습니다. 그러나, {{jsxref ( "Date")}} 객체와 그 메소드를 사용하여 응용 프로그램에서 날짜와 시간을 처리 할 수 있습니다. `Date` 객체에는 날짜 설정, 가져 오기 및 조작을위한 많은 메소드가 있습니다. 속성(properties)이 없습니다.

JavaScript는 자바와 비슷하게 날짜를 처리합니다. 두 언어에는 동일한 날짜 메소드가 많으며 두 언어 모두 1970 년 1 월 1 일 00:00:00 이후의 밀리 초 수로 날짜를 저장합니다. 유닉스 타임 스탬프는 1970 년 1 월 1 일 00:00:00 이후의 초 수입니다.

Date 개체 범위는 UTC 1970 년 1 월 1 일을 기준으로 -100,000,000 일에서 100,000,000 일입니다.

Date 객체를 만들려면 :

```js
var dateObjectName = new Date([parameters]);
```

여기서 `dateObjectName`은 만들려는 `Date` 객체의 이름입니다. 새로운 객체 또는 기존 객체의 속성 일 수 있습니다.

`new` 키워드없이 `Date`를 호출하면 현재 날짜와 시간을 나타내는 문자열이 반환됩니다.

앞 구문에서 `parameters`는 아래 규칙을 따릅니다.

- 아무것도없을때: 오늘의 날짜와 시간을 만듭니다. 예를 들어, `today = new Date();`.
- 날짜를 나타내는 문자열의 형식: "Month day, year hours:minutes:seconds."예를 들어, `var Xmas95 = new Date("December 25, 1995 13:30:00")`.만약 당신이 시간, 분, 또는 초를 빠뜨린다면, 값은 0이 됩니다.
- 정수 값의 연도, 월, 날의 집합입니다. 예를 들어, `var Xmas95 = new Date(1995, 11, 25)`.
- 연도, 월, 일, 시, 분,초 동안 정수 값의 집합입니다.. 예를 들어, `var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

### `Data` 개체의 표현 방법

날짜와 시간을 조절하는 `Date`객체표현 방법은 아래 종류로 나뉩니다:

- "set" 함수, 날짜 개체 안에서의 날짜 및 시간 값을 설정합니다.
- "get" 함수, 날짜 개체 안에서의 날짜 및 시간 값을 얻습니다.
- "to" 함수, 날짜 개체로부터 문자열 값을 반환합니다.
- `Date` 문자열을 분석하기위해 parse와 UTC함수를 사용합니다.

"get"및 "set"메소드를 사용하여 초, 분,시, 일, 요일, 월 및 연도를 별도로 가져 와서 설정할 수 있습니다. 요일이 자동적으로 설정되기 (위해) 때문에, 요일을 돌려주는 getDay 메소드가 있습니다만, 대응하는 setDay 메소드는 없습니다. 이러한 메서드는 정수를 사용하여 다음과 같이 값을 나타냅니다.

- 초와 분: 0 to 59
- 시간: 0 to 23
- 요일: 0 (Sunday) to 6 (Saturday)
- 날짜: 1 to 31 (day of the month)
- 월: 0 (January) to 11 (December)
- 연도: years since 1900

예를 들어, 아래와 같이 값들을 정의해봅시다 :

```js
var Xmas95 = new Date("December 25, 1995");
```

그러면 `Xmas95.getMonth()`는 11을 반환합니다, 그리고 `Xmas95.getFullYear()`는 1995를 반환합니다.

`getTime`과 `setTime`방법들은 날짜를 나눌때 유용합니다. `getTime`함수는 `Date`객체에 대해 1970년 1월 1일 00:00시부터 밀리초단위로 리턴합니다.

예를 들어, 다음 코드는 현재 년도에 남아 수를 표시합니다:

```js
var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); //returns days left in the year
```

이 예제에는 오늘 날짜가 포함된 `today`라는 명칭을 가진 `Date`객체를 만듭니다. 그리고 나서 `endYear`라는 `Date`객체를 만들고 현재연도를 설정합니다. 그런 다음 하루에 밀리 초 수를 사용하여 `getTime`을 사용하고 전체 일 수를 반올림하여 `today`와 `endYear` 사이의 일 수를 계산합니다.

`Parse` 함수는 날짜문자열부터 기존의 `Date`객체까지의 값을 할당하기에 유용합니다. 예를 들어, 다음 코드는 그 `IPOdate` 객체에 날짜값을 할당하기위해 `parse`와 `setTime`을 사용합니다;

```js
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
```

### 예제

다음 예제 에서 `JSClock()`는 digital 시계형식의 시간을 반환합니다.

```js
function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = "" + (hour > 12 ? hour - 12 : hour);
  if (hour == 0) temp = "12";
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}
```

`JSClock` 함수는 먼저 time이라는 새 `Date` 객체를 만듭니다. 인수가 없으므로 현재 날짜와 시간으로 시간이 생성됩니다. 그런 다음 `getHours`, `getMinutes` 및 `getSeconds` 메소드를 호출하면 현재 시간, 분 및 초 값이`hour`, `minute`, `second`로 할당됩니다.

다음 네 문장은 시간을 기준으로 문자열 값을 만듭니다. 첫 번째 명령문은 변수 temp를 작성하고 조건식을 사용하여 값을 할당합니다. hour가 12보다 큰 경우 (hour - 12), 그렇지 않은 경우 시간이 0이 아닌 경우 시간이 12 일 경우 시간이 12가됩니다.

다음 명령문은 `temp` 값에 `minute` 값을 추가합니다. 분(`minute`)의 값이 10보다 작 으면 조건식은 앞에 0이 있는 문자열을 추가합니다. 그렇지 않으면 콜론을 구분하는 문자열을 추가합니다. 그런 다음 같은 방법으로 temp에 초 값을 추가합니다.

마지막으로 조건부 표현식에 "P.M."이 추가됩니다. 시간(`hour`)이 12 시간 이상이면 임시(`temp`)로; 그렇지 않으면 "A.M."을 `temp`에 추가합니다.

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}
