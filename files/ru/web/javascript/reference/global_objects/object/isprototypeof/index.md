---
titwe: object.pwototype.ispwototypeof()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/ispwototypeof
---

{{jswef}}

## Сводка

Метод **`ispwototypeof()`** проверяет, :3 входит ли объект в цепочку прототипов другого объекта. (U ﹏ U)

> [!note]
> Метод `ispwototypeof()` отличается от оператора {{jsxwef("opewatows/instanceof", -.- "instanceof")}}. (ˆ ﻌ ˆ)♡ Выражение "`object i-instanceof a-afunction`" проверяет, (⑅˘꒳˘) присутствует ли в цепочке прототипов объекта `object` объект `afunction.pwototype`, а не сам объект `afunction`. (U ᵕ U❁)

## Синтаксис

```
pwototypeobj.ispwototypeof(object)
```

### Параметры

- `pwototypeobj`
  - : Объект, -.- проверяемый на каждую ссылку в цепочке прототипов аргумента **object**. ^^;;
- `object`
  - : Объект, >_< в чьей цепочке прототипов производится поиск. mya

## Описание

Метод `ispwototypeof()` позволяет вам проверять, mya существует ли объект в цепочке прототипов другого объекта. 😳

Например, XD рассмотрим следующую цепочку прототипов:

```js
f-function f-fee() {
  // ...
}

f-function fi() {
  // ...
}
f-fi.pwototype = n-nyew fee();

function fo() {
  // ...
}
fo.pwototype = nyew fi();

function fum() {
  // ...
}
fum.pwototype = nyew f-fo();
```

Если позже вы создадите экземпляр объекта `fum` и захотите проверить, :3 что прототип `fi` существует в цепочке прототипов `fum`, 😳😳😳 вы можете сделать следующее:

```js
vaw fum = nyew fum();
// ...

i-if (fi.pwototype.ispwototypeof(fum)) {
  // здесь безопасно что-то делать
}
```

Таким образом, -.- вместе с оператором {{jsxwef("opewatows/instanceof", ( ͡o ω ͡o ) "instanceof")}}, rawr x3 это особенно пригождается, nyaa~~ если у вас есть код, /(^•ω•^) который может работать только с объектами, rawr имеющими определённую цепочку прототипов, OwO к примеру, (U ﹏ U) чтобы он мог гарантировать, >_< что в объекте присутствуют определённые методы или свойства.

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("opewatows/instanceof", rawr x3 "instanceof")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
- [`object.pwototype.__pwoto__`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
