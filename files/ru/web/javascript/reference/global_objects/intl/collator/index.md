---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Объект **`Intl.Collator`** обеспечивает сравнение строк с учётом языка.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

## Конструктор

- {{jsxref("Intl/Collator/Collator", "Intl.Collator()")}}
  - : Создаёт новый объект `Collator`.

## Статические методы

- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : Возвращает массив, содержащий локали, которые поддерживаются без необходимости возврата к локали по умолчанию.

## Свойства экземпляра

Эти свойства определены в `Intl.Collator.prototype` и есть у всех экземпляров `Intl.Collator`.

- {{jsxref("Object/constructor", "Intl.Collator.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `Intl.Collator` начальным значением является конструктор {{jsxref("Intl/Collator/Collator", "Intl.Collator")}}.
- `Intl.Collator.prototype[@@toStringTag]`
  - : Начальным значением свойства [`@@toStringTag`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) является строка `"Intl.Collator"`. Это свойство используется в {{jsxref("Object.prototype.toString()")}}.

## Методы экземпляра

- {{jsxref("Intl/Collator/compare", "Intl.Collator.prototype.compare()")}}
  - : Функция-геттер, которая сравнивает две строки в соответствии с правилами сортировки этого объекта {{jsxref("Intl.Collator")}}.
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
  - : Возвращает новый объект со свойствами, отражающими локаль и настройки сравнения, полученные при инициализации объекта.

## Примеры

### Использование `Collator`

Этот пример демонстрирует возможные результаты для строки, которая встречается до, после или на том же самом уровне, что и другая строка:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1 или другое отрицательное значение
console.log(new Intl.Collator().compare("c", "a")); // 1 или другое положительное значение
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Обратите внимание, что результат, показанный в коде выше, может отличаться в зависимости от браузера и его версии, потому что возвращаемые значения зависят от реализации. Спецификация требует только чтобы для строки, встречающиеся до, значение было отрицательным, а после — положительным.

### Использование параметра `locales`

Результаты, предоставляемые функцией {{jsxref("Collator.prototype.compare()")}} отличаются в зависимости от языка. Для получения порядка сортировки языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) используя параметр `locales`:

```js
// В немецком языке буква ä идёт рядом с буквой a
console.log(new Intl.Collator("de").compare("ä", "z"));
// -1 или другое отрицательное значение

// В шведском языке буква ä следует после буквы z
console.log(new Intl.Collator("sv").compare("ä", "z"));
// 1 или другое положительное значение
```

### Использование параметра `options`

Результат, предоставляемый функцией {{jsxref("Collator.prototype.compare()")}}, может быть настроен с помощью параметра `options`:

```js
// В немецком языке буква a является базовой для буквы ä
console.log(new Intl.Collator("de", { sensitivity: "base" }).compare("ä", "a"));
// 0

// В шведском языке буквы ä и a являются двумя разными базовыми буквами
console.log(new Intl.Collator("sv", { sensitivity: "base" }).compare("ä", "a"));
// 1 или другое положительное значение
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Intl")}}
