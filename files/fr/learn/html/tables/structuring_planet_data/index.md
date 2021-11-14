---
title: "Revue\_: structurer les données des planètes"
slug: Learn/HTML/Tables/Structuring_planet_data
translation_of: Learn/HTML/Tables/Structuring_planet_data
original_slug: Apprendre/HTML/Tableaux/Structuring_planet_data
---
{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

Dans notre évaluation, nous vous fournissons des données sur les planètes de notre système solaire pour vous permettre de les structurer dans un tableau HTML.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Avant de tenter cette évaluation, vous devez déjà avoir travaillé tous
        les articles de ce module.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Vérifier la compréhension des tableaux HTML et des fonctionnalités
        associées.
      </td>
    </tr>
  </tbody>
</table>

## Point de départ

Pour commencer cette évaluation, créez des copies locales de blank-template.html, minimal-table.css et planets-data.txt dans un nouveau répertoire dans votre ordinateur.

> **Note :** Vous pouvez aussi utiliser un site comme[JSBin](https://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/) pour votre évaluation. Vous pouvez coller les HTML, CSS et JavaScript dans l'un de ces éditeurs en ligne. Si votre éditeur en ligne n'a pas de panneaux séparés JavaScript/CSS, n'hésitez pas à les mettre en ligne `<script>`/`<style>` dans la page HTML.

## Résumé du projet

Vous travaillez dans une école ; actuellement, vos étudiants étudient les planètes de notre système solaire, et vous souhaitez leur fournir un ensemble de données faciles à suivre, pour rechercher des faits et des chiffres sur les planètes. Un tableau de données HTML serait idéal : vous devez prendre les données brutes disponibles et les organiser en tableau, en suivant les étapes ci-dessous.

Le tableau terminé devrait ressembler à celui-ci :

![](assessment-table.png)

Vous pouvez aussi [regarder l'exemple ici](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (sans regarder le code source — ne trichez pas !)

## Étapes à suivre

Les étapes suivantes décrivent ce que vous devez faire pour complèter l'exemple de tableau. Toutes les données dont vous avez besoin sont contenues dans le fichier `planets-data.txt`. Si vous avez du mal à visualiser les données, regardez l'exemple donné dans le lien ci-dessus, ou essayez de dessiner un diagramme.

1.  Ouvrez votre copie de `blank-template.html`, et commencez le tableau en lui donnant un conteneur extérieur, un en-tête et un corps de tableau. Vous n'avez pas besoin d'un pied de tableau dans cet exemple.
2.  Ajoutez la légende fournie à votre tableau.
3.  Ajoutez une ligne à l'en-tête contenant tous les en-têtes de colonnes.
4.  Créez toutes les lignes de contenu du corps du tableau, en vous rappelant de faire systématiquement tous les en-têtes de lignes.
5.  Assurez-vous que tout le contenu est inséré dans les cellules de droite - dans les données brutes, chaque ligne de données d'une planète est affiché à côté de la planète associée.
6.  Ajoutez les attributs pour créer des en-têtes de lignes et colonnes ne pouvant être confondus avec les lignes, colonnes et groupes de lignes dont ils sont les en-têtes.
7.  Ajoutez une bordure noire pour entourer la colonne contenant les noms des planètes (en-têtes de lignes).

## Conseils et astuces

- La première cellule de la ligne d'en-tête doit être vierge et couvrir deux colonnes.
- Les en-têtes regrouppant des lignes (_exemple : les planètes joviennes_) qui sont à gauche des en-têtes de lignes des noms des planètes (exemple :  _Saturne_) sont un peu difficiles à trier — vous devez vous assurer que chacun d'eux couvre le bon nombre de lignes et colonnes.
- une des méthodes d'association des en-têtes avec leurs lignes et colonnes est un peu plus facile que l'autre.

## Correction

Si vous réalisez cette évaluation dans le cadre d'un cours organisé, vous devez pouvoir remettre votre travail à votre professeur/formateur pour la correction. Si vous êtes en auto-apprentissage, alors vous pouvez obtenir aisément le guide de correction par une demande auprès de [Learning Area Discourse thread](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294), ou dans le [#mdn](irc://irc.mozilla.org/mdn) canal IRC sur [Mozilla IRC](https://wiki.mozilla.org/IRC). Essayez d'abord l'exercice — il n'y a rien à gagner en trichant !

{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
