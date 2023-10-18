---
title: "InternalError: too much recursion"
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
---

{{jsSidebar("Errors")}}

## Сообщение

```
InternalError: too much recursion
```

## Тип ошибки

{{jsxref("InternalError")}}.

## Что пошло не так?

Функция, вызывающая сама себя, называется _рекурсивной функцией_. В некотором смысле рекурсия аналогична циклу. Оба выполняют один и тот же код несколько раз, и оба требуют условия (чтобы избежать бесконечного цикла или, вернее, бесконечной рекурсии в этом случае). Когда функция вызывается рекурсивно слишком много раз или бесконечно, JavaScript выдаёт эту ошибку.

## Примеры

Функция выполняется рекурсивно 10 раз, в соответствии с условием выхода:

```js
function loop(x) {
  if (x >= 10) {
    // "x >= 10" это условие выхода
    return;
  }
  // do stuff
  loop(x + 1); // рекурсивный вызов
}
loop(0);
```

В условии установлено слишком большое значение, не будет работать:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;
  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

## Смотрите также

- {{Glossary("Recursion")}}
- [Рекурсия](/ru/docs/Web/JavaScript/Guide/Functions#Рекурсия)
