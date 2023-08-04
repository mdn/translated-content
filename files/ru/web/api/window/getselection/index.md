---
title: Window.getSelection()
slug: Web/API/Window/getSelection
---

{{ ApiRef() }}

## Коротко

Метод возвращает объект {{domxref("Selection")}}, представленный в виде диапазона текста, который пользователь выделил на странице.

## Синтаксис

```
selection = window.getSelection();
```

### Значение

Объект {{domxref("Selection")}}.

При добавлении в параметр пустую строку или воспользовавшись методом {{jsxref("Selection.toString()")}} вам вернут строку, которую выделил пользователь.

## Пример

```js
function foo() {
  var selObj = window.getSelection();
  alert(selObj);
  var selRange = selObj.getRangeAt(0);
  // вернёт диапазон Range
}
```

## Примечания

### String representation of the Selection object

В JavaScript при попытке передать в функцию, принимающую строку (как на пример {{ Domxref("window.alert()") }} или же {{ Domxref("document.write()") }}), функция попробует сделать из любого параметра строку, даже если этот параметр является объектом, функцией со своими методами и свойствами.

В приведённом выше примере `selObj.toString() автоматически задействуется, когда мы передаём в`{{domxref("window.alert()")}} переменную selObj как параметр, который должен быть строкой. Однако мы не можем использовать свойства и метода объекта String, как на пример : [`length`](/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length), [`substr`](/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substr). В следствии чего, вам необходимо будет применить вручную метод `toString(), как тут:`

```js
var selectedText = selObj.toString();
```

- `selObj` это объект `Selection`.
- `selectedText` это строка (Выделенный текст).

### Родственные объекты

Вы так же можете использовать такой способ вызова {{domxref("Document.getSelection()")}}, который работает идентично {{domxref("Window.getSelection()")}}.

Поля ввода HTML (inputs) предоставляют более удобный API для работы с выделенным текстом (смотрите {{domxref("HTMLInputElement.setSelectionRange()")}}).

На заметку, разница между _selection_ и _focus_. {{domxref("Document.activeElement")}} - это то, что вернётся элемент, который выделен (focused) .

## Спецификации

{{Specifications}}

## Совместимость с браузером

{{Compat}}

## Смотрите также

- [Selection API](/ru/docs/Web/API/Selection_API)
- {{domxref("Selection")}}
- {{domxref("Range")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("HTMLInputElement.setSelectionRange()")}}
