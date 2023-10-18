---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
---

{{JSRef("Global_Objects", "Object")}}

## Сводка

Метод **`Object.defineProperties()`** определяет новые или изменяет существующие свойства, непосредственно на объекте, возвращая этот объект.

## Синтаксис

```
Object.defineProperties(obj, props)
```

### Параметры

- `obj`
  - : Объект, на котором определяются новые или изменяются существующие свойства.
- `props`

  - : Объект, чьи собственные перечисляемые свойства представляют собой дескрипторы для создаваемых или изменяемых свойств. Дескрипторы свойств обладают следующими дополнительными ключами:

    - `configurable`
      - : Равен `true` только в том случае, если тип этого дескриптора свойства может быть изменён и если свойство может быть удалено из содержащего его объекта.
        **Значение по умолчанию установлено в `false`.**
    - `enumerable`
      - : Равен `true` только в том случае, если это свойство можно увидеть через перечисление свойств содержащего его объекта.
        **Значение по умолчанию установлено в `false`.**
    - `value`
      - : Значение, ассоциированное со свойством. Может быть любым допустимым значением JavaScript (числом, объектом, функцией и т.д.).
        **Значение по умолчанию установлено в {{jsxref("Global_Objects/undefined", "undefined")}}.**
    - `writable`
      - : Равен `true` только в том случае, если значение, ассоциированное со свойством, может быть изменено с помощью {{jsxref("Operators/Assignment_Operators", "оператора присваивания", "", 1)}}.
        **Значение по умолчанию установлено в `false`.**
    - `get`
      - : Функция, используемая как геттер свойства, либо {{jsxref("Global_Objects/undefined", "undefined")}}, если свойство не имеет геттера. Возвращаемое значение функции будет использоваться как значение свойства.
        **Значение по умолчанию установлено в {{jsxref("Global_Objects/undefined", "undefined")}}.**
    - `set`
      - : Функция, используемая как сеттер свойства, либо {{jsxref("Global_Objects/undefined", "undefined")}}, если свойство не имеет сеттера. Функция принимает единственным аргументом новое значение, присваиваемое свойству.
        **Значение по умолчанию установлено в {{jsxref("Global_Objects/undefined", "undefined")}}.**

### Возвращаемое значение

Объект, переданный в функцию.

## Описание

Метод `Object.defineProperties()`, по сути, определяет все свойства, соответствующие собственным свойствам объекта `props`, на объекте `obj`.

## Примеры

```js
Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
  // и т.д.
});
```

## Полифил

Предполагается, что среда выполнения осталась нетронутой, все имена и свойства ссылаются на свои изначальные значения. Оригинальный метод `Object.defineProperties` почти полностью эквивалентен (смотрите комментарий в функции `isCallable`) следующей реализации на JavaScript:

```js
function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      // NB: изменить при необходимости считать вызываемым что-то ещё, кроме функций.
      return typeof v === "function";
    }

    if (typeof desc !== "object" || desc === null) {
      throw new TypeError("bad desc");
    }

    var d = {};

    if (hasProperty(desc, "enumerable")) {
      d.enumerable = !!obj.enumerable;
    }
    if (hasProperty(desc, "configurable")) {
      d.configurable = !!obj.configurable;
    }
    if (hasProperty(desc, "value")) {
      d.value = obj.value;
    }
    if (hasProperty(desc, "writable")) {
      d.writable = !!desc.writable;
    }
    if (hasProperty(desc, "get")) {
      var g = desc.get;

      if (!isCallable(g) && g !== "undefined") {
        throw new TypeError("bad get");
      }
      d.get = g;
    }
    if (hasProperty(desc, "set")) {
      var s = desc.set;
      if (!isCallable(s) && s !== "undefined") {
        throw new TypeError("bad set");
      }
      d.set = s;
    }

    if (("get" in d || "set" in d) && ("value" in d || "writable" in d)) {
      throw new TypeError("identity-confused descriptor");
    }

    return d;
  }

  if (typeof obj !== "object" || obj === null) {
    throw new TypeError("bad obj");
  }

  properties = Object(properties);

  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i < keys.length; i++) {
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
  }

  for (var i = 0; i < descs.length; i++) {
    Object.defineProperty(obj, descs[i][0], descs[i][1]);
  }

  return obj;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [Перечисляемость и собственность свойств](/ru/docs/Enumerability_and_ownership_of_properties)
