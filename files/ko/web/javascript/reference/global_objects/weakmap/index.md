---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
---

{{JSRef}}

**`WeakMap`** 은 키에 대한 강력한 참조를 생성하지 않는 키/값 쌍의 모음으로 키는 반드시 객체이며, 값은 임의의 [JavaScript 타입](/ko/docs/Web/JavaScript/Data_structures#javascript_types)입니다. 강력한 참조를 생성하지 않는 이유는 객체가 `WeakMap`의 키로 존재한다고 해도 가비지 컬렉터로 수집되는 것을 막을 수 없기에 키로 사용되던 객체가 수집되면 `WeakMap`의 해당 값도 다른 곳에서 강력하게 참조되지 않는 한 수집의 대상이 되기 때문입니다.

`WeakMap`을 사용하면 값이 키를 참조하더라도 키 객체가 가비지 컬렉터에 수집되는 것을 방지하지 않는 방식으로 데이터를 객체에 연결할 수 있습니다. 그러나 `WeakMap`은 키의 활성을 관찰하는 것이 허용되지 않으므로 키 열거를 할 수 없습니다. `WeakMap`이 키 목록을 얻을 수 있는 어떤 메서드를 제공한다면, 가비지 컬렉터의 상태에 따라 키 목록이 달라지므로 비결정성이 발생합니다. 키 목록을 갖고 싶다면 `WeakMap` 대신 [`Map`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)을 사용해야 합니다.

[키기반의 컬렉션](/ko/docs/Web/JavaScript/Guide/Keyed_collections) 가이드의 [WeakMap 객체](/ko/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) 섹션에서 `WeakMap`에 대해 자세히 알아볼 수 있습니다.

## 설명

WeakMap의 키는 `Object` 타입뿐입니다. {{jsxref("Symbol")}}과 같은 {{Glossary("Primitive", "원시 값")}}은 `WeakMap`의 키로 사용될 수 없습니다.

### 왜 *Weak*Map인가?

JavaScript의 맵 API는 4개의 API 메서드와 이들이 공유하는 두 개의 배열(키용 하나, 값용 하나)을 사용하여 구현 _할 수 있습니다._ 이 맵에서 요소를 추가하려면 키와 값을 동시에 각 배열의 끝으로 넣는 작업을 수행합니다. 결과적으로 키와 값의 인덱스는 두 배열 모두 일치할 것입니다. 맵에서 값을 가져오려면 모든 키를 반복하여 일치하는 항목을 찾은 다음 이 일치 항목의 인덱스를 사용하여 값 배열에서 해당 값을 검색해야 합니다.

이러한 구현에는 다음과 같은 두 가지 주요 불편 사항이 있습니다.

1. 첫 번째는 설정 및 검색이 *O(*n*)*(_n_ 은 맵의 키 수) 이라는 것입니다. 두 작업 모두 일치하는 값을 찾기 위해 키 목록을 반복해야 하기 때문입니다.
2. 두 번째 불편한 점은 메모리 누수입니다. 배열은 각 키와 각 값에 대한 참조가 무기한 유지되도록 보장하기 때문인데, 이러한 참조는 객체에 대한 또 다른 참조가 없더라도 키가 가비지 컬렉터로 수집되지 못하도록 합니다. 값도 마찬가지입니다.

반면, `WeakMap`에서 키 객체는 키가 가비지 컬력센이 되지 않는 한 키를 강력하게 참조하고 그 이후로는 약하게 참조합니다. 따라서 `WeakMap`은 다음과 같습니다.

- 가비지 컬렉션을 방지하지 않아 결국 키 객체에 대한 참조를 제거합니다.
- 키 객체가 `WeakMap`이 아닌 다른 곳에서 참조되지 않는 경우 모든 값의 가비지 컬렉션을 허용합니다.

`WeakMap`은 _오직_ 가비지 컬렉션이 되지 않은 키에 대한 정보를 매핑할 때 특히 유용한 구조가 될 수 있습니다.

그러나 `WeakMap`은 키의 활성을 관찰하는 것이 허용되지 않기 때문에 키를 열거할 수 없으며, 키 목록을 얻을 수 있는 방법은 존재하지 않습니다. 만약 열거한다면, 키 목록은 가비지 컬렉션 상태에 따라 달라지기에 비결정성이 발생합니다. 키 목록을 얻고 싶다면 [`Map`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)을 사용해야 합니다.

## 생성자

- [`WeakMap()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap)
  - : 새로운 `WeakMap` 객체를 생성합니다.

## 인스턴스 메서드

- {{jsxref("WeakMap.delete", "WeakMap.prototype.delete(<var>key</var>)")}}
  - : `key`에 연결된 값을 제거합니다. 이후 `WeakMap.prototype.has(key)`는 `false`를 반환할 것입니다.
- {{jsxref("WeakMap.get", "WeakMap.prototype.get(<var>key</var>)")}}
  - : `key`에 연결된 값을 반환합니다. 값이 없으면 `undefined`를 반환합니다.
- {{jsxref("WeakMap.has", "WeakMap.prototype.has(<var>key</var>)")}}
  - : `key`에 연결된 값이 `WeakMap` 객체에 존재하는지 나타내는 불리언 값을 반환합니다.
- {{jsxref("WeakMap.set", "WeakMap.prototype.set(<var>key</var>, <var>value</var>)")}}
  - : `WeakMap` 객체의 `key`에 `value`를 연결합니다. `WeakMap` 객체를 반환합니다.

## 예제

### WeakMap 사용하기

```js
const wm1 = new WeakMap(),
      wm2 = new WeakMap(),
      wm3 = new WeakMap();
const o1 = {},
      o2 = function() {},
      o3 = window;

wm1.set(o1, 37);
wm1.set(o2, 'azerty');
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

### .clear() 메서드가 있는 WeakMap과 유사한 클래스 구현

```js
class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init);
  }
  clear() {
    this._wm = new WeakMap();
  }
  delete(k) {
    return this._wm.delete(k);
  }
  get(k) {
    return this._wm.get(k);
  }
  has(k) {
    return this._wm.has(k);
  }
  set(k, v) {
    this._wm.set(k, v);
    return this;
  }
}
```

### 비공개 멤버 에뮬레이션

개발자는 {{jsxref("WeakMap")}}을 사용하여 개인 데이터를 객체에 연결할 수 있으며, 이는 다음과 같은 이점이 있습니다.

- [`Map`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)과 대비하여 WeakMap은 키로 사용되는 객체에 대한 강력한 참조를 보유하지 않으므로 메타데이터는 객체 자체와 동일한 수명을 공유하여 메모리 누수를 방지할 수 있습니다.
- 열거할 수 없거나 {{jsxref("Symbol")}} 속성을 사용하는 것과 비교하여 WeakMap은 객체 외부에 있으며 {{jsxref("Object.getOwnPropertySymbols")}}와 같은 검색 메서드를 통해 메타데이터를 찾을 수 없습니다.
- [클로저](/ko/docs/Web/JavaScript/Closures)와 비교할 때 동일한 WeakMap은 생성자에서 생성된 모든 인스턴스에 재사용될 수 있으므로 메모리 효율성이 더 높고 동일한 클래스의 다른 인스턴스가 서로의 private 멤버를 읽을 수 있습니다.

```js
let Thing;

{
  const privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
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

이는 [private fields](/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields) 사용하는 다음 예제와 거의 동일합니다.

```js
class Thing {
  static #counter = 0;
  #hidden;
  constructor() {
    this.someProperty = 'foo';
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

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `WeakMap` 폴리필](https://github.com/zloirock/core-js#weakmap)
- [키기반의 컬렉션](/ko/docs/Web/JavaScript/Guide/Keyed_collections) 가이드의 [WeakMap object](/ko/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html)
- [`Map`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
