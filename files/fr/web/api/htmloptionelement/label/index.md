---
title: "HTMLOptionElement : propriété label"
short-title: label
slug: Web/API/HTMLOptionElement/label
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`label`** de l'interface {{DOMxRef("HTMLOptionElement")}} représente le texte affiché pour une option dans un élément HTML {{HTMLElement("select")}} ou comme partie d'une liste de suggestions dans un élément HTML {{HTMLElement("datalist")}}. Elle reflète l'attribut HTML [`label`](/fr/docs/Web/HTML/Reference/Elements/option#label) de l'élément {{HTMLElement("option")}}.

Si l'attribut est omis ou une chaîne vide, la propriété `label` retourne le contenu {{DOMxRef("HTMLOptionElement.text", "text")}} de l'élément.

## Valeur

Une chaîne de caractères.

## Exemple

```js
const optionElement = document.getElementById("exampleOption");
console.log(`Label de l'option : ${optionElement.label}`);
optionElement.label = "Étiquette mise à jour";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLOptionElement.value")}}
- L'élément HTML {{HTMLElement("select")}}
- L'élément HTML {{HTMLElement("datalist")}}
- L'élément HTML {{HTMLElement("optgroup")}}
