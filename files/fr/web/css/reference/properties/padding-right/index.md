---
title: Propriété CSS `padding-right`
short-title: padding-right
slug: Web/CSS/Reference/Properties/padding-right
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`padding-right`** définit la largeur de la [zone de remplissage](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_remplissage) à droite d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: padding-right")}}

```css interactive-example-choice
padding-right: 1.5em;
```

```css interactive-example-choice
padding-right: 10%;
```

```css interactive-example-choice
padding-right: 20px;
```

```css interactive-example-choice
padding-right: 1ch;
```

```css interactive-example-choice
padding-right: 0;
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

> [!NOTE]
> La propriété {{CSSxRef("padding")}} peut être utilisée pour définir les remplissages sur les quatre côtés d'un élément avec une seule déclaration.

## Syntaxe

```css
/* Valeurs de type <length> */
padding-right: 0.5em;
padding-right: 0;
padding-right: 2cm;

/* Valeurs de type <percentage> */
padding-right: 10%;

/* Valeurs globales */
padding-right: inherit;
padding-right: initial;
padding-right: revert;
padding-right: revert-layer;
padding-right: unset;
```

La propriété `padding-right` est définie comme une seule valeur choisie dans la liste ci-dessous. Contrairement aux marges, les valeurs négatives ne sont pas autorisées pour le remplissage.

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille du remplissage exprimée avec une valeur absolue. Cette valeur ne peut être négative.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille du remplissage exprimée en pourcentage, relative à la taille en ligne (_largeur_ dans une langue horizontale, définie par {{CSSxRef("writing-mode")}}) du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block). Cette valeur ne peut être négative.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le remplissage à droite en utilisant des pixels et des pourcentages

```css
.content {
  padding-right: 5%;
}
.side-box {
  padding-right: 10px;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("padding-top")}}, {{CSSxRef("padding-bottom")}} et {{CSSxRef("padding-left")}}
- La propriété raccourcie {{CSSxRef("padding")}}
- Les propriétés {{CSSxRef("padding-block-start")}}, {{CSSxRef("padding-block-end")}}, {{CSSxRef("padding-inline-start")}} et {{CSSxRef("padding-inline-end")}}
- Les propriétés raccourcies {{CSSxRef("padding-block")}} et {{CSSxRef("padding-inline")}}
- Le guide [d'introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
