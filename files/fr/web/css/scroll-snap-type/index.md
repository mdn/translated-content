---
title: scroll-snap-type
slug: Web/CSS/scroll-snap-type
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/scroll-snap-type
---
{{CSSRef}}

La propriété **`scroll-snap-type`** définit la force d'adhérence aux points d'accroche en cas de défilement d'un conteneur.

{{EmbedInteractiveExample("pages/css/scroll-snap-type.html")}}

La gestion précise des animations et de la physique pour respecter ces points d'accroche n'est pas décrite par cette propriété et est laissée à la discrétion de l'agent utilisateur.

```css
/* Valeur avec un mot-clé */
scroll-snap-type: none;
scroll-snap-type: x;
scroll-snap-type: y;
scroll-snap-type: block;
scroll-snap-type: inline;
scroll-snap-type: both;

/* Ajout du mot-clé optionnel mandatory ou proximity*/
scroll-snap-type: x mandatory;
scroll-snap-type: y proximity;
scroll-snap-type: both mandatory;
/* etc. */

/* Valeurs globales */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : Lorsque le {{Glossary("viewport")}} du conteneur défile, on ignore les points d'accroche.
- `x`
  - : Le conteneur qui défile s'accroche aux positions sur l'axe horizontal uniquement.
- `y`
  - : Le conteneur qui défile s'accroche aux positions sur l'axe vertical uniquement.
- `block`
  - : Le conteneur qui défile s'accroche aux positions sur l'axe de bloc (celui orthogonal à l'axe de lecture) uniquement.
- `inline`
  - : Le conteneur qui défile s'accroche aux positions sur l'axe en ligne (correspondant à au sens de lecteure) uniquement.
- `both`
  - : Le conteneur qui défile s'accroche aux positions sur les deux axes de façon indépendante.
- `mandatory`
  - : Le _viewport_ visuel du conteneur doit s'arrêter sur les points d'accroche s'il n'est pas en cours de défilement. Cela signifie qu'il accroche sur ce point quand le défilement s'arrête. Si du contenu est ajouté, déplacé, supprimé ou redimensionné, le décalage induit doit être ajusté pour rester sur ce point d'accroche.
- `proximity`
  - : Le _viewport_ visuel du conteneur peut s'accrocher à un point d'accroche si aucun défilement n'est en cours, selon les paramètres de défilement de l'agent utilisateur. Si du contenu est ajouté, déplacé, supprimé ou redimensionne, le décalage induit peut être ajusté pour rester sur ce point d'accroche.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
/* setup */
html, body, .holster {
  height: 100%;
}
.holster {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}

.container {
  display: flex;
  overflow: auto;
  outline: 1px dashed lightgray;
  flex: none;
}

.container.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
}

.container.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
}
/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}

.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

.container > div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}

.x.container > div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}

.y.container > div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 100%;
}
/* appearance fixes */
.y.container > div:first-child {
  line-height: 1.3;
  font-size: 64px;
}
/* coloration */
.container > div:nth-child(even) {
  background-color: #87EA87;
}

.container > div:nth-child(odd) {
  background-color: #87CCEA;
}
```

### HTML

```html
<div class="holster">
<div class="container x mandatory-scroll-snapping" dir="ltr">
  <div>X Mand. LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container x proximity-scroll-snapping" dir="ltr">
  <div>X Prox. LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y mandatory-scroll-snapping" dir="ltr">
  <div>Y Mand. LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y proximity-scroll-snapping" dir="ltr">
  <div>Y Prox. LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container x mandatory-scroll-snapping" dir="rtl">
  <div>X Mand. RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container x proximity-scroll-snapping" dir="rtl">
  <div>X Prox. RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y mandatory-scroll-snapping" dir="rtl">
  <div>Y Mand. RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y proximity-scroll-snapping" dir="rtl">
  <div>Y Prox. RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", "1630")}}

## Spécifications

| Spécification                                                                                                        | État                                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Scroll Snap Points", "#propdef-scroll-snap-type", "scroll-snap-type")}} | {{Spec2("CSS Scroll Snap Points")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.scroll-snap-type")}}
