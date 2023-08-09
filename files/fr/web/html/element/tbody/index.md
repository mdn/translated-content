---
title: "<tbody> : l'élément de corps d'un tableau"
slug: Web/HTML/Element/tbody
---

{{HTMLSidebar}}

L'élément [HTML](/fr/docs/Web/HTML) **`<tbody>`** permet de regrouper un ou plusieurs éléments [`<tr>`](/fr/docs/Web/HTML/Element/tr) afin de former le corps d'un tableau HTML ([`<table>`](/fr/docs/Web/HTML/Element/table)).

{{EmbedInteractiveExample("pages/tabbed/tbody.html","tabbed-taller")}}

L'élément `<tbody>`, ainsi que les éléments [`<thead>`](/fr/docs/Web/HTML/Element/thead) et [`<tfoot>`](/fr/docs/Web/HTML/Element/tfoot), fournissent des informations sémantiques qui sont utilisées pour l'affichage à l'écran, l'impression et [l'accessibilité](/fr/docs/Glossary/Accessibility).

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
      <td>Zéro ou plusieurs éléments <a href="/fr/docs/Web/HTML/Element/tr"><code>&lt;tr&gt;</code></a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>L'élément <code>&lt;tbody&gt;</code> n'est pas un élément fils obligatoire de <a href="/fr/docs/Web/HTML/Element/table"><code>&lt;table&gt;</code></a>. Cependant, il doit être présent si l'élément parent <a href="/fr/docs/Web/HTML/Element/table"><code>&lt;table&gt;</code></a> possède un élément <a href="/fr/docs/Web/HTML/Element/thead"><code>&lt;thead&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/tfoot"><code>&lt;tfoot&gt;</code></a> ou un autre élément <code>&lt;tbody&gt;</code> comme autre élément enfant. Si l'élément <code>&lt;tbody&gt;</code> démarre avec un élément <code>&lt;tbody&gt;</code> et qu'il ne suit pas un élément <code>&lt;tbody&gt;</code> qui n'est pas fermé, la balise ouvrante peut être omise.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        L'élément <code>&lt;tbody&gt;</code> doit être au sein d'un élément <a href="/fr/docs/Web/HTML/Element/table"><code>&lt;table&gt;</code></a> et peut être ajouté après un élément <a href="/fr/docs/Web/HTML/Element/caption"><code>&lt;caption&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/colgroup"><code>&lt;colgroup&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/thead"><code>&lt;thead&gt;</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role">rowgroup</a></code>
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

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

### Attributs dépréciés

- `align` {{Deprecated_inline}}

  - : Cet attribut à valeurs définit l'alignement horizontal pour le contenu de chaque cellule de la colonne. Les valeurs possibles sont&nbsp;:

    - `left`
      - : Le contenu de la cellule est aligné à gauche de la cellule.
    - `center`
      - : Le contenu de la cellule est centré horizontalement.
    - `right`
      - : Le contenu de la cellule est aligné à droite de la cellule.
    - `justify`
      - : Ajuste la largeur des espaces du contenu texte afin que le contenu de la cellule soit justifié.
    - `char`
      - : Aligne le contenu texte de la cellule selon un caractère spécial avec un décalage minimum défini par les attributs [`char`](#char) et [`charoff`](#charoff`).

    Si cet attribut n'est pas renseigné, la valeur `left` est prise par défaut.

    Cet attribut étant déprécié, on utilisera la propriété CSS [`text-align`](/fr/docs/Web/CSS/text-align) à la place.

    > **Note :** Le comportement de la propriété `text-align` équivalent à `align="char"` n'est pas implémenté par les navigateurs à l'heure actuelle. Voir [le tableau de compatibilité des navigateurs `text-align`](/fr/docs/Web/CSS/text-align#browser_compatibility) à propos de l'alignement basé sur les une valeur `<string>`.

- `bgcolor` {{Deprecated_inline}}

  - : Cet attribut définit la couleur d'arrière-plan de toutes les cellules. C'est un [code hexadécimal à 6 chiffres RGB](/fr/docs/Web/CSS/color_value#couleurs_rgb) précédé d'un `#`. Un des [mots-clés prédéfinis pour les couleurs](/fr/docs/Web/CSS/color_value#les_mots-clés) peut également être utilisé.

    Cet attribut étant déprécié, on utilisera la propriété CSS [`background-color`](/fr/docs/Web/CSS/background-color) à la place.

- `char` {{Deprecated_inline}}
  - : Cet attribut est utilisé pour définir le caractère sur lequel aligner les cellules d'une colonne. Les valeurs de cet attribut contiennent généralement un point (`.`) pour aligner des nombres ou des valeurs monétaires. Si l'attribut [`align`](#align) ne vaut pas `char`, l'attribut est ignoré.
- `charoff` {{deprecated_inline}}
  - : Cet attribut est utilisé pour indiquer le décalage, en nombre de caractères, depuis le caractère définit par l'attribut `char` à appliquer au contenu des cellules.
- `valign` {{deprecated_inline}}

  - : Cet attribut définit l'alignement vertical du texte des cellules de la colonne. Les valeurs possibles de cet attribut sont&nbsp;:

    - `baseline`
      - : Aligne le texte sur la ligne la plus basse possible en utilisant la [ligne de base](http://fr.wikipedia.org/wiki/Ligne_de_base_%28typographie%29) des caractères. Si les caractères ont tous la même taille, cela aura le même effet que la valeur `bottom`.
    - `bottom`
      - : Place le texte au plus bas de la cellule.
    - `middle`
      - : Qui centre verticalement le texte dans la cellule.
    - `top`
      - : Qui place le texte au plus haut de la cellule.

    Cet attribut est déprécié, on utilisera la propriété CSS [`vertical-align`](/fr/docs/Web/CSS/vertical-align) à la place.

## Notes d'utilisation

- Lorsque le tableau contient un élément [`<thead>`](/fr/docs/Web/HTML/Element/thead) (qui identifie les lignes d'en-tête), l'élément `<tbody>` _doit_ apparaître après.
- Si on utilise `<tbody>`, il faudra alors que celui-ci contienne toutes les lignes qui ne sont pas des lignes d'en-tête ou de pied de tableau. Autrement dit, il n'est pas possible d'avoir des éléments [`<tr>`](/fr/docs/Web/HTML/Element/tr) qui soient des éléments fils directs de [`<table>`](/fr/docs/Web/HTML/Element/table) si on utilise `<tbody>`.
- Lorsqu'il est imprimé, `<tbody>` représente le contenu qui, lorsqu'il est plus long qu'une page, sera différent sur chaque page. En revanche, [`<thead>`](/fr/docs/Web/HTML/Element/thead) et [`<tfoot>`](/fr/docs/Web/HTML/Element/tfoot) seront les mêmes ou seront semblables sur chacune des pages.
- Lorsqu'un tableau est présenté sur un écran qui n'est pas suffisamment grand pour l'afficher en entier, [l'agent utilisateur](/fr/docs/Glossary/User_agent) pourra permettre de faire défiler séparément les contenus des éléments [`<thead>`](/fr/docs/Web/HTML/Element/thead), [`<tfoot>`](/fr/docs/Web/HTML/Element/tfoot), `<tbody>` et [`<caption>`](/fr/docs/Web/HTML/Element/caption) d'un même élément [`<table>`](/fr/docs/Web/HTML/Element/table).
- À la différence des éléments `<thead>`, `<tfoot>` et `<caption>`, on peut utiliser plusieurs éléments `<tbody>`, tant qu'ils sont consécutifs. Cela permet de répartir les lignes des grands tableaux en différentes sections, chacune pouvant être mise en forme distinctement.

## Exemples

Quelques exemples sont présentés ci-après afin d'illustrer l'utilisation de l'élément `<tbody>`. Pour plus d'exemples, voir [la section Exemples de la page sur `<table>`](/fr/docs/Web/HTML/Element/table#exemples).

### Exemple simple

Dans ce premier exemple simple, on crée un tableau contenant des informations sur un groupe d'étudiants, composé d'un élément [`<thead>`](/fr/docs/Web/HTML/Element/thead) et d'un élément `<tbody>` qui contient plusieurs lignes.

#### HTML

Voici le fragment de tableau HTML. On notera que toutes les cellules du tableau sont contenues dans un seul élément `<tbody>`.

```html
<table>
  <thead>
    <tr>
      <th>Identifiant</th>
      <th>Nom</th>
      <th>Spécialité</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Martha Jones</td>
      <td>Informatique</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Victor Nim</td>
      <td>Littérature</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Alexandra Petrov</td>
      <td>Astrophysique</td>
    </tr>
  </tbody>
</table>
```

#### CSS

Le CSS permettant la mise en forme du tableau se décompose comme suit&nbsp;:

```css
table {
  border: 2px solid #555;
  border-collapse: collapse;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

Pour commencer, on définit le style général du tableau, l'épaisseur, le style et la couleur de la bordure extérieure avec [`border-collapse`](/fr/docs/Web/CSS/border-collapse) pour s'assurer que les lignes de bordure sont partagées entre les cellules adjacentes plutôt que chacune ait ses propres bordures avec un espace interstitiel. [`font`](/fr/docs/Web/CSS/font) est utilisé pour définir une police de caractères pour les textes du tableau.

```css
th,
td {
  border: 1px solid #bbb;
  padding: 2px 8px 0;
  text-align: left;
}
```

On définit ensuite le style pour la majorité des cellules, tant celles qui ont des données mais aussi celles formées par [`<td>`](/fr/docs/Web/HTML/Element/td) et [`<th>`](/fr/docs/Web/HTML/Element/th). On leur donne un contour gris d'une épaisseur de 1 pixel et le contenu des cellules est aligné à gauche avec [`text-align`](/fr/docs/Web/CSS/text-align).

```css
thead > tr > th {
  background-color: #cce;
  font-size: 18px;
  border-bottom: 2px solid #999;
}
```

Enfin, on met en forme les cellules d'en-têtes, contenues dans le bloc [`<thead>`](/fr/docs/Web/HTML/Element/thead). Celles-ci utilisent un arrière-plan ([`background-color`](/fr/docs/Web/CSS/background-color)) plus sombre, une police plus grande et une bordure basse plus épaisse et plus sombre.

#### Résultat

Voici le résultat obtenu&nbsp;:

{{EmbedLiveSample("", 650, 150)}}

### Plusieurs corps de tableau

On peut créer plusieurs sections au sein d'un tableau en utilisant plusieurs éléments `<tbody>`. Chacun peut avoir son propre en-tête et ses propres lignes. Toutefois, _il ne peut y avoir qu'un seul élément [`<thead>`](/fr/docs/Web/HTML/Element/thead) par tableau&nbsp;!_ Pour cette raison, il faudra utiliser un élément [`<tr>`](/fr/docs/Web/HTML/Element/tr) rempli d'éléments [`<th>`](/fr/docs/Web/HTML/Element/th) afin de créer des en-têtes au sein de chaque `<tbody>`. Voyons cela.

Prenons l'exemple précédent et ajoutons plus d'étudiants à la liste. Cette fois, on met à jour le tableau afin de regrouper les étudiants par spécialité, avec des lignes d'en-tête pour chaque spécialité.

#### Résultat

Commençons par voir le résultat&nbsp;:

{{EmbedLiveSample("", 650, 280)}}

#### HTML

Le HTML modifié ressemble à ceci&nbsp;:

```html
<table>
  <thead>
    <tr>
      <th>Identifiant</th>
      <th>Nom</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">Informatique</th>
    </tr>
    <tr>
      <td>3741255</td>
      <td>Martha Jones</td>
    </tr>
    <tr>
      <td>4077830</td>
      <td>Benjamin Pierce</td>
    </tr>
    <tr>
      <td>5151701</td>
      <td>James Kirk</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">Littérature</th>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Victor Nim</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">Astrophysique</th>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Alexandra Petrov</td>
    </tr>
    <tr>
      <td>8892377</td>
      <td>Hiroko Toyota</td>
    </tr>
  </tbody>
</table>
```

On voit ici que chaque spécialité est placée dans un bloc `<tbody>` séparé, avec la première ligne qui contient un unique élément [`<th>`](/fr/docs/Web/HTML/Element/th) avec un attribut [`colspan`](/fr/docs/Web/HTML/Element/th#attr-colspan) pour s'étendre sur toute la largeur du tableau. Cet en-tête indique le nom de la spécialité contenue dans le `<tbody>`.

Puis, chaque ligne suivante pour ce `<tbody>` se compose de deux cellules&nbsp;: la première contenant l'identifiant et la seconde contenant le nom.

#### CSS

```css hidden
table {
  border: 2px solid #555;
  border-collapse: collapse;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}

th,
td {
  border: 1px solid #bbb;
  padding: 2px 8px 0;
  text-align: left;
}

thead > tr > th {
  background-color: #cce;
  font-size: 18px;
  border-bottom: 2px solid #999;
}
```

Le CSS est inchangé pour la plupart. Une différence est apportée en ciblant les cellules d'en-tête d'un `<tbody>` (plutôt que celles d'un élément [`<thead>`](/fr/docs/Web/HTML/Element/thead)). On peut alors mettre en forme les en-têtes de chaque section.

```css
tbody > tr > th {
  background-color: #dde;
  border-bottom: 1.5px solid #bbb;
  font-weight: normal;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments HTML relatifs aux tableaux&nbsp;:
  - [`<caption>`](/fr/docs/Web/HTML/Element/caption)
  - [`<col>`](/fr/docs/Web/HTML/Element/col)
  - [`<colgroup>`](/fr/docs/Web/HTML/Element/colgroup)
  - [`<table>`](/fr/docs/Web/HTML/Element/table)
  - [`<td>`](/fr/docs/Web/HTML/Element/td)
  - [`<tfoot>`](/fr/docs/Web/HTML/Element/tfoot)
  - [`<th>`](/fr/docs/Web/HTML/Element/th)
  - [`<thead>`](/fr/docs/Web/HTML/Element/thead)
  - [`<tr>`](/fr/docs/Web/HTML/Element/tr)
- Les propriétés et pseudo-classes CSS qui sont particulièrement utiles pour mettre en forme l'élément `<tbody>`&nbsp;:

  - La pseudo-classe [`:nth-child`](/fr/docs/Web/CSS/:nth-child) qui permet de paramétrer l'alignement des cellules d'une colonne
  - La propriété [`text-align`](/fr/docs/Web/CSS/text-align) qui permet d'aligner le contenu des cellules par rapport à un même caractère (par exemple «&nbsp;.&nbsp;»)
