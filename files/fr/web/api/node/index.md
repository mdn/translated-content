---
title: Node
slug: Web/API/Node
tags:
  - API
  - DOM
  - Document
  - Element
  - Interface
  - Node
  - Référence DOM
  - Structure
  - hierarchy
translation_of: Web/API/Node
---
{{ApiRef("DOM")}}

**`Node`** (_nœud)_ est une classe abstraite de laquelle de nombreux objets de type DOM API héritent, leur permettant d'être traités de manière similaire et souvent interchangeable. Étant une classe abstraire, il n'existe pas d'objet qui soit directement un `Node`. Tous les objets implantant les fonctionnalités de `Node` sont des instances d'une de ses sous-classes, dont les plus notables sont {{domxref("Document")}}, {{domxref("Element")}} et {{domxref("DocumentFragment")}}.

De pls, tous les types de nœuds du DOM sont représentés par une classe héritant des propriétés et méthodes de `Node` : {{domxref("CharacterData")}} (duquel {{domxref("Text")}}, {{domxref("Comment")}} et {{domxref("CDATASection")}} héritent), {{domxref("ProcessingInstruction")}}, , {{domxref("DocumentType")}}, {{domxref("Notation")}}, {{domxref("Entity")}} et {{domxref("EntityReference")}}.

Les propriétés ou méthodes de ces interfaces peuvent retourner `null` lorsque leur existence n'est pas pertinente. Elles peuvent aussi générer une exception – par exemple lors de l'ajout d'un enfant à un type de nœud pour lequel aucun enfant ne peut exister.

{{InheritanceDiagram}}

## Propriétés

_Hérite les propriétés de son parent {{domxref("EventTarget")}}_.

- {{DOMxRef("Node.baseURI")}} {{readonlyInline}}
  - : Retourne une {{domxref("DOMString")}} (_chaine de caractères_) représentant l'URL de base du document contenant le `Node`. En HTML, il correspond au protocole, au nom de domaine et à la structure du répertoire, jusqu'au dernier `/`.
- {{DOMxRef("Node.baseURIObject")}} {{Non-standard_inline()}}
  - : (Non disponible pour le contenu Web). L'objet en lecture seule `nsIURI` représentant l'URI de base pour l'élément.
- {{DOMxRef("Node.childNodes")}} {{readonlyInline}}
  - : Renvoie un {{domxref ("NodeList")}} contenant tous les enfants de ce nœud. {{domxref ("NodeList")}} signifie que si les enfants du `Node` changent, l'objet {{domxref ("NodeList")}} est automatiquement mis à jour.
- {{DOMxRef("Node.firstChild")}} {{readonlyInline}}
  - : Renvoie un {{domxref ("Node")}} représentant le premier nœud enfant direct de ce nœud ou `null` s'il n'a pas d'enfant.
- {{DOMxRef("Node.lastChild")}} {{readonlyInline}}
  - : Retourne un {{domxref("Node")}} représentant le dernier nœud enfant direct de ce nœud ou `null` s'il n'a pas d'enfant.
- {{DOMxRef("Node.nextSibling")}} {{readonlyInline}}
  - : Retourne un {{domxref("Node")}} représentant le nœud suivant dans l'arbre ou `null` s'il n'y en a pas.
- {{DOMxRef("Node.nodeName")}} {{readonlyInline}}
  - : Retourne une {{domxref("DOMString")}} (_chaîne de caractères_) contenant le nom du nœud. La structure du nom diffère du type de nœud. Par exemple, un {{domxref("HTMLElement")}} contiendra le nom de la balise correspondante, comme `'audio'`  pour un {{domxref("HTMLAudioElement")}}, un nœud {{domxref("Text")}} doit avoir la chaîne `'#text'` ou un  {{domxref("Document")}}  doit avoir la chaîne `'#document'.`.
- {{DOMxRef("Node.nodeType")}}{{readonlyInline}}
  - : Retourne un `unsigned short` (_non signé court_) représentant le type du nœud. Les valeurs possibles sont :

| Nom                                                      | Valeur |
| -------------------------------------------------------- | ------ |
| `ELEMENT_NODE`                                           | `1`    |
| `ATTRIBUTE_NODE` {{deprecated_inline()}}        | `2`    |
| `TEXT_NODE`                                              | `3`    |
| `CDATA_SECTION_NODE` {{deprecated_inline()}}    | `4`    |
| `ENTITY_REFERENCE_NODE` {{deprecated_inline()}} | `5`    |
| `ENTITY_NODE` {{deprecated_inline()}}           | `6`    |
| `PROCESSING_INSTRUCTION_NODE`                            | `7`    |
| `COMMENT_NODE`                                           | `8`    |
| `DOCUMENT_NODE`                                          | `9`    |
| `DOCUMENT_TYPE_NODE`                                     | `10`   |
| `DOCUMENT_FRAGMENT_NODE`                                 | `11`   |
| `NOTATION_NODE` {{deprecated_inline()}}         | `12`   |

- {{DOMxRef("Node.nodeValue")}}
  - : Retourne / définit la valeur du nœud courant.
- {{DOMxRef("Node.ownerDocument")}}{{readonlyInline}}
  - : Retourne le {{domxref("Document")}}  auquel ce noeud appartient. Si aucun document ne lui est associé, il retourne `null` .
- {{DOMxRef("Node.parentNode")}}{{readonlyInline}}
  - : Retourne un {{domxref("Node")}} qui est le parent de ce nœud. S'il n'existe pas, parce qu'il est en haut de l'arbre ou parce qu'il ne participe pas à un arbre, cette propriété retourne `null` .
- {{DOMxRef("Node.parentElement")}}{{readonlyInline}}
  - : Retourne un {{domxref("Element")}} qui est le parent de ce nœud. Si le nœud n'a aucun parent ou si ce parent n'est pas un  {{domxref("Element")}} , cette propriété retourne `null`.
- {{DOMxRef("Node.previousSibling")}}{{readonlyInline}}
  - : Retourne un {{domxref("Node")}} représentant le nœud précédent dans l'arbre ou  `null` s'il n'y en a pas.
- {{DOMxRef("Node.textContent")}}
  - : Retourne / définit le contenu textuel d'un élément et de tous ses descendants.

<!---->

### Propriétés obsolètes

- {{DOMxRef("Node.localName")}} {{deprecated_inline}}{{readonlyInline}}
  - : Retourne un {{domxref("DOMString")}}  représentant la partie locale du nom d'un élément.

> **Note :** Dans Firefox 3.5 et versions antérieures, la propriété saisit le nom local pour les éléments HTML (mais pas les éléments XHTML). Dans les versions ultérieures, cela ne se produit pas, donc la propriété est en minuscule pour HTML et XHTML.

- {{DOMxRef("Node.namespaceURI")}} {{deprecated_inline}}{{readonlyInline}}
  - : L'URI du "Namespace" de ce nom, ou  `null` s'il n'y en a pas.

> **Note :** Dans Firefox 3.5 et versions antérieures, les éléments HTML ne contiennent aucun "namespace". Dans les versions ultérieures, les éléments HTML sont dans le "namespace" [`https://www.w3.org/1999/xhtml/`](https://www.w3.org/1999/xhtml/) pour HTML et XML.

- {{DOMxRef("Node.prefix")}} {{deprecated_inline}}{{readonlyInline}}
  - : Est une {{domxref("DOMString")}} représentant le préfixe de l'espace de nom du nœud ou `null`  si aucun préfixe n'est spécifié.
- {{DOMxRef("Node.nodePrincipal")}} {{Non-standard_inline}}{{deprecated_inline}}
  - : Un `nsIPrincipal` représentant le nœud principal.
- {{DOMxRef("Node.rootNode")}} {{deprecated_inline}}{{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("Node")}} représentant le noeud le plus haut dans l'arbre ou le noeud en cours s'il est le noeud le plus haut de l'arbre. Cette propriété a été remplacée par {{DOMxRef("Node.getRootNode()")}}.

## Méthodes

_Hérite des méthodes de son parent {{domxref("EventTarget")}}_.

- {{DOMxRef("Node.appendChild()", "Node.appendChild(<var>childNode</var>)")}}
  - : Ajoute l'argument `childNode` spécifié comme dernier enfant au noeud actuel.
    Si l'argument fait référence à un noeud existant sur l'arborescence DOM, le nœud sera détaché de sa position actuelle et attaché à la nouvelle position.
- {{DOMxRef("Node.cloneNode()")}}
  - : Clône un {{domxref("Node")}} et, éventuellement, tout son contenu. Par défaut, il duplique le contenu de ce nœud.
- {{DOMxRef("Node.compareDocumentPosition()")}}
  - : Compare la position du nœud courant par rapport à un autre nœud dans tout autre document.
- {{DOMxRef("Node.contains()")}}
  - : Retourne une valeur {{jsxref("Boolean")}} (_booléen_) indiquant si un noeud est un descendant d'un noeud donné ou non.
- {{domxref("Node.getBoxQuads()")}} {{experimental_inline}}
  - : Retourne une liste des boites CSS des nœuds relatifs à un autre nœud.
- {{DOMxRef("Node.getRootNode()")}}
  - : Retourne la racine de l'objet contextuel qui comprend éventuellement la "Shadow root" si elle est disponible.
- {{DOMxRef("Node.hasChildNodes()")}}
  - : Retourne un {{jsxref("Boolean")}} (_booléen_) indiquant si l'élément a des noeuds enfants ou non.
- {{DOMxRef("Node.insertBefore()")}}
  - : Insère un {{domxref("Node")}} avant le nœud de référence en tant qu'enfant du noeud actuel.
- {{DOMxRef("Node.isDefaultNamespace()")}}
  - : Accepte une URI d'espace de nom comme argument et retourne une valeur {{jsxref("Boolean")}} avec `true` (_vrai_) si l'espace de nom est celui par défaut du noeud donné ou `false` (_faux_) sinon.
- {{DOMxRef("Node.isEqualNode()")}}
  - : Retourne une valeur {{jsxref("Boolean")}} (_booléenne_) qui indique si oui ou non deux noeuds sont du même type et si tous leurs points de données définis correspondent.
- {{DOMxRef("Node.isSameNode()")}}
  - : Retourne une valeur {{jsxref("Boolean")}} (_booléenne_) indiquant si les deux noeuds sont ou non identiques (c'est-à-dire qu'ils font référence au même objet).
- {{DOMxRef("Node.lookupPrefix()")}}
  - : Retourne une {{domxref("DOMString")}} (_chaîne de caractères_) contenant le préfixe d'une URI d'un espace de nom donné, s'il est présent, et `null` sinon.
- {{DOMxRef("Node.lookupNamespaceURI()")}}
  - : Accepte un préfixe et retourne l'URI de l'espace de noms qui lui est associé sur le nœud donné s'il le trouve, `null` sinon. Fournir `null` comme préfixe retournera l'espace de noms par défaut.
- {{DOMxRef("Node.normalize()")}}
  - : Nettoye tous les nœuds de texte en-dessous de cet élément (fusionne adjacent, supprime vide).
- {{DOMxRef("Node.removeChild()")}}
  - : Supprime un nœud enfant, depuis l'élément courant, qui doit être un enfant de ce nœud.
- {{DOMxRef("Node.replaceChild()")}}
  - : Remplace un {{domxref("Node")}} enfant du nœud courant par celui donné dans le paramètre.

### Méthodes obsolètes

- {{domxref("Node.getFeature()")}} {{deprecated_inline}}
  - : Permet à un utilisateur d'obtenir un objet {{DOMxRef("DOMUserData")}} à partir du nœud fourni.
- {{domxref("Node.getUserData()")}} {{deprecated_inline}}
  - : Permet à un utilisateur d'obtenir une {{domxref ("DOMUserData")}} (_donnée utilisateur_) à partir du nœud.
- {{domxref("Node.hasAttributes()")}} {{deprecated_inline}}
  - : Retourne un {{jsxref("Boolean")}} indiquant si l'élément possède des attributs ou non.
- {{domxref("Node.isSupported()")}} {{deprecated_inline}}
  - : Retourne une marque {{jsxref("Boolean")}} qui contient le résultat d'un test si l'implémentation DOM prend en compte une caractéristique spécifique et si cette fonctionnalité est prise en charge par le nœud spécifique.
- {{domxref("Node.setUserData()")}} {{deprecated_inline}}
  - : Permet à un utilisateur d'attacher ou d'enlever  {{domxref("DOMUserData")}} du nœud.

## Exemples

### Parcourir tous les nœuds enfants

La fonction suivante parcourt de manière récursive tous les nœuds enfants d'un noeud et exécute une fonction de rappel sur eux (et sur le nœud parent lui-même).

```js
function DOMComb (oParent, oCallback) {
  if (oParent.hasChildNodes()) {
    for (var oNode = oParent.firstChild; oNode; oNode = oNode.nextSibling) {
      DOMComb(oNode, oCallback);
    }
  }
  oCallback.call(oParent);
}
```

#### Syntaxe

    DOMComb(parentNode, callbackFunction);

#### Description

Suit le cycle récursif de tous les nœuds enfants d'un `parentNode` et le `parentNode` lui-même, et exécute la fonction `callbackFunction` (_rappel_) sur eux comme un objet [`this`](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this).

#### Paramètres

- `parentNode`
  - : Le nœud parent (`Node Object`)
- `callbackFunction`
  - : La fonction de rappel ([`Function`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)).

#### Exemples d'utilisation

L'exemple suivant envoie à la `console.log` le contenu texte du corps :

```js
function printContent () {
  if (this.nodeValue) { console.log(this.nodeValue); }
}

onload = function () {
  DOMComb(document.body, printContent);
};
```

### Supprimer tous les enfants imbriqués dans un nœud

```js
Element.prototype.removeAll = function () {
  while (this.firstChild) { this.removeChild(this.firstChild); }
  return this;
};
```

#### Exemple d'utilisation

```js
/* ... an alternative to document.body.innerHTML = "" ... */
document.body.removeAll();
```

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#interface-node', 'Node')}}                 | {{Spec2('DOM WHATWG')}} | Supprime les propriétés suivantes : `attributes`, `namespaceURI`, `prefix`, et `localName`. Supprime les méthodes suivantes : `isSupported()`, `hasAttributes()`, `getFeature()`, `setUserData()`, et `getUserData()`.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| {{SpecName('DOM3 Core', 'core.html#ID-1950641247', 'Node')}}         | {{Spec2('DOM3 Core')}}     | Les méthodes `insertBefore()`, `replaceChild()`, `removeChild()`, et`appendChild()` renvoient un autre type d'erreur (`NOT_SUPPORTED_ERR`) si elles sont appelées par {{domxref("Document")}}. La méthode `normalize()`  a été modifiée, ainsi ce mode {{domxref("Text")}} peut aussi être normalisé si la marque {{domxref("DOMConfiguration")}} est définie. Ajout des méthodes suivantes : `compareDocumentPosition()`, `isSameNode()`, `lookupPrefix()`, `isDefaultNamespace()`, `lookupNamespaceURI()`, `isEqualNode()`, `getFeature()`, `setUserData()`, et `getUserData().` Ajout des propriétés suivantes : `baseURI` et `textContent`. |
| {{SpecName('DOM2 Core', 'core.html#ID-1950641247', 'Node')}}         | {{Spec2('DOM2 Core')}}     | La propriété `ownerDocument`a été légèrement modifiée pour que  {{domxref("DocumentFragment")}} renvoie également `null`. Ajout des propriétés suivantes : `namespaceURI`, `prefix`, et `localName`. Ajout des méthodes suivantes : `normalize()`, `isSupported()` et `hasAttributes()`.                                                                                                                                                                                                                                                                                                                                                                      |
| {{SpecName('DOM1', 'level-one-core.html#ID-1950641247', 'Node')}} | {{Spec2('DOM1')}}         | Définition initiale                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Compatibilité des navigateurs

{{Compat("api.Node")}}
