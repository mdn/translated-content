---
title: "SyntaxError: Malformed formal parameter"
slug: conflicting/Web/JavaScript/Reference/Errors/Missing_formal_parameter
original_slug: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: malformed formal parameter (Firefox)
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

Существует конструктор [`Function()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function), который принимает в коде как минимум два аргумента. Последний аргумент – это исходный код создаваемой функции, а все остальные представляют собой список её аргументов.

Ошибка возникает, когда список аргументов по какой-то причине не является корректным. Возможно, вы случайно взяли в качестве имени аргумента ключевое слово, такое как `if` или `var`. Или в списке аргументов затерялся лишний знак пунктуации. Или вы случайно передали некорректное значение, например, число или объект.

## OK, это решило мою проблему. Но почему нельзя было сразу так и сказать?

Нельзя не признать, что формулировка сообщения об ошибке немного странная. "Formal parameter" (формальный параметр) – это всего лишь необычный способ сказать "function argument" (аргумент функции). А слово "malformed" (уродливый, некорректный) мы используем потому, что все инженеры Firefox без ума от готических романов 19-го века.

## Примеры

### Код с ошибками

```js example-bad
var f = Function('x y', 'return x + y;');
// SyntaxError (пропуск запятой)

var f = Function('x,', 'return x;');
// SyntaxError (лишняя запятая)

var f = Function(37, "alert('OK')");
// SyntaxError (числа не могут использоваться в качестве имён аргументов)
```

### Правильный код

```js example-good
var f = Function('x, y', 'return x + y;');  // правильная пунктуация

var f = Function('x', 'return x;');

// если есть возможность, не используйте Function - так гораздо быстрее:
var f = function(x) { return x; };
```

## Смотрите также

- [`Function()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [О функциях](/ru/docs/Web/JavaScript/Guide/Functions)
- [_Франкенштейн_ Мэри Уотлстонкрафт Шелли, полный текст (англ.)](https://www.gutenberg.org/ebooks/84) ("\[...] прокляты руки, создавшие тебя, пусть это были мои собственные! Ты причинил мне безмерное горе. Я уже не в силах решать, справедливо ли я с тобой поступаю. Поди прочь! Избавь меня от твоего ненавистного вида." (пер. З. Александровой))
