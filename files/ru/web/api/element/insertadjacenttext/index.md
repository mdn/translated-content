---
title: Element.insertAdjacentText()
slug: Web/API/Element/insertAdjacentText
---

{{APIRef("DOM")}}

The **`insertAdjacentText()`** метод помещает заданный текстовый узел в указанную позицию относительно элемента, который передан в вызове метода.

## Синтаксис

```
element.insertAdjacentText(position, element);
```

### Параметры

- `position`

  - : {{domxref("DOMString")}} позиция для вставки текста относительно элемента `element`; должна быть указана в следующем виде:

    - `'beforebegin'`: Перед самим `element`.
    - `'afterbegin'`: Внутри самого `element`, перед первым child.
    - `'beforeend'`: Внутри самого `element`, после последнего child.
    - `'afterend'`: После самого `element`.

- `element`
  - : {{domxref("DOMString")}} текст, который будет помещён в заданную позицию.

### Возвращаемое значение

Void.

### Исключения

| Exception     | Explanation                                    |
| ------------- | ---------------------------------------------- |
| `SyntaxError` | Указанная `position` не может быть распознана. |

### Наглядное отображение параметра position

```
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```

> **Примечание:** значения `beforebegin` и `afterend` работают только если targetElement находится в DOM-дереве и имеет родительский элемент.

## Пример

```js
beforeBtn.addEventListener("click", function () {
  para.insertAdjacentText("afterbegin", textInput.value);
});

afterBtn.addEventListener("click", function () {
  para.insertAdjacentText("beforeend", textInput.value);
});
```

Посмотрите пример [insertAdjacentText.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentText.html) на GitHub (исходный код [source code](https://github.com/mdn/dom-examples/blob/master/insert-adjacent/insertAdjacentText.html).) Вы можете ввести любой текст в поле формы, а затем нажать кнопки _Insert before_ (вставить до) и _Insert after_ (вставить после) для размещения этого текста до или после существующего абзаца, используя `insertAdjacentText()`. Обратите внимание, что существующий текстовой узел не изменился, а произошло добавление новых текстовых узлов.

## Полифил

Можно создать polyfill для `insertAdjacentText()` method который будет работать в Internet Explorer 5.5 (возможно и в более ранних версиях) и последующих версиях, с помощью данного кода:

```js
if (!Element.prototype.insertAdjacentText)
  Element.prototype.insertAdjacentText = function (type, txt) {
    this.insertAdjacentHTML(
      type,
      (txt + "") // convert to string
        .replace(/&/g, "&amp;") // embed ampersand symbols
        .replace(/</g, "&lt;"), // embed greater than symbols
    );
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentHTML()")}}
