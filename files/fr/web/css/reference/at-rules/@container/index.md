---
title: "@container"
slug: Web/CSS/Reference/At-rules/@container
original_slug: Web/CSS/@container
l10n:
  sourceCommit: 27e3d279057ebbb559f4725641b1c431914de7b1
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@container`** est une règle conditionnelle de groupe qui applique des styles à un [contexte de conteneur](/fr/docs/Web/CSS/CSS_containment/Container_queries#nommer_les_contextes_de_conteneur).
Les déclarations de style sont filtrées par une condition et appliquées au conteneur si la condition est vraie.
La condition est évaluée lorsque la taille du conteneur interrogé, le [`<style-feature>`](#requêtes_de_style_de_conteneur) ou l'état de défilement changent.

La propriété {{cssxref("container-name")}} spécifie une liste de noms de conteneurs de requête. Ces noms peuvent être utilisés par les règles `@container` pour filtrer les conteneurs ciblés. Le `<container-name>` optionnel et sensible à la casse filtre les conteneurs ciblés par la requête.

Une fois qu'un conteneur de requête éligible a été sélectionné pour un élément, chaque fonctionnalité de conteneur dans le `<container-condition>` est évaluée par rapport à ce conteneur.

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

/* Avec un <scroll-state> */
@container scroll-state(scrollable: top) {
  .back-to-top-link {
    visibility: visible;
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
```

### Paramètres

- `<container-condition>`
  - : Un `<container-name>` optionnel et un `<container-query>`. Les styles définis dans la `<stylesheet>` sont appliqués si la condition est vraie.
    - `<container-name>`
      - : Optionnel. Le nom du conteneur auquel les styles seront appliqués lorsque la requête est vraie, spécifié comme un {{cssxref("ident")}}.
    - `<container-query>`
      - : Un ensemble de fonctionnalités évaluées sur le conteneur interrogé lorsque la taille, le [`<style-feature>`](#container_style_queries) ou l'état de défilement du conteneur changent.

### Mots-clés logiques dans les requêtes de conteneur

Des mots-clés logiques peuvent être utilisés pour définir la condition du conteneur&nbsp;:

- `and` combine deux conditions ou plus.
- `or` combine deux conditions ou plus.
- `not` nie la condition. Un seul «&nbsp;not&nbsp;» est autorisé par requête de conteneur et il ne peut pas être utilisé avec les mots-clés `and` ou `or`.

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

Un contexte de conteneur peut être nommé à l'aide de la propriété {{cssxref("container-name")}}.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

La syntaxe raccourcie consiste à utiliser {{cssxref("container")}} sous la forme `container: <name> / <type>`, par exemple&nbsp;:

```css
.post {
  container: sidebar / inline-size;
}
```

Dans les requêtes de conteneur, la propriété {{cssxref("container-name")}} permet de filtrer l'ensemble des conteneurs pour ne garder que ceux dont le nom correspond à la requête&nbsp;:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Les détails sur l'utilisation et les restrictions de nommage sont décrits dans la page {{cssxref("container-name")}}.

### Descripteurs

Les requêtes `<container-condition>` incluent les descripteurs de conteneur [size](#descripteurs_de_taille_de_conteneur) et [scroll-state](#descripteurs_détat_de_défilement_du_conteneur).

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
  - : Le {{cssxref("aspect-ratio")}} du conteneur, calculé comme le rapport largeur/hauteur du conteneur, exprimé en {{cssxref("ratio")}}.

- `block-size`
  - : Le {{cssxref("block-size")}} du conteneur, exprimé en {{cssxref("length")}}.

- `height`
  - : La hauteur du conteneur, exprimée en {{cssxref("length")}}.

- `inline-size`
  - : Le {{cssxref("inline-size")}} du conteneur, exprimé en {{cssxref("length")}}.

- `orientation`
  - : L'[orientation](/fr/docs/Web/CSS/Reference/At-rules/@media/orientation) du conteneur, soit `landscape`, soit `portrait`.

- `width`
  - : La largeur du conteneur, exprimée en {{cssxref("length")}}.

#### Descripteurs d'état de défilement du conteneur

Les descripteurs d'état de défilement sont spécifiés dans le `<container-condition>` entre parenthèses après le mot-clé `scroll-state`, par exemple&nbsp;:

```css
@container scroll-state(scrollable: top) {
  /* … */
}
@container scroll-state(stuck: inline-end) {
  /* … */
}
@container scroll-state(snapped: both) {
  /* … */
}
```

Les mots-clés pris en charge pour les descripteurs d'état de défilement incluent les valeurs physiques et les {{glossary("flow relative values", "valeurs relatives de flux")}}.

- `scrollable`
  - : Vérifie si le conteneur peut être défilé dans la direction donnée par une action de l'utilisateur·ice (barre de défilement, geste tactile, etc.). Autrement dit, y a-t-il du contenu débordant dans la direction donnée qui peut être atteint par défilement&nbsp;? Les valeurs valides pour `scrollable` incluent&nbsp;:
    - `none`
      - : Le conteneur n'est pas un {{glossary("scroll container")}} ou ne peut pas être défilé dans aucune direction.
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

- `snapped`
  - : Vérifie si le conteneur va être aligné («&nbsp;snapped&nbsp;») sur un conteneur parent de type [scroll snap](/fr/docs/Web/CSS/Guides/Scroll_snap) selon l'axe donné. Les valeurs valides pour `snapped` incluent&nbsp;:
    - `none`
      - : Le conteneur n'est pas une [cible d'accrochage](/fr/docs/Glossary/Scroll_snap#cible_daccrochage) pour son conteneur parent. Si on utilise `snapped: none`, les conteneurs qui _sont_ des cibles d'accrochage n'auront _pas_ les styles `@container`, tandis que les non-cibles _les auront_.
    - `x`
      - : Le conteneur est une cible d'accrochage horizontale pour son conteneur parent.
    - `y`
      - : Le conteneur est une cible d'accrochage verticale pour son conteneur parent.
    - `block`
      - : Le conteneur est une cible d'accrochage sur l'axe du bloc pour son conteneur parent.
    - `inline`
      - : Le conteneur est une cible d'accrochage sur l'axe de la ligne pour son conteneur parent.
    - `both`
      - : Le conteneur est à la fois une cible d'accrochage horizontale et verticale pour son conteneur parent. Il ne correspondra pas si l'accrochage ne se fait que sur un seul axe.

    Pour vérifier un conteneur avec une requête `snapped` différente de `none`, il doit avoir un conteneur parent avec une valeur {{cssxref("scroll-snap-type")}} différente de `none`. Une requête `snapped: none` correspondra même s'il n'y a pas de conteneur parent de type scroll snap.

    L'évaluation a lieu lors des événements [`scrollsnapchanging`](/fr/docs/Web/API/Element/scrollsnapchanging_event) sur le conteneur scroll snap. Si le test est réussi, les règles à l'intérieur du bloc `@container` sont appliquées aux descendants du conteneur.

    Pour vérifier si un conteneur est une cible d'accrochage, sans se soucier de la direction, utilisez la valeur `none` avec l'opérateur `not`&nbsp;:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Vérifie si un conteneur avec la propriété {{cssxref("position")}} à [`sticky`](/fr/docs/Learn_web_development/Core/CSS_layout/Positioning#positionnement_fixe) est collé à un bord de son conteneur parent défilant. Les valeurs valides pour `stuck` incluent&nbsp;:
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

    Il est possible que deux valeurs d'axes opposés correspondent en même temps&nbsp;:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Cependant, deux valeurs de bords opposés ne correspondront jamais en même temps&nbsp;:

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

## Syntaxe formelle

{{csssyntax}}

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

{{EmbedLiveSample("appliquer_des_styles_selon_la_taille_dun_conteneur", "100%", 230)}}

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
La syntaxe raccourcie pour cette déclaration est décrite dans la page {{cssxref("container")}}.

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

Le paramètre de chaque `style()` est un seul `<style-feature>`. Un **`<style-feature>`** est une [déclaration CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations) valide, une propriété CSS ou un [`<custom-property-name>`](/fr/docs/Web/CSS/Reference/Values/var#values).

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
> Si une propriété personnalisée a pour valeur `blue`, le code hexadécimal équivalent `#0000ff` ne correspondra pas, sauf si la propriété a été définie comme une couleur avec {{cssxref("@property")}} pour que le navigateur puisse comparer correctement les valeurs calculées.

Les fonctionnalités de style qui interrogent une propriété raccourcie sont vraies si les valeurs calculées correspondent pour chacune de ses propriétés longues, et fausses sinon. Par exemple, `@container style(border: 2px solid red)` sera vrai si les 12 propriétés longues qui composent ce raccourci (`border-bottom-style`, etc.) sont toutes vraies.

Les valeurs globales `revert` et `revert-layer` sont invalides dans un `<style-feature>` et rendent la requête de style de conteneur fausse.

### Requêtes d'état de défilement

Voir [Utiliser les requêtes d'état de défilement de conteneur](/fr/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) pour des exemples détaillés.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes de conteneur](/fr/docs/Web/CSS/CSS_containment/Container_queries)
- [Utiliser les requêtes de taille et de style de conteneur](/fr/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Utiliser les requêtes d'état de défilement de conteneur](/fr/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- Le module de [Compartimentation CSS](/fr/docs/Web/CSS/Guides/Containment)
- [Fonctions de règles @ CSS](/fr/docs/Web/CSS/CSS_syntax/At-rule_functions)
