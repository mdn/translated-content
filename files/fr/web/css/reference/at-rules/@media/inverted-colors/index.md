---
title: inverted-colors
slug: Web/CSS/Reference/At-rules/@media/inverted-colors
original_slug: Web/CSS/@media/inverted-colors
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`inverted-colors`** permet de tester si l'{{glossary("user agent", "agent utilisateur")}} ou le système d'exploitation sous-jacent a inversé toutes les couleurs.

L'inversion des couleurs peut avoir des effets indésirables, comme la transformation des ombres en zones claires, ce qui peut réduire la lisibilité du contenu. Grâce à cette caractéristique média, il est possible de détecter si une inversion est en cours et d'adapter la présentation du contenu tout en respectant la préférence de l'utilisateur·ice.

## Syntaxe

```css
/* Valeur par mot-clé */
@media (inverted-colors: inverted) {
  /* styles appliqués si une inversion des couleurs est détectée */
}
```

La caractéristique `inverted-colors` se définit comme l'une des valeurs mot-clé suivantes&nbsp;:

- `none`
  - : Indique que les couleurs sont affichées normalement et qu'aucune inversion n'a eu lieu. Cette valeur est évaluée comme fausse.
- `inverted`
  - : Indique que tous les pixels de la zone affichée ont été inversés. Cette valeur est évaluée comme vraie.

## Exemples

### Appliquer des styles si une inversion des couleurs est détectée

Cet exemple montre les effets des deux valeurs mot-clé de la caractéristique média `inverted-colors` ainsi que le cas où la caractéristique n'est pas prise en charge.

#### HTML

```html
<p>
  Si vous utilisez les couleurs inversées, ce texte devrait être bleu sur blanc
  (l'inverse de jaune sur noir). Sinon, il devrait être rouge sur gris clair.
</p>
<p>
  Si le texte est gris, cela indique que votre navigateur ne prend pas en charge
  la caractéristique média `inverted-colors`.
</p>
```

#### CSS

```css
p {
  color: gray;
}

@media (inverted-colors: inverted) {
  p {
    background: black;
    color: yellow;
  }
}

@media (inverted-colors: none) {
  p {
    background: #eeeeee;
    color: red;
  }
}
```

#### Résultat

{{EmbedLiveSample("appliquer_des_styles_si_une_inversion_des_couleurs_est_détectée")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## See also

- {{cssxref("@media")}}
- Le module des [requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries)
- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
