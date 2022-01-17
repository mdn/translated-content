---
title: downloads.pause()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/pause
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - downloads
  - pause
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/pause
---
{{AddonSidebar()}}

La fonction **`pause()`** de l'API {{WebExtAPIRef("downloads")}} interrompt un téléchargement.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var pausing = browser.downloads.pause(
  downloadId      // integer
)
```

### Paramètres

- `downloadId`
  - : Un `integer` représetant l'`id` du téléchargement à mettre en pause.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si l'appel a réussi, le téléchargement sera mis en pause et la promesse sera satisfaite sans aucun argument. Si l'appel échoue, la promesse sera rejetée avec un message d'erreur. L'appel échouera si le téléchargement n'est pas actif: par exemple, parce qu'il a fini le téléchargement.

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.pause")}}

## Exemples

```js
function onPaused() {
  console.log(`Paused download`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var pausing = browser.downloads.pause(downloadId);
pausing.then(onPaused, onError);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.downloads`](https://developer.chrome.com/extensions/downloads).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

<div class="hidden"><pre>// Copyright 2015 Les auteurs de chrome. Tous les droits sont réservés.
//
// Redistribution et utilisation sous forme source et binaire, avec ou sans
// modification, sont autorisées à condition que les conditions suivantes soient
// rencontré:
//
// * Les redistributions de code source doivent conserver le copyright ci-dessus
// remarque, cette liste de conditions et la clause de non-responsabilité suivante.
// * Les redistributions sous forme binaire doivent reproduire ce qui précède
// avis de droit d'auteur, cette liste de conditions et la clause de non-responsabilité suivante // dans la documentation et / ou les autres éléments fournis avec le
// Distribution.
// * Ni le nom de Google Inc. ni les noms de ses
// les contributeurs peuvent être utilisés pour approuver ou promouvoir des produits dérivés de
// ce logiciel sans autorisation écrite préalable spécifique.
//
// CE LOGICIEL EST FOURNI PAR LES TITULAIRES DE COPYRIGHT ET LES CONTRIBUTEURS
// "EN L'ETAT" ET TOUTE GARANTIE EXPRESSE OU IMPLICITE, Y COMPRIS MAIS NON
// LIMITE AUX GARANTIES IMPLICITES DE QUALITÉ MARCHANDE ET D'ADÉQUATION À
// UN OBJECTIF PARTICULIER EST REFUSÉ. EN AUCUN CAS, LE COPYRIGHT
// LE PROPRIÉTAIRE OU LES CONTRIBUTEURS SONT RESPONSABLES DE TOUT ASSISTANCE DIRECTE, INDIRECTE, ACCESSOIRE,
// DOMMAGES PARTICULIERS, EXEMPLAIRES OU CONSÉCUTIFS (Y COMPRIS, MAIS NON
// LIMITÉE À L'ACQUISITION DE MARCHANDISES OU DE SERVICES DE SUBSTITUTION; PERTE D'USAGE,
// DATA, OR PROFITS; OU INTERRUPTION COMMERCIALE) TOUTEFOIS CAUSÉE ET SUR TOUTE
// THÉORIE DE LA RESPONSABILITÉ, QU'IL SOIT UN CONTRAT, UNE RESPONSABILITÉ STRICTE OU UN TORT
// (INCLUANT LA NÉGLIGENCE OU AUTREMENT) SURVENANT DE TOUTE MANIÈRE DE L'UTILISER
// DE CE LOGICIEL, MÊME SI AVISÉ DE LA POSSIBILITÉ D'UN TEL DOMMAGE.
</pre></div>
