---
title: "HTMLElement : propriété spellcheck"
short-title: spellcheck
slug: Web/API/HTMLElement/spellcheck
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`spellcheck`** de l'interface {{DOMxRef("HTMLElement")}} représente une valeur booléenne qui contrôle l'indication de [vérification orthographique](/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck). Elle est disponible sur tous les éléments HTML, bien qu'elle n'ait pas d'effet sur tous.

Elle reflète la valeur de l'attribut HTML universel [`spellcheck`](/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck).

## Valeur

Une valeur booléenne qui vaut `true` si l'orthographe et la grammaire du contenu textuel de l'élément peuvent être vérifiées, et `false` sinon.

## Exemples

L'exemple suivant montre comment contrôler l'indication de [vérification orthographique](/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck) via un script&nbsp;:

```html
<div>
  <span id="sc-label"
    >L'orthographe et la grammaire peuvent être vérifiées&nbsp;:
  </span>
  <span id="sc-element" contenteditable="true" spellcheck="true">test</span>
</div>
<input id="sc-controller" type="checkbox" checked />Activer la vérification
orthographique et grammaticale
```

```js
const label = document.getElementById("sc-label");
const element = document.getElementById("sc-element");
const controller = document.getElementById("sc-controller");

controller.addEventListener("change", (e) => {
  if (controller.checked) {
    element.spellcheck = true;
    label.innerText = "L'orthographe et la grammaire peuvent être vérifiées : ";
  } else {
    element.spellcheck = false;
    label.innerText =
      "L'orthographe et la grammaire ne peuvent pas être vérifiées : ";
  }
});
```

{{EmbedLiveSample('Exemples', 600, 200)}}

Notez que vous devez activer le paramètre du navigateur pour vérifier l'orthographe et la grammaire.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`spellcheck`](/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck)
