---
title: Firefox 17 pour les développeurs
slug: Mozilla/Firefox/Releases/17
tags:
  - Firefox
  - Firefox 17
translation_of: Mozilla/Firefox/Releases/17
original_slug: Mozilla/Firefox/Versions/17
---
{{FirefoxSidebar}}

Firefox 17, basé sur Gecko 17.0, est sorti le 20 novembre 2012. Cette page résume les principaux changements dans Firefox 17 qui sont utiles aux développeurs.

## Changements pour les développeurs Web

### HTML

- Le support de l'attribut {{htmlattrxref("sandbox", "iframe")}} sur l'élément {{HTMLElement("iframe")}} a été ajouté. ({{bug(341604)}})
- Le support de l'attribut `inputmode` sur l'élément {{HTMLElement("input")}} a été ajouté. (Note : actuellement, les valeurs de Gecko diffèrent de la spécification HTML de WHATWG.) ({{bug(746142)}})

### CSS

- Le support de la règle {{cssxref("@supports")}} définie dans la [spécification CSS3 Conditional Rules](http://dev.w3.org/csswg/css3-conditional/) a été lancée. Les développeurs peuvent l'essayer en passant la préférence `layout.css.supports-rule.enabled` à `true` ({{bug(649740)}})
- Le support de la pseudo-classe {{cssxref(":dir", ":dir()")}}, des sélecteurs CSS de niveau 4, permettant de sélectionner des éléments selon leur directionnalité a été lancée. ({{bug(562169)}})
- Le support de la nouvelle valeur `isolate-override` de la propriété CSS {{cssxref("unicode-bidi")}} a été lancée. ({{bug(774335)}})
- Notre implémentation de {{cssxref("box-sizing")}} préfixé prend désormais en compte {{cssxref("min-height")}} et {{cssxref("max-height")}}. Un pas de plus vers son dépréfixage. ({{bug(308801)}})

### DOM

- Le support de l'interface {{domxref("CSSSupportsRule")}} définie dans la [spécification CSS3 Conditional Rules](http://dev.w3.org/csswg/css3-conditional/) a été lancée. ({{bug(649740)}})
- Le support de l'objet {{domxref("WheelEvent")}} et de l'évènement `wheel` a été lancé. ({{bug(719320)}}).
- Le support de la touche DOM Meta sur Linux est de nouveau disponible. ({{bug(751749)}}).
- Sur {{domxref("HTMLMediaElement")}}, une nouvelle méthode a été ajoutée, `mozGetMetadata`. Elle retourne un objet JavaScript dont les propriétés représentent les métadonnées à partir de la ressource du média joué comme des paires {clé: valeur}. ({{bug(763010)}}).

### JavaScript

- L'objet [`String`](/fr/docs/JavaScript/R%C3%A9f%C3%A9rence_JavaScript/Objets_globaux/String) offre à présent les méthodes d'Harmony `startsWith`, `endsWith` et `contains`. ({{bug(772733)}})
- Les méthodes de `String` [`link`](/fr/docs/JavaScript/Reference/Global_Objects/String/link) et [`anchor`](/fr/docs/JavaScript/Reference/Global_Objects/String/anchor) échappent désormais à **"** (guillemet). ({{bug("352437")}})
- Le support expérimental pour l'objet [`ParallelArray`](/fr/docs/JavaScript/R%C3%A9f%C3%A9rence_JavaScript/Objets_globaux/ParallelArray) a été implémenté. ({{bug(778559)}})
- Support des itérateurs [`Map`](/fr/docs/JavaScript/Reference/Global_Objects/Map)/[`Set`](/fr/docs/JavaScript/Reference/Global_Objects/Set). ({{bug(725909)}})
- [E4X](/fr/docs/E4X) est désactivé par défaut pour le contenu Web. ({{bug(778851)}})
- `__exposedProps__` doit désormais être défini pour les objets JavaScript Chrome exposés au contenu. Les tentatives d'accès à des objets de contenu sans Chrome `__exposedProps__ `échoueront ensembles silencieusement. ({{bug(553102)}})

### MathML

- L'analyse de l'attribut `align` sur les éléments {{MathMLElement("mtable")}} a été mise à jour pour mieux traiter les espaces optionnels.

### XUL

- L'élément XUL [`key`](/fr/docs/XUL/key) supporte le modificateur "os" qui est la touche Win (Super ou Hyper touche). ({{bug(751749)}})

### Agent Utilisateur

La partie de Gecko sur la chaine de l'agent utilisateur a changée. La date de compilation (qui n’avait pas été mise à jour depuis 2010) a été retirée, et c'est le numéro de version de Gecko qui a été mis en place. Donc `Gecko/20100101` -> `Gecko/17.0`. Cela peut vous affecter si vous faites du reniflement.

## Changements pour les développeurs de Mozilla et de modules complémentaires

### Changements dans les interfaces

- {{interface("nsIInputStream")}}
  - : La méthode `available()` retourne une longueur de 64-bit au lieu de 32-bit. ({{bug(215450)}})
- {{interface("nsIDOMWindowUtils")}}
  - : La méthode `sendMouseScrollEvent()` a été remplacée par `sendWheelEvent()`. ({{bug(719320)}})
- {{interface("nsIFilePicker")}}
  - : La méthode `open()`, pour ouvrir la boîte de dialogue d'un fichier de façon asynchrone, a été ajoutée et la méthode `show()` a été dépréciée. ({{bug("731307")}})
- {{interface("nsIScriptSecurityManager")}}
  - : Les méthodes `checkLoadURIStr()` et `checkLoadURI()` ont été retirées. ({{bug(327244)}})
- {{interface("nsIRefreshURI")}}
  - : La méthode `setupRefreshURIFromHeader()` a un paramètre `principal` en plus.

## Voir également

{{Firefox_for_developers('16')}}
