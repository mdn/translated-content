---
title: "Défi : Structurer un tableau de données des planètes"
short-title: "Défi : Tableau des données des planètes"
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
l10n:
  sourceCommit: ee677b2c4d4a226fe4aedf05b2b156cae8a2bb95
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

Dans ce défi, nous vous fournissons des données sur les planètes de notre système solaire. Votre tâche consiste à les présenter sous la forme d'un tableau HTML facile à consulter.

## Point de départ

1. Créez un nouveau dossier à un emplacement approprié sur votre ordinateur appelé `planet-data-table` (ou ouvrez un éditeur en ligne et effectuez les étapes nécessaires pour créer un nouveau projet).
2. Enregistrez la liste HTML suivante dans un fichier à l'intérieur de votre dossier appelé `index.html` (ou collez-la dans le volet HTML de votre éditeur en ligne).

   ```html
   <!doctype html>
   <html lang="fr">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Tableau des données des planètes</title>
       <link href="style.css" rel="stylesheet" type="text/css" />
     </head>
     <body>
       <h1>Tableau des données des planètes</h1>
     </body>
   </html>
   ```

3. Enregistrez la liste CSS suivante dans un fichier à l'intérieur de votre dossier appelé `style.css` (ou collez-la dans le volet CSS de votre éditeur en ligne).

   ```css live-sample___planet-data-table
   html {
     font-family: sans-serif;
   }

   table {
     border-collapse: collapse;
     border: 2px solid rgb(200 200 200);
     letter-spacing: 1px;
     font-size: 0.8rem;
   }

   td,
   th {
     border: 1px solid rgb(190 190 190);
     padding: 10px 20px;
   }

   th {
     background-color: rgb(235 235 235);
   }

   td {
     text-align: center;
   }

   tr:nth-child(even) td {
     background-color: rgb(250 250 250);
   }

   tr:nth-child(odd) td {
     background-color: rgb(245 245 245);
   }

   caption {
     padding: 10px;
   }

   .column-border {
     border: 2px solid black;
   }
   ```

4. Gardez les données suivantes à portée de main&nbsp;; vous devrez les transformer en un tableau de données HTML dans votre fichier HTML.

   ```plain
   Lignes

   Planètes telluriques

   Mercure 0,330 4,879 5 427 3,7 4 222,6 57,9 167 0 La plus proche du Soleil
   Vénus 4,87 12,104 5 243 8,9 2 802,0 108,2 464 0
   Terre 5,97 12,756 5 514 9,8 24,0 149,6 15 1 Notre monde
   Mars 0,642 6,792 3 933 3,7 24,7 227,9 -65 2 La planète rouge

   Planètes joviennes

   Géantes gazeuses

   Jupiter 1 898 142,984 1 326 23,1 9,9 778,6 -110 67 La plus grande planète
   Saturne 568 120,536 687 9,0 10,7 1 433,5 -140 62

   Géantes de glace

   Uranus 86,8 51,118 1 271 8,7 17,2 2 872,5 -195 27
   Neptune 102 49,528 1 638 11,0 16,1 4 495,1 -200 14

   Planètes naines*

   Pluton 0,0146 2,370 2 095 0,7 153,3 5 906,4 -225 5 Déclassée en tant que planète en 2006, mais cela <a href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/">reste controversé</a>.

   Colonnes

   Nom
   Masse (10<sup>24</sup>kg)
   Diamètre (km)
   Densité (kg/m<sup>3</sup>)
   Gravité (m/s<sup>2</sup>)
   Durée du jour (en heures)
   Distance du Soleil (10<sup>6</sup>km)
   Température moyenne (°C)
   Nombre de lunes
   Notes

   Légende

   Données sur les planètes de notre système solaire (Faits planétaires tirés de la <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/">Fiche d'information planétaire de la NASA - Indicateurs</a>).
   ```

## Résumé du projet

Vous travaillez dans une école&nbsp;; actuellement, vos élèves étudient les planètes de notre système solaire, et vous souhaitez leur fournir un ensemble de données facile à consulter pour rechercher des faits et des chiffres sur ces planètes. Un tableau de données HTML est idéal — vous devez transformer les données brutes dont vous disposez en tableau, en suivant les étapes ci-dessous.

Toutes les données dont vous avez besoin sont contenues dans la liste de données fournie ci-dessus. Si vous avez du mal à visualiser les données, jetez un œil à l'exemple en direct ci-dessous, ou essayez de dessiner un diagramme.

1. Commencez le tableau en lui donnant un conteneur externe, un en-tête de tableau et un corps de tableau. Vous n'avez pas besoin d'un pied de tableau pour cet exemple.
2. Ajoutez la légende fournie à votre tableau.
3. Ajoutez une ligne à l'en-tête du tableau contenant tous les en-têtes de colonnes.
4. Créez toutes les lignes de contenu à l'intérieur du corps du tableau, en vous souvenant de transformer tous les en-têtes de lignes en en-têtes sémantiques.
5. Assurez-vous que tout le contenu est placé dans les bonnes cellules — dans les données brutes, chaque ligne de données de planète est affichée à côté de sa planète associée.
6. Ajoutez des attributs pour que les en-têtes de lignes et de colonnes soient sans ambiguïté associés aux lignes, colonnes ou groupes de lignes qu'ils représentent.
7. Ajoutez une [bordure](/fr/docs/Web/CSS/Reference/Properties/border) noire uniquement autour de la colonne contenant tous les en-têtes de lignes des noms de planètes. Faites cela en utilisant une structure `<colgroup>`/`<col>` appropriée et le style de classe `.column-border` fourni dans le CSS.

## Conseils et astuces

- La première cellule de la ligne d'en-tête doit être vide et s'étendre sur deux colonnes.
- Les en-têtes de groupe (par exemple, _Planètes joviennes_) situées à gauche des en-têtes de nom de planète (par exemple, _Saturne_) sont un peu délicates à organiser — vous devez vous assurer que chacune couvre le nombre correct de lignes et de colonnes.
- L'une des méthodes pour associer les en-têtes à leurs lignes/colonnes est beaucoup plus simple que l'autre.

## Exemple

Le tableau doit ressembler à ce qui suit après avoir été correctement balisé. Si vous êtes bloqué, consultez la solution ci-dessous dans l'exemple en direct.

{{EmbedLiveSample("planet-data-table", "100%", 720)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à ceci&nbsp;:

```html live-sample___planet-data-table
<h1>Tableau des données des planètes</h1>

<table>
  <caption>
    Données sur les planètes de notre système solaire (Faits planétaires tirés
    de la
    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >Fiche d'information planétaire de la NASA - Indicateurs</a
    >).
  </caption>
  <colgroup>
    <col span="2" />
    <col class="column-border" />
    <col span="9" />
  </colgroup>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">Nom</th>
      <th scope="col">Masse (10<sup>24</sup>kg)</th>
      <th scope="col">Diamètre (km)</th>
      <th scope="col">Densité (kg/m<sup>3</sup>)</th>
      <th scope="col">Gravité (m/s<sup>2</sup>)</th>
      <th scope="col">Durée du jour (en heures)</th>
      <th scope="col">Distance du Soleil (10<sup>6</sup>km)</th>
      <th scope="col">Température moyenne (°C)</th>
      <th scope="col">Nombre de lunes</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="4" colspan="2" scope="rowgroup">Planètes telluriques</th>
      <th scope="row">Mercure</th>
      <td>0,330</td>
      <td>4 879</td>
      <td>5 427</td>
      <td>3,7</td>
      <td>4 222,6</td>
      <td>57,9</td>
      <td>167</td>
      <td>0</td>
      <td>La plus proche du Soleil</td>
    </tr>
    <tr>
      <th scope="row">Vénus</th>
      <td>4,87</td>
      <td>12 104</td>
      <td>5 243</td>
      <td>8,9</td>
      <td>2 802,0</td>
      <td>108,2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Terre</th>
      <td>5,97</td>
      <td>12 756</td>
      <td>5 514</td>
      <td>9,8</td>
      <td>24,0</td>
      <td>149,6</td>
      <td>15</td>
      <td>1</td>
      <td>Notre monde</td>
    </tr>
    <tr>
      <th scope="row">Mars</th>
      <td>0,642</td>
      <td>6 792</td>
      <td>3 933</td>
      <td>3,7</td>
      <td>24,7</td>
      <td>227,9</td>
      <td>-65</td>
      <td>2</td>
      <td>La planète rouge</td>
    </tr>
    <tr>
      <th rowspan="4" scope="rowgroup">Planètes joviennes</th>
      <th rowspan="2" scope="rowgroup">Géantes gazeuses</th>
      <th scope="row">Jupiter</th>
      <td>1 898</td>
      <td>142 984</td>
      <td>1 326</td>
      <td>23,1</td>
      <td>9,9</td>
      <td>778,6</td>
      <td>-110</td>
      <td>67</td>
      <td>La plus grande planète</td>
    </tr>
    <tr>
      <th scope="row">Saturne</th>
      <td>568</td>
      <td>120 536</td>
      <td>687</td>
      <td>9,0</td>
      <td>10,7</td>
      <td>1 433,5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Planètes glacées</th>
      <th scope="row">Uranus</th>
      <td>86,8</td>
      <td>51 118</td>
      <td>1 271</td>
      <td>8,7</td>
      <td>17,2</td>
      <td>2 872,5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Neptune</th>
      <td>102</td>
      <td>49 528</td>
      <td>1 638</td>
      <td>11,0</td>
      <td>16,1</td>
      <td>4 495,1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tr>
    <tr>
      <th colspan="2" scope="rowgroup">Planètes naines</th>
      <th scope="row">Pluton</th>
      <td>0,0146</td>
      <td>2 370</td>
      <td>2 095</td>
      <td>0,7</td>
      <td>153,3</td>
      <td>5 906,4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        Déclassée en tant que planète en 2006, mais cela
        <a
          href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >reste controversé</a
        >.
      </td>
    </tr>
  </tbody>
</table>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
