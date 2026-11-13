---
title: "HTMLInputElement : propriété defaultValue"
short-title: defaultValue
slug: Web/API/HTMLInputElement/defaultValue
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`defaultValue`** de l'interface {{DOMxRef("HTMLInputElement")}} indique la valeur d'origine (ou par défaut) de l'élément HTML {{HTMLElement("input")}}. Elle reflète l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) de l'élément.

## Valeur

Une chaîne de caractères représentant la valeur par défaut, ou d'origine, de l'élément `<input>`.

## Exemple

Étant donné le HTML suivant&nbsp;:

```html
<label for="planet">Sur quelle planète êtes-vous né&nbsp;?</label>
<input id="planet" type="text" value="Azarath" />
```

Le code suivant donnera le même résultat, peu importe ce que l'utilisateur·ice saisit dans le champ texte.

```js
const inputElement = document.querySelector("#planet");
console.log(`Valeur d'origine : ${inputElement.defaultValue}`); // "Valeur d'origine : Azarath"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.value")}}
- La propriété {{DOMxRef("HTMLInputElement.type")}}
