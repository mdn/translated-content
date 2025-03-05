---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
---

{{JSRef}}

**`RegExp`** 생성자는 패턴을 사용해 텍스트를 판별할 때 사용합니다.

정규 표현식에 대한 소개는 JavaScript 안내서의 [정규 표현식 장](/ko/docs/Web/JavaScript/Guide/Regular_expressions)을 참고하세요. 정규 표현식 구문에 대한 더 자세한 정보는 [정규 표현식 참고서](/ko/docs/Web/JavaScript/Reference/Regular_expressions)를 참고하시기 바랍니다.

## 설명

### 리터럴 표기법과 생성자

`RegExp` 객체는 리터럴 표기법과 생성자로써 생성할 수 있습니다.

- **리터럴 표기법**은 두 빗금 사이에 패턴을 사용하며, 두 번째 빗금 뒤에 선택적으로 [플래그](/ko/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)가 올 수 있습니다.
- **생성자 함수**은 첫 번째 매개변수로 문자열이나 `RegExp` 객체 중 하나를 받고 두 번째 매개변수로 선택적 [플래그](/ko/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) 문자열을 받습니다.

다음의 세 표현식은 모두 같은 정규 표현식을 생성합니다.

```js
const re = /ab+c/i; // 리터럴 표기법
// 혹은
const re = new RegExp("ab+c", "i"); // 첫 번째 인수로 문자열 패턴과 함께 생성자 사용
// 혹은
const re = new RegExp(/ab+c/, "i"); // 첫 번째 인수로 정규 표현식 리터럴과 함께 생성자 사용
```

정규 표현식을 사용하려면 먼저 정규 표현식을 컴파일해야 합니다. 이 과정을 통해 보다 효율적으로 매칭을 수행할 수 있습니다. 이 프로세스에 대한 보다 자세한 내용은 [dotnet 문서](https://docs.microsoft.com/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions)에서 확인할 수 있습니다.

리터럴 표기법은 표현식이 평가될 때 정규 표현식이 컴파일됩니다. 반면에 `RegExp` 객체의 생성자 `new RegExp('ab+c')`는 정규 표현식을 런타임에 컴파일합니다.

[동적 입력에서 정규식을 빌드](#building_a_regular_expression_from_dynamic_inputs)하려면 `RegExp()` 생성자의 첫 번째 인수로 문자열을 사용합니다.

### 생성자의 플래그

표현식 `new RegExp(/ab+c/, flags)`은 첫 번째 매개변수의 소스와 두 번째 매개변수의 [플래그](/ko/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)를 사용하여 새로운 `RegExp`를 생성합니다.

생성자 함수를 사용할 경우, 일반 문자열 이스케이프 규칙(문자열에 포함될 때 특수 문자 앞에 `\` 추가)이 필요합니다.

예를 들어 다음 두 줄은 동일한 정규 표현식을 생성합니다.

```js
const re = /\w+/;
// 혹은
const re = new RegExp("\\w+");
```

### Perl 형태의 `RegExp` 속성

일부 {{JSxRef("RegExp")}} 속성은 같은 값에 대해 긴 이름과 짧은 (Perl 형태의) 이름 모두 가지고 있습니다. (Perl은 JavaScript가 정규 표현식을 만들 때 참고한 프로그래밍 언어입니다.) [사용하지 않는 `RegExp` 속성](/ko/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#RegExp_Properties)을 참고하세요.

## 생성자

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : 새로운 `RegExp` 객체를 생성합니다.

## 정적 속성

- {{jsxref("RegExp.@@species", "get RegExp[@@species]")}}
  - : 파생 객체를 생성할 때 사용하는 생성자입니다.
- {{jsxref("RegExp.lastIndex")}}
  - : 다음 판별을 시작할 인덱스입니다.

## 인스턴스 속성

- {{JSxRef("RegExp.prototype.flags")}}
  - : `RegExp` 객체의 플래그를 담은 문자열입니다.
- {{JSxRef("RegExp.prototype.dotAll")}}
  - : `.`이 줄 바꿈에 일치하는지 여부를 나타냅니다.
- {{JSxRef("RegExp.prototype.global")}}
  - : 정규 표현식이 문자열 내에서 가능한 모든 경우에 일치하는지, 아니면 최초에 대해서만 일치하는지 나타냅니다.
- {{JSxRef("RegExp.prototype.ignoreCase")}}
  - : 문자열의 대소문자를 구분하는지 나타냅니다.
- {{JSxRef("RegExp.prototype.multiline")}}
  - : 여러 줄에 걸쳐 탐색할 것인지 나타냅니다.
- {{JSxRef("RegExp.prototype.source")}}
  - : 패턴을 나타내는 문자열입니다.
- {{JSxRef("RegExp.prototype.sticky")}}
  - : 검색이 접착(sticky)되어있는지 나타냅니다.
- {{JSxRef("RegExp.prototype.unicode")}}
  - : Unicode 기능의 활성화 여부입니다.

## 인스턴스 메서드

- {{JSxRef("RegExp.prototype.compile()")}}
  - : 스크립트 실행 중 정규 표현식을 (다시) 컴파일합니다.
- {{JSxRef("RegExp.prototype.exec()")}}
  - : 문자열 매개변수에 대해 검색을 실행합니다.
- {{JSxRef("RegExp.prototype.test()")}}
  - : 문자열 매개변수에 대해 판별을 실행합니다.
- {{JSxRef("RegExp.prototype.toString()")}}
  - : 객체의 문자열 표현을 반환합니다. {{JSxRef("Object.prototype.toString()")}} 메서드를 재정의합니다.
- {{JSxRef("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
  - : 주어진 문자열에 대해 일치하는 결과를 반환합니다.
- {{JSxRef("RegExp.prototype.@@matchAll()", "RegExp.prototype[@@matchAll]()")}}
  - : 주어진 문자열에 대해 일치하는 모든 결과를 반환합니다.
- {{JSxRef("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
  - : 주어진 문자열 내의 일치를 새로운 문자열로 대치합니다.
- {{JSxRef("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
  - : 주어진 문자열에 대해 일치하는 인덱스를 반환합니다.
- {{JSxRef("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
  - : 주어진 문자열을 분할해 배열로 반환합니다.

## 예제

### 정규 표현식을 사용해서 데이터 형식 바꾸기

다음 스크립트에서는 {{jsxref("String")}} 객체의 {{jsxref("String.prototype.replace()", "replace()")}} 메서드를 사용하여 _이름 성씨_ 형태의 이름을 _성씨, 이름_ 형태 바꿔 반환합니다.

대치 문자열에는 `$1`과 `$2`를 사용하여 정규 표현식 패턴의 각 괄호에 일치한 결과를 받아옵니다.

```js
let re = /(\w+)\s(\w+)/;
let str = "John Smith";
let newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

실행 결과는 `"Smith, John"`입니다.

### 정규 표현식을 사용해서 여러 가지 줄 바꿈 문자가 있는 문자열 나누기

기본 줄 바꿈 문자는 플랫폼(Unix, Windows 등)마다 다릅니다. 아래의 분할 스크립트는 모든 플랫폼의 줄 바꿈을 인식합니다.

```js
let text = "Some text\nAnd some more\r\nAnd yet\rThis is the end";
let lines = text.split(/\r\n|\r|\n/);
console.log(lines); // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

정규 표현식 패턴의 순서를 바꾸면 작동하지 않을 수 있습니다.

### 여러 줄에서 정규 표현식 사용하기

```js
let s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// Returns null

s.match(/yes[^]*day/);
// Returns ["yes\nmake my day"]
```

### 접착 플래그와 함께 사용하기

{{JSxRef("Global_Objects/RegExp/sticky", "sticky")}} 플래그는 해당 정규 표현식이 접착 판별, 즉 {{jsxref("RegExp.prototype.lastIndex")}}에서 시작하는 일치만 확인하도록 할 수 있습니다.

```js
let str = "#foo#";
let regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
```

### 접착과 전역 플래그의 차이

접착 플래그 `y`의 일치는 정확히 `lastIndex` 위치에서만 발생할 수 있으나, 전역 플래그 `g`의 경우 `lastIndex` 또는 그 이후에서도 발생할 수 있습니다.

```js
re = /\d/y;
while ((r = re.exec("123 456")))
  console.log(r, "AND re.lastIndex", re.lastIndex);

// [ '1', index: 0, input: '123 456', groups: undefined ] AND re.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] AND re.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] AND re.lastIndex 3
//   ... and no more match.
```

전역 플래그 `g`를 사용했다면, 3개가 아니고 6개 숫자 모두 일치했을 것입니다.

### 정규 표현식과 Unicode 문자

`\w`와 `\W`는 `a`부터 `z`, `A`부터 `Z`, `0`부터 `9` `_` 등의 {{glossary("ASCII")}} 문자에만 일치합니다.

러시아어나 히브리어와 같은 다른 언어의 문자까지 일치하려면 `\uhhhh`(이때 hhhh는 해당 문자의 16진법 Unicode 값) 문법을 사용하세요. 아래 예제에서는 문자열에서 Unicode 문자를 추출합니다.

```js
let text = "Образец text на русском языке";
let regex = /[\u0400-\u04FF]+/g;

let match = regex.exec(text);
console.log(match[0]); // logs 'Образец'
console.log(regex.lastIndex); // logs '7'

let match2 = regex.exec(text);
console.log(match2[0]); // logs 'на' [did not log 'text']
console.log(regex.lastIndex); // logs '15'

// and so on
```

[유니코드 속성 이스케이프](/ko/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) 기능을 사용해 `\p{scx=Cyrl}`과 같은 간단한 구문으로 이 문제를 해결할 수 있습니다.

### URL에서 서브도메인 추출하기

```js
let url = "http://xxx.domain.com";
console.log(/[^.]+/.exec(url)[0].substr(7)); // logs 'xxx'
```

> [!NOTE]
> 이 때는 정규표현식보단 [URL API](/ko/docs/Web/API/URL_API)를 통해 브라우저에 내장된 URL 구문 분석기를 사용하는 것이 좋습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 안내서의 정규 표현식 장](/ko/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
