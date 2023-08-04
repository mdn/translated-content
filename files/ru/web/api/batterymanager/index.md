---
title: BatteryManager
slug: Web/API/BatteryManager
---

{{APIRef}}

Интерфейс `BatteryManager` предоставляет пути получения информации о уровне заряда батареи устройства.

Метод {{domxref("navigator.getBattery()")}} возвращает battery promise, разрешающий использование `BatteryManager` интерфейса, который вы можете использовать для взаимодействия с [Battery Status API](/ru/docs/Web/API/Battery_Status_API).

## Свойства

- {{domxref("BatteryManager.charging")}} {{ReadOnlyInline}}
  - : Значение с булевым типом, заряжается сейчас батарея или нет.
- {{domxref("BatteryManager.chargingTime")}} {{ReadOnlyInline}}
  - : Число оставшихся секунд до полной зарядки, или 0, если устройство заряжено.
- {{domxref("BatteryManager.dischargingTime")}} {{ReadOnlyInline}}
  - : Число оставшихся секунд до полной разрядки устройства.
- {{domxref("BatteryManager.level")}} {{ReadOnlyInline}}
  - : Число между 0.0 и 1.0, показывающее уровень заряда батареи устройства.

### Обработчики событий

- {{domxref("BatteryManager.onchargingchange")}}
  - : Обработчик для {{event("chargingchange")}} события; Событие вызывается при обновлении состояния процесса зарядки батареи на текущий момент.
- {{domxref("BatteryManager.onchargingtimechange")}}
  - : Обработчик для {{event("chargingtimechange")}} события; Событие вызывается при обновлении времени до полной зарядки батареи устройства.
- {{domxref("BatteryManager.ondischargingtimechange")}}
  - : Обработчик для {{event("dischargingtimechange")}} события; Событие вызывается при обновлении времени до разрядки батареи устройства.
- {{domxref("BatteryManager.onlevelchange")}}
  - : Обработчик для {{event("levelchange")}} события; Событие вызывается при обновление уровня заряда батареи устройства.

## Методы

Наследует от {{domxref("EventTarget")}}:

{{page("/ru-RU/docs/Web/API/EventTarget","Methods")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Battery Status API](/ru/docs/Web/API/Battery_Status_API)
- {{domxref("navigator.getBattery")}}
