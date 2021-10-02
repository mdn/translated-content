---
title: element.removeAttributeNS
slug: Web/API/Element/removeAttributeNS
tags:
  - API
  - DOM
  - Element
  - Méthodes
translation_of: Web/API/Element/removeAttributeNS
---
{{ APIRef("DOM") }}

`removeAttributeNS` supprime l'attribut spécifié d'un élément.

Dans Firefox 3 et postérieurs, cette méthode réinitialise les valeurs DOM à leur valeur par défaut.

## Syntaxe

    element.removeAttributeNS(namespace,attrName);

- `namespace` est une chaîne qui contient l'espace de noms de l'attribut.
- `attrName` est une chaîne qui nomme l'attribut à supprimer du noeud en cours.

## Exemple

    // <div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
    //      special:specialAlign="utterleft" width="200px" />
    d = document.getElementById("div1");
    d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
    // l'élément est devenu : <div id="div1" width="200px" />

## Notes

{{ DOMAttributeMethods() }}

## Spécification

- [DOM Level 2 Core: removeAttributeNS (en)](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-ElRemAtNS) (non normative)
