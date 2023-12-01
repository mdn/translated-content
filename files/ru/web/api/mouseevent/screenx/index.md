---
title: MouseEvent.screenX
slug: Web/API/MouseEvent/screenX
---

{{APIRef("DOM Events")}}

**`screenX`** - read-only свойство интерфейса события {{domxref("MouseEvent")}}, соответствующее горизонтальной координате (смещению) указателя мыши в глобальных (экранных) координатах.

## Синтаксис

```
var x = instanceOfMouseEvent.screenX
```

### Возвращаемое значение

Значение с плавающей точкой типа `double`. В ранних версиях этой спецификации определялось как целое число, соответствующее количеству пикселей. Подробнее см. раздел "Совместимость с браузерами".

## Пример

Этом примере демонстрирует координаты вашей мыши в случае получения события {{Event("mousemove")}}.

#### HTML

```html
<p>Подвигайте мышью, чтобы увидеть положение её курсора.</p>
<p id="screen-log"></p>
```

#### JavaScript

```js
let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
```

#### Результат выполнения

{{EmbedLiveSample("Пример")}}

### Обработка события

Когда вы отлавливаете события на окне, документе или других элементах, имеющих размер, вы можете получить координаты этого события (например, клика), и обработать его соответствующим образом, например, так, как в этом примере:

```js
function checkClickMap(e) {
  if (e.screenX < 50) doRedButton();
  if (50 <= e.screenX && e.screenX < 100) doYellowButton();
  if (e.screenX >= 100) doRedButton();
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ domxref("MouseEvent") }}
- {{ domxref("MouseEvent.screenY","screenY") }}
- {{ domxref("MouseEvent.clientX","clientX") }} / {{ domxref("MouseEvent.clientY", "clientY") }}
