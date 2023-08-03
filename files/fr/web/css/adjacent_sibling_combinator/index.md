---
title: Combinateur de voisin direct
slug: Web/CSS/Adjacent_sibling_combinator
---

{{CSSRef("Selectors")}}

Cette forme de combinateur permet de sélectionner un élément uniquement si celui-ci « suit » un élément donné et que les deux éléments sont les fils d'un même élément parent.

```css
/* Ne cible que les paragraphes situé directement après une image */
img + p {
  font-style: bold;
}
```

## Syntaxe

```css
premier_element + element_cible { styles }
```

## Exemples

### CSS

```css
li:first-of-type + li {
  color: red;
}
```

### HTML

```html
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
</ul>
```

### Résultat

{{EmbedLiveSample('Exemples', 200, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les combinateurs d'éléments voisins](/fr/docs/Web/CSS/Sélecteurs_de_voisins_généraux)
