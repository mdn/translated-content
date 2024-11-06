---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
---

{{jsSidebar("Errors")}}

## Mensagem

```
Error: Permission denied to access property "x"
```

## Tipo de erro

{{jsxref("Error")}}.

## O que houve de errado?

Tentativa de acessar um objeto no qual você não possui permissões. Provavelmente um {{HTMLElement("iframe")}} carregado de um dominio diferente no qual foi violado o [same-origin policy](/pt-BR/docs/Web/Security/Same-origin_policy).

## Exemplos

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

## Veja também

- {{HTMLElement("iframe")}}
- [Same-origin policy](/pt-BR/docs/Web/Security/Same-origin_policy)
