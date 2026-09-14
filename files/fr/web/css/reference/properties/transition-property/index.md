---
title: Propriété CSS `transition-property`
short-title: transition-property
slug: Web/CSS/Reference/Properties/transition-property
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`transition-property`** désigne les noms des propriétés CSS sur lesquelles [un effet de transition](/fr/docs/Web/CSS/Guides/Transitions/Using) devrait être appliqué.

{{InteractiveExample("Démonstration CSS&nbsp;: transition-property")}}

```css interactive-example-choice
transition-property: margin-right;
```

```css interactive-example-choice
transition-property: margin-right, color;
```

```css interactive-example-choice
transition-property: all;
```

```css interactive-example-choice
transition-property: none;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Survolez pour voir<br />la transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #990099;
  color: white;
  margin-right: 40%;
}
```

Si vous définissez une propriété raccourcie (par exemple {{CSSxRef("background")}}), toutes les propriétés détaillées correspondantes seront animées de la même façon.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
transition-property: none;
transition-property: all;

/* Valeurs de type <custom-ident> */
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

/* Valeurs multiples */
transition-property: test1, animation4;
transition-property: all, height, color;
transition-property:
  all,
  -moz-specific,
  sliding;

/* Valeurs globales */
transition-property: inherit;
transition-property: initial;
transition-property: revert;
transition-property: revert-layer;
transition-property: unset;
```

### Valeurs

- `none`
  - : Aucune propriété n'est concernée par les transitions.
- `all`
  - : Toutes les propriétés qui peuvent avoir une transition animée seront concernées.
- {{CSSxRef("&lt;custom-ident&gt;")}}
  - : Une chaîne de caractère qui identifie la propriété pour laquelle on doit appliquer un effet de transition lorsque sa valeur change.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Lorsque le bouton est survolé ou reçoit la sélection, il subit une transition de couleur d'une durée d'une seconde&nbsp;; la propriété `transition-property` est {{CSSxRef("background-color")}}.

#### HTML

```html
<button class="cible">Sélectionnez-moi&nbsp;!</button>
```

#### CSS

```css hidden
html {
  height: 100vh;
}

button {
  font-size: 1.4rem;
  padding: 10px 20px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  outline: none;
}
```

```css
.cible {
  transition-property: background-color;
  transition-duration: 1s;
  background-color: #cccccc;
}

.cible:hover,
.cible:focus {
  background-color: #eeeeee;
}
```

{{EmbedLiveSample("Exemple simple", 600, 100)}}

Voir notre guide [Utiliser les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions/Using) pour plus d'exemples de `transition-property`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions/Using)
- La propriété {{CSSxRef('transition')}}
- La propriété {{CSSxRef('transition-duration')}}
- La propriété {{CSSxRef('transition-timing-function')}}
- La propriété {{CSSxRef('transition-delay')}}
- L'interface API {{DOMxRef("TransitionEvent")}}
