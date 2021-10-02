---
title: Element.insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
tags:
  - API
  - DOM
  - Element
  - Insertion
  - Méthodes
translation_of: Web/API/Element/insertAdjacentElement
---
{{APIRef("DOM")}}

La méthode `insertAdjacentElement()` insère un noeud d'élément donné à une position donnée par rapport à l'élément sur lequel il est appelé.

## Syntaxe

    targetElement.insertAdjacentElement(position, element);

### Paramètres

- position

  - : Un objet {{domxref("DOMString")}} (_chaîne de caractères_) représentant la position par rapport à `targetElement` ; cela doit correspondre ( sans prendre en compte la casse ) à une des chaînes suivantes :

    - `'beforebegin'` : Avant `targetElement` lui-même.
    - `'afterbegin'` : A l'intérieur de `targetElement`, avant son premier enfant.
    - `'beforeend'` : A l'intérieur de `targetElement`, après son dernier enfant.
    - `'afterend'` : Après `targetElement` lui-même.

- element
  - : L'élément à insérer dans l'arbre.

### Valeur retournée

L'élément inséré ou `null` si l'insertion a échouée.

### Exceptions

| Exception     | Explications                                        |
| ------------- | --------------------------------------------------- |
| `SyntaxError` | La `position` donnée n'est pas une valeur reconnue. |
| `TypeError`   | L'`element` spécifié n'est pas un élément valide.   |

### Visualisation des positionnements

    <!-- beforebegin -->
    <p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
    </p>
    <!-- afterend -->

> **Note :** Les positions `beforebegin` et `afterend` ne fonctionnent que si le noeud est dans l'arbre et s'il possède un élément parent.

## Exemple

```js
beforeBtn.addEventListener('click', function() {
  var tempDiv = document.createElement('div');
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement('beforebegin',tempDiv);
  }
  setListener(tempDiv);
});

afterBtn.addEventListener('click', function() {
  var tempDiv = document.createElement('div');
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement('afterend',tempDiv);
  }
  setListener(tempDiv);
});
```

Une démo de notre [insertAdjacentElement.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentElement.html) est disponible sur Github ( avec le [code source](https://github.com/mdn/dom-examples/blob/master/insert-adjacent/insertAdjacentElement.html) ). Nous avons un ensemble d'éléments {{htmlelement("div")}} dans un conteneur. Quand un élément reçoit un clic, il est sélectionné et vous pouvez appuyer sur les boutons _Insert before_ (_insérer avant_) et _Insert after_ (_insérer après_) pour insérer de nouveaux divs avant ou après l'élement sélectionné en utilisant `insertAdjacentElement()`.

## Spécification

| Spécification                                                                                                            | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('DOM WHATWG', '#dom-element-insertadjacentelement', 'insertAdjacentElement()')}} | {{ Spec2('DOM WHATWG') }} |             |

## Compatibilité des navigateurs

{{Compat("api.Element.insertAdjacentElement")}}

## Voir aussi

- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.appendChild()")}} ( même effet que `beforeend` )
