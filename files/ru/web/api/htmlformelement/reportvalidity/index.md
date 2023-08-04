---
title: HTMLFormElement.reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
---

{{ APIRef("HTML DOM") }}

Метод **`HTMLFormElement.reportValidity()`** возвращает **`true`** если все дочерние элементы прошли проверку. Когда возвращается **`false`**, по каждому дочернему элементу не прошедшему проверку генерируется событие [`invalid`](/ru/docs/Web/Events/invalid) и пользователю сообщаются проблемы проверки.

## Синтаксис

```
HTMLFormElement.reportValidity()
```

## Пример

```
document.forms["myform"].addEventListener('invalid', function() {
  //Опциональный ответ здесь.
}, false);

document.forms["myform"].addEventListener('submit', function() {
  document.forms["myform"].reportValidity();
}, false);
```

## Спецификация

[HTML 5.1 Forms: The Constraint Validation API](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-constraint-validation-api)

## Совместимость с браузерами

{{Compat}}
