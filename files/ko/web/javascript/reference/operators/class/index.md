---
title: class 식
slug: Web/JavaScript/Reference/Operators/class
---

{{jsSidebar("Operators")}}

**class 표현식**은 ECMAScript 2015 (ES6)에서 클래스를 정의하는 한 방법입니다. [function 식](/ko/docs/Web/JavaScript/Reference/Operators/function)과 비슷하게, class 식은 기명(named) 또는 익명(unnamed)일 수 있습니다. 기명인 경우, 클래스명은 클래스 본체(body)에서만 지역(local)입니다. JavaScript 클래스는 프로토타입(원형) 기반 상속을 사용합니다.

{{EmbedInteractiveExample("pages/js/expressions-classexpression.html")}}

## 구문

```js
    var MyClass = class [className] [extends] {
      // class body
    };
```

## 설명

class 식은 [class 문](/ko/docs/Web/JavaScript/Reference/Statements/class)과 구문이 비슷합니다. 그러나, class 식의 경우 클래스명("binding identifier")을 생략할 수 있는데 class 문으로는 할 수 없습니다.

class 문과 같이, class 식의 본체는 [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서 실행됩니다.

## 예제

### 간단한 class 식

이게 바로 변수 "Foo"를 사용하여 참조할 수 있는 간단한 익명 class 식입니다.

```js
var Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

var instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // ""
```

### Named class 식

당신이 클래스 몸통 내에서 현재 클래스를 참조하고 싶다면, 유명 class 식을 만들 수 있습니다. 이 이름은 오직 class 식 자체 범위에서만 볼 수 있습니다.

```js
var Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
};
var bar = new Foo();
bar.whoIsThere(); // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo가 정의되지 않음
Foo.name; // "NamedFoo"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`function` 식](/ko/docs/Web/JavaScript/Reference/Operators/function)
- [`class` 문](/ko/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/ko/docs/Web/JavaScript/Reference/Classes)
