---
title: Propriété CSS `z-index`
short-title: z-index
slug: Web/CSS/Reference/Properties/z-index
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`z-index`** définit l'ordre d'empilement sur l'axe Z d'un élément [positionné](/fr/docs/Web/CSS/Reference/Properties/position) et de ses descendants ou des éléments flexibles et de grille. Les éléments qui se chevauchent avec un `z-index` plus élevé recouvrent ceux avec un `z-index` plus faible.

{{InteractiveExample("Démonstration CSS&nbsp;: z-index")}}

```css interactive-example-choice
z-index: auto;
```

```css interactive-example-choice
z-index: 1;
```

```css interactive-example-choice
z-index: 3;
```

```css interactive-example-choice
z-index: 5;
```

```css interactive-example-choice
z-index: 7;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div id="example-element">Changez mon z-index</div>
  <div class="block blue position1">z-index: 6</div>
  <div class="block blue position2">z-index: 4</div>
  <div class="block blue position3">z-index: 2</div>
  <div class="block red position4">z-index: auto</div>
  <div class="block red position5">z-index: auto</div>
  <div class="block red position6">z-index: auto</div>
</section>
```

```css interactive-example
#example-element {
  top: 15px;
  left: 15px;
  width: 180px;
  height: 230px;
  position: absolute;
  /* centrer le texte pour qu'il soit visible même lorsque z-index est
     défini sur auto */
  line-height: 215px;
  font-family: monospace;
  background-color: #fcfbe5;
  border: solid 5px #e3e0a1;
  z-index: auto;
  color: black;
}

.container {
  display: inline-block;
  width: 250px;
  position: relative;
}

.block {
  width: 150px;
  height: 50px;
  position: absolute;
  font-family: monospace;
  color: black;
}

.blue {
  background-color: #e5e8fc;
  border: solid 5px #112382;
  /* déplacer le texte en bas de la boîte */
  line-height: 55px;
}

.red {
  background-color: #fce5e7;
  border: solid 5px #e3a1a7;
}

.position1 {
  top: 0;
  left: 0;
  z-index: 6;
}

.position2 {
  top: 30px;
  left: 30px;
  z-index: 4;
}

.position3 {
  top: 60px;
  left: 60px;
  z-index: 2;
}

.position4 {
  top: 150px;
  left: 0;
  z-index: auto;
}

.position5 {
  top: 180px;
  left: 30px;
  z-index: auto;
}

.position6 {
  top: 210px;
  left: 60px;
  z-index: auto;
}
```

Pour les boîtes positionnées (celles pour lesquelles `position` est différent de `static`), la propriété `z-index` définit&nbsp;:

1. Le niveau de la boîte dans la pile par rapport [au contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) courant
2. Si la boîte crée un contexte d'empilement local.

## Syntaxe

```css
/* Avec un mot-clé */
z-index: auto;

/* Valeur de type <integer> */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* Valeurs négatives possibles pour indiquer une priorité inférieure */

/* Valeurs globales */
z-index: inherit;
z-index: initial;
z-index: revert;
z-index: revert-layer;
z-index: unset;
```

La propriété `z-index` est spécifiée soit par le mot-clé `auto`, soit par un entier (`<integer>`).

### Valeurs

- `auto`
  - : La boîte ne crée pas de nouveau contexte d'empilement local. Le niveau d'empilement de la boîte générée dans le contexte d'empilement courant est `0`.
- {{CSSxRef("&lt;integer&gt;")}}
  - : Cet entier ({{CSSxRef("&lt;integer&gt;")}}) est le niveau d'empilement de la boîte générée dans le contexte d'empilement courant. La boîte crée également un contexte d'empilement local. Cela signifie que les `z-index` des descendants ne sont pas comparés aux `z-index` des éléments en dehors de cet élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Empiler des éléments visuellement

#### HTML

```html
<div class="wrapper">
  <div class="boite-tirets">Boîte avec tirets</div>
  <div class="boite-doree">Boîte dorée</div>
  <div class="boite-verte">Boîte verte</div>
</div>
```

#### CSS

```css
.wrapper {
  position: relative;
}

.boite-tirets {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.boite-doree {
  position: absolute;
  z-index: 3; /* place .boite-doree au-dessus de .boite-verte et .boite-tirets */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.boite-verte {
  position: absolute;
  z-index: 2; /* place .boite-verte au-dessus de .boite-tirets */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

#### Résultat

{{EmbedLiveSample("Empiler des éléments visuellement", 550, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("position")}}
- [Comprendre le fonctionnement de `z-index`](/fr/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
