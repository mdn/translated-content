---
title: "<div>: базовый блочный элемент"
slug: Web/HTML/Reference/Elements/div
---

{{HTMLSidebar}}

**Элемент разделения контента HTML** (**`<div>`**) является универсальным контейнером для [потокового контента](/ru/docs/Web/HTML/Guides/Content_categories#потоковый_контент). Он не влияет на контент или макет до тех пор, пока не будет стилизован с помощью {{glossary("CSS")}}.

{{InteractiveExample("HTML Demo: &lt;div&gt;", "tabbed-standard")}}

```html interactive-example
<div class="warning">
  <img
    src="/shared-assets/images/examples/leopard.jpg"
    alt="An intimidating leopard." />
  <p>Beware of the leopard</p>
</div>
```

```css interactive-example
.warning {
  border: 10px ridge #f00;
  background-color: #ff0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

.warning img {
  width: 100%;
}

.warning p {
  font: small-caps bold 1.2rem sans-serif;
  text-align: center;
}
```

Являясь "чистым" контейнером, элемент `<div>`, по существу, не представляет ничего. Между тем, он используется для группировки контента, что позволяет легко его стилизовать, используя атрибуты [`class`](/ru/docs/Web/HTML/Reference/Global_attributes#class) или [`id`](/ru/docs/Web/HTML/Reference/Global_attributes#id), помечать раздел документа, написанный на разных языках (используя атрибут [`lang`](/ru/docs/Web/HTML/Reference/Global_attributes#lang)), и так далее.

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | [Потоковый контент](/ru/docs/Web/HTML/Guides/Content_categories#потоковый_контент), [явный контент](/ru/docs/Web/HTML/Guides/Content_categories#явный_контент).                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                             | [Потоковый контент](/ru/docs/Web/HTML/Guides/Content_categories#потоковый_контент) или (в {{glossary("WHATWG")}} HTML), если родительским является элемент {{HTMLElement("dl")}}: один или несколько элементов {{HTMLElement("dt")}}, сопровождаемых одним или более элементами {{HTMLElement("dd")}}, в ряде случаев смешанных с элементами {{HTMLElement("script")}} и {{HTMLElement("template")}}. |
| Пропуск тегов                                                     | Ни одного; Оба тега, открывающий и закрывающий, являются обязательными.                                                                                                                                                                                                                                                                                                                               |
| Допустимые родители                                               | Любой элемент, который разрешает [потоковый контент](/ru/docs/Web/HTML/Guides/Content_categories#потоковый_контент) в качестве содержимого.. Или (в {{glossary("WHATWG")}} HTML): элемент {{HTMLElement("dl")}}.                                                                                                                                                                                      |
| Допустимые ARIA-роли                                              | Любые                                                                                                                                                                                                                                                                                                                                                                                                 |
| DOM-интерфейс                                                     | {{domxref("HTMLDivElement")}}                                                                                                                                                                                                                                                                                                                                                                         |

## Атрибуты

К этому элементу применимы [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> Атрибут `align` устарел и вышел из употребления; не используйте его больше. Вместо этого, вам следует использовать свойства {{glossary("CSS")}} или методы, такие как [CSS Grid](/ru/docs/Web/CSS/CSS_grid_layout) или [CSS Flexbox](/ru/docs/Learn_web_development/Core/CSS_layout/Flexbox) для выравнивания и изменения положения элементов `<div>` на странице.

## Примечание

- Элемент `<div>` следует использовать только в том случае, если никакой другой семантический элемент (такой как {{HTMLElement("article")}} или {{HTMLElement("nav")}}) не подходит.

## Примеры

### Простой пример

```html
<div>
  <p>Любой тип контента. Например, &lt;p&gt;, &lt;table&gt;. Все что угодно!</p>
</div>
```

Результат будет выглядеть так:

{{EmbedLiveSample("Простой_пример", 650, 60)}}

### Стилизованный пример

Этот пример создаёт прямоугольник с тенью, применяя стили к `<div>` с помощью CSS. Заметьте, что использование атрибута [`class`](/ru/docs/Web/HTML/Reference/Global_attributes#class) на элементе `<div>` даёт применение стилей `"shadowbox"` (в дословном переводе означает "теневая коробка") к элементу.

#### HTML

```html
<div class="shadowbox">
  <p>Вот очень интересная заметка в прекрасном прямоугольнике с тенью.</p>
</div>
```

#### CSS

```css
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

#### Результат

{{EmbedLiveSample("Стилизованный_пример", 650, 120)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Семантические секционные элементы: {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- Элемент {{HTMLElement("span")}} для стилизации фразового контента.
