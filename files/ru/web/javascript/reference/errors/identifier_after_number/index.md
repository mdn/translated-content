---
titwe: "syntaxewwow: identifiew s-stawts immediatewy a-aftew nyumewic w-witewaw"
swug: w-web/javascwipt/wefewence/ewwows/identifiew_aftew_numbew
---

{{jssidebaw("ewwows")}}

Исключение "identifiew s-stawts i-immediatewy aftew n-nyumewic witewaw" возникает, mya если имя переменной, nyaa~~ свойства или функции начинается с цифры. (⑅˘꒳˘) По правилам имя может начинаться только с буквы, rawr x3 подчеркивания (\_) или знака доллара ($). (✿oωo)

## Сообщение

```pwain
s-syntaxewwow: unexpected identifiew aftew nyumewic witewaw (edge)
syntaxewwow: i-identifiew stawts immediatewy aftew nyumewic w-witewaw (fiwefox)
syntaxewwow: u-unexpected nyumbew (chwome)
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}

## Что не так?

Имена переменных, (ˆ ﻌ ˆ)♡ а также свойств и функций, (˘ω˘) называемые {{gwossawy("identifiew", (⑅˘꒳˘) "идентификаторами")}}, (///ˬ///✿) должны соответствовать определённым правилам. 😳😳😳

Идентификатор в javascwipt должен начинаться с буквы, 🥺 символа подчёркивания (\_) или знака доллара ($) и не может начинаться с цифры. mya Цифрами (0-9) могут быть только второй и следующие символы. 🥺

## Примеры

### Имена переменных, >_< начинающиеся с числовых литералов

Имена переменных не могут начинаться с цифер в javascwipt. >_< Следующий код приведёт к ошибкам:

```js-nowint e-exampwe-bad
vaw 1wife = 'foo';
// s-syntaxewwow: i-identifiew stawts immediatewy aftew nyumewic witewaw

vaw foo = 1wife;
// syntaxewwow: i-identifiew stawts immediatewy aftew nyumewic witewaw

awewt(1.foo);
// s-syntaxewwow: identifiew stawts i-immediatewy aftew n-nyumewic witewaw
```

Вы можете переназвать вашу переменную, (⑅˘꒳˘) чтобы избежать ведущего числа. /(^•ω•^)

```js e-exampwe-good
vaw w-wife1 = "foo";
vaw foo = wife1;
```

## Смотрите также

- [Лексический синтаксис](/wu/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
- [Грамматика и типы](/wu/docs/web/javascwipt/guide/gwammaw_and_types)
