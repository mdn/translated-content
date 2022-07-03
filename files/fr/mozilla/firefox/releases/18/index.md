---
title: Firefox 18 pour les développeurs
slug: Mozilla/Firefox/Releases/18
tags:
  - Firefox
  - Firefox 18
translation_of: Mozilla/Firefox/Releases/18
original_slug: Mozilla/Firefox/Versions/18
---
{{FirefoxSidebar}}

Firefox 18, basé sur Gecko 18.0, est sorti le 8 janvier 2013. Cette page résume les principaux changements dans Firefox 18 qui sont utiles aux développeurs.

## Changements pour les développeurs Web

### HTML

- L'attribut {{htmlattrxref("reversed","ol")}} de l'élément {{HTMLElement("ol")}} est à présent supporté. ({{bug("601912")}})
- L'attribut {{htmlattrxref("crossorigin","link")}} de l'élément {{HTMLElement("link")}} est à présent supporté. ({{bug("786564")}})
- L'attribut {{htmlattrxref("allowfullscreen", "iframe")}} de {{HTMLElement("iframe")}} a été implémenté et son prédécesseur préfixé, {{htmlattrxref("mozallowfullscreen", "iframe")}}, est à présent obsolète.

### CSS

- {{cssxref("min-width")}} et {{cssxref("min-height")}} utilisent désormais le mot-clé `auto` comme _valeur initiale_ (Cela influe uniquement sur les éléments flexibles qui corrigeaient à `0`, la précédente valeur initiale, pour les autres éléments). ({{bug("763689")}})
- La cascade a été mise à jour : désormais l'auteur des règles `!important` prend le dessus sur les [animations CSS](/fr/docs/CSS/Animations_CSS). ({{bug("783714")}})
- La propriété raccourcie {{cssxref("background")}} reconnait à présent la propriété CSS3 {{cssxref("background-size")}}. ({{bug("570326")}})
- Le support initial du module CSS Flexbox a été lancé. Il est désactivé par défaut mais peut être activé en passant le paramètre `layout.css.flexbox.enabled` à `true`. ({{bug('666041')}})

### DOM

- `navigator.mozPay` a été lancé. ({{bug("767818")}})
- `window.devicePixelRatio` a été lancé. ({{bug("564815")}})
- Le backend MacOS X pour `window.navigator.battery` a été implémenté. ({{bug("696045")}})
- {{domxref("BlobBuilder", "MozBlobBuilder")}} a été retiré. Les développeurs doivent utiliser le constructeur {{domxref("Blob")}} pour créer un objet `Blob`. ({{bug("744907")}})
- L'évènement {{event("visibilitychange")}} et l'[API Page Visibility](/fr/docs/DOM/Using_the_Page_Visibility_API) ont été dépréfixés. ({{bug("812086")}})
- `TextDecoder` et `TextEncoder` ont été ajoutés. ({{bug("764234")}})
- `HTMLMediaElement.src` a été séparée en deux propriétés : la propriété `src` standard, qui traite {{domxref("DOMString")}}, et la propriété préfixée `mozSrcObject`, qui traite [les flux multimédia](/fr/docs/WebRTC/MediaStream_API). ({{bug("792665")}})
- Support des [objets transférables](/fr/docs/DOM/Using_web_workers#Passing_data_by_transferring_.C2.A0ownership_%28transferable_objects%29).

### JavaScript

- Les [Direct Proxies](/fr/docs/JavaScript/Reference/Global_Objects/Proxy) d'Harmony (ECMAScript 6) ont été lancés. ({{bug("703537")}})

### Réseau

- Les facteurs de qualité ("q-values") sont désormais fixés à 2 chiffres dans l'en-tête HTTP `Accept-Language`. ({{bug("672448")}})
- La syntaxe `ALLOW-FROM` de l'en-tête HTTP [`X-FRAME-OPTIONS`](/fr/docs/HTTP/X-Frame-Options) Response est à présent supportée. ({{bug("690168")}})

## Changements pour les développeurs de Mozilla et de modules complémentaires

### Changements dans les interfaces

- `nsIStreamListener`
  - : Le 4ème paramètre (aOffset) de la méthode `onDataAvailable()` modifie unsigned long long. ({{bug("784912")}})
- `nsIUploadChannel`
  - : `setUploadStream()` supporte plus de 2 Go de content-length. ({{bug("790617")}})
- `nsIEditor`
  - : `addEditorObserver()` a été supprimé, utilisez `setEditorObserver()` à la place, `removeEditorObserver()` ne prend plus le paramètre `nsIEditorObserver`. ({{bug("785091")}})
- `nsIHttpProtocolHandler`
  - : Il n'y a plus de garantie que les observateurs `http-on-modify-request` soit appelés de manière synchrone au cours de `nsIChannel.asyncOpen().` Pour les observateurs qui ont besoin d'être appelés pendant `asyncOpen`(), le nouvel observateur `http-on-opening-request` a été ajouté. {{bug("800799")}}
- `nsIProtocolProxyService`
  - : La méthode `resolve` a été retirée. Maintenant, seule la méthode `asyncResolve` peut être utilisée. Voir ({{bug("769764")}}).

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées.

- `nsIEditorObserver`

## Voir également

- [Notes de version de Firefox 18](http://www.mozilla.org/en-US/firefox/18.0/releasenotes/)
- [Aurora 18 : HiDPI & Touch Events](https://hacks.mozilla.org/2012/10/aurora-18-hidpi-touch-events/) (Mozilla Hacks)
- [Compatibilité des sites pour Firefox 18](/fr/docs/Site_Compatibility_for_Firefox_18)
- [Compatibilité des modules complémentaires pour Firefox 18](https://blog.mozilla.org/addons/2012/12/28/compatibility-for-firefox-18/) (Add-ons Blog)

### Anciennes versions

{{Firefox_for_developers('17')}}
