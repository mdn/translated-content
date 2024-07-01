---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
---

{{jsSidebar("Errors")}}

## Mensaje

```
Error: Permission denied to access property "x"
```

## Tipo de error

{{jsxref("Error")}}.

## ¿Cuál es el problema?

Se ha intentado acceder a un objeto al cual no tienes permiso. Probablemente es un elemento {{HTMLElement("iframe")}} cargado de otro dominio en el cual violaste la [política del mismo origen](/es/docs/Web/Security/Same-origin_policy).

## Ejemplos

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

## Véase también

- {{HTMLElement("iframe")}}
- [Política del mismo origen](/es/docs/Web/Security/Same-origin_policy)
