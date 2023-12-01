---
title: Алгоритм структурированного клонирования
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
---

Алгоритм структурированного клонирования — это новый алгоритм, [определённый спецификацией HTML5](http://www.w3.org/html/wg/drafts/html/master/infrastructure.html#safe-passing-of-structured-data) для сериализации комплексных JavaScript объектов. Он более функционален, чем [JSON](/en/JSON) в том что способен поддерживать сериализацию объектов содержащих циклические графы — первичные объекты, которые ссылаются на другие объекты у которых есть ссылка на первичные объекты в том же графе. В дополнение, в некоторых других случаях алгоритм структурированного клонирования может быть более эффективен, чем JSON.

Алгоритм, по существу, перебирает все поля оригинального объекта, дублируя значения каждого поля в новый объект. Если поле представляет из себя объект с собственными полями, то эти дочерние поля также перебираются рекурсивно, пока каждое поле и все дочерние поля не будут продублированы в новый объект.

## Преимущества перед JSON

Вот основные преимущества структурированного клонирования перед JSON:

- Структурированные клоны могут копировать [`RegExp`](/en/JavaScript/Reference/Global_Objects/RegExp) объекты.
- Структурированные клоны могут копировать {{ domxref("Blob") }}, {{ domxref("File") }}, и {{ domxref("FileList") }} объекты.
- Структурированные клоны могут копировать {{ domxref("ImageData") }} объекты. The dimensions of the clone's {{ domxref("CanvasPixelArray") }} will match the original and have a duplicate of the same pixel data.
- Structured clones can correctly duplicate objects containing cyclic graphs of references.

## Исключения, не работающие со структурированными клонами

- [`Error`](/en/JavaScript/Reference/Global_Objects/Error) and [`Function`](/en/JavaScript/Reference/Global_Objects/Function) objects cannot be duplicated by the structured clone algorithm; attempting to do so will throw a `DATA_CLONE_ERR` exception.
- Attempting to clone DOM nodes will likewise throw a `DATA_CLONE_ERR` exception.
- Certain parameters of objects are not preserved:

  - The `lastIndex` field of [`RegExp`](/en/JavaScript/Reference/Global_Objects/RegExp) objects is not preserved.
  - Property descriptors, setters, and getters (as well as similar metadata-like features) are not duplicated. For example, if an object is marked read-only using a property descriptor, it will be read-write in the duplicate, since that's the default condition.
  - The prototype chain does not get walked and duplicated.

## Поддерживаемые типы

| Object type                                                                     | Notes                                                                                              |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [All primitive types](/ru/docs/Web/JavaScript/Data_structures#Primitive_values) | However not symbols                                                                                |
| [Boolean](/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean) object      |                                                                                                    |
| String object                                                                   |                                                                                                    |
| [Date](/ru/docs/Web/JavaScript/Reference/Global_Objects/Date)                   |                                                                                                    |
| [RegExp](/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp)               | The `lastIndex` field is not preserved.                                                            |
| {{ domxref("Blob") }}                                                           |                                                                                                    |
| {{ domxref("File") }}                                                           |                                                                                                    |
| {{ domxref("FileList") }}                                                       |                                                                                                    |
| [ArrayBuffer](/ru/docs/Web/API/ArrayBuffer)                                     |                                                                                                    |
| [ArrayBufferView](/ru/docs/Web/API/ArrayBufferView)                             | This basically means all [typed arrays](/ru/docs/Web/JavaScript/Typed_arrays) like Int32Array etc. |
| {{ domxref("ImageData") }}                                                      |                                                                                                    |
| [Array](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)                 |                                                                                                    |
| [Object](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object)               | This just includes plain objects (e.g. from object literals)                                       |
| [Map](/ru/docs/Web/JavaScript/Reference/Global_Objects/Map)                     |                                                                                                    |
| [Set](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set)                     |                                                                                                    |

## Другой вариант: вложенное копирование‎

Если вы хотите сделать вложенную копию объекта (т.е рекурсивно копировать все вложенные свойства, проходя по прототипной цепи), вы должны использовать другой подход. Ниже приведён возможный пример.

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

> **Примечание:** Этот алгоритм реализован только для [`RegExp`](/en/JavaScript/Reference/Global_Objects/RegExp), [`Array`](/en/JavaScript/Reference/Global_Objects/Array), и [`Date`](/en/JavaScript/Reference/Global_Objects/Date) специальных объектов. Вы можете реализовать другие условия, удовлетворяющие вашим потребностям.

## Ещё по теме

- [HTML5 Specification: Safe passing of structured data](http://www.w3.org/TR/html5/infrastructure.html#safe-passing-of-structured-data)
- {{ domxref("window.history") }}
- {{ domxref("window.postMessage()") }}
- [Web Workers](/ru/docs/Web/API/Web_Workers_API)
- [Components.utils.cloneInto](/ru/docs/Components.utils.cloneInto)
