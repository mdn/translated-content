---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
---

{{JSRef}} {{deprecated_header}}

## Сводка

Метод **`fontsize()`** создаёт HTML-элемент {{HTMLElement("font")}}, заставляющий строку отображаться шрифтом указанного размера.

> [!NOTE]
> Элемент `<font>` был удалён из [HTML5](/ru/docs/Web/Guide/HTML/HTML5) и больше не должен использоваться. Вместо него веб-разработчикам следует использовать свойства [CSS](/ru/docs/Web/CSS).

## Синтаксис

```
str.fontsize(size)
```

### Параметры

- `size`
  - : Целое число от 1 до 7, либо строка с целым числом со знаком по модулю от 1 до 7.

## Описание

При задании размера в виде целого числа, вы устанавливаете размер шрифта строки `str` в один из 7 предопределённых размеров. При задании размера в виде строки, например, "-2", вы задаёте размер шрифта строки `str` относительно размера, установленного тегом {{HTMLElement("basefont")}}.

## Примеры

### Пример: использование метода `fontsize()`

В следующем примере демонстрируется использование нескольких строковых методов для изменения размера строки:

```js
var worldString = "Привет, мир";

console.log(worldString.small()); // <small>Привет, мир</small>
console.log(worldString.big()); // <big>Привет, мир</big>
console.log(worldString.fontsize(7)); // <fontsize=7>Привет, мир</fontsize>
```

При помощи объекта {{domxref("HTMLElement.style", "element.style")}} вы можете получить значение атрибута `style` элемента и управлять им более обобщённым способом, например:

```js
document.getElementById("yourElemId").style.fontSize = "0.7em";
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.big()")}}
- {{jsxref("String.prototype.small()")}}
