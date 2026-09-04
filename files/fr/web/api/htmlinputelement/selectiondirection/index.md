---
title: "HTMLInputElement : propriété selectionDirection"
short-title: selectionDirection
slug: Web/API/HTMLInputElement/selectionDirection
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}

La propriété **`selectionDirection`** de l'interface {{DOMxRef("HTMLInputElement")}} est une chaîne de caractères qui indique la direction dans laquelle l'utilisateur·ice sélectionne le texte.

## Valeur

Une chaîne de caractères. Elle peut avoir l'une des valeurs suivantes&nbsp;:

- `forward`
  - : L'utilisateur·ice étend la sélection vers la fin du texte de l'entrée.
- `backward`
  - : L'utilisateur·ice étend la sélection vers le début du texte de l'entrée.
- `none`
  - : L'utilisateur·ice n'étend pas la sélection.

> [!NOTE]
> Sur Windows, la direction indique la position du curseur par rapport à la sélection&nbsp;: une sélection `"forward"` a le curseur à la fin de la sélection et une sélection `"backward"` a le curseur au début de la sélection. Windows n'a pas de direction `"none"`.

> [!NOTE]
> Sur Mac, la direction indique quelle extrémité de la sélection est affectée lorsque l'utilisateur·ice ajuste la taille de la sélection en utilisant les touches fléchées avec le modificateur Shift&nbsp;: la direction `"forward"` signifie que l'extrémité de la sélection est modifiée, et la direction `"backward"` signifie que le début de la sélection est modifié. La direction `"none"` est la valeur par défaut sur Mac, elle indique qu'aucune direction particulière n'a encore été sélectionnée. L'utilisateur·ice définit la direction implicitement lors du premier ajustement de la sélection, en fonction de la touche fléchée directionnelle utilisée.

## Exemples

### HTML

```html
<label for="selectionDirection">Propriété selectionDirection</label>
<input type="text" id="selectionDirection" value="MDN" />
<p id="direction"></p>
```

### JavaScript

```js
const textSelectionDirection = document.querySelector("#selectionDirection");
const pConsole = document.querySelector("#direction");
pConsole.textContent = `Selection direction : ${textSelectionDirection.selectionDirection}`;
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTextAreaElement.selectionDirection")}}
- La propriété {{DOMxRef("HTMLInputElement.selectionStart")}}
- La propriété {{DOMxRef("HTMLInputElement.selectionEnd")}}
- La méthode {{DOMxRef("HTMLInputElement.setSelectionRange()")}}
