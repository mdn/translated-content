---
title: background_color
slug: Web/Progressive_web_apps/Manifest/Reference/background_color
l10n:
  sourceCommit: b3d5659a6f16dc6cb8be5c48d19820a67434ecb9
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

Свойство `background_color` определяет цвет фона для отображения страницы приложения до загрузки её таблицы стилей. Это значение также используется пользовательским агентом для отрисовки цвета фона ярлыка, если манифест доступен до загрузки таблицы стилей.

Поэтому `background_color` должен соответствовать CSS-свойству {{cssxref("background-color")}} в таблице стилей сайта для плавного перехода между запуском веб-приложения и загрузкой содержимого сайта.

> [!NOTE]
> Свойство `background_color` предназначено только для улучшения пользовательского опыта во время загрузки основной таблицы стилей из сети или с носителя, оно не используется пользовательским агентом как свойство CSS {{cssxref("background-color")}}, когда доступна таблица стилей веб-приложения.

## Пример

```json
"background_color": "red"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
