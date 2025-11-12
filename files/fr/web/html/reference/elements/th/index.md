---
title: "<th> : l'élément d'en-tête de tableau"
slug: Web/HTML/Reference/Elements/th
original_slug: Web/HTML/Element/th
---

{{HTMLSidebar}}

L'élément HTML **`<th>`** définit une cellule d'un tableau comme une cellule d'en-tête pour un groupe de cellules. La nature de ce groupe est définie grâce aux attributs [`scope`](#scope) et [`headers`](#headers).

{{InteractiveExample("HTML Demo: &lt;th&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Alien football stars
  </caption>
  <tr>
    <th scope="col">Player</th>
    <th scope="col">Gloobles</th>
    <th scope="col">Za'taak</th>
  </tr>
  <tr>
    <th scope="row">TR-7</th>
    <td>7</td>
    <td>4,569</td>
  </tr>
  <tr>
    <th scope="row">Khiresh Odo</th>
    <td>7</td>
    <td>7,223</td>
  </tr>
  <tr>
    <th scope="row">Mia Oolong</th>
    <td>9</td>
    <td>6,219</td>
  </tr>
</table>
```

```css interactive-example
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th[scope="col"] {
  background-color: #505050;
  color: #fff;
}

th[scope="row"] {
  background-color: #d6ecd4;
}

td {
  text-align: center;
}

tr:nth-of-type(even) {
  background-color: #eee;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a>
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Catégories_de_contenu#Contenu_de_flux">Contenu de flux</a> sans titre, pied de page, contenu sectionnant ou descendants d'un élément de titre.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire. La balise de fin peut être absente si l'élément est immédiatement suivi par un élément <code>&lt;th&gt;</code> ou par un élément
        <a href="/fr/docs/Web/HTML/Element/td"><code>&lt;td&gt;</code></a> ou s'il n'y a plus de contenu au sein de
        l'élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément <a href="/fr/docs/Web/HTML/Element/tr"><code>&lt;tr&gt;</code></a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://w3c.github.io/aria/#columnheader"><code>columnheader</code></a> ou <a href="https://w3c.github.io/aria/#rowheader"><code>rowheader</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLTableHeaderCellElement"><code>HTMLTableHeaderCellElement</code></a></td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `abbr`
  - : Cet attribut contient une description courte et abrégée du contenu de la cellule. Certains outils utilisateurs, comme la synthèse vocale, peuvent décrire cette information avant le contenu lui-même.

- `colspan`
  - : Cet attribut contient un entier positif indiquant le nombre de colonnes sur lesquelles s'étend la cellule. La valeur par défaut est 1. Des valeurs supérieures à 1000 peuvent être considérées comme incorrectes et seront corrigées avec la valeur par défaut.

- `headers`
  - : Cet attribut est une liste de chaînes de caractères séparées par des espaces. Chacune correspond à l'attribut `id` de l'élément `<th>` qui s'applique à cet élément.

- `rowspan`
  - : Cet attribut contient un entier positif indiquant sur combien de lignes s'étend la cellule. La valeur par défaut est 1. Si cet attribut vaut 0, la cellule s'étend jusqu'à la fin de la section ([`<thead>`](/fr/docs/Web/HTML/Reference/Elements/thead), [`<tbody>`](/fr/docs/Web/HTML/Reference/Elements/tbody), [`<tfoot>`](/fr/docs/Web/HTML/Reference/Elements/tfoot)) du tableau à laquelle appartient la cellule même si cette section est définie implicitement. Les valeurs supérieures à 65534 seront ramenées à 65534.

- `scope`
  - : Cet attribut référence les cellules auxquelles l'élément `<th>` est lié. Cet attribut peut prendre l'une des valeurs suivantes&nbsp;:
    - `row`
      - : Indique que l'en-tête s'applique à toutes les cellules de la ligne à laquelle appartient cet élément.
    - `col`
      - : Indique que l'en-tête s'applique à toutes les cellules de la colonne à laquelle appartient cet élément.
    - `rowgroup`
      - : Indique que l'en-tête appartient à un groupe de lignes et s'applique à toutes ses cellules. Les cellules restantes sont soit celles à droite de l'élément, soit celles à gauche selon la valeur de l'attribut [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir) de l'élément [`<table>`](/fr/docs/Web/HTML/Reference/Elements/table).
    - `colgroup`
      - : Indique que l'en-tête appartient à un groupe de colonne et concerne toutes ses cellules.

    Si l'attribut `scope` n'est pas défini ou que sa valeur n'est pas `row`, `col`, `rowgroup`, ou `colgroup`, le navigateur sélectionnera automatiquement l'ensemble de cellules auquel s'applique l'en-tête.

### Attributs dépréciés

- `align` {{deprecated_inline}}
  - : Cet attribut définit l'alignement horizontal pour le contenu de chaque cellule de la colonne. Les valeurs possibles sont&nbsp;:
    - `left`
      - : Le contenu de la cellule est aligné à gauche de la cellule.
    - `center`
      - : Le contenu de la cellule est centré horizontalement.
    - `right`
      - : Le contenu de la cellule est aligné à droite de la cellule.
    - `justify`
      - : S'applique uniquement au texte. Insère des espaces dans le contenu textuel afin que le contenu de la cellule soit justifié.
    - `char`
      - : S'applique uniquement au texte. Aligne le contenu textuel de la cellule selon un caractère spécial avec un décalage minimum définis par les attributs `char` et `charoff`.

    Si cet attribut n'est pas renseigné, la valeur `left` est prise par défaut.

    > [!NOTE]
    > Cet attribut est devenu obsolète dans le dernier standard et ne doit donc plus être utilisé.
    >
    > - Pour réaliser les mêmes effets que les valeurs `left`, `center`, `right` ou `justify`, il faut utiliser la propriété CSS [`text-align`](/fr/docs/Web/CSS/Reference/Properties/text-align) sur l'élément
    > - Pour réaliser le même effet qu'avec la valeur `char`. Il est possible d'utiliser la valeur de l'attribut `char` comme valeur de la propriété [`text-align`](/fr/docs/Web/CSS/Reference/Properties/text-align).

- `axis` {{deprecated_inline}}
  - : Cet attribut contient une liste de chaînes de caractères (séparées par des espaces). Chaque chaîne de caractère est l'identifiant d'un groupe de cellule auquel cet en-tête s'applique.

    > [!NOTE]
    > Cet attribut est obsolète dans le dernier standard et ne doit donc plus être utilisé. L'attribut `scope` doit être utilisé pour le remplacer.

- `bgcolor` {{Non-standard_inline}}
  - : Cet attribut définit la couleur d'arrière-plan de chaque cellule dans une colonne. Sa valeur est [un code hexadécimal RGB sur 6 chiffres](/fr/docs/Web/CSS/Reference/Values/color_value#les_couleurs_rgb), préfixé d'un '`#`' ou un des [mots-clés de couleurs prédéfinis](/fr/docs/Web/CSS/Reference/Values/color_value#les_mots-clés).

    Pour réaliser un effet équivalent, on utilisera plutôt la propriété CSS [`background-color`](/fr/docs/Web/CSS/Reference/Properties/background-color).

- `char` {{deprecated_inline}}
  - : Cet attribut est utilisé pour définir le caractère sur lequel aligner les cellules d'une colonne. Les valeurs de cet attribut contiennent généralement un point (.) pour aligner des nombres ou des valeurs monétaires. Si l'attribut `align` ne vaut pas `char`, l'attribut est ignoré.

    > [!NOTE]
    > Cet attribut est obsolète et il est donc fortement déconseillé de l'utiliser. De fait, il n'est pas supporté par le dernier standard. Pour réaliser le même effet qu'avec `char`, on peut utiliser la même valeur sur la propriété CSS [`text-align`](/fr/docs/Web/CSS/Reference/Properties/text-align).

- `charoff` {{deprecated_inline}}
  - : Cet attribut est utilisé pour indiquer le décalage, en nombre de caractères, depuis le caractère défini par l'attribut `char` à appliquer au contenu des cellules.

    > [!NOTE]
    > Cet attribut ne doit plus être utilisé, car il est maintenant obsolète.

- `height` {{deprecated_inline}}
  - : Cet attribut est utilisé afin de définir une hauteur recommandée pour la cellule.

    > [!NOTE]
    > Cet attribut est désormais obsolète. On utilisera plutôt la propriété CSS [`height`](/fr/docs/Web/CSS/Reference/Properties/height) à la place.

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

    > [!NOTE]
    > Cet attribut est obsolète dans le dernier standard, la propriété CSS [`vertical-align`](/fr/docs/Web/CSS/Reference/Properties/vertical-align) doit être utilisée à la place.

- `width` {{deprecated_inline}}
  - : Cet attribut est utilisé afin de définir une largeur de cellule recommandée. Un espace supplémentaire peut être ajouté via les propriétés [`cellspacing`](/fr/docs/Web/API/HTMLTableElement/cellSpacing) et [`cellpadding`](/fr/docs/Web/API/HTMLTableElement/cellPadding) et en modifiant la largeur de l'élément [`<col>`](/fr/docs/Web/HTML/Reference/Elements/col). Si la largeur de la colonne est trop étroite pour afficher une cellule donnée correctement, elle sera élargie lors de l'affichage.

    > [!NOTE]
    > Cet attribut est désormais obsolète et il faut donc éviter de l'utiliser. On utilisera plutôt la propriété CSS [`width`](/fr/docs/Web/CSS/Reference/Properties/width) à la place.

## Exemples

Voir la page [`<table>`](/fr/docs/Web/HTML/Reference/Elements/table) pour des exemples d'utilisation de l'élément `<th>`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments HTML relatifs aux tableaux&nbsp;:
  - [`<caption>`](/fr/docs/Web/HTML/Reference/Elements/caption)
  - [`<col>`](/fr/docs/Web/HTML/Reference/Elements/col)
  - [`<colgroup>`](/fr/docs/Web/HTML/Reference/Elements/colgroup)
  - [`<table>`](/fr/docs/Web/HTML/Reference/Elements/table)
  - [`<tbody>`](/fr/docs/Web/HTML/Reference/Elements/tbody)
  - [`<td>`](/fr/docs/Web/HTML/Reference/Elements/td)
  - [`<tfoot>`](/fr/docs/Web/HTML/Reference/Elements/tfoot)
  - [`<thead>`](/fr/docs/Web/HTML/Reference/Elements/thead)
  - [`<tr>`](/fr/docs/Web/HTML/Reference/Elements/tr).
