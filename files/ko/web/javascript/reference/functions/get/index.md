---
title: 접근자
slug: Web/JavaScript/Reference/Functions/get
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Functions")}}

**`get`** 구문은 객체의 속성 접근 시 호출할 함수를 바인딩합니다. 이 구문은 [classes](/ko/docs/Web/JavaScript/Reference/Classes)에서도 사용할 수 있습니다.

{{InteractiveExample("JavaScript Demo: Functions Getter")}}

```js interactive-example
const obj = {
  log: ["a", "b", "c"],
  get latest() {
    return this.log[this.log.length - 1];
  },
};

console.log(obj.latest);
// Expected output: "c"
```

## 구문

```js-nolint
{ get prop() { /* … */ } }
{ get [expression]() { /* … */ } }
```

몇 가지 추가적인 구문의 제한이 있습니다.

- getter는 매개변수가 정확히 0개여야 합니다.

### 매개변수

- `prop`
  - : 지정된 함수에 바인딩할 속성의 이름입니다. [객체 초기자](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)의 다른 속성과 동일한 방식으로 문자열 리터럴, 숫자 리터럴 또는 식별자일 수 있습니다.
- `expression`
  - : 속성 이름에 대한 표현식을 사용하여 지정된 함수에 바인딩할 수도 있습니다.

## 설명

동적으로 계산된 값을 반환하는 속성에 대한 접근을 허용하는 것이 바람직한 경우도 있습니다.
명시적인 메서드 호출을 사용하지 않고도 내부 변수의 상태를 반영하고 싶을 수 있습니다.
JavaScript에서는 접근자(_getter_)를 사용하여 이 작업을 수행할 수 있습니다.

접근자와 설정자를 함께 사용하여 일종의 의사 속성을 생성하는 것은 가능하지만 속성에 바인딩된 접근자와 해당 속성이 실제로 값을 보유하도록 하는 것은 동시에 불가능합니다.

## 예제

### 객체 초기자에서 새로운 객체의 접근자 정의하기

다음 예제는 객체 `obj`에 의사 속성 `latest`를 생성합니다.
`latest`는 배열 `log`의 마지막 요소를 반환합니다.

```js
const obj = {
  log: ["example", "test"],
  get latest() {
    if (this.log.length === 0) return undefined;
    return this.log[this.log.length - 1];
  },
};
console.log(obj.latest); // "test"
```

`latest`에 다른 값을 할당하려 해도 아무 변화도 없을 것입니다.

### 클래스에서 접근자 사용

똑같은 구문을 사용해 클래스 인스턴스에서 사용할 수 있는 공용 인스턴스 접근자를 정의할 수 있습니다. 클래스에서는 메서드 사이에 쉼표로 구분할 필요가 없습니다.

```js
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // "hello world"

instance.msg = "cake";
console.log(instance.msg); // "hello cake"
```

접근자 속성은 클래스의 `prototype`으로 정의되므로 클래스의 모든 인스턴스에서 공유됩니다. 객체 리터럴의 접근자 속성과 달리 클래스의 접근자 속성은 열거할 수 없습니다.

Static 설정자와 private 설정자는 유사한 구문을 사용하며, [`static`](/ko/docs/Web/JavaScript/Reference/Classes/static)과 [private class features](/ko/docs/Web/JavaScript/Reference/Classes/Private_elements) 페이지에 설명되어 있습니다.

### `delete` 연산자로 접근자 제거하기

접근자를 삭제하려면 간단히 {{jsxref("Operators/delete", "delete")}} 연산자를 사용하세요.

```js
delete obj.latest;
```

### `defineProperty`를 이용해 이미 존재하는 객체에 접근자 정의하기

이미 존재하는 객체에 접근자를 추가하려면 {{jsxref("Object.defineProperty()")}}를 사용하세요.

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  get() {
    return this.a + 1;
  },
});

console.log(o.b); // 접근자 실행, a + 1 반환 (즉, 1)
```

### 계산된 속성 이름 사용하기

```js
const expr = "foo";

const obj = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj.foo); // "bar"
```

### 정적 접근자 정의하기

```js
class MyConstants {
  static get foo() {
    return "foo";
  }
}

console.log(MyConstants.foo); // 'foo'
MyConstants.foo = "bar";
console.log(MyConstants.foo); // 'foo', 정적 접근자의 값 변경 불가
```

### 똑똑한 / 자기 덮어쓰기 / 느긋한 접근자

접근자를 사용하면 객체에 속성을 **정의**하되, 접근하기 전에는 속성의 값을 **계산**하지 않을 수 있습니다.
접근자는 값이 실제로 필요한 상황이 오기 전까지 계산 비용을 미루는 것입니다.
사용하지 않으면 비용을 지불할 일도 없습니다.

속성 값의 계산을 느긋하게 만들거나 미루고, 나중에 접근할 수 있도록 캐시에 저장하는
추가 최적화 기법은 **똑똑한(*smart*) 또는 메모화([메모이제이션](https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98)) 접근자**라고 합니다.
똑똑한 접근자 속성의 값은 접근자를 처음 호출할 때 계산하는 동시에 캐시에 저장됩니다.
덕분에 속성에 추가 접근 시 캐시에서 값을 즉시 반환하므로 값을 다시 계산하는 수고를 피할 수 있습니다.
똑똑한 접근자는 다음과 같은 상황에 유용합니다.

- 값의 계산 비용이 큰 경우. (RAM이나 CPU 시간을 많이 소모하거나, 워커 스레드를 생성하거나, 원격 파일을 불러오는 등)
- 값이 지금 당장 필요하지 않은 경우. 나중에 사용할 수도 있고, 경우에 따라 아예 사용되지 않을 수 있습니다.
- 값을 사용하면 여러 번 접근하게 되므로 변경되지 않거나 다시 계산할 필요가 없는 값은 다시 계산할 필요가 없습니다.

> [!NOTE]
> 즉, 값이 변경될 것으로 예상되는 속성에 대해 게으른 접근자를 작성하면 값을 다시 계산하지 않으므로 게으른 접근자를 작성해서는 안 됩니다.
>
> 모든 접근자가 처음부터 '느긋'하며 '메모화'되는 것은 아닙니다. 이런 동작이 필요하면 직접 구현해야 합니다.

다음 예제의 접근자 속성은 어느 객체의 자체 속성으로 존재합니다.
이 속성에 접근하는 순간, 접근자는 스스로 자신을 객체에서 제거하는 동시에 같은 이름의 속성을 다시 추가하지만, 이때는 접근자가 아니라 데이터 속성으로 추가합니다.
마지막으로 그 속성의 값을 반환합니다.

```js
const obj = {
  get notifier() {
    delete this.notifier;
    this.notifier = document.getElementById("bookmarked-notification-anchor");
    return this.notifier;
  },
};
```

### get vs. defineProperty

`get` 키워드와 {{jsxref("Object.defineProperty()")}}는 비슷한 결과를 내지만, {{jsxref("classes")}}에 사용할 경우 미묘한 차이가 생깁니다.

`get`을 사용할 경우, 해당 속성은 인스턴스의 프로토타입에 정의됩니다.
그러나 {{jsxref("Object.defineProperty()")}}를 사용할 경우 속성을 인스턴스 자체에 직접 정의하게 됩니다.

```js
class Example {
  get hello() {
    return "world";
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"

console.log(Object.getOwnPropertyDescriptor(obj, "hello"));
// undefined

console.log(
  Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), "hello"),
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [객체로 작업하기](/ko/docs/Web/JavaScript/Guide/Working_with_objects)
- [함수](/ko/docs/Web/JavaScript/Reference/Functions)
- [`설정자`](/ko/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Object.defineProperty()")}}
- [객체 초기자](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- Jeff Walden (2010)의 [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/)
- Jeff Walden (2010)의 [More SpiderMonkey changes: ancient, esoteric, very rarely used syntax for creating getters and setters is being removed](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/)
