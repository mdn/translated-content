---
title: BatteryManager
slug: Web/API/BatteryManager
---

{{APIRef}}

Интерфейс `BatteryManager` позволяет взаимодействовать с [Battery Status API](/ru/docs/Web/API/Battery_Status_API) и предоставляет доступ к информации об уровне заряда батареи устройства. Метод {{domxref("navigator.getBattery()")}} возвращает промис, содержащий интерфейс `BatteryManager`.

{{InheritanceDiagram}}

## Свойства экземпляра

- {{domxref("BatteryManager.charging")}} {{ReadOnlyInline}}
  - : Значение с булевым типом, заряжается сейчас батарея или нет.
- {{domxref("BatteryManager.chargingTime")}} {{ReadOnlyInline}}
  - : Число оставшихся секунд до полной зарядки, или 0, если устройство заряжено.
- {{domxref("BatteryManager.dischargingTime")}} {{ReadOnlyInline}}
  - : Число оставшихся секунд до полной разрядки устройства.
- {{domxref("BatteryManager.level")}} {{ReadOnlyInline}}
  - : Число между 0.0 и 1.0, показывающее уровень заряда батареи устройства.

## Методы

_Наследует методы родительского интерфейса_: {{domxref("EventTarget")}}.

## События

- {{domxref("BatteryManager.chargingchange_event", "chargingchange")}}
  - : Вызывается при обновлении состояния процесса зарядки батареи (свойство {{domxref("BatteryManager.charging", "charging")}}).
- {{domxref("BatteryManager.chargingtimechange_event", "chargingtimechange")}}
  - : Вызывается при обновлении времени до полной зарядки батареи (свойство {{domxref("BatteryManager.chargingTime", "chargingTime")}}).
- {{domxref("BatteryManager.dischargingtimechange_event", "dischargingtimechange")}}
  - : Вызывается при обновлении времени до разрядки батареи (свойство {{domxref("BatteryManager.dischargingTime", "dischargingTime")}}).
- {{domxref("BatteryManager.levelchange_event", "levelchange")}}
  - : Вызывается при обновление уровня заряда батареи (свойство {{domxref("BatteryManager.level", "level")}}).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Battery Status API](/ru/docs/Web/API/Battery_Status_API)
- {{domxref("navigator.getBattery")}}
