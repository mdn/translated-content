---
title: Element.classList
slug: Web/API/Element/classList
---

{{APIRef("DOM")}}

## Описание

Свойство **`classList`** возвращает псевдомассив {{domxref("DOMTokenList")}}, содержащий все классы элемента.

> **Примечание:** У **classList** есть примитивная альтернатива - свойство **className,** которое содержит значение атрибута **class** элемента.

## Синтаксис

```
var elementClasses = elem.classList;
```

- Результат - псевдомассив {{domxref("DOMTokenList")}}, содержащий все классы узла **elem**

## Методы

**ClassList** является геттером. Возвращаемый им объект имеет несколько методов:

- add(String \[,String])
  : - Добавляет элементу указанные классы
- remove(String \[,String])
  - : Удаляет у элемента указанные классы
- toggle (String \[,Boolean])
  - : Если заданный класс у элемента отсутствует, то он добавляется, если такой класс есть, то класс удаляется. Когда вторым параметром передаётся `false` указанный класс удаляется, при передаче `true` - добавляется. Если вторым аргументом переданётся `undefined` или переменная с `typeof == 'undefined'`, поведение будет аналогичным вызову `toggle` с одним аргументом.
- contains ( String )
  - : Проверяет, есть ли данный класс у элемента (вернёт true или false)

> **Примечание:** И, конечно же, у **ClassList** есть заветное свойство **length**, которое возвращает количество классов у элемента.

## Примеры

```js
<div id="clock" class="example for you">
  {" "}
</div>
```

```js
var elem = document.querySelector("#clock");

//Выведем классы
console.log(elem.classList); //DOMTokenList ["example", "for", "you"]

//Добавим классы
elem.classList.add("ok", "understand");
console.log(elem.classList); //DOMTokenList ["example", "for", "you", "ok", "understand"]

//Переключим классы
elem.classList.toggle("you");
elem.classList.toggle("he");
console.log(elem.classList); //DOMTokenList ["example", "for", "ok", "understand", "he"]

//Проверим класс
console.log(elem.classList.contains("example")); //true
console.log(elem.classList.contains("lol")); //false

//И удалим классы
elem.classList.remove("example", "for", "understand", "he");
console.log(elem.classList); //DOMTokenList ["ok"]
```

> **Предупреждение:** В Firefox 25- в методах add, remove и toggle возможно указать только один аргумент. Смотрите: <https://bugzilla.mozilla.org/show_bug.cgi?id=814014>

## Полифил

```js
// Источник: https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca
(function () {
  // helpers
  var regExp = function (name) {
    return new RegExp("(^| )" + name + "( |$)");
  };
  var forEach = function (list, fn, scope) {
    for (var i = 0; i < list.length; i++) {
      fn.call(scope, list[i]);
    }
  };

  // class list object with basic methods
  function ClassList(element) {
    this.element = element;
  }

  ClassList.prototype = {
    add: function () {
      forEach(
        arguments,
        function (name) {
          if (!this.contains(name)) {
            this.element.className += " " + name;
          }
        },
        this,
      );
    },
    remove: function () {
      forEach(
        arguments,
        function (name) {
          this.element.className = this.element.className.replace(
            regExp(name),
            "",
          );
        },
        this,
      );
    },
    toggle: function (name) {
      return this.contains(name)
        ? (this.remove(name), false)
        : (this.add(name), true);
    },
    contains: function (name) {
      return regExp(name).test(this.element.className);
    },
    // bonus..
    replace: function (oldName, newName) {
      this.remove(oldName), this.add(newName);
    },
  };

  // IE8/9, Safari
  if (!("classList" in Element.prototype)) {
    Object.defineProperty(Element.prototype, "classList", {
      get: function () {
        return new ClassList(this);
      },
    });
  }

  // replace() support for others
  if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
    DOMTokenList.prototype.replace = ClassList.prototype.replace;
  }
})();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [element.className](/ru/docs/DOM/element.className)
