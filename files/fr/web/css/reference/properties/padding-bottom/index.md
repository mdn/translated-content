---
title: padding-bottom
slug: Web/CSS/Reference/Properties/padding-bottom
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`padding-bottom`** définit la hauteur de la [zone de remplissage](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_remplissage) en bas d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: padding-bottom")}}

```css interactive-example-choice
padding-bottom: 1em;
```

```css interactive-example-choice
padding-bottom: 10%;
```

```css interactive-example-choice
padding-bottom: 20px;
```

```css interactive-example-choice
padding-bottom: 1ch;
```

```css interactive-example-choice
padding-bottom: 0;
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

![L'effet de la propriété CSS padding-bottom sur la boîte de l'élément](padding-bottom.svg)

> [!NOTE]
> La propriété {{CSSxRef("padding")}} peut être utilisée pour définir les remplissages sur les quatre côtés d'un élément avec une seule déclaration.

## Syntaxe

```css
/* Valeurs de type <length> */
padding-bottom: 0.5em;
padding-bottom: 0;
padding-bottom: 2cm;

/* Valeurs de type <percentage> */
padding-bottom: 10%;

/* Valeurs globales */
padding-bottom: inherit;
padding-bottom: initial;
padding-bottom: revert;
padding-bottom: revert-layer;
padding-bottom: unset;
```

La propriété `padding-bottom` est définie comme une seule valeur choisie dans la liste ci-dessous. Contrairement aux marges, les valeurs négatives ne sont pas autorisées pour le remplissage.

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille du remplissage exprimée avec une valeur absolue. Cette valeur ne peut être négative.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille du remplissage exprimé en pourcentage, relative à la taille en ligne (_largeur_ dans une langue horizontale, définie par {{CSSxRef("writing-mode")}}) du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block). Cette valeur ne peut être négative.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le remplissage inférieur avec des pixels et des pourcentages

```css
.content {
  padding-bottom: 5%;
}
.side-box {
  padding-bottom: 10px;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("padding-top")}}, {{CSSxRef("padding-right")}} et {{CSSxRef("padding-left")}}
- La propriété raccourcie {{CSSxRef("padding")}}
- Les propriétés {{CSSxRef("padding-block-start")}}, {{CSSxRef("padding-block-end")}}, {{CSSxRef("padding-inline-start")}} et {{CSSxRef("padding-inline-end")}}
- Les propriétés raccourcies {{CSSxRef("padding-block")}} et {{CSSxRef("padding-inline")}}
- Le guide [d'introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
