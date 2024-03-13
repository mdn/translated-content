---
title: "TypeError: cyclic object value"
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
---

{{jsSidebar("Errors")}}

## Сообщения

```
TypeError: циклическое значение объекта (Firefox)
TypeError: преобразование круговой структуры в JSON (Chrome и Opera)
TypeError: циклическая ссылка в аргументе значения не поддерживается (Edge)
```

## Тип ошибки?

{{jsxref("TypeError")}}

## Что не так?

Сам по себе [JSON-формат](https://www.json.org/) не поддерживает ссылки на объекты (не смотря на то что существует [IETF](http://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03), который позволяет значению JSON ссылаться на другое значение в JSON-документе), поэтому {{jsxref("JSON.stringify()")}} не пытаеться их анализировать и терпит неудачу при попытке сделать это.

## Примеры

В круговой структуре как эта

```js
var circularReference = { otherData: 123 };
circularReference.myself = circularReference;
```

{{jsxref("JSON.stringify()")}} закончится неудачей

```js example-bad
JSON.stringify(circularReference);
// TypeError: циклическое значение объекта
```

Для сериализации циклических ссылок можно использовать библиотеку, которая их поддерживает (например, cycle.js) или самостоятельно реализовать решение, которое потребует поиска и замены (или удаления) циклических ссылок сериализуемыми значениями.

Во фрагменте кода ниже показано, как найти и отфильтровать циклическую ссылку (что приводит к потере данных) с помощью параметра `replacer`{{jsxref("JSON.stringify()")}}:

```js
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

JSON.stringify(circularReference, getCircularReplacer());
// {"otherData":123}
```

## Смотрите также

- {{jsxref("JSON.stringify")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) – вводит две функции, JSON.decycle и JSON.retrocycle, что даёт возможность кодирования и декодирования циклических структур и групп обеспечения доступности баз данных в расширенный и обратно совместимый формат JSON.
