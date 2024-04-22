---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
---

{{JSRef}}

Метод **`Object.create()`** создаёт новый объект с указанным прототипом и свойствами.

## Синтаксис

```
Object.create(proto[, propertiesObject])
```

### Параметры

- `proto`
  - : Объект, который станет прототипом вновь созданного объекта.
- `propertiesObject`
  - : Необязательный параметр. Если указан и не равен {{jsxref("Global_Objects/undefined", "undefined")}}, должен быть объектом, чьи собственные перечисляемые свойства (то есть такие, которые определены на самом объекте, а не унаследованы по цепочке прототипов) указывают дескрипторы свойств, добавляемых в новый объект. Имена добавляемых свойств совпадают с именами свойств в этом объекте. Эти свойства соответствуют второму аргументу метода {{jsxref("Object.defineProperties()")}}.

### Возвращаемые значения

Новый объект с заданным прототипом и свойствами

### Выбрасываемые исключения

Выбрасывает исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}, если параметр `proto` не является {{jsxref("Global_Objects/null", "null")}} или объектом (исключение составляют объекты-обёртки примитивных типов).

## Примеры

### Пример: классическое наследование с `Object.create()`

Ниже показан пример использования `Object.create()` для имитации классического наследования. Это пример одиночного наследования, поскольку только его поддерживает JavaScript.

```js
// Shape — суперкласс
function Shape() {
  this.x = 0;
  this.y = 0;
}

// метод суперкласса
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Фигура переместилась.");
};

// Rectangle — подкласс
function Rectangle() {
  Shape.call(this); // вызываем конструктор суперкласса
}

// подкласс расширяет суперкласс
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log(
  "Является ли rect экземпляром Rectangle? " + (rect instanceof Rectangle),
); // true
console.log("Является ли rect экземпляром Shape? " + (rect instanceof Shape)); // true
rect.move(1, 1); // выведет 'Фигура переместилась.'
```

Если вы хотите наследоваться от нескольких объектов, то это возможно сделать при помощи примесей.

```js
function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

MyClass.prototype = Object.create(SuperClass.prototype); // наследование
mixin(MyClass.prototype, OtherSuperClass.prototype); // примешивание

MyClass.prototype.myMethod = function () {
  // что-то делаем
};
```

Функция примешивания должна копировать функции из прототипа суперкласса в прототип подкласса, она должна предоставляться пользователем. Примером примеси может служить функция [jQuery.extend()](http://api.jquery.com/jQuery.extend/).

### Пример: использование аргумента `propertiesObject` с `Object.create()`

```js
var o;

// создаём объект с нулевым прототипом
o = Object.create(null);

o = {};
// эквивалентно этому:
o = Object.create(Object.prototype);

// В этом примере мы создаём объект с несколькими свойствами.
// (Обратите внимание, что второй параметр отображает ключи на *дескрипторы свойств*.)
o = Object.create(Object.prototype, {
  // foo является рядовым 'свойством-значением'
  foo: { writable: true, configurable: true, value: "привет" },
  // bar является свойством с геттером и сеттером (свойством доступа)
  bar: {
    configurable: false,
    get: function () {
      return 10;
    },
    set: function (value) {
      console.log("Установка `o.bar` в", value);
    },
    /* при использовании методов доступа ES5 наш код мог бы выглядеть так:
    get function() { return 10; },
    set function(value) { console.log('Установка `o.bar` в', value); } */
  },
});

function Constructor() {}
o = new Constructor();
// эквивалентно этому:
o = Object.create(Constructor.prototype);
// Конечно, если бы в функции Constructor был бы реальный код инициализации,
// метод с Object.create() не был бы эквивалентным

// создаём новый объект, чей прототип является новым пустым объектом
// и добавляем простое свойство 'p' со значением 42
o = Object.create({}, { p: { value: 42 } });

// по умолчанию свойства НЕ ЯВЛЯЮТСЯ записываемыми, перечисляемыми или настраиваемыми:
o.p = 24;
o.p;
// 42

o.q = 12;
for (var prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// для определения свойства ES3
o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  },
);
```

## Полифил

Для этого полифила необходима правильно работающая Object.prototype.hasOwnProperty.

```js
if (typeof Object.create != "function") {
  // Этапы производства ECMA-262, издание 5, 15.2.3.5
  // Ссылка: http://es5.github.io/#x15.2.3.5
  Object.create = (function () {
    // Чтобы сэкономить память, используйте общий конструктор
    function Temp() {}

    // делает безопасную ссылку на Object.prototype.hasOwnProperty
    var hasOwn = Object.prototype.hasOwnProperty;

    return function (O) {
      // 1. Если Type(O) не является Object or Null выдаётся исключение TypeError.
      if (typeof O != "object") {
        throw TypeError("Object prototype may only be an Object or null");
      }

      // 2. Пусть obj будет результатом создания нового объекта, как если бы
      //    выражение new Object(), где Object является стандартным встроенным
      //    конструктором  с таким именем
      // 3. Установите для внутреннего свойства [[Prototype]] объекта obj значение O.
      Temp.prototype = O;
      var obj = new Temp();
      Temp.prototype = null; // Давайте не будем держать случайные ссылки на О...

      // 4.  Если аргумент Properties присутствует и не определён, добавляем
      //    собственные свойства к obj, как будто вызывая стандартную встроенную
      //    функцию Object.defineProperties с аргументами obj и
      //    Properties.
      if (arguments.length > 1) {
        // Object.defineProperties делает ToObject своим первым аргументом.
        var Properties = Object(arguments[1]);
        for (var prop in Properties) {
          if (hasOwn.call(Properties, prop)) {
            obj[prop] = Properties[prop];
          }
        }
      }

      // 5. Возвращает obj
      return obj;
    };
  })();
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- Запись в блоге Джона Резига о [getPrototypeOf()](http://ejohn.org/blog/objectgetprototypeof/)
