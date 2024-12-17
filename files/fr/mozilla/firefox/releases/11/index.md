---
title: Firefox 11 pour les développeurs
slug: Mozilla/Firefox/Releases/11
---

{{FirefoxSidebar}}

Firefox 11, basé sur Gecko 11.0, est sorti le 13 mars 2012. Cet article fournit des informations sur les nouvelles fonctionnalités et les principaux bugs corrigés, ainsi que des liens vers une documentation plus détaillée pour les développeurs web et d'extensions.

## Changements pour les développeurs Web

### HTML

- Les attributs `muted` et `loop` pour les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}} ont été implémentés.

### DOM

- La propriété {{domxref("element.outerHTML")}} supporte maintenant les éléments HTML.
- [`XMLHttpRequest` supporte l'analyse HTML](/fr/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Suppression du support des attributs `responseType` et `withCredentials` {{domxref("XMLHttpRequest")}} lors de requêtes synchrones. Si vous tentez de le faire l'exception `NS_ERROR_DOM_INVALID_ACCESS_ERR` est envoyée. Ce changement a été proposé au W3C pour être normalisé.
- la nouvelle méthode {{domxref("window.navigator.mozVibrate()")}} vous permet de faire vibrer le périphérique supporté, c'est implémenté dans Gecko en tant que `mozVibrate()`.
- {{domxref("window.navigator.mozApps")}} retourne un objet [Apps](/fr/docs/DOM/Apps), vous pouvez l'utiliser pour installer et gérer des [applications Web ouvertes](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings).
- Les évènements `MozBeforePaint` ne sont plus exploités. Ceux qui ont utilisé {{domxref("window.requestAnimationFrame", "mozRequestAnimationFrame()")}} devraient transmettre une fonction de rappel à la place.
- La prise en charge de l'annulation des demandes d'animation de trame a été ajouté, {{domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} retourne désormais la valeur ID de la demande, que vous pouvez passer à {{domxref("window.cancelAnimationFrame", "window.mozCancelAnimationFrame()")}} pour annuler la demande.
- Plusieurs constructeurs {{domxref("Event")}} (`Event`, HTML events, `UIEvent` et `MouseEvent`) introduits dans les spécifications DOM4 sont à présent supportés.
- {{domxref("window.navigator.mozBattery", "Battery API")}} est désormais activée par défaut.
- Le support des propriétés [`defaultMuted`](/fr/docs/Web/API/HTMLMediaElement), [`loop`](/fr/docs/Web/API/HTMLMediaElement) et [`muted`](/fr/docs/Web/API/HTMLMediaElement) de [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) a été ajouté.
- L'appel {{domxref("document.mozCancelFullScreen()")}} restaure à présent l'élément précédemment en plein-écran, si un autre élément était en mode plein-écran lorsque la méthode {{domxref("element.mozRequestFullScreen()")}} a été appelée.
- La méthode {{domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} ne supporte plus une forme sans argument. Cela n'est pas beaucoup utilisé et il est peu probable que ça fasse partie de la norme.
- Les images SVG peuvent à présent être dessinées dans un canvas sans [entacher le canvas](/fr/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).
- La propriété non-standard `countryCode` de l'interface `GeoPositionAddress` a été supprimée, voir `nsIDOMGeoPositionAddress`.
- [Les évènements Server-sent](/fr/docs/Web/API/Server-sent_events) supportent désormais [CORS](/fr/docs/Web/HTTP/CORS).
- Dans le passé, lorsque l'utilisateur suivait un lien, les valeurs définies sur l'objet {{domxref("window.navigator")}} été retenus par la nouvelle page. Maintenant un nouvel objet `navigator` est crée pour la nouvelle page. Cela rend le comportement de Firefox identique aux autres navigateurs.

### CSS

- La propriété [`text-size-adjust`](/fr/docs/Web/CSS/text-size-adjust) est à présent supportée.
- Les [Règles Conditionnelles](/fr/docs/CSS/CSS3#Conditional_Rules) [CSS3](/fr/docs/CSS/CSS3) sont à présent mieux supportées : les déclarations imbriquées peuvent désormais être ajoutées à [@media](/fr/docs/Web/CSS/@media), [@-moz-document](/fr/docs/Web/CSS/@document). (Voir [CSS Syntax](/fr/docs/Web/CSS/Syntax) et [CSS at-rules](/fr/docs/Web/CSS/At-rule)).

### SVG

- L'interface DOM {{domxref("SVGSVGElement")}} supporte désormais la méthode `getElementById`.

### WebSocket

- L'API [WebSocket](/fr/docs/Web/API/WebSockets_API) supporte désormais les messages binaires (voir [bug Firefox 676439](https://bugzil.la/676439)).
- Le protocole et l'API ont été mis à jour suivant la dernière version de la spécification et l'API n'a plus de préfixe (voir [bug Firefox 666349](https://bugzil.la/666349) et [bug Firefox 695635](https://bugzil.la/695635)).
- Auparavant, les messages envoyés et reçus à l'aide de WebSockets dans Firefox été limités à 16 Mo en taille, désormais ils peuvent aller jusqu'à 2 Go (bien que les limitations de capacité de mémoire peut les empêcher d'être plus grand, Firefox le supporte).

### IndexedDB

- Le support de [IDBFactory.cmp()](/fr/docs/IndexedDB/IDBFactory#cmp%28%29) a été ajouté.
- Une [clé IndexedDB](/fr/docs/Web/API/IndexedDB_API/Basic_Terminology#section_6) peut également être de l'un des types suivants : Date, Arrays et Float (et pas seulement String et Integer).

### Réseau

- La modification dans Firefox 8 concernant la suppression des guillemets comme délimiteurs pour {{rfc(2231)}} et {{rfc(5987)}} a été annulée, car cela a cassé certains sites, y compris Outlook Web Access.

### Outils de développement

- L'[Inspecteur de page](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) offre désormais une [vue 3D](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) si votre système supporte [WebGL](/fr/docs/Web/API/WebGL_API).
- Le nouvel [Editeur de styles](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) offre un moyen d'éditer et de composer des feuilles de style CSS en temps réel.
- La [fonctionnalité Afficher la source](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) utilise désormais le nouveau parseur HTML5 au lieu du vieux parseur HTML.

## Changements pour les développeurs de Mozilla et de modules complémentaires

### Module de code JavaScript

#### NetUtil.jsm

- [`readInputStreamToString()`](</fr/docs/JavaScript_code_modules/NetUtil.jsm#readInputStreamToString()>) a un nouveau paramètre (optionnel) à configurer pour l'interprétation du jeu de caractères lors de la lecture du flux d'entrée.

#### Nouveau module de code JavaScript

- [`source-editor.jsm`](/fr/docs/JavaScript_code_modules/source-editor.jsm)
  - : Offre un moyen pratique facile d'éditeur de code source que vous pouvez utiliser dans vos add-ons. C'est le même éditeur utilisé par l'[Ardoise](/fr/docs/Outils/Ardoise) et les autres outils de développement intégrés dans Firefox.

### Changements dans les interfaces

- L'interface `mozIAsyncHistory` a une nouvelle méthode `mozIAsyncHistory.isURIVisited()` pour vérifier si une URI a été visitée.
- Une nouvelle interface `mozIVisitStatusCallback` a été ajoutée pour fournir une fonctionnalité de traitement des rappels pour `mozIAsyncHistory.isURIVisited()`.
- L'interface `nsIMacDockSupport` interface now supports adding a text badge to the application's icon in the Dock using its new `badgeText` attribute.
- Dans l'interface `nsINavHistoryResultObserver`, vous devez à présent implémenter `nsINavHistoryResultObserver.containerStateChanged()` au lieu des anciennes méthodes `containerOpened()` et `containerClosed()`.

#### Interface supprimées

Les interfaces suivantes ont été supprimées car elles n'étaient plus indispensables :

- `nsICharsetResolver`
- `nsIDOMNSElement`, voir [bug Firefox 707576](https://bugzil.la/707576) ; utilisez `nsIDOMElement` à la place.

### Changement lié au thème

- Le fichier `omni.jar` se nomme désormais [`omni.ja`](</fr/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>).

### Changement dans les préférences

- `"ui.tooltipDelay"`
  - : Définit le délai, en millisecondes, entre le moment où le curseur de la souris s'arrête et l'affichage d'une info-bulle.

### Changement dans le système de compilation

- L'option de compilation `--enable-tracejit` a été supprimée.

### Autre changement

- Les extensions qui n'ont pas été mises à jour depuis longtemps sont supposées ne plus être compatible par défaut, ce qui concerne actuellement les add-ons qui indiquent 4.0 pour `maxVersion`.

## Voir aussi

{{Firefox_for_developers('10')}}
