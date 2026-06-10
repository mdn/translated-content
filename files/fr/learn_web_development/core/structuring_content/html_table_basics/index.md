---
title: Les bases des tableaux HTML
short-title: Bases des tableaux
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 30cb9ca54d74a63bd95e0e0f5281e9ade578c044
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Cet article vous initie aux tableaux HTML, couvrant les bases telles que les lignes, les cellules, les en-têtes, la fusion de cellules sur plusieurs colonnes et lignes, et la manière de regrouper toutes les cellules d'une colonne à des fins de style.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Avoir une connaissance de base en HTML, comme expliqué dans
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe de base HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>À quoi servent les tableaux — structurer des données tabulaires.</li>
          <li>À quoi ne servent pas les tableaux — mise en page, ou <em>tout autre usage</em>.</li>
          <li>Syntaxe de base des tableaux — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, et <code>&lt;td&gt;</code>.</li>
          <li>Définir les en-têtes de tableau avec <code>&lt;th&gt;</code>.</li>
          <li>Fusionner plusieurs colonnes et lignes avec <code>colspan</code> et <code>rowspan</code>.</li>
          <li>Grouper les colonnes avec <code>&lt;colgroup&gt;</code> et <code>&lt;col&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce qu'un tableau ?

Un tableau est un ensemble structuré de données (**données tabulaires**) présenté en lignes et colonnes. Un tableau permet de retrouver rapidement et facilement des valeurs qui indiquent une certaine connexion entre différents types de données, par exemple une personne et son âge, ou un jour de la semaine, ou les horaires d'une piscine locale.

![Un exemple de tableau montrant les noms et âges de certaines personnes - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Un emploi du temps de piscine montrant un exemple de tableau de données](swimming-timetable.png)

Les tableaux sont très couramment utilisés dans la société humaine, et ce depuis longtemps, comme en témoigne ce document du recensement américain datant de 1800&nbsp;:

![Un très vieux document en parchemin ; les données ne sont pas facilement lisibles, mais il montre clairement l'utilisation d'un tableau de données.](1800-census.jpg)

Il n'est donc pas étonnant que les créateurs du HTML aient fourni un moyen de structurer et de présenter des tableaux de données sur le Web.

### Comment fonctionne un tableau ?

L'avantage du tableau tient dans sa rigueur. L'information est facilement interprétée par des associations visuelles entre les en‑têtes de lignes et colonnes. Cherchez dans la table ci-dessous par exemple et trouvez une planète géante gazeuse du système jovien avec 62 lunes. Vous pouvez trouver la réponse en associant les en-têtes de lignes et colonnes pertinents.

```html hidden
<table>
  <caption>
    Données sur les planètes du système solaire (repris de la
    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >Planetary Fact Sheet - Indicateurs de la NASA <sup>(angl.)</sup></a
    >).
  </caption>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">Nom</th>
      <th scope="col">Masse (10<sup>24</sup>kg)</th>
      <th scope="col">Diamètre (km)</th>
      <th scope="col">Densité (kg/m<sup>3</sup>)</th>
      <th scope="col">Gravité (m/s<sup>2</sup>)</th>
      <th scope="col">Durée du jour (heures)</th>
      <th scope="col">Distance du Soleil (10<sup>6</sup>km)</th>
      <th scope="col">Température moyenne (°C)</th>
      <th scope="col">Nombre de lunes</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2" rowspan="4" scope="rowgroup">Planètes telluriques</th>
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
      <th scope="row">Venus</th>
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
      <td>La plus grosse planète</td>
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
      <th rowspan="2" scope="rowgroup">Géantes glacées</th>
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
        Déclassée en tant que planète en 2006, mais cette décision
        <a
          href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >reste controversée <sup>(angl.)</sup></a
        >.
      </td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid black;
}

th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

{{EmbedLiveSample("Comment fonctionne un tableau ?", 100, 620)}}

Lorsque c'est fait correctement, les tableaux HTML sont bien pris en charge par les outils d'accessibilité tels que les lecteurs d'écran, de sorte qu'un tableau HTML réussi doit améliorer l'expérience des utilisateur·ice·s voyant·e·s et malvoyant·e·s.

### Style de tableau

Vous pouvez également [consulter l'exemple de données planétaires en temps réel <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) sur GitHub&nbsp;! Vous pouvez remarquer que le tableau y est un peu plus lisible&nbsp;: cela s'explique par le fait que le tableau affiché ci-dessus sur cette page ne comporte qu'un style minimal, tandis que la version GitHub bénéficie d'un CSS plus élaboré.

Ne vous faites pas d'illusions&nbsp;; pour que les tableaux soient efficaces sur le Web, vous devez leur appliquer des styles à l'aide de [CSS](/fr/docs/Learn_web_development/Core/Styling_basics), ainsi qu'une structure solide en HTML. Dans cette leçon, nous nous concentrons sur la partie HTML&nbsp;; vous découvrirez la mise en forme des tableaux plus tard, dans notre leçon [Mise en forme des tableaux](/fr/docs/Learn_web_development/Core/Styling_basics/Tables).

Nous ne nous concentrons pas sur le CSS dans ce module, mais nous avons fourni une feuille de style CSS minimale que vous pouvez utiliser pour rendre vos tableaux plus lisibles que ceux par défaut, sans aucun style. Vous pouvez trouver la [feuille de style ici <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css), ainsi qu'un [modèle HTML <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) qui applique cette feuille de style — ensemble, ils vous offrent un bon point de départ pour vous familiariser avec les tableaux HTML.

### Quand faut-il éviter d'utiliser des tableaux HTML ?

Les tableaux HTML doivent être utilisés pour les données tabulaires (des informations faciles à organiser en lignes et en colonnes) — c'est pour cela qu'ils ont été conçus. Malheureusement, beaucoup de gens utilisaient autrefois les tableaux HTML pour structurer la mise en page des pages web, par exemple une ligne pour contenir un en-tête de page, une ligne pour chaque colonne de contenu, une ligne pour le pied de page, etc. Cette technique était utilisée dans le passé parce que le support CSS à travers les navigateurs était beaucoup plus limité. Les navigateurs modernes ont un support CSS solide, donc les mises en page basées sur des tableaux ne sont plus nécessaires. Les mises en page par tableaux sont maintenant extrêmement rares, mais vous pouvez encore en voir dans certains coins du web.

En résumé, utiliser des tableaux pour la mise en page plutôt que des [techniques de mise en page CSS](/fr/docs/Learn_web_development/Core/CSS_layout) est une mauvaise idée. Les principales raisons sont les suivantes&nbsp;:

1. **Les tableaux réduisent l'accessibilité pour les utilisateur·ice·s malvoyant·e·s**&nbsp;: Les [lecteurs d'écran](/fr/docs/Learn_web_development/Core/Accessibility/Tooling#lecteurs_décran), utilisés par les personnes aveugles, interprètent les balises présentes dans une page HTML et lisent le contenu à l'utilisateur·ice. Comme les tableaux ne sont pas l'outil approprié pour la mise en page et que le balisage est plus complexe que pour les techniques de mise en page CSS, la sortie des lecteurs d'écran est confuse pour leurs utilisateur·ice·s.
2. **Les tableaux produisent du code désordonné**&nbsp;: Comme mentionné ci-dessus, les mises en page par tableaux impliquent généralement des structures de balisage plus complexes que les techniques de mise en page appropriées. Cela peut rendre le code plus difficile à écrire, à maintenir et à déboguer.
3. **Les tableaux ne sont pas automatiquement réactifs**&nbsp;: Lorsque vous utilisez des conteneurs de mise en page appropriés (comme {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("article")}} ou {{HTMLElement("div")}}), leur largeur par défaut est de 100 % de leur élément parent. Les tableaux, en revanche, sont dimensionnés en fonction de leur contenu par défaut, donc des mesures supplémentaires sont nécessaires pour que le style de mise en page des tableaux fonctionne efficacement sur une variété d'appareils.

## Créer votre premier tableau

Nous avons assez parlé théorie, alors, plongeons dans un exemple pratique et construisons un tableau simple.

1. Avant tout, faites une copie locale de [blank-template.html <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) et [minimal-table.css <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) dans un nouveau répertoire de votre ordinateur.
2. Le contenu de chaque tableau est encadré par ces deux balises&nbsp;: **[`<table></table>`](/fr/docs/Web/HTML/Reference/Elements/table)**. Ajoutez‑les dans le corps de votre HTML.
3. Le plus petit conteneur d'un tableau est la cellule&nbsp;; elle est créée avec l'élément **[`<td>`](/fr/docs/Web/HTML/Reference/Elements/td)** («&nbsp;td&nbsp;» comme «&nbsp;tableau données&nbsp;»). Ajoutez ceci entre les balises du tableau&nbsp;:

   ```html
   <td>Bonjour, je suis votre première cellule.</td>
   ```

4. Si nous voulons une rangée de quatre cellules, nous devons copier la première trois fois. Mettez à jour le contenu du tableau pour avoir quelque chose comme&nbsp;:

   ```html
   <td>Bonjour, je suis votre première cellule</td>
   <td>je suis votre deuxième cellule</td>
   <td>je suis votre troisième cellule</td>
   <td>je suis votre quatrième cellule</td>
   ```

Comme vous pouvez le voir, les cellules ne sont pas placées les unes en dessous des autres, mais elles sont automatiquement affichées dans une même ligne. chaque élément `<td>` crée une cellule simple et ensemble elles forment la première ligne. Toutes les cellules que nous ajoutons allongent la ligne.

Pour empêcher cette ligne de croître et commencer à placer les cellules suivantes sur une deuxième ligne, nous devons utiliser la balise **[`<tr>`](/fr/docs/Web/HTML/Reference/Elements/tr)** («&nbsp;tr&nbsp;» comme «&nbsp;table rangée&nbsp;»). Étudions cela maintenant.

1. Placez les quatre cellules que vous avez créées entre deux balises `<tr>` ainsi&nbsp;:

   ```html
   <tr>
     <td>Bonjour, je suis votre première cellule</td>
     <td>je suis votre deuxième cellule</td>
     <td>je suis votre troisième cellule</td>
     <td>je suis votre quatrième cellule</td>
   </tr>
   ```

2. Maintenant, vous avez fait une ligne, faites en encore une ou deux — chaque ligne doit être encadrée de `<tr>`, et comprend chaque cellule encadrée par `<td>`.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Il doit en résulter un tableau qui ressemble à&nbsp;:

```html
<table>
  <tbody>
    <tr>
      <td>Bonjour, je suis votre première cellule.</td>
      <td>je suis votre deuxième cellule.</td>
      <td>je suis votre troisième cellule</td>
      <td>je suis votre quatrième cellule</td>
    </tr>
    <tr>
      <td>Deuxième ligne, première cellule.</td>
      <td>Cellule 2.</td>
      <td>Cellule 3.</td>
      <td>Cellule 4.</td>
    </tr>
  </tbody>
</table>
```

Vous pouvez également trouver cela sur GitHub [simple-table.html <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) ([voir en direct aussi <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

</details>

## Ajouter des en-têtes avec `<th>`

Intéressons-nous maintenant aux en-têtes du tableau — cellules spéciales qui débutent une ligne ou une colonne et définissent le type de données que contiennent la rangée ou la colonne (à titre d'exemple, voir les cellules «&nbsp;Personne&nbsp;» et «&nbsp;Âge&nbsp;» dans le premier exemple illustré dans cet article). Pour comprendre pourquoi ils sont utiles, regardez l'exemple du tableau suivant. Tout d'abord, le code source&nbsp;:

```html live-sample___table-headers
<table>
  <tr>
    <td>&nbsp;</td>
    <th>Knocky</th>
    <th>Flor</th>
    <th>Ella</th>
    <th>Juan</th>
  </tr>
  <tr>
    <th>Race</th>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <th>Âge</th>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <th>Propriétaire</th>
    <td>Belle-mère</td>
    <td>Moi</td>
    <td>Moi</td>
    <td>Belle-sœur</td>
  </tr>
  <tr>
    <th>Habitudes alimentaires</th>
    <td>Mange tous les restes</td>
    <td>Grignote la nourriture</td>
    <td>Mange copieusement</td>
    <td>Mange jusqu'à ce qu'il éclate</td>
  </tr>
</table>
```

```css hidden live-sample___table-headers
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Maintenant, le rendu du tableau réel&nbsp;:

{{EmbedLiveSample("table-headers", "", 250)}}

Le problème ici c'est que, bien que vous puissiez comprendre le tableau, il n'est pas aussi facile de croiser les données que ça peut être. Si les en-têtes de colonnes et de lignes se démarquaient d'une manière ou d'une autre, c'est mieux.

### Ajouter des en-têtes au tableau des chiens

Maintenant, essayons d'améliorer l'exemple du tableau des chiens en ajoutant des en-têtes.

1. Tout d'abord, faites une copie locale de nos fichiers [dogs-table.html <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) et [minimal-table.css <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) dans un nouveau répertoire sur votre machine locale.
2. Pour reconnaître les en-têtes de tableau en tant qu'en-têtes, à la fois visuellement et sémantiquement, vous pouvez utiliser l'élément **[`<th>`](/fr/docs/Web/HTML/Reference/Elements/th)** («&nbsp;th&nbsp;» signifie «&nbsp;en-tête de tableau&nbsp;»). Cela fonctionne exactement de la même manière qu'un `<td>`, sauf qu'il indique un en-tête, et non une cellule normale. Allez dans votre HTML et remplacez tous les éléments `<td>` entourant les en-têtes du tableau par des éléments `<th>`.
3. Enregistrez votre HTML et chargez-le dans un navigateur, et vous devez voir que les en-têtes ressemblent maintenant à des en-têtes.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à ceci&nbsp;:

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <th>Knocky</th>
    <th>Flor</th>
    <th>Ella</th>
    <th>Juan</th>
  </tr>
  <tr>
    <th>Race</th>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <th>Âge</th>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <th>Propriétaire</th>
    <td>Belle-mère</td>
    <td>Moi</td>
    <td>Moi</td>
    <td>Belle-sœur</td>
  </tr>
  <tr>
    <th>Habitudes alimentaires</th>
    <td>Mange tous les restes</td>
    <td>Grignote la nourriture</td>
    <td>Mange copieusement</td>
    <td>Mange jusqu'à ce qu'il éclate</td>
  </tr>
</table>
```

Vous pouvez également trouver ce code sur GitHub à l'adresse [dogs-table-fixed.html <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) ([voir également en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

</details>

### Pourquoi les en-têtes sont-ils utiles ?

Nous avons déjà partiellement répondu à cette question — il vous est plus facile de trouver les données que vous cherchez quand les en-têtes sont marqués clairement, et la conception globale du tableau paraît meilleure.

> [!NOTE]
> Les en-têtes de tableau sont accompagnés d'un style par défaut — ils sont en gras et centrés même si vous n'ajoutez pas votre propre style pour les démarquer.

Les en-têtes de tableau ont un autre avantage — avec l'attribut `scope` (que nous étudierons dans le prochain article), ils rendent les tableaux plus accessibles en associant chaque en-tête à toutes les données des cellules d'une ligne ou d'une colonne. Les lecteurs d'écran peuvent alors lire toute une ligne ou une colonne de données, ce qui peut être très utile.

## Étendre des cellules sur plusieurs lignes ou colonnes

Parfois, nous voulons qu'une cellule couvre plusieurs lignes ou colonnes. Prenez l'exemple simple suivant, qui montre le nom d'animaux communs. Dans certains cas, nous voulons montrer les noms du mâle et de la femelle à côté du nom générique de l'animal. Parfois nous ne le faisons pas, et nous voulons alors que le nom générique de l'animal s'étende sur toute la largeur du tableau.

Le code initial ressemble à cela&nbsp;:

```html live-sample___multiple-rows-columns
<table>
  <tr>
    <th>Animaux</th>
  </tr>
  <tr>
    <th>Hippopotame</th>
  </tr>
  <tr>
    <th>Cheval</th>
    <td>Jument</td>
  </tr>
  <tr>
    <td>Étalon</td>
  </tr>
  <tr>
    <th>Crocodile</th>
  </tr>
  <tr>
    <th>Poulet</th>
    <td>Poule</td>
  </tr>
  <tr>
    <td>Coq</td>
  </tr>
</table>
```

```css hidden live-sample___multiple-rows-columns
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Mais le résultat ne nous donne pas ce que nous voulons&nbsp;:

{{EmbedLiveSample("multiple-rows-columns", "", 350)}}

### Corriger le modèle avec `rowspan` et `colspan`

Nous avons besoin d'un moyen pour étendre «&nbsp;Animaux&nbsp;», «&nbsp;Hippopotame&nbsp;» et «&nbsp;Crocodile&nbsp;» sur deux colonnes, et «&nbsp;Cheval&nbsp;» et «&nbsp;Poulet&nbsp;» sur deux lignes. Heureusement, les en-têtes de tableau et les cellules ont les attributs `colspan` et `rowspan`, ce qui nous permet justement de faire cela. Les deux acceptent une valeur numérique correspondant au nombre de colonnes ou de lignes à couvrir. Par exemple, `colspan="2"` génère une cellule sur deux colonnes.

Utilisons `colspan` et `rowspan` pour améliorer ce tableau.

1. Tout d'abord, faites une copie locale de nos fichiers [animals-table.html <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table.html) et [minimal-table.css <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) dans un nouveau répertoire sur votre ordinateur. Le HTML contient le même exemple d'animaux vu ci-dessus.
2. Ensuite, utilisez `colspan` pour mettre «&nbsp;Animaux&nbsp;», «&nbsp;Hippopotame&nbsp;» et «&nbsp;Crocodile&nbsp;» sur deux colonnes.
3. Enfin, utilisez `rowspan` pour mettre «&nbsp;Cheval&nbsp;» and «&nbsp;Poulet&nbsp;» sur deux lignes.
4. Enregistrez et ouvrez votre code sur un navigateur pour voir l'amélioration.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à ceci&nbsp;:

```html
<table>
  <tr>
    <th colspan="2">Animaux</th>
  </tr>
  <tr>
    <th colspan="2">Hippopotame</th>
  </tr>
  <tr>
    <th rowspan="2">Cheval</th>
    <td>Jument</td>
  </tr>
  <tr>
    <td>Étalon</td>
  </tr>
  <tr>
    <th colspan="2">Crocodile</th>
  </tr>
  <tr>
    <th rowspan="2">Poulet</th>
    <td>Poule</td>
  </tr>
  <tr>
    <td>Coq</td>
  </tr>
</table>
```

Vous pouvez également trouver ce code sur GitHub à [animals-table-fixed.html <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) ([voir le résultat en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

</details>

## Grouper les colonnes avec `<colgroup>` et `<col>`

Il existe un moyen de cibler des colonnes de tableau entières en tant qu'entité unique, par exemple lors de l'application de styles à un tableau (ce que vous apprendrez plus tard, dans [Mettre en forme les tableaux](/fr/docs/Learn_web_development/Core/Styling_basics/Tables)). À mesure que vous gagnez de l'expérience dans la création de tableaux HTML, vous pouvez constater que l'application d'une couleur de fond, par exemple, à chaque cellule d'une seule colonne est plus difficile que vous ne le pensez. Les éléments {{HTMLElement("colgroup")}} et {{HTMLElement("col")}} offrent une solution à ce problème.

L'élément `<colgroup>` doit être inclus en tant qu'enfant du tableau, juste après l'ouverture de l'élément `<table>`. À l'intérieur de l'élément `<colgroup>`, vous pouvez inclure un ou plusieurs éléments `<col>`, qui représentent des groupes de colonnes. L'élément `<col>` peut inclure un attribut `span` qui indique le nombre de colonnes dans ce groupe. Il peut également inclure des attributs globaux tels que `style` (si vous souhaitez cibler le groupe avec des styles en ligne) ou `class` (si vous souhaitez cibler ce groupe avec CSS ou JavaScript en utilisant un nom de classe). Les éléments `<col>` représentent les colonnes du tableau à partir du début des colonnes, par exemple à partir du côté gauche d'un tableau écrit dans une langue de gauche à droite comme l'anglais.

Voyons un exemple pour illustrer ce que nous voulons dire. Le tableau suivant montre un emploi du temps scolaire&nbsp;:

```html live-sample___colgroup-col
<h1>Emploi du temps scolaire</h1>

<table>
  <colgroup>
    <col span="2" />
    <col class="column-background" />
    <col class="column-fixed-width" />
    <col class="column-background" />
    <col class="column-background-border" />
    <col span="2" class="column-fixed-width" />
  </colgroup>
  <tr>
    <td>&nbsp;</td>
    <th>Lun</th>
    <th>Mar</th>
    <th>Mer</th>
    <th>Jeu</th>
    <th>Ven</th>
    <th>Sam</th>
    <th>Dim</th>
  </tr>
  <tr>
    <th>1ère période</th>
    <td>Anglais</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>Allemand</td>
    <td>Néerlandais</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>2ème période</th>
    <td>Anglais</td>
    <td>Anglais</td>
    <td>&nbsp;</td>
    <td>Allemand</td>
    <td>Néerlandais</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>3ème période</th>
    <td>&nbsp;</td>
    <td>Allemand</td>
    <td>&nbsp;</td>
    <td>Allemand</td>
    <td>Néerlandais</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>4ème période</th>
    <td>&nbsp;</td>
    <td>Anglais</td>
    <td>&nbsp;</td>
    <td>Anglais</td>
    <td>Néerlandais</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>
```

Dans ce tableau, il y a huit colonnes. Regardons de plus près la structure `<colgroup>` et `<col>` pour voir comment elle les affecte&nbsp;:

```html
<colgroup>
  <col span="2" />
  <col class="column-background" />
  <col class="column-fixed-width" />
  <col class="column-background" />
  <col class="column-background-border" />
  <col span="2" class="column-fixed-width" />
</colgroup>
```

Regardons les éléments `<col>`&nbsp;:

- Le premier a `span="2"` défini, donc il représente les première _et_ deuxième colonnes de gauche du tableau. Nous ne ciblons pas ces colonnes avec des styles, mais nous devons les inclure afin de pouvoir cibler les colonnes suivantes.
- Les deuxième et quatrième n'ont pas d'attribut `span` défini, donc elles représentent une seule colonne — les troisième et cinquième colonnes dans ces cas. Elles ont une `class` de `column-background` appliquée.
- La troisième n'a pas d'attribut `span` défini, et a une `class` de `column-fixed-width` appliquée. Elle représente la quatrième colonne.
- La cinquième n'a pas d'attribut `span` défini, et a une `class` de `column-background-border` appliquée. Elle représente la sixième colonne.
- La sixième a `span="2"` défini, et a une `class` de `column-fixed-width` appliquée. Elle représente les septième et huitième colonnes.

Nous avons caché la plupart des CSS pour cet exemple, mais nous vous montrons les règles qui appliquent des styles aux éléments `<col>` avec les classes `column-background`, `column-fixed-width` et `column-background-border` définies sur eux&nbsp;:

```css hidden live-sample___colgroup-col
html {
  font-family: sans-serif;
}

body {
  margin: 0 20px;
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

td {
  text-align: center;
}
```

```css live-sample___colgroup-col
.column-background {
  background-color: #97db9a;
}

.column-fixed-width {
  width: 40px;
}

.column-background-border {
  background-color: #dcc48e;
  border: 4px solid #c1437a;
}
```

- Les éléments `<col>` avec une classe `column-background` ont une couleur de fond solide appliquée.
- Les éléments `<col>` avec une classe `column-fixed-width` ont une largeur fixe étroite appliquée.
- L'élément `<col>` avec une classe `column-background-border` a une couleur de fond solide et une bordure épaisse appliquées.

Vous n'avez pas besoin de vous inquiéter de la façon dont le CSS fonctionne pour l'instant&nbsp;; vous en apprendrez les détails plus tard dans notre module [Bases du style CSS](/fr/docs/Learn_web_development/Core/Styling_basics).

Regardons comment le code ci-dessus s'affiche&nbsp;:

{{EmbedLiveSample("colgroup-col", "100%", 400)}}

Remarquez comment les différentes colonnes reçoivent les styles définis dans les classes.

> [!NOTE]
> Même si `<colgroup>` et `<col>` facilitent principalement le style, ce sont des fonctionnalités HTML, c'est pourquoi nous les avons couvertes ici plutôt que dans nos modules CSS. Il est également juste de dire qu'il s'agit d'une fonctionnalité _limitée_ — comme indiqué sur la [page de référence `<colgroup>`](/fr/docs/Web/HTML/Reference/Elements/colgroup#notes_dutilisation), seul un sous-ensemble limité de styles peut être appliqué à un élément `<col>`, et la plupart des autres paramètres qui étaient historiquement disponibles ont été dépréciés (supprimés ou signalés pour suppression).

## Récapitulatif interactif des concepts de tableau

Le contenu intégré suivant de Scrimba<sup>[_partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup> fournit une leçon interactive résumant la plupart des techniques abordées dans cet article. Consultez-le pour un récapitulatif des points clés et un peu de pratique supplémentaire.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03s" scrimtitle="Tableaux HTML"></mdn-scrim-inline>

## Résumé

Cela ne fait que compléter les bases des tableaux HTML. Dans l'article suivant, nous allons voir quelques fonctionnalités de tableaux un peu plus avancées et commencer à penser à quel point elles sont accessibles pour les malvoyants.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
