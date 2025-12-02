---
title: any-hover
slug: Web/CSS/Reference/At-rules/@media/any-hover
original_slug: Web/CSS/@media/any-hover
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`any-hover`** est utilisée pour tester si _n'importe quel_ mécanisme d'entrée disponible peut survoler un élément.

## Syntaxe

La caractéristique `any-hover` se définit à l'aide d'un mot-clé choisi parmi la liste ci-dessous.

- `none`
  - : Aucun des mécanismes d'entrée disponibles ne permet de survoler facilement, ou il n'existe pas de mécanisme de pointage.
- `hover`
  - : Un ou plusieurs mécanismes d'entrée disponibles permettent de survoler facilement des éléments.

## Exemples

### Tester si les méthodes de saisie peuvent survoler

### HTML

```html
<a href="#">Essayez de me survoler !</a>
```

### CSS

```css
@media (any-hover: hover) {
  a:hover {
    background: yellow;
  }
}
```

### Résultat

{{EmbedLiveSample("tester_si_les_méthodes_de_saisie_peuvent_survoler")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La caractéristique média `hover`](/fr/docs/Web/CSS/Reference/At-rules/@media/hover)
