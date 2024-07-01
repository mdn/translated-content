---
title: Web Storage API
slug: Web/API/Web_Storage_API
---

{{DefaultAPISidebar("Web Storage API")}}

L'API **Web Storage** fournit des mécanismes par lesquels les navigateurs peuvent stocker des paires clé / valeur, d'une manière beaucoup plus intuitive que l'utilisation de cookies.

## Web Storage, concepts et utilisations

Les deux mécanismes au sein du web storage sont les suivantes:

- `sessionStorage` maintient une zone de stockage distinct pour chaque origine donnée qui est disponible pour la durée de la session de la page (tant que le navigateur est ouvert, y compris les rechargements et restaure)
- `localStorage` fait la même chose, mais persiste même lorsque le navigateur est fermé et rouvert.

Ces mécanismes sont disponibles via les propriétés {{domxref("Window.sessionStorage")}} et {{domxref("Window.localStorage")}} (pour être plus précis, pour le support des navigateurs, l'objet `Window` implemente le `WindowLocalStorage` et l'object `WindowSessionStorage`, dont les propriétés `localStorage` et `sessionStorage` dépendent) — L'appel de l'une de ces propriétés va créer une instance de l'objet {{domxref("Storage")}}, à travers de laquelle les éléments de données peuvent être définis, récupérés et éliminés. Un objet de stockage différent est utilisé pour le sessionStorage et le localStorage pour chaque origine — ils fonctionnent et sont contrôlés séparément.

> **Note :** À partir de Firefox 45, lorsque le navigateur se bloque / redémarre, la quantité de données sauvegardées par origine est limitée à 10 Mo. Cela a été mis en place pour éviter les problèmes de mémoire causés par une utilisation excessive du stockage Web.

> **Note :** L'accès au Web Storage à partir d'iframes externes est interdit si l'utilisateur a [désactivé les cookies tierce-partie](https://support.mozilla.org/en-US/kb/disable-third-party-cookies) (Firefox a adopté ce comportement à partir de la [version 43](/fr/docs/Mozilla/Firefox/Releases/43) et suivantes.)

> **Note :** Le <i lang="en">Web Storage</i> n'est pas identique au `mozStorage` (interfaces XPCOM de Mozilla vers SQLite) ou l'API <i lang="en">Session Store</i> (un utilitaire de stockage XPCOM utilisable par des extensions).

## Web Storage interfaces

- {{domxref("Storage")}}
  - : Vous permet d'ajouter, modifier, lire ou supprimer des données pour un domaine et un type de stockage (session ou local) donnés.
- {{domxref("Window")}}
  - : L'API Web Storage dérive de l'objet {{domxref("Window")}} avec 2 nouvelles propriétés — {{domxref("Window.sessionStorage")}} et {{domxref("Window.localStorage")}} — lesquelles donnent accès, pour le domaine courant, aux objets session et local {{domxref("Storage")}} respectivement.
- {{domxref("StorageEvent")}}
  - : L'événement `storage` est déclenché sur l'objet `Window` du document en cas de changement dans un espace de stockage.

## Exemples

Pour illustrer une utilisation typique du stockage Web, nous avons créé un exemple simple, appelé de manière imaginative [Web Storage Demo](https://github.com/mdn/dom-examples/tree/master/web-storage). La [landing page](https://mdn.github.io/dom-examples/web-storage/) fournit des commandes permettant de personnaliser la couleur, la police et l'image décorative. Lorsque vous choisissez différentes options, la page est instantanément mise à jour. De plus, vos choix sont stockés dans `localStorage`. Ainsi, lorsque vous quittez la page puis la rechargez plus tard, vos choix sont mémorisés. En outre, nous avons fourni une [event output page](https://mdn.github.io/dom-examples/web-storage/event.html) — Si vous chargez cette page dans un autre onglet, puis modifiez vos choix dans la page d'arrivée, vous verrez les informations de stockage mises à jour générées lors du déclenchement de [`StorageEvent`](/fr/docs/Web/API/StorageEvent).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Navigation privée / Modes incognito

De nos jours, la plupart des navigateurs prennent en charge une option de confidentialité appelée "mode Incognito" ou "navigation privée", qui permet de s'assurer que la session de navigation privée ne laisse aucune trace après la fermeture du navigateur. Ceci est fondamentalement incompatible avec le stockage Web pour des raisons évidentes. En tant que tels, les éditeurs de navigateurs expérimentent différents scénarios pour gérer cette incompatibilité.

La plupart des navigateurs ont opté pour une stratégie dans laquelle les API de stockage sont toujours disponibles et apparemment totalement fonctionnelles, à la différence près que toutes les données stockées sont effacées après la fermeture du navigateur. Pour ces navigateurs, il existe toujours différentes interprétations de ce qui devrait être fait avec les données stockées existantes (à partir d'une session de navigation normale). Devrait-il être disponible en lecture en mode privé? Certains navigateurs, notamment Safari, ont opté pour une solution dans laquelle le stockage est disponible, vide et doté d'un quota de 0 octets, ce qui rend impossible l'écriture de données.

Les développeuses et développeurs doivent connaître ces différentes implémentations et en tenir compte lors du développement de sites web en fonction des API de stockage web. Pour plus d'informations, consultez [cet article de blog du WHATWG (en anglais)](https://blog.whatwg.org/this-week-in-html-5-episode-30) qui traite spécifiquement de ce sujet.

## Voir aussi

- [Utiliser l'API Web Storage](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Limites de stockage du navigateur et critères d'éviction](/fr/docs/Web/API/API_IndexedDB/Browser_storage_limits_and_eviction_criteria)
- [HTML5 Storage API By Venkatraman](https://medium.com/@ramsunvtech/onfocus-html5-storage-apis-b45d92aa424b)
