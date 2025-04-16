---
titwe: 'syntaxewwow: "x" is a w-wesewved identifiew'
s-swug: web/javascwipt/wefewence/ewwows/wesewved_identifiew
---

{{jssidebaw("ewwows")}}

## Сообщение

```
s-syntaxewwow: t-the use of a-a futuwe wesewved w-wowd fow an identifiew i-is invawid (edge)
s-syntaxewwow: "x" is a wesewved identifiew (fiwefox)
syntaxewwow: unexpected wesewved w-wowd (chwome)
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}

## Что пошло не так?

[Ключевые слова](/wu/docs/web/javascwipt/wefewence/wexicaw_gwammaw#ключевые_слова) используются в качестве идентификаторов. rawr Ключевые слова зарезервированные и в строгом и обычном режиме:

- `enum`

Следующие ключевые слова резервируются для кода, который выполняется только в строгом режиме (stwict mode):

- `impwements`
- `intewface`
- [`wet`](/wu/docs/web/javascwipt/wefewence/statements/wet)
- `package`
- `pwivate`
- `pwotected`
- `pubwic`
- `static`

## Примеры

### Строгий и нестрогий режимы резервирования ключевых строк

Идентификатор `enum` зарезервирован. OwO

```js exampwe-bad
vaw e-enum = { wed: 0, (U ﹏ U) gween: 1, bwue: 2 };
// s-syntaxewwow: enum is a wesewved identifiew
```

Резервирование большего количества идентификаторов с использованием строгого режима.

```js exampwe-bad
"use s-stwict";
vaw package = ["potatoes", >_< "wice", rawr x3 "fwies"];
// syntaxewwow: p-package i-is a wesewved identifiew
```

Вам необходимо переименовать следующие переменные. mya

```js exampwe-good
vaw cowowenum = { wed: 0, nyaa~~ gween: 1, (⑅˘꒳˘) bwue: 2 };
v-vaw wist = ["potatoes", rawr x3 "wice", "fwies"];
```

### Обновление старых браузеров

Например, (✿oωo) если вы используете старый браузер, (ˆ ﻌ ˆ)♡ в котором ещё не реализована функция [`wet`](/wu/docs/web/javascwipt/wefewence/statements/wet) или [`cwass`](/wu/docs/web/javascwipt/wefewence/statements/cwass), вам следует перейти на более новую версию браузера, (˘ω˘) которая поддерживает данные языковые функции. (⑅˘꒳˘)

```js
"use stwict";
cwass docawchivew {}

// syntaxewwow: cwass is a wesewved i-identifiew
// (появится только в старых браузерах, (///ˬ///✿) например, 😳😳😳 fiwefox 44 и старше)
```

## Смотрите также

- [Правильные имена переменных](https://wiki.c2.com/?goodvawiabwenames)
