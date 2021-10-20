---
title: offset-anchor
slug: Web/CSS/offset-anchor
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/offset-anchor
---
{{cssref}}{{seecompattable}}

La propriété CSS **`offset-anchor`** définit le point, à l'intérieur d'une boîte d'un élément, qui se déplace le long d'un chemin {{cssxref("offset-path")}}.

## Syntaxe

```css
/* Valeurs avec un movalues */
offset-anchor: top;
offset-anchor: bottom;
offset-anchor: left;
offset-anchor: right;
offset-anchor: center;
offset-anchor: auto;

/* Valeurs de pourcentages */
/* Type <percentage> */
offset-anchor: 25% 75%;

/* Valeurs de longueur */
/* Type <length> */
offset-anchor: 0 0;
offset-anchor: 1cm 2cm;
offset-anchor: 10ch 8em;

/* Valeurs de décalage relatives à un bord */
offset-anchor: bottom 10px right 20px;
offset-anchor: right 3em bottom 10px;

/* Valeurs globales */
offset-anchor: inherit;
offset-anchor: initial;
offset-anchor: unset;
```

### Valeurs

- `auto`
  - : `offset-anchor` reçoit la même valeur que {{cssxref("transform-origin")}} sauf si {{cssxref("offset-path")}} vaut `none`, dans ce cas, elle récupère la valeur de {{cssxref("offset-position")}}.
- `<position>`
  - : Une position ({{cssxref("&lt;position&gt;")}}) définie par un couple de coordonnées X/Y qui permet de placer un objet par rapport aux bords de sa boîte. On peut définir la position à partir de une à quatre valeurs. Pour plus d'informations, voir les pages sur {{cssxref("&lt;position&gt;")}} et {{cssxref("background-position")}}. La syntaxe à trois valeurs ne fonctionne pas pour `<position>`, excepté pour `background(-position)`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

Dans l'exemple suivant, on dispose de trois éléments {{htmlelement("div")}} imbriqués chacun dans un élément {{htmlelement("section")}}. Chaque `<div>` se déplace sur le même chemin {{cssxref("offset-path")}} (une ligne horizontale mesurant 200 pixels). Les trois blocs possèdent une couleur ({{cssxref("background-color")}}) et une valeur `offset-anchor` différentes.

Chaque élément `<section>` a été mise en forme avec un dégradé linéaire afin de fournir une indication visuelle du chemin.

On peut voir que la première valeur, `auto`, déplace l'élément sur son centre. La deuxième et la troisième déplacent le `<div>` par le coin supérieur droit et le coin inférieur gauche respectivement.

### HTML

```html
<section>
  <div class="offset-anchor1"></div>
</section>
<section>
  <div class="offset-anchor2"></div>
</section>
<section>
  <div class="offset-anchor3"></div>
</section>
```

### CSS

```css
div {
  offset-path: path('M 0,20 L 200,20');
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
}

section {
  background-image: linear-gradient(to bottom, transparent, transparent 49%, #000 50%, #000 51%, transparent 52%);
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.offset-anchor1 {
  offset-anchor: auto;
  background: cyan;
}

.offset-anchor2 {
  offset-anchor: right top;
  background: purple;
}

.offset-anchor3 {
  offset-anchor: left bottom;
  background: magenta;
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

### Résultat

{{EmbedLiveSample('Exemples', '100%', '300')}}

## Spécifications

| Spécification                                                                                            | État                                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('Motion Path Level 1', '#offset-anchor-property', 'offset-anchor')}} | {{Spec2('Motion Path Level 1')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.offset-anchor")}}

## Voir aussi

- {{cssxref("offset")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-rotation")}}
- [L'élément SVG `<path>`](/fr/docs/Web/SVG/Tutorial/Paths)
