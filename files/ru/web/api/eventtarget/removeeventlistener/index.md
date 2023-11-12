---
title: Метод EventTarget.removeEventListener()
slug: Web/API/EventTarget/removeEventListener
---

{{APIRef("DOM Events")}}

Удаляет обработчик события, который был зарегистрирован при помощи {{domxref("EventTarget.addEventListener()")}}. Обработчик определяется типом события, самой функцией обработки события, и дополнительными параметрами, переданными при регистрации обработчика.

## Синтаксис

```
target.removeEventListener(type, listener[, options]);
target.removeEventListener(type, listener[, useCapture]);
```

### Параметры

- `type`
  - : Строка, описывающая тип события, которое нужно удалить.
- `listener`
  - : {{ domxref("EventListener") }} функция, которую нужно удалить с элемента.
- options {{optional_inline}}

  - : Объект опций, описывающий характеристики обработчика события. Доступные опции:

    - `capture`: {{jsxref("Boolean")}}. Указывает на то, что события этого типа отправляются данному обработчику до того, как происходит их передача любым `EventTarget`, находящимся ниже него в дереве DOM.
    - `passive`: {{jsxref("Boolean")}}. Указывает на то, что `listener` никогда не будет вызывать `preventDefault()`. В противном случае (если `listener` вызовет `preventDefault()` ), user agent проигнорирует вызов и сгенерирует предупреждение в консоли.

- `useCapture` {{optional_inline}}

  - : Указывает, был ли удаляемый {{domxref("EventListener")}} зарегистрирован как перехватывающий обработчик, или нет. Если этот параметр отсутствует, предполагается значение по умолчанию: `false`.

    Если обработчик был зарегистрирован дважды, один раз с перехватом (с `capture`) и один - без, каждый из них должен быть удалён по отдельности. Удаление перехватывающего обработчика никак не затрагивает неперехватывающую версию этого же обработчика, и наоборот.

> **Примечание:** `useCapture` требуется в большинстве основных браузеров старых версий. Если вы хотите поддерживать большую совместимость, вы всегда должны использовать параметр `useCapture`.

### Возвращаемое значение

`undefined`.

### Поиск обработчика при удалении

В большинстве браузеров помимо типа события и функции важно лишь совпадение значений параметра `useCapture` / `options.capture`, но так как это поведение не закреплено стандартом, наилучшим способом будет указание для `removeEventListener()` в точности тех же параметров, что были переданы в `addEventListener()`.

## Примечания

Если {{domxref("EventListener")}} был удалён из {{domxref("EventTarget")}} в процессе обработки события (например предшествующим {{domxref("EventListener")}} того же типа), он не будет вызван. После удаления, {{domxref("EventListener")}} не будет вызываться, однако его можно назначить заново.

Вызов `removeEventListener()` с параметрами, не соответствующими ни одному зарегистрированному {{domxref("EventListener")}} в `EventTarget`, не имеет никакого эффекта.

## Пример

Это пример добавления и последующего удаления обработчика событий.

```js
var div = document.getElementById("div");
var listener = function (event) {
  /* do something here */
};
div.addEventListener("click", listener, false);
div.removeEventListener("click", listener, false);
```

## Совместимость браузеров

{{Compat}}

### Gecko примечания

- В версиях Firefox младше версии 6 браузер бросает исключение, если параметр `useCapture` не был явно указан как false. В Gecko младше 9.0, `addEventListener()` бросает исключение, если параметр `listener` равен `null`; в настоящее время метод отрабатывает без ошибки, но при этом не производит никаких действий.

### Opera примечания

- В Opera 12.00 параметр `useCapture` - опциональный ([source](http://my.opera.com/ODIN/blog/2011/09/29/what-s-new-in-opera-development-snapshots-28-september-2011-edition)).

### WebKit примечания

- Несмотря на то, что WebKit явно добавил "`[optional]`" к параметру `useCapture` в Safari 5.1 и Chrome 13, это работало и до изменений.

### Спецификация

- [removeEventListener](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget-removeEventListener)

## Полифилы для поддержки старых браузеров

`addEventListener()` и `removeEventListener()` отсутствуют в старых браузерах. Это ограничение можно обойти, вставив следующий код в начале ваших скриптов, что позволяет использовать `addEventListener()` и `removeEventListener()` в версиях, не поддерживающих эти методы нативно. Тем не менее, этот метод не работает в Internet Explorer версии 7 и ниже, так как расширение Element.prototype не поддерживалось в более ранних версиях Internet Explorer ранее 8.

```js
if (!Element.prototype.addEventListener) {
  var oListeners = {};
  function runListeners(oEvent) {
    if (!oEvent) {
      oEvent = window.event;
    }
    for (
      var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type];
      iElId < oEvtListeners.aEls.length;
      iElId++
    ) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) {
          oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent);
        }
        break;
      }
    }
  }
  Element.prototype.addEventListener = function (
    sEventType,
    fListener /*, useCapture (will be ignored!) */,
  ) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (
        var nElIdx = -1, iElId = 0;
        iElId < oEvtListeners.aEls.length;
        iElId++
      ) {
        if (oEvtListeners.aEls[iElId] === this) {
          nElIdx = iElId;
          break;
        }
      }
      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];
        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }
        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) {
            return;
          }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [[fListener]] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (
    sEventType,
    fListener /*, useCapture (will be ignored!) */,
  ) {
    if (!oListeners.hasOwnProperty(sEventType)) {
      return;
    }
    var oEvtListeners = oListeners[sEventType];
    for (
      var nElIdx = -1, iElId = 0;
      iElId < oEvtListeners.aEls.length;
      iElId++
    ) {
      if (oEvtListeners.aEls[iElId] === this) {
        nElIdx = iElId;
        break;
      }
    }
    if (nElIdx === -1) {
      return;
    }
    for (
      var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx];
      iLstId < aElListeners.length;
      iLstId++
    ) {
      if (aElListeners[iLstId] === fListener) {
        aElListeners.splice(iLstId, 1);
      }
    }
  };
}
```

## Смотрите также

- {{domxref("EventTarget.addEventListener()")}}.
- {{non-standard_inline}}{{domxref("EventTarget.detachEvent()")}}.
