---
title: ::-webkit-inner-spin-button
slug: Web/CSS/Reference/Selectors/::-webkit-inner-spin-button
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_Header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-webkit-inner-spin-button`** est une [extension de WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui permet de mettre en forme la partie intérieure de la roulette qui permet de choisir la valeur d'un élément {{HTMLElement("input/number", '&lt;input type="number"&gt;')}}.

## Syntaxe

```css
::-webkit-inner-spin-button {
  /* ... */
}
```

## Exemples

Ces exemples fonctionnent uniquement pour les navigateurs basés sur WebKit et Blink.

### Changer le curseur dans les contrôles de spin

Dans cet exemple, la propriété CSS {{CSSxRef("cursor")}} est changée en `pointer` chaque fois que le curseur est positionné sur la partie intérieure des contrôles de défilement de l'input.

#### HTML

```html
<input type="number" />
```

#### CSS

```css
input[type="number"]::-webkit-inner-spin-button {
  cursor: pointer;
}
```

#### Résultat

{{EmbedLiveSample('changer_le_curseur_dans_les_contrôles_de_spin', 200, 30)}}

## Spécifications

Ce pseudo-élément ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le pseudo-élément {{CSSxRef("::-webkit-textfield-decoration-container")}}
- [Mettre en forme les contrôles de formulaires - WebKit <sup>(angl.)</sup>](https://trac.webkit.org/wiki/Styling%20Form%20Controls#inputelement)
