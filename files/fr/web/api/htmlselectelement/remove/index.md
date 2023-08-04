---
title: HTMLSelectElement.remove()
slug: Web/API/HTMLSelectElement/remove
---

{{ APIRef("HTML DOM") }}

La méthode **`HTMLSelectElement.remove()`** enlève l'option à l'index choisi dans la liste des options de cet objet select.

## Syntaxe

```js
collection.remove(index);
```

### Paramètre

- _index est_ un entier long définissant la position du {{ domxref("HTMLOptionElement") }} à enlever de la collection. Si rien n'est trouvé à cette position dans la liste, la méthode n'a aucun effet.

<!---->

## Exemple

```js
var sel = document.getElementById("maListe");
sel.remove(1);

/*
  Prend l'objet select existant suivant :

  <select id="maListe" name="maListe">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
    <option value="3">Option: Value 3</option>
  </select>

  Et le transforme en:

  <select id="maListe" name="maListe">
    <option value="1">Option: Value 1</option>
    <option value="3">Option: Value 3</option>
  </select>
*/
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ domxref("ChildNode.remove") }}, la méthode appelée quand remove est créé sans argument pour un {{ domxref("HTMLSelectElement") }}.
- {{domxref("HTMLSelectElement") }} qui possède cette méthode.
