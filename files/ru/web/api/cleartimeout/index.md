---
title: WindowOrWorkerGlobalScope.clearTimeout()
slug: Web/API/clearTimeout
---

{{APIRef("HTML DOM")}}

**`clearTimeout()`** метод {{domxref("WindowOrWorkerGlobalScope")}} отменяет таймаут, ранее установленный вызовом {{domxref("WindowOrWorkerGlobalScope.setTimeout", "setTimeout()")}}.

## Синтаксис

```
scope.clearTimeout(timeoutID)
```

### Параметры

- `timeoutID`
  - : Идентификатор таймаута, который вы хотите отменить. Этот идентификатор был возвращён соответствующим вызовом `setTimeout()`.

It's worth noting that the pool of IDs used by {{domxref("WindowOrWorkerGlobalScope.setTimeout", "setTimeout()")}} and {{domxref("WindowOrWorkerGlobalScope.setInterval", "setInterval()")}} are shared, which means you can technically use `clearTimeout()` and {{domxref("WindowOrWorkerGlobalScope.clearInterval", "clearInterval()")}} interchangeably. However, for clarity, you should avoid doing so.

## Пример использования

Запустите приведённый ниже скрипт в контакте веб-страницы и кликните один раз. Вы увидите всплывающее сообщение через 1 секунду. Если вы щёлкните страницу несколько раз за одну секунду, предупреждение появится только один раз.

```js
var alarm = {
  remind: function (aMessage) {
    alert(aMessage);
    this.timeoutID = undefined;
  },

  setup: function () {
    if (typeof this.timeoutID === "number") {
      this.cancel();
    }

    this.timeoutID = window.setTimeout(
      function (msg) {
        this.remind(msg);
      }.bind(this),
      1000,
      "Wake up!",
    );
  },

  cancel: function () {
    window.clearTimeout(this.timeoutID);
  },
};
window.onclick = function () {
  alarm.setup();
};
```

## Примечания

Передача недействительного ID `clearTimeout()` ни к чему не приведёт. Исключение не создается.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}
- {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}
- {{domxref("WindowOrWorkerGlobalScope.clearInterval()")}}
- {{domxref("Window.requestAnimationFrame()")}}
- [_Daemons_ management](/ru/docs/JavaScript/Timers/Daemons)
