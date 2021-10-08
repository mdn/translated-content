---
title: element.offsetTop
slug: Web/API/HTMLElement/offsetTop
tags:
  - DOM
  - DOM_0
translation_of: Web/API/HTMLElement/offsetTop
---
{{ ApiRef() }}

### Résumé

**offsetTop** renvoie la distance entre l'élément courant et le haut du nœud [`offsetParent`](/fr/docs/DOM/element.offsetParent).

### Syntaxe

    topPos = element.offsetTop;

### Paramètres

- `topPos` est le nombre de pixels depuis le haut de l'élément parent.

### Exemple

    d = document.getElementById("div1");

    topPos = d.offsetTop;

    if (topPos > 10 ) {

        // l'objet est décalé de plus de
        // 10 pixels par rapport à son parent

    }

### Spécification

{{ DOM0() }}

### Références

[_offsetTop definition_ sur MSDN](http://msdn2.microsoft.com/en-us/library/ms534303.aspx)
