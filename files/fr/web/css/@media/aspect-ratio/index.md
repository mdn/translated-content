---
title: aspect-ratio
slug: Web/CSS/@media/aspect-ratio
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/aspect-ratio
---
{{CSSRef}}

**`aspect-ratio`** est une caractéristique média CSS dont la valeur correspond au ratio ({{cssxref("&lt;ratio&gt;")}}) entre la largeur et la hauteur de la zone d'affichage (_viewport_).

## Syntaxe

La caractéristique `aspect-ratio` est définie avec un ratio (type CSS {{cssxref("&lt;ratio&gt;")}}) qui représente le ratio entre la largeur et la hauteur de la zone d'affichage . C'est une caractéristique d'intervalle ce qui signifie qu'on peut utiliser les variantes préfixées **`min-aspect-ratio`** et **`max-aspect-ratio`** afin de cibler des règles CSS en fonction d'une valeur minimale ou maximale.

## Exemples

### Exemples de valeurs pour aspect-ratio

```css
aspect-ratio: 1 / 1;
aspect-ratio: 16 / 9;
```

## Correspondance entre width et height et aspect-ratio

Les navigateurs ont ajouté une propriété `aspect-ratio` interne qui s'applique aux [éléments remplacés](/fr/docs/Web/CSS/Replaced_element) et aux autres éléments associés qui acceptent des attributs `width` et `height`. Celle-ci apparaît dans la feuille de style interne de l'agent utilisateur.

Pour Firefox, la feuille de style interne ressemble à :

```css
img, input[type="image"], video, embed, iframe, marquee, object, table {
  aspect-ratio: attr(width) / attr(height);
}
```

Pour en savoir plus, vous pouvez consulter [Définir la hauteur et largeur des images redevient important (en anglais)](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

## Spécifications

| Spécification                                                                            | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS4 Media Queries', '#aspect-ratio', 'aspect-ratio')}} | {{Spec2('CSS4 Media Queries')}} | Aucune modification. |
| {{SpecName('CSS3 Media Queries', '#aspect-ratio', 'aspect-ratio')}} | {{Spec2('CSS3 Media Queries')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.aspect-ratio")}}
