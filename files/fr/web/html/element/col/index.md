---
title: '<col> : l''élément représentant une colonne'
slug: Web/HTML/Element/col
tags:
  - Element
  - HTML
  - HTML tabular data
  - Reference
  - Tables
  - Web
translation_of: Web/HTML/Element/col
browser-compat: html.elements.col
---
{{HTMLRef}}

L'élément HTML **`<col>`** définit une colonne appartenant à un tableau et est utilisé afin de définir la sémantique commune à toutes ses cellules. On trouve généralement cet élément au sein d'un élément [`<colgroup>`](/fr/docs/Web/HTML/Element/colgroup).

{{EmbedInteractiveExample("pages/tabbed/col.html","tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégorie de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, cet élément est un élément vide.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>
        La balise ouvrante est obligatoire, l'élément étant un élément vide, la
        balise de fin est interdite.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        <a href="/fr/docs/Web/HTML/Element/colgroup"
          ><code>&#x3C;colgroup></code></a
        >
        uniquement. Toutefois, ce parent peut être défini de façon implicite car
        sa balise ouvrante n'est pas obligatoire. L'élément
        <a href="/fr/docs/Web/HTML/Element/colgroup"
          ><code>&#x3C;colgroup></code></a
        >
        ne doit pas avoir d'attribut
        <a href="/fr/docs/Web/HTML/Element/colgroup#attr-span"
          ><code>span</code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun rôle autorisé.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLTableColElement"
          ><code>HTMLTableColElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Global_attributes).

- **`span`**
  - : Cet attribut contient un nombre entier positif indiquant le nombre de colonnes consécutives que l'élément `<col>` couvre. S'il n'est pas présent, sa valeur par défaut est `1`.

### Attributs dépréciés

Les attributs suivants sont dépréciés et ne doivent pas être utilisés. Ils sont documentés ci-dessous à titre de référence lors de la mise à jour du code existant et uniquement pour des raisons historiques.

- **`align`** {{deprecated_inline}}

  - : Cet attribut de type énumératif indique comment l'alignement horizontal du contenu des cellules de chaque colonne sera traité. Les valeurs possibles sont :

    - `left`, aligner le contenu à gauche de la cellule
    - `center`, centrer le contenu dans la cellule
    - `right`, aligner le contenu à droite de la cellule
    - `justify`, insérer des espaces dans le contenu textuel afin que le contenu soit justifié dans la cellule

    Si cet attribut n'est pas défini, sa valeur est héritée du [`align`](/fr/docs/Web/HTML/Element/colgroup#attr-align) de l'élément [`<colgroup>`](/fr/docs/Web/HTML/Element/colgroup) auquel appartient cet `<col>`. S'il n'y en a pas, la valeur `left` est supposée.

    > **Note :**
    >
    > - Pour obtenir le même effet que les valeurs `left`, `center`, `right` ou `justify` :
    >
    >   - N'essayez pas de définir la propriété [`text-align`](/fr/docs/Web/CSS/text-align) sur un sélecteur donnant un élément `<col>`. Comme les éléments [`<td>`](/fr/docs/Web/HTML/Element/td) ne sont pas des descendants de l'élément `<col>`, ils n'en hériteront pas.
    >   - Si le tableau n'utilise pas d'attribut [`colspan`](/fr/docs/Web/HTML/Element/td#attr-colspan), utilisez le sélecteur CSS `td:nth-child(an+b)`. Définissez `a` à zéro et `b` à la position de la colonne dans le tableau, par exemple `td:nth-child(2) { text-align : right ; }` pour aligner à droite la deuxième colonne.
    >   - Si le tableau utilise bien un attribut [`colspan`](/fr/docs/Web/HTML/Element/td#attr-colspan), l'effet peut être obtenu en combinant des sélecteurs d'attributs CSS adéquats comme `[colspan=n]`, bien que cela ne soit pas trivial.

- **`bgcolor`** {{deprecated_inline}}

  - : La couleur de fond du tableau. Il s'agit d'un [code RVB hexadécimal à 6 chiffres](/fr/docs/Web/CSS/color_value#rgb_colors), préfixé par un « `#` ». L'un des [mots-clés de couleur](/fr/docs/Web/CSS/color_value#color_keywords) prédéfinis peut également être utilisé.

    Pour obtenir un effet similaire, utilisez la propriété CSS [`background-color`](/fr/docs/Web/CSS/background-color).

- **`char`** {{deprecated_inline}}
  - : Cet attribut est utilisé pour définir le caractère sur lequel aligner les cellules d'une colonne. Les valeurs typiques de cet attribut incluent un point (.) lorsqu'on tente d'aligner des nombres ou des valeurs monétaires. Si [`align`](#attr-align) n'est pas défini sur `char`, cet attribut est ignoré.
- **`charoff`** {{deprecated_inline}}
  - : Cet attribut est utilisé pour indiquer le nombre de caractères pour décaler les données de la colonne par rapport aux caractères d'alignement spécifiés par l'attribut `char`.
- **`valign`** {{deprecated_inline}}

  - : Cet attribut spécifie l'alignement vertical du texte dans chaque cellule de la colonne. Les valeurs possibles de cet attribut sont les suivantes :

    - `baseline`, mettra le texte aussi près du bas de la cellule que possible, mais l'alignera sur la [base](https://en.wikipedia.org/wiki/Baseline_%28typography%29) des caractères au lieu du bas de ceux-ci. Si les caractères sont tous de la même taille, cela a le même effet que `bottom` ;
    - `bottom`, placera le texte aussi près du bas de la cellule que possible ;
    - `middle`, permet de centrer le texte dans la cellule ;
    - and `top`, placera le texte aussi près du haut de la cellule que possible.

    > **Note :**
    >
    > - N'essayez pas de définir la propriété [`vertical-align`](/fr/docs/Web/CSS/vertical-align) sur un sélecteur donnant un élément `<col>`. Comme les éléments [`<td>`](/fr/docs/Web/HTML/Element/td) ne sont pas des descendants de l'élément `<col>`, ils n'en hériteront pas.
    > - Si le tableau n'utilise pas d'attribut [`colspan`](/fr/docs/Web/HTML/Element/td#attr-colspan), utilisez le sélecteur CSS `td:nth-child(an+b)` où a est le nombre total de colonnes du tableau et b la position ordinale de la colonne dans le tableau. Ce n'est qu'après ce sélecteur que la propriété `vertical-align` peut être utilisée.
    > - Si le tableau utilise bien un attribut [`colspan`](/fr/docs/Web/HTML/Element/td#attr-colspan), l'effet peut être obtenu en combinant des sélecteurs d'attributs CSS adéquats comme `[colspan=n]`, bien que cela ne soit pas trivial.

- **`width`** {{deprecated_inline}}
  - : Cet attribut spécifie une largeur par défaut pour chaque colonne du groupe de colonnes actuel. En plus des valeurs standard en pixels et en pourcentage, cet attribut peut prendre la forme spéciale `0*`, ce qui signifie que la largeur de chaque colonne du groupe doit être la largeur minimale nécessaire pour contenir le contenu de la colonne. Des largeurs relatives telles que `5*` peuvent également être utilisées.

## Exemples

Veuillez consulter la page [`<table>`](/fr/docs/Web/HTML/Element/table) pour des exemples sur `<colgroup>`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés et pseudo-classes CSS qui peuvent être spécialement utiles pour mettre en forme l'élément `<col>` :

  - la propriété [`width`](/fr/docs/Web/CSS/width) pour contrôler la largeur de la colonne ;
  - la pseudo-classe [`:nth-child`](/fr/docs/Web/CSS/:nth-child) pour définir l'alignement des cellules de la colonne ;
  - la propriété [`text-align`](/fr/docs/Web/CSS/text-align) pour aligner le contenu de toutes les cellules sur le même caractère, comme « . ».
