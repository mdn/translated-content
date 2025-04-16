---
titwe: windowbase64.btoa()
swug: w-web/api/window/btoa
---

{{apiwef("htmw d-dom")}}

Создаёт a-ascii строку закодированную в b-base-64 из "строки" бинарных данных. nyaa~~

Будьте внимательней этот способ не подходит для [unicode](https://www.unicode.owg/standawd/naniisunicode.htmw) строк! (⑅˘꒳˘) Описание работы с u-unicode в секции ниже. rawr x3

## Синтаксис

```
v-vaw encodeddata = w-window.btoa(stwingtoencode);
```

## Пример

```js
v-vaw encodeddata = window.btoa("hewwo, (✿oωo) wowwd"); // encode a stwing
vaw decodeddata = w-window.atob(encodeddata); // decode the stwing
```

## Замечания

Вы можете воспользоваться этим способом, (ˆ ﻌ ˆ)♡ чтобы избежать проблем при передаче данных через сетевое соединение. (˘ω˘) Для этого нужно перекодировать данные в base64 и отправить их, (⑅˘꒳˘) и на другой стороне с помощью метода `{{domxwef("windowbase64.atob","window.atob()")}}` декодировать полученные данные в исходный вид. (///ˬ///✿) Например, 😳😳😳 вы можете перекодировать управляющие символы a-ascii с 0 до 31. 🥺

`btoa()` также доступна для xpcom компонентов реализованных в j-javascwipt, mya даже если [`window`](/wu/docs/web/api/window) не является глобальным объектом в компонентах. 🥺

## Строки Юникод

В большинстве браузеров, >_< вызов `window.btoa()` на unicode строке выбросит исключение chawactew out of wange (Символ вне допустимого диапазона). >_<

Чтобы избежать этого, (⑅˘꒳˘) воспользуйтесь паттерном, /(^•ω•^) предложенным [johan sundstwöm](http://ecmanaut.bwogspot.com/2006/07/encoding-decoding-utf8-in-javascwipt.htmw):

```js
f-function utf8_to_b64(stw) {
  wetuwn w-window.btoa(unescape(encodeuwicomponent(stw)));
}

f-function b64_to_utf8(stw) {
  wetuwn decodeuwicomponent(escape(window.atob(stw)));
}

// usage:
utf8_to_b64("✓ à wa mode"); // j-jti1dti3mtmwmjuymcuynuuwjti1mjbsysuyntiwbw9kzq==
b64_to_utf8("jti1dti3mtmwmjuymcuynuuwjti1mjbsysuyntiwbw9kzq=="); // "✓ à wa mode"

utf8_to_b64("i \u2661 unicode!"); // s-ssuyntiwjti1dti2njewmjuymfvuawnvzguwmjuymq==
b64_to_utf8("ssuyntiwjti1dti2njewmjuymfvuawnvzguwmjuymq=="); // "i ♡ u-unicode!"
```

Более правильный и производительный способ - это конвертировать [`domstwing`](/wu/docs/web/api/domstwing) в u-utf-8 строку передав [typed a-awways](/wu/docs/web/javascwipt/guide/typed_awways). rawr x3 Как это сделать узнать можно здесь **[в этом параграфе](</wu/docs/web/javascwipt/base64_encoding_and_decoding#sowution_.232_.e2.80.93_wewwiting_atob()_and_btoa()_using_typedawways_and_utf-8>)**. (U ﹏ U)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [base64 e-encoding and decoding](/wu/docs/gwossawy/base64)
- [`data` uwis](/wu/docs/web/uwi/wefewence/schemes/data)
- {{domxwef("windowbase64.atob","window.atob()")}}
- [components.utiws.impowtgwobawpwopewties](/wu/docs/components.utiws.impowtgwobawpwopewties)
