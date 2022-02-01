---
title: Document.currentScript
slug: Web/API/Document/currentScript
tags:
  - API
  - DOM
  - Propriété
  - Reference
  - Script
translation_of: Web/API/Document/currentScript
---
{{ApiRef("DOM")}}

Retourne l'élément {{HTMLElement("script")}} dont le script est en cours de traitement.

## Syntaxe

    var curScriptElement = document.currentScript;

## Exemple

Cet exemple vérifie si le script s'exécute de manière asynchrone :

```js
if (document.currentScript.async) {
  console.log("Exécution asynchrone");
} else {
  console.log("Exécution synchrone");
}
```

[Voir l'exemple sur une page](/samples/html/currentScript.html)

## Notes

Il est important de noter que l'élément {{HTMLElement("script")}} ne sera pas référencé si le code dans le script est appelé par une fonction de rappel ou par un gestionnaire d'événements ; seul sera référencé l'élément alors qu'il est initialement en cours d'exécution.

## Spécifications

| Spécification                                                                                                                | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("HTML WHATWG", "dom.html#dom-document-currentscript", "Document.currentScript")}} | {{Spec2("HTML WHATWG")}} | Définition initiale |

## Compatibilité navigateur

{{Compat("api.Document.currentScript")}}

## Voir aussi

- {{HTMLElement("script")}}
- {{domxref("document.onafterscriptexecute")}}
- {{domxref("document.onbeforescriptexecute")}}
