---
title: ::-moz-list-bullet
slug: Web/CSS/Reference/Selectors/::-moz-list-bullet
original_slug: Web/CSS/::-moz-list-bullet
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-moz-list-bullet`** est [une extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui représente le marqueur (généralement une puce) d'un élément de liste ({{htmlelement("li")}}) dans une liste non ordonnée ({{htmlelement("ul")}}).

## Syntaxe

```css
li::-moz-list-bullet {
  /* ... */
}
```

## Exemples

### Mettre en forme les puces de liste

#### HTML

```html
<ul>
  <li>Numéro 1</li>
  <li>Numéro 2</li>
  <li>Numéro 3</li>
</ul>
```

#### CSS

```css
::-moz-list-bullet {
  color: red;
  font-size: 1.5em;
}
```

#### Résultat

{{EmbedLiveSample('mettre_en_forme_les_puces_de_liste')}}

## Spécifications

Ce pseudo-élément ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("::-moz-list-number")}}
- {{cssxref("::marker")}}
