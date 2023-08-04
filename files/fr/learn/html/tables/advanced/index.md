---
title: "Tableaux HTML : dispositions avancées et accessibilité"
slug: Learn/HTML/Tables/Advanced
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}

Dans le second article de ce module, nous examinerons quelques dispositions avancées des tableaux HTML — comme intitulés ou résumés, groupement des rangées dans l'en-tête, le corps ou le pied de page du tableau — ainsi que l'accessibilité des tableaux aux utilisateurs malvoyants.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Les bases de HTML (voir
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction au HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        En apprendre plus sur les fonctionnalités HTML plus avancées et
        l'accessibilité aux tableaux.
      </td>
    </tr>
  </tbody>
</table>

## Ajouter un titre aux tableaux avec \<caption>

Vous pouvez intituler un tableau en mettant son titre dans un élément {{htmlelement("caption")}} et en englobant le tout dans un élément {{htmlelement("table")}}. Mettez le titre juste après la balise ouvrante `<table>`.

```html
<table>
  <caption>
    Dinosaures dans le Jurassique
  </caption>

  ...
</table>
```

Comme vous pouvez le voir sur le bref exemple ci-dessus, le titre consiste en une description synthétique du contenu du tableau. C'est utile pour tous les lecteurs qui souhaitent savoir rapidement si le tableau peut leur être utile, sans avoir à parcourir tout le contenu, en particulier s'ils sont malvoyants. Plutôt que de faire lire au lecteur d'écran de nombreuses cellules pour savoir sur quoi porte le tableau, il ou elle peut se fier au titre, puis décider de lire ou non le tableau dans le détail.

Le titre est placé directement sous la balise `<table>`.

> **Note :** L'attribut [`summary`](/fr/docs/Web/HTML/Element/table#summary) peut aussi être utilisé dans un élément `<table>` pour fournir une description — il sera lu également par les lecteurs d'écran. Toutefois, nous nous devons de recommander plutôt l'utilisation de l'élément `<caption>`, car `summary` est considéré comme {{glossary("deprecated", "obsolète")}} par la norme HTML5, et ne peut être lu par l'utilisateur courant (il n'apparaît pas dans la page).

### Apprentissage actif&nbsp;: Ajouter un titre

Essayons en revisitant un exemple rencontré dans l'article précédent.

1. Ouvrez le planning du professeur de langue de la fin de [Tableaux HTML&nbsp;: notions de base](/fr/docs/Learn/HTML/Tables/Basics#Active_learning_colgroup_and_col) ou faites une copie locale du fichier [timetable-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable-fixed.html).
2. Ajoutez un titre approprié pour le tableau.
3. Enregistrez votre code et ouvrez-le dans un navigateur pour voir à quoi il ressemble.

> **Note :** Vous pouvez trouver notre version sur GitHub — voir [timetable-caption.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/timetable-caption.html) ([voir aussi directement](http://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Ajout d'une structure avec \<thead>, \<tfoot>, et \<tbody>

Comme vos tableaux deviennent un peu plus structurellement complexes, il est utile d'en améliorer la définition. Une façon claire d'y parvenir consiste à utiliser les éléments {{htmlelement("thead")}}, {{htmlelement("tfoot")}} et {{htmlelement("tbody")}}, qui vous permettent de marquer l'en-tête, le pied et le corps du tableau.

Ces éléments ne rendent pas le tableau plus accessible aux utilisateurs de lecteurs d'écran, et n'entraînent aucune amélioration visuelle par eux-mêmes. Ils sont cependant très utiles pour la présentation et la mise en page — agissant comme des accroches pour l'ajout des CSS. Pour vous donner quelques exemples intéressants, dans le cas d'un grand tableau, vous pouvez répéter l'en-tête et le pied de page sur chaque page imprimée ; vous pouvez prévoir l'affichage du corps sur une seule page et accéder au contenu par défilement vers le haut ou vers le bas.

Pour les utiliser :

- L'élément `<thead>` doit couvrir la partie du tableau qui est l'en-tête — ce sera en général la première ligne contenant les en-têtes de colonnes, mais pas toujours. Dans le code, si vous utilisez les éléments {{htmlelement("col")}}/{{htmlelement("colgroup")}}, l'en-tête du tableau devrait venir juste en-dessous de ceux-ci.
- L'élément `<tfoot>` doit envelopper la partie du tableau qui est le pied de page — ce peut être une dernière ligne contenant, par exemple, la somme des rangées précédentes. Vous pouvez inclure l'élément \<tfoot> à la suite du code contenant le corps du tableau, là où vous souhaitez le trouver, ou juste en-dessous de l'élément \<thead> (le navigateur l'affichera toujours en pied de tableau).
- L'élément `<tbody>` doit couvrir toutes les parties du tableau non contenues dans un \<thead> ou un \<tfoot>. Il pourra apparaître dans le code, sous la déclaration de l'en-tête ou du pied de page, selon la façon dont vous avez décidé de le structurer (voir les notes ci‑dessus).

> **Note :** `<tbody>` est toujours inclus dans tous les tableaux, implicitement si vous ne l'avez pas spécifié dans votre code. Pour le vérifier, ouvrez un tableau ne contenant pas l'élément `<tbody>` et regardez le code HTML dans les [outils de développement de votre navigateur](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools) — vous verrez que le navigateur a ajouté cette balise pour vous. Si vous vous demandez pourquoi vous ennuyer à gérer ce qui est ajouté automatiquement — parce que cela vous donne plus de contrôle sur la structure et l'apparence de votre tableau.

### Apprentissage actif : Ajout d'une structure au tableau

Mettons en œuvre ces nouveaux éléments.

1. D'abord, faites une copie locale des fichiers [spending-record.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/spending-record.html) et [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/minimal-table.css) dans un nouveau dossier.
2. Essayez de les ouvrir dans un navigateur — vous verrez que cela paraît correct, mais gagnerait à être amélioré. La ligne "SUM" qui contient les totaux des montants dépensés semble être au mauvais endroit et il manque certains détails du code.
3. Mettez la ligne d'en-têtes en évidence avec l'élément `<thead>` , la ligne des totaux ("SUM") dans un `<tfoot>`, et le reste du contenu dans un `<tbody>`.
4. Enregistrez et actualisez, et vous verrez que l'ajout de l'élément `<tfoot>` a renvoyé la ligne "SUM" en bas du tableau.
5. Ensuite, ajoutez un attribut [`colspan`](/fr/docs/Web/HTML/Element/td#colspan) pour générer une cellule Total ("SUM") couvrant les quatre premières colonnes, ainsi le nombre réel apparaît au pied de la colonne «&nbsp;Coût&nbsp;».
6. Ajoutons un style supplémentaire au tableau, pour vous donner une idée de l'utilité de ces éléments pour l'application des CSS. Dans le \<head> du document HTML, vous pouvez voir un élément {{htmlelement("style")}} vide, ajoutez les lignes suivantes de code CSS :

   ```css
   tbody {
     font-size: 90%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

7. Enregistrez, actualisez et regardez le résultat. Si `<tbody>` et `<tfoot>` n'étaient pas en place, vous devriez écrire plus de commandes plus complexes (sélection/règles) pour l'application des mêmes styles.

> **Note :** Nous ne nous attendons pas à ce que vous compreniez les CSS maintenant. Vous en apprendrez plus avec les modules à propos des CSS ([Introduction aux CSS](/fr/docs/Learn/CSS/Introduction_to_CSS) est un bon moyen de commencer ; il y a aussi un article spécifique sur [l'esthétique des tables](/fr/docs/Learn/CSS/Styling_boxes/Styling_tables)).

Le code de votre tableau fini devrait ressembler à quelque chose comme :

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Enregistrer mes dépenses</title>
    <style>
      html {
        font-family: sans-serif;
      }

      table {
        border-collapse: collapse;
        border: 2px solid rgb(200, 200, 200);
        letter-spacing: 1px;
        font-size: 0.8rem;
      }

      td,
      th {
        border: 1px solid rgb(190, 190, 190);
        padding: 10px 20px;
      }

      th {
        background-color: rgb(235, 235, 235);
      }

      td {
        text-align: center;
      }

      tr:nth-child(even) td {
        background-color: rgb(250, 250, 250);
      }

      tr:nth-child(odd) td {
        background-color: rgb(245, 245, 245);
      }

      caption {
        padding: 10px;
      }

      tbody {
        font-size: 90%;
        font-style: italic;
      }

      tfoot {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <table>
      <caption>
        Comment j'ai choisi de dépenser mon argent
      </caption>
      <thead>
        <tr>
          <th>Achats</th>
          <th>Où&nbsp;?</th>
          <th>Date</th>
          <th>Avis</th>
          <th>Coût (€)</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colspan="4">SUM</td>
          <td>118</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>Coupe de cheveux</td>
          <td>Coiffeur</td>
          <td>12/09</td>
          <td>Bonne idée</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Lasagnes</td>
          <td>Restaurant</td>
          <td>12/09</td>
          <td>Regrets</td>
          <td>18</td>
        </tr>
        <tr>
          <td>Souliers</td>
          <td>Chaussures</td>
          <td>13/09</td>
          <td>Gros regrets</td>
          <td>65</td>
        </tr>
        <tr>
          <td>Dentifrice</td>
          <td>Supermarché</td>
          <td>13/09</td>
          <td>Bien</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

{{ EmbedLiveSample("Apprentissage_actif_Ajout_d'une_structure_au_tableau", '100%', 300) }}

> **Note :** Vous pouvez aussi le trouver sur Github [spending-record-finished.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/spending-record-finished.html) ([voir aussi le résultat](http://mdn.github.io/learning-area/html/tables/advanced/spending-record-finished.html) directement).

## Tableaux imbriqués

Il est possible d'inclure un tableau dans un autre, à condition d'en spécifier la structure complète, y compris l'élément `<table>`. Ce n'est généralement pas vraiment conseillé, car cette opération rend le balisage plus confus et moins accessible pour les utilisateurs de lecteurs d'écran, alors que dans de nombreux cas, il suffit d'insérer des cellules/lignes/colonnes supplémentaires dans un tableau existant. Mais il est parfois nécessaire de le faire, quand par exemple vous souhaitez importer facilement des données provenant d'autres sources.

Le balisage suivant montre un tableau simple imbriqué :

```html
<table id="table1">
  <tr>
    <th>title1</th>
    <th>title2</th>
    <th>title3</th>
  </tr>
  <tr>
    <td id="nested">
      <table id="table2">
        <tr>
          <td>cell1</td>
          <td>cell2</td>
          <td>cell3</td>
        </tr>
      </table>
    </td>
    <td>cell2</td>
    <td>cell3</td>
  </tr>
  <tr>
    <td>cell4</td>
    <td>cell5</td>
    <td>cell6</td>
  </tr>
</table>
```

Voici la sortie qui en résulte :

| title1 | title2 | title3 |
| ------ | ------ | ------ |

| <table>

  <tbody>
    <tr>
      <td>cell1</td>
      <td>cell2</td>
      <td>cell3</td>
    </tr>
  </tbody>
</table> | cell2  | cell3  |
| cell4                                                                                                                   | cell5  | cell6  |

## Tableaux pour utilisateurs malvoyants

Rappelons brièvement comment nous utilisons les tableaux de données. Un tableau peut être un outil pratique pour accéder rapidement à une donnée et rechercher différentes valeurs. Par exemple, un bref coup d'œil sur le tableau suivant suffit pour savoir combien de bagues ont été vendues à Gand en août dernier. Pour comprendre ces informations, nous faisons visuellement l'association entre les données du tableau et les en-têtes de colonnes et/ou de lignes.

<table>
  <caption>
    Articles vendus Août 2016
  </caption>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <th colspan="3" scope="colgroup">Vêtements</th>
      <th colspan="2" scope="colgroup">Accessoires</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <th scope="col">Pantalons</th>
      <th scope="col">Jupes</th>
      <th scope="col">Robes</th>
      <th scope="col">Bracelets</th>
      <th scope="col">Bagues</th>
    </tr>
    <tr>
      <th rowspan="3" scope="rowgroup">Belgique</th>
      <th scope="row">Anvers</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tr>
    <tr>
      <th scope="row">Gand</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">Bruxelles</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Pays-Bas</th>
      <th scope="row">Amsterdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tr>
    <tr>
      <th scope="row">Utrecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tr>
  </tbody>
</table>

Mais que faire si vous ne pouvez pas créer ces associations visuelles ? Comment pouvez-vous lire un tableau comme celui ci-dessus ? Les personnes malvoyantes utilisent souvent un lecteur d'écran qui leur lit les informations des pages web. Ce n'est pas un problème quand vous lisez du texte brut, mais l'interprétation d'un tableau peut constituer un défi pour une personne aveugle. Néanmoins, avec le balisage approprié, nous pouvons remplacer des associations visuelles par des associations programmées.

> **Note :** Il y a environ 253 millions de personnes vivant avec des déficiences visuelles selon les [données de l'OMS en 2017](http://www.who.int/mediacentre/factsheets/fs282/fr/).

Cette partie de l'article indique des techniques avancées pour rendre les tableaux les plus accessibles possible.

### Utilisation des en-têtes de colonnes et de lignes

Les lecteurs d'écran identifieront tous les en-têtes et les utiliseront pour réaliser automatiquement les associations entre ces en-têtes et les cellules correspondantes. La combinaison des en-têtes des colonnes et des lignes doit permettre d'identifier et d'interpréter les données de chaque cellule. Ainsi, les utilisateurs de lecteurs d'écran peuvent accéder aux données d'une façon similaire à celle des utilisateurs voyants.

Nous avons déjà traité des en-têtes dans notre article précédent — voir [Ajouter des en-têtes avec \<th>](/fr/docs/Learn/HTML/Tables/Basics#Adding_headers_with_%3Cth%3E_elements) .

### L'attribut `scope`

Aux balises `<th>`, sujet de l'article précédent, ajoutons l'attribut [`scope`](/fr/docs/Web/HTML/Element/th#scope). Il peut être mentionné dans un élément `<th>` pour indiquer précisément à un lecteur d'écran si la cellule contient un en-tête de colonne ou de ligne — par exemple, sommes‑nous dans un en-tête de ligne, ou de colonne ? En revenant à notre exemple d'enregistrement de dépenses vu plus tôt, il est possible de définir sans ambiguïté un en-tête de colonne comme étant un en-tête de colonne ainsi&nbsp;:

```html
<thead>
  <tr>
    <th scope="col">Achats</th>
    <th scope="col">Ou&nbsp;?</th>
    <th scope="col">Date</th>
    <th scope="col">Avis</th>
    <th scope="col">Coût (€)</th>
  </tr>
</thead>
```

Et chaque ligne pourrait également avoir une définition de son en-tête comme ceci (à condition d'avoir ajouté des en-têtes de lignes comme des en-têtes de colonnes) :

```html
<tr>
  <th scope="row">Coupe de cheveux</th>
  <td>Coiffeur</td>
  <td>12/09</td>
  <td>Bonne idée</td>
  <td>30</td>
</tr>
```

Les lecteurs d'écran reconnaîtront un balisage structuré comme celui-ci et permettront à leurs utilisateurs de lire en une fois une colonne ou une ligne entière par exemple.

`scope` a deux autres valeurs possibles — `colgroup` et `rowgroup`. Elles sont utilisées pour les en-têtes qui couvrent plusieurs colonnes ou lignes. Si vous revenez au tableau «&nbsp;Articles vendus...&nbsp;» au début de ce paragraphe du présent article, vous voyez que la cellule «&nbsp;Vêtements&nbsp;» se trouve au-dessus des cellules «&nbsp;Pantalons&nbsp;», «&nbsp;Jupes&nbsp;» et «&nbsp;Robes&nbsp;». Toutes ces cellules sont marquées comme en-têtes (`<th>`), mais «&nbsp;Vêtements&nbsp;» est un en-tête de niveau supérieur qui définit trois «&nbsp;sous-en-têtes&nbsp;». «&nbsp;Vêtements&nbsp;» comportera donc un attribut `scope="colgroup"`, alors que les autres recevront un attribut `scope="col"`.

### Les attributs `id` et `headers`

Une alternative à l'usage de l'attribut `scope` est l'utilisation des attributs [`id`](/fr/docs/Web/HTML/Global_attributes#id) et [`headers`](/fr/docs/Web/HTML/Element/td#headers) pour créer une association entre en-têtes et cellules. Ils sont utilisés de la manière suivante :

1. Vous ajoutez un identifiant unique `id` à chaque élément `<th>`.
2. Vous ajoutez un attribut `headers` à chaque élément `<td>` . Chaque attribut `headers` doit contenir une liste des `id` de tous les éléments \<th> qu'il contient, séparés par des espaces.

Votre tableau HTML possède donc la position explicite de chaque cellule dans le tableau, définie par les en-têtes de chaque colonne et chaque ligne qui en font partie, un peu comme dans une feuille de calcul. Pour un bon fonctionnement, le tableau a réellement besoin d'en-têtes de colonnes et de lignes.

En revenant à notre exemple de tableau des dépenses et des coûts, les deux extraits précédents pourraient être réécrits ainsi&nbsp;:

```html
<thead>
  <tr>
    <th id="purchase">Achats</th>
    <th id="location">Où&nbsp;?</th>
    <th id="date">Date</th>
    <th id="evaluation">Avis</th>
    <th id="cost">Coût (€)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="haircut">Coupe de cheveux</th>
    <td headers="location haircut">Coiffeur</td>
    <td headers="date haircut">12/09</td>
    <td headers="evaluation haircut">Bonne idée</td>
    <td headers="cost haircut">30</td>
  </tr>

  ...
</tbody>
```

> **Note :** Cette méthode crée des associations très précises entre en-têtes et données mais elle utilise **beaucoup** plus de balisage et ne laisse aucune marge d'erreur. L'approche `scope` est généralement suffisante pour la plupart des tableaux.

### Apprentissage actif&nbsp;: jouer avec `scope` et `headers`

1. Pour cet exercice final, nous aimerions que vous fassiez une copie locale de [items‑sold.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold.html) et [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/minimal-table.css), dans un nouveau répertoire.
2. Maintenant essayez d'ajouter un attribut `scope` approprié pour améliorer ce tableau.
3. Enfin, essayez avec une autre copie du fichier initial, de faire un tableau plus accessible en utilisant les attributs `id` et `headers`.

> **Note :** Vous pouvez contrôler votre travail en le comparant à nos exemples finis — voir [items-sold-scope.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold-scope.html) ([voir aussi directement](http://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html))
> et [items-sold-headers.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold-headers.html) ([voir aussi directement](http://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Résumé

Il reste encore quelques autres choses à apprendre sur les tableaux HTML, mais nous vous avons vraiment indiqué tout ce qu'il est nécessaire de savoir pour le moment. À ce stade, vous voulez peut-être en apprendre plus sur les styles de tableaux HTML — voyez alors [Décor des tableaux](/fr/docs/Learn/CSS/Styling_boxes/Styling_tables).

{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}
