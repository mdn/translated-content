---
title: Firefox 19 note de version pour les développeurs
short-title: Firefox 19
slug: Mozilla/Firefox/Releases/19
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 19 est sorti le 19 février 2013. Cet article répertorie les principaux changements utiles non seulement aux développeur·euse·s Web, mais aussi aux développeur·euse·s Firefox et Gecko ainsi qu'aux développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s web

### JavaScript

- La méthode `size()` des objets {{JSxRef("Map")}} et {{JSxRef("Set")}} devient la propriété `size` ([bogue Firefox 807001 <sup>(angl.)</sup>](https://bugzil.la/807001))
- Les objets {{JSxRef("Map")}} et {{JSxRef("Set")}} ont maintenant une méthode `clear()`. ([bogue Firefox 805003 <sup>(angl.)</sup>](https://bugzil.la/805003))

### CSS

- Prise ne charge des unités relatives à la zone d'affichage (<i lang="en">viewport</i> en anglais) {{CSSxRef("&lt;length&gt;")}}, `vh`, `vw`, `vmin` et `vmax`. ([bogue Firefox 503720 <sup>(angl.)</sup>](https://bugzil.la/503720))
- Les boîtes flexibles sont maintenant non-préfixées, mais restent désactivées par défaut ([bogue Firefox 801098 <sup>(angl.)</sup>](https://bugzil.la/801098)).
- La valeur `-moz-initial` n'est plus préfixée ([bogue Firefox 806068 <sup>(angl.)</sup>](https://bugzil.la/806068)). `-moz-initial` est conservée pendant quelques temps en tant qu'alias, cependant les auteur·ice·s sont fortement encouragés à utiliser `initial`.
- La propriété {{CSSxRef("text-transform")}} supporte dorénavant le mot-clé `full-width` qui permet une intégration plus discrète des caractères latins dans les textes utilisant des caractères idéographiques à largeur fixe tel que le chinois ou le japonais ([bogue Firefox 774560 <sup>(angl.)</sup>](https://bugzil.la/774560)).
- La propriété {{CSSxRef("page-break-inside")}} a été implémentée ([bogue Firefox 685012 <sup>(angl.)</sup>](https://bugzil.la/685012)).
- La fonction {{CSSxRef("calc", "calc()")}} peut maintenant être utilisée avec `<color-stop>` (sur {{CSSxRef("&lt;gradient&gt;")}}).
- La règle {{CSSxRef("@page")}} est maintenant prise en charge ([bogue Firefox 115199 <sup>(angl.)</sup>](https://bugzil.la/115199)). Notez que les pseudo-classes {{CSSxRef(":first")}}, {{CSSxRef(":right")}}, et {{CSSxRef(":left")}} ne le sont pas encore.
- La pseudo-classe `:-moz-placeholder` est remplacée par le pseudo-élément `::-moz-placeholder` ([bogue Firefox 737786 <sup>(angl.)</sup>](https://bugzil.la/737786)). - Les déclarations accompagnées de `!important` apparaissant dans {{CSSxRef("@keyframes")}} sont maintenant ignorées, conformément à la spécification ([bogue Firefox 784466](https://bugzil.la/784466)).

### DOM / API Web

- Les méthodes {{DOMxRef("Element.getElementsByTagName()")}}, {{DOMxRef("Element.getElementsByTagNameNS()")}} et {{DOMxRef("Element.getElementsByClassName()")}} retournent maintenant une collection ({{DOMxRef("HTMLCollection")}}) dynamique ([bogue Firefox 799464 <sup>(angl.)</sup>](https://bugzil.la/799464)).
- La propriété `mozLastModifiedDate` de {{DOMxRef("File")}} a été implémentée. ([bogue Firefox 793955 <sup>(angl.)</sup>](https://bugzil.la/793955))
- La propriété `lastModifiedDate` de {{DOMxRef("File")}} retourne la date actuelle, si la date de la dernière modification est inconnue ([bogue Firefox 793459 <sup>(angl.)</sup>](https://bugzil.la/793459)).
- La méthode `isPointInStroke` de {{DOMxRef("CanvasRenderingContext2D")}} a été implémentée ([bogue Firefox 803124 <sup>(angl.)</sup>](https://bugzil.la/803124)).
- La méthode `toBlob` de {{DOMxRef("HTMLCanvasElement")}} a été implémentée ([bogue Firefox 648610 <sup>(angl.)</sup>](https://bugzil.la/648610)).
- Les méthodes `Node.isSupported` et {{DOMxRef("Document.implementation", "Document.implementation.hasFeature()")}} ont été modifiées pour qu'elles retournent toujours `true` ([bogue Firefox 801425 <sup>(angl.)</sup>](https://bugzil.la/801425)).
- Lors de l'appel de `document.createElement(null)`, `null` est désormais «&nbsp;rendue en chaîne de caractères&nbsp;» et fonctionne comme `document.createElement("null")`.

### XForms

Le support des XForms a été [**retiré** <sup>(angl.)</sup>](https://www.philipp-wagner.com/blog/2011/07/the-future-of-mozilla-xforms) dans Firefox 19.

## Changements pour les développeur·euse·s Mozilla et de modules complémentaires

> [!NOTE]
> Un changement clé dans Firefox 19 est que `nsresult` est maintenant fortement typé. Ça permet de détecter plus facilement les bogues dus à une mauvaise gestion des valeurs de retour, mais risque de rendre le code existant inopérant s'il repose sur des hypothèses erronées à cet égard.

- `getBrowserSelection()` retourne dorénavant le texte sélectionné dans un input de type `text`. Ainsi, `gContextMenu.isTextSelected` vaut `true` quand l'utilisateur·ice sélectionne du texte depuis un champ texte qui n'est pas de type `password`. ([bogue Firefox 565717 <sup>(angl.)</sup>](https://bugzil.la/565717))
- Dict.jsm&nbsp;: `Dict()` accepte maintenant les chaînes de caractères JSON. `Dict.toJSON()` a été ajouté et retourne une chaîne de caractères JSON. ([bogue Firefox 727967 <sup>(angl.)</sup>](https://bugzil.la/727967))

### Changements dans les interfaces

- `nsIImgLoadingContent`
  - : Le paramètre (aObserver) de la méthode `addObserver()` change de `imgIDecoderObserver` pour `imgINotificationObserver`. La méthode `notify()` de `imgINotificationObserver` n'est pas scriptable, vous devez donc utiliser `createScriptedObserver()` à partir de `imgITools`.
- `nsIChannel`
  - : La propriété `contentLength` a changée de `long` à `int64_t`

## Voir aussi

- [Notes de versions de Firefox 19 <sup>(angl.)</sup>](https://www.mozilla.org/en-US/firefox/19.0beta/releasenotes/)
- [Compatibilité des sites avec Firefox 19 <sup>(angl.)</sup>](https://blog.mozilla.org/addons/2013/02/07/compatibility-for-firefox-19/)
