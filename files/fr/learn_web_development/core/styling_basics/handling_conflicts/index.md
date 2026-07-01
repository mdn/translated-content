---
title: Gérer les conflits
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}

L'objectif de cette leçon est de vous aider à mieux comprendre certains des concepts les plus fondamentaux du CSS — la cascade, la spécificité et l'héritage — qui déterminent la manière dont le CSS s'applique au HTML et comment les conflits entre les déclarations de style sont résolus.

Même si le travail sur cette leçon peut sembler moins pertinent dans l'immédiat et un peu plus théorique que d'autres parties du cours, la compréhension de ces concepts vous évitera bien des difficultés par la suite&nbsp;! Nous vous encourageons à travailler attentivement sur cette section et à vérifier que vous comprenez bien les concepts avant de passer à la suite.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions élémentaires de HTML (voir
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe de base HTML</a
        >), <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Sélecteurs CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Comprendre comment les règles peuvent entrer en conflit en CSS.</li>
          <li>L'héritage.</li>
          <li>La cascade.</li>
          <li>Les principaux concepts qui régissent le résultat des conflits — spécificité, ordre des sources et importance.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Règles conflictuelles

<abbr>CSS</abbr> est l'acronyme pour **<i lang="en">Cascading Style Sheets</i>** (qui signifie «&nbsp;feuilles de style en cascade&nbsp;» en français), et ce premier mot _cascading_ est extrêmement important à comprendre — le fonctionnement de la cascade est essentiel pour maîtriser le CSS.

À un moment donné, vous travaillerez sur un projet et vous constaterez que du code CSS qui, selon vous, doit s'appliquer à un élément, ne fonctionne pas. Souvent, ce problème survient lorsque vous créez deux règles qui appliquent des valeurs différentes d'une même propriété au même élément.

La [**Cascade**](/fr/docs/Web/CSS/Guides/Cascade/Introduction) et le concept étroitement lié de [**Spécificité**](/fr/docs/Web/CSS/Guides/Cascade/Specificity), sont des mécanismes qui contrôlent quelle règle s'applique lorsqu'un tel conflit se produit. La déclaration qui met en forme votre élément peut ne pas être celle à laquelle vous vous attendez, il est donc important de comprendre comment ces mécanismes fonctionnent.

Un autre concept important ici est celui de [**l'héritage**](/fr/docs/Web/CSS/Guides/Cascade/Inheritance), ce qui signifie que certaines propriétés CSS héritent par défaut des valeurs définies sur l'élément parent de l'élément actuel et d'autres non. Cela peut également provoquer un comportement inattendu.

Commençons par jeter un coup d'œil rapide aux concepts clés que nous abordons, puis nous examinerons chacun d'eux à tour de rôle et verrons comment ils interagissent les uns avec les autres et avec votre CSS. Ces concepts peuvent sembler difficiles à comprendre, mais ils deviendront plus clairs à mesure que vous pratiquerez l'écriture de CSS.

### La cascade

Les feuilles de style forment une [**cascade**](/fr/docs/Web/CSS/Guides/Cascade/Introduction). Sous une forme très simple, cela signifie que l'origine et l'ordre des règles CSS comptent. Lorsque deux règles ont la même spécificité, celle qui est définie en dernier dans la feuille de style est utilisée. Il existe d'autres concepts qui ont un effet, comme les [couches de cascade](/fr/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), mais ce sont des concepts plus avancés que nous n'abordons pas en détail ici.

Dans l'exemple ci-dessous, nous avons deux règles qui pourraient s'appliquer à l'élément `<h1>`. Le contenu de l'élément `<h1>` finit par être coloré en bleu. Cela s'explique par le fait que les deux règles proviennent de la même source, ont un sélecteur d'élément identique et, par conséquent, ont la même spécificité, mais la dernière dans l'ordre du code source l'emporte.

```html live-sample___cascade-simple
<h1>Ceci est mon titre.</h1>
```

```css live-sample___cascade-simple
h1 {
  color: red;
}
h1 {
  color: blue;
}
```

{{EmbedLiveSample("cascade-simple")}}

### La spécificité

[La spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity) est l'algorithme utilisé par le navigateur pour décider la valeur qui est appliquée à un élément pour une propriété donnée. Si plusieurs blocs de style utilisent différents sélecteurs qui configurent la même propriété avec différentes valeurs et qui ciblent le même élément, c'est la spécificité qui permet de décider la valeur de propriété qui est appliquée à l'élément. La spécificité est une mesure de la précision d'un sélecteur&nbsp;:

- Un sélecteur d'élément est peu spécifique — il sélectionne tous les éléments d'un type donné sur la page. Il a donc moins de poids. Les sélecteurs de pseudo-éléments ont la même spécificité que les sélecteurs d'éléments.
- Un sélecteur de classe est plus spécifique — il sélectionne uniquement les éléments d'une page qui ont une valeur d'attribut `class` donnée. Il a donc un poids plus important. Les sélecteurs d'attributs et de pseudo-classes ont le même poids que les sélecteurs de classes.
- Un sélecteur d'ID est encore plus spécifique — il sélectionne uniquement un élément unique avec une valeur d'attribut `id` spécifique. Il a donc un poids encore plus important.

Dans l'exemple qui suit, nous avons à nouveau deux règles qui pourraient s'appliquer à l'élément `<h1>`. Le contenu de cet élément est finalement coloré en rouge, car le sélecteur de classe `titre-principal` donne une spécificité plus importante à la règle. Ainsi, même si la règle avec le sélecteur d'élément pour `<h1>` apparaît plus bas dans le code source, c'est la règle avec la spécificité la plus haute (celle utilisant le sélecteur de classe) qui est appliquée.

```html live-sample___specificity-simple
<h1 class="titre-principal">Ceci est mon titre.</h1>
```

```css live-sample___specificity-simple
.titre-principal {
  color: red;
}

h1 {
  color: blue;
}
```

{{EmbedLiveSample("specificity-simple")}}

Nous reviendrons sur cet algorithme dans la suite du chapitre.

### L'héritage

Il faut également comprendre l'héritage dans ce contexte — certaines valeurs de propriétés CSS définies sur les éléments parents sont héritées par leurs éléments enfants, tandis que d'autres ne le sont pas.

Par exemple, si vous définissez une `color` et une `font-family` sur un élément, chaque élément à l'intérieur est également stylé avec cette couleur et cette police, sauf si vous avez appliqué des valeurs de couleur et de police différentes directement sur eux.

```html live-sample___inheritance-simple
<p>
  Comme le corps a été défini pour avoir une couleur bleue, c'est hérité par les
  descendants.
</p>
<p>
  Nous pouvons changer la couleur en ciblant spécifiquement un élément avec un
  style différent, comme ce <span>span</span>.
</p>
```

```css live-sample___inheritance-simple
body {
  color: blue;
}

span {
  color: black;
}
```

{{EmbedLiveSample("inheritance-simple")}}

Certaines propriétés ne sont pas héritées — par exemple {{CSSxRef("width")}}. Si vous définissez une `width` de `50%` sur un élément, tous ses descendants n'obtiennent pas une largeur de `50%` de celle de leur parent. Si c'était le cas, CSS est très frustrant à utiliser&nbsp;!

> [!NOTE]
> Sur chaque page MDN documentant une propriété CSS, vous pouvez voir un encart intitulé «&nbsp;Définition formelle&nbsp;» qui indique les caractéristiques de cette propriété et notamment son caractère hérité ou non. Voir [la section de la définition formelle pour la propriété `color`](/fr/docs/Web/CSS/Reference/Properties/color#définition_formelle) comme exemple.

### Comprendre comment les concepts fonctionnent ensemble

Ces trois concepts (cascade, spécificité et héritage) contrôlent ensemble quelle CSS s'applique à quel élément. Dans les sections ci-dessous, nous voyons comment ils fonctionnent ensemble. Cela peut parfois sembler un peu compliqué, mais vous commencerez à les mémoriser à mesure que vous gagnez en expérience avec CSS, et vous pouvez toujours consulter les détails si vous les oubliez&nbsp;! Même les développeur·euse·s expérimenté·e·s ne se souviennent pas de tous les détails.

## Comprendre l'héritage

Commençons par l'héritage. Dans l'exemple ci-dessous, nous avons un élément HTML {{HTMLElement("ul")}} avec deux niveaux de listes non ordonnées imbriquées à l'intérieur. Nous avons donné à l'élément `<ul>` extérieur une bordure, un remplissage et une couleur de police.

La propriété `color` est une propriété héritée. Ainsi, la valeur de la propriété `color` s'applique aux enfants directs ainsi qu'aux enfants indirects — les `<li>` enfants immédiats et ceux à l'intérieur de la première liste imbriquée. Nous avons ensuite ajouté la classe `special` à la deuxième liste imbriquée et appliqué une couleur différente. C'est ensuite hérité par ses enfants.

```html live-sample___inheritance
<ul class="principal">
  <li>Élément Un</li>
  <li>
    Élément Deux
    <ul>
      <li>2.1</li>
      <li>2.2</li>
    </ul>
  </li>
  <li>
    Élément Trois
    <ul class="special">
      <li>
        3.1
        <ul>
          <li>3.1.1</li>
          <li>3.1.2</li>
        </ul>
      </li>
      <li>3.2</li>
    </ul>
  </li>
</ul>
```

```css live-sample___inheritance
.principal {
  color: rebeccapurple;
  border: 2px solid #cccccc;
  padding: 1em;
}

.special {
  color: black;
  font-weight: bold;
}
```

{{EmbedLiveSample("inheritance", "", 280)}}

Les propriétés comme `width` (mentionnée avant), `margin`, `padding` et `border` ne sont pas héritées. Dans notre exemple, si la bordure était héritée par les enfants, chaque liste et chaque élément de la liste reçoit une bordure, produisant un effet qui n'est sans doute pas celui recherché&nbsp;!

L'information sur l'héritage ou non de la propriété est présente sur les pages qui les documentent. En sachant l'aspect modifié par la propriété, on peut généralement deviner si la propriété est héritée.

### Contrôler l'héritage

CSS fournit 5 valeurs spéciales et universelles pour les propriétés afin de contrôler l'héritage. Ainsi, chaque propriété CSS accepte ces valeurs&nbsp;:

- {{CSSxRef("inherit")}}
  - : Applique la valeur de l'élément parent sur l'élément ciblé. Cela «&nbsp;force&nbsp;» l'héritage.
- {{CSSxRef("initial")}}
  - : Applique la [valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) de la propriété sur l'élément ciblé.
- {{CSSxRef("revert")}}
  - : Réinitialise la valeur de la propriété de l'élément ciblé avec la mise en forme par défaut du navigateur. Cette valeur agit comme {{CSSxRef("unset")}} dans la plupart des cas.
- {{CSSxRef("revert-layer")}}
  - : Réinitialise la valeur de la propriété de l'élément ciblé avec celle établie dans une [couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) précédente.
- {{CSSxRef("unset")}}
  - : Réinitialise la propriété avec sa valeur naturelle. Autrement dit, si la propriété est naturellement héritée, ce mot-clé est synonyme de `inherit`, sinon, il est synonyme de `initial`.

> [!NOTE]
> Voir [la section sur les types d'origine](/fr/docs/Web/CSS/Guides/Cascade/Introduction#types_dorigine) pour plus d'informations sur ces valeurs et leur fonctionnement.

### Jouer avec les propriétés de contrôle de l'héritage

Utilisons un exemple avec une liste de liens pour observer comment ces valeurs fonctionnent. Dans l'éditeur qui suit, vous pouvez éditer le CSS et voir l'effet de vos changements. Utilisez cette interactivité pour mieux comprendre le comportement de HTML et de CSS.

Dans notre exemple&nbsp;:

1. Le deuxième élément de la liste a la classe `ma-classe-1`. La couleur de l'élément `<a>` qui y est imbriqué est donc fixée avec `inherit`. Si vous retirez la règle, quel effet cela a-t-il sur la couleur du lien&nbsp;?
2. Comprenez-vous pourquoi les troisième et quatrième liens ont cette couleur&nbsp;? Le troisième lien utilise la valeur `initial` et c'est donc la valeur initiale de la propriété (ici le noir) et non la valeur par défaut du navigateur (le bleu) qui est utilisée. Pour le quatrième, on utilise `unset`, ce qui signifie que le texte du lien utilise la couleur de l'élément parent&nbsp;: vert.
3. Lequel de ces liens change de couleur si vous ciblez les liens pour y définir une couleur `a { color: red; }`&nbsp;?
4. Après avoir lu la section qui suit, revenez à cet exemple et renommez la propriété `color` en `all`. Voyez comment le deuxième lien passe à la ligne et est précédé d'une puce. D'après vous, quelles propriétés étaient héritées&nbsp;?

```html live-sample___keywords
<ul>
  <li>Couleur de <a href="#">lien</a> par défaut</li>
  <li class="ma-classe-1">Hériter la couleur du <a href="#">lien</a></li>
  <li class="ma-classe-2">Réinitialiser la couleur du <a href="#">lien</a></li>
  <li class="ma-classe-3">Annuler la couleur du <a href="#">lien</a></li>
</ul>
```

```css live-sample___keywords
body {
  color: green;
}

.ma-classe-1 a {
  color: inherit;
}

.ma-classe-2 a {
  color: initial;
}

.ma-classe-3 a {
  color: unset;
}
```

{{EmbedLiveSample("keywords")}}

### Réinitialiser les valeurs de toutes les propriétés

La propriété CSS raccourcie {{CSSxRef("all")}} peut être utilisée afin d'appliquer une valeur d'héritage à (presque) toutes les propriétés. Cette propriété peut utiliser l'une des 5 valeurs d'héritage vues avant (`inherit`, `initial`, `revert`, `revert-layer` ou `unset`). Il s'agit d'une méthode pratique pour annuler les modifications appliquées à des mises en forme et revenir à un point de départ connu avant d'appliquer d'autres modifications.

Dans l'exemple qui suit, on a deux blocs de citation. Le premier est mis en forme avec une règle qui cible l'élément. Le second est mis en forme avec une classe appliquée à l'élément et qui définit la propriété `all` avec la valeur `unset`.

```html live-sample___all
<blockquote>
  <p>Ceci est un bloc de citation mis en forme</p>
</blockquote>

<blockquote class="fix-this">
  <p>Ceci est un bloc de citation qui n'est pas mis en forme</p>
</blockquote>
```

```css live-sample___all
blockquote {
  background-color: orange;
  border: 2px solid blue;
}

.fix-this {
  all: unset;
}
```

{{EmbedLiveSample("all")}}

Essayez de changer la valeur de `all` en utilisant les autres valeurs d'héritage pour voir les différences.

## Comprendre la cascade

On comprend maintenant que l'héritage est ce qui propage la couleur du document à un paragraphe imbriqué profondément dans un document HTML. Avec les premiers articles d'introduction, nous comprenons comment modifier le CSS appliqué à un endroit du document, que ce soit en affectant des règles à un élément ou en passant par une classe. Nous allons désormais voir comment la cascade définit les règles CSS qui s'appliquent lorsque plusieurs blocs ciblent le même élément et paramètrent une même propriété, mais avec des valeurs différentes.

Il existe trois facteurs à prendre en compte, listés ici par ordre croissant d'importance (le dernier élément de la liste a plus d'importance que le deuxième, qui en a plus que le premier)&nbsp;:

1. **L'ordre des sources**
2. **La spécificité**
3. **L'importance**

Nous allons décrire chacun de ces facteurs pour voir comment les navigateurs déterminent la valeur à appliquer.

### Ordre du code source

Nous avons déjà vu comment l'ordre des sources importait pour la cascade. S'il y a plus d'une règle et que toutes ont le même poids, c'est celle qui arrive en dernier dans le code source qui l'emporte. On peut reformuler ceci de la façon suivante&nbsp;: c'est la règle qui est la plus proche de l'élément qui l'emporte et annule les précédentes.

L'ordre des sources n'a d'importance que lorsque le poids apporté par la spécificité est le même. Voyons donc comment celle-ci fonctionne.

### Comprendre la spécificité

Vous rencontrerez parfois une situation où ce n'est pas la dernière règle portant sur une propriété qui s'applique mais une règle conflictuelle et antérieure. Cela se produit, car la règle antérieure possède une **spécificité antérieure**&nbsp;: elle est plus spécifique et est donc choisie par le navigateur pour mettre en forme l'élément.

Comme vu plus tôt dans cet article, un sélecteur de classe a un poids supérieur à un sélecteur d'élément. Aussi, les propriétés définies dans un bloc ciblant une classe l'emportent sur celles qui sont définies dans un bloc ciblant un élément.

Notez cependant que ce n'est pas la règle entière qui est remplacée mais bien uniquement les propriétés qui sont déclarées à plusieurs endroits.

Ce comportement permet d'éviter les répétitions dans les feuilles de style. La pratique usuelle consiste à définir des styles génériques pour les éléments de base, puis de créer des classes pour les éléments qui sont différents. Ainsi, dans la feuille de styles qui suit, on a défini des styles génériques pour les titres de niveau 2, puis créé des classes qui ne changent que certaines propriétés et valeurs. Les valeurs définies initialement sont appliquées pour tous les titres, puis les valeurs plus spécifiques sont appliquées aux titres avec les classes.

```html live-sample___mixing-rules
<h2>Titre sans classe</h2>
<h2 class="petit">Titre avec la classe petit</h2>
<h2 class="clair">Titre avec la classe clair</h2>
```

```css live-sample___mixing-rules
h2 {
  font-size: 2em;
  color: black;
  font-family: "Georgia", serif;
}

.petit {
  font-size: 1em;
}

.clair {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("mixing-rules", "", 240)}}

Voyons désormais comment le navigateur calcule la spécificité d'un sélecteur. Nous savons déjà qu'un sélecteur d'élément possède une spécificité inférieure à celle d'un sélecteur de classe. La spécificité est une valeur en points, associée à chaque type de sélecteur et la somme de ces poids fournit la spécificité d'un sélecteur composite donné. Cette mesure peut alors comparer aux autres.

La spécificité d'un sélecteur est mesurée selon 3 composantes différentes, qu'on peut voir comme des colonnes de centaines, dizaines et unités qui correspondent respectivement aux&nbsp;:

- **Identifiants**&nbsp;: On marque un point dans cette colonne (100 points) pour chaque sélecteur d'identifiant contenu dans le sélecteur composite.
- **Classes**&nbsp;: On marque un point dans cette colonne (10 points) pour chaque sélecteur de classe, sélecteur d'attribut ou pseudo-classe contenu dans le sélecteur composite.
- **Éléments**&nbsp;: On marque un point dans cette colonne (1 point) pour chaque sélecteur d'élément ou pseudo-élément contenu dans le sélecteur composite.

> [!NOTE]
> Le sélecteur universel ([`*`](/fr/docs/Web/CSS/Reference/Selectors/Universal_selectors)), [les combinateurs](/fr/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, «` `»), et le sélecteur d'ajustement de spécificité ({{CSSxRef(":where()")}}) et ses paramètres n'ont pas d'effet sur la spécificité.

Le tableau suivant montre quelques exemples isolés pour vous mettre dans l'ambiance. Essayez de les parcourir et assurez-vous de comprendre pourquoi ils ont la spécificité qui leur est attribuée. Vous pouvez trouver les détails de chaque sélecteur dans la [référence des sélecteurs](/fr/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators) de MDN.

| Sélecteur                                 | Identifiants | Classes | Éléments | Spécificité totale |
| ----------------------------------------- | ------------ | ------- | -------- | ------------------ |
| `h1`                                      | 0            | 0       | 1        | 0-0-1              |
| `h1 + p::first-letter`                    | 0            | 0       | 3        | 0-0-3              |
| `li > a[href*="en-US"] > .inline-warning` | 0            | 2       | 2        | 0-2-2              |
| `#identifier`                             | 1            | 0       | 0        | 1-0-0              |

#### Exemple approfondi de spécificité

Avant d'aller plus loin, étudions un exemple en action. Vous pouvez ouvrir cet exemple dans le MDN Playground dans un onglet séparé afin de pouvoir le consulter facilement tout en lisant l'explication.

```html live-sample___specificity-boxes
<div class="conteneur" id="exterieur">
  <div class="conteneur" id="interieur">
    <ul>
      <li class="nav"><a href="#">Un</a></li>
      <li class="nav"><a href="#">Deux</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___specificity-boxes
/* 1. spécificité : 1-0-1 */
#exterieur a {
  background-color: red;
}

/* 2. spécificité : 2-0-1 */
#exterieur #interieur a {
  background-color: blue;
}

/* 3. spécificité : 1-0-4 */
#exterieur div ul li a {
  color: yellow;
}

/* 4. spécificité : 1-1-3 */
#exterieur div ul .nav a {
  color: white;
}

/* 5. spécificité : 0-2-4 */
div div li:nth-child(2) a:hover {
  border: 10px solid black;
}

/* 6. spécificité : 0-2-3 */
div li:nth-child(2) a:hover {
  border: 10px dashed black;
}

/* 7. spécificité : 0-3-3 */
div div .nav:nth-child(2) a:hover {
  border: 10px double black;
}

a {
  display: inline-block;
  line-height: 40px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  width: 200px;
  margin-bottom: 10px;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}
```

{{EmbedLiveSample("specificity-boxes", "100%", 170)}}

Que se passe-t-il ici&nbsp;? Pour commencer, nous ne nous intéressons qu'aux sept premières règles de l'exemple. Vous pouvez voir que nous avons inclus les valeurs des spécificités dans un commentaire avant chaque règle.

- Les deux premiers sélecteurs sont en compétition pour la couleur d'arrière-plan du lien. C'est le second qui l'emporte et qui donne la couleur bleue, car il possède un sélecteur d'identifiant supplémentaire. Sa spécificité vaut donc 2-0-1 alors que celle du premier sélecteur vaut 1-0-1.
- Les troisième et quatrième sélecteurs sont en compétition pour la couleur du texte du lien. C'est le quatrième qui l'emporte et qui donne un texte blanc. En effet, bien qu'il ait un sélecteur d'élément en moins, celui-ci est remplacé par un sélecteur de classe, qui possède une spécificité plus élevée que n'importe quelle combinaison de sélecteurs d'élément. La spécificité 1-1-3 l'emporte sur la spécificité 1-0-4.
- Les trois derniers sélecteurs portent sur la mise en forme de la bordure du lien au survol. Le sixième sélecteur cède la place au cinquième (avec des spécificités respectives de 0-2-3 et 0-2-4), car il a un sélecteur d'élément en moins. Le septième sélecteur l'emporte sur ces deux autres, car il a le même nombre de sous-sélecteurs que le cinquième et qu'un sélecteur d'élément a été remplacé par un sélecteur de classe. La spécificité 0-3-3 l'emporte donc sur les spécificités 0-2-3 et 0-2-4.

> [!NOTE]
> Chaque type de sélecteur possède son propre niveau de spécificité et il n'est pas possible de renverser cette hiérarchie de type. Par exemple, l'assemblage d'un _million_ de sélecteurs de **classe** ne l'emporte toujours pas sur la spécificité _d'un seul_ sélecteur **d'identifiant**.
>
> La meilleure façon pour évaluer la spécificité est de calculer les scores des composantes individuelles en commençant par la catégorie la plus élevée et en allant vers les plus faibles si nécessaire. En effet, il est uniquement nécessaire de calculer la spécificité d'une catégorie inférieure lorsqu'il y a égalité au niveau supérieur.

#### Les identifiants contre les classes

Les sélecteurs d'identifiant ont une spécificité élevée. Cela signifie que les styles appliqués en fonction d'un sélecteur d'identifiant l'emportent sur les styles appliqués en fonction d'autres sélecteurs, y compris les sélecteurs de classe et de type. Comme un identifiant ne peut apparaître qu'une seule fois sur une page et en raison de la spécificité élevée des sélecteurs d'identifiant, il est préférable d'ajouter une classe à un élément plutôt qu'un identifiant.

Si l'utilisation de l'identifiant est le seul moyen de cibler l'élément — peut-être parce que vous n'avez pas accès au balisage et ne pouvez pas le modifier — envisagez d'utiliser l'identifiant dans un [sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors), tel que `p[id="header"]`.

### Styles en incise dans le document

Les styles en incise du document (c'est-à-dire les déclarations de style présentes dans les attributs [`style`](/fr/docs/Web/HTML/Reference/Global_attributes/style)) l'emportent sur toutes les règles déclarées dans les feuilles de style, quelle que soit leur spécificité. De telles déclarations n'utilisent pas de sélecteurs, mais on peut considérer leur spécificité comme 1-0-0-0, l'emportant ainsi toujours sur toute autre spécificité, quel que soit le nombre d'identifiants dans le sélecteur composite.

### `!important`

Il existe une méthode permettant de passer outre toutes ces règles, y compris les styles en incise&nbsp;: `!important`. Toutefois, il faut faire preuve de prudence en l'utilisant. Ce marqueur permet de rendre une paire de propriété/valeur la plus spécifique, outrepassant les règles normales de la cascade, y compris pour les styles indiqués dans le document.

> [!WARNING]
> Il est utile de savoir que le marqueur `!important` existe afin de comprendre son effet lorsqu'on le voit dans des bases de code. **Toutefois, il est fortement recommandé de ne pas l'utiliser sauf en cas d'extrême nécessité.** Le marqueur `!important` change la façon dont la cascade fonctionne et peut largement complexifier le débogage de problèmes CSS, notamment pour les grandes feuilles de style.

Prenons un exemple où nous avons deux paragraphes, dont un qui porte un identifiant.

```html live-sample___important
<p class="meilleur">Ceci est un paragraphe.</p>
<p class="meilleur" id="gagnant">Un sélecteur pour les gouverner tous&nbsp;!</p>
```

```css live-sample___important
#gagnant {
  background-color: red;
  border: 1px solid black;
}

.meilleur {
  background-color: gray;
  border: none !important;
}

p {
  background-color: blue;
  color: white;
  padding: 5px;
}
```

{{EmbedLiveSample("important")}}

Voyons cela étape par étape pour comprendre ce qui se passe — essayez de supprimer certaines propriétés pour voir ce qui se passe si vous avez du mal à comprendre&nbsp;:

1. Vous pouvez voir que les valeurs de {{CSSxRef("color")}} et {{CSSxRef("padding")}} ont été appliquées avec la troisième règle mais que ce n'est pas le cas de {{CSSxRef("background-color")}}. Pourquoi ça&nbsp;? Les trois déclarations devraient s'appliquer, car elles arrivent après dans l'ordre du code source, l'emportant ainsi sur les règles précédentes.
2. Toutefois, ce sont les règles précédentes qui l'emportent avec les sélecteurs de classe qui ont une spécificité supérieure aux sélecteurs d'éléments.
3. Les deux éléments ont une [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) `better`, et le second porte en plus [l'identifiant (`id`)](/fr/docs/Web/HTML/Reference/Global_attributes/id) `winning`. Comme les identifiants ont une spécificité _toujours supérieure_ à celle des classes (on peut uniquement avoir un seul élément avec un identifiant donné sur une page, mais de nombreux éléments peuvent se partager une même classe), l'arrière-plan rouge et la bordure noire de 1 pixel devraient s'appliquer au second élément et le premier doit avoir un arrière-plan gris sans bordure, tel qu'indiqué par la classe.
4. En réalité, le second élément récupère bien l'arrière-plan rouge, mais pas la bordure&nbsp;? Pourquoi&nbsp;? C'est l'effet du marqueur `!important` dans la deuxième règle. Ajouter `!important` après `border: none` signifie que cette déclaration l'emporte sur toutes les valeurs de `border` des règles précédentes, même si le sélecteur d'identifiant possède une spécificité supérieure.

> [!NOTE]
> La seule façon de surcharger une déclaration importante est d'inclure une autre déclaration importante avec _la même spécificité_ plus tard dans le code source, ou d'en placer une avec une spécificité supérieure.

Un scénario où on peut justifier l'utilisation du marqueur `!important` est le travail dans un outil de gestion de contenu où il n'est pas possible d'éditer le CSS sous-jacent et qu'on souhaite malgré tout surcharger la mise en forme avec un style en incise ou une déclaration importante et qu'on ne peut pas faire autrement. Ceci étant dit, il est toujours préférable d'éviter `!important` quand on peut.

## Impact de l'emplacement

Enfin, il est important de noter que la priorité d'une déclaration CSS dépend de la feuille de style dans laquelle elle est définie.

Les utilisateur·ice·s ont la possibilité de définir des feuilles de style personnalisées pour remplacer les styles définis par le·la développeur·euse. Par exemple, un·e utilisateur·ice malvoyant·e peut souhaiter doubler la taille de la police sur toutes les pages web qu'il consulte afin de faciliter la lecture.

### Ordre des déclarations

Les déclarations conflictuelles sont appliquées dans l'ordre suivant. Celles qui arrivant après dans la liste l'emportent sur les éléments antérieurs&nbsp;:

1. Les déclarations des feuilles de style du navigateur (c'est-à-dire la mise en forme par défaut du navigateur, en l'absence de toute autre mise en forme).
2. Les déclarations normales des feuilles de styles de l'utilisateur·ice (les styles personnalisés, propres à chaque personne).
3. Les déclarations normales des feuilles de styles du site (écrites par les équipes de développement web).
4. Les déclarations importantes des feuilles de styles du site.
5. Les déclarations importantes des feuilles de styles de l'utilisateur·ice.
6. Les déclarations importantes des feuilles de style du navigateur.

> [!NOTE]
> L'ordre de précédence est inversé pour les styles marqués avec `!important`. En effet, les équipes de développement web pourraient vouloir surcharger les feuilles de styles des personnes afin de s'assurer qu'un <i lang="en">design</i> fonctionne correctement. Toutefois, les personnes peuvent avoir de bonnes raisons de surcharger ces styles provenant du site et peuvent le faire à l'aide de `!important` dans leurs règles.

## Résumé

Si vous avez compris l'essentiel de cet article, bravo — vous commencez à vous familiariser avec les mécanismes fondamentaux du CSS.

Si vous n'avez pas tout à fait saisi les concepts de cascade, de spécificité et d'héritage, ne vous inquiétez pas&nbsp;! C'est sans aucun doute le sujet le plus complexe que nous ayons abordé jusqu'à présent dans ce cours, et même les développeur·euse·s web professionnels ont parfois du mal à le maîtriser. Nous vous conseillons de revenir sur cet article à plusieurs reprises au fur et à mesure que vous avancez dans le cours, et de continuer à y réfléchir.

N'hésitez pas à revenir ici si vous rencontrez des problèmes inhabituels, par exemple si les styles ne s'appliquent pas comme prévu. Il peut s'agir d'un problème de spécificité. Nous vous proposons ensuite quelques exercices qui vous permettent de vérifier si vous avez bien compris et assimilé les informations que nous vous avons fournies sur la cascade.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}
