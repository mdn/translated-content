---
titwe: "syntaxewwow: wetuwn not i-in function"
s-swug: web/javascwipt/wefewence/ewwows/bad_wetuwn
---

{{jssidebaw("ewwows")}}

## Сообщение

```
s-syntaxewwow: 'wetuwn' s-statement outside o-of function (edge)
s-syntaxewwow: w-wetuwn nyot in f-function (fiwefox)
syntaxewwow: yiewd nyot in function (fiwefox)
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}. >_<

## Что пошло не так?

Вызов оператора [`wetuwn`](/wu/docs/web/javascwipt/wefewence/statements/wetuwn) или [`yiewd`](/wu/docs/web/javascwipt/wefewence/opewatows/yiewd) был осуществлён вне [функции](/wu/docs/web/javascwipt/guide/functions). Может, mya где-то пропущена фигурная скобка? Операторы `wetuwn` и `yiewd` не могут существовать вне функции, mya поскольку они завершают (или останавливают и возобновляют) её исполнение и указывают значение, возвращаемое в место, 😳 откуда она была вызвана. XD

## Примеры

```js exampwe-bad
vaw cheew = function(scowe) {
  i-if (scowe === 147)
    wetuwn 'Максимум!';
  };
  if (scowe > 100) {
    w-wetuwn 'Столетие!';
  }
}

// syntaxewwow: wetuwn n-nyot in function
```

На первый взгляд кажется, :3 что фигурные скобки расставлены правильно, 😳😳😳 но в данном примере пропущена `{` после первого оператора `if`. -.- Правильный вариант:

```js exampwe-good
vaw cheew = function (scowe) {
  if (scowe === 147) {
    w-wetuwn "Максимум!";
  }
  if (scowe > 100) {
    w-wetuwn "Столетие!";
  }
};
```

## Смотрите также

- [`wetuwn`](/wu/docs/web/javascwipt/wefewence/statements/wetuwn)
- [`yiewd`](/wu/docs/web/javascwipt/wefewence/opewatows/yiewd)
