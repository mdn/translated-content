---
title: Firefox 27 note de version pour les développeurs
short-title: Firefox 27
slug: Mozilla/Firefox/Releases/27
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 27 est sorti le 4 Février 2014. Cet article répertorie les modifications clés qui sont utiles non seulement pour les développeur·euse·s Web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s Web

### Outils de développement

- Les points d'arrêt peuvent désormais être définis sur les évènements DOM.
- JavaScript dans le panneau du débogueur peut être supprimé à l'aide du bouton { }.
- L'inspecteur a maintenant une fonction "edit-element-html", sans avoir besoin d'un add-on.
- Les URL et les couleurs d'arrière-plan ont un aperçu dans l'inspecteur. Même le survol des éléments du canevas donne une fenêtre contextuelle avec un aperçu de l'image.
- La journalisation de redistribution a été ajoutée.
- Les styles des éléments SVG peuvent désormais être inspectés ([bogue Firefox 921191 <sup>(angl.)</sup>](https://bugzil.la/921191)).
- Le fait de ne pas trouver l'image en cliquant sur le lien URL dans l'inspecteur CSS a été corrigé ([bogue Firefox 921686 <sup>(angl.)</sup>](https://bugzil.la/921686)).
- L'en-tête {{HTTPHeader("SourceMap", "X-SourceMap")}} est désormais pris en charge ([bogue Firefox 765993 <sup>(angl.)</sup>](https://bugzil.la/765993)).

Plus de détails dans [cet article <sup>(angl.)</sup>](https://hacks.mozilla.org/2013/11/firefox-developer-tools-episode-27-edit-as-html-codemirror-more/).

### CSS

- Les mots-clés `-moz-grab` et `-moz-grabbing` de la propriété CSS {{CSSxRef("cursor")}} n'ont pas été préfixés pour `grab` et `grabbing` ([bogue Firefox 880672 <sup>(angl.)</sup>](https://bugzil.la/880672)).
- La prise en charge des notations fonctionnelles `-moz-hsla()` et `-moz-rgba()` a été abandonnée. Seules les versions sans préfixe, `hsla()` et `rgba()` sont désormais pris en charge ([bogue Firefox 893319 <sup>(angl.)</sup>](https://bugzil.la/893319)).
- La valeur `true` pour {{CSSxRef("text-align")}} a été ajoutée ([bogue Firefox 929991 <sup>(angl.)</sup>](https://bugzil.la/929991)).
- Prise en charge expérimentale de la `position: sticky` est désormais actif par défaut sur les compilations non publiées ([bogue Firefox 902992 <sup>(angl.)</sup>](https://bugzil.la/902992)). Pour les versions builds, la préférence `layout.css.sticky.enabled` doit toujours être définie sur `true.`
- La propriété abrégée {{CSSxRef("all")}} a été ajoutée ([bogue Firefox 842329 <sup>(angl.)</sup>](https://bugzil.la/842329)).
- La valeur globale {{CSSxRef("unset")}} a été ajoutée; il permet de réinitialiser n'importe quelle propriété CSS ([bogue Firefox 921731 <sup>(angl.)</sup>](https://bugzil.la/921731)).
- Les accolades ne sont plus autorisées dans les attributs de `style` HTML: faire `<div style="{ display: none }">` fonctionnait en mode bizarreries, mais ne l'est plus ([bogue Firefox 915053 <sup>(angl.)</sup>](https://bugzil.la/915053)).
- La propriété {{CSSxRef("overflow")}} fonctionne désormais sur {{HTMLElement("fieldset")}} ([bogue Firefox 261037 <sup>(angl.)</sup>](https://bugzil.la/261037)).

### HTML

- La valeur `color` de l'attribut {{HTMLElement("input")}} [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) a été ajoutée sur les plates-formes de bureau. Il était déjà disponible sur les mobiles.
- La directive `allow-popups` est désormais prise en charge avec l'attribut [`sandbox`](/fr/docs/Web/HTML/Reference/Elements/iframe#sandbox) de l'élément {{HTMLElement("iframe")}} ([bogue Firefox 766282 <sup>(angl.)</sup>](https://bugzil.la/766282)).
- Le mélange d'éléments HTML à l'aide de la propriété {{CSSxRef("mix-blend-mode")}} a été ajouté. La préférence `layout.css.mix-blend-mode.enabled` doit être définie sur `true` ([bogue Firefox 902525 <sup>(angl.)</sup>](https://bugzil.la/902525)).
- L'attribut [`typemustmatch`](/fr/docs/Web/HTML/Reference/Elements/object#typemustmatch) de l'élément {{HTMLElement("object")}} est désormais pris en charge ([bogue Firefox 827160 <sup>(angl.)</sup>](https://bugzil.la/827160)).

### JavaScript

L'implémentation de [ECMAScript 2015 <sup>(angl.)</sup>](https://web.archive.org/web/20210612110055/https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla) continue&nbsp;!

- [L'opérateur de diffusion](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) est désormais pris en charge dans les appels de fonction ([bogue Firefox 762363 <sup>(angl.)</sup>](https://bugzil.la/762363)).
- La fonction mathématique {{JSxRef("Math.hypot()")}} a été ajoutée ([bogue Firefox 896264 <sup>(angl.)</sup>](https://bugzil.la/896264)).
- L'expression {{JSxRef("Operators/yield*", "yield*")}} est maintenant ajoutée ([bogue Firefox 666396 <sup>(angl.)</sup>](https://bugzil.la/666396)).
- Les objets `MapIterator`, `SetIterator` et `ArrayIterator` correspondent désormais à la spécification ([bogue Firefox 881226 <sup>(angl.)</sup>](https://bugzil.la/881226)).
- {{JSxRef("Statements/for...of", "for..of")}} boucles s'attendent maintenant à ce que le [protocole d'itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) standard ES6 s'éloigne de l'ancien protocole d'itérateur de SpiderMonkey utilisant `StopIteration`.
- {{JSxRef("String.match")}} et {{JSxRef("String.replace")}} sont maintenant réinitialisés {{JSxRef("RegExp.lastIndex")}} ([bogue Firefox 501739 <sup>(angl.)</sup>](https://bugzil.la/501739)).

### Interfaces/APIs/DOM

- Le support des deux méthodes `setRange()` sur l'interface {{DOMxRef("HTMLInputElement")}} a été ajouté ([bogue Firefox 850364 <sup>(angl.)</sup>](https://bugzil.la/850364)).
- Le support des deux méthodes `setRange()` sur l'interface {{DOMxRef("HTMLTextAreaElement")}} a été ajouté ([bogue Firefox 918940 <sup>(angl.)</sup>](https://bugzil.la/918940)).
- Les méthodes `getAllKeys()` et `openKeyCursor()` ont été ajoutées à {{DOMxRef("IDBObjectStore")}} ([bogue Firefox 920633 <sup>(angl.)</sup>](https://bugzil.la/920633) et [bogue Firefox 920800 <sup>(angl.)</sup>](https://bugzil.la/920800)).
- L'interface {{DOMxRef("HTMLFormControlsCollection")}} a été ajoutée ([bogue Firefox 913920 <sup>(angl.)</sup>](https://bugzil.la/913920)).
- L'interface {{DOMxRef("CanvasRenderingContext2D")}} prend désormais en charge les deux méthodes {{DOMxRef("CanvasRenderingContext2D.getLineDash()", "getLineDash()")}} et {{DOMxRef("CanvasRenderingContext2D.setLineDash()", "setLineDash()")}} et la propriété {{DOMxRef("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}} ([bogue Firefox 768067 <sup>(angl.)</sup>](https://bugzil.la/768067)).
- L'attribut `typeMustMatch` a été implémenté sur l'interface {{DOMxRef("HTMLObjectElement")}} ([bogue Firefox 827160 <sup>(angl.)</sup>](https://bugzil.la/827160)).
- Les méthodes `copyFromChannel()` et `copyToChannel()` ont été ajoutées à {{DOMxRef("AudioBuffer")}} ([bogue Firefox 915524 <sup>(angl.)</sup>](https://bugzil.la/915524)).
- `Event.isTrusted()` est désormais infalsifiable ([bogue Firefox 637248 <sup>(angl.)</sup>](https://bugzil.la/637248)).
- L'objet {{DOMxRef("RTCIceCandidate")}} de l'API WebRTC inclut désormais une méthode {{DOMxRef("RTCIceCandidate.toJSON", "toJSON()")}} pour faciliter le signalement et le débogage ([bogue Firefox 928304 <sup>(angl.)</sup>](https://bugzil.la/928304)).
- La méthode {{DOMxRef("Navigator.vibrate()")}} a été adaptée pour correspondre à la spécification finale: elle retourne désormais `false` lorsque la liste est trop longue ou contient des entrées trop volumineuses, au lieu de lancer ([bogue Firefox 884935 <sup>(angl.)</sup>](https://bugzil.la/884935)).
- Dans le cadre de l'effort continu de normalisation des objets globaux, les interfaces d'évènement de changement de feuille de style non standard, notamment `StyleRuleChangeEvent`, `StyleSheetApplicableStateChangeEvent` et `StyleSheetChangeEvent`, ne sont plus disponibles à partir du contenu Web. L'interface `CSSGroupRuleRuleList`, le détail d'implémentation de {{DOMxRef("CSSRuleList")}}, a également été supprimée ([bogue Firefox 872934 <sup>(angl.)</sup>](https://bugzil.la/872934) et [bogue Firefox 916871 <sup>(angl.)</sup>](https://bugzil.la/916871)).
- `atob` ignore désormais les espaces ([bogue Firefox 711180 <sup>(angl.)</sup>](https://bugzil.la/711180)).
- [WebGL](/fr/docs/Web/API/WebGL_API)&nbsp;: les chaînes de caractères d'extension avec préfixe `MOZ_` sont obsolètes. Le support pour eux est supprimé à l'avenir. Utilisez uniquement une chaîne de caractères d'extension sans préfixe. Pour obtenir des brouillons d'extensions, définissez les préférences `webgl.enable-draft-extensions` ([bogue Firefox 924176 <sup>(angl.)</sup>](https://bugzil.la/924176)).

### MathML

_Pas de changement._

### SVG

- Le mélange d'éléments SVG à l'aide de la propriété {{CSSxRef("mix-blend-mode")}} a été implémenté. La préférence `layout.css.mix-blend-mode.enabled` doit être définie sur `true` ([bogue Firefox 902525 <sup>(angl.)</sup>](https://bugzil.la/902525)).

## Changements pour les développeur·euse·s de Mozilla et d'extensions

- Le bouton `downloads-indicator` a disparu. Vous devez maintenant utiliser l'élément `downloads-button`. Si vous devez vérifier qu'il a chargé sa superposition, recherchez l'attribut `indicator` sur ce bouton.
- La feuille de style `chrome://browser/skin/downloads/indicator.css` n'est plus référencée dans Firefox.

## Sécurité

- TLS 1.2 a été implémenté pour une sécurité améliorée ([bogue Firefox 861266 <sup>(angl.)</sup>](https://bugzil.la/861266)).

## Voir aussi

- [Liste des changements <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&component=Marionette&product=Testing&target_milestone=mozilla27) dans [Marionette <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/testing/marionette/marionette/index.html) pour Firefox 27.
