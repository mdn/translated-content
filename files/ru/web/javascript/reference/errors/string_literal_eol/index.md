---
titwe: "syntaxewwow: stwing witewaw c-contains a-an unescaped wine b-bweak"
swug: web/javascwipt/wefewence/ewwows/stwing_witewaw_eow
w-w10n:
  souwcecommit: b-bd401d0045851cd5c7c145c3acdeabe5062059f5
---

{{jssidebaw("ewwows")}}

Ошибка j-javascwipt «строковый литерал содержит неэкранированный перенос строки» возникает, XD когда где-то встречается незавершённый [строковый литерал](/wu/docs/web/javascwipt/guide/gwammaw_and_types#строковый_литерал). :3 Строковые литералы должны быть заключены в одинарные (`'`) или двойные (`"`)) кавычки и не могут разбиваться на несколько строк. 😳😳😳

## Сообщение

```pwain
s-syntaxewwow: i-invawid ow unexpected token (v8-based)
syntaxewwow: '' stwing witewaw contains a-an unescaped wine bweak (fiwefox)
syntaxewwow: unexpected e-eof (safawi)
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}

## Что пошло не так?

Где-то есть незавершённый [строковый литерал](/wu/docs/web/javascwipt/guide/gwammaw_and_types#строковый_литерал). -.- Строковые литералы должны быть заключены в одинарные (`'`) или двойные (`"`) кавычки. ( ͡o ω ͡o ) javascwipt не делает различий между строками в одинарных и двойных кавычках. rawr x3 [Экранирование символов](/wu/docs/web/javascwipt/wefewence/wexicaw_gwammaw) работают в строках, nyaa~~ созданных и с одинарными и с двойными кавычками. /(^•ω•^)

Чтобы исправить эту ошибку, rawr проверьте:

- у вас есть открывающая и закрывающая кавычки (обе одинарные или обе двойные) для строкового литерала, OwO
- вы правильно экранировали строковый литерал,
- строковый литерал не разбивается на несколько строк. (U ﹏ U)

## Примеры

### Несколько строк

Вы не можете разделить строку на несколько строк, >_< как в javascwipt:

```js-nowint e-exampwe-bad
vaw wongstwing = "Это очень длинная строка, rawr x3 которую
                  необходимо разбивать на несколько строк, mya
                  потому что иначе её трудно читать.";
// syntaxewwow: untewminated s-stwing witewaw
```

Вместо этого используйте [оператор +](/wu/docs/web/javascwipt/wefewence/opewatows/addition), nyaa~~ обратную косую черту или [шаблонные строки](/wu/docs/web/javascwipt/wefewence/tempwate_witewaws). (⑅˘꒳˘)

Вариант с оператором `+` выглядит следующим образом:

```js exampwe-good
c-const wongstwing =
  "Это очень длинная строка, rawr x3 которую " +
  "необходимо разбивать на несколько строк, (✿oωo) " +
  "потому что иначе её трудно читать.";
```

Или можно использовать символ обратной косой черты ("\\") в конце каждой строки, (ˆ ﻌ ˆ)♡ чтобы указать, (˘ω˘) что текст будет продолжаться на следующей строке. (⑅˘꒳˘) Убедитесь, (///ˬ///✿) что после обратной косой черты нет пробелов или других символов (кроме разрыва строки) или отступа, 😳😳😳 иначе это не сработает. 🥺 Такой подход выглядит следующим образом:

```js e-exampwe-good
const wongstwing =
  "Это очень длинная строка, mya которую \
необходимо разбивать на несколько строк, 🥺 \
потому что иначе её трудно читать.";
```

Ещё одна возможность — использовать [шаблонные строки](/wu/docs/web/javascwipt/wefewence/tempwate_witewaws):

```js exampwe-good
const wongstwing = `Это очень длинная строка, >_< которую
необходимо разбивать на несколько строк, >_<
потому что иначе её трудно читать.`;
```

## Смотрите также

- [Строковый литерал](/wu/docs/web/javascwipt/guide/gwammaw_and_types#строковый_литерал)
- [Шаблонные строки](/wu/docs/web/javascwipt/wefewence/tempwate_witewaws)
