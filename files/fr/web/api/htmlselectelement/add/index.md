---
title: "HTMLSelectElement : méthode add()"
short-title: add()
slug: Web/API/HTMLSelectElement/add
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

La méthode **`add()`** de l'interface {{DOMxRef("HTMLSelectElement")}} ajoute un élément `option` à la
collection d'éléments pour cet élément HTML `select`.

## Syntaxe

```js-nolint
add(item)
add(item, before)
```

### Paramètres

- `item`
  - : Un objet {{DOMxRef("HTMLOptionElement")}} ou {{DOMxRef("HTMLOptGroupElement")}}
- `before` {{Optional_Inline}}
  - : Un élément de la collection, ou un indice de type
    _long_, représentant l'endroit où l'_objet_ doit être inséré. Si ce
    paramètre vaut `null` (ou si l'indice n'existe pas), le nouvel élément est
    ajouté à la fin de la collection.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Levée si l'_objet_ passé à la méthode est un ancêtre de {{DOMxRef("HTMLSelectElement")}}.

## Exemples

### Créer des éléments à partir de zéro

```js
const sel = document.createElement("select");
const opt1 = document.createElement("option");
const opt2 = document.createElement("option");

opt1.value = "1";
opt1.text = "Option : Valeur 1";

opt2.value = "2";
opt2.text = "Option : Valeur 2";

sel.add(opt1, null);
sel.add(opt2, null);

/*
  Produit conceptuellement le résultat suivant :

  <select>
    <option value="1">Option : Valeur 1</option>
    <option value="2">Option : Valeur 2</option>
  </select>
*/
```

Le paramètre `before` est optionnel. Donc ce qui suit est accepté.

```js
sel.add(opt1);
sel.add(opt2);
```

### Ajouter à une collection existante

```js
const sel = document.getElementById("existingList");

const opt = document.createElement("option");
opt.value = "3";
opt.text = "Option : Valeur 3";

sel.add(opt, null);

/*
  Prend l'objet select existant suivant :

  <select id="existingList">
    <option value="1">Option : Valeur 1</option>
    <option value="2">Option : Valeur 2</option>
  </select>

  Et le modifie ainsi :

  <select id="existingList">
    <option value="1">Option : Valeur 1</option>
    <option value="2">Option : Valeur 2</option>
    <option value="3">Option : Valeur 3</option>
  </select>
*/
```

Le paramètre `before` est optionnel. Donc ce qui suit est accepté.

```js
sel.add(opt);
```

### Insérer dans une collection existante

```js
const sel = document.getElementById("existingList");

const opt = document.createElement("option");
opt.value = "3";
opt.text = "Option: Value 3";

sel.add(opt, sel.options[1]);

/*
  Prend l'objet select existant suivant :

  <select id="existingList">
    <option value="1">Option : Valeur 1</option>
    <option value="2">Option : Valeur 2</option>
  </select>

  Et le modifie ainsi :

  <select id="existingList">
    <option value="1">Option : Valeur 1</option>
    <option value="3">Option : Valeur 3</option>
    <option value="2">Option : Valeur 2</option>
  </select>
*/
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
