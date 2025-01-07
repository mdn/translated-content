---
title: <datalist>
slug: Web/HTML/Element/datalist
---

{{HTMLSidebar}}

**HTML-элемент `<datalist>`** содержит набор опций ({{HTMLElement("option")}}), доступных для выбора. Выбранное значение будет установлено для элемента {{HTMLElement("input")}}, с атрибутом [`list`](/ru/docs/Web/HTML/Element/input#list).

{{EmbedInteractiveExample("pages/tabbed/datalist.html", "tabbed-standard")}}

| [Категория контента](/ru/docs/Web/HTML/Content_categories) | [Потоковый контент](/ru/docs/Web/HTML/Content_categories#потоковый_контент), [фразовый контент](/ru/docs/Web/HTML/Content_categories#phrasing_content). |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | Либо фразовый контент, либо ноль или более элементов {{HTMLElement("option")}}.                                                                         |
| Пропуск тегов                                              | Нет, открывающий и закрывающий теги обязательны.                                                                                                        |
| Допустимые родители                                        | Любой элемент, который может содержать [фразовый контент](/ru/docs/Web/HTML/Content_categories#phrasing_content).                                       |
| Допустимые ARIA-роли                                       | Нет                                                                                                                                                     |
| DOM-интерфейс                                              | {{domxref("HTMLDataListElement")}}                                                                                                                      |

## Атрибуты

С данным элементом можно использовать все [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

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

- Элемент {{HTMLElement("input")}} , в особенности его атрибут [`list`](/ru/docs/Web/HTML/Element/input#list);
- Элемент {{HTMLElement("option")}}.
