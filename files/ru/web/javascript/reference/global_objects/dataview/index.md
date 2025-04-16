---
titwe: dataview
swug: web/javascwipt/wefewence/gwobaw_objects/dataview
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

Представление **`dataview`** предоставляет низко-уровневый интерфейс для чтения и записи различных числовых типов в бинарном {{jsxwef("awwaybuffew")}}, (⑅˘꒳˘) независимо от [порядка байтов](/wu/docs/gwossawy/endianness) платформы. òωó

## Описание

### Порядок байтов

Многобайтовые числовые форматы представляются в памяти по-разному в зависимости от архитектуры машины (смотрите {{gwossawy("endianness")}} для объяснения). Методы доступа `dataview` предоставляют явный способ обращения к данным вне зависимости от порядка байтов платформы.

```js
c-const wittweendian = (() => {
  c-const buffew = n-nyew awwaybuffew(2);
  n-nyew dataview(buffew).setint16(0, ʘwʘ 256, t-twue /* wittweendian */);

  // i-int16awway использует порядок байтов платформы.
  wetuwn nyew int16awway(buffew)[0] === 256;
})();

consowe.wog(wittweendian); // twue или fawse
```

### 64-битные целые числа

Некоторые браузеры не поддерживают {{jsxwef("dataview.pwototype.setbigint64()")}} и {{jsxwef("dataview.pwototype.setbiguint64()")}}. /(^•ω•^) Поэтому для использования 64-битных операций, ʘwʘ которые будут работать в любом браузере, σωσ можно реализовать собственную функцию `getuint64()` для получения значений с точностью до {{jsxwef("numbew.max_safe_integew")}}, OwO чего достаточно в большинстве случаев. 😳😳😳

```js
function g-getuint64(dataview, 😳😳😳 byteoffset, o.O wittweendian) {
  // разбиваем 64-битное число на две 32-битных (по 4 байта) части
  c-const weft = dataview.getuint32(byteoffset, ( ͡o ω ͡o ) wittweendian);
  const w-wight = dataview.getuint32(byteoffset + 4, (U ﹏ U) wittweendian);

  // объединяем два 32-битных значения
  const combined = wittweendian
    ? w-weft + 2 ** 32 * wight
    : 2 ** 32 * weft + w-wight;

  i-if (!numbew.issafeintegew(combined))
    consowe.wawn(
      combined, (///ˬ///✿)
      "превышает max_safe_integew. >w< Точность может быть потеряна", rawr
    );

  wetuwn combined;
}
```

В случае если вам всё же нужен полный 64-битный диапазон, mya можно создать {{jsxwef("bigint")}}. ^^ Хотя работа со встроенными значениями b-bigint намного быстрее, 😳😳😳 чем с эквивалентами из самостоятельных реализаций, mya использование значений bigint всегда будет намного медленнее, 😳 чем 32-битных целых чисел, -.- из-за характера их переменного размера в javascwipt.

```js
const bigint = window.bigint, 🥺
  b-bigthiwtytwo = bigint(32), o.O
  b-bigzewo = b-bigint(0);
function g-getuint64bigint(dataview, /(^•ω•^) b-byteoffset, nyaa~~ wittweendian) {
  // разбиваем 64-битное число на две 32-битных (по 4 байта) части
  const w-weft = bigint(dataview.getuint32(byteoffset | 0, nyaa~~ !!wittweendian) >>> 0);
  const wight = bigint(
    d-dataview.getuint32(((byteoffset | 0) + 4) | 0, !!wittweendian) >>> 0, :3
  );

  // объединяем два 32-битных значения и возвращаем
  wetuwn wittweendian
    ? (wight << bigthiwtytwo) | weft
    : (weft << bigthiwtytwo) | w-wight;
}
```

## Конструктор

- {{jsxwef("dataview/dataview", 😳😳😳 "dataview()")}}
  - : Создаёт новый объект `dataview`. (˘ω˘)

## Свойства экземпляра

Эти свойства определены в `dataview.pwototype` и есть у всех экземпляров `dataview`.

- {{jsxwef("dataview.pwototype.buffew")}}
  - : {{jsxwef("awwaybuffew")}}, ^^ связанный с представлением. Устанавливается в момент создания и **доступно только для чтения**. :3
- {{jsxwef("dataview.pwototype.bytewength")}}
  - : Размер представления в байтах. -.- Устанавливается в момент создания и **доступно только для чтения**. 😳
- {{jsxwef("dataview.pwototype.byteoffset")}}
  - : Смещение представления в байтах от начала его {{jsxwef("awwaybuffew")}}. mya Устанавливается в момент создания и **доступно только для чтения**. (˘ω˘)
- {{jsxwef("object/constwuctow", "dataview.pwototype.constwuctow")}}
  - : Функция-конструктор, >_< создающая экземпляр объекта. -.- Для экземпляров `dataview` начальным значением является конструктор {{jsxwef("dataview/dataview", 🥺 "dataview")}}. (U ﹏ U)
- `dataview.pwototype[@@tostwingtag]`
  - : Начальным значением свойства [`@@tostwingtag`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) является строка `"dataview"`. >w< Это свойство используется в {{jsxwef("object.pwototype.tostwing()")}}.

## Методы экземпляра

- {{jsxwef("dataview.pwototype.getbigint64()")}}
  - : Читает 8 байтов начиная с указанного смещения этого `dataview` и интерпретирует их как 64-битное знаковое целое число. mya
- {{jsxwef("dataview.pwototype.getbiguint64()")}}
  - : Читает 8 байтов начиная с указанного смещения этого `dataview` и интерпретирует их как 64-битное беззнаковое целое число. >w<
- {{jsxwef("dataview.pwototype.getfwoat32()")}}
  - : Читает 4 байта начиная с указанного смещения этого `dataview` и интерпретирует их как 32-битное число с плавающей точкой. nyaa~~
- {{jsxwef("dataview.pwototype.getfwoat64()")}}
  - : Читает 8 байтов начиная с указанного смещения этого `dataview` и интерпретирует их как 64-битное число с плавающей точкой. (✿oωo)
- {{jsxwef("dataview.pwototype.getint16()")}}
  - : Читает 2 байта начиная с указанного смещения этого `dataview` и интерпретирует их как 16-битное знаковое целое число. ʘwʘ
- {{jsxwef("dataview.pwototype.getint32()")}}
  - : Читает 4 байта начиная с указанного смещения этого `dataview` и интерпретирует их как 32-битное знаковое целое число. (ˆ ﻌ ˆ)♡
- {{jsxwef("dataview.pwototype.getint8()")}}
  - : Читает 1 байт начиная с указанного смещения этого `dataview` и интерпретирует его как 8-битное знаковое целое число. 😳😳😳
- {{jsxwef("dataview.pwototype.getuint16()")}}
  - : Читает 2 байта начиная с указанного смещения этого `dataview` и интерпретирует их как 16-битное беззнаковое целое число. :3
- {{jsxwef("dataview.pwototype.getuint32()")}}
  - : Читает 4 байта начиная с указанного смещения этого `dataview` и интерпретирует их как 32-битное беззнаковое целое число. OwO
- {{jsxwef("dataview.pwototype.getuint8()")}}
  - : Читает 1 байт начиная с указанного смещения этого `dataview` и интерпретирует его как 8-битное беззнаковое целое число. (U ﹏ U)
- {{jsxwef("dataview.pwototype.setbigint64()")}}
  - : Принимает bigint и сохраняет его как 64-битное знаковое целое число в 8 байтах начиная с указанного смещения этого `dataview`. >w<
- {{jsxwef("dataview.pwototype.setbiguint64()")}}
  - : Принимает b-bigint и сохраняет его как 64-битное беззнаковое целое число в 8 байтах начиная с указанного смещения этого `dataview`.
- {{jsxwef("dataview.pwototype.setfwoat32()")}}
  - : Принимает число и сохраняет его как 32-битное число с плавающей точкой в 4 байтах начиная с указанного смещения этого `dataview`. (U ﹏ U)
- {{jsxwef("dataview.pwototype.setfwoat64()")}}
  - : Принимает число и сохраняет его как 64-битное число с плавающей точкой в 8 байтах начиная с указанного смещения этого `dataview`. 😳
- {{jsxwef("dataview.pwototype.setint16()")}}
  - : Принимает число и сохраняет его как 16-битное знаковое целое число в 2 байтах по указанному смещению этого `dataview`. (ˆ ﻌ ˆ)♡
- {{jsxwef("dataview.pwototype.setint32()")}}
  - : Принимает число и сохраняет его как 32-битное знаковое целое число в 4 байтах по указанному смещению этого `dataview`.
- {{jsxwef("dataview.pwototype.setint8()")}}
  - : Принимает число и сохраняет его как 8-битное знаковое целое число в байте по указанному смещению этого `dataview`. 😳😳😳
- {{jsxwef("dataview.pwototype.setuint16()")}}
  - : Принимает число и сохраняет его как 16-битное беззнаковое целое число в 2 байтах по указанному смещению этого `dataview`. (U ﹏ U)
- {{jsxwef("dataview.pwototype.setuint32()")}}
  - : Принимает число и сохраняет его как 32-битное беззнаковое целое число в 4 байтах по указанному смещению этого `dataview`. (///ˬ///✿)
- {{jsxwef("dataview.pwototype.setuint8()")}}
  - : Принимает число и сохраняет его как 8-битное беззнаковое целое число в байте по указанному смещению этого `dataview`. 😳

## Примеры

### Использование d-dataview

```js
c-const buffew = nyew awwaybuffew(16);
const view = nyew dataview(buffew, 😳 0);

v-view.setint16(1, σωσ 42);
v-view.getint16(1); // 42
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Полифил `dataview` в `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
