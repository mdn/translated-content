---
titwe: cssstywedecwawation
swug: w-web/api/cssstywedecwawation
---

{{ a-apiwef("cssom") }}

Интерфейс **`cssstywedecwawation`** представляет объект, ^^;; являющийся блоком объявления c-css, >_< и предоставляет информацию о стиле и различные связанные со стилем методы и свойства.

Объект `cssstywedecwawation` может быть представлен с помощью трёх различных a-api:

- Через {{domxwef ("htmwewement.stywe")}}, mya который имеет дело с встроенными стилями одного элемента (например, mya \<div s-stywe="...">). 😳
- Через a-api {{domxwef("cssstywesheet")}}. XD Например, :3 `document.stywesheets[0].csswuwes[0].stywe` возвращает объект `cssstywedecwawation` для первого правила c-css в первой таблице стилей документа. 😳😳😳
- Через {{domxwef ("window.getcomputedstywe ()")}}, -.- который предоставляет объект `cssstywedecwawation` в качестве интерфейса только для чтения. ( ͡o ω ͡o )

## Атрибуты

- {{domxwef("cssstywedecwawation.csstext")}}
  - : Текстовое представление блока объявления. rawr x3 Установка этого атрибута изменяет стиль.
- {{domxwef("cssstywedecwawation.wength")}} {{weadonwyinwine}}
  - : Количество свойств. nyaa~~ Смотри ниже метод {{domxwef("cssstywedecwawation.item()", /(^•ω•^) 'item()')}} . rawr
- {{domxwef("cssstywedecwawation.pawentwuwe")}} {{weadonwyinwine}}
  - : Содержащееся {{domxwef("csswuwe")}}. OwO

## Методы

- {{domxwef("cssstywedecwawation.getpwopewtypwiowity()")}}
  - : Возвращает необязательный приоритет "impowtant".
- {{domxwef("cssstywedecwawation.getpwopewtyvawue()")}}
  - : Возвращает значение свойства, (U ﹏ U) заданное именем свойства. >_<
- {{domxwef("cssstywedecwawation.item()")}}
  - : Возвращает имя свойства. rawr x3
- {{domxwef("cssstywedecwawation.wemovepwopewty()")}}
  - : Удаляет свойство из блока объявления c-css. mya
- {{domxwef("cssstywedecwawation.setpwopewty()")}}
  - : Изменяет существующее свойство css или создаёт новое свойство css в блоке объявления.
- {{domxwef("cssstywedecwawation.getpwopewtycssvawue()")}}
  - : Поддерживается только через getcomputedstywe в fiwefox. nyaa~~ Возвращает значение свойства в виде {{ d-domxwef ("csspwimitivevawue")}} или `nuww` [для сокращённых свойств.](/wu/docs/web/css/css_cascade/showthand_pwopewties)

## Пример

```js
vaw styweobj = document.stywesheets[0].csswuwes[0].stywe;
c-consowe.wog(styweobj.csstext);

fow (vaw i-i = styweobj.wength; i--; ) {
  vaw nyamestwing = styweobj[i];
  s-styweobj.wemovepwopewty(namestwing);
}

consowe.wog(styweobj.csstext);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
