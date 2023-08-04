---
title: Firefox 18 pour les développeurs
slug: Mozilla/Firefox/Releases/18
---

{{FirefoxSidebar}}

Firefox 18, basé sur Gecko 18.0, est sorti le 8 janvier 2013. Cette page résume les principaux changements dans Firefox 18 qui sont utiles aux développeurs.

## Changements pour les développeurs Web

### HTML

- L'attribut [`reversed`](/fr/docs/Web/HTML/Element/ol#reversed) de l'élément {{HTMLElement("ol")}} est à présent supporté. ([bug Firefox 601912](https://bugzil.la/601912))
- L'attribut [`crossorigin`](/fr/docs/Web/HTML/Element/link#crossorigin) de l'élément {{HTMLElement("link")}} est à présent supporté. ([bug Firefox 786564](https://bugzil.la/786564))
- L'attribut [`allowfullscreen`](/fr/docs/Web/HTML/Element/iframe#allowfullscreen) de {{HTMLElement("iframe")}} a été implémenté et son prédécesseur préfixé, [`mozallowfullscreen`](/fr/docs/Web/HTML/Element/iframe#mozallowfullscreen), est à présent obsolète.

### CSS

- {{cssxref("min-width")}} et {{cssxref("min-height")}} utilisent désormais le mot-clé `auto` comme _valeur initiale_ (Cela influe uniquement sur les éléments flexibles qui corrigeaient à `0`, la précédente valeur initiale, pour les autres éléments). ([bug Firefox 763689](https://bugzil.la/763689))
- La cascade a été mise à jour : désormais l'auteur des règles `!important` prend le dessus sur les [animations CSS](/fr/docs/CSS/Animations_CSS). ([bug Firefox 783714](https://bugzil.la/783714))
- La propriété raccourcie {{cssxref("background")}} reconnait à présent la propriété CSS3 {{cssxref("background-size")}}. ([bug Firefox 570326](https://bugzil.la/570326))
- Le support initial du module CSS Flexbox a été lancé. Il est désactivé par défaut mais peut être activé en passant le paramètre `layout.css.flexbox.enabled` à `true`. ([bug Firefox 666041](https://bugzil.la/666041))

### DOM

- `navigator.mozPay` a été lancé. ([bug Firefox 767818](https://bugzil.la/767818))
- `window.devicePixelRatio` a été lancé. ([bug Firefox 564815](https://bugzil.la/564815))
- Le backend MacOS X pour `window.navigator.battery` a été implémenté. ([bug Firefox 696045](https://bugzil.la/696045))
- {{domxref("BlobBuilder", "MozBlobBuilder")}} a été retiré. Les développeurs doivent utiliser le constructeur {{domxref("Blob")}} pour créer un objet `Blob`. ([bug Firefox 744907](https://bugzil.la/744907))
- L'évènement [`visibilitychange`](/fr/docs/Web/API/Document/visibilitychange_event) et l'[API Page Visibility](/fr/docs/DOM/Using_the_Page_Visibility_API) ont été dépréfixés. ([bug Firefox 812086](https://bugzil.la/812086))
- `TextDecoder` et `TextEncoder` ont été ajoutés. ([bug Firefox 764234](https://bugzil.la/764234))
- `HTMLMediaElement.src` a été séparée en deux propriétés : la propriété `src` standard, qui traite {{domxref("DOMString")}}, et la propriété préfixée `mozSrcObject`, qui traite [les flux multimédia](/fr/docs/WebRTC/MediaStream_API). ([bug Firefox 792665](https://bugzil.la/792665))
- Support des [objets transférables](/fr/docs/DOM/Using_web_workers#Passing_data_by_transferring_.C2.A0ownership_%28transferable_objects%29).

### JavaScript

- Les [Direct Proxies](/fr/docs/JavaScript/Reference/Global_Objects/Proxy) d'Harmony (ECMAScript 6) ont été lancés. ([bug Firefox 703537](https://bugzil.la/703537))

### Réseau

- Les facteurs de qualité ("q-values") sont désormais fixés à 2 chiffres dans l'en-tête HTTP `Accept-Language`. ([bug Firefox 672448](https://bugzil.la/672448))
- La syntaxe `ALLOW-FROM` de l'en-tête HTTP [`X-FRAME-OPTIONS`](/fr/docs/HTTP/X-Frame-Options) Response est à présent supportée. ([bug Firefox 690168](https://bugzil.la/690168))

## Changements pour les développeurs de Mozilla et de modules complémentaires

### Changements dans les interfaces

- `nsIStreamListener`
  - : Le 4ème paramètre (aOffset) de la méthode `onDataAvailable()` modifie unsigned long long. ([bug Firefox 784912](https://bugzil.la/784912))
- `nsIUploadChannel`
  - : `setUploadStream()` supporte plus de 2 Go de content-length. ([bug Firefox 790617](https://bugzil.la/790617))
- `nsIEditor`
  - : `addEditorObserver()` a été supprimé, utilisez `setEditorObserver()` à la place, `removeEditorObserver()` ne prend plus le paramètre `nsIEditorObserver`. ([bug Firefox 785091](https://bugzil.la/785091))
- `nsIHttpProtocolHandler`
  - : Il n'y a plus de garantie que les observateurs `http-on-modify-request` soit appelés de manière synchrone au cours de `nsIChannel.asyncOpen().` Pour les observateurs qui ont besoin d'être appelés pendant `asyncOpen()`, le nouvel observateur `http-on-opening-request` a été ajouté. [bug Firefox 800799](https://bugzil.la/800799)
- `nsIProtocolProxyService`
  - : La méthode `resolve` a été retirée. Maintenant, seule la méthode `asyncResolve` peut être utilisée. Voir ([bug Firefox 769764](https://bugzil.la/769764)).

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées.

- `nsIEditorObserver`

## Voir aussi

- [Notes de version de Firefox 18](http://www.mozilla.org/en-US/firefox/18.0/releasenotes/)
- [Aurora 18 : HiDPI & Touch Events](https://hacks.mozilla.org/2012/10/aurora-18-hidpi-touch-events/) (Mozilla Hacks)
- [Compatibilité des sites pour Firefox 18](/fr/docs/Site_Compatibility_for_Firefox_18)
- [Compatibilité des modules complémentaires pour Firefox 18](https://blog.mozilla.org/addons/2012/12/28/compatibility-for-firefox-18/) (Add-ons Blog)

### Anciennes versions

{{Firefox_for_developers('17')}}
