---
title: 불린
slug: Glossary/Boolean
original_slug: Glossary/불린
---
컴퓨터 과학에서, **불린(boolean)**은 논리적인 데이터 유형이다. 불린은 `참(true)` 혹은 `거짓(false)` 값만을 가질 수 있다. 자바스크립트에서 불린 조건은 어떤 코드 부문이 실행되어야 할 지(예를 들어 [if 절](/ko/docs/Web/JavaScript/Reference/Statements/if...else) 안에서) 또는 어떤 코드 부문을 반복해야 할지(예를 들어 [for 문](/ko/docs/Web/JavaScript/Reference/Statements/for) 안에서) 결정하는 데 쓰인다.

아래는 불린이 쓰일 수 있는 예시를 보여주는 유사코드이다(실행 가능한 코드가 아니다).

```js
    ***JavaScript if Statement***
    if(boolean conditional) {
       //coding
    }

    if(true) {
      console.log("boolean conditional resolved to true");
    } else {
        console.log("boolean conditional resolved to false");
      }



    ***JavaScript for Loop***
    for(control variable; boolean conditional; counter) {
      //coding
    }

    for(var i=0; i<4; i++) {
      console.log("I print only when the boolean conditional is true");
    }
```

불린(Boolean)이란 이름은 기호 논리학 분야의 선구자인 영국 수학자 [조지 불](https://ko.wikipedia.org/wiki/%EC%A1%B0%EC%A7%80_%EB%B6%88)의 이름을 따 만들어졌다.

## 더 알아보기

### 일반적인 지식

- 위키피디아, [불리언](https://ko.wikipedia.org/wiki/%EB%B6%88%EB%A6%AC%EC%96%B8)

### 참고문헌

- The JavaScript global object: {{jsxref("Boolean")}}
- [JavaScript data types and data structures](/ko/docs/Web/JavaScript/Data_structures)
