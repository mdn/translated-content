---
title: Utilisation des transformations CSS
slug: Web/CSS/CSS_Transforms/Using_CSS_transforms
tags:
  - 3D
  - Avancé
  - CSS
  - Guide
  - Mise à l'échelle
  - Scale
  - Transformations CSS
  - perspective
  - rotation
translation_of: Web/CSS/CSS_Transforms/Using_CSS_transforms
original_slug: Web/CSS/CSS_Transforms/Utilisation_des_transformations_CSS
---
{{CSSRef}}

En modifiant l'espace des coordonnées, les **transformations CSS** permettent de changer la position d'un contenu affecté sans perturber le flux normal. Elles sont implémentées en utilisant un ensemble de propriétés CSS qui vous permettre d'appliquer des transformations affines aux éléments HTML. Ces transformations incluent la rotation, l'inclinaison et la translation à la fois dans le plan ou dans un espace 3D.

> **Attention :** Seuls les éléments positionnés selon [le modèle de boîtes](/fr/docs/Web/CSS/CSS_Box_Model) peuvent être transformés. Pour simplifier, on peut se souvenir que tout élément avec `display: block` est positionné selon le modèle de boîtes.

## Propriétés des transformations CSS

Deux propriétés majeures sont utilisées pour définir les transformations CSS : {{cssxref("transform")}} et {{cssxref("transform-origin")}}.

- {{cssxref("transform-origin")}}
  - : Spécifie la position de l'origine. Par défaut, celle-ci est au centre de l'élément et peut être déplacée. Elle est utilisée par de nombreuses transformations, comme les rotations, les homothéties ou l'inclinaison, qui nécessitent un point spécifique pour paramètre.
- {{cssxref("transform")}}
  - : Spécifie la transformation à appliquer à l'élément. C'est une liste de transformations séparée par des espaces, qui sont appliquées les unes après les autres, comme requis par l'opération de composition. Les transformations qui sont composées entre elles sont appliquées dans l'ordre, de droite à gauche.

## Exemples

Voici une version originale du logo MDN :

![MDN Logo](screen_shot_2016-02-16_at_15.53.54.png)

### Rotation

Ici, on le tourne de 90 degrés depuis le coin inférieur gauche :

```html
<img style="transform: rotate(90deg);
            transform-origin: bottom left;"
     src="screen_shot_2016-02-16_at_15.53.54.png">
```

{{EmbedLiveSample('Rotation','auto',240)}}

### Distorsion et translation

Ici, on applique une distorsion de 10 degrés et on translate l'image de 150 pixels sur l'axe des abscisses :

```html
<img style="transform: skewx(10deg) translatex(150px);
            transform-origin: bottom left;"
     src="screen_shot_2016-02-16_at_15.53.54.png">
```

{{EmbedLiveSample('Distorsion_et_translation')}}

## Propriétés CSS spécifiques à la 3D

Réaliser des transformations CSS dans l'espace est un petit peu plus complexe. Il faut d'abord définir l'espace 3D en lui donnant une perspective, puis il faut configurer le comportement des éléments 2D dans cet espace.

### Définir une perspective

Le premier élément à définir est la _perspective._ La perspective est ce qui donne l'impression de troisième dimension. Plus les éléments sont loin de l'observateur, plus ils seront petits.

{{page("/fr/docs/Web/CSS/perspective", "Trois cubes", 0, 0, 3)}}

Le deuxième élément à définir est la position de l'observateur grâce à la propriété {{ cssxref("perspective-origin") }}. Par défaut, la perspective est centrée sur l'observateur.

{{page("/fr/docs/Web/CSS/perspective-origin", "Cubes avec des valeurs communes pour perspective-origin", 0, 0, 3)}}

## Voir aussi

- [Utiliser `deviceorientation` avec les transformations 3D](/fr/docs/Web/Guide/Events/Using_device_orientation_with_3D_transforms "Using Deviceorientation with 3D Transforms")
- [Une introduction aux transformations CSS, un billet de David DeSandro (en anglais)](https://desandro.github.com/3dtransforms/)
- [CSS Transform playground (outil en ligne qui permet de visualiser des transformations CSS)](https://css-transform.moro.es/)
