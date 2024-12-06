---
title: <noscript>
slug: Web/HTML/Element/noscript
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

[HTML](/ru/docs/Web/HTML)-элемент **`<noscript>`** определяет секцию HTML кода, которая будет вставлена, если указанный на странице тип скриптов не поддерживается браузером пользователя или отключен.

## Атрибуты

Этот элемент поддерживает только [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

## Примеры

```html
<noscript>
  <!-- привязка к внешнему файлу -->
  <a href="http://www.mozilla.com/">Внешняя ссылка</a>
</noscript>
<p>Камни!</p>
```

### Результат с включёнными скриптами

Всем привет!

### Результат с выключенным скриптами

[Внешняя ссылка](https://www.mozilla.org/)

Всем привет!

## Техническая сводка

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ru/docs/Web/HTML/Content_categories">Категории контента</a>
      </th>
      <td>
        <a href="/ru/docs/Web/HTML/Content_categories#метаданные">Метаданные</a>,
        <a href="/ru/docs/Web/HTML/Content_categories#основной_поток">основной поток</a>,
        <a href="/ru/docs/Web/HTML/Content_categories#фразовый_контент">фразовый контент</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимый контент</th>
      <td>
        Если выполнение скриптов отключено и элемент является потомком элемента
        {{HTMLElement("head")}}: в любом порядке, ноль или более элементов
        {{HTMLElement("link")}}, ноль или более элементов
        {{HTMLElement("style")}}, и ноль или более элементов
        {{HTMLElement("meta")}}.<br />Если выполнение скриптов отключено и элемент не
        является потомком элемента {{HTMLElement("head")}}: любой
        <a href="/ru/docs/Web/HTML/Content_categories#прозрачная_модель_контента">прозрачный контент</a>,
        но элемент <code>&#x3C;noscript></code> не должен быть среди его
        потомков.<br />В противном случае: основной поток или фразовый контент.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>Нет, открывающий и закрывающий теги обязательны.</td>
    </tr>
    <tr>
      <th scope="row">Допустимые родители</th>
      <td>
        Любой элемент, принимающий
        <a href="/ru/docs/Web/HTML/Content_categories#фразовый_контент">фразовый контент</a>,
        если среди его предков нет элемента
        <code>&#x3C;noscript></code>, или в элементе
        {{HTMLElement("head")}} (только для HTML-документа), также при
        отсутствии предков <code>&#x3C;noscript></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявная роль ARIA</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Нет соответствующей роли</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимые ARIA-роли</th>
      <td>Атрибут <code>role</code> не допускается</td>
    </tr>
    <tr>
      <th scope="row">DOM-интерфейс</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
