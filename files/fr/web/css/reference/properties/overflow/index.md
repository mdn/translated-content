---
title: Propriété CSS `overflow`
short-title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: bd1e1e4c5979dc7b79f75dfcc787e5bff9510aef
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`overflow`** définit le comportement souhaité lorsque le contenu ne tient pas dans la boîte de remplissage (<i lang="en">padding</i> en anglais) de l'élément (dépassements) dans la direction horizontale et/ou verticale.

{{InteractiveExample("Démonstration CSS&nbsp;: overflow")}}

```css interactive-example-choice
overflow: visible;
```

```css interactive-example-choice
overflow: hidden;
```

```css interactive-example-choice
overflow: clip;
```

```css interactive-example-choice
overflow: scroll;
```

```css interactive-example-choice
overflow: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p id="example-element">
    Le trimestre de la Saint-Michel vient de s'achever, et le Lord Chancelier
    siège à Lincoln's Inn Hall. Le temps de novembre est implacable. Il y a
    autant de boue dans les rues que si les eaux venaient à peine de se retirer
    de la surface de la terre.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 15em;
  height: 9em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
}
```

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;

/* Valeur à deux mots-clés : horizontal | vertical */
overflow: hidden visible;

/* Valeurs globales */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

La propriété `overflow` est définie avec un ou deux mots-clés {{CSSxRef("overflow_value", "&lt;overflow&gt;")}}.

### Valeurs

- `visible`
  - : Le contenu débordant n'est pas coupé et peut être visible en dehors de la boîte de remplissage de l'élément. La boîte de l'élément n'est pas un {{Glossary("scroll container", "conteneur de défilement")}}. C'est la valeur par défaut.
- `hidden`
  - : Le contenu débordant est coupé à la boîte de remplissage de l'élément, masquant le contenu coupé. Lorsque le contenu déborde, la boîte de l'élément est un {{Glossary("scroll container", "conteneur de défilement")}} sans barres de défilement&nbsp;; le défilement est toujours possible par d'autres moyens, y compris le tabulation vers des éléments masqués mais sélectionnables, les propriétés telles que la propriété {{DOMxRef("Element.scrollLeft", "scrollLeft")}} et les méthodes comme {{DOMxRef("Element.scrollTo", "scrollTo()")}}.
- `clip`
  - : Le contenu débordant est coupé à la _bordure de découpe du débordement_ de l'élément, définie à l'aide de la propriété {{CSSxRef("overflow-clip-margin")}}. La boîte de l'élément n'est pas un conteneur de défilement, le contenu coupé n'est pas visible et le défilement programmatique n'est pas pris en charge.
- `scroll`
  - : Le contenu débordant est coupé à la boîte de remplissage de l'élément. Que le contenu déborde ou non, la boîte de l'élément est toujours un conteneur de défilement affichant des barres de défilement.
- `auto`
  - : Le contenu débordant est coupé à la boîte de remplissage de l'élément. Lorsque le contenu déborde, la boîte de l'élément est un conteneur de défilement affichant des barres de défilement.

#### Valeurs non standard

Certaines valeurs non standard sont également prises en charge dans certains navigateurs&nbsp;:

- `overlay`
  - : Un alias hérité pour `auto`, défini dans la spécification pour la compatibilité web. Initialement implémenté comme une valeur non standard pour afficher les barres de défilement par-dessus le contenu plutôt que de prendre de la place. Son utilisation dans un nouveau code est déconseillée.

## Description

Par défaut, les éléments de niveau bloc s'agrandissent pour s'adapter à leur contenu. Si la taille d'un conteneur est limitée, le contenu déborde. La propriété `overflow` détermine comment un conteneur gère le contenu qui déborde de ses bords.

La propriété `overflow` est une propriété raccourcie pour les propriétés horizontales {{CSSxRef("overflow-x")}} et verticales {{CSSxRef("overflow-y")}}. Si un seul mot-clé est défini, `overflow-x` et `overflow-y` sont définis sur la même valeur. Si deux mots-clés sont définis, la première valeur s'applique à `overflow-x` dans la direction horizontale et la seconde à `overflow-y` dans la direction verticale.

Les options de débordement incluent la possibilité de masquer le contenu débordant, d'activer les barres de défilement pour visualiser le contenu débordant ou d'afficher le contenu s'écoulant en dehors de la boîte d'un élément dans la zone environnante, ainsi que des combinaisons de ces options.

Toutes les valeurs, sauf `visible` et `clip`, créent un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context). Le nouveau contexte de formatage de bloc est nécessaire pour les conteneurs de défilement, car si un flottant devait intersecter avec un élément défilant, il réorganise de force le contenu après chaque étape de défilement, ce qui entraîne une expérience de défilement lente.

### Qu'est-ce qui crée le débordement

Le débordement se produit lorsqu'un élément de niveau bloc a un contenu qui dépasse son espace contraint. L'espace alloué peut être contraint par une hauteur ({{CSSxRef("height")}} ou {{CSSxRef("max-height")}}) pour le débordement vertical, une largeur ({{CSSxRef("width")}} ou {{CSSxRef("max-width")}}) pour le débordement horizontal, une taille de bloc ({{CSSxRef("block-size")}} ou {{CSSxRef("max-block-size")}}) pour le débordement dans la direction du bloc, ou une taille en ligne ({{CSSxRef("inline-size")}}, {{CSSxRef("max-inline-size")}} ou {{CSSxRef("white-space")}} définie sur `nowrap`) pour le débordement dans la direction en ligne.

Le CSS suivant limite la taille du conteneur, en définissant des valeurs de propriété du [modèle de boîte](/fr/docs/Web/CSS/Guides/Box_model) qui limitent la taille du conteneur.
Une couleur de fond, découpée dans le `content-box`, est également ajoutée pour aider à démontrer comment le contenu débordant déborde de la boîte de contenu dans les explications qui suivent.

```css
div {
  height: 10em;
  width: 15em;
  border: 3px solid;
  padding: 10px;

  background-color: #ededed;
  background-clip: content-box;
}
```

### Comprendre les valeurs de `overflow`

Les différentes valeurs de `overflow` définissent si un élément a des barres de défilement, s'il est défilable par l'utilisateur·ice et par programme, et s'il est un conteneur de défilement (ce qui crée un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)) lorsque le contenu de cet élément déborde et, dans le cas de `scroll`, même lorsqu'il ne déborde pas.

#### La valeur `visible`

La valeur par défaut est `visible`. Par défaut, si le contenu déborde des contraintes d'un conteneur, le contenu n'est pas contenu dans le conteneur. Un élément dont la valeur par défaut est `visible` ou qui est explicitement défini sur `visible` n'a pas de barres de défilement, n'est pas défilable par l'utilisateur·ice ou par programme, et n'est pas un {{Glossary("scroll container", "conteneur de défilement")}}. Cette valeur ne crée pas de nouveau contexte de formatage de bloc.

```css live-sample___visible
div {
  overflow: visible;
}
```

{{EmbedLiveSample("visible", "", 300)}}

```html hidden live-sample___visible
<div>
  <h2>overflow: visible;</h2>
</div>
<div>
  <p>
    La <code>overflow</code> propriété dans cet exemple est définie sur
    <code>visible</code>. Aucun conteneur de défilement n'est créé&nbsp;; le
    contenu déborde simplement du conteneur.
  </p>
</div>
```

Avec `visible`, aucun rognage ne se produit, donc le contenu débordant est visible en dehors de la zone de remplissage de l'élément, pouvant potentiellement chevaucher le contenu adjacent.

#### La valeur `scroll`

Avec `scroll`, le contenu est rogné à la zone de remplissage de l'élément et peut être défilé pour être visible. Les agents utilisateurs affichent des barres de défilement dans les deux directions, que le contenu déborde ou non, ce qui empêche les barres de défilement d'apparaître et de disparaître au fur et à mesure que le contenu change. Les imprimantes peuvent toujours imprimer le contenu débordant.

L'élément est toujours un {{Glossary("scroll container", "conteneur de défilement")}} — même lorsqu'il n'y a pas de contenu débordant — et est défilable à la fois par l'utilisateur·ice et par programme.

```css live-sample___scroll
div {
  overflow: scroll;
}
```

{{EmbedLiveSample("scroll", "", 300)}}

```html hidden live-sample___scroll
<div>
  <h2>overflow: scroll;</h2>
</div>
<div>
  <p>
    La <code>overflow</code> propriété dans cet exemple est définie sur
    <code>scroll</code>. Un conteneur de défilement est créé&nbsp;; une barre de
    défilement est toujours visible, même si elle n'est pas nécessaire.
  </p>
</div>
```

Dans le premier exemple, même si le contenu ne déborde pas, un conteneur de défilement est toujours créé. Dans le deuxième exemple, le contenu est rogné à la zone de remplissage, avec une barre de défilement permettant de faire défiler le contenu débordant.

#### La valeur `auto`

Avec `auto`, le fait que l'élément ait des barres de défilement et soit un conteneur de défilement dépend du fait que l'élément ait du contenu débordant. Lorsque l'élément contient du contenu débordant, il se comporte comme `scroll`&nbsp;: le contenu débordant est rogné à la zone de remplissage de l'élément, et le contenu débordant peut être défilé pour être visible. Contrairement à `scroll`, les agents utilisateurs affichent des barres de défilement _uniquement si_ le contenu déborde. Si le contenu tient à l'intérieur de la zone de remplissage de l'élément, il ressemble à `visible`, mais établit toujours un nouveau contexte de formatage. La boîte de l'élément n'est un conteneur de défilement que lorsqu'il y a du contenu débordant.

```css live-sample___auto
div {
  overflow: auto;
}
```

{{EmbedLiveSample("auto", "", 300)}}

```html hidden live-sample___auto
<div>
  <h2>overflow: auto;</h2>
</div>
<div>
  <p>
    La <code>overflow</code> propriété dans cet exemple est définie sur
    <code>auto</code>. Comme il y a du contenu débordant, un conteneur de
    défilement est créé. Le contenu est rogné à la zone de remplissage et une
    barre de défilement permet de faire défiler le contenu débordant.
  </p>
</div>
```

Lorsque vous utilisez la syntaxe à deux valeurs, si une valeur est définie sur `visible`, cette direction de débordement `visible` se comporte comme `auto` si l'autre valeur n'est pas `visible` ou `clip`.

#### La valeur `hidden`

Avec `hidden`, le contenu débordant est rogné à la zone de remplissage de l'élément. Il n'y a pas de barres de défilement et le contenu rogné n'est pas visible (c'est-à-dire qu'il est «&nbsp;caché&nbsp;»).

Si le contenu déborde, l'élément est un conteneur de défilement. Bien qu'il n'y ait pas de barres de défilement et que l'utilisateur·ice ne puisse pas voir le contenu en dehors de la zone rognée en effectuant des actions telles que le glissement sur un écran tactile ou l'utilisation de la molette de la souris, le contenu débordant masqué peut être fait défiler pour être visible.

Si le contenu contient des éléments sélectionnables, l'utilisation de la touche Tab amène l'élément actuellement sélectionné dans la vue. Le contenu peut également être fait défiler par programmation. La définition d'une valeur pour la propriété {{DOMxRef("Element.scrollLeft", "scrollLeft")}} ou {{DOMxRef("Element.scrollTop", "scrollTop")}} fait défiler cette distance depuis le bord gauche ou supérieur, respectivement. Vous pouvez également faire défiler en utilisant la méthode {{DOMxRef("Element.scrollTo", "scrollTo()")}}.

```css live-sample___hidden
div {
  overflow: hidden;
}
```

{{EmbedLiveSample("hidden", "", 300)}}

```html hidden live-sample___hidden
<div>
  <h2>overflow: hidden;</h2>
</div>
<div>
  <p>
    La <code>overflow</code> propriété dans cet exemple est définie sur
    <code>hidden</code>. Bien que caché,
    <a
      href="https://developer.mozilla.org/fr/docs/Web/HTML/Guides/Content_categories#contenu_interactif"
      >contenu interactif</a
    >
    peut être fait défiler dans la vue lorsqu'il est sélectionné. Comme le
    contenu déborde, l'élément est un conteneur de défilement, même s'il n'y a
    pas de barres de défilement présentes. L'utilisation de la touche Tab donne
    la sélection à ce
    <input aria-label="champ" placeholder="champ" /> et le fait défiler dans la
    vue. Ce contenu peut également être fait défiler par programmation.
  </p>
</div>
```

Le premier exemple ne comporte pas de contenu débordant et n'est pas un conteneur à défilement. Le second exemple comporte du contenu débordant qui est coupé à la boîte de remplissage. Même s'il n'y a pas de barre de défilement permettant de faire défiler le contenu débordant, le contenu peut être fait défiler dans la vue, par exemple en appuyant sur la touche <kbd>Tab</kbd> vers le champ {{HTMLElement("input")}} dans le contenu caché. Le second exemple est un conteneur de défilement.

#### La valeur `clip`

Avec `clip`, le contenu qui déborde est par défaut caché, il n'y a pas de barres de défilement et le défilement programmatique n'est pas possible. L'élément n'est pas un conteneur de défilement et aucun nouveau [contexte de formatage](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context) n'est créé. Si le contenu coupé inclut du contenu interactif, le contenu caché pouvant recevoir la sélection reçoit toujours la sélection du clavier, mais ce contenu n'est pas défilé dans la vue, le rendant inaccessible aux utilisateur·ice·s de clavier.

Avec `clip`, le contenu qui déborde est coupé à _l'arête de découpe de débordement_ de l'élément, qui est définie à l'aide de la propriété {{CSSxRef("overflow-clip-margin")}}. Le contenu coupé déborde de la boîte de remplissage de l'élément selon la valeur {{CSSxRef("&lt;length&gt;")}} de `overflow-clip-margin`, qui par défaut est `0px`.

```css live-sample___clip
div {
  overflow: clip;
}
```

{{EmbedLiveSample("clip", "", 350)}}

```html hidden live-sample___clip
<div>
  <h2>overflow: clip;</h2>
</div>
<div>
  <p>
    La propriété <code>overflow</code> dans cet exemple est définie sur
    <code>clip</code>. Lorsque le contenu est caché,
    <a
      href="https://developer.mozilla.org/fr/docs/Web/HTML/Guides/Content_categories#contenu_interactif"
      >le contenu interactif</a
    >
    ne peut PAS être fait défiler dans la vue lorsqu'il est sélectionné. Le
    contenu débordant est coupé à la boîte du conteneur. Aucun conteneur de
    défilement n'est créé. La tabulation donne la sélection à cet
    <input aria-label="input" placeholder="input" /> mais ne le fait pas défiler
    dans la vue. Les utilisateur·ice·s de clavier ne peuvent pas atteindre ce
    contenu. Ce contenu n'est également pas défilable par programmation.
  </p>
</div>
<fieldset>
  <legend>
    Sélectionnez une valeur pour <code>overflow-clip-margin</code>
  </legend>
  <ul>
    <li>
      <label>
        <input type="radio" name="overflow" value="0" />
        overflow-clip-margin: 0;</label
      >
    </li>
    <li>
      <label
        ><input type="radio" name="overflow" value="3em" />
        overflow-clip-margin: 3em;</label
      >
    </li>
  </ul>
</fieldset>
```

Le contenu débordant du deuxième exemple est coupé. La tabulation vers le {{HTMLElement("input")}} dans le contenu caché donne la sélection à l'élément, mais ne le fait pas défiler dans la vue, rendant ce contenu inaccessible aux utilisateur·ice·s de clavier.

Lors de l'utilisation de la syntaxe à deux valeurs, si une valeur est définie sur `clip`, cette direction de débordement `clip` se comporte comme `hidden` si l'autre valeur n'est pas définie sur `visible` ou `clip`.

```css hidden live-sample___clip
ul {
  list-style-type: none;
}
label {
  font-family: monospace;
}
:has([value="0"]:checked) div {
  overflow-clip-margin: 0;
}
:has([value="3em"]:checked) div {
  overflow-clip-margin: 3em;
}

@supports not (overflow-clip-margin: 0) {
  body::before {
    content: "Votre navigateur ne prend pas en charge overflow-clip-margin.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;

    width: 100%;
  }
}
```

#### Avec les animations pilotées par le défilement

Lors de la création [d'animations pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations) en utilisant la fonction {{CSSxRef("animation-timeline/scroll", "scroll()")}}, envisagez d'utiliser `clip` au lieu de `hidden` s'il n'y a pas de contenu interactif dans la zone découpée, sauf si vous souhaitez explicitement créer un conteneur de défilement.

Avec `hidden` et `clip`, le débordement est coupé, mais `overflow: clip` ne crée pas de conteneur de défilement, donc les éléments découpés sont ignorés lorsque l'agent utilisateur remonte l'arborescence DOM à la recherche du conteneur de défilement ancêtre le plus proche.

Comme `overflow: hidden` crée un conteneur de défilement lorsqu'il y a du contenu débordant, vous pouvez accidentellement créer un ancêtre défilant qui ne défile pas. Mais n'utilisez `clip` que si vous êtes certain de ne pas découper de contenu interactif.

```css hidden live-sample___visible live-sample___scroll live-sample___auto live-sample___clip live-sample___hidden
div {
  height: 10em;
  width: 15em;
  border: 3px solid;
  padding: 10px;
  background-color: #ededed;
  background-clip: content-box;
}
p {
  font-size: 1.5rem;
  line-height: 1.6;
  font-family: sans-serif;
}
h2 {
  font-family: monospace;
}
body {
  height: 98vh;
  overflow: clip;
  display: flex;
  flex-flow: row wrap;
  gap: 3em;
}
```

### Les éléments remplacés débordants

Le fait de définir `overflow` sur les images et autres {{Glossary("replaced elements", "éléments remplacés")}} fonctionne comme prévu dans les navigateurs qui prennent en charge le module CSS Overflow Level 4&nbsp;; dans les versions précédentes de la spécification, les éléments remplacés étaient toujours découpés dans le conteneur englobant.

Voir le tableau de [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour les informations actuelles sur la prise en charge par les navigateurs.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Dans certains navigateurs, les zones de contenu défilantes ne sont pas sélectionnables au clavier, elles ne peuvent donc pas être défilées par un·e utilisateur·ice utilisant uniquement le clavier. Pour permettre à tous les utilisateur·ice·s utilisant uniquement le clavier de faire défiler le conteneur, activez la réception de la sélection par l'élément en définissant [`tabindex="0"`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) sur le conteneur. Pour donner aux utilisateur·ice·s de lecteurs d'écran un contexte lorsque le conteneur reçoit la sélection, définissez un [rôle WAI-ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) approprié sur le conteneur, tel que `role="region"`, et un nom accessible à l'aide de l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

## Exemples

### Démonstration des résultats des différents mots-clés `overflow`

#### HTML

```html
<div>
  <code>visible</code>
  <p class="visible">
    Maya Angelou&nbsp;: «&nbsp;J'ai appris que les gens oublient ce que vous
    avez dit, les gens oublient ce que vous avez fait, mais les gens n'oublient
    jamais comment vous les avez fait se sentir.&nbsp;»
  </p>
</div>

<div>
  <code>hidden</code>
  <p class="hidden">
    Maya Angelou&nbsp;: «&nbsp;J'ai appris que les gens oublient ce que vous
    avez dit, les gens oublient ce que vous avez fait, mais les gens n'oublient
    jamais comment vous les avez fait se sentir.&nbsp;»
  </p>
</div>

<div>
  <code>clip</code>
  <p class="clip">
    Maya Angelou&nbsp;: «&nbsp;J'ai appris que les gens oublient ce que vous
    avez dit, les gens oublient ce que vous avez fait, mais les gens n'oublient
    jamais comment vous les avez fait se sentir.&nbsp;»
  </p>
</div>

<div>
  <code>scroll</code>
  <p class="scroll">
    Maya Angelou&nbsp;: «&nbsp;J'ai appris que les gens oublient ce que vous
    avez dit, les gens oublient ce que vous avez fait, mais les gens n'oublient
    jamais comment vous les avez fait se sentir.&nbsp;»
  </p>
</div>

<div>
  <code>auto</code>
  <p class="auto">
    Maya Angelou&nbsp;: «&nbsp;J'ai appris que les gens oublient ce que vous
    avez dit, les gens oublient ce que vous avez fait, mais les gens n'oublient
    jamais comment vous les avez fait se sentir.&nbsp;»
  </p>
</div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

div {
  margin: 2em;
  font-size: 1.2em;
}

p {
  width: 5em;
  height: 5em;
  border: dotted;
  margin-top: 0.5em;
}

div:nth-of-type(5),
div:nth-of-type(6) {
  margin-top: 200px;
}
```

```css
p.visible {
  overflow: visible;
}

p.hidden {
  overflow: hidden;
}

p.clip {
  overflow: clip;
  overflow-clip-margin: 1em;
}

p.scroll {
  overflow: scroll;
}

p.auto {
  overflow: auto;
}
```

#### Résultat

{{EmbedLiveSample("Démonstration des résultats des différents mots-clés `overflow`", 500, 620)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("overflow-x")}}, {{CSSxRef("overflow-y")}}
- Les propriétés {{CSSxRef("overflow-block")}}, {{CSSxRef("overflow-clip-margin")}}, {{CSSxRef("overflow-inline")}}
- Les propriétés {{CSSxRef("clip")}}, {{CSSxRef("display")}}, {{CSSxRef("text-overflow")}}, {{CSSxRef("white-space")}}
- L'attribut SVG {{SVGAttr("overflow")}}
- [Chronologie des progressions de défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_des_progressions_de_défilement)
- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- Le module [des animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Zones de défilement accessibles uniquement au clavier <sup>(angl.)</sup>](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) sur adrianroselli.com (2022)
