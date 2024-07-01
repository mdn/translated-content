---
title: "<td> : l'élément de cellule de tableau"
slug: Web/HTML/Element/td
---

{{HTMLSidebar}}

L'élément [HTML](/fr/docs/Web/HTML) **`<td>`** définit une cellule d'un tableau qui contient des données. Cet élément fait partie du _modèle de tableau_.

{{EmbedInteractiveExample("pages/tabbed/td.html","tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a>
      </th>
      <td>Racine de section.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">Contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire. La balise de fin peut être absente si l'élément est immédiatement suivi par un élément <a href="/fr/docs/Web/HTML/Element/th"><code>&lt;th&gt;</code></a> ou <code>&lt;td&gt;</code> ou s'il n'y a plus aucune donnée dans l'élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément <a href="/fr/docs/Web/HTML/Element/tr"><code>&lt;tr&gt;</code></a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/Cell_Role"><code>cell</code></a> si l'élément est un descendant d'un élément <a href="/fr/docs/Web/HTML/Element/table"><code>&lt;table&gt;</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLTableDataCellElement"><code>HTMLTableDataCellElement</code></td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- `colspan`

  - : Cet attribut contient un entier positif indiquant le nombre de colonnes sur lesquelles s'étend la cellule. La valeur par défaut est 1. Des valeurs supérieures à 1000 peuvent être considérées comme incorrectes et seront interprétées comme valant la valeur par défaut (1).

- `headers`

  - : Cet attribut est une liste de chaînes de caractères séparées par des espaces. Chacune correspond à l'attribut `id` de l'élément [`<th>`](/fr/docs/Web/HTML/Element/th) qui s'applique à la cellule courante.

- `rowspan`
  - : Cet attribut contient un entier positif indiquant sur combien de lignes s'étend la cellule. La valeur par défaut est 1. Si cet attribut vaut 0, la cellule s'étend jusqu'à la fin de la section ([`<thead>`](/fr/docs/Web/HTML/Element/thead), [`<tbody>`](/fr/docs/Web/HTML/Element/tbody), [`<tfoot>`](/fr/docs/Web/HTML/Element/tfoot) du tableau à laquelle appartient la cellule même si cette section est définie implicitement). Les valeurs supérieures à 65534 sont ramenées à 65534.

### Attributs dépréciés

- `abbr` {{deprecated_inline}}

  - : Cet attribut contient une description courte et abrégée du contenu de la cellule. Certains outils utilisateurs, comme la synthèse vocale, peuvent décrire cette information avant le contenu lui-même.

    > **Note :** Cet attribut est obsolète dans le dernier standard et ne doit donc plus être utilisé. Il faut dans ces cas introduire la description au sein de la cellule comme un élément [`<abbr>`](/fr/docs/Web/HTML/Element/abbr) indépendant ou utiliser l'attribut `title` de la cellule pour représenter le contenu et la cellule elle-même pour représenter le contenu abrégé.

- `align` {{deprecated_inline}}

  - : Cet attribut à valeurs définit l'alignement horizontal pour le contenu de chaque cellule de la colonne. Les valeurs possibles sont&nbsp;:

    - `left`
      - : Le contenu de la cellule est aligné à gauche de la cellule.
    - `center`
      - : Le contenu de la cellule est centré horizontalement.
    - `right`
      - : Le contenu de la cellule est aligné à droite de la cellule.
    - `justify`
      - : S'applique uniquement au texte. Insère des espaces dans le contenu textuel afin que le contenu de la cellule soit justifié.
    - `char`
      - : S'applique uniquement au texte. Aligne le contenu textuel de la cellule selon un caractère spécial avec un décalage minimum définis par les attributs `char` et `charoff`

    Si cet attribut n'est pas renseigné, la valeur `left` est prise par défaut.

    > **Note :** Cet attribut est devenu obsolète dans le dernier standard et ne doit donc plus être utilisé.
    >
    > - Pour réaliser les mêmes effets que les valeurs `left`, `center`, `right` ou `justify`, il faut utiliser la propriété CSS [`text-align`](/fr/docs/Web/CSS/text-align) sur l'élément
    > - Pour réaliser le même effet qu'avec la valeur `char`. Il est possible, en CSS3, d'utiliser la valeur de l'attribut `char` comme valeur de la propriété [`text-align`](/fr/docs/Web/CSS/text-align) (non implémenté à date).

- `axis` {{deprecated_inline}}

  - : Cet attribut contient une liste de chaînes de caractères (séparées par des espaces). Chaque chaîne de caractère est l'identifiant d'un groupe de cellule auquel cet en-tête s'applique.

- `bgcolor` {{Non-standard_inline}}

  - : Cet attribut définit la couleur d'arrière-plan de chaque cellule dans une colonne. Sa valeur est [un code hexadécimal RGB sur 6 chiffres](/fr/docs/Web/CSS/color_value#les_couleurs_rgb), préfixé d'un '`#`' ou un des [mots-clés de couleurs prédéfinis](/fr/docs/Web/CSS/color_value#les_mots-clés).

    Pour réaliser un effet équivalent, on utilisera plutôt la propriété CSS [`background-color`](/fr/docs/Web/CSS/background-color).

- `char` {{deprecated_inline}}

  - : Cet attribut est utilisé pour définir le caractère sur lequel aligner les cellules d'une colonne. Les valeurs de cet attribut contiennent généralement un point (.) pour aligner des nombres ou des valeurs monétaires. Si l'attribut `align` ne vaut pas `char`, l'attribut est ignoré.

- `charoff` {{deprecated_inline}}

  - : Cet attribut est utilisé pour indiquer le décalage, en nombre de caractères, depuis le caractère défini par l'attribut `char` à appliquer au contenu des cellules.

- `height` {{deprecated_inline}}

  - : Cet attribut définit une hauteur de cellule recommandée. On utilisera plutôt la propriété CSS [`height`](/fr/docs/Web/CSS/height).

- `scope` {{deprecated_inline}}

  - : Cet attribut à valeurs énumérées définit les cellules qui sont liées à l'en-tête défini par l'élément [`<th>`](/fr/docs/Web/HTML/Element/th). À utiliser uniquement avec l'élément `<th>` pour définir la ligne ou la colonne pour laquelle il est son en-tête.

- `valign` {{deprecated_inline}}

  - : Cet attribut définit l'alignement vertical du texte des cellules de la colonne. Les valeurs possibles de cet attribut sont&nbsp;:

    - `baseline`
      - : Aligne le texte à la ligne la plus basse possible en utilisant la [ligne de base](https://fr.wikipedia.org/wiki/Ligne_de_base_%28typographie%29) des caractères. Si les caractères ont tous la même taille, cela aura le même effet que la valeur `bottom`.
    - `bottom`
      - : Place le texte au plus bas de la cellule.
    - `middle`
      - : Centre verticalement le texte dans la cellule.
    - `top`
      - : Place le texte au plus haut de la cellule.

    On utilisera plutôt la propriété CSS [`vertical-align`](/fr/docs/Web/CSS/vertical-align) à la place.

- `width` {{deprecated_inline}}
  - : Cet attribut est utilisé afin de définir la largeur recommandée pour une cellule. On utilisera plutôt la propriété CSS [`width`](/fr/docs/Web/CSS/width) à la place.

## Exemples

Voir [la page sur l'élément `<table>`](/fr/docs/Web/HTML/Element/table) pour des exemples d'utilisation de `<td>`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
