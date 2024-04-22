---
title: USB.getDevices()
slug: Web/API/USB/getDevices
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}

Метод** `getDevices` **интерфейса {{DOMxRef("USB")}} возвращает {{JSxRef("Promise")}}, который разрешается с массивом {{DOMxRef("USBDevice")}} объектов сопряжённых подключённых устройств. Для информации о сопряжённых устройствах, смотрите {{DOMxRef("USB.requestDevice()")}}.

## Синтаксис

```
USB.getDevices()
```

### Параметры

Нет.

### Возвращаемое значение

{{JSxRef("Promise")}}, который разрешается с массивом объектов {{DOMxRef("USBDevice")}}.

## Пример

В следующем примере имена продуктов и серийные номера сопряжённых устройств выводятся в консоль. Для информации о сопряжённых устройствах, смотрите {{DOMxRef("USB.requestDevice","USB.requestDevice()")}}.

```js
navigator.usb.getDevices().then((devices) => {
  console.log("Total devices: " + devices.length);
  devices.forEach((device) => {
    console.log(
      "Product name: " +
        device.productName +
        ", serial number " +
        device.serialNumber,
    );
  });
});
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
