---
title: "HTMLInputElement : méthode setRangeText()"
short-title: setRangeText()
slug: Web/API/HTMLInputElement/setRangeText
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

La méthode **`setRangeText()`** de l'interface {{DOMxRef("HTMLInputElement")}} remplace une plage de texte dans un élément {{HTMLElement("input")}} ou {{HTMLElement("textarea")}} par une nouvelle chaîne de caractères.

## Syntaxe

```js-nolint
setRangeText(replacement)
setRangeText(replacement, start)
setRangeText(replacement, start, end)
setRangeText(replacement, start, end, selectMode)
```

### Paramètres

- `replacement`
  - : La chaîne de caractères à insérer.
- `start` {{Optional_Inline}}
  - : L'indice (à partir de 0) du premier caractère à remplacer. Par défaut, la valeur actuelle de `selectionStart` (le début de la sélection de l'utilisateur·ice).
- `end` {{Optional_Inline}}
  - : L'indice (à partir de 0) du caractère _après_ le dernier caractère à remplacer.
    Par défaut, la valeur actuelle de `selectionEnd` (la fin de la sélection de l'utilisateur·ice).
- `selectMode` {{Optional_Inline}}
  - : Une chaîne de caractères définissant la façon dont la sélection doit être réglée après le remplacement du texte.
    Valeurs possibles&nbsp;:
    - `"select"` sélectionne le texte nouvellement inséré.
    - `"start"` déplace la sélection juste avant le texte inséré.
    - `"end"` déplace la sélection juste après le texte inséré.
    - `"preserve"` tente de préserver la sélection. C'est la valeur par défaut.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cliquez sur le bouton de cet exemple pour remplacer une partie du texte dans le champ. Le texte nouvellement inséré sera ensuite mis en évidence (sélectionné).

### HTML

```html
<input
  type="text"
  id="text-box"
  size="30"
  value="Ce texte n'a PAS été mis à jour." />
<button>Mettre à jour le texte</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.setRangeText("DÉJÀ", 14, 17, "select");
}

document.querySelector("button").addEventListener("click", selectText);
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("textarea")}}
- L'interface {{DOMxRef("HTMLInputElement")}}
- L'interface {{DOMxRef("Selection")}}
