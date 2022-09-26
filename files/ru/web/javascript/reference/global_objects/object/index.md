---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
tags:
  - Constructor
  - JavaScript
  - Object
  - Reference
  - Référence(2)
translation_of: Web/JavaScript/Reference/Global_Objects/Object
---
{{JSRef("Global_Objects", "Object")}}

## Сводка

Конструктор **`Object`** создаёт объект-обёртку.

## Синтаксис

```
// Инициализатор объекта или литерал
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// Вызов в качестве конструктора
new Object([value])
```

### Параметры

- `nameValuePair1, nameValuePair2, ... nameValuePairN`
  - : Пары из имён (строки) и значений (любые значения), где имя отделяется от значения двоеточием.
- `value`
  - : Любое значение.

## Описание

Конструктор `Object` создаёт объект-обёртку для переданного значения. Если значением является {{jsxref("Global_Objects/null", "null")}} или {{jsxref("Global_Objects/undefined", "undefined")}}, создаёт и возвращает пустой объект, в противном случае возвращает объект такого типа, который соответствует переданному значению. Если значение уже является объектом, конструктор вернёт это значение.

При вызове в не-конструктором контексте, `Object` ведёт себя идентично коду `new Object()`.

Так же смотрите {{jsxref("Operators/Object_initializer", "синтаксис инициализатора объекта / литеральный синтаксис", "", 1)}}.

## Свойства конструктора `Object`

- `Object.length`
  - : Имеет значение 1.
- {{jsxref("Object.prototype")}}
  - : Позволяет добавлять свойства ко всем объектам типа `Object`.

## Методы конструктора `Object`

- {{jsxref("Object.assign()")}}
  - : Создаёт новый объект путём копирования значений всех собственных перечислимых свойств из одного или более исходных объектов в целевой объект.
- {{jsxref("Object.create()")}}
  - : Создаёт новый объект с указанными объектом прототипа и свойствами.
- {{jsxref("Object.defineProperty()")}}
  - : Добавляет к объекту именованное свойство, описываемое переданным дескриптором.
- {{jsxref("Object.defineProperties()")}}
  - : Добавляет к объекту именованные свойства, описываемые переданными дескрипторами.
- {{jsxref("Object.freeze()")}}
  - : Замораживает объект: другой код не сможет удалить или изменить никакое свойство.
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Возвращает дескриптор свойства для именованного свойства объекта.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Возвращает массив, содержащий имена всех переданных объекту **собственных** перечисляемых и неперечисляемых свойств.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Возвращает массив всех символьных свойств, найденных непосредственно в переданном объекте.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Возвращает прототип указанного объекта.
- {{jsxref("Object.is()")}}
  - : Определяет, являются ли два значения различимыми (то есть, одинаковыми)
- {{jsxref("Object.isExtensible()")}}
  - : Определяет, разрешено ли расширение объекта.
- {{jsxref("Object.isFrozen()")}}
  - : Определяет, был ли объект заморожен.
- {{jsxref("Object.isSealed()")}}
  - : Определяет, является ли объект запечатанным (sealed).
- {{jsxref("Object.keys()")}}
  - : Возвращает массив, содержащий имена всех **собственных** перечислимых свойств переданного объекта.
- {{jsxref("Object.observe()")}}
  - : Асинхронно наблюдает за изменениями в объекте.
- {{jsxref("Object.preventExtensions()")}}
  - : Предотвращает любое расширение объекта.
- {{jsxref("Object.seal()")}}
  - : Предотвращает удаление свойств объекта другим кодом.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Устанавливает прототип (т.е. внутреннее свойство `[[Prototype]]`)

## Экземпляры и прототип объекта `Object`

Все объекты в JavaScript являются потомками `Object`; все объекты наследуют методы и свойства из прототипа объекта {{jsxref("Object.prototype")}}, хотя они и могут быть переопределены. Например, прототипы других конструкторов переопределяют свойство `constructor` и предоставляют свои собственные методы `toString()`. Изменения в объекте прототипа `Object` распространяются на все объекты до тех пор, пока свойства и методы, учитывающие эти изменения, не переопределяются дальше по цепочке прототипов.

### Свойства

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', 'Properties')}}

### Методы

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', 'Methods')}}

## Примеры

### Пример: использование `Object` с типами `undefined` и `null`

Следующий пример сохраняет пустой объект `Object` в переменную `o`:

```js
var o = new Object();
```

```js
var o = new Object(undefined);
```

```js
var o = new Object(null);
```

### Пример: использование `Object` для создания объектов `Boolean`

Следующий пример сохраняет объекты {{jsxref("Global_Objects/Boolean", "Boolean")}} в переменную `o`:

```js
// эквивалентно o = new Boolean(true);
var o = new Object(true);
```

```js
// эквивалентно o = new Boolean(false);
var o = new Object(Boolean());
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Инициализатор объекта](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer)
