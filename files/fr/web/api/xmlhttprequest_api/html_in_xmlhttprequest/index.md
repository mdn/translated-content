---
title: HTML dans XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest
l10n:
  sourceCommit: dbf313c424a43722626f369d5a8fb6bd1a1fafb7
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

La spécification W3C de {{DOMxRef("XMLHttpRequest")}} ajoute la prise en charge de l'analyse [HTML](/fr/docs/Web/HTML) à {{DOMxRef("XMLHttpRequest")}}, qui ne prenait initialement en charge que l'analyse {{Glossary("XML")}}. Cette fonctionnalité permet aux applications Web d'obtenir une ressource HTML sous forme de {{Glossary("DOM")}} analysé en utilisant `XMLHttpRequest`.

Pour obtenir un aperçu de l'utilisation générale de `XMLHttpRequest`, voir [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Limitations

Pour décourager l'utilisation synchrone de `XMLHttpRequest`, la prise en charge de HTML n'est pas disponible en mode synchrone. De plus, la prise en charge de HTML n'est disponible que si la propriété {{DOMxRef("XMLHttpRequest.responseType", "responseType")}} a été définie sur `"document"`. Cette limitation évite de perdre du temps à analyser inutilement le HTML lorsque le code hérité utilise `XMLHttpRequest` en mode par défaut pour récupérer {{DOMxRef("XMLHttpRequest.responseText", "responseText")}} pour les ressources `text/html`. De plus, cette limitation évite les problèmes avec le code hérité qui suppose que {{DOMxRef("XMLHttpRequest.responseXML", "responseXML")}} est `null` pour les pages d'erreur HTTP (qui ont souvent un corps de réponse `text/html`).

## Utilisation

Récupérer une ressource HTML sous forme de DOM en utilisant {{DOMxRef("XMLHttpRequest")}} fonctionne de la même manière que la récupération d'une ressource XML sous forme de DOM en utilisant `XMLHttpRequest`, sauf que vous ne pouvez pas utiliser le mode synchrone et que vous devez explicitement demander un document en assignant la chaîne de caractères `"document"` à la propriété {{DOMxRef("XMLHttpRequest.responseType", "responseType")}} de l'objet `XMLHttpRequest` après avoir appelé {{DOMxRef("XMLHttpRequest.open", "open()")}} mais avant d'appeler {{DOMxRef("XMLHttpRequest.send", "send()")}}.

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseXML.title);
};
xhr.open("GET", "fichier.html");
xhr.responseType = "document";
xhr.send();
```

## Encodage des caractères

Si l'encodage des caractères est déclaré dans l'en-tête HTTP {{HTTPHeader("Content-Type")}}, cet encodage des caractères est utilisé. À défaut, si un marqueur d'ordre des octets est présent, l'encodage indiqué par ce marqueur est utilisé. À défaut, si un élément HTML {{HTMLElement("meta")}} déclare l'encodage dans les 1024 premiers octets du fichier, cet encodage est utilisé. Sinon, le fichier est décodé en UTF-8.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("XMLHttpRequest")}}
- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
