---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
---
{{JSRef}}

**`hasOwnProperty()`** 메소드는 객체가 특정 프로퍼티를 가지고 있는지를 나타내는 불리언 값을 반환한다.

{{EmbedInteractiveExample("pages/js/object-prototype-hasownproperty.html")}}

## 구문

```js
obj.hasOwnProperty(prop)
```

### 매개변수

- `prop`
  - : 테스트하려는 프로퍼티의 명칭

## 설명

모든 객체는 `hasOwnProperty` 를 상속하는 {{jsxref("Object")}}의 자식이다. 이 메소드는 객체가 특정 프로퍼티를 자기만의 직접적인 프로퍼티로서 소유하고 있는지를 판단하는데 사용된다. {{jsxref("Operators/in", "in")}} 연산과는 다르게, 이 메소드는 객체의 프로토타입 체인을 확인하지는 않는다.

## 예제

### 프로퍼티의 존재 여부를 테스트하기 위한 `hasOwnProperty`의 사용

다음은 o 객체가 prop라는 명칭을 지닌 프로퍼티를 포함하는지를 판단하는 예제이다.

```js
o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');   // returns true
changeO();
o.hasOwnProperty('prop');   // returns false
```

### 직접 프로퍼티와 상속된 프로퍼티의 비교

다음은 직접 프로퍼티와 프로토타입 체인에서 상속된 프로퍼티 간의 차이점을 비교하는 예제이다.

```js
o = new Object();
o.prop = 'exists';
o.hasOwnProperty('prop');             // returns true
o.hasOwnProperty('toString');         // returns false
o.hasOwnProperty('hasOwnProperty');   // returns false
```

### 객체의 프로퍼티들을 순환하기

The following example shows how to iterate over the properties of an object without executing on inherit properties. Note that the {{jsxref("Statements/for...in", "for...in")}} loop is already only iterating enumerable items, so one should not assume based on the lack of non-enumerable properties shown in the loop that `hasOwnProperty` itself is confined strictly to enumerable items (as with {{jsxref("Object.getOwnPropertyNames()")}}).

```js
var buz = {
  fog: 'stack'
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log('this is fog (' + name + ') for sure. Value: ' + buz[name]);
  }
  else {
    console.log(name); // toString or something else
  }
}
```

### 프로퍼티의 명칭으로서 `hasOwnProperty` 를 사용하기

자바스크립트는 프로퍼티 명칭으로서 `hasOwnProperty`를 보호하지 않습니다. 그러므로, 이 명칭을 사용하는 프로퍼티를 가지는 객체가 존재하려면, 올바른 결과들을 얻기 위해서는 외부 `hasOwnProperty` 를 사용해야합니다.

```js
var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // always returns false

// Use another Object's hasOwnProperty and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, 'bar'); // true

// It's also possible to use the hasOwnProperty property from the Object prototype for this purpose
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
```

Note that in the last case there are no newly created objects.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Enumerability and ownership of properties](/ko/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [JavaScript Guide: Inheritance revisited](/ko/docs/Web/JavaScript/Guide/Inheritance_Revisited)
