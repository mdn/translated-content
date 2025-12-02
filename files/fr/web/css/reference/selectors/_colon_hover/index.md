---
title: :hover
slug: Web/CSS/Reference/Selectors/:hover
original_slug: Web/CSS/:hover
l10n:
  sourceCommit: d64c2d5cb1f04b569e6af5d42feaadbc8c375b03
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:hover`** permet de spécifier l'apparence d'un élément au moment où l'utilisateur·ice le survole avec le pointeur, sans nécessairement l'activer.

{{InteractiveExample("CSS Demo: :hover", "tabbed-shorter")}}

```css interactive-example
.joinBtn {
  width: 10em;
  height: 5ex;
  background-color: gold;
  border: 2px solid firebrick;
  border-radius: 10px;
  font-weight: bold;
  color: black;
  cursor: pointer;
}

.joinBtn:hover {
  background-color: bisque;
}
```

```html interactive-example
<p>Souhaitez-vous vous joindre à notre quête ?</p>
<button class="joinBtn">Confirmer</button>
```

Les styles définis par la pseudo-classe `:hover` seront remplacés par toute pseudo-classe liée à un lien ({{ cssxref(":link") }}, {{ cssxref(":visited") }}, ou {{ cssxref(":active") }}) qui a au moins la même spécificité. Pour mettre en forme correctement les liens, placez la règle `:hover` après les règles `:link` et `:visited`, mais avant la règle `:active`, comme défini par l'ordre _LVHA_ : `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Sur les écrans tactiles, `:hover` est problématique voire impossible. La pseudo-classe `:hover` n'est jamais valide, ou seulement pendant un très court instant après avoir touché l'élément. Puisque les appareils à écrans tactiles sont très courants, il est important que les développeur·euse·s web ne placent pas de contenu accessible seulement lors du survol, puisque ce contenu sera caché pour les utilisateur·ice·s de tels appareils.

## Syntaxe

```css
:hover {
  /* ... */
}
```

## Exemples

### HTML

```html
<a href="#">Ce lien sera écrit sur un fond doré lors du survol.</a>
```

### CSS

```css
a {
  background-color: powderblue;
  transition: background-color 0.5s;
}

a:hover {
  background-color: gold;
}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Bogue Chromium #370155 : Don't make :hover sticky on tap on sites that set a mobile viewport <sup>(angl.)</sup>](https://code.google.com/p/chromium/issues/detail?id=370155)
- [Bogue Chromium #306581 : Immediately show hover and active states on touch when page isn't scrollable <sup>(angl.)</sup>](https://code.google.com/p/chromium/issues/detail?id=306581)
