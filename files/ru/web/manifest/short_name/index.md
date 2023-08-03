---
title: short_name
slug: Web/Manifest/short_name
---

{{QuickLinksWithSubpages("/ru/docs/Web/Manifest")}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Тип</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Обязателен</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">Пример</th>
      <td><pre class="brush: json">"short_name": "Awesome app"</pre></td>
    </tr>
  </tbody>
</table>

Элемент `short_name` — это строка, которая определяет название веб-приложения показываемое пользователю, если для отображения [`name`](./name) не достаточно места (например, в качестве надписи под иконкой приложения на экране телефона). `short_name` может отображаться слева-направо или справе-налево, в зависимости от значений элементов манифеста [`dir`](./dir) and [`lang`](./lang).

## Примеры

Обычно `short_name` отображается слева-направо:

```json
"name": "Awesome application",
"short_name": "Awesome app"
```

`short_name` на арабском отображается справа-налево:

```json
"dir": "rtl",
"lang": "ar",
"name": "تطبيق رائع",
"short_name": "رائع"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
