---
title: "<tr> : l'élément de ligne d'un tableau"
slug: Web/HTML/Reference/Elements/tr
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

L'élément [HTML](/fr/docs/Web/HTML) **`<tr>`** définit une ligne de cellules dans un tableau. Les cellules de la ligne peuvent ensuite être créées à l'aide d'une combinaison d'éléments {{HTMLElement("td")}} (cellule de données) et {{HTMLElement("th")}} (cellule d'en-tête).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;tr&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Budget du conseil (en livres sterling) 2018
  </caption>
  <tr>
    <th scope="col">Articles</th>
    <th scope="col">Dépenses</th>
  </tr>
  <tr>
    <th scope="row">Beignets</th>
    <td>3 000</td>
  </tr>
  <tr>
    <th scope="row">Fournitures de bureau</th>
    <td>18 000</td>
  </tr>
  <tr>
    <th scope="row">Total</th>
    <td>21 000</td>
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

### Attributs obsolètes

Les attributs suivants sont obsolètes et ne doivent plus être utilisés. Ils sont documentés ci-dessous uniquement pour référence lors de la mise à jour de code existant et pour leur intérêt historique.

- `align` {{Deprecated_Inline}}
  - : Définit l'alignement horizontal de chaque cellule de la ligne. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `left`, `center`, `right`, `justify` et `char`. Lorsque pris en charge, la valeur `char` aligne le contenu textuel sur le caractère défini dans l'attribut [`char`](#char) et sur le décalage défini par l'attribut [`charoff`](#charoff). Il faut utiliser la propriété CSS {{CSSxRef("text-align")}} à la place, car cet attribut est obsolète.

- `bgcolor` {{Deprecated_Inline}}
  - : Définit la couleur d'arrière-plan de chaque cellule de la ligne. La valeur est une couleur HTML&nbsp;; soit un [code RGB hexadécimal à 6 chiffres](/fr/docs/Web/CSS/Reference/Values/hex-color), précédé d'un `#`, soit un [mot-clé de couleur](/fr/docs/Web/CSS/Reference/Values/named-color). Les autres valeurs CSS {{CSSxRef("&lt;color&gt;")}} ne sont pas prises en charge. Utilisez la propriété CSS {{CSSxRef("background-color")}} à la place, car cet attribut est obsolète.

- `char` {{Deprecated_Inline}}
  - : Définit l'alignement du contenu sur un caractère de chaque cellule de la ligne. Les valeurs typiques incluent un point (`.`) lorsqu'on souhaite aligner des nombres ou des valeurs monétaires. Si [`align`](#align) n'est pas défini sur `char`, cet attribut est ignoré.

- `charoff` {{Deprecated_Inline}}
  - : Définit le nombre de caractères à afficher après le caractère d'alignement défini par l'attribut [`char`](#char).

- `valign` {{Deprecated_Inline}}
  - : Définit l'alignement vertical de chaque cellule de la ligne. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `baseline`, `bottom`, `middle` et `top`. Il faut utiliser la propriété CSS {{CSSxRef("vertical-align")}} à la place, car cet attribut est obsolète.

## Notes d'utilisation

- L'élément `<tr>` n'est valide qu'en tant qu'enfant d'un élément {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} ou {{HTMLElement("tfoot")}}.
- Si le `<tr>` est placé directement comme enfant de son parent {{HTMLElement("table")}}, le parent `<tbody>` est implicite et les navigateurs ajoutent le `<tbody>` au balisage.
- Le parent `<tbody>` implicite n'est pris en charge que si le `<table>` ne comporte pas déjà d'enfant `<tbody>`, et uniquement si le `<tr>` est inclus après tout élément {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} et `<thead>`.
- Les pseudo-classes CSS {{CSSxRef(":nth-of-type")}}, {{CSSxRef(":first-of-type")}} et {{CSSxRef(":last-of-type")}} sont souvent utiles pour sélectionner l'ensemble souhaité de lignes et leurs cellules de données et d'en-tête (éléments {{HTMLElement("td")}} et {{HTMLElement("th")}}).
- Lorsqu'un `<tr>` est inclus comme enfant direct du `<table>`, le navigateur ajoute un `<tbody>` au balisage, les sélecteurs CSS comme `table > tr` peuvent ne pas fonctionner comme prévu, voire pas du tout.

## Exemples

Voir {{HTMLElement("table")}} pour un exemple complet de tableau présentant les standards courants et les bonnes pratiques.

### Configuration de base d'une ligne

Cet exemple montre un tableau avec quatre lignes et trois colonnes, où la première colonne contient les en-têtes pour les cellules de données des lignes.

#### HTML

```html
<table>
  <tbody>
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
  </tbody>
</table>
```

#### CSS

La pseudo-classe CSS {{CSSxRef(":nth-of-type")}} est utilisée pour sélectionner chaque ligne `impair` et définir la {{CSSxRef("background-color")}} de ces lignes sur une teinte légèrement plus foncée, créant un effet «&nbsp;zebra stripe&nbsp;». Ce fond alterné rend les lignes de données du tableau plus faciles à lire et à parcourir — imaginez avoir de nombreuses lignes et colonnes et essayer de trouver une donnée dans une ligne particulière. De plus, les cellules d'en-tête de ligne (éléments {{HTMLElement("th")}}) sont mises en évidence avec une {{CSSxRef("background-color")}} pour les distinguer des cellules de données (éléments {{HTMLElement("td")}}).

```css
tr:nth-of-type(odd) {
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

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### Résultat

{{EmbedLiveSample("Configuration de base d'une ligne", 650, 140)}}

### Ligne d'en-tête

Cet exemple étend le tableau de base du [exemple précédent](#configuration_de_base_d'une_ligne) en ajoutant une ligne d'en-tête comme première ligne du tableau.

#### HTML

Une ligne supplémentaire de tableau (`<tr>`) est ajoutée en première position avec des cellules d'en-tête de colonne (éléments {{HTMLElement("th")}}) fournissant une en-tête pour chaque colonne. Cette ligne est placée dans un élément de regroupement {{HTMLElement("thead")}} pour indiquer qu'il s'agit de l'en-tête du tableau. L'attribut [`scope`](/fr/docs/Web/HTML/Reference/Elements/th#scope) est ajouté à chaque cellule d'en-tête (`<th>`) de cette ligne d'en-tête afin d'indiquer explicitement que chaque cellule d'en-tête concerne toutes les cellules de sa propre colonne, même si ces cellules se trouvent dans le {{HTMLElement("tbody")}}.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Symbole</th>
      <th scope="col">Mot code</th>
      <th scope="col">Prononciation</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>
```

#### CSS

Le CSS est presque inchangé par rapport à [l'exemple précédent](#configuration_de_base_d'une_ligne), à l'exception de quelques mises en forme supplémentaires pour mettre en évidence la «&nbsp;ligne d'en-tête&nbsp;» afin que les en-têtes des colonnes se distinguent des autres cellules.

```css
tr:nth-of-type(odd) {
  background-color: #eeeeee;
}

tr th[scope="col"] {
  background-color: #505050;
  color: white;
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

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### Résultat

{{EmbedLiveSample("Ligne d'en-tête", 650, 170)}}

### Trier les lignes

Il n'existe aucune méthode native pour trier les lignes (`<tr>`) d'un élément {{HTMLElement("table")}}. Cependant, en utilisant {{JSxRef("Array.prototype.sort()")}}, {{DOMxRef("Node.removeChild")}} et {{DOMxRef("Node.appendChild")}}, il est possible d'implémenter une fonction personnalisée `sort()` en JavaScript pour trier une {{DOMxRef("HTMLCollection")}} de lignes `<tr>`.

#### HTML

Un élément {{HTMLElement("tbody")}} est utilisé dans ce tableau de base pour marquer la section du corps du tableau et inclure trois lignes (`<tr>`) contenant des données (éléments {{HTMLElement("td")}}), créant une colonne avec des nombres en ordre décroissant.

```html
<table>
  <tbody>
    <tr>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

Dans le code JavaScript ci-dessous, la fonction `sort()` créée est attachée à l'élément {{HTMLElement("tbody")}} afin de trier les cellules du tableau par ordre croissant et de mettre à jour l'affichage en conséquence.

```js
HTMLTableSectionElement.prototype.sort = function (cb) {
  Array.from(this.rows)
    .sort(cb)
    .forEach((e) => this.appendChild(this.removeChild(e)));
};

document
  .querySelector("table")
  .tBodies[0].sort((a, b) => a.textContent.localeCompare(b.textContent));
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 8px;
}
```

#### Résultat

{{EmbedLiveSample('Trier les lignes', 650, 80)}}

### Trier les lignes par clic sur les cellules d'en-tête

Cet exemple étend le tableau de base du [exemple précédent](#trier_les_lignes) en rendant le tri interactif et indépendant pour plusieurs colonnes.

#### HTML

Une cellule de données supplémentaire (élément {{HTMLElement("td")}}) est ajoutée à chaque ligne (`<tr>`) du corps du tableau (élément {{HTMLElement("tbody")}}) afin de créer une seconde colonne avec des lettres en ordre croissant. Grâce à l'élément {{HTMLElement("thead")}}, une section d'en-tête est ajoutée avant la section du corps pour introduire une ligne d'en-tête avec des cellules d'en-tête de tableau (éléments {{HTMLElement("th")}}). Ces cellules d'en-tête sont utilisées dans le code JavaScript ci-dessous pour les rendre cliquables et effectuer le tri correspondant lors de l'activation au clic.

```html
<table>
  <thead>
    <tr>
      <th>Nombres</th>
      <th>Lettres</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3</td>
      <td>A</td>
    </tr>
    <tr>
      <td>2</td>
      <td>B</td>
    </tr>
    <tr>
      <td>1</td>
      <td>C</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

Un gestionnaire d'évènement de clic est ajouté à chaque cellule d'en-tête de tableau (élément {{HTMLElement("th")}}) de chaque {{HTMLElement("table")}} dans le {{DOMxRef("HTMLDocument", "document")}}&nbsp;; il trie toutes les lignes (`<tr>`) du {{HTMLElement("tbody")}} en fonction du contenu des cellules de données (éléments {{HTMLElement("td")}}) contenues dans les lignes.

> [!NOTE]
> Cette solution suppose que les éléments {{HTMLElement("td")}} sont remplis par du texte brut sans éléments descendants.

```js
const allTables = document.querySelectorAll("table");

for (const table of allTables) {
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.rows);
  const headerCells = table.tHead.rows[0].cells;

  for (const th of headerCells) {
    const cellIndex = th.cellIndex;

    th.addEventListener("click", () => {
      rows.sort((tr1, tr2) => {
        const tr1Text = tr1.cells[cellIndex].textContent;
        const tr2Text = tr2.cells[cellIndex].textContent;
        return tr1Text.localeCompare(tr2Text);
      });

      tBody.append(...rows);
    });
  }
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
  padding: 4px 8px;
}

th {
  background-color: #505050;
  color: white;
  cursor: pointer;
}
```

#### Result

{{EmbedLiveSample("Trier les lignes par clic sur les cellules d'en-tête", 650, 100)}}

> [!NOTE]
> Pour être utilisable et accessible, la cellule d'en-tête de chaque colonne triable doit être identifiable comme un bouton de tri et chacune doit indiquer visuellement et avec l'attribut [`aria-sort`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) si la colonne est actuellement triée par ordre croissant ou décroissant. Consultez le [Guide de bonnes pratiques ARIA <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/) et l'[exemple de tableau triable <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) pour plus d'informations.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Zéro ou plusieurs éléments {{HTMLElement("td")}} et/ou
        {{HTMLElement("th")}}&nbsp;;
        {{Glossary("script-supporting element", "éléments de support de script")}}
        ({{HTMLElement("script")}} et
        {{HTMLElement("template")}}) sont également autorisés.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire. La balise de fin peut être absente
        si l'élément <code>&lt;tr&gt;</code> est immédiatement suivi par un
        élément <code>&lt;tr&gt;</code> ou si l'élément du groupe parent ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}
        ou {{HTMLElement("tfoot")}}) n'a plus d'autre contenu.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        {{HTMLElement("table")}} (uniquement si le tableau ne possède pas d'élément
        {{HTMLElement("tbody")}} enfant, et uniquement après tout
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, et
        {{HTMLElement("thead")}})&nbsp;; sinon, le parent doit
        être un élément {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} ou
        {{HTMLElement("tfoot")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role"
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
      <td>{{DOMxRef("HTMLTableRowElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: les tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- Les autres éléments HTML relatifs aux tableaux&nbsp;: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}
- La propriété CSS {{CSSxRef("background-color")}} pour définir la couleur d'arrière-plan de chaque cellule de ligne
- La propriété CSS {{CSSxRef("border")}} pour contrôler les bordures des cellules de ligne
- La propriété CSS {{CSSxRef("text-align")}} pour aligner horizontalement le contenu de chaque cellule de ligne
- La propriété CSS {{CSSxRef("vertical-align")}} pour aligner verticalement le contenu de chaque cellule de ligne
- Les pseudo-classes CSS {{CSSxRef(":nth-of-type")}}, {{CSSxRef(":first-of-type")}}, {{CSSxRef(":last-of-type")}} pour sélectionner les cellules de ligne souhaitées
