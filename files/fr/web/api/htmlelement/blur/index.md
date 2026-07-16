---
title: "HTMLElement : méthode blur()"
short-title: blur()
slug: Web/API/HTMLElement/blur
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}

La méthode **`blur()`** de l'interface {{DOMxRef("HTMLElement")}} retire la sélection du clavier de l'élément courant.

## Syntaxe

```js-nolint
blur()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

### Retirer la sélection d'un champ texte

#### HTML

```html
<input type="text" id="monTexte" value="Texte d'échantillon" /> <br /><br />
<button type="button">Cliquez ici pour obtenir la sélection</button>
```

#### JavaScript

```js
const textField = document.getElementById("monTexte");
const button = document.querySelector("button");

function focusInput() {
  textField.focus();

  // Le champ perdra la sélection après 3 secondes
  setTimeout(() => {
    textField.blur();
  }, 3000);
}

button.addEventListener("click", focusInput);
```

#### Résultat

{{EmbedLiveSample('Retirer la sélection d'un champ texte')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLElement.focus")}}
