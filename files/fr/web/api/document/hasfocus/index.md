---
title: document.hasFocus
slug: Web/API/Document/hasFocus
tags:
  - API
  - DOM
  - Focus
  - Méthodes
  - Reference
translation_of: Web/API/Document/hasFocus
---
{{ ApiRef() }}

La méthode **`Document.hasFocus()`** retourne une valeur  {{jsxref("Boolean")}} `true` _(vrai)_ indiquant si le document ou tout élément à l'intérieur du document a le focus. Cette méthode peut être utilisée pour déterminer si l'élément actif d'un document a le focus.

> **Note :** Lors de la visualisation d'un document, un élément avec focus est toujours l'élément actif dans le document, mais un élément actif n'a pas nécessairement le focus. Par exemple, un élément actif dans une fenêtre contextuelle qui n'est pas le premier plan n'a pas de focus.

## Syntaxe

    focused = document.hasFocus();

### Valeur retournée

`false` _(faux)_ si l'élément actif dans le document n'a pas de focus ; `true` _(vrai)_ si l'élément actif dans le document a le focus.

## Exemple

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>TEST</title>
<style>
#message { font-weight: bold; }
</style>
<script>
setInterval( checkPageFocus, 200 );

function checkPageFocus() {
  var info = document.getElementById("message");

  if ( document.hasFocus() ) {
    info.innerHTML = "The document has the focus.";
  } else {
    info.innerHTML = "The document doesn't have the focus.";
  }
}

function openWindow() {
  window.open (
    "https://developer.mozilla.org/",
    "mozdev",
    "width=640,height=300,left=150,top=260"
  );
}
</script>
</head>
<body>
  <h1>JavaScript hasFocus example</h1>
  <div id="message">Waiting for user action</div>
  <div><button onclick="openWindow()">Open a new window</button></div>
</body>
</html>
```

## Spécification

| Spécification                                                                                                                | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('HTML WHATWG', 'interaction.html#dom-document-hasfocus', 'Document.hasFocus()')}} | {{Spec2('HTML WHATWG')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Document.hasFocus")}}

## Voir aussi

- [Utilisation de l'API de visibilité des pages](/fr/docs/Web/API/Page_Visibility_API)
