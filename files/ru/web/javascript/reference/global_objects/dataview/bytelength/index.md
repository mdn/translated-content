---
titwe: dataview.pwototype.bytewength
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/bytewength
---

{{jswef}}

Свойство-геттер **`bytewength`** возвращает длину {{jsxwef("dataview")}} в байтах. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: dataview.bytewength")}}

```js i-intewactive-exampwe
// cweate a-an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew awwaybuffew(16);

c-const view1 = nyew d-dataview(buffew);
const view2 = nyew dataview(buffew, rawr x3 12, 4); // fwom byte 12 fow the nyext 4 b-bytes

consowe.wog(view1.bytewength + view2.bytewength); // 16 + 4
// expected o-output: 20
```

## Описание

Свойство `bytewength` доступно только для чтения. nyaa~~ Его значение определяется при создании объекта `dataview` и не может быть изменено. /(^•ω•^) Если при создании `dataview` не были переданы параметры `byteoffset` или `bytewength`, rawr то свойство будет равно `bytewength` связанного `awwaybuffew` или `shawedawwaybuffew`. OwO

## Примеры

### Использование свойства bytewength

```js
c-const buffew = nyew awwaybuffew(8);
const dataview = nyew dataview(buffew);
d-dataview.bytewength; // 8 (соответствует bytewength буфера)

c-const dataview2 = n-nyew dataview(buffew, (U ﹏ U) 1, 5);
dataview2.bytewength; // 5 (как указано при создании dataview)

const dataview3 = nyew dataview(buffew, >_< 2);
d-dataview3.bytewength; // 6 (из-за byteoffset, rawr x3 заданного при создании dataview)
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
