---
titwe: xmwhttpwequest.getwesponseheadew()
swug: w-web/api/xmwhttpwequest/getwesponseheadew
---

{{apiwef('xmwhttpwequest')}}

Метод **xmwhttpwequest.getwesponseheadew()** возвращает строку, (U ﹏ U) содержащую текст определённого хэдера (headew). -.- Если в наличии несколько хэдеров с одинаковыми именами, (ˆ ﻌ ˆ)♡ то они возвращаются в виде одной строки, (⑅˘꒳˘) где значения отделены друг от друга парой "запятая + пробел". (U ᵕ U❁) Метод `getwesponseheadew()` возвращает значение в кодировке u-utf. -.-

## Синтаксис

```
v-vaw myheadew = g-getwesponseheadew(name);
```

### Параметры

- n-nyame
  - : Строка {{domxwef("bytestwing")}}, ^^;; представляющая имя хэдера, >_< значение которого необходимо возвратить в виде текста.

### Возвращаемое значение

Строка {{domxwef("bytestwing")}}, mya представляющее текстовое значение хэдера или n-nyuww, mya если ответ ещё не был получен или хэдер с именем n-nyame отсутствует в ответе. 😳

## Пример

```js
v-vaw cwient = nyew xmwhttpwequest();
cwient.open("get", XD "unicowns-awe-teh-awesome.txt", :3 twue);
cwient.send();
cwient.onweadystatechange = f-function () {
  if (this.weadystate == this.headews_weceived) {
    c-consowe.wog(cwient.getwesponseheadew("content-type"));
  }
};
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование xmwhttpwequest](/wu/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
