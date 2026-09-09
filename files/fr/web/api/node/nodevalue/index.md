---
title: "Node : propriété nodeValue"
short-title: nodeValue
slug: Web/API/Node/nodeValue
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

La propriété **`nodeValue`** de l'interface {{DOMxRef("Node")}} retourne ou définit la valeur du nœud actuel.

## Valeur

Une chaîne de caractères contenant la valeur du nœud actuel, le cas échéant.
Pour le document lui-même, `nodeValue` retourne `null`.
Pour les nœuds de type texte, commentaire et CDATA, `nodeValue` retourne le contenu du nœud.
Pour les nœuds d'attribut, la valeur de l'attribut est retournée.

Le tableau suivant montre les valeurs de retour pour différents types de nœuds.

| Nœud                                 | Valeur de nodeValue              |
| ------------------------------------ | -------------------------------- |
| {{DOMxRef("CDATASection")}}          | Contenu de la section CDATA      |
| {{DOMxRef("Comment")}}               | Contenu du commentaire           |
| {{DOMxRef("Document")}}              | `null`                           |
| {{DOMxRef("DocumentFragment")}}      | `null`                           |
| {{DOMxRef("DocumentType")}}          | `null`                           |
| {{DOMxRef("Element")}}               | `null`                           |
| {{DOMxRef("NamedNodeMap")}}          | `null`                           |
| {{DOMxRef("ProcessingInstruction")}} | Contenu entier excluant la cible |
| {{DOMxRef("Text")}}                  | Contenu du nœud texte            |

> [!NOTE]
> Lorsque `nodeValue` est défini sur `null`, le fait de le définir n'a aucun effet.

## Exemples

```html
<div id="d1">Bonjour le monde</div>
<!-- Exemple de commentaire -->
<output id="resultat">Pas encore calculé.</output>
```

et le script suivant&nbsp;:

```js
let noeud = document.querySelector("body").firstChild;
let resultat = "Noms des nœuds :\n";
while (noeud) {
  resultat += `Valeur de ${noeud.nodeName} : ${noeud.nodeValue}\n`;
  noeud = noeud.nextSibling;
}

const sortie = document.getElementById("resultat");
sortie.innerText = resultat;
```

{{EmbedLiveSample("Exemples", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
