---
title: "<bdo>: Элемент переопределения направления текста"
slug: Web/HTML/Reference/Elements/bdo
---

{{HTMLSidebar}}

**HTML - элемент переопределения двунаправленного текста** (**`<bdo>`**) переопределяет текущее направление текста так, что текст внутри отображается в другом направлении.

{{InteractiveExample("HTML Demo: &lt;bdo&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Famous seaside songs</h1>

<p>The English song "Oh I do like to be beside the seaside"</p>

<p>
  Looks like this in Hebrew:
  <span dir="rtl">אה, אני אוהב להיות ליד חוף הים</span>
</p>

<p>
  In the computer's memory, this is stored as
  <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>
</p>
```

```css interactive-example
html {
  font-family: sans-serif;
}

/* stylelint-disable-next-line block-no-empty */
bdo {
}
```

Текстовые символы рисуются от заданной точки в указанном направлении; индивидуальная ориентация символов не меняется (к примеру, символы не зеркалятся).

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | [Потоковый контент](/ru/docs/Web/HTML/Guides/Content_categories#flow_content), [фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content), palpable content. |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимый контент                                                | [Фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content).                                                                                                  |
| Закрывающий тег                                                   | Нет, открывающий и закрывающий теги обязательны.                                                                                                                                   |
| Допустимые родители                                               | Все элементы, принимающие [фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content),                                                                        |
| Допустимые ARIA-роли                                              | Любые                                                                                                                                                                              |
| DOM-интерфейс                                                     | {{domxref("HTMLElement")}} до Gecko 1.9.2 (Firefox 4) включительно, Firefox реализует интерфейс [`HTMLSpanElement`](/ru/docs/Web/API/HTMLSpanElement) для этого элемента.          |

## Атрибуты

Этот элемент поддерживает [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

- `dir`
  - : Направление, в котором должен отображаться текст внутри элемента. Возможные значения:
    - `ltr`: Указывает, что текст должен идти слева направо.
    - `rtl`: Указывает, что текст должен идти справа налево.

## Примеры

```html
<!-- Переключение направления текста -->
<p>This text will go left to right.</p>
<p><bdo dir="rtl">This text will go right to left.</bdo></p>
```

### Результат

{{EmbedLiveSample('Примеры')}}

## Примечания

Спецификация HTML 4 не указывала события для этого элемента; они были добавлены в XHTML.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
