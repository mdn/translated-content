---
title: BluetoothRemoteGATTServer
slug: Web/API/BluetoothRemoteGATTServer
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

Интерфейс **`BluetoothRemoteGATTServer`**, относящийся к [Web Bluetooth API](/ru/docs/Web/API/Web_Bluetooth_API), представляет сервер GATT на удалённом устройстве.

> **Примечание:** Данная страница описывает Web Bluetooth API от W3C Community Group. [`BluetoothGattServer` (Firefox OS)](/ru/docs/Archive/B2G_OS/API/BluetoothGattServer) - Bluetooth API в Firefox OS.

## Интерфейс

```
interface BluetoothRemoteGATTServer {
  readonly attribute BluetoothDevice device;
  readonly attribute boolean connected;

  Promise<BluetoothRemoteGATTServer> connect();
  void disconnect();
  Promise<BluetoothRemoteGATTService> getPrimaryService(BluetoothServiceUUID service);
  Promise<sequence<BluetoothRemoteGATTService>> getPrimaryServices(optional BluetoothServiceUUID service);
};
```

## Свойства

- {{DOMxRef("BluetoothRemoteGATTServer.connected")}}{{ReadOnlyInline}}
  - : Двоичное значение, равное `true`, если устройство `this.device` подключено. It can be false while the user agent is physically connected.
- {{DOMxRef("BluetoothRemoteGATTServer.device")}}{{ReadOnlyInline}}
  - : {{DOMxRef("BluetoothDevice")}}, на котором работает сервер.

## Методы

- {{DOMxRef("BluetoothRemoteGATTServer.connect()")}}
  - : Подключение к устройству `this.device`.
- {{DOMxRef("BluetoothRemoteGATTServer.disconnect()")}}
  - : Отключение от устройства `this.device`.
- {{DOMxRef("BluetoothRemoteGATTServer.getPrimaryService()")}}
  - : Returns a promise to the primary {{DOMxRef("BluetoothGATTService")}} offered by the bluetooth device for a specified `BluetoothServiceUUID`.
- {{DOMxRef("BluetoothRemoteGATTServer.getPrimaryServices()")}}
  - : Returns a promise to a list of primary {{DOMxRef("BluetoothGATTService")}} objects offered by the bluetooth device for a specified `BluetoothServiceUUID`.

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}

{{APIRef("Web Bluetooth")}}
