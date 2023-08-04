---
title: font-kerning
slug: Web/CSS/font-kerning
---

{{CSSRef}}

La propriété **`font-kerning`** contrôle le crénage de la police ; c'est-à-dire l'espace créé entre les lettres. L'information de crénage est stockée dans la police et si la police est _bien crénée_, cette caractéristique permet aux caractères, quels qu'ils soient, d'être espacés de manière semblable.![Exemple pour font-kerning](font-kerning.png)

```css
font-kerning: auto;
font-kerning: normal;
font-kerning: none;

/* Valeurs globales */
font-kerning: inherit;
font-kerning: initial;
font-kerning: unset;
```

## Syntaxe

### Valeurs

- `auto`
  - : Ce mot-clé laisse au navigateur le choix d'utiliser ou non le crénage. Quand la taille de la police est petite, le crénage de la police peut avoir l'air étrange et les navigateurs le désactiveront. C'est la valeur par défaut.
- `normal`
  - : Ce mot-clé force l'application du crénage.
- `none`
  - : Ce mot-clé empêche le navigateur d'utiliser l'information de crénage stockée dans la police.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
#nokern,
#kern {
  font-size: 2rem;
  font-family: serif;
}
#nokern {
  font-kerning: none;
}
#kern {
  font-kerning: normal;
}
```

### HTML

```html
<div id="kern"></div>
<div id="nokern"></div>
<textarea id="input">AV T. ij</textarea>
```

### JavaScript

```js
var input = document.getElementById("input"),
  kern = document.getElementById("kern"),
  nokern = document.getElementById("nokern");
input.addEventListener("keyup", function () {
  kern.textContent = input.value; /* On met à jour le contenu */
  nokern.textContent = input.value;
});
kern.textContent = input.value; /* On initialise le contenu */
nokern.textContent = input.value;
```

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("font-variant")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-synthesis")}}
- {{cssxref("letter-spacing")}}.
