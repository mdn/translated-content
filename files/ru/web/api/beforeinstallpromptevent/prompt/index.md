---
title: BeforeInstallPromptEvent.prompt()
slug: Web/API/BeforeInstallPromptEvent/prompt
---

Метод **`prompt()`** интерфейса {{domxref("BeforeInstallPromptEvent")}} позволяет разработчику показывать подсказку об установке в любое время по своему выбору.

## Синтаксис

```
BeforeInstallPromptEvent.prompt()
```

### Параметры

None.

### Возвращаемое значение

Пустой {{jsxref("Promise")}}.

## Пример

```
var isTooSoon = true;
window.addEventListener("beforeinstallprompt", function(e) {
  if (isTooSoon) {
    e.preventDefault(); // Предотвращает быстрое отображение
    // Запросить позже:
    setTimeout(function() {
      isTooSoon = false;
      e.prompt(); // Выбрасывает, если вызывается более одного раза или по умолчанию не предотвращено (not prevented)
    }, 10000);
  }

  // Событие было повторно отправлено в ответ на наш запрос
  // ...
});
```

## Совместимость с браузером

{{Compat}}
