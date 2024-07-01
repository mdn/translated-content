---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
---

{{JSRef}}

**`Map`** 객체는 키-값 쌍과 키의 원래 삽입 순서를 기억합니다. 모든 값(객체 및
{{glossary("Primitive", "원시 값")}} 모두)은 키 또는 값으로 사용될 수 있습니다.

{{EmbedInteractiveExample("pages/js/map.html", "taller")}}

## 설명

`Map` 객체는 키-값 쌍인 집합입니다. 한 `Map`에서의 키는 **오직 단 하나만 존재** 합니다. 이는 `Map` 집합의 유일성입니다.
`Map` 객체는 키-값 쌍으로 반복됩니다. {{jsxref("Statements/for...of", "for...of")}} 루프는
각 반복에 대해 `[key, value]`로 이루어진 멤버가 2개인 배열을 반환합니다. 반복은 삽입한 순서대로 발생합니다. 즉,
[`set()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/set) 메서드로 맵에 처음
삽입한 각각의 키-값 쌍 순서와 대응됩니다. (`set()`이 호출되었을때 맵에서 해당 키가 없었을 경우입니다)

`Map`의 명세는 "평균적으로 집합 내 요소의 수에 따라 하위 선형인 접근 시간을 제공하는" 맵을 구현해야 한다고 기술되어 있습니다.
따라서 복잡성이 O(N)보다 더 나은 경우 내부적으로 해시 테이블(O(1) 룩업), 검색 트리(O(log(N)) 룩업) 또는 기타 데이터
구조로 표현될 수 있습니다.

### 키 동일성

값 동일성은 [`SameValueZero`](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality)을
기반으로 합니다.(`0`과 `-0`을 다르게 취급하는 [등가 같음](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is)을
사용하였습니다. [브라우저 호환성](#browser_compatibility)을 확인해보세요). 즉, `NaN !== NaN`에도 불구하고
{{jsxref("NaN")}}은 `NaN`과 동일하게 간주되며, 다른 모든 값은 `===` 연산자의 의미론에 따라 동일하게 간주됩니다.

### 객체 vs 맵

{{jsxref("Object")}}는 `Map`과 유사합니다. 둘 다 값을 가리키는 키를 설정하고, 해당 값을 받아오며, 키를 삭제하며,
키에 무언가가 저장되었는지 여부를 알 수 있습니다. 이러한 이유로 (그리고 대안으로 사용할 수 있는 내장 객체가 없었기 때문에)
`Object`는 역사적으로 `Map`으로 사용되어 왔습니다.

그러나 경우에 따라서는 아래와 같이 `Map`이 선호되는 중요한 차이점이 있습니다.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Map</th>
      <th scope="col">Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">우발적 키</th>
      <td>
        <code>Map</code>는 기본적으로 키를 포함하지 않습니다. 여기에는 명시적으로 입력된 내용만 포함됩니다.
      </td>
      <td>
        <p>
          <code>Object</code>는 프로토타입이 있으므로 주의하지 않으면 자신의 키와 충돌할 수 있는 기본 키가 포함되어 있습니다.
        </p>
        <div class="notecard note">
          <p>
            <strong>참고:</strong>
            이는 {{jsxref("Object.create", "Object.create(null)")}}를 사용하여 무시할 수 있지만 거의 수행되지 않습니다.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">보안</th>
      <td>
        <code>Map</code>은 사용자가 제공하는 키와 값에 대해서 안전하게 사용할 수 있습니다.
      </td>
      <td>
        <p>
          사용자가 제공한 키-값 쌍을 <code>Object</code>에 설정하면 공격자가 객체의 프로토타입을 재정의하여 <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">객체 주입 공격</a>을 발생시킬 수 있습니다. 돌발적인 키 문제와 마찬가지로 <code>null</code> 프로토타입 객체를 사용하여 이 문제를 해결할 수도 있습니다.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">키 유형</th>
      <td>
        <code>Map</code>의 키는 모든 값(함수, 객체 또는 원시값 포함)이 될 수 있습니다.
      </td>
      <td>
         <code>Object</code>의 키는 {{jsxref("String")}} 또는 {{jsxref("Symbol")}}이여야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">키 순서</th>
      <td>
        <p>
          <code>Map</code>에서 키는 단순하고 직관적인 방식으로 정렬됩니다. <code>Map</code> 객체는 항목을 삽입한 순서대로 항목, 키 및 값을 반복합니다.
        </p>
      </td>
      <td>
        <p>
          일반적인 <code>Object</code>의 키는 정렬되어 있지만 항상 그런것은 아니며 순서가 복잡합니다. 결과적으로 속성 순서에 의존하지 않는 것이 가장 좋습니다.
        </p>
        <p>
          순서는 ECMAScript 2015에서만 자체 속성에 대해 처음 정의되었습니다.
          ECMAScript 2020은 상속된 속성의 순서도 정의합니다.
          <a href="https://tc39.es/ecma262/#sec-ordinaryownpropertykeys"
            >OrdinaryOwnPropertyKeys</a
          >
          와
          <a href="https://tc39.es/ecma262/#sec-enumerate-object-properties">EnumerateObjectProperties</a>
          추상 명세작업을 참고하시기 바랍니다. 그러나 객체의 <strong>모든</strong> 속성을 반복하는 단일 메커니즘은 없습니다. 다양한 메커니즘에는 각각 다른 속성 하위 집합이 포함됩니다
          ({{jsxref("Statements/for...in", "for-in")}}은 오직 열거 가능한 문자열 키 속성만 포함합니다.
          {{jsxref("Object.keys")}}은 열거 가능한 자체 문자열 키 속성만 포함합니다.
          {{jsxref("Object.getOwnPropertyNames")}}은 열거 불가능하더라도 자체 문자열 키 속성을 포함합니다.
          {{jsxref("Object.getOwnPropertySymbols")}}은 <code>Symbol</code>-키 속성에 대해 동일합니다.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>크기</p></th>
      <td>
        <code>Map</code>의 아이템의 수는 {{jsxref("Map.prototype.size", "size")}} 속성에서 쉽게 가져올 수 있습니다.
      </td>
      <td>
        <code>Object</code>의 아이템 수는 수동으로 결정해야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">순회</th>
      <td>
        <code>Map</code>은 <a href="/ko/docs/Web/JavaScript/Reference/Iteration_protocols">
        순회가능(iterable)</a>하기 때문에 이므로 직접 반복할 수 있습니다.
      </td>
      <td>
        <p>
          <code>Object</code>는 <a href="/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">iteration protocol</a>을 구현하지 않기 때문에
          로 개체는 <a href="/ko/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a>문을 사용하여 직접적으로 반복할 수 없습니다.
        </p>
        <div class="notecard note">
          <p><strong>참고:</strong></p>
          <ul>
            <li>
              객체는 iteration protocol을 구현하거나
              <a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys</code></a> 혹은
              <a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"><code>Object.entries</code></a>
              를 사용하여 객체의 반복 가능 항목을 얻을 수 있습니다.
            </li>
            <li>
              <a href="/ko/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> 문을 사용하면 객체의 열거 가능한 속성(enumerable)을 반복할 수 있습니다 .
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">성능</th>
      <td>
        <p>
          키-값 쌍의 빈번한 추가 및 제거와 관련된 상황에서는 성능이 좀 더 좋습니다.
        </p>
      </td>
      <td>
        <p>
          키-값 쌍의 빈번한 추가 및 제거에 최적화되지 않았습니다.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Serialization and parsing</th>
      <td>
        <p>직렬화 또는 구문 분석에 대한 기본 지원이 없습니다.</p>
        <p>
          (하지만 {{jsxref("JSON.stringify()")}}에 인자로 <em>replacer</em>를 사용한다면 <code>Map</code>에 대한 자신만의 직렬화 및 구문 분석을 지원하게 만들 수 있습니다.
          Stack Overflow 질문인
          <a href="https://stackoverflow.com/q/29085197/">How do you JSON.stringify an ES6 Map?</a>)을 참고하세요.)
        </p>
      </td>
      <td>
        <p>
          {{jsxref("JSON.stringify()")}}를 사용하여 {{jsxref("Object")}}을 JSON으로 직렬화를 기본 지원합니다.
        </p>
        <p>
          {{jsxref("JSON.parse()")}}를 사용하여 JSON에서 {{jsxref("Object")}}으로의 구문 분석을 기본 지원합니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### 객체 속성 설정하기

객체 속성 설정은 Map 객체에서도 작동하지만 상당한 혼란을 야기할 수 있습니다.

따라서 이는 다음과 같은 방식으로 동작하는 것처럼 보입니다.

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

그러나 속성을 설정하는 방법은 Map 데이터 구조와 상호 작용하지 않습니다. 속성 설정은 일반 객체의 기능을 사용합니다. 'bla' 값은 질의를 위한 Map에 저장되지 않습니다. 데이터에 대한 다른 작업도 아래와 같이 실패합니다.

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

맵에 데이터를 저장하는 올바른 방법은 `set(key, value)` 메서드를 사용하는 것입니다.

```js example-good
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1
```

## 생성자

- {{jsxref("Map/Map", "Map()")}}
  - : 새로운 `Map` 객체를 생성합니다.

## 정적 속성

- {{jsxref("Map.@@species", "get Map[@@species]")}}
  - : 파생 객체를 만드는 데 사용되는 생성자 함수입니다.

## 인스턴스 속성

- `Map.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)
    속성의 초기 값은 문자열 `"Map"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서
    사용합니다.
- {{jsxref("Map.prototype.size")}}
  - : `Map` 객체의 키/값 쌍의 숫자를 반환합니다.

## 인스턴스 메서드

- {{jsxref("Map.prototype.clear()")}}
  - : `Map` 객체에서 모든 키-값 쌍을 제거합니다.
- {{jsxref("Map.prototype.delete()")}}
  - : `Map` 객체에 해당 요소가 존재하며 삭제되었을 경우 `true`를 반환하며 해당 요소가 존재하지 않는 경우 `false`를
    반환합니다. 이 이후에 `map.has(key)`를 실행하면 `false`를 반환할 것입니다.
- {{jsxref("Map.prototype.get()")}}
  - : 주어진 키에 해당하는 값을 반환하거나 값이 없다면 `undefined`을 반환합니다.
- {{jsxref("Map.prototype.has()")}}
  - : 주어진 키에 연관된 값이 `Map` 객체에 존재하는지 여부를 불리언 값으로 반환합니다.
- {{jsxref("Map.prototype.set()")}}
  - : `Map`객체에서 전달된 키의 값을 설정합니다. `Map`객체를 반환합니다.
- {{jsxref("Map/@@iterator", "Map.prototype[@@iterator]()")}}
  - : `Map` 객체에 삽입된 순서에 따라 `[key, value]` 두 개의 멤버 배열을 포함하는 새로운 반복자를 반환합니다.
- {{jsxref("Map.prototype.keys()")}}
  - : `Map` 객체에 삽입된 순서에 따라 각 요소의 키를 포함하는 새로운 반복자를 반환합니다.
- {{jsxref("Map.prototype.values()")}}
  - : `Map` 객체에 삽입된 순서에 따라 각 요소의 값을 포함하는 새로운 반복자를 반환합니다.
- {{jsxref("Map.prototype.entries()")}}
  - : `Map` 객체에 삽입된 순서에 따라 `[key, value]` 두 개의 멤버 배열을 포함하는 새로운 반복자를 반환합니다.
- {{jsxref("Map.prototype.forEach()")}}
  - : `Map`객체에 존재하는 각 키-값 쌍에 대해 삽입 순서대로 `callbackFn`을 한 번씩 호출 합니다. 만약
    `forEach`호출 시 `thisArg` 매개변수가 있다면 각 콜백의 `this` 값으로 사용됩니다.

## 예제

### Map 객체 사용하기

```js
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// 값 설정
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

// 값 불러오기
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get("a string")); // "value associated with 'a string'", 왜냐하면 keyString === 'a string'
console.log(myMap.get({})); // undefined, 왜냐하면 keyObj !== {}
console.log(myMap.get(function () {})); // undefined, 왜냐하면 keyFunc !== function () {}
```

### Map 키로 NaN 사용하기

{{jsxref("NaN")}}도 키로 사용할 수 있습니다. 모든 `NaN`이 자신과 같지는 않지만(`NaN !== NaN`은 참입니다), `NaN`은 서로 구별할 수 없기 때문에 다음과 같은 예시가 동작합니다.

```js
const myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN);
// "not a number"

const otherNaN = Number("foo");
myMap.get(otherNaN);
// "not a number"
```

### for...of로 맵 순회하기

맵은 `for...of` 반복을 사용하여 순회할 수 있습니다.

```js
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one
```

### forEach()로 맵 순회하기

맵은 {{jsxref("Map.prototype.forEach", "forEach()")}} 메서드를 사용하여 순회할 수 있습니다.

```js
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
// 0 = zero
// 1 = one
```

### 배열 객체와의 관계

```js
const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap = new Map(kvArray);
console.log(myMap.get("key1")); // "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap]);

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())); // ["key1", "key2"]
```

### 맵 복제하기와 병합하기

`Array`와 같이 `Map`은 복제가 가능합니다.

```js
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)
```

> **참고:** 데이터 자체는 복제가 안된다는 사실을 명심하셔야 합니다.

맵은 키 유일성을 유지한채로 병합이 가능합니다.

```js
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// 두 맵을 병합합니다. 키 값이 중복될 경우 마지막 키의 값을 따릅니다.
// 전개 문법은 맵을 배열로 변환합니다.
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

맵은 배열과 병합될 수 있습니다.

```js
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// 맵을 배열로 병합하기. 중복된 키가 있다면 마지막에 병합된 맵의 키에 해당하는 값이 설정됩니다.
const merged = new Map([...first, ...second, [1, "eins"]]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `Map`의 폴리필은 [`core-js`](https://github.com/zloirock/core-js#map)에서 확인할 수 있습니다
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
