---
title: Window.document
slug: Web/API/Window/document
---

{{APIRef}}

## Описание

`window.document` возвращает ссылку на документ, содержащийся в окне.

> **Примечание:** Firefox 3 вносит изменения в правила безопасности для windows' документов, чтобы только домен, на котором они расположены, имел доступ к документам. И хотя это может сломать некоторые существующие сайты, Firefox 3 и Internet Explorer 7 сделали этот шаг, что приводит к улучшению безопасности.

## Синтаксис

```
doc = window.document
```

### Параметры

- `doc` является ссылкой на объект [document](/ru/docs/DOM/document).

## Пример

```html
<!doctype html>
<html>
  <head>
    <title>Hello, World!</title>
  </head>
  <body>
    <script type="text/javascript">
      var doc = window.document;
      console.log(doc.title); // Hello, World!
    </script>
  </body>
</html>
```

## Спецификации

{{Specifications}}
