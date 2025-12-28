---
title: "HTMLInputElement : méthode setSelectionRange()"
short-title: setSelectionRange()
slug: Web/API/HTMLInputElement/setSelectionRange
l10n:
  sourceCommit: 76d6c2c2bcca61d0d14ed464356716090097bc7a
---

{{APIRef("HTML DOM")}}

La méthode **`setSelectionRange()`** de l'interface {{DOMxRef("HTMLInputElement")}} définit les positions de début et de fin de la sélection de texte courante dans un élément HTML {{HTMLElement("input")}} ou {{HTMLElement("textarea")}}. Cela met à jour l'état de sélection immédiatement, bien que la mise en évidence visuelle n'apparaisse que lorsque l'élément a la sélection.

Vous pouvez éventuellement définir la direction dans laquelle la sélection est considérée comme s'effectuant. Cela permet, par exemple, d'indiquer que la sélection est effectuée par un·e utilisateur·ice qui clique et fait glisser depuis la fin du texte sélectionné vers le début.

Cette méthode met à jour, en un seul appel, les propriétés {{DOMxRef("HTMLInputElement.selectionStart")}}, {{DOMxRef("HTMLInputElement.selectionEnd")}} et {{DOMxRef("HTMLInputElement.selectionDirection")}}, que l'élément ait ou non la sélection. La mise en évidence visuelle de la sélection n'apparaît que lorsque l'élément a la sélection.

L'élément doit être de l'un des types d'entrée suivants&nbsp;: [`password`](/fr/docs/Web/HTML/Reference/Elements/input/password), [`search`](/fr/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/fr/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/fr/docs/Web/HTML/Reference/Elements/input/text) ou [`url`](/fr/docs/Web/HTML/Reference/Elements/input/url). Sinon, le navigateur lève une exception `InvalidStateError`.

Si vous souhaitez sélectionner **tout** le texte d'un élément input, vous pouvez utiliser la méthode [HTMLInputElement.select()](/fr/docs/Web/API/HTMLInputElement/select) à la place.

## Syntaxe

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Paramètres

- `selectionStart`
  - : L'indice (à partir de 0) du premier caractère sélectionné. Un indice supérieur à la longueur de la valeur de l'élément est traité comme pointant vers la fin de la valeur.
- `selectionEnd`
  - : L'indice (à partir de 0) du caractère _après_ le dernier caractère sélectionné. Un indice supérieur à la longueur de la valeur de l'élément est traité comme pointant vers la fin de la valeur. Si `selectionEnd` est inférieur à `selectionStart`, alors les deux sont traités comme ayant la valeur `selectionEnd`.

- `selectionDirection` {{Optional_Inline}}
  - : Une chaîne de caractères indiquant la direction dans laquelle la sélection est considérée comme ayant été
    effectuée. Valeurs possibles&nbsp;:
    - `"forward"`
    - `"backward"`
    - `"none"` si la direction est inconnue ou sans importance. Valeur par défaut.

## Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si l'élément n'appartient pas aux types d'entrée suivants&nbsp;: [`password`](/fr/docs/Web/HTML/Reference/Elements/input/password), [`search`](/fr/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/fr/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/fr/docs/Web/HTML/Reference/Elements/input/text) ou [`url`](/fr/docs/Web/HTML/Reference/Elements/input/url).

## Exemples

Cliquez sur le bouton de cet exemple pour sélectionner les troisième, quatrième et cinquième caractères du champ de texte («&nbsp;zil&nbsp;» dans le mot «&nbsp;Mozilla&nbsp;»).

### HTML

```html
<input type="text" id="text-box" size="20" value="Mozilla" />
<button>Sélectionner le texte</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.setSelectionRange(2, 5);
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
