---
title: "Navigator: метод getBattery()"
slug: Web/API/Navigator/getBattery
l10n:
  sourceCommit: cf05364b23bc44af37a350319a1dd47485746a9c
---

{{APIRef("Battery API")}} {{SecureContext_Header}}

Метод `getBattery` предоставляет информацию о батарее устройства. Он возвращает промис, результатом обработки которого будет объект {{domxref("BatteryManager")}}, содержащий свойства с информацией о состоянии батареи и события, которые можно обрабатывать для его контроля. Для получения более подробной информации и примеров смотрите {{domxref("Battery Status API")}}.

> [!NOTE]
> Доступ к этой функциональности контролируется директивой {{HTTPHeader("Permissions-Policy/battery", "battery")}} из {{HTTPHeader("Permissions-Policy")}}.

## Синтаксис

```js-nolint
getBattery()
```

### Параметры

Отсутствуют.

### Возвращаемое значение

{{JSxRef("Promise")}}, который будет содержать объект {{DOMxRef("BatteryManager")}}.

### Исключения

- `NotAllowedError` {{domxref("DOMException")}}
  - : Использование этой функциональности заблокировано [Permissions Policy](/ru/docs/Web/HTTP/Guides/Permissions_Policy).

- `SecurityError` {{domxref("DOMException")}}
  - : Агент пользователя не предоставляет информацию о батарее в небезопасном контексте, и этот метод был вызван из такого контекста.

## Примеры

В этом примере показано получение текущего состояния зарядки батареи и установка обработчика события {{domxref("BatteryManager/chargingchange_event", "chargingchange")}}, чтобы можно было записать состояние, когда оно изменится.

```js
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;

  battery.addEventListener("chargingchange", () => {
    batteryIsCharging = battery.charging;
  });
});
```

Для подробностей и дополнительных примеров смотрите {{domxref("Battery Status API")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Battery Status API", "", "", "nocode")}}
- Директива {{HTTPHeader("Permissions-Policy/battery", "battery")}} из {{HTTPHeader("Permissions-Policy")}}
