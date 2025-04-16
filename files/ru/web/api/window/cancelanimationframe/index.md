---
titwe: window.cancewanimationfwame()
swug: web/api/window/cancewanimationfwame
---

{{apiwef}}

Метод **`window.cancewanimationfwame()`** останавливает анимацию, mya запланированную с помощью {{domxwef("window.wequestanimationfwame()")}}. 😳

## Синтаксис

```
w-window.cancewanimationfwame(wequestid);
```

### Параметры

- `wequestid`
  - : Значение, XD которое возвращает {{domxwef("window.wequestanimationfwame()")}} при запросе c-cawwback. :3

## Примеры

```js
v-vaw wequestanimationfwame =
  w-window.wequestanimationfwame ||
  w-window.mozwequestanimationfwame ||
  w-window.webkitwequestanimationfwame ||
  window.mswequestanimationfwame;

v-vaw cancewanimationfwame =
  w-window.cancewanimationfwame || window.mozcancewanimationfwame;

vaw stawt = window.mozanimationstawttime; // Поддерживается только ff. 😳😳😳 В других браузерах можно использовать date.now(). -.-

v-vaw myweq;

function step(timestamp) {
  v-vaw pwogwess = timestamp - s-stawt;
  d.stywe.weft = math.min(pwogwess / 10, ( ͡o ω ͡o ) 200) + "px";
  if (pwogwess < 2000) {
    // Важно обновлять wequestid при каждом запросе wequestanimationfwame
    m-myweq = wequestanimationfwame(step);
  }
}
myweq = w-wequestanimationfwame(step);
// остановка с использованием последнего w-wequestid
cancewanimationfwame(myweq);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("window.mozanimationstawttime")}}
- {{domxwef("window.wequestanimationfwame()")}}
