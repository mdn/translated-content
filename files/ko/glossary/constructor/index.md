---
title: 생성자 (Constructor)
slug: Glossary/Constructor
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**생성자**는 인스턴스화된 특정 클래스 {{glossary("object", "객체")}}에 속합니다. 생성자는 이 객체를 초기화하고 해당 개인 정보에 대한 접근을 제공할 수 있습니다. 생성자의 개념은 대부분의 {{glossary("OOP","객체 지향 프로그래밍 (object-oriented programming, OOP)")}} 언어에 적용될 수 있습니다. 기본적으로, {{glossary("JavaScript")}}의 생성자는 일반적으로 {{glossary("class")}}의 인스턴스에서 선언됩니다.

## 문법

```js
// 일반적인 기본 생성자 클래스입니다.
function Default() {}

// 매개변수를 통해 오버로드된 생성자 클래스입니다.
function Overloaded(arg1, arg2, /* …, */ argN) {}
```

JavaScript에서 클래스의 생성자를 호출하려면, `new` 연산자를 사용하여 새 {{glossary("object reference", "객체 참조")}}를 {{glossary("variable", "변수")}}에 할당합니다.

```js
function Default() {}

// 지역 변수 defaultReference에 할당된 기본 객체의 새로운 참조
const defaultReference = new Default();
```

## 같이 보기

- 위키백과의 [생성자](https://en.wikipedia.org/wiki/Constructor_%28object-oriented_programming%29)
- MDN의 [JavaScript용 객체 지향 프로그래밍의 생성자](/ko/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#classes_and_constructors)
- MDN의 [JavaScript의 새로운 연산자](/ko/docs/Web/JavaScript/Reference/Operators/new)
