---
title: "<thead> : l'élément d'en-tête du tableau"
slug: Web/HTML/Reference/Elements/thead
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

L'élément [HTML](/fr/docs/Web/HTML) **`<thead>`** encapsule un ensemble de lignes de tableau (éléments {{HTMLElement("tr")}}), indiquant qu'elles constituent l'en-tête d'un tableau contenant des informations sur les colonnes du tableau. Il s'agit généralement d'en-têtes de colonnes (éléments {{HTMLElement("th")}}).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;thead&gt;", "tabbed-taller")}}

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

Les attributs suivants sont obsolètes et ne doivent pas être utilisés. Ils sont documentés ci-dessous à titre de référence lors de la mise à jour de code existant et pour des raisons historiques uniquement.

- `align` {{Deprecated_Inline}}
  - : Définit l'alignement horizontal de chaque cellule d'en-tête. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `left`, `center`, `right`, `justify` et `char`. Lorsque cela est pris en charge, la valeur `char` aligne le contenu textuel sur le caractère défini dans l'attribut [`char`](#char) et sur le décalage défini par l'attribut [`charoff`](#charoff). Utilisez plutôt la propriété CSS {{CSSxRef("text-align")}}, car cet attribut est obsolète.

- `bgcolor` {{Deprecated_Inline}}
  - : Définit la couleur d'arrière-plan de chaque cellule d'en-tête. La valeur est une couleur HTML&nbsp;; soit un [code RGB hexadécimal à 6 chiffres](/fr/docs/Web/CSS/Reference/Values/hex-color), préfixé d'un `#`, soit un [mot-clé de couleur](/fr/docs/Web/CSS/Reference/Values/named-color). Les autres valeurs CSS {{CSSxRef("&lt;color&gt;")}} ne sont pas prises en charge. Utilisez la propriété CSS {{CSSxRef("background-color")}} à la place, car cet attribut est obsolète.

- `char` {{Deprecated_Inline}}
  - : Ne fait rien. Il était à l'origine destiné à définir l'alignement du contenu sur un caractère de chaque cellule d'en-tête. Si [`align`](#align) n'est pas défini à `char`, cet attribut est ignoré.

- `charoff` {{Deprecated_Inline}}
  - : Ne fait rien. Il était à l'origine destiné à définir le nombre de caractères de décalage du contenu de la cellule d'en-tête par rapport au caractère d'alignement défini par l'attribut [`char`](#char).

- `valign` {{Deprecated_Inline}}
  - : Définit l'alignement vertical de chaque cellule d'en-tête. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `baseline`, `bottom`, `middle` et `top`. Utilisez la propriété CSS {{CSSxRef("vertical-align")}} à la place, car cet attribut est obsolète.

## Notes d'utilisation

- L'élément `<thead>` est placé après tout élément {{HTMLElement("caption")}} et {{HTMLElement("colgroup")}}, mais avant tout élément {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} et {{HTMLElement("tr")}}.
- Avec ses éléments associés {{HTMLElement("tbody")}} et {{HTMLElement("tfoot")}}, l'élément `<thead>` fournit des informations {{Glossary("semantics", "sémantiques")}} utiles et peut être utilisé lors du rendu à l'écran ou à l'impression. La définition de tels groupes de contenu de tableau apporte également des informations contextuelles précieuses pour les technologies d'assistance, y compris les lecteurs d'écran et les moteurs de recherche.
- Lors de l'impression d'un document, dans le cas d'un tableau sur plusieurs pages, l'en-tête du tableau indique généralement des informations qui restent identiques sur chaque page.

## Exemples

Voir {{HTMLElement("table")}} pour un exemple complet de tableau présentant les standards courants et les bonnes pratiques.

### Structure d'en-tête simple

Cet exemple montre un tableau divisé en une section d'en-tête avec des en-têtes de colonnes et une section de corps avec les données principales du tableau.

#### HTML

Les éléments `<thead>` et {{HTMLElement("tbody")}} sont utilisés pour structurer les lignes du tableau en sections {{Glossary("semantics", "sémantiques")}}. L'élément `<thead>` représente la section d'en-tête du tableau, qui contient une ligne ({{HTMLElement("tr")}}) de cellules d'en-tête de colonnes ({{HTMLElement("th")}}).

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
</table>
```

#### CSS

Quelques règles CSS de base sont utilisées pour mettre en forme et mettre en valeur l'en-tête du tableau afin que les titres des colonnes se distinguent des données du corps du tableau.

```css
thead {
  border-bottom: 2px solid rgb(160 160 160);
  text-align: center;
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

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Résultat

{{EmbedLiveSample("Structure d'en-tête simple", 650, 140)}}

### Lignes d'en-tête multiples

Cet exemple montre une section d'en-tête de tableau comportant deux lignes.

#### HTML

Nous étendons la structure du tableau du [premier exemple](#structure_d'en-tête_simple) en incluant deux lignes de tableau ({{HTMLElement("tr")}}) dans l'élément `<thead>`, créant ainsi un en-tête de tableau à plusieurs lignes. Nous avons ajouté une colonne supplémentaire, séparant les noms d'étudiant·e·s en prénom et nom.

```html
<table>
  <thead>
    <tr>
      <th rowspan="2">Identifiant de l'étudiant</th>
      <th colspan="2">Étudiant</th>
      <th rowspan="2">Spécialité</th>
      <th rowspan="2">Crédits</th>
    </tr>
    <tr>
      <th>Prénom</th>
      <th>Nom</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Martha</td>
      <td>Jones</td>
      <td>Informatique</td>
      <td>240</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Victor</td>
      <td>Nim</td>
      <td>Littérature</td>
      <td>220</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Alexandra</td>
      <td>Petrov</td>
      <td>Astrophysique</td>
      <td>260</td>
    </tr>
  </tbody>
</table>
```

#### Extension de cellules

Pour associer et aligner les cellules d'en-tête avec les bonnes colonnes et lignes, les attributs [`colspan`](/fr/docs/Web/HTML/Reference/Elements/th#colspan) et [`rowspan`](/fr/docs/Web/HTML/Reference/Elements/th#rowspan) sont utilisés sur les éléments {{HTMLElement("th")}}. Les valeurs définies dans ces attributs indiquent combien de cellules chaque cellule d'en-tête ({{HTMLElement("th")}}) occupe. En raison de la façon dont ces attributs sont définis, les deux cellules d'en-tête de la deuxième ligne sont alignées avec les colonnes qu'elles surplombent. Chacune occupe une ligne et une colonne, car les valeurs par défaut des attributs [`colspan`](/fr/docs/Web/HTML/Reference/Elements/th#colspan) et [`rowspan`](/fr/docs/Web/HTML/Reference/Elements/th#rowspan) sont toutes deux `1`.

L'extension de colonnes et de lignes démontrée par cet exemple est illustrée dans la figure suivante&nbsp;:

![Illustration démontrant l'extension de colonnes et de lignes des cellules de tableau : les cellules 1, 3 et 4 s'étendent chacune sur une colonne et deux lignes ; la cellule 2 s'étend sur deux colonnes et une ligne ; les cellules 5 et 6 occupent chacune une seule ligne et colonne, s'insérant dans les cellules disponibles qui sont la deuxième et la troisième colonne de la deuxième ligne](/shared-assets/images/diagrams/html/table/column-row-span.png)

#### CSS

Le CSS est inchangé par rapport au [premier exemple](#structure_d'en-tête_simple).

```css hidden
thead {
  border-bottom: 2px solid rgb(160 160 160);
  background-color: #2c5e77;
  color: white;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

tbody {
  background-color: #e4f0f5;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Résultat

{{EmbedLiveSample("Extension de cellules", 650, 180)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Zéro ou plusieurs éléments {{HTMLElement("tr")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire. La balise de fin peut être absente si l'élément <code>&lt;thead&gt;</code> est immédiatement suivi par un élément {{HTMLElement("tbody")}} ou par un élément {{HTMLElement("tfoot")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("table")}}. L'élément <code>&lt;thead&gt;</code> doit apparaître après tout élément {{HTMLElement("caption")}} ou {{HTMLElement("colgroup")}}, qui est défini implicitement, il doit apparaître avant tout élément {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} et {{HTMLElement("tr")}}.
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
- Les autres éléments HTML liés aux tableaux&nbsp;: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}
- La propriété CSS {{CSSxRef("background-color")}} pour définir la couleur d'arrière-plan de chaque cellule d'en-tête
- La propriété CSS {{CSSxRef("border")}} pour contrôler les bordures des cellules d'en-tête
- La propriété CSS {{CSSxRef("text-align")}} pour aligner horizontalement le contenu de chaque cellule d'en-tête
- La propriété CSS {{CSSxRef("vertical-align")}} pour aligner verticalement le contenu de chaque cellule d'en-tête
