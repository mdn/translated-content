---
title: Firefox 33 note de version pour les développeurs
short-title: Firefox 33
slug: Mozilla/Firefox/Releases/33
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 33 a été publié le 14 octobre 2014. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s web

### Outils de développement

Points forts&nbsp;:

- Fenêtre intrusive des écouteurs d'évènements
- Barre latérale `@media`
- Ajouter une nouvelle règle
- Éditer les images-clés
- Éditeur de courbes de Bézier cubiques
- Surligneur de transformation
- Désactivation persistante du cache
- Nouvelles commandes
- Préférences de l'éditeur
- WebIDE

Pour plus de détails, veuillez [consulter l'article sur Hacks <sup>(angl.)</sup>](https://hacks.mozilla.org/2014/07/event-listeners-popup-media-sidebar-cubic-bezier-editor-more-firefox-developer-tools-episode-33/). Un merci spécial aux 33 contributeur·ice·s qui ont ajouté [toutes les fonctionnalités et corrections <sup>(angl.)</sup>](https://mzl.la/1pGLFDs) dans cette version.

### CSS

- Ajout de la règle {{CSSxRef("@counter-style")}} ([bogue Firefox 966166 <sup>(angl.)</sup>](https://bugzil.la/966166)).
- Suppression des préfixes `ethiopic-numeric`, `persian`, `arabic-indic`, `devanagari`, `bengali`, `gurmukhi`, `gujarati`, `oriya`, `tamil`, `telugu`, `kannada`, `malayalam`, `thai`, `lao`, `myanmar`, `khmer`, `cjk-heavenly-stem`, `cjk-earthly-branch` dans {{CSSxRef("list-style-type")}} ([bogue Firefox 985825 <sup>(angl.)</sup>](https://bugzil.la/985825) et [bogue Firefox 1063856 <sup>(angl.)</sup>](https://bugzil.la/1063856)).
- Ajout de la prise en charge pour les styles de compteur `mongolian`, `disclosure-open` et `disclosure-closed` dans {{CSSxRef("list-style-type")}} ([bogue Firefox 982355 <sup>(angl.)</sup>](https://bugzil.la/982355) et [bogue Firefox 1063856 <sup>(angl.)</sup>](https://bugzil.la/1063856)).
- Correction des animations CSS avec une règle d'images-clés vide pour qu'il émettent également des évènements ([bogue Firefox 1004377 <sup>(angl.)</sup>](https://bugzil.la/1004377)).
- Ajout de la prise en charge de `rebeccapurple`, un nouveau nom de {{CSSxRef("&lt;color&gt;")}} défini dans CSS Colors niveau 4 ([bogue Firefox 1024642 <sup>(angl.)</sup>](https://bugzil.la/1024642)).
- Notre implémentation expérimentale de CSS Fonts niveau 3 progresse. Son activation est régie par la préférence `layout.css.font-features.enabled`, activée par défaut dans Nightly. Les nouvelles fonctionnalités implémentées sont&nbsp;:
  - L'algorithme de repli de {{CSSxRef("font-variant-caps")}}, créant des alternatives synthétiques pour les glyphes manquants ([bogue Firefox 961558 <sup>(angl.)</sup>](https://bugzil.la/961558)).
  - La propriété CSS {{CSSxRef("font-synthesis")}} a été implémentée ([bogue Firefox 871453 <sup>(angl.)</sup>](https://bugzil.la/871453)).

### HTML

- Ajout de la prise en charge expérimentale pour l'élément {{HTMLElement("picture")}} ([bogue Firefox 870022 <sup>(angl.)</sup>](https://bugzil.la/870022)), derrière la préférence `dom.image.picture.enabled` (désactivée par défaut).
- L'élément {{HTMLElement("label")}}, en particulier sans l'attribut [`for`](/fr/docs/Web/HTML/Reference/Elements/label#for), ne s'applique plus à un champ `<input type=hidden>` ([bogue Firefox 597650 <sup>(angl.)</sup>](https://bugzil.la/597650)). Le comportement précédent n'était pas conforme à la spécification.
- L'annotation de lien `noreferrer` a été implémentée sur les éléments {{HTMLElement("a")}}. `<a rel="noreferrer">` n'inclut pas l'URL du référent dans la requête HTTP envoyée pour le récupérer ([bogue Firefox 530396 <sup>(angl.)</sup>](https://bugzil.la/530396)). Notez que cela ne fonctionne que pour les liens dans la page, pas pour les liens qui sont cliqués par le biais de l'interface utilisateur, comme avec les menus contextuels.
- Sur Android, prise en charge de deux nouvelles valeurs pour l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name) de {{HTMLElement("meta")}}&nbsp;: `msapplication-TileImage` et `msapplication-TileColor` ([bogue Firefox 1014712 <sup>(angl.)</sup>](https://bugzil.la/1014712)). Exemple&nbsp;:

  ```html
  <meta name="msapplication-TileImage" content="images/my-img-144.png" />
  <meta name="msapplication-TileColor" content="#d83434" />
  ```

### JavaScript

- La méthode non standard `Number.toInteger()` a été supprimée ([bogue Firefox 1022396 <sup>(angl.)</sup>](https://bugzil.la/1022396)).
- Les méthodes {{JSxRef("Map.prototype.set()")}}, {{JSxRef("WeakMap.prototype.set()")}} et {{JSxRef("Set.prototype.add()")}} peuvent désormais être mises à la chaîne, retournent leurs objets équivalents et ne retournent plus `undefined` ([bogue Firefox 1031632 <sup>(angl.)</sup>](https://bugzil.la/1031632)).
- Un [paramètre par défaut](/fr/docs/Web/JavaScript/Reference/Functions/Default_parameters) est évalué avant les déclarations de fonction à l'intérieur du corps de la fonction, donc ces fonctions ne peuvent pas être référencées depuis le paramètre par défaut ([bogue Firefox 1022962 <sup>(angl.)</sup>](https://bugzil.la/1022962)).
- Les propriétés abrégées sont désormais autorisées dans les littéraux d'objet&nbsp;: si elles ne sont pas explicitement définies, les clés des propriétés sont initialisées par des variables du même nom. Par exemple, `function f(x, y) { return {x, y}; }` est équivalent à `function f(x, y) { return {x: x, y: y}; }` ([bogue Firefox 875002 <sup>(angl.)</sup>](https://bugzil.la/875002)).
- L'analyse de [`yield`](/fr/docs/Web/JavaScript/Reference/Operators/yield) et [`yield*`](/fr/docs/Web/JavaScript/Reference/Operators/yield*) a été mise à jour pour se conformer à la dernière spécification ES2015 ([bogue Firefox 981599 <sup>(angl.)</sup>](https://bugzil.la/981599)).
- Le piège non standard `hasOwn` a été supprimé ([bogue Firefox 980565 <sup>(angl.)</sup>](https://bugzil.la/980565)).

### Interfaces/APIs/DOM

- L'API {{DOMxRef("RadioNodeList")}} a été implémentée et le bouton radio sélectionné est accessible avec {{DOMxRef("RadioNodeList.value")}} ([bogue Firefox 779723 <sup>(angl.)</sup>](https://bugzil.la/779723)).
- La {{DOMxRef("DOMMatrix")}} a été ajoutée ([bogue Firefox 1018497 <sup>(angl.)</sup>](https://bugzil.la/1018497)).
- Une propriété non standard (mais implémentée dans d'autres navigateurs) `DOMException.stack` a été ajoutée. Elle retourne une chaîne de caractères avec une pile formatée de manière conviviale ([bogue Firefox 857648 <sup>(angl.)</sup>](https://bugzil.la/857648)), dans le même format que la propriété non standard existante {{JSxRef("Error.stack")}}.
- Pour {{HTMLElement("canvas")}}, la méthode {{DOMxRef("CanvasPattern.setTransform()")}}, permettant de modifier un motif en utilisant la représentation {{DOMxRef("DOMMatrix")}} d'une transformation linéaire ([bogue Firefox 1019257 <sup>(angl.)</sup>](https://bugzil.la/1019257)).
- Notre implémentation expérimentale des Media Source Extensions, derrière la préférence `media.mediasource.enabled`, activée par défaut uniquement dans Nightly et Aurora, prend désormais en charge le MP4 ([bogue Firefox 1000686 <sup>(angl.)</sup>](https://bugzil.la/1000686)).
- Les propriétés {{DOMxRef("HTMLMediaElement.audioTracks")}} et {{DOMxRef("HTMLMediaElement.videoTracks")}} ont été implémentées de manière expérimentale. Elles sont contrôlées par la préférence `media.track.enabled`, désactivée par défaut ([bogue Firefox 744896 <sup>(angl.)</sup>](https://bugzil.la/744896)).
- La méthode non standard `XMLHttpRequest.mozBackgroundRequest()` n'est plus accessible depuis les sites web. Seul le code interne de Firefox (code Chrome) peut l'utiliser ([bogue Firefox 1035242 <sup>(angl.)</sup>](https://bugzil.la/1035242)).
- Les évènements `touchenter` et `touchleave`, supprimés de la spécification, ont été retirés ([bogue Firefox 1036444 <sup>(angl.)</sup>](https://bugzil.la/1036444)).
- L'évènement autrefois appelé `loaded`, envoyé sur un {{DOMxRef("HTMLTrackElement")}}, a été renommé {{DOMxRef("Window/load_event", "load")}} pour correspondre à la spécification ([bogue Firefox 1035505 <sup>(angl.)</sup>](https://bugzil.la/1035505)).
- L'interface IndexedDB `FileHandle` a été renommée en `IDBMutableFile` ([bogue Firefox 1006485 <sup>(angl.)</sup>](https://bugzil.la/1006485)).
- L'interface IndexedDB `LockedFile` a été renommée en `IDBFileHandle` ([bogue Firefox 1006485 <sup>(angl.)</sup>](https://bugzil.la/1006485)).
- L'interface {{DOMxRef("ServiceWorker")}} a été implémentée derrière le drapeau `dom.serviceWorkers.enabled` ([bogue Firefox 903441 <sup>(angl.)</sup>](https://bugzil.la/903441)).
- La propriété {{DOMxRef("NetworkInformation.type")}} prend désormais également en charge la valeur `"unknown"` ([bogue Firefox 1023029 <sup>(angl.)</sup>](https://bugzil.la/1023029)).

### MathML

- Les attributs `columnspacing`, `framespacing` et `rowspacing` de l'élément {{MathMLElement("mtable")}} sont désormais pris en charge ([bogue Firefox 330964 <sup>(angl.)</sup>](https://bugzil.la/330964)).
- Utilisation des constantes [Open Type MATH <sup>(angl.)</sup>](https://wiki.mozilla.org/MathML:Open_Type_MATH_Table#Implementation_Status) pour les fractions, les piles, les radicaux et les scripts ([bogue Firefox 961365 <sup>(angl.)</sup>](https://bugzil.la/961365)).

### SVG

_Pas de changement._

### Audio/Video/WebRTC

- Le dictionnaire `RTCOfferOptions`, utilisé pour fournir des options lors de l'appel de {{DOMxRef("RTCPeerConnection.createOffer()")}}, a été implémenté.

### WebGL

- {{DOMxRef("EXT_blend_minmax")}} est désormais exposé. Il étend les capacités de mélange en ajoutant deux nouvelles équations de mélange&nbsp;: produisant les composants de couleur minimum ou maximum des couleurs source et destination ([bogue Firefox 973815 <sup>(angl.)</sup>](https://bugzil.la/973815)).

## Security

- La [directive CSP](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) 1.1 `frame-ancestors` est désormais prise en charge ([bogue Firefox 846978 <sup>(angl.)</sup>](https://bugzil.la/846978)).

## Changements pour les développeur·euse·s Mozilla et d'extensions

- Le JavaScript Debugger Service (JSD) a été supprimé au profit de le nouveau [Débogueur API <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/debugger-api/index.html) ([bogue Firefox 800200 <sup>(angl.)</sup>](https://bugzil.la/800200)).
- L'interface nsIX509CertDB2 a été supprimée et les méthodes de cette interface ont été déplacées vers l'interface nsIX509CertDB.

### SDK d'extension

#### Points forts

- Ajout de la prise en charge des menus contextuels dans les panneaux avec une nouvelle option dans le constructeur `Panel`.
- Ajout de `tab.readyState`.
- Ajout d'un paramètre `BrowserWindow` à `sidebar.show()` et `sidebar.hide()`, pour contrôler la fenêtre pour laquelle la barre latérale est affichée ou masquée.

#### Détails

[Instantanés Github faits entre Firefox 32 et Firefox 33 <sup>(angl.)</sup>](https://github.com/mozilla/addon-sdk/compare/firefox32...firefox33). Cela n'inclut pas les mises à jour effectuées après l'entrée de cette version dans Aurora.

[Bogues corrigés entre Firefox 32 et Firefox 33 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-07-21&chfield=resolution&query_format=advanced&chfieldfrom=2014-06-09&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Cela n'inclut pas les mises à jour effectuées après l'entrée de cette version dans Aurora.
