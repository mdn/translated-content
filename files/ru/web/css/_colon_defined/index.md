---
title: ":defined"
slug: Web/CSS/:defined
---

{{ CSSRef }}

[CSS](/ru/docs/Web/CSS) [псевдокласс](/ru/docs/Web/CSS/Pseudo-classes) **`:defined`** находит любой элемент, который был определён, включая любой стандартный элемент, встроенный в браузер, и [пользовательские элементы](/ru/docs/Web/Web_Components/Использование_пользовательских_элементов) (то есть определённые с помощью метода {{domxref("CustomElementRegistry.define()")}}).

```css
/* Находит любой элемент, который был определён */
:defined {
  font-style: italic;
}

/* Выбирает все элементы simple-custom, если пользовательский элемент simple-custom был определён */
simple-custom:defined {
  display: block;
}
```

## Синтаксис

{{csssyntax}}

## Примеры

Этот пример включает скрипт, определяющий [пользовательский элемент](/ru/docs/Web/Web_Components/Использование_пользовательских_элементов) `<simple-custom>`:

```js
customElements.define(
  "simple-custom",
  class extends HTMLElement {
    constructor() {
      super();

      let divElem = document.createElement("div");
      divElem.textContent = this.getAttribute("text");

      let shadowRoot = this.attachShadow({ mode: "open" }).appendChild(divElem);
    }
  },
);
```

Затем мы используем короткий HTML код с элементом `<simple-custom>` и стандартным элементом {{htmlelement("p")}}:

```html
<simple-custom text="Текст пользовательского элемента"></simple-custom>

<p>Пример текста стандартного параграфа</p>
```

Теперь немного CSS. Здесь мы определяем цвета фона для разных элементов и используем селектор `:defined`, чтобы поменять шрифт всех определённых элементов на курсив.

```css
/* Определение разных фонов для разных элементов */
p {
  background: yellow;
}

simple-custom {
  display: block;
  background: cyan;
}

/* И пользовательский, и встроенный элементы будет отображены курсивом */
:defined {
  font-style: italic;
}
```

Наконец, мы добавляем следующие два правила, чтобы спрятать наш пользовательский элемент, если он не был определён или показать в обратном случае:

```css
simple-custom:not(:defined) {
  opacity: 0;
}

simple-custom:defined {
  opacity: 0.75;
  text-decoration: underline;
}
```

Это полезно, если у вас есть сложный пользовательский элемент, который требует какое-то время для загрузки — возможно, вы захотите спрятать его до определения, чтобы на странице не появились искажения или не стилизованные элементы.

### результат

Вот результат выполнения представленного выше кода:

{{EmbedLiveSample('Примеры')}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Веб-компоненты](/ru/docs/Web/Web_Components)
- {{cssxref(":host")}}
- {{cssxref(":host()")}}
- {{cssxref(":host-context()")}}
