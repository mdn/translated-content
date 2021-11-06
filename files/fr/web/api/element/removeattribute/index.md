---
title: element.removeAttribute
slug: Web/API/Element/removeAttribute
tags:
  - API
  - Attributs
  - DOM
  - Element
  - Méthodes
  - Suppression
translation_of: Web/API/Element/removeAttribute
---
{{ APIRef("DOM") }}

`removeAttribute` supprime un attribut de l'élément spécifié.

## Syntaxe

    element.removeAttribute(nomAttribut);

- `nomAttribut` est une chaîne de caractères représentant le nom de l'attribut à enlever de l'_element_ .

## Exemple

    // avant : <div id="div1" align="left" width="200">
    document.getElementById("div1").removeAttribute("align");
    // maintenant : <div id="div1" width="200">

## Notes

Il vaut mieux utiliser `removeAttribute` plutôt que de définir la valeur de l'attribut à `null` avec [setAttribute](fr/DOM/element.setAttribute).

Tenter d'effacer un attribut que l'élément ne possède pas ne provoque aucune exception.

`removeAttribute` ne renvoie rien, donc vous ne pouvez supprimer plusieurs attributs par enchaînement de cette méthode.

{{ DOMAttributeMethods() }}

## Spécification

- [DOM Level 2 Core : removeAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6D6AC0F9) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-6D6AC0F9) (non normative)
