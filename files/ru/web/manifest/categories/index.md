---
title: categories
slug: Web/Manifest/categories
---

{{QuickLinksWithSubpages("/ru/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code> of <code>String</code>s</td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json no-line-numbers">"categories": ["music"]</pre>
      </td>
    </tr>
  </tbody>
</table>

`categories` - это массив строк, определяющих имена категорий, к которым, предположительно, относится приложение. Нет стандартного списка возможных значений, но W3C поддерживает [список известных категорий](https://github.com/w3c/manifest/wiki/Categories).

> **Примечание:** `categories` используются только в качестве подсказок для каталогов или магазинов, содержащих веб-приложения. Как и поисковые системы и meta ключевые слова, каталоги и магазины могут игнорировать их.

> **Примечание:**значения `categories` изменяются в каталогах и магазинах перед обработкой на нижний регистр, поэтому «Новости» и «новости» рассматриваются как одно и то же значение. Разработчикам рекомендуется использовать строчные буквы в первую очередь.

## Пример

```json
"categories": ["books", "education", "medical"]
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
