---
title: HTMLInputElement.setSelectionRange()
slug: Web/API/HTMLInputElement/setSelectionRange
---

{{APIRef("HTML DOM")}}

Метод **`HTMLInputElement.setSelectionRange()`** устанавливает начальное и конечное положение выделения текста в элементе {{HTMLElement("input")}}.

В более новых версиях браузеров, можно дополнительно установить направление выделения текста, что позволит, например, определить, что выделение сделано нажатием и перетаскиванием курсора мыши от конца выделенного текста до начала.

Этот метод позволяет одним вызовом обновить свойства `HTMLInputElement.selectionStart`, `selectionEnd`, и `selectionDirection`.

## Синтаксис

```
inputElement.setSelectionRange(selectionStart, selectionEnd, [optional] selectionDirection);
```

### Параметры

- _selectionStart_
  - : Индекс первого выделенного символа.
- _selectionEnd_
  - : Индекс символа _после_ последнего выделенного символа.
- _selectionDirection_ {{optional_inline}}
  - : Строка, определяющая направления произведённого выделения. Принимаются значения "forward", "backward" или "none", если направление выделение неизвестно или неважно.

## Пример

Следующий код:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JS Bin</title>
    <script>
      function SelectText() {
        var input = document.getElementById("mytextbox");
        input.focus();
        input.setSelectionRange(2, 5);
      }
    </script>
  </head>
  <body>
    <p><input type="text" id="mytextbox" size="20" value="Mozilla" /></p>
    <p><button onclick="SelectText()">Select text</button></p>
  </body>
</html>
```

приведёт к следующему результату:

![example.png](/@api/deki/files/6104/=example.png)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("Selection")}}
