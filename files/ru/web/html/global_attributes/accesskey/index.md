---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
---

{{HTMLSidebar("Global_attributes")}}

[Глобальный атрибут](/ru/docs/Web/HTML/Global_attributes) **accesskey** даёт возможность быстро перейти к элементу с помощью комбинации клавиш. Значение атрибута состоит из одного печатного символа (в том числе спец. символы, акценты и другие, которые можно написать с клавиатуры).

{{EmbedInteractiveExample("pages/tabbed/attribute-accesskey.html","tabbed-shorter")}}

> **Примечание:** Спецификация WHATWG допускает использования нескольких символов разделённых пробелом. Однако, на момент написания, эта функциональность не поддерживается в современных браузерах. IE и Edge в таком случае будет использовать первый символ, игнорируя остальные.

Активация элементов с помощью Accesskey зависит от браузера и платформы:

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Linux</th>
      <th>macOS</th>
    </tr>
    <tr>
      <th>Firefox</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd>+ <kbd>Shift</kbd>+<kbd><em>key</em></kbd>
      </td>
      <td>
        В Firefox 57 и новее: <kbd>Control</kbd> + <kbd>Option</kbd> +
        <kbd><em>key</em></kbd> -OR- <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>key</em></kbd
        ><br />В Firefox 14 и новее: <kbd>Control</kbd>+ <kbd>Alt</kbd>+
        <kbd><em>key</em></kbd
        ><br />В Firefox 13 и старше, <kbd>Control</kbd>+<kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Internet Explorer</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td colspan="2" rowspan="1">N / A</td>
    </tr>
    <tr>
      <th>Google Chrome</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd>+ <kbd>Alt</kbd>+<kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Safari</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>N / A</td>
      <td>
        <kbd>Control</kbd>+ <kbd>Alt</kbd>+<kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera 15+</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd>+ <kbd>Alt</kbd>+<kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera 12</th>
      <td colspan="3" rowspan="1">
        <kbd>Shift</kbd>+ <kbd>Esc</kbd> показывает список элементов, доступных
        для быстрого перехода. Перейти на нужный элемент можно нажав
        соответствующий символ (<kbd><em>key</em></kbd
        >)
      </td>
    </tr>
    <tr></tr>
  </tbody>
</table>

Обратите внимание, что в Firefox пользователь может настроить свой модификатор активации.

## Проблемы с доступностью

В добавок к слабой поддержке браузерами всех возможностей в спецификации, у атрибута `accesskey` есть проблемы с доступностью:

- Значение атрибута `accesskey` может конфликтовать с комбинациями клавиш системы, браузера или вспомогательными инструментами доступности.
- Определённые значения атрибута `accesskey` могут отсутствовать на некоторых клавиатурах. Это особенно сильно проявляется, если вы используете язык отличный от английского.
- Числовые значения атрибута могут `accesskey` затруднить работу с сайтом для людей с расстройствами мышления. Например, когда числовые значения не имеют логической связи со связанным элементом.
- Не существует стандартизированного способа информировать пользователя о наличии атрибута `accesskey` на элементе. Неинформированный пользователь может случайно активировать элемент с атрибутом `accesskey`.

Ввиду этих причин рекомендуется не использовать атрибут `accesskey` для обычных сайтов и веб-приложений.

- [WebAIM: Keyboard Accessibility - Accesskey](https://webaim.org/techniques/keyboard/accesskey#spec)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.accessKey")}}
- {{domxref("HTMLElement.accessKeyLabel")}}
- Все [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes) .
