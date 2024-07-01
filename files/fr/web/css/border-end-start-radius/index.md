---
title: border-end-start-radius
slug: Web/CSS/border-end-start-radius
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-end-start-radius`** définit le rayon de courbure de la bordure pour un angle d'un élément. Cette propriété logique correspond à une propriété physique de rayon de bordure selon la directionalité du texte et le mode d'écriture. Autrement dit, cette propriété concerne un angle différent selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

```css
/* Valeurs de longueur */
/* Type <length> */
/* Avec une valeur, le coin sera circulaire */
border-end-start-radius: 10px;
border-end-start-radius: 1em;

/* Avec deux valeurs, le coin sera une ellipse */
border-end-start-radius: 1em 2em;

/* Valeurs globales */
border-end-start-radius: inherit;
border-end-start-radius: initial;
border-end-start-radius: unset;
```

Ainsi, avec un mode d'écriture `horizontal-tb`, cette propriété logique correspondra à la propriété physique {{CSSxRef("border-top-right-radius")}}.

## Syntaxe

### Valeurs

- `<length-percentage>`
  - : Cette valeur exprime le rayon de courbure ou les demi-axes d'une ellipse. Pour les valeurs qui expriment une longueur, on peut utiliser n'importe quelle valeur du type de donnée {{cssxref("&lt;length&gt;")}}. Les pourcentages sur l'axe horizontal sont relatifs à la largeur de la boîte et à la hauteur de la boîte pour l'axe vertical. Les valeurs négatives sont invalides.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
div {
  background-color: rebeccapurple;
  width: 120px;
  height: 120px;
  border-end-start-radius: 10px;
}

.texteExemple {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: #fff;
  border-end-start-radius: 10px;
}
```

### HTML

```html
<div>
  <p class="texteExemple">Exemple</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété physique correspondante : {{CSSxRef("border-top-right-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
