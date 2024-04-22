---
title: Мета-программирование
slug: Web/JavaScript/Guide/Meta_programming
---

{{jsSidebar("JavaScript Guide")}} {{Previous("Web/JavaScript/Guide/Iterators_and_Generators")}}

С приходом ECMAScript 2015, в JavaScript введены объекты {{jsxref("Proxy")}} и {{jsxref("Reflect")}}, позволяющие перехватить и переопределить поведение фундаментальных процессов языка (таких как поиск свойств, присвоение, итерирование, вызов функций и так далее). С помощью этих двух объектов вы можете программировать на мета уровне JavaScript.

## Объекты Proxy

Введённый в ECMAScript 6, объект {{jsxref("Proxy")}} позволяет перехватить и определить пользовательское поведение для определённых операций. Например, получение свойства объекта:

```js
var handler = {
  get: function (target, name) {
    return name in target ? target[name] : 42;
  },
};
var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

Объект `Proxy` определяет `target` (в данном случае новый пустой объект) и `handler` - объект в котором реализована особая _функция-ловушка_ `get`. "Проксированный" таким образом объект, при доступе к его несуществующему свойству вернёт не `undefined,` а числовое значение 42.

Дополнительные примеры доступны в справочнике {{jsxref("Proxy")}}.

### Терминология

В разговоре о функциях объекта `Proxy` применимы следующие термины:

- {{jsxref("Global_Objects/Proxy/handler","handler","","true")}} (обработчик)
  - : Объект - обёртка, содержащий в себе функции-ловушки.
- ловушки (traps)
  - : Методы, реализующие доступ к свойствам. В своей концепции они аналогичны методам перехвата(hooking) в операционных системах.
- цель (target)
  - : Объект, который оборачивается в Proxy. Часто используется лишь как внутреннее хранилище для Proxy объекта. Проверка на нарушение ограничений (invariants), связанных с нерасширяемостью объекта или неконфигурируемыми свойствами объекта производится для конкретной **цели**.
- неизменяемые ограничения (дословно Invariants - те что остаются неизменными)
  - : Некоторые особенности поведения объекта, которые должны быть сохранены при реализации пользовательского поведения названы invariants. Если в обработчике нарушены такие ограничения, будет выброшена ошибка {{jsxref("TypeError")}}.

## Обработчики и ловушки

В следующей таблице перечислены ловушки, доступные для использования в объекте `Proxy`. Смотрите подробные объяснения и примеры в [документации](/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler).

<table class="standard-table">
  <thead>
    <tr>
      <th>Обработчик / ловушка</th>
      <th>Перехватываемые методы</th>
      <th>Неизменяемые ограничения</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}}<br />{{jsxref("Reflect.getPrototypeOf()")}}<br />{{jsxref("Object/proto", "__proto__")}}<br />{{jsxref("Object.prototype.isPrototypeOf()")}}<br />{{jsxref("Operators/instanceof", "instanceof")}}
      </td>
      <td>
        <ul>
          <li>
            <code>метод getPrototypeOf</code> должен вернуть object или
            <code>null</code>.
          </li>
          <li>
            если целевой объект <code>target</code> нерасширяем, метод
            <code>Object.getPrototypeOf(proxy)</code> должен возвращать тот же
            результат что и <code>Object.getPrototypeOf(target)</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}}<br />{{jsxref("Reflect.setPrototypeOf()")}}
      </td>
      <td>
        если целевой объект <code>target</code> нерасширяем, значение параметра
        <code>prototype</code> должно быть равным значению возвращаемому методом
        <code>Object.getPrototypeOf(target)</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/isExtensible", "handler.isExtensible()")}}
      </td>
      <td>
        {{jsxref("Object.isExtensible()")}}<br />{{jsxref("Reflect.isExtensible()")}}
      </td>
      <td>
        <code>Object.isExtensible(proxy)</code> должно возвращать тоже значение,
        что и <code>Object.isExtensible(target)</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}
      </td>
      <td>
        {{jsxref("Object.preventExtensions()")}}<br />{{jsxref("Reflect.preventExtensions()")}}
      </td>
      <td>
        <code>Object.preventExtensions(proxy)</code> возвращает
        <code>true</code> только в том случае, если
        <code>Object.isExtensible(proxy)</code> равно <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptor()")}}<br />{{jsxref("Reflect.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        <ul>
          <li>
            <code>метод getOwnPropertyDescriptor</code> должен возвращать object
            или <code>undefined</code>.
          </li>
          <li>
            Свойство не может быть описано как несуществующее, если оно
            существует и является некофигурируемым, собственным свойством
            целевого объекта <code>target</code>.
          </li>
          <li>
            Свойство не может быть описано как несуществующее, если оно
            существует как собственное свойство целевого объекта
            <code>target</code> и <code>target</code> не расширяем.
          </li>
          <li>
            Свойство не может быть описано как существующее, если оно не
            существует как собственное свойство целевого объекта
            <code>target</code> и <code>target</code> не расширяем.
          </li>
          <li>
            Свойство не может быть описано как неизменяемое, если оно не
            существует как собственное свойство целевого объекта
            <code>target</code> или если оно существует и является изменяемым,
            собственным свойством целевого объекта <code>target</code>.
          </li>
          <li>
            Значение возвращённое методом
            <code>Object.getOwnPropertyDescriptor(target)</code> может быть
            применено к целевому объекту через метод
            <code>Object.defineProperty и э</code>то не вызовет ошибки.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}}
      </td>
      <td>
        {{jsxref("Object.defineProperty()")}}<br />{{jsxref("Reflect.defineProperty()")}}
      </td>
      <td>
        <ul>
          <li>
            Новое свойство не может быть добавлено, если целевой объект не
            расширяем.
          </li>
          <li>
            Нельзя добавить новое конфигурируемое свойство, или преобразовать
            существующее свойство в конфигурируемое, если оно не существует как
            собственное свойство целевого объекта или не является
            конфигурируемым.
          </li>
          <li>
            Свойство не может быть неконфигурируемым, если целевой объект имеет
            соответствующее собственное, конфигурируемое свойство.
          </li>
          <li>
            Если объект имеет свойство соответствующее создаваемому свойству, то
            <code>Object.defineProperty(target, prop, descriptor)</code> не
            вызовет ошибки.
          </li>
          <li>
            В строгом режиме ("use strict";), если обработчик
            <code>defineProperty</code> вернёт <code>false</code>, это вызовет
            ошибку {{jsxref("TypeError")}}.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/has", "handler.has()")}}
      </td>
      <td>
        Property query: <code>foo in proxy</code><br />Inherited property query:
        <code>foo in Object.create(proxy)</code
        ><br />{{jsxref("Reflect.has()")}}
      </td>
      <td>
        <ul>
          <li>
            Свойство не может быть описано как несуществующее, если оно
            существует как собственное неконфигурируемое свойство целевого
            объекта.
          </li>
          <li>
            Свойство не может быть описано как несуществующее, если оно
            существует как собственное свойство целевого объекта, и целевой
            объект является нерасширяемым.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/get", "handler.get()")}}
      </td>
      <td>
        <!-- markdownlint-disable MD011 -->
        Property access: <code>proxy[foo]</code>and <code>proxy.bar</code
        ><br />Inherited property access: <code>Object.create(proxy)[foo]</code
        ><br />{{jsxref("Reflect.get()")}}
      </td>
      <td>
        <ul>
          <li>
            Значение, возвращаемое для свойства, должно равняться значению
            соответствующего свойства целевого объекта, если это свойство
            является доступным только для чтения, неконфигурируемым.
          </li>
          <li>
            Значение, возвращаемое для свойства, должно равняться
            <code>undefined,</code> если соответствующее свойство целевого
            объекта является неконфигурируемым и обёрнуто в геттер и сеттер, где
            сеттер равен <code>undefined</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/set", "handler.set()")}}
      </td>
      <td>
        Property assignment: <code>proxy[foo] = bar</code> and
        <code>proxy.foo = bar</code><br />Inherited property assignment:
        <code>Object.create(proxy)[foo] = bar</code
        ><br />{{jsxref("Reflect.set()")}}
      </td>
      <td>
        <ul>
          <li>
            Нельзя изменить значение свойства на значение, отличное от значения
            соответствующего свойства целевого объекта, если это свойство
            целевого объекта доступно только для чтения, и является
            неконфигурируемым.
          </li>
          <li>
            Нельзя установить значение свойства, если соответствующее свойство
            целевого объекта является неконфигурируемым, и обёрнуто в геттер и
            сеттер, где сеттер равен <code>undefined</code>.
          </li>
          <li>
            В строгом режиме, возвращение <code>false</code> из обработчика
            <code>set</code> вызовет ошибку {{jsxref("TypeError")}}.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}
      </td>
      <td>
        Property deletion: <code>delete proxy[foo]</code> and
        <code>delete proxy.foo</code
        ><br />{{jsxref("Reflect.deleteProperty()")}}
      </td>
      <td>
        Свойство не может быть удалено, если оно существует в целевом объекте
        как собственное, неконфигурируемое свойство.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/enumerate", "handler.enumerate()")}}
      </td>
      <td>
        Property enumeration / for...in:
        <code>for (var name in proxy) {...}</code
        ><br />{{jsxref("Reflect.enumerate()")}}
      </td>
      <td>
        <code
          >Метод enumerate</code
        >
        должен возвращать объект.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/ownKeys", "handler.ownKeys()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyNames()")}}<br />{{jsxref("Object.getOwnPropertySymbols()")}}<br />{{jsxref("Object.keys()")}}<br />{{jsxref("Reflect.ownKeys()")}}
      </td>
      <td>
        <ul>
          <li>Метод <code>ownKeys</code> должен возвращать список.</li>
          <li>
            Типом каждого элемента в возвращаемом списке должен быть
            {{jsxref("String")}} или {{jsxref("Symbol")}}.
          </li>
          <li>
            Возвращаемый список должен содержать ключи для всех
            неконфигурируемых, собственных свойств целевого объекта.
          </li>
          <li>
            Если целевой объект является нерасширяемым, возвращаемый список
            должен содержать все ключи для собственных полей целевого объекта и
            больше никаких других значений.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/apply", "handler.apply()")}}
      </td>
      <td>
        <code>proxy(..args)</code
        ><br />{{jsxref("Function.prototype.apply()")}} and
        {{jsxref("Function.prototype.call()")}}<br />{{jsxref("Reflect.apply()")}}
      </td>
      <td>Ограничений нет.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/construct", "handler.construct()")}}
      </td>
      <td>
        <code>new proxy(...args)</code
        ><br />{{jsxref("Reflect.construct()")}}
      </td>
      <td>Обработчик должен возвращать <code>Object</code>.</td>
    </tr>
  </tbody>
</table>

## Отзываемый `Proxy`

Метод {{jsxref("Proxy.revocable()")}} создаёт отзываемый объект `Proxy`. Такой прокси объект может быть отозван функцией `revoke`, которая отключает все ловушки-обработчики. После этого любые операции над прокси объектом вызовут ошибку {{jsxref("TypeError")}}.

```js
var revocable = Proxy.revocable(
  {},
  {
    get: function (target, name) {
      return "[[" + name + "]]";
    },
  },
);
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // ошибка TypeError
proxy.foo = 1; // снова ошибка TypeError
delete proxy.foo; // опять TypeError
typeof proxy; // "object", для метода typeof нет ловушек
```

## Рефлексия

{{jsxref("Reflect")}} это встроенный объект, предоставляющий методы для перехватываемых операций JavaScript. Это те же самые методы, что имеются в {{jsxref("Global_Objects/Proxy/handler","обработчиках Proxy","","true")}}. Объект `Reflect` не является функцией.

`Reflect` помогает при пересылке стандартных операций из обработчика к целевому объекту.

Например, метод {{jsxref("Reflect.has()")}} это тот же [`оператор in`](/ru/docs/Web/JavaScript/Reference/Operators/in) но в виде функции:

```js
Reflect.has(Object, "assign"); // true
```

### Улучшенная функция `apply`

В ES5 обычно используется метод {{jsxref("Function.prototype.apply()")}} для вызова функции в определённом контексте (с определённым `this)` и с параметрами, заданными в виде массива (или [массива-подобного объекта](/ru/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)).

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

С методом {{jsxref("Reflect.apply")}} эта операция менее громоздка и более понятна:

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

### Проверка успешности определения нового свойства

Метод {{jsxref("Object.defineProperty")}}, в случае успеха операции, возвращает объект, а при неудаче вызывает ошибку {{jsxref("TypeError")}}. Из-за этого определение свойств требует обработки блоком {{jsxref("Statements/try...catch","try...catch")}} для перехвата возможных ошибок. Метод {{jsxref("Reflect.defineProperty")}}, в свою очередь, возвращает успешность операции в виде булева значения, благодаря чему возможно использование простого {{jsxref("Statements/if...else","if...else")}} условия:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // успех
} else {
  // что-то пошло не так
}
```

{{Previous("Web/JavaScript/Guide/Iterators_and_Generators")}}
