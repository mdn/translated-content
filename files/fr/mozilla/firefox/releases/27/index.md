---
title: Firefox 27 for developers
slug: Mozilla/Firefox/Releases/27
tags:
  - Firefox
  - TopicStub
translation_of: Mozilla/Firefox/Releases/27
---
{{FirefoxSidebar}}

Firefox 27 est sorti le 4 Février 2014. Cet article répertorie les modofications clés qui sont utiles non seulement pour les développeurs Web, mais aussi pour les développeurs Firefox et Gecko ainsi que pour les développeurs d'add-on.

## Changements pour les développeurs Web

### Outils de développement

- Les points d'arrêt peuvent désormais être définis sur les événements DOM.
- JavaScript dans le panneau du débogueur peut être supprimé à l'aide du bouton { }.
- L'inspecteur a maintenant une fonction "edit-element-html", sans avoir besoin d'un add-on.
- Les URL et les couleurs d'arrière-plan ont un aperçu dans l'inspecteur. Même le survol des éléments du canevas donnera une fenêtre contextuelle avec un aperçu de l'image.
- La journalisation de redistribution a été ajoutée.
- Les styles des éléments SVG sont désormais inspectables ({{Bug(921191)}}).
- Le fait de ne pas trouver l'image en cliquant sur le lien URL dans l'inspecteur CSS a été corrigé ({{Bug(921686)}}).

Plus de détails dans [cet article](https://hacks.mozilla.org/2013/11/firefox-developer-tools-episode-27-edit-as-html-codemirror-more/).

### CSS

- Les mots-clés `-moz-grab` et `-moz-grabbing` de la propriété CSS {{cssxref("cursor")}} n'ont pas été préfixés pour `grab` et `grabbing` ({{bug("880672")}}).
- Le support des notations fonctionnelles `-moz-hsla()` et `-moz-rgba()` a été abandonné. Seules les versions sans préfixe, `hsla()` et `rgba()` sont désormais supportées ({{bug("893319")}}).
- La valeur "`true`" pour {{cssxref("text-align")}} a été ajoutée ({{bug(929991)}}).
- Support expérimental de la `position:sticky` est désormais actif par défaut sur les builds non-release ({{bug("902992")}}). Pour les versions builds, la préférence `layout.css.sticky.enabled` doit toujours être définie sur `true.`
- La propriété abrégée {{cssxref("all")}} a été ajoutée ({{bug(842329)}}).
- La valeur globale {{cssxref("unset")}} a été ajoutée; il permet de réinitialiser n'importe quelle propriété CSS ({{bug(921731)}}).
- Les accolades ne sont plus autorisées dans les attributs de `style` HTML: faire `<div style="{ display: none }">` fonctionnait en mode bizarreries, mais ne le sera plus {{bug(915053)}}.
- La propriété {{cssxref("overflow")}} fonctionne désormais sur {{HTMLElement("fieldset")}} ({{bug(261037)}}).

### HTML

- La valeur `color` de l'attribut {{HTMLElement("input")}} {{htmlattrxref("type", "input")}} a été implémentée sur les plates-formes de bureau. Il était déjà disponible sur les mobiles.
- La directive `allow-popups` est désormais prise en charge avec l'attribut {{htmlattrxref("sandbox", "iframe")}} de l'élément {{HTMLElement("iframe")}} ({{bug(766282)}}).
- Le mélange d'éléments HTML à l'aide de la propriété {{cssxref("mix-blend-mode")}} a été implémenté. La préférence `layout.css.mix-blend-mode.enabled` doit être définie sur `true` ({{bug(902525)}}).
- L'attribut {{htmlattrxref("typemustmatch", "object")}} de l'élément {{HTMLElement("object")}} est désormais pris en charge ({{bug(827160)}}).

### JavaScript

L'implémentation d'[EcmaScript 6](/fr/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) (Harmony) se poursuit!

- L'[opérateur de diffusion](/fr/docs/Web/JavaScript/Reference/Operators/Spread_operator) est désormais pris en charge dans les appels de fonction ({{bug("762363")}}).
- La fonction mathématique {{jsxref("Global_Objects/Math/hypot", "Math.hypot()")}} a été implémentée ({{bug("896264")}}).
- L'expression {{jsxref("Operators/yield*", "yield*")}} est maintenant implémentée ({{bug(666396)}}).
- Les objets `MapIterator`, `SetIterator` et `ArrayIterator` correspondent désormais à la spécification ({{bug("881226")}}).
- [for..of](/fr/docs/Web/JavaScript/Reference/Statements/for...of) boucles s'attendent maintenant à ce que le [protocole d'itérateur](/fr/docs/Web/JavaScript/Guide/The_Iterator_protocol) standard ES6 s'éloigne de l'ancien protocole d'itérateur de SpiderMonkey utilisant `StopIteration`.
- {{jsxref("String.match")}} et {{jsxref("String.replace")}} sont maintenant réinitialisés {{jsxref("RegExp.lastIndex")}} ({{bug(501739)}}).

### Interfaces/APIs/DOM

- Le support des deux méthodes `setRange()` sur l'interface {{domxref("HTMLInputElement")}} a été ajouté ({{bug(850364)}}).
- Le support des deux méthodes `setRange()` sur l'interface {{domxref("HTMLTextAreaElement")}} a été ajouté ({{bug(918940)}}).
- Les méthodes `getAllKeys()` et `openKeyCursor()` ont été ajoutées à {{domxref("IDBObjectStore")}} ({{bug(920633)}} et {{bug(920800)}}).
- L'interface {{domxref("HTMLFormControlsCollection")}} a été implémentée ({{bug(913920)}}).
- L'interface {{domxref("CanvasRenderingContext2D")}} prend désormais en charge les deux méthodes {{domxref("CanvasRenderingContext2D.getLineDash()", "getLineDash()")}} et {{domxref("CanvasRenderingContext2D.setLineDash()", "setLineDash()")}} et la propriété {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}} ({{bug(768067)}}).
- L'attribut `typeMustMatch` a été implémenté sur l'interface {{domxref("HTMLObjectElement")}} ({{bug(827160)}}).
- Les méthodes `copyFromChannel()` et `copyToChannel()` ont été ajoutées à {{domxref("AudioBuffer")}} ({{bug(915524)}}).
- `Event.isTrusted()` est désormais infalsifiable ({{bug(637248)}}).
- La méthode {{domxref("Navigator.vibrate()")}} a été adaptée pour correspondre à la spécification finale: elle retourne désormais `false` lorsque la liste est trop longue ou contient des entrées trop volumineuses, au lieu de lancer ({{bug(884935)}}).
- Dans le cadre de l'effort continu de normalisation des objets globaux, les interfaces d'événment de changement de feuille de style non standard, notamment `StyleRuleChangeEvent`, `StyleSheetApplicableStateChangeEvent` et `StyleSheetChangeEvent`, ne sont plus disponibles à partir du contenu Web. L'interface `CSSGroupRuleRuleList`, le détail d'implémentation de {{domxref("CSSRuleList")}}, a également été supprimée ({{Bug("872934")}} et {{bug(916871)}}).
- `atob` ignore désormais les espaces ({{bug(711180)}}).
- [WebGL](/fr/docs/Web/WebGL): les chaînes d'extension avec préfixe `MOZ_` sont obsolètes. Le support pour eux sera supprimé à l'avenir. Utilisez uniquement une chaîne d'extension sans préfixe. Pour obtenir des brouillons d'extensions, définissez les préférences `webgl.enable-draft-extensions` ({{bug(924176)}}).

### MathML

_Pas de changement._

### SVG

- Le mélange d'éléments SVG à l'aide de la propriété {{cssxref("mix-blend-mode")}} a été implémenté. La préférence `layout.css.mix-blend-mode.enabled` doit être définie sur `true` ({{bug(902525)}}).

## Changements pour les développeurs d'addon et de Mozilla

- Le bouton `downloads-indicator` a disparu. Vous devez maintenant utiliser l'élément `downloads-button`. Si vous devez vérifier qu'il a chargé sa superposition, recherchez l'attribut `indicator` sur ce bouton.
- La feuille de style `chrome://browser/skin/downloads/indicator.css` n'est plus référencée dans Firefox.

## Sécurité

- TLS 1.2 a été implémenté pour une sécurité améliorée ({{Bug(861266)}}).

## Voir aussi

- [Liste des changements](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&component=Marionette&product=Testing&target_milestone=mozilla27) dans [Marionette](/fr/docs/Mozilla/QA/Marionette) pour Firefox 27.

### Anciennes versions

{{Firefox_for_developers('26')}}
