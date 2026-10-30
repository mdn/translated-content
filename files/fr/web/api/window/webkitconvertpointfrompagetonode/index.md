---
title: "Window : méthode webkitConvertPointFromPageToNode()"
short-title: webkitConvertPointFromPageToNode()
slug: Web/API/Window/webkitConvertPointFromPageToNode
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}

Étant donné un {{DOMxRef("WebKitPoint")}} défini dans le système de coordonnées de la page, la méthode **`webkitConvertPointFromPageToNode()`** de l'interface {{DOMxRef("Window")}} retourne un objet `Point` qui définit la même position dans le système de coordonnées du {{DOMxRef("Node")}} DOM défini.

> [!WARNING]
> Veuillez consulter la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs) avant d'utiliser cette méthode, car elle n'est pas largement supportée (ni l'objet {{DOMxRef("WebKitPoint")}} qu'elle utilise).

## Syntaxe

```js-nolint
webkitConvertPointFromPageToNode(node, pagePoint)
```

### Paramètres

- `node`
  - : Un nœud ({{DOMxRef("Node")}}) dans le système de coordonnées duquel le point doit être converti.
- `pagePoint`
  - : Un objet {{DOMxRef("WebKitPoint")}} définissant un point dans le système de coordonnées de la page, qui doit être converti dans le système de coordonnées du nœud.

### Valeur de retour

Un objet `Point` décrivant l'emplacement défini dans le système de coordonnées du nœud.

## Spécifications

Cette méthode a été définie dans [le projet de travail obsolète du 20 mars 2009 du module CSS 2D Transforms Level 3 <sup>(angl.)</sup>](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/). Elle n'est pas présente dans le projet de travail actuel du module CSS Transforms Level 1.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Window.webkitConvertPointFromNodeToPage")}}
- Bogue d'implémentation Mozilla&nbsp;: [bogue Firefox 850808 <sup>(angl.)</sup>](https://bugzil.la/850808)
