---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
tags:
  - Error
  - Errors
  - JavaScript
  - Security
translation_of: Web/JavaScript/Reference/Errors/Property_access_denied
original_slug: Web/JavaScript/Reference/Fehler/Property_access_denied
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    Error: Permission denied to access property "x"

## Fehlertyp

{{jsxref("Error")}}.

## Was ist falsch gelaufen?

Es wurde versucht auf ein Objekt zuzugreifen, wofür man nicht ausreichend berechtig ist. In den meisten Fällen handelt es sich um ein {{HTMLElement("iframe")}} Element, das von einer anderen Domäne geladen wurde und die [Same-Origin Policy](/de/docs/Web/Security/Same-origin_policy) verletzt.

## Beispiele

```html
<!DOCTYPE html>
<html>
  <head>
    <iframe id="myframe" src="http://www1.w3c-test.org/common/blank.html"></iframe>
    <script>
      onload = function() {
        console.log(frames[0].document);
        // Error: Permission denied to access property "document"
      }
    </script>
  </head>
  <body></body>
</html>
```

## Siehe auch

- {{HTMLElement("iframe")}}
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
