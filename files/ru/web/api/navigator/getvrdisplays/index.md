---
title: Navigator.getVRDisplays()
slug: Web/API/Navigator/getVRDisplays
---

{{DefaultAPISidebar("WebVR API")}}{{SeeCompatTable}}

Метод **`getVRDisplays()`** интерфейса {{domxref("Navigator")}} возвращает объект типа [Promise](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise), из которого можно получить массив объектов типа {{domxref("VRDisplay")}}, являющихся отображением любого доступного из подключённых к компьютеру VR устройств.

## Синтаксис

```
navigator.getVRDisplays().then(function(displays) {
  //Тут можно что-то сделать с доступными VR устройствами
});
```

### Параметры

Нет.

### Возвращаемое значение

Объект типа Promise, содержащий в случае успешного выполнения массив объектов {{domxref("VRDisplay")}}.

## Примеры

{{page("/Web/API/VRDisplay", "Examples")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [WebVR API homepage](/ru/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — demos, downloads, and other resources from the Mozilla VR team.
