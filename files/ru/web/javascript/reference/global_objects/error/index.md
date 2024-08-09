---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
---

{{JSRef}}

Экземпляры объекта `Error` выбрасываются при возникновении ошибок во время выполнения. Объект `Error` также может использоваться в качестве базового для пользовательских исключений. Смотрите ниже стандартные встроенные типы ошибок.

## Описание

Во время выполнения кода ошибки приводят к созданию и выбрасыванию новых объектов `Error`.

`Error` является {{Glossary("serializable object", "сериализуемым объектом")}}, поэтому он может быть клонирован с помощью {{domxref("structuredClone()")}} или передан между [воркерами](/ru/docs/Web/API/Worker) с использованием {{domxref("Worker/postMessage()", "postMessage()")}}.

### Типы ошибок

Кроме общего конструктора `Error`, в JavaScript существуют другие встроенные конструкторы ошибок, смотрите раздел [Выражения обработки исключений](/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Создаёт экземпляр, представляющий ошибку, возникающую в глобальной функции {{jsxref("Global_Objects/eval", "eval()")}}.
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
- {{jsxref("AggregateError")}}
  - : Создаёт экземпляр, представляющий несколько ошибок, обёрнутых в одну. Может быть полезно, например, при работе с {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Создаёт экземпляр, представляющий ошибку, возникающую при выбрасывании внутренней ошибки в движке JavaScript. К примеру, ошибки «слишком глубокая рекурсия» («too much recursion»).

## Конструктор

- {{jsxref("Error/Error", "Error()")}}
  - : Создаёт новый объект `Error`.

## Статические методы

- `Error.captureStackTrace()` {{non-standard_inline}}
  - : Нестандартная функция V8, которая создаёт свойство {{jsxref("Error/stack", "stack")}} у экземпляра `Error`.
- `Error.stackTraceLimit` {{non-standard_inline}}
  - : Нестандартное числовое свойство V8, которое ограничивает количество уровней ошибок, включаемых в трассировку стека.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Нестандартная функция V8, которая (если задана в пользовательском коде) вызывается JavaScript-движком V8 для выбрасывание исключений, позволяя определять нестандартное форматирование трассировки стека.

## Свойства экземпляра

Эти свойства определены в `Error.prototype` и есть у всех экземпляров `Error`.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `Error` начальным значением является конструктор {{jsxref("Error/Error", "Error")}}.
- {{jsxref("Error.prototype.name")}}
  - : Представляет название типа ошибки. Начальным значением `Error.prototype.name` является `"Error"`. Подклассы (например, {{jsxref("TypeError")}} и {{jsxref("SyntaxError")}}) имеют собственные значения свойства `name`.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Нестандартное свойство, содержащее трассировку стека.

Эти свойства являются собственными свойствами каждого экземпляра `Error`.

- {{jsxref("Error/cause", "cause")}}

  - : Причина возникновения текущей ошибки — обычно это другая обнаруженная ошибка. Для созданных пользователем объектов `Error` это значение свойства `cause` второго аргумента конструктора.

  - : Нестандартное свойство Mozilla, определяющее номер символа в строке, в которой возникла ошибка.

- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Нестандартное свойство Mozilla, определяющее путь к файлу, в котором возникла ошибка.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Нестандартное свойство Mozilla, определяющее номер строки в файле, где возникла ошибка.
- {{jsxref("Error/message", "message")}}
  - : Сообщение об ошибке. Для созданных пользователем объектов `Error` это строка, передаваемая в качестве первого аргумента конструктора.

## Методы экземпляра

- {{jsxref("Error.prototype.toString()")}}
  - : Возвращает строку, представляющую указанный объект. Переопределяет метод {{jsxref("Object.prototype.toString()")}}.

## Примеры

### Выбрасывание обычной ошибки

Обычно, вы создаёте объект `Error` с намерением возбудить ошибку с помощью ключевого слова {{jsxref("Statements/throw", "throw")}}. Вы можете обработать ошибку с помощью конструкции {{jsxref("Statements/try...catch", "try...catch")}}:

```js
try {
  throw new Error("Ой!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Обработка ошибки конкретного типа

Для обработки только определённых типов ошибок можно делать проверку типа с помощью ключевого слова {{jsxref("Operators/instanceof", "instanceof")}}:

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.error(`${e.name}: ${e.message}`);
  } else if (e instanceof RangeError) {
    console.error(`${e.name}: ${e.message}`);
  }
  // и так далее
  else {
    // Если ни один из типов не совпал, то оставляем ошибку необработанной
    throw e;
  }
}
```

### Пользовательские типы ошибок

Вы можете захотеть определить свои собственные типы ошибок, унаследованные от `Error`, чтобы иметь возможность возбуждать их с помощью `throw new MyError()` и использовать `instanceof MyError` для проверки вида ошибки в обработчике исключений. Это помогает делать обработку ошибок более понятной.

Также смотрите обсуждение [«Какой способ расширения Error в JavaScript более предпочтителен?»](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) на StackOverflow.

> [!WARNING]
> Встроенные подклассы не могут быть надёжно преобразованы в ES6 код, потому что нет возможности создать базовый класс со специфичным `new.target` без {{jsxref("Reflect.construct()")}}. Требуется [дополнительная конфигурация](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) или ручной вызов {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} в конце конструктора, иначе создаваемый экземпляр не будет экземпляром `CustomError`. Смотрите [TypeScript FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) для получения дополнительной информации.

> [!NOTE]
> Некоторые браузеры включают конструктор `CustomError` в трассировку стека при использовании классов ES2015.

```js
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Передаём все аргументы (включая специфичные для производителя движка) родительскому конструктору
    super(...params);

    // Поддерживаем соответствующую трассировку стека с указанием места возникновения ошибки (доступно только в V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    // Дополнительная отладочная информация
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
  console.error(e.stack); // stacktrace
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Error` с поддержкой `cause` в `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Stack trace API](https://v8.dev/docs/stack-trace-api) в документации V8
