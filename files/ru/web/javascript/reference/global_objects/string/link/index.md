---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
---

{{JSRef("Global_Objects", "String")}} {{deprecated_header}}

## Сводка

Метод **`link()`** создаёт HTML-элемент {{HTMLElement("a")}}, заставляющий строку отображаться в виде ссылки на другой URL.

## Синтаксис

```
str.link(url)
```

### Параметры

- `url`
  - : Любая строка, определяющая атрибут `href` тега `<a>`; она должна содержать допустимый URL (относительный или абсолютный), символы амперсанда `&` должны быть закодированы в ней как `&amp;`, а символы кавычки `"` — как `&quot;`.

## Описание

Метод `link()` используется для создания кусочка HTML со ссылкой в гипертексте. Возвращённая строка затем может быть добавлена в документ при помощи метода {{domxref("document.write()")}} или свойства {{domxref("element.innerHTML")}}

Ссылки, созданные методом `link()`, становятся элементами в массиве {{domxref("document.links")}}.

## Примеры

### Пример: использование метода `link()`

В следующем примере слово «MDN» отображается в виде гипертекстовой ссылки, ведущей на сайт Сети разработчиков Mozilla.

```js
var hotText = "MDN";
var URL = "https://developer.mozilla.org/";

document.write("Нажмите для возврата на " + hotText.link(URL));
```

Этот пример генерирует такой же вывод, как и следующий HTML:

```html
Нажмите для возврата на <a href="https://developer.mozilla.org/">MDN</a>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.anchor()")}}
