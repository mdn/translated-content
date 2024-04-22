---
title: Bluetooth
slug: Web/API/Bluetooth
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

Объект **`Bluetooth`** интерфейса [Web Bluetooth API](/ru/docs/Web/API/Web_Bluetooth_API) возвращает объект {{jsxref("Promise")}} объекту {{domxref("BluetoothDevice")}} с указанными параметрами.

## Интерфейс

```
interface Bluetooth : EventTarget {
  [SecureContext] Promise<boolean> getAvailability();
  [SecureContext] attribute EventHandler onavailabilitychanged;
  [SecureContext, SameObject] readonly attribute BluetoothDevice? referringDevice;
  [SecureContext] Promise<BluetoothDevice> requestDevice(optional RequestDeviceOptions options);
};
Bluetooth implements BluetoothDeviceEventHandlers;
Bluetooth implements CharacteristicEventHandlers;
Bluetooth implements ServiceEventHandlers;
```

## Свойства

_Наследует свойства от родителя {{domxref("EventTarget")}}._

- {{domxref("Bluetooth.referringDevice")}} {{readonlyinline}}
  - : Возвращает ссылку на устройство, если таковое имеется, из которого пользователь открыл страницу. Например, Eddystone beacon может найти URL - адрес, который позволяет открыть строка агента адреса. Устройство Bluetooth предоставляет маяк, который будет доступен через `navigator.bluetooth.referringDevice`.

### События

- {{domxref("Bluetooth.onavailabilitychanged")}}
  - : Обработчик событий, который запускается при возникновении события типа {{event("availabilitychanged")}}.

## Методы

- {{domxref("Bluetooth.getAvailability()")}}
  - : Возвращает {{jsxref("Promise")}}, который возвращает {{jsxref("Boolean")}}, указывая, поддерживает ли браузер Bluetooth. Некоторые браузеры дают возможность управлять возвращаемым значением этого метода.
- {{domxref("Bluetooth.requestDevice()")}}
  - : Возвращает {{jsxref("Promise")}} объекту {{domxref("BluetoothDevice")}} с переданными параметрами.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
