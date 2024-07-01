---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{JSRef}}

**`WeakMap`** 은 키/값 쌍의 모음으로, 키는 반드시 객체 또는 [등록되지 않은 심볼][]이며 값은 임의의 [JavaScript 타입](/ko/docs/Web/JavaScript/Data_structures#javascript의_타입)입니다. `WeakMap`은 키에 대한 강력한 참조를 생성하지 않으므로, 객체가 `WeakMap`의 키에 포함되더라도 가비지 컬렉션의 대상이 됩니다. 키 객체가 가비지 컬렉터에 의해 정리된 후에는, 다른 곳에 강력한 참조가 존재하지 않는 한, 키에 연결됐던 값 또한 가비지 컬렉션 대상이 됩니다. `WeakMap`의 키로 사용할 수 있는 유일한 원시 값은 심볼, 정확히는 [등록되지 않은 심볼][]인데, 등록되지 않은 심볼은 고유함이 보장되며 다시 생성할 수 없기 때문입니다.

`WeakMap`을 사용하면 값이 키를 참조하더라도 키 객체의 가비지 컬렉션을 방지하지 않는 방식으로 데이터를 객체에 연결할 수 있습니다. 그러나 `WeakMap`은 키의 활성 상태를 관찰하는 것을 허용하지 않으며, 이는 `WeakMap`의 키를 열거할 수 없는 이유입니다. 만약 `WeakMap`이 키 목록을 얻을 수 있는 어떤 메서드를 제공했다면, 그 목록은 가비지 컬렉션 상태에 따라 달라질 것이므로 비결정성이 발생합니다. 키 목록이 필요하면 `WeakMap` 대신 {{jsxref("Map")}}을 사용해야 합니다.

[키 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Keyed_collections) 안내서의 [WeakMap 객체](/ko/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_객체) 구획에서 `WeakMap`에 대해 자세히 알아볼 수 있습니다.

## 설명

`WeakMap`의 키는 반드시 가비지 컬렉션 가능해야 합니다. 대부분의 {{Glossary("Primitive", "원시 값")}}은 임의로 생성될 수 있고 생명 주기가 따로 없으므로 키로 사용할 수 없습니다. 객체와 [등록되지 않은 심볼][]은 가비지 컬렉션 대상이므로 키로 사용할 수 있습니다.

### 왜 WeakMap인가?

JavaScript의 맵 API는 4개의 API 메서드와 이들이 공유하는 두 개의 배열(키용 하나, 값용 하나)으로도 구현하려면 구현할 수 있습니다. 이 맵에 요소를 추가하면 키와 값을 동시에 각 배열의 끝으로 넣는 작업을 수행할 것입니다. 결과적으로, 키와 값이 두 배열 각각에서 같은 인덱스에 위치하게 됩니다. 맵에서 값을 가져오려면 키 배열을 순회하면서 일치하는 항목을 찾고, 이 항목의 인덱스로 값 배열에서 값을 가져올 것입니다.

이 구현에는 두 가지 큰 불편함이 있습니다.

1. 값의 설정과 검색이 `O(n)`(*n*은 맵 키의 수)입니다. 두 작업 모두 일치하는 값을 찾기 위해 키 목록을 순회해야 하기 때문입니다.
2. 메모리 누수입니다. 배열은 각 키와 각 값에 대한 참조가 무기한 유지되도록 보장하기 때문인데, 이 때문에 다른 곳에서 객체를 참조하지 않더라도 키가 가비지 컬렉션 대상이 되지 못합니다. 값도 마찬가지입니다.

반면, `WeakMap`에서 키 객체는 가비지 컬렉션 되지 않는 한 자신의 값을 강력하게 참조하고, 그 후에는 약하게 참조합니다. 따라서 `WeakMap`은 다음과 같습니다.

- 가비지 컬렉션을 방지하지 않으므로 키 객체에 대한 참조가 결국 사라집니다.
- 키 객체가 `WeakMap` 밖의 다른 곳에서 참조되지 않으면 그 값의 가비지 컬렉션도 허용합니다.

`WeakMap`은 가비지 컬렉션 되지 않아야만 유용한 키에 정보를 매핑할 때 특히 유용한 구조입니다.

그러나 `WeakMap`은 키의 활성 상태를 관찰하는 것을 허용하지 않으므로 키를 열거할 수 없습니다. 키 목록을 얻을 수 있는 방법은 존재하지 않습니다. 그런 방법이 존재했다면, 키 목록은 가비지 컬렉션 상태에 따라 달라질 것이므로 비결정성이 발생합니다. 키 목록이 필요하면 {{jsxref("Map")}}을 사용해야 합니다.

## 생성자

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : 새로운 `WeakMap` 객체를 생성합니다.

## 인스턴스 속성

이 속성들은 `WeakMap.prototype`에 정의되며 모든 `WeakMap` 인스턴스가 공유합니다.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : 인스턴스 객체를 생성했던 생성자 함수입니다. `WeakMap` 인스턴스에서의 초기 값은 {{jsxref("WeakMap/WeakMap", "WeakMap")}} 생성자입니다.
- `WeakMap.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"WeakMap"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용합니다.

## 인스턴스 메서드

- {{jsxref("WeakMap.prototype.delete()")}}
  - : `key`에 연결된 값을 제거합니다. 이후 `WeakMap.prototype.has(key)`는 `false`를 반환할 것입니다.
- {{jsxref("WeakMap.prototype.get()")}}
  - : `key`에 연결된 값을 반환합니다. 값이 없으면 `undefined`를 반환합니다.
- {{jsxref("WeakMap.prototype.has()")}}
  - : `key`에 연결된 값이 `WeakMap` 객체에 존재하는지 나타내는 불리언 값을 반환합니다.
- {{jsxref("WeakMap.prototype.set()")}}
  - : `WeakMap` 객체의 `key`에 `value`를 연결합니다. `WeakMap` 객체를 반환합니다.

## 예제

### WeakMap 사용하기

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // 값은 함수와 객체를 포함해 아무거나 가능
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // 키는 아무 객체나 가능. 다른 WeakMap도 가능합니다!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, wm2에는 o2에 연결된 값이 없음
wm2.get(o3); // undefined, o3에 undefined를 연결함

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (값이 undefined지만)

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

### WeakMap과 유사하지만 .clear() 메서드를 가진 클래스 구현

```js
class ClearableWeakMap {
  #wm;
  constructor(init) {
    this.#wm = new WeakMap(init);
  }
  clear() {
    this.#wm = new WeakMap();
  }
  delete(k) {
    return this.#wm.delete(k);
  }
  get(k) {
    return this.#wm.get(k);
  }
  has(k) {
    return this.#wm.has(k);
  }
  set(k, v) {
    this.#wm.set(k, v);
    return this;
  }
}
```

### 비공개 멤버 흉내내기

{{jsxref("WeakMap")}}을 사용하면 비공개 데이터를 객체에 연결할 수 있고, 다음과 같은 이점을 누릴 수 있습니다.

- {{jsxref("Map")}}과 비교했을 때, `WeakMap`은 키로 사용되는 객체에 대한 강력한 참조를 보유하지 않으므로 객체와 그 메타데이터가 동일한 수명을 공유하고, 따라서 메모리 누수를 방지할 수 있습니다.
- 열거할 수 없는 속성이나 {{jsxref("Symbol")}} 속성을 사용하는 것과 비교했을 때, `WeakMap`은 객체 외부에 존재하므로 {{jsxref("Object.getOwnPropertySymbols")}} 등 리플렉션 메서드를 사용하더라도 사용자 코드에서는 메타데이터를 가져올 수 없습니다.
- [클로저](/ko/docs/Web/JavaScript/Closures)와 비교했을 때, 하나의 `WeakMap`을 생성자에서 생성한 모든 인스턴스에 재사용할 수 있으므로 메모리 효율성이 더 높고, 같은 클래스의 다른 인스턴스가 서로의 비공개 멤버를 읽을 수 있습니다.

```js
let Thing;

{
  const privateScope = new WeakMap();
  let counter = 0;

  Thing = function () {
    this.someProperty = "foo";

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function () {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function () {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

const thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

위 코드는 [비공개 필드](/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields)를 사용하는 아래 예제와 동일하다고 볼 수 있습니다.

```js
class Thing {
  static #counter = 0;
  #hidden;
  constructor() {
    this.someProperty = "foo";
    this.#hidden = ++Thing.#counter;
  }
  showPublic() {
    return this.someProperty;
  }
  showPrivate() {
    return this.#hidden;
  }
}

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

### 메타데이터 연결하기

{{jsxref("WeakMap")}}을 사용하면 객체의 생명 주기에 영향을 주지 않고도 메타데이터를 연결할 수 있습니다. 비공개 멤버 예제하고도 굉장히 비슷한데, 비공개 멤버 또한 [프로토타입 상속](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)에 참여하지 않는 외부 메타데이터로 설계됐기 때문입니다.

하지만 이 방법은 이미 생성된 객체들을 대상으로도 확장할 수 있습니다. 예를 들어 웹에서는, DOM 요소에 추가 데이터를 연결했다가 나중에 접근하고 싶은 경우가 생길 수 있습니다. 흔히 쓰이는 방법은 데이터를 요소의 속성으로 붙이는 것입니다.

```js
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.clicked = false;
  button.addEventListener("click", () => {
    button.clicked = true;
    const currentButtons = [...document.querySelectorAll(".button")];
    if (currentButtons.every((button) => button.clicked)) {
      console.log("모든 버튼을 클릭했습니다!");
    }
  });
});
```

위 방법도 동작하지만, 몇 가지 문제가 있습니다.

- `clicked` 속성이 열거 가능하므로 [`Object.keys(button)`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 반복문 등에 노출됩니다. {{jsxref("Object.defineProperty()")}}를 사용하면 대응할 수 있지만, 대신 코드가 더 시끄러워집니다.
- `clicked` 속성은 일반 문자열 속성이므로 다른 코드에서 접근하거나 덮어쓸 수 있습니다. {{jsxref("Symbol")}} 키를 사용해 대응할 수 있지만, 그래도 {{jsxref("Object.getOwnPropertySymbols()")}}로 접근할 수 있습니다.

`WeakMap`을 사용하면 모두 고칠 수 있습니다.

```js
const buttons = document.querySelectorAll(".button");
const clicked = new WeakMap();
buttons.forEach((button) => {
  clicked.set(button, false);
  button.addEventListener("click", () => {
    clicked.set(button, true);
    const currentButtons = [...document.querySelectorAll(".button")];
    if (currentButtons.every((button) => clicked.get(button))) {
      console.log("모든 버튼을 클릭했습니다!");
    }
  });
});
```

여기서는 `clicked`에 접근할 수 있는 코드만 각 버튼의 클릭 상태를 알 수 있으므로 외부 코드는 이 상태를 바꿀 수 없습니다. 또한 버튼이 DOM에서 제거되면 연관됐던 메타데이터도 가비지 컬렉터가 자동으로 정리합니다.

### 캐싱

함수에 전달했던 매개변수와 그 함수의 결과를 연관지으면, 같은 매개변수를 다시 받았을 때 함수를 다시 실행하지 않고 캐시된 결과를 반환할 수 있습니다. 이 방법은 함수가 순수(외부 객체를 조작하거나, 기타 관측 가능한 부작용을 유발하지 않음)할 때 유용합니다.

```js
const cache = new WeakMap();
function handleObjectValues(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  const result = Object.values(obj).map(heavyComputation);
  cache.set(obj, result);
  return result;
}
```

하지만 함수가 한 객체를 받을 때만 사용할 수 있다는 점을 주의해야 합니다. 또한 입력했던 객체를 함수에 다시 전달할 일이 영원히 없다고 해도, 결과는 캐시에 계속 남아있게 됩니다. 더 효율적인 방법은 {{jsxref("Map")}}과 {{jsxref("WeakRef")}} 객체를 사용해서, 임의 타입의 입력 값을 그에 대응하는 (아마도 매우 큰) 계산 결과와 연관짓는 것입니다. 자세한 내용은 [WeakRef와 FinalizationRegistry](/ko/docs/Web/JavaScript/Memory_management#weakref와_finalizationregistry) 예제를 참고하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `WeakMap` 폴리필](https://github.com/zloirock/core-js#weakmap)
- [키 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Keyed_collections) 안내서의 [WeakMap 객체](/ko/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_객체)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}

[등록되지 않은 심볼]: /ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#전역_심볼_레지스트리의_공유_심볼
