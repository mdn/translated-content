---
title: font-kerning
slug: Web/CSS/Reference/Properties/font-kerning
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-kerning`** définit l'utilisation des informations de crénage stockées dans une police.

{{InteractiveExample("Démonstration CSS&nbsp;: font-kerning")}}

```css interactive-example-choice
font-kerning: auto;
```

```css interactive-example-choice
font-kerning: normal;
```

```css interactive-example-choice
font-kerning: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Vous êtes 3 WAGONS en retard, il va falloir rattraper.
  </div>
</section>
```

```css interactive-example
section {
  font-family: serif;
}
```

_Le crénage_ affecte la façon dont les lettres sont espacées. Dans les polices _bien crénées_, cette fonctionnalité rend l'espacement des caractères plus uniforme et agréable à lire en réduisant les espaces blancs entre certaines combinaisons de caractères.

Dans l'image ci-dessous, par exemple, les exemples à gauche n'utilisent pas le crénage, tandis que ceux à droite l'utilisent&nbsp;:

![Exemple de crénage de police](font-kerning.png)

## Syntaxe

```css
font-kerning: auto;
font-kerning: normal;
font-kerning: none;

/* Valeurs globales */
font-kerning: inherit;
font-kerning: initial;
font-kerning: revert;
font-kerning: revert-layer;
font-kerning: unset;
```

### Valeurs

- `auto`
  - : Ce mot-clé laisse au navigateur le choix d'utiliser ou non le crénage. Quand la taille de la police est petite, le crénage de la police peut avoir l'air étrange et les navigateurs le désactiveront.
- `normal`
  - : Ce mot-clé force l'application du crénage.
- `none`
  - : Ce mot-clé empêche le navigateur d'utiliser l'information de crénage stockée dans la police.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Activer ou désactiver le crénage

#### HTML

```html
<div id="kern"></div>
<div id="no-kern"></div>
<textarea id="input">AV T. ij</textarea>
```

#### CSS

```css
div {
  font-size: 2rem;
  font-family: serif;
}

#no-kern {
  font-kerning: none;
}

#kern {
  font-kerning: normal;
}
```

#### JavaScript

```js
const input = document.getElementById("input");
const kern = document.getElementById("kern");
const noKern = document.getElementById("no-kern");

input.addEventListener("keyup", () => {
  kern.textContent = input.value; /* On met à jour le contenu */
  noKern.textContent = input.value;
});

kern.textContent = input.value; /* On initialise le contenu */
noKern.textContent = input.value;
```

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("font-variant")}}, {{CSSxRef("font-variant-position")}}, {{CSSxRef("font-variant-east-asian")}}, {{CSSxRef("font-variant-caps")}}, {{CSSxRef("font-variant-ligatures")}}, {{CSSxRef("font-variant-numeric")}}, {{CSSxRef("font-variant-alternates")}}, {{CSSxRef("font-synthesis")}}, {{CSSxRef("letter-spacing")}}
