---
title: element.insertAdjacentHTML
slug: Web/API/Element/insertAdjacentHTML
tags:
  - API
  - DOM
  - Méthode
  - Reference
translation_of: Web/API/Element/insertAdjacentHTML
---
{{APIRef("DOM")}}

`insertAdjacentHTML()` analyse le texte spécifié en tant que HTML ou XML et insère les noeuds résultants dans le DOM à la position spécifiée. L'élement qui est utilisé n'est pas réanalysé et les élements qu'il contient ne sont donc pas corrompus. Ceci, et le fait d'éviter la sérialisation supplémentaire, rend la fonction plus rapide et directe que **innerHTML**.

## Syntaxe

```js
element.insertAdjacentHTML(position, text);
```

### Paramètres

- `position`
  - : une {{domxref("DOMString")}}  représentant la position relative à l'`element`, et doit être une des chaînes de caractères suivantes :

<!---->

- `'beforebegin'` : Avant l'`element`  lui-même.
- `'afterbegin'` : Juste à l'intérieur de l'`element` , avant son premier enfant.
- `'beforeend'` : Juste à l'intérieur de l'`element` , après son dernier enfant.
- `'afterend'` : Après `element` lui-même.

<!---->

- `text`
  - :  est la chaîne de caractères qui doit être analysée en tant qu'HTML ou XML et insérée dans l'arbre du DOM.

### Visualisation des noms de position

    <!-- beforebegin -->
    <p>
      <!-- afterbegin -->
      foo
      <!-- beforeend -->
    </p>
    <!-- afterend -->

> **Note :** Les positions `beforebegin` et `afterend` ne fonctionnent que si le noeud est un arbre et a un élément parent.

## Exemple

```js
// <div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

// Ici la nouvelle structure est :
// <div id="one">one</div><div id="two">two</div>
```

## Notes

### Considérations de sécurité

Lorsque vous insérez du code HTML dans une page en utilisant insertAdjacentHTML, veillez à ne pas utiliser d'entrée utilisateur qui n'a pas été échappée.

Il est recommandé de ne pas utiliser `insertAdjacentHTML` lors de l'insertion de texte brut; à la place, utilisez la propriété `node.textContent` ou la méthode `node.insertAdjacentText()`. Cela n'interprète pas le contenu transmis au format HTML, mais l'insère à la place sous forme de texte brut.

## Spécification

| Spécification                                                                                                                                                                        | Statut                               | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------- |
| {{SpecName('DOM Parsing', '#widl-Element-insertAdjacentHTML-void-DOMString-position-DOMString-text', 'Element.insertAdjacentHTML()')}} | {{ Spec2('DOM Parsing') }} |             |

## Compatibilité des navigateurs

{{Compat("api.Element.insertAdjacentHTML")}}

## Voir aussi

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentText()")}}
- [hacks.mozilla.org guest post](https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) par Henri Sivonen y compris le benchmark montrant que insertAdjacentHTML peut être beaucoup plus rapide dans certains cas.
