---
title: Sélecteurs CSS de base
short-title: Sélecteurs de base
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: bb4be34c00686ddc46a1cef3123cdf825e9495ec
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Dans cette leçon, nous examinons les sélecteurs les plus simples qu'on puisse trouver, ce sont ceux que vous utilisez le plus couramment dans votre travail.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions de base en HTML (étudiez
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe HTML de base</a
        >).
      </td>
    </tr>
    <tr>
    <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Les types de sélecteurs de base — type d'élément, classe, ID.</li>
          <li>Comprendre que les ID sont uniques par document — vous devez utiliser une ID pour sélectionner un élément spécifique.</li>
          <li>Comprendre que vous pouvez avoir plusieurs classes par élément, et que celles-ci peuvent être utilisées pour superposer des styles selon les besoins.</li>
          <li>Listes de sélecteurs.</li>
          <li>Sélecteur universel.</li>
        <ul>
      </td>
  </tbody>
</table>

## Qu'est-ce qu'un sélecteur ?

Un sélecteur CSS est la première partie d'une règle CSS. Il s'agit d'un motif d'éléments et d'autres termes qui indiquent au navigateur quels éléments HTML doivent recevoir les valeurs de propriétés CSS définies dans la règle. L'élément ou les éléments sélectionnés par le sélecteur sont appelés le _sujet du sélecteur_.

![Du code avec le h1 mis en évidence.](selector.png)

Dans les articles précédents, vous avez rencontré différents sélecteurs et appris qu'il existe des sélecteurs qui ciblent le document de différentes manières&nbsp;; par exemple, en sélectionnant un élément comme `h1`, ou une classe comme `.special`. Commençons par récapituler les principaux que vous avez déjà vus.

## Sélecteur de type

Un **sélecteur de type** est parfois appelé _sélecteur de nom de balise_ ou _sélecteur d'élément_, car il sélectionne une balise/un élément HTML dans votre document. Dans l'exemple ci-dessous, nous avons utilisé les sélecteurs `span`, `em` et `strong`.

Essayez de modifier l'exemple suivant (cliquez sur **«&nbsp;Exécuter&nbsp;»** pour l'ouvrir dans le MDN Playground) afin d'ajouter une règle CSS qui sélectionne l'élément `<h1>` et change sa couleur en bleu&nbsp;:

```html live-sample___type
<h1>Sélecteurs de type</h1>
<p>
  Les légumes sont un bonus pour vous, donc vous devez en manger plus
  <span>chou-rave oignon gallois</span> daikon amarante tatsoi tomatillo melon
  haricot azuki ail.
</p>

<p>
  Bette à carde gombo maïs soko <strong>endive</strong> courge. Persil échalote
  courgette tatsoi pois germes fève chou cavalier pissenlit gombo wakamé tomate.
  Pissenlit concombre pois de terre cacahuète soko courgette.
</p>

<p>
  Feuilles de navet achillée haricot riz rutabaga
  <em>endive chou-fleur</em> laitue de mer chou-rave amarante épinard d'eau
  avocat daikon chou napa asperge pourpier d'hiver chou frisé. Céleri pomme de
  terre oignon vert raisin du désert raifort épinard
</p>
```

```css live-sample___type
body {
  font-family: sans-serif;
}

span {
  background-color: yellow;
}

strong {
  color: rebeccapurple;
}

em {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("type", "", 280)}}

## Sélecteurs de classe

Le sélecteur de classe, sensible à la casse, commence par un point (`.`). Il sélectionne tout élément du document auquel cette classe est appliquée. Dans l'exemple interactif ci-dessous, nous avons créé une classe appelée `highlight` et l'avons appliquée à plusieurs endroits du document. Tous les éléments ayant cette classe sont mis en évidence.

```html live-sample___class
<h1 class="highlight">Sélecteurs de classe</h1>
<p>
  Les légumes sont un bonus pour vous, donc vous devez en manger plus
  <span class="highlight">chou-rave oignon gallois</span> daikon amarante tatsoi
  tomatillo melon haricot azuki ail.
</p>

<p class="highlight">
  Bette à carde gombo maïs soko <strong>endive</strong> courge. Persil échalote
  courgette tatsoi pois germes fève chou cavalier pissenlit gombo wakamé tomate.
  Pissenlit concombre pois de terre cacahuète soko courgette.
</p>
```

```css live-sample___class
body {
  font-family: sans-serif;
}

.highlight {
  background-color: yellow;
}
```

{{EmbedLiveSample("class", "", 220)}}

### Jouer avec les sélecteurs de classe

Essayez de modifier l'exemple ci-dessus (en utilisant le MDN Playground) pour effectuer les changements suivants&nbsp;:

1. Modifiez le HTML pour changer le contenu auquel les styles `.highlight` sont appliqués. Vous pouvez, par exemple, ajouter des éléments `<span>` pour entourer différentes parties du contenu existant et leur appliquer la classe `highlight`, retirer certaines classes `highlight` existantes, ou ajouter du nouveau contenu auquel appliquer la classe `highlight`.
2. Modifiez le CSS pour changer les déclarations à l'intérieur de la règle `.highlight`, en ajoutant de nouvelles si vous le souhaitez, et observez comment cela affecte la mise en forme de tous les éléments ayant la classe `highlight`.
3. Créez une nouvelle règle de classe dans le CSS avec des déclarations différentes (par exemple, avec un sélecteur `.highlight2`), puis essayez de l'appliquer à une partie de votre HTML.

### Cibler des classes d'un élément donné

Vous pouvez créer un sélecteur qui cible des éléments spécifiques ayant la classe appliquée. Dans l'exemple suivant, nous allons mettre en surbrillance un `<span>` avec la classe `highlight` différemment d'un titre `<h1>` avec la classe `highlight`. Nous faisons cela en utilisant le sélecteur de type pour l'élément à cibler, avec la classe ajoutée à l'aide d'un point, sans espace entre les deux.

```html live-sample___class-type
<h1 class="highlight">Sélecteurs de classe</h1>
<p>
  Les légumes sont un bonus pour vous, donc vous devez en manger plus
  <span class="highlight">chou-rave oignon gallois</span> daikon amarante tatsoi
  tomatillo melon haricot azuki ail.
</p>

<p class="highlight">
  Bette à carde gombo maïs soko <strong>endive</strong> courge. Persil échalote
  courgette tatsoi pois germes fève chou cavalier pissenlit gombo wakamé tomate.
  Pissenlit concombre pois de terre cacahuète soko courgette.
</p>
```

```css live-sample___class-type
body {
  font-family: sans-serif;
}

span.highlight {
  background-color: yellow;
}

h1.highlight {
  background-color: pink;
}
```

{{EmbedLiveSample("class-type", "", 200)}}

Cette approche réduit la portée d'une règle. La règle ne s'applique qu'à cette combinaison particulière d'élément et de classe. Vous devez ajouter un autre sélecteur si vous souhaitez que la règle s'applique à d'autres éléments.

### Cibler un élément appartenant à plus d'une classe

Vous pouvez attribuer plusieurs classes à un même élément et les sélectionner individuellement, ou cibler l'élément seulement quand toutes les classes apparaissent dans le sélecteur. Cela peut s'avérer utile si vous créez des composants qui peuvent être combinés de différentes manières sur votre site.

L'exemple ci-dessous présente trois `<div>` contenant chacun une note. Si la boîte est dans la classe `notebox` elle a une bordure grise. Si de plus elle est dans la classe `warning` ou `danger`, on change la {{CSSxRef("border-color")}}.

Nous pouvons indiquer au navigateur que nous voulons cibler l'élément uniquement s'il possède deux classes appliquées, en les enchaînant sans espace entre elles. Vous pouvez voir que le dernier `<div>` ne reçoit aucun style, car il n'a que la classe `danger`. Pour que des styles lui soient appliqués, il doit aussi avoir la classe `notebox`.

```html live-sample___class-many
<div class="notebox">Ceci est une note d'information.</div>

<div class="notebox warning">Cette note affiche un avertissement.</div>

<div class="notebox danger">Cette note affiche un danger&nbsp;!</div>

<div class="danger">
  Ceci n'est pas mis en forme — il faut aussi la classe notebox
</div>
```

```css live-sample___class-many
body {
  font-family: sans-serif;
}

.notebox {
  border: 4px solid #666666;
  padding: 0.5em;
  margin: 0.5em;
}

.notebox.warning {
  border-color: orange;
  font-weight: bold;
}

.notebox.danger {
  border-color: red;
  font-weight: bold;
}
```

{{EmbedLiveSample("class-many", "", 200)}}

## Sélecteurs d'ID

Un sélecteur d'ID commence par un `#` plutôt que par un point, mais est essentiellement utilisé de la même manière qu'un sélecteur de classe. Une ID ne peut cependant être utilisée qu'une seule fois par document. Le sélecteur cible l'élément avec l'`id` associée&nbsp;; on peut faire précéder l'ID d'un sélecteur de type pour ne cibler l'élément que si l'élément et l'ID correspondent. Voyons ces deux utilisations dans l'exemple suivant&nbsp;:

```html live-sample___id
<h1 id="heading">Sélecteur d'ID</h1>
<p>
  Les légumes sont un bonus pour vous, donc vous devez en manger plus chou-rave
  oignon gallois daikon amarante tatsoi tomatillo melon haricot azuki ail.
</p>

<p id="one">
  Bette à carde gombo maïs soko <strong>endive</strong> courge. Persil échalote
  courgette tatsoi pois germes fève chou cavalier pissenlit gombo wakamé tomate.
  Pissenlit concombre pois de terre cacahuète soko courgette.
</p>
```

```css live-sample___id
body {
  font-family: sans-serif;
}

#one {
  background-color: yellow;
}

h1#heading {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("id", "", 200)}}

> [!WARNING]
> Utiliser le même ID plusieurs fois dans un document peut sembler fonctionner pour la mise en forme, mais ne le faites pas. Cela produit un code invalide et provoque des comportements étranges à de nombreux endroits.

### Jouer avec les sélecteurs d'ID

Essayez de modifier l'exemple ci-dessus pour effectuer les changements suivants&nbsp;:

1. Modifiez le HTML pour appliquer les styles de `#one` au premier paragraphe plutôt qu'au second.
2. Modifiez le CSS pour changer les déclarations à l'intérieur des sélecteurs d'ID, et observez comment cela modifie l'apparence du HTML.

## Listes de sélecteurs

Si vous souhaitez appliquer le même CSS à plusieurs éléments, vous pouvez combiner des sélecteurs individuels en une _liste de sélecteurs_. La règle est alors appliquée à tous les sélecteurs individuels. Par exemple, si j'ai le même CSS pour un sélecteur `h1` et un sélecteur `.special`, je pourrais écrire cela comme deux règles séparées.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Vous pouvez également combiner ces sélecteurs en une liste de sélecteurs en ajoutant une virgule entre eux.

```css-nolint
h1, .special {
  color: blue;
}
```

Les espaces blancs sont valides avant ou après la virgule. Vous pouvez également trouver les sélecteurs plus lisibles si chacun est sur une nouvelle ligne.

```css
h1,
.special {
  color: blue;
}
```

### Jouer avec les listes de sélecteurs

Dans l'exemple ci-dessous, essayez de combiner les deux sélecteurs qui ont des déclarations identiques. L'affichage visuel doit être le même par la suite.

```html live-sample___selector-list
<h1>Sélecteurs de type</h1>
<p>
  Les légumes sont un bonus pour vous, donc vous devez en manger plus chou-rave
  oignon gallois daikon amarante tatsoi tomatillo melon haricot azuki ail.
</p>

<p>
  Bette à carde gombo maïs soko <strong>endive</strong> courge. Persil échalote
  courgette tatsoi pois germes fève chou cavalier pissenlit gombo wakamé tomate.
  Pissenlit concombre pois de terre cacahuète soko courgette.
</p>

<p>
  Feuilles de navet achillée millefeuille haricot blanc rutabaga
  <em>endive chou-fleur</em> laitue de mer chou-rave amarante épinard d'eau
  avocat daikon chou chinois asperges d'hiver pourpier chou frisé. Céleri pomme
  de terre oignon vert raisin sec raifort épinard
</p>
```

```css live-sample___selector-list
body {
  font-family: sans-serif;
}
span {
  background-color: yellow;
}

strong {
  color: rebeccapurple;
}

em {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("selector-list", "", 280)}}

### Sélecteurs invalides dans les listes de sélecteurs

Lorsque vous regroupez des sélecteurs de cette manière, si un seul sélecteur est syntaxiquement invalide, toute la règle est ignorée.

Dans l'exemple suivant, la règle de sélecteur de classe invalide est ignorée, tandis que le `h1` est toujours mis en forme.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Cependant, lorsqu'ils sont combinés, ni le `h1` ni la classe ne sont mis en forme, car toute la règle est considérée comme invalide.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Le sélecteur universel

Le sélecteur universel est indiqué par un astérisque (`*`). Il sélectionne tout dans le document. Si `*` est enchaîné en utilisant un [combinateur descendant](/fr/docs/Web/CSS/Reference/Selectors/Descendant_combinator), il sélectionne tout à l'intérieur de cet élément ancêtre. Par exemple, `p *` sélectionne tous les éléments imbriqués à l'intérieur de l'élément `<p>`.

Dans l'exemple suivant, nous utilisons le sélecteur universel pour supprimer les marges sur tous les éléments. Au lieu du style par défaut du navigateur, qui espace les titres et les paragraphes avec des marges, tout est rapproché.

```html live-sample___universal
<h1>Sélecteur universel</h1>
<p>
  Les légumes sont un bonus pour vous, donc vous devez en manger plus
  <span>chou-rave oignon gallois</span> daikon amarante tatsoi tomatillo melon
  haricot azuki ail.
</p>

<p>
  Bette à carde gombo maïs soko <strong>endive</strong> courge. Persil échalote
  courgette tatsoi pois germes fève chou cavalier pissenlit gombo wakamé tomate.
  Pissenlit concombre pois de terre cacahuète soko courgette.
</p>
```

```css live-sample___universal
body {
  font-family: sans-serif;
}

* {
  margin: 0;
}
```

{{EmbedLiveSample("universal")}}

Ce type de comportement peut parfois être observé dans les «&nbsp;feuilles de style de réinitialisation&nbsp;», qui suppriment tous les styles du navigateur. Comme le sélecteur universel apporte des modifications globales, nous l'utilisons pour des situations très spécifiques, comme celle décrite ci-dessous.

### Utiliser le sélecteur universel pour rendre vos sélecteurs plus lisibles

Une utilisation du sélecteur universel consiste à rendre les sélecteurs plus lisibles et plus intuitifs. Par exemple, si nous voulons sélectionner tous les éléments descendants d'un élément `<article>` qui sont le premier enfant de leur parent, y compris les enfants directs, nous pourrions utiliser la pseudo-classe {{CSSxRef(":first-child")}}. Nous en apprendrons davantage sur cela dans [pseudo-classes et pseudo-éléments](/fr/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)&nbsp;:

```css
article :first-child {
  font-weight: bold;
}
```

Cependant, ce sélecteur peut être confondu avec `article:first-child`, qui sélectionne tout élément `<article>` qui est le premier enfant d'un autre élément.

Pour éviter cette confusion, nous pourrions ajouter le sélecteur universel à la pseudo-classe `:first-child`, afin qu'il soit plus évident ce que fait le sélecteur. Il sélectionne _tout_ élément qui est le premier enfant d'un élément `<article>`, ou le premier enfant de tout élément descendant de `<article>`&nbsp;:

```css
article *:first-child {
  font-weight: bold;
}
```

Les deux sont équivalents, mais certaines personnes trouvent la deuxième option plus facile à lire.

> [!NOTE]
> Vous êtes peu susceptible de voir cette technique utilisée dans des sites Web publiés. Nous ne l'utilisons pas beaucoup sur MDN, par exemple. Cependant, vous devez quand même envisager de l'utiliser dans votre code si vous trouvez cela plus facile à comprendre.

## Résumé

Dans cet article, nous avons récapitulé les sélecteurs CSS, qui vous permettent de cibler des éléments HTML particuliers, en examinant les sélecteurs de type, de classe et d'ID un peu plus en détail que précédemment. Dans le prochain article, nous aborderons les sélecteurs d'attributs.

> [!NOTE]
> Pour une liste complète des sélecteurs, consultez notre [référence des sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors).

## Voir aussi

- [Les classes CSS <sup>(angl.)</sup>](https://scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup>
  - : Une leçon interactive qui fournit des conseils sur les classes CSS.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
