---
title: function* expression
slug: Web/JavaScript/Reference/Operators/function*
---

{{jsSidebar("Operators")}}

Ключевое слово **`function*`** может использоваться для объявления функции-генератора внутри выражения.

## Синтаксис

```
function* [имя]([параметр1[, параметр2[, ..., параметрN]]]) {
   инструкции
}
```

### Параметры

- `имя`
  - : Имя функции. Может быть опущено, в этом случае функция будет _анонимной_. Имя локально для тела функции.
- `параметрN`
  - : Имя аргумента, передаваемого в функцию. Функция может иметь до 255 аргументов.
- `инструкции`
  - : Инструкции, составляющие тело функции.

## Описание

Выражение `function*` очень похоже на объявление {{jsxref('Statements/function*', 'function*')}}, и имеет почти такой же синтаксис. Основная разница между выражением `function*` и объявлением `function*` – в _имени функции,_ которое может быть опущено в выражениях `function*` для создания _анонимных_ функций. Смотрите главу о [функциях](/ru/docs/Web/JavaScript/Reference/Functions) для получения более подробной информации.

## Примеры

В следующем примере определяется безымянная функция-генератор и присваивается переменной `x`. Функция возвращает квадрат своего аргумента:

```js
var x = function* (y) {
  yield y * y;
};
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Statements/function*", "function* statement")}}
- Объект {{jsxref("GeneratorFunction")}}
- [Протоколы перебора: Итератор](/ru/docs/Web/JavaScript/Reference/Iteration_protocols#Протокол_Итератор)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- Объект {{jsxref("Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions", "Функции")}}
