---
title: update
slug: Web/CSS/Reference/At-rules/@media/update
original_slug: Web/CSS/@media/update
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`update`** peut être utilisée pour tester la fréquence à laquelle (le cas échéant) l'appareil de sortie est capable de modifier l'apparence du contenu une fois rendu.

## Syntaxe

La caractéristique `update` est définie avec un mot-clé parmi ceux de la liste ci-après.

- `none`
  - : Une fois le document affiché, son apparence ne peut plus être modifiée (ex. le document est imprimé sur du papier).
- `slow`
  - : Une fois le document affiché, son apparence peut évoluer mais lentement (ex. des livres électroniques utilisant une encre électronique ou des appareils de lecture avec un niveau d'énergie faible).
- `fast`
  - : Une fois le document affiché, son apparence peut évoluer rapidement (ex. un ordinateur qui serait capable de gérer les transitions CSS).

## Exemples

### HTML

```html
<p>
  Si ce texte est animé, cela signifie que vous utilisez un appareil avec un
  affichage qui évolue rapidement.
</p>
```

### CSS

```css
@keyframes jiggle {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(25px);
  }
}

@media (update: fast) {
  p {
    animation: 1s jiggle linear alternate infinite;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
