---
title: Document.readyState
slug: Web/API/Document/readyState
tags:
  - API
  - DOM
  - HTML
  - Référence(2)
translation_of: Web/API/Document/readyState
---
{{APIRef("DOM")}} {{ gecko_minversion_header("1.9.2") }}

La valeur **Document.readyState** est une propriété de {{ domxref("document") }} qui décrit l'état de chargement du document.

À chaque évolution de la valeur, un évenement {{event("readystatechange")}} est émis dans l'objet {{ domxref("document") }}.

## Syntaxe

    var string = document.readyState;

### Valeurs

La variable `readyState` peut valoir :

- **`loading`**
  - : Le {{ domxref("document") }} est encore en chargement.
- **`interactive`**
  - : Le document a été chargé, mais les ressources (images, scripts, css..) sont encore en cours d'acquisition. En revanche la structure DOM est générée, et {{event("DOMContentLoaded")}} a été émis.
- **`complete`**
  - : Le document et toutes les sous-ressources ont été chargés, et {{event("load")}} a été émis.

## Exemples

### Différents états de chargement

```js
switch (document.readyState) {
  case "loading":
    // Encore en chargement.
    break;
  case "interactive":
    // Le DOM est construit, on peut y accéder.
    var span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // La page est pleinement chargée.
    console.log("The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText);
    break;
}
```

### readystatechange comme alternative à  DOMContentLoaded

```js
// alternative à DOMContentLoaded
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initApplication();
  }
}
```

### readystatechange comme alternative à load

```js
// alternative à load
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    initApplication();
  }
}
```

### readystatechange comme event listener pour insérer ou modifier le DOM avant DOMContentLoaded

```js
// Modification du document <body> dès que possible en utilisant un script externe
var bootstrap = function(evt){
  if (evt.target.readyState === "interactive") { initLoader(); }
  else if (evt.target.readyState === "complete") { initApp(); }
}
document.addEventListener('readystatechange', bootstrap, false);
```

## Spécifications

| Spécifications                                                                                               | Status                           | Commentaires            |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------- |
| {{SpecName("HTML WHATWG", "#current-document-readiness", "Document readiness")}} | {{Spec2('HTML WHATWG')}} |                         |
| {{SpecName("HTML5.1", "#current-document-readiness", "Document readiness")}}         | {{Spec2('HTML5.1')}}     |                         |
| {{SpecName("HTML5 W3C", "#current-document-readiness", "Document readiness")}}     | {{Spec2('HTML5 W3C')}}     | Spécification initiale. |

## Compatibilité des navigateurs

{{Compat("api.Document.readyState")}}

\[1] Ne supporte que 'complete'. Opera Presto notifie 'complete' seulement après l'événement 'load' (dans un ordre incorrect par rapport à la spécification du standard HTML5).

\[2] Internet Explorer 9 et 10 ont des bogues quand l'état 'interactive' [peut être notifié trop tôt](https://bugs.jquery.com/ticket/12282) avant que le document soit entièrement analysé.

\[3] À l'introduction dans IE 4, la propriété était seulement disponible pour les objets document, embed, img, link, object, script, et style. IE 5 a étendu le support à tous les objets élément HTML.

## Voir aussi

- L'événement {{event("readystatechange")}}
- L'événement {{event("DOMContentLoaded")}}
- L'événement {{event("load")}}
