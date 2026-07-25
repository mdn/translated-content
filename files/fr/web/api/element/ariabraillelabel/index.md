---
title: "Element : propriété ariaBrailleLabel"
short-title: ariaBrailleLabel
slug: Web/API/Element/ariaBrailleLabel
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaBrailleLabel`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-braillelabel`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel), qui définit le label braille ARIA de l'élément.

Ce label d'élément peut être utilisé par les technologies d'assistance capables de présenter du contenu en braille, mais ne doit être défini que si un label spécifique au braille améliore l'expérience utilisateur.
L'attribut [`aria-braillelabel`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) contient des informations supplémentaires sur le moment où la propriété doit être définie.

## Valeur

- `<string>`
  - : La valeur est une chaîne de caractères, un type de valeur non contraint, qui est destinée à être convertie en braille.

## Exemples

### Obtenir et définir `ariaBrailleLabel`

Cet exemple montre comment obtenir et définir la propriété `ariaBrailleLabel`.

#### HTML

Tout d'abord, nous définissons un bouton avec le texte du label «&nbsp;3 sur 5 étoiles&nbsp;» et un attribut `aria-braillelabel` avec une valeur de `"\*\*\*"`.
Cela permet à un affichage braille de montrer "btn \*\*\*" en braille plutôt que le plus verbeux «&nbsp;btn gra 3 sur 5 étoiles&nbsp;».

```html
<button id="bouton" aria-braillelabel="\*\*\*">3 sur 5 étoiles</button>
```

```html hidden
<pre id="journal"></pre>
```

```css hidden
#journal {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

Le code utilise ensuite la propriété `ariaBrailleLabel` du bouton pour d'abord obtenir et journaliser le label braille.
Il définit ensuite le label braille sur `"3*"` et journalise à nouveau la valeur.

```js
const bouton = document.getElementById("bouton");
journaliser(bouton.ariaBrailleLabel);
bouton.ariaBrailleLabel = "3*";
journaliser(bouton.ariaBrailleLabel);
```

#### Résultat

{{EmbedLiveSample("Obtenir et définir `ariaBrailleLabel`")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
