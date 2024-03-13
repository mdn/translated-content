---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
---

{{jsSidebar("Classes")}}

**`extends`** 키워드는 클래스를 다른 클래스의 자식으로 만들기 위해 [class 선언](/ko/docs/Web/JavaScript/Reference/Statements/class) 또는 [class 식](/ko/docs/Web/JavaScript/Reference/Operators/class)에 사용됩니다.

{{EmbedInteractiveExample("pages/js/classes-extends.html", "taller")}}

## 구문

```
    class ChildClass extends ParentClass { ... }
```

## 설명

`extends` 키워드는 내장 객체뿐만 아니라 사용자 정의 클래스를 하위 클래스로 만들기 위해 사용될 수 있습니다.

확장( 클래스)의 `.prototype`은 {{jsxref("Object")}} 또는 {{jsxref("null")}}이어야 합니다.

## 예

### `extends` 사용하기

첫 번째 예는 `Polygon` 클래스로부터 `Square` 클래스를 만듭니다. 이 예는 [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html)에서 발췌했습니다.

```js
class Square extends Polygon {
  constructor(length) {
    // 여기서, length와 함께 부모 클래스의 생성자를 호출
    // Polygon의 너비 및 높이가 제공됨
    super(length, length);
    // 주의: 파생 클래스에서, super()가 먼저 호출되어야 'this'를
    // 사용할 수 있습니다. 이를 빼먹으면 참조 오류가 발생합니다.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}
```

### 내장 객체에 `extends` 사용하기

이 예제는 내장 객체 {{jsxref("Date")}}를 확장합니다. 이 예제는 [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html)에서 발췌했습니다.

```js
class myDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return (
      this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear()
    );
  }
}
```

### `null` 확장

{{jsxref("null")}}에서 확장은 prototype 객체가 {{jsxref("Object.prototype")}}으로부터 상속받지 않은 것을 제외하면 보통 클래스처럼 동작합니다.

```js
class nullExtends extends null {
  constructor() {}
}

Object.getPrototypeOf(nullExtends); // Function.prototype
Object.getPrototypeOf(nullExtends.prototype); // null
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [Classes](/ko/docs/Web/JavaScript/Reference/Classes)
- [super](/ko/docs/Web/JavaScript/Reference/Operators/super)
