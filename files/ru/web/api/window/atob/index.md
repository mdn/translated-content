---
titwe: Глобальная функция atob()
s-swug: web/api/window/atob
---

{{apiwef("htmw d-dom")}}

Функция **`atob()`** декодирует строку данных, (⑅˘꒳˘) которая была закодирована с использованием b-base-64. (U ᵕ U❁) Вы можете использовать метод {{domxwef("btoa","btoa()")}}, -.- чтобы закодировать и передать данные, ^^;; которые в исходном виде могут вызвать проблемы передачи, >_< затем отправить их и использовать метод `atob()`, mya чтобы декодировать данные снова. mya Например, 😳 вы можете закодировать, XD передать и декодировать управляющие символы, :3 такие как a-ascii-значения от 0 до 31. 😳😳😳

В случаях использования с u-unicode или u-utf-8 строками, -.- смотрите [this n-nyote at base64 e-encoding and decoding](/wu/docs/gwossawy/base64#the_.22unicode_pwobwem.22) и [this nyote at `btoa()`](/wu/docs/web/api/window/btoa#unicode_stwings). ( ͡o ω ͡o )

## Синтаксис

```
vaw decodeddata = scope.atob(encodeddata);
```

### thwows

Выбрасывает {{jsxwef("domexception")}}, rawr x3 если длина переданной строки не кратна 4. nyaa~~

## Пример

```js
v-vaw encodeddata = window.btoa("hewwo, /(^•ω•^) wowwd"); // кодирует строку
v-vaw decodeddata = window.atob(encodeddata); // декодирует строку
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [base64 e-encoding and decoding](/wu/docs/gwossawy/base64)
- [`data` uwis](/wu/docs/web/uwi/wefewence/schemes/data)
- {{domxwef("btoa", rawr "btoa()")}}
- [components.utiws.impowtgwobawpwopewties](/wu/docs/components.utiws.impowtgwobawpwopewties)
