---
title: border-block-end-color
slug: Web/CSS/border-block-end-color
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-block-end-color`** définit la couleur de la bordure pour le côté de la fin de l'élément orienté orthogonalement à l'axe de lecture. Elle correspond à une propriété physique selon le mode d'écriture de l'élément, sa directionnalité et l'orientation du texte. Autrement dit, elle correspond à l'une des propriétés {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} ou {{cssxref("border-left-color")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-end-color.html")}}

Cette propriété est à rapprocher des autres propriétés logiques permettant de définir les couleurs de la bordure d'un élément :

- {{cssxref("border-block-start-color")}},
- {{cssxref("border-inline-end-color")}},
- {{cssxref("border-inline-start-color")}}.

## Syntaxe

```css
border-block-end-color: red;
border-block-end-color: #fffff;
border-block-end-color: rgb(200, 0, 0);

border-block-end-color: unset;
border-block-end-color: initial;
border-block-end-color: inherit;
```

### Valeurs

- `<'border-color'>`
  - : La couleur utilisée pour la bordure, voir {{cssxref("border-color")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exemple {
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-block-end-color: red;
}
```

### HTML

```html
<div>
  <p class="exemple">Texte d'exemple</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("border-top-color")}},
  - {{cssxref("border-right-color")}},
  - {{cssxref("border-bottom-color")}},
  - {{cssxref("border-left-color")}}.

- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
- [bug Firefox 1297097](https://bugzil.la/1297097)
