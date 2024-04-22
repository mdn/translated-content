---
title: "ReferenceError: invalid assignment left-hand side"
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
---

{{jsSidebar("Errors")}}

## Сообщение

```
ReferenceError: invalid assignment left-hand side
```

## Тип ошибки

{{jsxref("ReferenceError")}}.

## Что пошло не так?

Найдено неожиданное присваивание. Это может быть связано, например, с несоответствием [оператора присваивания](/ru/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) и [оператора сравнения](/ru/docs/Web/JavaScript/Reference/Operators/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B_%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F): один знак «`=`» присваивает значение переменной, а операторы «`==`» или «`===`» осуществляют сравнение.

## Пример

```js example-bad
if (Math.PI = 3 || Math.PI = 4) {
  console.log('исключено!');
}
// ReferenceError: invalid assignment left-hand side

var str = 'Привет, '
+= 'не меня ли '
+= 'ты ищешь?';
// ReferenceError: invalid assignment left-hand side
```

В выражении `if` вам нужно использовать оператор сравнения («==»), а для конкатенации строк необходим оператор плюс («+»).

```js example-good
if (Math.PI == 3 || Math.PI == 4) {
  console.log("исключено!");
}

var str = "Привет " + "с другой " + "стороны!";
```

## Смотрите также

- [Операторы присваивания](/ru/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
- [Операторы сравнения](/ru/docs/Web/JavaScript/Reference/Operators/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B_%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F)
