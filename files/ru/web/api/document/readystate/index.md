---
title: Document.readyState
slug: Web/API/Document/readyState
---

{{APIRef("DOM")}}

Свойство **`Document.readyState`** описывает состояние загрузки {{domxref("document")}}.

Когда значение этого свойства изменяется, в объекте {{domxref("document")}} запускается событие {{event("readystatechange")}}.

## Синтаксис

```
var string = document.readyState;
```

### Значения

Свойство **readyState** объекта document может иметь одно из следующих значений:

- `loading`
  - : Страница все ещё загружается.
- `interactive`
  - : Страница уже загружена и [DOM](/ru/docs/Glossary/DOM) дерево построено, но дополнительные ресурсы, такие как изображения и [iframe](/ru/docs/Web/HTML/Element/iframe), все ещё загружаются.
- `complete`
  - : Страница и все дополнительные ресурсы уже загружены. Это состояние указывает, что событие {{event("load")}} уже вызвано.

При изменении значения, данного свойства, вызывается событие {{event("readystatechange")}} на объекте {{ domxref("document") }}.

## Примеры

### Разные состояния загрузки страницы

```js
switch (document.readyState) {
  case "loading":
    // Страница все ещё загружается
    break;
  case "interactive":
    // Страница уже загружена. Теперь мы можем получить доступ к DOM объектам.
    var span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // Страница загружена вместе с дополнительными ресурсами.
    console.log(
      "The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText,
    );
    break;
}
```

### readystatechange как альтернатива событию DOMContentLoaded

```js
// альтернатива событию DOMContentLoaded
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initApplication();
  }
};
```

### readystatechange как альтернатива событию load

```js
// альтернатива событию load
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    initApplication();
  }
};
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Событие {{event("readystatechange")}}
- Событие {{event("DOMContentLoaded")}}
- Событие {{event("load")}}
