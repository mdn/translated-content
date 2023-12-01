---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
---

{{JSRef("Global_Objects", "Object")}}

> **Предупреждение:** Изменение прототипа `[[Prototype]]` объекта является, по самой природе оптимизации доступа к свойствам в современных движках JavaScript, очень медленной операцией, это справедливо для **_любого_** браузера и движка JavaScript. Изменение прототипов очень тонко и обширно влияет на производительность, причём это влияние не ограничивается просто временем, проведённым внутри метода `Object.setPrototypeOf()`, оно может распространяться на **_любой_** код, который имеет доступ к **_любому_** объекту, чей прототип `[[Prototype]]` был изменён. Если вы заботитесь о производительности, вы никогда не должны изменять прототип `[[Prototype]]` объекта. Вместо этого создайте объект с нужным прототипом `[[Prototype]]`, с помощью метода {{jsxref("Object.create()")}}.

## Сводка

Метод **`Object.setPrototypeOf()`** устанавливает прототип (то есть, внутреннее свойство `[[Prototype]]`) указанного объекта в другой объект или {{jsxref("null")}}.

## Синтаксис

```
Object.setPrototypeOf(obj, prototype);
```

### Параметры

- `obj`
  - : Объект, которому устанавливается прототип.
- `prototype`
  - : Новый прототип объекта (объект или {{jsxref("null")}}).

## Описание

Выкидывает исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}, если объект, чей прототип `[[Prototype]]` является не расширяемым, согласно методу {{jsxref("Object.isExtensible()")}}. Не делает ничего, если параметр `prototype` не является объектом или значением {{jsxref("null")}} (то есть, является числом, строкой, логическим значением или {{jsxref("undefined")}}). В противном случае метод устанавливает прототип `[[Prototype]]` объекта `obj` в новое значение.

## Примеры

```js
var dict = Object.setPrototypeOf({}, null);
```

## Полифил

Используя старое свойство [`Object.prototype.__proto__`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), мы можем легко определить `Object.setPrototypeOf()`, если он ещё не доступен:

```js
if (!Object.setPrototypeOf) {
  Object.prototype.setPrototypeOf = function (obj, proto) {
    if (obj.__proto__) {
      obj.__proto__ = proto;
      return obj;
    } else {
      // Если нужно будет определить прототип у Object.create(null) объекта
      var Fn = function () {
        for (var key in obj) {
          //Если в объект уже были определены некоторые свойства
          Object.defineProperty(this, key, {
            value: obj[key],
          });
        }
      };
      Fn.prototype = proto;
      return new Fn();
    }
  };
}
```

## Добавление цепочки прототипов

Сочетание метода `Object.getPrototypeOf()` и свойства [`Object.prototype.__proto__`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) позволяет добавить целую цепочку прототипов к новому прототипу объекта:

```js
/**
 *** Object.appendChain(@object, @prototype)
 *
 * Присоединяет первый неродной прототип цепочки к новому прототипу.
 * Возвращает @object (если он был примитивным значением, оно будет преобразовано в объект).
 *
 *** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
 *** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
 *
 * Присоединяет первый не родной прототип цепочки к родному объекту Function.prototype, затем присоединяет
 * new Function(["@arg"(s)], "@function_body") к этой цепочке.
 * Возвращает функцию.
 *
 **/

Object.appendChain = function (oChain, oProto) {
  if (arguments.length < 2) {
    throw new TypeError("Object.appendChain - Not enough arguments");
  }
  if (typeof oProto === "number" || typeof oProto === "boolean") {
    throw new TypeError(
      "second argument to Object.appendChain must be an object or a string",
    );
  }

  var oNewProto = oProto,
    oReturn =
      (o2nd =
      oLast =
        oChain instanceof this ? oChain : new oChain.constructor(oChain));

  for (
    var o1st = this.getPrototypeOf(o2nd);
    o1st !== Object.prototype && o1st !== Function.prototype;
    o1st = this.getPrototypeOf(o2nd)
  ) {
    o2nd = o1st;
  }

  if (oProto.constructor === String) {
    oNewProto = Function.prototype;
    oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
    this.setPrototypeOf(oReturn, oLast);
  }

  this.setPrototypeOf(o2nd, oNewProto);
  return oReturn;
};
```

### Использование

#### Первый пример: присоединение цепочки к прототипу

```js
function Mammal() {
  this.isMammal = "да";
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies("Felis");

alert(oCat.isMammal); // 'да'

function Animal() {
  this.breathing = "да";
}

Object.appendChain(oCat, new Animal());

alert(oCat.breathing); // 'да'
```

#### Второй пример: преобразование примитивного значения в экземпляр его конструктора и присоединение его цепочки к прототипу

```js
function Symbol() {
  this.isSymbol = "да";
}

var nPrime = 17;

alert(typeof nPrime); // 'number'

var oPrime = Object.appendChain(nPrime, new Symbol());

alert(oPrime); // '17'
alert(oPrime.isSymbol); // 'да'
alert(typeof oPrime); // 'object'
```

#### Третий пример: присоединение цепочки к объекту `Function.prototype` и новой функции к этой цепочке

```js
function Person(sName) {
  this.identity = sName;
}

var george = Object.appendChain(
  new Person("Георг"),
  'alert("Привет, парни!!");',
);

alert(george.identity); // 'Георг'
george(); // 'Привет, парни!!'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__proto__`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
