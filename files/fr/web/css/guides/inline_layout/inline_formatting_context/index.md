---
title: Contexte de formatage en incise
slug: Web/CSS/Guides/Inline_layout/Inline_formatting_context
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ce guide explique le contexte de formatage en incise.

## Concepts de base

Le contexte de formatage en incise fait partie du rendu visuel d'une page web. Les boîtes en incise sont disposées les unes après les autres, dans la direction dans laquelle les phrases s'écoulent selon le mode d'écriture utilisé&nbsp;:

- Dans un mode d'écriture horizontal, les boîtes sont disposées horizontalement, en commençant par la gauche.
- Dans un mode d'écriture vertical, elles sont disposées verticalement en commençant par le haut.

Dans l'exemple ci-dessous, les deux éléments HTML {{HTMLElement("div")}} avec les bordures noires font partie d'un [contexte de formatage en bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context), tandis qu'à l'intérieur de chaque boîte, les mots participent à un contexte de formatage en incise. Les mots dans le mode d'écriture horizontal s'écoulent horizontalement, tandis que les mots dans le mode d'écriture vertical s'écoulent verticalement.

```html live-sample___inline
<div class="exemple horizontal">Un Deux Trois</div>
<div class="exemple vertical">Quatre Cinq Six</div>
```

```css live-sample___inline
body {
  font: 1.2em sans-serif;
}
.exemple {
  border: 5px solid black;
  margin: 20px;
}

.horizontal {
  writing-mode: horizontal-tb;
}
.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("inline", "", 240)}}

Les boîtes formant une ligne sont contenues dans une zone rectangulaire appelée boîte de ligne. Cette boîte est assez grande pour contenir toutes les boîtes en incise dans cette ligne&nbsp;; lorsqu'il n'y a plus de place dans la direction en incise, une autre ligne est créée. Par conséquent, un paragraphe est un ensemble de boîtes de ligne en incise, empilées dans la direction en bloc.

Lorsqu'une boîte en incise est coupée, les marges, les bordures et les rembourrages n'ont aucun effet visuel où le coupure se produit. Dans l'exemple suivant, il y a un élément HTML {{HTMLElement("span")}} qui entoure un ensemble de mots qui s'enroulent sur deux lignes. La bordure sur le `<span>` se brise au point d'enroulement.

```html live-sample___break
<div class="exemple">
  Avant cette nuit —
  <span
    >une nuit mémorable, comme il allait le prouver — des centaines de millions
    de personnes</span
  >
  avaient regardé les volutes de fumée s'élever de leurs feux sans en tirer une
  inspiration particulière.
</div>
```

```css live-sample___break
body {
  font: 1.2em sans-serif;
}
.exemple {
  border: 5px solid black;
  margin: 20px;
}

span {
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("break")}}

Les marges, bordures et les remplissages dans la direction en incise sont respectés. Dans l'exemple ci-dessous, vous pouvez voir comment la marge, la bordure et le remplissage sur l'élément `<span>` en incise sont ajoutés.

```html live-sample___mbp
<div class="exemple horizontal">Un <span>Deux</span> Trois</div>
<div class="exemple vertical">Quatre <span>Cinq</span> Six</div>
```

```css live-sample___mbp
body {
  font: 1.2em sans-serif;
}

.exemple {
  border: 5px solid black;
  margin: 20px;
}

span {
  border: 5px solid rebeccapurple;
  padding-inline-start: 20px;
  padding-inline-end: 40px;
  margin-inline-start: 30px;
  margin-inline-end: 10px;
}
.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("mbp", "", 340)}}

> [!NOTE]
> Nous utilisons les propriétés logiques, relatives au flux — {{CSSxRef("padding-inline-start")}} plutôt que {{CSSxRef("padding-left")}} — afin qu'elles fonctionnent dans la dimension en incise, que le texte soit horizontal ou vertical. Pour en savoir plus sur ces propriétés, consultez [Propriétés et valeurs logiques](/fr/docs/Web/CSS/Guides/Logical_properties_and_values).

## Aligner dans la direction du bloc

Les boîtes en incises peuvent être alignées dans la direction du bloc de différentes manières, en utilisant la propriété {{CSSxRef("vertical-align")}}, qui aligne sur l'axe du bloc dans les modes d'écriture verticaux (donc pas du tout verticalement&nbsp;!). Dans l'exemple ci-dessous, le grand texte fait augmenter la taille de la boîte en incise de la première phrase, par conséquent la propriété `vertical-align` peut être utilisée pour aligner les boîtes en incise de chaque côté de lui. Nous utilisons la valeur `top`, essayez de la changer en `middle`, `bottom` ou `baseline`.

```html live-sample___align
<div class="exemple horizontal">
  Avant cette nuit —
  <span
    >une nuit mémorable, comme il allait le prouver — des centaines de millions
    de personnes</span
  >
  avaient regardé les volutes de fumée s'élever de leurs feux sans en tirer une
  inspiration particulière.
</div>

<div class="exemple vertical">
  Avant cette nuit —
  <span
    >une nuit mémorable, comme il allait le prouver — des centaines de millions
    de personnes</span
  >
  avaient regardé les volutes de fumée s'élever de leurs feux sans en tirer une
  inspiration particulière.
</div>
```

```css live-sample___align
body {
  font: 1.2em sans-serif;
}

span {
  font-size: 200%;
  vertical-align: top;
}

.exemple {
  border: 5px solid black;
  margin: 20px;
  inline-size: 400px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("align", "", 750)}}

## Aligner dans la direction en incise

S'il y a de l'espace supplémentaire dans la direction en incise, la propriété {{CSSxRef("text-align")}} peut être utilisée pour aligner les boîtes en incise à l'intérieur de leur boîte de ligne. Essayez de changer la valeur de `text-align` ci-dessous en `end`.

```html live-sample___text-align
<div class="exemple horizontal">Un Deux Trois</div>
<div class="exemple vertical">Quatre Cinq Six</div>
```

```css hidden live-sample___text-align
body {
  font: 1.2em sans-serif;
}

.exemple {
  border: 5px solid black;
  margin: 20px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

```css live-sample___text-align
.exemple {
  text-align: center;
  inline-size: 250px;
}
```

{{EmbedLiveSample("text-align", "", 350)}}

## Effet des éléments flottants

Les boîtes en incise ont généralement la même taille dans la direction en incise, donc la même largeur si on travaille dans un mode d'écriture horizontal, ou la même hauteur si on travaille dans un mode d'écriture vertical. Cependant, si il y a un {{CSSxRef("float")}} dans le même contexte de formatage en bloc, le flottant fait que les boîtes en incise qui entourent le flottant deviennent plus courtes.

```html live-sample___float
<div class="boite">
  <div class="flottant">Je suis une boîte flottante&nbsp;!</div>
  <p>Je suis le contenu à l'intérieur du conteneur.</p>
</div>
```

```css live-sample___float
body {
  font: 1.2em sans-serif;
}

.boite {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}

.flottant {
  float: left;
  width: 250px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("float", "", 200)}}

## Voir aussi

- [Contexte de formatage en bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Modèle de formatage visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)
