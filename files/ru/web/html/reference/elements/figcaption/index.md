---
title: "<figcaption>: Элемент подписи иллюстрации"
slug: Web/HTML/Reference/Elements/figcaption
---

{{HTMLSidebar}}

**HTML-элемент `<figcaption>` или элемент подписи иллюстрации** представляет собой подпись (заголовок) или легенду, описывающую остальную часть содержимого родительского элемента {{HTMLElement("figure")}}.

{{InteractiveExample("HTML Demo: &lt;figcaption&gt;", "tabbed-shorter")}}

```html interactive-example
<figure>
  <img
    src="/shared-assets/images/examples/elephant.jpg"
    alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>
```

```css interactive-example
figure {
  border: thin #c0c0c0 solid;
  display: flex;
  flex-flow: column;
  padding: 5px;
  max-width: 220px;
  margin: auto;
}

img {
  max-width: 220px;
  max-height: 150px;
}

figcaption {
  background-color: #222;
  color: #fff;
  font: italic smaller sans-serif;
  padding: 3px;
  text-align: center;
}
```

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | Нет                                                                                                                                                                                |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                             | [Потоковый контент](/ru/docs/Web/HTML/Guides/Content_categories#потоковый_контент)                                                                                                 |
| Пропуск тегов                                                     | Нет, открывающий и закрывающий теги обязательны.                                                                                                                                   |
| Допустимые родители                                               | Элемент {{HTMLElement("figure")}}; элемент `<figcaption>` должен быть первым или последним потомком.                                                                               |
| Допустимые ARIA-роли                                              | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code> |
| DOM-интерфейс                                                     | {{domxref("HTMLElement")}}                                                                                                                                                         |

## Атрибуты

Этот элемент принимает только [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

## Примеры

Для примеров `<figcaption>` смотрите {{HTMLElement("figure")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Элемент {{HTMLElement("figure")}}
