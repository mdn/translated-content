---
title: "HTMLElement : méthode click()"
short-title: click()
slug: Web/API/HTMLElement/click
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

La méthode **`click()`** de l'interface {{DOMxRef("HTMLElement")}} simule un clic de souris sur un élément. Lorsqu'elle est appelée sur un élément, l'évènement {{DOMxRef("Element/click_event", "click")}} de l'élément est déclenché (sauf si l'attribut [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled) est défini).

## Syntaxe

```js-nolint
click()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Dans cet exemple, on simule un clic de souris lorsque le pointeur de la souris survole une case à cocher&nbsp;:

### HTML

```html
<form>
  <input type="checkbox" id="myCheck" />
</form>
```

### JavaScript

```js
const checkbox = document.getElementById("myCheck");

// Au survol de la souris, exécuter myFunction
checkbox.addEventListener("mouseover", () => {
  // Simuler un clic de souris
  checkbox.click();
});

checkbox.addEventListener("click", () => {
  console.log("un évènement click a eu lieu");
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les gestionnaires d'évènements associés&nbsp;:
  - {{DOMxRef("Element.click_event", "Element.onclick")}}
  - {{DOMxRef("Element.dblclick_event", "Element.ondblclick")}}
  - {{DOMxRef("Element.auxclick_event", "Element.onauxclick")}}
