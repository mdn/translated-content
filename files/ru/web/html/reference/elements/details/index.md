---
title: <details>
slug: Web/HTML/Reference/Elements/details
---

{{HTMLSidebar}}

HTML-элемент **`<details>`** используется для раскрытия скрытой (дополнительной) информации.

Виджет раскрытия обычно представлен на экране с использованием небольшого треугольника, который поворачивается, чтобы показать состояние открытия / закрытия, с меткой рядом с треугольником. Если первый дочерний элемент элемента `<details>` является `<summary>`, содержимое элемента `<summary>` используется в качестве метки для виджета раскрытия.

{{InteractiveExample("HTML Demo: &lt;details&gt;", "tabbed-standard")}}

```html interactive-example
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

```css interactive-example
details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
```

| [Content categories](/ru/docs/Web/HTML/Guides/Content_categories) | [Flow content](/ru/docs/Web/HTML/Guides/Content_categories#flow_content), sectioning root, interactive content, palpable content. |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                                 | One {{HTMLElement("summary")}} element followed by [flow content](/ru/docs/Web/HTML/Guides/Content_categories#flow_content).      |
| Tag omission                                                      | Нет, открывающий и закрывающий теги обязательны.                                                                                  |
| Permitted parents                                                 | Any element that accepts [flow content](/ru/docs/Web/HTML/Guides/Content_categories#flow_content).                                |
| Permitted ARIA roles                                              | None                                                                                                                              |
| DOM interface                                                     | {{domxref("HTMLDetailsElement")}}                                                                                                 |

## Атрибуты

Элемент поддерживает только [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

- `open`
  - : Данный логический атрибут указывает, будет ли дополнительная информация отображаться пользователю при загрузке страницы. По умолчанию установлено значение false, поэтому дополнительная информация будет скрыта.

## Пример

```html
<details>
  <summary>Some details</summary>
  <p>More info about the details.</p>
</details>

<details open>
  <summary>Even more details</summary>
  <p>Here are even more details about the details.</p>
</details>
```

### Result

{{EmbedLiveSample("Пример")}}

> [!NOTE]
> Если приведённый выше пример не работает, см. [Browser compatibility](#browser_compatibility) , чтобы определить поддерживает ли вообще ваш браузер эту функцию.

## Примеры стилизации

Следуя более новой спецификации, Firefox отображает элемент summary как `display: list-item` и маркер можно стилизовать так же, как и элементы списка.

Следуя более старой спецификации, в Chrome and Safari существует пользовательский псевдо-элемент `::-webkit-details-marker`, с помощью которого можно стилизовать маркер.

Для кроссбраузерной стилизации маркера, чтобы скрыть дефолтный и добавить кастомный, необходимо для Firefox установить элементу `summary {display: block;}`, а для Chrome и Safari's установить `::-webkit-details-marker {display: none;}`. После этого дефолтный маркер будет скрыт, после чего можно установить свой маркер любым доступным способом стилизации. В примере ниже с помощью псевдоэлементов маркер возвращается обратно.

### HTML

```html
<details>
  <summary>Some details</summary>
  <p>More info about the details.</p>
</details>
```

### CSS

```css
summary {
  display: block;
}

summary::-webkit-details-marker {
  display: none;
}

summary::before {
  content: "\25B6";
  padding-right: 0.5em;
}

details[open] > summary::before {
  content: "\25BC";
}
```

### Result

{{ EmbedLiveSample('Примеры_стилизации') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("summary")}}
