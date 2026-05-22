---
title: Spécificité
slug: Web/CSS/Guides/Cascade/Specificity
l10n:
  sourceCommit: da60cb61c2cbb7fb35807515095d9efb129eacbc
---

La **Spécificité** est le poids que les navigateurs utilisent dans l'algorithme de cascade pour déterminer la [déclaration CSS](/fr/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#syntaxe_css_de_base) la plus pertinente pour un élément, ce qui, à son tour, détermine la valeur de la propriété à appliquer à l'élément. L'algorithme de spécificité calcule ce poids à partir d'un [sélecteur CSS](/fr/docs/Web/CSS/Reference#sélecteurs) et compare les valeurs résultantes pour décider quelle règle, parmi les déclarations CSS concurrentes au sein de la même origine et couche, est appliquée à un élément.

> [!NOTE]
> Les navigateurs considèrent la spécificité **après** avoir déterminé [l'origine et l'importance de la cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction). En d'autres termes, pour les déclarations de propriété concurrentes, la spécificité est pertinente et comparée uniquement entre les sélecteurs de la même [origine et couche de la cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) qui a la priorité pour la propriété. La [proximité de portée](/fr/docs/Web/CSS/Reference/At-rules/@scope#comment_les_conflits_de_portée_sont_résolus) et l'ordre d'apparition deviennent pertinents lorsque les spécificités des sélecteurs des déclarations concurrentes dans la couche de la cascade ayant la priorité sont égales.

## Comment la spécificité est calculée ?

La spécificité est le poids appliqué à une déclaration CSS donnée. L'algorithme de spécificité calcule ce poids en fonction du nombre de [sélecteurs de chaque catégorie de poids](#catégories_de_poids_des_sélecteurs) dans le sélecteur correspondant à l'élément (ou pseudo-élément). S'il y a deux déclarations ou plus fournissant des valeurs de propriété différentes pour le même élément, la valeur de la déclaration dans le bloc de style ayant le sélecteur correspondant avec le poids le plus élevé est appliquée.

La valeur de spécificité est essentiellement une valeur à trois colonnes de trois catégories ou poids — ID, CLASSE et TYPE — correspondant aux trois types de sélecteurs. La valeur représente le nombre de composants de sélecteur dans chaque catégorie de poids et est écrite sous la forme _ID, CLASSE, TYPE_. Les trois colonnes sont créées en comptant le nombre de composants de sélecteur pour chaque catégorie de poids de sélecteur dans les sélecteurs qui correspondent à l'élément.

### Catégories de poids des sélecteurs

Les catégories de poids des sélecteurs sont listées ici dans l'ordre de spécificité décroissante&nbsp;:

- La colonne ID
  - : Inclut seulement [les sélecteurs d'identifiants (ID)](/fr/docs/Web/CSS/Reference/Selectors/ID_selectors), tels que `#exemple`. Pour chaque ID dans un sélecteur correspondant, ajoutez 1-0-0 à la valeur de poids.
- La colonne CLASSE
  - : Inclut [les sélecteurs de classe](/fr/docs/Web/CSS/Reference/Selectors/Class_selectors), tels que `.maClasse`, les sélecteurs d'attributs comme `[type="radio"]` et `[lang|="fr"]`, et les pseudo-classes, telles que `:hover`, `:nth-of-type(3n)` et `:required`. Pour chaque classe, sélecteur d'attribut ou pseudo-classe dans un sélecteur correspondant, ajoutez 0-1-0 à la valeur de poids.
- La colonne TYPE
  - : Inclut [les sélecteurs de type](/fr/docs/Web/CSS/Reference/Selectors/Type_selectors), tels que `p`, `h1` et `td`, et les pseudo-éléments comme `::before`, `::placeholder` et tous les autres sélecteurs avec une notation à double deux-points. Pour chaque type ou pseudo-élément dans un sélecteur correspondant, ajoutez 0-0-1 à la valeur de poids.
- Pas de valeur
  - : Le sélecteur universel ({{CSSxRef("Universal_selectors", "*")}}) et la pseudo-classe {{CSSxRef(":where()")}} et ses paramètres ne sont pas pris en compte lors du calcul du poids, donc leur valeur est 0-0-0, mais ils correspondent aux éléments. Ces sélecteurs n'ont pas d'impact sur la valeur du poids de spécificité.

Les combinateurs, tels que {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [« »](/fr/docs/Web/CSS/Reference/Selectors/Descendant_combinator) et {{CSSxRef("Column_combinator", "||")}}, peuvent rendre un sélecteur plus spécifique dans ce qui est sélectionné, mais ils n'ajoutent aucune valeur au poids de spécificité.

Le combinateur d'imbrication `&` ne ajoute pas de poids de spécificité, mais les règles imbriquées le font. En termes de spécificité et de fonctionnalité, l'imbrication est très similaire à la pseudo-classe {{CSSxRef(":is()")}}.

Comme l'imbrication, les pseudo-classes {{CSSxRef(":is()")}}, {{CSSxRef(":has()")}} et la négation ({{CSSxRef(":not()")}}) n'ajoutent elles-mêmes aucun poids. Cependant, les paramètres de ces sélecteurs le font. Le poids de spécificité de chacun provient du paramètre de sélecteur dans la liste des sélecteurs ayant la spécificité la plus élevée. De même, pour les sélecteurs imbriqués, le poids de spécificité ajouté par le composant de sélecteur imbriqué est le sélecteur dans la liste séparée par des virgules des sélecteurs imbriqués ayant la spécificité la plus élevée.

Les exceptions [`:not()`, `:is()`, `:has()` et l'imbrication CSS](#les_exceptions_is_not_has_et_dimbrication_css) sont discutées ci-dessous.

#### Sélecteur correspondant

Le poids de spécificité provient du sélecteur correspondant. Prenons cet exemple de sélecteur CSS avec trois sélecteurs séparés par des virgules&nbsp;:

```css
[type="password"],
input:focus,
:root #monApp input:required {
  color: blue;
}
```

Le sélecteur `[type="password"]` dans la liste de sélecteurs ci-dessus, avec un poids de spécificité de `0-1-0`, applique la déclaration `color: blue` à tous les types d'entrée de mot de passe.

Tous les champs de saisie, quel que soit leur type, lorsqu'ils reçoivent le focus, correspondent au deuxième sélecteur de la liste, `input:focus`, avec un poids de spécificité de `0-1-1`&nbsp;; ce poids est composé de la pseudo-classe `:focus` (0-1-0) et du type `input` (0-0-1). Si le champ de saisie de mot de passe a le focus, il correspond à `input:focus`, et le poids de spécificité pour la déclaration de style `color: blue` est de `0-1-1`. Lorsque ce champ de saisie de mot de passe n'a pas le focus, le poids de spécificité reste à `0-1-0`.

La spécificité pour un champ de saisie requis imbriqué dans un élément avec l'attribut `id="monApp"` est de `1-2-1`, basée sur un ID, deux pseudo-classes et un type d'élément.

Si le type de champ de saisie de mot de passe avec `required` est imbriqué dans un élément avec `id="monApp"`, le poids de spécificité est de `1-2-1`, basé sur un ID, deux pseudo-classes et un type d'élément, qu'il ait le focus ou non. Pourquoi le poids de spécificité est-il de `1-2-1` plutôt que `0-1-1` ou `0-1-0` dans ce cas&nbsp;? Parce que le poids de spécificité provient du sélecteur correspondant ayant le poids de spécificité le plus élevé. Le poids est déterminé en comparant les valeurs dans les trois colonnes, de gauche à droite.

```css
[type="password"] {
  /* 0-1-0 */
}
input:focus {
  /* 0-1-1 */
}
:root #monApp input:required {
  /* 1-2-1 */
}
```

### Comparaison en trois colonnes

Une fois que les valeurs de spécificité des sélecteurs pertinents sont déterminées, le nombre de composants de sélecteur dans chaque colonne est comparé, de gauche à droite.

```css
#monElement {
  color: green; /* 1-0-0 - GAGNE !! */
}
.monCorps .classeSection .classeParente [id="monElement"] {
  color: yellow; /* 0-4-0 */
}
```

La première colonne est la valeur du composant _ID_, qui est le nombre d'ID dans chaque sélecteur. Les nombres dans les colonnes _ID_ des sélecteurs en compétition sont comparés. Le sélecteur avec la valeur la plus élevée dans la colonne _ID_ gagne, peu importe les valeurs dans les autres colonnes. Dans l'exemple ci-dessus, même si le sélecteur jaune a plus de composants au total, seule la valeur de la première colonne compte.

Si le nombre dans les colonnes _ID_ des sélecteurs en compétition est le même, alors la colonne suivante, _CLASSE_, est comparée, comme montré ci-dessous.

```css
#monElement {
  color: yellow; /* 1-0-0 */
}
#monApp [id="monElement"] {
  color: green; /* 1-1-0 - GAGNE !! */
}
```

La colonne _CLASSE_ est le nombre de noms de classes, de sélecteurs d'attributs et de pseudo-classes dans le sélecteur. Lorsque la valeur de la colonne _ID_ est la même, le sélecteur avec la valeur la plus élevée dans la colonne _CLASSE_ gagne, peu importe la valeur dans la colonne _TYPE_. C'est montré dans l'exemple ci-dessous.

```css
:root input {
  color: green; /* 0-1-1 - GAGNE parceque la colonne CLASSE est plus grande */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Si les nombres dans les colonnes _CLASSE_ et _ID_ des sélecteurs en compétition sont les mêmes, la colonne _TYPE_ devient pertinente. La colonne _TYPE_ est le nombre de types d'éléments et de pseudo-éléments dans le sélecteur. Lorsque les deux premières colonnes ont la même valeur, le sélecteur avec le nombre le plus élevé dans la colonne _TYPE_ gagne.

Si les sélecteurs en compétition ont les mêmes valeurs dans les trois colonnes, la règle de proximité entre en jeu, où le dernier style déclaré a la priorité.

```css
input.maClasse {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 GAGNE parceque la règle vient après */
}
```

### Les exceptions `:is()`, `:not()`, `:has()` et d'imbrication CSS

La pseudo-classe qui correspond à n'importe quel élément {{CSSxRef(":is()")}}, la pseudo-classe relationnelle {{CSSxRef(":has()")}}, et la pseudo-classe de négation {{CSSxRef(":not()")}} _ne_ sont _pas_ considérées comme des pseudo-classes dans le calcul de la spécificité. Elles n'ajoutent elles-mêmes aucun poids à l'équation de spécificité. Cependant, les paramètres de sélecteur passés dans les parenthèses de la pseudo-classe font partie de l'algorithme de spécificité&nbsp;; le poids des pseudo-classes `:is()`, `:has()` et `:not()` dans le calcul de la spécificité est le poids des paramètres du sélecteur.

```css
p {
  /* 0-0-1 */
}
:is(p) {
  /* 0-0-1 */
}

h2:nth-last-of-type(n + 2) {
  /* 0-1-1 */
}
h2:has(~ h2) {
  /* 0-0-2 */
}

div.outer p {
  /* 0-1-2 */
}
div:not(.inner) p {
  /* 0-1-2 */
}
```

Notez que dans l'exemple CSS ci-dessus, le poids de spécificité fourni par les pseudo-classes `:is()`, `:has()` et `:not()` est la valeur du paramètre du sélecteur, et non de la pseudo-classe elle-même.

Les trois pseudo-classes acceptent des listes de sélecteurs complexes, une liste de sélecteurs séparés par des virgules, comme paramètre. Cette fonctionnalité peut être utilisée pour augmenter la spécificité d'un sélecteur&nbsp;:

```css
:is(p, #fauxId) {
  /* 1-0-0 */
}
h1:has(+ h2, > #fauxId) {
  /* 1-0-1 */
}
p:not(#fauxId) {
  /* 1-0-1 */
}
div:not(.interne, #fauxId) p {
  /* 1-0-2 */
}
```

Dans le bloc de code CSS ci-dessus, nous avons inclus `#fauxId` dans les sélecteurs. Ce `#fauxId` ajoute `1-0-0` au poids de spécificité de chaque paragraphe.

Lors de la création de listes de sélecteurs complexes avec [l'imbrication CSS](/fr/docs/Web/CSS/Guides/Nesting), cela se comporte exactement de la même manière que la pseudo-classe `:is()`.

```css
p,
#fauxId {
  span {
    /* 1-0-1 */
  }
}
```

Dans le bloc de code ci-dessus, le sélecteur complexe `p, #fauxId` tire sa spécificité à la fois de `#fauxId` et de `span`, ce qui donne une spécificité de `1-0-1` tant pour `p span` que pour `#fauxId span`. Cette spécificité est équivalente à celle du sélecteur `:is(p, #fauxId) span`.

En général, il est préférable de maintenir la spécificité au minimum, mais si vous devez augmenter la spécificité d'un élément pour une raison particulière, ces trois pseudo-classes peuvent vous aider.

```css
a:not(#fauxId#fauxId#fauxId) {
  color: blue; /* 3-0-1 */
}
```

Dans cet exemple, tous les liens sont bleus, sauf si cette règle est remplacée par une déclaration de lien comportant au moins trois identifiants, si une valeur de couleur associée à un élément `a` inclut le [drapeau `!important`](#lexception_!important), ou si le lien comporte une déclaration de couleur dans un [style embarqué](#styles_embarqués). Si vous utilisez cette technique, ajoutez un commentaire pour expliquer pourquoi cette astuce était nécessaire.

### Styles embarqués

Les styles embarqués ajoutés à un élément (par exemple, `style="font-weight: bold;"`) remplacent toujours les styles normaux dans les feuilles de style du site et peuvent donc être considérés comme ayant la spécificité la plus élevée. Pensez aux styles embarqués comme ayant un poids de spécificité de `1-0-0-0`.

La seule façon de remplacer les styles embarqués est d'utiliser `!important`.

De nombreux <i lang="en">frameworks</i> et bibliothèques JavaScript ajoutent des styles embarqués. Utiliser `!important` avec un sélecteur très ciblé, comme un sélecteur d'attribut utilisant le style embarqué, est un moyen de remplacer ces styles embarqués.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Assurez-vous d'inclure un commentaire à chaque utilisation du drapeau important afin que les mainteneurs du code comprennent pourquoi un anti-modèle CSS a été utilisé.

### L'exception `!important`

Les déclarations CSS marquées comme importantes remplacent toutes les autres déclarations dans la même couche et origine de la cascade. Bien que techniquement, [`!important`](/fr/docs/Web/CSS/Reference/Values/important) n'ait rien à voir avec la spécificité, il interagit directement avec la spécificité et la cascade. Il inverse l'ordre de la [cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction) des feuilles de style.

Si des déclarations de la même origine et de la même couche de la cascade entrent en conflit et qu'une valeur de propriété a le drapeau `!important` défini, la déclaration importante est appliquée quelle que soit la spécificité. Lorsque des déclarations conflictuelles de la même origine et de la même couche de la cascade avec le drapeau `!important` sont appliquées au même élément, la déclaration avec une spécificité plus grande est appliquée.

Utiliser `!important` pour remplacer la spécificité est considéré comme une **mauvaise pratique** et doit être évité à cette fin. Comprendre et utiliser efficacement la spécificité et la cascade peut éliminer tout besoin du drapeau `!important`.

Au lieu d'utiliser `!important` pour remplacer le CSS étranger (provenant de bibliothèques externes, comme Bootstrap ou normalize.css), importez les scripts tiers directement dans des [couches de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer). Si vous devez utiliser `!important` dans votre CSS, commentez votre utilisation afin que les futurs mainteneur·euse·s du code sachent pourquoi la déclaration a été marquée comme importante et sachent ne pas la remplacer. Mais surtout, n'utilisez pas `!important` lors de l'écriture de plugins ou de <i lang="en">frameworks</i> que d'autres développeur·euse·s doivent intégrer sans pouvoir les contrôler.

### L'exception `:where()`

La pseudo-classe d'ajustement de spécificité {{CSSxRef(":where()")}} a toujours une spécificité remplacée par zéro, `0-0-0`. Elle permet de rendre les sélecteurs CSS très spécifiques quant à l'élément ciblé sans aucune augmentation de la spécificité.

Lors de la création de CSS tiers à utiliser par des développeur·euse·s qui n'ont pas accès pour modifier votre CSS, il est considéré comme une bonne pratique de créer un CSS avec la spécificité la plus faible possible. Par exemple, si votre thème inclut le CSS suivants&nbsp;:

```css
:where(#themeDefaut) a {
  /* 0-0-1 */
  color: red;
}
```

Le·la développeur·euse implémentant le composant peut facilement remplacer la couleur des liens en utilisant uniquement des sélecteurs de type.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Comment les blocs `@scope` affectent la spécificité

Inclure un ensemble de règles à l'intérieur d'un bloc {{CSSxRef("@scope")}} n'affecte pas la spécificité de son sélecteur, quel que soit le sélecteur utilisé à l'intérieur de la [racine et de la limite du scope](/fr/docs/Web/CSS/Reference/At-rules/@scope#syntaxe).
Cependant, si vous décidez d'ajouter explicitement la pseudo-classe {{CSSxRef(":scope")}}, vous devez en tenir compte lors du calcul de leur spécificité.
`:scope`, comme toutes les pseudo-classes régulières, a une spécificité de 0-1-0. Par exemple&nbsp;:

```css
@scope (.corps-article) {
  /* :scope img a une spécificité de 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Voir [Spécificité dans `@scope`](/fr/docs/Web/CSS/Reference/At-rules/@scope#spécificité_dans_scope) pour plus d'informations.

## Astuces pour gérer les problèmes de spécificité

Au lieu d'utiliser `!important`, envisagez d'utiliser des couches de cascade et d'utiliser une spécificité faible dans tout votre CSS afin que les styles soient facilement remplacés par des règles légèrement plus spécifiques. L'utilisation de HTML sémantique aide à fournir des points d'ancrage à partir desquels appliquer le style.

### Rendre les sélecteurs spécifiques avec et sans ajouter de spécificité

En indiquant la section du document que vous stylisez avant l'élément que vous sélectionnez, la règle devient plus spécifique. Selon la manière dont vous l'ajoutez, vous pouvez ajouter un peu, beaucoup ou aucune spécificité, comme illustré ci-dessous&nbsp;:

```html
<main id="monContenu">
  <h1>Texte</h1>
</main>
```

```css
#monContenu h1 {
  color: green; /* 1-0-1 */
}
[id="monContenu"] h1 {
  color: yellow; /* 0-1-1 */
}
:where(#monContenu) h1 {
  color: blue; /* 0-0-1 */
}
```

Peu importe l'ordre, le titre est vert, car cette règle est la plus spécifique.

#### Réduire la spécificité des ID

La spécificité est basée sur la forme d'un sélecteur. Inclure un `id` d'un élément en tant que sélecteur d'attribut plutôt qu'en tant que sélecteur d'identifiant est un bon moyen de rendre un élément plus spécifique sans ajouter une spécificité excessive. Dans l'exemple précédent, le sélecteur `[id="monContenu"]` compte comme un sélecteur d'attribut pour déterminer la spécificité du sélecteur, même s'il sélectionne un ID.

Vous pouvez également inclure un `id` ou toute partie d'un sélecteur en tant que paramètre dans la pseudo-classe `:where()` pour ajuster la spécificité si vous avez besoin de rendre un sélecteur plus spécifique sans ajouter de spécificité du tout.

### Augmenter la spécificité en dupliquant le sélecteur

Dans le cas particulier de l'augmentation de la spécificité, vous pouvez dupliquer les poids des colonnes _CLASSE_ ou _ID_. La duplication des sélecteurs d'identifiant, de classe, de pseudo-classe ou d'attribut dans un sélecteur composé, augmente la spécificité lors de la substitution de sélecteurs très spécifiques sur lesquels vous n'avez aucun contrôle.

```css
#monId#monId#monId span {
  /* 3-0-1 */
}
.maCLasse.maCLasse.maCLasse span {
  /* 0-3-1 */
}
```

Utilisez ceci avec parcimonie, voire pas du tout. Si vous utilisez la duplication de sélecteurs, commentez toujours votre CSS.

En utilisant `:is()` et `:not()` (et aussi `:has()`), vous pouvez augmenter la spécificité même si vous ne pouvez pas ajouter un `id` à un élément parent&nbsp;:

```css
:not(#fauxId#fauxId#fauxId) span {
  /* 3-0-1 */
}
:is(#fauxId#fauxId#fauxId, span) {
  /* 3-0-0 */
}
```

### Priorité sur le CSS tiers

L'utilisation des couches de cascade est la méthode standard pour permettre à un ensemble de styles de prendre le pas sur un autre ensemble de styles&nbsp;; les couches de cascade permettent cela sans utiliser la spécificité&nbsp;! Les styles de site normaux (non importants) importés dans des couches de cascade ont une priorité inférieure à celle des styles de site qui ne sont pas en couche.

Si les styles proviennent d'une feuille de style que vous ne pouvez pas modifier ou que vous ne comprenez pas et que vous devez remplacer des styles, une stratégie consiste à importer les styles que vous ne contrôlez pas dans une couche de cascade. Les styles dans les couches déclarées ultérieurement ont la priorité, les styles non en couche ayant la priorité sur toutes les couches provenant de la même origine.

Lorsque deux sélecteurs de différentes couches correspondent au même élément, l'origine et l'importance priment&nbsp;; la spécificité du sélecteur dans la feuille de style perdante est sans importance.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Dans l'exemple ci-dessus, tout le texte des paragraphes, y compris le contenu imbriqué, est une taille de `1rem` peu importe le nombre de noms de classe que les paragraphes ont et qui correspondent à la feuille de style TW.

### Éviter et surcharger `!important`

La meilleure approche est de ne pas utiliser `!important`. Les explications ci-dessus sur la spécificité devraient être utiles pour éviter d'utiliser ce drapeau et le supprimer complètement lorsqu'il est rencontré.

Pour supprimer le besoin perçu de `!important`, vous pouvez faire l'une des choses suivantes&nbsp;:

- Augmenter la spécificité du sélecteur de la déclaration anciennement `!important` afin qu'elle soit supérieure à celle des autres déclarations
- Lui donner la même spécificité et la placer après la déclaration qu'elle est censée remplacer
- Réduire la spécificité du sélecteur que vous essayez de remplacer.

Toutes ces méthodes sont couvertes dans les sections précédentes.

Si vous n'êtes pas en mesure de supprimer les drapeaux `!important` d'une feuille de style d'un site, la seule solution pour remplacer les styles importants est d'utiliser `!important`. Créer une [couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) de remplacements de déclarations importantes est une excellente solution. Deux façons de le faire incluent&nbsp;:

#### Méthode 1

1. Créez une feuille de style séparée et courte contenant uniquement des déclarations importantes remplaçant spécifiquement toutes les déclarations importantes que vous n'avez pas pu supprimer.
2. Importez cette feuille de style en tant que premier import dans votre CSS en utilisant `layer()`, y compris l'instruction `@import`, avant de lier d'autres feuilles de style. Cela garantit que les remplacements importants sont importés en tant que première couche.

```css
@import "importantOverrides.css" layer();
```

#### Méthode 2

1. Au début de vos déclarations de feuille de style, créez une couche de cascade nommée, comme ceci&nbsp;:

   ```css
   @layer importantOverrides;
   ```

2. Chaque fois que vous devez remplacer une déclaration importante, déclarez-la dans la couche nommée. Ne déclarez que des règles importantes dans la couche.

   ```css
   [id="monElement"] p {
     /* styles normaux ici */
   }
   @layer importantOverrides {
     [id="monElement"] p {
       /* styles importants ici */
     }
   }
   ```

La spécificité du sélecteur du style important dans la couche peut être faible, tant qu'elle correspond à l'élément que vous essayez de remplacer. Les couches normales doivent être déclarées en dehors de la couche, car les styles en couches ont une priorité inférieure à celle des styles non en couches.

### Ignorance de la proximité dans l'arbre

La proximité d'un élément par rapport à d'autres éléments référencés dans un sélecteur donné n'a aucun impact sur la spécificité.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Les éléments `<h1>` sont violets parce que lorsque les déclarations ont la même spécificité, le dernier sélecteur déclaré a la priorité.

### Éléments ciblés directement ou styles hérités

Les styles appliqués directement à un élément ont toujours la priorité sur les styles hérités, quelle que soit la spécificité de la règle héritée. Prenons l'exemple du code CSS et HTML suivant&nbsp;:

```css
#parent {
  color: green;
}

h1 {
  color: purple;
}
```

```html
<html lang="fr">
  <body id="parent">
    <h1>Je suis un titre !</h1>
  </body>
</html>
```

La balise `h1` est violette, car le sélecteur `h1` cible spécifiquement cet élément, tandis que la couleur verte est héritée des déclarations `#parent`.

## Exemples

Dans le code CSS ci-dessous, nous avons trois sélecteurs ciblant les éléments HTML {{HTMLElement("input")}} afin de définir une couleur. Pour un champ de saisie donné, le poids de spécificité de la déclaration de couleur qui prévaut est celui du sélecteur correspondant ayant le poids le plus élevé&nbsp;:

```css
#monElement input.maClasse {
  color: red;
} /* 1-1-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
html body main input {
  color: green;
} /* 0-0-4 */
```

Si tous les sélecteurs ci-dessus ciblent le même élément de saisie, celui-ci est affiché en rouge, car la première déclaration possède la valeur la plus élevée dans la colonne _ID_.

Le dernier sélecteur comporte quatre composants _TYPE_. Bien qu'il présente la valeur entière la plus élevée, quel que soit le nombre d'éléments et de pseudo-éléments inclus (même s'il y en avait 150), les composants _TYPE_ n'ont jamais la priorité sur les composants _CLASSE_. Les valeurs des colonnes sont comparées de gauche à droite lorsque les valeurs des colonnes sont égales.

Si nous avions converti le sélecteur d'identifiant dans le code d'exemple ci-dessus en un sélecteur d'attribut, les deux premiers sélecteurs auraient la même spécificité, comme indiqué ci-dessous&nbsp;:

```css
[id="monElement"] input.maClasse {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Lorsque plusieurs déclarations ont la même spécificité, c'est la dernière déclaration trouvée dans le CSS qui s'applique à l'élément. Si les deux sélecteurs correspondent au même {{HTMLElement("input")}}, la couleur est bleue.

## Notes complémentaires

Quelques points à retenir concernant la spécificité&nbsp;:

1. La spécificité ne s'applique que lorsque le même élément est ciblé par plusieurs déclarations appartenant au même niveau de cascade ou à la même origine. La spécificité n'a d'importance que pour les déclarations de même importance et de même origine, ainsi que pour celles appartenant au même [niveau de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer). Si des sélecteurs correspondants proviennent d'origines différentes, la [cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction) détermine quelle déclaration prévaut.

2. Lorsque deux sélecteurs appartenant au même niveau de cascade et à la même origine ont la même spécificité, la proximité de portée est alors calculée&nbsp;; l'ensemble de règles présentant la plus faible proximité de portée l'emporte. Voir [Comment les conflits de `@scope` sont résolus](/fr/docs/Web/CSS/Reference/At-rules/@scope#comment_les_conflits_de_scope_sont_résolus) pour plus de détails et un exemple.

3. Si la proximité de portée est également la même pour les deux sélecteurs, l'ordre de la source entre alors en jeu. À toutes autres conditions égales, le dernier sélecteur l'emporte.

4. Conformément aux règles CSS, les [éléments directement ciblés](#éléments_ciblés_directement_ou_styles_hérités) ont toujours la priorité sur les règles qu'un élément hérite de son ancêtre.

5. La [proximité des éléments](#ignorance_de_la_proximité_dans_larbre) dans l'arborescence du document n'a aucun effet sur la spécificité.

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [de cascade et d'héritage CSS](/fr/docs/Web/CSS/Guides/Cascade)
- [Apprendre&nbsp;: Gérer les conflits](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#spécificité_2)
- [Apprendre&nbsp;: Les couches de cascade](/fr/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax) module
- [Introduction à la syntaxe CSS&nbsp;: déclarations, règles et instructions](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
- [Gestion des erreurs CSS](/fr/docs/Web/CSS/Guides/Syntax/Error_handling)
- [Règles @](/fr/docs/Web/CSS/Guides/Syntax/At-rules)
- [Héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
- Valeurs&nbsp;: [initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale), [calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée), [utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) et [réelle](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelle)
- Le module [de la syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- Le module [d'imbrication CSS](/fr/docs/Web/CSS/Guides/Nesting)
- [Calculatrice de spécificité <sup>(angl.)</sup>](https://specificity.keegan.st/) par Keegan Street&nbsp;: Un site interactif pour tester et comprendre vos propres règles CSS
- [SpeciFISHity <sup>(angl.)</sup>](https://specifishity.com/) sur specifishity.com&nbsp;: Une manière amusante d'apprendre la spécificité CSS
- [Exercice _ID-CLASSE-TYPE_ <sup>(angl.)</sup>](https://estelle.github.io/CSS/selectors/exercises/specificity.html)&nbsp;: Un quiz sur la spécificité par Estelle Weyl
