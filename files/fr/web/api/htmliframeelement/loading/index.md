---
title: "HTMLIFrameElement : propriété loading"
short-title: loading
slug: Web/API/HTMLIFrameElement/loading
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`loading`** de l'interface {{DOMxRef("HTMLIFrameElement")}} est une chaîne de caractères qui fournit une indication à l'{{Glossary("user agent", "agent utilisateur")}} pour savoir si l'élément HTML {{HTMLElement("iframe")}} doit être chargée immédiatement au chargement de la page, ou seulement lorsqu'elle est nécessaire.

Cela peut être utilisé pour optimiser le chargement du contenu du document.
Les cadres intégrés (<i lang="en">iframe</i> en anglais) visibles lors du chargement de la page peuvent être téléchargés immédiatement (de façon anticipée), tandis que les cadres intégrés susceptibles d'être hors écran au chargement initial peuvent être téléchargés de façon différée — juste avant qu'elles n'apparaissent dans la {{Glossary("visual viewport", "zone d'affichage visuelle")}} de la fenêtre.

## Valeur

Une chaîne de caractères fournissant une indication à l'agent utilisateur sur la meilleure façon de planifier le chargement du cadre intégré.
Les valeurs possibles sont&nbsp;:

- `eager`
  - : Charger le cadre intégré dès que l'élément est traité.
    Il s'agit de la valeur par défaut.
- `lazy`
  - : Charger le cadre intégré lorsque le navigateur estime qu'elle sera probablement nécessaire dans un avenir proche.

## Notes d'utilisation

### JavaScript doit être activé

Le chargement n'est différé que lorsque JavaScript est activé, quelle que soit la valeur de cette propriété.

Il s'agit d'une mesure anti-pistage, car si un agent utilisateur prenait en charge le chargement différé lorsque le script est désactivé, il serait toujours possible pour un site de suivre la position approximative de défilement d'un·e utilisateur·ice tout au long d'une session, en plaçant stratégiquement des cadres intégrés (<i lang="en">iframe</i> en anglais) dans le balisage d'une page de sorte qu'un serveur puisse suivre combien sont demandés et quand.

### Moment de l'évènement `load`

L'évènement {{DOMxRef("Window.load_event", "load")}} est déclenché lorsque le document a été entièrement traité.

Les cadres intégrés (<i lang="en">iframe</i> en anglais) chargés de façon différée n'affectent pas le moment de l'évènement `load` même si le cadre intégré est dans la zone d'affichage visuelle et est donc récupéré au chargement de la page.
Tous les cadres intégrés chargés de façon anticipée dans le document doivent être récupérés avant que l'évènement `load` puisse être déclenché.

## Exemples

L'exemple ci-dessous montre comment définir un cadre intégré (<i lang="en">iframe</i> en anglais) à chargement différé puis l'ajouter à un `<div>` dans le document.
Le cadre ne sera alors chargé que lorsqu'il sera sur le point de devenir visible.

```js
// Définir une iframe avec chargement différé
const iframe = document.createElement("iframe");
iframe.src = "https://example.com";
iframe.width = 320;
iframe.height = 240;
iframe.loading = "lazy";

// Ajouter à un élément div avec la classe frameDiv
const frameDiv = document.querySelector("div.frameDiv");
frameDiv.appendChild(iframe);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("iframe")}}
- [Apprendre&nbsp;: Performance web](/fr/docs/Learn_web_development/Extensions/Performance)
- [Chargement différé](/fr/docs/Web/Performance/Guides/Lazy_loading) dans le guide de performance web MDN
- [Il est temps de charger en différé les cadres intégrés hors écran&nbsp;! <sup>(angl.)</sup>](https://web.dev/articles/iframe-lazy-loading) sur web.dev
