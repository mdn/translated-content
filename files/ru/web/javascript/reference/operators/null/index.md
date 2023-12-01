---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
---

{{jsSidebar("Objects")}}

Значение `null` представляет отсутствие какого-либо объектного значения. В JavaScript, `null` является {{Glossary("Primitive", "примитивом")}}, и в контексте логических операций, рассматривается как {{Glossary("Falsy", "ложное (falsy)")}}.

{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}

## Синтаксис

```
null
```

## Описание

Значение `null` записывается литералом `null`. Оно является самостоятельным, а не свойством глобального объекта (как {{jsxref("Global_Objects/undefined", "undefined")}}). В API, `null` часто присутствует в местах где ожидается объект, но подходящего объекта нет.

```js
// переменная foo не существует - она не была определена и никогда не инициализировалась:
> foo
'ReferenceError: foo is not defined'

// переменная foo существует, но она не имеет ни типа, ни значения:
> var foo = null; foo
'null'
```

### Отличия между `null` и `undefined`

`null` является определённым значением отсутствия объекта, тогда как {{jsxref("Global_Objects/undefined", "undefined")}} обозначает неопределённость. Например:

```js
var element;
// значение переменной element до её инициализации не определённо: undefined

element = document.getElementById("not-exists");
// здесь при попытке получения несуществующего элемента, метод getElementById возвращает null
// переменная element теперь инициализирована значением null, её значение определено
```

При проверке на `null` или {{jsxref("Global_Objects/undefined", "undefined")}}, помните о [различии между операторами равенства (==) и идентичности (===)](/ru/docs/Web/JavaScript/Reference/Operators/Операторы_сравнения#Использование_операторов_равенства): с первым, выполняется преобразование типов.

```js
typeof null; // object (не "null" из соображений обратной совместимости)
typeof undefined; // undefined
null === undefined; // false
null == undefined; // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/undefined", "undefined")}}
- {{jsxref("Global_Objects/NaN", "NaN")}}
