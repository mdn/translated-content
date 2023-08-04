---
title: Element.insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
---

{{APIRef("DOM")}}

Метод **`insertAdjacentElement()`** добавляет переданный элемент в DOM-дерево относительно элемента, вызвавшего метод.

## Синтаксис

```
targetElement.insertAdjacentElement(position, element);
```

### Параметры

- position

  - : {{domxref("DOMString")}} - определяет позицию добавляемого элемента относительно элемента, вызвавшего метод. Должно соответствовать одному из следующих значений (чувствительно к регистру):

    - `'beforebegin'`: перед самим элементом `targetElement`.
    - `'afterbegin'`: внутри элемента `targetElement`, перед его первым потомком.
    - `'beforeend'`: внутри элемента `targetElement`, после его последнего потомка.
    - `'afterend'`: после самого элемента `targetElement`.

- element
  - : Элемент, добавляемый в DOM-дерево.

### Возвращаемое значение

Метод возвращает добавляемый элемент, либо `null`, если добавление элемента завершилось ошибкой.

### Исключения

| Исключение    | Пояснение                                                                |
| ------------- | ------------------------------------------------------------------------ |
| `SyntaxError` | Переданное значение `position` не соответствует ни одному из допустимых. |
| `TypeError`   | Передаваемый `element` не является валидным.                             |

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

## Примеры

```js
beforeBtn.addEventListener("click", function () {
  var tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement("beforebegin", tempDiv);
  }
  setListener(tempDiv);
});

afterBtn.addEventListener("click", function () {
  var tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement("afterend", tempDiv);
  }
  setListener(tempDiv);
});
```

Посмотрите наше демо [insertAdjacentElement.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentElement.html) на Github (так же посмотрите [исходный код](https://github.com/mdn/dom-examples/blob/master/insert-adjacent/insertAdjacentElement.html)). В этом демо мы имеем последовательность {{htmlelement("div")}} элементов внутри контейнера. При выборе одного из них можно нажать кнопку _Insert before_ или _Insert after_ и добавить новые div до или после выбранного элемента используя метод `insertAdjacentElement()`.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.appendChild()")}} (такой же эффект со значением position `beforeend`)
