---
title: window.innerHeight
slug: Web/API/Window/innerHeight
tags:
  - API
  - CSSOM View
  - Property
  - Propriété
  - Reference
  - Window
translation_of: Web/API/Window/innerHeight
---
{{ ApiRef() }}

Récupère la hauteur (en pixels) de la partie visible de la fenêtre de navigation en incluant, si elle est affichée, la barre de défilement horizontale.

> **Note :** La valeur retournée par cette propriété correspond le cas échéant à la hauteur de la fenêtre définie par {{ifmethod("nsIDOMWindowUtils", "setCSSViewport")}}, dans le cas où vous utilisez cette méthode pour définir les dimensions de la fenêtre virtuelle dans le but d'agencer la page.

## Syntaxe

    var hauteur = window.innerHeight;

### Valeur

Renvoie la hauteur de la partie visible de la fenêtre de navigation. La propriété `window.innerHeight` est accessible en lecture seulement ; elle n'a pas de valeur par défaut.

## Notes

- La propriété `window.innerHeight` est supportée par tout objet assimilé à une fenêtre _{{domxref("window")}}_, un cadre _frame_ , un ensemble de cadres *frameset*, ou une fenêtre secondaire.
- Il existe un [algorithme](https://bugzilla.mozilla.org/show_bug.cgi?id=189112#c7) pour calculer la hauteur de la partie visible de la fenêtre en excluant la barre de défilement horizontale si est elle affichée.

## Exemples

### Sur un _frameset_

```js
var intFrameHeight = window.innerHeight; // ou

var intFrameHeight = self.innerHeight;
// retournera la hauteur de la partie visible du cadre dans frameset

var intFramesetHeight = parent.innerHeight;
// retournera la hauteur de la partie visible du frameset le plus proche

var intOuterFramesetHeight = top.innerHeight;
// retournera la hauteur de la partie visible du frameset le plus éloigné
```

{{todo("ajouter ici un lien vers une démo interactive")}}

- Pour modifier les dimensions d'une fenêtre, voir {{domxref("window.resizeBy()")}} et {{domxref("window.resizeTo()")}}.
- Pour récupérer la hauteur extérieure d'une fenêtre, c'est-à-dire la hauteur de la fenêtre du navigateur dans sa totalité, voir {{domxref("window.outerHeight")}}.

### Exemple graphique

L'illustration suivante montre la différence entre `outerHeight` et `innerHeight`.

![Illustration de la différence entre innerHeight et outerHeight](firefoxinnervsouterheight2.png)

## Spécification

| Spécification                                                                                        | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('CSSOM View', '#dom-window-innerheight', 'window.innerHeight')}} | {{Spec2('CSSOM View')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Window.innerHeight")}}

## Voir aussi

- {{domxref("window.innerWidth")}}
- {{domxref("window.outerHeight")}}
- {{domxref("window.outerWidth")}}
