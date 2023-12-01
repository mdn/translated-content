---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`normalize()`** возвращает форму нормализации Юникода данной строки (если значение не является строкой, сначала оно будет в неё преобразовано).

Одна из особенностей Юникода - возможность считать два разных символа эквивалентными при выполнении сортировки и иных операций, которые основаны на сравнении.

Виды эквивалентности:
\- первый - каноническая эквивалентность, когда две последовательности code point являются полностью взаимозаменяемыми.

\- второй - совместимость - две совместимые последовательности code point выглядят по-разному, но в некоторых случаях они могут быть взаимозаменяемыми.

'æ' взаимозаменяемый 'ae', но они не являются строго эквивалентными, если не провести некоторую нормализацию

## Синтаксис

```
str.normalize([form])
```

### Параметры

- `form`

  - : Одно из значений `"NFC"`, `"NFD"`, `"NFKC"` или `"NFKD"`, определяющих форму нормализации Юникода. Если параметр опущен или равен {{jsxref("Global_Objects/undefined", "undefined")}}, будет использоваться значение `"NFC"`.

    - `NFC` — форма нормализации канонической композицией (Normalization Form Canonical Composition, 'NFC'), по умолчанию;
    - `NFD` — форма нормализации канонической декомпозицией (Normalization Form Canonical Decomposition, 'NFD');
    - `NFKC` — форма нормализации совместимой композицией (Normalization Form Compatibility Composition, 'NFKC');
    - `NFKD` — форма нормализации совместимой декомпозицией (Normalization Form Compatibility Decomposition, 'NFKD').

### Выбрасываемые исключения

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : Если параметр `form` не является одним из вышеперечисленных значений, будет выброшено исключение {{jsxref("Global_Objects/RangeError", "RangeError")}}.

## Описание

Метод `normalize()` возвращает указанную форму нормализации Юникода строки. Он не изменяет значение самой строки.

## Примеры

### Пример: использование метода `normalize()`

```js
let valueStr = ["h", "ĥ", "æ", "ae", "g", "ġ"],
  normArr = valueStr.map(function (text) {
    return text.normalize(); // (по умолчанию 'NFC') normArr (после сортировки) -> [ae, g, h, æ, ġ, ĥ]
    //return text.normalize('NFD'); // normArr (после сортировки) -> [ae, g, ġ, h, ĥ, æ]
    //return text.normalize('NFKC'); // normArr (после сортировки) -> [ae, g, h, æ, ġ, ĥ]
    //return text.normalize('NFKD'); // normArr (после сортировки) -> [ae, g, ġ, h, ĥ, æ]
  });

//После приведение строк в нормальную форму, мы можем провести сортировку, массива:
normArr.sort(function (f, s) {
  if (f < s) {
    return -1;
  } else if (f === s) {
    return 0;
  } else {
    return 1;
  }
});

//Приведение к нормальной форме можно выполнить во время сортировки. Нормализацию при этом можно выполнять с помощью разных форм нормализации
let valueStrNorm = ["h", "s", "ĥ", "æ", "ș", "ae", "g", "ġ"];
valueStrNorm.sort(function (first, second) {
  let fN = first.normalize(),
    sN = second.normalize("NFKC");

  if (fN < sN) {
    return -1;
  } else if (fN === sN) {
    return 0;
  } else {
    return 1;
  }
});

valueStrNorm.join(", "); //-> ae, g, h, s, æ, ġ, ĥ, ș
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Приложение №15 к стандарту Юникода: формы нормализации Юникода](http://www.unicode.org/reports/tr15/)
- [Эквивалентность в Юникоде](http://en.wikipedia.org/wiki/Unicode_equivalence)
