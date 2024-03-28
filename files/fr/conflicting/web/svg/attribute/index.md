---
title: Attributs SVG de traitement conditionnel
slug: conflicting/Web/SVG/Attribute
original_slug: Web/SVG/Attribute/Conditional_Processing
---

Les _attributs SVG de traitement conditionnel_ sont tous les attributs qui peuvent être spécifiés sur des éléments SVG pour contrôler si l'élément sur lequel il s'applique doit s'afficher ou non.

- externalResourcesRequired
- requiredExtensions
- requiredFeatures
- systemLanguage

## Attributs

- {{SVGAttr('externalResourcesRequired')}} {{deprecated_inline}}
  - : Si sa valeur vaut `true`, cela indique que le navigateur doit attendre que toutes les ressources externes nécessaires au rendu de cet élément soient chargées avant de traiter l'élément associé.
    _Valeur_: **`false`**|`true`; _Animation_: **Non**
- {{SVGAttr('requiredExtensions')}}
  - : Liste toutes les fonctionnalités devant être prises en charge par le navigateur pour autoriser l'affichage de l'élément associé.
    _Valeur_: Une liste d'URI séparées par des espaces; _Animation_: **Non**
- {{SVGAttr('requiredFeatures')}} {{deprecated_inline}}
  - : Liste toutes les fonctionnalités, [telles que définies dans la spécification SVG 1.1](https://www.w3.org/TR/SVG11/feature.html), devant être prises en charge par le navigateur pour autoriser l'affichage de l'élément associé.
    _Valeur_: Une list d'URI séparées par espaces; _Animation_: **Non**
- {{SVGAttr('systemLanguage')}}
  - : Indique la langue que l'utilisatteur doit avoir choisit pour autoriser l'affichage l'élément associé.
    _Valeur_: Une liste d'[ID de langage](http://www.ietf.org/rfc/bcp/bcp47.txt) séparés par des virgules; _Animation_: **Non**

## Compatibilité des navigateurs

{{Compat}}
