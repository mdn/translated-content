---
title: '<colgroup> : l''élément regroupant des colonnes'
slug: Web/HTML/Element/colgroup
tags:
  - Element
  - HTML
  - HTML tabular data
  - Reference
  - Tables
  - Web
translation_of: Web/HTML/Element/colgroup
browser-compat: html.elements.colgroup
---
{{HTMLRef}}

L'élément HTML **`<colgroup>`** définit un groupe de colonnes au sein d'un tableau.

{{EmbedInteractiveExample("pages/tabbed/colgroup.html","tabbed-taller")}}

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
        Si l'attribut <a href="#attr-span"><code>span</code></a> est présent :
        aucun car c'est un élément vide.<br />Si l'attribut n'est pas présent,
        zéro ou plusieurs éléments
        <a href="/fr/docs/Web/HTML/Element/col"><code>&#x3C;col></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début peut être absente si le premier élément fils est
        <a href="/fr/docs/Web/HTML/Element/col"><code>&#x3C;col></code></a> et
        que celui-ci n'est pas précédé par un élément
        <a href="/fr/docs/Web/HTML/Element/colgroup"
          ><code>&#x3C;colgroup></code></a
        >
        dont la balise de fin est absente. La balise de fin peut être absente
        s'il n'est pas suivi par un blanc ou par un commentaire.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément
        <a href="/fr/docs/Web/HTML/Element/table"><code>&#x3C;table></code></a
        >.
        <a href="/fr/docs/Web/HTML/Element/colgroup"
          ><code>&#x3C;colgroup></code></a
        >
        doit apparaître après tout élément
        <a href="/fr/docs/Web/HTML/Element/caption"
          ><code>&#x3C;caption></code></a
        >
        optionnel et avant tout élément
        <a href="/fr/docs/Web/HTML/Element/thead"><code>&#x3C;thead></code></a
        >, <a href="/fr/docs/Web/HTML/Element/th"><code>&#x3C;th></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/tbody"><code>&#x3C;tbody></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/tfoot"><code>&#x3C;tfoot></code></a>
        et <a href="/fr/docs/Web/HTML/Element/tr"><code>&#x3C;tr></code></a
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

Comme pour tous les éléments, on peut utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes) sur cet élément.

- **`span`**

  - : Cet attribut contient un nombre entier positif indiquant le nombre de colonnes consécutives que l'élément `<colgroup>` couvre. S'il n'est pas présent, sa valeur par défaut est `1`.

    > **Note :**
    >
    > Cet attribut est appliqué sur les attributs du groupe de colonnes, il n'a aucun effet sur les règles de style CSS qui lui sont associées ni, a fortiori, sur les cellules des membres du groupe de la colonne.
    >
    > - L'attribut `span` n'est pas autorisé s'il y a un ou plusieurs éléments `<col>` dans le `<colgroup>`.

### Attributs dépréciés

Les attributs suivants sont dépréciés et ne doivent pas être utilisés. Ils sont documentés ci-dessous à titre de référence lors de la mise à jour du code existant et uniquement pour des raisons historiques.

- **`align`** {{deprecated_inline}}

  - : Cet attribut de type énumératif indique comment l'alignement horizontal du contenu des cellules de chaque colonne sera traité. Les valeurs possibles sont :

    - `left`, aligner le contenu à gauche de la cellule
    - `center`, centrer le contenu dans la cellule
    - `right`, aligner le contenu à droite de la cellule
    - `justify`, insérer des espaces dans le contenu textuel afin que le contenu soit justifié dans la cellule
    - `char`, aligner le contenu textuel sur un caractère spécial avec un décalage minimal, défini par les attributs [`char`](/fr/docs/Web/HTML/Element/col#attr-char) et [`charoff`](/fr/docs/Web/HTML/Element/col#attr-charoff).

    Si cet attribut n'est pas défini, la valeur `left` est adoptée. Les éléments [`<col>`](/fr/docs/Web/HTML/Element/col) descendants peuvent remplacer cette valeur en utilisant leur propre attribut [`align`](/fr/docs/Web/HTML/Element/col#attr-align).

    > **Note :**
    >
    > - N'essayez pas de définir la propriété [`text-align`](/fr/docs/Web/CSS/text-align) sur un sélecteur donnant un élément [`<colgroup>`](/fr/docs/Web/HTML/Element/colgroup). Comme les éléments [`<td>`](/fr/docs/Web/HTML/Element/td) ne sont pas des descendants de l'élément [`<colgroup>`](/fr/docs/Web/HTML/Element/colgroup), ils n'en hériteront pas.
    > - Si le tableau n'utilise pas d'attribut [code>colspan](/fr/docs/Web/HTML/Element/td#attr-colspan), utilisez un `td:nth-child(an+b)` sélecteur CSS par colonne, où a est le nombre total de colonnes du tableau et b est la position ordinale de cette colonne dans le tableau. Ce n'est qu'après ce sélecteur que la propriété `text-align` peut être utilisée.
    > - Si le tableau utilise bien un attribut [`colspan`](/fr/docs/Web/HTML/Element/td#attr-colspan), l'effet peut être obtenu en combinant des sélecteurs d'attributs CSS adéquats comme `[colspan=n]`, bien que cela ne soit pas trivial.

- **`bgcolor`** {{deprecated_inline}}

  - : La couleur de fond du tableau. Il s'agit d'un [code RVB hexadécimal à 6 chiffres](/fr/docs/Web/CSS/color_value#rgb_colors), préfixé par un «&nbsp;`#`&nbsp;». L'un des [mots-clés de couleur](/fr/docs/Web/CSS/color_value#color_keywords) prédéfinis peut également être utilisé.

    Pour obtenir un effet similaire, utilisez la propriété CSS [`background-color`](/fr/docs/Web/CSS/background-color).

- **`char`** {{deprecated_inline}}
  - : Cet attribut spécifie l'alignement du contenu d'un groupe de colonnes sur un caractère. Les valeurs typiques de cet attribut comprennent un point (.) lorsqu'on tente d'aligner des chiffres ou des valeurs monétaires. Si [`align`](#attr-align) n'est pas défini sur `char`, cet attribut est ignoré, bien qu'il sera toujours utilisé comme valeur par défaut pour le [`align`](/fr/docs/Web/HTML/Element/col#attr-align) du [`<col>`](/fr/docs/Web/HTML/Element/col) qui sont membres de ce groupe de colonnes.
- **`charoff`** {{deprecated_inline}}
  - : Cet attribut est utilisé pour indiquer le nombre de caractères pour décaler les données de la colonne par rapport au caractère d'alignement spécifié par l'attribut `char`.
- **`valign`** {{deprecated_inline}}

  - : Cet attribut spécifie l'alignement vertical du texte dans chaque cellule de la colonne. Les valeurs possibles de cet attribut sont les suivantes :

    - `baseline`, mettra le texte aussi près du bas de la cellule que possible, mais l'alignera sur la [ligne de base](<https://fr.wikipedia.org/wiki/Ligne_de_base_(typographie)>) des caractères au lieu du bas de ceux-ci. Si les caractères sont tous de la même taille, cela a le même effet que `bottom` ;
    - `bottom`, placera le texte aussi près du bas de la cellule que possible ;
    - `middle`, permet de centrer le texte dans la cellule ;
    - and `top`, placera le texte aussi près du haut de la cellule que possible.

    > **Note :**
    >
    > - N'essayez pas de définir la propriété [`vertical-align`](/fr/docs/Web/CSS/vertical-align) sur un sélecteur donnant un élément `<col>`. Comme les éléments [`<td>`](/fr/docs/Web/HTML/Element/td) ne sont pas des descendants de l'élément `<col>`, ils n'en hériteront pas.
    > - Si le tableau n'utilise pas d'attribut [`colspan`](/fr/docs/Web/HTML/Element/td#attr-colspan), utilisez le sélecteur CSS `td:nth-child(an+b)` où a est le nombre total de colonnes du tableau et b la position ordinale de la colonne dans le tableau. Ce n'est qu'après ce sélecteur que la propriété `vertical-align` peut être utilisée.
    > - Si le tableau utilise bien un attribut [`colspan`](/fr/docs/Web/HTML/Element/td#attr-colspan), l'effet peut être obtenu en combinant des sélecteurs d'attributs CSS adéquats comme `[colspan=n]`, bien que cela ne soit pas trivial.

## Exemples

Veuillez consulter la page [`<table>`](/fr/docs/Web/HTML/Element/table) pour des exemples sur `<colgroup>`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés et pseudo-classes CSS notamment utiles pour mettre en forme l'élément `<col>` :

  - la propriété [`width`](/fr/docs/Web/CSS/width) pour contrôler la largeur de la colonne ;
  - la pseudo-classe [`:nth-child`](/fr/docs/Web/CSS/:nth-child) pour définir l'alignement des cellules de la colonne ;
  - la propriété [`text-align`](/fr/docs/Web/CSS/text-align) pour aligner le contenu de toutes les cellules sur le même caractère, comme « . ».
