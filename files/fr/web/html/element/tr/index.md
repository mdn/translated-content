---
title: '<tr> : l''élément de ligne d''un tableau'
slug: Web/HTML/Element/tr
translation_of: Web/HTML/Element/tr
browser-compat: html.elements.tr
---
{{HTMLRef}}

L'élément HTML **`<tr>`** définit une ligne de cellules dans un tableau. Une ligne peut être constituée d'éléments [`<td>`](/fr/docs/Web/HTML/Element/td) (les données des cellules) et [`<th>`](/fr/docs/Web/HTML/Element/th) (les cellules d'en-têtes).

{{EmbedInteractiveExample("pages/tabbed/tr.html","tabbed-taller")}}

Si on veut qu'une cellule s'étende sur plusieurs lignes/colonnes, on pourra utiliser l'attribut [`colspan`](/fr/docs/Web/HTML/Element/td#attr-colspan) ou [`rowspan`](/fr/docs/Web/HTML/Element/td#attr-rowspan) qui indiquent respectivement le nombre de colonnes / lignes sur lequel s'étendre (la valeur par défaut étant 1).

La construction de tableau peut parfois demander un peu de pratique. Au-delà des exemples présentés ci-après, vous pouvez consulter [les tutoriels sur les tableaux HTML](/fr/docs/Learn/HTML/Tables) afin d'apprendre comment utiliser ces éléments et attributs HTML afin d'organiser vos données tabulaires.

## Attributs

À l'instar de tous les éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Global_attributes). Il existe également plusieurs attributs dépréciés à éviter désormais, mais qui peuvent être utiles pour comprendre du code ancien.

### Attributs dépréciés ou obsolètes

- **`align`**{{deprecated_inline}}

  - : Une chaîne de caractère qui définit l'alignement horizontal pour le contenu de chaque cellule. C'est un raccourci pour définir l'alignement sur l'ensemble de la ligne plutôt que pour chaque cellule. Les valeurs possibles sont :

    - `left`
      - : Le contenu de la cellule est aligné à gauche de la cellule.
    - `center`
      - : Le contenu de la cellule est centré horizontalement.
    - `right`
      - : Le contenu de la cellule est aligné à droite de la cellule.
    - `justify`
      - : Insère des espaces dans le contenu textuel afin que le contenu de la cellule soit justifié.
    - `char`
      - : Aligne le contenu textuel de la cellule selon un caractère spécial défini par l'attribut [`char`](#attr-char) (par exemple un point ou une virgule quand on souhaite aligner des nombres) et le nombre de caractères [`charoff`](#attr-charoff) à afficher derrière ce caractère d'alignement. Ce mode d'alignement n'a jamais été pris en charge de façon conséquente.

    Si cet attribut n'est pas renseigné, la valeur est héritée du nœud parent.

    > **Note :** Cet attribut est devenu obsolète dans le dernier standard et ne doit donc plus être utilisé.
    >
    > - Pour réaliser les mêmes effets que les valeurs `left`, `center`, `right` ou `justify`, il faut utiliser la propriété CSS [`text-align`](/fr/docs/Web/CSS/text-align) sur l'élément
    > - Pour réaliser le même effet qu'avec la valeur `char`. Il est possible d'utiliser la valeur de l'attribut [`char`](#attr-char) comme valeur de la propriété [`text-align`](/fr/docs/Web/CSS/text-align).

- **`bgcolor`** {{deprecated_inline}}

  - : Une chaîne de caractères qui définit la couleur d'arrière-plan de toutes les cellules de la colonne. Il peut s'agit d'une [notation hexadécimale #RRGGGBB ou #RGB](</fr/docs/Web/CSS/color_value#rgb()>) ou bien d'un [mot-clé](/fr/docs/Web/CSS/color_value#color_keywords) pour une couleur. L'absence de cet attribut (ou sa déclaration à `null` en JavaScript) fera que la couleur des cellules de la ligne sera héritée de la couleur d'arrière-plan de l'élément parent.

    > **Note :** L'élément `<tr>` doit être mis en forme grâce au [CSS](/fr/docs/Web/CSS). Pour fournir un effet semblable à celui achevé par l'attribut `bgcolor`, il est possible d'utiliser la propriété CSS [`background-color`](/fr/docs/Web/CSS/background-color).

- **`char`**{{deprecated_inline}}

  - : Une chaîne de caractère qui définit le caractère sur lequel aligner les cellules d'une colonne. Les valeurs de cet attribut contiennent généralement un point ou une virgule pour aligner des nombres ou des valeurs monétaires. Si l'attribut [`align`](#attr-align) ne vaut pas `char`, l'attribut est ignoré.

    > **Note :** Cet attribut est obsolète et peu implémenté : il est donc fortement déconseillé de l'utiliser. Pour réaliser le même effet qu'avec [`char`](#attr-char), il faut utiliser la propriété CSS [`text-align`](/fr/docs/Web/CSS/text-align).

- **`charoff`** {{deprecated_inline}}

  - : Une chaîne de caractères utilisée pour indiquer le nombre de caractères à afficher après le caractère défini par l'attribut `char`. Cela peut par exemple servir à indiquer qu'on souhaite afficher deux chiffres après la virgule pour les valeurs monétaires afin d'indiquer les centimes.

    > **Note :** Cet attribut ne doit plus être utilisé, car il est maintenant obsolète et que sa compatibilité n'était pas répandue.

- **`valign`** {{deprecated_inline}}

  - : Une chaîne de caractères qui définit l'alignement vertical du texte des cellules de la ligne. Les valeurs possibles de cet attribut sont :

    - `baseline`
      - : Aligne le texte à la ligne la plus basse possible en utilisant la [ligne de base](https://fr.wikipedia.org/wiki/Ligne_de_base_%28typographie%29) des caractères. Si les caractères ont tous la même taille, cela aura le même effet que la valeur `bottom`.
    - `bottom`
      - : Place le texte au plus bas de la cellule.
    - `middle`
      - : Centre verticalement le texte dans la cellule.
    - `top`
      - : Place le texte au plus haut de la cellule.

    > **Note :** Cet attribut est obsolète dans le dernier standard, la propriété CSS [`vertical-align`](/fr/docs/Web/CSS/vertical-align) doit être utilisée à la place.

## Exemples

Voir [la page sur `<table>`](/fr/docs/Web/HTML/Element/table) pour d'autres exemples sur `<tr>`.

### Exemple simple

#### HTML

```html
<table>
  <tr>
    <th>Prénom</th><th>Nom</th>
  </tr>
  <tr>
    <td>Jean</td> <td>Biche</td>
  </tr>
  <tr>
    <td>Marcel</td> <td>Patulacci</td>
  </tr>
</table>
```

#### CSS

Ce fragment de CSS permet d'ajouter une bordure noire autour du tableau et des cellules, y compris pour celles définies avec `<th>` ou `<td>`. Cela marque clairement la zone de chaque cellule.

```css
table {
  border: 1px solid black;
}

th, td {
  border: 1px solid black;
}
```

#### Résultat

{{EmbedLiveSample("Exemple_simple","100%","200")}}

### Étendre sur plusieurs lignes ou colonnes

On utilise ici les attributs `rowspan` et `colspan` pour étendre des cellules sur plusieurs lignes et colonnes. On voit ainsi que l'en-tête occupe deux lignes pour les noms, l'identifiant et le solde tandis qu'il y a deux colonnes de dates pour l'inscription et la résiliation.

#### Résultat

Une fois n'est pas coutume, commençons par regarder le résultat produit.

{{EmbedLiveSample("Étendre_sur_plusieurs_lignes_ou_colonnes")}}

On voit que la zone d'en-tête occupe deux lignes : la première avec le nom, l'identifiant, les dates et le solde du compte ; la seconde avec les dates d'inscription et de résiliation qui forment un sous-groupe de colonnes. Pour obtenir ceci, on a:

- Utilisé l'attribut `rowspan` sur la ligne d'en-tête pour les éléments sur le nom, l'identifiant et le solde. Ces cellules occupent ainsi deux lignes.
- Utilisé l'attribut `colspan` sur la cellule d'en-tête pour les dates. Cela permet à ce que cette cellule s'étende sur deux colonnes.
- Défini une deuxième ligne d'éléments `th` qui contient uniquement les en-têtes pour l'inscription et la résiliation. Ces cellules viennent combler l'espace laissé par le fait que l'en-tête Dates n'occupe qu'une seule ligne.

#### HTML

```html
<table>
  <tr>
    <th rowspan="2">Nom</th>
    <th rowspan="2">ID</th>
    <th colspan="2">Dates</th>
    <th rowspan="2">Solde</th>
  </tr>
  <tr>
    <th>Inscription</th>
    <th>Résiliation</th>
  </tr>
  <tr>
    <th>Margaret Nguyen</th>
    <td>427311</td>
    <td><time datetime="2010-06-03">3 juin 2010</time></td>
    <td>n/a</td>
    <td>0</td>
  </tr>
  <tr>
    <th>Edvard Galinski</th>
    <td>533175</td>
    <td><time datetime="2011-01013">13 janvier 2011</time></td>
    <td><time datetime="2017-04008">8 avril 2017</time></td>
    <td>37</td>
  </tr>
  <tr>
    <th>Hoshi Nakamura</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">23 juillet 2012</time></td>
    <td>n/a</td>
    <td>15</td>
  </tr>
</table>
```

#### CSS

```css
table {
  border: 1px solid black;
}

th, td {
  border: 1px solid black;
}
```

### Distinguer en-tête et contenu

On utilise ici l'élément [`<thead>`](/fr/docs/Web/HTML/Element/thead) et l'élément [`<tbody>`](/fr/docs/Web/HTML/Element/tbody) pour distinguer l'en-tête du tableau et le contenu de celui-ci.

#### HTML

```html
<table>
  <thead>
    <tr>
      <th rowspan="2">Nom</th>
      <th rowspan="2">Identifiant</th>
      <th colspan="2">Dates</th>
      <th rowspan="2">Solde</th>
    </tr>
    <tr>
      <th>Inscription</th>
      <th>Résiliation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3 juin 2010</time></td>
      <td>n/a</td>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01013">13 janvier 2011</time></td>
      <td><time datetime="2017-04008">8 avril 2017</time></td>
      <td>37</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23 juillet 2012</time></td>
      <td>n/a</td>
      <td>15</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border: 1px solid black;
}

th, td {
  border: 1px solid black;
}
```

#### Résultat

Le résultat n'a pas changé visuellement mais la structure comporte des informations sémantiques complémentaires.

{{EmbedLiveSample("Distinguer_en-tête_et_contenu", 500, 200)}}

### Mise en forme simple

Il est possible d'utiliser [CSS](/fr/docs/Web/CSS) afin de modifier l'apparence d'une ligne d'un tableau. Tous les styles appliqués à un élément `<tr>` auront un impact sur les cellules de cette ligne (sauf si celles-ci indiquent un style par-dessus).

Modifions ici la police et la couleur d'arrière-plan pour la ligne d'en-tête.

#### Résultat

Là encore, regardons le résultat pour commencer.

{{EmbedLiveSample("Mise_en_forme_simple", 500, 200)}}

#### HTML

```html
<table>
  <thead>
    <tr>
      <th rowspan="2">Nom</th>
      <th rowspan="2">ID</th>
      <th colspan="2">Dates</th>
      <th rowspan="2">Solde</th>
    </tr>
    <tr>
      <th>Inscription</th>
      <th>Résiliation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3 juin 2010</time></td>
      <td>n/a</td>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01013">13 janvier 2011</time></td>
      <td><time datetime="2017-04008">8 avril 2017</time></td>
      <td>37</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23 juillet 2012</time></td>
      <td>n/a</td>
      <td>15</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border: 1px solid black;
  font: 16px "Open Sans", Helvetica, Arial, sans-serif;
}

thead > tr {
  background-color: rgb(228, 240, 245);
}

th, td {
  border: 1px solid black;
  padding:4px 6px;
}
```

On utilise ici la propriété [`font`](/fr/docs/Web/CSS/font) sur l'élément [`<table>`](/fr/docs/Web/HTML/Element/table) afin d'avoir une police plus agréable. Ensuite, pour tous les éléments `<tr>` qui sont les fils de [`<thead>`](/fr/docs/Web/HTML/Element/thead) (c'est-à-dire pour les lignes de l'en-tête), on indique une couleur d'arrière-plan bleu clair. Cela se propagera à l'ensemble des cellules de l'en-tête.

Cela ne modifie pas la mise en forme des éléments [`<th>`](/fr/docs/Web/HTML/Element/th) de la première colonne où les noms des membres sont considérés comme des en-têtes de ligne.

### Mise en forme avancée

Allons encore plus loin dans la mise en forme avec des styles pour l'en-tête ainsi que le corps du tableau en alternant les couleurs des lignes et en utilisant différentes couleurs pour les cellules selon leur position, etc.

#### Résultat

Voici le résultat qui sera obtenu :

{{EmbedLiveSample("Mise_en_forme_avancée", 500, 200)}}

#### HTML

Le HTML n'est pas modifié.

```html
<table>
  <thead>
    <tr>
      <th rowspan="2">Nom</th>
      <th rowspan="2">ID</th>
      <th colspan="2">Dates</th>
      <th rowspan="2">Solde</th>
    </tr>
    <tr>
      <th>Inscription</th>
      <th>Résiliation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3 juin 2010</time></td>
      <td>n/a</td>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01013">13 janvier 2011</time></td>
      <td><time datetime="2017-04008">8 avril 2017</time></td>
      <td>37</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23 juillet 2012</time></td>
      <td>n/a</td>
      <td>15</td>
    </tr>
  </tbody>
</table>
```

#### CSS

Ici, CSS est utilisé de façon plus marquée. Sans que ce soit compliqué, il y a beaucoup de choses à voir : autant les décomposer.

##### Règles pour le tableau et les styles de base

```css
table {
  border: 1px solid black;
  font: 16px "Open Sans", Helvetica, Arial, sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}
```

Ici, on ajoute les propriétés [`border-spacing`](/fr/docs/Web/CSS/border-spacing) et [`border-collapse`](/fr/docs/Web/CSS/border-collapse) afin d'éliminer l'espace entre les cellules et afin de fusionner les bordures qui se touchent afin d'obtenir une seule bordure plutôt que des bordures doubles.

```css
th, td {
  border: 1px solid black;
  padding:4px 6px;
}

th {
  vertical-align: bottom;
}
```

Voici le style par défaut pour l'ensemble des cellules. Ajoutons quelques personnalisations.

##### Ligne d'en-tête

Nous allons voir l'en-tête en deux parties. Pour commencer, mettons en forme l'en-tête de façon générale :

```css
thead > tr {
  background-color: rgb(228, 240, 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid black;
}
```

On définit la couleur d'arrière-plan de tous les éléments `<tr>` dans la ligne d'en-tête du tableau (contenue dans [`<thead>`](/fr/docs/Web/HTML/Element/thead)). Ensuite, on définit la bordure basse pour que ce soit une ligne avec une épaisseur de deux pixels. On peut voir qu'on utilise le sélecteur [`:nth-of-type`](/fr/docs/Web/CSS/:nth-of-type) afin de cibler l'application de [`border-bottom`](/fr/docs/Web/CSS/border-bottom) sur la _deuxième_ ligne de l'en-tête. Pourquoi ? Parce que l'en-tête se compose de deux lignes où on a des cellules fusionnées. Cela signifie qu'il y a effectivement deux lignes et appliquer ces règles à la première ligne ne fournirait pas le résultat attendu.

##### Les en-têtes d'inscription et de résiliation

Mettons en forme ces deux cellules d'en-têtes en utilisant des teintes rouge / vert pour représenter l'aspect positif d'une inscription et l'aspect négatif d'une résiliation.

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225, 255, 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255, 225, 225);
}
```

Ici, on cible la dernière ligne de l'en-tête du tableau et on indique la couleur pour la première cellule d'en-tête (qui correspond à l'inscription) avec du vert et la seconde (qui correspond à la résiliation) avec du rouge.

##### Ajouter des couleurs pour les autres lignes

Pour améliorer la lisibilité d'un tableau, il est courant d'appliquer une alternance de couleur entre chaque ligne. Faisons cela en ciblant les lignes paires :

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237, 238, 242);
}
```

##### Mise en forme de la colonne d'en-tête gauche

On veut que la première colonne se démarque. Mettons la en forme également.

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225, 229, 244);
}
```

Cela applique [`text-align`](/fr/docs/Web/CSS/text-align) à chaque première cellule de chaque ligne afin de justifier à gauche les noms des membres avec une couleur d'arrière-plan légèrement différentes.

##### Justifier les soldes de compte

Enfin, lorsqu'on affiche des valeurs monétaires, on les représente alignées à droite pour faciliter une lecture comparative entre les valeurs. Appliquons ceci à l'exemple.

```css
tbody > tr > td:last-of-type {
  text-align:right;
}
```

Cette règle applique la propriété CSS [`text-align`](/fr/docs/Web/CSS/text-align) sur le dernier élément [`<td>`](/fr/docs/Web/HTML/Element/td) de chaque ligne du corps du tableau avec la valeur `"right"`.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Zéro ou plusieurs éléments
        <a href="/fr/docs/Web/HTML/Element/td"><code>&#x3C;td></code></a> ou
        <a href="/fr/docs/Web/HTML/Element/th"><code>&#x3C;th></code></a
        >, éventuellement mélangés. Les éléments de script (<a
          href="/fr/docs/Web/HTML/Element/script"
          ><code>&#x3C;script></code></a
        >
        et
        <a href="/fr/docs/Web/HTML/Element/template"
          ><code>&#x3C;template></code></a
        >) sont également utilisés.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire. La balise de fin peut être absente
        si l'élément <code>&#x3C;tr></code> est immédiatement suivi par un
        élément <code>&#x3C;tr></code> ou si l'élément du groupe parent (<a
          href="/fr/docs/Web/HTML/Element/thead"
          ><code>&#x3C;thead></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/tbody"><code>&#x3C;tbody></code></a>
        ou
        <a href="/fr/docs/Web/HTML/Element/tfoot"><code>&#x3C;tfoot></code></a
        >) n'a plus d'autre contenu.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément
        <a href="/fr/docs/Web/HTML/Element/table"><code>&#x3C;table></code></a>
        (uniquement si le tableau ne possède pas d'élément
        <a href="/fr/docs/Web/HTML/Element/body"><code>&#x3C;body></code></a> et
        uniquement après un élément
        <a href="/fr/docs/Web/HTML/Element/caption"
          ><code>&#x3C;caption></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/colgroup"
          ><code>&#x3C;colgroup></code></a
        >
        ou
        <a href="/fr/docs/Web/HTML/Element/thead"><code>&#x3C;thead></code></a
        >) ,
        <a href="/fr/docs/Web/HTML/Element/thead"><code>&#x3C;thead></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/tbody"><code>&#x3C;tbody></code></a>
        ou
        <a href="/fr/docs/Web/HTML/Element/tfoot"><code>&#x3C;tfoot></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Row_Role"
            >row</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLTableRowElement"
          ><code>HTMLTableRowElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre : les tableaux HTML](/fr/docs/Learn/HTML/Tables) : une introduction à l'utilisation des tableaux qui aborde `<tr>`.
- Les autres éléments HTML relatifs aux tableaux : [`<caption>`](/fr/docs/Web/HTML/Element/caption), [`<col>`](/fr/docs/Web/HTML/Element/col), [`<colgroup>`](/fr/docs/Web/HTML/Element/colgroup), [`<table>`](/fr/docs/Web/HTML/Element/table), [`<tbody>`](/fr/docs/Web/HTML/Element/tbody), [`<td>`](/fr/docs/Web/HTML/Element/td), [`<tfoot>`](/fr/docs/Web/HTML/Element/tfoot), [`<th>`](/fr/docs/Web/HTML/Element/th), [`<thead>`](/fr/docs/Web/HTML/Element/thead).
- [`HTMLTableRowElement`](/fr/docs/Web/API/HTMLTableRowElement) : l'interface DOM sur laquelle `<tr>` est basé.
- Les propriétés et pseudo-classes CSS qui sont particulièrement utiles pour mettre en forme l'élément `<tr>` :

  - La pseudo-classe [`:nth-child`](/fr/docs/Web/CSS/:nth-child) qui permet de définir l'alignement des cellules dans la colonne ou sur une ligne
  - La propriété [`text-align`](/fr/docs/Web/CSS/text-align) qui permet d'aligner l'ensemble des cellules par rapport au même caractère (comme le point ou la virgule).
