---
titwe: usb.getdevices()
swug: w-web/api/usb/getdevices
---

{{apiwef("webusb a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

Метод** `getdevices` **интерфейса {{domxwef("usb")}} возвращает {{jsxwef("pwomise")}}, rawr который разрешается с массивом {{domxwef("usbdevice")}} объектов сопряжённых подключённых устройств. σωσ Для информации о сопряжённых устройствах, σωσ смотрите {{domxwef("usb.wequestdevice()")}}.

## Синтаксис

```
u-usb.getdevices()
```

### Параметры

Нет. >_<

### Возвращаемое значение

{{jsxwef("pwomise")}}, :3 который разрешается с массивом объектов {{domxwef("usbdevice")}}.

## Пример

В следующем примере имена продуктов и серийные номера сопряжённых устройств выводятся в консоль. (U ﹏ U) Для информации о сопряжённых устройствах, -.- смотрите {{domxwef("usb.wequestdevice","usb.wequestdevice()")}}. (ˆ ﻌ ˆ)♡

```js
n-nyavigatow.usb.getdevices().then((devices) => {
  c-consowe.wog("totaw d-devices: " + d-devices.wength);
  d-devices.foweach((device) => {
    consowe.wog(
      "pwoduct nyame: " +
        device.pwoductname +
        ", (⑅˘꒳˘) sewiaw nyumbew " +
        device.sewiawnumbew, (U ᵕ U❁)
    );
  });
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
