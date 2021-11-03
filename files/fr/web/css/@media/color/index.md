---
title: color
slug: Web/CSS/@media/color
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/color
---
{{CSSRef}}

**`color`** est une caractéristique média CSS (cf. {{cssxref("@media")}}) dont la valeur est le nombre de bits par composante de couleur du périphérique de sortie, ou zéro si ce dernier ne gère pas les couleurs.

## Syntaxe

La caractéristique `color` est définie avec un entier (type CSS {{cssxref("&lt;integer&gt;")}}) et représente le nombre de bits utiisé par l'appareil d'affichage pour représenter chaque composante de couleur. Si l'appareil ne gère pas les couleurs, la valeur sera zéro. C'est une caractéristique d'intervalle ce qui signifie qu'on peut utiliser les variantes préfixées **`min-color`** et **`max-color`** afin de cibler des règles en fonction d'un minimum ou d'un maximum.

> **Note :** Si les différentes composantes sont représentées sur un nombre différent de bits, c'est le plus petit de ces nombres qui est utilisé. Par exemple, si un affichage utilise 5 bits pour le bleu et le rouge mais 6 bits pour le vert, on considèrera que l'appareil utilise 5 bits par couleur. Si l'appareil utilise des couleur indexées, c'est le nombre minimal de bits par composantes parmi les couleurs de l'index qui est utilisé.

## Exemples

### HTML

```html
<p>
   Ce texte sera noir pour les appareils qui ne prennent en charge
   aucune couleur, rouge pour ceux qui prennent peu de couleurs en
   charge et vert sinon.
</p>
```

### CSS

```css
p {
  color: black;
}

/* Tout appareil qui gère des couleurs */
@media (color) {
  p {
    color: red;
  }
}

/* Tout appareil qui gère des couleurs avec */
/* au moins 8 bits par composante */
@media (min-color: 8) {
  p {
    color: #24ba13;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                            | État                                     | Commentaires                                                                        |
| ------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Media Queries', '#color', 'color')}} | {{Spec2('CSS3 Media Queries')}} | Définition initiale, la valeur ne peut pas être négative.                           |
| {{SpecName('CSS4 Media Queries', '#color', 'color')}} | {{Spec2('CSS4 Media Queries')}} | La valeur peut désormais être négative (ce qui correspond alors à un booléen faux). |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.color")}}

## Voir aussi

- [Appliquer des couleurs HTML à CSS](/fr/docs/Web/HTML/Applying_color)
- La propriété CSS {{cssxref("color")}}
- Le type de donnée CSS {{cssxref("&lt;color&gt;")}}
