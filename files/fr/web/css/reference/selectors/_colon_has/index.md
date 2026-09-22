---
title: Pseudo-classe CSS `:has()`
short-title: :has()
slug: Web/CSS/Reference/Selectors/:has
l10n:
  sourceCommit: ebc0a01b494e58ada6d89a5f94141cdcba7efbc7
---

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:has()`** permet de cibler un élément si au moins un des sélecteurs passés en paramètre correspond à l'élément (selon la portée, {{CSSxRef(":scope")}}, de l'élément).

```css
/* Sélectionne un titre h1 avec un élément de paragraphe qui suit
immédiatement le h1 et applique le style au h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Cette pseudo-classe `:has()` prend en paramètre une liste de sélecteurs.

## Syntaxe

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Si la pseudo-classe `:has()` n'est pas prise en charge par un navigateur, l'ensemble du bloc sélecteur échoue, sauf si `:has()` figure dans une liste de sélecteurs tolérants, comme dans {{CSSxRef(":is()")}} et {{CSSxRef(":where()")}}.

La pseudo-classe `:has()` ne peut pas être imbriquée dans une autre `:has()`.

Les pseudo-éléments ne sont pas non plus des sélecteurs valides dans `:has()` et les pseudo-éléments ne sont pas des ancres valides pour `:has()`. En effet, de nombreux pseudo-éléments existent de manière conditionnelle en fonction du style de leurs ancêtres et le fait de permettre leur interrogation par `:has()` peut entraîner des requêtes cycliques.

## Exemples

### Sélectionner un élément parent

Vous recherchez peut-être un «&nbsp;[combinateur](/fr/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinateurs) parent&nbsp;», qui vous permet de remonter l'arbre DOM et de sélectionner le parent d'un élément spécifique. La pseudo-classe `:has()` le fait en utilisant `parent:has(child)` (pour n'importe quel parent) ou `parent:has(> child)` (pour le parent direct). Cet exemple montre comment mettre en forme un élément `<section>` lorsqu'il contient un enfant avec la classe `vedette`.

```html
<section>
  <article class="vedette">Contenu en vedette</article>
  <article>Contenu régulier</article>
</section>
<section>
  <article>Contenu régulier</article>
</section>
```

```css
section:has(.vedette) {
  border: 2px solid blue;
}
```

### Résultat

{{EmbedLiveSample("Sélectionner un élément parent", "", 200)}}

### Avec le combinateur de voisins

La déclaration de style `:has()` dans l'exemple suivant ajuste l'espacement après les titres `<h1>` s'ils sont immédiatement suivis d'un titre `<h2>`.

#### HTML

```html
<section>
  <article>
    <h1>Journal Matinal</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
  <article>
    <h1>Journal Matinal</h1>
    <h2>Vous livrer les actualités chaque matin</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
</section>
```

#### CSS

```css hidden
section {
  display: flex;
  align-items: start;
  justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1,
h2 {
  font-size: 1.2em;
}

h2 {
  font-size: 1em;
  color: rgb(150 149 149);
}
```

```css
h1,
h2 {
  margin: 0 0 1rem 0;
}

h1:has(+ h2) {
  margin: 0 0 0.25rem 0;
}
```

#### Résultat

{{EmbedLiveSample("Avec le combinateur de voisins", 600, 150)}}

Cet exemple montre deux textes similaires côte à côte pour comparaison — le gauche avec un titre `H1` suivi d'un paragraphe et le droit avec un titre `H1` suivi d'un titre `H2` et ensuite d'un paragraphe. Dans l'exemple de droite, `:has()` aide à sélectionner l'élément `H1` qui est immédiatement suivi d'un élément `H2` (indiqué par le combinator de voisin suivant [`+`](/fr/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)) et la règle CSS réduit l'espacement après un tel élément `H1`. Sans la pseudo-classe `:has()`, vous ne pouvez pas utiliser les sélecteurs CSS pour sélectionner un voisin précédent d'un type différent ou un élément parent.

Cette utilisation de `:has()` est analogue à une [assertion anticipée](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) dans les expressions régulières, car elles permettent toutes deux de sélectionner des éléments (ou des chaînes de caractères dans les expressions régulières) en fonction de ce qui les _suit_, ce qui n'est possible que si le processeur peut «&nbsp;revenir en arrière&nbsp;». Dans l'expression régulière `abc(?=xyz)`, la chaîne de caractères `abc` correspond uniquement si elle est immédiatement suivie de la chaîne de caractères `xyz`. Comme il s'agit d'une opération d'anticipation, `xyz` n'est pas inclus dans la correspondance. La construction analogue en CSS est `.abc:has(+ .xyz)`&nbsp;: elle sélectionne l'élément `.abc` uniquement s'il possède un élément voisin suivant `.xyz`. La partie `:has(+ .xyz)` recherche l'élément suivant `.xyz`, mais sélectionne ensuite l'élément précédent `.abc`. De même, vous pouvez implémenter une anticipation négative comme `abc(?!xyz)` en niant `:has()`&nbsp;: `.abc:not(:has(+ .xyz))` correspond uniquement aux éléments `.abc` qui ne sont pas suivis de `.xyz` (soit parce que l'élément voisin suivant ne correspond pas à `.xyz`, soit parce qu'il s'agit du dernier nœud enfant).

### Avec la pseudo-classe `:is()`

Cet exemple s'appuie sur l'exemple précédent pour montrer comment sélectionner plusieurs éléments avec `:has()`.

#### HTML

```html
<section>
  <article>
    <h1>Journal Matinal</h1>
    <h2>Vous livrer les actualités chaque matin</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
  <article>
    <h1>Journal Matinal</h1>
    <h2>Vous livrer les actualités chaque matin</h2>
    <h3>8:00</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
</section>
```

#### CSS

```css hidden
section {
  display: flex;
  align-items: start;
  justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1 {
  font-size: 1.2em;
}

h2 {
  font-size: 1em;
  color: rgb(150 149 149);
}

h3 {
  font-size: 0.9em;
  color: darkgrey;
}
```

```css
h1,
h2,
h3 {
  margin: 0 0 1rem 0;
}

:is(h1, h2, h3):has(+ :is(h2, h3, h4)) {
  margin: 0 0 0.25rem 0;
}
```

#### Résultat

{{EmbedLiveSample("Avec la pseudo-classe `:is()`", 600, 170)}}

Ici, la première pseudo-classe {{CSSxRef(":is()")}} est utilisée pour sélectionner n'importe quel élément de titre de la liste. La deuxième pseudo-classe `:is()` est utilisée pour passer une liste de sélecteurs de voisins suivants en tant qu'argument à `:has()`. La pseudo-classe `:has()` aide à sélectionner n'importe quel élément `H1`, `H2` ou `H3` qui est immédiatement suivi (indiqué par [`+`](/fr/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)) d'un élément `H2`, `H3` ou `H4` et la règle CSS réduit l'espacement après de tels éléments `H1`, `H2` ou `H3`.

Ce sélecteur peut également être écrit comme suit&nbsp;:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Opérations logiques

Le sélecteur relationnel `:has()` peut être utilisé pour vérifier si l'une des multiples caractéristiques est vraie ou si toutes les caractéristiques sont vraies.

En utilisant des valeurs séparées par des virgules à l'intérieur du sélecteur relationnel `:has()`, vous vérifiez si l'un des paramètres existe. `x:has(a, b)` met en forme `x` si le descendant `a` OU `b` existe.

En chaînant plusieurs sélecteurs relationnels `:has()` ensemble, vous vérifiez si tous les paramètres existent. `x:has(a):has(b)` met en forme `x` si les descendants `a` ET `b` existent.

```css
body:has(video, audio) {
  /* styles à appliquer si le contenu contient de l'audio OU de la vidéo */
}
body:has(video):has(audio) {
  /* styles à appliquer si le contenu contient à la fois de l'audio ET de la vidéo */
}
```

## Considérations de performance

Certaines utilisations de la pseudo-classe `:has()` peuvent avoir un impact important sur les performances de la page, en particulier lors des mises à jour dynamiques (mutations du DOM). Les moteurs des navigateurs doivent réévaluer les sélecteurs `:has()` lorsque le DOM change, et les sélecteurs complexes ou mal contraints peuvent entraîner des calculs coûteux.

### Éviter l'ancrage large

Le sélecteur d'ancrage (le `A` dans `A:has(B)`) ne doit pas être un élément qui possède trop d'enfants, comme `body`, `:root` ou `*`. Ancrer `:has()` sur des sélecteurs très généraux peut dégrader les performances, car toute modification du DOM dans l'ensemble du sous-arbre d'un élément largement sélectionné oblige le navigateur à vérifier à nouveau la condition `:has()`.

```css example-bad
/* Éviter d'ancrer :has() sur des éléments larges */
body:has(.barre-laterale) {
  /* styles */
}
:root:has(.contenu) {
  /* styles */
}
*:has(.element) {
  /* styles */
}
```

Ancrez plutôt `:has()` sur des éléments précis comme `.conteneur` ou `.galerie` pour réduire la portée et améliorer les performances.

```css example-good
/* Utiliser des conteneurs précis pour limiter la portée */
.conteneur:has(.barre-laterale-deployee) {
  /* styles */
}
.conteneur-de-contenu:has(> article[data-priority="high"]) {
  /* styles */
}
.galerie:has(> img[data-loaded="false"]) {
  /* styles */
}
```

### Réduire les parcours des sous-arbres

Le sélecteur interne (le `B` dans `A:has(B)`) doit utiliser des combinateurs comme `>` ou `+` pour limiter le parcours. Lorsque le sélecteur dans `:has()` n'est pas étroitement contraint, le navigateur peut devoir parcourir l'ensemble du sous-arbre de l'élément d'ancrage à chaque mutation du DOM pour vérifier si la condition est toujours vraie.

Dans cet exemple, toute modification dans `.ancetre` nécessite de vérifier la présence de `.toto` parmi tous les descendants&nbsp;:

```css example-bad
/* Peut déclencher le parcours de l'ensemble du sous-arbre */
.ancetre:has(.toto) {
  /* styles */
}
```

L'utilisation de combinateurs d'enfants ou de voisins limite la portée du sélecteur interne et réduit le coût des mutations du DOM. Dans cet exemple, le navigateur doit uniquement vérifier les enfants directs ou les descendants d'un voisin précis&nbsp;:

```css example-good
/* Plus contraint - limite le parcours */
.ancetre:has(> .toto) {
  /* enfant direct */
}
.ancetre:has(+ .voisin .toto) {
  /* descendant du voisin adjacent */
}
```

Certains sélecteurs internes peuvent forcer le navigateur à remonter la chaîne des ancêtres à chaque mutation du DOM, à la recherche d'ancres potentielles qui pourraient nécessiter une mise à jour. Cela se produit lorsque la structure implique de vérifier les ancêtres de l'élément modifié.

Dans cet exemple, toute modification du DOM nécessite de vérifier si l'élément modifié est un élément quelconque (`*`) qui est un enfant direct de `.toto`, et si son parent (ou d'autres ancêtres) est `.ancetre`.

```css example-bad
/* Peut déclencher le parcours des ancêtres */
.ancetre:has(.toto > *) {
  /* styles */
}
```

Contraindre le sélecteur interne avec des classes précises ou des combinateurs d'enfants directs (par exemple, `.enfant-specifique` dans l'extrait suivant) réduit les parcours coûteux des ancêtres en limitant la vérification du navigateur à un élément bien défini, ce qui améliore les performances.

```css example-good
/* Contraindre le sélecteur interne pour éviter le parcours des ancêtres */
.ancetre:has(.toto > .enfant-specifique) {
  /* styles */
}
```

> [!NOTE]
> Ces caractéristiques de performance peuvent s'améliorer à mesure que les navigateurs optimisent les implémentations de `:has()`, mais les contraintes fondamentales restent les mêmes&nbsp;: `:has()` doit parcourir un sous-arbre entier, vous devez donc réduire au minimum la taille du sous-arbre. Dans un sélecteur comme `A:has(B)`, assurez-vous que `A` ne possède pas trop d'enfants et que `B` est étroitement contraint afin d'éviter les parcours inutiles.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

- Les fonctions de pseudo-classes CSS {{CSSxRef(":is()")}}, {{CSSxRef(":where()")}}, {{CSSxRef(":not()")}}
- [Sélecteurs et combinateurs CSS](/fr/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [Structure du sélecteur CSS](/fr/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [Liste des sélecteurs](/fr/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- [Sélection et parcours de l'arbre DOM](/fr/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
