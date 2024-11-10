---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
---

{{JSRef}}

> [!WARNING]
> Изменение прототипа `[[Prototype]]` объекта является, по самой природе оптимизации доступа к свойствам в современных движках JavaScript, очень медленной операцией, это справедливо для **_любого_** браузера и движка JavaScript. Изменение прототипов очень тонко и обширно влияет на производительность, причём это влияние не ограничивается просто временем для операции присваивания `obj.__proto__ = ...`, оно может распространяться на **_любой_** код, который имеет доступ к **_любому_** объекту, чей прототип `[[Prototype]]` был изменён. Если вы заботитесь о производительности, вы никогда не должны изменять прототип `[[Prototype]]` объекта. Вместо этого создайте объект с нужным прототипом `[[Prototype]]`, с помощью метода {{jsxref("Object.create()")}}.

> [!WARNING]
> Хотя на сегодняшний момент большинство браузеров поддерживают свойство `Object.prototype.__proto__`, его поведение только недавно было стандартизировано в новой спецификации ECMAScript 6. Если вам требуется поддержка браузеров до этой спецификации, рекомендуется использовать вместо него метод {{jsxref("Object.getPrototypeOf()")}}.

## Сводка

Свойство `__proto__` объекта {{jsxref("Object.prototype")}} является свойством доступа (комбинацией геттера и сеттера), которое расширяет внутренний прототип `[[Prototype]]` объекта (являющийся объектом или {{jsxref("Global_Objects/null", "null")}}), через который осуществлялся доступ.

Использование свойства `__proto__` вызывает споры и многих оно разочаровало. Ранее оно никогда не включалось в спецификацию EcmaScript, но современные браузеры всё равно решили его реализовать. Сегодня свойство `__proto__` стандартизировано в спецификации ECMAScript 6 и будет поддерживаться в будущем. Тем не менее, изменение прототипа `[[Prototype]]` объекта всё ещё остаётся медленной операцией, которую следует избегать, если вы беспокоитесь о производительности.

Свойство `__proto__` также может использоваться при определении литерала объекта, устанавливая прототип `[[Prototype]]` объекта при его создании. Этот способ может рассматриваться как альтернатива методу {{jsxref("Object.create()")}}. Смотрите также [литеральный синтаксис инициализации объекта](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Синтаксис

```js
var shape = {},
  circle = new Circle();

// Установка прототипа объекта
shape.__proto__ = circle;
// Получение прототипа объекта
console.log(shape.__proto__ === circle); // true
```

Обратите внимание: название свойства состоит из двух подчёркиваний, следующих за ними пяти символов «proto» и следующих за ними ещё двух подчёркиваний.

## Описание

Геттер свойства `__proto__` расширяет значение внутреннего прототипа `[[Prototype]]` объекта. Для объектов, созданных с использованием литеральной формы создания объекта, это значение равно {{jsxref("Object.prototype")}}. Для функций это значение равно {{jsxref("Function.prototype")}}. Для объектов, созданных с использованием формы `new fun`, где `fun` является одной из встроенных функций-конструкторов, предоставляемых JavaScript ({{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Boolean", "Boolean")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Number", "Number")}}, {{jsxref("Global_Objects/Object", "Object")}}, {{jsxref("Global_Objects/String", "String")}} и так далее — включая новые конструкторы, добавленные в процессе развития JavaScript), это значение равно `fun.prototype`. Для объектов, созданных с использованием формы `new fun`, где `fun` является функцией, определённой в скрипте, это значение равно значению `fun.prototype` во время вычисления `new fun`. Именно поэтому при присваивании `fun.prototype` нового значения, ранее созданные экземпляры `fun` продолжат использовать предыдущее значение в качестве своего прототипа `[[Prototype]]`, а последующие вызовы `new fun` будут использовать вновь присвоенное значение в качестве своего прототипа `[[Prototype]]`.

Геттер `__proto__` позволяет прототипу `[[Prototype]]` объекта быть изменяемым. Объект должен быть расширяемым в соответствии с {{jsxref("Object.isExtensible()")}}: если это не так, выкидывается исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. Предоставляемое значение должно быть объектом или {{jsxref("Global_Objects/null", "null")}}. Предоставление любого другого значения ничего не даст.

Для понимания того, как прототипы используются для наследования, смотрите статью руководства [«Наследование и цепочки прототипов»](/ru/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

Свойство `__proto__` является простым свойством доступа на объекте {{jsxref("Object.prototype")}} — свойством, состоящим из геттера и сеттера. Свойство `__proto__` будет найдено, если, в конечном итоге, его поиск пройдёт через {{jsxref("Object.prototype")}}, но при доступе к нему не через {{jsxref("Object.prototype")}}, оно найдено не будет. Если перед просмотром {{jsxref("Object.prototype")}} буден найдено какое-нибудь другое свойство `__proto__`, оно скроет искомое свойство {{jsxref("Object.prototype")}}.

```js
var noProto = Object.create(null);

console.log(typeof noProto.__proto__); // undefined
console.log(Object.getPrototypeOf(noProto)); // null

noProto.__proto__ = 17;

console.log(noProto.__proto__); // 17
console.log(Object.getPrototypeOf(noProto)); // null

var protoHidden = {};
Object.defineProperty(protoHidden, "__proto__", {
  value: 42,
  writable: true,
  configurable: true,
  enumerable: true,
});

console.log(protoHidden.__proto__); // 42
console.log(Object.getPrototypeOf(protoHidden) === Object.prototype); // true
```

## Примеры

В следующем примере создаётся новый экземпляр `Employee`, а затем проверяется, что его свойство `__proto__` является тем же самым объектом, что и его конструктор `prototype`.

```js
// Декларируем функцию, используемую как конструктор
function Employee() {
  /* инициализируем экземпляр */
}

// Создаём новый экземпляр Employee
var fred = new Employee();

// Проверка на эквивалентность
fred.__proto__ === Employee.prototype; // true
```

В этот момент `fred` унаследован от `Employee`, однако присваивание другого объекта в `fred.__proto__` может изменить это:

```js
function Cow() {
  /* инициализируем экземпляр */
}

// Присваиваем __proto__ новый объект
fred.__proto__ = Cow.prototype;
```

Теперь `fred` наследуется непосредственно от `Cow.prototype`, а не от `Employee.prototype`, и теряет свойства, изначально унаследованные от `Employee.prototype`.

Однако, это применяется только к {{jsxref("Object.isExtensible()", "расширяемым", "", 1)}} объектам, у нерасширяемых объектов свойство `__proto__` не может быть изменено:

```js
var obj = {};
Object.preventExtensions(obj);

obj.__proto__ = {}; // выкинет TypeError
```

Обратите внимание, что свойство `__proto__` может быть переопределено даже у объекта `Object.prototype`, если новая цепочка заканчивается {{jsxref("Global_Objects/null", "null")}}:

```js
var b = {};

Object.prototype.__proto__ = Object.create(
  null, // [[Prototype]]
  {
    hi: {
      value: function () {
        alert("hi");
      },
    },
  },
);

b.hi();
```

Если свойство `__proto__` объекта {{jsxref("Object.prototype")}} не установлено в {{jsxref("Global_Objects/null", "null")}}, или в другой объект, чья цепочка прототипов, в конечном итоге, явно не заканчивается значением {{jsxref("Global_Objects/null", "null")}}, будет выкинуто исключение {{jsxref("Global_Objects/TypeError", "TypeError")}} «циклическое значение \_\_proto\_\_», поскольку цепочка должна заканчиваться {{jsxref("Global_Objects/null", "null")}} (как это и происходит на {{jsxref("Object.prototype")}} при нормальных обстоятельствах).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

> [!NOTE]
> Спецификация ES6 требует поддержку свойства `__proto__` только в браузерах и не требует его поддержку в других окружениях (хотя оно и рекомендуется в качестве обязательного). Если ваш код должен работать в не-браузерных окружениях, вместо свойства рекомендуется использовать методы {{jsxref("Object.getPrototypeOf()")}} и {{jsxref("Object.setPrototypeOf()")}}.

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
