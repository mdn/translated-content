---
title: browserSettings.zoomFullPage
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomFullPage
---

{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} dont la valeur sous-jaccente est un booléen.

Par défaut, le zoom s'applique à la page web entière. En utilisant le [Zoom Text Only setting](https://support.mozilla.org/fr/kb/taille-police-zoom-augmenter-taille-pages#w_daefinir-un-niveau-de-zoom-par-daefaut-pour-tous-les-sites-web) les utilisateurs/utilisatrices peuvent choisir de zoomer uniquement le texte de la page. Ce réglage permet à une web extension de modifier et de déterminer la valeur du paramètre, le zoom est appliqué à la page entière ou bien au texte seulement.

Valeurs du paramètre:

- `true`: le zoom s'applique à la page web en entier (par défaut).
- `false`: le zoom s'applique au texte de la page web seulement.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Mettre le réglage à `false`:

```js
function afficherResultat(resultat) {
  console.log(`Le paramètre a été modifié: ${resultat}`);
}

browser.browserSettings.zoomFullPage
  .set({ value: false })
  .then(afficherResultat);
```

{{WebExtExamples}}
