---
title: Une boîte d'aspect rafraîchissant
slug: Learn/CSS/Building_blocks/A_cool_looking_box
tags:
  - Apprentissage
  - Arrière‑plans
  - Boîte
  - CSS
  - Débutant
  - Evaluation
  - effets
  - encadrement
  - modèle de boîte
translation_of: Learn/CSS/Building_blocks/A_cool_looking_box
original_slug: Apprendre/CSS/styliser_boites/A_cool_looking_box
---
{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper", "Learn/CSS/Styling_boxes")}}

Avec cette évaluation, vous obtiendrez une meilleure pratique dans la création de boîtes d'aspect rafraîchissant en faisant en sorte qu'elles attirent le regard.

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
      <th scope="row">Objectif :</th>
      <td>
        Tester votre compréhension du modèle de boîte CSS et toutes les
        fonctionnalités associées comme les encadrements et les arrière‑plans.
      </td>
    </tr>
  </tbody>
</table>

## Départ

Pour débuter, vous devez :

- faire des copies locales de ces [HTML](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/cool-information-box-start/index.html) et [CSS](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/cool-information-box-start/style.css) — enregistrez‑les sous les noms `index.html` et `style.css` dans un nouveau répertoire.

> **Note :** Autrement, vous pouvez utiliser un site comme  [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/) pour faire cet exercice. Collez le HTML et complétez la CSS dans un des éditeurs en ligne. Si l'éditeur en ligne que vous utilisez ne dispose pas d'un panneau séparé pour la CSS, vous pouvez le mettre dans un élément `<style>` dans l'élément `head` du document.

## Résumé du projet

Votre tâche consiste à créer une boîte élégante et rafraîchissante tout en explorant le côté ludique des CSS.

### Généralités

- Appliquez la CSS au HTML.

### Composition de la boîte

Vous devez appliquer un style à l'élément {{htmlelement("p")}} en lui donnant :

- une largeur raisonnable pour un gros bouton, disons autout de 200 pixels,
- une hauteur raisonnable pour un gros bouton en centrant le texte verticalement dans ce processus,
- un texte centré horizontalement,
- une taille de texte légérement augmentée, vers 17-18 pixels. Utilisez les rem comme unité. Écrivez un commentaire sur la façon dont vous avez opéré pour le calcul de la valeur.
- une couleur de base pour l'aspect général. Cette couleur de boîte sera celle de son arrière‑plan.
- la même couleur pour le texte. Faites en sorte qu'il soit lisible en le dotant d'un ombrage de couleur noire.
- un encadrement avec des coins arrondis subtils,
- un encadrement de 1-pixel uni de couleur similaire à la couleur de base, mais légérement plus foncée.
- un gradient linéaire noir semi‑transparent à partir du coin inférieur droit. Faites‑le totalement transparent au départ et donnez‑lui une opacité croissante de 0,2 sur 30% de la longueur puis restant de la même couleur jusqu'à l'autre extrémité.
- des ombres de boîte multiples. Donnez lui un ombrage la faisant ressortir légérement de la page. Les autres deux seront des ombres avec la propriété `inset` — une ombre blanche semi-transparente près de l'angle supérieur gauche et une ombre semi‑transparent noir près de l'angle inférieur droit — pour donner un aspect surélevé 3D à la boîte.

## Exemple

Cette capture d'écran montre un exemple de ce à quoi l'aspect final pourrait ressembler :

![](fancy-box.png)

## Évaluation

Si vous faites cet exercice dans le cadre d'un cours organisé, vous devez pouvoir donner votre travail à votre professeur pour notation. Si vous faites de l'auto-formation, vous pouvez obtenir le guide de notation très facilement en le demandant sur  [le fil de discussion à propos de cet exercice](https://discourse.mozilla.org/t/fundamental-css-comprehension-assessment/24682) ou par l'intermédiaire du canal IRC [#mdn](irc://irc.mozilla.org/mdn) sur [Mozilla IRC](https://wiki.mozilla.org/IRC). Faites l'exercice d'abord, il n'y rien à gagner en trichant !

{{PreviousMenu("Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper", "Learn/CSS/Styling_boxes")}}



## Dans ce module

- [Le modèle de boîte : récapitulatif](/fr/Apprendre/CSS/styliser_boites/Box_model_recap)
- [Arrière-plans](/fr/Apprendre/CSS/styliser_boites/Backgrounds)
- [Encadrements](/fr/docs/Apprendre/CSS/styliser_boites/Borders)
- [Mise en page des tableaux](/fr/Apprendre/CSS/styliser_boites/Styling_tables)
- [Effets de boîte avancés](/fr/Apprendre/CSS/styliser_boites/Advanced_box_effects)
- [Creation d'un en-tête de papier à lettre élégant](/fr/docs/Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper)
- [Une boîte d'aspect rafraîchissant](/fr/Apprendre/CSS/styliser_boites/A_cool_looking_box)
