---
title: Firefox 17 note de version pour les développeurs
short-title: Firefox 17
slug: Mozilla/Firefox/Releases/17
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 17 est sorti le 20 novembre 2012. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s Web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s Web

### HTML

- Le support de l'attribut [`sandbox`](/fr/docs/Web/HTML/Reference/Elements/iframe#sandbox) sur l'élément {{HTMLElement("iframe")}} a été ajouté. ([bogue Firefox 341604 <sup>(angl.)</sup>](https://bugzil.la/341604))

### CSS

- Le support de la règle {{CSSxRef("@supports")}} définie dans la [spécification CSS3 Conditional Rules <sup>(angl.)</sup>](https://dev.w3.org/csswg/css3-conditional/) a été lancée. Les développeur·euse·s peuvent l'essayer en passant la préférence `layout.css.supports-rule.enabled` à `true` ([bogue Firefox 649740 <sup>(angl.)</sup>](https://bugzil.la/649740))
- Le support de la pseudo-sélecteur {{CSSxRef(":dir()")}}, des sélecteurs CSS de niveau 4, permettant de sélectionner des éléments selon leur direction a été lancée. ([bogue Firefox 562169 <sup>(angl.)</sup>](https://bugzil.la/562169))
- Le support de la nouvelle valeur `isolate-override` de la propriété CSS {{CSSxRef("unicode-bidi")}} a été lancée. ([bogue Firefox 774335 <sup>(angl.)</sup>](https://bugzil.la/774335))
- Notre implémentation de {{CSSxRef("box-sizing")}} préfixé prend désormais en compte {{CSSxRef("min-height")}} et {{CSSxRef("max-height")}}. Un pas de plus vers la suppression de son préfixe. ([bogue Firefox 308801 <sup>(angl.)</sup>](https://bugzil.la/308801))

### DOM / API Web

- Prise en charge de l'interface {{DOMxRef("CSSSupportsRule")}} définie dans la [spécification CSS3 Conditional Rules <sup>(angl.)</sup>](https://drafts.csswg.org/css-conditional-3/) a été lancée ([bogue Firefox 649740 <sup>(angl.)</sup>](https://bugzil.la/649740))
- Prise en charge de l'objet {{DOMxRef("WheelEvent")}} et de l'évènement `wheel` a été lancée ([bogue Firefox 719320 <sup>(angl.)</sup>](https://bugzil.la/719320)).
- Prise en charge de la touche DOM Meta sur Linux est de nouveau disponible ([bogue Firefox 751749 <sup>(angl.)</sup>](https://bugzil.la/751749)).
- Sur {{DOMxRef("HTMLMediaElement")}}, une nouvelle méthode, `mozGetMetadata`, qui retourne un objet JavaScript dont les propriétés représentent les métadonnées de la ressource média en cours de lecture sous forme de paires {clé: valeur} ([bogue Firefox 763010 <sup>(angl.)</sup>](https://bugzil.la/763010)).
- Prise en charge de {{DOMxRef("Range.intersectsNode")}} a été ajoutée à nouveau&nbsp;; elle avait été supprimée dans Gecko 1.9 ([bogue Firefox 579638 <sup>(angl.)</sup>](https://bugzil.la/579638)).
- {{DOMxRef("Range.compareBoundaryPoints()")}} lance désormais une {{DOMxRef("DOMException")}} avec la valeur `NOT_SUPPORTED_ERR` lorsque la méthode de comparaison est invalide ([bogue Firefox 714279 <sup>(angl.)</sup>](https://bugzil.la/714279)).
- {{DOMxRef("Event.initEvent()")}} a été adaptée à la spécification&nbsp;: elle ne lance plus d'exception si elle est appelée après la distribution de l'évènement, elle est simplement une opération sans effet ([bogue Firefox 768310 <sup>(angl.)</sup>](https://bugzil.la/768310)).
- La propriété non standard {{DOMxRef("XMLHttpRequest", "XMLHttpRequest.onuploadrequest")}} a été supprimée ([bogue Firefox 761278 <sup>(angl.)</sup>](https://bugzil.la/761278)).
- La méthode {{DOMxRef("XMLHttpRequest.getAllResponseHeaders()")}} les sépare désormais avec un CRLF (au lieu d'un LF), comme demandé par la spécification ([bogue Firefox 730925 <sup>(angl.)</sup>](https://bugzil.la/730925)).

### JavaScript

- L'objet {{JSxRef("String")}} offre à présent les méthodes d'Harmony `startsWith`, `endsWith` et `contains`. ([bogue Firefox 772733 <sup>(angl.)</sup>](https://bugzil.la/772733))
- Les méthodes {{JSxRef("String.link", "link()")}} et {{JSxRef("String.anchor", "anchor()")}} de `String` échappent désormais à `'"'` (guillemet) ([bogue Firefox 352437 <sup>(angl.)</sup>](https://bugzil.la/352437)).
- Prise en charge expérimentale pour l'objet `ParallelArray` a été implémentée ([bogue Firefox 778559 <sup>(angl.)</sup>](https://bugzil.la/778559)).
- Prise en charge des itérateurs {{JSxRef("Map")}} et {{JSxRef("Set")}} ([bogue Firefox 725909 <sup>(angl.)</sup>](https://bugzil.la/725909)).
- La fonctionnalité ECMAScript pour XML (E4X), une extension JavaScript obsolète, a été désactivée par défaut pour le contenu Web ([bogue Firefox 778851 <sup>(angl.)</sup>](https://bugzil.la/778851)).
- `__exposedProps__` doit désormais être défini pour les objets JavaScript Chrome exposés au contenu. Les tentatives d'accès à des objets de contenu sans Chrome `__exposedProps__` échouent ensembles silencieusement ([bogue Firefox 553102 <sup>(angl.)</sup>](https://bugzil.la/553102)).
- Les boucles [`for...of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of) fonctionnent désormais en termes de `.iterator()` et `.next()` ([bogue Firefox 725907 <sup>(angl.)</sup>](https://bugzil.la/725907)).

### WebGL

- L'extension WebGL {{DOMxRef("EXT_texture_filter_anisotropic")}} a été dépréciée. L'utilisation de `"MOZ_EXT_texture_filter_anisotropic"` présente désormais un avertissement. Le nom préfixé sera supprimé dans une future version ([bogue Firefox 776001 <sup>(angl.)</sup>](https://bugzil.la/776001)).

### SVG

_Pas de changement._

### MathML

- L'analyse de l'attribut `align` sur les éléments {{MathMLElement("mtable")}} a été mise à jour pour mieux traiter les espaces optionnels.

### XUL

- L'élément XUL `key` supporte le modificateur «&nbsp;os&nbsp;» qui est la touche <kbd>Win</kbd> (Super ou Hyper touche). ([bogue Firefox 751749 <sup>(angl.)</sup>](https://bugzil.la/751749))

### Réseau

- La fonctionnalité non standard `XMLHttpRequest.onuploadprogress`, qui avait été dépréciée dans Firefox 14, a été supprimée.

_Pas de changement._

### Outils de développement

- Changement de la fonction d'assistance `$` de JSTerm de `getElementById` à `querySelector()` ([bogue Firefox 751749 <sup>(angl.)</sup>](https://bugzil.la/751749)).

### Agent Utilisateur

La partie de Gecko sur la chaine de l'agent utilisateur a changée. La date de compilation (qui n'avait pas été mise à jour depuis 2010) a été retirée, et c'est le numéro de version de Gecko qui a été mis en place. Donc `Gecko/20100101` -> `Gecko/17.0`. Cela peut vous affecter si vous faites du reniflement.

## Changements pour les développeur·euse·s de Mozilla et de modules complémentaires

### Changements dans les interfaces

- `nsIInputStream`
  - : La méthode `available()` retourne une longueur de 64-bit au lieu de 32-bit. ([bogue Firefox 215450 <sup>(angl.)</sup>](https://bugzil.la/215450))
- `nsIDOMWindowUtils`
  - : La méthode `sendMouseScrollEvent()` a été remplacée par `sendWheelEvent()`. ([bogue Firefox 719320 <sup>(angl.)</sup>](https://bugzil.la/719320))
- `nsIFilePicker`
  - : La méthode `open()`, pour ouvrir la boîte de dialogue d'un fichier de façon asynchrone, a été ajoutée et la méthode `show()` a été rendue obsolète. ([bogue Firefox 731307 <sup>(angl.)</sup>](https://bugzil.la/731307))
- `nsIScriptSecurityManager`
  - : Les méthodes `checkLoadURIStr()` et `checkLoadURI()` ont été retirées. ([bogue Firefox 327244 <sup>(angl.)</sup>](https://bugzil.la/327244))
- `nsIRefreshURI`
  - : La méthode `setupRefreshURIFromHeader()` a un paramètre `principal` en plus.

#### Nouvelles interfaces

Aucune.

#### Interfaces supprimées

Aucune.

## Voir aussi

- [Notes de version de Firefox 17 <sup>(angl.)</sup>](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/17.0/releasenotes/)
- [Aurora 17 est sorti, apportant une meilleure sécurité et un support pour les nouvelles normes <sup>(angl.)</sup>](https://hacks.mozilla.org/2012/08/aurora-17-is-out/) (Mozilla Hacks)
- [Compatibilité des modules complémentaires pour Firefox 17 <sup>(angl.)</sup>](https://blog.mozilla.org/addons/2012/11/08/compatibility-for-firefox-17/) (Add-ons Blog)
