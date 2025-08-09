---
title: <span>
slug: Web/HTML/Reference/Elements/span
---

{{HTMLSidebar}}

HTML-элемент **`<span>`** является основным строковым контейнером для фразового контента, который, по существу, ничего не представляет. Он может использоваться для группировки элементов в целях стилизации (использование атрибутов [`class`](/ru/docs/Web/HTML/Reference/Global_attributes#class) или [`id`](/ru/docs/Web/HTML/Reference/Global_attributes#id)) или потому, что они имеет общие значения атрибутов, например [`lang`](/ru/docs/Web/HTML/Reference/Global_attributes#lang). Он должен быть использован только когда нет другого подходящего по семантике элемента. `<span>` очень похож на элемент {{HTMLElement("div")}}, но {{HTMLElement("div")}} является [блочным](/ru/docs/Glossary/Block-level_content) элементом, в то время как `<span>` является [строчным](/ru/docs/Web/HTML/Строчные_Элементы).

{{InteractiveExample("HTML Demo: &lt;span&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Add the <span class="ingredient">basil</span>,
  <span class="ingredient">pine nuts</span> and
  <span class="ingredient">garlic</span> to a blender and blend into a paste.
</p>

<p>
  Gradually add the <span class="ingredient">olive oil</span> while running the
  blender slowly.
</p>
```

```css interactive-example
span.ingredient {
  color: #f00;
}
```

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | [Потоковый контент](/ru/docs/Web/HTML/Guides/Content_categories#потоковый_контент), [фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content).                                                    |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Допустимое содержимое                                             | [Фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content).                                                                                                                                        |
| Пропуск тегов                                                     | Нет, открывающий и закрывающий теги обязательны.                                                                                                                                                                         |
| Допустимые родители                                               | Любой элемент, который разрешает [фразовый](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content) или [потоковый](/ru/docs/Web/HTML/Guides/Content_categories#потоковый_контент) контент в качестве содержимого. |
| Допустимые ARIA-роли                                              | Любые                                                                                                                                                                                                                    |
| DOM-интерфейс                                                     | {{domxref("HTMLSpanElement")}} (до {{glossary("HTML5")}}, интерфейсом был {{domxref("HTMLElement")}})                                                                                                                    |

## Атрибуты

К этому элементу применимы только [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

## Пример 1

### HTML

```html
<p><span>Какой-нибудь текст</span></p>
```

### Результат

{{EmbedLiveSample('Пример_1')}}

## Пример 2

### HTML

```html
<li>
  <span>
    <a href="portfolio.html" target="_blank">Посмотреть моё портфолио</a>
  </span>
</li>
```

### CSS

```css
li span {
  background: gold;
}
```

### Результат

{{EmbedLiveSample('Пример_2')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTML-элемент {{HTMLElement("div")}}
