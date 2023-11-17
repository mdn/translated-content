---
title: <data>
slug: Web/HTML/Element/data
---

{{HTMLSidebar}}

**HTML-элемент `<data>`** связывает данное содержимое с машиночитаемым представлением. Если содержимое относится к времени или дате, необходимо использовать элемент {{HTMLElement("time")}}.

{{EmbedInteractiveExample("pages/tabbed/data.html", "tabbed-shorter")}}

| [Категории контента](/ru/docs/Web/Guide/HTML/Content_categories) | [Потоковый контент](/ru/docs/Web/Guide/HTML/Content_categories#Потоковый_контент), [фразовый контент](/ru/docs/Web/Guide/HTML/Content_categories#Phrasing_content), явный контент. |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Разрешённое содержимое                                           | [Фразовый контент](/ru/docs/Web/Guide/HTML/Content_categories#Phrasing_content).                                                                                                   |
| Пропуск тегов                                                    | {{no_tag_omission}}                                                                                                                                                                |
| Разрешённые родители                                             | Любой элемент который принимает [фразовый контент](/ru/docs/Web/Guide/HTML/Content_categories#Phrasing_content).                                                                   |
| DOM-интерфейс                                                    | {{domxref("HTMLDataElement")}}                                                                                                                                                     |

## Атрибуты

Этот элемент включает [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

- {{htmlattrdef("value")}}
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

## Поддержка браузерами

{{Compat}}

## Смотрите также

- HTML-элемент {{HTMLElement("time")}}.
