---
title: Window.outerWidth
slug: Web/API/Window/outerWidth
---

{{APIRef}}

`Window.outerWidth` récupère la largeur de l'extérieur de la fenêtre du navigateur. Elle représente la largeur de toute la fenêtre du navigateur, y compris la barre latérale (si elle est agrandie), la fenêtre chrome et le redimensionnement de la fenêtre.

Cette propriété est en lecture seule ; elle n'a pas de valeur par défaut.

## Syntaxe

```js
largeurExterieureFenetre = window.outerWidth;
```

Lors du retour, `largeurExterieureFenetre` vaut la largeur de l'extérieur de la fenêtre.

## Notes

Pour changer la taille d'une fenêtre, voir {{domxref("window.resizeBy()")}} et {{domxref("window.resizeTo ()")}}.

Pour récupérer la largeur interne d'une fenêtre, c'est-à-dire la largeur de la page affichée, voir {{domxref ("window.innerWidth")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("window.outerHeight")}}, {{domxref("window.innerHeight")}}, {{domxref("window.innerWidth")}}
- {{domxref("window.resizeBy()")}}, {{domxref("window.resizeTo()")}}
