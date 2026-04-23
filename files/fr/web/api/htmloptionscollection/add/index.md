---
title: "HTMLOptionsCollection : méthode add()"
short-title: add()
slug: Web/API/HTMLOptionsCollection/add
l10n:
  sourceCommit: a5e089d79bf681e27fc6bdb9e4026b2489ffa4d9
---

{{APIRef("HTML DOM")}}

La méthode **`add()`** de l'interface {{DOMxRef("HTMLOptionsCollection")}} ajoute un objet {{DOMxRef("HTMLOptionElement")}} ou {{DOMxRef("HTMLOptGroupElement")}} à cette collection `HTMLOptionsCollection`.

## Syntaxe

```js-nolint
add(item)
add(item, before)
```

### Paramètres

- `item`
  - : Un objet {{DOMxRef("HTMLOptionElement")}} ou {{DOMxRef("HTMLOptGroupElement")}}.
- `before` {{Optional_Inline}}
  - : Un élément de la collection, ou un indice numérique (commençant à 0) représentant l'élément devant lequel `item` doit être inséré. S'il est omis, vaut `null` ou si l'indice n'existe pas, le nouvel élément est ajouté à la fin de la collection.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Levée si l'élément `item` passé à la méthode est un ancêtre de l'élément dans lequel il doit être inséré.

## Description

Par défaut, `add()` ajoute l'élément HTML {{HTMLElement("option")}} ou {{HTMLElement("optgroup")}} passé en paramètre à la fin de la collection. Vous pouvez définir où l'élément `<option>` ou `<optgroup>` ajouté doit être placé en définissant le paramètre `before`. Le paramètre `before` est l'élément `<option>` ou un indice numérique (commençant à 0) de l'élément `<option>` que l'élément ajouté doit précéder.

Si le paramètre `before` est `null`, hors limites (ou omis), l'élément `<option>` ou `<optgroup>` sera ajouté en dernier dans la collection, hors de tout {{HTMLElement("optgroup")}}. Si l'élément `<option>` référencé par le paramètre `before` se trouve dans un {{HTMLElement("optgroup")}}, un `HTMLOptionElement` ajouté sera dans le même groupe.

L'élément `<optgroup>` ne peut contenir que des éléments `<option>` comme nœuds enfants. La méthode `add()` ajoutera avec succès un `HTMLOptGroupElement` à la fin de la collection `HTMLOptionsCollection` ou entre des éléments `<optgroup>` uniquement. Autrement dit, tenter d'ajouter un `HTMLOptGroupElement` avant un élément `<option>` à l'intérieur d'un groupe d'options (`<optgroup>`) peut échouer silencieusement si l'option (`<option>`) référencée par le paramètre `before` n'est pas la première option (`<option>`) de son groupe (`<optgroup>`).

## Exemples

```js
const optionList = document.querySelector("select").options;
const firstOption = document.createElement("option");
firstOption.text = "nouvel élément";
optionList.add(firstOption, 0); // ajouté en premier
optionList.add(optionList[0]); // déplace le premier élément à la fin
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("select")}}
- La méthode {{DOMxRef("HTMLOptionsCollection.remove()")}}
- La propriété {{DOMxRef("HTMLOptionsCollection.length")}}
- La propriété {{DOMxRef("HTMLOptionsCollection.selectedIndex")}}
