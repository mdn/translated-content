---
title: Sélecteurs de voisins généraux
slug: Web/CSS/General_sibling_combinator
tags:
  - CSS
  - Débutant
  - Reference
  - Sélecteur
translation_of: Web/CSS/General_sibling_combinator
original_slug: Web/CSS/Sélecteurs_de_voisins_généraux
---
{{CSSRef("Selectors")}}

Le combinateur `~` permet de séparer deux sélecteurs et de cibler un élément si celui-ci correspond au second sélecteur et est précédé (mais pas forcément voisin immédiat) d'un autre élément correspondant au premier sélecteur qui partage le même parent. Les deux éléments sont des fils d'un même parent {{domxref("Element")}}, voisins immédiats ou pas.

```css
/* Parmi tous les éléments <img>, cibler tous
   éléments <p> qui les suivent. */
img ~ p {
  color: red;
}
```

## Syntaxe

    premier_element ~ second_element { propriétés de style }

## Exemples

### CSS

```css
p ~ span {
  color: red;
}
```

### HTML

```html
<span>Ici, ce n'est pas rouge.</span>
<p>Voici un paragraphe.</p>
<code>Un peu de code.</code>
<span>Et un autre span.</span>
<code>Encore du code</code>
<span>Ici aussi, c'est rouge</span>
```

### Résultat

{{EmbedLiveSample('Exemples', 280, 120)}}

## Spécifications

| Spécification                                                                                                                | État                                 | Commentaires                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------ |
| {{SpecName('CSS4 Selectors', '#general-sibling-combinators', 'following-sibling combinator')}} | {{Spec2('CSS4 Selectors')}} | Ce combinateur est renommé en « _subsequent-sibling combinator_ ». |
| {{SpecName('CSS3 Selectors', '#general-sibling-combinators', 'general sibling combinator')}} | {{Spec2('CSS3 Selectors')}} | Définition initiale.                                               |

## Compatibilité des navigateurs

{{Compat("css.selectors.general_sibling")}}

## Voir aussi

- [Sélecteur de voisin direct](/fr/docs/Web/CSS/Sélecteur_de_voisin_direct)
