---
title: "Node : méthode normalize()"
short-title: normalize()
slug: Web/API/Node/normalize
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("DOM")}}

La méthode **`normalize()`** de l'interface {{DOMxRef("Node")}} met le nœud défini et tout son sous-arbre dans une forme _normalisée_.
Dans un sous-arbre normalisé, aucun nœud texte du sous-arbre n'est vide et il n'y a pas de nœuds texte adjacents.

## Syntaxe

```js-nolint
normalize()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune.

## Exemples

```html
<output id="resultat"></output>
```

```js
const enveloppe = document.createElement("div");

enveloppe.appendChild(document.createTextNode("Partie 1 "));
enveloppe.appendChild(document.createTextNode("Partie 2 "));

let noeud = enveloppe.firstChild;
let resultat = "Avant normalisation :\n";
while (noeud) {
  resultat += ` ${noeud.nodeName}: ${noeud.nodeValue}\n`;
  noeud = noeud.nextSibling;
}

enveloppe.normalize();

noeud = enveloppe.firstChild;
resultat += "\n\nAprès normalisation :\n";
while (noeud) {
  resultat += ` ${noeud.nodeName}: ${noeud.nodeValue}\n`;
  noeud = noeud.nextSibling;
}

const sortie = document.getElementById("resultat");
sortie.innerText = resultat;
```

{{EmbedLiveSample("Exemples", "100%", 170)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Text.splitText()")}}, son opposée.
