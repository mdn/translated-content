---
title: L'accessibilité des tableaux HTML
short-title: Accessibilité des tableaux
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Dans l'article précédent, nous avons examiné l'une des fonctionnalités les plus importantes pour rendre les tableaux HTML accessibles aux utilisateur·ice·s malvoyant·e·s — l'élément {{HTMLElement("th")}}. Dans cet article, nous poursuivons sur cette lancée en abordant d'autres fonctionnalités d'accessibilité des tableaux HTML, telles que les légendes et les résumés, le regroupement des lignes en en-tête, corps et pied de page, ainsi que la délimitation des colonnes et des lignes.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Les bases de HTML (voir
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Introduction au HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Comprendre les problèmes d'accessibilité associés aux tableaux.</li>
          <li>Ajouter des légendes aux tableaux.</li>
          <li>Améliorer la structuration des tableaux avec les éléments <code>thead</code>, <code>tbody</code> et <code>tfoot</code>.</li>
          <li>Créer une association plus poussée entre les en-têtes et les cellules avec les attributs <code>scope</code>, <code>id</code> et <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Récapitulatif : Tableaux pour les utilisateur·ice·s malvoyant·e·s

Récapitulons brièvement comment nous utilisons les tableaux de données. Un tableau peut être un outil pratique, nous permettant d'accéder rapidement aux données et de rechercher différentes valeurs. Par exemple, il suffit d'un coup d'œil rapide au tableau ci-dessous pour savoir combien de bagues ont été vendues à Gand en août 2016. Pour comprendre ses informations, nous faisons des associations visuelles entre les données de ce tableau et ses en-têtes de colonnes et/ou de lignes.

<table>
  <caption>Articles vendus en août 2016</caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" scope="colgroup">Vêtements</th>
      <th colspan="2" scope="colgroup">Accessoires</th>
    </tr>
    <tr>
      <th scope="col">Pantalons</th>
      <th scope="col">Jupes</th>
      <th scope="col">Robes</th>
      <th scope="col">Bracelets</th>
      <th scope="col">Bagues</th>
    </tr>
  </thead>
  <tbody>
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

Mais que se passe-t-il si vous ne pouvez pas faire ces associations visuelles&nbsp;? Comment lire alors un tableau comme celui ci-dessus&nbsp;? Les personnes malvoyantes utilisent souvent un [lecteur d'écran](/fr/docs/Glossary/Screen_reader) qui lit les informations des pages web à haute voix. Cela ne pose aucun problème lorsque vous lisez du texte brut, mais interpréter un tableau peut être un véritable défi pour une personne aveugle. Néanmoins, avec le balisage approprié, nous pouvons remplacer les associations visuelles par des associations programmatiques.

> [!NOTE]
> Il y a environ 253 millions de personnes vivant avec une déficience visuelle selon les [données de l'OMS en 2017 <sup>(angl.)</sup>](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment).

### Utiliser les en-têtes de colonnes et de lignes

Les lecteurs d'écran identifient tous les en-têtes et les utilisent pour établir des associations programmatiques entre ces en-têtes et les cellules auxquelles ils se rapportent. La combinaison des en-têtes de colonnes et de lignes permet d'identifier et d'interpréter les données de chaque cellule afin que les utilisateur·ice·s de lecteurs d'écran puissent interpréter le tableau de manière similaire à un·e utilisateur·ice voyant·e.

Nous avons déjà abordé les en-têtes dans notre article précédent — voir [Ajouter des en-têtes avec les éléments \<th>](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#ajouter_des_en-têtes_avec_th).

## Ajouter un titre à votre tableau avec `<caption>`

Vous pouvez donner un titre à votre tableau en le plaçant à l'intérieur d'un élément {{HTMLElement("caption")}} et en l'imbriquant dans l'élément {{HTMLElement("table")}}. Vous devez le placer juste en dessous de la balise ouvrante `<table>`.

```html
<table>
  <caption>
    Dinosaures dans le Jurassique
  </caption>
  <!-- … -->
</table>
```

Comme vous pouvez le déduire de l'exemple succinct ci-dessus, la légende est destinée à contenir une description du contenu du tableau. C'est utile pour tous les lecteur·ice·s qui souhaitent se faire rapidement une idée de l'intérêt du tableau pour eux lorsqu'ils parcourent la page, mais surtout pour les utilisateur·ice·s aveugles. Plutôt que de laisser un lecteur d'écran lire le contenu de nombreuses cellules simplement pour comprendre de quoi traite le tableau, l'utilisateur·ice peut se fier à la légende et décider ensuite s'il ou elle souhaite ou non lire le tableau plus en détail.

Une légende est placée directement sous la balise `<table>`.

> [!NOTE]
> L'attribut [`summary`](/fr/docs/Web/HTML/Reference/Elements/table#summary) peut également être utilisé sur l'élément `<table>` pour fournir une description — c'est également lu par les lecteurs d'écran. Nous recommandons toutefois d'utiliser l'élément `<caption>`, car `summary` est obsolète et ne peut pas être lu par les utilisateur·ice·s voyant·e·s (il n'apparaît pas sur la page).

### Exercice sur les légendes de tableaux

À ce stade, nous allons vous demander d'essayer d'ajouter une légende à un tableau HTML, en utilisant l'emploi du temps scolaire que vous avez rencontré dans l'article précédent.

1. Copiez le premier bloc HTML dans [Grouper des colonnes avec `<colgroup>` et `<col>`](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#grouper_les_colonnes_avec_colgroup_et_col) dans un fichier HTML sur votre ordinateur, ou dans un éditeur en ligne tel que [CodePen <sup>(angl.)</sup>](https://codepen.io/) ou [JSBin <sup>(angl.)</sup>](https://jsbin.com/).
2. Ajoutez une légende appropriée au tableau.
3. Enregistrez votre code et voyez à quoi il ressemble.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à ceci&nbsp;:

```html
<table>
  <caption>
    Emploi du temps hebdomadaire des cours de langues de St. Winnifred
  </caption>
  <colgroup>
    <col span="2" />
    <col class="column-background" />
    <col class="column-fixed-width" />
    <col class="column-background" />
    <col class="column-background-border" />
    <col span="2" class="column-fixed-width" />
  </colgroup>

  <!-- Le reste du code est omis pour des raisons de concision -->
</table>
```

</details>

## Ajouter une structure avec `<thead>`, `<tbody>` et `<tfoot>`

À mesure que la structure de vos tableaux se complexifie, il est utile de leur attribuer une définition structurelle plus précise. Une méthode simple pour y parvenir consiste à utiliser {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} et {{HTMLElement("tfoot")}}, qui vous permettent de baliser les sections d'en-tête, de corps et de pied de page du tableau.

Ces éléments ne rendent pas nécessairement le tableau plus accessible aux utilisateur·ice·s de lecteurs d'écran. Ils n'apportent pas d'amélioration visuelle en soi, mais ils sont très utiles pour appliquer des améliorations de style et de mise en page avec CSS, ce qui peut améliorer l'accessibilité. Pour vous donner quelques exemples intéressants, dans le cas d'un long tableau, vous pouvez faire en sorte que l'en-tête et le pied de page se répètent sur chaque page imprimée, et vous pouvez afficher le corps du tableau sur une seule page et rendre le contenu accessible en faisant défiler vers le haut et vers le bas.

Pour les utiliser, ils doivent être inclus dans l'ordre suivant&nbsp;:

- L'élément `<thead>` doit encadrer la partie de la table qui correspond à l'en-tête — il s'agit généralement de la première ligne contenant les intitulés de colonnes, mais ce n'est pas toujours le cas. Si vous utilisez les éléments {{HTMLElement("col")}}/{{HTMLElement("colgroup")}}, l'en-tête de la table doit se trouver juste en dessous de ceux-ci.
- L'élément `<tbody>` doit englober la partie principale du contenu du tableau qui n'est ni l'en-tête ni le pied de page, et doit venir après l'élément `<thead>`.
- L'élément `<tfoot>` doit encadrer la partie du tableau qui correspond au pied de page — il peut s'agir, par exemple, d'une dernière ligne contenant la somme des éléments des lignes précédentes. L'élément `<tfoot>` doit venir après l'élément `<tbody>`.

> [!NOTE]
> `<tbody>` est toujours inclus implicitement dans chaque tableau si vous ne le définissez pas dans votre code. Pour vérifier ceci, ouvrez l'un de vos exemples précédents qui n'inclut pas `<tbody>` et examinez le code HTML dans vos [outils de développement du navigateur](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) — vous voyez que le navigateur a ajouté cette balise pour vous. Vous vous demandez peut-être pourquoi vous devez vous donner la peine de l'inclure — vous devez le faire, car cela vous donne plus de contrôle sur la structure et le style de votre tableau.

### Structurer un tableau de suivi des dépenses

Mettons en œuvre ces nouveaux éléments.

1. Tout d'abord, créez un nouveau fichier HTML appelé `suivi-depenses.html` et mettez le HTML suivant à l'intérieur de la balise `<body>`&nbsp;:

   ```html
   <h1>Suivi de mes dépenses</h1>

   <table>
     <caption>
       Comment j'ai choisi de dépenser mon argent
     </caption>
     <tr>
       <th>Achat</th>
       <th>Où&nbsp;?</th>
       <th>Date</th>
       <th>Avis</th>
       <th>Coût (€)</th>
     </tr>
     <tr>
       <td>Coiffeur</td>
       <td>Salon de coiffure</td>
       <td>12/09</td>
       <td>Bonne idée</td>
       <td>30</td>
     </tr>
     <tr>
       <td>Lasagne</td>
       <td>Restaurant</td>
       <td>12/09</td>
       <td>Regrets</td>
       <td>18</td>
     </tr>
     <tr>
       <td>Souliers</td>
       <td>Magasin de chaussures</td>
       <td>13/09</td>
       <td>Grands regrets</td>
       <td>65</td>
     </tr>
     <tr>
       <td>Dentifrice</td>
       <td>Supermarché</td>
       <td>13/09</td>
       <td>Bon</td>
       <td>5</td>
     </tr>
     <tr>
       <td>Total</td>
       <td>118</td>
     </tr>
   </table>
   ```

2. Ensuite, créez un fichier CSS appelé `tableau-minimaliste.css` dans le même répertoire que votre fichier HTML et remplissez-le avec le contenu suivant&nbsp;:

   ```css live-sample___finished-table-structure
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
   ```

3. Ajoutez un élément `<link>` dans le `<head>` de votre HTML pour appliquer le CSS au HTML (voir [Appliquer CSS et JavaScript à HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#applying_css_and_javascript_to_html) pour obtenir de l'aide à ce sujet).

4. Essayez de mettre la ligne d'en-têtes évidente dans un élément `<thead>`, la ligne «&nbsp;Total&nbsp;» dans un élément `<tfoot>`, et le reste du contenu dans un élément `<tbody>`.
5. Ensuite, ajoutez un attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/td#colspan) pour que la cellule «&nbsp;Total&nbsp;» s'étende sur les quatre premières colonnes, de sorte que le nombre réel apparaisse en bas de la colonne «&nbsp;Coût&nbsp;».
6. Ajoutons un style supplémentaire au tableau, pour vous donner une idée de l'utilité de ces éléments pour l'application des CSS. Ajoutez les lignes suivantes à votre fichier CSS&nbsp;:

   ```css live-sample___finished-table-structure
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

   > [!NOTE]
   > Nous ne nous attendons pas à ce que vous compreniez les CSS maintenant. Vous en apprendrez plus avec les modules à propos des CSS ([Introduction aux CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Getting_started) est un bon moyen de commencer&nbsp;; il y a aussi un article spécifique sur [l'esthétique des tableaux](/fr/docs/Learn_web_development/Core/Styling_basics/Tables)).

7. Enregistrez, actualisez et regardez le résultat. Si `<tbody>` et `<tfoot>` n'étaient pas en place, vous devez écrire des sélecteurs/règles beaucoup plus compliqués pour appliquer le même style.

Le code de votre tableau fini doit ressembler à quelque chose comme&nbsp;:

{{EmbedLiveSample("finished-table-structure", "100%", 300)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à quelque chose comme ceci&nbsp;:

```html live-sample___finished-table-structure
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
      <td colspan="4">Somme</td>
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
      <td>Magasin de chaussures</td>
      <td>13/09</td>
      <td>Grands regrets</td>
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
```

</details>

## L'attribut `scope`

L'attribut [`scope`](/fr/docs/Web/HTML/Reference/Elements/th#scope) peut être ajouté à l'élément `<th>` afin d'indiquer précisément aux lecteurs d'écran à quelles cellules s'applique l'en-tête — s'agit-il d'un en-tête pour la ligne dans laquelle il se trouve, ou pour la colonne, par exemple&nbsp;? Si l'on revient à notre exemple de relevé de dépenses présenté précédemment, vous pouvez définir sans ambigüité les en-têtes de colonnes comme des en-têtes de colonnes de la manière suivante&nbsp;

```html
<thead>
  <tr>
    <th scope="col">Achats</th>
    <th scope="col">Où&nbsp;?</th>
    <th scope="col">Date</th>
    <th scope="col">Avis</th>
    <th scope="col">Coût (€)</th>
  </tr>
</thead>
```

Et chaque ligne peut avoir un en-tête défini de cette manière (si nous ajoutons des en-têtes de ligne en plus des en-têtes de colonne)&nbsp;:

```html
<tr>
  <th scope="row">Coupe de cheveux</th>
  <td>Coiffeur</td>
  <td>12/09</td>
  <td>Bonne idée</td>
  <td>30</td>
</tr>
```

Les lecteurs d'écran reconnaîssent une structure de balisage comme celle-ci et permettent à leurs utilisateur·ice·s de lire toute la colonne ou la ligne en une seule fois, par exemple.

`scope` peut prendre deux autres valeurs — `colgroup` et `rowgroup`. Celles-ci sont utilisées pour les en-têtes qui se trouvent au-dessus de plusieurs colonnes ou lignes. Si vous regardez à nouveau le tableau «&nbsp;Articles vendus en août 2016&nbsp;» au début de cette section de l'article, vous pouvez voir que la cellule «&nbsp;Vêtements&nbsp;» se trouve au-dessus des cellules «&nbsp;Pantalons&nbsp;», «&nbsp;Jupes&nbsp;» et «&nbsp;Robes&nbsp;». Toutes ces cellules doivent être marquées comme des en-têtes (`<th>`), mais «&nbsp;Vêtements&nbsp;» est un en-tête qui se trouve au-dessus et définit les trois sous-en-têtes. «&nbsp;Vêtements&nbsp;» doit donc recevoir un attribut `scope="colgroup"`, tandis que les autres recevraient un attribut `scope="col"`&nbsp;:

```html
<thead>
  <tr>
    <th colspan="3" scope="colgroup">Vêtements</th>
  </tr>
  <tr>
    <th scope="col">Pantalons</th>
    <th scope="col">Jupes</th>
    <th scope="col">Robes</th>
  </tr>
</thead>
```

Il en va de même pour les en-têtes de plusieurs lignes groupées. Regardez à nouveau le tableau «&nbsp;Articles vendus en août 2016&nbsp;», cette fois en vous concentrant sur les lignes avec les en-têtes «&nbsp;Amsterdam&nbsp;» et «&nbsp;Utrecht&nbsp;» (`<th>`). Vous pouvez remarquer que l'en-tête «&nbsp;Pays-Bas&nbsp;», également balisé comme un élément `<th>`, s'étend sur les deux lignes, étant l'en-tête des deux autres sous-en-têtes. Par conséquent, `scope="rowgroup"` doit être défini sur cette cellule d'en-tête pour aider les lecteurs d'écran à créer les associations correctes&nbsp;:

```html
<tr>
  <th rowspan="2" scope="rowgroup">Pays-Bas</th>
  <th scope="row">Amsterdam</th>
  <td>89</td>
  <td>34</td>
  <td>69</td>
</tr>
<tr>
  <th scope="row">Utrecht</th>
  <td>80</td>
  <td>12</td>
  <td>43</td>
</tr>
```

## Les attributs `id` et `headers`

Une alternative à l'utilisation de l'attribut `scope` consiste à utiliser les attributs [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) et [`headers`](/fr/docs/Web/HTML/Reference/Elements/td#headers) pour créer des associations entre les cellules de données et les cellules d'en-tête.

Un élément `<th>` peut fournir un en-tête pour une cellule de données (`<td>`) ou, dans des tableaux plus complexes, pour une autre cellule d'en-tête (`<th>`). Cela permet de créer des en-têtes en couches ou groupés, où un en-tête décrit plusieurs autres.

L'attribut `headers` est utilisé pour lier une cellule, `<td>` ou `<th>`, à une ou plusieurs cellules d'en-tête. Il prend une liste de {{Glossary("string", "chaînes de caractères")}} séparée par des espaces&nbsp;; l'ordre des chaînes de caractères n'a pas d'importance. Chaque chaîne de caractères doit correspondre à un `id` unique d'un élément `<th>` auquel la cellule est associée.

Cette méthode donne à votre tableau HTML une définition plus explicite de la position de chaque cellule, en fonction des en-têtes de la colonne et de la ligne auxquelles elle appartient, un peu comme dans un tableur. Pour que cela fonctionne correctement, votre tableau doit inclure à la fois des en-têtes de colonne et de ligne.

Examinons une partie de l'exemple «&nbsp;Articles vendus en août 2016&nbsp;» pour voir comment utiliser les attributs `id` et `headers`&nbsp;:

1. Ajoutez un `id` unique à chaque élément `<th>` du tableau.
2. Pour les cellules d'en-tête&nbsp;: ajoutez un attribut `headers` à chaque élément `<th>` qui agit comme un sous-en-tête, c'est-à-dire une cellule d'en-tête avec un autre en-tête au-dessus. La valeur est l'`id` de l'en-tête de niveau supérieur. Dans notre exemple, c'est `"clothes"` pour les en-têtes de colonne et `"belgium"` pour l'en-tête de ligne.
3. Pour les cellules de données&nbsp;: ajoutez un attribut `headers` à chaque élément `<td>`, et ajoutez les `id` des éléments `<th>` associés sous forme de liste séparée par des espaces. Vous pouvez procéder comme dans un tableur&nbsp;: trouvez la cellule de données, puis localisez les en-têtes de ligne et de colonne qui la décrivent. L'ordre des `id` définis n'a pas d'importance, mais le maintenir cohérent aide à organiser et à améliorer la lisibilité du code.

```html
<thead>
  <tr>
    <th></th>
    <th></th>
    <th id="vetements" colspan="3">Vêtements</th>
  </tr>
  <tr>
    <th></th>
    <th></th>
    <th id="pantalons" headers="vetements">Pantalons</th>
    <th id="jupes" headers="vetements">Jupes</th>
    <th id="robes" headers="vetements">Robes</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="belgique" rowspan="2">Belgique</th>
    <th id="anvers" headers="belgique">Anvers</th>
    <td headers="belgique anvers vetements pantalons">56</td>
    <td headers="belgique anvers vetements jupes">22</td>
    <td headers="belgique anvers vetements robes">43</td>
  </tr>
  <tr>
    <th id="gand" headers="belgique">Gand</th>
    <td headers="belgique gand vetements pantalons">41</td>
    <td headers="belgique gand vetements jupes">17</td>
    <td headers="belgique gand vetements robes">35</td>
  </tr>
</tbody>
```

Dans cet exemple&nbsp;:

- Le `<th>` pour `"Belgique"` utilise `rowspan="2"` pour couvrir à la fois `"Anvers"` et `"Gand"`.
- Les cellules d'en-tête de ville (`"Anvers"` et `"Gand"`) utilisent l'attribut `headers` pour référencer `"belgique"` afin de montrer qu'elles appartiennent au groupe Belgique.
- Chaque `<td>` inclut un attribut `headers` pour le pays (`belgique`), la ville (`anvers` ou `gand`), le groupe (`vetements`), et l'article de vêtement spécifique (`pantalons`, `jupes`, ou `robes`).

> [!NOTE]
> Cette méthode crée des associations très précises entre les en-têtes et les cellules de données, mais elle utilise **beaucoup** plus de balisage et ne laisse aucune place aux erreurs. L'approche `scope` est généralement suffisante pour la plupart des tableaux.

## Jouer avec les portées et les en-têtes

Pour cet exercice final, nous allons vous demander d'essayer d'utiliser les attributs `scope` (portée) et `headers` (en-têtes) sur le tableau d'exemple que nous avons présenté ci-dessus.

1. Tout d'abord, créez des copies locales de [`items-sold.html` <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) et [`minimal-table.css` <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css), dans un nouveau répertoire.
2. Essayez d'ajouter les attributs `scope` appropriés pour rendre ce tableau plus accessible.
3. Faites une autre copie des fichiers de départ dans un autre répertoire local.
4. Cette fois, rendez le tableau plus accessible en créant des associations précises et explicites en utilisant les attributs `id` et `headers`.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Le premier exemple HTML terminé doit ressembler à ceci&nbsp;:

```html
<table>
  <caption>
    Articles vendus en août 2016
  </caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" scope="colgroup">Vêtements</th>
      <th colspan="2" scope="colgroup">Accessoires</th>
    </tr>
    <tr>
      <th scope="col">Pantalons</th>
      <th scope="col">Jupes</th>
      <th scope="col">Robes</th>
      <th scope="col">Bracelets</th>
      <th scope="col">Bagues</th>
    </tr>
  </thead>
  <tbody>
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
```

Le second exemple doit ressembler à ceci&nbsp;:

```html
<table>
  <caption>
    Articles vendus en août 2016
  </caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" id="vetements">Vêtements</th>
      <th colspan="2" id="accessoires">Accessoires</th>
    </tr>
    <tr>
      <th id="pantalons" headers="vetements">Pantalons</th>
      <th id="jupes" headers="vetements">Jupes</th>
      <th id="robes" headers="vetements">Robes</th>
      <th id="bracelets" headers="accessoires">Bracelets</th>
      <th id="bagues" headers="accessoires">Bagues</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" id="belgique">Belgique</th>
      <th id="anvers" headers="belgique">Anvers</th>
      <td headers="anvers belgique vetements pantalons">56</td>
      <td headers="anvers belgique vetements jupes">22</td>
      <td headers="anvers belgique vetements robes">43</td>
      <td headers="anvers belgique accessoires bracelets">72</td>
      <td headers="anvers belgique accessoires bagues">23</td>
    </tr>
    <tr>
      <th id="gand" headers="belgique">Gand</th>
      <td headers="gand belgique vetements pantalons">46</td>
      <td headers="gand belgique vetements jupes">18</td>
      <td headers="gand belgique vetements robes">50</td>
      <td headers="gand belgique accessoires bracelets">61</td>
      <td headers="gand belgique accessoires bagues">15</td>
    </tr>
    <tr>
      <th id="bruxelles" headers="belgique">Bruxelles</th>
      <td headers="bruxelles belgique vetements pantalons">51</td>
      <td headers="bruxelles belgique vetements jupes">27</td>
      <td headers="bruxelles belgique vetements robes">38</td>
      <td headers="bruxelles belgique accessoires bracelets">69</td>
      <td headers="bruxelles belgique accessoires bagues">28</td>
    </tr>
    <tr>
      <th rowspan="2" id="pays-bas">Pays-Bas</th>
      <th id="amsterdam" headers="pays-bas">Amsterdam</th>
      <td headers="amsterdam pays-bas vetements pantalons">89</td>
      <td headers="amsterdam pays-bas vetements jupes">34</td>
      <td headers="amsterdam pays-bas vetements robes">69</td>
      <td headers="amsterdam pays-bas accessoires bracelets">85</td>
      <td headers="amsterdam pays-bas accessoires bagues">38</td>
    </tr>
    <tr>
      <th id="utrecht" headers="pays-bas">Utrecht</th>
      <td headers="utrecht pays-bas vetements pantalons">80</td>
      <td headers="utrecht pays-bas vetements jupes">12</td>
      <td headers="utrecht pays-bas vetements robes">43</td>
      <td headers="utrecht pays-bas accessoires bracelets">36</td>
      <td headers="utrecht pays-bas accessoires bagues">19</td>
    </tr>
  </tbody>
</table>
```

Vous pouvez également trouver les exemples terminés sur GitHub&nbsp;:

- Pour le premier exemple, voir [`items-sold-scope.html` <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([voir également en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)).
- Pour le deuxième exemple, voir [`items-sold-headers.html` <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([voir également en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

</details>

## Résumé

Il y a quelques autres choses que vous pouvez apprendre sur les tableaux en HTML, mais c'est tout ce que vous devez savoir pour l'instant. Ensuite, vous pouvez vous tester avec notre défi sur les tableaux HTML. Amusez-vous bien&nbsp;!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
