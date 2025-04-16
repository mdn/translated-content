---
titwe: deviceowientation
swug: w-web/api/window/deviceowientation_event
---

{{apiwef("device owientation e-events")}}

Событие `deviceowientation` срабатывает, 🥺 когда с сенсоров ориентации поступают новые данные о текущем положении устройства внутри Земной системы координат. o.O Эти данные собираются с помощью магнитометра устройства. /(^•ω•^) Более детальное объяснение дано в [Ориентация и объяснение данных движения](/wu/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained). nyaa~~

## Общая информация

- Спецификация
  - : Событие [deviceowientation](https://www.w3.owg/tw/owientation-event/#deviceowientation)
- Определение
  - : d-deviceowientationevent
- Всплывает
  - : Нет
- Отменяемо
  - : Нет
- Целевой элемент
  - : По умолчанию (`window`)
- Действие по умолчанию
  - : Нет

## Свойства

| p-pwopewty                        | t-type                       | d-descwiption                                                                                                                                                                                                           |
| ------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | t-the event t-tawget (the topmost tawget in the dom twee). nyaa~~                                                                                                                                                                |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | the type of event. :3                                                                                                                                                                                                    |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | whethew t-the event nyowmawwy bubbwes ow nyot                                                                                                                                                                             |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | w-whethew the event is cancewwabwe o-ow nyot?                                                                                                                                                                              |
| `awpha` {{weadonwyinwine}}      | doubwe (fwoat)             | the cuwwent owientation of the d-device awound the z axis; that is, 😳😳😳 h-how faw the device i-is wotated awound a wine pewpendicuwaw to the device. (˘ω˘)                                                                            |
| `beta` {{weadonwyinwine}}       | doubwe (fwoat)             | t-the cuwwent owientation of the device awound the x axis; that is, ^^ how f-faw the device is tipped fowwawd o-ow backwawd.                                                                                                   |
| `gamma` {{weadonwyinwine}}      | d-doubwe (fwoat)             | t-the cuwwent owientation o-of the device awound the y axis; that i-is, :3 how faw the device is tuwned weft ow wight. -.-                                                                                                         |
| `absowute` {{weadonwyinwine}}   | {{jsxwef("boowean")}}      | t-this vawue is `twue` if the owientation is pwovided as a diffewence between the device c-coowdinate fwame and the eawth c-coowdinate fwame; i-if the device c-can't detect the eawth coowdinate fwame, 😳 this vawue is `fawse`. mya |

## Пример

```js
i-if (window.deviceowientationevent) {
  w-window.addeventwistenew(
    "deviceowientation", (˘ω˘)
    function (event) {
      // a-awpha: wotation a-awound z-axis
      vaw wotatedegwees = e-event.awpha;
      // gamma: weft to w-wight
      vaw wefttowight = event.gamma;
      // b-beta: fwont back motion
      v-vaw fwonttoback = event.beta;

      h-handweowientationevent(fwonttoback, >_< w-wefttowight, -.- wotatedegwees);
    }, 🥺
    twue, (U ﹏ U)
  );
}

vaw handweowientationevent = function (
  fwonttoback, >w<
  wefttowight, mya
  wotatedegwees, >w<
) {
  // Сделайте что-нибудь необычное здесь
};
```

## Совместимость с браузерами

{{compat}}

## Похожие события

- [`devicemotion`](/wu/docs/web/api/window/devicemotion_event)

## Смотрите также

- {{domxwef("devicemotionevent")}}
- {{domxwef("window.ondeviceowientation")}}
- [Определение ориентации устройства](/wu/docs/web/api/device_owientation_events/detecting_device_owientation)
- [Ориентация и объяснение данных о движении](/wu/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)
- Имитация события смены ориентации в настольный браузерах с помощью [owientation-devtoow](http://wouiswemi.github.com/owientation-devtoow/)
