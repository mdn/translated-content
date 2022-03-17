---
title: Combinateur de voisin direct
slug: Web/CSS/Adjacent_sibling_combinator
tags:
  - CSS
  - Reference
  - Sélecteur
translation_of: Web/CSS/Adjacent_sibling_combinator
original_slug: Web/CSS/Combinateur_de_voisin_direct
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

    premier_element + element_cible { styles }

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

| Spécification                                                                                                                | État                                 | Commentaires                                           |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| {{SpecName('CSS4 Selectors', '#adjacent-sibling-combinators', 'next-sibling combinator')}}     | {{Spec2('CSS4 Selectors')}} | Renomme ce sélecteur en « _next-sibling combinator_ ». |
| {{SpecName('CSS3 Selectors', '#adjacent-sibling-combinators', 'Adjacent sibling combinator')}} | {{Spec2('CSS3 Selectors')}} |                                                        |
| {{SpecName('CSS2.1', 'selector.html#adjacent-selectors', 'Adjacent sibling selectors')}}         | {{Spec2('CSS2.1')}}             | Définition initiale.                                   |

## Compatibilité des navigateurs

{{Compat("css.selectors.adjacent_sibling")}}

## Voir aussi

- [Les combinateurs d'éléments voisins](/fr/docs/Web/CSS/Sélecteurs_de_voisins_généraux)
