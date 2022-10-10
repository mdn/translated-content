---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
tags:
  - ECMAScript 2015
  - JavaScript
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy
---
{{JSRef}}

**`Proxy`** 객체는 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 새로운 행동을 정의할 때 사용합니다.

## 용어

- [handler](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)
  - : trap들을 가지고 있는 Placeholder 객체.
- traps
  - : 프로퍼티에 접근할 수 있는 메소드. 운영체제에서 trap 이라는 컨셉과 유사하다.
- target
  - : proxy가 가상화하는 실제 객체. 이것은 proxy를 위한 backend 저장소로 사용된다. Invariants (semantics that remain unchanged) regarding object non-extensibility or non-configurable properties are verified against the target.

## 구문

```js
new Proxy(target, handler);
```

### 매개변수

- `target`
  - : proxy와 함께 감싸진 target 객체 (native array, function, 다른 proxy을 포함한 객체)
- `handler`
  - : 프로퍼티들이 function인 객체이다. 동작이 수행될 때, handler는 proxy의 행동을 정의한다.

## 메서드

- {{jsxref("Proxy.revocable()")}}
  - : 폐기할 수 있는(revocable) Proxy 객체를 생성.

## 예제

### Basic example

프로퍼티 이름이 객체에 없을때, 기본값을 숫자 37로 리턴받는 간단한 예제이다. 이것은 [`get`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get) handler를 사용하였다.

```js
var handler = {
    get: function(target, name){
        return name in target?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
```

### No-op forwarding proxy

이 예제에서는, native JavaScript를 사용하겠다. proxy는 적용된 모든 동작으로 보낼 것이다.

```js
var target = {};
var p = new Proxy(target, {});

p.a = 37; // target으로 동작이 전달

console.log(target.a); // 37. 동작이 제대로 전달됨
```

### Validation (검증)

Proxy에서, 객체에 전달된 값을 쉽게 검증할 수 있다. 이 예제는 [`set`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set) handler를 사용하였다.

```js
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // The default behavior to store the value
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = 'young'; // Throws an exception
person.age = 300; // Throws an exception
```

### Extending constructor (생성자 확장)

function proxy는 쉽게 새로운 생성자와 함께 생성자를 확장할 수 있다. 이 예제에서는 [`construct`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct)와 [`apply`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply) handlers를 사용하였다.

```js
function extend(sup,base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,"constructor"
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target,obj,args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that,args);
      base.apply(that,args);
    }
  };
  var proxy = new Proxy(base,handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descriptor);
  return proxy;
}

var Person = function(name){
  this.name = name;
};

var Boy = extend(Person, function(name, age) {
  this.age = age;
});

Boy.prototype.sex = "M";

var Peter = new Boy("Peter", 13);
console.log(Peter.sex);  // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age);  // 13
```

### Manipulating DOM nodes (DOM nodes 조작)

가끔씩, 두 개의 다른 element의 속성이나 클래스 이름을 바꾸고 싶을 것이다. 아래는 [`set`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set) handler를 사용하였다.

```js
let view = new Proxy({
  selected: null
},
{
  set: function(obj, prop, newval) {
    let oldval = obj[prop];

    if (prop === 'selected') {
      if (oldval) {
        oldval.setAttribute('aria-selected', 'false');
      }
      if (newval) {
        newval.setAttribute('aria-selected', 'true');
      }
    }

    // The default behavior to store the value
    obj[prop] = newval;
  }
});

let i1 = view.selected = document.getElementById('item-1');
console.log(i1.getAttribute('aria-selected')); // 'true'

let i2 = view.selected = document.getElementById('item-2');
console.log(i1.getAttribute('aria-selected')); // 'false'
console.log(i2.getAttribute('aria-selected')); // 'true'
```

### Value correction and an extra property (값 정정과 추가적인 property)

`products`라는 proxy 객체는 전달된 값을 평가하고, 필요할 때 배열로 변환한다. 이 객체는 `latestBrowser`라는 추가적인 property를 지원하는데, getter와 setter 모두 지원한다.

```js
let products = new Proxy({
  browsers: ['Internet Explorer', 'Netscape']
},
{
  get: function(obj, prop) {
    // An extra property
    if (prop === 'latestBrowser') {
      return obj.browsers[obj.browsers.length - 1];
    }

    // The default behavior to return the value
    return obj[prop];
  },
  set: function(obj, prop, value) {
    // An extra property
    if (prop === 'latestBrowser') {
      obj.browsers.push(value);
      return;
    }

    // Convert the value if it is not an array
    if (typeof value === 'string') {
      value = [value];
    }

    // The default behavior to store the value
    obj[prop] = value;
  }
});

console.log(products.browsers); // ['Internet Explorer', 'Netscape']
products.browsers = 'Firefox'; // pass a string (by mistake)
console.log(products.browsers); // ['Firefox'] <- no problem, the value is an array

products.latestBrowser = 'Chrome';
console.log(products.browsers); // ['Firefox', 'Chrome']
console.log(products.latestBrowser); // 'Chrome'
```

### Finding an array item object by its property (property로 배열의 객체를 찾기)

proxy 는 유용한 특성을 가진 배열로 확장할 것이다. [`Object.defineProperties`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)를 사용하지 않고, 유연하게 property들을 유연하게 "정의"할 수 있다. 이 예제는 테이블의 cell을 이용해서 row(열)을 찾는데 적용할 수 있다. 이 경우, target은 [`table.rows`](/en-US/docs/DOM/table.rows)가 될 것이다.

```js
let products = new Proxy([
  { name: 'Firefox', type: 'browser' },
  { name: 'SeaMonkey', type: 'browser' },
  { name: 'Thunderbird', type: 'mailer' }
],
{
  get: function(obj, prop) {
    // The default behavior to return the value; prop is usually an integer
    if (prop in obj) {
      return obj[prop];
    }

    // Get the number of products; an alias of products.length
    if (prop === 'number') {
      return obj.length;
    }

    let result, types = {};

    for (let product of obj) {
      if (product.name === prop) {
        result = product;
      }
      if (types[product.type]) {
        types[product.type].push(product);
      } else {
        types[product.type] = [product];
      }
    }

    // Get a product by name
    if (result) {
      return result;
    }

    // Get products by type
    if (prop in types) {
      return types[prop];
    }

    // Get product types
    if (prop === 'types') {
      return Object.keys(types);
    }

    return undefined;
  }
});

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products['Firefox']); // { name: 'Firefox', type: 'browser' }
console.log(products['Chrome']); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3
```

### A complete `traps` list example (완벽한 `traps` 리스트 예제)

이제 완벽한 `traps` 리스트를 생성하기 위해서, 이러한 유형의 작업에 특히 적합한 _non native_ 객체를 프록시화 할 것이다. [a simple cookie framework](https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework) 에 의해 생성된 전역 객체 `docCookies`이다.

```js
/*
  var docCookies = ... get the "docCookies" object here:
  https://developer.mozilla.org/en-US/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/

var docCookies = new Proxy(docCookies, {
  get: function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  set: function (oTarget, sKey, vValue) {
    if (sKey in oTarget) { return false; }
    return oTarget.setItem(sKey, vValue);
  },
  deleteProperty: function (oTarget, sKey) {
    if (sKey in oTarget) { return false; }
    return oTarget.removeItem(sKey);
  },
  enumerate: function (oTarget, sKey) {
    return oTarget.keys();
  },
  ownKeys: function (oTarget, sKey) {
    return oTarget.keys();
  },
  has: function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  defineProperty: function (oTarget, sKey, oDesc) {
    if (oDesc && "value" in oDesc) { oTarget.setItem(sKey, oDesc.value); }
    return oTarget;
  },
  getOwnPropertyDescriptor: function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue ? {
      value: vValue,
      writable: true,
      enumerable: true,
      configurable: false
    } : undefined;
  },
});

/* Cookies test */

console.log(docCookies.my_cookie1 = "First value");
console.log(docCookies.getItem("my_cookie1"));

docCookies.setItem("my_cookie1", "Changed value");
console.log(docCookies.my_cookie1);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- ["Proxies are awesome" Brendan Eich presentation at JSConf](https://www.youtube.com/watch?v=sClk6aB_CPk) ([slides](http://www.slideshare.net/BrendanEich/metaprog-5303821))
- [ECMAScript Harmony Proxy proposal page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies) and [ECMAScript Harmony proxy semantics page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics)
- [Tutorial on proxies](http://soft.vub.ac.be/~tvcutsem/proxies/)
- [SpiderMonkey specific Old Proxy API](/ko/docs/JavaScript/Old_Proxy_API)
- {{jsxref("Object.watch()")}} is a non-standard feature but has been supported in Gecko for a long time.

## 라이센스 참고사항

Some content (text, examples) in this page has been copied or adapted from the [ECMAScript wiki](http://wiki.ecmascript.org/doku.php) which content is licensed [CC 2.0 BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/2.0/).
