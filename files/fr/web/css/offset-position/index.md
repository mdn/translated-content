---
title: offset-position
slug: Web/CSS/offset-position
---

{{CSSRef}}{{seecompattable}}

La propriété [CSS](/fr/docs/Web/CSS) **`offset-position`** définit la [position initiale](https://www.w3.org/TR/motion-1/#valdef-offsetpath-initial-position) de {{cssxref("offset-path")}}.

## Syntaxe

```css
/* Valeurs de mots clefs */
offset-position: auto;
offset-position: top;
offset-position: bottom;
offset-position: left;
offset-position: right;
offset-position: center;

/* Valeurs de <pourcentage> */
offset-position: 25% 75%;

/* Valeurs de <longueur> */
offset-position: 0 0;
offset-position: 1cm 2cm;
offset-position: 10ch 8em;

/* Valeurs d'écart d'un bord */
offset-position: bottom 10px right 20px;
offset-position: right 3em bottom 10px;
offset-position: bottom 10px right;
offset-position: top right 10px;

/* Valeurs globales */
offset-position: inherit;
offset-position: initial;
offset-position: unset;
```

### Values

- `auto`
  - : La position initiale est la position de la boîte spécifiée par la propriété {{cssxref("position")}}.
- `<position>`
  - : Une {{cssxref("&lt;position&gt;")}}. Une position définit des coordonnées x/y pour positionner un élément de façon relative aux bords de la boîte de cet élément. Elles peuvent être définies en utilisant une à quatre valeurs. Si deux valeurs qui ne sont pas des mots clefs sont utilisées, la première valeur représente la position horizontale et la seconde représente la position verticale. Si seulement une valeur est définie, la seconde est considérée comme `center`. Si trois ou quatre valeurs sont utilisées, les valeurs en pourcentage sont des écarts du mot clef qui les précéde. Pour plus d'explications sur ces types de valeur, consultez {{cssxref("background-position")}}.

## Définition formelle

{{cssinfo}}

## Syntax formelle

{{csssyntax}}

## Exemples

### Définir la valeur initiale de offset-position

```html
<div id="motion-demo"></div>
```

```css
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  offset-position: left top;
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
