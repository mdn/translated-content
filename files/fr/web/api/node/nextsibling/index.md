---
title: "Node : propriété nextSibling"
short-title: nextSibling
slug: Web/API/Node/nextSibling
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

La propriété en lecture seule **`nextSibling`** de l'interface {{DOMxRef("Node")}} retourne le nœud immédiatement suivant celui défini dans la liste {{DOMxRef("Node.childNodes","childNodes")}} de son parent, ou retourne `null` si le nœud défini est le dernier enfant de l'élément parent.

> [!NOTE]
> Les navigateurs insèrent des nœuds {{DOMxRef("Text")}} dans un document pour représenter les espaces blancs dans le code source.
> Par conséquent, un nœud obtenu, par exemple, en utilisant {{DOMxRef("Node.firstChild")}} ou {{DOMxRef("Node.previousSibling")}} peut faire référence à un nœud texte d'espacement plutôt qu'à l'élément réel que l'auteur·ice voulait obtenir.
>
> La section [Travailler avec les espaces blancs dans le DOM](/fr/docs/Web/CSS/Guides/Text/Whitespace#travailler_avec_des_espaces_blancs_dans_le_dom) contient plus d'informations sur ce comportement.
>
> Vous pouvez utiliser {{DOMxRef("Element.nextElementSibling", "nextElementSibling")}} pour obtenir l'élément suivant en ignorant les nœuds d'espacement, les autres textes entre les éléments ou les commentaires.
>
> Pour naviguer dans la liste des nœuds enfants dans le sens inverse, utilisez {{DOMxRef("Node.previousSibling")}}.

## Valeur

Un objet {{DOMxRef("Node")}} représentant le nœud suivant du nœud actuel, ou `null` s'il n'y en a pas.

## Exemples

```html
<div id="div-1">C'est le div-1</div>
<div id="div-2">C'est le div-2</div>
<br />
<output><em>Pas calculé.</em></output>
```

```js
let el = document.getElementById("div-1").nextSibling;
let i = 1;

let resultat = "Voisins de div-1:\n";

while (el) {
  resultat += `${i}. ${el.nodeName}\n`;
  el = el.nextSibling;
  i++;
}

const sortie = document.querySelector("output");
sortie.innerText = resultat;
```

{{EmbedLiveSample("Exemples", "100%", 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.nextElementSibling")}}
- La propriété {{DOMxRef("Node.previousSibling")}}
