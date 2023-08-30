---
title: WindowEventHandlers.onbeforeunload
slug: conflicting/Web/API/Window/beforeunload_event
original_slug: Web/API/WindowEventHandlers/onbeforeunload
---

{{APIRef("HTML DOM")}}

Свойство обработчика события **`WindowEventHandlers.onbeforeunload`** содержит код, который выполняется при отправке события {{event("beforeunload")}}. Это событие срабатывает, когда окно браузера {{event("unload")}} свои ресурсы. При этом документ остаётся видимым и событие всё ещё можно отменить.

> **Примечание:** Для борьбы с нежелательными всплывающими окнами, некоторые браузеры не отображают текст передаваемый в beforeunload событии, если они не связаны с самой страницей; некоторые не показывают их вообще. Список конкретных браузеров смотрите в секции: [Совместимость_с_браузерами](#совместимость_с_браузерами).

## Синтаксис

```
window.onbeforeunload = funcRef
```

- `funcRef` является ссылкой на функцию или выражение функции.
- Функция должна назначать строковое значение свойству `returnValue` объекта Event и возвращать ту же строку.

## Пример

```js
window.onbeforeunload = function(e) {
  var dialogText = 'Dialog text here';
  e.returnValue = dialogText;
  return dialogText;
};
```

## Примечания

Когда это событие возвращает (или выставляет свойство returnValue) значение, отличное от null или undefined, пользователю предлагается подтвердить {{event("unload")}} страницы в {{domxref("window.prompt", "prompt")}} . В некоторых браузерах возвращаемое значение отображается в этом диалоговом окне. Начиная с Firefox 4, Chrome 51, Opera 38 и Safari 9.1 вместо возвращаемой строки будет показана общая строка, не контролируемая страницей. Например, Firefox отображает строку: "This page is asking you to confirm that you want to leave - data you have entered may not be saved.". Смотрите {{bug("588292")}} и [Chrome Platform Status](https://www.chromestatus.com/feature/5349061406228480).

С 25 мая 2011, в спецификации HTML5 указано, что исполнение методов {{domxref("window.alert()")}}, {{domxref("window.confirm()")}} и {{domxref("window.prompt()")}} может игнорироваться во время этого события. Смотрите [спецификацию HTML5](http://www.w3.org/TR/html5/webappapis.html#user-prompts) чтобы узнать подробности.

Также необходимо отметить, что различные мобильные браузеры игнорируют результат этого события (это является причиной, почему они не запрашивают подтверждения пользователя). Firefox имеет скрытую настройку в about:config для того, чтобы вести себя также. В сущности это значит, что пользователь постоянно подтверждает, что документ может быть выгружен.

Вы _можете_ и _должны_ обрабатывать данное событие через {{domxref("EventTarget.addEventListener","window.addEventListener()")}} и событие {{event("beforeunload")}}. Больше документации доступно здесь.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [MSDN: onbeforeunload event](<http://msdn.microsoft.com/en-us/library/ms536907(VS.85).aspx>)
