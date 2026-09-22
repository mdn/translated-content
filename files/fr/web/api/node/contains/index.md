---
title: "Node : méthode contains()"
short-title: contains()
slug: Web/API/Node/contains
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

La méthode **`contains()`** de l'interface {{DOMxRef("Node")}} retourne une valeur booléenne indiquant si un nœud est un descendant d'un nœud donné, c'est-à-dire le nœud lui-même, l'un de ses enfants directs ({{DOMxRef("Node.childNodes", "childNodes")}}), l'un des enfants directs de ces enfants, et ainsi de suite.

> [!NOTE]
> Un nœud est _contenu_ à l'intérieur de lui-même.

## Syntaxe

```js-nolint
contains(otherNode)
```

### Paramètres

- `otherNode`
  - : L'objet {{DOMxRef("Node")}} à tester.
    > [!NOTE]
    > `otherNode` n'est pas optionnel, mais peut être défini sur `null`.

### Valeur de retour

Une valeur booléenne qui est `true` si `otherNode` est contenu dans le nœud, `false` sinon.

Si le paramètre `otherNode` est `null`, `contains()` retourne toujours `false`.

## Exemples

Cette fonction vérifie si un élément est dans le corps de la page. Comme `contains` est inclusif et que déterminer si le corps se contient lui-même n'est pas l'objectif de `isInPage`, ce cas retourne explicitement `false`.

```js
function estDansLaPage(noeud) {
  return noeud === document.body ? false : document.body.contains(noeud);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Node.compareDocumentPosition")}}
- La propriété {{DOMxRef("Node.hasChildNodes")}}
