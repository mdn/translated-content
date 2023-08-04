---
title: 원시 값
slug: Glossary/Primitive
---

{{Glossary("JavaScript")}}에서 **원시 값**(primitive, 또는 원시 자료형)이란 {{Glossary("object", "객체")}}가 아니면서 {{glossary("method", "메서드")}}도 가지지 않는 데이터입니다. 원시 값에는 7종류, {{Glossary("string")}}, {{Glossary("number")}}, {{glossary("bigint")}}, {{Glossary("boolean")}}, {{Glossary("undefined")}}, {{Glossary("symbol")}}, 그리고 {{glossary("null")}}이 존재합니다.

대부분의 경우, 원시 값은 언어 구현체의 가장 저급(low level) 단계에서 나타냅니다.

모든 원시 값은 **불변**하여 변형할 수 없습니다. 원시 값 자체와, 원시값을 할당한 변수를 혼동하지 않는 것이 중요합니다. 변수는 새로운 값을 다시 할당할 수 있지만, 이미 생성한 원시 값은 객체, 배열, 함수와는 달리 변형할 수 없습니다.

## 예제

다음 예제는 원시 값이 **불변**함을 이해할 때 도움이 됩니다.

### JavaScript

```js
// 문자열 메서드는 문자열을 변형하지 않음
var bar = "baz";
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// 배열 메소드는 배열을 변형함
var foo = [];
console.log(foo); // []
foo.push("plugh");
console.log(foo); // ["plugh"]

// 할당은 원시 값에 새로운 값을 부여 (변형이 아님)
bar = bar.toUpperCase(); // BAZ
```

원시 값을 교체할 수는 있지만, 직접 변형할 수는 없습니다.

## 또 다른 예제 \[단계별 정리]

다음 예제는 JavaScript가 원시값을 다루는 방법을 이해하는데 도움이 됩니다.

### JavaScript

```js
// 원시 값
let foo = 5;

// 원시 값을 변경해야 하는 함수 정의
function addTwo(num) {
  num += 2;
}
// 같은 작업을 시도하는 다른 함수
function addTwo_v2(foo) {
  foo += 2;
}

// 원시 값을 인수로 전달해 첫 번째 함수를 호출
addTwo(foo);
// 현재 원시 값 반환
console.log(foo); // 5

// 두 번째 함수로 다시 시도
addTwo_v2(foo);
console.log(foo); // 5
```

`5` 대신 `7` 일 것이라고 예상하였나요? 그렇다면, 이 코드의 실행 과정을 살펴보세요.

- `addTwo` 와 `addTwo_v2` 함수 호출을 위해, JavaScript는 {{glossary("identifier", "식별자")}} `foo` 의 값을 찾습니다. 이는 인스턴스화된 첫 번째 구문의 변수를 올바르게 찾습니다.
- 찾은 다음, JavaScript는 인수를 함수의 매개변수로서 전달합니다.
- 함수의 본문 내 구문들을 실행하기 전에, **JavaScript는 원래 전달된 인수(원시 값)를 복사해** 로컬 복사본을 생성합니다. 이러한 복사본은 함수의 스코프 내에서만 존재하며, 함수 정의 내에 지정한 식별자를 통해 접근가능합니다(`addTwo` 의 `num`, `addTwo_v2` 의 `foo`).
- 그 후, 함수의 구문들이 실행됩니다.

  - 첫 번째 함수내에서, 로컬 `num` 인수가 생성되었습니다. 이 값을 2 증가시키는 것이며, 원래 `foo` 의 값이 아닙니다!
  - 두 번째 함수내에서, 로컬 `foo` 인수가 생성되었습니다. 이 값을 2 증가시키는 것이며, 원래(외부) `foo` 의 값이 아닙니다! 또한, 이 경우에서, 외부 `foo` 변수에는 **어떤 방법으로든** 접근할 수 없습니다. 이는 자바스크립트의 어휘적 유효 범위(lexical scoping)와 결과 변수 섀도잉 때문입니다. 로컬 `foo` 는 외부 `foo` 를 숨깁니다. 자세한 내용은, [클로저](/ko/docs/Web/JavaScript/Guide/Closures) 문서를 보세요.

- 결과적으로, 우리 함수들 내부의 모든 변경은 그 **복사본**으로 작업하였기 때문에, 원본 `foo` 에 전혀 영향을 주지 **않았습니다**.

이것이 원시 값이 변하지 않는 이유입니다. 원시 값에 직접 작업하지 않으므로, 원본을 건드리지 않고 복사본 가져와 계속 작업을 합니다.

## JavaScript에서의 원시 래퍼 객체

`null`과 `undefined` 를 제외하고, 모든 원시 값은 원시 값을 래핑한 객체를 갖습니다.

- 문자열 원시 값을 위한 {{jsxref("String")}} 객체.
- 숫자 원시 값을 위한 {{jsxref("Number")}} 객체.
- 빅인트 원시 값을 위한 {{jsxref("BigInt")}} 객체.
- 불리언 원시 값을 위한 {{jsxref("Boolean")}} 객체.
- 심볼 원시 값을 위한 {{jsxref("Symbol")}} 객체.

래퍼 객체의 {{jsxref("Object.valueOf", "valueOf()")}} 메서드는 원시 값을 반환합니다.

## 더 알아보기

### 일반 지식

- [JavaScript의 자료형 소개](/ko/docs/Web/JavaScript/Data_structures)
- 위키백과 [원시 자료형](https://ko.wikipedia.org/wiki/%EC%9B%90%EC%8B%9C_%EC%9E%90%EB%A3%8C%ED%98%95)

<section id="Quick_links"><ol><li><a href="/ko/docs/Glossary">용어 사전</a><ol><li>{{Glossary("JavaScript")}}</li><li>{{Glossary("string")}}</li><li>{{Glossary("number")}}</li><li>{{Glossary("bigint")}}</li><li>{{Glossary("boolean")}}</li><li>{{Glossary("null")}}</li><li>{{Glossary("undefined")}}</li><li>{{Glossary("symbol")}}</li></ol></li><li><a href="/ko/docs/Web/JavaScript/Data_structures">JavaScript의 자료형</a></li></ol></section>
