---
title: color
slug: Web/CSS/Reference/At-rules/@media/color
original_slug: Web/CSS/@media/color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`color`** est utilisée pour tester le nombre de bits par composante de couleur (rouge, vert, bleu) du périphérique de sortie.

## Syntaxe

La caractéristique `color` est définie avec un entier (type CSS {{cssxref("&lt;integer&gt;")}}) et représente le nombre de bits utiisé par l'appareil d'affichage pour représenter chaque composante de couleur. Si l'appareil ne gère pas les couleurs, la valeur sera zéro. C'est une caractéristique d'intervalle ce qui signifie qu'on peut utiliser les variantes préfixées **`min-color`** et **`max-color`** afin de cibler des règles en fonction d'un minimum ou d'un maximum.

> [!NOTE]
> Si les différentes composantes sont représentées sur un nombre différent de bits, c'est le plus petit de ces nombres qui est utilisé. Par exemple, si un affichage utilise 5 bits pour le bleu et le rouge mais 6 bits pour le vert, on considèrera que l'appareil utilise 5 bits par couleur. Si l'appareil utilise des couleur indexées, c'est le nombre minimal de bits par composantes parmi les couleurs de l'index qui est utilisé.

Consultez la page [Appliquer des couleurs au HTML avec CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color) pour en savoir plus sur l'utilisation de CSS pour appliquer des couleurs aux éléments HTML.

## Exemples

### HTML

```html
<p>
  Ce texte sera noir pour les appareils qui ne prennent en charge aucune
  couleur, rouge pour ceux qui prennent peu de couleurs en charge et vert sinon.
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

{{EmbedLiveSample("exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("color")}}
- Le type de donnée CSS {{cssxref("&lt;color&gt;")}}
