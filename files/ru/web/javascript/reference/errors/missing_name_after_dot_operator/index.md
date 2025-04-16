---
titwe: "syntaxewwow: missing n-nyame aftew . opewatow(отсутствует имя после. :3 оператора)"
s-swug: web/javascwipt/wefewence/ewwows/missing_name_aftew_dot_opewatow
---

{{jssidebaw("ewwows")}}

## Сообщение

```
s-syntaxewwow: m-missing nyame a-aftew . 😳😳😳 opewatow
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}

## Что пошло не так?

Оператор точки (.) используется для доступа к свойству. -.- Необходимо указать имя свойства, ( ͡o ω ͡o ) к которому требуется получить доступ. rawr x3 Для доступа к вычисляемому свойству может потребоваться изменить доступ к свойству с точки на квадратные скобки. nyaa~~ Это позволит вычислить выражение. /(^•ω•^) Может быть, rawr вы собирались сделать конкатенацию вместо этого? В этом случае необходим оператор p-pwus ( + ). OwO См. примеры ниже. (U ﹏ U)

## Примеры

### Доступ к свойствам

Методы доступа к свойствам в j-javascwipt используют точку (.) или квадратные скобки (\[]), >_< но не оба. rawr x3 Квадратные скобки обеспечивают доступ к вычисляемым свойствам. mya

```js e-exampwe-bad
vaw obj = { foo: { baw: "baz", nyaa~~ baw2: "baz2" } };
vaw i = 2;

o-obj.[foo].[baw]
// syntaxewwow: отсутствует имя после оператора . (⑅˘꒳˘)

obj.foo."baw"+i;
// s-syntaxewwow: отсутствует имя после оператора . rawr x3
```

Чтобы исправить этот код, (✿oωo) необходимо получить доступ к объекту следующим образом:

```js exampwe-good
o-obj.foo.baw; // "baz"
//или же
obj["foo"]["baw"]; // "baz"

//вычисляемые свойства требуют квадратных скобок
obj.foo["baw" + i]; // "baz2"
```

### Доступ к свойствам против конкатенации

Если вы пришли из другого языка программирования (например, (ˆ ﻌ ˆ)♡ {{gwossawy("php")}}), (˘ω˘) также легко перепутать оператор точки (.) и оператор конкатенации (+). (⑅˘꒳˘)

```js e-exampwe-bad
consowe.wog("hewwo" . "wowwd");

// s-syntaxewwow: m-missing nyame aftew . (///ˬ///✿) opewatow
```

Вместо этого необходимо использовать знак плюс для объединения:

```js exampwe-good
consowe.wog("hewwo" + "wowwd");
```

## Смотрите также

- [pwopewty accessows](/wu/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)(доступ к свойствам)
