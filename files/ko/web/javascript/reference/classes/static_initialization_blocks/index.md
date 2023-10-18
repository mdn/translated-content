---
title: Class static initialization blocks
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
---

{{jsSidebar("Classes")}}

**클래스 정적 초기화 블록**은 필드별 초기화를 사용하는 것보다 더 유연하게 {{jsxref("Classes/static", "정적")}} 속성을 초기화 하는 {{jsxref("Statements/class", "클래스")}}의 특수 기능입니다.

정적 블록을 사용하면 초기화 중에 명령문을 실행할 수 있으며, 이를 통해 `try...catch`를 포함하거나 단일 값에서 여러 필드를 설정하는 초기화 등을 가능하게 합니다.

초기화는 현재 클래스의 선언 컨텍스트에서 프라이빗 상태에 대한 특별한 권한으로 수행됩니다.
이는 정적 블록을 사용하여 인스턴스 프라이빗 필드가 있는 클래스와 같은 범위에서 선언된 다른 클래스 또는 함수 간에 정보를 공유할 수도 있음을 의미합니다. (C++의 "friend" 클래스와 유사)

{{EmbedInteractiveExample("pages/js/classes-static-initialization.html")}}

## 구문

```js
static { /* … */ }
```

## 설명

{{jsxref("Statements/class", "클래스")}}는 클래스 본문에 `static {}` 초기화 블록을 얼마든지 가질 수 있습니다.
이들은 선언된 순서대로 인터리브된 정적 필드 이니셜라이저와 함께 계산됩니다.
super 클래스의 정적 초기화는 하위 클래스보다 먼저 수행됩니다.

정적 블록 내부에 선언된 변수의 범위는 해당 블록에 대한 로컬입니다.
`static {}` 초기화 블록에서 선언된 `var`, `function`, `const` 또는 `let`은 해당 블록에 대해 로컬이므로 블록의 모든 `var` 선언은 호이스트 되지 않습니다.

```js
var y = "외부 y";

class A {
  static field = "내부 y";
  static {
    var y = this.field;
  }
}

// 정적 블록에서 정의된 var는 호이스티되지 않음
console.log(y);
// > '외부 y'
```

정적 블록 내부의 `this`는 클래스의 생성자 객체를 참조합니다.
`super.<property>`는 super 클래스의 속성에 액세스하는 데 사용할 수 있습니다.
그러나 클래스 정적 초기화 블록에서 {{jsxref("Operators/super", "super()")}}를 호출하거나 클래스 생성자 함수의 인수에 접근하려고 시도하는 것은 구문 오류라는 것을 알아두세요.

정적 블록의 범위는 클래스 본문의 lexical scope 내에 중첩되어 클래스의 프라이빗 인스턴스 변수에 접근할 수 있습니다.

정적 초기화 블록에는 데코레이터가 없을 수 있습니다. (클래스 자체는 있을 수 있음)

## 예제

### 다중 블록

아래 코드는 정적 초기화 블록과 인터리브된 정적 필드 이니셜라이저가 있는 클래스를 보여줍니다.
출력은 블록과 필드가 실행 순서대로 계산되었음을 보여줍니다.

```js
class MyClass {
  static field1 = console.log("필드1 호출됨");
  static {
    console.log("1번 정적 클래스 블록 호출됨");
  }
  static field2 = console.log("필드2 호출됨");
  static {
    console.log("2번 정적 클래스 블록 호출됨");
  }
}

/*
> "필드1 호출됨"
> "1번 정적 클래스 블록 호출됨"
> "필드2 호출됨"
> "2번 정적 클래스 블록 호출됨"
*/
```

super 클래스의 정적 초기화는 하위 클래스보다 먼저 수행됩니다.

### this와 super 사용하기

정적 블록 내부의 `this`는 클래스의 생성자 객체를 참조합니다.
이 코드는 퍼블릭 정적 필드에 접근하는 방법을 보여줍니다.

```js
class A {
  static field = "정적 필드";
  static {
    console.log(this.field);
  }
}
```

[`super.property`](/ko/docs/Web/JavaScript/Reference/Operators/super)는 `static` 블록 내에서 super 클래스의 속성을 참조하는 데 사용할 수 있습니다.
여기에는 아래와 같이 정적 속성이 포함됩니다.

```js
class A {
  static fieldA = "A.fieldA";
}
class B extends A {
  static {
    console.log(super.fieldA);
    // 'A.fieldA'
  }
}
```

### 프라이빗 필드에 접근하기

아래의 예제는 클래스 외부의 객체에서 클래스의 프라이빗 객체에 대한 액세스 권한을 부여하는 방법을 보여줍니다. ([v8.dev blog](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields) 블로그의 예제).

```js
let getDPrivateField;

class D {
  #privateField;
  constructor(v) {
    this.#privateField = v;
  }
  static {
    getDPrivateField = (d) => d.#privateField;
  }
}

getDPrivateField(new D("private"));
// > private
```

### 제2의 해결책

ES13 이전에는 정적 초기화를 수행하기 위해 다른 속성 다음에 호출되는 정적 메서드를 사용하거나 클래스 외부에 있는 초기화 메서드를 사용하는 복잡한 초기화를 진행했습니다.

두 경우 모두 접근 방식이 우아하지않고 클래스의 프라이빗 메서드에 대한 접근 권한을 부여하는것이 아니었습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Class static initialization blocks](https://v8.dev/features/class-static-initializer-blocks) (v8.dev blog)
- [ES2022 feature: class static initialization blocks](https://2ality.com/2021/09/class-static-block.html) (2ality.com blog)
- [Classes](/ko/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super()")}}
- [Object.prototype.constructor](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
