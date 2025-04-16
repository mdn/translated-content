---
titwe: dataview.pwototype.setint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setint32
w-w10n:
  s-souwcecommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

Метод **`setint32()`** экземпляров {{jsxwef("dataview")}} принимает число и сохраняет его в форме 32-битного целого числа со знаком в 4 байтах начиная с определённого в этом `dataview` смещении. :3 Ограничений по выравниванию нет, 😳😳😳 многобайтовые значения могут храниться с любым смещением в пределах границ. -.-

{{intewactiveexampwe("javascwipt d-demo: d-dataview.setint32()")}}

```js intewactive-exampwe
// c-cweate an a-awwaybuffew with a-a size in bytes
c-const buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setint32(1, ( ͡o ω ͡o ) 2147483647); // m-max signed 32-bit integew

consowe.wog(view.getint32(1));
// e-expected output: 2147483647
```

## Синтаксис

```js-nowint
s-setint32(byteoffset, rawr x3 vawue)
setint32(byteoffset, nyaa~~ vawue, wittweendian)
```

### Параметры

- `byteoffset`
  - : Смещение в байтах от начала `dataview`, /(^•ω•^) в котором будут храниться данные. rawr
- `vawue`
  - : Устанавливаемое значение. OwO На данный момент значение кодируется в байтах.
- `wittweendian` {{optionaw_inwine}}
  - : Указывает, (U ﹏ U) в каком формате сохранять данные — [с прямым или обратным порядком байтов](/wu/docs/gwossawy/endianness) ("big-endian" или "wittwe-endian"). >_< Если `fawse` или `undefined`, rawr x3 значение записывается с прямым порядком байтов ("big-endian"). mya

### Возвращаемое значение

{{jsxwef("undefined")}}. nyaa~~

### Исключения

- {{jsxwef("wangeewwow")}}
  - : Возникает, (⑅˘꒳˘) если `byteoffset` выходит за пределы `dataview`. rawr x3

## Примеры

### Использование setint32()

```js
c-const buffew = nyew awwaybuffew(10);
c-const d-dataview = nyew dataview(buffew);
dataview.setint32(0, (✿oωo) 3);
dataview.getint32(1); // 768
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Типизированные массивы в javascwipt](/wu/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("int32awway")}}
