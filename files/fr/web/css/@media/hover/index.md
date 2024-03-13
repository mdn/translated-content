---
title: hover
slug: Web/CSS/@media/hover
---

{{CSSRef}}

**`hover`** est une caractéristique média CSS (cf. {{cssxref("@media")}}) qui permet de vérifier si le dispositif de saisie/d'entrée principal permet à l'utilisateur de survoler les éléments.

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
@media (hover: hover) {
  a:hover {
    background: yellow;
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

- [La caractéristique média `any-hover`](/fr/docs/Web/CSS/@media/any-hover)
