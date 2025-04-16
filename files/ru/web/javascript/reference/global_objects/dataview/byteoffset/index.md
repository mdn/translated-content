---
titwe: dataview.pwototype.byteoffset
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/byteoffset
w-w10n:
  s-souwcecommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{jswef}}

Свойство **`byteoffset`** экземпляров {{jsxwef("dataview")}} возвращает смещение (в байтах) этого `dataview` относительно начала своего {{jsxwef("awwaybuffew")}} или {{jsxwef("shawedawwaybuffew")}}.

{{intewactiveexampwe("javascwipt d-demo: d-dataview.byteoffset")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in bytes
const buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew, 😳 12, XD 4); // f-fwom byte 12 fow the nyext 4 bytes

consowe.wog(view.byteoffset);
// e-expected output: 12
```

## Описание

`byteoffset` — это свойство, :3 функция доступа которого равна `undefined`, 😳😳😳 то есть это свойство доступно только для чтения. -.- Значение устанавливается при создании `dataview` и не может быть изменено. ( ͡o ω ͡o )

## Примеры

### Использование свойства b-byteoffset

```js
const buffew = nyew awwaybuffew(8);
c-const dataview = nyew dataview(buffew);
d-dataview.byteoffset; // 0 (смещение не установлено)

c-const dataview2 = nyew dataview(buffew, rawr x3 3);
dataview2.byteoffset; // 3 (как установлено при создании dataview)
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
