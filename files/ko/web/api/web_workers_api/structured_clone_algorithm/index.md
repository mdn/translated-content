---
title: The structured clone algorithm
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
---

The structured clone 알고리즘은 복잡한 자바스크립트 객체의 직렬화을 위해서 [HTML5 specification](http://www.w3.org/html/wg/drafts/html/master/infrastructure.html#safe-passing-of-structured-data)에 의해서 정의된 새로운 알고리즘 입니다. 이것은 순환그래프를 포함하는 객체의 직렬화를 지원하기 때문에 [JSON](/en/JSON)보다 더 유용합니다. — 객체는 같은 그래프에서 다른객체를 참조하는 객체를 참조할 수 있습니다. 이러한 케이스들에서는 structured clone알고리즘이 아마도 JSON보다 더 효율적일 것입니다.

알고리즘은 본질적으로 원본 객체의 모든 필드를 거치고 각 필드의 값들을 새로운 객체로 복제합니다. 만약 필드가 객체를 가졌다면 모든 필드와 그 서브필드가 새로운 객체로 복제될 때 까지 재귀적으로 동작합니다.

## JSON을 넘는 이득

JSON을 뛰어넘는 structured clone알고리즘의 여러가지 핵심 이득이 있습니다.

- Structured clones은 [`RegExp`](/en/JavaScript/Reference/Global_Objects/RegExp) 객체들도 복사할 수 있습니다..
- Structured clones은 {{ domxref("Blob") }}, {{ domxref("File") }}와 {{ domxref("FileList") }} 객체들도 복사할 수 있습니다..
- Structured clones은 {{ domxref("ImageData") }} 객체들도 복사할 수 있습니다. 클론된{{ domxref("CanvasPixelArray") }}크기(dimensions)는 원본과 match될 것이고 같은 픽셀 데이터의 복제를 가집니다.
- Structured clones은 참조들의 순환 그래프들을 포함한 객체들을 올바르게 복제할 수 있습니다.

## structured clones과 함께 동작하지 않는 것들

- `Error와` [`Function`](/en/JavaScript/Reference/Global_Objects/Function) 객체들은 structured clone 알고리즘에 의해서 복제될 수 없습니다; 이것을 시도하면 `DATA_CLONE_ERR` exception을 던질 것 입니다.
- DOM node들을 클론하려고 시도하는것도 동일하게 `DATA_CLONE_ERR` exception을 던질 것 입니다.
- 객체들의 몇몇 파라미터들은 보존되지 않습니다:

  - `RegExp객체들의 liastIndex필드는 보존되지 않습니다.`
  - Property descriptors, setters, 그리고 getters (이것들과 비슷한 메타데이터같은 기능들)은 복제되지 않습니다. 예를들어서 한 객체가 프로퍼티 디스크립터를 사용하여 읽기전용으로 마크되어져 있다면 이것은 읽기-쓰기가 가능하도록 복제 될 것입니다. 이것이 디폴트 조건이기 때문입니다.
  - 프로토타입 체인은 거치지않고 복제되지 않습니다.

## Supported types

| Object type                                                                     | Notes                                                                                                               |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [All primitive types](/ko/docs/Web/JavaScript/Data_structures#Primitive_values) | 하지만 심볼들은 포함하지 않습니다.                                                                                  |
| [Boolean](/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean) object      |                                                                                                                     |
| String object                                                                   |                                                                                                                     |
| [Date](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)                   |                                                                                                                     |
| [RegExp](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)               | lastIndex필드는 보존되지 않습니다.                                                                                  |
| {{ domxref("Blob") }}                                                           |                                                                                                                     |
| {{ domxref("File") }}                                                           |                                                                                                                     |
| {{ domxref("FileList") }}                                                       |                                                                                                                     |
| [ArrayBuffer](/ko/docs/Web/API/ArrayBuffer)                                     |                                                                                                                     |
| [ArrayBufferView](/ko/docs/Web/API/ArrayBufferView)                             | 이것은 기본적으로 int32Array나 기타같은 [typed arrays](/ko/docs/Web/JavaScript/Typed_arrays)의 모든것을 의미합니다. |
| {{ domxref("ImageData") }}                                                      |                                                                                                                     |
| [Array](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)                 |                                                                                                                     |
| [Object](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)               | 이것은 그냥 plain객체들을 포함합니다.(e.g. 객체 리터럴)                                                             |
| [Map](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)                     |                                                                                                                     |
| [Set](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)                     |                                                                                                                     |

## 또 다른 방법 : 깊은 복사(deep copy‎)

객체의 깊은 복사(deep copy)를 원한다면(모든 프로토타입 체인과 내포된 속성들 까지도), 또다른 접근방식을 사용해야만 합니다. 아래의 예제를 확인하세요.

```js
function clone(objectToBeCloned) {
  // Basis.
  if (!(objectToBeCloned instanceof Object)) {
    return objectToBeCloned;
  }

  var objectClone;

  // Filter out special objects.
  var Constructor = objectToBeCloned.constructor;
  switch (Constructor) {
    // Implement other special objects here.
    case RegExp:
      objectClone = new Constructor(objectToBeCloned);
      break;
    case Date:
      objectClone = new Constructor(objectToBeCloned.getTime());
      break;
    default:
      objectClone = new Constructor();
  }

  // Clone each property.
  for (var prop in objectToBeCloned) {
    objectClone[prop] = clone(objectToBeCloned[prop]);
  }

  return objectClone;
}
```

> **참고:** 이 알고리즘은 실제로 [`RegExp`](/en/JavaScript/Reference/Global_Objects/RegExp), [`Array`](/en/JavaScript/Reference/Global_Objects/Array), 와 [`Date`](/en/JavaScript/Reference/Global_Objects/Date)스페셜 객체들을 구현했습니다. 필요에 따라서 다른 특수한 케이스들을 구현할 수 있습니다.

## See also

- [HTML5 Specification: Safe passing of structured data](http://www.w3.org/TR/html5/infrastructure.html#safe-passing-of-structured-data)
- {{ domxref("window.history") }}
- {{ domxref("window.postMessage()") }}
- [Web Workers](/ko/docs/Web/API/Web_Workers_API)
- [Components.utils.cloneInto](/ko/docs/Components.utils.cloneInto)
