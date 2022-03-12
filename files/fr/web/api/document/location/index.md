---
title: Document.location
slug: Web/API/Document/location
tags:
  - API
  - Document
  - HTML DOM
  - Propriété
  - Reference
  - lecture seule
translation_of: Web/API/Document/location
---
La propriété en lecture seule **`Document.location`** renvoie un objet [`Location`](/fr/docs/Web/API/Location), contenant les informations sur l'URL du document et fournit des moyens pour modifier cette URL ou charger une autre URL.

Bien que `Document.location` soit un objet  `Location` en _lecture seule_, vous pouvez lui assigner un {{domxref("DOMString")}}. Cela signifie que vous pouvez dans la plupart des cas utiliser document.location comme s'il s'agissait d'une chaîne de caractères: `document.location = 'http://www.example.com'` est un synonyme de `document.location.href = 'http://www.example.com'`.

Pour récupérer uniquement l'URL en tant que chaîne de caractères, la propriété {{domxref("document.URL")}} peut également être utilisée.

Si le document courant n'est pas un contexte de navigation, la valeur renvoyée est _null_.

## Syntaxe

    locationObj = document.location
    document.location = 'http://www.mozilla.org' // équivalent à document.location.href = 'http://www.mozilla.org'

## Exemple

```js
console.log(document.location);
// Affiche un string-like
// "http://www.example.com/juicybits.html" dans la console
```

## Spécification

| Specification                                                                                                        | Status                           | Comment                                                  |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "history.html#the-location-interface", "Document.location")}} | {{Spec2('HTML WHATWG')}} | Pas de changement avec {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', "browsers.html#the-location-interface", "Document.location")}} | {{Spec2('HTML5 W3C')}}     | Définition initiale.                                     |

## Compatibilité des navigateurs

{{Compat("api.Document.location")}}

## Voir également

- L'interface de la valeur renvoyée, {{domxref("Location")}}.
- Une information similaire mais attachée au contexte de navigation, {{domxref("Window.location")}}
