---
title: Règle CSS `@container`
short-title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: 3e5fd6765f891b6fedae20ce1e31e2fdefe55b3c
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@container`** est une règle conditionnelle de groupe qui applique des styles à un [contexte de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_queries#nommer_les_contextes_de_conteneur).
Les déclarations de style sont filtrées par une condition et appliquées aux élément à l'intérieur du conteneur si la condition est vraie.
La condition est évaluée lorsque la taille du conteneur interrogé, le [`<style-feature>`](#requêtes_de_style_de_conteneur) ou l'état de défilement changent.

La condition doit définir un ou les deux de {{CSSxRef("container-name")}} et `<container-query>`.

La propriété {{CSSxRef("container-name")}} définit une liste de noms de conteneurs de requête, qui sont utilisés pour filtrer les conteneurs ciblés par les règles `@container`.
Les fonctionnalités de conteneur dans le `<container-query>` sont évaluées par rapport aux conteneurs sélectionnés.
Si aucun `<container-name>` n'est défini, les fonctionnalités du `<container-query>` sont évaluées par rapport au conteneur de requête ancêtre le plus proche qui a le {{CSSxRef("container-type")}} correspondant.
Si aucun `<container-query>` n'est défini, les conteneurs nommés sont sélectionnés.

## Syntaxe

```css
/* Avec une <size-query> */
@container (width > 400px) {
  h2 {
    font-size: 1.5em;
  }
}

/* Avec un <container-name> optionnel */
@container tall (height > 30rem) {
  p {
    line-height: 1.6;
  }
}

/* Avec un <container-name> uniquement (la requête est optionnelle) */
@container sidebar {
  h2 {
    background: blue;
  }
}

/* Avec un <scroll-state> */
@container scroll-state(scrollable: top) {
  .back-to-top-link {
    visibility: visible;
  }
}

/* Avec une requête d'ancrage */
@container anchored(fallback: bottom) {
  .infobox::before {
    content: "▲";
    bottom: 100%;
    top: auto;
  }
}

/* Avec un <container-name> et un <scroll-state> */
@container sticky-heading scroll-state(stuck: top) {
  h2 {
    background: purple;
    color: white;
  }
}

/* Multiple requêtes dans une seule condition */
@container (width > 400px) and style(--responsive: true) {
  h2 {
    font-size: 1.5em;
  }
}

/* Liste de conditions */
@container card (width > 400px), style(--responsive: true), scroll-state(stuck: top) {
  h2 {
    font-size: 1.5em;
  }
}

/* Requêtes de style() booléennes */
@container style(--theme: one) or style(--theme: two) {
  /* styles de conteneur correspondants */
}
@container style((--theme: one) or (--theme: two)) {
  /* styles de conteneur correspondants */
}
@container style(--theme: one) and style(--theme: two) {
  /* styles de conteneur correspondants */
}
@container style((--theme: one) and (--theme: two)) {
  /* styles de conteneur correspondants */
}
@container not style(--theme: one) {
  /* styles de conteneur correspondants */
}

/* requêtes de style() avec plage */
@container style(--number > 4) {
  /* styles de conteneur correspondants */
}
```

### Paramètres

- `<container-condition>`
  - : Définit un ou les deux de `<container-name>` et `<container-query>`.
    Les styles définis dans la `<stylesheet>` sont appliqués si la condition est `true`.
    - `<container-name>` {{Optional_Inline}}
      - : Le nom du conteneur à interroger&nbsp;; il est défini comme un {{CSSxRef("&lt;ident&gt;")}}. Si la requête est évaluée à `true`, les styles déclarés sont appliqués aux éléments descendants du conteneur.
    - `<container-query>` {{Optional_Inline}}
      - : Un ensemble de fonctionnalités évaluées sur le conteneur interrogé lorsque la taille, le [`<style-feature>`](#requêtes_de_style_de_conteneur), l'état de défilement, ou la position de repli appliquée en cas de modification du conteneur changent.

### Mots-clés logiques dans les requêtes de conteneur

Des mots-clés logiques peuvent être utilisés pour définir la condition du conteneur&nbsp;:

- `and` combine deux conditions ou plus.
- `or` combine deux conditions ou plus.
- `not` nie la condition. Un seul `not` est autorisé par requête de conteneur et il ne peut pas être utilisé avec les mots-clés `and` ou `or`.

```css
@container (width > 400px) and (height > 400px) {
  /* <stylesheet> */
}

@container (width > 400px) or (height > 400px) {
  /* <stylesheet> */
}

@container not (width < 400px) {
  /* <stylesheet> */
}
```

### Contextes de conteneur nommés

Un contexte de conteneur peut être nommé à l'aide de la propriété {{CSSxRef("container-name")}}.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

La syntaxe raccourcie consiste à utiliser {{CSSxRef("container")}} sous la forme `container: <name> / <type>`, par exemple&nbsp;:

```css
.post {
  container: sidebar / inline-size;
}
```

Dans les requêtes de conteneur, la propriété {{CSSxRef("container-name")}} permet de filtrer l'ensemble des conteneurs pour ne garder que ceux dont le nom correspond à la requête&nbsp;:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Les détails sur l'utilisation et les restrictions de nommage sont décrits dans la page {{CSSxRef("container-name")}}.

### Descripteurs

Les requêtes `<container-condition>` incluent les descripteurs de conteneur [size](#descripteurs_de_taille_de_conteneur), [scroll-state](#descripteurs_détat_de_défilement_du_conteneur) et [anchored](#descripteurs_dancrage_du_conteneur).

#### Descripteurs de taille de conteneur

Le `<container-condition>` peut inclure une ou plusieurs requêtes booléennes de taille, chacune entre parenthèses. Une requête de taille inclut un descripteur de taille, une valeur et — selon le descripteur — un opérateur de comparaison. Les requêtes mesurent toujours la [boîte de contenu](/fr/docs/Web/CSS/Reference/Values/box-edge#content-box) pour la comparaison. La syntaxe pour inclure plusieurs conditions est la même que pour les requêtes de fonctionnalités de taille [`@media`](/fr/docs/Web/CSS/Reference/At-rules/@media).

```css
@container (min-width: 400px) {
  /* … */
}
@container (orientation: landscape) and (width > 400px) {
  /* … */
}
@container (15em <= block-size <= 30em) {
  /* … */
}
```

- `aspect-ratio`
  - : Le {{CSSxRef("aspect-ratio")}} du conteneur, calculé comme le rapport largeur/hauteur du conteneur, exprimé en {{CSSxRef("ratio")}}.

- `block-size`
  - : Le {{CSSxRef("block-size")}} du conteneur, exprimé en {{CSSxRef("length")}}.

- `height`
  - : La hauteur du conteneur, exprimée en {{CSSxRef("length")}}.

- `inline-size`
  - : Le {{CSSxRef("inline-size")}} du conteneur, exprimé en {{CSSxRef("length")}}.

- `orientation`
  - : [L'orientation](/fr/docs/Web/CSS/Reference/At-rules/@media/orientation) du conteneur, soit `landscape`, soit `portrait`.

- `width`
  - : La largeur du conteneur, exprimée en {{CSSxRef("length")}}.

#### Descripteurs d'état de défilement du conteneur

Les descripteurs d'état de défilement sont définis dans le `<container-condition>` comme argument de la fonction `scroll-state()`, par exemple&nbsp;:

```css
@container scroll-state(scrollable: top) {
  /* … */
}
@container scroll-state(scrolled: block-end) {
  /* … */
}
@container scroll-state(stuck: inline-end) {
  /* … */
}
@container scroll-state(snapped: both) {
  /* … */
}
```

Les mots-clés pris en charge pour les descripteurs d'état de défilement incluent les valeurs {{Glossary("physical properties", "physiques")}} et {{Glossary("flow relative values", "relatives au flux")}}.

- `scrollable`
  - : Vérifie si le conteneur peut être défilé dans la direction donnée par une action de l'utilisateur·ice (barre de défilement, geste tactile, etc.). Autrement dit, y a-t-il du contenu débordant dans la direction donnée qui peut être atteint par défilement&nbsp;? Les valeurs valides pour `scrollable` incluent&nbsp;:
    - `none`
      - : Le conteneur n'est pas un {{Glossary("scroll container", "conteneur de défilement")}} ou ne peut pas être défilé dans aucune direction.
    - `top`
      - : Le conteneur peut être défilé vers son bord supérieur.
    - `right`
      - : Le conteneur peut être défilé vers son bord droit.
    - `bottom`
      - : Le conteneur peut être défilé vers son bord inférieur.
    - `left`
      - : Le conteneur peut être défilé vers son bord gauche.
    - `x`
      - : Le conteneur peut être défilé horizontalement vers la gauche, la droite ou les deux.
    - `y`
      - : Le conteneur peut être défilé verticalement vers le haut, le bas ou les deux.
    - `block-start`
      - : Le conteneur peut être défilé vers le début du bloc.
    - `block-end`
      - : Le conteneur peut être défilé vers la fin du bloc.
    - `inline-start`
      - : Le conteneur peut être défilé vers le début de la ligne.
    - `inline-end`
      - : Le conteneur peut être défilé vers la fin de la ligne.
    - `block`
      - : Le conteneur peut être défilé dans la direction du bloc vers le début, la fin ou les deux.
    - `inline`
      - : Le conteneur peut être défilé dans la direction de la ligne vers le début, la fin ou les deux.

    Si le test est réussi, les règles à l'intérieur du bloc `@container` sont appliquées aux descendants du conteneur défilant.

    Pour vérifier si un conteneur est défilable, sans se soucier de la direction, utilisez la valeur `none` avec l'opérateur `not`&nbsp;:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `scrolled`
  - : Vérifie si le conteneur a été récemment défilé dans une direction définie. Les valeurs valides pour `scrolled` incluent les mots-clés suivants&nbsp;:
    - `none`
      - : Le conteneur n'est pas un {{Glossary("scroll container", "conteneur de défilement")}} ou n'a pas été récemment défilé dans une quelconque direction.
    - `top`
      - : Le conteneur a été récemment défilé vers son bord supérieur.
    - `right`
      - : Le conteneur a été récemment défilé vers son bord droit.
    - `bottom`
      - : Le conteneur a été récemment défilé vers son bord inférieur.
    - `left`
      - : Le conteneur a été récemment défilé vers son bord gauche.
    - `x`
      - : Le conteneur a été récemment défilé horizontalement vers la gauche, la droite ou les deux.
    - `y`
      - : Le conteneur a été récemment défilé verticalement vers le haut, le bas ou les deux.
    - `block-start`
      - : Le conteneur a été récemment défilé vers le début du bloc.
    - `block-end`
      - : Le conteneur a été récemment défilé vers la fin du bloc.
    - `inline-start`
      - : Le conteneur a été récemment défilé vers le début de la ligne.
    - `inline-end`
      - : Le conteneur a été récemment défilé vers la fin de la ligne.
    - `block`
      - : Le conteneur a été récemment défilé vers le début ou la fin du bloc.
    - `inline`
      - : Le conteneur a été récemment défilé vers le début ou la fin de la ligne.

    Si le test est réussi, les règles à l'intérieur du bloc `@container` sont appliquées aux descendants du conteneur défilant.

    Pour vérifier si un conteneur a été récemment défilé, sans se soucier de la direction, utilisez la valeur `none` avec l'opérateur `not`&nbsp;:

    ```css
    @container not scroll-state(scrolled: none) {
      /* … */
    }
    ```

- `snapped`
  - : Vérifie si le conteneur va être aligné («&nbsp;snapped&nbsp;») sur un conteneur parent de type [alignement au défilement](/fr/docs/Web/CSS/Guides/Scroll_snap) selon l'axe donné. Les valeurs valides pour `snapped` incluent&nbsp;:
    - `none`
      - : Le conteneur n'est pas une [cible d'accrochage](/fr/docs/Glossary/Scroll_snap#cible_daccrochage) pour son conteneur parent. Si on utilise `snapped: none`, les conteneurs qui _sont_ des cibles d'accrochage n'ont _pas_ les styles `@container`, tandis que les non-cibles _les auront_.
    - `x`
      - : Le conteneur est une cible d'accrochage horizontale pour son conteneur parent.
    - `y`
      - : Le conteneur est une cible d'accrochage verticale pour son conteneur parent.
    - `block`
      - : Le conteneur est une cible d'accrochage sur l'axe du bloc pour son conteneur parent.
    - `inline`
      - : Le conteneur est une cible d'accrochage sur l'axe de la ligne pour son conteneur parent.
    - `both`
      - : Le conteneur est à la fois une cible d'accrochage horizontale et verticale pour son conteneur parent. Il ne correspond pas si l'accrochage ne se fait que sur un seul axe.

    Pour vérifier un conteneur avec une requête `snapped` différente de `none`, il doit avoir un conteneur parent avec une valeur {{CSSxRef("scroll-snap-type")}} différente de `none`. Une requête `snapped: none` correspond même s'il n'y a pas de conteneur parent de type d'alignement au défilement.

    L'évaluation a lieu lors des évènements {{DOMxRef("Element.scrollsnapchanging_event", "scrollsnapchanging")}} sur le conteneur d'alignement au défilement. Si le test est réussi, les règles à l'intérieur du bloc `@container` sont appliquées aux descendants du conteneur.

    Pour vérifier si un conteneur est une cible d'accrochage, sans se soucier de la direction, utilisez la valeur `none` avec l'opérateur `not`&nbsp;:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Vérifie si un conteneur avec la propriété {{CSSxRef("position")}} à [`sticky`](/fr/docs/Learn_web_development/Core/CSS_layout/Positioning#positionnement_fixe) est collé à un bord de son conteneur parent défilant. Les valeurs valides pour `stuck` incluent&nbsp;:
    - `none`
      - : Le conteneur n'est collé à aucun bord. À noter que les requêtes `none` correspondent même si le conteneur n'a pas `position: sticky`.
    - `top`
      - : Le conteneur est collé au bord supérieur de son conteneur.
    - `right`
      - : Le conteneur est collé au bord droit de son conteneur.
    - `bottom`
      - : Le conteneur est collé au bord inférieur de son conteneur.
    - `left`
      - : Le conteneur est collé au bord gauche de son conteneur.
    - `block-start`
      - : Le conteneur est collé au début du bloc de son conteneur.
    - `block-end`
      - : Le conteneur est collé à la fin du bloc de son conteneur.
    - `inline-start`
      - : Le conteneur est collé au début de la ligne de son conteneur.
    - `inline-end`
      - : Le conteneur est collé à la fin de la ligne de son conteneur.

    Pour vérifier un conteneur avec une requête `stuck` différente de `none`, il doit avoir `position: sticky` et être dans un conteneur défilant. Si le test est réussi, les règles à l'intérieur du bloc `@container` sont appliquées aux descendants du conteneur sticky.

    Il est possible que deux valeurs d'axes adjacents correspondent en même temps&nbsp;:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Cependant, deux valeurs de bords opposés ne correspondent jamais en même temps&nbsp;:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Pour vérifier si un conteneur est collé, sans se soucier de la direction, utilisez la valeur `none` avec l'opérateur `not`&nbsp;:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

#### Descripteurs d'ancrage du conteneur

Les descripteurs d'ancrage du conteneur sont définis dans le `<container-condition>` comme argument de la fonction `anchored()`, par exemple&nbsp;:

```css
@container anchored(fallback: top) {
  /* … */
}
@container anchored(fallback: flip-block flip-inline) {
  /* … */
}
@container anchored(fallback: --custom-fallback) {
  /* … */
}
```

- `fallback`
  - : Vérifie si un repli spécifique de positionnement est actuellement actif sur un conteneur positionné par ancre, comme défini avec la propriété {{CSSxRef("position-try-fallbacks")}}. Les valeurs valides pour `fallback` incluent toute valeur composante qui est valide pour inclusion dans une valeur de propriété `position-try-fallbacks`.

    Si la valeur `fallback` nommée dans le test est actuellement active sur le conteneur positionné par ancre, le test réussit et les règles à l'intérieur du bloc `@container` sont appliquées aux descendants du conteneur positionné par une ancre.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Appliquer des styles selon la taille d'un conteneur

Considérez l'exemple suivant d'un composant carte avec un titre et du texte&nbsp;:

```html
<div class="post">
  <div class="card">
    <h2>Titre de la carte</h2>
    <p>Contenu de la carte</p>
  </div>
</div>
```

Un contexte de conteneur peut être créé avec la propriété `container-type`, ici avec la valeur `inline-size` sur la classe `.post`.
Vous pouvez ensuite utiliser la règle `@container` pour appliquer des styles à l'élément `.card` dans un conteneur de moins de `650px` de large.

```js hidden
const post = document.querySelector(".post");
const span = document.createElement("span");
span.textContent = `.post width: ${post.clientWidth}px`;
post.parentNode.insertBefore(span, post.nextSibling);
// mise à jour lors du redimensionnement
window.addEventListener("resize", () => {
  span.textContent = `.post width: ${post.clientWidth}px`;
});
```

```css hidden
span {
  display: block;
  text-align: center;
}
.card {
  margin: 10px;
  border: 2px dotted;
  font-size: 1.5em;
}
.post {
  border: 2px solid;
}
```

```css
/* Un contexte de conteneur basé sur la taille en ligne */
.post {
  container-type: inline-size;
}

/* Appliquer des styles si le conteneur fait moins de 650px */
@container (width < 650px) {
  .card {
    width: 50%;
    background-color: lightgray;
    font-size: 1em;
  }
}
```

{{EmbedLiveSample("Appliquer des styles selon la taille d'un conteneur", "100%", 230)}}

### Créer des contextes de conteneur nommés

Prenons l'exemple HTML suivant, un composant carte avec un titre et du texte&nbsp;:

```html
<div class="post">
  <div class="card">
    <h2>Titre de la carte</h2>
    <p>Contenu de la carte</p>
  </div>
</div>
```

Commencez par créer un contexte de conteneur avec les propriétés `container-type` et `container-name`.
La syntaxe raccourcie pour cette déclaration est décrite dans la page {{CSSxRef("container")}}.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Ciblez ensuite ce conteneur en ajoutant le nom à la requête de conteneur&nbsp;:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Requêtes de conteneur imbriquées

Il n'est pas possible de cibler plusieurs conteneurs dans une seule requête de conteneur.
Il est possible d'imbriquer des requêtes de conteneur pour obtenir le même effet.

La requête suivante s'applique si le conteneur nommé `summary` fait plus de `400px` de large et possède un conteneur ancêtre de plus de `800px` de large&nbsp;:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Requêtes de style de conteneur

Les requêtes de conteneur peuvent aussi évaluer le style calculé de l'élément conteneur. Une _requête de style de conteneur_ est une requête `@container` qui utilise une ou plusieurs notations fonctionnelles `style()`. La syntaxe booléenne et la logique de combinaison des fonctionnalités de style dans une requête de style sont les mêmes que pour les [requêtes de fonctionnalités CSS](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Le paramètre de chaque `style()` est un seul `<style-feature>`. Un **`<style-feature>`** peut être une [déclaration CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction#déclarations_css) valide (la forme **pleine**), une propriété CSS ou un [`<custom-property-name>`](/fr/docs/Web/CSS/Reference/Values/var#valeurs) seul (la forme **booléenne**), ou une [comparaison de plage](#syntaxe_de_plage) (la forme **plage**).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Une fonctionnalité de style sans valeur est vraie si la valeur calculée est différente de la valeur initiale pour la propriété donnée.

Si le `<style-feature>` passé en argument à la fonction `style()` est une déclaration, la requête de style est vraie si la valeur de la déclaration est identique à la valeur calculée de cette propriété pour le conteneur interrogé. Sinon, elle est fausse.

La requête suivante vérifie si la [valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée) de la propriété `--accent-color` du conteneur est `blue`&nbsp;:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Si une propriété personnalisée a pour valeur `blue`, le code hexadécimal équivalent `#0000ff` ne correspond pas, sauf si la propriété a été définie comme une couleur avec {{CSSxRef("@property")}} pour que le navigateur puisse comparer correctement les valeurs calculées.

Les fonctionnalités de style qui interrogent une propriété raccourcie sont vraies si les valeurs calculées correspondent pour chacune de ses propriétés longues, et fausses sinon. Par exemple, `@container style(border: 2px solid red)` est vrai si les 12 propriétés longues qui composent ce raccourci (`border-bottom-style`, etc.) sont toutes vraies.

Notez que [`!important`](/fr/docs/Web/CSS/Reference/Values/important) est autorisé dans les requêtes de style mais est ignoré.

```css
/* !important est valide mais n'a aucun effet */
@container style(--themeColor: purple !important) {
  /* <stylesheet> */
}
```

Les valeurs globales `revert` et `revert-layer` sont invalides dans un `<style-feature>` et rendent la requête de style de conteneur fausse.

#### Syntaxe de plage

En plus de la forme simple `<style-feature-name>: <value>` décrite ci-dessus, un `<style-feature>` peut être écrit sous forme de **comparaison de plage** en utilisant `=`, `<`, `<=`, `>`, ou `>=`. La syntaxe de plage permet des comparaisons **numériques** que la forme simple ne peut pas gérer, comme `style(--columns >= 3)` ou `style(--gap = 1rem)`. Elle compare les valeurs résolues des deux côtés numériquement.

Pour évaluer une plage, le navigateur&nbsp;:

1. Résout chaque côté (les noms de propriétés personnalisées sont recherchés comme s'ils étaient utilisés avec {{CSSxRef("var()")}}).
2. Analyse chaque côté comme un {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, ou {{CSSxRef("&lt;resolution&gt;")}}. Si l'un des côtés ne peut pas être analysé comme l'un de ces types, ou si les deux côtés n'ont pas le même type, la requête est fausse.
3. Calcule chaque côté (en évaluant toutes les expressions `calc()`) et effectue la comparaison numérique.

Cela signifie que la syntaxe de plage ne peut pas être utilisée pour comparer des valeurs de type mot-clé&nbsp;: `style(--theme = dark)` est toujours faux, car `dark` n'est pas un type numérique. Utilisez la syntaxe simple pour ceux-ci, par exemple `style(--theme: dark)`.

Chaque côté d'une plage peut être un nom de propriété personnalisée, une référence `var()`, une valeur littérale ou une expression `calc()`, dans n'importe quel ordre&nbsp;:

```css
@container style(3 = --n) {
  /* … */
}
@container style(var(--n) = 3) {
  /* … */
}
@container style(calc(6/2) = var(--n)) {
  /* … */
}
```

Une plage peut également prendre une forme à trois valeurs, avec les deux comparateurs pointant dans la même direction, pour tester si une valeur se situe dans un intervalle&nbsp;:

```css
@container style(0 < --n < 10) {
  /* vrai lorsque --n est supérieur à 0 et inférieur à 10 */
}
@container style(100px > --width > 50px) {
  /* vrai lorsque --width est inférieur à 100px et supérieur à 50px */
}
```

En d'autres termes, `style(0 < --n < 10)` est équivalent à `style(0 < --n) and style(--n < 10)`. La valeur du milieu est testée par rapport aux deux limites, plutôt que d'être chaînée de gauche à droite.

> [!NOTE]
> La syntaxe simple et la syntaxe de plage se comportent différemment même lorsqu'elles semblent similaires. Étant donné `--n: calc(6/2)`, la requête `style(--n: 3)` est **fausse**, car la forme simple compare la valeur calculée de la propriété (`calc(6/2)`) directement à `3`. La requête de plage équivalente `style(--n = 3)` est **vraie**, car la forme de plage calcule les deux côtés numériquement avant de comparer. Voir [Syntaxe simple versus syntaxe de plage dans les requêtes de style](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#syntaxe_simple_ou_de_plage_dans_les_requêtes_de_style) dans le guide des requêtes de style de conteneur pour plus de détails.

### Requêtes d'état de défilement

Voir [Utiliser les requêtes d'état de défilement de conteneur](/fr/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) pour des exemples.

### Requêtes d'ancrage

Voir [Utiliser les requêtes de conteneur avec une ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) pour des exemples de requêtes d'ancrage.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_queries)
- [Utiliser les requêtes de taille et de style de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Utiliser les requêtes d'état de défilement de conteneur](/fr/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Utiliser les requêtes de conteneur avec une ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- La propriété {{CSSxRef("container-name")}}
- La propriété {{CSSxRef("container-type")}}
- La propriété {{CSSxRef("contain")}}
- La propriété {{CSSxRef("content-visibility")}}
- L'interface API [`CSSContainerRule`](/fr/docs/Web/API/CSSContainerRule)
- Le module de [Compartimentation CSS](/fr/docs/Web/CSS/Guides/Containment)
- [Fonctions de règles @ CSS](/fr/docs/Web/CSS/Reference/At-rules/At-rule_functions)
