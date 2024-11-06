---
title: prefer_related_applications
slug: Web/Manifest/prefer_related_applications
---

{{QuickLinksWithSubpages('/ru/docs/Web/Manifest')}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Boolean</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json no-line-numbers">
"prefer_related_applications": true</pre
        >
      </td>
    </tr>
  </tbody>
</table>

`prefer_related_applications` является значением типа `boolean`, которое указывает, что приложения, перечисленные в [`related_applications`](./related_applications), должны быть предпочтительнее веб-приложения. Если для `prefer_related_applications` установлено значение `true`, пользовательский агент может предложить установить одно из связанных приложений вместо этого веб-приложения.

Если опущено, `prefer_related_applications` по умолчанию `false`.

## Пример

```json
"prefer_related_applications": true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
