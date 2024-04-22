---
title: Composition de la page d'accueil d'une école de communauté
slug: Learn/CSS/Styling_text/Typesetting_a_homepage
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

Dans cette évaluation, nous testerons votre compréhension de toutes les techniques pour la composition de textes à l'écran présentées au cours de ce module&nbsp;: elle consiste à créer la page d'accueil du site d'une école communale. Vous ne devriez avoir que du plaisir tout au long de ce parcours.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Avant de tenter cette évaluation, il faut que vous ayez déjà travaillé
        tous les articles de ce module.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Tester la compréhension de la composition de textes à l'écran avec les
        techniques des CSS.
      </td>
    </tr>
  </tbody>
</table>

## Point de départ

Pour débuter cette évaluation, vous devez&nbsp;:

- récupérer les fichiers [HTML](https://github.com/mdn/learning-area/blob/master/css/styling-text/typesetting-a-homepage-start/index.html) et [CSS](https://github.com/mdn/learning-area/blob/master/css/styling-text/typesetting-a-homepage-start/style.css) de l'exercice ainsi que [le lien externe sur l'icône](https://github.com/mdn/learning-area/blob/master/css/styling-text/typesetting-a-homepage-start/external-link-52.png).
- en faire une copie sur votre ordinateur.

> **Note :** Autrement, il reste possible d'utiliser un site comme [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/) pour faire votre évaluation. Collez le HTML et remplissez la CSS dans l'un de ces éditeurs en ligne ; utilisez [cet URL](http://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png) pour pointer sur l'image de fond. Si l'éditeur en ligne que vous utilisez n'a pas de panneau CSS séparé, vous pouvez l'intégrer dans un élément `<style>` de l'élément `head` du document.

## Énoncé de l'exercice

Nous mettons à votre disposition un HTML pour la page d'accueil du site internet d'un collège de communauté imaginaire, plus certains éléments de la CSS composant la page sur deux colonnes et fournissant d'autres rudiments de composition. Vous devez écrire des compléments à la CSS sous le commentaire au bas du fichier de façon à pouvoir marquer aisément vos ajouts. Ne vous tracassez pas si certains sélecteurs sont répétés&nbsp;: nous laisserons ce point de côté dans cet exemeple.

Fontes&nbsp;:

- Primo, téléchargez quelques polices gratuites. Comme il s'agit d'un collège, les polices choisies doivent donner à la page une impression de sérieux, de formalisme et de confiance — une police sérif ample pour le corps du texte général, associée une police sans sérif ou bloc sérif pour les en-têtes serait pas mal.
- Ensuite, utilisez le service ad-hoc pour créer le «&nbsp;bulletproof `@font-face` code&nbsp;» pour ces deux fontes.
- Appliquez la police pour le corps à toute la page et celle pour les titres aux en‑têtes.

Style général du texte&nbsp;:

- Donnez à la page une propriété `font-size` de `10px` sur tout le site.
- Donnez aux titres et autres types d'éléments des tailles de polices appropriées définie avec une unité relative adéquate.
- Donnez au corps du texte une propriété `line-height` appropriée.
- Centrez le titre d'en-tête sue la page.
- Augmentez légérement la valeur de la propriété `letter-spacing` des titres pour qu'ils ne paraissent pas trop écrasés en donnant un peu d'air aux lettres.
- Donnez au corps du texte une valeur de propriété `letter-spacing` et `word-spacing` appropriée.
- Donnez au premier paragraphe après chaque titre dans `<section>` une légère indentation, disons 20px.

Liens&nbsp;:

- Donnez aux liens, visités, ciblés et survolés des couleurs en accord avec celles des barres horizontales en haut et en bas de la page.
- Faites en sorte que les liens soient soulignés par défaut, mais que le soulignement disparaisse lorsqu'ils sont ciblés ou survolés.
- Supprimez le soulignement du focus par défaut de TOUS les liens de la page.
- Donnez à l'état actif un style sensiblement différent pour qu'il se démarque bien, mais faites en sorte qu'il s'intègre à la conception globale de la page.
- Faites en sorte que l'icône de lien externe soit insérée à côté des liens externes.

Listes&nbsp;:

- Assurez-vous que l'espacement des listes et éléments de liste s'accorde bien avec le style d'ensemble de la page. Chaque élément de liste doit avoir la même valeur de propriété `line-height` qu'une ligne de paragraphe et chaque liste doit avoir le même espacement en haut et en bas que celui entre les paragraphes.
- Mettez une belle puce, appropriée à la conception de la page, devant les éléments de la liste. À vous de décider si vous choisissez une image personnalisée ou autre chose.

Menu de navigation&nbsp;:

- Donnez à votre menu de navigation un style tel que son aspect soit en accord avec l'apparence et la convivialité de la page.

## Conseils et astuces

- Il n'y a pas besoin de modifier le HTML en quoi que ce soit pour cet exercice.
- Le menu de navigation n'est pas forcément à représenter sous forme de boutons, mais il doit être un peu plus grand pour ne pas avoir l'air riquiqui sur le côté de la page ; n'oubliez pas non plus que sa disposition doit être verticale.

## Exemple

La capture d'écran ci-après montre un exemple possible du design terminé&nbsp;:

![](example2.png)

## Évaluation

Si vous faites cet exercice dans le cadre d'un cours organisé, vous devez pouvoir donner votre travail à votre professeur pour notation. Si vous faites de l'auto-formation, vous pouvez obtenir le guide de notation très facilement en le demandant sur [le fil de discussion à propos de cet exercice](https://discourse.mozilla.org/t/fundamental-css-comprehension-assessment/24682) ou par l'intermédiaire du canal IRC [#mdn](irc://irc.mozilla.org/mdn) sur [Mozilla IRC](https://wiki.mozilla.org/IRC). Faites l'exercice d'abors, il n'y rien à gagner en trichant !

{{PreviousMenu("Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

## Dans ce module

- [Initiation à la mise en forme du texte](/fr/docs/Learn/CSS/Styling_text/initiation-mise-en-forme-du-texte)
- [Style de listes](/fr/docs/Learn/CSS/Styling_text/Styling_lists)
- [Mise en forme des liens](/fr/docs/Learn/CSS/Styling_text/Mise_en_forme_des_liens)
- [Polices de caractères web](/fr/docs/Learn/CSS/Styling_text/Web_fonts)
- Composition d'une page d'accueil d'une école de communauté
