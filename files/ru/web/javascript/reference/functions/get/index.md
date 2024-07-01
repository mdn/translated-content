---
title: getter
slug: Web/JavaScript/Reference/Functions/get
---

{{jsSidebar("Functions")}}

Синтаксис **`get`** связывает свойство объекта с функцией, которая будет вызываться при обращении к этому свойству.

{{EmbedInteractiveExample("pages/js/functions-getter.html")}}

## Синтаксис

```
{get prop() { ... } }
{get [expression]() { ... } }
```

### Параметры

- `prop`
  - : Имя свойства для привязывания к заданной функции.
- `expression`
  - : Начиная с ECMAScript 6, вы также можете использовать выражения для вычисляемого имени свойства для привязки к заданной функции.

## Описание

Иногда желательно разрешить доступ к свойству, которое возвращает динамически вычисляемое значение, или вы можете захотеть отражать состояние внутренней переменной без необходимости использования явных вызовов методов. В JavaScript, это можно реализовать при помощи использования _геттера_.

Невозможно сделать так, чтобы геттер был привязан к свойству и одновременно чтобы это свойство действительно содержало значение, хотя можно использовать геттер и сеттер в сочетании, чтобы создать тип псевдо-свойство.

Учтите следующее при работе с синтаксисом `get`:

- Он может иметь идентификатор, который является либо числом, либо строкой;
- Он должен иметь ровно 0 параметров (смотрите [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) для доп. информации);
- Он не должен появляться в объектном литерале вместе с другим get или через ввод данных для того же свойства (`{ get x() { }, get x() { } }` и `{ x: ..., get x() { } }` запрещены).

Геттер можно удалить при помощи оператора [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete).

## Примеры

### Определение геттера на новом объекте в момент инициализации этого объекта

Ниже создаётся псевдо-свойство `latest` для объекта `obj`, который выведет последний элемент массива в консоль лог.

```js
const obj = {
  log: ["example", "test"],
  get latest() {
    if (this.log.length === 0) return undefined;
    return this.log[this.log.length - 1];
  },
};
console.log(obj.latest); // "test"
```

Обратите внимание, что попытка присвоить значение `latest` не изменит его.

### Удаление геттера оператором delete

`Если вы хотите удалить геттер, используйте delete`:

```js
delete obj.latest;
```

### Определение геттера на уже существующих объектах с помощью `defineProperty`

Для добавления геттера к существующему объекту в любое время используйте [Object.defineProperty()](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  get: function () {
    return this.a + 1;
  },
});

console.log(o.b); // Runs the getter, which yields a + 1 (which is 1)
```

### Использование вычисляемого именованного свойства

> **Примечание:** Вычисляемые свойства являются экспериментальной технологией, частью предложений спецификации ECMAScript 6, и массовой поддержки браузерами пока нет. Код ниже вызовет синтаксическую ошибку в неподдерживаемых средах.

```js
var expr = "foo";

var obj = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj.foo); // "bar"
```

### Умные / самостоятельно перезаписывающиеся/ ленивые геттеры

Геттеры дают нам возможность определять свойство объекта , но они не вычисляют значение этого свойства до тех пор, пока оно не станет доступно. Геттер откладывает стоимость вычисления значения до тех пор, пока это значение не станет нужно, и если оно никогда не понадобится, то вы никогда не заплатите.

Дополнительная техника оптимизации заключается в том, чтобы лениться или откладывать вычисление значения свойства и кешировать его для дальнейшего доступа. Так поступают **умные или [запоминающие](https://en.wikipedia.org/wiki/Memoization) геттеры**. Значение вычисляется в первый раз при вызове геттера и затем сохраняется в кеше так, что последующие обращения будут возвращать кешированные значения без его пересчёта. Это полезно в следующих ситуациях:

- Если вычисление значения свойства дорого (занимает много оперативной памяти или процессорного времени, порождает рабочий поток, получает удалённый файл, и т. д.).
- Если сейчас это значение не нужно. Оно будет использоваться позже, или в некоторых случаях оно не используется вообще.
- Если оно используется, к нему будут обращаться несколько раз, и нет необходимости его пересчитывать, так как значение не будет изменено, или не должно пересчитываться.

Значит, вам не нужно использовать ленивый геттер для свойства, значение которого вы собираетесь менять потому, что геттер не будет пересчитывать значение.

В следующем примере у объекта есть геттер как собственное свойство. При получении свойства, свойство удаляется из объекта и вновь добавляется, но в этот раз неявно, как свойство с данными. В итоге значение возвращается.

```js
get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById("bookmarked-notification-anchor");
},
```

Для Firefox смотрите также модуль XPCOMUtils.jsm , который определяет функцию [`defineLazyGetter()`](</ru/docs/Mozilla/JavaScript_code_modules/XPCOMUtils.jsm#defineLazyGetter()>).

### `get` и `defineProperty`

Использование ключевого слова `get` и {{jsxref("Object.defineProperty()")}} даёт похожие результаты, но при использовании в {{jsxref("classes")}} между ними есть тонкая разница.

При использовании `get` свойство будет определено в прототипе объекта, в то время, как при использовании {{jsxref ("Object.defineProperty ()")}} свойство будет определено в экземпляре, к которому применяется.

```js
class Example {
  get hello() {
    return "world";
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"
console.log(Object.getOwnPropertyDescriptor(obj, "hello"));
// undefined
console.log(
  Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), "hello"),
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [сеттер](/ru/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Defining Getters and Setters](/ru/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) in JavaScript Guide
