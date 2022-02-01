---
title: element.offsetParent
slug: Web/API/HTMLElement/offsetParent
tags:
  - DOM
  - DOM_0
  - Référence_du_DOM_Gecko
translation_of: Web/API/HTMLElement/offsetParent
---
{{ ApiRef() }}

### Résumé

Renvoie une référence à l'objet qui est l'élément conteneur positionné le plus proche (dans la hiérarchie de positionnement). Si l'élément n'est pas positionné, c'est l'élément racine (html en mode de respect des standards ; body en mode de rendu quirks) qui est l'**offsetParent**.

### Syntaxe

    objetParent = element.offsetParent

### Paramètres

- `objetParent` est une référence à l'élément dans lequel l'élément courant est positionné.

### Spécification

{{ DOM0() }}
