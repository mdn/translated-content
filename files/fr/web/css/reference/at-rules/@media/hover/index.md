---
title: hover
slug: Web/CSS/Reference/At-rules/@media/hover
original_slug: Web/CSS/@media/hover
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`hover`** est utilisée pour tester si le _mécanisme_ de saisie principal de l'utilisateur·ice peut survoler des éléments.

## Syntaxe

La caractéristique `hover` est définie avec un mot-clé parmi ceux de la liste suivant :

- `none`
  - : Le mécanisme de saisie principal ne permet pas de survoler les éléments (ou ne le permet pas de façon simple ; par exemple sur les appareils mobiles qui émulent le survol avec un appui long) ou il n'existe pas de dispositif de pointage principal.
- `hover`
  - : Le mécanisme de saisie principal permet de survoler les éléments simplement.

## Exemples

### HTML

```html
<a href="#">Essayez de me survoler !</a>
```

### CSS

```css
/* effet de survol par défaut */
a:hover {
  color: black;
  background: yellow;
}

@media (hover: hover) {
  /* quand le survol est pris en charge */
  a:hover {
    color: white;
    background: black;
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

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
