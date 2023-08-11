---
title: <address> - элемент для контактных адресов
slug: Web/HTML/Element/address
---

{{HTMLSidebar}}

**HTML- тег `<address>`** задаёт контактные данные для ближайшего родительского {{HTMLElement("article")}} или {{HTMLElement("body")}} ; В последнем случае применяется ко всему документу, визуально выделяется курсивом.

> **Примечание:**
>
> - Для представления адреса, который не является контактной информацией, воспользуйтесь {{HTMLElement("p")}} элементом.
> - Данный тег не должен содержать любой другой информации, кроме контактной. (пример: дата публикации - относится к {{HTMLElement("time")}} тегу ).
> - Обычно тег \<address> размещается внутри тега {{HTMLElement("footer")}} текущего блока, если есть хотя бы один.

| [Категории контента](/ru/docs/HTML/Content_categories) | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D0%BF%D0%BE%D1%82%D0%BE%D0%BA), palpable content.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Разрешённый контент                                    | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D0%BF%D0%BE%D1%82%D0%BE%D0%BA), но без вложенного элемента \<address>, без элементов заголовка ({{HTMLElement("hgroup")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}), без секционного контента ({{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}) и без {{HTMLElement("header")}} или {{HTMLElement("footer")}} элементов. |
| Опускание тегов                                        | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Разрешённые родительские элементы                      | Любой элемент, который принимает [flow content](/ru/docs/HTML/Content_categories#Flow_content).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| DOM интерфейс                                          | {{domxref("HTMLElement")}} Prior to Gecko 2.0 (Firefox 4), Gecko implemented this element using the {{domxref("HTMLSpanElement")}} interface                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Атрибуты

Этот элемент включает в себя [глобальные атрибуты](/ru/docs/Web/HTML/%D0%9E%D0%B1%D1%89%D0%B8%D0%B5_%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D1%8B).

## Пример

```html
<address>
  You can contact author at
  <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.<br />
  If you see any bugs, please
  <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.<br />
  You may also want to visit us:<br />
  Mozilla Foundation<br />
  1981 Landings Drive<br />
  Building K<br />
  Mountain View, CA 94043-0801<br />
  USA
</address>
```

Результат:

![Image:HTML-address.png](/@api/deki/files/238/=HTML-address.png)

Помимо элемента {{HTMLElement("address")}}, с такими же стандартными стилями как и он текст отображают {{HTMLElement("i")}} или {{HTMLElement("em")}} элементы, более правильно использовать его, когда имеете дело с контактной информацией, так как он передаёт дополнительную семантическую информацию.

## Спецификации

{{Specifications}}

## Совместимость в браузерах

{{Compat}}

## Смотрите также

- Другие элементы: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}};
- [Разделы и структура документа HTML5](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document).
