---
title: "HTMLOptionElement : propriété text"
short-title: text
slug: Web/API/HTMLOptionElement/text
l10n:
  sourceCommit: 9a1384feb06620002bbb01e8085c0d9f1e30df4f
---

{{APIRef("HTML DOM")}}

La propriété **`text`** de l'interface {{DOMxRef("HTMLOptionElement")}} représente le texte à l'intérieur de l'élément HTML {{HTMLElement("option")}}.
Cette propriété représente la même information que {{DOMxRef("Node.textContent")}}.

> [!NOTE]
> Si l'élément possède un `label`, le texte à l'intérieur de {{HTMLElement("option")}} n'est pas affiché visuellement. Dans ce cas, la propriété `text` peut toujours être utilisée pour définir le contenu, mais cela n'aura aucun effet visible.

## Valeur

Une chaîne de caractères.

## Exemple

```js
const optionElement = document.getElementById("exampleOption");
console.log(`Propriété text : ${optionElement.text}`);
optionElement.text = "Texte mis à jour";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("select")}}
- L'élément HTML {{HTMLElement("datalist")}}
- L'élément HTML {{HTMLElement("optgroup")}}
- La propriété {{DOMxRef("HTMLOptionElement.value")}}
- La propriété {{DOMxRef("HTMLOptionElement.label")}}
- La propriété {{DOMxRef("HTMLScriptElement.text")}}
- La propriété {{DOMxRef("HTMLAnchorElement.text")}}
