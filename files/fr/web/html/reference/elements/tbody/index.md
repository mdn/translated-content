---
title: "<tbody> : l'élément de corps d'un tableau"
slug: Web/HTML/Reference/Elements/tbody
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

L'élément [HTML](/fr/docs/Web/HTML) **`<tbody>`** permet de regrouper une ou plusieurs lignes du tableau (éléments {{HTMLElement("tr")}}), indiquant qu'elles constituent le corps (principal) des données d'un tableau.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;tbody&gt;", "tabbed-taller")}}

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

- `align` {{Deprecated_Inline}}
  - : Définit l'alignement horizontal de chaque cellule du corps. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `left`, `center`, `right`, `justify` et `char`. Lorsque cela est pris en charge, la valeur `char` aligne le contenu textuel sur le caractère défini dans l'attribut [`char`](#char) et sur le décalage défini par l'attribut [`charoff`](#charoff). Utilisez la propriété CSS {{CSSxRef("text-align")}} à la place, car cet attribut est déprécié.

- `bgcolor` {{Deprecated_Inline}}
  - : Définit la couleur d'arrière-plan de chaque cellule du corps. La valeur est une couleur HTML&nbsp;; soit un [code RGB hexadécimal à 6 chiffres](/fr/docs/Web/CSS/Reference/Values/hex-color) précédé d'un `#`, soit un [mot-clé de couleur](/fr/docs/Web/CSS/Reference/Values/named-color). Les autres valeurs CSS {{CSSxRef("&lt;color&gt;")}} ne sont pas prises en charge. Utilisez la propriété CSS {{CSSxRef("background-color")}} à la place, car cet attribut est déprécié.

- `char` {{Deprecated_Inline}}
  - : Définit l'alignement du contenu sur un caractère dans chaque cellule du corps. Les valeurs typiques incluent un point (`.`) pour aligner des nombres ou des valeurs monétaires. Si [`align`](#align) n'est pas défini sur `char`, cet attribut est ignoré.

- `charoff` {{Deprecated_Inline}}
  - : Définit le nombre de caractères de décalage du contenu de la cellule du corps par rapport au caractère d'alignement défini par l'attribut [`char`](#char).

- `valign` {{Deprecated_Inline}}
  - : Définit l'alignement vertical de chaque cellule du corps. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `baseline`, `bottom`, `middle` et `top`. Utilisez la propriété CSS {{CSSxRef("vertical-align")}} à la place, car cet attribut est déprécié.

## Notes d'utilisation

- Le `<tbody>` est placé après tout élément {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} et {{HTMLElement("thead")}}.
- Si des éléments {{HTMLElement("tr")}} sont définis comme enfants directs de {{HTMLElement("table")}} (voir «&nbsp;omission de balise&nbsp;» dans le [résumé technique](#résumé_technique) pour une description des cas où cela est valide), alors le balisage généré par le navigateur inclura un élément `<tbody>` qui les encapsule. En conséquence, les sélecteurs CSS comme `table > tr` ne sélectionneront pas ces éléments. Voir aussi l'exemple [Sans corps explicite](#sans_définir_de_corps).
- Il est permis d'utiliser plusieurs `<tbody>` par tableau tant qu'ils sont tous consécutifs. Cela permet de diviser les lignes (éléments {{HTMLElement("tr")}}) des grands tableaux en sections, chacune pouvant être mise en forme séparément si besoin. Si les éléments ne sont pas balisés comme consécutifs, les navigateurs corrigeront cette erreur d'auteur, en s'assurant que tout élément {{HTMLElement("thead")}} et {{HTMLElement("tfoot")}} soit respectivement rendu en premier et en dernier dans le tableau.
- Avec les éléments associés {{HTMLElement("thead")}} et {{HTMLElement("tfoot")}}, l'élément `<tbody>` fournit des informations {{Glossary("semantics", "sémantiques")}} utiles et peut être utilisé lors du rendu à l'écran ou à l'impression. Définir de tels groupes de contenu de tableau fournit aussi des informations contextuelles précieuses pour les technologies d'assistance, y compris les lecteurs d'écran et les moteurs de recherche.
- Lors de l'impression d'un document, dans le cas d'un tableau multipage, les éléments {{HTMLElement("thead")}} et {{HTMLElement("tfoot")}} définissent généralement des informations qui restent identiques — ou du moins très similaires — sur chaque page, tandis que le contenu de l'élément `<tbody>` diffère généralement d'une page à l'autre.
- Lorsqu'un tableau est présenté dans un contexte d'écran (comme une fenêtre) qui n'est pas assez grand pour afficher le tableau en entier, le {{Glossary("user agent", "agent utilisateur")}} peut permettre à l'utilisateur·ice de faire défiler séparément le contenu des blocs {{HTMLElement("thead")}}, `<tbody>`, {{HTMLElement("tfoot")}} et {{HTMLElement("caption")}} pour un même parent {{HTMLElement("table")}}.

## Exemples

Voir {{HTMLElement("table")}} pour un exemple complet de tableau présentant les standards courants et les bonnes pratiques.

### Sans définir de corps

Cet exemple montre que le navigateur encapsule automatiquement les éléments {{HTMLElement("tr")}} dans un élément `<tbody>` si les lignes ne sont pas imbriquées dans un élément de regroupement de tableau (`<tbody>`, `<tfoot>` ou `<thead>`) et sont, comme dans cet exemple, des enfants directs de l'élément {{HTMLElement("table")}}.

#### HTML

Ici, un tableau très simple est créé avec quelques lignes de tableau (éléments {{HTMLElement("tr")}}) contenant des données (éléments {{HTMLElement("td")}}) sur des étudiant·e·s.

```html
<table>
  <tr>
    <td>3741255</td>
    <td>Martha Jones</td>
    <td>Informatique</td>
    <td>240</td>
  </tr>
  <tr>
    <td>3971244</td>
    <td>Victor Nim</td>
    <td>Littérature</td>
    <td>220</td>
  </tr>
  <tr>
    <td>4100332</td>
    <td>Alexandra Petrov</td>
    <td>Astrophysique</td>
    <td>260</td>
  </tr>
</table>
```

#### CSS

Notez le CSS dans l'exemple, où une {{CSSxRef("background-color")}} est définie pour l'élément `<tbody>` et où `tbody` est utilisé dans un {{Glossary("css_selector", "sélecteur CSS")}} supplémentaire. Il est également possible d'utiliser les {{Glossary("developer_tools", "outils de développement du navigateur")}} pour vérifier la présence de l'élément `<tbody>` dans le {{Glossary("DOM")}}.

```css
tbody {
  background-color: #e4f0f5;
}

tbody > tr > td:last-of-type {
  width: 60px;
  text-align: center;
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

td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### Résultat

{{EmbedLiveSample("Sans définir de corps", 650, 150)}}

### Structure de base du corps

Cet exemple étend et améliore le tableau de base du [précédent exemple](#sans_définir_de_corps).

#### HTML

Nous introduisons une tête de tableau (élément {{HTMLElement("thead")}}) et utilisons explicitement un élément `<tbody>` pour structurer le tableau en sections {{Glossary("semantics", "sémantiques")}}. La tête de tableau contient les en-têtes de colonnes (éléments {{HTMLElement("th")}}). L'élément `<tbody>` représente la section du corps du tableau, qui contient plusieurs lignes (éléments {{HTMLElement("tr")}}) avec les données principales du tableau, c'est-à-dire les données de chaque étudiant·e.

L'utilisation de tels groupes de contenu de tableau et d'une structuration {{Glossary("semantics", "sémantique")}} n'est pas seulement utile pour la présentation visuelle (via la mise en forme CSS) et l'information contextuelle pour les technologies d'assistance&nbsp;; de plus, l'utilisation explicite de l'élément `<tbody>` aide le navigateur à créer la structure de tableau souhaitée, évitant ainsi des résultats indésirables.

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

Le CSS est presque inchangé par rapport au [précédent exemple](#sans_définir_de_corps), à l'exception de quelques styles de base pour mettre en valeur l'en-tête du tableau afin que les en-têtes de colonnes se distinguent des données du corps du tableau. Comme dans [l'exemple ci-dessus](#sans_définir_de_corps), le [sélecteur de type](/fr/docs/Web/CSS/Reference/Selectors/Type_selectors) `tbody` est utilisé pour mettre en forme les cellules du corps.

```css
tbody {
  background-color: #e4f0f5;
}

tbody > tr > td:last-of-type {
  text-align: center;
}

thead {
  border-bottom: 2px solid rgb(160 160 160);
  background-color: #2c5e77;
  color: white;
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

#### Result

{{EmbedLiveSample("Structure de base du corps", 650, 140)}}

### Plusieurs corps de tableau

Cet exemple étend et améliore encore le tableau de [l'exemple ci-dessus](#structure_de_base_du_corps) en introduisant plusieurs sections de corps.

L'utilisation de plusieurs éléments `<tbody>` permet de créer des regroupements de lignes dans un tableau. Chaque corps de tableau peut potentiellement avoir sa propre ou ses propres lignes d'en-tête&nbsp;; cependant, _il ne peut y avoir qu'un seul élément {{HTMLElement("thead")}} par tableau_&nbsp;! Pour cette raison, des {{HTMLElement("tr")}} avec des éléments {{HTMLElement("th")}} peuvent être utilisés pour créer des en-têtes dans chaque `<tbody>`.

#### HTML

En s'appuyant sur le tableau du [précédent exemple de base](#structure_de_base_du_corps), on ajoute plus d'étudiant·e·s et, au lieu d'indiquer la spécialité de chaque étudiant·e sur chaque ligne, les étudiant·e·s sont regroupé·e·s par spécialité. Notez que chaque spécialité est incluse dans son propre bloc `<tbody>`, la première ligne (élément {{HTMLElement("tr")}}) servant d'en-tête du bloc, affichant le nom de la spécialité dans un élément {{HTMLElement("th")}} qui utilise l'attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/th#colspan) pour étendre l'en-tête sur les trois colonnes du tableau. Chaque ligne restante dans chaque `<tbody>` de spécialité représente un·e étudiant·e.

```html
<table>
  <thead>
    <tr>
      <th>Identifiant de l'étudiant</th>
      <th>Nom</th>
      <th>Crédits</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="3">Informatique</th>
    </tr>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
      <td>240</td>
    </tr>
    <tr>
      <td>4077830</td>
      <td>Pierce, Benjamin</td>
      <td>200</td>
    </tr>
    <tr>
      <td>5151701</td>
      <td>Kirk, James</td>
      <td>230</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="3">Littérature</th>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
      <td>220</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="3">Astrophysique</th>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
      <td>260</td>
    </tr>
    <tr>
      <td>8892377</td>
      <td>Toyota, Hiroko</td>
      <td>240</td>
    </tr>
  </tbody>
</table>
```

#### CSS

La majeure partie du CSS est inchangée. Cependant, un style un peu plus subtil est ajouté pour les cellules d'en-tête contenues directement dans un `<tbody>` (par opposition à celles qui se trouvent dans le {{HTMLElement("thead")}}). Cela est utilisé pour les en-têtes indiquant la spécialité correspondante de chaque section du tableau.

```css
tbody > tr > th {
  border-top: 2px solid rgb(160 160 160);
  border-bottom: 1px solid rgb(140 140 140);
  background-color: #e4f0f5;
  font-weight: normal;
}

tbody {
  background-color: whitesmoke;
}

thead {
  background-color: #2c5e77;
  color: white;
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
  padding: 6px 8px;
  text-align: left;
}

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Résultat

{{EmbedLiveSample("Plusieurs corps de tableau", 650, 300)}}

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
      <td>L'élément <code>&lt;tbody&gt;</code> n'est pas un élément fils obligatoire de {{HTMLElement("table")}}. Cependant, il doit être présent si l'élément parent {{HTMLElement("table")}} possède un élément {{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} ou un autre élément <code>&lt;tbody&gt;</code> comme autre élément enfant. Si l'élément <code>&lt;tbody&gt;</code> démarre avec un élément <code>&lt;tbody&gt;</code> et qu'il ne suit pas un élément <code>&lt;tbody&gt;</code> qui n'est pas fermé, la balise ouvrante peut être omise.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        L'élément <code>&lt;tbody&gt;</code> doit être au sein d'un élément {{HTMLElement("table")}} et peut être ajouté après un élément {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}.
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
- Autres éléments liés aux tableaux&nbsp;: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}
- La propriété CSS {{CSSxRef("background-color")}} pour définir la couleur d'arrière-plan de chaque cellule du corps
- La propriété CSS {{CSSxRef("border")}} pour contrôler les bordures des cellules du corps
- La propriété CSS {{CSSxRef("text-align")}} pour aligner horizontalement le contenu de chaque cellule du corps
- La propriété CSS {{CSSxRef("vertical-align")}} pour aligner verticalement le contenu de chaque cellule du corps
