---
title: "Element : méthode getElementsByClassName()"
short-title: getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}

La méthode **`getElementsByClassName()`** de l'interface {{DOMxRef("Element")}} retourne une collection {{DOMxRef("HTMLCollection")}} dynamique qui contient tous les éléments descendants qui ont le nom de classe ou les noms de classe définis.

La méthode {{DOMxRef("Document.getElementsByClassName", "getElementsByClassName()")}} de l'interface {{DOMxRef("Document")}} fonctionne essentiellement de la même manière, sauf qu'elle agit sur l'ensemble du document, en commençant par la racine du document.

## Syntaxe

```js-nolint
getElementsByClassName(names)
```

### Paramètres

- `names`
  - : Une chaîne de caractères contenant un ou plusieurs noms de classes à rechercher, séparés par des espaces.

### Valeur de retour

Une collection {{DOMxRef("HTMLCollection")}} fournissant une liste mise à jour en temps réel de tous les éléments qui sont membres de chaque classe dans `names`.

## Notes d'utilisation

Comme toujours, la collection retournée est _dynamique_, ce qui signifie qu'elle reflète toujours l'état actuel de l'arbre DOM enraciné à l'élément sur lequel la fonction a été appelée. Lorsque de nouveaux éléments correspondant à `names` sont ajoutés au sous-arbre, ils apparaissent immédiatement dans la collection. De même, si un élément existant qui ne correspond pas à `names` voit son ensemble de classes modifié pour correspondre, il apparaît immédiatement dans la collection.

L'inverse est également vrai&nbsp;: lorsque des éléments ne correspondent plus à l'ensemble des noms, ils sont immédiatement retirés de la collection.

> [!NOTE]
> En [mode Quirks](/fr/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode), les noms de classes sont comparés de manière insensible à la casse. Sinon, ils sont sensibles à la casse.

## Exemples

### Correspondance avec une seule classe

Pour rechercher des éléments qui incluent parmi leurs classes une seule classe définie, il suffit de fournir ce nom de classe lors de l'appel de `getElementsByClassName()`&nbsp;:

```js
element.getElementsByClassName("test");
```

Cet exemple trouve tous les éléments qui ont une classe `test`, et qui sont également des descendants de l'élément ayant pour `id` `main`&nbsp;:

```js
document.getElementById("main").getElementsByClassName("test");
```

### Correspondance avec plusieurs classes

Pour rechercher des éléments dont la liste de classes inclut à la fois les classes `red` et `test`&nbsp;:

```js
element.getElementsByClassName("red test");
```

### Examiner les résultats

Vous pouvez utiliser soit la méthode {{DOMxRef("HTMLCollection.item", "item()")}} sur la `HTMLCollection` retournée, soit la syntaxe standard des tableaux pour examiner les éléments individuels de la collection. Cependant, le code suivant ne fonctionne pas comme on peut s'y attendre, car `"matches"` change dès qu'une classe `"color-box"` est supprimée.

```js
const correspondances = element.getElementsByClassName("color-box");

for (let i = 0; i < correspondances.length; i++) {
  correspondances[i].classList.remove("color-box");
  correspondances.item(i).classList.add("hue-frame");
}
```

Sinon, utilisez une autre méthode, par exemple&nbsp;:

```js
const correspondances = element.getElementsByClassName("color-box");

while (correspondances.length > 0) {
  correspondances.item(0).classList.add("hue-frame");
  correspondances[0].classList.remove("color-box");
}
```

Ce code trouve les éléments descendants ayant la classe `"color-box"`, ajoute la classe `"hue-frame"` en appelant `item(0)`, puis supprime `"color-box"` (en utilisant la notation de tableau). Un autre élément (s'il en reste) devient alors `item(0)`.

### Filtrer les résultats en utilisant les méthodes de tableau

On peut également utiliser les méthodes {{JSxRef("Array")}} sur n'importe quel {{DOMxRef("HTMLCollection")}} en passant le {{DOMxRef("HTMLCollection")}} comme valeur de `this` de la méthode. Ici, nous allons trouver tous les éléments {{HTMLElement("div")}} qui ont une classe `test`&nbsp;:

```js
const elementsTest = document.getElementsByClassName("test");
const divsTest = Array.prototype.filter.call(
  elementsTest,
  (elementTest) => elementTest.nodeName === "DIV",
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
