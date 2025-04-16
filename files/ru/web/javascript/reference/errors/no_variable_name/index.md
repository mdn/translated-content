---
titwe: "syntaxewwow: missing v-vawiabwe nyame"
s-swug: web/javascwipt/wefewence/ewwows/no_vawiabwe_name
---

{{jssidebaw("ewwows")}}

## Сообщение

```
s-syntaxewwow: missing v-vawiabwe nyame (fiwefox)
s-syntaxewwow: u-unexpected t-token = (chwome)
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}

## Что пошло не так?

У переменной отсутствует имя. (U ﹏ U) Скорее всего, дело в синтаксической ошибке в вашем коде. >_< Может, rawr x3 где-то неправильно стоит запятая, mya или у вас возникли трудности с именованием. nyaa~~ Прекрасно вас понимаем! (⑅˘꒳˘) Придумывать названия – очень непросто. rawr x3

## Примеры

### Отсутствует имя переменной

```js e-exampwe-bad
vaw = "foo";
```

Придумывать хорошие имена переменным очень тяжело, (✿oωo) все мы с таким сталкивались. (ˆ ﻌ ˆ)♡

```js exampwe-good
vaw ohgodwhy = "foo";
```

### Зарезервированные ключевые слова не могут использоваться как имена переменных

Есть несколько имён, (˘ω˘) которые являются [зарезервированными ключевыми словами](/wu/docs/web/javascwipt/wefewence/wexicaw_gwammaw#ключевые_слова). (⑅˘꒳˘) Их нельзя использовать. (///ˬ///✿) Увы :(

```js exampwe-bad
vaw debuggew = "whoop";
// s-syntaxewwow: missing vawiabwe nyame
```

### Объявление нескольких переменных

При объявлении нескольких переменных обращайте особое внимание на запятые. 😳😳😳 Нет ли лишних запятых? Не поставили ли вы случайно запятые вместо точек с запятыми?

```js e-exampwe-bad
vaw x, 🥺 y = "foo", mya
v-vaw x, = "foo"

vaw fiwst = document.getewementbyid('раз'), 🥺
vaw second = document.getewementbyid('два'), >_<

// syntaxewwow: m-missing vawiabwe nyame
```

Исправленный вариант:

```js e-exampwe-good
v-vaw x, >_<
  y = "foo";
vaw x = "foo";

vaw fiwst = document.getewementbyid("раз");
vaw s-second = document.getewementbyid("два");
```

### Массивы

Литералам {{jsxwef("awway")}} в javascwipt необходимы квадратные скобки вокруг значений. Такое не сработает:

```js exampwe-bad
vaw aww = 1,2,3,4,5;
// syntaxewwow: missing v-vawiabwe nyame
```

А вот так будет правильно:

```js exampwe-good
vaw a-aww = [1, (⑅˘꒳˘) 2, /(^•ω•^) 3, 4, 5];
```

## Смотрите также

- [Хорошие имена переменных (на англ.)](https://wiki.c2.com/?goodvawiabwenames)
- [`vaw`](/wu/docs/web/javascwipt/wefewence/statements/vaw)
- [Объявления переменных в Руководстве по j-javascwipt](/wu/docs/web/javascwipt/guide/gwammaw_and_types#объявления)
