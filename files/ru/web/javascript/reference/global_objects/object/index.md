---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
---

{{JSRef}}

Тип **`Object`** представляет один из [типов данных JavaScript](/ru/docs/Web/JavaScript/Guide/Data_structures). Он используется для хранения различных коллекций с ключами и более сложных сущностей. Объекты могут быть созданы с использованием конструктора {{jsxref("Object/Object", "Object()")}} или [синтаксиса инициализатора / литерала объекта](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Описание

Почти все [объекты](/ru/docs/Web/JavaScript/Guide/Data_structures#объекты) в JavaScript являются экземплярами `Object`; типичный объект наследует свойства (включая методы) от `Object.prototype`, хотя эти свойства могут быть затенены (т.е. переопределены). Единственные объекты, которые не наследуют от `Object.prototype`, - это те, у которых [прототип `null`](#null-prototype_objects), или которые происходят от других объектов с прототипом `null`.

Изменения в объекте `Object.prototype` видны всем объектам с помощью цепочки прототипов, если свойства и методы, подверженные этим изменениям, не переопределены дальше по цепочке прототипов. Это предоставляет очень мощный, хотя и потенциально опасный механизм для переопределения или расширения поведения объектов. Для обеспечения большей безопасности, `Object.prototype` - единственный объект в основном языке JavaScript, у которого [неизменяемый прототип](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#описание) - прототип `Object.prototype` всегда `null` и не может быть изменен.

### Свойства прототипа Object

Вы должны избегать вызова любых методов `Object.prototype` напрямую из экземпляра, особенно тех, которые не предназначены для полиморфизма (т.е. только их начальное поведение имеет смысл, и никакой объект-наследник не может переопределить их осмысленным образом). Все объекты, происходящие от `Object.prototype`, могут определить собственное свойство с тем же именем, но с совершенно иной семантикой от ожидаемой. Кроме того, эти свойства не наследуются [`объектами с null-прототипом`](#null-prototype_objects). Все современные утилиты JavaScript для работы с объектами являются [статическими](#static_methods). Более конкретно:

- Методы [`valueOf()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) и [`toLocaleString()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) существуют для того, чтобы быть полиморфными, и вы можете ожидать, что объект определит собственную реализацию с логичным поведением, поэтому их можно вызывать как методы экземпляра. Однако методы `valueOf()` и `toString()` обычно вызываются неявно через [преобразование типа](/ru/docs/Web/JavaScript/Guide/Data_structures#type_coercion), поэтому вам не нужно вызывать их вручную в своем коде.
- Методы [`__defineGetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) и [`__lookupSetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) устарели и не должны использоваться. Вместо них используйте статические альтернативы {{jsxref("Object.defineProperty()")}} и {{jsxref("Object.getOwnPropertyDescriptor()")}}.
- Свойство [`__proto__`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) устарело и не должно использоваться. Вместо него используйте статические методы {{jsxref("Object.getPrototypeOf()")}} и {{jsxref("Object.setPrototypeOf()")}}.
- Методы [`propertyIsEnumerable()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) и [`hasOwnProperty()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) можно заменить на статические методы {{jsxref("Object.getOwnPropertyDescriptor()")}} и {{jsxref("Object.hasOwn()")}}, соответственно.
- Метод [`isPrototypeOf()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) обычно можно заменить на [`instanceof`](/ru/docs/Web/JavaScript/Reference/Operators/instanceof), если вы проверяете свойство `prototype` конструктора.

В случае, когда семантически эквивалентный статический метод не существует, или если вы действительно хотите использовать метод `Object.prototype`, следует напрямую вызвать метод [`call()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/call) от `Object.prototype` на целевом объекте, чтобы предотвратить наличие у объекта переопределяющего свойства, которое может вызвать неожиданные результаты.

```js
const obj = {
  foo: 1,
  // Вы не должны определять такой метод в своем собственном объекте,
  // но вы можете не иметь возможности предотвратить это, если
  // получаете объект из внешнего источника данных
  propertyIsEnumerable() {
    return false;
  },
};

obj.propertyIsEnumerable("foo"); // false; неожиданный результат
Object.prototype.propertyIsEnumerable.call(obj, "foo"); // true; ожидаемый результат
```

## Синтаксис

```js
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

- {{jsxref("Object/Object", "Object()")}}
  - : Превращает входные данные в объект.
- {{jsxref("Object.prototype.constructor")}}
  - : Указывает функцию, которая создает прототип объекта.
- [`Object.prototype.__proto__`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{Deprecated_Inline}}
  - : Указывает на объект, который использовался в качестве прототипа при создании экземпляра объекта.

### Методы

- [`Object.prototype.__defineGetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
  - : Связывает функцию со свойством, которое при обращении к нему выполняет эту функцию и возвращает ее возвращаемое значение.
- [`Object.prototype.__defineSetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
  - : Связывает функцию со свойством, которое при установке выполняет ту функцию, которая изменяет свойство.
- [`Object.prototype.__lookupGetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
  - : Возвращает функцию, привязанную в качестве средства получения к указанному свойству.
- [`Object.prototype.__lookupSetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
  - : Возвращает функцию, привязанную в качестве установщика к указанному свойству.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Возвращает логическое значение, указывающее, содержит ли объект указанное свойство как прямое свойство этого объекта, а не унаследованное через цепочку прототипов.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Возвращает логическое значение, указывающее, входит ли объект, у которого вызван метод, в цепочку прототипов другого объекта.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Возвращает логическое значение, указывающее, является ли указанное свойство свойством объекта [enumerable own](/ru/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Вызывает {{jsxref("Object/toString", "toString()")}}.
- {{jsxref("Object.prototype.toString()")}}
  - : Возвращает строковое представление объекта.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Возвращает примитивное значение указанного объекта.

## Примеры

### Пример: использование `Object` с типами `undefined` и `null`

Следующие примеры сохраняют пустой объект `Object` в переменную `o`:

```js
const o = new Object();
const o = new Object(undefined);
const o = new Object(null);
```

### Пример: использование `Object` для создания объектов `Boolean`

Следующий пример сохраняет объекты {{jsxref("Global_Objects/Boolean", "Boolean")}} в переменную `o`:

```js
// эквивалентно o = new Boolean(true);
const o = new Object(true);
```

```js
// эквивалентно o = new Boolean(false);
const o = new Object(Boolean());
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Инициализатор объекта](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer)
