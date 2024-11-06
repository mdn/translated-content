---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
---

{{JSRef}}

인스턴스의 프로토타입을 만든 {{jsxref("Object")}} 함수의 참조를 반환합니다. 이 속성값은 함수 자체의 참조임을 주의하세요, 함수 이름을 포함하는 문자열이 아니라. 그 값은 `1`, `true` 및 `"test"`와 같은 원시(primitive) 값에 대해서만 읽기 전용입니다.

## 설명

모든 객체는 자신의 `prototype`으로부터 `constructor` 속성을 상속합니다:

```js
var o = {};
o.constructor === Object; // true

var o = new Object();
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var a = new Array();
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true
```

## 예제

### 객체의 생성자 표시하기

다음 예는 프로토타입이 `Tree`인 그 형의 객체 `theTree`를 만듭니다. 그 다음 객체 `theTree`의 `constructor`를 표시합니다.

```js
function Tree(name) {
  this.name = name;
}

var theTree = new Tree("Redwood");
console.log("theTree.constructor is " + theTree.constructor);
```

이 예는 다음 출력을 표시합니다:

```js
theTree.constructor is function Tree(name) {
  this.name = name;
}
```

### 객체의 생성자 바꾸기

다음 예는 일반 객체의 constructor 값을 수정하는 법을 보입니다. `true`, `1` 및 `"test"`만이 원래 읽기 전용 생성자를 갖기에 영향을 받지 않습니다. 이 예는 객체의 `constructor` 속성에 의존하는 게 항상 안전하지는 않음을 보입니다.

```js
function Type() {}

var types = [
  new Array(),
  [],
  new Boolean(),
  true, // 바뀌지 않음
  new Date(),
  new Error(),
  new Function(),
  function () {},
  Math,
  new Number(),
  1, // 바뀌지 않음
  new Object(),
  {},
  new RegExp(),
  /(?:)/,
  new String(),
  "test", // 바뀌지 않음
];

for (var i = 0; i < types.length; i++) {
  types[i].constructor = Type;
  types[i] = [
    types[i].constructor,
    types[i] instanceof Type,
    types[i].toString(),
  ];
}

console.log(types.join("\n"));
```

이 예는 다음 출력을 표시합니다:

```js
function Type() {},false,
function Type() {},false,
function Type() {},false,false
function Boolean() {
    [native code]
},false,true
function Type() {},false,Mon Sep 01 2014 16:03:49 GMT+0600
function Type() {},false,Error
function Type() {},false,function anonymous() {

}
function Type() {},false,function () {}
function Type() {},false,[object Math]
function Type() {},false,0
function Number() {
    [native code]
},false,1
function Type() {},false,[object Object]
function Type() {},false,[object Object]
function Type() {},false,/(?:)/
function Type() {},false,/(?:)/
function Type() {},false,
function String() {
    [native code]
},false,test
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
