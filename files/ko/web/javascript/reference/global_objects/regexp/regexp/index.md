---
title: RegExp() constructor
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
---

{{JSRef}}

**`RegExp`** 생성자는 패턴을 사용해 텍스트를 판별할 때 사용하는 정규 표현식 객체를 생성합니다.

정규 표현식에 대한 소개는 [JavaScript 안내서의 정규 표현식 장](/ko/docs/Web/JavaScript/Guide/Regular_Expressions)을 참고하세요.

{{EmbedInteractiveExample("pages/js/regexp-constructor.html")}}

## 구문

리터럴, 생성자, 팩토리 표기법이 가능합니다.

```
/pattern/flags
new RegExp(pattern[, flags])
RegExp(pattern[, flags])
```

### 매개변수

- `pattern`
  - : 정규 표현식을 나타내는 텍스트.
    ES5부터는, 생성자 표기법에 한정하여 다른 `RegExp` 객체 혹은 리터럴을 사용할 수 있습니다. 패턴은 [특수 문자](/ko/docs/Web/JavaScript/Guide/정규식#특수_문자_사용하기)를 포함할 수 있어서 일반적인 문자열 리터럴보다 더 넓은 범위의 값을 판별할 수 있습니다.
- `flags`
  - : 정규 표현식에 추가할 플래그.
    정규 표현식 객체를 패턴으로 제공한 경우 `flags` 문자열은 제공한 객체의 플래그를 모두 대체하며 `lastIndex`를 `0`으로 초기화합니다. (ES2015 이후)
    `flags`를 지정하지 않았으면서 정규 표현식 객체를 제공한 경우, 해당 객체의 플래그와 `lastIndex`를 복제합니다.
    `flags`는 다음 문자를 조합하여 지정할 수 있습니다.
    - `g` (global, 전역 판별)
      - : 처음 일치에서 중단하지 않고, 문자열 전체를 판별합니다.
    - `i` (ignore case, 대소문자 무시)
      - : `u` 플래그까지 활성화된 경우, Unicode 대소문자 폴딩을 사용합니다.
    - `m` (multiline, 여러 줄)
      - : 시작과 끝 문자(`^`과 `$`)가 여러 줄에 걸쳐 동작합니다. 즉, 전체 입력 문자열의 맨 처음과 맨 끝 뿐만 아니라 (`\n`이나 `\r`로 구분되는) 각각의 줄의 처음과 끝도 일치합니다.
    - `s` ("dotAll")
      - : `.`이 줄 바꿈에도 일치합니다.
    - `u` (unicode)
      - : `pattern`을 Unicode 코드 포인트 시퀀스로 처리합니다. ([이진 문자열](/ko/docs/Web/API/DOMString/Binary) 참고)
    - `y` (sticky, 접착)
      - : 이 정규 표현식의 `lastIndex` 속성에 명시된 인덱스에서만 판별하고, 이전/이후 인덱스에서 판별을 시도하지 않습니다.

## 예제

### 리터럴 표기법과 생성자

`RegExp` 객체는 리터럴 표기법과 생성자로써 생성할 수 있습니다.

- **리터럴 표기법**의 매개변수는 두 빗금으로 감싸야 하며 따옴표를 사용하지 않습니다.
- **생성자 함수**의 매개변수는 빗금으로 감싸지 않으나 따옴표를 사용합니다.

다음의 세 표현식은 모두 같은 정규 표현식을 생성합니다.

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // 리터럴
new RegExp("ab+c", "i"); // 생성자
```

리터럴 표기법은 표현식을 평가할 때 정규 표현식을 컴파일합니다. 정규 표현식이 변하지 않으면 리터럴 표기법을 사용하세요. 예를 들어, 반복문 안에서 사용할 정규 표현식을 리터럴 표기법으로 생성하면 정규 표현식을 매번 다시 컴파일하지 않습니다.

정규 표현식 객체의 생성자(`new RegExp('ab+c')`)를 사용하면 정규 표현식이 런타임에 컴파일됩니다. 패턴이 변할 가능성이 있거나, 사용자 입력과 같이 알 수 없는 외부 소스에서 가져오는 정규 표현식의 경우 생성자 함수를 사용하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 안내서의 정규 표현식 장](/ko/docs/Web/JavaScript/Guide/Regular_Expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
