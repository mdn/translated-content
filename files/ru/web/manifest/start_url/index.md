---
title: start_url
slug: Web/Manifest/start_url
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
        <pre class="brush: json no-line-numbers">
"start_url": "https://example.com"</pre>
      </td>
    </tr>
  </tbody>
</table>

`start_url` является строкой, представляющей начальный URL-адрес веб-приложения — предпочтительный URL-адрес, который должен быть загружен при запуске пользователем веб-приложения (например, когда пользователь нажимает на значок веб-приложения в меню приложений или на домашнем экране).

> **Примечание:** `start_url` носит чисто рекомендательный характер, и пользовательский агент может его игнорировать или разрешить пользователю изменять его во время установки или после.

## Примеры

### Absolute URL

```json
"start_url": "https://example.com"
```

### Relative URL

Если URL является относительным, для его разрешения используется URL манифеста.

```json
"start_url": "../startpoint.html"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
