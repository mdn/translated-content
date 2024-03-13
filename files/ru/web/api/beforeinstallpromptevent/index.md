---
title: BeforeInstallPromptEvent
slug: Web/API/BeforeInstallPromptEvent
---

Событие **`BeforeInstallPromptEvent`** запускается в обработчике {{domxref("Window.onbeforeinstallprompt")}} перед тем, как пользователю будет предложено "установить" веб-сайт на главный экран мобильного устройства.Этот интерфейс наследуется от интерфейса {{domxref("Event")}}.

{{InheritanceDiagram(700, 60, 20)}}

## Конструктор

- {{domxref("BeforeInstallPromptEvent.BeforeInstallPromptEvent","BeforeInstallPromptEvent()")}}
  - : Создаёт новый **`BeforeInstallPromptEvent`**.

## Свойства

_Наследует свойства от своего родителя, {{domxref("Event")}}._

- {{domxref("BeforeInstallPromptEvent.platforms")}} {{readonlyinline}}
  - : Возвращает массив элементов {{domxref("DOMString")}}, содержащий платформы, на которых было отправлено событие. Это предусмотрено для пользовательских агентов, которые хотят предоставить пользователю выбор версий, таких как, например, «web» или «play», что позволит пользователю выбирать между веб-версией или версией Android.
- {{domxref("BeforeInstallPromptEvent.userChoice")}} {{readonlyinline}}
  - : Возвращает {{jsxref("Promise")}}, которое разрешается в {{domxref("DOMString")}}, содержащее либо "accepted" (принято), либо "dismissed" (отклонено).

## Методы

- {{domxref("BeforeInstallPromptEvent.prompt()")}}
  - : Позволяет разработчику показывать запрос на установку в любое время по своему выбору. Этот метод возвращает {{jsxref("Promise")}}.

## Пример

```js
window.addEventListener("beforeinstallprompt", function (e) {
  // Зарегистрируйте платформы, указанные в качестве параметров, в запросе на установку
  console.log(e.platforms); // e.g., ["web", "android", "windows"]
  e.userChoice.then(function (choiceResult) {
    console.log(choiceResult.outcome); // either "accepted" or "dismissed"
  }, handleError);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
