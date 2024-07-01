---
title: 열거성과 속성의 소유권
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
l10n:
  sourceCommit: a4b17b78fdca327f05e4a13e2b779d69e70212cd
---

{{jsSidebar("More")}}

JavaScript 객체의 모든 속성은 세 가지 요소로 분류할 수 있습니다.

- 열거 가능(enumerable) 또는 열거 불가능(non-enumerable).
- 문자열 또는 [심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol).
- 자체 속성(own property) 또는 프로토타입 체인에서 상속된 속성.

열거 가능한 속성(Enumerable properties)은 내부 열거 가능 플래그가 true로 설정된 속성을 말하며, 이는 단순한 할당이나 속성 초기화자를 통해 생성된 속성의 기본값입니다. [`Object.defineProperty`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 등을 통해 정의된 속성은 기본적으로 열거 가능하지 않습니다. 대부분의 반복 수단 (예: [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 루프와 [`Object.keys`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys))은 열거 가능한 키만 방문합니다.

속성의 소유 여부는 속성이 객체 자체에 속하는지 또는 프로토타입 체인에서 상속된 것인지를 기준으로 결정됩니다.

열거 가능 여부와 관계없이 문자열이든 심볼이든, 자체 속성이든 상속된 속성이든, 모든 속성은 [점 표기법(dot notation) 또는 대괄호 표기법(bracket notation)](/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors)을 사용하여 접근할 수 있습니다. 이 섹션에서는 JavaScript가 제공하는 객체 속성을 하나씩 방문하는 방법에 중점을 둡니다.

## 객체 속성 쿼리하기

객체의 속성을 쿼리하는 네 가지 기본 방법이 있습니다. 이들 모두 문자열 키와 심볼 키를 지원합니다. 다음 표는 각 메서드가 언제 `true`를 반환하는지 요약한 것입니다.

|                                                                                                          | 열거 가능, 자체 속성 | 열거 가능, 상속 속성 | 열거 불가능, 자체 속성 | 열거 불가능, 상속 속성 |
| -------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- | ---------------------- | ---------------------- |
| [`propertyIsEnumerable()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) | `true ✅`            | `false ❌`           | `false ❌`             | `false ❌`             |
| [`hasOwnProperty()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)             | `true ✅`            | `false ❌`           | `true ✅`              | `false ❌`             |
| [`Object.hasOwn()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)                      | `true ✅`            | `false ❌`           | `true ✅`              | `false ❌`             |
| [`in`](/ko/docs/Web/JavaScript/Reference/Operators/in)                                                   | `true ✅`            | `true ✅`            | `true ✅`              | `true ✅`              |

## 객체 속성 순회하기

JavaScript에는 객체의 속성 그룹을 순회하는 여러 메서드가 있습니다. 때로는 이러한 속성들이 배열로 반환되고, 때로는 루프에서 하나씩 반복되며, 때로는 다른 객체를 생성하거나 수정하는 데 사용됩니다. 다음 표는 특정 유형의 속성이 언제 방문될 수 있는지 요약한 것입니다.

문자열 속성만 방문하거나 심볼 속성만 방문하는 메서드는 추가 설명이 있습니다. ✅는 해당 유형의 속성이 방문됨을 의미하고, ❌는 그렇지 않음을 의미합니다.

|                                                                                                                                                                                                                                                               | 열거 가능, 자체 속성 | 열거 가능, 상속 속성 | 열거 불가능, 자체 속성 | 열거 불가능, 상속 속성 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- | ---------------------- | ---------------------- |
| [`Object.keys`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)<br />[`Object.values`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values)<br />[`Object.entries`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) | ✅<br />(strings)    | ❌                   | ❌                     | ❌                     |
| [`Object.getOwnPropertyNames`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)                                                                                                                                                   | ✅<br />(strings)    | ❌                   | ✅<br />(strings)      | ❌                     |
| [`Object.getOwnPropertySymbols`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)                                                                                                                                               | ✅<br />(symbols)    | ❌                   | ✅<br />(symbols)      | ❌                     |
| [`Object.getOwnPropertyDescriptors`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)                                                                                                                                       | ✅                   | ❌                   | ✅                     | ❌                     |
| [`Reflect.ownKeys`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)                                                                                                                                                                         | ✅                   | ❌                   | ✅                     | ❌                     |
| [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in)                                                                                                                                                                                           | ✅<br />(strings)    | ✅<br />(strings)    | ❌                     | ❌                     |
| [`Object.assign`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)<br />(첫 번째 매개변수 이후)                                                                                                                                                | ✅                   | ❌                   | ❌                     | ❌                     |
| [Object spread](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)                                                                                                                                                                                    | ✅                   | ❌                   | ❌                     | ❌                     |

## 열거 가능성/소유 여부에 따른 속성 얻기

이것이 모든 경우에 가장 효율적인 알고리즘은 아니지만, 간단한 예제로 유용합니다.

- 검출은 `SimplePropertyRetriever.theGetMethodYouWant(obj).includes(prop)`로 할 수 있습니다.
- 반복은 `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach((value, prop) => {});` (또는 `filter()`, `map()` 등을 사용)로 할 수 있습니다.

```js
const SimplePropertyRetriever = {
  getOwnEnumerables(obj) {
    return this._getPropertyNames(obj, true, false, this._enumerable);
    // 또는 for...in을 Object.hasOwn으로 필터링하여 사용할 수 있습니다.
  },
  getOwnNonenumerables(obj) {
    return this._getPropertyNames(obj, true, false, this._notEnumerable);
  },
  getOwnEnumerablesAndNonenumerables(obj) {
    return this._getPropertyNames(
      obj,
      true,
      false,
      this._enumerableAndNotEnumerable,
    );
    //  또는 단순히 Object.getOwnPropertyNames(obj)를 사용할 수 있습니다.
  },
  getPrototypeEnumerables(obj) {
    return this._getPropertyNames(obj, false, true, this._enumerable);
  },
  getPrototypeNonenumerables(obj) {
    return this._getPropertyNames(obj, false, true, this._notEnumerable);
  },
  getPrototypeEnumerablesAndNonenumerables(obj) {
    return this._getPropertyNames(
      obj,
      false,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  getOwnAndPrototypeEnumerables(obj) {
    return this._getPropertyNames(obj, true, true, this._enumerable);
    // 또는 필터링되지 않은 for...in을 사용할 수 있습니다.
  },
  getOwnAndPrototypeNonenumerables(obj) {
    return this._getPropertyNames(obj, true, true, this._notEnumerable);
  },
  getOwnAndPrototypeEnumerablesAndNonenumerables(obj) {
    return this._getPropertyNames(
      obj,
      true,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  // 내부 정적 속성 검사 콜백
  _enumerable(obj, prop) {
    return Object.prototype.propertyIsEnumerable.call(obj, prop);
  },
  _notEnumerable(obj, prop) {
    return !Object.prototype.propertyIsEnumerable.call(obj, prop);
  },
  _enumerableAndNotEnumerable(obj, prop) {
    return true;
  },
  // http://stackoverflow.com/a/8024294/271577 에서 영감을 받음
  _getPropertyNames(obj, iterateSelf, iteratePrototype, shouldInclude) {
    const props = [];
    do {
      if (iterateSelf) {
        Object.getOwnPropertyNames(obj).forEach((prop) => {
          if (props.indexOf(prop) === -1 && shouldInclude(obj, prop)) {
            props.push(prop);
          }
        });
      }
      if (!iteratePrototype) {
        break;
      }
      iterateSelf = true;
      obj = Object.getPrototypeOf(obj);
    } while (obj);
    return props;
  },
};
```

## 같이 보기

- [`in`](/ko/docs/Web/JavaScript/Reference/Operators/in)
- [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in)
- [`Object.prototype.hasOwnProperty()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [`Object.prototype.propertyIsEnumerable()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
- [`Object.getOwnPropertyNames()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`Object.getOwnPropertySymbols()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
- [`Object.keys()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [`Object.getOwnPropertyDescriptors()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
- [`Object.hasOwn()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
- [`Reflect.ownKeys()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
