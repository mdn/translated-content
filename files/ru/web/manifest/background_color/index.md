---
title: background_color
slug: Web/Manifest/background_color
---

{{QuickLinksWithSubpages('/ru/docs/Web/Manifest')}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json no-line-numbers">"background_color": "red"</pre>
      </td>
    </tr>
  </tbody>
</table>

`background_color` определяет ожидаемый цвет фона для веб-приложения. Это значение повторяет то, что уже доступно в стилях приложения, но может быть использовано браузерами для отрисовки цвета фона приложения после того, как манифест станет доступен, но до того, как стили загрузятся. Это создаёт плавный переход между запуском приложения и загрузкой содержимого приложения.

Therefore `background_color` should match the {{cssxref("background-color")}} CSS property in the site's stylesheet for a smooth transition between launching the web application and loading the site's content.

> **Примечание:** Свойство `background_color` предназначено только для улучшения удобства пользования, пока главная таблица стилей загружается из сети или с носителя; не должно быть использовано агентом пользователя как свойство CSS {{cssxref('background-color')}}, когда стили приложения станут доступны.

## Пример

```json
"background_color": "red"
```

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}
