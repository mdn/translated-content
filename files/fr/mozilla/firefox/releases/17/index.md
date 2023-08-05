---
title: Firefox 17 pour les développeurs
slug: Mozilla/Firefox/Releases/17
---

{{FirefoxSidebar}}

Firefox 17, basé sur Gecko 17.0, est sorti le 20 novembre 2012. Cette page résume les principaux changements dans Firefox 17 qui sont utiles aux développeurs.

## Changements pour les développeurs Web

### HTML

- Le support de l'attribut [`sandbox`](/fr/docs/Web/HTML/Element/iframe#sandbox) sur l'élément {{HTMLElement("iframe")}} a été ajouté. ([bug Firefox 341604](https://bugzil.la/341604))
- Le support de l'attribut `inputmode` sur l'élément {{HTMLElement("input")}} a été ajouté. (Note : actuellement, les valeurs de Gecko diffèrent de la spécification HTML de WHATWG.) ([bug Firefox 746142](https://bugzil.la/746142))

### CSS

- Le support de la règle {{cssxref("@supports")}} définie dans la [spécification CSS3 Conditional Rules](http://dev.w3.org/csswg/css3-conditional/) a été lancée. Les développeurs peuvent l'essayer en passant la préférence `layout.css.supports-rule.enabled` à `true` ([bug Firefox 649740](https://bugzil.la/649740))
- Le support de la pseudo-classe {{cssxref(":dir", ":dir()")}}, des sélecteurs CSS de niveau 4, permettant de sélectionner des éléments selon leur directionnalité a été lancée. ([bug Firefox 562169](https://bugzil.la/562169))
- Le support de la nouvelle valeur `isolate-override` de la propriété CSS {{cssxref("unicode-bidi")}} a été lancée. ([bug Firefox 774335](https://bugzil.la/774335))
- Notre implémentation de {{cssxref("box-sizing")}} préfixé prend désormais en compte {{cssxref("min-height")}} et {{cssxref("max-height")}}. Un pas de plus vers son dépréfixage. ([bug Firefox 308801](https://bugzil.la/308801))

### DOM

- Le support de l'interface {{domxref("CSSSupportsRule")}} définie dans la [spécification CSS3 Conditional Rules](http://dev.w3.org/csswg/css3-conditional/) a été lancée. ([bug Firefox 649740](https://bugzil.la/649740))
- Le support de l'objet {{domxref("WheelEvent")}} et de l'évènement `wheel` a été lancé. ([bug Firefox 719320](https://bugzil.la/719320)).
- Le support de la touche DOM Meta sur Linux est de nouveau disponible. ([bug Firefox 751749](https://bugzil.la/751749)).
- Sur {{domxref("HTMLMediaElement")}}, une nouvelle méthode a été ajoutée, `mozGetMetadata`. Elle retourne un objet JavaScript dont les propriétés représentent les métadonnées à partir de la ressource du média joué comme des paires {clé: valeur}. ([bug Firefox 763010](https://bugzil.la/763010)).

### JavaScript

- L'objet [`String`](/fr/docs/JavaScript/Référence_JavaScript/Objets_globaux/String) offre à présent les méthodes d'Harmony `startsWith`, `endsWith` et `contains`. ([bug Firefox 772733](https://bugzil.la/772733))
- Les méthodes de `String` [`link`](/fr/docs/JavaScript/Reference/Global_Objects/String/link) et [`anchor`](/fr/docs/JavaScript/Reference/Global_Objects/String/anchor) échappent désormais à **"** (guillemet). ([bug Firefox 352437](https://bugzil.la/352437))
- Le support expérimental pour l'objet [`ParallelArray`](/fr/docs/JavaScript/Référence_JavaScript/Objets_globaux/ParallelArray) a été implémenté. ([bug Firefox 778559](https://bugzil.la/778559))
- Support des itérateurs [`Map`](/fr/docs/JavaScript/Reference/Global_Objects/Map)/[`Set`](/fr/docs/JavaScript/Reference/Global_Objects/Set). ([bug Firefox 725909](https://bugzil.la/725909))
- [E4X](/fr/docs/E4X) est désactivé par défaut pour le contenu Web. ([bug Firefox 778851](https://bugzil.la/778851))
- `__exposedProps__` doit désormais être défini pour les objets JavaScript Chrome exposés au contenu. Les tentatives d'accès à des objets de contenu sans Chrome `__exposedProps__` échoueront ensembles silencieusement. ([bug Firefox 553102](https://bugzil.la/553102))

### MathML

- L'analyse de l'attribut `align` sur les éléments {{MathMLElement("mtable")}} a été mise à jour pour mieux traiter les espaces optionnels.

### XUL

- L'élément XUL [`key`](/fr/docs/XUL/key) supporte le modificateur "os" qui est la touche Win (Super ou Hyper touche). ([bug Firefox 751749](https://bugzil.la/751749))

### Agent Utilisateur

La partie de Gecko sur la chaine de l'agent utilisateur a changée. La date de compilation (qui n'avait pas été mise à jour depuis 2010) a été retirée, et c'est le numéro de version de Gecko qui a été mis en place. Donc `Gecko/20100101` -> `Gecko/17.0`. Cela peut vous affecter si vous faites du reniflement.

## Changements pour les développeurs de Mozilla et de modules complémentaires

### Changements dans les interfaces

- `nsIInputStream`
  - : La méthode `available()` retourne une longueur de 64-bit au lieu de 32-bit. ([bug Firefox 215450](https://bugzil.la/215450))
- `nsIDOMWindowUtils`
  - : La méthode `sendMouseScrollEvent()` a été remplacée par `sendWheelEvent()`. ([bug Firefox 719320](https://bugzil.la/719320))
- `nsIFilePicker`
  - : La méthode `open()`, pour ouvrir la boîte de dialogue d'un fichier de façon asynchrone, a été ajoutée et la méthode `show()` a été dépréciée. ([bug Firefox 731307](https://bugzil.la/731307))
- `nsIScriptSecurityManager`
  - : Les méthodes `checkLoadURIStr()` et `checkLoadURI()` ont été retirées. ([bug Firefox 327244](https://bugzil.la/327244))
- `nsIRefreshURI`
  - : La méthode `setupRefreshURIFromHeader()` a un paramètre `principal` en plus.

## Voir aussi

{{Firefox_for_developers('16')}}
