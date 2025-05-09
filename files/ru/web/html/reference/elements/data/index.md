---
title: <data>
slug: Web/HTML/Reference/Elements/data
---

{{HTMLSidebar}}

**HTML-элемент `<data>`** связывает данное содержимое с машиночитаемым представлением. Если содержимое относится к времени или дате, необходимо использовать элемент {{HTMLElement("time")}}.

{{InteractiveExample("HTML Demo: &lt;data&gt;", "tabbed-shorter")}}

```html interactive-example
<p>New Products:</p>
<ul>
  <li><data value="398">Mini Ketchup</data></li>
  <li><data value="399">Jumbo Ketchup</data></li>
  <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
```

```css interactive-example
data:hover::after {
  content: " (ID " attr(value) ")";
  font-size: 0.7em;
}
```

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | [Потоковый контент](/ru/docs/Web/HTML/Guides/Content_categories#потоковый_контент), [фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content), явный контент. |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Разрешённое содержимое                                            | [Фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content).                                                                                                    |
| Пропуск тегов                                                     | Нет, открывающий и закрывающий теги обязательны.                                                                                                                                     |
| Разрешённые родители                                              | Любой элемент который принимает [фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content).                                                                    |
| DOM-интерфейс                                                     | {{domxref("HTMLDataElement")}}                                                                                                                                                       |

## Атрибуты

Этот элемент включает [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

- `value`
  - : Этот атрибут определяет машиночитаемый перевод содержимого элемента.

## Пример

Следующий пример отображает названия продуктов, а также связывает каждое имя с номером продукта.

```html
<p>New Products</p>
<ul>
  <li><data value="398">Mini Ketchup</data></li>
  <li><data value="399">Jumbo Ketchup</data></li>
  <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTML-элемент {{HTMLElement("time")}}.
