---
title: 키 기반 컬렉션
slug: Web/JavaScript/Guide/Keyed_collections
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}

이번 장에서는 입력된 키값을 기준으로 정렬되는 데이터의 집합(자료 구조)에 대해 소개 할 것이다. Map과 Set은 입력된 순서대로 반복적으로 접근 가능한 요소들을 포함하고 있다.

## Maps

### `Map` 객체

ECMAScript 6에서 값들을 매핑하기 위한 새로운 데이터 구조를 소개 하고 있다. 그중 하나인 Map객체는 간단한 키와 값을 서로 연결(매핑)시켜 저장하며 저장된 순서대로 각 요소들을 반복적으로 접근할 수 있도록 한다.

다음 코드는 Map이 제공하는 기본적인 기능들을 보여 주고 있다. 더 많은 예제와 모든 기능에 대한 API를 볼려면 {{jsxref("Map")}} 페이지를 참고하면 된다. Map객체에 저장되어 있는 각 요소들을 \[키, 값] 형태의 배열로 반복적으로 반환해주는 [`for...of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 를 사용할 수 있다.

```js
var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"
```

### Object와 Map 비교

전통적으로 {{jsxref("Object", "objects", "", 1)}} 는 문자열을 값에 매핑하는 데 사용되었다. Object는 키를 값으로 설정하고, 값을 검색하고, 키를 삭제하고, 키에 저장된 내용을 검색 할 수 있게 만들어준다. 그러나 Map 객체는 더 나은 맵이 되도록 하는 몇 가지 장점을 가지고 있다.

- Object의 키는 {{jsxref("Global_Objects/String","Strings")}}이며, Map의 키는 모든 값을 가질 수 있다.
- Object는 크기를 수동으로 추적해야하지만, Map은 크기를 쉽게 얻을 수 있다.
- Map은 삽입된 순서대로 반복된다.
- 객체(Object)에는 prototype이 있어 Map에 기본 키들이 있다. (이것은 map = Object.create(null) 를 사용하여 우회할 수 있다. )

Object 혹은 Map중에 어느 것을 사용할지를 결정하는데 도움을 줄 두가지 팁이 있다:

- 실행 시까지 키를 알수 없고, 모든 키가 동일한 type이며 모든 값들이 동일한 type일 경우에는 objects를 대신해서 map을 사용해라.
- 각 개별 요소에 대해 적용해야 하는 로직이 있을 경우에는 objects를 사용해라.

### `WeakMap` 객체

{{jsxref("WeakMap")}}객체는 object만을 키로 허용하고 값은 임의의 값을 허용하는 키/값 형태의 요소의 집합이다. 키가 가지고 있는 객체에 대한 참조는 객체에 대한 참조가 더이상 존재하지 않을 경우 garbage collection(GC)의 수거 대상이 되는 약한 참조를 의미한다. `WeakMap` API는 Map API와 동일하다.

단 한가지 Map객체와 다른 점은 WeakMap의 키들은 열거형이 아니라는 점이다. (즉, 키 목록을 제공해 주는 메서드가 없다는 것이다.) 만약에 키 목록을 제공한다면 garbage collection의 상태, 결과에 따라 키 목록이 변하게 될 것이다. 이는 비 결정성을 야기한다.

WeakMap에 대한 더 많은 정보와 예제 코드 그리고 "왜 WeakMap을 사용하지?"를 보고 싶다면 {{jsxref("WeakMap")}} 페이지를 참고하면 된다.

`WeakMap`를 사용하는 한가지 경우는 객체의 사적인 정보를 저장하기 위해서 이거나 상세 구현 내용을 숨기기 위한 것이다. 다음의 예제는 Nick Fitzgerald의 블로그 글- ["Hiding Implementation Details with ECMAScript 6 WeakMaps"](http://fitzgeraldnick.com/weblog/53/)-에서 가져온 것이다. 객체가 가지고 있는 그렇지만 외부에 공개되지 않는(private) 데이터와 메서드들은 `WeakMap`객체인 `privates`에 저장이 된다. 인스턴스를 통해 접근 가능한 모든 것들과 prototype은 public이고 다른 것들은 외부에서는 접근이 불가하다 그 이유는 `privates`는 모듈로부터 내보내기(export)가 되지 않기 때문이다.

```js
const privates = new WeakMap();

function Public() {
  const me = {
    // Private data goes here
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Do stuff with private data in `me`...
};

module.exports = Public;
```

## Sets

### `Set` object

{{jsxref("Set")}}객체는 값들의 집합이다. 입력된 순서에따라 저장된 요소를 반복처리할 수 있다. Set은 중복된 값을 허용하지 않는다. 따라서 특정 값은 Set내에서 하나만 존재 하게 된다.

아래의 코드는 Set의 기본적인 동작들을 보여 준다. 더 많은 예제와 모든 API는 {{jsxref("Set")}} 참조 페이지를 보면 된다.

```js
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
```

### 배열과 Set의 상호 변환

{{jsxref("Array.from")}} 혹은 [spread operator](/ko/docs/Web/JavaScript/Reference/Operators/Spread_operator)를 통해 Set객체를 가지고 {{jsxref("Array")}}을 생성할 수 있다. 또한 Set 생성자는 배열을 인자로 받을 수 있고 해당 배열을 Set객체의 요소로 저장한다. 한번 더 상기시키면 Set객체는 중복된 값을 저장하지 않기때문에 주어진 배열내의 중복된 요소들을 제거되어 Set으로 변환된다.

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### 배열과 Set비교

일반적으로 Javascript에선 배열에 특정 요소의 집합을 저장한다. 하지만 Set객체는 몇가지 이점을 제공한다.

- {{jsxref("Array.indexOf", "indexOf")}}메서드를 사용하여 배열내에 특정 요소가 존재하는지 확인하는 것은 느리다.
- 배열에선 해당 요소를 배열에서 잘라내야 하는 반면 Set객체는 요소의 값으로 해당 요소를 삭제하는 기능 제공한다.
- {{jsxref("NaN")}}은 배열에서 indexOf메서드로 찾을 수 없다.
- Set객체는 값의 유일성을 보장하기 때문에 직접 요소의 중복성을 확인할 필요가 없다.

### `WeakSet` 객체

{{jsxref("WeakSet")}} objects are collections of objects. An object in the `WeakSet` may only occur once; it is unique in the `WeakSet`'s collection and objects are not enumerable.

{{jsxref("WeakSet")}}객체는 객체를 저장하는 일종의 집합이다. `WeakSet내의 중복된 객체는 없으며 WeakSet내의 요소를 열거할 수는 없다.`

{{jsxref("Set")}}과 가장 큰 차이점은 다음과 같다.

- `Set과는 다르게 WeakSet은 객체의 집합이며 객체만 저장할 수 있다. 특정 type의 값을 저장할 수는 없다.`
- WeakSet은 약한 참조를 가진다. WeakSet내의 객체에 대한 참조는 약하게 연결이 되어 있다. WeakSet내에 저장되어 있는 객체에 대한 참조가 없게되면 garbage collection 대상이되어 수거 된다. 따라서 현재 저장되어 있는 객체에 대한 목록은 없으며 WeakSet은 열거형이 아니다.

`WeakSet객체의 사용 사례는 제한되어 있다. 메모리 누수가 발생되지 않기때문에 안전하게 DOM요소를 키로 저장할 수 있고 예를 들면 추적을 위해 DOM요소들을 WeakSet에 저장할 수 있다.`

## `Map과 Set의 키와 값의 동치성`

Map객체의 key에 대한 동치성 비교와 Set객체의 값에 대한 동치성 비교 모두 "[same-value-zero algorithm](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)"에 근거한다.

- 동치성 비교는 `=== 비교 연산과 같이 작동한다.`
- \-0과 +0은 같다고 간주한다.
- {{jsxref("NaN")}}는 자기 자신하고 같다고 간주한다. (===와는 반대로)

{{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}
