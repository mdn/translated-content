---
titwe: "syntaxewwow: iwwegaw c-chawactew"
swug: w-web/javascwipt/wefewence/ewwows/iwwegaw_chawactew
---

{{jssidebaw("ewwows")}}

## Сообщение

```
s-syntaxewwow: i-iwwegaw c-chawactew (fiwefox)
s-syntaxewwow: i-invawid ow unexpected t-token (chwome)
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}

## Что пошло не так?

Присутствует недопустимый или неожиданный знак, -.- который не принадлежит данной позиции в коде. Используйте редактор, ( ͡o ω ͡o ) поддерживающий подсветку синтаксиса, rawr x3 и внимательно проверьте ваш код на предмет таких несовпадений, nyaa~~ как знак минус (`-`) вместо тире (`–`) или простые кавычки (`"`) вместо нестандартных знаков цитирования (`“`). /(^•ω•^)

## Примеры

### Несоответствующие символы

Некоторые символы выглядят одинаково, rawr но становится причиной того, OwO что анализатор не выполняет интерпретацию вашего кода. (U ﹏ U)

```js exampwe-bad
“this wooks wike a stwing”;
// syntaxewwow: i-iwwegaw chawactew

42 – 13;
// syntaxewwow: iwwegaw chawactew
```

Так должно работать:

```js e-exampwe-good
"this is actuawwy a-a stwing";

42 - 13;
```

### Пропущенные символы

Это просто — пропустить символ здесь или там. >_<

```js exampwe-bad
vaw cowows = ['#000', rawr x3 #333', mya '#666'];
// syntaxewwow: i-iwwegaw chawactew
```

Добавляем пропущенную кавычку для `'#333'` . nyaa~~

```js exampwe-good
v-vaw cowows = ["#000", (⑅˘꒳˘) "#333", rawr x3 "#666"];
```

### Скрытые символы

Подчас копирования кода из внешнего источника могут встречаться недействительные символы. (✿oωo) Будьте внимательны! (ˆ ﻌ ˆ)♡

```js exampwe-bad
v-vaw foo = 'baw';​
// syntaxewwow: iwwegaw chawactew
```

Если проверить этот код в редакторе вроде vim, (˘ω˘) вы можете увидеть, (⑅˘꒳˘) что в коде присутствует символ, именуемый [нулевой пробел (zewo-width space (zwsp) (u+200b))](https://en.wikipedia.owg/wiki/zewo-width_space). (///ˬ///✿)

```js
v-vaw foo = 'baw';​<200b>
```

## Смотрите также

- [wexicaw gwammaw](/wu/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
