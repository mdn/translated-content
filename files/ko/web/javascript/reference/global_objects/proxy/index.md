---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
---

{{JSRef}}

`Proxy` 객체를 사용하면 한 객체에 대한 기본 작업을 가로채고 재정의하는 프록시를 만들 수 있습니다.

## 설명

`Proxy` 객체를 사용하면 원래 `Object` 대신 사용할 수 있는 객체를 만들지만, 이 객체의 속성 가져오기, 설정 및 정의와 같은 기본 객체 작업을 재정의할 수 있습니다. 프록시 객체는 일반적으로 속성 액세스를 기록하고, 입력의 유효성을 검사하고, 형식을 지정하거나, 삭제하는 데 사용됩니다.

두 개의 매개변수를 사용하여 `Proxy`를 생성합니다.

- `target`: 프록시할 원본 객체
- `handler`: 가로채는 작업과 가로채는 작업을 재정의하는 방법을 정의하는 객체입니다.

예를 들어 아래 코드는 속성이 두 개뿐인 간단한 대상과 속성이 없는 훨씬 더 간단한 핸들러를 정의합니다.

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

핸들러가 비어 있기 때문에 이 프록시는 원래 대상처럼 작동합니다.

```js
console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone
```

프록시를 커스텀하기 위해 처리기 객체에 함수를 정의합니다.

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler2 = {
  get(target, prop, receiver) {
    return "world";
  },
};

const proxy2 = new Proxy(target, handler2);
```

대상 객체의 속성 액세스를 가로채는 {{jsxref("Global_Objects/Proxy/Proxy/get", "get()")}} 처리기를 제공했습니다.

처리기 함수는 대상 객체에 대한 호출을 잡아내기 때문에 _트랩(traps)_ 이라고도 부릅니다. 위의 `handler2`에 있는 매우 간단한 트랩은 모든 속성 접근자를 재정의합니다.

```js
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world
```

{{jsxref("Reflect")}} 클래스의 도움으로 일부 접근자에게 원래 동작을 제공하고 다른 접근자를 재정의할 수 있습니다.

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world
```

## 생성자

- {{jsxref("Global_Objects/Proxy/Proxy", "Proxy()")}}
  - : 새 `Proxy` 객체를 생성합니다.

## 정적 메서드

- {{jsxref("Proxy.revocable()")}}
  - : 취소 가능한 `Proxy` 객체를 생성합니다.

## 예제들

### 기본 예제

이 간단한 예에서는 속성 이름이 객체에 없으면 숫자 `37`을 기본값으로 반환합니다. {{jsxref("Global_Objects/Proxy/Proxy/get", "get()")}} 처리기를 사용합니다.

```js
const handler = {
  get(obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
//  1, undefined

console.log("c" in p, p.c);
//  false, 37
```

### No-op 포워딩 프록시

이 예에서는 기본 JavaScript 객체를 사용하여 프록시가 모든 작업을 대상 객체에게 전달합니다.

```js
const target = {};
const p = new Proxy(target, {});

p.a = 37;
//  대상 객체에게 작업 전달

console.log(target.a);
//  37
//  (작업이 제대로 전달됨!)
```

이 "no-op"는 일반 JavaScript 객체에 대해 작동하지만 DOM 요소, [`Map`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map) 객체 또는 내부 슬롯이 있는 모든 기본 객체에는 작동하지 않습니다. 자세한 내용은 [프라이빗 속성 포워딩 없음](프라이빗_속성_포워딩_없음)을 참조하십시오.

### 프라이빗 속성 포워딩 없음

프록시는 여전히 다른 ID를 가진 또 다른 객체로, 래핑된 객체와 외부 사이에서 작동하는 **프록시**일 뿐입니다. 따라서 프록시는 원래 객체의 [프라이빗 속성](/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields)에 직접 접근할 수 없습니다.

```js
class Secret {
  #secret;
  constructor(secret) {
    this.#secret = secret;
  }
  get secret() {
    return this.#secret.replace(/\d+/, "[REDACTED]");
  }
}

const aSecret = new Secret("123456");
console.log(aSecret.secret); // [REDACTED]
// no-op 포워딩 같지만...
const proxy = new Proxy(aSecret, {});
console.log(proxy.secret); // TypeError: Cannot read private member #secret from an object whose class did not declare it
```

이는 프록시의 `get` 트랩이 호출될 때 `this` 값이 원래 `secret`이 아닌 `proxy`이므로 `#secret`에 액세스할 수 없기 때문입니다. 이 문제를 해결하려면 원래 `secret`을 `this`로 사용하세요.

```js
const proxy = new Proxy(aSecret, {
  get(target, prop, receiver) {
    // 기본적으로 'this'값이 다른
    // Reflect.get(target, prop, receiver)처럼 보입니다.
    return target[prop];
  },
});
console.log(proxy.secret);
```

메서드의 경우 메서드의 `this` 값도 원래 객체로 리디렉션해야 합니다.

```js
class Secret {
  #x = 1;
  x() {
    return this.#x;
  }
}

const aSecret = new Secret();
const proxy = new Proxy(aSecret, {
  get(target, prop, receiver) {
    const value = target[prop];
    if (value instanceof Function) {
      return function (...args) {
        return value.apply(this === receiver ? target : this, args);
      };
    }
    return value;
  },
});
console.log(proxy.x());
```

일부 기본 JavaScript 객체에는 JavaScript 코드에서 액세스할 수 없는 **[내부 슬롯](https://tc39.es/ecma262/#sec-object-internal-methods-and-internal-slots)** 이라는 속성이 있습니다. 예를 들어, [`Map`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map) 객체에는 맵의 키-값 쌍을 저장하는 `[[MapData]]`라는 내부 슬롯이 있습니다. 따라서 맵에 대한 전달 프록시는 간단하게 만들 수 없습니다.

```js
const proxy = new Proxy(new Map(), {});
console.log(proxy.size); // TypeError: get size method called on incompatible Proxy
```

이 문제를 해결하려면 위에 설명된 "`this`-recovering" 프록시를 사용해야 합니다.

### 검증

프록시를 사용하면 객체에 대해 전달된 값을 쉽게 확인할 수 있습니다. 이 예제에서는 {{jsxref("Global_Objects/Proxy/Proxy/set", "set()")}} 처리기를 사용합니다.

```js
const validator = {
  set(obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }

    // 값을 저장하는 기본 동적
    obj[prop] = value;

    // 성공 표시
    return true;
  },
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = "young"; // 예외 발생
person.age = 300; // 예외 발생
```

### 생성자 확장하기

함수 프록시는 새 생성자로 생성자를 쉽게 확장할 수 있습니다. 이 예제에서는 {{jsxref("Global_Objects/Proxy/Proxy/construct", "construct()")}}과 {{jsxref("Global_Objects/Proxy/Proxy/apply", "apply()")}} 처리기를 사용합니다.

```js
function extend(sup, base) {
  base.prototype = Object.create(sup.prototype);
  base.prototype.constructor = new Proxy(base, {
    construct(target, args) {
      const obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    },
  });
  return base.prototype.constructor;
}

const Person = function (name) {
  this.name = name;
};

const Boy = extend(Person, function (name, age) {
  this.age = age;
});

Boy.prototype.gender = "M";

const Peter = new Boy("Peter", 13);

console.log(Peter.gender); // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age); // 13
```

### DOM 노드 조작

이 예에서는 `Proxy`를 사용하여 두 개의 다른 요소의 속성을 토글합니다. 따라서 한 요소에 속성을 설정하면 다른 요소에 속성이 설정되지 않습니다.

`selected` 속성을 가진 객체에 대한 프록시인 `view` 객체를 생성합니다. 프록시 핸들러는 {{jsxref("Proxy/Proxy/set", "set()")}} 처리기를 정의합니다.

`view.selected`에 HTML 요소를 할당하면 요소의 `'aria-selected'` 속성이 `true`로 설정됩니다. 그런 다음 `view.selected`에 다른 요소를 할당하면 이 요소의 `'aria-selected'` 속성이 `true`로 설정되고 이전 요소의 `'aria-selected'` 속성이 자동으로 `false`로 설정됩니다.

```js
const view = new Proxy(
  {
    selected: null,
  },
  {
    set(obj, prop, newval) {
      const oldval = obj[prop];

      if (prop === "selected") {
        if (oldval) {
          oldval.setAttribute("aria-selected", "false");
        }
        if (newval) {
          newval.setAttribute("aria-selected", "true");
        }
      }

      // 값을 저장하는기본 동작
      obj[prop] = newval;

      // 성공 표시
      return true;
    },
  },
);

const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");

// item1 선택
view.selected = item1;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: true

// item2를 선택하고 item1은 선택 해제
view.selected = item2;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: false

console.log(`item2: ${item2.getAttribute("aria-selected")}`);
// item2: true
```

### 값 수정 및 추가 속성

`products` 프록시 객체는 전달된 값을 계산하고 필요한 경우 배열로 변환합니다. 또한 객체는 getter 및 setter 모두에게 `latestBrowser`라는 추가 속성을 지원합니다.

```js
const products = new Proxy(
  {
    browsers: ["Internet Explorer", "Netscape"],
  },
  {
    get(obj, prop) {
      // 추가 속성
      if (prop === "latestBrowser") {
        return obj.browsers[obj.browsers.length - 1];
      }

      // 값을 저장하는 기본 동작
      return obj[prop];
    },
    set(obj, prop, value) {
      // 추가 속성
      if (prop === "latestBrowser") {
        obj.browsers.push(value);
        return true;
      }

      // 값이 배열이 아닌 경우 배열로 변환
      if (typeof value === "string") {
        value = [value];
      }

      // 값을 저장하는 기본 동작
      obj[prop] = value;

      // 성공 표시
      return true;
    },
  },
);

console.log(products.browsers);
//  ['Internet Explorer', 'Netscape']

products.browsers = "Firefox";
// (실수로) 문자열을 넘겨줌

console.log(products.browsers);
//  ['Firefox'] <- 문제없이 값은 배열로 변환됨

products.latestBrowser = "Chrome";

console.log(products.browsers);
//  ['Firefox', 'Chrome']

console.log(products.latestBrowser);
//  'Chrome'
```

### 속성으로 배열 아이템 객체 찾기

이 프록시는 일부 유틸리티 기능으로 배열을 확장합니다. 보시다시피 {{jsxref("Object.defineProperties", "Object.defineProperties()")}}를 사용하지 않고도 속성을 유연하게 "정의"할 수 있습니다. 이 예제는 해당 셀로 테이블 행을 찾는 데 적용할 수 있습니다. 이 경우 대상은 {{domxref("HTMLTableElement.rows", "table.rows")}}가 됩니다.

```js
const products = new Proxy(
  [
    { name: "Firefox", type: "browser" },
    { name: "SeaMonkey", type: "browser" },
    { name: "Thunderbird", type: "mailer" },
  ],
  {
    get(obj, prop) {
      // 값을 저장하는 기본 동작. prop은 보통 int
      if (prop in obj) {
        return obj[prop];
      }

      // product의 수를 가져옴. products.length에 대한 별칭
      if (prop === "number") {
        return obj.length;
      }

      let result;
      const types = {};

      for (const product of obj) {
        if (product.name === prop) {
          result = product;
        }
        if (types[product.type]) {
          types[product.type].push(product);
        } else {
          types[product.type] = [product];
        }
      }

      // 이름으로 product 가져오기
      if (result) {
        return result;
      }

      // type으로 product 가져오기
      if (prop in types) {
        return types[prop];
      }

      // types로 product 가져오기
      if (prop === "types") {
        return Object.keys(types);
      }

      return undefined;
    },
  },
);

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products["Firefox"]); // { name: 'Firefox', type: 'browser' }
console.log(products["Chrome"]); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3
```

### 완전한 trap 예제

교훈적인 목적으로 완전한 샘플 `traps` 목록을 생성하기 위해 이 유형의 작업에 특히 적합한 네이티브 객체가 아닌 [간단한 쿠키 프레임워크](https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework)에 의해 생성된 전역 객체 `docCookies`를 프록시화하려고 합니다.

```js
/*
  const docCookies = ... 여기서 "docCookies"를 가져옵니다.
  https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework
*/

const docCookies = new Proxy(docCookies, {
  get(target, key) {
    return target[key] || target.getItem(key) || undefined;
  },
  set(target, key, value) {
    if (key in target) {
      return false;
    }
    return target.setItem(key, value);
  },
  deleteProperty(target, key) {
    if (!(key in target)) {
      return false;
    }
    return target.removeItem(key);
  },
  ownKeys(target) {
    return target.keys();
  },
  has(target, key) {
    return key in target || target.hasItem(key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor && "value" in descriptor) {
      target.setItem(key, descriptor.value);
    }
    return target;
  },
  getOwnPropertyDescriptor(target, key) {
    const value = target.getItem(key);
    return value
      ? {
          value,
          writable: true,
          enumerable: true,
          configurable: false,
        }
      : undefined;
  },
});

/* 쿠키 테스트 */

console.log((docCookies.myCookie1 = "First value"));
console.log(docCookies.getItem("myCookie1"));

docCookies.setItem("myCookie1", "Changed value");
console.log(docCookies.myCookie1);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- ["Proxies are awesome" Brendan Eich presentation at JSConf](https://www.youtube.com/watch?v=sClk6aB_CPk) ([slides](https://www.slideshare.net/BrendanEich/metaprog-5303821))
- [Tutorial on proxies](https://web.archive.org/web/20171007221059/https://soft.vub.ac.be/~tvcutsem/proxies/)
