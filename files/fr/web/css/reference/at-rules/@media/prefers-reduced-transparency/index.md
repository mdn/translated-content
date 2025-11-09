---
title: prefers-reduced-transparency
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency
original_slug: Web/CSS/@media/prefers-reduced-transparency
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`prefers-reduced-transparency`** permet de détecter si un·e utilisateur·ice a activé un réglage sur son appareil pour réduire les effets de calques transparents ou translucides. Activer ce réglage peut améliorer le contraste et la lisibilité pour certain·e·s utilisateur·ice·s.

## Syntaxe

- `no-preference`
  - : Indique qu'aucune préférence n'a été exprimée sur l'appareil. Cette valeur-clé est évaluée à faux dans un contexte booléen.
- `reduce`
  - : Indique qu'un·e utilisateur·ice a activé le réglage sur son appareil pour minimiser la quantité d'effets de calques transparents ou translucides.

## Préférences utilisateurs

Différents systèmes d'exploitation proposent une préférence pour la réduction de la transparence, et les agents utilisateur·ice·s s'appuient généralement sur ces réglages système.
Sur les plateformes qui ne proposent pas de réglage spécifique, les navigateurs peuvent également se baser sur des signaux moins explicites.

- Sous Windows 10/11&nbsp;: Paramètres > Personnalisation > Couleurs > Effets de transparence.
- Sous macOS&nbsp;: Préférences Système > Accessibilité > Affichage > Réduire la transparence.
- Sous iOS&nbsp;: Réglages > Accessibilité > Affichage et taille du texte > Réduire la transparence.

## Exemples

Cet exemple affiche une boîte translucide par défaut. Si le réglage pour réduire la transparence est activé dans les préférences d'accessibilité de votre appareil, la boîte devient plus opaque.

### HTML

```html
<div class="translucent">translucent box</div>
```

### CSS

```css
.translucent {
  opacity: 0.4;
}

@media (prefers-reduced-transparency) {
  .translucent {
    opacity: 0.8;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Requête média CSS [`prefers-reduced-motion`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)
- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
