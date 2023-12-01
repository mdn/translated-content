---
title: <thead>
slug: Web/HTML/Element/thead
---

{{HTMLSidebar}}

L'élément [HTML](/fr/docs/Web/HTML) **`<thead>`** définit un ensemble de lignes qui définit l'en-tête des colonnes d'un tableau.

{{EmbedInteractiveExample("pages/tabbed/thead.html","tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a>
      </th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Zéro ou plusieurs éléments <a href="/fr/docs/Web/HTML/Element/tr"><code>&lt;tr&gt;</code></a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire. La balise de fin peut être absente si l'élément <a href="/fr/docs/Web/HTML/Element/thead"><code>&lt;thead&gt;</code></a> est immédiatement suivi par un élément <a href="/fr/docs/Web/HTML/Element/tbody"><code>&lt;tbody&gt;</code></a> ou par un élément <a href="/fr/docs/Web/HTML/Element/tfoot"><code>&lt;tfoot&gt;</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément <a href="/fr/docs/Web/HTML/Element/table"><code>&lt;table&gt;</code></a>. L'élément <code>&lt;thead&gt;</code> doit apparaître après tout élément <a href="/fr/docs/Web/HTML/Element/caption"><code>&lt;caption&gt;</code></a> ou <a href="/fr/docs/Web/HTML/Element/colgroup"><code>&lt;colgroup&gt;</code></a>(même si ce dernier est défini implicitement), il doit apparaître avant tout élément <a href="/fr/docs/Web/HTML/Element/tbody"><code>&lt;tbody&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/tfoot"><code>&lt;tfoot&gt;</code></a> ou <a href="/fr/docs/Web/HTML/Element/tr"><code>&lt;tr&gt;</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role"><code>rowgroup</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLTableSectionElement"><code>HTMLTableSectionElement</code></a></td>
    </tr>
  </tbody>
</table>

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

### Attributs dépréciés ou obsolètes

- `align` {{Deprecated_inline}}

  - : Cet attribut définit l'alignement horizontal pour le contenu de chaque cellule. Les valeurs possibles sont&nbsp;:

    - `left`
      - : Le contenu de la cellule est aligné à gauche de la cellule.
    - `center`
      - : Le contenu de la cellule est centré horizontalement.
    - `right`
      - : Le contenu de la cellule est aligné à droite de la cellule.
    - `justify`
      - : Insère des espaces dans le contenu textuel afin que le contenu de la cellule soit justifié.
    - `char`
      - : Aligne le contenu textuel de la cellule selon un caractère spécial avec un décalage minimum définis par les attributs `char` et `charoff`.

    Si cet attribut n'est pas renseigné, la valeur `left` est prise par défaut.

    > **Attention :** Cet attribut est devenu obsolète dans le dernier standard.
    >
    > - Pour réaliser le même effet qu'avec les valeurs `left`, `center`, `right` ou `justify`, utilisez la propriété CSS [`text-align`](/fr/docs/Web/CSS/text-align) sur cet élément.
    > - Pour réaliser le même effet qu'avec `char`, vous pouvez utiliser la valeur de `char` comme valeur pour la propriété [`text-align`](/fr/docs/Web/CSS/text-align).

- `bgcolor` {{Non-standard_inline}}

  - : Cet attribut définit la couleur d'arrière-plan de chaque cellule dans une colonne. Sa valeur est [un code hexadécimal RGB sur 6 chiffres](/fr/docs/Web/CSS/color_value#les_couleurs_rgb), préfixé d'un '`#`' ou un des [mots-clés de couleurs prédéfinis](/fr/docs/Web/CSS/color_value#les_mots-clés).

    Pour réaliser un effet équivalent, on utilisera plutôt la propriété CSS [`background-color`](/fr/docs/Web/CSS/background-color).

- `char` {{Deprecated_inline}}

  - : Cet attribut est utilisé pour définir le caractère sur lequel aligner les cellules d'une colonne. Les valeurs de cet attribut contiennent généralement un point (.) pour aligner des nombres ou des valeurs monétaires. Si l'attribut `align` ne vaut pas `char`, l'attribut est ignoré.

    > **Note :** Cet attribut est obsolète et il est donc fortement déconseillé de l'utiliser. De fait, il n'est pas supporté par le dernier standard. Pour réaliser le même effet qu'avec `char`, on peut utiliser la même valeur sur la propriété CSS [`text-align`](/fr/docs/Web/CSS/text-align).

- `charoff` {{Deprecated_inline}}

  - : Cet attribut est utilisé pour indiquer le décalage, en nombre de caractères, depuis le caractère définit par l'attribut `char` à appliquer au contenu des cellules.

    > **Note :** Cet attribut ne doit plus être utilisé, car il est maintenant obsolète et n'est plus supporté dans le dernier standard.

- `valign` {{Deprecated_inline}}

  - : Cet attribut définit l'alignement vertical du texte des cellules de la colonne. Les valeurs possibles pour cet attribut sont&nbsp;:

    - `baseline`
      - : Aligne le texte à la ligne la plus basse possible en utilisant la [ligne de base](https://fr.wikipedia.org/wiki/Ligne_de_base_%28typographie%29) des caractères. Si les caractères ont tous la même taille, cela aura le même effet que la valeur `bottom`.
    - `bottom`
      - : Place le texte au plus bas de la cellule.
    - `middle`
      - : Centre verticalement le texte dans la cellule.
    - `top`
      - : Place le texte au plus haut de la cellule.

    > **Note :** Cet attribut étant maintenant obsolète (et n'étant plus supporté), il est fortement déconseillé de l'utiliser. La propriété CSS [`vertical-align`](/fr/docs/Web/CSS/vertical-align) doit être utilisée à la place.

## Exemples

Consulter la page [`<table>`](/fr/docs/Web/HTML/Element/table) pour des exemples d'utilisation de l'élément `<thead>`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments HTML liés aux tableaux&nbsp;:
  - [`<caption>`](/fr/docs/Web/HTML/Element/caption)
  - [`<col>`](/fr/docs/Web/HTML/Element/col)
  - [`<colgroup>`](/fr/docs/Web/HTML/Element/colgroup)
  - [`<table>`](/fr/docs/Web/HTML/Element/table)
  - [`<tbody>`](/fr/docs/Web/HTML/Element/tbody)
  - [`<td>`](/fr/docs/Web/HTML/Element/td)
  - [`<tfoot>`](/fr/docs/Web/HTML/Element/tfoot)
  - [`<th>`](/fr/docs/Web/HTML/Element/th)
  - [`<tr>`](/fr/docs/Web/HTML/Element/tr)
- Les propriétés et pseudo-classes CSS particulièrement utiles pour mettre en forme l'élément `<thead>`&nbsp;:
  - La pseudo-classe [`:nth-child`](/fr/docs/Web/CSS/:nth-child) qui permet de définir l'alignement des cellules de la colonne
  - La propriété [`text-align`](/fr/docs/Web/CSS/text-align) qui permet d'aligner le contenu des différentes cellules par rapport à un même caractère (par exemple le point ou la virgule)
