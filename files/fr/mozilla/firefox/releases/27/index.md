---
title: Firefox 27 for developers
slug: Mozilla/Firefox/Releases/27
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
- Les styles des éléments SVG sont désormais inspectables ([bug Firefox 921191](https://bugzil.la/921191)).
- Le fait de ne pas trouver l'image en cliquant sur le lien URL dans l'inspecteur CSS a été corrigé ([bug Firefox 921686](https://bugzil.la/921686)).

Plus de détails dans [cet article](https://hacks.mozilla.org/2013/11/firefox-developer-tools-episode-27-edit-as-html-codemirror-more/).

### CSS

- Les mots-clés `-moz-grab` et `-moz-grabbing` de la propriété CSS {{cssxref("cursor")}} n'ont pas été préfixés pour `grab` et `grabbing` ([bug Firefox 880672](https://bugzil.la/880672)).
- Le support des notations fonctionnelles `-moz-hsla()` et `-moz-rgba()` a été abandonné. Seules les versions sans préfixe, `hsla()` et `rgba()` sont désormais supportées ([bug Firefox 893319](https://bugzil.la/893319)).
- La valeur "`true`" pour {{cssxref("text-align")}} a été ajoutée ([bug Firefox 929991](https://bugzil.la/929991)).
- Support expérimental de la `position:sticky` est désormais actif par défaut sur les builds non-release ([bug Firefox 902992](https://bugzil.la/902992)). Pour les versions builds, la préférence `layout.css.sticky.enabled` doit toujours être définie sur `true.`
- La propriété abrégée {{cssxref("all")}} a été ajoutée ([bug Firefox 842329](https://bugzil.la/842329)).
- La valeur globale {{cssxref("unset")}} a été ajoutée; il permet de réinitialiser n'importe quelle propriété CSS ([bug Firefox 921731](https://bugzil.la/921731)).
- Les accolades ne sont plus autorisées dans les attributs de `style` HTML: faire `<div style="{ display: none }">` fonctionnait en mode bizarreries, mais ne le sera plus [bug Firefox 915053](https://bugzil.la/915053).
- La propriété {{cssxref("overflow")}} fonctionne désormais sur {{HTMLElement("fieldset")}} ([bug Firefox 261037](https://bugzil.la/261037)).

### HTML

- La valeur `color` de l'attribut {{HTMLElement("input")}} [`type`](/fr/docs/Web/HTML/Element/input#type) a été implémentée sur les plates-formes de bureau. Il était déjà disponible sur les mobiles.
- La directive `allow-popups` est désormais prise en charge avec l'attribut [`sandbox`](/fr/docs/Web/HTML/Element/iframe#sandbox) de l'élément {{HTMLElement("iframe")}} ([bug Firefox 766282](https://bugzil.la/766282)).
- Le mélange d'éléments HTML à l'aide de la propriété {{cssxref("mix-blend-mode")}} a été implémenté. La préférence `layout.css.mix-blend-mode.enabled` doit être définie sur `true` ([bug Firefox 902525](https://bugzil.la/902525)).
- L'attribut [`typemustmatch`](/fr/docs/Web/HTML/Element/object#typemustmatch) de l'élément {{HTMLElement("object")}} est désormais pris en charge ([bug Firefox 827160](https://bugzil.la/827160)).

### JavaScript

L'implémentation d'[EcmaScript 6](/fr/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) (Harmony) se poursuit!

- L'[opérateur de diffusion](/fr/docs/Web/JavaScript/Reference/Operators/Spread_operator) est désormais pris en charge dans les appels de fonction ([bug Firefox 762363](https://bugzil.la/762363)).
- La fonction mathématique {{jsxref("Global_Objects/Math/hypot", "Math.hypot()")}} a été implémentée ([bug Firefox 896264](https://bugzil.la/896264)).
- L'expression {{jsxref("Operators/yield*", "yield*")}} est maintenant implémentée ([bug Firefox 666396](https://bugzil.la/666396)).
- Les objets `MapIterator`, `SetIterator` et `ArrayIterator` correspondent désormais à la spécification ([bug Firefox 881226](https://bugzil.la/881226)).
- [for..of](/fr/docs/Web/JavaScript/Reference/Statements/for...of) boucles s'attendent maintenant à ce que le [protocole d'itérateur](/fr/docs/Web/JavaScript/Guide/The_Iterator_protocol) standard ES6 s'éloigne de l'ancien protocole d'itérateur de SpiderMonkey utilisant `StopIteration`.
- {{jsxref("String.match")}} et {{jsxref("String.replace")}} sont maintenant réinitialisés {{jsxref("RegExp.lastIndex")}} ([bug Firefox 501739](https://bugzil.la/501739)).

### Interfaces/APIs/DOM

- Le support des deux méthodes `setRange()` sur l'interface {{domxref("HTMLInputElement")}} a été ajouté ([bug Firefox 850364](https://bugzil.la/850364)).
- Le support des deux méthodes `setRange()` sur l'interface {{domxref("HTMLTextAreaElement")}} a été ajouté ([bug Firefox 918940](https://bugzil.la/918940)).
- Les méthodes `getAllKeys()` et `openKeyCursor()` ont été ajoutées à {{domxref("IDBObjectStore")}} ([bug Firefox 920633](https://bugzil.la/920633) et [bug Firefox 920800](https://bugzil.la/920800)).
- L'interface {{domxref("HTMLFormControlsCollection")}} a été implémentée ([bug Firefox 913920](https://bugzil.la/913920)).
- L'interface {{domxref("CanvasRenderingContext2D")}} prend désormais en charge les deux méthodes {{domxref("CanvasRenderingContext2D.getLineDash()", "getLineDash()")}} et {{domxref("CanvasRenderingContext2D.setLineDash()", "setLineDash()")}} et la propriété {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}} ([bug Firefox 768067](https://bugzil.la/768067)).
- L'attribut `typeMustMatch` a été implémenté sur l'interface {{domxref("HTMLObjectElement")}} ([bug Firefox 827160](https://bugzil.la/827160)).
- Les méthodes `copyFromChannel()` et `copyToChannel()` ont été ajoutées à {{domxref("AudioBuffer")}} ([bug Firefox 915524](https://bugzil.la/915524)).
- `Event.isTrusted()` est désormais infalsifiable ([bug Firefox 637248](https://bugzil.la/637248)).
- La méthode {{domxref("Navigator.vibrate()")}} a été adaptée pour correspondre à la spécification finale: elle retourne désormais `false` lorsque la liste est trop longue ou contient des entrées trop volumineuses, au lieu de lancer ([bug Firefox 884935](https://bugzil.la/884935)).
- Dans le cadre de l'effort continu de normalisation des objets globaux, les interfaces d'événment de changement de feuille de style non standard, notamment `StyleRuleChangeEvent`, `StyleSheetApplicableStateChangeEvent` et `StyleSheetChangeEvent`, ne sont plus disponibles à partir du contenu Web. L'interface `CSSGroupRuleRuleList`, le détail d'implémentation de {{domxref("CSSRuleList")}}, a également été supprimée ([bug Firefox 872934](https://bugzil.la/872934) et [bug Firefox 916871](https://bugzil.la/916871)).
- `atob` ignore désormais les espaces ([bug Firefox 711180](https://bugzil.la/711180)).
- [WebGL](/fr/docs/Web/WebGL): les chaînes d'extension avec préfixe `MOZ_` sont obsolètes. Le support pour eux sera supprimé à l'avenir. Utilisez uniquement une chaîne d'extension sans préfixe. Pour obtenir des brouillons d'extensions, définissez les préférences `webgl.enable-draft-extensions` ([bug Firefox 924176](https://bugzil.la/924176)).

### MathML

_Pas de changement._

### SVG

- Le mélange d'éléments SVG à l'aide de la propriété {{cssxref("mix-blend-mode")}} a été implémenté. La préférence `layout.css.mix-blend-mode.enabled` doit être définie sur `true` ([bug Firefox 902525](https://bugzil.la/902525)).

## Changements pour les développeurs d'addon et de Mozilla

- Le bouton `downloads-indicator` a disparu. Vous devez maintenant utiliser l'élément `downloads-button`. Si vous devez vérifier qu'il a chargé sa superposition, recherchez l'attribut `indicator` sur ce bouton.
- La feuille de style `chrome://browser/skin/downloads/indicator.css` n'est plus référencée dans Firefox.

## Sécurité

- TLS 1.2 a été implémenté pour une sécurité améliorée ([bug Firefox 861266](https://bugzil.la/861266)).

## Voir aussi

- [Liste des changements](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&component=Marionette&product=Testing&target_milestone=mozilla27) dans [Marionette](/fr/docs/Mozilla/QA/Marionette) pour Firefox 27.

### Anciennes versions

{{Firefox_for_developers('26')}}
