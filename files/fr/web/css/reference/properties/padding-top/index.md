---
title: Propriété CSS `padding-top`
short-title: padding-top
slug: Web/CSS/Reference/Properties/padding-top
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`padding-top`** définit la hauteur de la [zone de remplissage](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_remplissage) en haut d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: padding-top")}}

```css interactive-example-choice
padding-top: 1em;
```

```css interactive-example-choice
padding-top: 10%;
```

```css interactive-example-choice
padding-top: 20px;
```

```css interactive-example-choice
padding-top: 1ch;
```

```css interactive-example-choice
padding-top: 0;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Loin dans les régions inexplorées de l'extrémité démodée du bras spiral
      occidental de la Galaxie se trouve un petit soleil jaune négligé.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
}
```

La zone de remplissage d'un élément est l'espace entre son contenu et sa bordure.

![L'effet de la propriété CSS padding-top sur la boîte de l'élément](padding-top.svg)

> [!NOTE]
> La propriété {{CSSxRef("padding")}} peut être utilisée pour définir les marges intérieures sur les quatre côtés d'un élément avec une seule déclaration.

## Syntaxe

```css
/* Valeurs de type <length> */
padding-top: 0.5em;
padding-top: 0;
padding-top: 2cm;

/* Valeurs de type <percentage> */
padding-top: 10%;

/* Valeurs globales */
padding-top: inherit;
padding-top: initial;
padding-top: revert;
padding-top: revert-layer;
padding-top: unset;
```

La propriété `padding-top` est définie comme une seule valeur choisie parmi la liste ci-dessous. Contrairement aux marges, les valeurs négatives ne sont pas autorisées pour le padding.

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille du remplissage en tant que valeur fixe. Doit être non négative.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille du remplissage en pourcentage, relative à la taille en ligne (_largeur_ dans une langue horizontale, définie par {{CSSxRef("writing-mode")}}) du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block). Doit être non négative.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le remplissage supérieur en utilisant des pixels et des pourcentages

```css
.content {
  padding-top: 5%;
}
.side-box {
  padding-top: 10px;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("padding-right")}}, {{CSSxRef("padding-bottom")}} et {{CSSxRef("padding-left")}}
- La propriété raccourcie {{CSSxRef("padding")}}
- Les propriétés {{CSSxRef("padding-block-start")}}, {{CSSxRef("padding-block-end")}}, {{CSSxRef("padding-inline-start")}} et {{CSSxRef("padding-inline-end")}}
- Les propriétés raccourcies {{CSSxRef("padding-block")}} et {{CSSxRef("padding-inline")}}
- Le guide [d'introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
