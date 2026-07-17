---
title: "Node : propriété nodeName"
short-title: nodeName
slug: Web/API/Node/nodeName
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("DOM")}}

La propriété en lecture seule **`nodeName`** de {{DOMxRef("Node")}} retourne le nom du nœud courant sous forme de chaîne de caractères.

## Valeur

Une chaîne de caractères. Les valeurs pour les différents types de nœuds sont&nbsp;:

- {{DOMxRef("Attr")}}
  - : La valeur de {{DOMxRef("Attr.name")}}, c'est-à-dire le _nom qualifié_ de l'attribut.
- {{DOMxRef("CDATASection")}}
  - : La chaîne de caractères `"#cdata-section"`.
- {{DOMxRef("Comment")}}
  - : La chaîne de caractères `"#comment"`.
- {{DOMxRef("Document")}}
  - : La chaîne de caractères `"#document"`.
- {{DOMxRef("DocumentFragment")}}
  - : La chaîne de caractères `"#document-fragment"`.
- {{DOMxRef("DocumentType")}}
  - : La valeur de {{DOMxRef("DocumentType.name")}}
- {{DOMxRef("Element")}}
  - : La valeur de {{DOMxRef("Element.tagName")}}, c'est-à-dire le nom de l'élément en _majuscules_ si c'est un élément HTML,
    ou le nom de l'élément en _minuscules_ si c'est un élément XML (comme un élément SVG ou MathML).
- {{DOMxRef("ProcessingInstruction")}}
  - : La valeur de {{DOMxRef("ProcessingInstruction.target")}}
- {{DOMxRef("Text")}}
  - : La chaîne de caractères `"#text"`.

## Exemples

Cet exemple affiche les noms des nœuds de plusieurs nœuds&nbsp;:

```html
Ceci est un exemple de HTML&nbsp;:
<div id="d1">Bonjour le monde</div>
<!-- Exemple de commentaire -->
Texte <span>Texte</span> Texte<br />
<svg height="20" width="20">
  <circle cx="10" cy="10" r="5" stroke="black" stroke-width="1" fill="red" />
</svg>
<hr />
<output id="resultat">Pas encore calculé.</output>
```

et le script suivant&nbsp;:

```js
let noeud = document.querySelector("body").firstChild;
let resultat = "Noms des nœuds :\n";
while (noeud) {
  resultat += `${noeud.nodeName}\n`;
  noeud = noeud.nextSibling;
}

const sortie = document.getElementById("resultat");
sortie.innerText = resultat;
```

{{EmbedLiveSample("Exemples", "100%", 450)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.tagName")}}
- La propriété {{DOMxRef("Attr.name")}}
- La propriété {{DOMxRef("DocumentType.name")}}
- La propriété {{DOMxRef("ProcessingInstruction.target")}}
