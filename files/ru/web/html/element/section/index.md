---
title: <section> - элемент секции
slug: Web/HTML/Element/section
---

{{HTMLSidebar}}

**HTML-элемент `<section>`** представляет собой автономный раздел — который не может быть представлен более точным по семантике элементом — внутри HTML-документа. Как правило, но не всегда, разделы имеют заголовок.

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

Например, меню навигации должно быть помещено в элемент {{htmlelement("nav")}}, но список результатов поиска и отображение карты с её элементами управления не имеют специфических элементов и могут быть помещены в `<section>`.

> **Примечание:** Если содержимое элемента имеет смысл объединить как единое целое (в цельный и независимый блок), то элемент {{HTMLElement("article")}} может стать лучшим выбором.

| Категории контента    | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток), [секционный контент](/ru/docs/Web/Guide/HTML/Content_categories#Секционный_контент), [явный контент](/ru/docs/Web/Guide/HTML/Content_categories#Явный_контент).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Допустимое содержимое | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Пропуск тега          | Ни одного; Оба тега, открывающий и закрывающий, являются обязательными.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Допустимые родители   | Любой элемент, который разрешает [контент основного потока](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток) в качестве содержимого. Обратите внимание, что элемент `<section>` не должен быть потомком элемента {{HTMLElement("address")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Допустимые ARIA-роли  | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/alert_role">alert</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/alertdialog_role">alertdialog</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/application_role">application</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/banner_role">banner</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/complementary_role">complementary</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/contentinfo_role">contentinfo</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/document_role">document</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/feed_role">feed</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/log_role">log</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/main_role">main</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/marquee_role">marquee</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/navigation_role">navigation</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/status_role">status</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/tabpanel_role">tabpanel</a></code> |
| DOM-интерфейс         | {{domxref("HTMLElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Атрибуты

К этому элементу применимы только [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

## Примечание

- Каждый элемент `<section>` должен быть идентифицирован, обычно путём добавления заголовка (элементы {{HTMLElement('h1')}}-{{HTMLElement('h6')}}) в качестве дочернего элемента.
- Если имеет смысл по-особому объединить содержимое элемента `<section>` (например, сделать цельным и независимым разделом HTML-документа), используйте вместо него элемент {{HTMLElement("article")}}.
- Не используйте элемент `<section>` как общий контейнер; для этого есть {{HTMLElement("div")}}, особенно когда секционирование применяется только для стилизации. На практике раздел должен логически выделяться в структуре документа.

## Пример 1

### До

```html
<div>
  <h1>Заголовок</h1>
  <p>Много замечательного контента</p>
</div>
```

### После

```html
<section>
  <h1>Заголовок</h1>
  <p>Много замечательного контента</p>
</section>
```

## Пример 2

### До

```html
<div>
  <h2>Заголовок</h2>
  <img src="bird.jpg" alt="птица" />
</div>
```

### После

```html
<section>
  <h2>Заголовок</h2>
  <img src="bird.jpg" alt="птица" />
</section>
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Связанные с этим разделом элементы: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Разделы и структура документа HTML5.](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)
- [ARIA: роль region](/ru/docs/Web/Accessibility/ARIA/Roles/Region_role)
