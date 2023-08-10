---
title: 메서드 정의
slug: Web/JavaScript/Reference/Functions/Method_definitions
---

{{JsSidebar("Functions")}}

ECMAScript 2015 를 시작으로, 객체 초기자(initializer)에 메서드 정의를 위한 더 짧은 구문이 도입되었습니다. 이는 메서드 명에 할당된 함수를 위한 단축입니다.

## 구문

```js
    var obj = {
      property( parameters… ) {},
      *generator( parameters… ) {},
    // 키(속성) 계산값과도 함께:
      [property]( parameters… ) {},
      *[generator]( parameters… ) {},
    // ES5 getter/setter 구문과 비교해 보세요:
      get property() {},
      set property(value) {}
    };
```

## 설명

단축 구문은 ECMAScript 5에 도입된 [getter](/ko/docs/Web/JavaScript/Reference/Functions/get) 및 [setter](/ko/docs/Web/JavaScript/Reference/Functions/set) 구문과 비슷합니다.

다음 코드가 주어지면:

```js
var obj = {
  foo: function () {},
  bar: function () {},
};
```

이제 이를 아래로 줄일 수 있습니다:

```js
var obj = {
  foo() {},
  bar() {},
};
```

<div class="note"><p><strong>주의 :</strong> 단축 구문은 익명(anonymous) 함수 (…<code>foo: function() {}</code>… 에서처럼) 대신 유명(named) 함수를 사용합니다. 유명 함수는 함수 본체에서 호출될 수 있습니다 (이는 참조할 식별자가 없기에 익명 함수에게는 불가능합니다). 자세한 사항은, {{jsxref("Operators/function","function","#Examples")}} 참조.</p></div>

### 단축 생성기 메서드

[생성기 메서드](/ko/docs/Web/JavaScript/Reference/Statements/function*)는 단축 구문을 사용해서도 정의될 수 있습니다. 단축 구문 내 별표(\*)는 생성기 속성명 앞에 와야 함을 주의하세요. 즉, `* g(){}`는 작동하지만 `g *(){}`는 아닙니다.

```js
// 유명 속성 사용 (ES2015 이전)
var obj2 = {
  g: function* () {
    var index = 0;
    while (true) yield index++;
  },
};

// 단축 구문을 쓰는 같은 객체
var obj2 = {
  *g() {
    var index = 0;
    while (true) yield index++;
  },
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
```

### 메서드 정의는 생성 불가능합니다

모든 메서드 정의는 생성자가 아니고 인스턴스화하려고 하는 경우 {{jsxref("TypeError")}} 예외가 발생합니다.

```js example-bad
var obj = {
  method() {},
};
new obj.method(); // TypeError: obj.method는 생성자가 아닙니다

var obj = {
  *g() {},
};
new obj.g(); // TypeError: obj.g는 생성자가 아닙니다 (ES2016에서 바뀜)
```

## 예

### 간단한 테스트 사례

<pre class="brush: js;highlight[3]">var obj = {
  a : "foo",
  b(){ return this.a; }
};
console.log(obj.b()); // "foo"
</pre>

### 속성 계산명

단축 구문은 속성 계산명(computed property name)도 지원합니다.

```js
var bar = {
  foo0: function () {
    return 0;
  },
  foo1() {
    return 1;
  },
  ["foo" + 2]() {
    return 2;
  },
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2</pre>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [`get`](/ko/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/ko/docs/Web/JavaScript/Reference/Functions/set)
- [어휘 문법](/ko/docs/Web/JavaScript/Reference/Lexical_grammar)
