---
title: Firefox 19 pour les développeurs
slug: Mozilla/Firefox/Releases/19
---

{{FirefoxSidebar}}

Firefox 19, basé sur Gecko 19.0, est sorti le 19 février 2013. Cette page résume les principaux changements dans Firefox 19 qui sont utiles aux développeurs.

Vous voulez aider à documenter Firefox 19 ? Regardez la [liste des bugs qui ont besoin de rédaction](http://beta.elchi3.de/doctracker/#list=fx&version=19.0) et lancez-vous !

## Changements pour les développeurs web

### JavaScript

- La méthode `size()` des objets [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map) et [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set) devient la propriété `size` ([bug Firefox 807001](https://bugzil.la/807001))
- Les objets [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map) et [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set) ont maintenant une méthode `clear()`. ([bug Firefox 805003](https://bugzil.la/805003))

### CSS

- Support des unités relatives au viewport {{cssxref("&lt;length&gt;")}}, `vh`, `vw`, `vmin`, et `vmax`. ([bug Firefox 503720](https://bugzil.la/503720))
- CSS Flexbox est maintenant non-préfixé, mais reste désactivé par défaut ([bug Firefox 801098](https://bugzil.la/801098)).
- La valeur `-moz-initial` n'est plus préfixée ([bug Firefox 806068](https://bugzil.la/806068)). `-moz-initial` sera conservée pendant quelques temps en tant qu'alias, cependant les auteurs sont fortement encouragés à utiliser `initial`.
- La propriété CSS {{cssxref("text-transform")}} supporte dorénavant le mot-clé `full-width` qui permet une intégration plus discrète des caractères latins dans les textes utilisant des caractères idéographiques à largeur fixe tel que le chinois ou le japonais ([bug Firefox 774560](https://bugzil.la/774560)).
- La propriété CSS {{cssxref("page-break-inside")}} a été implémentée ([bug Firefox 685012](https://bugzil.la/685012)).
- La fonction CSS {{cssxref("calc", "calc()")}} peut maintenant être utilisée avec `<color-stop>` (sur {{cssxref("&lt;gradient&gt;")}}).
- La règle CSS {{ cssxref("@page") }} est maintenant supportée ([bug Firefox 115199](https://bugzil.la/115199)). Notez que les pseudo-classes {{cssxref(":first")}}, {{cssxref(":right")}}, et {{cssxref(":left")}} ne le sont pas encore.
- La pseudo-classe {{cssxref(":-moz-placeholder")}} est remplacée par le pseudo-élément {{cssxref("::-moz-placeholder")}} ([bug Firefox 737786](https://bugzil.la/737786)).

### DOM

- La méthode {{domxref("element.getElementsByTagName")}} retourne maintenant un `HTMLCollection` ([bug Firefox 799464](https://bugzil.la/799464)).
- La propriété `mozLastModifiedDate` de {{domxref("File")}} a été implémentée. ([bug Firefox 793955](https://bugzil.la/793955))
- La propriété `lastModifiedDate` de {{domxref("File")}} renvoie la date actuelle, si la date de la dernière modification est inconnue ([bug Firefox 793459](https://bugzil.la/793459)).
- La méthode `isPointInStroke` de {{domxref("CanvasRenderingContext2D")}} a été implémentée ([bug Firefox 803124](https://bugzil.la/803124)).
- La méthode `toBlob` de {{domxref("HTMLCanvasElement")}} a été implémentée ([bug Firefox 648610](https://bugzil.la/648610)).
- Les méthodes {{domxref("Node.isSupported")}} et {{domxref("document.implementation", "document.implementation.hasFeature()")}} ont été modifiées pour qu'elles renvoient toujours `true` ([bug Firefox 801425](https://bugzil.la/801425)).
- Lors de l'appel de `document.createElement(null)`, `null` sera désormais "stringified" et fonctionne comme `document.createElement("null")`.

### XForms

Le support des [XForms](/fr/docs/XForms) a été [**retiré**](http://www.philipp-wagner.com/blog/2011/07/the-future-of-mozilla-xforms/) dans Firefox 19.

## Changements pour les développeurs d'add-ons et les développeurs Mozilla

> **Note :** [`nsresult`](/fr/docs/XPCOM_API_Reference/nsresult) est maintenant fortement typé, c'est un changement majeur dans Firefox 19. Cela permet de détecter plus facilement les bugs causés par la mauvaise gestion des valeurs retournées mais peut empêcher des codes actuels de fonctionner si [`nsresult`](/fr/docs/XPCOM_API_Reference/nsresult) fait de mauvaises suppositions concernant ces valeurs.

- `getBrowserSelection()` retourne dorénavant le texte sélectionné dans un input de type `text`. Ainsi, `gContextMenu.isTextSelected` vaudra `true` quand l'utilisateur sélectionne du texte depuis un champ texte qui n'est pas de type `password`. ([bug Firefox 565717](https://bugzil.la/565717))
- [Dict.jsm](/fr/docs/Mozilla/JavaScript_code_modules/Dict.jsm): [`Dict()`](/fr/docs/Mozilla/JavaScript_code_modules/Dict.jsm#Creating_a_dictionary) accepte maintenant les String JSON. [`Dict.toJSON()`](/fr/docs/Mozilla/JavaScript_code_modules/Dict.jsm#toJSON) a été ajouté et retourne un String JSON. ([bug Firefox 727967](https://bugzil.la/727967))

### Changements dans les intefaces

- `nsIImgLoadingContent`
  - : Le paramètre (aObserver) de la méthode `addObserver()` change de `imgIDecoderObserver` pour `imgINotificationObserver`. La méthode `notify()` de `imgINotificationObserver` n'est pas scriptable, vous devez donc utiliser `createScriptedObserver()` à partir de `imgITools`.
- `nsIChannel`
  - : La propriété `contentLength` a changée de `long` à `int64_t`

## Voir aussi

- [Notes de versions de Firefox 19](https://www.mozilla.org/en-US/firefox/19.0beta/releasenotes/)
- [Compatibilité des sites avec Firefox 19](/fr/docs/Site_Compatibility_for_Firefox_19)

### Anciennes versions

{{Firefox_for_developers('18')}}
