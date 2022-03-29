---
title: Element.getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
tags:
  - API
  - Classes
  - Element
  - Method
  - Reference
  - getElementByClassName
translation_of: Web/API/Element/getElementsByClassName
---
{{APIRef("DOM")}}

La méthode **`Element.getElementsByClassName()`** retourne une {{domxref("HTMLCollection")}} contenant une référence sur tous les éléments ayant les noms de classes passés en paramètre. Quand la méthode est appelée sur l'objet document, la recherche s'effectue dans le document complet, noeud racine compris.

À l'instar de la méthode {{domxref("Document.getElementsByClassName", "Document.getElementsByClassName()")}} qui agit sur le document entier&nbsp;; elle va retourner les descendants de l'élément spécifié comme document root qui auront les noms de classes passés en paramètre.

## Syntaxe

    var elements = element.getElementsByClassName(names);

- **elements** est une {{ domxref("HTMLCollection") }} de référence vers les élements trouvés.
- **names** est une chaine représentant la liste des noms de classes à trouver; les noms de classes sont séparés par un espace.
- *element* est n'importe quel {{domxref("Element")}} du document.

## Exemples

Obtient tous les élements ayant une classe `test`:

```js
element.getElementsByClassName('test');
```

Obtient tous les élements ayant à la fois la classe `red` et la classe `test`:

```js
element.getElementsByClassName('red test');
```

Obtient tous les élements qui ont une classe `test`, à l'intérieur d'un élement qui a pour id `main`:

```js
document.getElementById('main').getElementsByClassName('test');
```

On peut aussi utiliser les méthodes de {{jsxref("Array.prototype")}} sur chaque {{ domxref("HTMLCollection") }} en passant la `HTMLCollection` comme valeur *this* de la méthode. Ci-dessous on trouvera tous les {{HTMLElement("div")}} avec une classe `test`:

```js
var testElements = document.getElementsByClassName('test');
var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    return testElement.nodeName === 'div';
});
```

## Spécifications

| Spécification                                                                                                                            | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-getelementsbyclassname', 'Element.getElementsByClassName()')}} | {{Spec2('DOM WHATWG')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Element.getElementsByClassName")}}
