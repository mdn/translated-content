---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
tags:
  - Bezpieczeństwo
  - Błąd
  - Błędy
  - Error
  - Errors
  - JavaScript
translation_of: Web/JavaScript/Reference/Errors/Property_access_denied
---
{{jsSidebar("Errors")}}

Wyjątek JavaScript "Permission denied to access property" pojawia się podczas próby dostępu do obiektu, do którego nie masz uprawnień

## Wiadomość

    Error: Permission denied to access property "x"

## Typ błędu

{{jsxref("Error")}}

## Co poszło nie tak?

Podjęto próbę dostępu do obiektu, do którego nie masz uprawnień. There was attempt to access an object for which you have no permission.Jest to prawdopodobnie element [`<iframe>`](/pl/docs/Web/HTML/Element/iframe "The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one.") załadowany z innej domeny, dla której naruszyłeś [regułę tego samego pochodzenia (same-origin policy)](/pl/docs/Web/Security/Same-origin_policy).

## Przykłady

### Brak uprawnień dostepu do dokumentu

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

## Zobacz też

- [`<iframe>`](/pl/docs/Web/HTML/Element/iframe "The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one.")
- [Reguła tego samego pochodzenia (same-origin policy)](/pl/docs/Web/Bezpieczeństwo/Same-origin_policy)
