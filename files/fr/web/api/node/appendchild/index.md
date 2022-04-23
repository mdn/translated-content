---
title: element.appendChild
slug: Web/API/Node/appendChild
tags:
  - API
  - Ajout
  - DOM
  - Enfant
  - Méthodes
  - Noeuds
translation_of: Web/API/Node/appendChild
---
{{APIRef("DOM")}}

La méthode **`Node.appendChild()`** ajoute un nœud à la fin de la liste des enfants d'un nœud parent spécifié. Si l'enfant donné est une référence à un nœud existant dans le document, `appendChild()` le déplace de sa position actuelle vers une nouvelle position (il n'est pas nécessaire de supprimer le noeud sur son noeud parent avant de l'ajouter à un autre).

Cela signifie qu'un noeud ne peut pas être à deux points du document simultanément. Donc, si le nœud a déjà un parent, le nœud est d'abord retiré, puis ajouté à la nouvelle position. Le {{domxref("Node.cloneNode()")}} peut être utilisé pour réaliser une copie de noeud avant de l'ajouter à son nouveau parent. Notez que les copies faites avec `cloneNode` ne seront pas automatiquement synchronisées.

Si l'enfant donné est un {{domxref("DocumentFragment")}} , le contenu entier du {{domxref("DocumentFragment")}} est déplacé dans la liste d'enfants du noeud parent spécifié.

## Syntaxe

    var elementAjoute = element.appendChild(enfant);

### Paramètres

- **enfant**
  - : Le noeud à ajouter au noeud parent donné (généralement un élément).

### Valeur renvoyée

La valeur renvoyée est l'enfant ajouté sauf si l'enfant donné est un {{domxref ("DocumentFragment")}}, auquel cas le {{domxref ("DocumentFragment")}} vide est renvoyé.

## Notes

Le chaînage peut ne pas fonctionner comme prévu en raison de `appendChild()` renvoyant l'élément enfant :

```js
var aBlock = doc.createElement('block').appendChild(doc.createElement('b'));
```

Définit `aBlock` pour `<b></b>` uniquement, ce que vous ne voulez probablement pas.

## Exemple

```js
// Crée un nouvel élément paragraphe et l'ajoute à la fin du corps du document
var p = document.createElement("p");
document.body.appendChild(p);
```

## Spécification



| Spécification                                                                                            | Statut                           | Commentaire                                            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------ |
| {{SpecName('DOM WHATWG', '#dom-node-appendchild', 'Node.appendChild()')}}         | {{Spec2('DOM WHATWG')}} | Pas de changement de {{SpecName("DOM3 Core")}}. |
| {{SpecName('DOM3 Core', 'core.html#ID-184E7107', 'Node.appendChild()')}}         | {{Spec2('DOM3 Core')}}     | Pas de changement de {{SpecName("DOM2 Core")}}. |
| {{SpecName('DOM2 Core', 'core.html#ID-184E7107', 'Node.appendChild()')}}         | {{Spec2('DOM2 Core')}}     | Pas de changement de {{SpecName("DOM1")}}.     |
| {{SpecName('DOM1', 'level-one-core.html#ID-184E7107', 'Node.appendChild()')}} | {{Spec2('DOM1')}}         | Définition initiale.                                   |

## Compatibilité des navigateurs

{{Compat("api.Node.appendChild")}}

## Voir aussi

- {{domxref("Node.removeChild")}}
- {{domxref("Node.replaceChild")}}
- {{domxref("Node.insertBefore")}}
- {{domxref("Node.hasChildNodes")}}
- {{domxref("ParentNode.append()")}}
