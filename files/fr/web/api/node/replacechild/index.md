---
title: "Node : méthode replaceChild()"
short-title: replaceChild()
slug: Web/API/Node/replaceChild
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}

La méthode **`replaceChild()`** de l'interface {{DOMxRef("Node")}} remplace un nœud enfant par un autre nœud au sein du nœud parent défini.

## Syntaxe

```js-nolint
replaceChild(newChild, oldChild)
```

### Paramètres

- `newChild`
  - : Le nouveau nœud qui remplace `oldChild`.
    > [!WARNING]
    > Si le nouveau nœud est déjà présent ailleurs dans le DOM, il est d'abord retiré de cette position.
- `oldChild`
  - : Le nœud enfant à remplacer.

> [!NOTE]
> L'ordre des paramètres, _nouveau_ avant _ancien_, est inhabituel.
> {{DOMxRef("Element.replaceWith()")}}, qui s'applique uniquement aux nœuds qui sont des éléments, peut être plus facile à lire et à utiliser.

### Valeur de retour

L'objet {{DOMxRef("Node")}} remplacé. Il s'agit du même nœud que `oldChild`.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Levée lorsque les contraintes de l'arbre DOM sont violées, c'est-à-dire si l'un des cas suivants se produit&nbsp;:
    - Si le parent de `oldChild` n'est pas un objet {{DOMxRef("Document")}}, un objet {{DOMxRef("DocumentFragment")}} ou un objet {{DOMxRef("Element")}}.
    - Si le remplacement de `oldChild` par `newChild` entraîne un cycle, c'est-à-dire si `newChild` est un ancêtre du nœud.
    - Si `newChild` n'est pas un objet {{DOMxRef("DocumentFragment")}}, un objet {{DOMxRef("DocumentType")}}, un objet {{DOMxRef("Element")}}, ou un objet {{DOMxRef("CharacterData")}}.
    - Si le nœud actuel est un {{DOMxRef("Text")}}, et que son parent est un {{DOMxRef("Document")}}.
    - Si le nœud actuel est un {{DOMxRef("DocumentType")}} et que son parent n'est pas un {{DOMxRef("Document")}}, car un _doctype_ doit toujours être un descendant direct d'un _document_.
    - Si le parent du nœud est un {{DOMxRef("Document")}} et que `newChild` est un {{DOMxRef("DocumentFragment")}} avec plus d'un enfant {{DOMxRef("Element")}}, ou qui a un enfant {{DOMxRef("Text")}}.
    - Si le remplacement de `oldChild` par `newChild` entraîne un {{DOMxRef("Document")}} avec plus d'un {{DOMxRef("Element")}} comme enfant.
    - Si le remplacement de `oldChild` par `newChild` entraîne la présence d'un nœud {{DOMxRef("Element")}} avant un nœud {{DOMxRef("DocumentType")}}.
- `NotFoundError` {{DOMxRef("DOMException")}}
  - : Levée si le parent de `oldChild` n'est pas le nœud actuel.

## Exemples

```js
// Étant donné que :
// <div>
//  <span id="spanEnfant">toto truc</span>
// </div>

// Crée un nœud d'élément vide
// sans ID, sans attributs et sans contenu
const sp1 = document.createElement("span");

// Donne un attribut id appelé "nouveauSpan"
sp1.id = "nouveauSpan";

// Crée du contenu pour le nouvel élément
const contenuSp1 = document.createTextNode(
  "nouvel élément span de remplacement.",
);

// Applique ce contenu au nouvel élément
sp1.appendChild(contenuSp1);

// Crée une référence au nœud existant à remplacer
const sp2 = document.getElementById("spanEnfant");
const divParent = sp2.parentNode;

// Remplace le nœud existant sp2 par le nouvel élément span sp1
divParent.replaceChild(sp1, sp2);

// Résultat :
// <div>
//   <span id="nouveauSpan">nouvel élément span de remplacement.</span>
// </div>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Node.removeChild")}}
- La propriété {{DOMxRef("Element.replaceWith")}}
