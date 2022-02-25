---
title: Document.domain
slug: Web/API/Document/domain
tags:
  - API
  - Document
  - HTML DOM
  - NeedsCompatTable
  - NeedsMarkupWork
  - NeedsSpecTable
  - Propriété
  - Reference
translation_of: Web/API/Document/domain
---
{{ApiRef}}

Retourne/définit la partie domaine de l'origine du document courant, telle qu'utilisée par la [politique d'origine identique](/fr/docs/Web/JavaScript/Same_origin_policy_for_JavaScript).

## Syntaxe

    var chaineDomaine = document.domain; document.domain = chaine;

## Exemple

```js
// Pour le document www.example.xxx/good.html,
// ce script ferme la fenêtre
var mauvaisDomaine = "www.example.xxx";

if (document.domain == mauvaisDomaine )
   window.close(); // juste un exemple - window.close() n'a parfois aucun effet.
```

```js
// Pour l'URI https://developer.mozilla.org/en-US/docs/Web, ce qui
// suit définit le domaine comme étant la chaîne "developer.mozilla.org"
var domaine = document.domain;
```

## Notes

Cette propriété retourne `null` si le domaine du document ne peut pas être identifié.

Mozilla vous laissera la définir à un superdomaine de la valeur courante, contraint par son [domaine de base](/en-US/docs/XPCOM_Interface_Reference/nsIEffectiveTLDService#getBaseDomain.28.29). Par exemple, sur developer.mozilla.org, il est possible de la définir à "mozilla.org" mais pas à "mozilla.com" ou "org".

Si cette propriété est définie avec succès, la partie "port" de l'origine est également définie à null.

Mozilla fait la distinction entre la propriété d'un `document.domain` qui n'a jamais été modifiée d'une explicitement définie avec le même domaine que l'URL du document, même si la propriété renvoie la même valeur dans les deux cas. Un document est autorisé à accéder à un autre si il ont tous deux défini `document.domain` à la même valeur, indiquant leur intention de coopérer, ou si aucun des deux n'a défini `document.domain` et que les domaines dans les URLs sont les mêmes ([implementation](https://mxr.mozilla.org/mozilla-central/source/caps/nsPrincipal.cpp?rev=ecb7068b07a1&mark=199-215#199)). Sans cette politique spéciale, chaque site serait sujet au Cross-Site-Scripting (XSS)  depuis ses sous-domaines (par exemple, <https://bugzilla.mozilla.org> pourrait être attaqué par des pièces jointes de bugs sur <https://bug*.bugzilla.mozilla.org>).

## Spécification

- [DOM Level 2 HTML: document.domain](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-2250147) (le décrit comme étant en lecture-seule)
- [HTML5: document.domain](https://html.spec.whatwg.org/multipage/browsers.html#relaxing-the-same-origin-restriction) (décrit un comportement similaire à celui de Mozilla)

## Voir aussi

- [Politique de même origine pour JavaScriptHTML](/fr/docs/Web/JavaScript/Same_origin_policy_for_JavaScript)
