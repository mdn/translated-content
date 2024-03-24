---
title: Прокси
slug: Web/JavaScript/Reference/Global_Objects/Proxy
---

Объект `Proxy` позволяет создать прокси для другого объекта, может перехватывать и переопределить основные операции для данного объекта.

## Введение

Прокси используются программистами для объявления расширенной семантики JavaScript объектов. Стандартная семантика реализована в движке JavaScript, который обычно написан на низкоуровневом языке программирования, например C++. Прокси позволяют программисту определить поведение объекта при помощи JavaScript. Другими словами они являются **инструментом метапрограммирования**.

**Примечание**: реализация прокси в SpiderMonkey является прототипом, в котором прокси API и семантика не стабильны. Также, реализация в SpiderMonkey может не соответствовать последней версии спецификации. Она может быть изменена в любой момент и предоставляется исключительно как экспериментальная функция. **Не полагайтесь на неё в производственном коде.**

Эта страница описывает новый API (называемый «непосредственным проксированием»), который является частью Firefox 18. Для просмотра старого API (Firefox 17 и ниже) посетите страницу описания [старого прокси API](/ru/docs/JavaScript/Old_Proxy_API).

## Терминология

- механизм полного перехвата (или "intercession API")
  - : Технический термин для этой функции.
- прокси (proxy)
  - : Объект, оборачивающий исходный объект.
- обработчик (handler)
  - : Объект-заменитель, содержащий ловушки. Определяет, какие операции будут перехвачены, также переопределяет перехваченные операции.
- ловушки (traps)
  - : Методы, которые предоставляют доступ к свойствам. Это аналогично концепции ловушек в операционных системах.
- цель (target)
  - : Исходный объект, который виртуализируется прокси. Он часто используется в качестве источника данных в прокси. Для него проверяются инварианты относительно расширяемости и настраиваемости свойств.

## Прокси

Прокси - это новые объекты; невозможно выполнить "проксирование" существующего объекта. Пример создания прокси:

```js
var p = new Proxy(target, handler);
```

Где:

- `target` — исходный объект (может быть объектом любого типа, включая массив, функцию и даже другой прокси объект).
- `handler` — объект-обработчик, методы (ловушки) которого определяют поведение прокси во время выполнения операции над ним.

## Обработчик

Все ловушки опциональны. В случае, если ловушка не задана, то стандартным поведением будет перенаправление операции к объекту-цели.

| JavaScript-код                                                                                                                                      | Метод обработчика                                                                    | Описание                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Object.getOwnPropertyDescriptor(proxy, name)`                                                                                                      | `getOwnPropertyDescriptor function(target, name) -> PropertyDescriptor \| undefined` | Должен возвращать верный объект-описание свойства или `undefined`, чтобы показать, что свойство с именем `name` существует в эмулируемом объекте. |
| `Object.getOwnPropertyNames(proxy)` `Object.getOwnPropertySymbols(proxy)` `Object.keys(proxy)`                                                      | `ownKeys function(target) -> [string \| symbol]`                                     | Возвращает массив всех собственных (не унаследованных) имён свойств эмулируемого объекта.                                                         |
| `Object.defineProperty(proxy,name,pd)`                                                                                                              | `defineProperty function(target, name, propertyDescriptor) -> any`                   | Задаёт новое свойство, атрибуты которого определяются предоставленным `propertyDescriptor`. Возвращаемое значение метода игнорируется.            |
| `delete proxy.name`                                                                                                                                 | `deleteProperty function(target, name) -> boolean`                                   | Удаляет именованное свойство из прокси. Возвращает `true` в случае успешного удаления свойства `name`.                                            |
| `Object.preventExtensions(proxy)`                                                                                                                   | `preventExtensions function(target) -> boolean`                                      | Делает объект нерасширяемым. Возвращает `true` при успешном выполнении.                                                                           |
| `name in proxy`                                                                                                                                     | `has function(target, name) -> boolean`                                              |                                                                                                                                                   |
| `proxy.name` (in the context of "getting the value") `receiver.name` (if `receiver` inherits from a proxy and does not override `name`)             | `get function(target, name, receiver) -> any`                                        | `receiver` — это прокси или объект, унаследованный от прокси.                                                                                     |
| `proxy.name = val` (in the context of "setting the value") `receiver.name = val` (if `receiver` inherits from a proxy and does not override `name`) | `set function(target, name, val, receiver) -> boolean`                               | `receiver` — это прокси или объект, унаследованный от прокси.                                                                                     |
| `proxy(...args) proxy.apply(thisValue, args) proxy.call(thisValue, ...args)`                                                                        | `apply function(target, thisValue, args) -> any`                                     | `target` должен быть функцией.                                                                                                                    |
| `new proxy(...args)`                                                                                                                                | `construct function(target, args) -> object`                                         | `target` должен быть функцией.                                                                                                                    |

## Инварианты

Несмотря на то, что прокси предоставляют много возможностей пользователям, некоторые операции не перехватываются для сохранения постоянства языка:

- Простой и строгий оператор равенства (`==`, `===`) не перехватывается. `p1 === p2` равны, только если `p1` и `p2` ссылаются на один и тот же прокси.
- Текущая реализация `Object.getPrototypeOf(proxy)` всегда возвращает `Object.getPrototypeOf(target)`, потому что в ES2015 перехватчик getPrototypeOf пока не реализован.
- `typeof proxy` всегда возвращает `typeof target`. В частности, `proxy` может быть использован как функция только если `target` является функцией.
- `Array.isArray(proxy)` всегда возвращает `Array.isArray(target)`.
- `Object.prototype.toString.call(proxy)` всегда возвращает `Object.prototype.toString.call(target)`, потому что в ES2015 перехватчик Symbol.toStringTag пока не реализован.

## Примеры

### Простой пример

Объект, возвращающий значение `37`, в случае отсутствия свойства с указанным именем:

```js
var handler = {
  get: function (target, name) {
    return name in target ? target[name] : 37;
  },
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log("c" in p, p.c); // false, 37
```

### Перенаправляющий прокси

В данном примере мы используем JavaScript объект, к которому наш прокси направляет все запросы:

```js
var target = {};
var p = new Proxy(target, {});

p.a = 37; // операция перенаправлена прокси

console.log(target.a); // 37. Операция была успешно перенаправлена
```

### Проверка

При помощи `Proxy` вы можете легко проверять передаваемые объекту значения:

```js
let validator = {
  set: function (obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }

    // Стандартное сохранение значения
    obj[prop] = value;

    // Обозначить успех
    return true;
  },
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = "young"; // Вызовет исключение
person.age = 300; // Вызовет исключение
```

### Дополнение конструктора

Функция прокси может легко дополнить конструктор новым:

```js
function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,
    "constructor",
  );

  const prototype = { ...base.prototype };

  base.prototype = Object.create(sup.prototype);
  base.prototype = Object.assign(base.prototype, prototype);

  var handler = {
    construct: function (target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function (target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    },
  };
  var proxy = new Proxy(base, handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descriptor);
  return proxy;
}

var Person = function (name) {
  this.name = name;
};

var Boy = extend(Person, function (name, age) {
  this.age = age;
});

Boy.prototype.sex = "M";

var Peter = new Boy("Peter", 13);
console.log(Peter.sex); // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age); // 13
```

### Манипуляция DOM элементами

Иногда возникает необходимость переключить атрибут или имя класса у двух разных элементов:

```js
let view = new Proxy(
  {
    selected: null,
  },
  {
    set: function (obj, prop, newval) {
      let oldval = obj[prop];

      if (prop === "selected") {
        if (oldval) {
          oldval.setAttribute("aria-selected", "false");
        }
        if (newval) {
          newval.setAttribute("aria-selected", "true");
        }
      }

      // Стандартное сохранение значения
      obj[prop] = newval;
    },
  },
);

let i1 = (view.selected = document.getElementById("item-1"));
console.log(i1.getAttribute("aria-selected")); // 'true'

let i2 = (view.selected = document.getElementById("item-2"));
console.log(i1.getAttribute("aria-selected")); // 'false'
console.log(i2.getAttribute("aria-selected")); // 'true'
```

### Изменение значений и дополнительные свойства

Прокси объект `products` проверяет передаваемые значения и преобразует их в массив в случае необходимости. Объект также поддерживает дополнительное свойство `latestBrowser` на чтение и запись.

```js
let products = new Proxy(
  {
    browsers: ["Internet Explorer", "Netscape"],
  },
  {
    get: function (obj, prop) {
      // Дополнительное свойство
      if (prop === "latestBrowser") {
        return obj.browsers[obj.browsers.length - 1];
      }

      // Стандартный возврат значения
      return obj[prop];
    },
    set: function (obj, prop, value) {
      // Дополнительное свойство
      if (prop === "latestBrowser") {
        obj.browsers.push(value);
        return;
      }

      // Преобразование значения, если оно не массив
      if (typeof value === "string") {
        value = [value];
      }

      // Стандартное сохранение значения
      obj[prop] = value;
    },
  },
);

console.log(products.browsers); // ['Internet Explorer', 'Netscape']
products.browsers = "Firefox"; // передаётся как строка (по ошибке)
console.log(products.browsers); // ['Firefox'] <- проблем нет, значение - массив

products.latestBrowser = "Chrome";
console.log(products.browsers); // ['Firefox', 'Chrome']
console.log(products.latestBrowser); // 'Chrome'
```

### Поиск элемента массива по его свойству

Данный прокси расширяет массив дополнительными возможностями. Как вы видите, вы можете гибко "задавать" свойства без использования [`Object.defineProperties`](/ru/docs/JavaScript/Reference/Global_Objects/Object/defineProperties). Данный пример также может быть использован для поиска строки таблицы по её ячейке. В этом случае целью будет [`table.rows`](/ru/docs/DOM/table.rows).

```js
let products = new Proxy(
  [
    { name: "Firefox", type: "browser" },
    { name: "SeaMonkey", type: "browser" },
    { name: "Thunderbird", type: "mailer" },
  ],
  {
    get: function (obj, prop) {
      // Стандартное возвращение значения; prop обычно является числом
      if (prop in obj) {
        return obj[prop];
      }

      // Получение количества продуктов; псевдоним products.length
      if (prop === "number") {
        return obj.length;
      }

      let result,
        types = {};

      for (let product of obj) {
        if (product.name === prop) {
          result = product;
        }
        if (types[product.type]) {
          types[product.type].push(product);
        } else {
          types[product.type] = [product];
        }
      }

      // Получение продукта по имени
      if (result) {
        return result;
      }

      // Получение продуктов по типу
      if (prop in types) {
        return types[prop];
      }

      // Получение типов продуктов
      if (prop === "types") {
        return Object.keys(types);
      }

      return undefined;
    },
  },
);

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products["Firefox"]); // { name: 'Firefox', type: 'browser' }
console.log(products["Chrome"]); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3
```

### Пример использования всех перехватчиков

В данном примере, использующем все виды перехватчиков, мы попытаемся проксировать _не нативный_ объект, который частично приспособлен для этого - `docCookies,` созданном в разделе ["little framework" и опубликованном на странице `document.cookie`](/ru/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support).

```js
/*
  var docCookies = ... получить объект "docCookies" можно здесь:
  https://developer.mozilla.org/ru/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/

var docCookies = new Proxy(docCookies, {
  get: function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  set: function (oTarget, sKey, vValue) {
    if (sKey in oTarget) {
      return false;
    }
    return oTarget.setItem(sKey, vValue);
  },
  deleteProperty: function (oTarget, sKey) {
    if (sKey in oTarget) {
      return false;
    }
    return oTarget.removeItem(sKey);
  },
  enumerate: function (oTarget, sKey) {
    return oTarget.keys();
  },
  iterate: function (oTarget, sKey) {
    return oTarget.keys();
  },
  ownKeys: function (oTarget, sKey) {
    return oTarget.keys();
  },
  has: function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  hasOwn: function (oTarget, sKey) {
    return oTarget.hasItem(sKey);
  },
  defineProperty: function (oTarget, sKey, oDesc) {
    if (oDesc && "value" in oDesc) {
      oTarget.setItem(sKey, oDesc.value);
    }
    return oTarget;
  },
  getPropertyNames: function (oTarget) {
    return Object.getPropertyNames(oTarget).concat(oTarget.keys());
  },
  getOwnPropertyNames: function (oTarget) {
    return Object.getOwnPropertyNames(oTarget).concat(oTarget.keys());
  },
  getPropertyDescriptor: function (oTarget, sKey) {
    var vValue = oTarget[sKey] || oTarget.getItem(sKey);
    return vValue
      ? {
          value: vValue,
          writable: true,
          enumerable: true,
          configurable: false,
        }
      : undefined;
  },
  getOwnPropertyDescriptor: function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue
      ? {
          value: vValue,
          writable: true,
          enumerable: true,
          configurable: false,
        }
      : undefined;
  },
  fix: function (oTarget) {
    return "not implemented yet!";
  },
});

/* Проверка cookies */

alert((docCookies.my_cookie1 = "First value"));
alert(docCookies.getItem("my_cookie1"));

docCookies.setItem("my_cookie1", "Changed value");
alert(docCookies.my_cookie1);
```

## Смотрите также

- ["Proxies are awesome" презентация Brendan Eich на JSConf](http://jsconf.eu/2010/speaker/be_proxy_objects.html) ([слайды](http://www.slideshare.net/BrendanEich/metaprog-5303821))
- [Страница предложения ECMAScript Harmony Proxy](http://wiki.ecmascript.org/doku.php?id=harmony:proxies) и [страница ECMAScript Harmony proxy semantics](http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics)
- [Руководство по прокси](http://soft.vub.ac.be/~tvcutsem/proxies/)
- [Старая страница Proxy API](/ru/docs/JavaScript/Old_Proxy_API)
- [`Object.watch`](/ru/docs/JavaScript/Reference/Global_Objects/Object/watch) - не стандартная возможность, поддерживается только в движке Gecko.

## Лицензионные примечания

Некоторое содержимое (текст, примеры) данной страницы было скопировано или адаптировано со страниц [вики ECMAScript](http://wiki.ecmascript.org/doku.php), имеющей лицензию [CC 2.0 BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/2.0/)
