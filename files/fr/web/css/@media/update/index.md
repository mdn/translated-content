---
title: update
slug: Web/CSS/@media/update
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/update-frequency
original_slug: Web/CSS/@media/update-frequency
---

{{CSSRef}}

**`update`** est une caractéristique média (cf. {{cssxref("@media")}}) qui permet de vérifier la vitesse à laquelle l'appareil d'affichage peut modifier l'apparence du contenu.

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
  Si ce texte est animé, cela signifie que vous utilisez
  un appareil avec un affichage qui évolue rapidement.
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
