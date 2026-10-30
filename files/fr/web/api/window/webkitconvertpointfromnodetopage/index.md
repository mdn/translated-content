---
title: "Window : méthode webkitConvertPointFromNodeToPage()"
short-title: webkitConvertPointFromNodeToPage()
slug: Web/API/Window/webkitConvertPointFromNodeToPage
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}

Étant donné un {{DOMxRef("WebKitPoint")}} défini dans le système de coordonnées d'un nœud ({{DOMxRef("Node")}}) particulier du DOM, la méthode **`webkitConvertPointFromNodeToPage()`** de l'interface {{DOMxRef("Window")}} retourne un `Point` qui définit la même position dans le système de coordonnées de la page. Cette méthode est non standard et _ne doit pas être utilisée_.

> [!WARNING]
> Veuillez consulter la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs) avant d'utiliser cette méthode, car elle n'est pas largement supportée (ni l'objet {{DOMxRef("WebKitPoint")}} qu'elle utilise).

## Syntaxe

```js-nolint
webkitConvertPointFromNodeToPage(node, nodePoint)
```

### Paramètres

- `node`
  - : Le nœud ({{DOMxRef("Node")}}) dans le système de coordonnées duquel le `Point` défini par `nodePoint` est décrit.
- `nodePoint`
  - : Un objet {{DOMxRef("WebKitPoint")}} décrivant un point dans le système de coordonnées de `node`&nbsp;; ce point est converti dans le système de coordonnées de la page.

### Valeur de retour

Un objet {{DOMxRef("WebKitPoint")}} définissant un point dans le système de coordonnées de la page.

## Spécifications

Cette méthode a été définie dans [le projet de travail obsolète du 20 mars 2009 du module CSS 2D Transforms Level 3 <sup>(angl.)</sup>](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/). Elle n'est pas présente dans le projet de travail actuel du module CSS Transforms Level 1.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Window.webkitConvertPointFromPageToNode")}}
- Bogue d'implémentation Mozilla&nbsp;: [bogue Firefox 850806 <sup>(angl.)</sup>](https://bugzil.la/850806)
