---
title: Mutable
slug: Glossary/Mutable
---

"Mutable"은 변경 가능(가변)한 변수의 유형입니다. [JavaScript](/ko/docs/Glossary/JavaScript)에서, [원시 값](/ko/docs/Glossary/Primitive)이 아닌 [객체](/ko/docs/Glossary/Object)와 [배열](/ko/docs/Glossary/array)만이 mutable입니다.

(변수 이름이 새 값을 가리키도록 "만들 수 있지만" 이전 값은 여전히 메모리에 유지됩니다. 따라서 Garbage collection이 필요합니다.)

**가변 객체**는 객체가 생성된 후 상태를 수정할 수 있는 객체입니다.

**불변 객체**는 일단 객체가 생성되면 상태를 변경할 수 없는 객체입니다.

**문자열과 숫자**는 **불변**입니다. 예제를 보고 이해해볼까요?

```js
var immutableString = "Hello";

// 위의 코드에서는 문자열 값을 가진 새 개체가 생성됩니다.

immutableString = immutableString + "World";

// 우리는 지금 기존 값에 "World" 를 추가하고 있습니다.
```

문자열 값을 사용하여 "immutableString" 을 추가하면 다음 이벤트가 발생합니다.:

1. 기존 값 "immutableString"이 검색되었습니다.
2. "World"가 "immutableString"의 기존 값에 추가됩니다.
3. 결과 값이 새 메모리 블록에 할당됩니다.
4. "immutableString" 객체는 새로 만든 메모리 공간을 가리킵니다.
5. 기존에 생성한 메모리 공간은 Garbage collection이 가능해 집니다.

## 더 알아보기

### 일반적 지식

- [불변 객체](https://ko.wikipedia.org/wiki/%EB%B6%88%EB%B3%80%EA%B0%9D%EC%B2%B4) on Wikipedia
