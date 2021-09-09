---
title: Конструктор
slug: Glossary/Constructor
tags:
  - Glossary
translation_of: Glossary/Constructor
original_slug: Глоссарий/Constructor
---
**Конструктор** принадлежит к определённому классу {{glossary("object")}}, который создаётся. Конструктор инициализирует этот объект и может предоставлять доступ к его личной информации. Концепция конструктора может быть применена к большинству {{glossary("OOP","object-oriented programming")}} языков. По существу, конструктор в {{glossary("JavaScript")}} обычно объявляется в экземпляре {{glossary("class")}}.

## Синтаксис

```js
// Это конструктор по умолчанию класса Default
function Default() {
}

// Это перегруженный конструктор класса Overloaded
// с аргументами параметров
function Overloaded(arg1, arg2, ...,argN){
}
```

Для вызова конструктора класса в JavaScript, используется оператор `new` чтобы присвоить переменной ({{glossary("variable")}}) ссылку на объект ({{glossary("object reference")}}).

```js
function Default() {
}

// Новая ссылка объекта Default object назначена
// локальной переменной defaultReference
var defaultReference = new Default();
```



## Смотреть также

### Основные знания

- {{Interwiki("wikipedia", "Constructor_%28object-oriented_programming%29", "Constructor")}} на Wikipedia

### Техническая справка

- [Конструктор в ООП для JavaScript](/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_Constructor) на MDN
- [Оператор new в JavaScript](/en-US/docs/Web/JavaScript/Reference/Operators/new) на MDN
