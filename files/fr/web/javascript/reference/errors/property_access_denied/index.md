---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
---

{{jsSidebar("Errors")}}

## Message

```
Error: Permission denied to access property "x"
```

## Type d'erreur

{{jsxref("Error")}}.

## Quel est le problème ?

Il y a eu une tentative d'accès non-autorisée à un objet sur lequel vous n'avez pas de permissions. Généralement, cela se produit lorsqu'un élément {{HTMLElement("iframe")}} est chargée depuis un domaine différent et que [la condition de même origine](/fr/docs/Web/Security/Same-origin_policy) n'est pas respectée.

## Exemples

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

## Voir aussi

- {{HTMLElement("iframe")}}
- [Condition d'origine (_same-origin policy_)](/fr/docs/Web/Security/Same-origin_policy)
