---
title: Element.insertAdjacentText()
slug: Web/API/Element/insertAdjacentText
---

{{APIRef("DOM")}}

La méthode `insertAdjacentText()` insère un noeud texte donné à une position donnée par rapport à l'élément sur lequel elle est appelé.

## Syntaxe

```js
element.insertAdjacentText(position, element);
```

### Paramètres

- position

  - : Une {{domxref("DOMString")}} (_chaîne de caractères_) représentant la position par rapport à l'`element` ; elle doit être l'une des chaînes suivantes :

    - `'beforebegin'` : avant l'`element` lui-même ;
    - `'afterbegin'` : à l'intérieur de l'`element`, avant son premier enfant ;
    - `'beforeend'` : à l'intérieur de l'`element`, avant son dernier enfant ;
    - `'afterend'` : après l'`element` lui-même.

- element
  - : Une {{domxref("DOMString")}} (_chaîne de caractères_) représentant le texte à insérer dans l'arbre.

### Valeur renvoyée

Vide.

### Exceptions

| Exception     | Explication                                           |
| ------------- | ----------------------------------------------------- |
| `SyntaxError` | La `position` indiquée n'est pas une valeur reconnue. |

### Visualisation des noms de position

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin> -->
  machin
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> **Note :** Les positions `beforebegin` et `afterend` ne fonctionnent que si le noeud est dans l'arbre et possède un élément parent.

## Exemple

```js
beforeBtn.addEventListener("click", function () {
  para.insertAdjacentText("afterbegin", textInput.value);
});

afterBtn.addEventListener("click", function () {
  para.insertAdjacentText("beforeend", textInput.value);
});
```

Jetez un œil à notre démo [insertAdjacentText.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentText.html) sur GitHub (voir le [code source](https://github.com/mdn/dom-examples/blob/master/insert-adjacent/insertAdjacentText.html) aussi). Ici, nous avons un simple paragraphe. Vous pouvez entrer du texte dans l'élément de formulaire, puis presser les boutons _Insert before_ (_insère avant_) et _Insert after_ (_insère après_) pour l'insérer avant ou après le texte de paragraphe existant en utilisant `insertAdjacentText()`. Notez que le nœud texte existant n'y est pas ajouté — d'autres nœuds de texte sont créés contenant le nouvel ajout.

## Émulation

Vous pouvez utiliser une émulation de la méthode `insertAdjacentText()` dans Internet Explorer 5.5 (et peut-être antérieur) et supérieur avec le code suivant :

```js
if (!Element.prototype.insertAdjacentText)
  Element.prototype.insertAdjacentText = function (type, txt) {
    this.insertAdjacentHTML(
      type,
      (txt + "") // convertir en chaîne de caractères
        .replace(/&/g, "&amp;") // intégrer des symboles d'esperluette
        .replace(/</g, "&lt;"), // intégrer les symboles "plus petit que"
    );
  };
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentHTML()")}}
