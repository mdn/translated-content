---
title: pointer
slug: Web/CSS/Reference/At-rules/@media/pointer
original_slug: Web/CSS/@media/pointer
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`pointer`** permet de tester si l'utilisateur·ice dispose d'un dispositif de pointage (comme une souris) et, le cas échéant, d'évaluer la précision du dispositif de pointage principal.

> [!NOTE]
> Si on souhaite tester la précision de n'importe quel dispositif de pointage, on utilisera plutôt la caractéristique [`any-pointer`](/fr/docs/Web/CSS/Reference/At-rules/@media/any-pointer).

## Syntaxe

Cette caractéristique est définie avec un mot-clé parmi les suivants&nbsp;:

- `none`
  - : Le mécanisme de saisie principal n'inclut pas de dispositif de pointage.
- `coarse`
  - : Le mécanisme de saisie principal inclut un dispositif de pointage dont la précision est limitée.
- `fine`
  - : Le mécanisme de saisie principal inclut un dispositif de pointage précis.

## Exemples

Dans cet exemple, on crée une petite case à cocher pour les utilisateurs qui disposent d'un pointage précis et une case à cocher plus grande lorsque le mécanisme de pointage est moins précis.

### HTML

```html
<input id="test" type="checkbox" /> <label for="test">Coucou !</label>
```

### CSS

```css
input[type="checkbox"]:checked {
  background: gray;
}

@media (pointer: fine) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid blue;
  }
}

@media (pointer: coarse) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid red;
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

- [La caractéristique média `any-pointer`](/fr/docs/Web/CSS/Reference/At-rules/@media/any-pointer)
