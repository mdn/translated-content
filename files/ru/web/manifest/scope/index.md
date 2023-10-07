---
title: scope
slug: Web/Manifest/scope
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
      <td><pre class="brush: json no-line-numbers">"scope": "/app/"</pre></td>
    </tr>
  </tbody>
</table>

Определяет область навигации контекста веб-приложения. Обычно ограничивается тем, какая веб-страница может быть просмотрена, пока манифест загружается. Если пользователь выходит за пределы области, приложение возвращается к нормальному виду веб-страницы.

Если область относительный URL, базовым URL будет URL манифеста.

## Примеры

Если область относительная, URL манифеста используется как базовый URL:

```json
"scope": "/app/"
```

Следующая область ограничивает навигацию текущим сайтом:

```json
"scope": "https://example.com/"
```

Наконец, в следующем примере навигация ограничена подкаталогом текущего сайта:

```json
"scope": "https://example.com/subdirectory/"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
