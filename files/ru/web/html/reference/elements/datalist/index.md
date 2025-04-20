---
title: <datalist>
slug: Web/HTML/Reference/Elements/datalist
---

{{HTMLSidebar}}

**HTML-элемент `<datalist>`** содержит набор опций ({{HTMLElement("option")}}), доступных для выбора. Выбранное значение будет установлено для элемента {{HTMLElement("input")}}, с атрибутом [`list`](/ru/docs/Web/HTML/Reference/Elements/input#list).

{{InteractiveExample("HTML Demo: &lt;datalist&gt;", "tabbed-standard")}}

```html interactive-example
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
  <option value="Chocolate"></option>
  <option value="Coconut"></option>
  <option value="Mint"></option>
  <option value="Strawberry"></option>
  <option value="Vanilla"></option>
</datalist>
```

```css interactive-example
label {
  display: block;
  margin-bottom: 10px;
}
```

| [Категория контента](/ru/docs/Web/HTML/Guides/Content_categories) | [Потоковый контент](/ru/docs/Web/HTML/Guides/Content_categories#потоковый_контент), [фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content). |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                             | Либо фразовый контент, либо ноль или более элементов {{HTMLElement("option")}}.                                                                                       |
| Пропуск тегов                                                     | Нет, открывающий и закрывающий теги обязательны.                                                                                                                      |
| Допустимые родители                                               | Любой элемент, который может содержать [фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content).                                              |
| Допустимые ARIA-роли                                              | Нет                                                                                                                                                                   |
| DOM-интерфейс                                                     | {{domxref("HTMLDataListElement")}}                                                                                                                                    |

## Атрибуты

С данным элементом можно использовать все [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

## Примеры

```html
<label for="myBrowser">Choose a browser from this list:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

### Результат

{{EmbedLiveSample("Примеры")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Полифил

Для использованиях в браузерах, которые не поддерживают данную технологию, рекомендуется использовать полифил: [datalist-polyfill](https://github.com/mfranzke/datalist-polyfill).

## Смотрите также

- Элемент {{HTMLElement("input")}} , в особенности его атрибут [`list`](/ru/docs/Web/HTML/Reference/Elements/input#list);
- Элемент {{HTMLElement("option")}}.
