---
title: 접근자
slug: Web/JavaScript/Reference/Functions/get
---

{{jsSidebar("Functions")}}

**`get`** 구문은 객체의 속성 접근 시 호출할 함수를 바인딩합니다.

{{EmbedInteractiveExample("pages/js/functions-getter.html")}}

## 구문

```js
{get prop() { ... } }
{get [expression]() { ... } }
```

### 매개변수

- `prop`
  - : 주어진 함수를 바인딩할 속성 이름.
- `expression`
  - : ECMAScript 2015 이후, 주어진 함수를 바인딩할 속성 이름을 구하는 표현식을 사용할 수도 있습니다.

## 설명

때로는 동적으로 계산한 값을 반환하는 속성이 필요하거나, 명시적인 함수 호출 없이도 객체의 내부 변수 상태를 반영하는 값을 나타내고 싶은 경우가 있습니다. JavaScript에서는 이런 경우 사용할 수 있도록 접근자(_getter_)라는 기능을 제공합니다.

어떤 속성에 접근자를 바인딩하는 동시에, 해당 속성이 값도 가지도록 할 수는 없습니다. 그러나 접근자와 설정자(_setter_)를 함께 사용해서, 접근과 할당 모두 되는 '유사 속성'을 만들 수는 있습니다.

`get` 구문을 이용할 때는 다음 사항을 주의하세요.

- 접근자의 식별자는 숫자나 문자열일 수 있습니다.
- 접근자 함수는 매개변수를 가질 수 없습니다.
- 객체 리터럴에서, 같은 속성 키에 다수의 접근자를 바인딩할 수 없습니다.

  ```js example-bad
  {
    get x() { }, get x() { }
  }
  ```

- 객체 리터럴에서, 접근자는 데이터 속성과 같은 키를 사용할 수 없습니다.

  ```js example-bad
  {
    x: ..., get x() { }
  }
  ```

## 예제

### 객체 초기자에서 새로운 객체의 접근자 정의하기

다음 예제는 객체 `obj`에 유사 속성 `latest`를 생성합니다. `latest`는 배열 `log`의 마지막 요소를 반환합니다.

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
  get: function () {
    return this.a + 1;
  },
});

console.log(o.b); // 접근자 실행, a + 1 반환 (0 + 1 = 1)
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

### 똑똑한 / 느긋한 접근자

접근자를 사용하면 객체에 속성을 **정의**하되, 접근하기 전에는 속성의 값을 **계산**하지 않을 수 있습니다. 접근자는 값이 실제로 필요한 상황이 오기 전까지 계산 비용을 미루는 것입니다. 사용하지 않으면 비용을 지불할 일도 없습니다.

속성 값의 계산을 느긋(_lazy_)하게 만들거나 미루고, 추가 접근에 사용할 수 있도록 캐시에 저장하는 추가 최적화 기법은 **똑똑한(_smart_) 또는 메모화([메모이제이션](https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98)) 접근자**라고 합니다. 똑똑한 접근자 속성의 값은 접근자를 처음 호출할 때 계산하는 동시에 캐시에 저장됩니다. 덕분에 속성에 추가 접근 시 캐시에서 값을 즉시 반환하므로 값을 다시 계산하는 수고를 피할 수 있습니다. 똑똑한 접근자는 다음과 같은 상황에 유용합니다.

- 값의 계산 비용이 큰 경우. (RAM이나 CPU 시간을 많이 소모하거나, 워커 스레드를 생성하거나, 원격 파일을 불러오는 등)
- 값이 지금 당장 필요하지 않은 경우. 나중에 사용할 수도 있고, 일부 상황에선 아예 사용하지 않을 수 있는 경우입니다.
- 절대 바뀌지 않는 값이거나 다시 계산해서는 안 되는 값을 여러 번 사용하는 경우.

> **참고:** 달리 말하자면, 변화할 수 있는 값에 똑똑한 접근자를 사용해서는 안됩니다. 값이 바뀌어야 하는 상황에서도 접근자의 값은 항상 동일할 것이기 때문입니다.
>
> 모든 접근자가 처음부터 '느긋'하며 '메모화'되는 것은 아닙니다. 이런 동작이 필요하면 직접 구현해야 합니다.

다음 예제의 접근자 속성은 어느 객체의 자체 속성으로 존재합니다. 이 속성에 접근하는 순간, 접근자는 스스로 자신을 객체에서 제거하는 동시에 같은 이름의 속성을 다시 추가하지만, 이때는 접근자가 아니라 데이터 속성으로 추가합니다. 마지막으로 그 속성의 값을 반환합니다.

```js
get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById("bookmarked-notification-anchor");
},
```

### `get` Vs. `defineProperty`

`get` 키워드와 {{jsxref("Object.defineProperty()")}}는 비슷한 결과를 내지만, {{jsxref("classes", "클래스", "", 1)}}에 사용할 경우 미묘한 차이가 생깁니다.

`get`을 사용할 경우, 해당 속성은 인스턴스의 프로토타입에 정의됩니다. 그러나 {{jsxref("Object.defineProperty()")}}를 사용할 경우 속성을 인스턴스 자체에 직접 정의하게 됩니다.

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

- [설정자](/ko/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- JavaScript 안내서의 [접근자와 설정자 정의하기](/ko/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
