---
title: downloads.BooleanDelta
slug: Mozilla/Add-ons/WebExtensions/API/downloads/BooleanDelta
tags:
  - API
  - Add-ons
  - BooleanDelta
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - downloads
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/BooleanDelta
---
{{AddonSidebar()}}

Le type `BooleanDelta` de l'API {{WebExtAPIRef("downloads")}} représente la différence entre deux booléens.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `current`{{optional_inline}}
  - : Un `boolean` représentant la valeur booléenne actuelle.
- `previous`{{optional_inline}}
  - : Un `boolean` représentant la valeur booléenne précédente.

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.BooleanDelta")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.downloads`](https://developer.chrome.com/extensions/downloads).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

<div class="hidden"><pre> // Copyright 2015 Les auteurs de chrome. Tous les droits sont réservés.
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
