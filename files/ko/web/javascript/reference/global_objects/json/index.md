---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
---

{{JSRef}}

**`JSON`** 객체는 [JavaScript Object Notation](http://json.org/)({{glossary("JSON")}})을 분석하거나 값을 JSON으로 변환하는 메서드를 가지고 있습니다. `JSON`을 직접 호출하거나 인스턴스를 생성할 수 없으며, 두 개의 메서드를 제외하면 자신만의 흥미로운 기능은 없습니다.

## JavaScript와 JSON의 차이

JSON은 객체, 배열, 숫자, 문자열, 불리언과 {{jsxref("null")}}을 직렬화하기 위한 구문으로, JavaScript 구문에 기반을 두고 있지만 분명한 차이점을 가지고 있습니다. 즉, 어떤 JavaScript는 JSON이 아닙니다.

- 객체와 배열
  - : 속성의 이름은 반드시 큰따옴표로 표시된 문자열이어야 합니다. [후행 쉼표](/ko/docs/Web/JavaScript/Reference/Trailing_commas)는 허용하지 않습니다.
- 숫자
  - : 선행 0은 허용하지 않습니다. 소숫점 뒤에는 적어도 한 자릿수가 뒤따라야 합니다. {{jsxref("NaN")}}과 {{jsxref("Infinity")}}는 지원하지 않습니다.
- 모든 JSON 텍스트는 유효한 JavaScript 표현식...
  - : ...이지만, [모든 JSON 텍스트를 올바른 ECMA-262로 만드는 제안](https://github.com/tc39/proposal-json-superset)을 구현한 JavaScript 엔진에서만 그러합니다. 다른 엔진에서는, U+2028 LINE SEPARATOR와 U+2029 PARAGRAPH SEPARATOR를 JSON에서 스트링 리터럴과 속성의 키로 사용할 수 있지만, JavaScript 문자열 리터럴에서 사용하면 {{jsxref("SyntaxError")}}가 발생합니다.

{{jsxref("JSON.parse()")}}로 JSON 문자열을 분석하고 {{jsxref("eval")}}이 JavaScript 문자열로 실행하는 다음 예시를 참고하세요.

```js
const code = '"\u2028\u2029"';
JSON.parse(code); // 모든 엔진에서 "\u2028\u2029"로 평가
eval(code); // 오래된 엔진에서 SyntaxError
```

다른 차이점으로는 문자열의 작은따옴표 금지와, 주석 및 {{jsxref("undefined")}} 미지원이 있습니다. JSON에 기반한, 보다 사람 친화적인 설정 형식을 원하면 Babel 컴파일러가 사용하는 [JSON5](https://json5.org/)가 있고, 좀 더 많이 쓰이는 [YAML](https://ko.wikipedia.org/wiki/YAML)도 있습니다.

## 전체 JSON 구문

```js
    JSON = null
        or true or false
        or JSONNumber
        or JSONString
        or JSONObject
        or JSONArray

    JSONNumber = - PositiveNumber
              or PositiveNumber
    PositiveNumber = DecimalNumber
                  or DecimalNumber . Digits
                  or DecimalNumber . Digits ExponentPart
                  or DecimalNumber ExponentPart
    DecimalNumber = 0
                 or OneToNine Digits
    ExponentPart = e Exponent
                or E Exponent
    Exponent = Digits
            or + Digits
            or - Digits
    Digits = Digit
          or Digits Digit
    Digit = 0 through 9
    OneToNine = 1 through 9

    JSONString = ""
              or " StringCharacters "
    StringCharacters = StringCharacter
                    or StringCharacters StringCharacter
    StringCharacter = any character
                      except " or \ or U+0000 through U+001F
                   or EscapeSequence
    EscapeSequence = \" or \/ or \\ or \b or \f or \n or \r or \t
                  or \u HexDigit HexDigit HexDigit HexDigit
    HexDigit = 0 through 9
            or A through F
            or a through f

    JSONObject = { }
              or { Members }
    Members = JSONString : JSON
           or Members , JSONString : JSON

    JSONArray = [ ]
             or [ ArrayElements ]
    ArrayElements = JSON
                 or ArrayElements , JSON
```

중요하지 않은 공백은 `JSONNumber`(숫자에는 공백이 없어야 함) 또는 `JSONString`(문자열에서 해당 문자로 해석되거나 오류를 일으킴) 내를 제외하고 어디에나 존재할 수 있습니다. 탭 문자([U+0009](http://unicode-table.com/en/0009/)), 캐리지 리턴([U+000D](http://unicode-table.com/en/000D/)), 라인 피드([U+000A](http://unicode-table.com/en/000A/)) 및 스페이스([U+0020](http://unicode-table.com/en/0020/)) 문자만이 유효한 공백 문자입니다.

## 메서드

- {{jsxref("JSON.parse()")}}
  - : 문자열을 JSON으로서 구문 분석하고, 선택적으로 분석 결과의 값과 속성을 변환해 반환합니다.
- {{jsxref("JSON.stringify()")}}
  - : 주어진 값에 해당하는 JSON 문자열을 반환합니다. 선택 사항으로 특정 속성만 포함하거나 사용자 정의 방식으로 속성을 대체합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.toJSON()")}}
