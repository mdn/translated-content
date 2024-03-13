---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
---

{{JSSidebar("Operators")}}Свойство **`new.target`** позволяет определить была ли функция или конструктор вызваны с помощью оператора [new](/ru/docs/Web/JavaScript/Reference/Operators/new). В конструкторах и функциях инстанциированных с помощью оператора [new](/ru/docs/Web/JavaScript/Reference/Operators/new), `new.target` возвращает ссылку на конструктор или функцию. При обычном вызове функции `new.target` имеет значение {{jsxref("undefined")}}.

## Синтаксис

```
new.target
```

## Описание

Синтаксис `new.target` состоит из ключевого слова `new`, точки, и свойства `target`. Обычно `new` служит контекстом для доступа к свойству, но здесь `new` не совсем объект. Однако при вызове конструктора, `new.target` ссылается на конструктор вызванный с помощью `new` и таким образом `new` становится виртуальным контекстом.

Свойство `new.target` это мета свойство которое доступно во всех функциях. В [стрелочных функция](/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions), `new.target` ссылается на `new.target` внешней функции.

## Примеры

### new\.target в вызове функции

При обычном вызове функции (в противоположность вызову в качестве конструктора), `new.target` имеет значение {{jsxref("undefined")}}. Это позволяет определить была ли вызвана функция как конструктор через [new](/ru/docs/Web/JavaScript/Reference/Operators/new) или нет.

```js
function Foo() {
  if (!new.target) throw "Foo() must be called with new";
  console.log("Foo instantiated with new");
}

new Foo(); // выведет "Foo instantiated with new"
Foo(); // ошибка "Foo() must be called with new"
```

### new\.target в конструкторе

В конструкторе класса, `new.target` ссылается на конструктор, который был непосредственно вызван `new`. Это верно и для случая, когда `new.target` находится в конструкторе родительского класса, а тот в свою очередь вызывается из конструктора дочернего класса.

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

var a = new A(); // вернёт "A"
var b = new B(); // вернёт "B"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Functions](/ru/docs/Web/JavaScript/Reference/Functions)
- [Classes](/ru/docs/Web/JavaScript/Reference/Classes)
- [`new`](/ru/docs/Web/JavaScript/Reference/Operators/new)
- [`this`](/ru/docs/Web/JavaScript/Reference/Operators/this)
