---
title: <length-percentage>
slug: Web/CSS/Reference/Values/length-percentage
original_slug: Web/CSS/length-percentage
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<length-percentage>`** représente une valeur qui peut être une valeur de type {{Cssxref("length")}} ou une valeur de type {{Cssxref("percentage")}}.

## Syntaxe

Se référer à la documentation des types {{Cssxref("length")}} et {{Cssxref("percentage")}} pour plus de détails sur les syntaxes possibles pour chacun de ces types.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemples de `length-percentage`

Cet exemple montre plusieurs propriétés qui utilisent des valeurs `<length-percentage>`.

#### HTML

```html
<p>
  Vous pouvez utiliser des pourcentages et des longueurs à de nombreux endroits.
</p>
```

#### CSS

```css
p {
  /* exemples de length-percentage */
  width: 75%;
  height: 200px;
  margin: 3rem;
  padding: 1%;
  border-radius: 10px 10%;
  font-size: 250%;
  line-height: 1.5em;

  /* exemples de longueurs */
  text-shadow: 1px 1px 1px red;
  border: 5px solid red;
  letter-spacing: 3px;

  /* exemple de pourcentage */
  text-size-adjust: 20%;
}
```

#### Résultat

{{EmbedLiveSample('Exemples de `length-percentage`', '100%', 320)}}

### Utilisation avec `calc()`

Lorsqu'une valeur de type `<length-percentage>` peut être utilisée dans une déclaration, cela signifie que le pourcentage sera résolu comme une longueur et qu'il peut alors être utilisé au sein d'une expression {{cssxref("calc()", "calc()")}}. Ainsi, toutes les valeurs qui suivent sont acceptables pour la propriété {{Cssxref("width")}}&nbsp;:

```css example-good
width: 200px;
width: 20%;
width: calc(100% - 200px);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{cssxref("&lt;percentage&gt;")}}
- Le type de donnée {{cssxref("&lt;length&gt;")}}
- Le module des [valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
