---
title: Element.scrollTo()
slug: Web/API/Element/scrollTo
tags:
  - API
  - Element
  - Méthode
  - Reference
  - scrollTo
translation_of: Web/API/Element/scrollTo
---
{{ APIRef }}

La méthode **`scrollTo()`** de l'interface {{domxref("Element")}} permet de faire défiler le document jusqu'à un jeu de coordonnées particulier.

## Syntaxe

    element.scrollTo(x-coord, y-coord)
    element.scrollTo(options)

### Paramètres

- `x-coord` est le pixel le long de l'axe horizontal du document qui doit être affiché en haut à gauche.
- `y-coord` est le pixel le long de l'axe vertical du document qui doit être affiché en haut à gauche.

\- ou -

- `options` est un dictionnaire de type {{domxref("ScrollToOptions")}}.

## Exemples

En utilisant des coordonnées :

```js
element.scrollTo(0, 1000);
```

Ou en utilisant `options` :

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## Spécifications

| Spécification                                                                                                            | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{ SpecName('CSSOM View', '#dom-element-scrollto-options-options', 'element.scrollTo()') }} | {{ Spec2('CSSOM View') }} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Element.scrollTo")}}

## Voir aussi

- {{domxref("Element.scrollTop")}}, {{domxref("Element.scrollLeft")}}
- {{domxref("Window.scrollTo()")}}
