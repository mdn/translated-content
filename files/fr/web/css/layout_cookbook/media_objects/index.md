---
title: Objets avec média
slug: Web/CSS/Layout_cookbook/Media_objects
---

{{CSSRef}}

Le motif _Media Object_ (qu'on peut traduire en « objet avec média ») est un motif qu'on rencontre fréquemment sur le Web. [Intitulé ainsi par Nicole Sullivan](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/), cela fait référence à une boîte organisée en deux colonnes dont l'une contient une image d'un côté et un texte descriptif de l'autre (par exemple l'image de profil de quelqu'un à gauche et un billet à droite).

![](media-object.png)

## Spécifications sommaires

Voici ce qu'on souhaite obtenir :

- Un empilement des deux zones sur mobile et deux colonnes sur ordinateur
- L'image peut être à gauche ou à droite
- L'image peut être petite ou grande
- Les objets avec média peuvent être imbriqués
- L'objet avec média devrait dégager l'espace pour le contenu, quel que soit le côté le plus grand.

## Recette

{{EmbedGHLiveSample("css-examples/css-cookbook/media-objects.html", '100%', 1200)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/media-objects--download.html).

## Choix effectués

On a ici choisi d'utiliser [une grille](/fr/docs/Web/CSS/CSS_Grid_Layout) pour réaliser cet objet. cela permet de contrôler les deux dimensions lorsqu'on en a besoin. Ainsi, si on a besoin d'un pied de page avec un contenu au dessus, le pied de page peut être poussé sous l'objet.

La grille permet également d'utiliser {{cssxref("fit-content")}} pour la piste contenant l'image. En utilisant `fit-content` avec une taille maximale de 200 pixels, lorsqu'on a une petite image (une icône), la piste est réduite à la taille de cette image. Si l'image est plus grande, la piste ne sera pas plus large que 200 pixels, de plus, l'image ayant {{cssxref("max-width ")}} avec 100%, elle sera redimensionnée afin de pouvoir tenir dans la colonne.

En utilisant {{cssxref("grid-template-areas")}} pour dessiner la disposition, on peut voir le motif dans la feuille de style CSS. La grille est définie lorsqu'on a `max-width` qui vaut au moins 500 pixels et on a donc un empilement pour les plus petits écrans.

En ajoutant une classe `media-flip`, on fournit une disposition alternative qui permet de changer le côté sur lequel l'image est affichée.

Lorsqu'on imbrique un objet dans un autre, il faut le placer dans la deuxième piste en mode normal et sur la première lorsqu'on choisit d'inverser le côté de l'image.

## Méthodes alternatives

Il existe différentes méthodes alternatives permettant d'obtenir ce résultat selon les navigateurs que vous souhaitez prendre en charge. Une méthode assez générique consiste à placer l'image en flottante à gauche et d'ajouter un dégagement sur la boîte afin qu'elle contienne bien tous les éléments flottants.

{{EmbedGHLiveSample("css-examples/css-cookbook/media-objects-fallback.html", '100%', 1200)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/media-objects-fallback--download.html).

Une fois que les éléments flottants sont des éléments de grille, les dégagements ne s'appliquent plus et il n'est donc pas nécessaire de retirer quoi que ce soit sur les dégagements.

En revanche, il faudra retirer les marges appliquées aux objets et les largeurs superflues pour la grille (la propriété {{cssxref("gap")}} permet de contrôler l'espace entre et les pistes gèrent le reste du dimensionnement).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout)
- [L'amélioration progressive et les grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Utiliser les zones nommées des grilles](/fr/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [`fit-content`](/fr/docs/Web/CSS/fit-content)
- [`grid-template-areas`](/fr/docs/Web/CSS/grid-template-areas)
