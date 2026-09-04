---
title: "Element : méthode insertAdjacentText()"
short-title: insertAdjacentText()
slug: Web/API/Element/insertAdjacentText
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

La méthode **`insertAdjacentText()`** de l'interface {{DOMxRef("Element")}}, étant donné une position relative et une chaîne de caractères, insère un nouveau nœud texte à la position donnée par rapport à l'élément sur lequel elle est appelée.

## Syntaxe

```js-nolint
insertAdjacentText(where, data)
```

### Paramètres

- `where`
  - : Une chaîne de caractères représentant la position par rapport à l'élément sur lequel la méthode est appelée&nbsp;; elle doit être l'une des chaînes de caractères suivantes&nbsp;:
    - `'beforebegin'`&nbsp;: Avant un `element` même.
    - `'afterbegin'`&nbsp;: Juste à l'intérieur d'un `element`, avant son premier enfant.
    - `'beforeend'`&nbsp;: Juste à l'intérieur d'un `element`, après son dernier enfant.
    - `'afterend'`&nbsp;: Après un `element` même.

- `data`
  - : Une chaîne de caractères à partir de laquelle créer un nouveau nœud texte à insérer à la position donnée `where` par rapport à l'élément sur lequel la méthode est appelée.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Levée si `where` n'est pas une valeur reconnue.

### Visualisation des noms de position

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  toto
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> [!NOTE]
> Les positions `beforebegin` et `afterend` ne fonctionnent que si le nœud est dans l'arbre et possède un élément parent.

## Exemples

```js
beforeBtn.addEventListener("click", () => {
  para.insertAdjacentText("afterbegin", textInput.value);
});

afterBtn.addEventListener("click", () => {
  para.insertAdjacentText("beforeend", textInput.value);
});
```

Consultez notre démonstration [insertAdjacentText.html <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentText.html) sur GitHub (voir aussi le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentText.html).) Voici un simple paragraphe. Vous pouvez saisir du texte dans l'élément de formulaire, puis appuyer sur les boutons _Insert before_ (_insère avant_) et _Insert after_ (_insère après_) pour l'insérer avant ou après le texte du paragraphe existant à l'aide de `insertAdjacentText()`. Notez que le nœud texte existant n'est pas ajouté à — d'autres nœuds texte sont créés et contiennent les nouveaux ajouts.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.insertAdjacentElement()")}}
- La méthode {{DOMxRef("Element.insertAdjacentHTML()")}}
