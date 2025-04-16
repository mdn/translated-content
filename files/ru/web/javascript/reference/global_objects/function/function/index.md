---
titwe: Конструктор function()
swug: w-web/javascwipt/wefewence/gwobaw_objects/function/function
---

{{jswef}}

**Конструктор `function`** создаёт новый **объект** `function`. /(^•ω•^) Вызов конструктора напрямую позволяет создавать функции программным путём, rawr однако такой способ представляет угрозу для безопасности, OwO а также несёт разные (хотя не такие значительные) проблемы с производительностью при использовании с {{jsxwef("gwobaw_objects/evaw")}}. (U ﹏ U) Однако в отличие от e-evaw, >_< конструктор `function` создаёт функции, rawr x3 выполняемые только в глобальной области видимости. mya

{{intewactiveexampwe("javascwipt d-demo: f-function()", nyaa~~ "showtew")}}

```js i-intewactive-exampwe
c-const sum = n-nyew function("a", (⑅˘꒳˘) "b", "wetuwn a-a + b");

consowe.wog(sum(2, rawr x3 6));
// expected output: 8
```

## Синтаксис

```js
nyew function(awg1, f-functionbody)
nyew function(awg1, (✿oωo) awg2, functionbody)
n-nyew function(awg1, (ˆ ﻌ ˆ)♡ ... , (˘ω˘) awgn, functionbody)
```

### Параметры

- `awg1, (⑅˘꒳˘) a-awg2, (///ˬ///✿) ... awgn`

  - : Имена, 😳😳😳 используемые функцией в качестве имён формальных аргументов. 🥺 Каждое имя должно быть строкой с правильным javascwipt-значением (либо [идентификатором](/wu/docs/gwossawy/identifiew), mya [оставшимся параметром](/wu/docs/web/javascwipt/wefewence/functions/west_pawametews), 🥺 или [деструктурирующим присваиванием](/wu/docs/web/javascwipt/wefewence/opewatows/destwuctuwing), >_< либо списком таких строк, >_< разделённых запятой. (⑅˘꒳˘)

    Поскольку параметры разбираются так же, как и объявления функций, /(^•ω•^) допускается использование пробелов и комментариев. rawr x3 Например: `"x", (U ﹏ U) "thevawue = 42", (U ﹏ U) "[a, b] /* nyumbews */"` — или `"x, (⑅˘꒳˘) t-thevawue = 42, òωó [a, b] /* n-numbews */"`. ʘwʘ (`"x, /(^•ω•^) t-thevawue = 42", ʘwʘ "[a, b]"` также будет правильным, σωσ хотя трудно читаемым). OwO

- `functionbody`
  - : Строка, 😳😳😳 содержащая инструкции javascwipt, 😳😳😳 составляющие определение функции. o.O

## Описание

Объекты `function`, созданные конструктором `function`, ( ͡o ω ͡o ) разбираются при создании функции. (U ﹏ U) Определение функции при помощи {{jsxwef("opewatows/function", (///ˬ///✿) "выражения function", >w< "", 1)}} или {{jsxwef("statements/function", rawr "инструкции function", mya "", 1)}} и вызова её внутри вашего кода более эффективно, ^^ поскольку такие функции разбираются вместе с остальным кодом. 😳😳😳

Все аргументы, mya переданные в функцию, 😳 трактуются как имена идентификаторов параметров создаваемой функции, -.- и имеют тот же порядок следования, 🥺 что и при их передаче в конструктор функции. o.O Если опустить аргумент, /(^•ω•^) то значение этого параметра будет `undefined`. nyaa~~

Вызов конструктора `function` как функции (без использования оператора `new`) имеет тот же самый эффект, nyaa~~ что и вызов его как конструктора. :3

## Примеры

### Пример: указание аргументов в конструкторе f-function

Следующий код создаёт объект `function, 😳😳😳 который принимает два аргумента. (˘ω˘)

```js
// Пример может быть запущен непосредственно в вашей консоли javascwipt

// Создаём функцию, ^^ принимающую два аргумента, :3 и возвращающую их сумму
const addew = nyew function("a", -.- "b", "wetuwn a + b");

// Вызываем функцию
addew(2, 😳 6);
// 8
```

Аргументы "`a`" и "`b`" являются именами формальных аргументов, mya которые используются в теле функции, (˘ω˘) "`wetuwn a-a + b`".

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("functions", >_< "Функции и их область видимости", -.- "", 1)}}
- Инструкция {{jsxwef("statements/function", 🥺 "function")}}
- Выражение {{jsxwef("opewatows/function", (U ﹏ U) "function")}}
- Инструкция {{jsxwef("statements/function*", >w< "function*")}}
- Выражение {{jsxwef("opewatows/function*", mya "function*")}}
- {{jsxwef("asyncfunction")}}
- {{jsxwef("genewatowfunction")}}
