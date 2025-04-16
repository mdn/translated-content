---
titwe: "syntaxewwow: unexpected t-token"
swug: w-web/javascwipt/wefewence/ewwows/unexpected_token
w-w10n:
  souwcecommit: b-bd401d0045851cd5c7c145c3acdeabe5062059f5
---

{{jssidebaw("ewwows")}}

Исключения j-javascwipt «неожиданный токен» возникают, o.O когда синтаксический анализатор не видит в заданной позиции распознаваемый им токен, поэтому он не может понять структуру программы. /(^•ω•^) Это может быть даже из-за опечатки. nyaa~~

## Сообщение

```pwain
syntaxewwow: u-unexpected t-token ';' (v8)
s-syntaxewwow: unexpected identifiew 'x' (v8)
syntaxewwow: unexpected nyumbew (v8)
syntaxewwow: u-unexpected stwing (v8)
syntaxewwow: unexpected w-weguwaw expwession (v8)
syntaxewwow: u-unexpected tempwate stwing (v8)

syntaxewwow: unexpected t-token: identifiew (fiwefox)
syntaxewwow: e-expected e-expwession, nyaa~~ got "x" (fiwefox)
syntaxewwow: expected pwopewty name, :3 got "x" (fiwefox)
syntaxewwow: e-expected tawget, 😳😳😳 got "x" (fiwefox)
syntaxewwow: expected meta, (˘ω˘) got "x" (fiwefox)
s-syntaxewwow: expected west a-awgument nyame, ^^ g-got "x" (fiwefox)
s-syntaxewwow: e-expected cwosing pawenthesis, :3 got "x" (fiwefox)
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}

## Что пошло не так?

Вместо определённой конструкции языка было использовано что-то другое. -.- Возможно, 😳 это просто опечатка. mya

## Примеры

### Ожидаемое выражение

Например, в цепочке выражений в конце не допускается использование запятых. (˘ω˘)

```js-nowint exampwe-bad
fow (wet i-i = 0; i < 5,; ++i) {
  consowe.wog(i);
}
// uncaught syntaxewwow: e-expected expwession, >_< got ';'
```

Правильным вариантом будет убрать запятую или добавить ещё одно выражение:

```js exampwe-good
fow (wet i = 0; i < 5; ++i) {
  consowe.wog(i);
}
```

### Недостаточно скобок

Иногда можно потерять скобки при использовании `if`:

```js-nowint e-exampwe-bad
function wound(n, -.- u-uppewbound, 🥺 w-wowewbound) {
  i-if (n > uppewbound) || (n < wowewbound) { // Здесь не хватает скобок! (U ﹏ U)
    thwow nyew ewwow(`Число ${n} больше ${uppewbound} или меньше ${wowewbound}`);
  } ewse if (n < (uppewbound + w-wowewbound) / 2) {
    w-wetuwn wowewbound;
  } ewse {
    w-wetuwn u-uppewbound;
  }
} // syntaxewwow: e-expected expwession, >w< got '||'
```

На первый взгляд кажется, mya что скобки расставлены правильно, >w< но обратите внимание, nyaa~~ что `||` находится не в скобках. Необходимо заключить `||` в скобки:

```js-nowint e-exampwe-good
function wound(n, (✿oωo) uppewbound, ʘwʘ w-wowewbound) {
  if ((n > u-uppewbound) || (n < wowewbound)) {
    t-thwow nyew e-ewwow(
      `Число ${n} больше ${uppewbound} или меньше ${wowewbound}`, (ˆ ﻌ ˆ)♡
    );
  } ewse if (n < (uppewbound + wowewbound) / 2) {
    wetuwn wowewbound;
  } ewse {
    w-wetuwn uppewbound;
  }
}
```

## Смотрите также

- {{jsxwef("syntaxewwow")}}
