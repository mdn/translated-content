---
title: Document.activeElement
slug: Web/API/Document/activeElement
---

{{ ApiRef() }}

## Аннотация

Возвращает текущий сфокусированный элемент, то есть элемент, на котором будут вызываться события клавиатуры, если пользователь начнёт с неё ввод. Этот атрибут доступен только для чтения.

Часто возвращается {{ HTMLElement("input") }} или {{ HTMLElement("textarea") }} объект, если он содержит в себе выделенный в данный момент текст. При этом вы можете получить более подробные сведения, используя свойства элемента `selectionStart` и `selectionEnd`. В других случаях сфокусированным элементом может быть {{ HTMLElement("select") }} элемент (меню) или {{ HTMLElement("input") }} элемент типа button, checkbox или radio.

> **Примечание:** На Mac, элементы, не являющиеся текстовыми полями, как правило, не получают фокус.

Как правило, пользователь может нажать клавишу табуляции для перемещения по фокусируемым элементам страницы, и использовать пробел для их активации (нажать кнопку button, выбрать переключатель radio).

Не следует путать фокус с выделением документа, состоящего в основном из статических текстовых узлов. См. {{ domxref("window.getSelection()") }}.

Когда выделение отсутствует, активным элементом является {{ HTMLElement("body") }} страницы или null.

> **Примечание:** Этот атрибут является частью разрабатываемой спецификации HTML 5.

## Синтаксис

```
var curElement = document.activeElement;
```

## Пример

```html
<!doctype html>
<html>
  <head>
    <script type="text/javascript" charset="utf-8">
      function init() {
        function onMouseUp(e) {
          console.log(e);
          var outputElement = document.getElementById("output-element");
          var outputText = document.getElementById("output-text");
          var selectedTextArea = document.activeElement;
          var selection = selectedTextArea.value.substring(
            selectedTextArea.selectionStart,
            selectedTextArea.selectionEnd,
          );
          outputElement.innerHTML = selectedTextArea.id;
          outputText.innerHTML = selection;
        }

        document
          .getElementById("ta-example-one")
          .addEventListener("mouseup", onMouseUp, false);
        document
          .getElementById("ta-example-two")
          .addEventListener("mouseup", onMouseUp, false);
      }
    </script>
  </head>
  <body onload="init()">
    <div>Выделите текст в одном из текстовых полей ниже:</div>
    <form id="frm-example" action="#" accept-charset="utf-8">
      <textarea name="ta-example-one" id="ta-example-one" rows="8" cols="40">
Это текстовое поле 1:
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.
</textarea
      >
      <textarea name="ta-example-two" id="ta-example-two" rows="8" cols="40">
Это текстовое поле 2:
Fusce ullamcorper, nisl ac porttitor adipiscing, urna orci egestas libero, ut accumsan orci lacus laoreet diam. Morbi sed euismod diam.
</textarea
      >
    </form>
    ID активного элемента: <span id="output-element"></span><br />
    Выделенный текст: <span id="output-text"></span>
  </body>
</html>
```

[Посмотреть на JSFiddle](https://jsfiddle.net/w9gFj)

## Примечания

Первоначально введённое как собственное расширение DOM в Internet Explorer 4, это свойство также поддерживается в Opera и Safari (в версии 4).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Связанные события

- {{event("focus")}}
- {{event("blur")}}
- {{event("focusin")}}
- {{event("focusout")}}
