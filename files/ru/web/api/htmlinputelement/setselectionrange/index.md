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

Кликните на кнопку, чтобы выбрать третий, четвёртый и пятый символы в текстовом поле ("zil" в слове "Mozilla").

### HTML

```html
<input type="text" id="text-box" size="20" value="Mozilla" />
<button onclick="selectText()">Выбрать текст</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.setSelectionRange(2, 5);
}
```

### Result

{{EmbedLiveSample("Пример")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("Selection")}}
