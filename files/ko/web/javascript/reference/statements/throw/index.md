---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
---

{{jsSidebar("Statements")}}

**`throw`** 문은 사용자 정의 예외를 발생(throw)할 수 있습니다. 예외가 발생하면 현재 함수의 실행이 중지되고 (`throw` 이후의
명령문은 실행되지 않습니다.), 제어 흐름은 콜스택의 첫 번째 [`catch`](/ko/docs/Web/JavaScript/Reference/Statements/try...catch)
블록으로 전달됩니다. 호출자 함수 사이에 `catch` 블록이 없으면 프로그램이 종료됩니다.

{{InteractiveExample("JavaScript Demo: Statement - Throw")}}

```js interactive-example
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Parameter is not a number!");
  }
}

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
}
```

## 문법

```js
throw expression;
```

- `expression`
  - : 예외를 발생시킬 표현식

## 설명

예외를 발생하기 위해 `throw` 문을 사용하세요. 예외를 발생시키면 `expression`은 예외 값을 지정합니다.
다음 각각은 예외를 발생시킵니다:

```js
throw "Error2"; // 문자열 값을 가지는 예외가 발생합니다.
throw 42; // 42 값을 가진 예외가 발생합니다.
throw true; // true 값을 가지는 예외가 발생합니다.
```

또한 `throw` 문은 [자동 세미콜론 삽입](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI)에 의해 영향을 받으며 `throw` 키워드와 표현식 사이에 줄 종결자는 허용되지 않으므로 주의해야합니다.

## 예제

### 예외 값으로 객체 사용하기

예외를 발생시킬 때 객체를 명시할 수 있습니다. 그러면 `catch` 블록에서 객체의 속성을 참조 할 수 있습니다.
다음 예제에서는 `UserException` 타입의 객체를 만들고 `throw` 구문에서 이 객체를 사용합니다.

```js
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}
function getMonthName(mo) {
  mo = mo - 1; // 월 숫자를 배열의 인덱스 값과 맞추기 위해서 입니다.(1 = 1월, 12 = 12월)
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo] !== undefined) {
    return months[mo];
  } else {
    throw new UserException("InvalidMonthNo");
  }
}

try {
  // try 문
  var myMonth = 15; // 15 는 범위를 벗어났기 때문에 예외를 발생시킵니다
  var monthName = getMonthName(myMonth);
} catch (e) {
  monthName = "unknown";
  console.error(e.message, e.name); // 오류 처리기에 예외 객체를 전달합니다
}
```

### 예외 값으로 객체 사용하는 다른 예제

다음 예제는 입력 문자열에서 미국 우편 번호를 테스트합니다.
우편 번호가 잘못된 형식을 사용하는 경우 throw 문은 `ZipCodeFormatException` 타입의 객체를 만들어 예외를 발생시킵니다.

```js
/*
 * ZipCode 객체를 만듭니다.
 *
 * 입력받을 수 있는 우편번호의 형태는 아래와 같습니다:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * 만약 ZipCode 생성자로 전달된 매개변수가 이 패턴 중 하나도 맞지 않으면,
 * 예외를 발생시킵니다.
 */

function ZipCode(zip) {
  zip = new String(zip);
  pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
  if (pattern.test(zip)) {
    // 우편번호 값은 문자열의 첫 번째 매칭일 것입니다.
    this.value = zip.match(pattern)[0];
    this.valueOf = function () {
      return this.value;
    };
    this.toString = function () {
      return String(this.value);
    };
  } else {
    throw new ZipCodeFormatException(zip);
  }
}

function ZipCodeFormatException(value) {
  this.value = value;
  this.message = "does not conform to the expected format for a zip code";
  this.toString = function () {
    return this.value + this.message;
  };
}

/*
 * 이것은 미국 주소에 대한 주소 데이터를 검증하는 스크립트에서
 * 발생할 수 있습니다.
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
  try {
    z = new ZipCode(z);
  } catch (e) {
    if (e instanceof ZipCodeFormatException) {
      return ZIPCODE_INVALID;
    } else {
      return ZIPCODE_UNKNOWN_ERROR;
    }
  }
  return z;
}

a = verifyZipCode(95060); // 95060 반환
b = verifyZipCode(9560); // -1 반환
c = verifyZipCode("a"); // -1 반환
d = verifyZipCode("95060"); // 95060 반환
e = verifyZipCode("95060 1234"); // 95060 1234 반환
```

### 예외 다시 발생시키기

`throw`를 사용하여 예외를 잡은(catch) 후에 예외를 다시 발생시킬 수 있습니다.
다음 예제에서는 숫자 값으로 예외를 잡지만 값이 50 이상이면 예외를 다시 발생시킵니다.
반환된 예외는 둘러싸는 함수 또는 최상위 수준으로 전파되어 사용자가 볼 수 있도록합니다

```js
try {
  throw n; // 숫자 값으로 예외를 발생시킵니다.
} catch (e) {
  if (e <= 50) {
    // 1-50 사이의 예외를 처리하는 구문
  } else {
    // 이 예외를 처리할 수 없어서, 다시 예외를 발생시킵니다
    throw e;
  }
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/try...catch", "try...catch")}}
- {{jsxref("Global_Objects/Error", "Error")}}
