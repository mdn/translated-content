---
title: "HTMLInputElement : méthode select()"
short-title: select()
slug: Web/API/HTMLInputElement/select
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}

La méthode **`select()`** de l'interface {{DOMxRef("HTMLInputElement")}} sélectionne tout le texte d'un élément {{HTMLElement("textarea")}} ou d'un élément HTML {{HTMLElement("input")}} comportant un champ de texte.

## Syntaxe

```js-nolint
select()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cliquez sur le bouton de cet exemple pour sélectionner tout le texte de l'élément `<input>`.

### HTML

```html
<input type="text" id="text-box" size="20" value="Bonjour le monde !" />
<button>Sélectionner le texte</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.select();
}

document.querySelector("button").addEventListener("click", selectText);
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Notes

L'appel de `element.select()` ne donne pas nécessairement le focus à l'élément, il est donc souvent utilisé avec la méthode {{DOMxRef("HTMLElement.focus()")}}.

## Specifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("textarea")}}
- L'interface {{DOMxRef("HTMLInputElement")}}
- La propriété {{DOMxRef("HTMLInputElement.setSelectionRange")}}
