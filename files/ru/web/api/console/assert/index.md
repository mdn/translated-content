---
title: console.assert()
slug: Web/API/console/assert
---

{{APIRef("Console API")}}{{Non-standard_Header}}

Метод **`console.assert()`** записывает сообщение об ошибке в консоль в случае, если утверждение ложно. Если утверждение истинно - ничего не происходит.

{{AvailableInWorkers}}

> **Примечание:** Реализация м*етода `console.assert()` в браузере и Node.js отличается.*
>
> В браузере, вызов console.assert() с ложным утверждением вызовет печать ошибки в консоль без прерывания текущего выполнения скрипта, а в Node.js в аналогичном случае будет выброшена ошибка - AssertionError.

## Синтаксис

```
console.assert(assertion, obj1 [, obj2, ..., objN]);
console.assert(assertion, msg [, subst1, ..., substN]); // си-подобное форматирование строк
```

### Параметры

- `assertion`
  - : Любое логическое утверждение. Если утверждение ложно - сообщение об ошибке записывается в консоль.
- `obj1` ... `objN`
  - : Список JavaScript объектов для вывода. Строковое представление этих объектов добавляются в порядке, указанном в списке, и выводятся.
- `msg`
  - : Строка JavaScript, содержащая ноль или более строк подстановки.
- `subst1` ... `substN`
  - : Объекты JavaScript, которыми нужно заменить строки подстановки в рамках параметра **msg**. Этот параметр даёт дополнительный контроль над форматированием вывода.

## Примеры

В следующем примере кода демонстрируется использование объекта JavaScript после утверждения:

```js
const errorMsg = "# не чётное число";
for (let number = 2; number <= 5; number += 1) {
  console.log("# равно " + number);
  console.assert(number % 2 === 0, { number: number, errorMsg: errorMsg });
  // или, при использовании {{jsxref("Operators/Object_initializer", "сокращения имён свойств в ECMAScript 2015", "Новая_нотация_в_ECMAScript_2015")}}:
  // console.assert(number % 2 === 0, {number, errorMsg});
}
// output:
// # равно 2
// # равно 3
// Assertion failed: {number: 3, errorMsg: "# не чётное число"}
// # равно 4
// # равно 5
// Assertion failed: {number: 5, errorMsg: "# не чётное число"}
```

Обратите внимание, что хотя строка, содержащая строку подстановки, работает как параметр для `console.log` в Node и многих, если не большинстве, браузерах...

```
console.log('слово %s', 'foo');
// output: слово foo
```

...использование такой строки в настоящее время не работает в качестве параметра для `console.assert` во всех браузерах:

```js
console.assert(false, "слово %s", "foo");
// корректный вывод в Node.js и некоторых браузерах
//     (например Firefox v60.0.2):
// Assertion failed: слово foo
// некорректный вывод в некоторых браузерах
//     (например Chrome v67.0.3396.87):
// Assertion failed: слово %s foo
```

Смотрите также [Вывод текста в консоль](/ru/docs/Web/API/console#Outputting_text_to_the_console) в документации {{domxref("console")}} для более детальной информации.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Chrome Developer Tools: Using the Console](https://developer.chrome.com/devtools/docs/console#assertions)
