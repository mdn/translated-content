---
title: ":dir()"
slug: Web/CSS/:dir
l10n:
  sourceCommit: 06bb246b52a759cc0b70c0bc2f72531afa7f8c6a
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:dir()`** permet de cibler un élément selon la direction du texte qu'il contient.

```css
/* Cible le contenu avec du texte */
/* écrit de droite à gauche */
:dir(rtl) {
  background-color: red;
}
```

`:dir()` ne prend en compte que la valeur _sémantique_ de la direction, celle qui est définie par le document (la plupart du temps un document HTML). Elle ne tiendra pas compte de la direction liée à la mise en forme, purement stylistique, modifiée par des propriétés telles que [`direction`](/fr/docs/Web/CSS/direction).

> **Note :** La pseudo-classe `:dir()` ne fonctionne pas de la même façon que [le sélecteur d'attribut](/fr/docs/Web/CSS/Attribute_selectors) `[dir=…]`. Ce dernier utilise la valeur de l'attribut [`dir`](/fr/docs/Web/HTML/Element/html#dir) et il n'y a aucune correspondance lorsque l'attribut n'est pas défini (même si l'élément HTML hérite de la valeur de son élément parent). De la même façon `[dir=rtl]` ou `[dir=ltr]` ne pourront pas correspondre à la valeur `auto` qui peut être utilisée sur l'attribut `dir`. Au contraire, `:dir()` calculera la correspondance en fonction de la valeur utilisée par l'agent utilisateur (qu'elle soit héritée ou qu'elle vaille `auto`).

> **Note :** En HTML, la direction est définie grâce à l'attribut [`dir`](/fr/docs/Web/HTML/Element/html#dir). Pour les autres types de document, cela peut être déterminé autrement.

## Syntaxe

La pseudo-classe `:dir()` nécessite un paramètre qui indique la direction du texte qu'on souhaite cibler.

```css-nolint
:dir([ltr | rtl]) {
  /* ... */
}
```

### Paramètres

- `ltr`
  - : Cible les éléments écrits de gauche à droite.
- `rtl`
  - : Cible les éléments écrits de droite à gauche.

## Exemples

### HTML

```html
<div dir="rtl">
  <span>test1</span>
  <div dir="ltr">
    test2
    <div dir="auto">עִבְרִית</div>
  </div>
</div>
```

### CSS

```css
:dir(ltr) {
  background-color: yellow;
}

:dir(rtl) {
  background-color: powderblue;
}
```

### Résultat

{{EmbedLiveSample("", "100%", 70)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe relative à la langue&nbsp;: [`:lang`](/fr/docs/Web/CSS/:lang)
- L'attribut HTML [`lang`](/fr/docs/Web/HTML/Global_attributes#lang)
- L'attribut HTML [`translate`](/fr/docs/Web/HTML/Global_attributes#translate)
