---
title: "<tfoot> : l'élément de pied de tableau"
slug: Web/HTML/Reference/Elements/tfoot
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

L'élément [HTML](/fr/docs/Web/HTML) **`<tfoot>`** encapsule un ensemble de lignes de tableau (éléments {{HTMLElement("tr")}}), indiquant qu'elles constituent le pied d'un tableau avec des informations sur les colonnes du tableau. Il s'agit généralement d'un récapitulatif des colonnes, par exemple une somme des nombres présents dans une colonne.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;tfoot&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Budget du conseil (en livres sterling) 2018
  </caption>
  <thead>
    <tr>
      <th scope="col">Articles</th>
      <th scope="col">Dépenses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Beignets</th>
      <td>3 000</td>
    </tr>
    <tr>
      <th scope="row">Fournitures de bureau</th>
      <td>18 000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>21 000</td>
    </tr>
  </tfoot>
</table>
```

```css interactive-example
thead,
tfoot {
  background-color: #2c5e77;
  color: white;
}

tbody {
  background-color: #e4f0f5;
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

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td {
  text-align: center;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

### Attributs obsolètes

Les attributs qui suivent sont dépréciés et ne devraient pas être utilisés. Ils sont uniquement documentés à des fins historiques et pour la mise à jour du code existant qui les utiliserait.

- `align` {{Deprecated_Inline}}
  - : Définit l'alignement horizontal de chaque cellule du pied de tableau. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `left`, `center`, `right`, `justify` et `char`. Lorsque cela est pris en charge, la valeur `char` aligne le contenu textuel sur le caractère défini dans l'attribut [`char`](#char) et sur le décalage défini par l'attribut [`charoff`](#charoff). Utilisez plutôt la propriété CSS {{CSSxRef("text-align")}}, car cet attribut est obsolète.

- `bgcolor` {{Deprecated_Inline}}
  - : Définit la couleur d'arrière-plan de chaque cellule du pied de tableau. La valeur est une couleur HTML&nbsp;; soit un [code RGB hexadécimal à 6 chiffres](/fr/docs/Web/CSS/Reference/Values/hex-color), préfixé d'un `#`, soit un [mot-clé de couleur](/fr/docs/Web/CSS/Reference/Values/named-color). Les autres valeurs CSS {{CSSxRef("&lt;color&gt;")}} ne sont pas prises en charge. Utilisez la propriété CSS {{CSSxRef("background-color")}} à la place, car cet attribut est obsolète.

- `char` {{Deprecated_Inline}}
  - : Ne fait rien. Il était à l'origine destiné à définir l'alignement du contenu sur un caractère de chaque cellule du pied de tableau. Les valeurs typiques incluent un point (`.`) pour aligner des nombres ou des valeurs monétaires. Si [`align`](#align) n'est pas défini à `char`, cet attribut est ignoré.

- `charoff` {{Deprecated_Inline}}
  - : Ne fait rien. Il était à l'origine destiné à définir le nombre de caractères de décalage du contenu de la cellule du pied de tableau par rapport au caractère d'alignement défini par l'attribut [`char`](#char).

- `valign` {{Deprecated_Inline}}
  - : Définit l'alignement vertical de chaque cellule du pied de tableau. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `baseline`, `bottom`, `middle` et `top`. Utilisez la propriété CSS {{CSSxRef("vertical-align")}} à la place, car cet attribut est obsolète.

## Notes d'utilisation

- L'élément `<tfoot>` est placé après les éléments {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} et {{HTMLElement("tr")}}.
- Avec les éléments associés {{HTMLElement("thead")}} et {{HTMLElement("tbody")}}, l'élément `<tfoot>` fournit des informations {{Glossary("semantics", "sémantiques")}} utiles et peut être utilisé lors de l'affichage à l'écran ou à l'impression. Définir de tels groupes de contenu de tableau fournit également des informations contextuelles précieuses pour les technologies d'assistance, y compris les lecteurs d'écran et les moteurs de recherche.
- Lors de l'impression d'un document, dans le cas d'un tableau sur plusieurs pages, le pied du tableau indique généralement des informations qui sont affichées comme un récapitulatif intermédiaire sur chaque page.

## Exemples

Voir {{HTMLElement("table")}} pour un exemple complet de tableau présentant les standards courants et les bonnes pratiques.

### Tableau avec pied de tableau

Cet exemple montre un tableau divisé en une section d'en-tête avec les en-têtes de colonnes, une section de corps avec les données principales du tableau, et une section de pied récapitulant les données d'une colonne.

#### HTML

Les éléments {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} et `<tfoot>` servent à structurer un tableau de base en sections {{Glossary("semantics", "sémantiques")}}. L'élément `<tfoot>` représente la section de pied du tableau, qui contient une ligne ({{HTMLElement("tr")}}) représentant la moyenne calculée des valeurs de la colonne «&nbsp;Crédits&nbsp;».

Pour placer les cellules du pied dans les bonnes colonnes, l'attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/th#colspan) est utilisé sur l'élément {{HTMLElement("th")}} pour étendre la cellule d'en-tête de ligne sur les trois premières colonnes du tableau. La seule cellule de données ({{HTMLElement("td")}}) du pied est automatiquement placée à l'endroit approprié, c'est-à-dire la quatrième colonne, la valeur omise de l'attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/td#colspan) étant par défaut `1`. De plus, l'attribut [`scope`](/fr/docs/Web/HTML/Reference/Elements/th#scope) est défini à `row` sur la cellule d'en-tête ({{HTMLElement("th")}}) du pied pour indiquer explicitement que cette cellule d'en-tête du pied est liée aux cellules du tableau de la même ligne, qui dans notre exemple est la seule cellule de données de la ligne du pied contenant la moyenne calculée.

```html
<table>
  <thead>
    <tr>
      <th>Identifiant de l'étudiant</th>
      <th>Nom</th>
      <th>Spécialité</th>
      <th>Crédits</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
      <td>Informatique</td>
      <td>240</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
      <td>Littérature</td>
      <td>220</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
      <td>Astrophysique</td>
      <td>260</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="3" scope="row">Crédits moyens</th>
      <td>240</td>
    </tr>
  </tfoot>
</table>
```

#### CSS

Quelques règles CSS de base sont utilisées pour mettre en forme et mettre en valeur le pied du tableau afin que les cellules du pied se distinguent des données du corps du tableau.

```css
tfoot {
  border-top: 3px dotted rgb(160 160 160);
  background-color: #2c5e77;
  color: white;
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}

thead {
  border-bottom: 2px solid rgb(160 160 160);
  background-color: #2c5e77;
  color: white;
}

tbody {
  background-color: #e4f0f5;
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

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tr > td:last-of-type {
  text-align: center;
}
```

#### Résultat

{{EmbedLiveSample("Exemples", 650, 180)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Zéro ou plusieurs éléments {{HTMLElement("tr")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire. La balise de fin peut être absente s'il n'y a plus d'autre contenu dans l'élément {{HTMLElement("table")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("table")}}. L'élément <code>&lt;tfoot&gt;</code> doit apparaître après l'élément {{HTMLElement("caption")}}, l'élément {{HTMLElement("colgroup")}} ou l'élément {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} ou {{HTMLElement("tr")}}. En HTML4, l'élément <code>&lt;tfoot&gt;</code> ne peut pas être placé après un élément {{HTMLElement("tbody")}} ou {{HTMLElement("tr")}} (ce qui contredit la règle imposée en HTML5).
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role"
            >rowgroup</a
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
      <td>{{DOMxRef("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: bases des tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- Les autres éléments HTML relatifs aux tableaux&nbsp;: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}
- Propriété CSS {{CSSxRef("background-color")}} pour définir la couleur d'arrière-plan de chaque cellule du pied de tableau
- Propriété CSS {{CSSxRef("border")}} pour contrôler les bordures des cellules du pied de tableau
- Propriété CSS {{CSSxRef("text-align")}} pour aligner horizontalement le contenu de chaque cellule du pied de tableau
- Propriété CSS {{CSSxRef("vertical-align")}} pour aligner verticalement le contenu de chaque cellule du pied de tableau
