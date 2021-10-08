---
title: element.replaceChild
slug: Web/API/Node/replaceChild
tags:
  - API
  - DOM
  - Enfant
  - Méthodes
  - Noeuds
  - Remplacement
translation_of: Web/API/Node/replaceChild
---
{{APIRef("DOM")}}

La méthode **`Node.replaceChild()`** remplace un nœud enfant du noeud spécifié par un autre nœud.

## Syntaxe

    replacedNode = parentNode.replaceChild(newChild, oldChild);

- `newChild` est le nouveau nœud qui remplacera `oldChild`. S'il existe déjà dans le DOM, il sera d'abord enlevé.
- `oldChild` est le nœud existant à remplacer.
- `replaceNode` est le nœud remplacé. C'est le même nœud que `oldChild`.

## Exemple

```js
// Étant donné que :
// <div>
//   <span id="childSpan">foo bar</span>
// </div>

// Crée un nœud d'élément vide
// sans ID, sans attributs et sans contenu
var sp1 = document.createElement("span");

// Donne un attribut id appelé "newSpan"
sp1.id = "newSpan";

// Crée du contenu pour le nouvel élément
var sp1_content = document.createTextNode("nouvel élément span de remplacement.");

// Applique ce contenu au nouvel élément
sp1.appendChild(sp1_content);

// Construit une référence au nœud existant à remplacer
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// Remplacer le noeud existant sp2 par le nouvel élément span sp1
parentDiv.replaceChild(sp1, sp2);

// Résultat :
// <div>
//   <span id="newSpan">nouvel élément span de remplacement.</span>
// </div>
```

## Spécifications

| Spécification                                                                                        | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName("DOM WHATWG", "#dom-node-replacechild", "Node: replaceChild")}} | {{Spec2("DOM WHATWG")}} |             |

## Compatibilité des navigateurs

{{Compat("api.Node.replaceChild")}}

## Voir aussi

- {{domxref("Node.removeChild")}}
- {{domxref("ChildNode.replaceWith")}}
