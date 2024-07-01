---
title: Event.preventDefault()
slug: Web/API/Event/preventDefault
---

{{ apiRef("DOM") }}Метод preventDefault () интерфейса {{domxref ("Event")}} сообщает {{Glossary("User agent")}}, что если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно. Событие продолжает распространяться как обычно, до тех пор, пока один из его обработчиков не вызывает методы {{domxref ("Event.stopPropagation", " stopPropagation ()")}} или {{domxref (" Event.stopImmediatePropagation", " stopImmediatePropagation ()")}}, любой из которых сразу же прекращает распространение.Как отмечено ниже, вызов метода preventDefault () для события, не подлежащего отмене, например события, отправленного через {{domxref("EventTarget.dispatchEvent ()")}}, без указания cancelable: true не имеет эффекта.

## Синтаксис

```
event.preventDefault();
```

## Пример

По умолчанию щелчок по флажку переключает его состояние на противоположное. В этом примере показано, как предотвратить такое поведение:

```html
<!doctype html>
<html>
  <head>
    <title>Пример preventDefault</title>

    <script>
      function stopDefAction(evt) {
        evt.preventDefault();
      }

      document
        .getElementById("my-checkbox")
        .addEventListener("click", stopDefAction, false);
    </script>
  </head>

  <body>
    <p>Пожалуйста, щёлкните по флажку.</p>

    <form>
      <input type="checkbox" id="my-checkbox" />
      <label for="my-checkbox">Checkbox</label>
    </form>
  </body>
</html>
```

Вы можете посмотреть работу `preventDefault` в действии [здесь](/samples/domref/dispatchEvent.html).

В следующем примере некорректный ввод останавливается и вводимый символ не добавляется в поле с `preventDefault()`.

```html
<!DOCTYPE html>
<html>
<head>
<title>Пример preventDefault</title>

<script>
```

```js
function Init() {
  var myTextbox = document.getElementById("my-textbox");
  myTextbox.addEventListener("keypress", checkName, false);
}

function checkName(evt) {
  var charCode = evt.charCode;
  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
      alert(
        "Пожалуйста, используйте только буквы нижнего регистра на латинице" +
          "\n" +
          "charCode: " +
          charCode +
          "\n",
      );
    }
  }
}
```

```html
</script>
</head>
<body onload="Init ()">
    <p>Пожалуйста, введите своё имя, используя только буквы нижнего регистра на латинице.</p>
    <form>
        <input type="text" id="my-textbox" />
    </form>
</body>
</html>
```

Результат выполнения кода:

{{ EmbedLiveSample('preventDefault_invalid_text', '', '', '') }}

## Примечания

Вызов `preventDefault` на любой стадии выполнения потока событий отменяет событие, а это означает, что любое действие по умолчанию обычно принимается реализацией, как результат события, которое не произойдёт.

> **Примечание:** В Gecko 6.0, вызов `preventDefault()` приводит к {{ domxref("event.defaultPrevented") }} к переходу значения в состояние `True`.

Вы можете использовать [event.cancelable](/ru/docs/Web/API/event.cancelable) чтобы проверить, является ли событие отменяемым. Вызов `preventDefault` для неотменяемых событий не имеет никакого эффекта.

`preventDefault` не останавливает дальнейшее распространение событий на DOM. Для этого следует использовать [event.stopPropagation](/ru/docs/Web/API/event.stopPropagation).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
