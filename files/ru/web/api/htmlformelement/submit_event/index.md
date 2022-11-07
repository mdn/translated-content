---
title: GlobalEventHandlers.onsubmit
slug: Web/API/HTMLFormElement/submit_event
translation_of: Web/API/GlobalEventHandlers/onsubmit
original_slug: Web/API/GlobalEventHandlers/onsubmit
---

{{ApiRef("HTML DOM")}}

Обработчик события отправки формы

## Синтаксис

```
window.onsubmit = funcRef;
```

### Параметры

- `funcRef` – ссылка на функцию.

## Пример

```
<html>
<script>
function reg() {
  window.captureEvents(Event.SUBMIT);
  window.onsubmit = hit;
}

function hit() {
  console.log('hit');
}
</script>

<body onload="reg();">
<form>
  <input type="submit" value="submit" />
</form>
<div id="d"> </div>
</body>
</html>
```

## Замечания

Событие `submit` возникает, когда пользователь кликает на кнопку "Отправить" в форме (`<input type="submit"/>`)

Событие `submit` не возникает, когда пользователь вызывает функцию `form.submit()` напрямую

## Спецификации

{{Specifications}}
