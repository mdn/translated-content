---
title: <length-percentage>
slug: Web/CSS/Reference/Values/length-percentage
original_slug: Web/CSS/length-percentage
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<length-percentage>`** représente une valeur qui peut être une valeur de type {{CSSxRef("length")}} ou une valeur de type {{CSSxRef("percentage")}}.

## Syntaxe

Se référer à la documentation des types {{CSSxRef("length")}} et {{CSSxRef("percentage")}} pour plus de détails sur les syntaxes possibles pour chacun de ces types.

## Syntaxe formelle

{{CSSSyntax}}

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

Lorsqu'une valeur de type `<length-percentage>` peut être utilisée dans une déclaration, cela signifie que le pourcentage sera résolu comme une longueur et qu'il peut alors être utilisé au sein d'une expression {{CSSxRef("calc()", "calc()")}}. Ainsi, toutes les valeurs qui suivent sont acceptables pour la propriété {{CSSxRef("width")}}&nbsp;:

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

- Le type de donnée {{CSSxRef("&lt;percentage&gt;")}}
- Le type de donnée {{CSSxRef("&lt;length&gt;")}}
- Le module des [valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
