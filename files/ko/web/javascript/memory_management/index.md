---
title: 자바스크립트의 메모리 관리
slug: Web/JavaScript/Memory_management
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{JsSidebar("Advanced")}}

C 언어같은 저수준 언어에서는, 메모리 관리를 위해 [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) 과 [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions)를 사용합니다. 반면, 자바스크립트는 객체가 생성되었을 때 자동으로 메모리를 할당하고 더 이상 필요하지 않을 때 자동으로 해제합니다(가비지 컬렉션). 이러한 자동 메모리 관리는 잠재적 혼란의 원인이기도 한데, 개발자가 메모리 관리에 대해 고민할 필요가 없다는 잘못된 인식을 심어줄 수 있기 때문입니다.

## 메모리 생존주기

메모리 생존주기는 대부분의 프로그래밍 언어에서 비슷합니다.

1. 필요할 때 할당합니다.
2. 할당된 메모리를 사용합니다. (읽기, 쓰기)
3. 더 이상 필요하지 않으면 해제합니다.

두 번째 부분은 모든 언어에서 명시적으로 사용됩니다. 그러나 첫 번째 부분과 마지막 부분은 저수준 언어에서는 명시적이며, 자바스크립트와 같은 대부분의 고수준 언어에서는 암묵적으로 작동합니다.

### 자바스크립트의 메모리 할당

#### 값 초기화

프로그래머가 메모리 할당을 신경을 쓸 필요가 없도록, 자바스크립트는 값을 선언할 때 자동으로 메모리를 할당합니다.

```js
const n = 123; // 정수를 담기 위한 메모리 할당
const s = "azerty"; // 문자열을 담기 위한 메모리 할당

const o = {
  a: 1,
  b: null,
}; // 오브젝트와 그 오브젝트에 포함된 값들을 담기 위한 메모리 할당

// (오브젝트처럼) 배열과 배열에 담긴 값들을 위한 메모리 할당
const a = [1, null, "abra"];

function f(a) {
  return a + 2;
} // 함수를 위한 할당(함수는 호출 가능한 오브젝트)

// 함수식 또한 오브젝트를 담기 위한 메모리를 할당합니다.
someElement.addEventListener(
  "click",
  () => {
    someElement.style.backgroundColor = "blue";
  },
  false,
);
```

#### 함수 호출을 통한 할당

함수 호출의 결과 메모리 할당이 일어나기도 합니다.

```js
const d = new Date(); // Date 개체를 위해 메모리를 할당

const e = document.createElement("div"); // DOM 엘리먼트를 위해 메모리를 할당
```

메소드가 새로운 값이나 오브젝트를 할당하기도 합니다.

```js
const s = "azerty";
const s2 = s.substr(0, 3); // s2는 새로운 문자열
// 자바스크립트에서 문자열은 immutable 값이기 때문에,
// 메모리를 새로 할당하지 않고 단순히 [0, 3] 이라는 범위만 저장합니다.

const a = ["ouais ouais", "nan nan"];
const a2 = ["generation", "nan nan"];
const a3 = a.concat(a2);
// a 와 a2 를 이어붙여, 4개의 원소를 가진 새로운 배열
```

### 값 사용

값 사용이란 기본적으로는 할당된 메모리를 읽고 쓰는 것을 의미합니다. 변수나 객체 속성의 값을 읽고 쓰거나 함수 호출 시 함수에 인수를 전달하여 수행할 수 있습니다.

### 할당된 메모리가 더 이상 필요없을 때 해제하기

이 단계에서 대부분의 메모리 관리 문제가 발생합니다. "할당된 메모리가 더 이상 필요없을 때"를 알아내기가 가장 어렵기 때문입니다.

저수준 언어에서는 메모리가 필요없어질 때를 개발자가 직접 결정하고 해제하는 방식을 사용합니다.

자바스크립트와 같은 고수준 언어들은 "[가비지 콜렉션](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>)(GC)"이라는 자동 메모리 관리 방법을 사용합니다. 가비지 콜렉터의 목적은 메모리 할당을 추적하고 할당된 메모리 블록이 더 이상 필요하지 않게 되었는지를 판단하여 회수하는 것입니다. 이러한 자동 메모리 관리 프로세스가 궁극의 방법은 아닙니다. 왜냐하면 어떤 메모리가 여전히 필요한지 아닌지를 판단하는 것은 [비결정적](http://en.wikipedia.org/wiki/Decidability_%28logic%29) 문제이기 때문입니다.

## 가비지 콜렉션

위에서 언급한 것처럼 "더 이상 필요하지 않은" 모든 메모리를 찾는건 비결정적 문제입니다. 따라서 가비지 컬렉터들은 이 문제에 대한 제한적인 해결책을 구현합니다. 이 섹션에서는 주요한 가비지 컬렉션 알고리즘들과 그 한계를 이해하는데 필요한 개념을 설명합니다.

### 참조

가비지 콜렉션 알고리즘의 핵심 개념은 *참조*입니다. 메모리 관리 맥락에서, A라는 메모리를 통해 (명시적이든 암시적이든) B라는 메모리에 접근할 수 있다면 "B는 A에 참조된다" 라고 합니다. 예를 들어, 모든 자바스크립트 오브젝트는 [prototype](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) (implicit reference) (암시적 참조) 및 그 객체의 속성에 대한 참조 (명시적 참조)가 있습니다.

이 맥락에서 "객체"의 개념은 일반 JavaScript 객체와 함수 범위(또는 전역 어휘 범위)를 포함하여 더 넓게 확장됩니다.

### 참조-세기(Reference-counting) 가비지 콜렉션

> **참고:** 최신 브라우저는 더 이상 참조-세기 가비지 콜렉션 방식을 사용하지 않습니다.

참조-세기 알고리즘은 가장 단순하게 구현된 알고리즘입니다. 이 알고리즘은 '어떤 다른 객체도 참조하지 않는 객체'를 '더 이상 필요 없는 객체'라고 여깁니다. 이 객체를 "가비지"라 부르며, 이를 참조하는 다른 객체가 하나도 없는 경우, 수집이 가능합니다.

예제:

```js
let x = {
  a: {
    b: 2,
  },
};
// 2개의 객체가 생성되었습니다. 하나의 객체는 다른 객체의 속성으로 참조됩니다.
// 나머지 하나는 'x' 변수에 할당되어 참조됩니다.
// 명백하게, 가비지 콜렉션 수행될 메모리는 하나도 없습니다.

let y = x;
// 'y' 변수는 위의 객체를 참조하는 두 번째 변수입니다.

x = 1;
// 이제 'y' 변수가 위의 객체를 참조하는 유일한 변수가 되었습니다.

let z = y.a;
// 위의 객체의 'a' 속성을 참조했습니다.
// 이제 이 객체는 두 개의 참조를 가집니다.
// 'y'가 속성으로 참조하고 'z'라는 변수가 참조합니다.

y = "mozilla";
// 이제 맨 처음 'x' 변수가 참조했던 객체에 대한 참조가 없기 때문에, 가비지 컬렉션이 가능합니다.
// 그러나, 객체의 'a' 속성이 여전히 'z' 변수에 의해 참조되므로
// 메모리를 해제할 수 없습니다.

z = null;
// 이제 맨 처음 'x' 변수가 참조했던 객체의 'a' 속성에는
// 참조가 없으므로 가비지 콜렉션이 수행될 수 있습니다.
```

순환 참조를 다루는 일에는 한계가 있습니다. 다음 예제에서는, 두 객체가 서로 참조하는 속성으로 생성되어 순환 구조를 생성합니다. 함수 호출이 완료되면 이 두 객체는 스코프를 벗어나게 될 것이며, 그 시점에서 두 객체는 불필요해지므로 할당된 메모리는 회수되어야 합니다. 그러나 두 객체가 서로를 참조하고 있으므로, 참조-세기 알고리즘은 둘 다 가비지 컬렉션의 대상으로 표시하지 않습니다. 이러한 순환 참조는 메모리 누수의 흔한 원인입니다.

```js
function f() {
  const x = {};
  const y = {};
  x.a = y; // x는 y를 참조합니다.
  y.a = x; // y는 x를 참조합니다.

  return "azerty";
}

f();
```

### 표시하고-쓸기(Mark-and-sweep) 알고리즘

이 알고리즘은 "더 이상 필요없는 객체"를 "도달할 수 없는 객체"로 정의합니다.

이 알고리즘은 "roots" 라는 객체의 집합을 가지고 있습니다. 자바스크립트에서 root는 전역 객체입니다. 주기적으로, 가비지 콜렉터는 roots로 부터 시작하여 roots가 참조하는 객체들, roots가 참조하는 객체가 참조하는 객체들 등을 찾습니다. roots로 부터 시작하여 가비지 콜렉터는 모든 도달할 수 있는 객체들을 찾고, 도달할 수 없는 모든 객체들을 수집합니다.

이 알고리즘은 위의 참조-세기 방식보다 개선된 형태라고 할 수 있는데, 그 이유는 참조가 없는 객체는 명확히 도달할 수 없기 때문입니다. 순환 참조에서 본 것처럼, 그 반대(명확히 도달할 수 없다면, 참조가 없다)는 사실이 아닙니다.

현재 모든 최신 엔진은 표시하고-쓸기 가비지 수집을 제공합니다. 자바스크립트 가비지 수집 필드(세대별/증분적/동시적/병렬적 가비지 수집)에서 지난 몇 년간의 모든 개선들은 이 알고리즘의 구현을 통한 개선이며, 가비지 수집 알고리즘이나 언제 "객체가 필요 없는지"에 대한 정의를 반영하는 부분에 있어서의 개선은 아닙니다.

이러한 접근방식의 직접적인 효용은 더 이상 주기가 문제가 되지 않는다는 점입니다. 위의 첫 예시에서, 함수 호출이 리턴되고 나서 두 개의 객체들은 더 이상 전역 객체에서 참조하고 있는 어떤 리소스에서도 참조하지 않습니다. 결과적으로, 두 객체들은 가비지 수집기가 도달할 수 없는 것으로 판명되고 할당되었던 메모리를 회수하게 됩니다.

그러나, 가비지 수집을 수동으로 조작할 수 없다는 문제가 남습니다. 어떤 경우에서는 수동으로 언제, 어떤 메모리를 반환할지 결정하는 것이 편리할 때가 있습니다. 객체의 메모리를 반환하기 위해서, 해당 객체는 명시적으로 도달할 수 없게 되어야 합니다. 또한 자바스크립트에서 프로그래밍적으로 가비지 수집을 시작하는 것은 불가능하며, 비록 엔진은 플래그를 통해서 API를 제공할지 몰라도, 코어 언어단에서는 추후에도 지원하지 않을 것입니다.

## 엔진의 메모리 모델(memory model) 설정하기

자바스크립트 엔진은 주로 메모리 모델을 노출하는 플래그를 제공합니다. 예로, Node.js는 설정과 메모리 문제 디버깅을 위해 내부를 구성하는 V8 메커니즘을 노출하는 추가적인 옵션과 도구를 제공합니다. 이 설정은 브라우저에서는 대부분은 불가능하고, 웹 페이지(HTTP 헤더 등을 통해) 상에서는 더더욱 불가능합니다.

가용한 힙 메모리의 최대량은 아래와 같은 플래그를 통해 올릴 수 있습니다:

```bash
node --max-old-space-size=6000 index.js
```

또한 플래그나 [Chrome Debugger](https://nodejs.org/en/docs/guides/debugging-getting-started/)를 사용해 메모리 문제를 디버깅하기 위한 가비지 컬렉터 정보를 보여줄 수 있습니다:

```bash
node --expose-gc --inspect index.js
```

## 메모리 관리를 돕는 데이터 구조

비록 자바스크립트가 가비지 수집기 API를 직접적으로 노출하지는 않더라도, 자바스크립트는 간접적으로 가비지 수집을 관찰하며 메모리 관리에 쓸 수 있는 몇 가지 데이터 구조를 제공합니다.

### WeakMaps과 WeakSets

[`WeakMap`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)과 [`WeakSet`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)은 각 non-weak에 대응되는 [`Map`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)과 [`Set`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)의 API를 모방한 데이터 구조입니다. `WeakMap`은 키-값 쌍의 모음을 제공하는 반면, `WeakSet`은 유일한 값들로 이뤄진 모음을 제공합니다. 각각은 추가, 삭제, 조회 기능을 제공합니다.

`WeakMap`과 `WeakSet`의 이름은 "weakly held" 값이라는 개념에서 따왔습니다. 만약 `x`가 `y`에 의해 "weekly held"되었다라는 의미는, 비록 `y`를 통해 `x`의 값에 접근할 수 있지만, 표시하고-쓸기 알고리즘은 다른 것이 `x`를 \_strongly hold\* 하고 있지 않은 이상 도달할 수 있는 것으로 간주하지 않습니다. 여기서 논의되고 있는 것을 제외한, 대부분의 데이터 구조는 전달된 객체를 strongly hold하기에 객체에 언제든 접근할 수 있습니다. `WeakMap`과 `WeakSet`의 키는 프로그램의 어떤 것도 키를 참조하지 않는다면 가비지 콜렉션될 수 있습니다 (`WeakMap`에서 값은 그이후 가비지 콜렉션될 수 있음). 이 부분은 아래 두 가지 특성을 통해 보장됩니다:

- `WeakMap`과 `WeakSet`은 오직 객체 또는 기호만 저장합니다. 그 이유는 오직 객체들만이 가비지 콜렉트되고 원시값들은 복사되기에(`1 === 1`이나 `{} !== {}`이기에), 원시값들이 콜렉션에 영원히 남도록 합니다. [Registered symbols](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (like `Symbol.for("key")`) 또한 복사될 수 있으므로, 가비지 수집이 불가능하지만, `Symbol("key")`로 생성된 기호는 가비지 수집이 가능합니다. `Symbol.iterator`와 같은 [Well-known symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols)은 고정된 세트로 제공되며 `Array.prototype`과 같은 고유 객체와 유사하게 프로그램 수명 동안 고유하므로 키로도 허용됩니다.
- `WeakMap`과 `WeakSet`은 순회할 수 없습니다. 이렇게 하면 `Array.from(map.keys()).length`을 사용해 객체의 상태를 관찰하거나 가비지 수집 대상이 되어야하는 임의의 키를 가지고 있어야 하는 것을 방지할 수 있습니다(가비지 콜렉션은 최대한 영향을 느끼지 못하도록 수행되어야 합니다).

주로 `WeakMap`과 `WeakSet`을 설명할 때, 보통 키가 먼저 가비지 수집되고 이후 값 또한 가비지 수집된다고 암시합니다. 그러나, 아래와 같이 키를 참조하는 값이 있는 케이스를 살펴보겠습니다.

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// 값이 키를 참조하기에, `key`는 가비지 콜렉션 대상이 아니며
// 그 값은 map 안에서 strongly hold되어 있습니다.
```

만약 `key`가 실제 참조로 저장된다면, 다른 값이 `key`를 참조하지 않아도 순환 참조를 만들며 키와 값 모두 가비지 수집 대상이 아니도록 합니다. 그 이유는 만약 `key`가 가비지 수집되면, 특정 시점에 `value.key`는 존재하지 않는 주소를 가리키는 부적절한 상황이 될 수 있습니다. 이 점을 수정하기 위해, `WeakMap`과 `WeakSet`의 항목들은 실제 참조가 아니고 표시하고-쓸기 메커니즘의 보강점인 [ephemerons](https://dl.acm.org/doi/pdf/10.1145/263700.263733)입니다. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf)은 해당 알고리즘에 대한 훌륭한 요약본을 제공합니다 (4 페이지). 한 문단을 인용해보겠습니다.

> Ephemerons은 키와 값 모두 weak 또는 strong으로 분류될 수 없는 약한 쌍(weak pairs)을 개선한 것입니다. 키의 연결성은 값의 연결성을 결정하나, 값의 연결성은 키의 연결성을 결정짓지 않습니다. […] 가비지 콜렉션이 ephemerons을 지원할 때, 가비지 콜렉션은 표시하기 및 쓸기의 2단계가 아니라 3단계에 걸쳐 진행됩니다.

대략적인 멘탈 모델로, `WeakMap`을 아래와 같은 구현체로 생각해보면:

> **Warning:** 아래는 폴리필도 아니고, 실제 가비지 콜렉션에 관계하는 엔진의 구현체 구조와는 거리가 멉니다.

```js
class MyWeakMap {
  #marker = Symbol("MyWeakMapData");
  get(key) {
    return key[this.#marker];
  }
  set(key, value) {
    key[this.#marker] = value;
  }
  has(key) {
    return this.#marker in key;
  }
  delete(key) {
    delete key[this.#marker];
  }
}
```

위에서와 같이, `MyWeakMap`는 키 콜렉션을 실제로 보유하지 않습니다. `MyWeakMap`은 단순히 전달받은 각 객체에 메타데이터를 추가합니다. 그 객체는 이후 표시하기-쓸기를 통해 가비지 콜렉션 가능하게 됩니다. 그러므로, `WeakMap`의 키를 순회하거나 `WeakMap`의 키를 모두 지우는 것(clear)은 불가능합니다(clear 역시도 전체 키 콜렉션 정보에 의존합니다).

좀 더 상세한 API는 [keyed collections](/ko/docs/Web/JavaScript/Guide/Keyed_collections) 가이드에서 확인하실 수 있습니다.

### WeakRefs와 FinalizationRegistry

> **Note:** `WeakRef`와 `FinalizationRegistry`는 가비지 수집 구조에 대한 직접적인 내부 탐색을 제공합니다. 런타임 시맨틱은 완전히 보장될 수 없기에 [가능하면 사용하지 않는 것](/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible)을 권장합니다.

값이 객체인 모든 변수들은 해당 객체에 대한 참조입니다. 그러나, 그러한 참조는 "strong" 합니다. 그런 변수가 있다면 가비지 컬렉터가 객체를 마킹하는 것을 막습니다. [`WeakRef`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)는 객체에 대한 "weak reference" 로 오브젝트가 가비지 수집될 수 있도록 하는 동시에 객체가 존재하는 동안 컨텐츠에 접근하는 것을 가능하게 합니다.

`WeakRef`의 한 가지 사용 사례는 문자열 URL을 큰 객체에 매핑하는 캐시시스템입니다. 이런 목적을 위해 `WeakMap`를 사용할 수는 없는데, 그 이유는 `WeakMap` 객체는 weakly held인 "keys" 를 가지나 "values" 은 그렇지 않기 때문입니다. 만약 키에 접근하면, 항상 결정적으로 값을 얻습니다 (키에 접근할 수 있다는 것이 키가 아직 존재한다는 것을 의미하기 때문에). 이 부분에서, 키에 접근 시 `undefined`를 얻는 것은 (만약 상응한 값도 메모리 상에 존재하지 않는다면) 다시 계산하면 되기에 괜찮으나, 우리는 도달할 수 없는 객체가 캐시 상에서 존재하기는 원하지 않습니다. 이러한 경우에, 우리는 일반적인 `Map`에 각각의 값이 객체의 실제값이 아닌 `WeakRef`이 되도록 구성할 수 있습니다.

```js
function cached(getter) {
  // 문자열 URL과 결과값의 WeakRefs를 연결하는 Map
  const cache = new Map();
  return async (key) => {
    if (cache.has(key)) {
      return cache.get(key).deref();
    }
    const value = await getter(key);
    cache.set(key, new WeakRef(value));
    return value;
  };
}

const getImage = cached((url) => fetch(url).then((res) => res.blob()));
```

[`FinalizationRegistry`](/ko/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)는 가비지 수집을 관찰하기 위해 더욱 강력한 메커니즘을 제공합니다. `FinalizationRegistry`는 객체를 등록하고 가비지 수집되었을 때 알림을 받을 수 있도록 합니다. 예시로, 위의 예시로 작성된 캐시 시스템에서, 객체가 실제 값을 보유하고 있는지 여부에 상관없이 `WeakRef` 실제 값이 가비지 콜렉션 대상이 됩니다. 또한 시간이 흐르며 `Map`은 다량의 의미없는 항목들을 축적하게 됩니다. `FinalizationRegistry`를 사용하여 아래와 같이 해제를 할 수 있습니다.

```js
function cached(getter) {
  // 문자열 URL과 결과값의 WeakRefs를 연결하는 Map
  const cache = new Map();
  // 값이 가비지 수집될 때마다, 캐시의 키가 인수인 콜백이 호출되어
  // 캐시 항목을 제거할 수 있도록 함
  const registry = new FinalizationRegistry((key) => {
    // Note: WeakRef가 정말로 비었는지 테스트하는 것이 매우 중요합니다.
    // 그러지 않는다면, 콜백이 새로운 객체가 이 키로 추가된 이후 호출되고
    // 새롭게 생성된 메모리 상의 오브젝트가 삭제될 수 있습니다.
    if (!cache.get(key)?.deref()) {
      cache.delete(key);
    }
  });
  return async (key) => {
    if (cache.has(key)) {
      return cache.get(key).deref();
    }
    const value = await getter(key);
    cache.set(key, new WeakRef(value));
    registry.register(value, key);
    return value;
  };
}

const getImage = cached((url) => fetch(url).then((res) => res.blob()));
```

성능과 보안의 측면에서, 정확히 어느 시점에 콜백이 호출될지, 반드시 호출될지 보장할 수 없습니다. `FinalizationRegistry`는 오직 중요하지 않은 해제를 위해서만 사용되어야 합니다. 이 밖에도 항상 `finally` 블록을 수행하는 [`try...finally`](/ko/docs/Web/JavaScript/Reference/Statements/try...catch)와 같은 좀 더 결정적인 리소스 관리 방식이 있습니다. `WeakRef`와 `FinalizationRegistry`은 순전히 장시간 실행되는 프로그램의 메모리 사용 최적화를 위해 존재합니다.

[`WeakRef`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)와 [`FinalizationRegistry`](/ko/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)를 통해 각각의 상세한 API를 추가적으로 확인하실 수 있습니다.
