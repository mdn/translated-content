---
title: <legend>
slug: Web/HTML/Reference/Elements/legend
---

{{HTMLSidebar}}

HTML-элемент **`<legend>`** представляет собой заголовок содержания родительского элемента {{HTMLElement("fieldset")}}.

{{InteractiveExample("HTML Demo: &lt;legend&gt;", "tabbed-standard")}}

```html interactive-example
<fieldset>
  <legend>Choose your favorite monster</legend>

  <input type="radio" id="kraken" name="monster" value="K" />
  <label for="kraken">Kraken</label><br />

  <input type="radio" id="sasquatch" name="monster" value="S" />
  <label for="sasquatch">Sasquatch</label><br />

  <input type="radio" id="mothman" name="monster" value="M" />
  <label for="mothman">Mothman</label>
</fieldset>
```

```css interactive-example
legend {
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | Нет                                                                               |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Допустимый контент                                                | [Фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content). |
| Пропуск тегов                                                     | Нет, открывающий и закрывающий теги обязательны.                                  |
| Допустимые родители                                               | Является дочерним элементом тега {{HTMLElement("fieldset")}}                      |
| Допустимые ARIA-роли                                              | Нет                                                                               |
| DOM-интерфейс                                                     | {{domxref("HTMLLegendElement")}}                                                  |

## Атрибуты

Этот элемент включает только [универсальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

## Примеры

Смотрите {{HTMLElement("form")}} для примеров использования элемента `<legend>`.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Другие связанные элементы: {{HTMLElement("form")}}, {{HTMLElement("option")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} и {{HTMLElement("meter")}}.
- [ARIA: Form role](/ru/docs/Web/Accessibility/ARIA/Roles/Form_Role)
