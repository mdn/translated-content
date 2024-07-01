---
title: window.innerWidth
slug: Web/API/Window/innerWidth
---

{{ ApiRef() }}

## Résumé

Récupère la largeur du contenu visible de la fenêtre de navigation en incluant, s'il est visible, l'ascenseur vertical.
Permet également de fixer une largeur pour le domaine d'affichage de la fenêtre.

## Syntaxe

```js
var largeur = window.innerWidth;
```

Voir aussi&nbsp;: [window.innerHeight](/fr/docs/Web/API/Window/innerHeight), [window.outerHeight](/fr/docs/Web/API/Window/outerHeight) and [window.outerWidth](/fr/docs/Web/API/Window/outerWidth).

## Valeur renvoyée

- `innerWidth`
  - : un entier (nombre de pixels);

## Notes

La propriété `innerWidth` est supportée par tous les objet "window" comme par exemple une fenêtre, une frame, un frameset, ou une fenêtre secondaire.

## Example

```js
// Retourne la largeur de la fenêtre
var largeur = window.innerWidth;

// Retourn la largeur de la fenêtre à l'intérieur d'une "frameset"
var largeur = self.innerWidth;

// Retourne la largeur de la fenêtre du "frameset" parent
var largeurDeLaFrame = parent.innerWidth;

// Retourne la largeur de la fenêtre du "frameset" principal
var largeurDuFrameset = top.innerWidth;
```

Pour changer la taille de la fenêtre, voir {{domxref("window.resizeBy")}} and {{domxref("window.resizeTo")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
