---
title: 매개변수 (Parameter)
slug: Glossary/Parameter
l10n:
  sourceCommit: 2c4aa2968a162a8742f7bc25798803eaea292304
---

{{GlossarySidebar}}

매개변수는 {{Glossary("function", "함수")}}에 전달되는 이름이 있는 변수입니다. 매개변수를 의미하는 변수는 {{Glossary("argument","인자")}}를 함수로 가져오는 데 사용됩니다.

예를 들면 다음과 같습니다.

```js
function example(parameter) {
  console.log(parameter); // Output = foo
}

const argument = "foo";

example(argument);
```

예제에는 두 가지 종류의 매개변수가 있습니다.

- 입력 매개변수
  - : 가장 일반적인 종류이며 함수에 값을 전달하는 목적으로 사용됩니다. 프로그래밍 언어에 따라, 입력 매개변수는 여러 가지 방법(예, 값을 통한 호출, 주소를 통한 호출, 참조를 통한 호출)으로 전달될 수 있습니다.
- 출력/반환 매개변수
  - : 주로 함수에서 여러 값을 반환하지만, 혼란을 불러일으키므로 권장되지 않습니다.

### 매개변수(parameter) 와 인자(arguments)의 차이점

'매개변수' 와 '인자'의 차이점에 주목하세요.

- 함수 매개변수는 함수 정의 부분에 선언된 이름입니다.
- 함수 {{Glossary("argument","인자")}}는 함수에 전달된 실제 값입니다.
- 매개변수는 넘겨받은 인수값으로 초기화됩니다.

## 같이 보기

- 위키백과의 ['매개변수' 와 '인자'의 차이점](https://en.wikipedia.org/wiki/Parameter_%28computer_programming%29#Parameters_and_arguments)
- [함수 선언](/ko/docs/Web/JavaScript/Reference/Statements/function)
- [함수 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function)
