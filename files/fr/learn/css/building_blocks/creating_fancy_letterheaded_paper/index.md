---
title: Création d'un en-tête de papier à lettre élégant
slug: Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper
tags:
  - Arrière‑plan
  - Boîte
  - Boîtes
  - CSS
  - Codage
  - Débutant
  - Evaluation
  - encadrement
  - en‑tête de lettre
  - lettre
  - lettre avec en‑tête
  - papier
translation_of: Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper
original_slug: Apprendre/CSS/styliser_boites/Creating_fancy_letterheaded_paper
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_boxes/Advanced_box_effects", "Learn/CSS/Styling_boxes/A_cool_looking_box", "Apprendre/CSS/styliser_boites")}}

Si vous voulez faire bonne impression, écrire une lettre sur un beau papier à en-tête peut vraiment être un bon début. Dans cet execice, le défi à relever consiste à créer un modèle en ligne pour obtenir ce bel aspect.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Avant de faire cet exercice vous devez avoir vu tous les articles de ce
        module.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Tester votre compréhension du modèle de boîte CSS et toutes les
        fonctionnalités associées comme l'implémentation d'arrière‑plans.
      </td>
    </tr>
  </tbody>
</table>

## Départ

Pour débuter cet exercice, vous devez&nbsp;:

- faire une copie locale du [HTML](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/letterheaded-paper-start/index.html) et de la [CSS](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/letterheaded-paper-start/style.css) — enregistrez‑les sous les noms  `index.html` et `style.css` dans un nouveau répertoire.
- enregistrer des copies locales des images d'[en‑tête](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [pied de page](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) et  [logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) dans le même répertoire que les fichiers de code.

> **Note :** Autrement, vous pouvez utiliser un site comme  [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/) pour faire cet exercice. Collez le HTML et complétez la CSS dans un des éditeurs en ligne. Si l'éditeur en ligne que vous utilisez ne dispose pas d'un panneau séparé pour la CSS, vous pouvez le mettre dans un élément `<style>` dans l'élément `head` du document.

## Résumé du projet

Vous avez les fichiers nécessaires à la création d'un modèle de papier à en-tête. Rassemblez les dossiers. Il faut :

### La lettre

- appliquer la CSS au HTML,
- ajouter à la lettre une déclaration `background` qui&nbsp;:

  - place l'image haute en en‑tête de lettre
  - place l'image basse en pied de lettre
  - ajoute un gradient semi-transparent au‑dessus des deux arrière‑plans ci‑dessus pour donner un peu de texture à la lettre. Faites en sorte qu'il soit légèrement obscurcissant en en‑tête et pied de page, mais totalement transparent sur la plus grande partie du centre de la lettre,

- ajouter une autre déclaration `background` qui mette uniquement l'image haute en en‑tête, en recours pour les navigateurs qui ne prennent pas en charge la précédente déclaration,
- ajouter un arrière‑plan de couleur blanche à la lettre.
- ajouter un encadrement plein de 1mm en haut et en bas de la lettre, dans une couleur qui soit en accord avec le schéma de couleur général,

### Le logo

- à l'élément {{htmlelement("h1")}}, ajouter le logo en tant qu'image de fond,
- ajouter un filtre au logo pour donner une très légère ombre portée,.
- puis, commenter le filtre et implémenter l'ombre portée d'une autre manière pour être compatible inter-navigateurs, mais qui suive encore la forme ronde de l'image.

## Astuces

- Souvenez‑vous que vous pouvez créer un recours pour les navigateurs les plus anciens en faisant la déclaration de la version de recours avant celle qui n'est prise en charge que par les navigateurs modernes. Les anciens navigateurs appliqueront la première déclaration tout en ignorant la seconde, alors que les navigateurs récents appliqueront la première déclaration, mais l'écraseront avec la seconde.
- Vous êtes bien entendu libre de créer vos propres graphes si vous le souhaitez.

## Exemple

Voici une capture d'écran affichant un exemple de ce à quoi le dessin final ressemblera&nbsp;:

![](letterhead.png)



## Évaluation

Si vous faites cet exercice dans le cadre d'un cours organisé, vous devez pouvoir donner votre travail à votre professeur pour notation. Si vous faites de l'auto-formation, vous pouvez obtenir le guide de notation très facilement en le demandant sur  [le fil de discussion à propos de cet exercice](https://discourse.mozilla.org/t/fundamental-css-comprehension-assessment/24682) ou par l'intermédiaire du canal IRC [#mdn](irc://irc.mozilla.org/mdn) sur [Mozilla IRC](https://wiki.mozilla.org/IRC). Faites l'exercice d'abord, il n'y rien à gagner en trichant !

{{PreviousMenuNext("Learn/CSS/Styling_boxes/Advanced_box_effects", "Learn/CSS/Styling_boxes/A_cool_looking_box", "Learn/CSS/Styling_boxes")}}



## Dans ce module

- [Le modèle de boîte&nbsp;: récapitulatif](/fr/Apprendre/CSS/styliser_boites/Box_model_recap)
- [Arrière-plans](/fr/Apprendre/CSS/styliser_boites/Backgrounds)
- [Encadrements](/fr/docs/Apprendre/CSS/styliser_boites/Borders)
- [Mise en page des tableaux](/fr/Apprendre/CSS/styliser_boites/Styling_tables)
- [Effets de boîte avancés](/fr/Apprendre/CSS/styliser_boites/Advanced_box_effects)
- [Création d'un en-tête de papier à lettre élégant](/fr/docs/Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper)
- [Une boîte d'aspect rafraîchissant](/fr/Apprendre/CSS/styliser_boites/A_cool_looking_box)
