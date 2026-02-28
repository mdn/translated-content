---
title: "HTMLLabelElement : propriété htmlFor"
short-title: htmlFor
slug: Web/API/HTMLLabelElement/htmlFor
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`htmlFor`** de l'interface {{DOMxRef("HTMLLabelElement")}} reflète la valeur de la propriété de contenu [`for`](/fr/docs/Web/HTML/Reference/Elements/label#for). Cela signifie que cette propriété accessible par script est utilisée pour définir et lire la valeur de la propriété de contenu `for`, qui est l'identifiant de l'élément de contrôle associé au label.

## Valeur

Une chaîne de caractères qui contient l'identifiant de l'élément associé au contrôle.

> [!NOTE]
> Si cette propriété a une valeur, la propriété {{DOMxRef("HTMLLabelElement.control")}} doit référencer le même contrôle.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLLabelElement")}}
- La propriété {{DOMxRef("HTMLLabelElement.control")}}
- L'interface {{DOMxRef("HTMLElement")}}
- L'élément HTML {{HTMLElement("label")}}
- [Guide des formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
