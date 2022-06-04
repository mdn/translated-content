---
title: element.normalize
slug: Web/API/Node/normalize
translation_of: Web/API/Node/normalize
---
{{ ApiRef("DOM") }}

## Résumé

Place le nœud spécifié et tout son sous-arbre dans une forme «&nbsp;normale&nbsp;». Dans un sous-arbre normalisé, aucun nœud texte n'est vide et il n'y a pas de nœuds texte adjacents.

## Syntaxe

    élément.normalize();

## Exemple

```js
var conteneur = document.createElement("div");
conteneur.appendChild( document.createTextNode("Partie 1 ") );
conteneu.appendChild( document.createTextNode("Partie 2 ") );

// Ici, conteneur.childNodes.length === 2
// conteneur.childNodes[0].textContent === "Partie 1 "
// conteneur.childNodes[1].textContent === "Partie 2 "

conteneur.normalize();

// À présent, conteneur.childNodes.length === 1
// conteneur.childNodes[0].textContent === "Partie 1 Partie 2 "
```

## Notes

## Spécification

- [DOM Level 2 Core: Node.normalize (en)](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-normalize) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-normalize) (non normative)
