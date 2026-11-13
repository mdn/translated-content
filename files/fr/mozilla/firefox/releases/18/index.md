---
title: Firefox 18 note de version pour les développeurs
short-title: Firefox 18
slug: Mozilla/Firefox/Releases/18
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 18 est sorti le 8 janvier 2013. Cet article répertorie les principaux changements utiles non seulement aux développeur·euse·s Web, mais aussi aux développeur·euse·s Firefox et Gecko ainsi qu'aux développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s Web

### HTML

- L'attribut [`reversed`](/fr/docs/Web/HTML/Reference/Elements/ol#reversed) de l'élément {{HTMLElement("ol")}} est à présent supporté. ([bogue Firefox 601912 <sup>(angl.)</sup>](https://bugzil.la/601912))
- L'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Elements/link#crossorigin) de l'élément {{HTMLElement("link")}} est à présent supporté. ([bogue Firefox 786564 <sup>(angl.)</sup>](https://bugzil.la/786564))
- L'attribut [`allowfullscreen`](/fr/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) de {{HTMLElement("iframe")}} a été implémenté et son prédécesseur préfixé, `mozallowfullscreen`, est à présent obsolète.

### CSS

- {{CSSxRef("min-width")}} et {{CSSxRef("min-height")}} utilisent désormais le mot-clé `auto` comme _valeur initiale_ (Cela influe uniquement sur les éléments flexibles qui corrigeaient à `0`, la précédente valeur initiale, pour les autres éléments). ([bogue Firefox 763689 <sup>(angl.)</sup>](https://bugzil.la/763689))
- La cascade a été mise à jour&nbsp;: désormais l'auteur·ice des règles `!important` prend le dessus sur les [animations CSS](/fr/docs/Web/CSS/Guides/Animations). ([bogue Firefox 783714 <sup>(angl.)</sup>](https://bugzil.la/783714))
- La propriété raccourcie {{CSSxRef("background")}} reconnait à présent la propriété CSS3 {{CSSxRef("background-size")}}. ([bogue Firefox 570326 <sup>(angl.)</sup>](https://bugzil.la/570326))
- Le support initial du module CSS Flexbox a été lancé. Il est désactivé par défaut mais peut être activé en passant le paramètre `layout.css.flexbox.enabled` à `true`. ([bogue Firefox 666041 <sup>(angl.)</sup>](https://bugzil.la/666041))

### DOM

- `navigator.mozPay` a été lancé. ([bogue Firefox 767818 <sup>(angl.)</sup>](https://bugzil.la/767818))
- `window.devicePixelRatio` a été lancé. ([bogue Firefox 564815 <sup>(angl.)</sup>](https://bugzil.la/564815))
- Le backend MacOS X pour `window.navigator.battery` a été implémenté. ([bogue Firefox 696045 <sup>(angl.)</sup>](https://bugzil.la/696045))
- `MozBlobBuilder` a été retiré. Les développeurs doivent utiliser le constructeur {{DOMxRef("Blob")}} pour créer un objet `Blob`. ([bogue Firefox 744907 <sup>(angl.)</sup>](https://bugzil.la/744907))
- L'évènement {{DOMxRef("document.visibilitychange_event", "visibilitychange")}} et [l'API Page Visibility](/fr/docs/Web/API/Page_Visibility_API) ont perdu leur préfixe. ([bogue Firefox 812086 <sup>(angl.)</sup>](https://bugzil.la/812086))
- `TextDecoder` et `TextEncoder` ont été ajoutés. ([bogue Firefox 764234 <sup>(angl.)</sup>](https://bugzil.la/764234))
- `HTMLMediaElement.src` a été séparée en deux propriétés : la propriété `src` standard, qui traite une chaîne de caractères, et la propriété préfixée `mozSrcObject`, qui traite [les flux multimédia](/fr/docs/Web/API/Media_Capture_and_Streams_API). ([bogue Firefox 792665 <sup>(angl.)</sup>](https://bugzil.la/792665))
- Prise en charge des [objets transférables](/fr/docs/Web/API/Web_Workers_API/Transferable_objects).
- La méthode {{DOMxRef("Screen.lockOrientation()")}} prend désormais en charge un tableau (`Array`) de chaînes de caractères comme argument ([bogue Firefox 784549 <sup>(angl.)</sup>](https://bugzil.la/784549)).

### JavaScript

- Les [mandataires directs](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy) d'Harmony (ECMAScript 6) ont été lancés ([bogue Firefox 703537 <sup>(angl.)</sup>](https://bugzil.la/703537)). Attention&nbsp;: l'implémentation contient quelques bugs connus, des fonctionnalités manquantes et des divergences par rapport à l'état actuel de la spécification. Ne vous fiez pas à cette implémentation pour du code en production.
- La méthode `contains()` d'ECMAScript 2015 est désormais implémentée sur les chaînes de caractères. Malheureusement, cela n'est pas compatible avec Mootools 1.2, qui attend un comportement différent de `contains()` sur les chaînes de caractères mais ne le garantit pas. Les versions plus récentes de Mootools corrigent ce problème&nbsp;; les sites devraient mettre à jour leur version de Mootools à une version supérieure à 1.2.

### WebGL

- La version préfixée de l'extension WebGL {{domxref("EXT_texture_filter_anisotropic")}}, `"MOZ_EXT_texture_filter_anisotropic"`, a été supprimée ([bogue Firefox 790946 <sup>(angl.)</sup>](https://bugzil.la/790946)).

### SVG

_Pas de changement._

### MathML

_Pas de changement._

### XUL

_Pas de changement._

### Réseau

- Les facteurs de qualité («&nbsp;q-values&nbsp;») sont désormais fixés à 2 chiffres dans l'en-tête HTTP `Accept-Language`. ([bogue Firefox 672448 <sup>(angl.)</sup>](https://bugzil.la/672448))
- La syntaxe `ALLOW-FROM` de l'en-tête de réponse HTTP {{HTTPHeader("X-FRAME-OPTIONS")}} est à présent prise en charge. ([bogue Firefox 690168 <sup>(angl.)</sup>](https://bugzil.la/690168))

## Changements pour les développeur·euse·s de Mozilla et de modules complémentaires

### Changements dans les interfaces

- `nsIStreamListener`
  - : Le 4ème paramètre (aOffset) de la méthode `onDataAvailable()` modifie `unsigned long long`. ([bogue Firefox 784912 <sup>(angl.)</sup>](https://bugzil.la/784912))
- `nsIUploadChannel`
  - : `setUploadStream()` supporte plus de 2 Go de `content-length`. ([bogue Firefox 790617 <sup>(angl.)</sup>](https://bugzil.la/790617))
- `nsIEditor`
  - : `addEditorObserver()` a été supprimé, utilisez `setEditorObserver()` à la place, `removeEditorObserver()` ne prend plus le paramètre `nsIEditorObserver`. ([bogue Firefox 785091 <sup>(angl.)</sup>](https://bugzil.la/785091))
- `nsIHttpProtocolHandler`
  - : Il n'y a plus de garantie que les observateurs `http-on-modify-request` soit appelés de manière synchrone au cours de `nsIChannel.asyncOpen().` Pour les observateurs qui ont besoin d'être appelés pendant `asyncOpen()`, le nouvel observateur `http-on-opening-request` a été ajouté. [bogue Firefox 800799 <sup>(angl.)</sup>](https://bugzil.la/800799)
- `nsIProtocolProxyService`
  - : La méthode `resolve` a été retirée. Maintenant, seule la méthode `asyncResolve` peut être utilisée. Voir ([bogue Firefox 76976 <sup>(angl.)</sup>](https://bugzil.la/769764)).

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées.

- `nsIEditorObserver`

## Voir aussi

- [Notes de version de Firefox 18 <sup>(angl.)</sup>](https://www.mozilla.org/en-US/firefox/18.0/releasenotes/)
- [Aurora 18&nbsp;: HiDPI & Touch Events <sup>(angl.)</sup>](https://hacks.mozilla.org/2012/10/aurora-18-hidpi-touch-events/) (Mozilla Hacks)
- [Compatibilité des modules complémentaires pour Firefox 18 <sup>(angl.)</sup>](https://blog.mozilla.org/addons/2012/12/28/compatibility-for-firefox-18/) (Add-ons Blog)
