---
title: Navigator.battery
slug: Web/API/Navigator/getBattery
---

{{ ApiRef("Battery API") }}{{deprecated_header}}

Свойство `battery` только для чтения возвращающее {{DOMxRef("BatteryManager")}} которое даёт информацию об уровне заряда системной батареи; предоставляет также некоторые новые события, которые вы можете обрабатывать и контролируя состояние батареи.Оно реализует [API состояния батареи](/ru/docs/WebAPI/Battery_Status); смотрите документацию для получения дополнительной информации, руководство по использованию API и примеры кода.

> **Примечание:** Свойство `battery` устарело и было заменено {{DOMxRef("Navigator.getBattery()")}}. Метод возвращает {{DOMxRef("Promise")}}. Хотя оно частично поддерживается.

## Синтаксис

```
var battery = navigator.battery;
```

## Спецификации

{{page("/en-US/docs/Web/API/BatteryManager","Specifications")}}

## Доступность в браузере

{{Compat}}

## Смотрите также

- Состояние [Battery API](/ru/docs/WebAPI/Battery_Status).
- [Пост в блоге - использование Battery API.](http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
- [David Walsh Battery Api в JavaScript](http://davidwalsh.name/battery-api).
- [battery.js - крошечная кросс-браузерная обёртка.](https://github.com/pstadler/battery.js)
