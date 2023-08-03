---
title: Конструктор
slug: Glossary/Constructor
---

**Конструктор** принадлежит к определённому {{glossary("object","объекту")}}, созданному с помощью класса. Конструктор инициализирует этот объект и может предоставлять доступ к его личной информации. Концепция конструктора может быть применена к большинству {{glossary("OOP","объектно-ориентированных")}} языков программирования. По существу, конструктор в {{glossary("JavaScript")}} обычно объявляется в экземпляре {{glossary("class")}}.

## Синтаксис

```js
// Это конструктор по умолчанию класса Default
function Default() {
}

// Это перегруженный конструктор класса Overloaded
// с аргументами параметров
function Overloaded(arg1, arg2, ..., argN){
}
```

Для вызова конструктора класса в JavaScript, используется оператор `new` чтобы присвоить {{glossary("variable","переменной")}} {{glossary("object reference","ссылку на объект")}}.

```js
function Default() {}

// Новая ссылка объекта Default object назначена
// локальной переменной defaultReference
var defaultReference = new Default();
```

## Смотреть также

### Техническая справка

- [Конструктор в ООП для JavaScript](/ru/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_Constructor) на MDN
- [Оператор new в JavaScript](/ru/docs/Web/JavaScript/Reference/Operators/new) на MDN
