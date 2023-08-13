---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
---

{{JSSidebar("Operators")}}

**`new.target`** 속성(property)은 함수 또는 생성자가 [new](/ko/docs/Web/JavaScript/Reference/Operators/new) 연산자를 사용하여 호출됐는지를 감지할 수 있습니다. [new](/ko/docs/Web/JavaScript/Reference/Operators/new) 연산자로 인스턴스화된 생성자 및 함수에서, `new.target`은 생성자 또는 함수 참조를 반환합니다. 일반 함수 호출에서는, `new.target`은 {{jsxref("undefined")}}입니다.

{{EmbedInteractiveExample("pages/js/expressions-newtarget.html")}}

## 구문

```js
new.target;
```

## 설명

`new.target` 구문은 키워드 "`new`", 점 및 속성명 "`target`"으로 구성됩니다. 보통 "`new.`"은 속성 접근을 위한 문맥(context)으로 제공하지만 여기서 "`new.`"은 정말 객체가 아닙니다. 그러나, 생성자 호출에서 `new.target`은 `new`에 의해 호출된 생성자를 가리키고 그래서 "`new.`"은 가상 문맥이 됩니다.

`new.target` 속성은 모든 함수가 이용할 수 있는 메타 속성입니다. [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/애로우_펑션)에서, `new.target`은 둘러싸는 함수의 `new.target`을 말합니다.

## 예

### 함수 호출에서 new\.target

일반 함수 호출(생성자 함수 호출과는 반대로)에서, `new.target`은 {{jsxref("undefined")}}입니다. 이는 함수가 생성자로서 [new](/ko/docs/Web/JavaScript/Reference/Operators/new)로 호출된 경우를 감지할 수 있습니다.

```js
function Foo() {
  if (!new.target) throw "Foo() must be called with new";
  console.log("Foo instantiated with new");
}

Foo(); // throws "Foo() must be called with new"
new Foo(); // logs "Foo instantiated with new"
```

### 생성자에서 new\.target

클래스 생성자에서, `new.target`은 `new`에 의해 직접 호출된 생성자를 가리킵니다. 이는 그 생성자가 부모 클래스에 있고 자식 생성자로부터 위임받은 경우도 그 경우입니다.

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

var a = new A(); // logs "A"
var b = new B(); // logs "B"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [함수](/ko/docs/Web/JavaScript/Reference/Functions)
- [클래스](/ko/docs/Web/JavaScript/Reference/Classes)
- [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)
- [`this`](/ko/docs/Web/JavaScript/Reference/Operators/this)
