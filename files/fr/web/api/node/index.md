---
title: Node
slug: Web/API/Node
l10n:
  sourceCommit: 5cfd038b0d37452042461cfe169c0c9ab87be94d
---

{{ApiRef("DOM")}}

L'interface abstraite **`Node`** du {{Glossary("DOM")}} est une classe commune sur laquelle se basent de nombreux autres objets de l'API DOM, permettant ainsi d'utiliser ces types d'objets de manière similaire et souvent interchangeable. En tant que classe abstraite, il n'existe pas d'objet `Node` simple. Tous les objets qui implémentent la fonctionnalité `Node` sont basés sur l'une de ses sous-classes. Les plus notables sont {{domxref("Document")}}, {{domxref("Element")}} et {{domxref("DocumentFragment")}}.

De plus, chaque type de nœud DOM est représenté par une interface basée sur `Node`. Cela inclut {{DOMxRef("Attr")}}, {{DOMxRef("CharacterData")}} (sur laquelle se basent {{DOMxRef("Text")}}, {{DOMxRef("Comment")}}, {{DOMxRef("CDATASection")}} et {{DOMxRef("ProcessingInstruction")}}) ainsi que {{DOMxRef("DocumentType")}}.

Dans certains cas, une fonctionnalité particulière de l'interface de base `Node` peut ne pas s'appliquer à l'une de ses interfaces enfants&nbsp;; dans ce cas, le nœud héritant peut retourner `null` ou lever une exception, selon les circonstances. Par exemple, tenter d'ajouter des enfants à un type de nœud qui ne peut pas avoir d'enfants lèvera une exception.

{{InheritanceDiagram}}

## Propriétés d'instance

_En plus des propriétés ci-dessous, `Node` hérite des propriétés de son parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Node.baseURI")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères représentant l'URL de base du document contenant le objet `Node`.
- {{DOMxRef("Node.childNodes")}} {{ReadOnlyInline}}
  - : Retourne une liste de nœuds {{DOMxRef("NodeList")}} en direct contenant tous les enfants de ce nœud (y compris les éléments, texte et commentaires). Le fait que {{DOMxRef("NodeList")}} soit en direct signifie que si les enfants du `Node` changent, l'objet {{DOMxRef("NodeList")}} est automatiquement mis à jour.
- {{DOMxRef("Node.firstChild")}} {{ReadOnlyInline}}
  - : Retourne un objet `Node` représentant le premier nœud enfant direct de l'actuel, ou `null` si le nœud n'a pas d'enfant.
- {{DOMxRef("Node.isConnected")}} {{ReadOnlyInline}}
  - : Un booléen indiquant si le nœud est connecté ou non (directement ou indirectement) à l'objet contextuel, par exemple l'objet {{DOMxRef("Document")}} dans le cas du DOM normal, ou le {{DOMxRef("ShadowRoot")}} dans le cas d'un DOM fantôme (<i lang="en">shadow DOM</i> en anglais).
- {{DOMxRef("Node.lastChild")}} {{ReadOnlyInline}}
  - : Retourne un objet `Node` représentant le dernier nœud enfant direct du nœud, ou `null` si le nœud n'a pas d'enfant.
- {{DOMxRef("Node.nextSibling")}} {{ReadOnlyInline}}
  - : Retourne un objet `Node` représentant le nœud suivant dans l'arbre, ou `null` s'il n'y a pas de tel nœud.
- {{DOMxRef("Node.nodeName")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères contenant le nom du objet `Node`. La structure du nom diffère selon le type de nœud. Par exemple, un {{DOMxRef("HTMLElement")}} contiendra le nom de la balise correspondante, comme `'AUDIO'` pour un {{DOMxRef("HTMLAudioElement")}}, un nœud {{DOMxRef("Text")}} aura la chaîne `'#text'`, ou un nœud {{DOMxRef("Document")}} aura la chaîne `'#document'`.
- {{DOMxRef("Node.nodeType")}} {{ReadOnlyInline}}
  - : Retourne un `unsigned short` représentant le type du nœud. Les valeurs possibles sont&nbsp;:

    | Nom                           | Valeur |
    | ----------------------------- | ------ |
    | `ELEMENT_NODE`                | `1`    |
    | `ATTRIBUTE_NODE`              | `2`    |
    | `TEXT_NODE`                   | `3`    |
    | `CDATA_SECTION_NODE`          | `4`    |
    | `PROCESSING_INSTRUCTION_NODE` | `7`    |
    | `COMMENT_NODE`                | `8`    |
    | `DOCUMENT_NODE`               | `9`    |
    | `DOCUMENT_TYPE_NODE`          | `10`   |
    | `DOCUMENT_FRAGMENT_NODE`      | `11`   |

- {{DOMxRef("Node.nodeValue")}}
  - : Retourne ou définit la valeur du nœud actuel.
- {{DOMxRef("Node.ownerDocument")}} {{ReadOnlyInline}}
  - : Retourne l'interface {{DOMxRef("Document")}} à laquelle ce nœud appartient. Si le nœud est lui-même un document, retourne `null`.
- {{DOMxRef("Node.parentNode")}} {{ReadOnlyInline}}
  - : Retourne un objet `Node` qui est le parent de ce nœud. S'il n'y a pas de tel nœud — par exemple, si ce nœud est au sommet de l'arbre, ou s'il ne participe pas à un arbre — cette propriété retourne `null`.
- {{DOMxRef("Node.parentElement")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("Element")}} qui est le parent de ce nœud. Si le nœud n'a pas de parent, ou si ce parent n'est pas un {{DOMxRef("Element")}}, cette propriété retourne `null`.
- {{DOMxRef("Node.previousSibling")}} {{ReadOnlyInline}}
  - : Retourne un objet `Node` représentant le nœud précédent dans l'arbre, ou `null` s'il n'y a pas de tel nœud.
- {{DOMxRef("Node.textContent")}}
  - : Retourne ou définit le contenu textuel d'un élément et de tous ses descendants.

## Méthodes d'instance

_En plus des méthodes ci-dessous, `Node` hérite des méthodes de son parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Node.appendChild()")}}
  - : Ajoute l'argument `childNode` définit comme dernier enfant au nœud actuel.
    Si l'argument fait référence à un nœud existant sur l'arborescence DOM, le nœud sera détaché de sa position actuelle et attaché à la nouvelle position.
- {{DOMxRef("Node.cloneNode()")}}
  - : Clone un objet `Node`, et éventuellement, tout son contenu. Par défaut, cette méthode clone le contenu du nœud.
- {{DOMxRef("Node.compareDocumentPosition()")}}
  - : Compare la position du nœud actuel par rapport à un autre nœud dans tout autre document.
- {{DOMxRef("Node.contains()")}}
  - : Retourne une valeur `true` ou `false` indiquant si un nœud est ou non un descendant du nœud appelant.
- {{DOMxRef("Node.getRootNode()")}}
  - : Retourne la racine de l'objet contextuel qui comprend éventuellement la racine fantôme (<i lang="en">shadow root</i> en anglais) si elle est disponible.
- {{DOMxRef("Node.hasChildNodes()")}}
  - : Retourne un booléen indiquant si l'élément a ou non des nœuds enfants.
- {{DOMxRef("Node.insertBefore()")}}
  - : Insère un objet `Node` avant le nœud de référence, en tant qu'enfant d'un nœud parent définit.
- {{DOMxRef("Node.isDefaultNamespace()")}}
  - : Accepte une URI d'espace de noms comme argument et retourne un booléen avec la valeur `true` si l'espace de noms est l'espace de noms par défaut sur le nœud donné ou `false` dans le cas contraire.
- {{DOMxRef("Node.isEqualNode()")}}
  - : Retourne un booléen qui indique si oui ou non deux nœuds sont du même type et si tous leurs points de données de définition correspondent.
- {{DOMxRef("Node.isSameNode()")}}
  - : Retourne un booléen indiquant si oui ou non les deux nœuds sont identiques (c'est-à-dire qu'ils font référence au même objet).
- {{DOMxRef("Node.lookupPrefix()")}}
  - : Retourne une chaîne de caractères contenant le préfixe pour une URI d'espace de noms donnée, s'il est présent, ou `null` dans le cas contraire. Lorsque plusieurs préfixes sont possibles, le résultat dépend de l'implémentation.
- {{DOMxRef("Node.lookupNamespaceURI()")}}
  - : Accepte un préfixe et retourne l'URI d'espace de noms qui lui est associée sur le nœud donné si elle est trouvée (et `null` sinon). Fournir `null` pour le préfixe retournera l'espace de noms par défaut.
- {{DOMxRef("Node.normalize()")}}
  - : Nettoie tous les nœuds de texte sous cet élément (fusionne les adjacents, supprime les vides).
- {{DOMxRef("Node.removeChild()")}}
  - : Supprime un nœud enfant de l'élément actuel, qui doit être un enfant du nœud actuel.
- {{DOMxRef("Node.replaceChild()")}}
  - : Remplace un objet `Node` enfant du nœud actuel par le second donné en paramètre.

## Événements

- {{domxref("Node/selectstart_event", "selectstart")}}
  - : Se déclenche quand l'utilisateur·ice commence une nouvelle sélection dans ce nœud.

## Exemples

### Supprimer tous les enfants imbriqués dans un nœud

Cette fonction supprime chaque premier enfant d'un élément, jusqu'à ce qu'il n'en reste aucun.

```js
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
```

L'utilisation de cette fonction se fait en un seul appel. Ici, nous vidons le corps du document&nbsp;:

```js
removeAllChildren(document.body);
```

Une alternative pourrait être de définir le textContent comme une chaîne de caractères vide&nbsp;: `document.body.textContent = ""`.

### Parcourir récursivement les nœuds enfants

La fonction suivante appelle récursivement une fonction de rappel pour chaque nœud contenu par un nœud racine (y compris la racine elle-même)&nbsp;:

```js
function eachNode(rootNode, callback) {
  if (!callback) {
    const nodes = [];
    eachNode(rootNode, (node) => {
      nodes.push(node);
    });
    return nodes;
  }

  if (callback(rootNode) === false) {
    return false;
  }

  if (rootNode.hasChildNodes()) {
    for (const node of rootNode.childNodes) {
      if (eachNode(node, callback) === false) {
        return;
      }
    }
  }
}
```

La fonction appelle récursivement une fonction pour chaque nœud descendant de `rootNode` (y compris la racine elle-même).

Si `callback` est omis, la fonction retourne un tableau ({{jsxref("Array")}}) à la place, qui contient `rootNode` et tous les nœuds contenus à l'intérieur.

Si `callback` est fourni et qu'il retourne `false` quand il est appelé, le niveau de récursion actuel est interrompu, et la fonction reprend l'exécution au niveau du dernier parent. Ceci peut être utilisé pour interrompre les boucles une fois qu'un nœud a été trouvé (comme rechercher un nœud de texte qui contient une certaine chaîne de caractères).

La fonction a deux paramètres&nbsp;:

- `rootNode`
  - : L'objet `Node` dont les descendants seront parcourus récursivement.
- `callback` {{optional_inline}}
  - : Une [fonction](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function) de rappel optionnelle qui reçoit un objet `Node` comme seul argument. Si elle est omise, `eachNode` retourne un tableau ({{jsxref("Array")}}) de tous les nœuds contenus dans `rootNode` (y compris la racine elle-même).

Ce qui suit démontre une utilisation concrète de la fonction `eachNode()`&nbsp;: rechercher du texte sur une page web.

Nous utilisons une fonction d'encapsulation nommée `grep` pour faire la recherche&nbsp;:

```js
function grep(parentNode, pattern) {
  let matches = [];
  let endScan = false;

  eachNode(parentNode, (node) => {
    if (endScan) {
      return false;
    }

    // Ignore tout ce qui n'est pas un nœud de texte
    if (node.nodeType !== Node.TEXT_NODE) {
      return;
    }

    if (typeof pattern === "string" && node.textContent.includes(pattern)) {
      matches.push(node);
    } else if (pattern.test(node.textContent)) {
      if (!pattern.global) {
        endScan = true;
        matches = node;
      } else {
        matches.push(node);
      }
    }
  });

  return matches;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
