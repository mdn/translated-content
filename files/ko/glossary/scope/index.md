---
title: 스코프
slug: Glossary/Scope
---

현재 실행되는 컨텍스트를 말한다. 여기서 컨텍스트는 {{glossary("값","값")}}과 **표현식**이 **"표현"**되거나 참조 될 수 있음을 의미한다. 만약 **{{glossary("변수")}}** 또는 다른 표현식이 "해당 스코프"내에 있지 않다면 사용할 수 없다. 스코프는 또한 계층적인 구조를 가지기 때문에 하위 스코프는 상위 스코프에 접근할 수 있지만 반대는 불가하다.

**{{glossary("함수")}}**는 **{{glossary("자바스크립트")}}**에서 **클로저** 역할을 하기 때문에 스코프를 생성하므로 함수 내에 정의된 변수는 외부 함수나 다른 함수 내에서는 접근 할 수 없다. 예를 들어 다음과 같은 상황은 유효하지 않다.

```js
function exampleFunction() {
  var x = "declared inside function";
  // x는 오직 exampleFunction 내부에서만 사용 가능.
  console.log("Inside function");
  console.log(x);
}

console.log(x); // 에러 발생
```

그러나 다음과 같은 코드는 변수가 함수 외부의 전역에서 선언되었기 때문에 유효하다.

```js
var x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);
```

## Learn more

### General knowledge

- [Scope (computer science)](<https://en.wikipedia.org/wiki/Scope_(computer_science)>) on Wikipedia
