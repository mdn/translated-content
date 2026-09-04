---
title: Firefox 14 note de version pour les développeurs
short-title: Firefox 14
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 14 est sorti le 17 juillet 2012. Cet article répertorie les principaux changements utiles non seulement aux développeur·euse·s Web, mais aussi aux développeur·euse·s Firefox et Gecko ainsi qu'aux développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s web

### HTML

- L'élément {{HTMLElement("progress")}} n'est plus incorrectement classé comme un élément de formulaire et n'a donc plus d'attribut `form`.
- Les touches de modification par défaut pour l'attribut [`accesskey`](/fr/docs/Web/HTML/Reference/Global_attributes) du contenu HTML sur Mac ont été changées en Control+Option. Cela correspond aux navigateurs basés sur WebKit sur Mac.

### DOM

- Les évènements [input](/fr/docs/Web/API/Element/input_event) sont également déclenchés sur l'élément hôte d'édition d'un éditeur [contenteditable](/fr/docs/Web/API/HTMLElement/contentEditable) et sur l'élément racine d'un éditeur [designMode](/fr/docs/Web/API/Document/designMode).
- {{DOMxRef("DOMException", "DOMException.code")}} est désormais obsolète selon la dernière spécification DOM Level 4.
- La méthode {{DOMxRef("Range.insertNode()")}} fonctionne désormais correctement lorsqu'elle est utilisée sur des plages effondrées.
- L'interface `MozBlobBuilder` est désormais obsolète au profit du constructeur sur {{DOMxRef("Blob")}}. Si vous utilisez `MozBlobBuilder`, vous voyez un message d'avertissement dans la console Web.
- Le constructeur {{DOMxRef("Blob.Blob", "Blob()")}} est désormais disponible pour les workers ([bogue Firefox 736686 <sup>(angl.)</sup>](https://bugzil.la/736686)).
- Le support des [observateurs de mutation](/fr/docs/Web/API/MutationObserver) a été ajouté. Il est conçu comme un remplacement des évènements de mutation dans DOM3, qui présentent un certain nombre de problèmes de performance.
- L'interface {{DOMxRef("HTMLImageElement")}} a vu ses propriétés `x` et `y` supprimées dans Firefox 7.0 mais restaurées dans cette version pour des raisons de compatibilité.
- Les méthodes {{DOMxRef("Document", "execCommandShowHelp()")}} et {{DOMxRef("Document", "queryCommandText()")}}, qui n'ont jamais fait quoi que ce soit, ont été supprimées.
- L'interface `GeoPositionAddress`, une partie obsolète de l'API [Geolocation](/fr/docs/Web/API/Geolocation_API), a été supprimée.
- {{DOMxRef("Storage", "localStorage/sessionStorage")}} retourne désormais correctement `undefined` au lieu de `null` pour les clés non déclarées avec l'accès aux propriétés.
- L'objet {{DOMxRef("ImageData")}} a été implémenté ([bogue Firefox 550309 <sup>(angl.)</sup>](https://bugzil.la/550309)).
- Les attributs et méthodes liés aux nœuds enfants sur l'interface {{DOMxRef("Attr")}} ont été obsolètes ([bogue Firefox 737122 <sup>(angl.)</sup>](https://bugzil.la/737122)).

### CSS

- Les propriétés CSS {{CSSxRef("text-transform")}} et {{CSSxRef("font-variant")}} ont été corrigées pour gérer correctement les paires de cas spécifiques [turciques](https://fr.wikipedia.org/wiki/Langues_turciques) `i` → `İ` et `ı` → `I`.
- Le digramme néerlandais IJ est désormais correctement géré par `text-transform: capitalization`. De même, la lettre grecque `Σ`, qui a deux formes minuscules, `σ` et `ς`, est désormais correctement gérée par `text-transform: lowercase`.
- Le support de la fonction `skew()` a été supprimé de la propriété {{CSSxRef("transform")}}, car elle a été retirée du projet de norme.
- La syntaxe de {{CSSxRef("border-image")}} a été mise à jour pour correspondre à la dernière révision de la spécification&nbsp;; elle n'accepte plus de barre oblique finale (`/`).

### JavaScript

_Pas de changement._

### MathML

- La syntaxe du type d'action `statusline` sur les éléments {{MathMLElement("maction")}} a été ajustée pour suivre la spécification MathML.

### HTTP

- Gecko prend désormais en charge le nouveau code d'état [HTTP](/fr/docs/Web/HTTP) [`308 Permanent Redirect`](/fr/docs/Web/HTTP/Reference/Status/308). Comme Gecko ne fait pas de distinction entre les redirections permanentes et temporaires, il se comporte comme le code d'état [`307 Temporary Redirect`](/fr/docs/Web/HTTP/Reference/Status/307), car il interdit à l'agent utilisateur de changer la méthode HTTP utilisée entre les deux requêtes (`POST` reste `POST`, `GET` reste `GET`).

## Changements pour les développeur·euse·s Mozilla et d'extensions

### Modules de code JavaScript

#### source-editor.jsm

- Ajout d'un raccourci clavier pour basculer les commentaires pour la sélection actuelle (<kbd>Ctrl</kbd>+<kbd>/</kbd> ou <kbd>Cmd</kbd>+<kbd>/</kbd> sur Mac OS X).
- Ajout des raccourcis clavier Ctrl-\[ et Ctrl-] pour déplacer la position de saisie du texte au début et à la fin du bloc actuel.
- Ajout des nouvelles méthodes [`getLineStart()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) et [`getLineEnd()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29).

### XUL

- Ajout du nouvel attribut `fullscreenbutton` à l'élément `<window>`&nbsp;; le fait de le définir sur `true` ajoute un bouton au chrome de la fenêtre pour activer le mode plein écran.

### Interfaces

- L'interface `nsILocalFile` a été fusionnée avec `nsIFile` ([bogue Firefox 682360 <sup>(angl.)</sup>](https://bugzil.la/682360)).
- Les méthodes de `nsIPlacesImportExportService` pour l'importation de favoris ont toutes été supprimées au profit du module de code JavaScript `BookmarkHTMLUtils.jsm`.
- L'interface `nsIDOMGeoPositionAddress` a été supprimée.
- Les méthodes `getItemGUID`, `setItemGUID` et `getItemIdForGUID` ont été supprimées de `nsINavBookmarksService` ([bogue Firefox 715355 <sup>(angl.)</sup>](https://bugzil.la/715355)).

### Vérification orthographique

- Les noms de dictionnaires sont désormais analysés comme des {{Glossary("BCP 47 language tag","balises de langue BCP 47")}} complets ([bogue Firefox 730209 <sup>(angl.)</sup>](https://bugzil.la/730209), [bogue Firefox 741842 <sup>(angl.)</sup>](https://bugzil.la/741842)). Il est recommandé aux développeur·euse·s de ne pas coder en dur le nom de leur langue dans les noms de leurs dictionnaires.
