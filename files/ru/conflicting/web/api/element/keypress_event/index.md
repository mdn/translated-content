---
title: GlobalEventHandlers.onkeypress
slug: conflicting/Web/API/Element/keypress_event
original_slug: Web/API/GlobalEventHandlers/onkeypress
---

{{ApiRef("HTML DOM")}}

## Описание

Свойство **onkeypress** задаёт и возвращает код обработчика событий onKeyPress для текущего элемента.

## Синтаксис

```
element.onkeypress = код обработчика событий
```

## Примечания

Событие нажатия **должно** вызываться тогда, когда пользователь нажимает клавишу на клавиатуре. Тем не менее, не все браузеры отрабатывают это событие для некоторых (определённых) клавиш.

### Несовместимость в браузерах

Браузеры на основе Webkit (к примеру, Google Chrome и Safari) не отрабатывают события нажатия клавиш-указателей ("стрелок").

Firefox не отрабатывает события, в основе которых лежат клавиши управления (модификаторы) - такие, как, например, SHIFT.

## Спецификация

Не является частью спецификации.

## Пример

Следующий пример демонстрирует использование события `onkeypress` в процессе заполнения поля формы (только) цифрами:

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Пример</title>
<script>
  function numbersOnly(oToCheckField, oKeyEvent) {
    return oKeyEvent.char === 0 || /\d/.test(String.fromCharCode(oKeyEvent.char));
  }
</script>
</head>

<body>
<form name="myForm">
<p>Вводите только цифры: <input type="text" name="myInput" onkeypress="return numbersOnly(this, event);" onpaste="return false;" /></p>
</form>
</body>
</html>
```
