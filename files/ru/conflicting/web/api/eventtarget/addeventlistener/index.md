---
title: EventListener
slug: conflicting/Web/API/EventTarget/addEventListener
original_slug: Web/API/EventListener
---

{{APIRef("DOM Events")}}

Интерфейс `EventListener` представляет собой объект, который может обработать событие, отправленное объектом {{domxref ("EventTarget")}}.

> **Примечание:** Из-за необходимости совместимости с унаследованным контентом, `EventListener` принимает функцию или объект с методом `handleEvent()`. Это показано в [примере](#Example) ниже.

## Свойства

_Интерфейс не реализует и не наследует никаких свойств._

## Синтаксис

| `void handleEvent(in Event event);` |
| ----------------------------------- |

## Методы

### handleEvent()

Этот метод вызывается всякий раз, когда происходит событие того типа, для которого был зарегистрирован интерфейс EventListener.

```
void handleEvent(
  in Event event
);
```

##### Параметры

- `event`
  - : Событие DOM {{ domxref("Event") }} для которого регистрируется обработчик.

### Примечания

Поскольку у интерфейса отмечен флаг `[function]`, все объекты JavaScript [Function](/en/JavaScript/Reference/Global_Objects/Function "en/Core_JavaScript_1.5_Reference/Global_Objects/Function") автоматически реализуют этот интерфейс. Вызов метода [handleEvent](#handleevent) на такой реализации автоматически вызовет эту функцию.

## Пример

### HTML

```html
<button id="btn">Нажми сюда!</button>
```

### JavaScript

```js
const buttonElement = document.getElementById('btn');

// Добавим обработчик для события "click", предоставив callback.
// Теперь по клику на элемент будет всплывать подсказка.

buttonElement.addEventListener('click', function (event) {
  alert('Событие вызвано функцией!');
});

// Теперь привяжем обработчик через объект, содержащий функцию

buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    alert('Событие вызвал handleEvent!');
  }
});
```

### Результат

{{EmbedLiveSample('Пример')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
