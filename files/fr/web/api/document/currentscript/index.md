---
title: "Document : propriété currentScript"
short-title: currentScript
slug: Web/API/Document/currentScript
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

La propriété **`currentScript`** de l'interface {{DOMxRef("Document")}} retourne l'élément HTML {{HTMLElement("script")}} dont le script est actuellement en cours de traitement et [n'est pas un module JavaScript <sup>(ang.)</sup>](https://github.com/whatwg/html/issues/997). (Pour les modules, utilisez [`import.meta`](/fr/docs/Web/JavaScript/Reference/Operators/import.meta) à la place.)

Il est important de noter que l'élément HTML {{HTMLElement("script")}} ne sera pas référencé si le code dans le script est appelé par une fonction de rappel ou par un gestionnaire d'évènements&nbsp;; seul sera référencé l'élément alors qu'il est initialement en cours d'exécution.

## Valeur

Un objet {{DOMxRef("HTMLScriptElement")}} ou `null`.

## Exemples

Cet exemple vérifie si le script s'exécute de manière asynchrone&nbsp;:

```js
if (document.currentScript.async) {
  console.log("Exécution asynchrone");
} else {
  console.log("Exécution synchrone");
}
```

[Voir l'exemple en direct <sup>(angl.)</sup>](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété [`import.meta`](/fr/docs/Web/JavaScript/Reference/Operators/import.meta)
- L'élément HTML {{HTMLElement("script")}}
- L'évènement {{DOMxRef("document.afterscriptexecute_event", "afterscriptexecute")}} de `Document`
- L'évènement {{DOMxRef("document.beforescriptexecute_event", "beforescriptexecute")}} de `Document`
