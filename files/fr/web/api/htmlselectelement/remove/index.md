---
title: "HTMLSelectElement : méthode remove()"
short-title: remove()
slug: Web/API/HTMLSelectElement/remove
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("HTML DOM")}}

La méthode **`remove()`** de l'interface {{DOMxRef("HTMLSelectElement")}} enlève l'élément à l'indice défini de la collection d'options pour cet élément de sélection.

## Syntaxe

```js-nolint
remove(index)
```

### Paramètre

- `index`
  - : Un entier basé sur zéro correspondant à l'indice du {{DOMxRef("HTMLOptionElement")}} à enlever de la collection. Si l'indice n'est pas trouvé, la méthode n'a aucun effet.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemple

```html
<select id="maListe" name="maListe">
  <option value="1">Option : Valeur 1</option>
  <option value="2">Option : Valeur 2</option>
  <option value="3">Option : Valeur 3</option>
</select>
```

```js
let sel = document.getElementById("maListe");
sel.remove(1);
```

Le HTML résultant sera&nbsp;:

```html
<select id="maListe" name="maListe">
  <option value="1">Option : Valeur 1</option>
  <option value="3">Option : Valeur 3</option>
</select>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Element.remove")}}, la méthode appelée quand `remove` est appelé sans argument pour un objet {{DOMxRef("HTMLSelectElement")}}.
- {{DOMxRef("HTMLSelectElement")}} qui possède cette méthode.
