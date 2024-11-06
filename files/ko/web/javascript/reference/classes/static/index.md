---
title: static
slug: Web/JavaScript/Reference/Classes/static
---

{{jsSidebar("Classes")}}

**static** 키워드는 클래스의 정적 메서드를 정의합니다.

{{EmbedInteractiveExample("pages/js/classes-static.html")}}

## 문법

```
    static methodName() { ... }
```

## 설명

정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다.

## 정적 메서드의 호출

#### 다른 정적 메서드에서의 호출

동일한 클래스 내의 다른 정적 메서드 내에서 정적 메서드를 호출하는 경우 키워드 [`this`](/ko/docs/Web/JavaScript/Reference/Operators/this)를 사용할 수 있다.

```js
class StaticMethodCall {
  static staticMethod() {
    return "Static method has been called";
  }
  static anotherStaticMethod() {
    return this.staticMethod() + " from another static method";
  }
}
StaticMethodCall.staticMethod();
// 'Static method has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method has been called from another static method'
```

### 클래스 생성자 및 다른 메서드에서의 호출

정적 메서드가 비정적 메서드에서 키워드[`this`](/ko/docs/Web/JavaScript/Reference/Operators/this) 를 써서는 직접적인 접근을 할 수 없다. 바른 호출 방법은 클래스 명칭을 쓰거나, 즉 `CLASSNAME.STATIC_METHOD_NAME()` 을 이용하거나 혹은 그 메서드를 생성자의 한 속성으로 부르는 것으로, 즉 `constructor` : `this.constructor.STATIC_METHOD_NAME()`를 이용한다.

```js
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticMethod());
    // 'static method has been called.'

    console.log(this.constructor.staticMethod());
    // 'static method has been called.'
  }

  static staticMethod() {
    return "static method has been called.";
  }
}
```

## 예제

아래 예제는 여러가지 내용을 설명합니다.

1. 어떻게 정적 메서드가 클래스에서 구현되는지
2. 클래스의 정적 맴버가 서브클래스화 되는 것을 보여줍니다.
3. 정적 메서드가 어떤 경우에 호출 될 수 있는지와 없는지를 설명합니다.

```js
class Triple {
  static triple(n) {
    n = n || 1; //비트연산이 아니어야 합니다.
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple()); // 3
console.log(Triple.triple(6)); // 18
console.log(BiggerTriple.triple(3)); // 81
var tp = new Triple();
console.log(BiggerTriple.triple(3)); // 81 (부모의 인스턴스에 영향을 받지 않습니다.)
console.log(tp.triple()); // 'tp.triple은 함수가 아닙니다.'.
console.log(tp.constructor.triple(4)); // 12
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- [`class` expression](/ko/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/ko/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/ko/docs/Web/JavaScript/Reference/Classes)
