---
title: "Node : méthode removeChild()"
short-title: removeChild()
slug: Web/API/Node/removeChild
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("DOM")}}

La méthode **`removeChild()`** de l'interface {{DOMxRef("Node")}} supprime un nœud enfant du DOM et retourne le nœud supprimé.

> [!NOTE]
> Tant qu'une référence est conservée sur l'enfant supprimé, il existe toujours en mémoire, mais ne fait plus partie du DOM.
> Il peut encore être réutilisé plus tard dans le code.
>
> Si la valeur de retour de `removeChild()` n'est pas stockée et qu'aucune autre référence n'est conservée, elle est [automatiquement supprimée](/fr/docs/Web/JavaScript/Guide/Memory_management) de la mémoire après un court laps de temps.

Contrairement à {{DOMxRef("Node.cloneNode()")}}, la valeur de retour conserve les objets `EventListener` qui y sont associés.

## Syntaxe

```js-nolint
removeChild(child)
```

### Paramètres

- `child`
  - : Un objet {{DOMxRef("Node")}} représentant le nœud enfant à supprimer du DOM.

### Valeur de retour

Le nœud `child` supprimé.

### Exceptions

- `NotFoundError` {{DOMxRef("DOMException")}}
  - : Levée si le `child` n'est pas un enfant du nœud.
- {{JSxRef("TypeError")}}
  - : Levée si le `child` est `null`.

## Exemples

### Exemples simples

Étant donné ce HTML&nbsp;:

```html
<div id="parent">
  <div id="enfant"></div>
</div>
```

Pour supprimer un élément défini en connaissant son nœud parent&nbsp;:

```js
const parent = document.getElementById("parent");
const enfant = document.getElementById("enfant");
const noeudSupprime = parent.removeChild(enfant);
```

Pour supprimer un élément défini sans avoir à définir son nœud parent&nbsp;:

```js
const noeud = document.getElementById("enfant");
if (noeud.parentNode) {
  noeud.parentNode.removeChild(noeud);
}
```

Pour supprimer tous les enfants d'un élément&nbsp;:

```js
const element = document.getElementById("idOfParent");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

### Provoquer une `TypeError`

```html
<!--Exemple de code HTML-->
<div id="parent"></div>
```

```js
const parent = document.getElementById("parent");
const enfant = document.getElementById("enfant");

// Lève une `TypeError` non interceptée
const ramasseMiettes = parent.removeChild(enfant);
```

### Provoquer une `NotFoundError`

```html
<!--Exemple de code HTML-->
<div id="parent">
  <div id="enfant"></div>
</div>
```

```js
const parent = document.getElementById("parent");
const enfant = document.getElementById("enfant");

// Ce premier appel supprime correctement le nœud
const ramasseMiettes = parent.removeChild(enfant);

// Le second appel lève une `NotFoundError`
parent.removeChild(enfant);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Node.replaceChild()")}}
- La propriété {{DOMxRef("Node.parentNode")}}
- La méthode {{DOMxRef("Element.remove()")}}
- La méthode {{DOMxRef("Node.cloneNode()")}}
