---
title: Window.applicationCache
slug: Web/API/Window/applicationCache
translation_of: Web/API/Window/applicationCache
---
> **Attention :** Le cache d'application est obsolète depuis Firefox 44, et n'est plus disponible dans un contexte non sécurisé depuis Firefox 60 ({{bug(1354175)}}, actuellemet Nightly/Beta seulement). Ne pas l'utiliser sur des sites hors lignes — envisager l'utilisation de [service workers](/en-US/docs/Web/API/Service_Worker_API) à la place.

{{APIRef}}

Retourne une référence à l'objet du cache d'application pour la fenêtre.

## Syntaxe

    cache = window.applicationCache

### Paramètres

- `cache` est une référence objet pour un {{domxref("OfflineResourceList")}}.

## Spécification

- {{spec("http://www.w3.org/TR/2008/WD-html5-20080122/#appcache","HTML 5","WD")}}

## Voir aussi

- [Using Application Cache](/en-US/docs/HTML/Using_the_application_cache)
