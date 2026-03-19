---
title: "Document : méthode moveBefore()"
short-title: moveBefore()
slug: Web/API/Document/moveBefore
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

La méthode **`moveBefore()`** de l'interface {{DOMxRef("Document")}} déplace un nœud ({{DOMxRef("Node")}}) donné à l'intérieur du nœud DOM `Document` en tant qu'enfant direct, avant un nœud de référence donné.

## Syntaxe

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Paramètres

- `movedNode`
  - : Un nœud ({{DOMxRef("Node")}}) représentant le nœud à déplacer. Notez que cela doit être un nœud {{DOMxRef("Element")}} ou {{DOMxRef("CharacterData")}}.
- `referenceNode`
  - : Un nœud ({{DOMxRef("Node")}}) avant lequel `movedNode` sera déplacé, ou `null`. Si la valeur est `null`, `movedNode` est inséré à la fin des nœuds enfants du `Document`.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{JSxRef("TypeError")}}
  - : Levée dans l'une des situations suivantes&nbsp;:
    - Le nœud à déplacer (`movedNode`) défini n'est pas partie de ce document.
    - Le nœud à déplacer (`movedNode`) défini n'est pas un nœud de type {{DOMxRef("Element")}} ou {{DOMxRef("CharacterData")}}.
    - Vous essayez de déplacer `movedNode` avant le {{Glossary("doctype")}} du document (représenté par un objet {{DOMxRef("DocumentType")}}).
- `NotFoundError` {{JSxRef("TypeError")}}
  - : Le nœud de référence (`referenceNode`) défini n'est pas un enfant du nœud sur lequel vous appelez `moveBefore()`, c'est-à-dire le nœud dans lequel vous essayez de déplacer `movedNode`.
- `TypeError` {{JSxRef("TypeError")}}
  - : Le deuxième argument n'a pas été fourni.

## Description

La méthode `moveBefore()` déplace un nœud donné vers un nouvel emplacement dans le DOM. Elle offre une fonctionnalité similaire à la méthode {{DOMxRef("Node.insertBefore()")}}, sauf qu'elle ne supprime pas puis ne réinsère pas le nœud. Cela signifie que l'état du nœud (qui serait réinitialisé si on le déplaçait avec `insertBefore()` et des mécanismes similaires) est préservé après le déplacement. Cela inclut&nbsp;:

- L'état des [animations](/fr/docs/Web/CSS/Guides/Animations) et des [transitions](/fr/docs/Web/CSS/Guides/Transitions) CSS.
- L'état de chargement de l'élément HTML {{HTMLElement("iframe")}}.
- Les états d'interactivité (par exemple, les pseudos-classes CSS {{CSSxRef(":focus")}} et {{CSSxRef(":active")}}).
- L'état de [plein écran](/fr/docs/Web/API/Fullscreen_API) d'un élément.
- L'état ouvert/fermé des [fenêtres contextuelles](/fr/docs/Web/API/Popover_API).
- L'état des boîtes de dialogues (<i lang="en">modal</i> en anglais) de l'élément HTML {{HTMLElement("dialog")}} (les boîtes de dialogues ne seront pas fermées).

L'état de lecture des éléments HTML {{HTMLElement("video")}} et {{HTMLElement("audio")}} n'est pas inclus dans la liste ci-dessus, car ces éléments conservent leur état lorsqu'ils sont retirés et réinsérés, quel que soit le mécanisme utilisé.

Lors de l'observation des modifications du DOM à l'aide d'un objet {{DOMxRef("MutationObserver")}}, les nœuds déplacés avec `moveBefore()` seront enregistrés avec un [nœud supprimé](/fr/docs/Web/API/MutationRecord/removedNodes) et un [nœud ajouté](/fr/docs/Web/API/MutationRecord/addedNodes).

La méthode `moveBefore()` n'est pas particulièrement utile lorsqu'elle est invoquée sur le nœud `Document`. Il existe quelques utilisations non élémentaires pour celle-ci, par exemple, vous pourriez utiliser `moveBefore()` pour déplacer des nœuds de commentaire autour de la racine du `Document`. Cependant, vous êtes beaucoup plus susceptible de trouver une utilisation pour l'invoquer sur un objet `DocumentFragment` ou un `Element` individuel — voir {{DOMxRef("DocumentFragment.moveBefore()")}} et {{DOMxRef("Element.moveBefore()")}}.

### Contraintes de `moveBefore()`

Il existe certaines contraintes à prendre en compte lors de l'utilisation de `moveBefore()`&nbsp;:

- Ça ne fonctionne que lorsque l'on déplace un nœud au sein du même document.
- Ça ne fonctionnera pas si vous essayez de déplacer un nœud qui n'est pas connecté au DOM vers un parent déjà connecté, ou vice versa.

Dans de tels cas, `moveBefore()` échouera avec une exception `HierarchyRequestError`. Si les contraintes ci-dessus sont des exigences pour votre cas d'utilisation particulier, vous devriez utiliser {{DOMxRef("Node.insertBefore()")}} à la place, ou utiliser {{JSxRef("Statements/try...catch", "try…catch")}} pour gérer les erreurs qui surviennent dans de tels cas.

## Exemples

### Déplacer un nœud de commentaire avec `moveBefore()`

Dans cette démonstration, nous montrons comment utiliser `document.moveBefore()` pour déplacer un nœud de commentaire dans le DOM.

#### HTML

Le HTML est un modèle minimal qui contient un commentaire à l'intérieur de l'élément HTML {{HTMLElement("body")}}.

```html live-sample___movebefore-comment
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Exemple document.moveBefore()</title>
  </head>
  <body>
    <!-- Ce commentaire devrait être à la fin du document -->
    <p>Du contenu</p>
  </body>
</html>
```

#### JavaScript

Dans notre script, nous parcourons tous les nœuds enfants ({{DOMxRef("Node.childNodes", "childNodes")}}) de l'élément `<body>`. Lorsque nous trouvons un nœud avec une valeur {{DOMxRef("Node.nodeType", "nodeType")}} de `8` (ce qui indique un nœud de commentaire), nous stockons une référence à celui-ci dans une variable appelée `noeudCommentaire`. Nous invoquons ensuite `document.moveBefore()`, en définissant que nous voulons déplacer le nœud de commentaire, et en définissant un deuxième argument de `null` pour insérer notre commentaire à la fin des nœuds enfants du `Document`.

```js live-sample___movebefore-comment
let noeudCommentaire;

for (noeud of document.querySelector("body").childNodes) {
  if (noeud.nodeType === 8) {
    noeudCommentaire = noeud;
  }
}

document.moveBefore(noeudCommentaire, null);
```

#### Résultat

L'exemple rendu ressemble à ceci&nbsp;:

{{EmbedLiveSample("movebefore-comment", "100%", 60)}}

Si vous inspectez l'exemple avec les outils de développement de votre navigateur, vous remarquerez que le commentaire a été déplacé à la fin du document, après la balise de fermeture `</html>`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("DocumentFragment.moveBefore()")}}
- La méthode {{DOMxRef("Element.moveBefore()")}}
- La méthode {{DOMxRef("Node.insertBefore()")}}
