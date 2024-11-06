---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
---

{{jsSidebar("Errors")}}

## Сообщение

```
Error: Permission denied to access property "x"
```

## Тип ошибки

{{jsxref("Error")}}.

## Что пошло не так?

Была попытка получить доступ к объекту, на который у вас нет разрешения. Вероятно, это элемент {{HTMLElement("iframe")}}, для которого вы нарушили [правило ограничения домена](/ru/docs/Web/Security/Same-origin_policy).

## Примеры

```html
<!doctype html>
<html>
  <head>
    <iframe
      id="myframe"
      src="http://www1.w3c-test.org/common/blank.html"></iframe>
    <script>
      onload = function () {
        console.log(frames[0].document);
        // Error: Permission denied to access property "document"
      };
    </script>
  </head>
  <body></body>
</html>
```

## Смотрите также

- {{HTMLElement("iframe")}}
- [Same-origin policy](/ru/docs/Web/Security/Same-origin_policy)
