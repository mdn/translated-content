---
title: Element.attachShadow()
slug: Web/API/Element/attachShadow
---

{{APIRef('Shadow DOM')}} {{SeeCompatTable}}

Метод **`Element.attachShadow()`** добавляет теневое DOM дерево к указанному элементу и возвращает ссылку на его [`ShadowRoot`](/ru/docs/Web/API/ShadowRoot) (корневой элемент созданного дерева).

#### Элементы которые можно добавить в теневой DOM

Обратите внимание, что не каждый элемент можно добавить в корень теневого дерева. Некоторые типы исключены по соображениям безопасности(например {{htmlelement("a")}}), и некоторые другие. Вот список разрешённых элементов:

- Любой пользовательский элемент с [валидным именем](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("blockquote")}}
- {{htmlelement("body")}}
- {{htmlelement("div")}}
- {{htmlelement("footer")}}
- {{htmlelement("h1")}}
- {{htmlelement("h2")}}
- {{htmlelement("h3")}}
- {{htmlelement("h4")}}
- {{htmlelement("h5")}}
- {{htmlelement("h6")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("nav")}}
- {{htmlelement("p")}}
- {{htmlelement("section")}}
- {{htmlelement("span")}}

## Синтаксис

```
var shadowroot = element.attachShadow(shadowRootInit);
```

### Параметры

- `shadowRootInit`

  - : `ShadowRootInit` содержит следующие поля:

    `mode`: Строка указывающая на режим инкапсуляции для shadowDOM:

    - `open.` Указывает на открытие режима инкапсуляции.
      Это означает что элементы shadowRoot доступны для внешнего мира _element.shadowRoot_

      ```
      element.shadowRoot === shadowroot; // returns true
      ```

    - `closed.` Указывает на закрытие режима инкапсуляции.
      Этот режим запрещает доступ к узлам node(s) и закрывать теневой корень для внешнего мира

      ```
      element.shadowRoot === shadowroot; // returns false
      element.shadowRoot === null; // returns true
      ```

### Возвращает

Вернёт a {{domxref("ShadowRoot")}} или null.

### Исключения

| Исключение        | Описание                                                                                                          |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| InvalidStateError | Элемент уже является хостом теневого DOM                                                                          |
| NotSupportedError | Вы пытаетесь прикрепить shadow DOM к HTML-элементу с некорректным именем, или к запрещённому элементу. (см. выше) |

## Примеры

Пример взят из демо компонента [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component), так-же доступно [live demo](https://mdn.github.io/web-components-examples/word-count-web-component/). Вы можете найти метод attachShadow() примерно в середине кода. Метод создаёт корневой элемент теневого DOM к которому потом добавляется содержимое шаблона элемента.

```js
//Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    var wcParent = this.parentNode;

    function countWords(node) {
      var text = node.innerText || node.textContent;
      return text.split(/\s+/g).length;
    }

    var count = "Words: " + countWords(wcParent);

    // Create a shadow root
    var shadow = this.attachShadow({ mode: "open" });

    // Create text node and add word count to it
    var text = document.createElement("span");
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);

    // Update count when element content changes
    setInterval(function () {
      var count = "Words: " + countWords(wcParent);
      text.textContent = count;
    }, 200);
  }
}

// Define the new element
customElements.define("word-count", WordCount, { extends: "p" });
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}
