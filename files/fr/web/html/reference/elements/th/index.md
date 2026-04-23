---
title: "<th> : l'élément d'en-tête de tableau"
slug: Web/HTML/Reference/Elements/th
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

L'élément [HTML](/fr/docs/Web/HTML) **`<th>`** définit une cellule comme l'en-tête d'un groupe de cellules de tableau et peut être utilisé comme enfant de l'élément {{HTMLElement("tr")}}. La nature exacte de ce groupe est définie par les attributs [`scope`](#scope) et [`headers`](#headers).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;th&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Stars du football extraterrestre
  </caption>
  <tr>
    <th scope="col">Joueur·euse</th>
    <th scope="col">Gloobles</th>
    <th scope="col">Za'taak</th>
  </tr>
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

- `abbr`
  - : Cet attribut contient une description courte et abrégée du contenu de la cellule. Certains outils utilisateurs, comme la synthèse vocale, peuvent décrire cette information avant le contenu lui-même.
- `colspan`
  - : Une valeur entière positive ou nulle indiquant sur combien de colonnes la cellule d'en-tête s'étend. La valeur par défaut est `1`. Les agents utilisateur ignorent les valeurs supérieures à 1000 comme incorrectes et les ramènent à la valeur par défaut `1`.
- `headers`
  - : Cet attribut est une liste de chaînes de caractères séparées par des espaces. Chacune correspond à l'attribut `id` de l'élément `<th>` qui s'applique à cet élément.
- `rowspan`
  - : Une valeur entière positive ou nulle indiquant sur combien de lignes la cellule d'en-tête s'étend. La valeur par défaut est `1`&nbsp;; si sa valeur est définie à `0`, la cellule d'en-tête s'étend jusqu'à la fin de la section de regroupement du tableau ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, même si elle est définie implicitement) à laquelle appartient le `<th>`. Les valeurs supérieures à `65534` sont ramenées à `65534`.
- `scope`
  - : Cet attribut référence les cellules auxquelles l'élément `<th>` est lié. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont&nbsp;:
    - `row`&nbsp;: Indique que l'en-tête s'applique à toutes les cellules de la ligne à laquelle appartient cet élément&nbsp;;
    - `col`&nbsp;: Indique que l'en-tête s'applique à toutes les cellules de la colonne à laquelle appartient cet élément&nbsp;;
    - `rowgroup`&nbsp;: Indique que l'en-tête appartient à un groupe de lignes et s'applique à toutes ses cellules&nbsp;;
    - `colgroup`&nbsp;: Indique que l'en-tête appartient à un groupe de colonne et concerne toutes ses cellules.

    Si l'attribut `scope` n'est pas défini ou que sa valeur n'est pas `row`, `col`, `rowgroup`, ou `colgroup`, le navigateur sélectionnera automatiquement l'ensemble de cellules auquel s'applique l'en-tête.

### Attributs obsolètes

Les attributs suivants sont obsolètes et ne doivent pas être utilisés. Ils sont documentés ci-dessous à titre de référence lors de la mise à jour de code existant et pour des raisons historiques uniquement.

- `align` {{Deprecated_Inline}}
  - : Définit l'alignement horizontal de la cellule d'en-tête. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `left`, `center`, `right`, `justify` et `char`. Lorsque cela est pris en charge, la valeur `char` aligne le contenu textuel sur le caractère défini dans l'attribut [`char`](#char) et sur le décalage défini par l'attribut [`charoff`](#charoff). Utilisez plutôt la propriété CSS {{CSSxRef("text-align")}}, car cet attribut est obsolète.

- `axis` {{Deprecated_Inline}}
  - : Contient une liste de chaînes de caractères séparées par des espaces, chacune correspondant à l'attribut `id` d'un groupe de cellules auquel la cellule d'en-tête s'applique. Utilisez l'attribut [`scope`](#scope) à la place, car cet attribut est obsolète.

- `bgcolor` {{Deprecated_Inline}}
  - : Définit la couleur d'arrière-plan de la cellule d'en-tête. La valeur est une couleur HTML&nbsp;; soit un [code RGB hexadécimal à 6 chiffres](/fr/docs/Web/CSS/Reference/Values/hex-color), préfixé d'un `#`, soit un [mot-clé de couleur](/fr/docs/Web/CSS/Reference/Values/named-color). Les autres valeurs CSS {{CSSxRef("&lt;color&gt;")}} ne sont pas prises en charge. Utilisez la propriété CSS {{CSSxRef("background-color")}} à la place, car cet attribut est obsolète.

- `char` {{Deprecated_Inline}}
  - : Ne fait rien. Il était à l'origine destiné à définir l'alignement du contenu sur un caractère de la cellule d'en-tête. Les valeurs typiques incluent un point (`.`) pour aligner des nombres ou des valeurs monétaires. Si [`align`](#align) n'est pas défini à `char`, cet attribut est ignoré.

- `charoff` {{Deprecated_Inline}}
  - : Ne fait rien. Il était à l'origine destiné à définir le nombre de caractères de décalage du contenu de la cellule d'en-tête par rapport au caractère d'alignement défini par l'attribut [`char`](#char).

- `height` {{Deprecated_Inline}}
  - : Définit une hauteur recommandée pour la cellule d'en-tête. Utilisez la propriété CSS {{CSSxRef("height")}} à la place, car cet attribut est obsolète.

- `valign` {{Deprecated_Inline}}
  - : Définit l'alignement vertical de la cellule d'en-tête. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `baseline`, `bottom`, `middle` et `top`. Utilisez la propriété CSS {{CSSxRef("vertical-align")}} à la place, car cet attribut est obsolète.

- `width` {{Deprecated_Inline}}
  - : Définit une largeur recommandée pour la cellule d'en-tête. Utilisez la propriété CSS {{CSSxRef("width")}} à la place, car cet attribut est obsolète.

## Notes d'utilisation

- L'élément `<th>` ne peut être utilisé qu'à l'intérieur d'un élément {{HTMLElement("tr")}}.
- Dans des contextes simples, l'utilisation de l'attribut [`scope`](#scope) sur les cellules d'en-tête (éléments `<th>`) est redondante car [`scope`](#scope) est déduit. Cependant, certaines technologies d'assistance peuvent ne pas l'inférer correctement, donc définir explicitement la portée de l'en-tête peut améliorer l'expérience utilisateur.
- Lorsque les attributs [`colspan`](#colspan) et [`rowspan`](#rowspan) sont utilisés pour étendre les cellules d'en-tête sur plusieurs colonnes et lignes, les cellules sans ces attributs définis (avec une valeur par défaut de `1`) sont automatiquement placées dans les espaces libres disponibles de la structure du tableau qui couvrent des cellules 1x1, comme illustré dans la figure suivante&nbsp;:

  ![Illustration démontrant l'extension de colonnes et de lignes des cellules de tableau : les cellules 1, 3 et 4 s'étendent sur deux lignes ; la cellule 2 s'étend sur deux colonnes ; les cellules 5 et 6 s'insèrent dans les cellules disponibles qui sont la deuxième et la troisième colonne de la deuxième ligne](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > Ces attributs ne doivent pas être utilisés pour superposer des cellules.

## Exemples

Voir {{HTMLElement("table")}} pour un exemple complet de tableau présentant les standards courants et les bonnes pratiques.

### En-têtes de colonnes et de lignes simples

Cet exemple utilise des éléments `<th>` pour introduire des en-têtes de colonnes et de lignes dans une structure de tableau basique.

#### HTML

La première ligne (élément {{HTMLElement("tr")}}) contient les en-têtes de colonnes (éléments `<th>`), qui servent de «&nbsp;titres&nbsp;» pour les colonnes afin de faciliter la compréhension des informations et l'identification des données. Pour indiquer que chaque en-tête de colonne concerne toutes les cellules de la colonne correspondante, l'attribut [`scope`](#scope) est défini à `col` (colonne).

Les lignes suivantes contiennent les données principales du tableau. Chacune de ces lignes possède un en-tête de ligne (élément `<th>`) introduit comme première cellule. Cela crée une colonne d'en-têtes de ligne en première colonne du tableau. Comme pour les en-têtes de colonnes, l'attribut [`scope`](#scope) est défini à `row` pour indiquer à quelles cellules chaque en-tête de ligne se rapporte, qui dans l'exemple ci-dessous sont toutes les cellules de données (éléments {{HTMLElement("td")}}) de chaque ligne.

> [!NOTE]
> Normalement, les éléments de regroupement {{HTMLElement("thead")}} et {{HTMLElement("tbody")}} sont utilisés pour regrouper les lignes avec en-têtes dans les sections d'en-tête et de corps du tableau respectivement. Ces éléments sont omis dans cet exemple pour réduire la complexité et permettre de se concentrer sur l'utilisation des cellules d'en-tête.

```html
<table>
  <tr>
    <th scope="col">Symbole</th>
    <th scope="col">Mot code</th>
    <th scope="col">Prononciation</th>
  </tr>
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

Quelques règles CSS de base sont utilisées pour mettre en forme le tableau et ses cellules. Nous utilisons les [sélecteurs d'attributs](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) CSS pour cibler les cellules d'en-tête selon la valeur de leur attribut [`scope`](#scope), afin de mettre en évidence les en-têtes de colonnes et de lignes (éléments `<th>`) et de les différencier entre eux et des cellules de données ({{HTMLElement("td")}}).

```css
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

tr:nth-of-type(odd) td {
  background-color: #eeeeee;
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

{{EmbedLiveSample("En-têtes de colonnes et de lignes simples", 650, 170)}}

### Extension de colonnes et de lignes

Cet exemple étend et améliore le tableau basique du [précédent exemple](#en-têtes_de_colonnes_et_de_lignes_simples) en ajoutant une seconde ligne pour des en-têtes de colonnes supplémentaires.

#### HTML

Une ligne de tableau supplémentaire (élément {{HTMLElement("tr")}}) est ajoutée comme seconde ligne d'en-tête du tableau avec deux en-têtes de colonnes supplémentaires (éléments `<th>`). Ainsi, la colonne «&nbsp;Prononciation&nbsp;» est divisée en deux colonnes, une pour la notation API (Alphabet Phonétique International) et une pour la prononciation simplifiée (la colonne de prononciation d'origine). Les cellules de données correspondantes (éléments {{HTMLElement("td")}}) sont ajoutées à chaque ligne suivante.

Comme indiqué dans les [notes d'utilisation](#notes_d'utilisation), les attributs [`colspan`](#colspan) et [`rowspan`](#rowspan) peuvent être utilisés sur les éléments `<th>` pour répartir les cellules d'en-tête dans les bonnes colonnes et lignes. Pour obtenir un en-tête sur «&nbsp;deux lignes&nbsp;» dans la structure du tableau, les deux premières cellules d'en-tête de la première ligne {{HTMLElement("tr")}} sont étendues sur deux lignes. La troisième cellule d'en-tête s'étend sur deux colonnes (toujours dans la première ligne). Cette configuration laisse deux zones disponibles dans la troisième et la quatrième colonne de la seconde ligne, où les deux en-têtes de la seconde ligne {{HTMLElement("tr")}} sont automatiquement placés, la valeur par défaut étant `1` pour les attributs [`colspan`](#colspan) et [`rowspan`](#rowspan).

> [!NOTE]
> Normalement, les éléments {{HTMLElement("thead")}} et {{HTMLElement("tbody")}} sont utilisés pour regrouper les lignes avec en-têtes dans les sections d'en-tête et de corps du tableau respectivement. Ce n'est pas mis en œuvre dans cet exemple afin de se concentrer sur les en-têtes et l'extension, et de réduire la complexité de l'exemple.

```html
<table>
  <tr>
    <th scope="col" rowspan="2">Symbole</th>
    <th scope="col" rowspan="2">Mot code</th>
    <th scope="col" colspan="2">Prononciation</th>
  </tr>
  <tr>
    <th scope="col">API</th>
    <th scope="col">Prononciation simplifiée</th>
  </tr>
  <tr>
    <th scope="row">A</th>
    <td>Anatole</td>
    <td>anatɔl</td>
    <td>ANA tol</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Berthe</td>
    <td>bɛʁt</td>
    <td>BER t</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Célestine</td>
    <td>selɛstin</td>
    <td>CÉ lest ine</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Denise</td>
    <td>dəniz</td>
    <td>DE niz</td>
  </tr>
</table>
```

#### CSS

Le CSS est inchangé par rapport au [précédent exemple](#en-têtes_de_colonnes_et_de_lignes_simples).

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

th[scope="col"] {
  background-color: #505050;
  color: white;
}

th[scope="row"] {
  background-color: #d6ecd4;
}

tr:nth-of-type(odd) td {
  background-color: #eeeeee;
}
```

#### Résultat

{{EmbedLiveSample("Extension de colonnes et de lignes", 650, 200)}}

### Associer des cellules d'en-tête à d'autres cellules d'en-tête

Pour des relations plus complexes entre cellules d'en-tête, l'utilisation des éléments `th` avec l'attribut [`scope`](#scope) seul peut ne pas suffire pour les technologies d'assistance, en particulier les lecteurs d'écran.

#### HTML

Pour améliorer l'{{Glossary("accessibility", "accessibilité")}} du [précédent exemple](#extension_de_colonnes_et_de_lignes) et permettre, par exemple, aux lecteurs d'écran d'énoncer les en-têtes associés à chaque cellule d'en-tête, l'attribut [`headers`](#headers) peut être introduit avec des attributs [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id). En raison de la façon dont la colonne «&nbsp;Prononciation&nbsp;» est divisée en deux colonnes dans l'exemple, introduisant un en-tête sur «&nbsp;deux lignes&nbsp;», les technologies d'assistance comme les lecteurs d'écran peuvent ne pas être capables d'identifier à quelles autres cellules d'en-tête (éléments `th`) la cellule d'en-tête «&nbsp;Prononciation&nbsp;» est liée, et inversement. Par conséquent, l'attribut [`headers`](#headers) est utilisé sur les cellules d'en-tête «&nbsp;Prononciation&nbsp;», «&nbsp;API&nbsp;» et «&nbsp;Prononciation simplifiée&nbsp;» pour associer les cellules d'en-tête concernées en fonction des valeurs des identifiants uniques ajoutés via les attributs [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) sous forme de liste séparée par des espaces.

> [!NOTE]
> Il est recommandé d'utiliser des valeurs plus descriptives et utiles pour l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id). Chaque `id` dans un document doit être unique dans ce document. Dans cet exemple, les valeurs d'`id` sont des caractères uniques pour se concentrer sur le concept de l'attribut [`headers`](#headers).

```html
<table>
  <tr>
    <th scope="col" rowspan="2">Symbole</th>
    <th scope="col" rowspan="2">Mot code</th>
    <th scope="col" colspan="2" id="p" headers="i r">Prononciation</th>
  </tr>
  <tr>
    <th scope="col" id="i" headers="p">API</th>
    <th scope="col" id="r" headers="p">Prononciation simplifiée</th>
  </tr>
  <tr>
    <th scope="row">A</th>
    <td>Anatole</td>
    <td>anatɔl</td>
    <td>ANA tol</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Berthe</td>
    <td>bɛʁt</td>
    <td>BER t</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Célestine</td>
    <td>selɛstin</td>
    <td>CÉ lest ine</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Denise</td>
    <td>dəniz</td>
    <td>DE niz</td>
  </tr>
</table>
```

#### Résultat

Le [résultat visuel](#résultat_2) est inchangé par rapport au [tableau de l'exemple précédent](#extension_de_colonnes_et_de_lignes).

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
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a> sans titre, pied de page, contenu sectionnant ou descendants d'un élément de titre.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire.<br />La balise de fin peut être absente si l'élément est immédiatement suivi par un élément <code>&lt;th&gt;</code> ou par un élément
        {{HTMLElement("td")}} ou s'il n'y a plus de contenu au sein de
        l'élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément {{HTMLElement("tr")}}.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role"><code>columnheader</code></a> ou <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role"><code>rowheader</code></a>
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
- Les autres éléments HTML relatifs aux tableaux&nbsp;: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}
- La propriété CSS {{CSSxRef("background-color")}} pour définir la couleur d'arrière-plan de chaque cellule d'en-tête
- La propriété CSS {{CSSxRef("border")}} pour contrôler les bordures des cellules d'en-tête
- La propriété CSS {{CSSxRef("height")}} pour contrôler la hauteur recommandée de la cellule d'en-tête
- La propriété CSS {{CSSxRef("text-align")}} pour aligner horizontalement le contenu de chaque cellule d'en-tête
- La propriété CSS {{CSSxRef("vertical-align")}} pour aligner verticalement le contenu de chaque cellule d'en-tête
- La propriété CSS {{CSSxRef("width")}} pour contrôler la largeur recommandée de la cellule d'en-tête
- Les pseudo-classes CSS {{CSSxRef(":nth-of-type")}}, {{CSSxRef(":first-of-type")}}, {{CSSxRef(":last-of-type")}} pour sélectionner les cellules d'en-tête souhaitées
