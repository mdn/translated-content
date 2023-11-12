---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
---

{{JSRef}}

Конструктор **`Error`** создаёт объект ошибки. Экземпляры объекта `Error` выбрасываются при возникновении ошибок во время выполнения. Объект `Error` также может использоваться в качестве базового для пользовательских исключений. Смотрите ниже стандартные встроенные типы ошибок.

## Синтаксис

```
new Error([message[, fileName[, lineNumber]]])
```

### Параметры

- `message` {{optional_inline()}}
  - : Человеко-читаемое описание ошибки.
- `fileName` {{non-standard_inline}} `{{optional_inline()}}`
  - : Значение свойства `fileName` созданного объекта `Error`. Значением по умолчанию является имя файла, содержащего код, вызвавший конструктор `Error()`.
- `lineNumber` {{non-standard_inline}} `{{optional_inline()}}`
  - : Значение свойства `lineNumber` созданного объекта `Error`. Значением по умолчанию является номер строки, содержащей вызов конструктора `Error()`.

## Описание

Во время выполнения кода ошибки приводят к созданию и выбрасыванию новых объектов `Error`.

Данная страница документирует использование объекта `Error` как самого по себе, так и при использовании в качестве функции-конструктора. Список свойств и методов, унаследованных экземплярами объекта `Error`, смотрите в разделе {{jsxref("Error.prototype")}}.

### Использование как функции

Когда `Error` используется как функции-- без {{jsxref("Operators/new", "new")}}, она возвращает `Error` объект. Следовательно простой вызов `Error` произведёт тот же результат, что и конструктор `Error` объявленный через `new`.

```js
// this:
const x = Error("I was created using a function call!");
// Такая же функциональность:
const y = new Error('I was constructed via the "new" keyword!');
```

### Типы ошибок

Кроме общего конструктора `Error`, в JavaScript существует ещё семь других основных конструкторов ошибок. По обработке исключений смотрите раздел [Выражения обработки исключений](/ru/docs/Web/JavaScript/Guide/Statements#Exception_Handling_Statements).

- {{jsxref("EvalError")}}
  - : Создаёт экземпляр, представляющий ошибку, возникающую в глобальной функции {{jsxref("Global_Objects/eval", "eval()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Создаёт экземпляр, представляющий ошибку, возникающую при выбрасывании внутренней ошибки в движке JavaScript. К примеру, ошибки «слишком глубокая рекурсия» («too much recursion»).
- {{jsxref("RangeError")}}
  - : Создаёт экземпляр, представляющий ошибку, возникающую при выходе числовой переменной или параметра за пределы допустимого диапазона.
- {{jsxref("ReferenceError")}}
  - : Создаёт экземпляр, представляющий ошибку, возникающую при разыменовывании недопустимой ссылки.
- {{jsxref("SyntaxError")}}
  - : Создаёт экземпляр, представляющий синтаксическую ошибку, возникающую при разборе исходного кода в функции {{jsxref("Global_Objects/eval", "eval()")}}.
- {{jsxref("TypeError")}}
  - : Создаёт экземпляр, представляющий ошибку, возникающую при недопустимом типе для переменной или параметра.
- {{jsxref("URIError")}}
  - : Создаёт экземпляр, представляющий ошибку, возникающую при передаче в функции {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} или {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} недопустимых параметров.

## Свойства

- {{jsxref("Error.prototype")}}
  - : Позволяет добавлять свойства в экземпляры объекта `Error`.

## Методы

Глобальный объект `Error` не содержит собственных методов, однако, он наследует некоторые методы из цепочки прототипов.

## Экземпляры объекта `Error`

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype', 'Description')}}

### Свойства

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype', 'Properties')}}

### Методы

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype', 'Methods')}}

## Примеры

### Пример: выбрасывание обычной ошибки

Обычно, вы создаёте объект `Error` с намерением возбудить ошибку с помощью ключевого слова {{jsxref("Statements/throw", "throw")}}. Вы можете обработать ошибку с помощью конструкции {{jsxref("Statements/try...catch", "try...catch")}}:

```js
try {
  throw new Error("Уупс!");
} catch (e) {
  console.log(e.name + ": " + e.message);
}
```

### Пример: обработка ошибки конкретного типа

Возможно, это следует удалить вы можете обрабатывать только какой-то определённый вид ошибок, проверяя тип ошибки в свойстве {{jsxref("Object.prototype.constructor", "constructor")}} или, если вы пишете для современных движков JavaScript, с помощью ключевого слова {{jsxref("Operators/instanceof", "instanceof")}}:

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.log(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    console.log(e.name + ": " + e.message);
  }
  // ... и т.д.
}
```

### Пример: пользовательские типы ошибок

Вы можете захотеть определить свои собственные типы ошибок, унаследованные от `Error`, что бы иметь возможность писать `throw new MyError()` и использовать `instanceof MyError` для проверки вида ошибки в обработчике исключений. Ниже продемонстрирован общий подход к выполнению этой задачи.

> **Предупреждение:** обратите внимание, что выбрасывание `MyError` будет сообщать неправильные номер строки `lineNumber` и имя файла `fileName` как минимум, в Firefox.

Также смотрите [обсуждение «Какой способ расширения Error в JavaScript более предпочтителен?» на Stackoverflow](http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript).

```js
// Создаём новый объект, затем через прототип делаем его наследником конструктора Error.
function MyError(message) {
  this.name = "MyError";
  this.message = message || "Сообщение по умолчанию";
  this.stack = new Error().stack;
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

try {
  throw new MyError();
} catch (e) {
  console.log(e.name); // 'MyError'
  console.log(e.message); // 'Сообщение по умолчанию'
}

try {
  throw new MyError("пользовательское сообщение");
} catch (e) {
  console.log(e.name); // 'MyError'
  console.log(e.message); // 'пользовательское сообщение'
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error.prototype")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
