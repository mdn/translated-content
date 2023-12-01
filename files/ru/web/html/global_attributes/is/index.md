---
title: is
slug: Web/HTML/Global_attributes/is
---

{{HTMLSidebar("Global_attributes")}}

[Глобальный атрибут](/ru/docs/Web/HTML/Global_attributes) **`is`** позволяет указать, что стандартный HTML-элемент должен вести себя как определённый пользовательский встроенный элемент (см [Using custom elements](/ru/docs/Web/Web_Components/Using_custom_elements) для информации).

Этот атрибут может быть использован только, если указанное имя пользовательского элемента было успешно [определено](/ru/docs/Web/API/CustomElementRegistry/define) в текущем документе и расширяет тип элемента, к которому оно применяется.

## Примеры

Следующий код взят из нашего примеры [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) ([см. в живую](https://mdn.github.io/web-components-examples/word-count-web-component/)).

```js
// Создание класса для элемента
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Всегда вызывайте super первым в конструкторе
    super();

    // Содержимое конструктора опущено для краткости
    ...

  }
}

// Определение нового элемента
customElements.define('word-count', WordCount, { extends: 'p' });
```

```html
<p is="word-count"></p>
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- All [global attributes](/ru/docs/Web/HTML/Global_attributes).
