---
title: "<td> : l'élément de cellule de tableau"
slug: Web/HTML/Reference/Elements/td
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

L'élément [HTML](/fr/docs/Web/HTML) **`<td>`** définit une cellule d'un tableau qui contient des données et peut être utilisé comme enfant de l'élément {{HTMLElement("tr")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;td&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Stars du football extraterrestre
  </caption>
  <thead>
    <tr>
      <th scope="col">Joueur·euse</th>
      <th scope="col">Gloobles</th>
      <th scope="col">Za'taak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">TR-7</th>
      <td>7</td>
      <td>4 569</td>
    </tr>
    <tr>
      <th scope="row">Khiresh Odo</th>
      <td>7</td>
      <td>7 223</td>
    </tr>
    <tr>
      <th scope="row">Mia Oolong</th>
      <td>9</td>
      <td>6 219</td>
    </tr>
  </tbody>
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
  color: white;
}

th[scope="row"] {
  background-color: #d6ecd4;
}

td {
  text-align: center;
}

tr:nth-of-type(even) {
  background-color: #eeeeee;
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

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `colspan`
  - : Cet attribut contient un entier positif indiquant le nombre de colonnes sur lesquelles s'étend la cellule. La valeur par défaut est `1`. Des valeurs supérieures à 1000 peuvent être considérées comme incorrectes et seront interprétées comme valant la valeur par défaut (`1`).
- `headers`
  - : Cet attribut est une liste de chaînes de caractères séparées par des espaces. Chacune correspond à l'attribut `id` de l'élément {{HTMLElement("th")}} qui s'applique à la cellule courante.
- `rowspan`
  - : Cet attribut contient un entier positif indiquant sur combien de lignes s'étend la cellule. La valeur par défaut est `1`. Si cet attribut vaut `0`, la cellule s'étend jusqu'à la fin de la section ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, du tableau à laquelle appartient la cellule même si cette section est définie implicitement). Les valeurs supérieures à `65534` sont ramenées à `65534`.

### Attributs obsolètes

Les attributs suivants sont obsolètes et ne doivent pas être utilisés. Ils sont documentés ci-dessous uniquement pour référence lors de la mise à jour de code existant et pour des raisons historiques.

- `abbr` {{Deprecated_Inline}}
  - : Contient une courte description abrégée du contenu de la cellule de données. Certains agents utilisateurs, comme les lecteurs vocaux, peuvent présenter cette description avant le contenu lui-même. Placez le contenu abrégé dans la cellule et la description (plus longue) dans l'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title), car cet attribut est obsolète. Ou, de préférence, incluez le contenu dans la cellule de données et utilisez le CSS pour [masquer visuellement le texte débordant](/fr/docs/Web/CSS/Reference/Properties/text-overflow).

- `align` {{Deprecated_Inline}}
  - : Définit l'alignement horizontal de la cellule de données. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `left`, `center`, `right`, `justify` et `char`. Lorsque cela est pris en charge, la valeur `char` aligne le contenu textuel sur le caractère défini dans l'attribut [`char`](#char) et sur le décalage défini par l'attribut [`charoff`](#charoff). Utilisez la propriété CSS {{CSSxRef("text-align")}} à la place, car cet attribut est obsolète.

- `axis` {{Deprecated_Inline}}
  - : Contient une liste de chaînes de caractères séparées par des espaces, chacune correspondant à l'attribut `id` d'un groupe de cellules auquel la cellule de données s'applique.

- `bgcolor` {{Deprecated_Inline}}
  - : Définit la couleur d'arrière-plan de la cellule de données. La valeur est une couleur HTML&nbsp;; soit un [code hexadécimal RGB à 6 chiffres](/fr/docs/Web/CSS/Reference/Values/hex-color) précédé d'un `#`, soit un [mot-clé de couleur](/fr/docs/Web/CSS/Reference/Values/named-color). Les autres valeurs CSS {{CSSxRef("&lt;color&gt;")}} ne sont pas prises en charge. Utilisez la propriété CSS {{CSSxRef("background-color")}} à la place, car cet attribut est obsolète.

- `char` {{Deprecated_Inline}}
  - : Ne fait rien. Il était initialement prévu pour définir l'alignement du contenu sur un caractère de la cellule de données. Les valeurs typiques incluent un point (`.`) pour aligner des nombres ou des valeurs monétaires. Si [`align`](#align) n'est pas défini sur `char`, cet attribut est ignoré.

- `charoff` {{Deprecated_Inline}}
  - : Ne fait rien. Il était initialement prévu pour définir le nombre de caractères de décalage du contenu de la cellule de données par rapport au caractère d'alignement défini par l'attribut [`char`](#char).

- `height` {{Deprecated_Inline}}
  - : Définit une hauteur recommandée pour la cellule de données. Utilisez la propriété CSS {{CSSxRef("height")}} à la place, car cet attribut est obsolète.

- `scope` {{Deprecated_Inline}}
  - : Définit les cellules auxquelles l'en-tête (défini dans l'élément {{HTMLElement("th")}}) est lié. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `row`, `col`, `rowgroup` et `colgroup`. Utilisez uniquement cet attribut avec l'élément {{HTMLElement("th")}} pour définir la ligne ou la colonne pour laquelle il est son en-tête, car cet attribut est obsolète pour l'élément `<td>`.

- `valign` {{Deprecated_Inline}}
  - : Définit l'alignement vertical de la cellule de données. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `baseline`, `bottom`, `middle` et `top`. Utilisez la propriété CSS {{CSSxRef("vertical-align")}} à la place, car cet attribut est obsolète.

- `width` {{Deprecated_Inline}}
  - : Définit une largeur recommandée pour la cellule de données. Utilisez la propriété CSS {{CSSxRef("width")}} à la place, car cet attribut est obsolète.

## Notes d'utilisation

- L'élément `<td>` ne peut être utilisé qu'au sein d'un élément {{HTMLElement("tr")}}.
- Lorsque vous utilisez les attributs [`colspan`](#colspan) et [`rowspan`](#rowspan) pour étendre des cellules de données sur plusieurs colonnes et lignes, les cellules sans ces attributs définis (avec une valeur par défaut de `1`) sont automatiquement ajustées dans les espaces disponibles de la structure du tableau qui couvrent des cellules 1x1, comme illustré dans la figure suivante&nbsp;:

  ![Illustration montrant l'extension de colonnes et de lignes des cellules de tableau : les cellules 1, 3 et 4 s'étendent sur deux lignes ; la cellule 2 s'étend sur deux colonnes ; les cellules 5 et 6 s'ajustent dans les cellules disponibles qui sont la deuxième et la troisième colonne de la deuxième ligne](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > Il est interdit d'utiliser ces attributs pour superposer des cellules.

## Exemples

Voir {{HTMLElement("table")}} pour un exemple complet de tableau présentant les standards courants et les bonnes pratiques.

### Cellules de données de base

Cet exemple utilise des éléments `<td>` avec d'autres éléments liés aux tableaux pour présenter un tableau simple contenant des données sur l'alphabet phonétique.

#### HTML

Certaines lignes de tableau (éléments {{HTMLElement("tr")}}) contiennent à la fois des cellules d'en-tête (éléments {{HTMLElement("th")}}) et des cellules de données `<td>`. L'élément {{HTMLElement("th")}} qui est le premier enfant de chaque ligne forme la première colonne du tableau, chaque `<th>` fournissant l'en-tête de ligne pour les cellules de données de cette ligne. Chaque élément `<td>` correspondant contient des données alignées avec son en-tête de colonne et son en-tête de ligne.

> [!NOTE]
> Normalement, un groupe d'en-tête de tableau avec des en-têtes de colonnes serait mis en place pour faciliter la compréhension des informations dans les colonnes. Les éléments {{HTMLElement("thead")}} et {{HTMLElement("tbody")}} seraient utilisés pour regrouper ces lignes d'en-tête et de données dans les sections respectives d'en-tête et de corps du tableau. Ce n'est pas mis en œuvre dans cet exemple afin de se concentrer sur les cellules de données et de réduire la complexité de l'exemple.

```html
<table>
  <tr>
    <th scope="row">A</th>
    <td>Anatole</td>
    <td>ANA tol</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Berthe</td>
    <td>BER t</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Célestine</td>
    <td>CÉ lest ine</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Désiré</td>
    <td>DÉ zi ré</td>
  </tr>
</table>
```

#### CSS

Un CSS de base est utilisé pour mettre en forme le tableau et ses cellules. Les [sélecteurs d'attributs](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) et la pseudo-classe CSS {{CSSxRef(":nth-of-type")}} sont utilisés pour alterner l'apparence des cellules afin de faciliter la compréhension et l'identification des informations du tableau.

```css
td,
th {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tr:nth-of-type(odd) td {
  background-color: #eeeeee;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
```

#### Résultat

{{EmbedLiveSample("Cellules de données de base", 650, 140)}}

### Extension sur colonnes et lignes

Cet exemple étend et améliore le tableau de base du [précédent exemple](#cellules_de_données_de_base) en ajoutant une cellule «&nbsp;ABC&nbsp;» supplémentaire.

#### HTML

Une cellule de données supplémentaire (`<td>`) est introduite dans la première ligne (élément {{HTMLElement("tr")}}). Cela crée une quatrième colonne dans le tableau.

En utilisant l'attribut [`rowspan`](#rowspan), la cellule «&nbsp;ABC&nbsp;» s'étend sur les trois premières lignes du tableau. Les dernières cellules de données des lignes suivantes s'étendent chacune sur deux colonnes. Cela est réalisé avec l'attribut [`colspan`](#colspan), les alignant correctement dans la structure du tableau. Notez qu'une ligne supplémentaire (élément {{HTMLElement("tr")}}) est ajoutée au tableau pour illustrer cela.

```html
<table>
  <tr>
    <th scope="row">A</th>
    <td>Anatole</td>
    <td>ANA tol</td>
    <td rowspan="3">ABC</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Berthe</td>
    <td>BER t</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Célestine</td>
    <td>CÉ lest ine</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Désiré</td>
    <td>DÉ zi ré</td>
  </tr>
  <tr>
    <th scope="row">E</th>
    <td>Eugène</td>
    <td colspan="2">EUH gène</td>
  </tr>
</table>
```

#### CSS

Les pseudo-classes {{CSSxRef(":first-of-type")}} et {{CSSxRef(":last-of-type")}} sont utilisées dans le CSS pour sélectionner et mettre en forme la cellule de données «&nbsp;ABC&nbsp;» ajoutée.

```css
tr:first-of-type td:last-of-type {
  width: 60px;
  background-color: #505050;
  color: white;
  font-weight: bold;
  text-align: center;
}

td,
th {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tr:nth-of-type(odd) td {
  background-color: #eeeeee;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
```

#### Résultat

{{EmbedLiveSample("Extension sur colonnes et lignes", 650, 170)}}

### Associer les cellules de données aux cellules d'en-tête

Pour des relations plus complexes entre les cellules de données (`<td>`) et les cellules d'en-tête ({{HTMLElement("th")}}), l'utilisation des éléments {{HTMLElement("th")}} avec l'attribut [`scope`](/fr/docs/Web/HTML/Reference/Elements/th#scope) seul peut ne pas suffire pour les technologies d'assistance, notamment les lecteurs d'écran.

#### HTML

Pour améliorer l'{{Glossary("accessibility", "accessibilité")}} du [précédent exemple](#extension_sur_colonnes_et_lignes) et permettre aux lecteurs d'écran, par exemple, d'énoncer les en-têtes associés à chaque cellule de données, l'attribut [`headers`](#headers) peut être introduit avec des attributs [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id). Chaque cellule d'en-tête de ligne (élément {{HTMLElement("th")}}) associée à la cellule de données «&nbsp;ABC&nbsp;», c'est-à-dire les lettres «&nbsp;A&nbsp;», «&nbsp;B&nbsp;» et «&nbsp;C&nbsp;», reçoit un identifiant unique avec l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id). La cellule de données «&nbsp;ABC&nbsp;» (`<td>`) utilise ensuite ces valeurs d'`id` dans une liste séparée par des espaces pour l'attribut [`headers`](#headers).

> [!NOTE]
> Il est recommandé d'utiliser des valeurs plus descriptives et utiles pour l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id). Chaque `id` dans un document doit être unique. Dans cet exemple, les valeurs d'`id` sont des caractères uniques afin de mettre l'accent sur le concept de l'attribut [`headers`](#headers).

```html
<table>
  <tr>
    <th id="a" scope="row">A</th>
    <td>Anatole</td>
    <td>ANA tol</td>
    <td headers="a b c" rowspan="3">ABC</td>
  </tr>
  <tr>
    <th id="b" scope="row">B</th>
    <td>Berthe</td>
    <td>BER t</td>
  </tr>
  <tr>
    <th id="c" scope="row">C</th>
    <td>Célestine</td>
    <td>CÉ lest ine</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Désiré</td>
    <td colspan="2">DÉ zi ré</td>
  </tr>
  <tr>
    <th scope="row">E</th>
    <td>Eugène</td>
    <td colspan="2">EUH gène</td>
  </tr>
</table>
```

#### Résultat

Bien que le [résultat visuel](#résultat_2) soit inchangé par rapport au [tableau de l'exemple précédent](#extension_sur_colonnes_et_lignes), chaque cellule de données (`<td>`) est désormais explicitement associée à sa cellule d'en-tête de ligne (`<th>`).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>Racine de section.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire.<br />La balise de fin peut être absente si l'élément est immédiatement suivi par un élément {{HTMLElement("th")}} ou <code>&lt;td&gt;</code> ou s'il n'y a plus aucune donnée dans l'élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément {{HTMLElement("tr")}}.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role"
            >cell</a
          ></code
        >
        si descendant d'un élément {{HTMLElement("table")}}, ou <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role"
            >gridcell</a
          ></code
        >
        si descendant d'un élément avec le rôle <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role"
            >grid</a
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
      <td>{{DOMxRef("HTMLTableCellElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: bases des tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- Autres éléments liés aux tableaux&nbsp;: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}
- La propriété CSS {{CSSxRef("background-color")}} pour définir la couleur d'arrière-plan de chaque cellule de données
- La propriété CSS {{CSSxRef("border")}} pour contrôler les bordures des cellules de données
- La propriété CSS {{CSSxRef("height")}} pour contrôler la hauteur recommandée de la cellule de données
- La propriété CSS {{CSSxRef("text-align")}} pour aligner horizontalement le contenu de chaque cellule de données
- La propriété CSS {{CSSxRef("vertical-align")}} pour aligner verticalement le contenu de chaque cellule de données
- La propriété CSS {{CSSxRef("width")}} pour contrôler la largeur recommandée de la cellule de données
- Les pseudo-classes CSS {{CSSxRef(":nth-of-type")}}, {{CSSxRef(":first-of-type")}}, {{CSSxRef(":last-of-type")}} pour sélectionner les cellules de données souhaitées
