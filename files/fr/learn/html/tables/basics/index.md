---
title: 'Tableaux HTML : notions de base'
slug: Learn/HTML/Tables/Basics
tags:
  - Apprentissage
  - Article
  - Bases
  - Codage
  - Débutant
  - En-têtes
  - HTML
  - Tableaux
  - cellule
  - col
  - colgroup
  - colspan
  - rangées
  - rowspan
translation_of: Learn/HTML/Tables/Basics
original_slug: Apprendre/HTML/Tableaux/Basics
---
{{LearnSidebar}}{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

Cet article vous initie aux tableaux en HTML. Il porte sur les bases comme les rangées, les cellules, les en-têtes, les cellules sur plusieurs colonnes ou lignes, ainsi que sur la façon de regrouper les cellules dans une colonne en vue d'affecter un style.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Les bases de HTML (voir
        <a href="/fr/Apprendre/HTML/Introduction_%C3%A0_HTML"
          >Introduction au HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Se familiariser avec les tableaux HTML.</td>
    </tr>
  </tbody>
</table>

## Qu'est-ce qu'un tableau ?

Un tableau est un ensemble structuré de données (**table de données**) présentées en lignes et colonnes. Un tableau vous permet de retrouver rapidement et facilement des valeurs au croisement entre différents types de données, par exemple : une personne et son âge, ou un jour et la semaine, ou les horaires d'ouverture de la piscine du quartier.

![A sample table showing names and ages of some people - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![A swimming timetable showing a sample data table](swimming-timetable.png)

Les tableaux sont très couramment utilisés dans la société humaine, et depuis très longtemps, pour preuve ce document du recensement américain datant de 1800&nbsp;:

![A very old parchment document; the data is not easily readable, but it clearly shows a data table being used.](1800-census.jpg)

Il n'est donc pas étonnant que les créateurs du HTML fournissent un moyen de structurer et de présenter des tableaux de données sur le Web .

### Comment fonctionne un tableau ?

L'avantage du tableau tient dans sa rigueur. L'information est facilement interprétée par des associations visuelles entre les en‑têtes de lignes et colonnes. Cherchez dans la table ci-dessous par exemple et trouvez une planète géante gazeuse du système jovien avec 62 lunes. Vous pouvez trouver la réponse en associant les en-têtes de lignes et colonnes pertinents.

<table>
  <caption>
    Données sur les planètes du système solaire (repris de
    <a href="http://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >Nasa's Planetary Fact Sheet - Metric</a
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
      <th scope="col">Durée du jour (hours)</th>
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
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>La plus proche du Soleil</td>
    </tr>
    <tr>
      <th scope="row">Venus</th>
      <td>4.87</td>
      <td>12,104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Terre</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>Notre monde</td>
    </tr>
    <tr>
      <th scope="row">Mars</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>La planète rouge</td>
    </tr>
    <tr>
      <th rowspan="4" scope="rowgroup">Planètes joviennes</th>
      <th rowspan="2" scope="rowgroup">Géantes gazeuses</th>
      <th scope="row">Jupiter</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>La plus grosse planète</td>
    </tr>
    <tr>
      <th scope="row">Saturne</th>
      <td>568</td>
      <td>120,536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Géantes glacées</th>
      <th scope="row">Uranus</th>
      <td>86.8</td>
      <td>51,118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Neptune</th>
      <td>102</td>
      <td>49,528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tr>
    <tr>
      <th colspan="2" scope="rowgroup">Planètes naines</th>
      <th scope="row">Pluton</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        Déclassée en tant que planète en 2006 mais décision controverséee.
      </td>
    </tr>
  </tbody>
</table>

Lorsque cela est fait correctement, même les personnes malvoyantes peuvent interpréter des données tabulaires dans un tableau HTML — un tableau HTML réussi doit permettre la perception des données à des utilisateurs déficients visuels ou malvoyants.

### Style de tableau

Vous pouvez également [regarder sur l'exemple réel](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) sur GitHub ! Vous remarquerez sur celui-ci que le tableau est légèrement plus lisible  — car le tableau figurant ci-dessus présente un style minimal, alors que sa version sur GitHub est liée à un CSS plus signifiant.

Ne vous faites pas d'illusions ; pour obtenir un tableau avec un certain effet sur le web, vous devez fournir un minimum d'informations de style avec [CSS](/fr/docs/Learn/CSS), ainsi qu'une structure solide avec HTML. Dans ce module nous nous concentrons sur la partie HTML ; pour en savoir plus sur la partie CSS, vous devrez lire notre article [Style et tableaux](/fr/docs/Learn/CSS/Styling_boxes/Styling_tables) quand vous aurez fini ici.

Nous n'approfondirons pas le CSS dans ce module, mais nous avons écrit une feuille de style minimale CSS à utiliser ici, feuille de style qui rendra les tableaux plus lisibles qu'avec un format par défaut sans style. Vous trouverez cette [feuille de style ici](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css), et également [un exemple HTML d'application de cette feuille de style là](https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html) — ensemble ils vous donneront un bon point de départ pour expérimenter sur les tableaux HTML.

### Quand NE PAS utiliser de tableaux en HTML ?

Les tableaux HTML ne doivent être utilisés que pour des données tabulaires — c'est pour cela qu'ils sont conçus. Malheureusement, beaucoup de gens ont utilisé les tableaux HTML pour organiser des pages Web, par exemple : une ligne pour contenir l'en-tête, une ligne pour les colonnes de contenu, une ligne pour le pied de page, etc. Vous pouvez trouver plus de détails et un exemple avec [Mises en page](/fr/docs/Learn/Accessibility/HTML#Page_layouts) dans notre [Module d'apprentissage à l'Accessibilité](/fr/docs/Learn/Accessibility). Cette dispostion a été couramment utilisée car la prise en charge des CSS parmi les navigateurs avait pour coutume d'être effroyable ; ces mises en page sont beaucoup moins fréquentes de nos jours, mais vous pouvez toujours les voir dans certains recoins du Web.

Bref, utiliser les tableaux pour la mise en page [au lieu des techniques des CSS](/fr/docs/Learn/CSS/CSS_layout) est une mauvaise idée. En voici les principales raisons&nbsp;:

1.  **Les tableaux de mise en page diminuent l'accessibilité aux malvoyants** : les [lecteurs d'écran](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders), utilisés par les non-voyants, interprêtent les balises d'une page HTML et lisent à haute voix le contenu à l'utilisateur. Comme les tables ne sont pas le bon outil pour la mise en page et que le balisage est plus complexe qu'avec les techniques de mise en page des CSS, la sortie des lecteurs d'écran sera source de confusion pour leurs utilisateurs.
2.  **Les tables produisent de la bouillie :** Comme mentionné ci-dessus, les mises en page sur la base de tableaux comportent généralement des structures de balisage plus complexes que des techniques de mise en page appropriées. Le code résultant sera plus difficile à écrire, à maintenir et à déboguer.
3.  **Les tableaux ne s'adaptent pas automatiquement** : Si vous utilisez les propriétés de mise en page ({{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} ou {{htmlelement("div")}}), leur largeur est par défaut 100% de celle du parent. Par contre, les tableaux sont dimensionnés en fonction de leur contenu par défaut, de sorte que des mesures supplémentaires sont nécessaires pour que le style du tableau fonctionne effectivement sur les différents types d'écran.

## Apprentissage actif&nbsp;: créer votre premier tableau

Nous avons assez parlé théorie, alors, plongeons dans un exemple pratique et construisons un tableau simple.

1.  Avant tout, faites une copie locale de [blank-template.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html) et [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) dans un nouveau répertoire de votre ordinateur.
2.  Le contenu de chaque tableau est encadré par ces deux balises : **[`<table></table>`](/fr/docs/Web/HTML/Element/table)**. Ajoutez‑les dans le corps de votre HTML.
3.  Le plus petit conteneur d'un tableau est la cellule&nbsp;; elle est créée avec l'élément  **[`<td>`](/fr/docs/Web/HTML/Element/td)** («&nbsp;td » comme «&nbsp;tableau données&nbsp;»). Ajoutez ceci entre les balises du tableau :

    ```html
    <td>Bonjour, je suis votre première cellule.</td>
    ```

4.  Si nous voulons une rangée de quatre cellules, nous devons copier la première trois fois. Mettez à jour le contenu du tableau pour avoir quelque chose comme&nbsp;:

    ```html
    <td>Bonjour, je suis votre première cellule </td>
    <td>je suis votre deuxième cellule</td>
    <td>je suis votre troisième cellule</td>
    <td>je suis votre quatrième cellule</td>
    ```

Comme vous le verrez, les cellules ne sont pas placées les unes en dessous des autres, mais elles sont automatiquement affichées dans une même ligne. chaque élément `<td>` crée une cellule simple et ensemble elles forment la première ligne. Toutes les cellules que nous ajoutons allongent la ligne.

Pour empêcher cette ligne de croître et commencer à placer les cellules suivantes sur une deuxième ligne, nous devons utiliser la balise **[`<tr>`](/fr/docs/Web/HTML/Element/tr)** («&nbsp;tr&nbsp;» comme «&nbsp;table rangée&nbsp;»). Étudions cela maintenant.

1.  Placez les quatre cellules que vous avez créées entre deux balises `<tr>` ainsi :

    ```html
    <tr>
      <td>Bonjour, je suis votre première cellule </td>
      <td>je suis votre deuxième cellule </td>
      <td>je suis votre troisième cellule </td>
      <td>je suis votre quatrième cellule </td>
    </tr>
    ```

2.  Maintenant, vous avez fait une ligne, faites en encore une ou deux — chaque ligne doit être encadrée de `<tr>`, et comprend chaque cellule encadrée par `<td>`.

Il devrait en résulter un tableau qui ressemble à :

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

> **Note :** Vous pouvez également trouver cela sur GitHub [simple-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/simple-table.html) ([voir en direct aussi](http://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Ajouter des en-têtes avec \<th>

Intéressons-nous maintenant aux en-têtes du tableau — cellules spéciales qui débutent une ligne ou une colonne et définissent le type de données que contiennent la rangée ou la colonne (à titre d'exemple, voir les cellules "Personne" et "Âge" dans le premier exemple illustré dans cet article). Pour comprendre pourquoi ils sont utiles, regardez l'exemple du tableau suivant. Tout d'abord, le code source :

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Race</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Propriétaire</td>
    <td>Belle-mère</td>
    <td>Moi</td>
    <td>Moi</td>
    <td>Belle-soeur</td>
  </tr>
  <tr>
    <td>Habitudes alimentaires</td>
    <td>Mange tous les restes</td>
    <td>Grignotte la nourriture</td>
    <td>Mange copieusement</td>
    <td>Mange jusqu'à ce qu'il éclate</td>
  </tr>
</table>
```

Maintenant, le rendu du tableau réel :

<table>
  <tbody>
    <tr>
      <td></td>
      <td>Knocky</td>
      <td>Flor</td>
      <td>Ella</td>
      <td>Juan</td>
    </tr>
    <tr>
      <td>Race</td>
      <td>Jack Russell</td>
      <td>Poodle</td>
      <td>Streetdog</td>
      <td>Cocker Spaniel</td>
    </tr>
    <tr>
      <td>Age</td>
      <td>16</td>
      <td>9</td>
      <td>10</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Propriétaire</td>
      <td>Belle-mère</td>
      <td>Moi</td>
      <td>Moi</td>
      <td>Belle-soeur</td>
    </tr>
    <tr>
      <td>Habitudes alimentaires</td>
      <td>Mange tous les restes</td>
      <td>Grignotte la nourriture</td>
      <td>Mange copieusement</td>
      <td>Mange jusqu'à ce qu'il éclate</td>
    </tr>
  </tbody>
</table>

Le problème ici c'est que, bien que vous puissiez comprendre le tableau, il n'est pas aussi facile de croiser les données que cela pourrait être. Si les en-têtes de colonnes et de lignes se démarquaient d'une manière ou d'une autre, ce serait mieux.

### Apprentissage actif&nbsp;: en-tête de tableau

Améliorons ce tableau.

1.  En premier lieu, faites une copie des fichiers [dogs-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table.html) et [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) dans un nouveau répertoire sur votre ordinateur. Le contenu HTML est similaire à l'exemple «&nbsp;Dogs&nbsp;» ci-dessus.
2.  Pour reconnaître les en-têtes de tableau en tant qu'en-têtes, visuellement et sémantiquement, vous pouvez utiliser la balise **[`<th>`](/fr/docs/Web/HTML/Element/th)** («&nbsp;th&nbsp;» comme «&nbsp;table header&nbsp;» ou en-tête de tableau). Il fonctionne exactement comme la balise `<td>`, à ceci près qu'il indique un en-tête et non une cellule normale. Allez dans le code HTML, et remplacez tous les `<td>` des cellules entourant le tableau par des `<th>`.
3.  Enregistrez votre HTML et chargez-le dans un navigateur. Vous devriez voir que les en-têtes ressemblent maintenant à des en-têtes.

> **Note :** Vous pouvez trouver notre exemple achevé [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table-fixed.html) sur GitHub ([voir en direct aussi](http://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Pourquoi les en-têtes sont-ils utiles&nbsp;?

Nous avons déjà partiellement répondu à cette question — il vous est plus facile de trouver les données que vous cherchez quand les en-têtes sont marqués clairement, et la conception globale du tableau paraît meilleure.

> **Note :** Les en-têtes de tableau sont accompagnés d'un style par défaut — ils sont en gras et centrés même si vous n'ajoutez pas votre propre style pour les démarquer.

Les en-têtes de tableau ont un autre avantage — avec l'attribut `scope` (que nous étudierons dans le prochain article), ils rendent les tableaux plus accessibles en associant chaque en-tête à toutes les données des cellules d'une ligne ou d'une colonne. Les lecteurs d'écran peuvent alors lire toute une ligne ou une colonne de données, ce qui peut être très utile.

## Étendre des cellules sur plusieurs lignes ou colonnes

Parfois, nous voulons qu'une cellule couvre plusieurs lignes ou colonnes. Prenez l'exemple simple suivant, qui montre le nom d'animaux communs. Dans certains cas, nous voulons montrer les noms du mâle et de la femelle à côté du nom générique de l'animal. Parfois nous ne le faisons pas, et nous voulons alors que le nom générique de l'animal s'étende sur toute la largeur du tableau.

Le code initial ressemble à cela :

```html
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
    <td>Coq</td>
  </tr>
  <tr>
    <td>Coq</td>
  </tr>
</table>
```

Mais le résultat ne nous donne pas ce que nous voulions :

<table>
  <tbody>
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
      <td>Coq</td>
    </tr>
    <tr>
      <td>Coq</td>
    </tr>
  </tbody>
</table>

Nous avons besoin d'un moyen pour étendre "Animaux", "Hippopotame" et "Crocodile" sur deux colonnes, and "Cheval" et "Poulet" sur deux lignes. Heureusement, les en-têtes de tableau et les cellules ont les attributs `colspan` et `rowspan`, ce qui nous permet justement de faire cela. Les deux acceptent une valeur numérique correspondant au nombre de colonnes ou de lignes à couvrir. Par exemple, `colspan="2"` génère une cellule sur deux colonnes.

Utilisons `colspan` et `rowspan` pour améliorer ce tableau.

1.  Tout d'abord, faites une copie locale de nos fichiers [animals-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table.html) et [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) dans un nouveau répertoire sur votre ordinateur. Le HTML contient le même exemple d'animaux vu ci-dessus.
2.  Ensuite, utilisez `colspan` pour mettre «&nbsp;Animaux&nbsp;», «&nbsp;Hippopotame&nbsp;» et «&nbsp;Crocodile&nbsp;» sur deux colonnes.
3.  Enfin, utilisez `rowspan` pour mettre «&nbsp;Cheval&nbsp;» and «&nbsp;Poulet&nbsp;» sur deux lignes.
4.  Enregistrez et ouvrez votre code sur un navigateur pour voir l'amélioration.

> **Note :** Vous pouvez trouver l'exemple achevé dans [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table-fixed.html) sur GitHub ([voir en direct aussi](http://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Attribuer un style commun aux colonnes

Il y a une dernière fonctionnalité dont nous devons parler dans cet article avant de passer à autre chose. HTML a une méthode de définition des styles pour une colonne entière de données en un seul endroit — les éléments **[`<col>`](/fr/docs/Web/HTML/Element/col)** and **[`<colgroup>`](/fr/docs/Web/HTML/Element/colgroup)**. Ils existent parce qu'il peut être ennuyeux et inefficace de préciser le style dans chaque colonne  — vous devez généralement spécifier les éléments de style dans chaque  `<td>` ou `<th>` de la colonne, ou utiliser un selecteur complexe tel que {{cssxref(":nth-child()")}}.

### Premier exemple

Observez l'exemple simple suivant :

```html
<table>
  <tr>
    <th>Data 1</th>
    <th style="background-color: yellow">Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td style="background-color: yellow">Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td style="background-color: yellow">Jazz</td>
  </tr>
</table>
```

Ce qui nous donne comme résultat :

{{EmbedLiveSample("Premier_exemple")}}

Ce n'est pas idéal, car nous devons répéter les informations de style dans les trois cellules de la colonne  (nous aurions probablement défini une `classe` dans un projet réel et spécifié le style dans une feuille de style séparée). À la place, nous pouvons préciser l'information une seule fois dans un élément `<col>`. Les éléments `<col>` sont utilisés dans un conteneur `<colgroup>` juste en-dessous de la balise `<table>`. Nous pourrions créer le même effet que celui vu plus haut en spécifiant notre tableau comme suit&nbsp;:

### Autres exemples

```html
 <table>
   <colgroup>
    <col>
    <col style="background-color: yellow">
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>Jazz</td>
  </tr>
</table>
```

En effet, nous définissons deux «&nbsp;styles de colonnes&nbsp;», les informations de style pour chaque colonne. Nous n'appliquons pas de style pour la première colonne, mais nous devons inclure un élément `<col>`  vide — si nous ne le faisons pas, le style indiqué s'appliquera à la première colonne.

Si nous voulions appliquer les informations de style aux deux colonnes, nous devrions juste inclure un élément `<col>` avec un attribut span, comme ceci :

```html
<colgroup>
  <col style="background-color: yellow" span="2">
</colgroup>
```

Comme `colspan` et `rowspan`, `span` reçoit une valeur numérique qui précise le nombre de colonnes sur lesquelles le style s'applique.

### Apprentissage actif : `colgroup` et `col`

Maintenant, il est temps de vous y mettre vous-même.

Ci-dessous, vous pouvez voir le planning d'un professeur de langues. Le vendredi, elle a une nouvelle classe pour l'enseignement du néerlandais toute la journée, mais elle enseigne aussi l'allemand pendant de courtes périodes les mardis et jeudis. Elle veut souligner les colonnes des jours où elle enseigne.

{{EmbedGHLiveSample("learning-area/html/tables/basic/timetable-fixed.html", '100%', 320)}}

Recréez le tableau en suivant les étapes ci-dessous.

1.  Tout d'abord, faites une copie locale du fichier [timetable.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable.html) dans un nouveau répertoire sur votre ordinateur. Le HTML contient le tableau vu ci-dessus, à l'exception des informations de style des colonnes.
2.  Ajoutez un élément `<colgroup>`  au début du tableau, juste en dessous de la balise `<table>`,dans lequel vous pouvez ajouter vos éléments `<col>` (voir les étapes restantes ci-dessous).
3.  Les deux premières colonnes doivent rester sans style.
4.  Ajoutez une couleur de fond à la troisième colonne. La valeur de votre attribut `style` est `background-color:#97DB9A;`
5.  Définissez une largeur différente pour la quatrième colonne. La valeur de votre attribut `style` est `width: 42px;`
6.  Ajoutez une couleur de fond pour la cinquième colonne. La valeur de votre attribut `style` est `background-color: #97DB9A;`
7.  Ajoutez une couleur de fond différente et une bordure pour la sixième colonne, pour signifier que c'est une journée spéciale et qu'elle enseigne à une nouvelle classe. Les valeurs de votre attribut `style` sont `background-color:#DCC48E; border:4px solid #C1437A;`
8.  Les deux derniers jours sont libres, alors pas de couleur de fond mais une largeur à spécifier ; la valeur de votre attribut `style` est `width: 42px;`

Voyez comment vous lisez avec l'exemple. Si vous êtes coincé ou souhaitez vérifier votre travail, vous pouvez trouver notre version [timetable-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable-fixed.html) (à [voir aussi](http://mdn.github.io/learning-area/html/tables/basic/timetable-fixed.html) directement) sur GitHub .

## Résumé

Cela ne fait que compléter les bases des tableaux HTML. Dans l'article suivant, nous allons voir quelques fonctionnalités de tableaux un peu plus avancées et commencer à penser à quel point elles sont accessibles pour les malvoyants.

{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

## Dans ce module

- [Bases des tableaux en HTML](/fr/docs/Learn/HTML/Tables/Basics)
- [Caractéristiques avancées des tableaux en HTML et accessibilité](/fr/docs/Learn/HTML/Tables/Advanced)
- [Structuration de données sur les planètes](/fr/docs/Learn/HTML/Tables/Structuring_planet_data)
