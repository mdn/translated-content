---
title: Propriété CSS `overflow`
short-title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
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
overflow: hidden visible;

/* Valeurs globales */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

La propriété `overflow` est définie avec un ou deux mots-clés {{CSSxRef("overflow_value", "&lt;overflow&gt;")}}. Si un seul mot-clé est défini, `overflow-x` et `overflow-y` sont définis avec la même valeur. Si deux mots-clés sont définis, la première valeur s'applique à `overflow-x` dans la direction horizontale et la seconde valeur s'applique à `overflow-y` dans la direction verticale.

### Valeurs

- `visible`
  - : Le contenu débordant n'est pas coupé et peut être visible en dehors de la boîte de remplissage de l'élément. La boîte de l'élément n'est pas un {{Glossary("scroll container", "conteneur de défilement")}}. C'est la valeur par défaut de la propriété `overflow`.
- `hidden`
  - : Le contenu débordant est coupé à la boîte de remplissage de l'élément. Il n'y a pas de barres de défilement, et le contenu coupé n'est pas visible (c'est-à-dire que le contenu coupé est masqué), mais le contenu existe toujours. Les agents utilisateurs n'ajoutent pas de barres de défilement et n'autorisent pas non plus les utilisateur·ice·s à voir le contenu en dehors de la zone coupée par des actions telles que le glissement sur un écran tactile ou l'utilisation de la molette de la souris. Le contenu _peut_ être défilé par programmation (par exemple, en liant à un texte d'ancrage, en tabulant vers un élément masqué mais focalisable, ou en définissant la valeur de la propriété {{DOMxRef("Element.scrollLeft", "scrollLeft")}} ou de la méthode {{DOMxRef("Element.scrollTo", "scrollTo()")}}), auquel cas la boîte de l'élément est un conteneur de défilement.
- `clip`
  - : Le contenu débordant est coupé à la _bordure de découpe du débordement_ de l'élément, définie à l'aide de la propriété {{CSSxRef("overflow-clip-margin")}}. En conséquence, le contenu déborde de la boîte de remplissage de l'élément de la valeur {{CSSxRef("&lt;length&gt;")}} de `overflow-clip-margin` ou de `0px` si elle n'est pas définie. Le contenu débordant en dehors de la zone découpée n'est pas visible, les agents utilisateurs n'ajoutent pas de barre de défilement et le défilement programmatique n'est pas non plus pris en charge. Aucun nouveau [contexte de formatage](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context) n'est créé. Pour établir un contexte de formatage, utilisez `overflow: clip` avec {{CSSxRef("display", "display: flow-root", "#flow-root")}}. La boîte de l'élément n'est pas un conteneur de défilement.
- `scroll`
  - : Le contenu débordant est coupé à la boîte de remplissage de l'élément, et le contenu débordant peut être défilé dans la vue à l'aide de barres de défilement. Les agents utilisateurs affichent des barres de défilement que le contenu déborde ou non, donc dans les directions horizontale et verticale si la valeur s'applique aux deux directions. L'utilisation de ce mot-clé peut donc empêcher les barres de défilement d'apparaître et de disparaître lorsque le contenu change. Les imprimantes peuvent toujours imprimer le contenu débordant. La boîte de l'élément est un conteneur de défilement.
- `auto`
  - : Le contenu débordant est coupé à la boîte de remplissage de l'élément, et le contenu débordant peut être défilé dans la vue à l'aide de barres de défilement. Contrairement à `scroll`, les agents utilisateurs affichent des barres de défilement _uniquement si_ le contenu déborde. Si le contenu tient dans la boîte de remplissage de l'élément, il ressemble à `visible` mais établit toujours un nouveau contexte de formatage. La boîte de l'élément est un conteneur de défilement.

> [!NOTE]
> La valeur de mot-clé `overlay` est une valeur héritée équivalente à `auto`. Avec `overlay`, les barres de défilement sont dessinées par-dessus le contenu au lieu de prendre de la place.

## Description

Les options de débordement incluent la possibilité de masquer le contenu débordant, d'activer les barres de défilement pour visualiser le contenu débordant ou d'afficher le contenu s'écoulant en dehors de la boîte d'un élément dans la zone environnante, ainsi que des combinaisons de ces options.

Les nuances suivantes doivent être prises en compte lors de l'utilisation des différents mots-clés pour `overflow`&nbsp;:

- Définir une valeur autre que `visible` (la valeur par défaut) ou `clip` pour `overflow` crée un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context). Cela est nécessaire pour des raisons techniques&nbsp;; si un flottant intersecte avec un élément défilant, il réorganiserait de force le contenu après chaque étape de défilement, ce qui entraînerait une expérience de défilement lente.
- Pour qu'un réglage de `overflow` produise l'effet souhaité, l'élément de niveau bloc doit avoir soit une hauteur définie ({{CSSxRef("height")}} ou {{CSSxRef("max-height")}}) si le débordement est dans la direction verticale, une largeur définie ({{CSSxRef("width")}} ou {{CSSxRef("max-width")}}) si le débordement est dans la direction horizontale, une taille de bloc définie ({{CSSxRef("block-size")}} ou {{CSSxRef("max-block-size")}}) si le débordement est dans la direction du bloc, ou une taille en ligne définie ({{CSSxRef("inline-size")}} ou {{CSSxRef("max-inline-size")}}) ou {{CSSxRef("white-space")}} définie sur `nowrap` si le débordement est dans la direction en ligne.
- Définir overflow sur `visible` dans une direction (c'est-à-dire `overflow-x` ou `overflow-y`) lorsqu'il n'est pas défini sur `visible` ou `clip` dans l'autre direction entraîne le comportement de la valeur `visible` comme `auto`.
- Définir overflow sur `clip` dans une direction lorsqu'il n'est pas défini sur `visible` ou `clip` dans l'autre direction entraîne le comportement de la valeur `clip` comme `hidden`.
- La propriété JavaScript {{DOMxRef("Element.scrollTop")}} peut être utilisée pour faire défiler le contenu dans un conteneur de défilement, sauf lorsque `overflow` est défini sur `clip`.
- Définir `overflow` sur des images et d'autres {{Glossary("replaced elements", "éléments remplacés")}} fonctionne comme prévu dans les navigateurs qui prennent en charge le module CSS Overflow Level 4&nbsp;; dans les versions précédentes de la spécification, les éléments remplacés étaient toujours coupés au conteneur de délimitation.
  Voir [Compatibilité des navigateurs](#compatibilité_des_navigateurs) pour les navigateurs pris en charge.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Une zone de contenu défilante n'est pas focalisable au clavier, elle ne peut donc pas être défilée par un utilisateur utilisant uniquement le clavier. Firefox et Chrome 132 et versions ultérieures font exception&nbsp;; ils rendent les conteneurs de défilement focalisables par défaut.

Pour les autres navigateurs, pour permettre aux utilisateur·ice·s utilisant uniquement le clavier de faire défiler le conteneur, vous devrez attribuer un [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) au conteneur en utilisant `tabindex="0"`. Malheureusement, lorsqu'un lecteur d'écran rencontre ce point de tabulation, il peut ne pas avoir de contexte sur le conteneur et pourrait annoncer l'intégralité du contenu du conteneur. Pour atténuer cela, donnez au conteneur un [rôle WAI-ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) approprié (`role="region"`, par exemple) et un nom accessible (avec [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)).

## Exemples

### Démonstration des résultats des différents mots-clés `overflow`

#### HTML

```html
<div>
  <code>visible</code>
  <p class="visible">
    Maya Angelou&nbsp;: «&nbsp;J'ai appris que les gens oublieront ce que vous
    avez dit, les gens oublieront ce que vous avez fait, mais les gens
    n'oublieront jamais comment vous les avez fait se sentir.&nbsp;»
  </p>
</div>

<div>
  <code>hidden</code>
  <p class="hidden">
    Maya Angelou&nbsp;: «&nbsp;J'ai appris que les gens oublieront ce que vous
    avez dit, les gens oublieront ce que vous avez fait, mais les gens
    n'oublieront jamais comment vous les avez fait se sentir.&nbsp;»
  </p>
</div>

<div>
  <code>clip</code>
  <p class="clip">
    Maya Angelou&nbsp;: «&nbsp;J'ai appris que les gens oublieront ce que vous
    avez dit, les gens oublieront ce que vous avez fait, mais les gens
    n'oublieront jamais comment vous les avez fait se sentir.&nbsp;»
  </p>
</div>

<div>
  <code>scroll</code>
  <p class="scroll">
    Maya Angelou&nbsp;: «&nbsp;J'ai appris que les gens oublieront ce que vous
    avez dit, les gens oublieront ce que vous avez fait, mais les gens
    n'oublieront jamais comment vous les avez fait se sentir.&nbsp;»
  </p>
</div>

<div>
  <code>auto</code>
  <p class="auto">
    Maya Angelou&nbsp;: «&nbsp;J'ai appris que les gens oublieront ce que vous
    avez dit, les gens oublieront ce que vous avez fait, mais les gens
    n'oublieront jamais comment vous les avez fait se sentir.&nbsp;»
  </p>
</div>

<div>
  <code>overlay</code>
  <p class="overlay">
    Maya Angelou&nbsp;: «&nbsp;J'ai appris que les gens oublieront ce que vous
    avez dit, les gens oublieront ce que vous avez fait, mais les gens
    n'oublieront jamais comment vous les avez fait se sentir.&nbsp;»
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

p.overlay {
  overflow: overlay;
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
- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- [Zones de défilement accessibles uniquement au clavier <sup>(angl.)</sup>](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) sur adrianroselli.com (2022)
