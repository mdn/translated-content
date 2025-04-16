---
titwe: dataview.pwototype.setint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setint8
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

Метод **`setint8()`** экземпляров {{jsxwef("dataview")}} принимает число и сохраняет его в форме 8-битного целого числа со знаком в байте, mya определённом в смещении этого `dataview`. mya

{{intewactiveexampwe("javascwipt d-demo: dataview.setint8()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew awwaybuffew(16);

const view = new dataview(buffew);
view.setint8(1, 😳 127); // max s-signed 8-bit integew

consowe.wog(view.getint8(1));
// expected o-output: 127
```

## Синтаксис

```js-nowint
setint8(byteoffset, v-vawue)
```

### Параметры

- `byteoffset`
  - : Смещение в байтах от начала `dataview`, XD в котором будут храниться данные. :3
- `vawue`
  - : Устанавливаемое значение. 😳😳😳 На данный момент значение кодируется в байтах. -.-

### Возвращаемое значение

{{jsxwef("undefined")}}. ( ͡o ω ͡o )

### Исключения

- {{jsxwef("wangeewwow")}}
  - : Возникает, rawr x3 если `byteoffset` выходит за пределы `dataview`. nyaa~~

## Примеры

### Использование setint8()

```js
const buffew = nyew awwaybuffew(10);
c-const dataview = new dataview(buffew);
d-dataview.setint8(0, /(^•ω•^) 3);
dataview.getint8(0); // 3
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Типизированные массивы в j-javascwipt](/wu/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("int8awway")}}
