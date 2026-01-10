---
title: "HTMLOutputElement : propriété value"
short-title: value
slug: Web/API/HTMLOutputElement/value
l10n:
  sourceCommit: 45eeb37ecd89511a64b756af9469189d7a59b95e
---

{{APIRef("HTML DOM")}}

La propriété **`value`** de l'interface {{DOMxRef("HTMLOutputElement")}} représente la valeur de l'élément HTML {{HTMLElement("output")}} sous forme d'une chaîne de caractères, ou une chaîne vide si aucune valeur n'est définie. Elle retourne ou définit le contenu de l'élément, de la même manière que la propriété {{DOMxRef("Node.textContent", "textContent")}}.

> [!NOTE]
> Lorsque la propriété `value` d'un élément `<output>` est définie, l'élément passe en mode valeur et la valeur par défaut n'est accessible que via la propriété {{DOMxRef("HTMLOutputElement.defaultValue")}}.

## Valeur

Une chaîne de caractères contenant le contenu de l'élément {{HTMLElement("output")}}.

## Exemples

```js
const outputElement = document.getElementById("log");
console.log(`value : ${outputElement.value}`);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("output")}}
- La propriété {{DOMxRef("HTMLOutputElement.defaultValue")}}
- La propriété {{DOMxRef("HTMLOutputElement.labels")}}
- La propriété {{DOMxRef("HTMLOutputElement.htmlFor")}}
