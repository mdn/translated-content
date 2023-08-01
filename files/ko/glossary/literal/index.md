---
title: Literal (리터럴)
slug: Glossary/Literal
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**리터럴**은 JavaScript에서 값을 나타냅니다. 이는 변수가 아닌 여러분이 문자 그대로 스크립트에 제공한 고정된 값입니다.

- [배열 리터럴](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
- [불리언 리터럴](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#boolean_literals)
- [부동 소수점 리터럴](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#floating-point_literals)
- [숫자 리터럴](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#numeric_literals)
- [객체 리터럴](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals)
- [정규식 리터럴](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_literals)
- [문자열 리터럴](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)

## 예제

### 문자열 리터럴

문자열 리터럴은 큰따옴표(`"`) 또는 작은따옴표(`'`)로 묶인 0개 이상의 문자입니다. 문자열은 같은 유형의 따옴표로 구분해야 합니다. 즉, 모두 작은따옴표 이거나 큰따옴표여야 합니다

다음은 문자열 리터럴의 예제입니다.

```js
"foo";
"bar";
"1234";
"one line \n new line";
"Joyo's cat";
```

### 객체 리터럴

객체 리터럴은 중괄호(`{}`)로 묶인 0개 이상의 객체의 속성 이름과 그와 연관된 값의 쌍의 목록입니다.

다음은 객체 리터럴의 예제입니다. `car` 객체의 첫 번째 요소는 `myCar` 속성을 정의하고, 여기에 새 문자열 "`Toyota`"를 할당합니다. 두 번째 요소인 `getCar` 속성에는 `carTypes('Honda')` 함수 호출의 결과가 즉시 할당됩니다. 세 번째 요소인 `special` 속성은 기존 변수(`sales`)를 사용합니다.

```js
const sales = "BMW";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = {
  myCar: "Toyota",
  getCar: carTypes("Honda"),
  special: sales,
};

console.log(car.myCar); // Toyota
console.log(car.getCar); // Honda
console.log(car.special); // BMW
```

## 같이 보기

- [Literal](<https://en.wikipedia.org/wiki/Literal_(computer_programming)>) (위키백과)
