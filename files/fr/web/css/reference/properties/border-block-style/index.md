---
title: border-block-style
slug: Web/CSS/Reference/Properties/border-block-style
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-block-style`** définit le style des bordures logiques de bloc d'un élément, qui correspond à un style de bordure physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Elle peut correspondre aux propriétés {{CSSxRef("border-top-style")}} et {{CSSxRef("border-bottom-style")}}, ou {{CSSxRef("border-left-style")}} et {{CSSxRef("border-right-style")}} selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Le style de bordure dans l'autre dimension peut être défini avec {{CSSxRef("border-inline-style")}}, qui définit {{CSSxRef("border-inline-start-style")}} et {{CSSxRef("border-inline-end-style")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-block-style")}}

```css interactive-example-choice
border-block-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-style: groove;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec une bordure autour.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Syntaxe

```css
/* Valeurs de type <'border-style'> */
border-block-style: dashed;
border-block-style: dotted;
border-block-style: groove;

/* Valeurs globales */
border-block-style: inherit;
border-block-style: initial;
border-block-style: revert;
border-block-style: revert-layer;
border-block-style: unset;
```

### Valeur

- `<'border-style'>`
  - : Le style de la ligne pour la bordure. Voir {{CSSxRef("border-style")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Bordure en pointillés avec du texte vertical

#### HTML

```html
<div>
  <p class="exempleTexte">Texte exemple</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exempleTexte {
  writing-mode: vertical-lr;
  border: 5px solid blue;
  border-block-style: dashed;
}
```

#### Résultat

{{EmbedLiveSample("Bordure en pointillés avec du texte vertical", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Cette propriété correspond à l'une des propriétés physiques de bordure&nbsp;: {{CSSxRef("border-top-style")}}, {{CSSxRef("border-right-style")}}, {{CSSxRef("border-bottom-style")}} ou {{CSSxRef("border-left-style")}}.
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
