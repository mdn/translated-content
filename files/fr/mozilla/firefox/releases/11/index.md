---
title: Firefox 11 pour les développeurs
short-title: Firefox 11
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 11 est sorti le 13 mars 2012. Cet article fournit des informations sur les nouvelles fonctionnalités et les principaux bugs corrigés dans cette version, ainsi que des liens vers une documentation plus détaillée pour les développeur·euse·s web et d'extensions.

## Changements pour les développeur·euse·s web

### HTML

- Les attributs `muted` et `loop` pour les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}} ont été implémentés.

### DOM

- La propriété {{DOMxRef("element.outerHTML")}} est désormais prise en charge sur les éléments HTML.
- [`XMLHttpRequest` prend en charge l'analyse HTML](/fr/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Suppression de la prise en charge de l'utilisation des attributs `responseType` et `withCredentials` de {{DOMxRef("XMLHttpRequest")}} lors de requêtes synchrones. Tenter de le faire déclenche une exception `NS_ERROR_DOM_INVALID_ACCESS_ERR`. Ce changement a été proposé au W3C pour standardisation.
- La nouvelle méthode {{DOMxRef("Navigator/vibrate", "navigator.mozVibrate()")}} permet de faire vibrer l'appareil lorsque c'est pris en charge&nbsp;; cela est implémenté sous le nom `mozVibrate()` sur Gecko.
- `navigator.mozApps` retourne un objet `Apps` que vous pouvez utiliser pour installer et gérer des [applications web ouvertes](/fr/docs/Web/Progressive_web_apps).
- Les évènements `MozBeforePaint` ne sont plus émis. Les consommatrices et consommateurs de {{DOMxRef("window.requestAnimationFrame", "mozRequestAnimationFrame()")}} doivent désormais passer une fonction de rappel à la place.
- La prise en charge de l'annulation des requêtes d'animation frame a été ajoutée&nbsp;; {{DOMxRef("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} retourne désormais un identifiant de requête, que vous pouvez passer à {{DOMxRef("window.cancelAnimationFrame", "window.mozCancelAnimationFrame()")}} pour annuler la requête.
- Plusieurs constructeurs {{DOMxRef("Event")}} (`Event`, évènements HTML, `UIEvent` et `MouseEvent`) introduits dans les spécifications DOM4 sont désormais pris en charge.
- L'[API Battery](/fr/docs/Web/API/Battery_Status_API) est désormais activée par défaut.
- La prise en charge des propriétés [`defaultMuted`](/fr/docs/Web/API/HTMLMediaElement), [`loop`](/fr/docs/Web/API/HTMLMediaElement) et [`muted`](/fr/docs/Web/API/HTMLMediaElement) sur [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) a été ajoutée.
- Appeler {{DOMxRef("Document/exitFullscreen")}} restaure désormais l'élément précédemment en plein écran si un autre élément était en mode plein écran lorsque la méthode {{DOMxRef("Element/requestFullScreen")}} de l'élément courant a été appelée.
- La méthode {{DOMxRef("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} ne prend plus en charge la forme sans argument. Cette forme était peu utilisée et il est peu probable qu'elle fasse partie du standard.
- Un SVG utilisé comme image peut désormais être dessiné dans un canvas sans [polluer le canvas](/fr/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).
- La propriété non standard `countryCode` de l'interface `GeoPositionAddress` a été supprimée&nbsp;; voir `nsIDOMGeoPositionAddress`.
- [Les évènements envoyés par le serveur](/fr/docs/Web/API/Server-sent_events) prennent désormais en charge [CORS](/fr/docs/Web/HTTP/Guides/CORS).
- Auparavant, lorsque l'utilisateur suivait un lien, les valeurs définies sur l'objet {{DOMxRef("window.navigator")}} étaient conservées par la nouvelle page. Désormais, un nouvel objet `navigator` est créé pour la nouvelle page. Cela rend Firefox conforme au comportement des autres navigateurs.

### CSS

- La propriété [`text-size-adjust`](/fr/docs/Web/CSS/Reference/Properties/text-size-adjust) est à présent supportée.
- [CSS3](/fr/docs/Web/CSS) [Règles conditionnelles](/fr/docs/Web/CSS/Guides/Syntax/At-rules#règles_de_bloc) sont à présent mieux supportées&nbsp;: les déclarations imbriquées peuvent désormais être ajoutées à [@media](/fr/docs/Web/CSS/Reference/At-rules/@media), [@-moz-document](/fr/docs/Web/CSS/Reference/At-rules/@document). (Voir [Syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction) et [Règles at-rules CSS](/fr/docs/Web/CSS/Guides/Syntax/At-rules)).

### JavaScript

_Aucun changement._

### SVG

- L'interface DOM {{DOMxRef("SVGSVGElement")}} supporte désormais la méthode `getElementById`.

### WebSocket

- L'API [WebSocket](/fr/docs/Web/API/WebSockets_API) supporte désormais les messages binaires (voir [bug Firefox 676439 <sup>(angl.)</sup>](https://bugzil.la/676439)).
- Le protocole et l'API ont été mis à jour suivant la dernière version de la spécification et l'API n'a plus de préfixe (voir [bug Firefox 666349 <sup>(angl.)</sup>](https://bugzil.la/666349) et [bug Firefox 695635 <sup>(angl.)</sup>](https://bugzil.la/695635)).
- Auparavant, les messages envoyés et reçus à l'aide de WebSockets dans Firefox été limités à 16 Mo en taille, désormais ils peuvent aller jusqu'à 2 Go (bien que les limitations de capacité de mémoire peut les empêcher d'être plus grand, Firefox le supporte).

### IndexedDB

- Le support de [IDBFactory.cmp()](</fr/docs/IndexedDB/IDBFactory#cmp()>) a été ajouté.
- Une [clé IndexedDB](/fr/docs/Web/API/IndexedDB_API/Basic_Terminology#section_6) peut également être de l'un des types suivants : Date, Arrays et Float (et pas seulement String et Integer).

### Réseau

- La modification dans Firefox 8 concernant la suppression des guillemets comme délimiteurs pour {{RFC(2231)}} et {{RFC(5987)}} a été annulée, car cela a cassé certains sites, y compris Outlook Web Access.

### Outils de développement

- L'[Inspecteur de page <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) offre désormais une [vue 3D <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) si votre système supporte [WebGL](/fr/docs/Web/API/WebGL_API).
- Le nouvel [Editeur de styles <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) offre un moyen d'éditer et de composer des feuilles de style CSS en temps réel.
- La [fonctionnalité Afficher la source <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) utilise désormais le nouveau parseur HTML5 au lieu du vieux parseur HTML.

## Changements pour les développeur·euse·s de Mozilla et de modules complémentaires

### Module de code JavaScript

#### NetUtil.jsm

- `readInputStreamToString()` a un nouveau paramètre (optionnel) à configurer pour l'interprétation du jeu de caractères lors de la lecture du flux d'entrée.

#### Nouveau module de code JavaScript

- [`source-editor.jsm` <sup>(angl.)</sup>](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/source-editor.jsm)
  - : Offre un moyen pratique facile d'éditeur de code source que vous pouvez utiliser dans vos add-ons. C'est le même éditeur utilisé par l'_Ardoise_ et les autres outils de développement intégrés dans Firefox.

### Changements dans les interfaces

- L'interface `mozIAsyncHistory` a une nouvelle méthode `mozIAsyncHistory.isURIVisited()` pour vérifier si une URI a été visitée.
- Une nouvelle interface `mozIVisitStatusCallback` a été ajoutée pour fournir une fonctionnalité de traitement des rappels pour `mozIAsyncHistory.isURIVisited()`.
- L'interface `nsIMacDockSupport` interface now supports adding a text badge to the application's icon in the Dock using its new `badgeText` attribute.
- Dans l'interface `nsINavHistoryResultObserver`, vous devez à présent implémenter `nsINavHistoryResultObserver.containerStateChanged()` au lieu des anciennes méthodes `containerOpened()` et `containerClosed()`.

#### Interface supprimées

Les interfaces suivantes ont été supprimées car elles n'étaient plus indispensables&nbsp;:

- `nsICharsetResolver`
- `nsIDOMNSElement`, voir [bug Firefox 707576 <sup>(angl.)</sup>](https://bugzil.la/707576)&nbsp;; utilisez `nsIDOMElement` à la place.

### Changement lié au thème

- Le fichier `omni.jar` se nomme désormais [`omni.ja`](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/en-US/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29).

### Changement dans les préférences

- `"ui.tooltipDelay"`
  - : Définit le délai, en millisecondes, entre le moment où le curseur de la souris s'arrête et l'affichage d'une info-bulle.

### Changement dans le système de compilation

- L'option de compilation `--enable-tracejit` a été supprimée.

### Autre changement

- Les extensions qui n'ont pas été mises à jour depuis longtemps sont supposées ne plus être compatible par défaut, ce qui concerne actuellement les add-ons qui indiquent 4.0 pour `maxVersion`.
