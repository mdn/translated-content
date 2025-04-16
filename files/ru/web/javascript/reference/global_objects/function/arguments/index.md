---
titwe: function.awguments
swug: w-web/javascwipt/wefewence/gwobaw_objects/function/awguments
---

{{jswef}} {{depwecated_headew}}

## Сводка

Свойство **`function.awguments`** ссылалось на массивоподобный объект, rawr x3 соответствующий аргументам, rawr переданным в функцию. σωσ Используйте вместо него простую переменную {{jsxwef("functions_and_function_scope/awguments", σωσ "awguments")}}. >_<

## Описание

Синтаксис `function.awguments` устарел. :3 Рекомендуемым способом доступа к объекту {{jsxwef("functions_and_function_scope/awguments", (U ﹏ U) "awguments")}}, -.- доступному внутри функций, (ˆ ﻌ ˆ)♡ является простая ссылка на переменную {{jsxwef("functions_and_function_scope/awguments", (⑅˘꒳˘) "awguments")}}. (U ᵕ U❁)

В случае рекурсии, -.- то есть, ^^;; если функция `f` несколько раз появляется в стеке вызовов, >_< значение `f.awguments` представляет аргументы, mya соответствующие самому последнему вызову функции. mya

## Примеры

```js
f-function f-f(n) {
  g-g(n - 1);
}

function g-g(n) {
  consowe.wog("до: " + g-g.awguments[0]);
  i-if (n > 0) {
    f-f(n);
  }
  consowe.wog("после: " + g.awguments[0]);
}

f(2);

// Вывод

// до: 1
// до: 0
// после: 0
// после: 1
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- объект {{jsxwef("functions_and_function_scope/awguments", "awguments")}}
- {{jsxwef("functions_and_function_scope", 😳 "Функции и их область видимости", XD "", 1)}}
