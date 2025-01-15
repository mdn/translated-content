---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

Метод **`localeCompare()`** {{jsxref("String", "строковых значений")}} возвращает число, указывающее, где должна находиться эта строка при сортировке (до, после или в том же самом месте, что и строка, переданная в качестве параметра). В реализациях с поддержкой [`Intl.Collator` API](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) этот метод просто вызывает `Intl.Collator`.

При сравнении большого количества строк, например при сортировке больших массивов, лучше создать объект {{jsxref("Intl.Collator")}} и использовать предоставляемый им метод {{jsxref("Intl/Collator/compare", "compare()")}}.

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

## Синтаксис

```js-nolint
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
```

### Параметры

Параметры `locales` и `options`Параметры `locales` и `options` изменяют поведение функции и позволяют приложениям определять язык, правила форматирования которого, следует использовать.

В реализациях, поддерживающих [`Intl.Collator` API](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator), эти параметры соответствуют параметрам конструктора [`Intl.Collator()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator). Реализации без поддержки `Intl.Collator` должны игнорировать оба параметра, возвращаемый результат сравнения полностью зависит от реализации.

- `compareString`
  - : Строка, с которой сравнивается `referenceStr`. Все значения [приводятся к строкам](/ru/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), поэтому отсутствие значения или значение `undefined` приводит к тому, что `localeCompare()` будет сравнивать со строкой `"undefined"`, а это скорее всего не то, что вы ожидаете.
- `locales` {{optional_inline}}

  - : Строка с языковым тегом BCP 47 или массив таких строк. Соответствует параметру [`locales`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) конструктора `Intl.Collator()`.

    В реализациях без поддержки `Intl.Collator` этот параметр игнорируется и обычно используется локаль устройства.

- `options` {{optional_inline}}

  - : Объект определяющий выходной формат. Соответствует параметру [`options`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options) конструктора `Intl.Collator()`.

    В реализациях без поддержки `Intl.Collator` этот параметр игнорируется.

Смотрите описание [конструктора `Intl.Collator()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) для подробностей использования параметров `locales` и `options`.

### Возвращаемое значение

**Отрицательное** число если `referenceStr` встречается перед `compareString`; **положительное** если `referenceStr` встречается после `compareString`; `0` если они одинаковы.

В реализациях с поддержкой `Intl.Collator` результат эквивалентен результату вызова `new Intl.Collator(locales, options).compare(referenceStr, compareString)`.

## Описание

Возвращает число, указывающее, расположена ли `referenceStr` до, после или в том же самом месте, что и `compareString`.

- Отрицательное число, когда `referenceStr` встречается перед `compareString`,
- Положительное число, когда `referenceStr` встречается после `compareString`,
- Возвращает `0` если строки одинаковы.

> [!WARNING]
> Не полагайтесь на точные значения `-1` и `1`!
>
> Отрицательные и положительные ответы отличаются в зависимости от браузера (и версии браузера), потому что спецификация ECMAScript определяет только то, что числа должны быть положительными и отрицательными. Некоторые браузеры могут возвращать `-2` или `2` или другие значения.

## Примеры

### Использование `localeCompare()`

```js
// Буква "а" идёт перед "в", поэтому результат будет отрицательным
"а".localeCompare("в"); // -2 или -1 (или другое отрицательное число)

// В алфавитном порядке слово "первый" идёт после "второй", поэтому результат будет положительным
"первый".localeCompare("второй"); // 2 или 1 (или другое положительное число)

// "а" и "а" одинаковы, поэтому результат будет равен нулю
"а".localeCompare("а"); // 0
```

### Сортировка массива

`localeCompare()` даёт возможность регистронезависимой сортировки массивов.

```js
const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### Проверка поддержки параметров `locales` и `options`

Параметры `locales` и `options` поддерживаются ещё не всеми браузерами.

Чтобы проверить их поддержку реализацией, используйте аргумент `"i"` (требование, чтобы недопустимые языковые метки отклонялись) и исключение {{jsxref("RangeError")}}:

```js
function localeCompareSupportsLocales() {
  try {
    "foo".localeCompare("bar", "i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Использование параметра `locales`

Результаты, предоставляемые `localeCompare()`, отличаются в зависимости от языка. Для получения порядка сортировки языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) используя параметр `locales`:

```js
console.log("ä".localeCompare("z", "de")); // отрицательное значение: в немецком буква ä идёт рядом с буквой a
console.log("ä".localeCompare("z", "sv")); // положительное значение: в шведском буква ä следует после буквы z
```

### Использование параметра `options`

Результат, предоставляемый `localeCompare()`, может быть настроен с помощью параметра `options`:

```js
// В немецком буква a является базовой для буквы ä
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// В шведском буквы ä и a являются двумя разными базовыми буквами
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // положительное значение
```

### Сортировка чисел

```js
// По умолчанию, "2" > "10"
console.log("2".localeCompare("10")); // 1

// Сортировка чисел с использованием настроек:
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1

// Сортировка чисел с использованием языковых меток:
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
