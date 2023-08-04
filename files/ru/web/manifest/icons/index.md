---
title: icons
slug: Web/Manifest/icons
---

{{QuickLinksWithSubpages('/ru/docs/Web/Manifest')}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json no-line-numbers">
"icons": [
  {
    "src": "icon.webp",
    "sizes": "48x48",
    "type": "image/webp"
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

`icons` Определяет массив объектов изображений, которые могут использованы как иконки приложения в различных контекстах. К примеру, они могут быть использованы для представления приложения среди списка других приложений или для интеграции его с переключателем задач ОС и/или настроек системы.

## Примеры

```json
"icons": [
  {
    "src": "icon/lowres.webp",
    "sizes": "48x48",
    "type": "image/webp"
  },
  {
    "src": "icon/lowres",
    "sizes": "48x48"
  },
  {
    "src": "icon/hd_hi.ico",
    "sizes": "72x72 96x96 128x128 256x256"
  },
  {
    "src": "icon/hd_hi.svg",
    "sizes": "72x72"
  }
]
```

## Значения

Объекты изображений могут содержать следующие значения:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Параметр</th>
      <th scope="col">Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>sizes</code></td>
      <td>Строка, содержащая разделённые пробелами размеры изображения.</td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>
        Путь к файлу изображения. Если <code>src</code> является относительным
        URL, основным URL будет URL манифеста.
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        <p>
          Служит для определения медиа-типа изображения.Цель свойства позволить
          агенту пользователя быстро проигнорировать изображения медиа-типа,
          который он не поддерживает.
        </p>
      </td>
    </tr>
    <tr>
      <td>purpose</td>
      <td>
        <p>
          Определяет назначение изображения, например, если изображение
          предназначено для каких-то особых целей в контексте ОС (т. е. для
          лучшей интеграции)
        </p>
        <p>
          <a href="https://w3c.github.io/manifest/#purpose-member"
            ><code>purpose</code></a
          >
          может иметь одно из следующих значений:
        </p>
        <ul>
          <li>
            <code>badge</code>: Пользовательский агент может представить этот
            значок там, где ограничения пространства и/или требования к цвету
            отличаются от таковых для значка приложения.
          </li>
          <li>
            <code>maskable</code>: Изображение разработано с учётом
            <a href="https://w3c.github.io/manifest/#icon-masks"
              >масок значков и безопасной зоны</a
            >, так что пользовательский агент может безопасно игнорировать и
            маскировать любую часть изображения за пределами безопасной зоны.
          </li>
          <li>
            <code>any</code>: Пользовательский агент может отображать значок в
            любом контексте (это значение по умолчанию).
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
