---
title: window.navigator.isLocallyAvailable
slug: Web/API/Navigator/mozIsLocallyAvailable
tags:
  - Référence_du_DOM_Gecko
translation_of: Web/API/Navigator/mozIsLocallyAvailable
---
{{ ApiRef() }}

### Résumé

Permet de déterminer si une ressource donnée est disponible.

### Syntaxe

    window.navigator.isLocallyAvailable(uri,ifOffline);

- `uri` est l'URI de la ressource dont la disponibilité doit être vérifiée, sous la forme d'une chaîne.
- `ifOffline` permet de spécifier si le cache de ressources hors ligne doit être vérifié ; indiquez `true` pour prendre en compte le cache de ressources hors ligne.

### Exemple

    var disponible = navigator.isLocallyAvailable("my-image-file.png", true);
    if (disponible) {
      /* la ressource hors ligne est présente */
    } else {
      alert("Certaines ressources nécessaires ne sont pas disponibles tant que vous ne serez pas connecté au réseau.");
    }

### Notes

{{ Note("Des exceptions de sécurité peuvent se produire si l\'URI demandée n\'est pas de la même origine.") }}

### Spécification

Aucune ; cependant certaines informations sont disponibles : [Marking Resources for Offline Use](http://www.campd.org/stuff/Offline%20Cache.html)
