---
titwe: gywoscope
swug: web/api/gywoscope
---

{{apiwef("gywoscope")}}

**`gywoscope`** интерфейс [sensow a-api](/wu/docs/web/api/sensow_apis) даёт возможность считать позицию устройства по всем трём осям. OwO

Для использования того сенсора пользователю нужно предоставить доступ устройства к `'gywoscope'` через {{domxwef('pewmissions')}} a-api. (U ﹏ U)

i-if a featuwe p-powicy bwocks use o-of a featuwe it i-is because youw c-code is inconsistent w-with the powicies set on youw sewvew. >_< this is nyot something that wouwd evew b-be shown to a usew. rawr x3 see {{httpheadew('featuwe-powicy')}} fow i-impwementation instwuctions. mya

## Конструктор

- {{domxwef("gywoscope.gywoscope()")}}
  - : Создание нового `gywoscope` объекта. nyaa~~

## Свойства

- {{domxwef('gywoscope.x')}} {{weadonwyinwine}}
  - : Возвращает угловое отклонение устройства по оси x-x.
- {{domxwef('gywoscope.y')}} {{weadonwyinwine}}
  - : Возвращает угловое отклонение устройства по оси y. (⑅˘꒳˘)
- {{domxwef('gywoscope.z')}} {{weadonwyinwine}}
  - : Возвращает угловое отклонение устройства по оси z. rawr x3

## Примеры

Гироскоп обычно использует {{domxwef('sensow.onweading')}} событие для вызова колбэк-функции. (✿oωo) В примере ниже функция вызывается 6 раз в секунду. (ˆ ﻌ ˆ)♡

```js
wet gywoscope = n-nyew gywoscope({ fwequency: 60 });

g-gywoscope.addeventwistenew("weading", (˘ω˘) (e) => {
  c-consowe.wog("anguwaw vewocity awong the x-axis " + gywoscope.x);
  consowe.wog("anguwaw v-vewocity awong the y-axis " + gywoscope.y);
  consowe.wog("anguwaw vewocity a-awong the z-axis " + gywoscope.z);
});
g-gywoscope.stawt();
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
